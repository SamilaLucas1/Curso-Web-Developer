//Array Methods - Principle of inmutability

// const teams = [`Brasil`, `Alemanha`, `Argentina`, `Portugal`]
// const team = [`Brasil`]

// não retorna
// teams.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// let teamArray = Array.from(team) 
// teamArray.forEach((value, index, array) => {
//     console.log(value, index, array)
// })
 
//map retorna 
// teams.map((V, i, a) => {
//     console.log(V, i, a)
// })

// let teste = teams.map((V, i, a) => {
//     return V + "Teste"
// })

// console.log(teste)
// console.log(teams)

// const real = [10, 20, 30, 40, 50]
// const sumReal = real.reduce((a, b) => a + b)
// console.log(sumReal)

// let dollarValue = 5.26
// const converDollar = real.map((value) => Number((value * dollarValue).toFixed(2))) //number = +
// let sumDollar = converDollar.reduce((a, b) => a + b)

// console.log(converDollar)
// console.log(sumDollar)
// console.log(real)

// console.log(real.map((value) => value * dollarValue).reduce((a, b) => a + b))

// console.log(real.filter((value) => value < 40))

// const averageStudants = [
//     {id: 1, name: 'João', average: 4, birth: 1990},
//     {id: 2, name: 'Thiago', average: 6, birth: 2002},
//     {id: 3, name: 'Jonas', average: 5, birth: 1998},
//     {id: 4, name: 'Rosa', average: 9, birth: 2004},
//     {id: 5, name: 'Amanda', average: 8, birth: 1992},
//     {id: 6, name: 'Pedro', average: 7, birth: 1993},
// ]

// console.table(averageStudants.filter((studant) => studant.average >= 7))
// console.table(averageStudants.filter((studant) => studant.birth >= 2000))

// let yearCurrent = new Date().getFullYear()  //getDate() 

// console.log(yearCurrent)

// console.table(averageStudants.filter((studant) => (yearCurrent - studant.birth) >= 30))
// console.log(averageStudants.find((studant) => studant.name == `Thiago`))
// console.table(averageStudants.filter((studant) => Array.from(studant.name)[0].toLocaleLowerCase() == "j"))

// console.log(averageStudants.find((studant) => (yearCurrent - studant.birth) >= 30))
// console.log(averageStudants.find((studant) => studant.id == 4))

// const teams = ['Brasil', 'Alemanha', 'Argentina', 'Portugal']
// const real = [10, 20, 30, 40, 50,]
// const real = [10, 30, 50, 20, 40]

// console.log(teams.concat(real))

// console.log(real.sort((a, b) => a - b ));
// console.log(teams.sort((a, b) => {
//     if (a.toLocaleLowerCase > b.toLocaleLowerCase) return 1;
//     if (a.toLocaleLowerCase < b.toLocaleLowerCase) return -1;
//     return 0
// }))

// const teams = ['Brasil', 'Alemanha', 'Argentina', 'Portugal']
// let saldo = 8000
// const real = [1, 10, 2, 30, 50, 20, 40]
// console.log(real.reduce((a, b) => a + b)) // a + b, saldo

const averageStudants = [
    {id: 1, name: 'João', average: 4, birth: 1990},
    {id: 2, name: 'Thiago', average: 6, birth: 2002},
    {id: 3, name: 'Jonas', average: 5, birth: 1998},
    {id: 4, name: 'Rosa', average: 9, birth: 2004},
    {id: 5, name: 'Amanda', average: 8, birth: 1992},
    {id: 6, name: 'Pedro', average: 7, birth: 1993},
]

console.table(averageStudants.sort((a, b) => a.average - b.average))