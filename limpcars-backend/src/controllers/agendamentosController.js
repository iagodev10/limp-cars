const db = require('../database/db');

exports.obterAgendamento = async (req, res) => {
    const { id } = req.params;
    try {
        const agResult = await db.query(`
            SELECT a.*, c.nome as nome_cliente, c.telefone as telefone_cliente 
            FROM agendamento a
            LEFT JOIN clientes c ON a.cliente_id = c.id
            WHERE a.id = $1
        `, [id]);

        if (agResult.rowCount === 0) return res.status(404).json({ error: "Agendamento não encontrado" });
        const row = agResult.rows[0];

        const servResult = await db.query(
            `SELECT asv.servico_id, asv.valor_cobrado, s.nome AS servico_nome, s.duracao_minutos
             FROM agendamento_servicos asv
             JOIN servicos s ON asv.servico_id = s.id
             WHERE asv.agendamento_id = $1`,
            [id]
        );

        row.servicos = servResult.rows.map(r => ({
            servico_id: r.servico_id,
            valor_cobrado: parseFloat(r.valor_cobrado),
            nome: r.servico_nome,
            duracao_minutos: r.duracao_minutos
        }));
        res.json(row);
    } catch (err) {
        return res.status(500).json({
            error: "Erro ao buscar agendamento",
            message: err.message
        });
    }
};

exports.listarAgendamentos = async (req, res) => {
    try {
        const agResult = await db.query(
            `SELECT a.*, c.nome as nome_cliente, c.telefone as telefone_cliente 
             FROM agendamento a
             LEFT JOIN clientes c ON a.cliente_id = c.id
             ORDER BY a.criado_em DESC`
        );
        const agendamentos = agResult.rows;

        if (agendamentos.length === 0) {
            return res.json([]);
        }

        const ids = agendamentos.map(a => a.id);
        const servResult = await db.query(`
            SELECT asv.agendamento_id, asv.servico_id, asv.valor_cobrado,
                   s.nome AS servico_nome, s.duracao_minutos
            FROM agendamento_servicos asv
            JOIN servicos s ON asv.servico_id = s.id
            WHERE asv.agendamento_id = ANY($1::int[])
        `, [ids]);

        const byAg = {};
        for (const r of servResult.rows) {
            if (!byAg[r.agendamento_id]) byAg[r.agendamento_id] = [];
            byAg[r.agendamento_id].push({
                servico_id: r.servico_id,
                valor_cobrado: parseFloat(r.valor_cobrado),
                nome: r.servico_nome,
                duracao_minutos: r.duracao_minutos
            });
        }
        for (const a of agendamentos) {
            a.servicos = byAg[a.id] || [];
        }
        res.json(agendamentos);
    } catch (err) {
        return res.status(500).json({
            error: "Erro ao listar agendamentos",
            message: err.message
        });
    }
};

async function resolverValorMap(servicos) {
    const servicoIds = [...new Set(servicos.map(s => s.servico_id).filter(Boolean))];
    if (servicoIds.length === 0) return {};
    
    const result = await db.query(
        `SELECT id, valor FROM servicos WHERE id = ANY($1::int[])`,
        [servicoIds]
    );
    
    return Object.fromEntries(result.rows.map(r => [r.id, parseFloat(r.valor)]));
}

exports.criarAgendamento = async (req, res) => {
    const { cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status, observacoes, servicos } = req.body;
    const servicosList = Array.isArray(servicos) ? servicos : [];

    if (!cliente_id || !data_atendimento || !hora_atendimento || !modelo_veiculo) {
        return res.status(400).json({
            error: "Dados incompletos",
            message: "cliente_id, data_atendimento, hora_atendimento e modelo_veiculo são obrigatórios"
        });
    }

    if (servicosList.some(s => s.servico_id == null)) {
        return res.status(400).json({
            error: "Dados inválidos",
            message: "Cada item em servicos deve ter servico_id"
        });
    }

    const client = await db.connect();
    try {
        await client.query('BEGIN');

        let valorMap = {};
        if (servicosList.length > 0) {
             const servicoIds = [...new Set(servicosList.map(s => s.servico_id).filter(Boolean))];
             const vmRes = await client.query(`SELECT id, valor FROM servicos WHERE id = ANY($1::int[])`, [servicoIds]);
             valorMap = Object.fromEntries(vmRes.rows.map(r => [r.id, parseFloat(r.valor)]));
        }

        const insertAgSql = `
            INSERT INTO agendamento (cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status, observacoes)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id
        `;
        const agRes = await client.query(insertAgSql, [
            cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status || 'pendente', observacoes || null
        ]);
        const agendamento_id = agRes.rows[0].id;

        let resolved = [];
        if (servicosList.length > 0) {
            resolved = servicosList.map(it => ({
                servico_id: it.servico_id,
                valor_cobrado: it.valor_cobrado != null ? Number(it.valor_cobrado) : valorMap[it.servico_id]
            }));

            const invalidos = resolved.filter(r => r.valor_cobrado == null || isNaN(r.valor_cobrado));
            if (invalidos.length) {
                throw new Error("Valor não definido para servico_id: " + invalidos.map(i => i.servico_id).join(", "));
            }

            // Bulk insert
            const values = [];
            const parts = [];
            let paramIdx = 1;
            
            resolved.forEach(r => {
                parts.push(`($${paramIdx++}, $${paramIdx++}, $${paramIdx++})`);
                values.push(agendamento_id, r.servico_id, r.valor_cobrado);
            });
            
            const sqlAsv = `INSERT INTO agendamento_servicos (agendamento_id, servico_id, valor_cobrado) VALUES ${parts.join(',')}`;
            await client.query(sqlAsv, values);
        }

        await client.query('COMMIT');

        res.status(201).json({
            id: agendamento_id,
            cliente_id,
            data_atendimento,
            hora_atendimento,
            modelo_veiculo,
            status: status || 'pendente',
            observacoes: observacoes || null,
            servicos: resolved
        });

    } catch (err) {
        await client.query('ROLLBACK');
        return res.status(500).json({
            error: "Erro ao criar agendamento",
            message: err.message
        });
    } finally {
        client.release();
    }
};

