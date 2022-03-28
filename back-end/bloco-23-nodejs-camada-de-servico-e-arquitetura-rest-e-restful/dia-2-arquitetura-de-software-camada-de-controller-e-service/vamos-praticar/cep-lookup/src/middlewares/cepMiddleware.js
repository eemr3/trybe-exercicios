const validateCEP = require('../schemas/schemaCep');

const cepMiddleware = (req, res, next) => {
  const { cep } = req.params;
  const { message, code } = validateCEP.validateCEP(cep);
  if (message) return res.status(404).json({ message });

  next();
};

module.exports = {
  cepMiddleware,
};
