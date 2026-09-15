let capital = 1000
let taxa = 0.1
let meses = 2
for (let i = 1; i <= meses; i++) {
    capital += capital * taxa
} console.log(capital)