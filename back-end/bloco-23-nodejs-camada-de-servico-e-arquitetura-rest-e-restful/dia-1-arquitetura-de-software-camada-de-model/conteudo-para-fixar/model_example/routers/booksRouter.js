const express = require('express');
const isValidBook = require('../middlewares/validationsInfBook');
const { getAll, getByAuthorId, getByBookId, createBook } = require('../models/Books');

const router = express.Router();

router.get('/', async (req, res) => {
  const books = await getAll();
  return res.status(200).json(books);
});

router.get('/search', async (req, res) => {
  const { author_id } = req.query;

  const books = await getByAuthorId(author_id);

  if (!books) return res.status(404).json({ message: 'Author not found!' });
  return res.status(200).json(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const books = await getByBookId(id);

  if (!books) return res.status(404).json({ message: 'Book not found!' });

  return res.status(200).json(books);
});

router.post('/', isValidBook, async (req, res) => {
  const { title, author_id } = req.body;
  await createBook(title, author_id);

  return res.status(201).json({ message: 'Livro criado com sucesso!' });
});

module.exports = router;
