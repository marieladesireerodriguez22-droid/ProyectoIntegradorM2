# MiniBlog API - Proyecto Integrador M2

## 📝 Descripción del proyecto
Este proyecto es una API REST para la gestión de un sistema de MiniBlog, permitiendo administrar autores (`authors`) y publicaciones (`posts`). Está construido utilizando **Node.js**, **Express**, y **PostgreSQL** como base de datos.

---

## 📁 Estructura del Proyecto
```text
ProyectoIntegradorM2/
├── src/
│   ├── app.js              # Express app (configuración y exportable para tests)
│   ├── server.js           # Entry point (levanta el servidor y escucha en el puerto)
│   ├── db/
│   │   └── db.js           # Conexión a PostgreSQL (pg.Pool)
│   ├── routes/
│   │   ├── authorRoutes.js # Rutas para /api/authors
│   │   └── postRoutes.js   # Rutas para /api/posts
│   ├── controllers/
│   │   ├── authorController.js # Controladores de autores
│   │   └── postController.js   # Controladores de posts
│   ├── services/
│   │   ├── authorsService.js   # Queries SQL y lógica de autores
│   │   └── postsService.js     # Queries SQL y lógica de posts
│   └── middlewares/
│       ├── validateAuthor.js   # Middleware de validación de autores
│       └── validatePost.js     # Middleware de validación de posts
├── scripts/
│   ├── setup.sql           # Script SQL para creación de tablas
│   └── seedData.sql        # Script SQL con datos de prueba iniciales
├── tests/
│   ├── authors.test.js     # Tests de integración de autores
│   └── post.test.js        # Tests de integración de posts
├── docs/
│   └── openapi.json        # Documentación OpenAPI 3.0 de la API
├── .env
├── .env.example            # Plantilla de variables de entorno
├── .gitignore              # Archivos excluidos de Git (como el .env)
└── package.json            # Dependencias y scripts del proyecto
