const TradutorService = require("../../../../src/app/services/TradutorService")
const IntegerHelper = require("../../../../src/app/helpers/IntegerHelper")

describe('TradutorService.traduzir', () => {
    it('deve receber um numero inteiro como parametro e traduzi-lo para texto', () => {
        const numeros = [5, 12, 64, 111, 6234, 14513, 56325, -56325]
        const traducoes = [
            'cinco',
            'doze',
            'sessenta e quatro',
            'cento e onze',
            'seis mil e duzentos e trinta e quatro',
            'quatorze mil e quinhentos e treze',
            'cinquenta e seis mil e trezentos e vinte e cinco',
            'menos cinquenta e seis mil e trezentos e vinte e cinco'
        ]

       for (let index = 0; index < numeros.length; index++) {
            result = TradutorService.traduzir(numeros[index])
            expect(result).toBe(traducoes[index])
        }
    })
})