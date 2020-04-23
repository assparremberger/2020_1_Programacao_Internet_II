var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// var produtos = ["Coca-Cola", "Pepsi", "Arroz", "iPhone"];

/*
app.post('/produtos', (req, res) => {
    nome = "Produto " + produtos.length;
    produtos.push(nome);
    res.send(nome + " adicionado com sucesso!");
});

app.get('/produtos', (req, res) => {
    res.send(produtos);
});
*/

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'api_rest'
    }
});

app.get('/produtos', (req, res, next) => {
    knex('tbl_produtos').then((dados) => {
        res.send(dados);
    }, next);
});

app.get('/produtos/:id', (req, res, next) => {
    var id = req.params.id;
    // const { id } = req.params;
    knex('tbl_produtos')
        .where('id', id)
        .first()
        .then((dados) => {
            res.send(dados);
        }, next);
});

app.put('/produtos/:id', (req, res, next) => {
    var id = req.params.id;
    knex('tbl_produtos')
        .where('id', id)
        .update(req.body)
        .then((dados) => {
            res.send(dados);
        }, next);
});

app.post('/produtos', (req, res, next) => {
    knex('tbl_produtos')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next)
});

app.delete('/produtos/:id', (req, res, next) => {
    var id = req.params.id;
    knex('tbl_produtos')
        .where('id', id)
        .delete()
        .then(() => {
            res.send("Produto excluído com sucesso!!!");
        }, next);
});



app.get('/', (req, res) => {
    res.status(200).send("Bem-vindo ao API REST");
});

http.createServer(app).listen(8001, () => {
    console.log('Servidor iniciado em http://localhost:8001');
});













/*


var knex = require('knex')({
   client: 'mysql',
   connection: {
       host: 'localhost',
       user: 'root',
       password: '',
       database: 'api_rest'
   }
});

app.get('/produtos', (req, res, next) => {
   knex('tbl_produtos').then((dados) => {
       res.send(dados);
   }, next);
});

app.post('/produtos', (req, res, next) => {
    knex('tbl_produtos')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next)
});
*/