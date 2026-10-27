



let nomes = ["Ana", "Bruno", "Carla"]; 
let status = [false, true, false];  

nomes.push("Daniel"); 
status.push(true); 

nomes.splice(1, 1);  
status.splice(1, 1); // Correção: remove o estado na mesma posição

console.log(nomes); 
console.log(status);  
