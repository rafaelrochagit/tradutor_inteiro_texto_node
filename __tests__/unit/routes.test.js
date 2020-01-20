const request = require("supertest")
const app = require("../../src/app")


describe('GET /', () => {
    it('Deve receber uma requisição GET com um parametro', async () => {
        let parameter = 1000
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(200)
    })
  
})