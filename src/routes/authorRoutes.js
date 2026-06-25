// src/routes/authorRoutes.js
const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const validateAuthor = require('../middlewares/validateAuthor'); // Importamos el middleware

// Rutas de Autores

// 1. Listar todos los autores
router.get('/', authorController.getAllAuthors);

// 2. Detalle de un autor por ID
router.get('/:id', authorController.getAuthorById);

// 3. Crear un autor (pasa primero por el "peaje" de validación)
router.post('/', validateAuthor, authorController.createAuthor);

// 4. Actualizar un autor por ID (también valida que los datos nuevos sean correctos)
router.put('/:id', validateAuthor, authorController.updateAuthor);

// 5. Eliminar un autor por ID
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;