require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  // 🔒 Esto le avisa a Railway que use una conexión segura (SSL)
  ssl: process.env.DB_HOST !== 'localhost' ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
  console.log('¡Conexión exitosa a PostgreSQL realizada!');
});

// Exportamos un objeto con la función query para mantener compatibilidad total con tu código
module.exports = {
  query: (text, params) => pool.query(text, params),
};
