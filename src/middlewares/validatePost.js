// src/middlewares/validatePost.js

const validatePost = (req, res, next) => {
    const { title, content, author_id } = req.body;

    // 1. Validar el título
    if (!title || title.trim() === '') {
        return res.status(400).json({ error: 'El campo "title" es obligatorio.' });
    }

    // 2. Validar el contenido
    if (!content || content.trim() === '') {
        return res.status(400).json({ error: 'El campo "content" es obligatorio.' });
    }

    // 3. Validar que tenga un ID de autor asignado
    if (!author_id) {
        return res.status(400).json({ error: 'El campo "author_id" es obligatorio.' });
    }

    // Si todo está en orden, avanzamos
    next();
};

module.exports = validatePost;