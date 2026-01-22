const db = require('./src/database/db');

console.log("Checking database...");

db.all(`
    SELECT a.id, a.cliente_id, a.data_atendimento, c.nome as nome_cliente, c.telefone as telefone_cliente 
    FROM agendamento a
    LEFT JOIN clientes c ON a.cliente_id = c.id
    ORDER BY a.criado_em DESC
`, [], (err, rows) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Found", rows.length, "appointments");
        rows.forEach(row => {
            console.log(`ID: ${row.id}, ClienteID: ${row.cliente_id}, Nome: ${row.nome_cliente}, Tel: ${row.telefone_cliente}`);
        });
    }
});
