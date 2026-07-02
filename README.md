📚 API Proyecto Integrador M2

API REST de una plataforma de publicaciones con autores y posts, construida con Express.js y PostgreSQL.

## 📋 Descripción

El proyecto expone endpoints CRUD para gestionar autores y sus publicaciones. Incluye validaciones mediante middlewares, manejo seguro de errores, consultas parametrizadas con PostgreSQL y una suite completa de pruebas automatizadas con Jest + Supertest.

* **Stack técnico:** Node.js · Express 4 · PostgreSQL · pg · Jest · Supertest
* **Deploy en Railway:**
  * **URL Base:** https://proyectointegradorm2-production.up.railway.app
  * **Endpoints de Autores:** https://proyectointegradorm2-production.up.railway.app/api/authors
  * **Endpoints de Posts:** https://proyectointegradorm2-production.up.railway.app/api/posts

## 📍 Endpoints Disponibles

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| **GET** | `/` | Estado del servidor / Bienvenida |
| **GET** | `/api/authors` | Listar todos los autores |
| **POST** | `/api/authors` | Crear un nuevo autor |
| **GET** | `/api/authors/:id` | Obtener un autor por ID |
| **PUT** | `/api/authors/:id` | Actualizar un autor por ID |
| **DELETE** | `/api/authors/:id` | Eliminar un autor por ID |
| **GET** | `/api/posts` | Listar todas las publicaciones |
| **POST** | `/api/posts` | Crear una nueva publicación |
| **GET** | `/api/posts/:id` | Obtener una publicación por ID |
| **PUT** | `/api/posts/:id` | Actualizar una publicación por ID |
| **DELETE** | `/api/posts/:id` | Eliminar una publicación por ID |

## 📁 Estructura del Proyecto

```text
📦 ProyectoIntegradorM2
 ┣ 📂 src/
 ┃ ┣ 📂 controllers/    → Manejadores de peticiones HTTP
 ┃ ┣ 📂 db/
 ┃ ┃ ┗ 📜 db.js         → Configuración del Pool de PostgreSQL
 ┃ ┣ 📂 middlewares/    → Validaciones
 ┃ ┣ 📂 routes/         → Definición de rutas REST
 ┃ ┣ 📂 services/       → Lógica de negocio y consultas SQL
 ┃ ┣ 📜 app.js          → Configuración de Express y rutas
 ┃ ┗ 📜 server.js       → Punto de entrada del servidor
 ┣ 📂 tests/            → Tests automatizados (Jest + Supertest)
 ┣ 📜 .env.example      → Plantilla de variables de entorno
 ┗ 📜 package.json      → Scripts y dependencias
🚀 RequisitosNode.js >= 18PostgreSQL >= 13npm⚙️ Pasos para Ejecutar en LocalClonar el repositorio:Bashgit clone [https://github.com/marieladesireerodriguez22-droid/ProyectoIntegradorM2.git](https://github.com/marieladesireerodriguez22-droid/ProyectoIntegradorM2.git)
cd ProyectoIntegradorM2
Instalar dependencias:Bashnpm install
Configurar variables de entorno:Crea un archivo .env basado en .env.example con tus credenciales de PostgreSQL local.Iniciar el servidor:Bashnpm start
Servidor disponible en http://localhost:3000🧪 Cómo Ejecutar los TestsEl proyecto incluye pruebas de integración para verificar los endpoints y validaciones:Bashnpm test
☁️ Guía de Deployment en RailwayConectar el Repositorio: Conecta tu cuenta de GitHub a Railway y crea un proyecto desde el repositorio.Base de Datos: Agrega un plugin de PostgreSQL en el mismo espacio de trabajo.Variables de Entorno: En la pestaña "Variables" del servicio de tu API, configura las siguientes referencias para que se comuniquen con la base de datos de Railway:VariableReferencia / ValorPORT3000DB_USER${{Postgres-FKiw.PGUSER}}DB_PASSWORD${{Postgres-FKiw.PGPASSWORD}}DB_HOST${{Postgres-FKiw.PGHOST}}DB_DATABASE${{Postgres-FKiw.PGDATABASE}}DB_PORT${{Postgres-FKiw.PGPORT}}NODE_ENVproduction🤖 Registro del Uso de IADurante el desarrollo se utilizaron herramientas de IA como apoyo para:Debugging: Resolución de errores de sintaxis y configuración de entorno.Pruebas: Soporte en la estructura de aserciones asincrónicas con Jest.Documentación: Redacción y estructuración de este archivo README.
