//>>> Conditionals <<<

// >>> If, Else <<<

// let thereSmook = true

// if (thereSmook) {
//     window.alert("Corre pessoal !!!")
// }

// let age = Math.abs(Number(prompt("Digite sua idade")))

//         if (String(age).length >= 3) {
//             console.log("Sua idade está certa?")
//         }
// let age = Number(prompt("Digite sua idade:"))
// age = Math.abs(age)

// if (age >= 18) {
//     console.log("Maior de idade")
// } else {
//     console.log("Menor de idade")
// }

// if (age >= 16) {
//     if(age >=18 && age <=70) {
//         console.log("Voto obrigatório!")
//     } else{
//         console.log("Voto facultativo!")
//     }
    
// } else{
//     console.log("Não pode votar!")
// }

//  let conversar = (String(prompt("conversar")))
// if (String(conversar)){
//     console.log("Se eu estiver viva")
// }

// let weekDay = 2 //1-7

// if (weekDay == 1) {
//     console.log("Domingo")
// } else {
//     if (weekDay == 2) {
//        console.log(Segunda)
//     }
// }

// let weekDay = 0 //1-7
// let day

// switch (weekDay) {
//     case 1:
//         day = "Domingo"
//         break;

//         case 2:
//         day = "Segunda"
//         break;

//         case 3:
//         day = "Terça"
//         break;

//         case 4:
//         day = "Quarta"
//         break;

//         case 5:
//         day = "Quinta"
//         break;

//         case 6:
//         day = "Sexta"
//         break;

//         case 7:
//         day = "Sábado"
//         break;
//     default: // desde q não tenha nenhum caso
//         day = "Dia não encontrado"
//         // console.log("Dia não encontrado")
//         break;
// }

// console.log(day)

// let aux

// if (aux) {
//     console.log("Deu certo")
// } else {
//     console.log("Erro")
// }

// Try, Catch, Throw

// let myFunction = () => "Running..."

try {
    throw `Número fora do intervalo de 1 a 7`
    myFunction()
} catch (error) {
    console.log(`${error}`)
    // console.log(error) //`Dias da semana são de 1 a 7 ${error}`
}

document.write("Rodando aplicação...")