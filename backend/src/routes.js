const express = require('express')
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

//método Router() é o roteador do express, responsável pelas rotas
const routes = express.Router();

//responsável pelo upload da imagem
const upload = multer(uploadConfig);

/*métodos do express: GET, POST, PUT, DELETE 
get: pega informações do backend
post: cria informações no backend (não consegue executar pelo navegador)
put: atualiza informações no backend
delete: delete informações no backend
*/

/*primeiro parâmetro do get é a rota, o segundo parâmetro é uma função 
o req recebe todas as informações que o usuário esta enviando para requisição
e o res serve para devolver uma reposta para requisição
===================================================================================
req.query: é um método para acessar query params (filtro)
req.params: acessa o route params (edição e delete)
req.body: acessa o corpo da requisição (criação e edição)
===================================================================================
 */
routes.post('/sessions', SessionController.store);

//realiza o filtro dos spots
routes.get('/spots', SpotController.index);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

//rota encadeada: pega o id do spot e colocar qual a reserva do spot
routes.post('/spots/:spot_id/bookings', BookingController.store)
module.exports = routes;