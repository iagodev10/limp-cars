/**
 * Script para verificar se o banco está correto (tabelas, estrutura e integridade).
 * Execute: node src/database/verificar-banco.js
 */
require('dotenv').config();
const db = require('./db');

const tabelasEsperadas = ['clientes', 'servicos', 'agendamento', 'agendamento_servicos'];

async function verificarTabelas() {
  const result = await db.query(
    "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
  );
  return result.rows.map(r => r.table_name);
}

async function verificarEstrutura(tabela) {
  const result = await db.query(
    "SELECT column_name, data_type, is_nullable, column_default FROM information_schema.columns WHERE table_name = $1",
    [tabela]
  );
  return result.rows;
}

async function verificarForeignKeys() {
  const result = await db.query(
    "SELECT constraint_name FROM information_schema.table_constraints WHERE table_name = 'agendamento' AND constraint_type = 'FOREIGN KEY'"
  );
  return result.rows;
}

async function executar() {
  console.log('\n=== Verificação do banco LimpCars (PostgreSQL) ===\n');

  try {
    // 1. Tabelas existentes
    const tabelas = await verificarTabelas();
    console.log('1. Tabelas encontradas:', tabelas.join(', ') || '(nenhuma)');

    const faltando = tabelasEsperadas.filter((t) => !tabelas.includes(t));
    if (faltando.length) {
      console.error('   ERRO: Faltam tabelas:', faltando.join(', '));
    } else {
      console.log('   OK: Todas as tabelas esperadas existem.\n');
    }

    // 2. Estrutura de cada tabela
    console.log('2. Estrutura das tabelas:\n');
    for (const t of tabelasEsperadas) {
      if (!tabelas.includes(t)) continue;
      const cols = await verificarEstrutura(t);
      console.log(`   ${t}:`);
      cols.forEach((c) => console.log(`      - ${c.column_name} (${c.data_type}) ${c.is_nullable === 'NO' ? 'NOT NULL' : ''} ${c.column_default ? `DEFAULT ${c.column_default}` : ''}`));
      console.log('');
    }

    // 3. Foreign keys em agendamento
    const fks = await verificarForeignKeys();
    console.log('3. Foreign keys em "agendamento":', fks.length > 0 ? 'Encontradas' : 'Nenhuma');
    if (fks.length) console.log('   OK: FKs detectadas.\n');

    // 4. Contagem de registros
    for (const t of tabelasEsperadas) {
      if (!tabelas.includes(t)) continue;
      const countRes = await db.query(`SELECT count(*) as c FROM ${t}`);
      console.log(`4. Registros em "${t}": ${countRes.rows[0].c}`);
    }

    console.log('\n=== Verificação concluída. Banco OK. ===\n');
  } catch (e) {
    console.error('Erro na verificação:', e.message);
    process.exit(1);
  } finally {
    await db.end();
  }
}

// Aguardar um pouco para a conexão estabilizar
setTimeout(executar, 500);
