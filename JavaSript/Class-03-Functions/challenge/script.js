// Faça um programa que execute o IMC de cada paciente
// Os pacientes devem estar em uma lista e conter as propriedades:
// name, height, weight
// Escreva na tela o nome do paciente e o seu IMC

function calIMC (paciente) {
    let imc = paciente.weight / (paciente.height / 100) ** 2
    return imc.toFixed(2)
}

const listapaciente = [
    {
        name: 'Samila',
        height: 163,
        weight: 60
    },

    {
        name: 'Rodrigo',
        height: 182,
        weight: 90
    },

    {
        name: 'António',
        height: 170,
        weight: 85
    },
]

document.write(`O IMC de ${listapaciente[0].name} é ${calIMC(listapaciente[0])} <br>`)
document.write(`O IMC de ${listapaciente[1].name} é ${calIMC(listapaciente[1])} <br>`)
document.write(`O IMC de ${listapaciente[2].name} é ${calIMC(listapaciente[2])} <br>`)