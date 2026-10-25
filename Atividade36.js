// Atividade 36 — Criando um objeto 
// Considere as informações de um livro: 
// • Título: O Hobbit. 
// • Autor: J. R. R. Tolkien. 
// • Ano de publicação: 1937. 
// • Disponível para empréstimo: verdadeiro. 
// Crie um objeto chamado livro que armazene essas informações. 


let livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1937,
    disponivel: true
};

console.log(livro.titulo);

console.log(livro.autor);

livro.anoPublicacao = 1938;

livro.disponivel = false;

let statusEmprestimo = livro.disponivel ? "Disponível" : "Não disponível";
console.log(`Livro: ${livro.titulo} | Autor: ${livro.autor} | Situação: ${statusEmprestimo}`);
