Markdown# MiniBlog API 🚀

API REST construida con Node.js + Express + PostgreSQL para gestionar autores y publicaciones. Proyecto integrador para DevSpark.

## Estructura del proyecto

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
│   ├── authors.test.js     # Tests de autores
│   └── post.test.js        # Tests de posts
├── docs/
│   └── openapi.json        # Documentación OpenAPI 3.0 de la API
├── .env
├── .env.example            # Plantilla de variables de entorno
├── .gitignore              # Archivos excluidos de Git (como el .env)
└── package.json            # Dependencias y scripts del proyecto

## Requisitos

* Node.js >= 18
* PostgreSQL >= 14
* npm >= 9

## Ejecución local

### 1. Clonar e instalar dependencias

```bash
git clone [https://github.com/marieladesireerodriguez22-droid/ProyectoIntegradorM2.git](https://github.com/marieladesireerodriguez22-droid/ProyectoIntegradorM2.git)
cd ProyectoIntegradorM2
npm install

## 🚀 Deploy en Railway

Para desplegar esta API en Railway, seguir estos pasos:

1. **Crear el proyecto en Railway:**
   * Ir a [railway.app](https://railway.app/) e iniciar sesión con GitHub.
   * Hacer clic en **New Project** y seleccionar **Deploy from GitHub repository**.
   * Elegir este repositorio (`ProyectoIntegradorM2`).

2. **Agregar la Base de Datos (PostgreSQL):**
   * En el mismo espacio de trabajo de Railway, hacer clic en **New** > **Database** > **Add PostgreSQL**.
   * Railway creará la base de datos automáticamente y generará las variables de conexión.

3. **Configurar las Variables de Entorno (Variables):**
   * Ir al servicio de la API de Express en Railway, entrar a la pestaña **Variables** y asociar las variables de la base de datos usando las que provee Railway:
     * `PORT` = `3000`
     * `DB_USER` = `${{Postgres.DATABASE_URL}}` (o las credenciales separadas que te da el plugin de Postgres).
     * `DB_PASSWORD` = `${{Postgres.PGPASSWORD}}`
     * `DB_HOST` = `${{Postgres.PGHOST}}`
     * `DB_NAME` = `${{Postgres.PGDATABASE}}`
     * `DB_PORT` = `${{Postgres.PGPORT}}`

4. **Comandos de Inicio:**
   * Railway detectará automáticamente el `package.json` y ejecutará el comando `npm start`. Asegurarse de que en `package.json` el script `start` apunte a `node src/server.js`.

