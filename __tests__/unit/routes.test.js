const request = require("supertest")
const app = require("../../src/app")
const IntegerHelper = require("../../src/app/helpers/IntegerHelper")

describe('GET /', () => {
    it('Deve receber uma requisição GET com um parametro inteiro', async () => {
        let parameter = IntegerHelper.getRandomIntInclusive(-1000,10000)
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(200)
    })

    it('parametro deve ser um inteiro entre -99999 e 99999', async () => {
        let parameter = IntegerHelper.getRandomIntInclusive(-99999,99999)
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(200)
    })

    it('deve responder com um json de sucesso com o paremetro extenso contendo o resultado', async () => {
        let parameter = IntegerHelper.getRandomIntInclusive(-99999,99999)
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('extenso')
    })

    it('parametro não deve aceitar string', async () => {
        let parameter = "testeParametroString"
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(400)
    })

    it('parametro não deve aceitar float', async () => {
        let parameter = 5.5
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(400)
    })

    it('parametro não pode ser um inteiro maior que 99999', async () => {
        let parameter = IntegerHelper.getRandomIntInclusive(99999,1000000)
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(400)
    })

    it('parametro não pode ser um inteiro menor que -99999', async () => {
        let parameter = IntegerHelper.getRandomIntInclusive(-100000000 , -100000)
        const response = await request(app)
            .get('/' + parameter)
            .send()
        
        expect(response.status).toBe(400)
    })

    it('parametro invalido retornar um json com mensagem de validacao', async () => {
        let parameter = IntegerHelper.getRandomIntInclusive(-100000000 , -1000000)
        const response = await request(app)
            .get('/' + parameter)
            .send()
        const jsonResponse = {'message': 'O numero passado deve ser um inteiro está entre -99999 e 99999'} 
        expect(response.status).toBe(400)
        expect(response.type).toEqual('application/json')
        expect(response.body).toMatchObject(jsonResponse)
    })
  
})