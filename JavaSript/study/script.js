// Segundo o ECMAScript

// >>> Primitive Values (Strings, Number, Boolean)

// String 

//let names = "Samila";
//let age = 18;

//Funçoes construtoras para converter tipo
//age = Number(age);
//age = String(age);

//console.log(names);
//console.log(typeof names);

//console.log(age);
//console.log(typeof age);

//Number(integer, float, naN, infimity)

//Concatenation
//let num1 = 1.5
//let num2 = 5.0
//let soma = num1+num2

//console.log(soma)
//console.log(typeof soma)

// >>> Variables Scope (Hoisting) = elevação com var <<<
// constante = não muda o valor const pi = 3.14

//{
    //let num = 2
    //const pi = 3.14
    //console.log(num)

    //{
        //let num =3
       //console.log(num)
    //}

    //console.log(num) 

//}

//Boolean (true or false)

//let Exp = 20 == 20
//let n1 = "20", n2 =20
//let n1 = 20, n2 =20
//console.log(n1===n2)
//console.log(n1==n2)

// >>> Template Strings (Interpolation) <<<

let num1 = 10
let num2 = 25 //20
let total = num1 + num2

//alert("Olá")
//console.log("A soma de num1 e num2 é 30!")
//console.log("Num1 = " + num1)
console.log("A soma de " + num1 + " e " + num2 + " é " + total)
console.log(`A soma de ${num1} e ${num2} é igual a ${total}`)