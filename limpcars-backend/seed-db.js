const db = require('./src/database/db');

console.log("Seeding database...");

// 1. Create Client
const clientName = "Cliente Teste";
const clientPhone = "34999998888";

db.run(`INSERT INTO clientes (nome, telefone) VALUES (?, ?)`, [clientName, clientPhone], function(err) {
    if (err) return console.error("Error creating client", err);
    const clientId = this.lastID;
    console.log("Client created with ID:", clientId);

    // 2. Ensure Service exists (or pick one)
    db.get(`SELECT id FROM servicos LIMIT 1`, [], (err, row) => {
        if (err) return console.error("Error checking services", err);
        
        let serviceId;
        if (!row) {
             // Create a dummy service if none
             db.run(`INSERT INTO servicos (nome, valor, duracao_minutos) VALUES (?, ?, ?)`, ["Lavagem Simples", 50.00, 60], function(err) {
                 if (err) return console.error("Error creating service", err);
                 serviceId = this.lastID;
                 createAppointment(clientId, serviceId);
             });
        } else {
            serviceId = row.id;
            createAppointment(clientId, serviceId);
        }
    });
});

function createAppointment(clientId, serviceId) {
    const data = new Date().toISOString().split('T')[0];
    const hora = "14:00";
    
    db.run(`INSERT INTO agendamento (cliente_id, data_atendimento, hora_atendimento, status, observacoes) VALUES (?, ?, ?, ?, ?)`, 
        [clientId, data, hora, 'pendente', 'Teste de exibição de nome'], function(err) {
            if (err) return console.error("Error creating appointment", err);
            const agendamentoId = this.lastID;
            console.log("Appointment created with ID:", agendamentoId);
            
            // Link service
            db.run(`INSERT INTO agendamento_servicos (agendamento_id, servico_id, valor_cobrado) VALUES (?, ?, ?)`,
                [agendamentoId, serviceId, 50.00], function(err) {
                    if (err) console.error("Error linking service", err);
                    else console.log("Seeding complete!");
                });
    });
}
