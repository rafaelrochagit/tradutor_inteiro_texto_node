const TradutorHelper = require('../helpers/TradutorHelper')
const IntegerHelper = require('../helpers/IntegerHelper')

class Tradutor {

    constructor (numero) {
        this.numeroInteiro = parseInt(numero)
        this.numeroString = this.numeroInteiro.toString()
        this.numeroInteiroPositivo = Math.abs(this.numeroInteiro)
        this.numeroStringPositivo = this.numeroInteiroPositivo.toString()
        this.tamanhoNumero = this.numeroStringPositivo.length

    }

    getSinal() {
        return this.numeroInteiro == this.numeroInteiroPositivo ? '' : 'menos'
    }

    getDezenaDeMilhar() {
        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) < 5) return ''

        const dezenasExcecoes = TradutorHelper.getDezenasExcecao()
        const dezenaDeMilhar = this.numeroStringPositivo[this.tamanhoNumero - 5]
        const unidadeDeMilhar = this.numeroStringPositivo[this.tamanhoNumero - 4]

        const dezenaDeMilharCompleta = dezenaDeMilhar == 1 ? dezenaDeMilhar + unidadeDeMilhar : dezenaDeMilhar

        const dezenaString = TradutorHelper.getStrDezena(dezenaDeMilharCompleta)
        
        if (dezenaString.length <= 0) return ''

        const dezenaStringCompleta = dezenasExcecoes.includes(parseInt(dezenaDeMilharCompleta)) ? dezenaString.toString() + ' mil' : dezenaString
        
        return dezenaStringCompleta
    }

    getUnidadeDeMilhar() {
        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) < 4) return ''
        const unidadeDeMilhar = this.numeroStringPositivo[this.tamanhoNumero - 4]

        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) >= 4) {
            const dezenaDeMilhar = this.numeroStringPositivo[this.tamanhoNumero - 5]
            if (dezenaDeMilhar == 1) return ''
        } 

        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) == 4 && unidadeDeMilhar == 1) return 'mil'

        if (unidadeDeMilhar == "0") return 'mil'

        const unidadeString = TradutorHelper.getStrUnidade(unidadeDeMilhar)

        return unidadeString.length > 0 ? unidadeString.toString() + ' mil' : ''
    }

    getCentena () {
        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) < 3) return ''

        const ultimosTresDigitos = this.numeroStringPositivo.substring(this.tamanhoNumero - 3)
        if (ultimosTresDigitos == 100) return "cem"
 
        const centena = this.numeroStringPositivo[this.tamanhoNumero - 3]

        const centenaString = TradutorHelper.getStrCentena(centena)

        return centenaString.length > 0 ? centenaString.toString() : ''
    }

    getDezena() {
        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) < 2) return ''

        const dezenasExcecoes = TradutorHelper.getDezenasExcecao()
        const dezena = this.numeroStringPositivo[this.tamanhoNumero - 2]
        const unidade = this.numeroStringPositivo[this.tamanhoNumero - 1]

        const dezenaCompleta = dezena == 1 ? dezena + unidade : dezena

        const dezenaString = TradutorHelper.getStrDezena(dezenaCompleta)
        
        return dezenaString.length > 0 ? dezenaString : ''
    }

    getUnidade() {
        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) < 1) return ''

        const unidade = this.numeroStringPositivo[this.tamanhoNumero - 1]

        if (IntegerHelper.getTamanho(this.numeroInteiroPositivo) >= 2) {

            if (unidade == 0) return ''

            const dezena = this.numeroStringPositivo[this.tamanhoNumero - 2]
            
            if (dezena == 1) return ''
        } 

      

        const unidadeString = TradutorHelper.getStrUnidade(unidade)

        return unidadeString.length > 0 ? unidadeString : ''
    }

    getExtenso() {
        let sinal = this.getSinal()
        let dezenaDeMilhar = this.getDezenaDeMilhar()
        let unidadeDeMilhar = this.getUnidadeDeMilhar()
        let centena = this.getCentena()
        let dezena = this.getDezena()
        let unidade = this.getUnidade()

        let extenso = sinal.length ? sinal + ' ' : sinal;
        extenso += dezenaDeMilhar;
        
        extenso += dezenaDeMilhar.length && unidadeDeMilhar.length  && unidadeDeMilhar != 'mil' ? ' e ' + unidadeDeMilhar :  ''
        extenso += !dezenaDeMilhar.length && unidadeDeMilhar.length ? unidadeDeMilhar :  ''
        extenso += dezenaDeMilhar.length && unidadeDeMilhar.length && unidadeDeMilhar == 'mil' ? ' mil' :  ''

        extenso += (dezenaDeMilhar.length || unidadeDeMilhar.length) && centena.length ? ' e ' + centena : centena
        extenso += (dezenaDeMilhar.length || unidadeDeMilhar.length || centena.length) && dezena.length ? ' e ' + dezena : dezena
        extenso += (dezenaDeMilhar.length || unidadeDeMilhar.length || centena.length || dezena.length) && unidade.length ? ' e ' + unidade : unidade

        return extenso
    }

}

module.exports = Tradutor