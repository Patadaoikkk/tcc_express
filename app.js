const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require ("./routes/router")

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //middlewaressssss

app.set('models', path.join(__dirname, 'models')); //diretorio para visualização

app.use('/router', router);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});