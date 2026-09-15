// Construa a lógica de negócios para um faturamento automatizado. A renovação do sistema deve
// ocorrer apenas se a variável string status for exatamente igual a "ativo" E se o cliente **NÃO**
// possuir pendências financeiras. Para isso, use a variável booleana pagamentoPendente junto ao
// operador de negação lógica (!). Se ambas as premissas forem válidas, exiba "plano renovado".
// Caso contrário, exiba "renovação bloqueada". 

// Estado de Entrada das Variáveis
// let status = "ativo"; let
// pagamentoPendente = false;
// let status = "ativo"; let
// pagamentoPendente = true;
// let status = "suspenso"; let
// pagamentoPendente = false;

// Saída Esperada no Console
// "plano renovado"
// "renovação bloqueada"
// "renovação bloqueada"

let status = "suspenso"
let pagamentoPendente = false
if (status === "ativo" && !pagamentoPendente) {
    console.log("plano renovado")
} else {
    console.log("renovação bloqueada")
}