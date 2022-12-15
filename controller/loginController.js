const express = require('express');
const router = express.Router()
const User = require('./UsersLogin')
const bcrypt = require('bcryptjs')





// post do login
router.post('/authenticate', (req, res) => {
    var email = req.body.email
    var password = req.body.password

    User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        // encontrou o email
        if (user != undefined) {
            // validar senha
            var correct = bcrypt.compareSync(password, user.password);

            if (correct) {
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect('/adm/index')

            } else {
                res.redirect('/login')
            }
        } else {
            res.redirect('/login')
        }
    })

})




router.post('/users/create', (req, res) => {
    var email = req.body.email
    var password = req.body.password

    // verificando se o email ja foi cadastrado
    User.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if (user == undefined) {

            // variavel para aumentar ainda mais a seguranca
            var salt = bcrypt.genSaltSync(10)
            var hash = bcrypt.hashSync(password, salt);

            User.create({
                email: email,
                password: hash
            }).then(() => {
                res.redirect('/')
            }).catch(() => {
                res.redirect('/')
            })
        } else {
            res.redirect('/')
        }
    })
})


router.get('/logout', (req, res) => {
    req.session.user = undefined;
    res.redirect('/')
})


module.exports = router