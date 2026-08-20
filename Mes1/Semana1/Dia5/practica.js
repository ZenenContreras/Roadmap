/*
============================================================
DÍA 5 — PRÁCTICA
CALLBACKS + ES6+ + LÓGICA
============================================================

IMPORTANTE:

En cada ejercicio tienes:

1. PROBLEMA
2. RESULTADO ESPERADO

No tienes la solución.

Tu trabajo es conseguir el resultado.
============================================================
*/


// ============================================================
// EJERCICIO 1 — CALLBACK
// ============================================================

/*
Crea:

executeOperation(value, callback)

Después crea:

double

que multiplique por 2.

Ejecuta:

executeOperation(5, double)
*/


// TU CÓDIGO:

function executeOperation(value, callback) {
    return callback(value)
}

function double(value){
    return value * 2
}

console.log(executeOperation(5, double))



// RESULTADO ESPERADO:

/*
10
*/


// ============================================================
// EJERCICIO 2 — CALLBACK
// ============================================================

/*
Crea:

square

y utiliza executeOperation.
*/

function square(value){
    return value ** 2
}

// TU CÓDIGO:

console.log(executeOperation(5, square))

// RESULTADO ESPERADO:

/*
executeOperation(5, square)

→ 25
*/


// ============================================================
// EJERCICIO 3 — MAP
// ============================================================

const numbers = [
    1,
    2,
    3,
    4,
    5
];


/*
Multiplica todos por 3.
*/


// TU CÓDIGO:

const newNumbers = numbers.map(num => num * 3)

console.log(newNumbers)


// RESULTADO ESPERADO:

/*
[
    3,
    6,
    9,
    12,
    15
]
*/


// ============================================================
// EJERCICIO 4 — FILTER
// ============================================================

/*
Obtén solamente
los números pares.
*/


// TU CÓDIGO:

console.log(numbers.filter(num => num % 2 === 0))


// RESULTADO ESPERADO:

/*
[
    2,
    4
]
*/


// ============================================================
// EJERCICIO 5 — FILTER
// ============================================================

/*
Obtén números mayores que 3.
*/


// TU CÓDIGO:

console.log(numbers.filter(num => num > 3))

// RESULTADO ESPERADO:

/*
[
    4,
    5
]
*/


// ============================================================
// EJERCICIO 6 — DESTRUCTURING + MAP
// ============================================================

const users = [

    {
        name: "Ana",
        age: 20
    },

    {
        name: "Carlos",
        age: 30
    },

    {
        name: "Laura",
        age: 25
    }

];


/*
Obtén solamente los nombres.
*/


// TU CÓDIGO:

console.log(users.map(({name}) => name))


// RESULTADO ESPERADO:

/*
[
    "Ana",
    "Carlos",
    "Laura"
]
*/


// ============================================================
// EJERCICIO 7 — FILTER + MAP
// ============================================================

/*
Obtén los nombres
de usuarios >= 25.
*/


// TU CÓDIGO:

console.log(users.filter(user=> user.age >= 25).map(({name}) => name))

// RESULTADO ESPERADO:

/*
[
    "Carlos",
    "Laura"
]
*/


// ============================================================
// EJERCICIO 8 — MAP + OBJECT
// ============================================================

/*
A cada usuario agrega:

isAdult

true si age >= 18.
*/


// TU CÓDIGO:

console.log(users.map(user => ({...user, isAdult: user.age >= 18})))


// RESULTADO ESPERADO:

/*
[
    {
        name: "Ana",
        age: 20,
        isAdult: true
    },

    {
        name: "Carlos",
        age: 30,
        isAdult: true
    },

    {
        name: "Laura",
        age: 25,
        isAdult: true
    }
]
*/


// ============================================================
// EJERCICIO 9 — SPREAD ARRAY
// ============================================================

const frontend = [
    "HTML",
    "CSS",
    "JavaScript"
];

const backend = [
    "Node",
    "Express",
    "SQL"
];


/*
Combina ambos arrays
sin modificar los originales.
*/


// TU CÓDIGO:

const Fullstack = [
    ...frontend,
    ...backend
]

console.log(Fullstack)


// RESULTADO ESPERADO:

/*
[
    "HTML",
    "CSS",
    "JavaScript",
    "Node",
    "Express",
    "SQL"
]
*/


