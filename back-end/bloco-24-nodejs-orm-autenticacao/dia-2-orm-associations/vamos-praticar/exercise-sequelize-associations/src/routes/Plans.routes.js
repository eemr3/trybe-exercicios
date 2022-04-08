const express = require('express');
const PlansController = require('../controllers/PlansController');

const routes = express.Router();

routes.get('/', async (req, res) => {
  const plans = await PlansController.getAll();

  res.status(200).json(plans);
});

routes.get('/:id', PlansController.getById);

module.exports = routes;
