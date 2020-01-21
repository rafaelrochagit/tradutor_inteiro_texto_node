class IntegerHelper {
    
    isInteger(valor) {
        return parseInt(valor) == valor
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getTamanho(numero) {
        const numeroPositivo = Math.abs(numero)
        return numeroPositivo.toString().length
    }

}

module.exports = new IntegerHelper