// ============================================================
// EJERCICIO 10 — REST
// ============================================================

/*
Crea:

sumAll(...numbers)

Debe funcionar:

sumAll(1,2,3)

sumAll(1,2,3,4,5)
*/


// TU CÓDIGO:

function sumAll(...numbers){
    return numbers.reduce((total, number) => total + number, 0)
}

console.log(sumAll(1,2,3,4,5,))

// RESULTADO ESPERADO:

/*
sumAll(1,2,3)
→ 6

sumAll(1,2,3,4,5)
→ 15
*/


// ============================================================
// EJERCICIO 11 — NULLISH
// ============================================================

/*
Crea:

getDisplayName(user)

Reglas:

nickname si existe.

Si no:

name.

Si ninguno:

"Guest"
*/


// TU CÓDIGO:

function getDisplayName(user) { 
    return user.nickname || user.name || 'Guest'
}

console.log(getDisplayName({

}))


// RESULTADO ESPERADO:

/*
getDisplayName({
    name: "Zenen"
})

→ "Zenen"


getDisplayName({
    name: "Zenen",
    nickname: "Zen"
})

→ "Zen"


getDisplayName({})

→ "Guest"
*/


// ============================================================
// EJERCICIO 12 — OPTIONAL CHAINING
// ============================================================

/*
Crea:

getCity(user)

Debe devolver:

user.address.city

Si no existe:

"Unknown"
*/


// TU CÓDIGO:

function getCity (user) {
    return user.address?.city
}

console.log(getCity({
    name: "Carlos"
}))

// RESULTADO ESPERADO:

/*
getCity({
    address: {
        city: "Barranquilla"
    }
})

→ "Barranquilla"


getCity({
    name: "Carlos"
})

→ "Unknown"
*/


// ============================================================
// EJERCICIO 13 — CART
// ============================================================

const cart = [

    {
        name: "Laptop",
        price: 3000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 100,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 200,
        quantity: 1
    }

];


/*
Calcula el total.
*/


// TU CÓDIGO:

console.log(cart.reduce((total, value) => total + value.price * value.quantity, 0))


// RESULTADO ESPERADO:

/*
3400
*/


// ============================================================
// EJERCICIO 14 — CART + FILTER
// ============================================================

/*
Obtén productos
con quantity > 1.
*/


// TU CÓDIGO:

console.log(cart.filter(
    product => product.quantity > 1
))

// RESULTADO ESPERADO:

/*
[
    {
        name: "Mouse",
        price: 100,
        quantity: 2
    }
]
*/


// ============================================================
// EJERCICIO 15 — CART + MAP
// ============================================================

/*
Crea un nuevo array:

[
    {
        name: "Laptop",
        total: 3000
    },

    {
        name: "Mouse",
        total: 200
    },

    {
        name: "Keyboard",
        total: 200
    }
]
*/


// TU CÓDIGO:

const newArray = cart.map(product => product)

console.log(newArray)

// RESULTADO ESPERADO:

/*
[
    {
        name: "Laptop",
        total: 3000
    },

    {
        name: "Mouse",
        total: 200
    },

    {
        name: "Keyboard",
        total: 200
    }
]
*/


// ============================================================
// EJERCICIO 16 — TRANSACTIONS
// ============================================================

const transactions = [

    {
        type: "income",
        amount: 1000
    },

    {
        type: "expense",
        amount: 200
    },

    {
        type: "income",
        amount: 500
    },

    {
        type: "expense",
        amount: 100
    }

];


/*
Calcula:

income

expense
*/


// TU CÓDIGO:

const dian = transactions.reduce((total, value) => {
    if(value.type === "income"){
        total.income += value.amount
    }else{
        total.expense += value.amount
    }

    return total

}, {income : 0, expense: 0})

console.log(dian)

// RESULTADO ESPERADO:

/*
{
    income: 1500,
    expense: 300
}
*/


// ============================================================
// EJERCICIO 17 — BALANCE
// ============================================================

/*
Utilizando transactions:

balance = income - expense
*/


// TU CÓDIGO:

console.log(transactions.reduce((total, value) => {

    return value.type === "income" ? total + value.amount : total - value.amount

}, 0 ))

// RESULTADO ESPERADO:

/*
1200
*/


