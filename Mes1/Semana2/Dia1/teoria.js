/*
============================================================
SEMANA 2 — JAVASCRIPT INTERMEDIO
DÍA 1 — SCOPE, SCOPE CHAIN & CLOSURES
============================================================

OBJETIVO

Hoy no vamos a aprender simplemente nuevas palabras.

Vamos a entender CÓMO JAVASCRIPT DECIDE:

    "¿QUÉ VARIABLE ESTOY UTILIZANDO?"

Y después:

    "¿POR QUÉ ESTA FUNCIÓN TODAVÍA PUEDE ACCEDER
     A UNA VARIABLE QUE PARECE QUE YA DEBERÍA HABER
     DESAPARECIDO?"

Para entender eso necesitamos:

1. Scope
2. Lexical Scope
3. Scope Chain
4. Shadowing
5. Closures


============================================================
PARTE 1 — ¿QUÉ ES SCOPE?
============================================================

"Scope" significa:

ALCANCE.

En programación, el scope determina:

    ¿DÓNDE PUEDO ACCEDER A UNA VARIABLE?

Por ejemplo:
*/


const name = "Zenen";

console.log(name);


/*
Aquí funciona porque "name" está disponible
en este lugar del programa.


Pero mira:
*/


function sayHello() {

    const message = "Hello";

    console.log(message);

}

sayHello();


/*
Esto funciona.

Pero intenta pensar:

¿Podemos hacer esto?


console.log(message);


NO.

¿Por qué?

Porque "message" fue creada DENTRO de sayHello().

Su alcance está limitado a esa función.


Esto es SCOPE.


La variable existe:

    dentro de sayHello()


pero no existe para nosotros:

    fuera de sayHello()


============================================================
IDEA FUNDAMENTAL
============================================================

Una variable no está disponible
automáticamente en cualquier lugar.

Su disponibilidad depende
del lugar donde fue declarada.


============================================================
PARTE 2 — GLOBAL SCOPE
============================================================

Una variable declarada en el nivel más externo
del archivo tiene un alcance muy amplio.

Por ejemplo:
*/


const country = "Colombia";


function showCountry() {

    console.log(country);

}


showCountry();


/*
Resultado:

Colombia


¿Por qué?

Porque showCountry()
no tiene una variable llamada country.

JavaScript busca:

    "¿Existe country aquí dentro?"

No.


Entonces busca en el scope exterior.

Encuentra:

    country = "Colombia"


Y la utiliza.


Esto nos introduce a:

SCOPE CHAIN.


Pero llegaremos ahí después.


============================================================
PARTE 3 — FUNCTION SCOPE
============================================================

Las funciones crean su propio scope.


*/


function testFunction() {

    const age = 25;

    console.log(age);

}


testFunction();


/*
Esto funciona.


Pero:

*/


// console.log(age);


/*
No funciona.


"age" pertenece al scope
de testFunction().


Podemos imaginarlo así:


GLOBAL SCOPE
│
│
└── testFunction SCOPE
        │
        └── age


Desde testFunction podemos acceder
a cosas de afuera.

Pero desde afuera no podemos acceder
directamente a las variables internas.


============================================================
PARTE 4 — BLOCK SCOPE
============================================================

Ahora tenemos otro concepto:

BLOCK SCOPE.


¿Qué es un block?

Por ejemplo:
*/


{

    const secret = "1234";

    console.log(secret);

}


/*
Aquí "secret" existe.


Pero fuera del bloque:


// console.log(secret);


NO existe.


Los bloques aparecen constantemente
en JavaScript:

    if
    for
    while
    switch
    { }


Por ejemplo:
*/


if (true) {

    const message = "Inside";

    console.log(message);

}


/*
"message" solamente existe
dentro de este bloque.


============================================================
PARTE 5 — LET Y CONST
============================================================

let y const respetan el BLOCK SCOPE.


Ejemplo:
*/


if (true) {

    let x = 10;

    const y = 20;

    console.log(x);
    console.log(y);

}


/*
Fuera del bloque:

x → no existe
y → no existe


Esto es muy importante.


============================================================
PARTE 6 — ¿Y VAR?
============================================================

Aquí aparece:

var


"var" es una forma antigua
de declarar variables.


Y tiene un comportamiento diferente.


Mira:
*/


if (true) {

    var number = 10;

}


console.log(number);


/*
Resultado:

10


¿Por qué?

Porque var NO respeta el block scope
de la misma forma que let y const.


Por eso hoy normalmente preferimos:

const
let


sobre:

var


En código moderno.


============================================================
PARTE 7 — RESUMEN DE SCOPE
============================================================

const:

    block scoped


let:

    block scoped


var:

    function scoped


Regla práctica:

    Usa const por defecto.

    Usa let cuando necesites
    reasignar la variable.

    Evita var en código moderno.


============================================================
PARTE 8 — LEXICAL SCOPE
============================================================

Ahora viene una idea más profunda.

JavaScript utiliza:

LEXICAL SCOPE.


¿Qué significa?

Que el alcance de una función
se determina por:

    DÓNDE FUE ESCRITA

NO por:

    DÓNDE FUE EJECUTADA.


Este concepto es MUY importante.


Mira:
*/


