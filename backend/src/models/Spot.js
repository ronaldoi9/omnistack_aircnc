/*models representa uma entidade no banco de dados ou seja
um schema do banco, é aqui onde ficara todas as "tabelas" do meu banco*/
const mongoose = require('mongoose');

/*representa a estrutura da "tabela" Spot, quais campos ele irá conter
e qual o tipo deste campo*/
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    //necessário para saber qual usuário criou este Spot no banco de dados
    user: {
        //grava o id do usuário que fez o spot
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {   
        toJSON: {
            //toda vez que o SpotSchema é convertido para json ele verifica o virtual true e agrupa no retorno
            virtuals: true,
    },
});

/*cria um campo virtual que é computado pelo JS e não existe no banco
usado para pegar a imagem*/
SpotSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
})

//moongose.model é onde realmente está criando o model para Spot
module.exports = mongoose.model('Spot', SpotSchema)