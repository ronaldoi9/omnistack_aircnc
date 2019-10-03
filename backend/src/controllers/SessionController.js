/*O Controller é responsável por receber a requisição, tratar esta requisição
e devolver uma resposta*/

const User = require('../models/User');
/*métodos que existem dentro do controller
index, show, store, update, destroy
===========================================
index: retorna uma listagem de sessões
show: lista uma única sessão
store: cria uma sessão
update: altera uma sessão
destroy: remove uma sessão
*/

module.exports = {
    //faz a comunicação com o banco
    async store(req, res) {
        //pegando o email do usuário pelo método body por desestruturação
        const { email } = req.body;

        let user = await User.findOne({ email })

        //faz uma verificação pra ver se já existe um usuario com este email
        if (!user){
        /*fazendo um cadastro no banco, passando a unica informação necessária
        como é um request deve usar o async await */
            user = await User.create({ email })
        }

        return res.json(user)
    }
};