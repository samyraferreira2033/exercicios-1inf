const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos turnos? "))

let totalProduzido = 0

for (let i = 1; i <= dias; i++) {
  const producao = Number(prompt(`Produção do turno ${i}: `))

  if (producao > 15) {
    totalProduzido++
  }
}

module.exports = totalProduzido