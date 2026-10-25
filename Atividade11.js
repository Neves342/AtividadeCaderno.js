const entrada = require("readline-sync");

let valor = Number(entrada.question("Digite o valor da compra: "));

function loja(valorCompra) {
    if (valorCompra < 0) {
        console.log("Erro: Entrada inválida. O valor da compra não pode ser negativo.");
        return;
    }

    let frete = 0;

    if (valorCompra < 100.00) {
        frete = 20.00;
    } else if (valorCompra >= 100.00 && valorCompra <= 249.99) {
        frete = 12.00;
    } else {
        frete = 0.00;
    }

    let valorFinal = valorCompra + frete;

    console.log(`\n--- Resumo do Pedido ---`);
    console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
    console.log(`Valor do frete: R$ ${frete.toFixed(2)}`);
    console.log(`Valor final (Compra + Frete): R$ ${valorFinal.toFixed(2)}`);
}

loja(valor);
