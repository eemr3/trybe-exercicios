const express = require('express');
const UsersRoutes = require('./src/routes/UsersRoutes');

const app = express();
app.use(express.json());

const port = 3001;

app.use('/', UsersRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
