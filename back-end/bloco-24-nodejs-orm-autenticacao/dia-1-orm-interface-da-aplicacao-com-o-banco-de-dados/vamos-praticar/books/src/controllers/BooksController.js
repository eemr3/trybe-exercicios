const BooksService = require('../services/BooksService');

const getAll = async (req, res) => {
  try {
    const books = await BooksService.getAll();

    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);

    return res.status(200).json(book);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BooksService.create({ title, author, pageQuantity });

    return res.status(201).json(book);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    await BooksService.update({ id, title, author, pageQuantity });

    return res.status(200).json({ message: 'Book deleted success' });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const destroyBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.destroyBook(id);

    return res.status(204).json(book);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
module.exports = {
  getAll,
  getById,
  create,
  update,
  destroyBook,
};
