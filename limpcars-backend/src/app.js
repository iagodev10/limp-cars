// Carrega variáveis de ambiente primeiro
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./database/db');

const app = express();

// Middlewares
app.use(express.json());

app.use(cors({
  origin: [
    'http://localhost:5173',       // desenvolvimento
    'https://limpcars.netlify.app' // produção
  ],
}));

// Arquivos estáticos do backend (uploads)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rotas
const servicosRoutes = require('./routes/servicos.routes');
app.use('/api/servicos', servicosRoutes);

const clientesRoutes = require('./routes/clientes.routes');
app.use('/api/clientes', clientesRoutes);

const agendamentosRoutes = require('./routes/agendamentos.routes');
app.use('/api/agendamentos', agendamentosRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// Rota de health check (opcional, mas recomendada)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
