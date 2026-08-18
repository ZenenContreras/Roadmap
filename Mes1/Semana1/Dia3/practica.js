// ============================================================
// EJERCICIOS
// ============================================================


// ------------------------------------------------------------
// EJERCICIO 1
// ------------------------------------------------------------

const exerciseNumbers = [
    10,
    15,
    20,
    25,
    30,
    35
];


/*
Obtén:

primer elemento

último elemento

cantidad de elementos
*/


// TU SOLUCIÓN:

function Ejercicio1 (){
    const primer = exerciseNumbers.shift()
    const pop = exerciseNumbers.unshift()
    const cantidad = exerciseNumbers.length

    return {primer, pop, cantidad}
}

console.log("EJERCICIO 1: ", Ejercicio1())

// ------------------------------------------------------------
// EJERCICIO 2
// ------------------------------------------------------------

/*
Agrega:

40

con push.

Después elimínalo
con pop.

Imprime el array
después de cada operación.
*/


// TU SOLUCIÓN:

function ejercicio2 (){
    exerciseNumbers.push(40)

    console.log(exerciseNumbers)
    exerciseNumbers.pop()

    console.log(exerciseNumbers)
}

console.log("EJERCICIO 2: ", ejercicio2())



// ------------------------------------------------------------
// EJERCICIO 3
// ------------------------------------------------------------

/*
Comprueba si existe:

20

y:

99
*/


// TU SOLUCIÓN:

function ejercicio3 (){
    return exerciseNumbers.includes(20 || 99)
}

console.log("EJERCICIO 3: ", ejercicio3())

// ------------------------------------------------------------
// EJERCICIO 4
// ------------------------------------------------------------

/*
Usa slice.

Obtén:

[15, 20, 25]

sin modificar el array original.
*/


// TU SOLUCIÓN:

function ejercicio4 (){
     const newArray = exerciseNumbers.slice(0,3)
     return newArray
}

console.log("EJERCICIO 4: ", ejercicio4())


// ------------------------------------------------------------
// EJERCICIO 5
// ------------------------------------------------------------

/*
filter:

Obtén números > 20.

Resultado:

[25, 30, 35]
*/


// TU SOLUCIÓN:

function ejercicio5 (){
     const newArray = exerciseNumbers.filter(num => num > 20)
     return newArray
}

console.log("EJERCICIO 5: ", ejercicio5())



// ------------------------------------------------------------
// EJERCICIO 6
// ------------------------------------------------------------

/*
map:

Multiplica todos los números por 2.
*/


// TU SOLUCIÓN:

function ejercicio6 (){
     const newArray = exerciseNumbers.map(num => num * 2)
     return newArray
}

console.log("EJERCICIO 6: ", ejercicio6())


// ------------------------------------------------------------
// EJERCICIO 7
// ------------------------------------------------------------

/*
find:

Encuentra el primer número
mayor que 22.
*/


// TU SOLUCIÓN:

function ejercicio7 (){
     const newArray = exerciseNumbers.find(num => num > 22)
     return newArray
}

console.log("EJERCICIO 7: ", ejercicio7())


// ------------------------------------------------------------
// EJERCICIO 8
// ------------------------------------------------------------

/*
some:

¿Existe algún número
mayor que 30?
*/


// TU SOLUCIÓN:


function ejercicio8 (){
     const newArray = exerciseNumbers.some(num => num > 40)
     return newArray
}

console.log("EJERCICIO 8: ", ejercicio8())


// ------------------------------------------------------------
// EJERCICIO 9
// ------------------------------------------------------------

/*
every:

¿Todos los números
son mayores que 5?

Después:

¿Todos son mayores que 20?
*/


// TU SOLUCIÓN:

function ejercicio9 (){
     const newArray = exerciseNumbers.every(num => num > 5)
     return newArray
}

console.log("EJERCICIO 9: ", ejercicio9())


// ------------------------------------------------------------
// EJERCICIO 10
// ------------------------------------------------------------

/*
reduce:

Calcula la suma total.
*/


// TU SOLUCIÓN:

function ejercicio10 (){
     const newArray = exerciseNumbers.reduce((acumulador, prev) => acumulador + prev, 0)
     return newArray
}

console.log("EJERCICIO 10: ", ejercicio10())


// ------------------------------------------------------------
// EJERCICIO 11
// ------------------------------------------------------------

/*
reduce:

Calcula el promedio.
*/


// TU SOLUCIÓN:

function ejercicio11 (){
     const newArray = exerciseNumbers.reduce((acumulador, prev) => acumulador + prev, 0)
     const promedio = newArray / exerciseNumbers.length
     return promedio
}

