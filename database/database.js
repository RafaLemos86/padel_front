// importar sequelize
const Sequelize = require('sequelize');

// conectando / Nome banco / user / senha
const connection = new Sequelize('padel', 'root', '0000', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    timezone: '-03:00'
});

module.exports = connection