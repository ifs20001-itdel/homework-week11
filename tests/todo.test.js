const app = require('../app')
const request = require('supertest')

describe('Test API Todo', () => {
  describe('GET Todo', () => {
    test('GET 200 All Todo', (done) => {
      request(app)
        .get('/todo')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.body.message).toBe('success')
          done()
        })
        .catch(done)
    })
  })
})
