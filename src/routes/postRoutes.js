// src/routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Definición de endpoints para Posts según la consigna

// 1. GET /posts - listar posts
router.get('/', postController.getAllPosts);

// 2. GET /posts/:id - detalle post
router.get('/:id', postController.getPostById);

// 3. GET /posts/author/:authorId - posts con detalle de su author
router.get('/author/:authorId', postController.getPostsByAuthor);

// 4. POST /posts - crear post
router.post('/', postController.createPost);

// 5. PUT /posts/:id - actualizar post
router.put('/:id', postController.updatePost);

// 6. DELETE /posts/:id - eliminar post
router.delete('/:id', postController.deletePost);

module.exports = router;