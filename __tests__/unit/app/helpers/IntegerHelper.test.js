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

describe('IntegerHelper.getRandomIntInclusive', () => {
    it('retorna true se um numero inteiro é passado', () => {
        const min = 10
        const max = 30
        const result = IntegerHelper.getRandomIntInclusive(min, max)
        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThanOrEqual(max)

    })
})

describe('IntegerHelper.getTamanho', () => {
    it('retorna tamanho de numero inteiro', () => {
        const numeros = [1, 2, 4, 111, 6234, 123, -194]
        const tamanhos = [1, 1, 1, 3, 4, 3, 3]

       for (let index = 0; index < numeros.length; index++) {
            result = IntegerHelper.getTamanho(numeros[index]);
            expect(result).toBe(tamanhos[index]);
        }
    })
})