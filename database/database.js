const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','Oliveira201&',{
  host:'localhost',
  dialect:'mysql',
  logging:false
});

module.exports = connection;