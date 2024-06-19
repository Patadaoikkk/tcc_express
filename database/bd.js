
const create_acess_tokens_table = require('./create_acess_tokens_table');
const create_psiches__user = require('./create_psiches_user');
const create_users_table = require('./create_users_table');
const Sequelize = require('sequelize');


const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres' // or 'postgres' or 'qlite'
});

// Função para testar a conexão com o banco de dados
async function testConnection() {
  try {
    await sequelize.query('SELECT 1');
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1); // Sai do aplicativo se a conexão falhar
  }
}

// Testar a conexão com o banco de dados
testConnection();
process.on('exit', () => {
  sequelize.end();
});

// Exportar o sequelize
module.exports = {sequelize, create_acess_tokens_table,create_psiches__user,create_users_table};