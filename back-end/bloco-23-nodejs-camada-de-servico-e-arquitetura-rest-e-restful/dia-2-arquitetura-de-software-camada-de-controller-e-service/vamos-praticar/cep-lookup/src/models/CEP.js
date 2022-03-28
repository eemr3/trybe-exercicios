const connection = require('./connection');

const findByid = (cep) => {
  try {
    return connection.execute(
      `SELECT cep, logradouro, bairro, localidade, uf FROM ceps 
       WHERE cep = ?`,
      [cep],
    );
  } catch (error) {
    throw new Error(error);
  }
};

const createCEP = async (cep, logradouro, bairro, localidade, uf) => {
  try {
    await connection.execute(
      `INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) 
    VALUES (?, ?, ?, ?, ?)`,
      [cep, logradouro, bairro, localidade, uf],
    );
    return { cep, logradouro, bairro, localidade, uf };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  findByid,
  createCEP,
};
