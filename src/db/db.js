require('dotenv').config();
const { Pool } = require('pg');

// 💡 Si Railway te da la URL completa (DATABASE_URL), la usa directamente.
// Si no, arma la conexión con las variables separadas.
const connectionString = process.env.DATABASE_URL || `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const pool = new Pool({
  connectionString: connectionString,
  // 🔒 SSL obligatorio para que Railway no te rebote la conexión segura
  ssl: process.env.DATABASE_URL || process.env.DB_HOST !== 'localhost' ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
  console.log('¡Conexión exitosa a PostgreSQL realizada!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
