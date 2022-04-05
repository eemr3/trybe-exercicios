const express = require('express');
const {
  getAll,
  getById,
  search,
  create,
  update,
  destroy,
} = require('../controllers/userController');

const routes = express.Router();

routes.get('/', getAll);
routes.get('/:id', getById);
routes.get('/search/:id', search);
routes.post('/', create);
routes.put('/:id', update);
routes.delete('/:id', destroy);

module.exports = routes;
