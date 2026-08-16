/*
============================================================
DÍA 1 — JAVASCRIPT FUNDAMENTALS
Variables, tipos, operadores y lógica
============================================================

OBJETIVO DEL DÍA

Al terminar este archivo debes poder:

✓ Usar const y let correctamente
✓ Entender los tipos de datos
✓ Entender typeof
✓ Trabajar con strings
✓ Usar template literals
✓ Hacer operaciones matemáticas
✓ Entender === vs ==
✓ Usar operadores lógicos
✓ Entender truthy/falsy
✓ Convertir tipos
✓ Usar if / else
✓ Usar operador ternario
✓ Entender ?. y ??

NO intentes memorizar todo.
Lee → predice → ejecuta → modifica → experimenta.
============================================================
*/


// ============================================================
// 1. VARIABLES
// ============================================================

/*
Una variable es un nombre que apunta a un valor.

JavaScript tiene:

const
let
var

En JavaScript moderno:

CONST = opción por defecto
LET   = cuando necesitas reasignar
VAR   = normalmente NO lo utilizaremos
*/


const name = "Zenen";

let age = 24;

age = 25;

console.log(name);
console.log(age);


/*
¿Por qué const?

Porque estamos diciendo:

"Esta variable no va a ser reasignada."

Esto ayuda a evitar errores.
*/


// Esto produciría un error:
//
// const country = "Colombia";
// country = "USA";


/*
LET:

Usamos let cuando sabemos que el valor cambiará.
*/

let score = 0;

score = score + 10;

console.log(score);


/*
IMPORTANTE:

const NO significa que absolutamente nada dentro del valor
pueda cambiar.

Ejemplo:
*/

const user = {
    name: "Ana",
    age: 20
};

user.age = 21;

console.log(user);


/*
Esto funciona porque no estamos reasignando "user".

Estamos modificando una propiedad del objeto.

Pero esto NO:

user = {
    name: "Carlos"
};

Porque estaríamos reasignando la variable.
*/


// ============================================================
// 2. TIPOS DE DATOS
// ============================================================

/*
Los tipos que debes conocer:

string
number
boolean
undefined
null
object

También existen:
bigint
symbol

Pero por ahora no son prioridad.
*/


const username = "Carlos";       // string

const price = 199.99;            // number

const isLoggedIn = true;         // boolean

let email;                       // undefined

const selectedProduct = null;    // null

const product = {                // object
    name: "Laptop",
    price: 3000
};


/*
ARRAYS también son objetos técnicamente.
*/

const fruits = [
    "apple",
    "banana",
    "orange"
];


// ============================================================
// 3. typeof
// ============================================================

/*
typeof nos permite preguntar:

"¿Qué tipo de dato es esto?"
*/

console.log(typeof username);
console.log(typeof price);
console.log(typeof isLoggedIn);
console.log(typeof email);
console.log(typeof product);
console.log(typeof fruits);


/*
Algo curioso:

typeof null

devuelve:

"object"

Esto es un comportamiento histórico de JavaScript.

No necesitas memorizar por qué todavía.
Solo recuerda que:

typeof null === "object"

*/


// ============================================================
// 4. STRINGS
// ============================================================

const firstName = "Zenen";

const lastName = 'Contreras';


/*
También tenemos template literals:

`texto`

Se escriben con backticks.

Permiten insertar variables:
*/

const greeting = `Hola ${firstName}`;

console.log(greeting);


/*
También puedes insertar expresiones:
*/

const productPrice = 100;

const quantity = 3;

console.log(
    `El total es ${productPrice * quantity}`
);


/*
Esto es extremadamente común en JavaScript moderno.
*/


// ============================================================
// 5. MÉTODOS BÁSICOS DE STRING
// ============================================================

const message = "Hello World";


console.log(message.length);

console.log(message.toUpperCase());

console.log(message.toLowerCase());

console.log(message.includes("World"));

console.log(message.includes("React"));

console.log(message.startsWith("Hello"));

console.log(message.endsWith("World"));


/*
También:

.trim()

Elimina espacios al inicio y al final.
*/

const usernameWithSpaces = "   Zenen   ";

console.log(usernameWithSpaces.trim());


// ============================================================
// 6. NÚMEROS
// ============================================================

const a = 10;

const b = 3;


console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

console.log(a ** b);


/*
% significa MODULO.

Devuelve el residuo.

10 % 3 = 1

Porque:

3 + 3 + 3 = 9

queda 1.
*/


// ============================================================
// 7. OPERADORES DE COMPARACIÓN
// ============================================================

/*

===

igualdad estricta


!==

desigualdad estricta


>

mayor


<

menor


>=

mayor o igual


<=

menor o igual
*/


console.log(10 === 10);

console.log(10 === "10");

console.log(10 !== 5);

console.log(10 > 5);

