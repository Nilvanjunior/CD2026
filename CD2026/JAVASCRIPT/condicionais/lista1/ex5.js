// Desenvolva a árvore de decisões para um bot corporativo a partir da variável tipo string opcao. Caso
// a entrada seja igual a "1", exiba "direcionando para o financeiro". Caso seja igual a "2",
// exiba "direcionando para o suporte técnico". Para qualquer outro valor informado, exiba
// "retornando ao menu principal". 
//
// Estado de Entrada da Variável:
// let opcao = "1";
// let opcao = "2";
// let opcao = "3";
// let opcao = "ajuda";
//
// Saída Esperada no Console:
// "direcionando para o financeiro"
// "direcionando para o suporte técnico"
// "retornando ao menu principal"
// "retornando ao menu principaal"

let opcao = 'ajuda'
if (opcao === 1) {
    console.log("direcionando para o financeiro")
} else if (opcao === 2) {
    console.log("direcionando para o suporte técnico")
} else {
    console.log("retornando ao menu principal")
}