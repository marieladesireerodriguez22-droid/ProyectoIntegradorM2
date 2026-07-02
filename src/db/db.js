require('dotenv').config();
const { Pool } = require('pg');

// Nos conectamos usando los datos separados, que son más estables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  // 🔒 SSL obligatorio para Railway
  ssl: process.env.DB_HOST !== 'localhost' ? { rejectUnauthorized: false } : false
});

pool.on('connect', () => {
  console.log('¡Conexión exitosa a PostgreSQL realizada!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
