// src/services/authorsService.js
const db = require('../db/db');

const authorsService = {
  getAllAuthors: async () => {
    const { rows } = await db.query('SELECT * FROM authors ORDER BY id DESC;');
    return rows;
  },
  getAuthorById: async (id) => {
    const { rows } = await db.query('SELECT * FROM authors WHERE id = $1;', [id]);
    return rows[0];
  },
  createAuthor: async (name, email, bio) => {
    const queryText = 'INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *;';
    const { rows } = await db.query(queryText, [name, email, bio]);
    return rows[0];
  },
  updateAuthor: async (id, name, email, bio) => {
    const queryText = 'UPDATE authors SET name = $1, email = $2, bio = $3 WHERE id = $4 RETURNING *;';
    const { rows } = await db.query(queryText, [name, email, bio, id]);
    return rows[0];
  },
  deleteAuthor: async (id) => {
    const { rows } = await db.query('DELETE FROM authors WHERE id = $1 RETURNING id;', [id]);
    return rows[0];
  }
};

module.exports = authorsService;