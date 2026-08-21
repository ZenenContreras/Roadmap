/*
============================================================
SEMANA 2
DÍA 1 — PRÁCTICA
SCOPE + SCOPE CHAIN + CLOSURES
============================================================

REGLAS:

1. No uses IA.
2. No copies soluciones.
3. Intenta explicar mentalmente POR QUÉ ocurre cada resultado.
4. Primero predice el resultado.
5. Después ejecuta el código.
6. Si fallas, vuelve a intentar antes de mirar la explicación.

============================================================
*/


// ============================================================
// EJERCICIO 1 — GLOBAL SCOPE
// ============================================================

const country = "Colombia";

function showCountry() {

    console.log(country);

}

showCountry();


/*
PREGUNTA:

¿Qué imprime?

RESULTADO ESPERADO:

Colombia


¿POR QUÉ?

Porque showCountry() no tiene una variable
country propia.

JavaScript busca en el scope exterior.
*/


// ============================================================
// EJERCICIO 2 — FUNCTION SCOPE
// ============================================================

function test() {

    const message = "Hello";

    console.log(message);

}

test();


/*
PREGUNTA:

¿Qué imprime?

RESULTADO ESPERADO:

Hello
*/


// ============================================================
// EJERCICIO 3 — ¿FUNCIONA O DA ERROR?
// ============================================================

function test2() {

    const secret = "123";

}

test2();

// console.log(secret); // Se comenta para evitar error de referencia


/*
PREGUNTA:

¿Qué ocurre?


RESULTADO ESPERADO:

ReferenceError


¿POR QUÉ?

secret pertenece al scope de test2().

El scope exterior no puede acceder
a variables internas de una función.
*/


// ============================================================
// EJERCICIO 4 — BLOCK SCOPE
// ============================================================

if (true) {

    let number = 100;

    console.log(number);

}


/*
RESULTADO ESPERADO:

100
*/


// ============================================================
// EJERCICIO 5 — BLOCK SCOPE
// ============================================================

if (true) {

    let number = 100;

}

// console.log(number);


/*
RESULTADO ESPERADO:

ReferenceError


Porque let es block scoped.
*/


// ============================================================
// EJERCICIO 6 — VAR
// ============================================================

if (true) {

    var number2 = 100;

}

console.log(number2);


/*
RESULTADO ESPERADO:

100


Porque var no tiene block scope.
*/


// ============================================================
// EJERCICIO 7 — SCOPE CHAIN
// ============================================================

const a = 10;

function outer() {

    const b = 20;

    function inner() {

        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);

    }

    inner();

}

outer();


/*
RESULTADO ESPERADO:

10
20
30


Ahora debes poder explicar:

c → encontrado en inner

b → encontrado en outer

a → encontrado en global
*/


// ============================================================
// EJERCICIO 8 — SCOPE CHAIN
// ============================================================

const x = 5;

function first() {

    const y = 10;

    function second() {

        const z = 15;

        console.log(x + y + z);

    }

    second();

}

first();


/*
RESULTADO ESPERADO:

30
*/


// ============================================================
// EJERCICIO 9 — SHADOWING
// ============================================================

const name = "Global";

function showName() {

    const name = "Local";

    console.log(name);

}

showName();


/*
RESULTADO ESPERADO:

Local
*/


// ============================================================
// EJERCICIO 10 — SHADOWING + SCOPE CHAIN
// ============================================================

const color = "red";

function outerColor() {

    const color = "blue";

    function innerColor() {

        console.log(color);

    }

    innerColor();

}

outerColor();


/*
RESULTADO ESPERADO:

blue


¿Por qué?

innerColor busca color.

Encuentra primero el color de outerColor().
*/


// ============================================================
// EJERCICIO 11 — CLOSURE BÁSICO
// ============================================================

function createGreeting() {

    const message = "Hello";

    return function () {

        return message;

    };

}

const greeting = createGreeting();

