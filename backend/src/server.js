/*express é uma bbt para acelerar o desenvolvimento da aplicação backend 
auxilia na definição de rotas e aplicações http*/
const express = require('express');
const mongoose = require('mongoose');
const routes =  require('./routes');

const app = express();

//moongose é uma bbt que faz a conexão com o banco de dados
mongoose.connect('mongodb+srv://ronaldo:ronaldo@aircnc-h2ail.mongodb.net/semanaOmnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//este método abaixo informa que o express utilizará formato json
app.use(express.json());
//responsável pelas rotas do express com os módulos importados da sua classe
app.use(routes);

//define a porta que eu desejo executar minha app
app.listen(3333);