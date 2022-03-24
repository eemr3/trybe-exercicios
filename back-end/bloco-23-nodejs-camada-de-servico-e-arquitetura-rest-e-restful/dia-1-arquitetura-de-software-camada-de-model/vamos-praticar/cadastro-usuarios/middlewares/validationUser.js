const validateName = (req, res, next) => {
  const { firstName, lastName } = req.body;

  if (!firstName || typeof firstName !== 'string')
    return res.status(400).json({
      error: true,
      message: 'Dados inválidos!',
    });

  if (!lastName || typeof lastName !== 'string')
    return res.status(400).json({
      error: true,
      message: 'Dados inválidos!',
    });

  next();
};

const validateEmailAndPassword = (req, res, next) => {
  const { email, password } = req.body;
  const validEmail = /\S+@\S+\.\S+/;

  if (!email || !validEmail.test(email))
    return res.status(400).json({
      error: true,
      message: 'Email inválido!',
    });

  if (!password || password < 6 || typeof password !== 'string')
    return res.status(400).json({
      error: true,
      message: 'O campo password deve ter pelo menos 6 caracteres!',
    });

  next();
};

module.exports = {
  validateName,
  validateEmailAndPassword,
};
