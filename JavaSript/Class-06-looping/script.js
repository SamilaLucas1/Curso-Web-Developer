//>>> Loopings <<<

// While


// while (true) {
//     console.log("Looping...")
// } quebra a sua aplicação, se for falso saira e nao aparecera na sua aplicação

// count = 0 //fiag
// while (count <= 10) { 
//     console.log(count)
//     count++ //container
// }

// console.log("Minha Aplicação")

// let count = 0 //fiag, só números par saira na aplicação
// while (count <= 10) { 

//     if (count > 2 && count < 8) {
//         count++
//         //continue
//          break
//     }

//     if (count % 2 == 0) {
//        console.log(count) 
//     }
//     count++
// }

// console.log("Minha Aplicação")

// let count = 11
// do { 
//     if (count > 2 && count < 8) {
//         count++
//         //continue
//          break
//     }

//     if (count % 2 == 0) {
//        console.log(count) 
//     }
//     count++
// } while (count <= 10)

// console.log("Minha Aplicação")

// for (let count = 0; count <= 10; count++) {
//     console.log(count)
// }

// for (let count = 0; count <= 10; count++) { //Increment fator
//     if (count % 2 == 1) {
//         console.log(count)
//     }
// }

for (let count = 0; count <= 10; count++) { //Increment fator
    if (count > 2 && count < 8) {
        //count++ // Cuidado com os dois increment em cima no let e aqui
        continue
    }
    if (count % 2 == 0) {
        console.log(count)
    }
}