const app = require('./../../src/loader/index');
const supertest = require('supertest')
const request = supertest('http://localhost:5555');

describe('specialization Controller', () => {
    describe('/specialization', () => {
        it('should return error - specialization is occupied', async () => {
            await request
                .post('/specialization')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    "name": "ПОИТ",
                    "code": 4,
                    "description": "jjjjj"
                })
                .expect(400);
        })

        it('should return error - validation', async () => {
            await request
                .post('/specialization')
                .set('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.UxaG58pVQpCt0Y5uYio20uUXpj7ctNC4zx4ErwGahnA")
                .send({
                    "name": "ПОИТ",
                    "code": 4,
                    "description": "jjjjj"
                })
                .expect(400);
        })
    })
})