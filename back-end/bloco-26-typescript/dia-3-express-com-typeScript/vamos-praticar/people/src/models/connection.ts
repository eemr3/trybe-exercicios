import { createPool } from 'mysql2/promise';
import 'dotenv/config';

export default createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABSE,
});
