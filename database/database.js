const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','O01&',{
  host:'localhost',
  dialect:'mysql',
  logging:false
});

module.exports = connection;
