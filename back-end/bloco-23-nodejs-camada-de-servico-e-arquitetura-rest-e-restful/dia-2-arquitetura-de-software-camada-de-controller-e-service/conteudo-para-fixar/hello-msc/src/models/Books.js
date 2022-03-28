const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title FROM books;');

  return books;
};

const getByAuthorId = async (id) => {
  const [authorId] = await connection.execute(
    `SELECT b.id, b.title, a.id as authorId, a.first_name FROM books as b
    INNER JOIN authors as a
    ON b.author_id = a.id
    WHERE b.author_id = ?`,
    [id],
  );

  if (!authorId) return null;

  return authorId;
};

const getByBookId = async (id) => {
  const [bookId] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);

  if (bookId.length === 0) return null;

  return bookId;
};

const createBook = async (title, author_id) =>
  await connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, author_id],
  );

module.exports = { getAll, getByAuthorId, getByBookId, createBook };
