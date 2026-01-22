require('./database/postgres');


const app = require('./app');

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
