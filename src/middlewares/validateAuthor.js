// src/middlewares/validateAuthor.js

const validateAuthor = (req, res, next) => {
    const { name, email } = req.body;

    // 1. Validar que el nombre exista y no sean solo espacios en blanco
    if (!name || name.trim() === '') {
        return res.status(400).json({ error: 'El campo "name" es obligatorio y no puede estar vacío.' });
    }

    // 2. Validar que el email exista y no esté vacío
    if (!email || email.trim() === '') {
        return res.status(400).json({ error: 'El campo "email" es obligatorio.' });
    }

    // Opcional: Una validación básica de formato de email usando Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'El formato del "email" no es válido.' });
    }

    // Si todo está bien, llamamos a next() para que continúe al controlador
    next();
};

module.exports = validateAuthor;
