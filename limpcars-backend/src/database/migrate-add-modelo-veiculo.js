const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, 'limpcars.db');

if (!fs.existsSync(dbPath)) {
    console.error('Banco de dados não encontrado em:', dbPath);
    process.exit(1);
}

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err.message);
        process.exit(1);
    }
    console.log('Conectado ao banco de dados');
});

// Migração para adicionar o campo modelo_veiculo na tabela agendamento
db.run(`
    ALTER TABLE agendamento 
    ADD COLUMN modelo_veiculo varchar(100)
`, (err) => {
    if (err) {
        // Se o erro for porque a coluna já existe, ignora
        if (err.message.includes('duplicate column') || 
            err.message.includes('already exists') ||
            err.message.includes('no such column')) {
            console.log('Campo modelo_veiculo já existe ou erro na verificação');
            // Verifica se a coluna existe consultando a estrutura
            db.all("PRAGMA table_info(agendamento)", (err2, cols) => {
                if (!err2) {
                    const hasColumn = cols.some(col => col.name === 'modelo_veiculo');
                    if (hasColumn) {
                        console.log('✓ Campo modelo_veiculo já existe na tabela agendamento');
                    } else {
                        console.log('⚠ Campo modelo_veiculo não encontrado, mas erro ao adicionar. Pode ser necessário adicionar manualmente.');
                    }
                }
                db.close();
            });
        } else {
            console.error('Erro ao adicionar campo modelo_veiculo:', err.message);
            db.close();
        }
    } else {
        console.log('✓ Campo modelo_veiculo adicionado com sucesso!');
        db.close();
    }
});
