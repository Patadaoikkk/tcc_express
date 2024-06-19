const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Função para testar a conexão com o banco de dados
async function testConnection() {
  try {
    await pool.query('SELECT 1');
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1); // Sai do aplicativo se a conexão falhar
  }
}

// Testar a conexão com o banco de dados
testConnection();
process.on('exit', () => {
  pool.end();
});

// Exportar o pool
module.exports = pool;