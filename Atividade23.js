// Atividade 23 — Pesquisa em um array 
// Uma biblioteca de jogos mantém a seguinte lista: 

const entrada = require("readline-sync");

let jogos = [
    "Minecraft",
    "Terraria",
    "Stardew Valley",
    "Hollow Knight",
    "Celeste"
];

let nome = entrada.question("Digite um jogo: ");

let encontrado = false;
let posicao = -1;

for (let i = 0; i < jogos.length; i++) {
    if (jogos[i] === nome) {
        encontrado = true;
        posicao = i;
        break;
    }
}

if (encontrado === true) {
    console.log(`O jogo "${nome}" foi encontrado na posição ${posicao} da lista.`);
} else {
    console.log(`O jogo "${nome}" não foi encontrado.`);
}


