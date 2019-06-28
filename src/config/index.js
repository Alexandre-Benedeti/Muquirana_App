module.exports ={
    app:{
        port: process.env.PORT || 4000, //essa será a porta padrão, mas a porta que eu setar no arquivo '.env' sobrescreve a padrão 
    },
    db:{
        connectionString:process.env.MONGODB
    }
};//exportando diretamente
