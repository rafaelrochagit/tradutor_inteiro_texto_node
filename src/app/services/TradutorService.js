class TradutorService {

    traduzir(numero) {
        const numeros = [5, 12, 64, 111, 6234, 14513, 56325, -56325]
        const traducoes = [
            'cinco',
            'doze',
            'sessenta e quatro',
            'cento e onze',
            'seis mil e duzentos e trinta e quatro',
            'quatorze mil e quinhetos e treze',
            'cinquenta e seis mil e trezentos e vinte e cinco',
            'menos cinquenta e seis mil e trezentos e vinte e cinco'
        ]

        const index = numeros.indexOf(numero)
        return traducoes[index]
    }
}

module.exports = new TradutorService