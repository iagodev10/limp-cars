const db = require('../database/db');

exports.listarClientes = (req, res) => {
    db.all(
        "select * from clientes order by criado_em desc",
        [],
        (err, rows) => {
            if (err) {
                return res.status(500).json({
                    error: "Erro ao listar clientes",
                    message: err.message
                })
            }
            res.json(rows)
        }
    )
}

exports.criarCliente = (req, res) => {
    const { nome, telefone } = req.body;

    if (!nome || !telefone) {
        return res.status(400).json({
            error: "Dados incompletos",
            message: "Nome e telefone são obrigatórios"
        })
    }

    const sql = `
        insert into clientes (nome, telefone)
        values (?, ?)
    `;

    db.run(sql, [nome, telefone], function (err) {
        if (err) {
            return res.status(500).json({
                error: "Erro ao criar cliente",
                message: err.message
            })
        }

        res.status(201).json({
            id: this.lastID,
            nome,
            telefone
        })
    })
}

exports.atualizarCliente = (req, res) => {
    const { id } = req.params
    const { nome, telefone } = req.body

    if (!nome || !telefone) {
        return res.status(400).json({
            error: "Dados incompletos",
            message: "Nome e telefone são obrigatórios"
        })
    }

    const sql = `
        update clientes
        set nome = ?, telefone = ?
        where id = ?
    `;

    db.run(sql, [nome, telefone, id], function (err) {
        if (err) {
            return res.status(500).json({
                error: "Erro ao atualizar cliente",
                message: err.message
            })
        }

        res.json({
            atualizado: this.changes
        })
    })
}

exports.deletarCliente = (req, res) =>{
    const {id} = req.params

    db.run(
        "delete from clientes where id = ?",
        [id],
        function (err) {
            if (err) {
                return res.status(500).json({
                    error: "Erro ao deletar cliente",
                    message: err.message
                })
            }

            res.json({
                removido: this.changes
            })
        }
    )
}
