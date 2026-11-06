
const prompt = require('prompt-sync')()

const quantidadeVendas = Number(prompt('Quantas vendas? '))

const vendasDaSemana = []

for (let i = 0; i < quantidadeVendas; i++) {
    const venda = Number(prompt(`Venda ${i + 1}: `))
    vendasDaSemana.push(venda)
}

let menorVenda = vendasDaSemana[0]

for (let i = 1; i < vendasDaSemana.length; i++) {
    if (vendasDaSemana[i] < menorVenda) {
        menorVenda = vendasDaSemana[i]
    }
}

console.log(menorVenda)

module.exports = menorVenda
