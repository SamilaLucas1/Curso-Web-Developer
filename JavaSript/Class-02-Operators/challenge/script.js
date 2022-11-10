// Solicite 2 números:

const numberOne = Number(prompt("Digite o primeiro número"))
const numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const res = numberOne % numberTwo
const pot = numberOne ** numberTwo
const sqr = numberOne ** (1/numberOne)

document.write(`A Soma de ${numberOne} e ${numberTwo} é: ${sum} <br>`)
document.write(`A Subtração de ${numberOne} e ${numberTwo} é: ${sub} <br>`)
document.write(`A Multiplicação de ${numberOne} e ${numberTwo} é: ${mult} <br>`)
document.write(`A Divisão de ${numberOne} e ${numberTwo} é: ${div.toFixed(2)} <br>`)
document.write(`O Resto da divisão de ${numberOne} e ${numberTwo} é: ${res} <br>`) 
document.write(`A Potência de ${numberOne} e ${numberTwo} é: ${pot} <br>`)
document.write(`A Raiz de ${numberTwo} e ${numberOne} é: ${sqr.toFixed(2)} <br>`)