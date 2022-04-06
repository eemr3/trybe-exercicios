const express = require('express');
const LoginController = require('../controllers/loginController');

const routes = express.Router();

routes.post('/', LoginController.create);

module.exports = routes;
