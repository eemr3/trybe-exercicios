const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'emerson',
  password: 'damep9219',
  database: 'cep_lookup',
});

module.exports = connection;
