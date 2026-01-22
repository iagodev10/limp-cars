const db = require('../database/db');

exports.obterAgendamento = (req, res) => {
    const { id } = req.params;
    db.get(`
        SELECT a.*, c.nome as nome_cliente, c.telefone as telefone_cliente 
        FROM agendamento a
        LEFT JOIN clientes c ON a.cliente_id = c.id
        WHERE a.id = ?
    `, [id], (err, row) => {
        if (err) {
            return res.status(500).json({
                error: "Erro ao buscar agendamento",
                message: err.message
            });
        }
        if (!row) return res.status(404).json({ error: "Agendamento não encontrado" });

        db.all(
            `SELECT asv.servico_id, asv.valor_cobrado, s.nome AS servico_nome, s.duracao_minutos
             FROM agendamento_servicos asv
             JOIN servicos s ON asv.servico_id = s.id
             WHERE asv.agendamento_id = ?`,
            [id],
            (err2, rows) => {
                if (err2) {
                    return res.status(500).json({
                        error: "Erro ao buscar serviços do agendamento",
                        message: err2.message
                    });
                }
                row.servicos = (rows || []).map(r => ({
                    servico_id: r.servico_id,
                    valor_cobrado: parseFloat(r.valor_cobrado),
                    nome: r.servico_nome,
                    duracao_minutos: r.duracao_minutos
                }));
                res.json(row);
            }
        );
    });
};

