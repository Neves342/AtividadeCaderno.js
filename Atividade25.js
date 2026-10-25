// Atividade 25 — Analisando temperaturas 
// Uma estação meteorológica registrou as seguintes temperaturas:


let temperaturas = [28, 31, 29, 34, 27, 33, 30]

let maior = temperaturas[0];
let menor = temperaturas[0];
let soma = 0;
let acimaDeTrinta = 0;

for (let i = 0; i < temperaturas.length; i++) {
    console.log(temperaturas[i]);
    
    soma += temperaturas[i];

    if (temperaturas[i] > maior) {
        maior = temperaturas[i];
    }

    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }

    if (temperaturas[i] > 30) {
        acimaDeTrinta++;
    }
}

if (maior >= 34) {
    console.log("Maior temperatura registrada: " + maior);
}

let media = soma / temperaturas.length;

console.log("Menor temperatura: " + menor);
console.log("Soma de todas: " + soma);
console.log("Média aritmética: " + media.toFixed(1));
console.log("Temperaturas acima de 30°C: " + acimaDeTrinta);
