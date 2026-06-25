// src/routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// 1. GET /api/authors - Listar autores
router.get('/', authorController.getAllAuthors);

// 2. GET /api/authors/:id - Detalle de un autor
router.get('/:id', authorController.getAuthorById);

// 3. POST /api/authors - Crear un autor
router.post('/', authorController.createAuthor);

// 4. PUT /api/authors/:id - Actualizar un autor
router.put('/:id', authorController.updateAuthor);

// 5. DELETE /api/authors/:id - Eliminar un autor
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;