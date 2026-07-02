// src/routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const validatePost = require('../middlewares/validatePost'); // Importamos el middleware de posts

// Definición de endpoints para Posts según la consigna

// 1. GET /posts - listar posts
router.get('/', postController.getAllPosts);

// 2. GET /posts/:id - detalle post
router.get('/:id', postController.getPostById);

// 3. GET /posts/author/:authorId - posts con detalle de su author
router.get('/author/:authorId', postController.getPostsByAuthor);

// 4. POST /posts - crear post (pasa por la validación de title, content y author_id)
router.post('/', validatePost, postController.createPost);

// 5. PUT /posts/:id - actualizar post (valida los campos antes de editar)
router.put('/:id', validatePost, postController.updatePost);

// 6. DELETE /posts/:id - eliminar post
router.delete('/:id', postController.deletePost);

module.exports = router;
