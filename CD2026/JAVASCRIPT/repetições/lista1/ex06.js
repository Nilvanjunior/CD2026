let senhaCorreta = false
let contadorTentativas = 0
while (senhaCorreta === false && contadorTentativas < 3) {
    contadorTentativas++
}
console.log("Tentativa:" + contadorTentativas)