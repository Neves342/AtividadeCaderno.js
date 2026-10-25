// Atividade 15 — Somando números pares 
// Crie um programa que utilize for para percorrer os números de 1 até 100 e calcular a soma de 
// todos os números pares desse intervalo. 



let soma = 0;
let quantidadePares = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        soma += i;
        quantidadePares++;
    }
}

console.log(`A soma final: ${soma}`);
console.log(`A quantidade de números pares encontrados: ${quantidadePares}`);

