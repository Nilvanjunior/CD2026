// Escreva uma instrução em linha única utilizando o operador ternário (? :) para definir o valor da
// variável tickets. Se a variável numérica pontos for estritamente maior que 1000, tickets deve
// receber o valor 50. Em qualquer outro caso menor ou igual, deve receber 10. No fim, adicione
// console.log(tickets) para validar o resultado.
//
// Estado de Entrada da Variável
// let pontos = 999;
// let pontos = 1000;
// let pontos = 1001;
//
// Saída Esperada no Console
// 10
// 10
// 50

let pontos = 1001
let tickets = pontos > 1000 ? 50 : 10
console.log(tickets)