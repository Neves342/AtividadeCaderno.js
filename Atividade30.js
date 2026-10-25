// Atividade 30 — Criando funções de conversão 
// Desenvolva três funções: 




function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function quilometrosParaMetros(quilometros) {
    return quilometros * 1000;
}

function minutosParaSegundos(minutos) {
    return minutos * 60;
}

console.log(`--- Testes de Temperatura ---`);
console.log(`0°C convertido para Fahrenheit é: ${celsiusParaFahrenheit(0)}°F`);
console.log(`25°C convertido para Fahrenheit é: ${celsiusParaFahrenheit(25)}°F`);
console.log(`100°C convertido para Fahrenheit é: ${celsiusParaFahrenheit(100)}°F`);

console.log(`\n--- Testes de Distância ---`);
console.log(`1 km convertido para metros é: ${quilometrosParaMetros(1)} m`);
console.log(`4.5 km convertido para metros é: ${quilometrosParaMetros(4.5)} m`);
console.log(`10 km convertido para metros é: ${quilometrosParaMetros(10)} m`);

console.log(`\n--- Testes de Tempo ---`);
console.log(`1 minuto convertido para segundos é: ${minutosParaSegundos(1)} s`);
console.log(`5 minutos convertido para segundos é: ${minutosParaSegundos(5)} s`);
console.log(`60 minutos convertido para segundos é: ${minutosParaSegundos(60)} s`);
