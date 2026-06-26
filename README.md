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
2. Configurar variables de entornoBashcp .env.example .env
# Editar .env con tus credenciales de PostgreSQL
Fragmento de códigoDATABASE_URL=postgresql://postgres:password@localhost:5432/miniblog
NODE_ENV=development
PORT=3000
3. Crear la base de datosBashcreatedb miniblog
# o desde psql: CREATE DATABASE miniblog;
4. Ejecutar el script de setupBashpsql $DATABASE_URL -f scripts/setup.sql
5. (Opcional) Cargar datos de ejemploBashpsql $DATABASE_URL -f scripts/seedData.sql
6. Iniciar el servidorBashnpm run dev    # con hot reload (nodemon)
npm start      # sin hot reload
La API estará disponible en http://localhost:3000.EndpointsMétodoRutaDescripciónGET/healthHealth checkGET/authorsListar todos los autoresGET/authors/:idObtener autor por IDPOST/authorsCrear autorPUT/authors/:idActualizar autorDELETE/authors/:idEliminar autorGET/postsListar todos los postsGET/posts/:idObtener post por IDGET/posts/author/:authorIdPosts de un autor (con datos autor)POST/postsCrear postPUT/posts/:idActualizar postDELETE/posts/:idEliminar postTestsLos tests usan Jest + Supertest con mocks del pool de base de datos (no requieren conexión real).Bashnpm test               # ejecutar tests
npm run test:coverage  # con reporte de cobertura
Documentación OpenAPIEl archivo docs/openapi.json contiene la especificación completa.Visualizar con Swagger UI (local)Bashnpx @redocly/cli preview-docs docs/openapi.json
O importar el archivo en https://editor.swagger.io.Deploy en RailwayPasosCrear cuenta en Railway y conectar el repo de GitHub.Crear un nuevo proyecto → "Deploy from GitHub repo".Agregar un plugin de PostgreSQL al proyecto.En la sección Variables del servicio Node, agregar:VariableValorDATABASE_URL${{Postgres.DATABASE_URL}} (internal URL)NODE_ENVproductionPORTRailway lo inyecta automáticamenteRailway detectará el package.json y usará npm start como comando de inicio.Correr el script de setup desde la terminal de Railway o desde tu máquina apuntando a la URL pública:Bashpsql <DATABASE_PUBLIC_URL> -f scripts/setup.sql
psql <DATABASE_PUBLIC_URL> -f scripts/seedData.sql
La app quedará disponible en la URL pública generada por Railway.Variables de entornoVariableDescripciónRequeridaDATABASE_URLConnection string de PostgreSQL✅NODE_ENVdevelopment / production / test✅PORTPuerto del servidor (default: 3000)❌⚠️ Nunca subas el archivo .env a GitHub. Solo se versiona .env.example.Registro de uso de IADurante el desarrollo se utilizó IA como herramienta de apoyo para:Generación de la estructura inicial del proyecto y boilerplate.Revisión de consultas SQL parametrizadas y manejo de errores PostgreSQL.Redacción de tests con Jest/Supertest usando mocks del pool.Generación del archivo OpenAPI JSON.Todos los fragmentos generados fueron revisados, adaptados y comprendidos antes de ser integrados al proyecto.
