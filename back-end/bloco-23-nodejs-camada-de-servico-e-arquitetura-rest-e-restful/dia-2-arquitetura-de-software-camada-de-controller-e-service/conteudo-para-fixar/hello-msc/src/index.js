const express = require('express');
const bodyPraser = require('body-parser');
require('dotenv').config();
const Author = require('./controllers/Author');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyPraser.json());

app.get('/authors', Author.getAll);

app.get('/authors/id', Author.findById);

app.post('/authors', Author.createAuthor);

app.listen(PORT, () => console.log(`App is listing in www.http://localhost:${PORT}`));
