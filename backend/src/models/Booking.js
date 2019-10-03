//responsável por modelar as reservas do banco
const mongoose = require('mongoose');

/*representa a estrutura da "tabela" Booking, quais campos ele irá conter
e qual o tipo deste campo*/
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    //necessário para saber qual usuário criou este Spot no banco de dados
    user: {
        //grava o id do usuário que fez o spot
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //necessário para saber qual spot é relacionado a esta reserva
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

module.exports = mongoose.model('Booking', BookingSchema)