console.log(greeting());


/*
RESULTADO ESPERADO:

Hello


PREGUNTA:

¿Por qué message sigue disponible?


Respuesta que deberías poder dar:

Porque la función devuelta mantiene acceso
al entorno léxico donde fue creada.
*/


// ============================================================
// EJERCICIO 12 — COUNTER
// ============================================================

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
RESULTADO ESPERADO:

1
2
3
*/


// ============================================================
// EJERCICIO 13 — DOS CLOSURES
// ============================================================

function createCounter2() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}

const counterA = createCounter2();
const counterB = createCounter2();

console.log(counterA());
console.log(counterA());

console.log(counterB());

console.log(counterA());


/*
RESULTADO ESPERADO:

1
2
1
3


IMPORTANTE:

counterA y counterB
tienen estados independientes.
*/


// ============================================================
// EJERCICIO 14 — CLOSURE + PARÁMETROS
// ============================================================

function createMultiplier(multiplier) {

    return function (number) {

        return number * multiplier;

    };

}

const double = createMultiplier(2);

const triple = createMultiplier(3);

console.log(double(10));

console.log(triple(10));


/*
RESULTADO ESPERADO:

20
30


¿Por qué?

double recuerda:

multiplier = 2


triple recuerda:

multiplier = 3
*/


// ============================================================
// EJERCICIO 15 — CLOSURE
// ============================================================

function createGreeting2(name) {

    return function () {

        return `Hello ${name}`;

    };

}

const greetZenen = createGreeting2("Zenen");

console.log(greetZenen());


/*
RESULTADO ESPERADO:

Hello Zenen
*/


// ============================================================
// EJERCICIO 16 — PREDICE ANTES DE EJECUTAR
// ============================================================

let globalValue = 10;

function test3() {

    let localValue = 20;

    function calculate() {

        return globalValue + localValue;

    }

    return calculate;

}

const calculation = test3();

console.log(calculation());


/*
RESULTADO ESPERADO:

30


Debes identificar:

globalValue → global scope

localValue → test3 scope

calculate → closure
*/


// ============================================================
// EJERCICIO 17 — CREAR TU PROPIO COUNTER
// ============================================================

/*
CREA:

createCounter()

Debe devolver una función.

Cada vez que ejecutes
la función devuelta:

1
2
3
4
5
...


RESULTADO ESPERADO:

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
*/


function createCounter () {
    let counter = 0

    return function () {
        counter ++
        return counter
    }
}

const count = createCounter()

console.log(count())
console.log(count())
console.log(count())


// ============================================================
// EJERCICIO 18 — CREATE GREETER
// ============================================================

/*
Crea:

createGreeter(name)


Ejemplo:

const greet = createGreeter("Zenen");

greet();

Debe producir:

Hello Zenen


REQUISITO:

Debes utilizar un closure.
*/


function createGreeter(name) {
    return function () {
        return `Hello ${name}`
    }
}

const greet = createGreeter("Zenen");

console.log(greet())

// ============================================================
// EJERCICIO 19 — MULTIPLICADOR
// ============================================================

/*
Crea:

createMultiplier(number)


Ejemplo:

const double = createMultiplier(2);

double(5);

Resultado:

10


Y:

const triple = createMultiplier(3);

triple(5);

Resultado:

15
*/

function createMultiplier(number) {
    return function (value){
        return number * value
    }
}

const double2 = createMultiplier(2);
const triple2 = createMultiplier(3);

console.log(double2(5))
console.log(triple2(5))


// ============================================================
// EJERCICIO 20 — PRIVATE BALANCE
// ============================================================

/*
Crea una función:

createBankAccount(initialBalance)


Debe devolver:

deposit(amount)

withdraw(amount)

getBalance()


Ejemplo:

const account = createBankAccount(1000);

account.deposit(500);

account.withdraw(200);

account.getBalance();


RESULTADO:

1300


IMPORTANTE:

El balance debe ser privado.


Esto significa que NO debería existir:

account.balance


Debes conseguirlo utilizando un closure.
*/

