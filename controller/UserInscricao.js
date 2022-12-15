// importando sequelize 
const Sequelize = require('sequelize');
// importando conexao com o banco
const connection = require('../database/database');

// criando tabela no banco de dados
// allowNull significa not NULL
const Inscricao = connection.define('inscricao', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
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

    complemento: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// sempre que alterar relacionamentos nas tabelas,
// fazer a sincronização no banco de dados nos Models alterados

// executar uma vez e excluir

// Inscricao.sync({
//     force: true
// });

// exportando tabela
module.exports = Inscricao;

// inscricaos