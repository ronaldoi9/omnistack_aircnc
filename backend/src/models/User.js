/*models representa uma entidade no banco de dados ou seja
um schema do banco, é aqui onde ficara todas as "tabelas" do meu banco*/
const mongoose = require('mongoose');

/*representa a estrutura da "tabela" usuario, quais campos ele irá conter
neste caso o usuário só possui um email no formado String*/
const UserSchema = new mongoose.Schema({
    email: String
})

/*moongose.model é aonde realmente está criando o model para User
apartir daí o mongo sabera que o usuário tem apenas o campo email
*/
module.exports = mongoose.model('User', UserSchema)