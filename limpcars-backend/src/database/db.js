const sqlite3 = require('sqlite3').verbose()
const fs = require('fs')
const path = require('path')

const dbPath = path.resolve(__dirname, 'limpcars.db');

const schemaPath = path.resolve(__dirname, 'schema.sql');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Erro ao abrir o banco", err.message)
    }
    else {
        console.log("Banco conectado");
        db.run("PRAGMA foreign_keys = ON", (pErr) => {
            if (pErr) console.warn("Aviso: não foi possível ativar foreign_keys:", pErr.message);
            inicializarBanco();
        });
    }
})


function inicializarBanco(){
    const schema = fs.readFileSync(schemaPath, 'utf-8')

    db.exec(schema, (err) =>{
        if(err){
            console.error("Erro ao criar tabelas", err.message)
        }
        else{
            console.log("Banco inicializado com sucesso")
            // Executar migração para adicionar modelo_veiculo se necessário
            aplicarMigracoes();
        }
    })
}

function aplicarMigracoes(){
    // Migração: adicionar campo modelo_veiculo se não existir
    db.all("PRAGMA table_info(agendamento)", (err, cols) => {
        if (err) {
            console.warn("Aviso: não foi possível verificar estrutura da tabela agendamento:", err.message);
            return;
        }
        
        const hasModeloVeiculo = cols && cols.some(col => col.name === 'modelo_veiculo');
        if (!hasModeloVeiculo) {
            db.run("ALTER TABLE agendamento ADD COLUMN modelo_veiculo varchar(100)", (alterErr) => {
                if (alterErr) {
                    console.warn("Aviso: erro ao adicionar campo modelo_veiculo:", alterErr.message);
                } else {
                    console.log("✓ Migração: campo modelo_veiculo adicionado à tabela agendamento");
                }
            });
        }
    });
}

module.exports = db;
