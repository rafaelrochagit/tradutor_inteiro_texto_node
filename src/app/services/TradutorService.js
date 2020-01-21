const Tradutor = require('../models/Tradutor')

class TradutorService {

    traduzir(numero) {
        const tradutor = new Tradutor(numero)
        return tradutor.getExtenso() || ''
    }
}

module.exports = new TradutorService