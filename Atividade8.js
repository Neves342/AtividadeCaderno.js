// --- SEU CÓDIGO ORIGINAL (Com o erro lógico do ||) ---
const idade = 10;
const acompanhado = true; // Estava false

if (idade >= 12 || acompanhado === true) { 
    console.log("Entrada permitida"); // O código original vai entrar aqui incorretamente
} else { 
    console.log("Entrada não permitida"); 
}


// --- CÓDIGO CORRIGIDO (Garantindo as duas exigências juntos) ---
if (idade >= 12 && acompanhado === true) { 
    console.log("Entrada permitida"); 
} else { 
    console.log("Entrada não permitida"); // O código corrigido vai entrar aqui de forma segura
}
