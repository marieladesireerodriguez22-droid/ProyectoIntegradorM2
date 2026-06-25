// src/services/postsService.js
const db = require('../db/db');

const postsService = {
  // 1. Listar todos los posts
  getAllPosts: async () => {
    const { rows } = await db.query('SELECT * FROM posts ORDER BY id DESC;');
    return rows;
  },

  // 2. Detalle de un post específico
  getPostById: async (id) => {
    const { rows } = await db.query('SELECT * FROM posts WHERE id = $1;', [id]);
    return rows[0];
  },

  // 3. GET /posts/author/:authorId - Listar posts con el detalle de su autor
  getPostsByAuthorWithDetail: async (authorId) => {
    const queryText = `
      SELECT 
        p.id AS post_id, p.title, p.content, p.published, p.created_at AS post_created_at,
        a.id AS author_id, a.name AS author_name, a.email AS author_email, a.bio AS author_bio
      FROM posts p
      INNER JOIN authors a ON p.author_id = a.id
      WHERE p.author_id = $1;
    `;
    const { rows } = await db.query(queryText, [authorId]);
    return rows;
  },

  // 4. Crear un post
  createPost: async (title, content, author_id, published = false) => {
    const queryText = `
      INSERT INTO posts (title, content, author_id, published) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    const { rows } = await db.query(queryText, [title, content, author_id, published]);
    return rows[0];
  },

  // 5. Actualizar un post existente
  updatePost: async (id, title, content, published) => {
    const queryText = `
      UPDATE posts 
      SET title = $1, content = $2, published = $3 
      WHERE id = $4 
      RETURNING *;
    `;
    const { rows } = await db.query(queryText, [title, content, published, id]);
    return rows[0];
  },

  // 6. Eliminar un post
  deletePost: async (id) => {
    const { rows } = await db.query('DELETE FROM posts WHERE id = $1 RETURNING id;', [id]);
    return rows[0];
  }
};

module.exports = postsService;