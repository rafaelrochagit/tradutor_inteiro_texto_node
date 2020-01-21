const IntegerHelper = require("./IntegerHelper")

class TradutorHelper {
    
    getStrUnidade(numero) {
        const numeroPositivo = Math.abs(numero)
        switch (numeroPositivo) {
            case 0:
                return 'zero'
            case 1:
                return 'um'
            case 2:
                return 'dois'
            case 3:
                return 'três'
            case 4:
                return 'quatro'
            case 5:
                return 'cinco'
            case 6:
                return 'seis'
            case 7:
                return 'sete'
            case 8:
                return 'oito'
            case 9: 
                return 'nove'
            default:
                return ''
        }
    }

    getStrDezena(numero) {
        const numeroPositivo = Math.abs(numero)
        const numeros = [
            2,3,4,5,
            6,7,8,9,
            10,11,12,13,
            14,15,16,17,
            18,19
        ]

        const traducoesNumerosDezenas = [
            'vinte','trinta','quarenta','cinquenta',
            'sessenta','setenta','oitenta','noventa',
            'dez', 'onze', 'doze', 'treze',
            'quatorze', 'quinze', 'dezesseis', 'dezessete', 
            'dezoito', 'dezenove'
        ]

        const index = numeros.indexOf(numeroPositivo)

        return index == -1 ? '' : traducoesNumerosDezenas[index]
    }

    getStrCentena(numero) {
        const numeroPositivo = Math.abs(numero)
        const numeros = [
            1,2,3,4,5,
            6,7,8,9,
        ]

        const traducoesNumerosCentenas = [
            'cento','duzentos','trezentos','quatrocentos','quinhentos',
            'seiscentos','setecentos','oitocentos','novecentos'
        ]

        const index = numeros.indexOf(numeroPositivo)

        return index == -1 ? '' : traducoesNumerosCentenas[index]
    }

    getDezenasExcecao() {
        return [10,11,12,13,14,15,16,17,18,19]
    }
}

module.exports = new TradutorHelper