const Sequelize = require('sequelize');

const sequelize = new Sequelize('shiva','root','12345',{
  dialect:'mysql',
  host:'localhost'
});

module.exports = sequelize;