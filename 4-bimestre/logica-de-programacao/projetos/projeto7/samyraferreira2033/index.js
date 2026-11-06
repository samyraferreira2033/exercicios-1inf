
const prompt = require("prompt-sync")();

// RF01 - Registro do catálogo

const limiteEstoqueBaixo = Number(
    prompt("Digite o limite de estoque baixo: ")
);

const quantidadeProdutos = Number(
    prompt("Digite a quantidade de produtos: ")
);

const catalogo = [];

for (let i = 0; i < quantidadeProdutos; i++) {
    const nome = prompt(`Produto ${i + 1} - nome: `);
    const preco = Number(prompt(`Produto ${i + 1} - preço: `));
    const estoque = Number(prompt(`Produto ${i + 1} - estoque: `));

    catalogo.push({
        nome,
        preco,
        estoque
    });
}

// RF02 - Produto mais caro

let produtoMaisCaro = catalogo[0].nome;
let maiorPreco = catalogo[0].preco;

for (let i = 1; i < catalogo.length; i++) {
    if (catalogo[i].preco > maiorPreco) {
        maiorPreco = catalogo[i].preco;
        produtoMaisCaro = catalogo[i].nome;
    }
}

// RF03 - Estoque total

let estoqueTotal = 0;

for (let i = 0; i < catalogo.length; i++) {
    estoqueTotal += catalogo[i].estoque;
}

// RF04 - Produtos com estoque baixo

let produtosComEstoqueBaixo = 0;

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++;
    }
}

// RF05 - Reajuste de preço

const nomeProdutoReajuste = prompt(
    "Reajuste - nome do produto: "
);

const aumento = Number(
    prompt("Reajuste - aumento: ")
);

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === nomeProdutoReajuste) {
        catalogo[i].preco += aumento;
        break;
    }
}

// RF06 - Resumo do catálogo

const resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`;

// Exibição dos resultados

console.log("\n--- RESUMO DO CATÁLOGO ---");
console.log(resumo);

// Exportação para os testes automáticos

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
};
