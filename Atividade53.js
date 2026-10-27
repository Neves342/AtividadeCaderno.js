



const entrada = require("readline-sync");

let colecao = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 355 },
    { titulo: "Hotel California", artista: "Eagles", duracao: 390 }
];

function cadastrarMusica() {
    let titulo = entrada.question("Titulo da musica: ");
    let artista = entrada.question("Artista: ");
    let duracao = Number(entrada.question("Duracao em segundos: "));

    if (titulo.trim() === "") {
        console.log("Erro: O título da música não pode estar vazio.");
    } else if (duracao < 0) {
        console.log("Erro: A duração não pode ser um valor negativo.");
    } else {
        colecao.push({ titulo: titulo, artista: artista, duracao: duracao });
        console.log("Música cadastrada com sucesso!");
    }
}

function listarColecao() {
    if (colecao.length === 0) {
        console.log("Sua coleção musical está vazia.");
    } else {
        console.log("\n--- Sua Coleção Musical ---");
        for (let i = 0; i < colecao.length; i++) {
            let m = colecao[i];
            console.log(`${i} - "${m.titulo}" por ${m.artista} (${m.duracao}s)`);
        }
    }
}

function pesquisarTitulo() {
    let busca = entrada.question("Digite o titulo que deseja buscar: ");
    let achou = false;
    for (let i = 0; i < colecao.length; i++) {
        if (colecao[i].titulo === busca) {
            console.log(`Encontrada no índice ${i}: "${colecao[i].titulo}" - ${colecao[i].artista}`);
            achou = true;
            break;
        }
    }
    if (!achou) console.log("Música não encontrada.");
}

function atualizarDuracao() {
    listarColecao();
    let idx = Number(entrada.question("\nDigite o numero da musica para atualizar: "));
    if (idx >= 0 && idx < colecao.length) {
        let novaDuracao = Number(entrada.question("Digite a nova duracao em segundos: "));
        if (novaDuracao < 0) {
            console.log("Erro: Não são permitidas durações negativas.");
        } else {
            colecao[idx].duracao = novaDuracao;
            console.log("Duração atualizada!");
        }
    } else {
        console.log("Posição inválida.");
    }
}

function removerMusica() {
    listarColecao();
    let idx = Number(entrada.question("\nDigite o numero da musica que deseja remover: "));
    if (idx >= 0 && idx < colecao.length) {
        console.log(`"${colecao[idx].titulo}" foi removida da coleção.`);
        colecao.splice(idx, 1);
    } else {
        console.log("Posição inválida.");
    }
}

function exibirDuracaoTotal() {
    let totalSegundos = 0;
    for (let i = 0; i < colecao.length; i++) {
        totalSegundos += colecao[i].duracao;
    }
    let minutos = Math.floor(totalSegundos / 60);
    let segundos = totalSegundos % 60;
    console.log(`\nDuração total da coleção: ${minutos} minutos e ${segundos} segundos.`);
}

while (true) {
    console.log("\n--- GERENCIADOR DE MÚSICAS ---");
    console.log("1. Cadastrar música");
    console.log("2. Listar coleção");
    console.log("3. Pesquisar por título");
    console.log("4. Atualizar duração");
    console.log("5. Remover música");
    console.log("6. Ver duração total da coleção");
    console.log("7. Sair");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1: cadastrarMusica(); break;
        case 2: listarColecao(); break;
        case 3: pesquisarTitulo(); break;
        case 4: atualizarDuracao(); break;
        case 5: removerMusica(); break;
        case 6: exibirDuracaoTotal(); break;
        case 7:
            console.log("Encerrando o sistema musical... Até logo!");
            process.exit();
        default:
            console.log("Opção inválida! Escolha de 1 a 7.");
    }
}
