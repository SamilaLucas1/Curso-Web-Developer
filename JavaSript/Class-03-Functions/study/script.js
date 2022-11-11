//Funtions Statements

// >>> Nomed <<

// << Parameters >>
// function mytest() {
//     console.log("Testando a função")
// }

// mytest()
// mytest()

function mytest(text) {
    console.log(text)
}

mytest("Testando a função")

//---------------------

// function somar(num1, num2) {
//     return num1 + num2
// }

console.log(somar(20, 30))

function somar(num1, num2) {
    let soma = num1 + num2 //Atenção para o operador chave
    return soma
}

//console.log(some)
//console.log(somar(20, 30))

// >>> Anonymous <<<

// let sum = function (num1, num2) {
//     let soma = num1 + num2
//     //Atenção para o operador chave
//     return soma
// }

// console.log(sum(2, 3))

// >>> Arrow <<<

let sum = (num1, num2) => num1 + num2

console.log(sum(2, 3))

// >>> Constructor <<<

function Car(brandName, motorPower) {
    this.brand = brandName
    this.motor = motorPower
    this.walk = () => {
        console.log("Runnig...")
    }
}

const uno = new Car("Fiat", "1.4")

console.log(uno.brand)
console.log(uno.motor)
console.log(uno.walk())

// Number()
// String()
// Car()

