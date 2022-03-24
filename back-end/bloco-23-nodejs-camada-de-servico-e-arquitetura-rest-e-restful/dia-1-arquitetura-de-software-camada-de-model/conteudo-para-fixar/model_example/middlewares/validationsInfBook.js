const { findById } = require('../models/Author');

const isValidBook = async (req, res, next) => {
  const { title, author_id } = req.body;
  const authorId = await findById(author_id);

  if (!title || title.length < 3)
    return res.status(400).json({ message: 'Dados inválidos' });
  if (!authorId) return res.status(400).json({ message: 'Dados inválidos' });

  next();
};

module.exports = isValidBook;
