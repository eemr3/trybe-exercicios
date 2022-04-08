const express = require('express');
const PatientSurgeriesController = require('../controllers/PatientSurgeriesController');

const routes = express.Router();

routes.get('/', PatientSurgeriesController.getAll);

module.exports = routes;
