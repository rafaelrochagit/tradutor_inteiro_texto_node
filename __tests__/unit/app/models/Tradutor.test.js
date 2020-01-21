const Tradutor = require("../../../../src/app/model/Tradutor")

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
            result = tradutor.getSinal();
            expect(result).toBe(traducoes[index]);
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
            result = tradutor.getDezenaDeMilhar();
            expect(result).toBe(traducoes[index]);
        }
    })
})

describe('Tradutor.getUnidadeDeMilhar', () => {
    it('deve retornar a unidade de milhar do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, -12, 64, 111, -6234, 14513, -56325]
        const traducoes = [
            '',
            '',
            '',
            '',
            'seis mil',
            '',
            'seis mil'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getUnidadeDeMilhar();
            expect(result).toBe(traducoes[index]);
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
            'quinhetos',
            'trezentos'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getCentena();
            expect(result).toBe(traducoes[index]);
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
            result = tradutor.getDezena();
            expect(result).toBe(traducoes[index]);
        }
    })
})

describe('Tradutor.getUnidade', () => {
    it('deve retornar a unidade do numero passado no construtor do model Tradutor', () => {
        const numeros = [5, 12, -64, -111, 6234, -14513, 56325]
        const traducoes = [
            'cinco',
            '',
            'quatro',
            '',
            'quatro',
            '',
            'cinco'
        ]

       for (let index = 0; index < numeros.length; index++) {
            tradutor = new Tradutor(numeros[index])
            result = tradutor.getUnidade();
            expect(result).toBe(traducoes[index]);
        }
    })
})