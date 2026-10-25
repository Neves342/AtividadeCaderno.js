// Atividade 19 — Desenhando padrões com repetição 
// Crie um programa que apresente o seguinte padrão utilizando repetições:

for (let i = 1; i <= 5; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "*";
    }
    console.log(linha);
}

console.log(""); 

for (let i = 5; i >= 1; i--) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "*";
    }
    console.log(linha);
}

console.log(""); 

for (let i = 1; i <= 5; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += i;
    }
    console.log(linha);
}
