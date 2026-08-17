/*============================================================
EJERCICIOS — DÍA 1
============================================================
*/


// ------------------------------------------------------------
// EJERCICIO 1
// ------------------------------------------------------------

/*
Crea:

name
age
country
isStudent

E imprime:

"My name is X, I am X years old,
I live in X and I am a student."

Utiliza template literals.
*/


// ESCRIBE TU SOLUCIÓN AQUÍ:

const name = "Zenen Contreras"
const age= 24
const country = "Colombia"
const isStudent = true

console.log("EJERCICIO 1:")
console.log(`My name is ${name}, I am ${age}, I live in ${country} and i ${isStudent ? "am a Student" : " am not a Student"}`)



// ------------------------------------------------------------
// EJERCICIO 2
// ------------------------------------------------------------

/*
Sistema de checkout.

price = 250
quantity = 3
discount = 10%
tax = 19%

Calcula:

subtotal
discountAmount
priceAfterDiscount
taxAmount
total
*/


// TU SOLUCIÓN:

function checkout(price, quantity, discount, tax) {
    const subtotal = price * quantity
    const discountAmount = subtotal * (discount/100)
    const priceAfterDiscount = subtotal - discountAmount
    const taxAmount = priceAfterDiscount * (tax/100)
    const total = priceAfterDiscount + taxAmount

    console.log(`Subtotal: ${subtotal}\nDiscountAmount: ${discountAmount}\nPriceAfterDiscount: ${priceAfterDiscount}\nTax Amount: ${taxAmount}\nTotal:${total}`)
}

console.log("Ejercicio 2")
checkout(250, 3, 10, 19)



// ------------------------------------------------------------
// EJERCICIO 3
// ------------------------------------------------------------

/*
Determina si un número es par.

10 → true
7 → false

PISTA:

%
*/


// TU SOLUCIÓN:

const isEven = (num) => {
    num % 2 === 0 ? console.log(`${num} es par`) : console.log(`${num} no es par`)
    
}

console.log("Ejercicio 3")
isEven(4)


// ------------------------------------------------------------
// EJERCICIO 4
// ------------------------------------------------------------

/*
Crea:

getMax(a, b)

NO utilices Math.max().
*/


// TU SOLUCIÓN:

const getMax = (a,b) => {
    a > b ? console.log(`${a} es mayor que ${b}`) : console.log(`${b} es mayor que ${a}`)
}

console.log("EJERCICIO 4")

getMax(1, 2)


// ------------------------------------------------------------
// EJERCICIO 5
// ------------------------------------------------------------

/*
Crea:

getMaxOfThree(a, b, c)

NO utilices Math.max().
*/


// TU SOLUCIÓN:

const getMaxOfThree = (a, b, c) =>{
    const numbers = [a, b, c]

    const max = numbers.reduce((accumulador, currentValue) => {
        return currentValue > accumulador ? currentValue : accumulador
    })

    console.log(`El numero mayor es ${max}`)
}

console.log("EJERCICIO 5")
getMaxOfThree(1, 2, 3)



// ------------------------------------------------------------
// EJERCICIO 6
// ------------------------------------------------------------

/*
canVote(age, isCitizen)

Debe devolver true solamente cuando:

age >= 18
Y
isCitizen === true
*/


// TU SOLUCIÓN:
console.log("EJERCICIO 6: ")

const canVote = (age, isCitizen) => {
    if( age >= 18 && isCitizen === true){
        console.log("CAN VOTE")
    }else{
        console.log("Stupid ass kid")
    }
}

canVote(18, true)


// ------------------------------------------------------------
// EJERCICIO 7
// ------------------------------------------------------------

/*
celsiusToFahrenheit(celsius)

F = C * 9/5 + 32
*/


// TU SOLUCIÓN:

console.log("EJERCICIO 7: ")

const celsiusToFahrenheit = (celsius) => {
    const F = celsius * 9/5 + 32

    console.log(`${celsius}°C = ${F}°F`)
}

celsiusToFahrenheit(100)




// ------------------------------------------------------------
// EJERCICIO 8
// ------------------------------------------------------------

/*
getInitials("Zenen", "Contreras")

Debe devolver:

"ZC"
*/


// TU SOLUCIÓN:

console.log("EJERCICIO 8: ")

const getInitials =(name, lastName) => {
    const initialN = name.split('')[0]
    const initialL = lastName.split('')[0]

    console.log(initialN, initialL)
}

getInitials("Zenen","Contreras")


// ------------------------------------------------------------
// EJERCICIO 9
// ------------------------------------------------------------

/*
ANTES de ejecutar, predice:

Boolean("")
Boolean("hello")
Boolean(0)
Boolean(1)
Boolean(null)
Boolean(undefined)
Boolean([])
Boolean({})
*/


// TU PREDICCIÓN:

/* 
   false
   true
   false
   true
   false
   false
   true
   true 
*/


// ------------------------------------------------------------
// EJERCICIO 10
// ------------------------------------------------------------

/*
Predice:

5 == "5"
5 === "5"

0 == false
0 === false

null == undefined
null === undefined

Después explica POR QUÉ.
*/


// TU RESPUESTA:

/* 
    true
    false
    true
    false
    true
    flase
*/


// ------------------------------------------------------------
// EJERCICIO 11
// ------------------------------------------------------------

/*
getAccessMessage(age)

>=18:

"Access granted"

<18:

"Access denied"

Utiliza ternario.
*/


// TU SOLUCIÓN:

console.log("EJERCICIO 11")

const getAccessMessage = (age) => {
    age >= 18 ? console.log("Access granted") : console.log("Access denied")
}

getAccessMessage(18)


// ------------------------------------------------------------
// EJERCICIO 12
// ------------------------------------------------------------

/*
Crea:

nickname = null

Después:

nickname ?? "Developer"

Luego cambia nickname por:

"Zenen"

Explica qué sucede.
*/


// TU SOLUCIÓN:

console.log('EJERCICIO 12')


let nickname = null

console.log(nickname ?? "Developer")

console.log(nickname)

nickname = "Zenen"

console.log(nickname)


// ============================================================
// CHECKPOINT DEL DÍA 1
// ============================================================

/*
NO avances al Día 2 hasta poder explicar SIN MIRAR:

1. const vs let
2. string
3. number
4. boolean
5. null
6. undefined
7. === vs ==
8. &&
9. ||
10. !
11. truthy/falsy
12. if/else
13. ternario
14. ?.
15. ??

Y deberías poder resolver los ejercicios 1–12.
*/