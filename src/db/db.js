// Cargar dotenv acá asegura que las credenciales existan antes de crear la conexión
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Monitoreo de conexión exitosa
pool.on('connect', () => {
  console.log('¡Conexión exitosa a PostgreSQL realizada!');
});

module.exports = pool;