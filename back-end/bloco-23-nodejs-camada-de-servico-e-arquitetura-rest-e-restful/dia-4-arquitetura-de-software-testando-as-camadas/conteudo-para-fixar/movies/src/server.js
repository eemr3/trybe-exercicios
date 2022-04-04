const express = require('express');
require('dotenv').config();
const MovieController = require('./controllers/movieController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/movies', MovieController.create);

app.listen(PORT, () => {
  console.log(`
  Server listening port ${PORT}
  http://localhost:${PORT}
  `);
});
