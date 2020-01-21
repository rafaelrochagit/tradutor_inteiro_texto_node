const Tradutor = require("../../../../src/app/models/Tradutor")

describe('Tradutor.getSinal', () => {
    it('deve retornar o sinal do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, -12, 64, -111, 6234, -14513, 56325]
        const traducoes = [
            '',
            'menos',
            '',
            'menos',
            '',
            'menos',
            ''
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getSinal()
            expect(result).toBe(traducoes[index])
        }
    })
})

describe('Tradutor.getDezenaDeMilhar', () => {
    it('deve retornar a dezena de milhar do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, 12, 64, -111, 6234, -14513, 56325]
        const traducoes = [
            '',
            '',
            '',
            '',
            '',
            'quatorze mil',
            'cinquenta'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getDezenaDeMilhar()
            expect(result).toBe(traducoes[index])
        }
    })
})

describe('Tradutor.getUnidadeDeMilhar', () => {
    it('deve retornar a unidade de milhar do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, -12, 64, 111, -6234, 14513, -56325, 1500]
        const traducoes = [
            '',
            '',
            '',
            '',
            'seis mil',
            '',
            'seis mil',
            'mil'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getUnidadeDeMilhar()
            expect(result).toBe(traducoes[index])
        }
    })
})

describe('Tradutor.getCentena', () => {
    it('deve retornar a centena do numero passado no construtor do model Tradutor', () => {
        const numeros = [-5, 12, 64, -111, 6234, -14513, 56325]
        const traducoes = [
            '',
            '',
            '',
            'cento',
            'duzentos',
            'quinhentos',
            'trezentos'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getCentena()
            expect(result).toBe(traducoes[index])
        }
    })
})

describe('Tradutor.getDezena', () => {
    it('deve retornar a dezena do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, 12, 64, 111, 6234, 14513, 56325]
        const traducoes = [
            '',
            'doze',
            'sessenta',
            'onze',
            'trinta',
            'treze',
            'vinte'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getDezena()
            expect(result).toBe(traducoes[index])
        }
    })
})

describe('Tradutor.getUnidade', () => {
    it('deve retornar a unidade do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, 12, -64, -111, 6234, -14513, 56325, 500, 60, 1000, 30000]
        const traducoes = [
            'cinco',
            '',
            'quatro',
            '',
            'quatro',
            '',
            'cinco',
            '',
            '',
            '',
            '',
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getUnidade()
            expect(result).toBe(traducoes[index])
        }
    })
})

describe('Tradutor.getExtenso', () => {
    it('deve retornar a unidade do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, 12, 64, 111, 6234, 14513, 56325, -56325, 150]
        const traducoes = [
            'cinco',
            'doze',
            'sessenta e quatro',
            'cento e onze',
            'seis mil e duzentos e trinta e quatro',
            'quatorze mil e quinhentos e treze',
            'cinquenta e seis mil e trezentos e vinte e cinco',
            'menos cinquenta e seis mil e trezentos e vinte e cinco',
            'cento e cinquenta'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getExtenso()
            expect(result).toBe(traducoes[index])
        }
    })
})