
// ============================================================
// EJERCICIOS
// ============================================================


// ------------------------------------------------------------
// EJERCICIO 1
// ------------------------------------------------------------

/*
Crea:

calculateAverage(a, b, c)

Debe devolver el promedio.
*/


// TU SOLUCIÓN:

function calculateAverage(a, b, c) {
    return (a + b + c) / 3
}

console.log("EJERCICIO 1: ", calculateAverage(1,2,3))



// ------------------------------------------------------------
// EJERCICIO 2
// ------------------------------------------------------------

/*
Reescribe calculateAverage
como arrow function.
*/


// TU SOLUCIÓN:

const calculateAverageArrow = (a, b, c) => {
    return (a + b + c) / 3
}

console.log("EJERCICIO 2: ", calculateAverageArrow(1,2,3))


// ------------------------------------------------------------
// EJERCICIO 3
// ------------------------------------------------------------

/*
Crea:

greet(name = "Developer")

Debe devolver:

Hello NAME!
*/


// TU SOLUCIÓN:

function greet(name = "Developer") {
    return `Hello ${name}!`
}

console.log("EJERCICIO 3: ", greet("Zenen"))


// ------------------------------------------------------------
// EJERCICIO 4
// ------------------------------------------------------------

/*
Crea:

calculateDiscount(price, percentage)

Ejemplo:

calculateDiscount(100, 20)

debe devolver:

80
*/


// TU SOLUCIÓN:

function calculateDiscount(price, percentage) {
    return price - (price * percentage/100) 
}

console.log("EJERCICIO 4: ", calculateDiscount(100,20))



// ------------------------------------------------------------
// EJERCICIO 5
// ------------------------------------------------------------

/*
Crea:

addTax(price, taxRate)

Ejemplo:

addTax(100, 0.19)

Debe devolver:

119
*/


// TU SOLUCIÓN:

function addTax(price, taxRate) {
    return price + (price * taxRate) 
}

console.log("EJERCICIO 5: ", addTax(100, 0.19))



// ------------------------------------------------------------
// EJERCICIO 6
// ------------------------------------------------------------

/*
Crea:

getFullName(firstName, lastName)

Debe devolver:

"Zenen Contreras"
*/


// TU SOLUCIÓN:


function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName
}

console.log("EJERCICIO 6: ", getFullName("Zenen", "Contreras"))




// ------------------------------------------------------------
// EJERCICIO 7
// ------------------------------------------------------------

/*
Crea:

getInitials(firstName, lastName)

"Zenen", "Contreras"

→ "ZC"
*/


// TU SOLUCIÓN:

function getInitials(firstName, lastName) {
    const Initials = firstName.split('')[0] + lastName.split('')[0]
    return Initials
}

console.log("EJERCICIO 7: ", getInitials("Zenen", "Contreras"))



// ------------------------------------------------------------
// EJERCICIO 8
// ------------------------------------------------------------

/*
Crea:

isPositive(number)

Debe devolver:

true

si el número > 0.
*/


// TU SOLUCIÓN:


function isPositive(number) {
    return number > 0
}

console.log("EJERCICIO 8: ", isPositive(-2))



// ------------------------------------------------------------
// EJERCICIO 9
// ------------------------------------------------------------

/*
Crea:

getMax(a, b, c)

NO uses Math.max().
*/


// TU SOLUCIÓN:

function getMax(a, b ,c) {
    const numbers = [a,b,c].reduce((acummulator, current) => current > acummulator ? current : acummulator)
    return numbers
}

console.log("EJERCICIO 9: ", getMax(5, 2, 3))



// ------------------------------------------------------------
// EJERCICIO 10
// ------------------------------------------------------------

/*
Crea:

calculateBMI(weight, height)

BMI:

weight / height ** 2
*/


// TU SOLUCIÓN:

function calculateBMI(weight, height) {
    return weight / height ** 2
}

console.log("EJERCICIO 10: ", calculateBMI(80, 178))


// ------------------------------------------------------------
// EJERCICIO 11 — SCOPE
// ------------------------------------------------------------

/*
Predice el resultado:

const message = "global";


function test() {

    const message = "local";

    console.log(message);

}


test();

console.log(message);


¿Qué imprime?

Explica POR QUÉ.
*/


// TU RESPUESTA:

/*
    local
    global

    pro el scop primero solo toma el de la funcion y despues el del estado global
*/



// ------------------------------------------------------------
// EJERCICIO 12 — BLOCK SCOPE
// ------------------------------------------------------------

/*
¿Qué ocurre?

if (true) {

    const secret = "123";

    let number = 10;

}


console.log(secret);

console.log(number);


¿Funciona?

¿Por qué?
*/


// TU RESPUESTA:

//no funciona por que estan dentro de un bloque en especifico



// ------------------------------------------------------------
// EJERCICIO 13 — HIGHER-ORDER FUNCTION
// ------------------------------------------------------------

/*
Crea:

processNumber(number, operation)

Después:

double(number)

square(number)


Debe funcionar:

processNumber(5, double)

→ 10


processNumber(5, square)

→ 25
*/


// TU SOLUCIÓN:

function processNumber(number, operation){
    return operation(number)
}

function double(number){
    return number * 2
}

function square(number){
    return number ** 2
}

console.log("EJERCICIO 13: ", processNumber(10, double), processNumber(10, square) )


// ------------------------------------------------------------
// EJERCICIO 14 — CALCULATOR
// ------------------------------------------------------------

/*
Crea:

add
subtract
multiply
divide


Después:

calculate(a, b, operation)


Ejemplo:

calculate(10, 5, add)
→ 15


calculate(10, 5, multiply)
→ 50
*/


// TU SOLUCIÓN:

function add(a, b) {
    return a + b
}


function subtract(a, b) {
    return a - b
}


function multiply(a, b) {
    return a * b
}


function divide(a, b) {
    return a / b
}

function calculate(a, b, operation) {
    return operation(a, b)
}

console.log("EJERCICIO 14: ", calculate(10, 5, add), calculate(10, 5, multiply))

// ------------------------------------------------------------
// EJERCICIO 15 — CLOSURE
// ------------------------------------------------------------

/*
Completa:

function createCounter() {

    let count = 0;


    return function () {

        // ¿Qué código va aquí?

    };

}


const counter = createCounter();


counter()
→ 1

counter()
→ 2

counter()
→ 3


Después explica con tus propias palabras:

¿Por qué count no vuelve a 0?
*/


// TU SOLUCIÓN:

function createCounter() {

    let count = 0;

    return function () {

        count++
        return count
    };

}

const counter = createCounter()

console.log("EJERCICIO 15: ", counter())




// ============================================================
// CHECKPOINT DÍA 2
// ============================================================

/*
Antes de pasar al Día 3 deberías poder explicar:

✓ parameter
✓ argument
✓ return
✓ function
✓ arrow function
✓ default parameter
✓ scope
✓ block scope
✓ higher-order function
✓ closure — concepto


Y deberías poder crear funciones sin mirar ejemplos.
*/