console.log("EJERCICIO 11: ", ejercicio11())


// ------------------------------------------------------------
// EJERCICIO 12
// ------------------------------------------------------------

/*
Ordena:

[
    10,
    2,
    30,
    5,
    100,
    20
]

de menor a mayor.
*/


// TU SOLUCIÓN:

function ejercicio12 (){
     const newArray = [
    10,
    2,
    30,
    5,
    100,
    20
].sort((a, b ) => a - b)
     return newArray
}

console.log("EJERCICIO 12: ", ejercicio12())


// ------------------------------------------------------------
// EJERCICIO 13
// ------------------------------------------------------------

/*
Explica:

¿Por qué esto puede dar un resultado
inesperado?

numbers.sort();

¿Y por qué usamos?

numbers.sort((a, b) => a - b)
*/


// TU RESPUESTA:

// Porque js lo puede ordenar entonces es por orden alfabetico proque convierte todos los numeros a textos. 


// ============================================================
// ARRAYS DE OBJETOS
// ============================================================

const products2 = [

    {
        name: "Laptop",
        price: 3000,
        stock: 5,
        category: "tech"
    },

    {
        name: "Mouse",
        price: 100,
        stock: 0,
        category: "tech"
    },

    {
        name: "Chair",
        price: 500,
        stock: 10,
        category: "office"
    },

    {
        name: "Keyboard",
        price: 200,
        stock: 3,
        category: "tech"
    }

];


// ------------------------------------------------------------
// EJERCICIO 14
// ------------------------------------------------------------

/*
Obtén:

[
    "Laptop",
    "Mouse",
    "Chair",
    "Keyboard"
]
*/


// TU SOLUCIÓN:

function ejercicio14 (){
    const newArray = products2.map(product => product.name)
    return newArray
}

console.log("EJERCICIO 14: ", ejercicio14())


// ------------------------------------------------------------
// EJERCICIO 15
// ------------------------------------------------------------

/*
Obtén solamente
los productos tech.
*/


// TU SOLUCIÓN:

function ejercicio15 (){
    const newArray = products2.filter(product => product.category === 'tech')
    return newArray
}

console.log("EJERCICIO 15: ", ejercicio15())


// ------------------------------------------------------------
// EJERCICIO 16
// ------------------------------------------------------------

/*
Obtén productos
con stock > 0.
*/


// TU SOLUCIÓN:


function ejercicio16 (){
    const newArray = products2.filter(product => product.stock > 0)
    return newArray
}

console.log("EJERCICIO 16: ", ejercicio16())
// ------------------------------------------------------------
// EJERCICIO 17
// ------------------------------------------------------------

/*
Encuentra:

Chair
*/


// TU SOLUCIÓN:

function ejercicio17 (){
    const newArray = products2.filter(product => product.name === 'Chair')
    return newArray
}

console.log("EJERCICIO 17: ", ejercicio17())


// ------------------------------------------------------------
// EJERCICIO 18
// ------------------------------------------------------------

/*
Calcula el valor TOTAL
del inventario.

Fórmula:

price * stock


Ejemplo:

Laptop:

3000 * 5

= 15000
*/


// TU SOLUCIÓN:

function ejercicio18 (){
    const newArray = products2.reduce((acumulador, currentValue) => acumulador + (currentValue.price * currentValue.stock) , 0)
    return newArray
}

console.log("EJERCICIO 18: ", ejercicio18())


// ------------------------------------------------------------
// EJERCICIO 19
// ------------------------------------------------------------

/*
Encuentra el producto
más caro.

NO uses:

Math.max()
*/


// TU SOLUCIÓN:


function ejercicio19 (){
    const newArray = products2.reduce((acumulador, currentValue) => currentValue.price > acumulador ? currentValue.price : acumulador , 0)
    return newArray
}

console.log("EJERCICIO 18: ", ejercicio19())


// ------------------------------------------------------------
// EJERCICIO 20
// ------------------------------------------------------------

/*
Crea:

[
    {
        name: "Laptop",
        totalValue: 15000
    },

    ...
]


totalValue:

price * stock
*/


// TU SOLUCIÓN:

function ejercicio20 (){
    const newArray = products2.reduce((acumulador, currentValue) => {
        const newObject = {name: currentValue.name , totalValue: currentValue.price * currentValue.stock}

        acumulador.push(newObject)

        return acumulador

    }, [])
    return newArray
}

console.log("EJERCICIO 20: ", ejercicio20())


