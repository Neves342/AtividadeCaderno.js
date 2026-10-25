// Atividade 17 — Diferenças entre for, while e do...while
let num = 1


// A)
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// B) 
while (num <= 5) {
    console.log(num)
    num++
}

// C)
let numDo = 1
do {
    console.log(numDo)
    numDo++
} while (numDo <= 5)




// D)
//  for: É melhor quando já sabemos exatamente a quantidade de vezes que precisamos repetir o código (ex: contar de 1 a 5).
//  while: É ideal quando não sabemos quantas vezes o loop vai rodar, dependendo de uma condição para parar (ex: até o usuário acertar a senha).
//  do...while: É conveniente quando precisamos que o código de dentro do bloco seja executado obrigatoriamente pelo menos uma vez antes de testar a condição.





// Escrita
// E) 
// O código de dentro do bloco roda exatamente uma vez e depois o loop se encerra