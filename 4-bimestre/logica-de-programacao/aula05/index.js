const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))

let totalProduzido = 0

for (let dia = 1; dia <= dias; dia++) {
  const producao = Number(prompt(`Produção do dia ${dia}: `))
  totalProduzido += producao
}

module.exports = totalProduzido