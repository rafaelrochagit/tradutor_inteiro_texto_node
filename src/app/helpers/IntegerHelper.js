class IntegerHelper {
    
    isInteger(valor) {
        return parseInt(valor) == valor
    }
}

module.exports = new IntegerHelper