const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const connectionString =
  process.env.DATABASE_URL ||
  'postgres://postgres:postgres@localhost:5432/limpcars'

const ssl =
  process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false

const pool = new Pool({
  connectionString,
  ssl,
})

async function ensureSchema() {
  const schemaPath = path.resolve(__dirname, 'schema.sql')
  if (!fs.existsSync(schemaPath)) return
  const sql = fs.readFileSync(schemaPath, 'utf8')
  await pool.query(sql)

  const colCheck = await pool.query(
    "SELECT 1 FROM information_schema.columns WHERE table_name = 'agendamento' AND column_name = 'modelo_veiculo'"
  )
  if (colCheck.rowCount === 0) {
    await pool.query(
      "ALTER TABLE agendamento ADD COLUMN modelo_veiculo VARCHAR(100) NOT NULL DEFAULT 'Desconhecido'"
    )
    await pool.query(
      "ALTER TABLE agendamento ALTER COLUMN modelo_veiculo DROP DEFAULT"
    )
    console.log('✓ Migração: campo modelo_veiculo adicionado à tabela agendamento')
  }
}

ensureSchema()
  .then(() => console.log('Banco inicializado com sucesso'))
  .catch((err) => console.error('Erro ao inicializar banco:', err.message))

module.exports = {
  query: (text, params) => pool.query(text, params),
  connect: () => pool.connect(),
  end: () => pool.end(),
}
