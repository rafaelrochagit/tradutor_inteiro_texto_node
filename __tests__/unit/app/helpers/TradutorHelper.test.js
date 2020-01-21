const TradutorHelper = require("../../../../src/app/helpers/TradutorHelper")


describe('TradutorHelper.getStrUnidade', () => {
    it('retorna string equivalente a inteiro passsado', () => {
        const numeros = [5, 2, 4, 111, 6234, 123, -194]
        const traducoes = [
            'cinco',
            'dois',
            'quatro',
            '',
            '',
            '',
            ''
        ]

       for (let index = 0; index < numeros.length; index++) {
            result = TradutorHelper.getStrUnidade(numeros[index]);
            expect(result).toBe(traducoes[index]);
        }
    })
})

describe('TradutorHelper.getStrDezena', () => {
    it('retorna string da dezema equivalente a inteiro passsado', () => {
        const numeros = [5, 2, 4, 111, 6234, 12, -19]
        const traducoes = [
            'cinquenta',
            'vinte',
            'quarenta',
            '',
            '',
            'doze',
            'dezenove'
        ]

       for (let index = 0; index < numeros.length; index++) {
            result = TradutorHelper.getStrDezena(numeros[index]);
            expect(result).toBe(traducoes[index]);
        }
    })
})

describe('TradutorHelper.getDezenasExcecao', () => {
    it('retorna array de numeros de excecao a regra da dezena', () => {
        const numerosExcecoes = [10,11,12,13,14,15,16,17,18,19]
        result = TradutorHelper.getDezenasExcecao();
        expect(result).toMatchObject(numerosExcecoes);
    })
})