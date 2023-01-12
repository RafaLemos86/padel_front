const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/inscricao', (req, res) => {
    res.render('chave/inscricao');
})

app.get('/login', (req, res) => {
    res.render('login/login')
})

app.get('/create', (req, res) => {
    res.render('login/criaLogin')
})

app.get('/chaveamento', (req, res) => {
    res.render('chave/chaveamento')
})

app.get('/chaveamento/semi-final', (req, res) => {
    res.render('chave/semi-final')
})

app.get('/chaveamento/final', (req, res) => {
    res.render('chave/final')
})

app.get('/chaveamento/campeao', (req, res) => {
    res.render('chave/campeao')
})

app.get('/adm/index', (req, res) => {
    res.render('adm/index')
})

app.get('/adm/create', (req, res) => {
    res.render('adm/criaTorneio')
})

<<<<<<< HEAD
app.get('/duplas', (req, res) => {
    res.render('duplas/criaDuplas')
})

// iniciar aplicacao 
=======
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

>>>>>>> 900245de2c7213f285705cf770c7ce472b8a82c8
app.listen(8080, () => {
    console.log('servidor aberto na porta 8080')
});
