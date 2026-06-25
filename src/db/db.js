// src/db/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Exportamos un objeto con el método query para que coincida con tus servicios
module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end() // Esto ayuda a que Jest pueda cerrar la conexión al terminar
};