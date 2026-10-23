const prompt = require("prompt-sync")()

let meta = 0

do {
  meta = Number(prompt("Meta de lotes (maior que 0): "))
} while (meta <= 0)

let lotes = 0

do {
  lotes++
} while (lotes < meta)

module.exports = lotes