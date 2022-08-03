//parametrizando nossas libs
const express = require('express');
const consign = require('consign');
const expressValidator = require('express-validator');


//inicializando o express
const app = express();

// configurando a assets e public do projto
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//autoload routes, conroller. models for object app
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app)


module.exports = app;