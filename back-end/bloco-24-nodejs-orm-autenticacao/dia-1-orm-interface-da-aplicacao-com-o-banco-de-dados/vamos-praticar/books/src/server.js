const express = require('express');
require('dotenv').config();
const BooksRoute = require('./routes/BooksRoutes');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/books', BooksRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
