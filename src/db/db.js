// src/db/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       // Por defecto suele ser 'postgres'
  host: 'localhost',
  database: 'm2_proyectointegrador', 
  password: 'Mora1993', // ¡Acá tu clave en texto plano!
  port: 5432, // El puerto por defecto de Postgres
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end()
};