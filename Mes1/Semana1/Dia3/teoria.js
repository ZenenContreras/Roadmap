/*
============================================================
DÍA 3 — ARRAYS
============================================================

OBJETIVO:

✓ Crear arrays
✓ Acceder a elementos
✓ length
✓ push
✓ pop
✓ shift
✓ unshift
✓ includes
✓ indexOf
✓ slice
✓ splice
✓ map
✓ filter
✓ find
✓ some
✓ every
✓ reduce
✓ sort
✓ chaining

AL TERMINAR:

Debes mirar un problema y pensar:

"Necesito map."

o:

"Necesito filter."

o:

"Necesito reduce."

Sin tener que copiar código.
============================================================
*/


// ============================================================
// 1. ¿QUÉ ES UN ARRAY?
// ============================================================

const fruits = [
    "apple",
    "banana",
    "orange"
];


console.log(fruits);


/*
Los arrays tienen índices.

              0          1          2

          apple      banana      orange
*/


console.log(fruits[0]);

console.log(fruits[1]);

console.log(fruits[2]);


/*
IMPORTANTE:

Los índices comienzan en 0.
*/


// ============================================================
// 2. LENGTH
// ============================================================

console.log(
    fruits.length
);


/*
Si tenemos:

["apple", "banana", "orange"]

length = 3

Pero último índice = 2.
*/


console.log(
    fruits[fruits.length - 1]
);


// También existe:

console.log(
    fruits.at(-1)
);


// ============================================================
// 3. PUSH
// ============================================================

const numbers = [
    1,
    2,
    3
];


numbers.push(4);


console.log(numbers);


/*
push:

agrega al FINAL.
*/


// ============================================================
// 4. POP
// ============================================================

numbers.pop();


console.log(numbers);


/*
pop:

elimina del FINAL.
*/


// ============================================================
// 5. UNSHIFT
// ============================================================

numbers.unshift(0);


console.log(numbers);


/*
unshift:

agrega al INICIO.
*/


// ============================================================
// 6. SHIFT
// ============================================================

numbers.shift();


console.log(numbers);


/*
shift:

elimina del INICIO.
*/


// ============================================================
// 7. INCLUDES
// ============================================================

const skills = [
    "JavaScript",
    "React",
    "Node"
];


console.log(
    skills.includes("React")
);


console.log(
    skills.includes("Python")
);


/*
includes responde:

true

o

false.
*/


// ============================================================
// 8. INDEXOF
// ============================================================

console.log(
    skills.indexOf("React")
);


console.log(
    skills.indexOf("Python")
);


/*
Si no existe:

-1
*/


// ============================================================
// 9. SLICE
// ============================================================

const original = [
    10,
    20,
    30,
    40,
    50
];


const part = original.slice(
    1,
    4
);


console.log(part);


/*
Resultado:

[20, 30, 40]


IMPORTANTE:

El segundo número NO se incluye.
*/


console.log(original);


/*
slice NO modifica el array original.
*/


// ============================================================
// 10. SPLICE
// ============================================================

const numbers2 = [
    10,
    20,
    30,
    40
];


numbers2.splice(
    1,
    1
);


console.log(numbers2);


/*
splice:

SÍ modifica el array original.


splice(start, deleteCount)
*/


// ============================================================
// 11. MAP
// ============================================================

/*
map es uno de los métodos MÁS importantes.

Pregunta:

"Quiero transformar TODOS los elementos."
*/


const prices = [
    100,
    200,
    300
];


const pricesWithTax = prices.map(
    price => price * 1.19
);


console.log(pricesWithTax);


/*
Original:

[100, 200, 300]


map:

↓

[119, 238, 357]


IMPORTANTE:

map devuelve un NUEVO ARRAY.
*/


// ============================================================
// 12. FILTER
// ============================================================

/*
filter responde:

"¿Qué elementos quiero conservar?"
*/


