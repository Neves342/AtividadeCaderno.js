const entrada = require("readline-sync");

let tarefas = [ 
    "Estudar JavaScript", 
    "Praticar arrays", 
    "Revisar funções", 
    "Estudar objetos", 
    "Resolver exercícios" 
];

console.log("Tarefas cadastradas:");
for (let i = 0; i < tarefas.length; i++) {
    console.log(`${i} - ${tarefas[i]}`);
}

let indice = Number(entrada.question("\nDigite o indice da tarefa que deseja remover: "));

if (indice >= 0 && indice < tarefas.length) {
    tarefas.splice(indice, 1);
    
    console.log("\nTarefas atualizadas:");
    for (let i = 0; i < tarefas.length; i++) {
        console.log(`${i} - ${tarefas[i]}`);
    }
} else {
    console.log("Erro: Índice informado está fora do intervalo válido!");
}
