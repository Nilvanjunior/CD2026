// Crie uma estrutura condicional utilizando o operador módulo (%) para avaliar se o ano contido na
// variável ano é perfeitamente divisível por 4 (ou seja, se o resto da divisão por 4 é igual a 0). Se o
// resultado for verdadeiro, mude o valor da variável booleana eBissexto para true e exiba o
// resultado no console.
// 
// Estado de Entrada da Variável
// let ano = 2024; let eBissexto = false;
// let ano = 2026; let eBissexto = false;
// 
// Saída Esperada no Console (Valor de eBissexto)
// true
// false
let ano = 2012
let eBissexto = false
if (ano % 4 === 0) {
    console.log("true")
} else {
    console.log("false")
}