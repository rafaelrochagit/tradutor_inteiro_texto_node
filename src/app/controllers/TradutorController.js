const IntegerHelper = require("../helpers/IntegerHelper")

class TradutorController {

    async traduz (req, res) {
        const numero = req.param('numero')
        const numeroInteiro = parseInt(numero)
        if (IntegerHelper.isInteger(numero) && (numeroInteiro >= -99999 && numeroInteiro <= 99999)) {
            return res.status(200).send()
        }
        const jsonResponse = {'message': 'O numero passado deve ser um inteiro está entre -99999 e 99999'} 
        return res.status(400).json(jsonResponse)
    }

}

module.exports = new TradutorController