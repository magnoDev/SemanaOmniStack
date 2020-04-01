const express = require( 'express' );

const OngController = require('./controllers/OngController');
const IncidenteController = require('./controllers/IncidenteController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidentes', IncidenteController.index);
routes.post('/incidentes', IncidenteController.create);
routes.delete('/incidentes/:id', IncidenteController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;