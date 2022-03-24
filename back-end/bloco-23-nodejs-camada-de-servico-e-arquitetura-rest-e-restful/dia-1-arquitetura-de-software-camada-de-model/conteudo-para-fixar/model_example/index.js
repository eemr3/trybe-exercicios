const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const authorRouter = require('./routers/authorRouter');
const booksRouter = require('./routers/booksRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/authors', authorRouter);
app.use('/books', booksRouter);

app.listen(port, () => console.log(`App is listening on port http://localhost:${port}!`));
