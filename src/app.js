require('dotenv').config();
const express = require('express');
const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware para entender JSON
app.use(express.json());

// Rutas de la API
app.use('/api/authors', authorRoutes);
app.use('/api/posts', postRoutes);

// Endpoint de prueba rápido
app.get('/', (req, res) => {
  res.status(200).json({ message: '¡Bienvenido a la MiniBlog API!' });
});

// Manejo de error 404 para rutas que no existen
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

module.exports = app;