let nome = (String(prompt("Digite seu nome")))
let nota1 = (Number(prompt("Digite sua nota")))
let nota2 = (Number(prompt("Digite sua nota")))

let n1 =  (nota1 + nota2) / 2
document.write(`${nome} <br>`)
document.write(`${n1} <br>`)

if (n1 >= 7) {
    document.write("Aprovado")
} else {
    if(n1 < 7){
    document.write("Reprovado")
  }
}

// const nameStudent = prompt("Nome do aluno:")
// const note1 = Number(prompt("Nota 1:"))
// const note2 = Number(prompt("Nota 2:"))

// function calcAvarege(note1, note2) {
//     return (note1 + note2) / 2
// }

// const avarege = calcAvarege(note1, note2)
// let = situation

// if (avarege >= 7) {
//     situation = "Aprovado"
// } else {
//     situation = "Reprovado"
// }
// window.alert(`O ${nameStudent} tem média ${avarege} e foi ${situation}`)

// const aluno = prompt("Nome do aluno:")
// const nota1 = Number(prompt("1° Nota:"))
// const nota2 = Number(prompt("2º Nota:"))

// function calcAvarege(note1, note2) {
//     return (note1 + nota2) / 2
// }

// const avarege = calcAvarege(nota1, nota2)

// window.alert(avarege)

// if (avarege >= 7) {
//     situation = "Aprovado"

// } else {
//     situation = "Reprovado"

// }

// window.alert(`O ${aluno} tem média de ${avarege} e foi ${situation}`)