//Crie uma estrutura condicional encadeada que analise a variável numérica combustivel (com
//valores de 0 a 100) e siga as seguintes diretrizes de exibição de dados:
//
// Estado de Entrada da Variável
// let combustivel = 0;
// let combustivel = 7; (Qualquer valor maior que 0
// e menor que 10)
// let combustivel = 10; (Caso limite de retorno ao
// estado estável)
// let combustivel = 50; (Caso regular acima do
// limite da reserva)
//
// Saída Esperada no Console
// "desligar motor"
// "luz reserva acesa"
// "fluxo normal"
// "fluxo normal"

let combustivel = 10
if (combustivel > 0 && combustivel < 10) {
    console.log("luz reserva acesa")
} else if (combustivel >= 10) {
    console.log("fluxo normal")
} else if (combustivel === 0){
    console.log("desligar motor")
} 