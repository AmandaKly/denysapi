const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

const Item = sequelize.define('Item', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Sincronizando o modelo com o banco de dados (cria a tabela se ainda não existir)
Item.sync()
  .then(() => {
    console.log('Modelo sincronizado com o banco de dados');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar modelo:', err);
  });

module.exports = Item;
