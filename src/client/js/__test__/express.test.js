const request = require('supertest');
import '@babel/polyfill';
const app = require('../../server/index.js') 


describe('Test root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/geo');
        expect(response.statusCode).toBe(200);
    });
});