const globalName = "Zenen";


function outer() {

    const outerName = "Carlos";

    function inner() {

        console.log(globalName);

        console.log(outerName);

    }

    inner();

}


outer();


/*
inner() puede acceder a:

globalName

y:

outerName


¿Por qué?

Porque inner()
fue escrita dentro de outer().


Visualmente:


GLOBAL
│
│ globalName
│
└── outer
      │
      │ outerName
      │
      └── inner
            │
            └── puede acceder a outerName


Esto es:

LEXICAL SCOPE.


============================================================
PARTE 9 — SCOPE CHAIN
============================================================

Ahora podemos entender:

SCOPE CHAIN.


Supongamos:
*/


const a = 10;


function first() {

    const b = 20;

    function second() {

        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);

    }

    second();

}


first();


/*
Cuando second() busca "c":

    ¿Existe c aquí?

Sí.


Cuando busca "b":

    ¿Existe b aquí?

No.


Entonces sube al scope exterior.


Encuentra b.


Cuando busca "a":

    ¿Existe a aquí?

No.


Sube otra vez.


Encuentra a.


Ese proceso es:

SCOPE CHAIN.


Podemos imaginar:

second()
    ↓
first()
    ↓
global


JavaScript busca
desde el scope más cercano
hacia scopes exteriores.


============================================================
PARTE 10 — IMPORTANTE
============================================================

La búsqueda funciona:

    INTERIOR → EXTERIOR


Pero NO:

    EXTERIOR → INTERIOR


Ejemplo:
*/


function parent() {

    const secret = "password";

}


/*
Desde aquí afuera:


// console.log(secret);


NO podemos acceder.


El scope exterior
no puede entrar directamente
al scope interior.


Pero el scope interior
sí puede acceder al exterior.


Esta relación es fundamental.


============================================================
PARTE 11 — SHADOWING
============================================================

¿Qué pasa si tenemos
dos variables con el mismo nombre?


*/


const username = "Global";


function showUser() {

    const username = "Local";

    console.log(username);

}


showUser();


/*
Resultado:

Local


¿Por qué?

Porque dentro de la función existe
otra variable llamada username.


La variable interna
"oculta" a la externa.


Esto se llama:

SHADOWING.


Podemos visualizar:


GLOBAL:

username = "Global"


       ↓


FUNCTION:

username = "Local"


Dentro de la función
gana la variable más cercana.


============================================================
PARTE 12 — AHORA VIENE LO IMPORTANTE
============================================================

Hasta ahora aprendimos:

    Scope
    Lexical Scope
    Scope Chain
    Shadowing


Ahora vamos a utilizar todo eso
para entender:

CLOSURES.


============================================================
PARTE 13 — ¿QUÉ ES UN CLOSURE?
============================================================

Un closure ocurre cuando:

    UNA FUNCIÓN RECUERDA
    EL ENTORNO DONDE FUE CREADA.


Esta frase debes entenderla.


Mira:
*/


function createGreeting() {

    const message = "Hello";

    function greet() {

        console.log(message);

    }

    return greet;

}


const greeting = createGreeting();


greeting();


/*
Resultado:

Hello


Ahora piensa.


createGreeting() terminó.


La función:

createGreeting()


ya terminó de ejecutarse.


Entonces podrías preguntar:


"¿Cómo es posible que greet()
todavía pueda acceder a message?"


Porque:

greet()

es un CLOSURE.


La función recuerda
el entorno donde fue creada.


============================================================
PARTE 14 — DESCOMPONGAMOS EL EJEMPLO
============================================================

Cuando hacemos:


const greeting = createGreeting();


ocurre:

1.

createGreeting() comienza.


2.

Se crea:

message = "Hello"


3.

Se crea:

greet()


4.

greet() utiliza message.


5.

createGreeting() devuelve greet.


6.

Guardamos greet en:

greeting


7.

createGreeting() termina.


8.

Después hacemos:

greeting();


Y aun así:

message

sigue disponible.


¿Por qué?

Porque la función greet()
mantiene una referencia
al entorno que necesita.


Eso es closure.


============================================================
PARTE 15 — CLOSURE NO SIGNIFICA
"LA VARIABLE SE COPIÓ"
============================================================

Esto es importante.


El closure no significa simplemente:

"JavaScript copió el valor."


La función mantiene acceso
al entorno léxico donde fue creada.


Por eso podemos tener:
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
Resultado:

1
2
3


¿Por qué no da:

1
1
1?


Porque count no se reinicia.


El closure mantiene acceso
a la variable count.


============================================================
PARTE 16 — CLOSURE COMO "MEMORIA"
============================================================

Una buena forma de pensarlo
mientras estás aprendiendo:

Una closure permite que una función
mantenga acceso a información
de su entorno.


Por ejemplo:


createCounter()


crea:

count = 0


y devuelve una función.


Esa función mantiene acceso a:

count


Cada vez que la ejecutamos:


count++


modifica ese mismo valor.


Por eso:

1
2
3
4
5


============================================================
PARTE 17 — DOS CONTADORES INDEPENDIENTES
============================================================

Aquí podemos ver algo muy interesante.


*/


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
console.log(counterB());