// ============================================================
// EJERCICIO 18 — FILTER + REDUCE
// ============================================================

/*
Calcula solamente
el total de ingresos.
*/


// TU CÓDIGO:

console.log(transactions.filter(product => product.type === "income").reduce((total, value) => total + value.amount, 0))

// RESULTADO ESPERADO:

/*
1500
*/


// ============================================================
// EJERCICIO 19 — FILTER + REDUCE
// ============================================================

/*
Calcula solamente
el total de gastos.
*/


// TU CÓDIGO:

console.log(transactions.filter(product => product.type === "expense").reduce((total, value) => total + value.amount, 0))

// RESULTADO ESPERADO:

/*
300
*/


// ============================================================
// EJERCICIO 20 — INMUTABILIDAD
// ============================================================

const product = {

    name: "Laptop",

    price: 3000,

    stock: 5

};


/*
Crea:

updatedProduct

donde:

price = 2800

stock = 10


NO debes modificar product.
*/


// TU CÓDIGO:
const updatedProduct = {
    ...product,
    price: 2800,
    stock: 10
}

console.log(updatedProduct)
console.log(product)

// RESULTADO ESPERADO:

/*
product:

{
    name: "Laptop",
    price: 3000,
    stock: 5
}


updatedProduct:

{
    name: "Laptop",
    price: 2800,
    stock: 10
}
*/


// ============================================================
// EJERCICIO 21 — ARRAY INMUTABLE
// ============================================================

const original = [
    1,
    2,
    3
];


/*
Crea:

updated

que tenga:

[
    1,
    2,
    3,
    4
]


SIN modificar original.
*/


// TU CÓDIGO:

const updated = [
    ...original,
    4,
]

console.log(updated)

// RESULTADO ESPERADO:

/*
original:

[1,2,3]


updated:

[1,2,3,4]
*/


// ============================================================
// EJERCICIO 22 — COMBINACIÓN
// ============================================================

const users2 = [

    {
        name: "Ana",
        age: 17,
        active: true
    },

    {
        name: "Carlos",
        age: 25,
        active: true
    },

    {
        name: "Laura",
        age: 30,
        active: false
    },

    {
        name: "Pedro",
        age: 22,
        active: true
    }

];


/*
Obtén:

Nombres de usuarios
ACTIVOS
y
MAYORES DE EDAD.
*/


// TU CÓDIGO:

console.log(users2.filter(user => user.active).filter(user => user.age > 18).map(user => user.name))


// RESULTADO ESPERADO:

/*
[
    "Carlos",
    "Pedro"
]
*/


// ============================================================
// 🚀 EJERCICIO 23 — PRODUCT ANALYZER
// ============================================================

