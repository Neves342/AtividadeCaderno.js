// Atividade 37 — Complete o objeto 
// Complete o código para acessar e modificar as propriedades de um objeto. 



let computador = { 
    marca: "Lenovo", 
    memoriaRAM: 8, 
    armazenamento: 256, 
    ligado: false 
}; 

console.log(computador.marca); 

computador.memoriaRAM = 16; 

computador.ligado = true; 

console.log( 
`Marca: ${computador.marca} 
RAM: ${computador.memoriaRAM} GB 
Armazenamento: ${computador.armazenamento} GB 
Ligado: ${computador.ligado}` 
);
