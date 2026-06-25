// src/app.js
const express = require('express');
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware obligatorio para que Express entienda el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Enrutamiento principal de la API
app.use('/api/authors', authorRoutes);
app.use('/api/posts', postRoutes);

// Endpoint base para verificar que la API está viva y funcionando
app.get('/', (req, res) => {
  res.status(200).json({ message: '¡Bienvenido a la MiniBlog API!' });
});

// Middleware para manejar rutas inexistentes (404)
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

module.exports = app;