const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
       //retorna uma lista de spots
    async index(req, res) {
        const { tech } = req.query;

        //filtra os spots da tech desejada
        const spots = await Spot.find({ techs: tech });

        return res.json(spots);
    },

     async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id)

        //verifica se o usuario existe para add no spot
        if(!user){
            return res.status(400).json({error: 'Usuario não existe!'});
        }
        //armazenando o spot no banco de dados
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            //realiza o tratamento do vetor de strings e transformando em array
            //método trim retira o espaço em branco entre a string
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot);
    } 
};