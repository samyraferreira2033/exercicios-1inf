const prompt = require('prompt-sync')()

function calcularFrete(subtotal) {
    if (subtotal >= 80) {
        return 0
    } else {
        return 10
    }
}

const subtotal = Number(prompt('Subtotal do pedido: '))
const frete = calcularFrete(subtotal)

console.log(frete)

module.exports = frete