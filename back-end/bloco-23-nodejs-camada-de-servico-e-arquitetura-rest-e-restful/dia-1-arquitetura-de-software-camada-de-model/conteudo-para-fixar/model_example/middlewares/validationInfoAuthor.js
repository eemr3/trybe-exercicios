const isValid = (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!first_name || typeof first_name !== 'string')
    return res.status(400).json({ message: 'Dado incorreto' });
  if (!last_name || typeof last_name !== 'string')
    return res.status(400).json({ message: 'Dado incorreto' });
  if (middle_name && typeof middle_name !== 'string')
    res.status(400).json({ message: 'Dado incorreto' });

  next();
};

module.exports = isValid;
