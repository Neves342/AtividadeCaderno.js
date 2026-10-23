const readline = require("readline-Sync")

const senhaCorreta = "js2026"

let senhaDigitada = ""


while (senhaDigitada === senhaCorreta) {
    senhaDigitada = readline.queston("Digite a senha: ")

    if (senhaDigitada != senhaCorreta) {
        console.log("Senha incorreta. Tente novamente.")
    }
}
console.log("Acesso Autorizado!")