function createBankAccount(initialBalance) {
    let balance = initialBalance

    return {
        deposit(amount){
            balance += amount
            return balance
        },
        withdraw(amount){
            balance -= amount
            return balance
        },
        getBalance(){
            return balance 
        }
    }
}

const account = createBankAccount(1000);

console.log("deposit" , account.deposit(500))
console.log(account.withdraw(200))

console.log(account.getBalance())

// ============================================================
// EJERCICIO 21 — SCOPE CHAIN
// ============================================================

const globalNumber = 100;

function levelOne() {

    const firstNumber = 50;

    function levelTwo() {

        const secondNumber = 25;

        function levelThree() {

            return (
                globalNumber +
                firstNumber +
                secondNumber
            );

        }

        return levelThree();

    }

    return levelTwo();

}

console.log(levelOne());


/*
RESULTADO ESPERADO:

175


Debes ser capaz de explicar
exactamente de dónde obtiene
cada número.
*/


// ============================================================
// EJERCICIO 22 — RETO
// ============================================================

function createScore(){
    let score = 0

    return {
        increment(){
            score += 1
            return score
        },
        decrement(){
            score -= 1
            return score
        },
        getScore(){
            return score
        }
    }
}

const score = createScore()

score.increment();

score.increment();

score.increment();

score.decrement();

console.log(score.getScore());

/*
Crea:

createScore()


Debe devolver un objeto con:

increment()

decrement()

getScore()


Ejemplo:

const score = createScore();

score.increment();

score.increment();

score.increment();

score.decrement();

console.log(score.getScore());


RESULTADO ESPERADO:

2


REGLA:

El score debe ser privado.

No debe existir:

score.score


Debes utilizar closure.
*/



// ============================================================
// EJERCICIO 23 — RETO INTERMEDIO
// ============================================================

function createShoppingCart(){

    let cartTotal = 0

    return {
        addItem(price){
            cartTotal += price
            return cartTotal
        },

        removeItem(price){
            cartTotal -= price
            return cartTotal
        },

        getTotal(){
            return cartTotal
        }
    }

}

const cart = createShoppingCart();

cart.addItem(100);

cart.addItem(200);

cart.addItem(50);

cart.removeItem(100);

console.log(cart.getTotal());

/*
Crea:

createShoppingCart()


Debe permitir:

addItem(price)

removeItem(price)

getTotal()


Ejemplo:

const cart = createShoppingCart();

cart.addItem(100);

cart.addItem(200);

cart.addItem(50);

cart.removeItem(100);

console.log(cart.getTotal());


RESULTADO ESPERADO:

250


IMPORTANTE:

El array/cart debe estar protegido
dentro del closure.
*/


// ============================================================
// EJERCICIO FINAL — EXAMEN
// ============================================================

function createUser(name){
    let nombre = name
    return {
        getName(){
            return nombre
        },

        changeName(newName){
            nombre = newName
            return nombre
        },

        greet(){
            return `Hello ${nombre}`
        }
    }
}

const user = createUser("Zenen");

console.log(user.getName());

user.changeName("Carlos");

console.log(user.getName());

console.log(user.greet());

/*
NO MIRES LA TEORÍA.

Construye una función:

createUser(name)


Debe devolver:

getName()

changeName(newName)

greet()


Ejemplo:

const user = createUser("Zenen");

console.log(user.getName());

user.changeName("Carlos");

console.log(user.getName());

console.log(user.greet());


RESULTADO ESPERADO:

Zenen

Carlos

Hello Carlos


CONDICIONES:

1. name debe ser privado.

2. Debes utilizar closure.

3. No debe existir:

user.name

4. Debes poder cambiar el nombre.

5. greet() debe utilizar el nombre actualizado.


============================================================
FIN DE LA PRÁCTICA
============================================================
*/