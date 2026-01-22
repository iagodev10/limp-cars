const db = require('../database/db');

exports.listarClientes = async (req, res) => {
    try {
        const result = await db.query("select * from clientes order by criado_em desc");
        res.json(result.rows);
    } catch (err) {
        return res.status(500).json({
            error: "Erro ao listar clientes",
            message: err.message
        });
    }
}

exports.criarCliente = async (req, res) => {
    const { nome, telefone } = req.body;

    if (!nome || !telefone) {
        return res.status(400).json({
            error: "Dados incompletos",
            message: "Nome e telefone são obrigatórios"
        })
    }

    const sql = `
        insert into clientes (nome, telefone)
        values ($1, $2)
        RETURNING id
    `;

    try {
        const result = await db.query(sql, [nome, telefone]);
        res.status(201).json({
            id: result.rows[0].id,
            nome,
            telefone
        });
    } catch (err) {
        return res.status(500).json({
            error: "Erro ao criar cliente",
            message: err.message
        });
    }
}

exports.atualizarCliente = async (req, res) => {
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
        set nome = $1, telefone = $2
        where id = $3
    `;

    try {
        const result = await db.query(sql, [nome, telefone, id]);
        res.json({
            atualizado: result.rowCount
        });
    } catch (err) {
        return res.status(500).json({
            error: "Erro ao atualizar cliente",
            message: err.message
        });
    }
}

exports.deletarCliente = async (req, res) =>{
    const {id} = req.params

    try {
        const result = await db.query("delete from clientes where id = $1", [id]);
        res.json({
            removido: result.rowCount
        });
    } catch (err) {
        return res.status(500).json({
            error: "Erro ao deletar cliente",
            message: err.message
        });
    }
}
