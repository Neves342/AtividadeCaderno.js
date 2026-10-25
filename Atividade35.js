// Atividade 35 — Construindo um menu com funções 
// Uma aplicação de organização pessoal deverá permitir que o usuário: 
// 1. Consulte uma mensagem de boas-vindas. 
// 2. Converta minutos em segundos. 
// 3. Verifique se um número é par. 
// 4. Encerre a aplicação. 
// Implemente o sistema utilizando readline-sync, switch case, repetição e funções. 
// Regras: 
// • Crie uma função para cada operação principal. 
// • O menu deverá permanecer ativo até que o usuário escolha encerrar. 
// • As funções responsáveis por cálculos deverão retornar os resultados. 
// • A função principal de cada operação deverá ser chamada a partir do menu. 
// • Trate opções inválidas. 
// O objetivo é separar as responsabilidades em funções, evitando escrever todo o programa 
// dentro de um único bloco de código.


const entrada = require("readline-sync");

function exibirBoasVindas() {
    console.log("Olá! Bem-vindo ao seu sistema de organização pessoal. Tenha um ótimo dia!");
}

function minutosParaSegundos(minutos) {
    return minutos * 60;
}

function verificarPar(numero) {
    return numero % 2 === 0;
}

while (true) {
    console.log("\n--- MENU DE ORGANIZAÇÃO ---");
    console.log("1. Consultar mensagem de boas-vindas");
    console.log("2. Converter minutos em segundos");
    console.log("3. Verificar se um número é par");
    console.log("4. Encerrar a aplicação");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            exibirBoasVindas();
            break;

        case 2:
            let min = Number(entrada.question("Digite a quantidade de minutos: "));
            let seg = minutosParaSegundos(min);
            console.log(`${min} minutos equivalem a ${seg} segundos.`);
            break;

        case 3:
            let num = Number(entrada.question("Digite um numero: "));
            if (verificarPar(num)) {
                console.log(`O número ${num} é PAR.`);
            } else {
                console.log(`O número ${num} é ÍMPAR.`);
            }
            break;

        case 4:
            console.log("Encerrando a aplicação... Até mais!");
            process.exit();

        default:
            console.log("Opção inválida! Escolha um número de 1 a 4.");
    }
}
