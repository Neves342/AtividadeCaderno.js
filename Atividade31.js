// Atividade 31 — Encontrando o erro de escopo 
// Analise o código: 

 function calcularDistancia(velocidade, tempo) { 
 let distancia = velocidade * tempo; 
 } 
 calcularDistancia(60, 2); 
console.log(distancia); 




// a) Identifique o problema relacionado ao escopo da variável. 
   // distancia foi declarada utilizando a palavra-chave let dentro do bloco da função calcularDistancia
   //


// b) Explique por que a variável declarada dentro da função não está disponível diretamente 
// fora dela. 
    // É porque tudo o que você cria dentro de uma função fica "escondido" e guardado só para ela.

// c) Corrija a função para retornar a distância. 

// d) Armazene o resultado em uma variável e apresente a distância percorrida em quilômetros.

   function calcularDistancia(velocidade, tempo) { 
    let distancia = velocidade * tempo; 
    return distancia;
} 

let distanciaPercorrida = calcularDistancia(60, 2); 

console.log(`Distância percorrida: ${distanciaPercorrida} km`);
