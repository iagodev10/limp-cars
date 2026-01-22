const db = require('../database/db')

exports.listar = async (req, res) => {
    try {
        const result = await db.query("select * from servicos where ativo = true");
        res.json(result.rows);
    } catch (err) {
        return res.status(500).json({ erro: err && err.message ? err.message : 'Erro desconhecido' });
    }
};

exports.criar = async (req, res) => {
    const { nome, descricao, valor, imagem_url, duracao_minutos } = req.body;

    if (!nome || !valor || !duracao_minutos) {
        return res.status(400).json({ erro: "Campos obrigatórios faltando" })
    }

    const sql = `
        insert into servicos (nome, descricao, valor, imagem_url, duracao_minutos)
        values ($1, $2, $3, $4, $5)
        RETURNING id
    `;

    try {
        const result = await db.query(sql, [nome, descricao, valor, imagem_url, duracao_minutos]);
        res.status(201).json({ id: result.rows[0].id });
    } catch (err) {
        return res.status(500).json({ erro: err && err.message ? err.message : 'Erro desconhecido' });
    }
}

exports.atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, valor, imagem_url, duracao_minutos } = req.body;

    if (!nome || !valor || !duracao_minutos) {
        return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
    }

    const sql = `
        UPDATE servicos
        SET nome = $1, descricao = $2, valor = $3, imagem_url = $4, duracao_minutos = $5
        WHERE id = $6
    `;

    try {
        const result = await db.query(sql, [nome, descricao, valor, imagem_url, duracao_minutos, id]);
        
        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Serviço não encontrado' });
        }

        res.json({ atualizado: true });
    } catch (err) {
        return res.status(500).json({ erro: err && err.message ? err.message : 'Erro desconhecido' });
    }
};

exports.alterarStatus = async (req, res) => {
    const { id } = req.params;
    const { ativo } = req.body;

    if (ativo === undefined) {
        return res.status(400).json({ erro: 'Campo ativo é obrigatório' });
    }

    try {
        const result = await db.query(
            'UPDATE servicos SET ativo = $1 WHERE id = $2',
            [ativo, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ erro: 'Serviço não encontrado' });
        }

        res.json({ status_alterado: true });
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
};



