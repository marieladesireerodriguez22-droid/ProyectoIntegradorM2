// tests/post.test.js
const request = require('supertest');
const app = require('../src/app');
const db = require('../src/db/db');

describe('🧪 Tests para la entidad Posts (/api/posts)', () => {
  
  afterAll(async () => {
    if (db && db.end) {
      await db.end();
    }
  });

  describe('GET /api/posts', () => {
    it('Debería retornar un status 200 y la lista de publicaciones', async () => {
      const response = await request(app).get('/api/posts');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});