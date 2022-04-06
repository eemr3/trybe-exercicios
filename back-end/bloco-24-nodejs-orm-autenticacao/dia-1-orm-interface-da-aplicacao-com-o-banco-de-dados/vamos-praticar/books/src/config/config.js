require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.MYSQL_PASSWORD,
    database: process.MYSQL_DATABASE,
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.MYSQL_PASSWORD,
    database: process.MYSQL_DATABASE,
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.MYSQL_PASSWORD,
    database: process.MYSQL_DATABASE,
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql',
  },
};
