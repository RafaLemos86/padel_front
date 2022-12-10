// conectando ao express
const express = require('express');
// importando express
const app = express();



app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/new', (req, res) => {
    res.render('new');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/create', (req, res) => {
    res.render('criaLogin')
})

app.get('/chaveamento', (req, res) => {
    res.render('chaveamento')
})

// iniciar aplicacao 
app.listen(8080, () => {
    console.log('servidor aberto na porta 8080')
});