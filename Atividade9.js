const entrada = require("readline-sync"); // Ajustado o "sync" com 's' minúsculo que é o padrão da biblioteca

// 1. Perguntas para o usuário
let nome = entrada.question("Digite o seu nome: ");
let hora = Number(entrada.question("Digite a quantidade de horas de treinamento: ")); // Agora capturamos as horas como número!

// 2. Sistema de checagem com as regras da sala
if (nome === "") {
    console.log("Acesso Negado: O nome do usuário não pode estar vazio.");
} else if (hora < 4) {
    console.log("Acesso Negado: No mínimo 4h de treinamento."); // Seu else original virou a regra de bloqueio das horas
} else {
    console.log(`Acesso Liberado! Bem-vindo(a), ${nome}. Horas de treinamento: ${hora}h.`);
}
