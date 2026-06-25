// src/controllers/postController.js
const postsService = require('../services/postsService');
const authorsService = require('../services/authorsService');

const postController = {
  // 1. GET /posts - Listar todos los posts
  getAllPosts: async (req, res) => {
    try {
      const posts = await postsService.getAllPosts();
      return res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 2. GET /posts/:id - Detalle de un post específico
  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await postsService.getPostById(id);
      
      if (!post) {
        return res.status(404).json({ message: 'Post no encontrado' });
      }
      
      return res.status(200).json(post);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 3. GET /posts/author/:authorId - Posts con detalle de su autor
  getPostsByAuthor: async (req, res) => {
    try {
      const { authorId } = req.params;
      
      // Validamos primero si el autor existe
      const authorExists = await authorsService.getAuthorById(authorId);
      if (!authorExists) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }

      // CORRECCIÓN: Usamos el método que tiene el INNER JOIN del servicio
      const posts = await postsService.getPostsByAuthorWithDetail(authorId);
      return res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 4. POST /posts - Crear un post
  createPost: async (req, res) => {
    try {
      const { author_id, title, content, published } = req.body;

      // VALIDACIONES de la consigna: title, content y author_id no vacíos
      if (!author_id) {
        return res.status(400).json({ message: 'El author_id es obligatorio.' });
      }
      if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'El título es obligatorio.' });
      }
      if (!content || content.trim() === '') {
        return res.status(400).json({ message: 'El contenido es obligatorio.' });
      }

      // Validación extra de integridad: ¿Existe ese autor en la base de datos?
      const authorExists = await authorsService.getAuthorById(author_id);
      if (!authorExists) {
        return res.status(400).json({ message: 'El autor especificado no existe.' });
      }

      // CORRECCIÓN: Acomodamos el orden de los parámetros para que coincida con el servicio
      const newPost = await postsService.createPost(title, content, author_id, published);
      return res.status(201).json(newPost); // 201 Created
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 5. PUT /posts/:id - Actualizar un post
  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content, published } = req.body;

      if (!title || title.trim() === '') {
        return res.status(400).json({ message: 'El título no puede estar vacío.' });
      }
      if (!content || content.trim() === '') {
        return res.status(400).json({ message: 'El contenido no puede estar vacío.' });
      }

      const postExists = await postsService.getPostById(id);
      if (!postExists) {
        return res.status(404).json({ message: 'Post no encontrado' });
      }

      const updatedPost = await postsService.updatePost(id, title, content, published);
      return res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  },

  // 6. DELETE /posts/:id - Eliminar un post
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      
      const deleted = await postsService.deletePost(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Post no encontrado' });
      }

      return res.status(204).send(); // 204 No Content
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
};

module.exports = postController;