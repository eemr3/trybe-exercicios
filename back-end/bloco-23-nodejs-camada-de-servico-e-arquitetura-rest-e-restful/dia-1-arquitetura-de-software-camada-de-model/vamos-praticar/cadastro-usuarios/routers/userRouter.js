const express = require('express');
const {
  validateName,
  validateEmailAndPassword,
} = require('../middlewares/validationUser');

const { create, getAll, getUserById, update, deleteUser } = require('../models/user');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await getAll();
    if (!users) res.status(200).json([]);
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await getUserById(id);
    if (userById.length === 0)
      return res.status(404).json({
        error: true,
        message: 'Usuário não encontrado',
      });
    return res.status(200).json(userById);
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.post('/', validateName, validateEmailAndPassword, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const response = await create(firstName, lastName, email, password);
    res.status(201).json({ response });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.put('/:id', validateName, validateEmailAndPassword, async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    const [{ insertId }] = await update(id, firstName, lastName, email, password);

    if (insertId === 0)
      return res.status(404).json({
        error: true,
        message: 'Usuário não encontrado',
      });

    return res.status(200).json({ id, firstName, lastName, email, password });
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    return res.status(200).end();
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
