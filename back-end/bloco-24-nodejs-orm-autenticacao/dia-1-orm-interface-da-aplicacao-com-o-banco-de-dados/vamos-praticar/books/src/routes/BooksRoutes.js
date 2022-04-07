const express = require('express');
const BooksController = require('../controllers/BooksController');

const routes = express.Router();

routes.get('/', BooksController.getAll);
routes.get('/:id', BooksController.getById);
routes.post('/', BooksController.create);
routes.put('/:id', BooksController.update);
routes.delete('/:id', BooksController.destroyBook);

module.exports = routes;
