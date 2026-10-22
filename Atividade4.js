const distancia = 120; // Numeros não precisam ficar entre ""
const consumo = 12; 
const precoCombustivel = 6.20;

let litros = distancia / consumo; 
let custo = litros + distancia; 

console.log("Litros necessários: " + litros); 
console.log("Custo da viagem: R$ " + custo);