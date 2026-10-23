// Atividade 10 — Menu com switch case 
// Uma aplicação de mídia oferece as seguintes opções:

const readline = require("readline-Sync")
while (true) {
    console.log("1 - Reproduzir música");
    console.log("2 - Pausar reprodução");
    console.log("3 - Avançar faixa");
    console.log("4 - Encerrar aplicação");

    let opcao = Number(readline.question("Escolha uma opcao: "))


switch (opcao) {
    case 1:
    console.log("Reproduzir música")
    break

    case 2:
        console.log("Pausar reprodução")
        break

    case 3:
        console.log("Avançar faixa")
        break
    
    case 4:
        console.log("Encerrar aplicação")
        break

    default:
        console.log("Opção Inválida!")
}
}