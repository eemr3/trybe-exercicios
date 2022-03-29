const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: process.env.USER_NAME, // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: process.env.PASSWORD, // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: process.env.DATABASE,
});

module.exports = connection;