exports.atualizarAgendamento = async (req, res) => {
    const { id } = req.params;
    const { cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status, observacoes, servicos } = req.body;

    if (!cliente_id || !data_atendimento || !hora_atendimento || !modelo_veiculo) {
        return res.status(400).json({
            error: "Dados incompletos",
            message: "cliente_id, data_atendimento, hora_atendimento e modelo_veiculo são obrigatórios"
        });
    }

    const servicosList = Array.isArray(servicos) ? servicos : [];
    if (servicosList.some(s => s.servico_id == null)) {
        return res.status(400).json({
            error: "Dados inválidos",
            message: "Cada item em servicos deve ter servico_id"
        });
    }

    const client = await db.connect();
    try {
        await client.query('BEGIN');

        const updateSql = `
            UPDATE agendamento
            SET cliente_id = $1, data_atendimento = $2, hora_atendimento = $3, modelo_veiculo = $4, status = $5, observacoes = $6
            WHERE id = $7
        `;
        const upRes = await client.query(updateSql, [
            cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status || 'pendente', observacoes || null, id
        ]);

        if (upRes.rowCount === 0) {
            await client.query('ROLLBACK');
            return res.status(404).json({ error: "Agendamento não encontrado" });
        }

        // Atualizar serviços: deletar e inserir novos
        await client.query("DELETE FROM agendamento_servicos WHERE agendamento_id = $1", [id]);

        let resolved = [];
        if (servicosList.length > 0) {
             const servicoIds = [...new Set(servicosList.map(s => s.servico_id).filter(Boolean))];
             const vmRes = await client.query(`SELECT id, valor FROM servicos WHERE id = ANY($1::int[])`, [servicoIds]);
             const valorMap = Object.fromEntries(vmRes.rows.map(r => [r.id, parseFloat(r.valor)]));

            resolved = servicosList.map(it => ({
                servico_id: it.servico_id,
                valor_cobrado: it.valor_cobrado != null ? Number(it.valor_cobrado) : valorMap[it.servico_id]
            }));

            const invalidos = resolved.filter(r => r.valor_cobrado == null || isNaN(r.valor_cobrado));
            if (invalidos.length) {
                throw new Error("Valor não definido para servico_id: " + invalidos.map(i => i.servico_id).join(", "));
            }

            const values = [];
            const parts = [];
            let paramIdx = 1;
            resolved.forEach(r => {
                parts.push(`($${paramIdx++}, $${paramIdx++}, $${paramIdx++})`);
                values.push(id, r.servico_id, r.valor_cobrado);
            });
            
            const sqlAsv = `INSERT INTO agendamento_servicos (agendamento_id, servico_id, valor_cobrado) VALUES ${parts.join(',')}`;
            await client.query(sqlAsv, values);
        }

        await client.query('COMMIT');
        res.json({ atualizado: true, servicos: resolved });

    } catch (err) {
        await client.query('ROLLBACK');
        return res.status(500).json({
            error: "Erro ao atualizar agendamento",
            message: err.message
        });
    } finally {
        client.release();
    }
};

exports.deletarAgendamento = (req, res) => {
    const { id } = req.params;

    db.run("DELETE FROM agendamento_servicos WHERE agendamento_id = ?", [id], function (errDel) {
        if (errDel) {
            return res.status(500).json({
                error: "Erro ao remover serviços do agendamento",
                message: errDel.message
            });
        }
        db.run("DELETE FROM agendamento WHERE id = ?", [id], function (err) {
            if (err) {
                return res.status(500).json({
                    error: "Erro ao deletar agendamento",
                    message: err.message
                });
            }
            res.json({ removido: this.changes });
        });
    });
};
