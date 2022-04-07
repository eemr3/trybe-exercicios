const express = require('express');
require('dotenv').config();
const { Address, Employee } = require('./models');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
