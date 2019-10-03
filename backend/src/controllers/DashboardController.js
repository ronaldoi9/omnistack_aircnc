//lista os spots cadastradas do usuario
const Spot = require ('../models/Spot')

module.exports = {
    async show(req, res) {
        const { user_id } = req.headers;

        //buscando todos os spots onde o user é o mesmo do user_id do cabeçalho
        const spots = await Spot.find({ user: user_id })

        return res.json(spots)
    }
}