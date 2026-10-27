


const entrada = require("readline-sync");

let livros = [  
    "O Hobbit",  
    "Dom Casmurro",  
    "A Revolution dos Bichos",  
    "O Pequeno Príncipe"  
];  
let emprestados = [false, true, false, false];

while (true) {
    console.log("\n--- CONTROLE DA BIBLIOTECA ---");
    console.log("1. Listar todos os livros");
    console.log("2. Pesquisar um livro pelo título");
    console.log("3. Realizar um empréstimo");
    console.log("4. Registrar uma devolução");
    console.log("5. Consultar quantos livros estão disponíveis");
    console.log("6. Encerrar o sistema");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            console.log("\nCatálogo de Livros:");
            for (let i = 0; i < livros.length; i++) {
                let status = emprestados[i] ? "Emprestado" : "Disponível";
                console.log(`${livros[i]} - Status: ${status}`);
            }
            break;

        case 2:
            let buscaTitulo = entrada.question("Digite o titulo do livro completo: ");
            let achouLivro = false;
            for (let i = 0; i < livros.length; i++) {
                if (livros[i] === buscaTitulo) {
                    let status = emprestados[i] ? "Emprestado" : "Disponível";
                    console.log(`Livro encontrado! "${livros[i]}" está atualmente: ${status}`);
                    achouLivro = true;
                    break;
                }
            }
            if (!achouLivro) {
                console.log(`O título "${buscaTitulo}" não está cadastrado.`);
            }
            break;

        case 3:
            let tituloEmprestimo = entrada.question("Digite o titulo exato do livro que quer pegar: ");
            let indiceEmprestimo = -1;
            for (let i = 0; i < livros.length; i++) {
                if (livros[i] === tituloEmprestimo) {
                    indiceEmprestimo = i;
                    break;
                }
            }
            if (indiceEmprestimo === -1) {
                console.log("Erro: Livro não cadastrado.");
            } else if (emprestados[indiceEmprestimo] === true) {
                console.log("Erro: Esse livro já está emprestado e não pode ser pego novamente.");
            } else {
                emprestados[indiceEmprestimo] = true;
                console.log(`Empréstimo de "${tituloEmprestimo}" efetuado!`);
            }
            break;

        case 4:
            let tituloDevolucao = entrada.question("Digite o titulo exato do livro para devolver: ");
            let indiceDevolucao = -1;
            for (let i = 0; i < livros.length; i++) {
                if (livros[i] === tituloDevolucao) {
                    indiceDevolucao = i;
                    break;
                }
            }
            if (indiceDevolucao === -1) {
                console.log("Erro: Livro não cadastrado.");
            } else if (emprestados[indiceDevolucao] === false) {
                console.log("Erro: Esse livro já está disponível. Não foi emprestado.");
            } else {
                emprestados[indiceDevolucao] = false;
                console.log(`Devolução de "${tituloDevolucao}" realizada!`);
            }
            break;

        case 5:
            let livrosLivres = 0;
            for (let i = 0; i < emprestados.length; i++) {
                if (emprestados[i] === false) {
                    livrosLivres++;
                }
            }
            console.log(`\nTotal de livros disponíveis para empréstimo: ${livrosLivres}`);
            break;

        case 6:
            console.log("Encerrando o controle da biblioteca... Até mais!");
            process.exit();

        default:
            console.log("Erro: Opção inválida! Escolha de 1 a 6.");
    }
}