console.log(10 < 5);

console.log(10 >= 10);

console.log(10 <= 20);


/*
MUY IMPORTANTE:

===

compara valor Y tipo.
*/


console.log(5 === 5);

console.log(5 === "5");


/*
El primero:

number === number

true


El segundo:

number === string

false.
*/


// ============================================================
// 8. == VS ===
// ============================================================

/*
JavaScript también tiene:

==

Pero == permite conversión automática de tipos.

Ejemplo:
*/

console.log(5 == "5");

console.log(5 === "5");


/*
El primero es true.

¿Por qué?

JavaScript convierte "5" a número.

Con === eso NO ocurre.


REGLA PARA TU CÓDIGO:

Usa:

===

y

!==

como regla general.
*/


// ============================================================
// 9. OPERADORES LÓGICOS
// ============================================================

/*

&&

AND

Ambas condiciones deben ser true.


||

OR

Al menos una debe ser true.


!

NOT

Invierte el booleano.
*/


const userAge = 25;

const hasID = true;


console.log(
    userAge >= 18 && hasID
);


/*
Esto significa:

¿Tiene 18 años o más
Y
tiene identificación?
*/


const isAdmin = false;

const isOwner = true;


console.log(
    isAdmin || isOwner
);


/*
¿Es administrador
O
es propietario?
*/


console.log(!isAdmin);


/*
isAdmin = false

!false = true
*/


// ============================================================
// 10. TRUTHY Y FALSY
// ============================================================

/*
JavaScript puede tratar ciertos valores como:

true
o
false

cuando aparecen en una condición.

Falsy importantes:

false
0
""
null
undefined
NaN
*/


console.log(Boolean(false));

console.log(Boolean(0));

console.log(Boolean(""));

console.log(Boolean(null));

console.log(Boolean(undefined));

console.log(Boolean(NaN));


/*
Estos son falsy.


En cambio:
*/

console.log(Boolean("hello"));

console.log(Boolean(100));

console.log(Boolean([]));

console.log(Boolean({}));


/*
Estos son truthy.
*/


// ============================================================
// 11. CONVERSIONES
// ============================================================

/*
A veces recibes:

"25"

pero necesitas:

25
*/


const ageString = "25";

const ageNumber = Number(ageString);

console.log(ageNumber);

console.log(typeof ageNumber);


/*
Number()
String()
Boolean()
*/


console.log(Number("100"));

console.log(String(100));

console.log(Boolean(1));


/*
parseInt()
parseFloat()
*/

console.log(parseInt("25px"));

console.log(parseFloat("12.50"));


/*
IMPORTANTE:

Number("hello")

no puede convertirlo.
*/

console.log(Number("hello"));


/*
Resultado:

NaN

Not a Number.
*/


// ============================================================
// 12. CONDICIONALES
// ============================================================

const temperature = 30;


if (temperature > 25) {

    console.log("Hace calor");

} else if (temperature >= 15) {

    console.log("Temperatura agradable");

} else {

    console.log("Hace frío");

}


/*
La computadora evalúa:

¿temperature > 25?

Si sí → primer bloque.

Si no → siguiente condición.

Si ninguna → else.
*/


// ============================================================
// 13. OPERADOR TERNARIO
// ============================================================

/*
Cuando tienes una condición sencilla:

condition ? valorSiTrue : valorSiFalse
*/


const ageForAccess = 20;


const access =
    ageForAccess >= 18
        ? "Access granted"
        : "Access denied";


console.log(access);


/*
Piensa:

condition
   ?
true
   :
false
*/


// ============================================================
// 14. OPTIONAL CHAINING
// ============================================================

const person = {

    name: "Ana",

    address: {

        city: "Barranquilla"

    }

};


console.log(person.address.city);


/*
Pero:

person.contact.phone

rompería el programa si contact no existe.
*/


// Esto daría error:
//
// console.log(person.contact.phone);


/*
Podemos utilizar:

?.
*/


console.log(
    person.contact?.phone
);


/*
Si contact no existe:

en lugar de romper:

undefined
*/


// ============================================================
// 15. NULLISH COALESCING
// ============================================================

const nickname = null;


const displayName =
    nickname ?? "Developer";


console.log(displayName);


/*
??

significa:

"Si el valor de la izquierda es null
o undefined,
usa el de la derecha."
*/


// ============================================================
// 16. RESUMEN MENTAL
// ============================================================

/*

const
→ variable que no será reasignada

let
→ variable que sí puede cambiar

=== 
→ igualdad estricta

&&
→ ambas condiciones

||
→ al menos una

!
→ negar

?
→ ternario

?.
→ acceder sin romper si falta algo

??
→ fallback cuando es null/undefined

map
→ transformar

filter
→ filtrar

find
→ encontrar

reduce
→ acumular
*/