// Escreva o motor lógico de cálculo de perdas para um personagem a partir da variável altura.
// Regras:
// • Altura menor que 5: nenhuma alteração na variável vida (exiba "sem dano sofrido").
// • Altura de 5 até 15 (inclusive extremos 5 e 15): subtraia 20 da variável vida e exiba o novo valor.
// • Altura estritamente maior que 15: defina a variável vida como 0 e exiba "personagem
// eliminado". 
// Estado de Entrada (Base vida = 100)
// let altura = 4;
// let altura = 5;
// let altura = 15;
// let altura = 16;
//
// Saída Esperada no Console
// "sem dano sofrido"
// 80
// 80
// "personagem eliminado"

let altura = 16
let vida = 100
if(altura < 5) {
    console.log("Sem dano sofrido")
} else if (altura >= 5 && altura <= 15) {
    console.log(vida - 20)
} else if (altura >= 15) {
    console.log("personagem eliminado")
}