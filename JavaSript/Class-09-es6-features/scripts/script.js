//Modules (import)

// console.log('Principal')

// import { operations } from "./functions.js"
// import { soma, sub, mult, div } from
// "./functions.js"

// let num1 = 12
// let num2 = 33

// operations.sub(2,5)

// operations.soma(num1, num2)
// operations.sub(num1, num2)
// operations.mult(num1, num2)
// operations.div(num1, num2)

// soma(num1, num2)
// sub(num1, num2)
// mult(num1, num2)
// div(num1, num2)

// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//         this.canDrive = age >= 18
//         this.status = () => {
//             if (this.canDrive) {
//                 return 'Pode dirigir'
//             } else {
//                 return 'Não pode dirigir'
//             }
//         }
//     }
// }

// const person1 = new Person('Samila', 18)
// const person2 = new Person('Murilo', 16) 

// console.log(person1.name, person1.age, person1.canDrive)

// console.log(person2.name, person2.age, person2.canDrive)

// const persons = []

// console.log(`${person1.name} ${person1.status()}`)

// factory
function person(name, age) {
    return {
        name,
        age,
        canDrive: age >= 18,
        status: function status(canDrive) {
            if (this.canDrive) {
                return 'Pode  dirigir'
            } else {
                return 'Não pode dirigir'
            }
        }
    }
}

let person1 = person('Samila', 30)

console.log(person1.status());

// Destructure
const array = ["A", "B"]
const [item1, item2] = array
console.log(array, item1, item2)


//Rest
function showArray(array, ...numbers) { //imprime todos/ ...number pode ser colocado para imprimir mais coisa
    console.log(array, numbers) 
}

// showArray(2, 3, 4, 5, 3)

//Spread = espalhar

const numbers = [2, 3, 4, 5, 3]
// const clone = [...numbers]
const [...clone] = numbers
clone.pop()

console.log(numbers)

// console.log(Math.max(...numbers))
console.log(numbers)
console.log(clone)

const list = document.querySelectorAll('div')
console.log(list) [list].map((value) => console.log(value))

let num;num = 7 
console.log(num)

// ASI (Automatic Semicolon Insertion)

//Babel (ES6 to ESS)
//- Parser: Code 6 to AST (Abs)