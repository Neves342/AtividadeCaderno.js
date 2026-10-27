const entrada = require("readline-sync");

let salas = ["Laboratório 1", "Laboratório 2", "Laboratório 3"]; 
let temperaturas = [23.5, 29.8, 26.2];

function consultarSalas() {
    console.log("\n--- Temperaturas Atuais ---");
    for (let i = 0; i < salas.length; i++) {
        console.log(`${i} - ${salas[i]}: ${temperaturas[i]}°C`);
    }
}

function obterMaiorTemperatura() {
    let maiorTemp = temperaturas[0];
    let salaMaior = salas[0];
    for (let i = 1; i < temperaturas.length; i++) {
        if (temperaturas[i] > maiorTemp) {
            maiorTemp = temperaturas[i];
            salaMaior = salas[i];
        }
    }
    return `${salaMaior} (${maiorTemp}°C)`;
}

function calcularMedia() {
    let soma = 0;
    for (let i = 0; i < temperaturas.length; i++) {
        soma += temperaturas[i];
    }
    return (soma / temperaturas.length).toFixed(1);
}

function contarAcimaDe27() {
    let contagem = 0;
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 27) {
            contagem++;
        }
    }
    return contagem;
}

function verificarAcimaDe30() {
    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 30) {
            return true;
        }
    }
    return false;
}

while (true) {
    console.log("\n--- PAINEL DE MONITORAMENTO ---");
    console.log("1. Ver todas as salas e temperaturas");
    console.log("2. Registrar nova temperatura");
    console.log("3. Ver sala com maior temperatura");
    console.log("4. Ver temperatura média");
    console.log("5. Contar salas acima de 27°C");
    console.log("6. Verificar se alguma sala passou de 30°C");
    console.log("7. Sair");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            consultarSalas();
            break;

        case 2:
            consultarSalas();
            let indice = Number(entrada.question("\nDigite o numero da sala para alterar: "));
            if (indice >= 0 && indice < salas.length) {
                let novaTemp = Number(entrada.question("Digite a nova temperatura: "));
                temperaturas[indice] = novaTemp;
                console.log("Temperatura atualizada com sucesso!");
            } else {
                console.log("Erro: Número de sala inválido!");
            }
            break;

        case 3:
            console.log(`\nA maior temperatura está no ${obterMaiorTemperatura()}`);
            break;

        case 4:
            console.log(`\nA temperatura média das salas é: ${calcularMedia()}°C`);
            break;

        case 5:
            console.log(`\nQuantidade de salas acima de 27°C: ${contarAcimaDe27()}`);
            break;

        case 6:
            if (verificarAcimaDe30()) {
                console.log("\nAlerta: Sim, existe pelo menos uma sala que ultrapassou 30°C!");
            } else {
                console.log("\nSeguro: Nenhuma sala passou de 30°C.");
            }
            break;

        case 7:
            console.log("Encerrando monitoramento...");
            process.exit();

        default:
            console.log("Opção inválida!");
    }
}
