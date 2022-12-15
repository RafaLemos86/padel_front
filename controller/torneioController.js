// importando express
const express = require('express');
// importando objeto para controlar as rotas
const router = express.Router();
// importando model de categoria
const Torneio = require('./Usertorneio')


// rota para salvar os dados do formulario de categorias
router.post('/adm/save', (req, res) => {
    var titulo = req.body.titulo
    var email = req.body.email
    var telefone = req.body.telefone
    var endereco = req.body.endereco
    var cidade = req.body.cidade
    var duplas = req.body.duplas



    if (titulo != undefined) {
        // salvando titulo no banco de dados
        Torneio.create({
            titulo: titulo,
            email: email,
            telefone: telefone,
            endereco: endereco,
            cidade: cidade,
            duplas: duplas
        }).then(() => {
            res.redirect('/adm/index')
        })
    } else {
        res.redirect('/adm/create');
    }
});


module.exports = router
