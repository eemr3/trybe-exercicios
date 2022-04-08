const express = require('express');
const PatientsController = require('../controllers/PatientsController');

const routes = express.Router();

routes.get('/', PatientsController.getAll);
routes.get('/surgeries', PatientsController.getAllAndSurgeries);

module.exports = routes;
