const express = require('express');
const PeopleController = require('./controller/PeopleController');

const routes = express.Router();

routes.get('/people', PeopleController.index);
routes.get('/people/:id', PeopleController.read);
routes.post('/people', PeopleController.create);
routes.delete('/people/:id', PeopleController.delete);
routes.put('/people/:id', PeopleController.update);

module.exports = routes;