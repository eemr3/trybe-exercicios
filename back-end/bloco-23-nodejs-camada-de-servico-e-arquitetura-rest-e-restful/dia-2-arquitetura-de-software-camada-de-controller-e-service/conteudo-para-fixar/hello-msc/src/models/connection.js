const mysql = require('mysql2/promise');

const conniection = mysql.createPool({
  host: 'localhost',
  user: 'emerson',
  password: 'damep9219',
  database: 'model_example',
});

module.exports = conniection;
