const { Book } = require('../models/');

const getAll = async () => {
  const books = await Book.findAll();
  if (books.length === 0) throw new Error('Not found');
  return books;
};

const getById = async (id) => {
  const book = await Book.findOne({ where: { id } });

  if (!book) throw new Error('Book not found!');

  return book;
};

const getByAuthor = async (author) => {
  const authorData = await Book.findOne({ where: { author } });

  if (!authorData) throw new Error('Author not found!');

  return authorData;
};

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });

  return book;
};

const update = async ({ id, title, author, pageQuantity }) => {
  const findBook = await getById(id);

  if (!findBook) throw new Error('Book not found!');

  const book = await Book.update({ title, author, pageQuantity }, { where: { id } });

  return book;
};

const destroyBook = async (id) => {
  const findBook = await Book.destroy({ where: { id } });

  return findBook;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroyBook,
};
