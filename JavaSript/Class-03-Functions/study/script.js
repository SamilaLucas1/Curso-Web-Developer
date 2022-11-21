//Funtions Statements

// >>> Nomed <<

// << Parameters >>
// function mytest() {
//     console.log("Testando a função")
// }

// mytest()
// mytest()

// function mytest(text) {
//     console.log(text)
// }

// mytest("Testando a função")

//---------------------

// function somar(num1, num2) {
//     return num1 + num2
// }

// console.log(somar(20, 30))

// function somar(num1, num2) {
//     let soma = num1 + num2 //Atenção para o operador chave
//     return soma
// }

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

// let sum = (num1, num2) => num1 + num2

// console.log(sum(2, 3))

// >>> Constructor <<<

// function Car(brandName, motorPower) {
//     this.brand = brandName
//     this.motor = motorPower
//     this.walk = () => {
//         console.log("Runnig...")
//     }
// }

// const uno = new Car("Fiat", "1.4")

// console.log(uno.brand)
// console.log(uno.motor)
// console.log(uno.walk())

// Number()
// String()
// Car()

// >>> Construtora <<<

// function Car(marcaNome, motorPower) {
//     this.marca = marcaNome
//     this.motor = motorPower
// }

// let ferrari = new Car ("Ford", "V8")


function calcIMC(patient) {
    let imc = patient.weight / (patient.height/100) ** 2
    return imc.toFixed(2)
}

const listpacients = [
    {
        name: "Samila",
        height: 163,
        weight: 60
    },

    {
        name: "Júlia",
        height: 160,
        weight: 65
    },

    {
        name: "Ana Clara",
        height: 150,
        weight: 48
    },
]

// document.write(`O IMC de ${listpacients[0].name} é ${calcIMC(listpacients[0])} <br>`)
// document.write(`O IMC de ${listpacients[1].name} é ${calcIMC(listpacients[1])} <br>`)
// document.write(`O IMC de ${listpacients[2].name} é ${calcIMC(listpacients[2])} <br>`)

// Estrutura baseada no C
for ( const patient of listpacients) {
    document.write(`O IMC de ${patient.name} é ${calcIMC(patient)} <br>`)
}

for (let i=0; i < listpacients.length; i++) {
    document.write(`O IMC de ${listpacients[i].name} é ${calcIMC(listpacients[i])} <br>`)
}