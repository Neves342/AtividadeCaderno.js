// Uma sala de informática possui regras de acesso. Desenvolva um programa que receba o nome 
// do usuário e a quantidade de horas de treinamento concluídas. 

const entrada = require("readline-Sync")
let hora = []


let nome = entrada.question("Digite o seu nome: ")
console.log(nome)
if(hora >= 4) {
   console.log("Horas:")
} else {
    console.log("No mínimo 4h de treinamento")
}