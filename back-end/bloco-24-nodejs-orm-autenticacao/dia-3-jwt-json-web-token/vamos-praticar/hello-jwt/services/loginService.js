const LoginModel = require('../models/loginModel');

const create = async ({ username, password }) => {
  const idUser = await LoginModel.create({ username, password });

  return {
    id: idUser,
    username,
    password,
  };
};

module.exports = {
  create,
};
