const prompt = require("prompt-sync")()

const nomeTurno = prompt("Digite o nome do turno: ")
const meta = Number(prompt("Digite a meta de produção: "))
const producaoInicial = Number(prompt("Digite a produção inicial: "))
const pecasPorCaixa = Number(prompt("Digite quantos itens cabem em uma caixa: "))

let producaoFinal = producaoInicial

while (producaoFinal < meta) {
    producaoFinal++
}

let itensRestantes = producaoFinal
let caixasNecessarias = 0

do {
    itensRestantes -= pecasPorCaixa
    caixasNecessarias++
} while (itensRestantes > 0)

const situacaoMeta = producaoFinal >= meta
    ? "Meta atingida"
    : "Meta não atingida"

const resumo = `
===== RESUMO DO TURNO =====
Turno: ${nomeTurno}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação da meta: ${situacaoMeta}
===========================
`

console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}
