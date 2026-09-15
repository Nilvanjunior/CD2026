// Escreva uma condicional para recalcular a variável preco de uma corrida de aplicativo. O valor do
// preço deve dobrar se, e somente se, a variável booleana chovendo for verdadeira E a variável
// numérica hora estiver contida no intervalo delimitado de horário de pico (valores de 17 até 19,
// incluindo os limites 17 e 19). Caso contrário, mantenha o preço base. No fim, exiba o valor final de
// preco.
//
// Estado de Entrada das Variáveis
// let chovendo = true; let hora = 18; let
// preco = 25;
// let chovendo = true; let hora = 17; let
// preco = 25;
// let chovendo = false; let hora = 18; let
// preco = 25;
// let chovendo = true; let hora = 16; let
// preco = 25;
//
// Saída Esperada no Console (Base: 25):
// 50
// 50
// 25
// 25

let chovendo = true
let hora = 17
let preco = 25

if (chovendo && hora >=17 && hora <= 19) {
    console.log("O valor da corrida é:", preco * 2)
} else {
    console.log("O valor da corrida é:", preco)
}