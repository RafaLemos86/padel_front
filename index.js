// conectando ao express
const express = require('express');
// importando express
const app = express();
// importando body-parse
const bodyParser = require('body-parser');
// carregando conexao do banco
const connection = require('./database/database');
// importando express-session
const session = require('express-session')

const adminAuth = require('./middlewares/adminAuth')


const Inscricaocontroller = require('./controller/inscricaoController')
const Usercontroller = require('./controller/loginController')
const Torneiocontroller = require('./controller/torneioController')


const User = require('./controller/UsersLogin')
const Inscricao = require('./controller/UserInscricao')
const Torneio = require('./controller/Usertorneio')



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





// configurando sessao
app.use(session({
    secret: 'textoqualquerparaaumentarseguranca',
    cookie: {
        maxAge: 30000000
    }
}));


// carregando arquivos estaticos no express
app.use(express.static('public'))

// configurar body-parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use('/', Usercontroller);
app.use('/', Inscricaocontroller)
app.use('/', Torneiocontroller)



// CONECTANDO NO BANCO
connection
    .authenticate()
    .then(() => {
        console.log('Conectado com o banco')
    }).catch((error) => {
        console.log(error)
    });


// iniciar aplicacao 
app.listen(8080, () => {
    console.log('servidor aberto na porta 8080')
});