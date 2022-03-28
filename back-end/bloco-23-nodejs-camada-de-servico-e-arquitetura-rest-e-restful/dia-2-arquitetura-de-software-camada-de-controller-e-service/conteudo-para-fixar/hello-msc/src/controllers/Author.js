const Author = require('../services/Authors');

const getAll = async (req, res) => {
  const authors = Author.getAll();

  return res.status(200).json(authors);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const author = Author.findById(id);

  if (!author) return res.status(400).json({ message: 'Not found!' });

  return res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  const author = await Author.createAuthor(firstName, middleName, lastName);

  if (!author) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  return res.status(201).json(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
