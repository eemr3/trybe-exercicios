const cepModel = require('../models/CEP');

const findById = async (value) => {
  const [cep] = await cepModel.findByid(value.replace('-', ''));
  return cep;
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  return await cepModel.createCEP(
    cep.replace('-', ''),
    logradouro,
    bairro,
    localidade,
    uf,
  );
};

module.exports = {
  findById,
  createCep,
};