exports.listarAgendamentos = (req, res) => {
    db.all(
        `SELECT a.*, c.nome as nome_cliente, c.telefone as telefone_cliente 
         FROM agendamento a
         LEFT JOIN clientes c ON a.cliente_id = c.id
         ORDER BY a.criado_em DESC`,
        [],
        (err, agendamentos) => {
            if (err) {
                return res.status(500).json({
                    error: "Erro ao listar agendamentos",
                    message: err.message
                });
            }
            if (!agendamentos || agendamentos.length === 0) {
                return res.json([]);
            }
            const ids = agendamentos.map(a => a.id);
            const placeholders = ids.map(() => '?').join(',');
            const sql = `
                SELECT asv.agendamento_id, asv.servico_id, asv.valor_cobrado,
                       s.nome AS servico_nome, s.duracao_minutos
                FROM agendamento_servicos asv
                JOIN servicos s ON asv.servico_id = s.id
                WHERE asv.agendamento_id IN (${placeholders})
            `;
            db.all(sql, ids, (err2, rows) => {
                if (err2) {
                    return res.status(500).json({
                        error: "Erro ao listar serviços dos agendamentos",
                        message: err2.message
                    });
                }
                const byAg = {};
                for (const r of (rows || [])) {
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
            });
        }
    );
};

function resolverValorMap(servicos, cb) {
    const servicoIds = [...new Set(servicos.map(s => s.servico_id).filter(Boolean))];
    if (servicoIds.length === 0) return cb(null, {});
    const placeholders = servicoIds.map(() => '?').join(',');
    db.all(
        `SELECT id, valor FROM servicos WHERE id IN (${placeholders})`,
        servicoIds,
        (err, rows) => {
            if (err) return cb(err, null);
            const valorMap = Object.fromEntries((rows || []).map(r => [r.id, parseFloat(r.valor)]));
            cb(null, valorMap);
        }
    );
}

exports.criarAgendamento = (req, res) => {
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

    function inserirAgendamento(valorMap) {
        const sql = `
            INSERT INTO agendamento (cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status, observacoes)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        db.run(
            sql,
            [cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status || 'pendente', observacoes || null],
            function (err) {
                if (err) {
                    return res.status(500).json({
                        error: "Erro ao criar agendamento",
                        message: err.message
                    });
                }
                const agendamento_id = this.lastID;

                if (servicosList.length === 0) {
                    return res.status(201).json({
                        id: agendamento_id,
                        cliente_id,
                        data_atendimento,
                        hora_atendimento,
                        modelo_veiculo,
                        status: status || 'pendente',
                        observacoes: observacoes || null,
                        servicos: []
                    });
                }

                const resolved = servicosList.map(it => ({
                    servico_id: it.servico_id,
                    valor_cobrado: it.valor_cobrado != null ? Number(it.valor_cobrado) : valorMap[it.servico_id]
                }));
                const invalidos = resolved.filter(r => r.valor_cobrado == null || isNaN(r.valor_cobrado));
                if (invalidos.length) {
                    return res.status(400).json({
                        error: "Valor não definido",
                        message: "servico_id inexistente ou valor_cobrado ausente para: " + invalidos.map(i => i.servico_id).join(", ")
                    });
                }

                const values = resolved.flatMap(r => [agendamento_id, r.servico_id, r.valor_cobrado]);
                const ph = resolved.map(() => '(?,?,?)').join(',');
                const sqlAsv = `INSERT INTO agendamento_servicos (agendamento_id, servico_id, valor_cobrado) VALUES ${ph}`;

                db.run(sqlAsv, values, function (err2) {
                    if (err2) {
                        return res.status(500).json({
                            error: "Erro ao vincular serviços ao agendamento",
                            message: err2.message
                        });
                    }
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
                });
            }
        );
    }

    if (servicosList.length > 0) {
        resolverValorMap(servicosList, (err, valorMap) => {
            if (err) {
                return res.status(500).json({ error: "Erro ao buscar serviços", message: err.message });
            }
            inserirAgendamento(valorMap);
        });
    } else {
        inserirAgendamento({});
    }
};

exports.atualizarAgendamento = (req, res) => {
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

    function aplicarAtualizacao(valorMap) {
        const sql = `
            UPDATE agendamento
            SET cliente_id = ?, data_atendimento = ?, hora_atendimento = ?, modelo_veiculo = ?, status = ?, observacoes = ?
            WHERE id = ?
        `;
        db.run(
            sql,
            [cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status || 'pendente', observacoes || null, id],
            function (err) {
                if (err) {
                    return res.status(500).json({
                        error: "Erro ao atualizar agendamento",
                        message: err.message
                    });
                }
                if (this.changes === 0) {
                    return res.status(404).json({ error: "Agendamento não encontrado" });
                }

                db.run("DELETE FROM agendamento_servicos WHERE agendamento_id = ?", [id], function (errDel) {
                    if (errDel) {
                        return res.status(500).json({
                            error: "Erro ao atualizar serviços do agendamento",
                            message: errDel.message
                        });
                    }

                    if (servicosList.length === 0) {
                        return res.json({ atualizado: true, servicos: [] });
                    }

                    const resolved = servicosList.map(it => ({
                        servico_id: it.servico_id,
                        valor_cobrado: it.valor_cobrado != null ? Number(it.valor_cobrado) : valorMap[it.servico_id]
                    }));
                    const invalidos = resolved.filter(r => r.valor_cobrado == null || isNaN(r.valor_cobrado));
                    if (invalidos.length) {
                        return res.status(400).json({
                            error: "Valor não definido",
                            message: "servico_id inexistente ou valor_cobrado ausente"
                        });
                    }

                    const values = resolved.flatMap(r => [id, r.servico_id, r.valor_cobrado]);
                    const ph = resolved.map(() => '(?,?,?)').join(',');
                    const sqlAsv = `INSERT INTO agendamento_servicos (agendamento_id, servico_id, valor_cobrado) VALUES ${ph}`;

                    db.run(sqlAsv, values, function (errIns) {
                        if (errIns) {
                            return res.status(500).json({
                                error: "Erro ao vincular serviços ao agendamento",
                                message: errIns.message
                            });
                        }
                        res.json({ atualizado: true, servicos: resolved });
                    });
                });
            }
        );
    }

    if (servicosList.length > 0) {
        resolverValorMap(servicosList, (err, valorMap) => {
            if (err) {
                return res.status(500).json({ error: "Erro ao buscar serviços", message: err.message });
            }
            aplicarAtualizacao(valorMap);
        });
    } else {
        aplicarAtualizacao({});
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
