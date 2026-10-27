


const entrada = require("readline-sync");

let catalogo = [
    { nome: "Minecraft", genero: "Sandbox", horas: 45 },
    { nome: "Terraria", genero: "Aventura", horas: 20 },
    { nome: "Celeste", genero: "Plataforma", horas: 12 }
];

while (true) {
    console.log("\n--- CATÁLOGO DE JOGOS ---");
    console.log("1. Cadastrar jogo");
    console.log("2. Listar jogos");
    console.log("3. Pesquisar jogo por nome");
    console.log("4. Atualizar horas jogadas");
    console.log("5. Mostrar o jogo mais jogado");
    console.log("6. Calcular total de horas do catálogo");
    console.log("7. Sair");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            let nomeJogo = entrada.question("Nome do jogo: ");
            let generoJogo = entrada.question("Gênero: ");
            let horasJogo = Number(entrada.question("Horas jogadas: "));
            if (horasJogo < 0) {
                console.log("Erro: Horas não podem ser negativas.");
            } else {
                catalogo.push({ nome: nomeJogo, genero: generoJogo, horas: horasJogo });
                console.log("Jogo cadastrado com sucesso!");
            }
            break;

        case 2:
            console.log("\n--- Lista de Jogos ---");
            for (let i = 0; i < catalogo.length; i++) {
                console.log(`${i} - ${catalogo[i].nome} | Gênero: ${catalogo[i].genero} | Horas: ${catalogo[i].horas}h`);
            }
            break;

        case 3:
            let busca = entrada.question("Digite o nome do jogo: ");
            let achou = false;
            for (let i = 0; i < catalogo.length; i++) {
                if (catalogo[i].nome === busca) {
                    console.log(`Jogo encontrado na posição ${i}: ${catalogo[i].nome} (${catalogo[i].genero}) - ${catalogo[i].horas}h`);
                    achou = true;
                    break;
                }
            }
            if (!achou) console.log("Jogo não encontrado.");
            break;

        case 4:
            let idx = Number(entrada.question("Digite a posicao do jogo: "));
            if (idx >= 0 && idx < catalogo.length) {
                let novasHoras = Number(entrada.question("Digite a nova quantidade de horas totais: "));
                if (novasHoras < 0) {
                    console.log("Erro: Não aceitamos horas negativas.");
                } else {
                    catalogo[idx].horas = novasHoras;
                    console.log("Horas atualizadas!");
                }
            } else {
                console.log("Posição inválida.");
            }
            break;

        case 5:
            let maisJogado = catalogo[0];
            for (let i = 1; i < catalogo.length; i++) {
                if (catalogo[i].horas > maisJogado.horas) {
                    maisJogado = catalogo[i];
                }
            }
            console.log(`O jogo com mais horas é: ${maisJogado.nome} com ${maisJogado.horas}h`);
            break;

        case 6:
            let totalHoras = 0;
            for (let i = 0; i < catalogo.length; i++) {
                totalHoras += catalogo[i].horas;
            }
            console.log(`Total de horas jogadas em todos os jogos: ${totalHoras}h`);
            break;

        case 7:
            console.log("Saindo do catálogo...");
            process.exit();

        default:
            console.log("Opção inválida!");
    }
}
