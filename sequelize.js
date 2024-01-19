const { Sequelize } = require('sequelize');
// O correto sempre será utilizar um arquivo .env, porém, por motivos maiores foi decidido manter as variáveis dessa forma.
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'projetokubernetes.postgres.database.azure.com',
  username: 'atv',
  password: 'Atividade123!',
  database: 'produtosdevelop',
  port: 5432,
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
