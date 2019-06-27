const express = require('express'); //necessário para trabalhar com rotas
const routes = require('./routes')
const app = express();

//substituido usando routes
// app.use('/', (req, res) => {
//     res.send('hello, world');
// });

app.use('/', routes);

module.exports = app;
