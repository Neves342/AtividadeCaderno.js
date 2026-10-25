// Atividade 24 — Contando ocorrências 
// Uma lista registra os tipos de equipamentos solicitados para manutenção:

const entrada = require("readline-sync");

let equipamentos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Mouse",
    "Headset",
    "Mouse",
    "Teclado"
];

let pesquisa = entrada.question("Digite o nome do equipamento para pesquisa: ");
let contador = 0;

for (let i = 0; i < equipamentos.length; i++) {
    if (equipamentos[i] === pesquisa) {
        contador++;
    }
}

console.log(`O equipamento "${pesquisa}" apareceu ${contador} vezes na lista.`);


