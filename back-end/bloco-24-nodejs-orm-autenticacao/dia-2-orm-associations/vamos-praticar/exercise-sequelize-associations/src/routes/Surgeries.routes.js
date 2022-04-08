const express = require('express');
const SurgeriesController = require('../controllers/SurgeriesController');

const routes = express.Router();

routes.get('/', SurgeriesController.getAll);
routes.get('/:doctor', SurgeriesController.getByDoctor);

module.exports = routes;
