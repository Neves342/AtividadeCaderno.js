const entrada = require("readline-sync");

let filmes = [];

while (true) {
    console.log("\n--- MENU DE FAVORITOS ---");
    console.log("1. Adicionar filme");
    console.log("2. Listar filmes");
    console.log("3. Remover filme por posição");
    console.log("4. Pesquisar filme");
    console.log("5. Encerrar o programa");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            let novoFilme = entrada.question("Digite o titulo do filme: ");
            if (novoFilme.trim() === "") {
                console.log("Erro: Não é permitido adicionar títulos vazios.");
            } else {
                filmes.push(novoFilme);
                console.log(`"${novoFilme}" foi adicionado aos favoritos!`);
            }
            break;

        case 2:
            if (filmes.length === 0) {
                console.log("Sua lista de favoritos está vazia.");
            } else {
                console.log("\nSeus Filmes Favoritos:");
                for (let i = 0; i < filmes.length; i++) {
                    console.log(`${i} - ${filmes[i]}`);
                }
            }
            break;

        case 3:
            if (filmes.length === 0) {
                console.log("A lista está vazia, não há o que remover.");
            } else {
                console.log("\nFilmes disponíveis para remoção:");
                for (let i = 0; i < filmes.length; i++) {
                    console.log(`${i} - ${filmes[i]}`);
                }
                let indice = Number(entrada.question("\nDigite o indice do filme que deseja remover: "));
                if (indice >= 0 && indice < filmes.length) {
                    console.log(`"${filmes[indice]}" foi removido com sucesso.`);
                    filmes.splice(indice, 1);
                } else {
                    console.log("Erro: Índice inválido!");
                }
            }
            break;

        case 4:
            let termoPesquisa = entrada.question("Digite o nome do filme que busca: ");
            let encontrado = false;
            for (let i = 0; i < filmes.length; i++) {
                if (filmes[i] === termoPesquisa) {
                    console.log(`"${termoPesquisa}" encontrado! Está na posição ${i} da lista.`);
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                console.log(`O filme "${termoPesquisa}" não foi encontrado na lista.`);
            }
            break;

        case 5:
            console.log("Encerrando o sistema de favoritos... Até mais!");
            process.exit();

        default:
            console.log("Opção inválida! Escolha um número de 1 a 5.");
    }
}
