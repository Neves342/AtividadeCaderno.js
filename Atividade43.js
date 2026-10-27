



const entrada = require("readline-sync");

let tarefas = []; 
let concluidas = [];

while (true) {
    console.log("\n--- ORGANIZADOR DE TAREFAS ---");
    console.log("1. Cadastrar tarefa");
    console.log("2. Listar tarefas");
    console.log("3. Marcar tarefa como concluída");
    console.log("4. Listar somente tarefas pendentes");
    console.log("5. Excluir tarefa");
    console.log("6. Apresentar um resumo das tarefas");
    console.log("7. Encerrar o sistema");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            let descricao = entrada.question("Digite a descricao da nova tarefa: ");
            if (descricao.trim() === "") {
                console.log("Erro: A descrição da tarefa não pode estar vazia.");
            } else {
                tarefas.push(descricao);
                concluidas.push(false);
                console.log(`Tarefa "${descricao}" cadastrada como pendente.`);
            }
            break;

        case 2:
            if (tarefas.length === 0) {
                console.log("Nenhuma tarefa cadastrada.");
            } else {
                console.log("\nTodas as Tarefas:");
                for (let i = 0; i < tarefas.length; i++) {
                    let status = concluidas[i] ? "Concluída" : "Pendente";
                    console.log(`${i} - ${tarefas[i]} [${status}]`);
                }
            }
            break;

        case 3:
            if (tarefas.length === 0) {
                console.log("Lista vazia. Não há o que concluir.");
            } else {
                let indiceConcluir = Number(entrada.question("Digite a posicao da tarefa que deseja concluir: "));
                if (indiceConcluir >= 0 && indiceConcluir < tarefas.length) {
                    concluidas[indiceConcluir] = true;
                    console.log(`Tarefa "${tarefas[indiceConcluir]}" marcada como concluída.`);
                } else {
                    console.log("Erro: Posição inválida!");
                }
            }
            break;

        case 4:
            let temPendentes = false;
            console.log("\nTarefas Pendentes:");
            for (let i = 0; i < tarefas.length; i++) {
                if (concluidas[i] === false) {
                    console.log(`${i} - ${tarefas[i]}`);
                    temPendentes = true;
                }
            }
            if (!temPendentes) {
                console.log("Você não tem nenhuma tarefa pendente! Tudo em dia.");
            }
            break;

        case 5:
            if (tarefas.length === 0) {
                console.log("Lista vazia. Não há o que excluir.");
            } else {
                let indiceExcluir = Number(entrada.question("Digite a posicao da tarefa que deseja excluir: "));
                if (indiceExcluir >= 0 && indiceExcluir < tarefas.length) {
                    console.log(`Tarefa "${tarefas[indiceExcluir]}" foi apagada.`);
                    tarefas.splice(indiceExcluir, 1);
                    concluidas.splice(indiceExcluir, 1);
                } else {
                    console.log("Erro: Posição inválida!");
                }
            }
            break;

        case 6:
            let prontas = 0;
            let fazendo = 0;
            for (let i = 0; i < concluidas.length; i++) {
                if (concluidas[i] === true) {
                    prontas++;
                } else {
                    fazendo++;
                }
            }
            console.log(`\n--- Resumo ---`);
            console.log(`Total de tarefas cadastradas: ${tarefas.length}`);
            console.log(`Concluídas: ${prontas}`);
            console.log(`Pendentes: ${fazendo}`);
            break;

        case 7:
            console.log("Encerrando o organizador de tarefas... Até mais!");
            process.exit();

        default:
            console.log("Opção inválida! Escolha de 1 a 7.");
    }
}
