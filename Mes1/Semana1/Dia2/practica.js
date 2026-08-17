
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




// ------------------------------------------------------------
// EJERCICIO 2
// ------------------------------------------------------------

/*
Reescribe calculateAverage
como arrow function.
*/


// TU SOLUCIÓN:




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




// ------------------------------------------------------------
// EJERCICIO 9
// ------------------------------------------------------------

/*
Crea:

getMax(a, b, c)

NO uses Math.max().
*/


// TU SOLUCIÓN:




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