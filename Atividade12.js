const entrada = require("readline-sync");

let pcLigado = true;
let redeOk = true;
let sistemaOk = false;

if (pcLigado === false) {
    console.log("Recomendação: Verifique a alimentação elétrica, cabos e filtros de linha.");
} else if (pcLigado === true && redeOk === false) {
    console.log("Recomendação: Verifique os cabos de rede ou reinicie o modem/roteador.");
} else if (pcLigado === true && redeOk === true && sistemaOk === false) {
    console.log("Recomendação: Reinicie o aplicativo ou tente limpar o cache do sistema.");
} else {
    console.log("Recomendação: Problema complexo. Encaminhando para o suporte técnico.");
}
