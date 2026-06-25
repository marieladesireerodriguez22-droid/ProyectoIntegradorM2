# 🚀 Proyecto Integrador M2 - API REST Autores y Posts

API REST sencilla construida con **Node.js**, **Express** y **PostgreSQL** (utilizando el driver nativo `pg`). El diseño imita un flujo tipo JSONPlaceholder donde un autor puede tener asociados múltiples posts, incluyendo validaciones personalizadas, manejo de errores a través de middlewares, documentación bajo el estándar OpenAPI y tests automatizados.

---

## 🛠️ Tecnologías Utilizadas

* **Runtime:** Node.js
* **Framework:** Express.js
* **Base de Datos:** PostgreSQL
* **Driver DB:** `pg` (Pool de conexiones y consultas parametrizadas)
* **Testing:** Jest y Supertest
* **Especificación:** OpenAPI 3.0 (JSON)

---

## 📂 Estructura del Proyecto

```text
├── docs/
│   └── openapi.json          # Documentación OpenAPI 3.0
├── scripts/
│   ├── setup.sql             # Script de creación de tablas
│   └── seedData.sql          # Datos de prueba iniciales
├── src/
│   ├── controllers/          # Controladores de la lógica de negocio
│   ├── db/                   # Configuración del Pool de Postgres
│   ├── middlewares/          # Validaciones de entrada (Author y Post)
│   ├── routes/               # Definición de endpoints (Router)
│   ├── services/             # Consultas parametrizadas SQL
│   ├── app.js                # Configuración de Express
│   └── server.js             # Punto de entrada de la aplicación
├── tests/                    # Pruebas de integración con Supertest
├── .env.example              # Plantilla de variables de entorno
├── .gitignore                # Archivos excluidos en Git
└── package.json