const ages = [
    12,
    18,
    21,
    15,
    30
];


const adults = ages.filter(
    age => age >= 18
);


console.log(adults);


/*
Resultado:

[18, 21, 30]
*/


// ============================================================
// 13. FIND
// ============================================================

/*
find:

"Encuentra el PRIMER elemento
que cumpla la condición."
*/


const users = [

    {
        name: "Ana",
        age: 22
    },

    {
        name: "Carlos",
        age: 30
    },

    {
        name: "Laura",
        age: 27
    }

];


const user = users.find(
    user => user.name === "Carlos"
);


console.log(user);


/*
IMPORTANTE:

find devuelve:

UN elemento.

No un array.
*/


// ============================================================
// 14. SOME
// ============================================================

/*
some:

"¿EXISTE AL MENOS UNO
que cumpla?"
*/


const hasAdult = users.some(
    user => user.age >= 18
);


console.log(hasAdult);


/*
Devuelve:

true
o
false.
*/


// ============================================================
// 15. EVERY
// ============================================================

/*
every:

"¿TODOS cumplen?"
*/


const allAdults = users.every(
    user => user.age >= 18
);


console.log(allAdults);


// ============================================================
// 16. REDUCE
// ============================================================

/*
reduce es probablemente
el método que más cuesta al principio.

Pero la idea es sencilla:

MUCHOS VALORES

↓

UN RESULTADO
*/


const values = [
    10,
    20,
    30
];


const total = values.reduce(

    (accumulator, currentValue) => {

        return accumulator + currentValue;

    },

    0

);


console.log(total);


/*
Visualmente:


initial:

0


primer elemento:

0 + 10 = 10


segundo:

10 + 20 = 30


tercero:

30 + 30 = 60


RESULTADO:

60
*/


// ============================================================
// 17. REDUCE — INVENTARIO
// ============================================================

const productPrices = [
    100,
    200,
    500,
    1000
];


const totalPrice = productPrices.reduce(

    (total, price) => {

        return total + price;

    },

    0

);


console.log(totalPrice);


// ============================================================
// 18. SORT
// ============================================================

const unsortedNumbers = [
    10,
    2,
    30,
    5,
    100
];


unsortedNumbers.sort(
    (a, b) => a - b
);


console.log(
    unsortedNumbers
);


/*
a - b:

ascendente.


b - a:

descendente.
*/


// ============================================================
// 19. IMPORTANTE: SORT MODIFICA
// ============================================================

/*
Si no quieres modificar el original:

crea una copia.
*/


const originalNumbers = [
    10,
    2,
    30,
    5
];


const sortedNumbers = [
    ...originalNumbers
].sort(
    (a, b) => a - b
);


console.log(originalNumbers);

console.log(sortedNumbers);


// ============================================================
// 20. CHAINING
// ============================================================

const products = [

    {
        name: "Laptop",
        price: 3000
    },

    {
        name: "Mouse",
        price: 100
    },

    {
        name: "Keyboard",
        price: 200
    }

];


const expensiveProductNames = products

    .filter(
        product => product.price > 150
    )

    .map(
        product => product.name
    );


console.log(
    expensiveProductNames
);


/*
¿Qué ocurrió?

PRIMERO:

filter

↓

Laptop
Keyboard


DESPUÉS:

map

↓

["Laptop", "Keyboard"]
*/


// ============================================================
// 21. MODELO MENTAL
// ============================================================

/*

map

"Quiero TRANSFORMAR todos."


filter

"Quiero QUEDARME con algunos."


find

"Quiero ENCONTRAR EL PRIMERO."


some

"¿EXISTE AL MENOS UNO?"


every

"¿TODOS cumplen?"


reduce

"Quiero convertir MUCHOS valores
en UN resultado."


sort

"Quiero ORDENAR."


slice

"Quiero COPIAR una parte."


splice

"Quiero MODIFICAR el array."


*/

