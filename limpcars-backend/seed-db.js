require('dotenv').config();
const db = require('./src/database/db');

console.log("Seeding database...");

async function seed() {
    try {
        // 1. Create Client
        const clientName = "Cliente Teste";
        const clientPhone = "34999998888";

        const clientRes = await db.query(
            `INSERT INTO clientes (nome, telefone) VALUES ($1, $2) RETURNING id`, 
            [clientName, clientPhone]
        );
        const clientId = clientRes.rows[0].id;
        console.log("Client created with ID:", clientId);

        // 2. Ensure Service exists
        let serviceId;
        const serviceRes = await db.query(`SELECT id FROM servicos LIMIT 1`);
        
        if (serviceRes.rowCount === 0) {
             // Create a dummy service if none
             const newServiceRes = await db.query(
                 `INSERT INTO servicos (nome, valor, duracao_minutos) VALUES ($1, $2, $3) RETURNING id`, 
                 ["Lavagem Simples", 50.00, 60]
             );
             serviceId = newServiceRes.rows[0].id;
             console.log("Service created with ID:", serviceId);
        } else {
            serviceId = serviceRes.rows[0].id;
            console.log("Using existing service ID:", serviceId);
        }

        // 3. Create Appointment
        const data = new Date().toISOString().split('T')[0];
        const hora = "14:00";
        
        const agRes = await db.query(
            `INSERT INTO agendamento (cliente_id, data_atendimento, hora_atendimento, modelo_veiculo, status, observacoes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`, 
            [clientId, data, hora, 'Fusca Azul', 'pendente', 'Teste de exibição de nome']
        );
        const agendamentoId = agRes.rows[0].id;
        console.log("Appointment created with ID:", agendamentoId);
        
        // 4. Link service
        await db.query(
            `INSERT INTO agendamento_servicos (agendamento_id, servico_id, valor_cobrado) VALUES ($1, $2, $3)`,
            [agendamentoId, serviceId, 50.00]
        );
        console.log("Seeding complete!");

    } catch (err) {
        console.error("Error seeding database:", err);
    } finally {
        await db.end();
    }
}

seed();
