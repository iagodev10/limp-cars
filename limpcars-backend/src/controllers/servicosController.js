const db = require('../database/db')

exports.listar = (req, res) => {
    db.all(
        "select * from servicos where ativo = 1",
        [],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }
            res.json(rows)
        }
    );
};

exports.criar = (req, res) => {
    const { nome, descricao, valor, imagem_url, duracao_minutos } = req.body;

    if (!nome || !valor || !duracao_minutos) {
        return res.status(400).json({ erro: "Campos obrigatórios faltando" })
    }

    const sql = `
        insert into servicos (nome, descricao, valor, imagem_url, duracao_minutos)
        values (?, ?, ?, ?, ?)
    `;

    db.run(sql,
        [nome, descricao, valor, imagem_url, duracao_minutos],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message })
            }
            res.status(201).json({ id: this.lastID })
        }
    )

}

exports.atualizar = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, valor, imagem_url, duracao_minutos } = req.body;

    if (!nome || !valor || !duracao_minutos) {
        return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
    }

    const sql = `
        UPDATE servicos
        SET nome = ?, descricao = ?, valor = ?, imagem_url = ?, duracao_minutos = ?
        WHERE id = ?
    `;

    db.run(
        sql,
        [nome, descricao, valor, imagem_url, duracao_minutos, id],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ erro: 'Serviço não encontrado' });
            }

            res.json({ atualizado: true });
        }
    );
};



exports.alterarStatus = (req, res) => {
    const { id } = req.params;
    const { ativo } = req.body;

    if (ativo === undefined) {
        return res.status(400).json({ erro: 'Campo ativo é obrigatório' });
    }

    db.run(
        'UPDATE servicos SET ativo = ? WHERE id = ?',
        [ativo, id],
        function (err) {
            if (err) {
                return res.status(500).json({ erro: err.message });
            }

            if (this.changes === 0) {
                return res.status(404).json({ erro: 'Serviço não encontrado' });
            }

            res.json({ status_alterado: true });
        }
    );
};



