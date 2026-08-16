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




// ------------------------------------------------------------
// EJERCICIO 4
// ------------------------------------------------------------

/*
Crea:

getMax(a, b)

NO utilices Math.max().
*/


// TU SOLUCIÓN:




// ------------------------------------------------------------
// EJERCICIO 5
// ------------------------------------------------------------

/*
Crea:

getMaxOfThree(a, b, c)

NO utilices Math.max().
*/


// TU SOLUCIÓN:




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




// ------------------------------------------------------------
// EJERCICIO 7
// ------------------------------------------------------------

/*
celsiusToFahrenheit(celsius)

F = C * 9/5 + 32
*/


// TU SOLUCIÓN:




// ------------------------------------------------------------
// EJERCICIO 8
// ------------------------------------------------------------

/*
getInitials("Zenen", "Contreras")

Debe devolver:

"ZC"
*/


// TU SOLUCIÓN:




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