const express = require('express');
require('dotenv').config();
const { findById, create } = require('./controllers/cepController');
const { cepMiddleware } = require('./middlewares/cepMiddleware');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/cep/:cep', cepMiddleware, findById);

app.post('/cep', create);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
