// src/db/db.js
const { Pool } = require('pg');
const path = require('path');

// Esto busca el archivo .env en la raíz de tu proyecto
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end()
};