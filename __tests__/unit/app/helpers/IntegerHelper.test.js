const IntegerHelper = require("../../../../src/app/helpers/IntegerHelper")

describe('IntegerHelper.isInteger', () => {
    it('retorna true se um numero inteiro é passado', () => {
        const valor = 10
        expect(IntegerHelper.isInteger(valor)).toBe(true)
    })

    it('retorna true se uma string de um numero inteiro é passado', () => {
        const valor = "12"
        expect(IntegerHelper.isInteger(valor)).toBe(true)
    })

    it('retorna false se um numero float é passado', () => {
        const valor = 10.60
        expect(IntegerHelper.isInteger(valor)).toBe(false)
    })

    it('retorna false se uma string de um numero float é passado', () => {
        const valor = "12.2"
        expect(IntegerHelper.isInteger(valor)).toBe(false)
    })

    it('retorna false se uma string qualquer é passada', () => {
        const valor = "Rafael"
        expect(IntegerHelper.isInteger(valor)).toBe(false)
    })
})