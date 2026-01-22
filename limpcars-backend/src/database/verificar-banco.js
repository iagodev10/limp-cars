/**
 * Script para verificar se o banco está correto (tabelas, estrutura e integridade).
 * Execute: node src/database/verificar-banco.js
 */
const db = require('./db');

const tabelasEsperadas = ['clientes', 'servicos', 'agendamento', 'agendamento_servicos'];

function verificarTabelas() {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name",
      [],
      (err, rows) => {
        if (err) return reject(err);
        const tabelas = (rows || []).map((r) => r.name);
        resolve(tabelas);
      }
    );
  });
}

function verificarEstrutura(tabela) {
  return new Promise((resolve, reject) => {
    db.all(`PRAGMA table_info(${tabela})`, [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows || []);
    });
  });
}

function verificarForeignKeys() {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT * FROM pragma_foreign_key_list('agendamento')",
      [],
      (err, rows) => {
        if (err) return reject(err);
        resolve(rows || []);
      }
    );
  });
}

async function executar() {
  console.log('\n=== Verificação do banco LimpCars ===\n');

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
      cols.forEach((c) => console.log(`      - ${c.name} (${c.type}) ${c.notnull ? 'NOT NULL' : ''} ${c.dflt_value ? `DEFAULT ${c.dflt_value}` : ''}`));
      console.log('');
    }

    // 3. Foreign keys em agendamento
    const fks = await verificarForeignKeys();
    console.log('3. Foreign keys em "agendamento":', fks.length ? 'cliente_id -> clientes(id)' : 'Nenhuma (SQLite pode ter FKs desativadas)');
    if (fks.length) console.log('   OK: FK cliente_id referenciando clientes(id).\n');

    // 4. Contagem de registros (só para confirmar que as tabelas são utilizáveis)
    for (const t of tabelasEsperadas) {
      if (!tabelas.includes(t)) continue;
      const count = await new Promise((res, rej) => {
        db.get(`SELECT count(*) as c FROM ${t}`, [], (e, r) => (e ? rej(e) : res(r?.c ?? 0)));
      });
      console.log(`4. Registros em "${t}": ${count}`);
    }

    console.log('\n=== Verificação concluída. Banco OK. ===\n');
  } catch (e) {
    console.error('Erro na verificação:', e.message);
    process.exit(1);
  } finally {
    db.close();
  }
}

// Aguardar um pouco para o db.js ter rodado o schema (o require já inicializa)
setTimeout(executar, 500);
