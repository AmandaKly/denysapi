const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  logging: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // Use apenas se estiver enfrentando problemas de certificado
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
