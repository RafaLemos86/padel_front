// importando sequelize 
const Sequelize = require('sequelize');
// importando conexao com o banco
const connection = require('../database/database');

// criando tabela no banco de dados
// allowNull significa not NULL
const Torneio = connection.define('torneio', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duplas: {
        type: Sequelize.STRING,
        allowNull: false
    },

});

// force true: recriar a tabela a cada vez que o codigo rodar
// force false: se a tabela ja existir, cria, se nao, nao cria
// Torneio.sync({
//     force: false
// });

module.exports = Torneio;