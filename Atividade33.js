let numeros =[12, 7, 24, 9, 31, 18, 5, 42]

function calcularSoma(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

function contarPares(lista) {
    let pares = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] % 2 === 0) {
            pares++;
        }
    }
    return pares;
}

function encontrarMaior(lista) {
    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}

function buscarNumero(lista, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return true;
        }
    }
    return false;
}

console.log(`Soma de todos os números: ${calcularSoma(numeros)}`);
console.log(`Quantidade de números pares: ${contarPares(numeros)}`);
console.log(`Maior número encontrado: ${encontrarMaior(numeros)}`);
console.log(`O número 24 está na lista? ${buscarNumero(numeros, 24)}`);
console.log(`O número 99 está na lista? ${buscarNumero(numeros, 99)}`);
