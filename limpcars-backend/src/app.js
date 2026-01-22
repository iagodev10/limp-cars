// Carrega variáveis de ambiente primeiro
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

require('./database/db')

const app = express();

app.use(express.json());

app.use(cors());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

const servicosRoutes = require('./routes/servicos.routes');
app.use('/api/servicos', servicosRoutes);

const clientesRoutes = require('./routes/clientes.routes')
app.use('/api/clientes', clientesRoutes)

const agendamentosRoutes = require('./routes/agendamentos.routes')
app.use('/api/agendamentos', agendamentosRoutes)

const authRoutes = require('./routes/auth.routes')
app.use('/api/auth', authRoutes)

// Servir arquivos estáticos do frontend
// Tenta diferentes caminhos possíveis (local e produção)
const possiblePaths = [
  path.resolve(__dirname, '..', '..', 'limpcars-frontend', 'dist'),
  path.resolve(__dirname, '..', 'dist'),
  path.resolve(__dirname, 'dist'),
];

let frontendDistPath = null;
for (const distPath of possiblePaths) {
  try {
    const fs = require('fs');
    if (fs.existsSync(distPath) && fs.existsSync(path.join(distPath, 'index.html'))) {
      frontendDistPath = distPath;
      break;
    }
  } catch (e) {
    // Continua tentando outros caminhos
  }
}

if (frontendDistPath) {
  console.log(`Servindo frontend de: ${frontendDistPath}`);
  app.use(express.static(frontendDistPath));

  // Fallback para React Router: todas as rotas que não são da API retornam o index.html
  app.get('*', (req, res) => {
    // Ignora rotas da API
    if (req.path.startsWith('/api/')) {
      return res.status(404).json({ error: 'Rota da API não encontrada' });
    }
    // Serve o index.html para todas as outras rotas (SPA)
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  });
} else {
  console.warn('⚠️  Diretório dist do frontend não encontrado. O frontend não será servido.');
}

module.exports = app;

