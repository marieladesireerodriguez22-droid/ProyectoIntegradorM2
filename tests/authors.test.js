// tests/authors.test.js
const request = require('supertest');
const app = require('../src/app');
const db = require('../src/db/db');

describe('🧪 Tests para la entidad Authors (/api/authors)', () => {
  
  // 🌟 Limpiamos la base de datos AUTOMÁTICAMENTE antes de arrancar los tests
  beforeAll(async () => {
    if (db && db.query) {
      await db.query('TRUNCATE TABLE comments, posts, authors RESTART IDENTITY CASCADE;');
    }
  });
  
  // Cerramos la conexión a la base de datos al terminar los tests para que Jest no se quede colgado
  afterAll(async () => {
    if (db && db.end) {
      await db.end();
    }
  });

  // Test 1: GET /api/authors
  describe('GET /api/authors', () => {
    it('Debería retornar un status 200 y una lista de autores', async () => {
      const response = await request(app).get('/api/authors');
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  // Test 2: POST /api/authors (Caso Exitoso)
  describe('POST /api/authors - Éxito', () => {
    it('Debería crear un nuevo autor si los datos son válidos (Status 201)', async () => {
      const nuevoAutor = {
        name: 'Test de Integración',
        email: 'test@example.com',
        bio: 'Escritor de pruebas automatizadas'
      };

      const response = await request(app)
        .post('/api/authors')
        .send(nuevoAutor);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(nuevoAutor.name);
    });
  });

  // Test 3: POST /api/authors (Caso Fallido por Validación)
  describe('POST /api/authors - Validaciones', () => {
    it('Debería rebotar con un status 400 si el campo name viene vacío', async () => {
      const autorInvalido = {
        name: '', // Nombre vacío para romper la regla
        email: 'error@example.com'
      };

      const response = await request(app)
        .post('/api/authors')
        .send(autorInvalido);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message');
    });
  });
});