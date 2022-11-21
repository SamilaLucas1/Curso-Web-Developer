// >>> Data Manipulation <<<

// Prototype (Chain)

// function Car(motorPower) {
//     this.motor = motorPower
// }

//console.log(new Car("v8").motor)


// let myName = "Samila"
// let age = 18
// let phrase = "Eu sou Web Developer"

//console.log(myName.__proto__)
//console.log(age)

//>>> String <<<

//console.log(myName.length)
//console.log(myName[1])
// console.log(myName.toLocaleUpperCase)
// console.log(phrase.split(","))
// console.log(phrase.split(" ").join("_"))

// console.log("Web" == "Web")
// console.log(phrase.includes("web"))
// console.log(phrase.includes("Web" || "web"))

//>>> Number <<<

// let num = 733
// let num2 = 7.9876

// console.log(String(num1).replace(".", ",").length)
// console.log(String(num1.toFixed(2)).replace(".", ","))
// console.log("R$ "  + String(num1.toFixed(2)).replace(".", ","))

//Convert Currency (International Standard Currency code ISO 4217)
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "brl"}))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "usd"}))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "eur"}))
// console.log(num1.toLocaleString("pt-BR", {style: "currency", currency: "jpy"}))


// console.log(Math.PI)
// console.log(Math.sqrt(81))
// console.log(Math.abs(num2))

// console.log(Math.max(2, 64, 3, 764, 85, 859, 77))

// let num1 = 7.287

// console.log(Math.ceil(num1))
// console.log(Math.round(num1))
// console.log(Math.floor(num1))

// console.log(Math.round(Math.random() * 2))


// let sorteados = []
// let win = false
// let aux = 0

// while (aux < 10) {
//     let num = Math.round(Math.random()* 10)

    
   
//     if(!sorteados.includes(num)) {
//         console.log(num)
//         sorteados[aux] = num
//     }

//     aux++
// }

// console.log(sorteados)

// let date = new Date()
// let date1 = new Date("2022-11-17 12:01:20")

// document.write(date)
// let hour = date1.getHours()
// let minuts = date1.getMinutes()
// let seconds = date1.getSeconds()

// document.write(`${String(hour).padStart(2, "0")}: ${String(minuts).padStart(2, "0")}: ${String(seconds).padStart(2, "0")}`)

// date1.setHours(2)
// date1.setHours(date1.getHours() - 3)
// date1.setMinutes(2)
// date1.setMinutes(date1.getMinutes() - 60)
// date1.setSeconds(2)
// date1.setSeconds(date1.getHours() - 60)

// document.write(date1.toLocaleTimeString("pt-BR"))

// let day = date.getDay()
// let Date = date.getDate()
// let month = date.getMonth() + 1
// let year = date.getFullYear()
// let minuts = date1.getMinutes()
// let seconds = date1.getSeconds()


// document.write(day + 1) //0-6
// // document.write(data)
// document.write(month + 1) //0-11
// document.write(year)
// document.write(`${String(data).padStart(2, "0")}/ ${String(month).padStart(2, "0")}/ ${String(year).padStart(2, "0")}`)

// date.setDate(date.getDate() + 30)

// document.write(date.toLocaleDateString("pt-BR"))

// let date = new Date()
// let date1 = new Date("2022-11-17 12:03:19")
// let date2 = new Date("2022-11-19 13:03:19")

// document.write((date2 - date1) / 1000 / 60 / 60 / 24)
// document.write(Math.floor((date2 - date1) / 1000 / 60 / 60 / 24))

//>>> Array Manipulation <<<

// let myArray1 = [1, "a", "A"]
// let myArray =Array(1, "a", () => "X")

// console.log(myArray[2]())
// console.log(myArray.length)

let techs = ["HTML", "CSS", "Git"]

techs.push("javaScript") //add
// techs.pop() //remover(LIFO "Pilha")
techs.unshift("SQL") //Insire no ínicio
// techs.shift() //Remove do ínicio
// techs.shift() //Remove do ínicio (FIFO "Fila")

// let elementDeleted = techs.shift()
// alert(`Elemento ${elementDeleted} removido com sucesso!`)

// let index = techs.indexOf("HTML")
// techs.splice(index,1)

// document.write(techs)
// document.write(index)
// document.write(`${techs} <br>`)
// document.write(techs.slice(0, -1)) //limpa-remove
// console.log(index)

let nums = [2, "2", 20, 1, 10, 5, 78, 34, 3]

// document.write(nums.sort((a, b) => a - b))