// ------------------------------------------------------------
// EJERCICIO 21
// ------------------------------------------------------------

/*
¿Existe algún producto
sin stock?

Debe devolver:

true / false
*/


// TU SOLUCIÓN:

function ejercicio21 (){
    const newArray = products2.some(product => product.stock === 0)
    return newArray
}

console.log("EJERCICIO 21: ", ejercicio21())


// ------------------------------------------------------------
// EJERCICIO 22
// ------------------------------------------------------------

/*
¿Todos los productos
tienen stock?
*/


// TU SOLUCIÓN:

function ejercicio22 (){
    const newArray = products2.every(product => product.stock === 0)
    return newArray
}

console.log("EJERCICIO 22: ", ejercicio22())


// ------------------------------------------------------------
// EJERCICIO 23
// ------------------------------------------------------------

/*
Ordena los productos
por precio:

menor → mayor

IMPORTANTE:

NO debes modificar
products2.
*/


// TU SOLUCIÓN:

function ejercicio23 (){
    const newArray = [...products2.sort((a, b)=> a.price - b.price)]
    return newArray
}

console.log("EJERCICIO 23: ", ejercicio23())



// ============================================================
// 🚀 RETO FINAL DEL DÍA 3
// ============================================================

/*

CREA:

INVENTORY ANALYZER


Debes crear estas funciones:


1.

getProductNames(products)



Devuelve todos los nombres.


2.

getAvailableProducts(products)


Devuelve productos con stock > 0.


3.

getProductsByCategory(products, category)


Devuelve productos de esa categoría.


4.

getTotalInventoryValue(products)


Devuelve:

price * stock

de todos.


5.

getMostExpensiveProduct(products)


Devuelve el producto más caro.


6.

hasOutOfStockProduct(products)


Devuelve true/false.


7.

sortProductsByPrice(products)


Devuelve una copia ordenada por precio.


IMPORTANTE:

Cada función:

✓ recibe datos
✓ procesa
✓ devuelve resultado

NO hagas:

console.log()

dentro de las funciones.


Después prueba:

console.log(
    getProductNames(products2)
);

etc.


============================================================
BONUS
============================================================

Crea:

getInventorySummary(products)


Debe devolver:

{
    totalProducts: ...,

    totalUnits: ...,

    totalValue: ...,

    outOfStock: ...,

    mostExpensive: ...
}


============================================================
CHECKPOINT DÍA 3
============================================================

Antes de continuar debes poder responder:

¿Por qué usaría map?

¿Por qué usaría filter?

¿Por qué usaría find?

¿Por qué usaría some?

¿Por qué usaría every?

¿Por qué usaría reduce?

¿Qué diferencia hay entre slice y splice?

¿Por qué sort necesita (a, b) => a - b?

¿Qué significa que un método "muta" un array?

Si puedes responder todo esto
y completar el Inventory Analyzer,
los fundamentos de arrays están bastante sólidos.
*/

function getProductNames(products) {
    return products.map(product => product.name)
}


function getAvailableProducts(products){
    return products.filter(product => product.stock > 0)
}


function getProductsByCategory(products, category){
    return products.filter(product => product.category === category)
}

function getTotalInventoryValue(products) {
    return products.map(product => product.stock * product.price)
}

function getMostExpensiveProduct(products) {
    return [...products].sort((a, b ) => b.price - a.price)[0]
}


function hasOutOfStockProduct(products) {
    return products.some(product => product.stock === 0)
}

function sortProductsByPrice(products) {
    return [...products].sort((a, b ) => b.price - a.price)
}


function getInventorySummary(products, category) {
    return {

        getProductNames: getProductNames(products),
        getAvailableProducts: getAvailableProducts(products),
        getProductsByCategory: getProductsByCategory(products, category),
        getTotalInventoryValue: getTotalInventoryValue(products),
        getMostExpensiveProduct: getMostExpensiveProduct(products),
        hasOutOfStockProduct: hasOutOfStockProduct(products),
        sortProductsByPrice: sortProductsByPrice(products),

    }
}

newProductos = [
        {
        name: "Laptop",
        price: 3000,
        stock: 5,
        category: "tech"
    },

    {
        name: "Mouse",
        price: 100,
        stock: 0,
        category: "tech"
    },

    {
        name: "Chair",
        price: 500,
        stock: 10,
        category: "office"
    },

    {
        name: "Keyboard",
        price: 200,
        stock: 3,
        category: "tech"
    }
]

console.log("Ejercicio Final: ", getInventorySummary(newProductos, "tech"))