// Atividade 32 — Função de validação 
// Uma aplicação de cadastro precisa verificar se um nome é válido. 
// Crie uma função chamada validarNome(nome) que retorne: 


function validarNome(nome) {
    let nomeLimpo = nome.trim();
    
    if (nomeLimpo.length >= 3) {
        return true;
    } else {
        return false;
    }
}

let nomesParaTestar = ["Ana", " João ", "Li", ""];

for (let i = 0; i < nomesParaTestar.length; i++) {
    let nomeAtual = nomesParaTestar[i];
    
    if (validarNome(nomeAtual)) {
        console.log(`O nome "${nomeAtual}" é válido. O cadastro pode continuar.`);
    } else {
        console.log(`O nome "${nomeAtual}" é inválido. O cadastro foi interrompido.`);
    }
}
