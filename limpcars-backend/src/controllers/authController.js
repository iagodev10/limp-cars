const db = require('../database/db');

exports.login = (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            error: "Dados incompletos",
            message: "Email e senha são obrigatórios"
        });
    }

    // Busca credenciais das variáveis de ambiente
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@limpcars.com';
    const ADMIN_SENHA = process.env.ADMIN_SENHA || '123456';

    // Valida credenciais
    if (email === ADMIN_EMAIL && senha === ADMIN_SENHA) {
        // Em produção, aqui você geraria um token JWT
        // Por enquanto, retornamos apenas sucesso
        res.json({
            success: true,
            message: "Login realizado com sucesso"
        });
    } else {
        res.status(401).json({
            error: "Credenciais inválidas",
            message: "Email ou senha incorretos"
        });
    }
};
