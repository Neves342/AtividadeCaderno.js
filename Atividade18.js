// Atividade 18 — Registro de distâncias 
// Crie um programa que permita registrar as distâncias percorridas em diferentes trechos de 
// uma viagem.


const readline = require("readline-sync");

let totalTrechos = 0;
let distanciaTotal = 0;
let maiorDistancia = 0;

while (true) {
    let leitura = Number(readline.question("Digite a distancia do trecho (em km) ou 0 para encerrar: "));

    if (leitura === 0) {
        break;
    }

    if (leitura < 0) {
        console.log("Valor inválido! Distâncias negativas não serão registradas.");
        continue;
    }

    totalTrechos++;
    distanciaTotal += leitura;

    if (leitura > maiorDistancia) {
        maiorDistancia = leitura;
    }
}

console.log(`\n--- Resumo da Viagem ---`);
console.log(`Quantos trechos foram registrados: ${totalTrechos}`);
console.log(`Distância total percorrida: ${distanciaTotal} km`);
console.log(`Maior distância informada: ${maiorDistancia} km`);
