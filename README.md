Markdown# 📚 API Proyecto Integrador M2

API REST de una plataforma de publicaciones con autores y posts, construida con Express.js y PostgreSQL.

## 📋 Descripción

El proyecto expone endpoints CRUD para gestionar autores y sus publicaciones. Incluye validaciones mediante middlewares, manejo seguro de errores, consultas parametrizadas con PostgreSQL y una suite completa de pruebas automatizadas con Jest + Supertest.

* **Stack técnico:** Node.js · Express 4 · PostgreSQL · pg · Jest · Supertest
* **Deploy en Railway:**
  * https://proyectointegradorm2-production.up.railway.app/ — URL Principal / Estado
  * https://proyectointegradorm2-production.up.railway.app/authors — Listar autores
  * https://proyectointegradorm2-production.up.railway.app/posts — Listar publicaciones

## 📍 Endpoints Disponibles

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| **GET** | `/` | Estado del servidor / Bienvenida |
| **GET** | `/authors` | Listar todos los autores |
| **POST** | `/authors` | Crear un nuevo autor (Valida campos obligatorios) |
| **GET** | `/authors/:id` | Obtener un autor por ID |
| **PUT** | `/authors/:id` | Actualizar un autor por ID |
| **DELETE** | `/authors/:id` | Eliminar un autor por ID |
| **GET** | `/posts` | Listar todas las publicaciones |
| **POST** | `/posts` | Crear una nueva publicación (Valida campos obligatorios) |
| **GET** | `/posts/:id` | Obtener una publicación por ID |
| **PUT** | `/posts/:id` | Actualizar una publicación por ID |
| **DELETE** | `/posts/:id` | Eliminar una publicación por ID |

## 📁 Estructura del Proyecto

```text
📦 ProyectoIntegradorM2
 ┣ 📂 src/
 ┃ ┣ 📂 controllers/     → Manejadores de peticiones HTTP
 ┃ ┣ 📂 db/
 ┃ ┃ ┗ 📜 db.js          → Configuración del Pool de PostgreSQL
 ┃ ┣ 📂 middlewares/    → Validaciones (validateAuthor, validatePost)
 ┃ ┣ 📂 routes/         → Definición de rutas REST (authorRoutes, postRoutes)
 ┃ ┣ 📂 services/       → Lógica de negocio y consultas SQL parametrizadas
 ┃ ┣ 📜 app.js          → Configuración de Express
 ┃ ┗ 📜 server.js       → Punto de entrada del servidor
 ┣ 📂 tests/            → Tests automatizados (authors.test, post.test)
 ┣ 📜 .env
 ┣ 📜 .env.example      → Plantilla de variables de entorno
 ┣ 📜 .gitignore
 ┣ 📜 package-lock.json
 ┗ 📜 package.json      → Scripts y dependencias del proyecto
🚀 RequisitosNode.js >= 18PostgreSQL >= 13npm⚙️ Pasos para Ejecutar en LocalBash# 1. Clonar el repositorio
git clone [https://github.com/marieladesireerodriguez22-droid/ProyectoIntegradorM2.git](https://github.com/marieladesireerodriguez22-droid/ProyectoIntegradorM2.git)
cd ProyectoIntegradorM2

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
Editar el .env con tus datos de pgAdmin local:Fragmento de códigoPORT=3000
DB_USER=tu_usuario_postgres
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_NAME=m2_proyectointegrador
DB_PORT=5432
Bash# 4. Iniciar el servidor
npm start
Servidor disponible en http://localhost:3000🧪 Cómo Ejecutar los TestsEl proyecto incluye pruebas de integración que verifican el correcto funcionamiento de las operaciones CRUD y las validaciones de datos.Bashnpm test
☁️ Guía de Deployment en Railway1. Conectar el RepositorioIniciá sesión en Railway con tu cuenta de GitHub.Creá un New Project y seleccioná Deploy from GitHub repository apuntando a ProyectoIntegradorM2.2. Base de Datos en la NubeAgregá un plugin de PostgreSQL desde el dashboard del mismo espacio de trabajo.3. Variables de Entorno en RailwayEn la pestaña Variables del servicio de tu API de Express, asociá las credenciales usando las referencias internas de tu Postgres en Railway:VariableValor / ReferenciaPORT3000DB_USER${{Postgres.PGUSER}}DB_PASSWORD${{Postgres.PGPASSWORD}}DB_HOST${{Postgres.PGHOST}}DB_NAME${{Postgres.PGDATABASE}}DB_PORT${{Postgres.PGPORT}}Railway detectará el archivo package.json de forma automática e iniciará la aplicación mediante el script npm start.🤖 Registro del Uso de AI en el ProyectoDurante el desarrollo de este proyecto integrador se utilizaron herramientas de Inteligencia Artificial (IA) como apoyo y copiloto de código bajo los siguientes lineamientos:Asistencia en Debugging y Git: Uso de IA para resolver advertencias y estados avanzados de control de versiones (conflictos con commits, estados de detached HEAD) y lecturas de errores de sintaxis en la consola.Optimización de Pruebas Automatizadas: Soporte en la estructura de aserciones asincrónicas cruzando respuestas mediante Jest y Supertest en authors.test.js y post.test.js.Estructuración de Documentación: Colaboración en el armado arquitectónico y la redacción clara de guías de despliegue para el repositorio.
