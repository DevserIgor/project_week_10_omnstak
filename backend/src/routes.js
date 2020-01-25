//TIPOS DE PARÂMETROS
//Query params: request.query (vem da QueryString ex: Filtor, Ordenação, Paginação);
//Query params: request.params (Identificação para alteração ou um recurso de remoção)
//Body: request.body (Dados para a criação ou alteração de um registro)
//define o caminho inicial da minha requisição client
const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

//agora precisa exportar para a application veja 
module.exports = routes;