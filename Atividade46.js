


const entrada = require("readline-sync");

let inventario = [
    { id: "001", nome: "Notebook Lenovo", disponivel: true },
    { id: "002", nome: "Monitor LG", disponivel: false },
    { id: "003", nome: "Projetor Epson", disponivel: true }
];

while (true) {
    console.log("\n--- EMPRÉSTIMO DE EQUIPAMENTOS ---");
    console.log("1. Cadastrar equipamento");
    console.log("2. Listar todos os equipamentos");
    console.log("3. Pesquisar por identificação");
    console.log("4. Registrar empréstimo");
    console.log("5. Registrar devolução");
    console.log("6. Ver quantidade de equipamentos disponíveis");
    console.log("7. Sair");

    let opcao = Number(entrada.question("Escolha uma opcao: "));

    switch (opcao) {
        case 1:
            let idNovo = entrada.question("ID do equipamento: ");
            let nomeNovo = entrada.question("Nome do equipamento: ");
            inventario.push({ id: idNovo, nome: nomeNovo, disponivel: true });
            console.log("Equipamento cadastrado com sucesso!");
            break;

        case 2:
            console.log("\n--- Inventário de Equipamentos ---");
            for (let i = 0; i < inventario.length; i++) {
                let status = inventario[i].disponivel ? "Disponível" : "Emprestado";
                console.log(`ID: ${inventario[i].id} | ${inventario[i].nome} | Status: ${status}`);
            }
            break;

        case 3:
            let buscaId = entrada.question("Digite o ID do equipamento: ");
            let achouEq = false;
            for (let i = 0; i < inventario.length; i++) {
                if (inventario[i].id === buscaId) {
                    let status = inventario[i].disponivel ? "Disponível" : "Emprestado";
                    console.log(`Encontrado: ${inventario[i].nome} - Status: ${status}`);
                    achouEq = true;
                    break;
                }
            }
            if (!achouEq) console.log("Equipamento não encontrado.");
            break;

        case 4:
            let empId = entrada.question("Digite o ID do equipamento para emprestar: ");
            let idxEmp = -1;
            for (let i = 0; i < inventario.length; i++) {
                if (inventario[i].id === empId) {
                    idxEmp = i;
                    break;
                }
            }
            if (idxEmp === -1) {
                console.log("Erro: ID inválido ou não cadastrado.");
            } else if (inventario[idxEmp].disponivel === false) {
                console.log("Erro: Este equipamento já está emprestado!");
            } else {
                inventario[idxEmp].disponivel = false;
                console.log(`Sucesso: Empréstimo do item "${inventario[idxEmp].nome}" registrado.`);
            }
            break;

        case 5:
            let devId = entrada.question("Digite o ID do equipamento para devolver: ");
            let idxDev = -1;
            for (let i = 0; i < inventario.length; i++) {
                if (inventario[i].id === devId) {
                    idxDev = i;
                    break;
                }
            }
            if (idxDev === -1) {
                console.log("Erro: ID inválido ou não cadastrado.");
            } else if (inventario[idxDev].disponivel === true) {
                console.log("Erro: Esse equipamento já está disponível na biblioteca.");
            } else {
                inventario[idxDev].disponivel = true;
                console.log(`Sucesso: Devolução do item "${inventario[idxDev].nome}" concluída.`);
            }
            break;

        case 6:
            let dispTotal = 0;
            for (let i = 0; i < inventario.length; i++) {
                if (inventario[i].disponivel === true) {
                    dispTotal++;
                }
            }
            console.log(`Quantidade de equipamentos livres agora: ${dispTotal}`);
            break;

        case 7:
            console.log("Saindo do sistema...");
            process.exit();

        default:
            console.log("Opção inválida!");
    }
}
