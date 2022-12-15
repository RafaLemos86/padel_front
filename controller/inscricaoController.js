// importando express
const express = require('express');
// importando objeto para controlar as rotas
const router = express.Router();
// importando model de categoria
const Inscricao = require('./UserInscricao')


// rota para salvar os dados do formulario de categorias
router.post('/inscricao/save', (req, res) => {
    var nome = req.body.nome
    var sobrenome = req.body.sobrenome
    var email = req.body.email
    var telefone = req.body.telefone
    var endereco = req.body.endereco
    var complemento = req.body.complemento



    if (nome != undefined) {
        // salvando titulo no banco de dados
        Inscricao.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            complemento: complemento
        }).then(() => {
            res.redirect('/')
        })
    } else {
        res.redirect('/inscricao');
    }
});


module.exports = router
