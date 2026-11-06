
const prompt = require("prompt-sync")()

// Dados do pedido
const precoUnitario = Number(prompt("Digite o preço unitário: "))
const quantidade = Number(prompt("Digite a quantidade: "))
const formaPagamento = prompt("Digite a forma de pagamento (pix, cartao ou dinheiro): ")

// Função para calcular o subtotal
const calcularSubtotal = (preco, quantidade) => {
    return preco * quantidade
}

// Função para calcular o frete
function calcularFrete(subtotal) {
    if (subtotal >= 100) {
        return 0
    } else {
        return 10
    }
}

// Função para calcular o desconto
function calcularDesconto(subtotal, formaPagamento) {
    let percentual = 0

    switch (formaPagamento) {
        case "pix":
            percentual = 5
            break

        case "dinheiro":
            percentual = 5
            break

        case "cartao":
            percentual = 0
            break
    }

    return subtotal * percentual / 100
}

// Função para calcular o total
function calcularTotal(preco, quantidade, formaPagamento) {
    let subtotal = calcularSubtotal(preco, quantidade)
    let frete = calcularFrete(subtotal)
    let desconto = calcularDesconto(subtotal, formaPagamento)

    return subtotal - desconto + frete
}

// Cálculos do pedido
const subtotal = calcularSubtotal(precoUnitario, quantidade)
const frete = calcularFrete(subtotal)
const desconto = calcularDesconto(subtotal, formaPagamento)
const total = calcularTotal(precoUnitario, quantidade, formaPagamento)

// Resumo do pedido
const resumo = `
Resumo do pedido:
Subtotal: R$ ${subtotal}
Frete: R$ ${frete}
Desconto: R$ ${desconto}
Total: R$ ${total}
`

console.log(resumo)

// Exportação para os testes
module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}
