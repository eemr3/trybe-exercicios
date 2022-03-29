const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/products', require('./controllers/productController'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
