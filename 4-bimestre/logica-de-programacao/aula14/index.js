
const prompt = require('prompt-sync')()

const calcularSubtotal = (preco, quantidade) => {
    return preco * quantidade
}

const calcularTotalComFrete = (preco, quantidade, frete) => {
    return calcularSubtotal(preco, quantidade) + frete
}

const preco = Number(prompt('Preço do produto: '))
const quantidade = Number(prompt('Quantidade: '))
const frete = Number(prompt('Valor do frete: '))

const total = calcularTotalComFrete(preco, quantidade, frete)

console.log(total)

module.exports = total