/*
Resultado:

1
2

1
2


¿Por qué?

Porque cada ejecución de:

createCounter2()


crea su PROPIO entorno.


Tenemos:


counterA

    count = 0


counterB

    count = 0


Son completamente independientes.


============================================================
PARTE 18 — CLOSURE PARA ENCAPSULAMIENTO
============================================================

Ahora podemos utilizar closures
para proteger información.


*/


function createBankAccount(initialBalance) {

    let balance = initialBalance;

    return {

        deposit(amount) {

            balance += amount;

        },

        getBalance() {

            return balance;

        }

    };

}


const account = createBankAccount(1000);


console.log(account.getBalance());


account.deposit(500);


console.log(account.getBalance());


/*
Resultado:

1000

1500


Pero:


// account.balance


no funciona.


¿Por qué?


Porque balance
no está expuesto directamente.


Está dentro del closure.


Esto permite crear
una especie de encapsulamiento.


============================================================
PARTE 19 — CLOSURES EN LA VIDA REAL
============================================================

Closures aparecen constantemente
en JavaScript.


Por ejemplo:

    event handlers

    callbacks

    funciones factory

    timers

    funciones privadas

    programación funcional

    React


Sí:

REACT.


Cuando lleguemos a React,
vas a encontrar funciones
que mantienen acceso
a variables de su entorno.


Por eso quiero que entiendas
closures ahora.


============================================================
PARTE 20 — CLOSURES Y setTimeout
============================================================

Mira:
*/


function delayedMessage() {

    const message = "Hello after 2 seconds";

    setTimeout(() => {

        console.log(message);

    }, 2000);

}


delayedMessage();


/*
delayedMessage()
termina.


Pero después de 2 segundos,
el callback todavía puede acceder a:

message


¿Por qué?

Closure.


La arrow function recuerda
el entorno donde fue creada.


============================================================
PARTE 21 — CUIDADO CON LOS LOOPS
============================================================

Este ejemplo es MUY importante
porque demuestra diferencias entre
var y let.


*/


for (let i = 0; i < 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 1000);

}


/*
Después de aproximadamente 1 segundo
verás:

0
1
2


Esto funciona porque let
crea un binding apropiado
para cada iteración.


Con var:
*/


for (var j = 0; j < 3; j++) {

    setTimeout(() => {

        console.log(j);

    }, 1000);

}


/*
El resultado tradicionalmente será:

3
3
3


Porque las funciones terminan viendo
la misma variable j,
que después del loop vale 3.


Este ejemplo demuestra:

    scope
    closures
    asincronía


Todo conectado.


============================================================
PARTE 22 — CLOSURE NO ES SOLO
"UNA FUNCIÓN DENTRO DE OTRA"
============================================================

Esta definición es incompleta.


Esto:

*/


function outer2() {

    function inner2() {

    }

}


/*
tiene una función dentro de otra.


Pero lo importante del closure
es que la función interna
mantenga acceso a variables
de su entorno léxico.


Por ejemplo:


*/


function outer3() {

    const value = 100;

    return function inner3() {

        return value;

    };

}


const result3 = outer3();

console.log(result3());


/*
Aquí sí podemos observar
claramente el closure.


============================================================
PARTE 23 — RESUMEN MENTAL
============================================================

SCOPE

Determina dónde
una variable está disponible.


GLOBAL SCOPE

Scope externo.


FUNCTION SCOPE

Variables disponibles
dentro de una función.


BLOCK SCOPE

Variables disponibles
dentro de un bloque.


LEXICAL SCOPE

El alcance depende de
DÓNDE se escribió la función.


SCOPE CHAIN

JavaScript busca variables:

    interior
       ↓
    exterior
       ↓
    global


SHADOWING

Una variable interna
oculta una externa
con el mismo nombre.


CLOSURE

Una función mantiene acceso
al entorno léxico donde fue creada.


============================================================
PARTE 24 — EL MODELO MENTAL DEFINITIVO
============================================================

Cuando veas código:

function outer() {

    const x = 10;

    return function inner() {

        return x;

    };

}


No pienses simplemente:

"Hay una función dentro de otra."


Piensa:

    outer crea x

          ↓

    inner es creada

          ↓
co
    inner necesita x

          ↓

    inner mantiene acceso
    a ese entorno

          ↓

    outer termina

          ↓

    inner todavía puede usar x

          ↓

    CLOSURE


============================================================
FIN DEL DÍA 1 — TEORÍA
============================================================
*/