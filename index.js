// conectando ao express
const express = require('express');
// importando express
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

app.get('/adm/index', (req, res) => {
    res.render('adm/index')
})

app.get('/adm/create', (req, res) => {
    res.render('adm/criaTorneio')
})

app.get('/duplas', (req, res) => {
    res.render('duplas/criaDuplas')
})

// iniciar aplicacao 
app.listen(8080, () => {
    console.log('servidor aberto na porta 8080')
});