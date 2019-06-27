require('dotenv').config();
require('module-alias/register'); //usando alias para simplificar o caminho dos modulos "$ npm install module-alias" e configunado os alias dentro de package.json 

const config = require ('@config')
const app = require('@app'); 

app.listen(config.app.port, (err) => {  //busca porta no config
    if(err){
        return console.log('erro');
    }
    console.log(`iniciou em http:localhost:${config.app.port}`);
});