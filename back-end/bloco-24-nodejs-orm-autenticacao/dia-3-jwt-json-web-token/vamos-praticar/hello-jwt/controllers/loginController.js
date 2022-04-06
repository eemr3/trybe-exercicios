const LoginService = require('../services/loginService');

const create = async (req, res) => {
  const { username, password } = req.body;

  const user = await LoginService.create({ username, password });

  return res.status(201).json(user);
};

module.exports = {
  create,
};
