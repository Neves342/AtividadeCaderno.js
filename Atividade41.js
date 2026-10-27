


const entrada = require("readline-sync");

let salas = ["Sala A", "Sala B", "Sala C", "Sala D"]; 
let reservadas = [false, true, false, false];

while (true) {
    console.log("\n--- RESERVA DE SALAS ---");
    console.log("1. Consultar salas");
    console.log("2. Reservar uma sala");
    console.log("3. Cancelar uma reserva");
    console.log("4. Consultar quantidade de salas disponíveis");
    console.log("5. Encerrar o sistema");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            console.log("\nEstados das Salas:");
            for (let i = 0; i < salas.length; i++) {
                let status = reservadas[i] ? "Reservada" : "Disponível";
                console.log(`${i} - ${salas[i]} (${status})`);
            }
            break;

        case 2:
            console.log("\nSalas para reservar:");
            for (let i = 0; i < salas.length; i++) {
                let status = reservadas[i] ? "Reservada" : "Disponível";
                console.log(`${i} - ${salas[i]} (${status})`);
            }
            let indiceReserva = Number(entrada.question("\nDigite o numero da sala que deseja reservar: "));
            
            if (indiceReserva >= 0 && indiceReserva < salas.length) {
                if (reservadas[indiceReserva] === true) {
                    console.log("Erro: Esta sala já está reservada!");
                } else {
                    reservadas[indiceReserva] = true;
                    console.log(`Sucesso: ${salas[indiceReserva]} reservada com sucesso!`);
                }
            } else {
                console.log("Erro: Número de sala inválido!");
            }
            break;

        case 3:
            console.log("\nSalas reservadas atualmente:");
            for (let i = 0; i < salas.length; i++) {
                let status = reservadas[i] ? "Reservada" : "Disponível";
                console.log(`${i} - ${salas[i]} (${status})`);
            }
            let indiceCancelamento = Number(entrada.question("\nDigite o numero da sala para cancelar a reserva: "));
            
            if (indiceCancelamento >= 0 && indiceCancelamento < salas.length) {
                if (reservadas[indiceCancelamento] === false) {
                    console.log("Erro: Esta sala não possui nenhuma reserva ativa!");
                } else {
                    reservadas[indiceCancelamento] = false;
                    console.log(`Sucesso: Reserva da ${salas[indiceCancelamento]} cancelada!`);
                }
            } else {
                console.log("Erro: Número de sala inválido!");
            }
            break;

        case 4:
            let contagemDisponiveis = 0;
            for (let i = 0; i < reservadas.length; i++) {
                if (reservadas[i] === false) {
                    contagemDisponiveis++;
                }
            }
            console.log(`\nQuantidade de salas disponíveis: ${contagemDisponiveis}`);
            break;

        case 5:
            console.log("Encerrando o sistema de reservas... Até logo!");
            process.exit();

        default:
            console.log("Opção inválida! Escolha de 1 a 5.");
    }
}
