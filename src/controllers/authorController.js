// src/controllers/authorController.js
const authorsService = require('../services/authorsService');

const authorController = {
  // 1. GET /authors - Listar todos los autores
  getAllAuthors: async (req, res) => {
    try {
      const authors = await authorsService.getAllAuthors();
      return res.status(200).json(authors);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 2. GET /authors/:id - Detalle de un autor específico
  getAuthorById: async (req, res) => {
    try {
      const { id } = req.params;
      const author = await authorsService.getAuthorById(id);
      
      if (!author) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
      
      return res.status(200).json(author);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 3. POST /authors - Crear un autor con validación de nombre
  createAuthor: async (req, res) => {
    try {
      const { name, email, bio } = req.body;

      // Validación obligatoria de la consigna: name no vacío
      if (!name || name.trim() === '') {
        return res.status(400).json({ message: 'El nombre es obligatorio' });
      }

      const newAuthor = await authorsService.createAuthor(name, email, bio);
      return res.status(201).json(newAuthor);
    } catch (error) {
      console.error(error);
      // Validación obligatoria de la consigna: email único
      if (error.code === '23505') { 
        return res.status(400).json({ message: 'El email ya está registrado' });
      }
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 4. PUT /authors/:id - Actualizar un autor existente
  updateAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, bio } = req.body;

      if (!name || name.trim() === '') {
        return res.status(400).json({ message: 'El nombre es obligatorio' });
      }

      const updatedAuthor = await authorsService.updateAuthor(id, name, email, bio);
      
      if (!updatedAuthor) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }

      return res.status(200).json(updatedAuthor);
    } catch (error) {
      console.error(error);
      if (error.code === '23505') {
        return res.status(400).json({ message: 'El email ya está registrado' });
      }
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 5. DELETE /authors/:id - Eliminar un autor
  deleteAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await authorsService.deleteAuthor(id);

      if (!deleted) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }

      // 204 significa "Éxito pero sin contenido para retornar" (lo pide la consigna)
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
};

module.exports = authorController;