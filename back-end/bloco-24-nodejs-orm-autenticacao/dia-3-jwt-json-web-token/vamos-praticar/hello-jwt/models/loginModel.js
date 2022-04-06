const connect = require('./connection');

const create = async ({ username, password }) => {
  const [{ insertId }] = await connect.execute(
    'INSERT INTO Users (username, password) VALUES(?, ?)',
    [username, password],
  );

  return insertId;
};

module.exports = {
  create,
};
