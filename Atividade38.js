// Analise o código: 

let jogo = { 
nome: "Hollow Knight", 
genero: "Aventura", 
ano: 2017 
}; 
console.log(jogo.titulo); 
jogo.genero = "Ação e aventura"; 
jogo.anoLancamento = 2020; 
console.log(jogo); 


// O código é executado, mas há um problema na primeira consulta e uma possível inconsistência 
// nas informações. 
// a) Por que jogo.titulo apresenta undefined? 
       // Porque a propriedade titulo simplesmente não existe dentro do objeto jogo

// b) Como acessar corretamente o nome do jogo? 
      // sar a propriedade certa que foi declarada, escrevendo: jogo.nome

// c) A atribuição a jogo.anoLancamento provoca um erro? Explique. 
      // Não dá erro nenhum! O JavaScript é super flexível: se você tentar dar um valor para uma propriedade que ainda não existe (tipo jogo.anoLancamento), ele simplesmente cria essa propriedade nova na hora dentro do objeto

// d) Corrija o ano de lançamento considerando as informações fornecidas no objeto original. 
     let jogo = { 
    nome: "Hollow Knight", 
    genero: "Aventura", 
    ano: 2017 
}; 

console.log(jogo.nome); 

jogo.genero = "Ação e aventura"; 

jogo.ano = 2017; 

console.log(jogo);


// e) Apresente o objeto corrigido.