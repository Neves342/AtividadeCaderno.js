const readline = require("readline-sync");

const senhaCorreta = "js2026";

let senhaDigitada = "";

while (senhaDigitada !== senhaCorreta) {
    senhaDigitada = readline.question("Digite a senha: ");

    if (senhaDigitada != senhaCorreta) {
        console.log("Senha incorreta. Tente novamente.");
    }
}

console.log("Acesso Autorizado!");
