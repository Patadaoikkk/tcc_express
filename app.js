const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require ('./routes/router');
const sequelize = require('./database/bd')
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.DB_USER);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //middlewaressssss

app.set('models', path.join(__dirname, 'models')); //diretorio para visualização

app.use(router);

sequelize.query('SELECT * FROM users', (err, result) => { //verificar usuarios no banco postgree
  if (err) {
    console.error(err);
  } else {
    console.log(result.rows);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});