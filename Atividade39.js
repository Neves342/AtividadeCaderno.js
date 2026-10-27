// Atividade 39 — Objeto e função  
// Crie um objeto chamado personagem com as propriedades:  
//  nome  
//  vida  
//  nivel  
//  experiencia


let personagem = {
    nome: "Arqueiro",
    vida: 100,
    nivel: 5,
    experiencia: 1200
};

function receberDano(alvo, dano) {
    alvo.vida = alvo.vida - dano;

    if (alvo.vida <= 0) {
        alvo.vida = 0;
        console.log("Personagem derrotado!");
    } else {
        console.log(`Vida restante de ${alvo.nome}: ${alvo.vida}`);
    }
}

receberDano(personagem, 30);
receberDano(personagem, 80);

