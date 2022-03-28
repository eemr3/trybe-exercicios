const express = require('express');
const isValid = require('../middlewares/validationInfoAuthor');
const { getAll, findById, create } = require('../models/Author');

const router = express.Router();

router.get('/', async (req, res) => {
  const authors = await getAll();

  return res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const authorId = await findById(id);

  if (!authorId) return res.status(404).json({ message: 'Author not found!' });

  return res.status(200).json(authorId);
});

router.post('/', isValid, async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  const middleName = middle_name === '' ? null : middle_name;
  await create(first_name, middleName, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

module.exports = router;
