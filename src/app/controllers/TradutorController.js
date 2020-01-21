const IntegerHelper = require("../helpers/IntegerHelper")
const TradutorService = require("../services/TradutorService")

class TradutorController {

    async traduz (req, res) {
        const numero = req.params.numero
        const numeroInteiro = parseInt(numero)
        if (IntegerHelper.isInteger(numero) && (numeroInteiro >= -99999 && numeroInteiro <= 99999)) {
            const traducaoExtenso = TradutorService.traduzir(numeroInteiro)
            const jsonResponseSuccess = {"extenso": traducaoExtenso}
            return res.status(200).json(jsonResponseSuccess)
        }
        const jsonResponse = {'message': 'O numero passado deve ser um inteiro está entre -99999 e 99999'} 
        return res.status(400).json(jsonResponse)
    }

}

module.exports = new TradutorController