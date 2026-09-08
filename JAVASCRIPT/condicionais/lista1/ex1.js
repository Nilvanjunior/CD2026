//Implemente um script que avalie o valor contido na variável totalDaCompra para atualizar o valor da
//variável frete (inicialmente definida como 20). Caso o totalDaCompra seja maior ou igual a 200,
//mude o valor de frete para 0. Por fim, calcule a soma em uma variável valorFinal e exiba o
//resultado utilizando console.log(valorFinal).
//
// Estado de Entrada da Variável
// let totalDaCompra = 150; (Caso base abaixo do
// limite)
// let totalDaCompra = 200; (Caso limite exato)
// let totalDaCompra = 250; (Caso acima do limite)
//
// Saída Esperada no Console
// 170
// 200
// 250

let totalDaCompra = 250
let frete = 20
 if (totalDaCompra < 200) {
    console.log("O valor do frete é:", totalDaCompra + frete )
 } else {
    console.log('O valor do frete é:', totalDaCompra)
 }