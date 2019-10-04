/*express é uma bbt para acelerar o desenvolvimento da aplicação backend 
auxilia na definição de rotas e aplicações http*/
const express = require('express');
const mongoose = require('mongoose');
const routes =  require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

//moongose é uma bbt que faz a conexão com o banco de dados
mongoose.connect('mongodb+srv://ronaldo:ronaldo@aircnc-h2ail.mongodb.net/semanaOmnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
//esse método é responsável pelo controle de quem pode acessar seu banco
app.use(cors());
//este método abaixo informa que o express utilizará formato json
app.use(express.json());
//quando acessar a rota files ele retorna os arquivos estáticos (fotos, pdf) e passa o caminho das fotos
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
//responsável pelas rotas do express com os módulos importados da sua classe
app.use(routes);

//define a porta que eu desejo executar minha app
app.listen(3333);