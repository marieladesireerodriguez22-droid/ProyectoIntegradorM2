// src/server.js
const app = require('./app');
require('dotenv').config(); // Carga las variables de entorno locales

// Railway nos va a dar el puerto automáticamente en production, en local usamos el 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`===========================================`);
  console.log(`🚀 Servidor corriendo con éxito en el puerto ${PORT}`);
  console.log(`🌍 URL Local: http://localhost:${PORT}`);
  console.log(`===========================================`);
});