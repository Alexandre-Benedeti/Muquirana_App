require('dotenv').config();
require('module-alias/register'); //usando alias para simplificar o caminho dos modulos "$ npm install module-alias" e configunado os alias dentro de package.json 

const mongoose = require('mongoose');

const config = require ('@config');
const boot = require('@service/boot');

//a função de boot está em ./serviços/boot.js 
// const app = require('@app'); 

// app.listen(config.app.port, (err) => {  //busca porta no config
//     if(err){
//         return console.log('erro');
//     }
//     console.log(`iniciou em http:localhost:${config.app.port}`);
// });

// connectionString = mongodb+srv://Pica:<password>@cluster0-dqw0e.mongodb.net/test?retryWrites=true&w=majority


//configurando o moongoose


mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);

if(config.db.connectionString){
    mongoose.connect(config.db.connectionString, boot); //'boot' é o callback que a função connect recebe.
}else{
    console.log('No connection string provider');
}
