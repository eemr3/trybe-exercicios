const connection = require('./connections');

const serialize = (data) => {
  return {
    id: data.id,
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    password: data.password,
  };
};

const getAll = async () => {
  const [user] = await connection.execute('SELECT * FROM users.user');

  return user.map(serialize);
};

const getUserById = async (id) => {
  const [user] = await connection.execute(
    'SELECT id, first_name, last_name, email FROM users.user WHERE id = ?',
    [id],
  );

  return user.map(serialize);
};

const create = async (firstName, lastName, email, password) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO users.user (first_name, last_name, email, password)
VALUES
(?,?,?,?)`,
    [firstName, lastName, email, password],
  );
  return {
    id: insertId,
    firstName,
    lastName,
    email,
    password,
  };
};

const update = async (id, firstName, lastName, email, password) => {
  return await connection.execute(
    'UPDATE users.user SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id],
  );
};

const deleteUser = async (id) => {
  await connection.execute('DELETE FROM users.user WHERE id = ?', [id]);
};

module.exports = {
  create,
  getAll,
  getUserById,
  update,
  deleteUser,
};
