// Elabore uma estrutura condicional que valide as variáveis strings senha e confirmaSenha. O bloco
// de execução do if deve processar a gravação apenas se ambas forem estritamente idênticas (===) E
// se o conteúdo de senha for diferente de uma string vazia (""). Caso a validação passe, exiba "senha
// alterada com sucesso". Caso falhe, exiba "configuração de senha inválida". 
//
// Estado de Entrada das Variáveis
// let senha = "123"; let confirmaSenha =
// "123";
// let senha = "123"; let confirmaSenha =
// "456";
// let senha = ""; let confirmaSenha = "";
//
// Saída Esperada no Console
// "senha alterada com sucesso"
// "configuração de senha inválida"
// "configuração de senha inválida"

let senha = ""
let confirmaSenha = ""
if (senha === confirmaSenha && senha !== "") {
    console.log("senha alterada com sucesso")
} else {
    console.log("configuração de senha inválida")
}