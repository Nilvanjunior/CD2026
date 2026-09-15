//Construa a lógica interna de validação de um terminal bancário. O sistema deve verificar
//simultaneamente se a variável booleana contaAtiva é verdadeira E se o saldo em conta é maior
//ou igual ao valorSaque. Atendidas ambas as premissas, exiba "saque autorizado". Caso
//contrário, exiba "saque recusado"
//
// Estado de Entrada das Variáveis
// let contaAtiva = true; let saldo = 500;
// let valorSaque = 200;
// let contaAtiva = true; let saldo = 150;
// let valorSaque = 150;
// let contaAtiva = false; let saldo = 1000;
// let valorSaque = 100;
// let contaAtiva = true; let saldo = 300;
// let valorSaque = 400;
//
// Saída Esperada no Console
// "saque autorizado"
// "saque autorizado"
// "saque recusado"
// "saque recusado"

let contaAtiva = true
let saldo = 300
let valorSaque = 400
if (contaAtiva && saldo >= valorSaque) {
    console.log("Saque autorizado")
} else {
    console.log("Saque recusado")
}