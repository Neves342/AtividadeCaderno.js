// Atividade 40 — Cadastro de equipamentos  
// Crie um objeto chamado equipamento para representar um equipamento de informática.  
// O objeto deverá armazenar:  


let equipamento = {
    nome: "Monitor 21.5 Pulg",
    marca: "LG",
    preco: 399.00,
    quantidadeEstoque: 10,
    funcionando: true
};

equipamento.quantidadeEstoque = 8;
equipamento.funcionando = false;

let statusFuncionamento = equipamento.funcionando ? "Em perfeito estado" : "Necessita de manutenção";

console.log(`--- Dados do Equipamento ---`);
console.log(`Nome: ${equipamento.nome}`);
console.log(`Marca: ${equipamento.marca}`);
console.log(`Preço: R$ ${equipamento.preco.toFixed(2)}`);
console.log(`Quantidade em estoque: ${equipamento.quantidadeEstoque}`);
console.log(`Situação de funcionamento: ${statusFuncionamento}`);