const products = [

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


/*
Crea:

getAvailableTechProducts(products)


Debe devolver productos:

category === "tech"

Y:

stock > 0
*/


// TU CÓDIGO:

function getAvailableTechProducts(products){
    return products.filter(product => product.category === "tech").filter(product => product.stock > 0)
}

console.log(getAvailableTechProducts(products))

// RESULTADO ESPERADO:

/*
[
    {
        name: "Laptop",
        price: 3000,
        stock: 5,
        category: "tech"
    },

    {
        name: "Keyboard",
        price: 200,
        stock: 3,
        category: "tech"
    }
]
*/


// ============================================================
// EJERCICIO 24 — TOTAL INVENTORY
// ============================================================

/*
Calcula:

price * stock

para todos los productos.
*/


// TU CÓDIGO:
console.log(products.reduce((total, product) => total + product.stock * product.price, 0 ))

// RESULTADO ESPERADO:

/*
Laptop:

3000 * 5 = 15000


Mouse:

100 * 0 = 0


Chair:

500 * 10 = 5000


Keyboard:

200 * 3 = 600


TOTAL:

20600
*/


// ============================================================
// EJERCICIO 25 — PRODUCT NAMES
// ============================================================

/*
Obtén nombres
de productos tech.
*/


// TU CÓDIGO:

console.log(products.filter(product => product.category === 'tech').map(product => product.name))

// RESULTADO ESPERADO:

/*
[
    "Laptop",
    "Mouse",
    "Keyboard"
]
*/


// ============================================================
// EJERCICIO 26 — MOST EXPENSIVE
// ============================================================

/*
Encuentra
el producto más caro.
*/


// TU CÓDIGO:

console.log(products.sort((a , b) => b.price - a.price)[0])

// RESULTADO ESPERADO:

/*
{
    name: "Laptop",
    price: 3000,
    stock: 5,
    category: "tech"
}
*/


// ============================================================
// EJERCICIO 27 — OUT OF STOCK
// ============================================================

/*
¿Existe algún producto
sin stock?
*/


// TU CÓDIGO:

console.log(products.some(product => product.stock === 0))

// RESULTADO ESPERADO:

/*
true
*/


// ============================================================
// EJERCICIO 28 — TODOS CON STOCK
// ============================================================

/*
¿Todos los productos
tienen stock?
*/


// TU CÓDIGO:

console.log(products.every(product => product.stock > 0))

// RESULTADO ESPERADO:

/*
false
*/


// ============================================================
// EJERCICIO 29 — PIPELINE
// ============================================================

/*
Obtén:

nombres de productos
tech
con stock
y
precio > 150
*/


// TU CÓDIGO:

console.log(products.filter(product => product.category === 'tech').filter(product => product.stock > 0 ).filter(product => product.price > 150).map(product=> product.name))

// RESULTADO ESPERADO:

/*
[
    "Laptop",
    "Keyboard"
]
*/


// ============================================================
// 🚀🚀 RETO FINAL — E-COMMERCE ANALYTICS
// ============================================================

/*
Crea una función:

analyzeStore(products)


Debe devolver:

{
    totalProducts: ...,

    availableProducts: ...,

    totalInventoryValue: ...,

    mostExpensiveProduct: ...,

    techProducts: ...,

    outOfStockProducts: ...
}


Utiliza:

map
filter
find
some/every
reduce
spread
destructuring


NO modifiques
el array original.
*/


function analyzeStore(products){

    const totalProducts = products.length

    const availableProducts = products.filter(product => product.stock > 0).length

    const totalInventoryValue = products.reduce((total, product) => total + product.price * product.stock ,0)

    const mostExpensiveProduct = products.sort((a, b) => b.price - a.price)[0]

    const techProducts = products.filter(product => product.category === 'tech').length

    const outOfStockProducts = products.filter(product => product.stock === 0).length

    return {
        totalProducts: totalProducts,
        availableProducts: availableProducts,
        totalInventoryValue: totalInventoryValue,
        mostExpensiveProduct: mostExpensiveProduct,
        techProducts: techProducts,
        outOfStockProducts: outOfStockProducts
    }
}

console.log(analyzeStore(products))
// ============================================================
// RESULTADO ESPERADO DEL RETO
// ============================================================

/*
Con el array products de arriba:

{
    totalProducts: 4,

    availableProducts: 3,

    totalInventoryValue: 20600,

    mostExpensiveProduct: {
        name: "Laptop",
        price: 3000,
        stock: 5,
        category: "tech"
    },

    techProducts: 3,

    outOfStockProducts: 1
}
*/


// ============================================================
// CHECKPOINT FINAL
// ============================================================

/*
Si terminaste los 5 días, deberías poder explicar:

VARIABLES
✓ const
✓ let


TIPOS
✓ string
✓ number
✓ boolean
✓ null
✓ undefined
✓ object


FUNCIONES
✓ parameters
✓ arguments
✓ return
✓ arrow functions
✓ callbacks
✓ higher-order functions


ARRAYS
✓ map
✓ filter
✓ find
✓ some
✓ every
✓ reduce
✓ sort
✓ slice
✓ spread


OBJECTS
✓ properties
✓ nested objects
✓ Object.keys
✓ Object.values
✓ Object.entries
✓ destructuring
✓ spread
✓ rest
✓ optional chaining
✓ nullish coalescing


LÓGICA
✓ transformar datos
✓ filtrar datos
✓ buscar datos
✓ acumular datos
✓ crear nuevos objetos
✓ evitar mutaciones


============================================================

SI PUEDES HACER ESTO SIN COPIAR:

Inventory Analyzer
+
E-commerce Analytics

YA ESTÁS EMPEZANDO A PENSAR
COMO PROGRAMADOR Y NO SOLO
COMO ALGUIEN QUE APRENDE SINTAXIS.

============================================================
*/