const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'postgres', // Fornecendo o dialeto de forma explícita
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  logging: process.env.DB_LOGGING === 'true',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true',
    },
  },
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
}


module.exports = { sequelize, testConnection };
