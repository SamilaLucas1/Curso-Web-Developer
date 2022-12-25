// console.log('Inicio')
// let out = setTimeout(() => {
//     console.log('Logica')
// }, 0)

// let int = setInterval(() => {
//     console.log('SetInterval')
// }, 5000)

// let isFinish = false
// if (isFinish) {
//     clearTimeout(out)
//     clearInterval(int)
// }

// console.log(out)
// console.log(int)
// console.log('Fim')
 
// console.log('Inicio')
// const arrayNumbers = [12, 23, 45, 55, 68, 70, 90]
// const arrayAux = []
// let count = 0 
// let int = setInterval(() => {
//     arrayAux.push(arrayNumbers[count])
//     const numbers = document.querySelector('.numbers')
//     numbers.innerHTML = arrayAux
//     if (arrayAux.length == arrayNumbers.length) {
//         clearTimeout(out)
//         clearInterval(int)
//     }
//     count++
// }, 1500)

// let out = setTimeout(() => {
//     console.log('Logica')
// }, 5000)

// let isFinish = false
// if (isFinish) {
//     clearTimeout(out)
//     clearInterval(int)
// }

// console.log(out)
// console.log(int)
// console.log('Fim')

// / console.log('Inicio')

// const arrayNumbers = [12, 23, 45, 55, 68, 70, 90]
// const arrayAux = []
// let count = 0
// let functionSetInt = setInterval(() => {
//     arrayAux.push(arrayNumbers[count])
//     const numbers = document.querySelector('.numbers')
//     numbers.innerHTML = arrayAux

//     if (arrayAux.length == arrayNumbers.length) {
//         clearTimeout(functionSetTimeOut)
//         clearInterval(functionSetInt)
//     }
//     count++
// }, 1500)


// let functionSetTimeOut = setTimeout(() => {
//     console.log('Lógica');
// }, 5000)

// let isFinish = false
// if (isFinish) {
//     clearInterval(functionSetInt)
//     clearTimeout(functionSetTimeOut)
// }

// console.log(functionSetInt)
// console.log(functionSetTimeOut)

// console.log('Fim')


//>>>>> Promises <<<<<
console.log('Requisição');
const myPromise = new Promise((resolve, reject) => {
    let request = true
    if (request) {
        return resolve('Requisição aceita!')
    } else {
        return reject('Requisição não aceita!')
    }
    
})

console.log(myPromise);
myPromise.then((answer) => console.log(answer)).catch((error) => console.log(error)).finally(() => console.log('Requisição encerrada!'))

// >>> ASYNC AWAIT <<<
async function requestData(){
    try {
        const promise = await myPromise
        console.log(promise);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Requisição encerrada!");
    }
    
}
requestData()
console.log('Finalizar requisição');

// >>> FETCH <<<
const user = 'Samila'
const url = `https://api.github.com/users/${user}`
const userGitHub = fetch(url)
console.log(userGitHub)
userGitHub.then((request) => request.json()).then((name, bio) => console.log(name, bio))

async function userGitHubData(user) {
    try {
       await fetch(`https://api.github.com/users/${user}`).then((request) => request.json()).then((data) => console.log(`${data.name}: ${data.bio}`))
       
    } catch (error) {
        console.log(error);
    }
}

userGitHubData('AnnaClr')
userGitHubData('EmanuelQuintino')
userGitHubData('jose-murilo')
userGitHubData('Mario13Sergio')