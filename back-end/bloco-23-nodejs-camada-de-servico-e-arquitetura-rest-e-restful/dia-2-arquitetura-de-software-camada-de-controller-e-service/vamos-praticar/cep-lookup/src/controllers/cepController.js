const Joi = require('joi');
const cepService = require('../services/cepService');

const findById = async (req, res) => {
  try {
    const { cep } = req.params;
    const result = await cepService.findById(cep);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

const create = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().empty().required(),
    logradouro: Joi.string().empty().required(),
    bairro: Joi.string().empty().required(),
    localidade: Joi.string().empty().required(),
    uf: Joi.string().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  if (error) return next(error);

  const newCEP = await cepService.createCep(cep, logradouro, bairro, localidade, uf);

  if (newCEP.error) return next(newCEP.error);

  return res.status(201).json(newCEP);
};

module.exports = {
  findById,
  create,
};
