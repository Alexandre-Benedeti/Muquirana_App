const app = require('@app');
const config = require('@config');

module.exports = (err) => { //o parâmetro err virá do mongoose
    if(err){
        console.log(err);
    }else{
        app.listen(config.app.port, (err) => {  //busca porta no config
            if(err){
                return console.log('erro');
            }
            console.log(`iniciou em http:localhost:${config.app.port}`);
        });
    }
};
