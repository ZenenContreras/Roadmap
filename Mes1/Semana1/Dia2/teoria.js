/*
============================================================
DÍA 2 — FUNCTIONS + SCOPE
============================================================

OBJETIVO:

✓ Entender qué es una función
✓ Parameters vs arguments
✓ return
✓ Arrow functions
✓ Default parameters
✓ Funciones reutilizables
✓ Scope
✓ Block scope
✓ Shadowing
✓ Higher-order functions
✓ Introducción a closures

HOY QUIERO QUE CAMBIES TU FORMA DE PENSAR:

NO:

"¿Cómo hago este código?"

SÍ:

"¿Qué entrada recibe mi función
y qué salida debe devolver?"
============================================================
*/


// ============================================================
// 1. ¿QUÉ ES UNA FUNCIÓN?
// ============================================================

/*
Una función es código reutilizable.

Podemos pensar:

INPUT
  ↓
FUNCTION
  ↓
OUTPUT
*/


function add(a, b) {

    return a + b;

}


console.log(add(5, 3));


/*
a y b:

PARAMETERS


5 y 3:

ARGUMENTS
*/


// ============================================================
// 2. RETURN
// ============================================================

function multiply(a, b) {

    return a * b;

}


const result = multiply(5, 4);


console.log(result);


/*
return entrega el resultado.

Esto es MUY diferente a console.log.
*/


function example1() {

    console.log("Hello");

}


function example2() {

    return "Hello";

}


const value = example2();


console.log(value);


/*
example1:

muestra algo.


example2:

DEVUELVE algo.


Las funciones que construyas profesionalmente
normalmente deberían devolver valores que luego puedas reutilizar.
*/


// ============================================================
// 3. FUNCTION DECLARATION
// ============================================================

function subtract(a, b) {

    return a - b;

}


console.log(
    subtract(10, 4)
);


// ============================================================
// 4. ARROW FUNCTIONS
// ============================================================

/*
Forma tradicional:
*/

function square(a) {

    return a * a;

}


/*
Arrow:
*/

const squareArrow = (a) => {

    return a * a;

};


console.log(squareArrow(5));


/*
Si solo tienes una expresión:

puedes simplificar:
*/

const double = number => number * 2;


console.log(
    double(10)
);


/*
Esto:

const double = number => number * 2;


es equivalente conceptualmente a:

function double(number) {
    return number * 2;
}
*/


// ============================================================
// 5. DEFAULT PARAMETERS
// ============================================================

function greet(name = "Developer") {

    return `Hello ${name}`;

}


console.log(
    greet()
);


console.log(
    greet("Zenen")
);


/*
Si no pasamos name:

usa "Developer".
*/


// ============================================================
// 6. MULTIPLES PARAMETERS
// ============================================================

function calculatePrice(price, quantity) {

    return price * quantity;

}


console.log(
    calculatePrice(100, 5)
);


// ============================================================
// 7. FUNCIONES PEQUEÑAS
// ============================================================

/*
Una buena práctica:

una función debería tener una responsabilidad clara.
*/


function isAdult(age) {

    return age >= 18;

}


function isEven(number) {

    return number % 2 === 0;

}


console.log(
    isAdult(20)
);


console.log(
    isEven(10)
);


// ============================================================
// 8. SCOPE
// ============================================================

/*
Scope significa:

"¿Dónde puede utilizarse esta variable?"
*/


const globalMessage = "Hello";


function testScope() {

    const localMessage = "Inside";

    console.log(globalMessage);

    console.log(localMessage);

}


testScope();


/*
globalMessage:

puede ser utilizada dentro de la función.


localMessage:

solo existe dentro de testScope.
*/


// Esto NO funcionaría:
//
// console.log(localMessage);


// ============================================================
// 9. FUNCTION SCOPE
// ============================================================

function createUser() {

    const username = "Zenen";

    const age = 25;

    return username;

}


console.log(
    createUser()
);


// username no existe fuera.

// console.log(username);


// ============================================================
// 10. BLOCK SCOPE
// ============================================================

/*
let y const tienen block scope.
*/


if (true) {

    const secret = "123";

    let number = 10;

    console.log(secret);

    console.log(number);

}


// Fuera del bloque:
//
// console.log(secret);
// console.log(number);


// ============================================================
// 11. SHADOWING
// ============================================================

const city = "Barranquilla";


function showCity() {

    const city = "Bogotá";

    console.log(city);

}


showCity();

console.log(city);


/*
La variable interna "city"
oculta temporalmente a la externa
dentro de esa función.

Esto se llama shadowing.
*/


// ============================================================
// 12. FUNCIONES COMO VALORES
// ============================================================

/*
En JavaScript:

las funciones son valores.

Podemos guardar una función
en una variable.
*/


const sayHello = function () {

    return "Hello";

};


console.log(
    sayHello()
);


/*
También podemos pasar una función
como argumento.
*/


function executeOperation(operation) {

    return operation();

}


const sayGoodbye = () => {

    return "Goodbye";

};


console.log(
    executeOperation(sayGoodbye)
);


// ============================================================
// 13. HIGHER-ORDER FUNCTIONS
// ============================================================

/*
Una higher-order function:

recibe una función
o
devuelve una función.
*/


function processNumber(number, operation) {

    return operation(number);

}


const doubleNumber = number => number * 2;

const squareNumber = number => number ** 2;


console.log(
    processNumber(5, doubleNumber)
);


console.log(
    processNumber(5, squareNumber)
);


/*
Esto será MUY importante mañana
cuando aprendamos:

map
filter
find
reduce
*/


// ============================================================
// 14. FUNCIONES PURAS
// ============================================================

/*
Una función pura:

- recibe inputs
- produce output
- no depende de cosas externas
- no modifica cosas inesperadamente
*/


function addTax(price, taxRate) {

    return price * (1 + taxRate);

}


console.log(
    addTax(100, 0.19)
);


/*
Esta función es fácil de probar.

100 → 119

200 → 238

etc.
*/


// ============================================================
// 15. CLOSURES — INTRODUCCIÓN
// ============================================================

/*
Esto todavía NO necesitas dominarlo.

Solo quiero que entiendas
una idea fundamental.
*/


function createCounter() {

    let count = 0;


    return function () {

        count++;

        return count;

    };

}


const counter = createCounter();


console.log(counter());

console.log(counter());

console.log(counter());


/*
¿Por qué?

La función interna sigue teniendo acceso
a count aunque createCounter ya terminó.

Esto es un closure.

No necesitas memorizar la definición.

Solo entiende:

UNA FUNCIÓN PUEDE RECORDAR
EL ENTORNO DONDE FUE CREADA.
*/

