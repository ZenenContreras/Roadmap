/*
============================================================
SEMANA 2 — JAVASCRIPT INTERMEDIO
DÍA 2 — THIS, CONTEXTO, CALL, APPLY & BIND
============================================================

OBJETIVO

Al terminar este archivo debes entender:

1. Qué es "this".
2. Qué significa contexto.
3. Por qué this NO siempre significa "el objeto actual".
4. Cómo funciona this dentro de objetos.
5. Qué pasa cuando separamos un método de su objeto.
6. Cómo funcionan las arrow functions con this.
7. Qué hacen call(), apply() y bind().
8. Cuándo utilizar cada uno.
9. Por qué esto importa en código real.


============================================================
PARTE 1 — ¿QUÉ ES THIS?
============================================================

Empecemos con una idea fundamental:

"this" es una palabra especial de JavaScript.

Su valor representa un CONTEXTO.


Pero cuidado:

NO memorices:

    this = el objeto actual

Eso es una simplificación
que te puede causar problemas.


Una mejor forma de pensar:

    "¿Quién está llamando esta función?"


En muchos casos, la forma en que
llamamos a una función determina
qué será "this".


============================================================
PARTE 2 — THIS DENTRO DE UN OBJETO
============================================================

Miremos un ejemplo sencillo.
*/


const user = {

    name: "Zenen",

    age: 24,

    greet() {

        console.log(this.name);

    }

};


user.greet();


/*
Resultado:

Zenen


Aquí tenemos:

user.greet()


¿Quién está llamando la función?

    user


Por eso dentro de greet():

    this

hace referencia a:

    user


Entonces:

this.name

equivale a:

user.name


Es decir:

"Zenen"


============================================================
PARTE 3 — THIS REPRESENTA EL OBJETO
============================================================

En este caso podemos pensar:

user.greet()


↓

this = user


Por lo tanto:

this.name

↓

user.name


Pero quiero que notes algo:


THIS NO ESTÁ DETERMINADO
POR EL LUGAR DONDE ESCRIBIMOS
LA FUNCIÓN.

ESTÁ RELACIONADO CON
CÓMO LA LLAMAMOS.


Esto será MUY importante.


============================================================
PARTE 4 — CAMBIEMOS EL OBJETO
============================================================
*/


const person1 = {

    name: "Carlos",

    greet() {

        console.log(`Hello ${this.name}`);

    }

};


const person2 = {

    name: "Laura",

    greet: person1.greet

};


person2.greet();


/*
Resultado:

Hello Laura


¿Qué acaba de pasar?


La función originalmente estaba escrita
dentro de person1.


Pero la llamamos así:

person2.greet()


Por lo tanto:

this = person2


NO:

this = person1


Esto demuestra algo importantísimo:


THIS DEPENDE DE CÓMO
SE LLAMA LA FUNCIÓN.


============================================================
PARTE 5 — MÉTODO
============================================================

Cuando tenemos:


const user = {

    name: "Zenen",

    greet() {

        console.log(this.name);

    }

};


greet es un:

MÉTODO


porque es una función almacenada
como propiedad de un objeto.


Cuando hacemos:

user.greet()


tenemos:

objeto.función()


Y normalmente:

this = objeto


============================================================
PARTE 6 — SEPARAR EL MÉTODO
============================================================

Ahora hagamos esto:


const user2 = {

    name: "Zenen",

    greet() {

        console.log(this.name);

    }

};


const greetFunction = user2.greet;


greetFunction();


¿Qué pasa?


Esto es diferente de:

user2.greet()


Ahora estamos haciendo:

greetFunction()


Ya no existe:

objeto.función()


La función fue separada
del objeto.


Por eso perdió el contexto
que tenía como método.


Dependiendo del entorno y modo estricto,
this será undefined
en una función normal llamada así.


En JavaScript moderno,
si estás trabajando en strict mode,
normalmente obtendrás:

undefined


y entonces:

this.name

causaría un error.


============================================================
PARTE 7 — EL ERROR CLÁSICO
============================================================

Este problema aparece mucho
en JavaScript.


Tenemos:


const user3 = {

    name: "Zenen",

    greet() {

        console.log(this.name);

    }

};


const greet3 = user3.greet;


greet3();


¿Por qué falla?


Porque inicialmente:

user3.greet()


tenía:

this = user3


Pero después:

greet3()


ya no tiene un objeto
a la izquierda.


La relación se perdió.


============================================================
PARTE 8 — CONTEXTO
============================================================

Aquí aparece una palabra
que vas a escuchar mucho:

CONTEXTO.


Cuando decimos:

"Esta función perdió su contexto."


normalmente queremos decir:

"La función ya no está siendo llamada
con el objeto que esperábamos como this."


Ejemplo:


user3.greet()


Contexto:

user3


Pero:


greet3()


Contexto del método:

perdido


Esto es MUY común en JavaScript.


============================================================
PARTE 9 — THIS EN UNA FUNCIÓN NORMAL
============================================================

Ahora:
*/


function showThis() {

    console.log(this);

}


showThis();


/*
Aquí no estamos haciendo:

object.showThis()


Simplemente:

showThis()


En código moderno con strict mode,
this será:

undefined


En ciertos entornos no estrictos,
puede comportarse de forma diferente,
por ejemplo apuntando al objeto global.

Por eso, para aprender JavaScript moderno,
es mejor pensar en:

función normal llamada directamente
→ this no tiene un objeto receptor


Y si necesitas un this específico,
puedes proporcionarlo explícitamente
con call/apply/bind.


============================================================
PARTE 10 — THIS EN ARROW FUNCTIONS
============================================================

AHORA VIENE UNA DE LAS PARTES
MÁS IMPORTANTES DEL DÍA.


Las arrow functions
NO tienen su propio this.


Repito:

ARROW FUNCTIONS NO CREAN
SU PROPIO THIS.


Ellas utilizan el this
del entorno exterior.


Mira:
*/


const user4 = {

    name: "Zenen",

    greet: () => {

        console.log(this.name);

    }

};


user4.greet();


/*
Esto NO se comporta como
el método tradicional.


¿Por qué?


Porque esta función:

() => {}


no crea su propio this.


Busca el this de afuera.


Por eso NO debes pensar:

"Arrow function = this es el objeto."


No.


============================================================
PARTE 11 — FUNCIÓN NORMAL VS ARROW
============================================================

Compara:


const user5 = {

    name: "Zenen",

    normalFunction() {

        console.log(this.name);

    },

    arrowFunction: () => {

        console.log(this.name);

    }

};


user5.normalFunction();


user5.arrowFunction();


La primera:

normalFunction()

sí obtiene:

this = user5


La segunda:

arrowFunction()

NO obtiene this = user5.


Porque arrowFunction
hereda this del entorno exterior.


============================================================
PARTE 12 — ¿POR QUÉ EXISTEN LAS ARROW FUNCTIONS?
============================================================

Una razón muy importante
es trabajar con callbacks.


Por ejemplo:


const user6 = {

    name: "Zenen",

    friends: ["Ana", "Carlos"],

    greetFriends() {

        this.friends.forEach(function(friend) {

            console.log(
                `${this.name} knows ${friend}`
            );

        });

    }

};


user6.greetFriends();


Aquí podemos tener un problema.


El callback:

function(friend) {}


tiene su propio comportamiento de this.


No necesariamente conserva
el this de greetFriends.


Pero podemos utilizar
una arrow function:


const user7 = {

    name: "Zenen",

    friends: ["Ana", "Carlos"],

    greetFriends() {

        this.friends.forEach((friend) => {

            console.log(
                `${this.name} knows ${friend}`
            );

        });

    }

};


user7.greetFriends();


Ahora la arrow function
no crea un nuevo this.


Hereda el this
de greetFriends.


Por lo tanto:

this = user7


============================================================
PARTE 13 — MODELO MENTAL DE ARROW FUNCTIONS
============================================================

Cuando veas:


const function1 = () => {

};


pregúntate:

"¿Cuál era el this
del entorno donde fue creada?"


La arrow function
lo utiliza.


NO:

"¿Quién llamó la arrow function?"


Sino:

"¿Cuál era el this exterior?"


Esta diferencia es fundamental.


============================================================
PARTE 14 — CALL()
============================================================

Ahora vamos a solucionar
el problema de perder contexto.


JavaScript nos proporciona:

call()


Por ejemplo:


function greet() {

    console.log(
        `Hello ${this.name}`
    );

}


const user8 = {

    name: "Zenen"

};


greet.call(user8);


Resultado:

Hello Zenen


¿Qué hizo call()?


Básicamente dijimos:

"Ejecuta greet()
utilizando user8 como this."


Es decir:


greet.call(user8)


↓

this = user8


↓

this.name


↓

user8.name


============================================================
PARTE 15 — CALL CON ARGUMENTOS
============================================================

También podemos enviar argumentos.


*/


function introduce(age, country) {

    console.log(
        `${this.name} is ${age} and lives in ${country}`
    );

}


const person = {

    name: "Zenen"

};


introduce.call(
    person,
    24,
    "Colombia"
);


/*
Resultado:

Zenen is 24 and lives in Colombia


La estructura es:


function.call(
    thisValue,
    argument1,
    argument2,
    ...
)


============================================================
PARTE 16 — APPLY()
============================================================

apply() hace algo parecido a call().


La diferencia principal
es cómo recibe los argumentos.


CALL:

function.call(
    object,
    arg1,
    arg2
)


APPLY:

function.apply(
    object,
    [arg1, arg2]
)


Ejemplo:


function introduce2(age, country) {

    console.log(
        `${this.name} is ${age} from ${country}`
    );

}


introduce2.apply(

    person,

    [24, "Colombia"]

);


Resultado:

Zenen is 24 from Colombia


============================================================
PARTE 17 — CALL VS APPLY
============================================================

CALL:

argumentos separados.


fn.call(
    object,
    arg1,
    arg2,
    arg3
)


APPLY:

argumentos dentro de un array.


fn.apply(
    object,
    [arg1, arg2, arg3]
)


Hoy en JavaScript moderno
muchas veces verás más:

call()

y:

bind()


pero debes conocer apply()
porque forma parte del lenguaje
y aparece en código existente.


============================================================
PARTE 18 — BIND()
============================================================

Ahora tenemos:

bind()


Y aquí hay una diferencia MUY importante.


call():

    ejecuta inmediatamente.


apply():

    ejecuta inmediatamente.


bind():

    NO ejecuta inmediatamente.


bind() CREA UNA NUEVA FUNCIÓN
CON EL THIS FIJADO.


Ejemplo:


function greet2() {

    console.log(
        `Hello ${this.name}`
    );

}


const user9 = {

    name: "Zenen"

};


const boundGreet =
    greet2.bind(user9);


boundGreet();


Resultado:

Hello Zenen


¿Qué ocurrió?


greet2.bind(user9)


creó una nueva función
que recuerda:


this = user9


============================================================
PARTE 19 — CALL VS BIND
============================================================

CALL:


greet.call(user)


↓

ejecuta ahora.


BIND:


const newFunction =
    greet.bind(user)


↓

crea una función nueva.


Después:


newFunction()


↓

ejecuta.


Esta diferencia debes dominarla.


============================================================
PARTE 20 — BIND CON ARGUMENTOS
============================================================

bind() también puede
preconfigurar argumentos.


*/


function multiply(a, b) {

    return a * b;

}


const double2 =
    multiply.bind(null, 2);


console.log(
    double2(5)
);


/*
Resultado:

10


¿Qué hicimos?


multiply.bind(null, 2)


fijó:

a = 2


Luego:


double2(5)


significa:

multiply(2, 5)


Resultado:

10


Esto se conoce como:

PARTIAL APPLICATION


o

preconfigurar argumentos.


============================================================
PARTE 21 — UN EJEMPLO REAL
============================================================

Imagina:


const user10 = {

    name: "Zenen",

    greet() {

        console.log(
            `Hello ${this.name}`
        );

    }

};


Tenemos un botón
que necesita ejecutar greet.


Podríamos necesitar:

*/


const buttonHandler =
    user10.greet.bind(user10);


/*
Ahora:

buttonHandler()


mantendrá:

this = user10


Esto es un patrón común
cuando pasas métodos como callbacks.


============================================================
PARTE 22 — THIS Y EVENT HANDLERS
============================================================

En aplicaciones web
trabajamos constantemente
con callbacks.


Por ejemplo:


button.addEventListener(
    "click",
    function(event) {

        console.log(this);

    }
);


En este caso,
el navegador proporciona
un contexto específico
para el callback tradicional.


Pero si utilizamos:


button.addEventListener(
    "click",
    (event) => {

        console.log(this);

    }
);


la arrow function
NO recibe un this propio
del elemento.


Hereda el this exterior.


Esto es una razón importante
por la que debes entender
la diferencia.


============================================================
PARTE 23 — ERROR MENTAL COMÚN
============================================================

NO pienses:


"this significa el objeto
donde está escrita la función."


Incorrecto.


Ejemplo:


const personA = {

    name: "A",

    greet() {

        console.log(this.name);

    }

};


const personB = {

    name: "B",

    greet: personA.greet

};


personB.greet();


Resultado:

B


La función fue escrita
originalmente en personA.


Pero fue llamada mediante:

personB.greet()


Por eso:

this = personB


============================================================
PARTE 24 — LA REGLA MÁS IMPORTANTE
============================================================

Para una FUNCIÓN NORMAL,
cuando la llamas como:

object.method()


normalmente:

this = object


Ejemplo:


user.greet()


↓

this = user


Pero si haces:


const fn = user.greet;

fn();


la relación con user
se pierde.


En cambio,
una arrow function
no obtiene this por su llamada.

Utiliza el this del entorno exterior.


============================================================
PARTE 25 — THIS Y STRICT MODE
============================================================

JavaScript moderno utiliza
frecuentemente strict mode.


Puedes escribir:


"use strict";


Y entonces:


function testThis() {

    console.log(this);

}


testThis();


imprime:


undefined


Esto es útil porque evita
ciertos comportamientos implícitos
del modo no estricto.


En proyectos modernos
no deberías depender
de comportamientos antiguos
del global object.


============================================================
PARTE 26 — MODELO MENTAL DEFINITIVO
============================================================

Cuando veas una función normal:

function greet() {}


pregunta:

"¿CÓMO SE ESTÁ LLAMANDO?"


Si ves:

user.greet()


piensa:

this = user


Si ves:

const fn = user.greet;

fn();


piensa:

"Perdí el contexto del objeto."


Si ves:

fn.call(user)


piensa:

"Estoy forzando this = user."


Si ves:

fn.apply(user, [arg1, arg2])


piensa:

"Estoy forzando this = user
y pasando argumentos como array."


Si ves:

const fn2 = fn.bind(user)


piensa:

"Creé una nueva función
que mantiene this = user."


Si ves una arrow function:

() => {}


piensa:

"Esta función no crea
su propio this.

Utiliza el this exterior."


============================================================
PARTE 27 — TABLA MENTAL
============================================================

                 ¿CÓMO SE DETERMINA THIS?

FUNCIÓN NORMAL
│
├── object.method()
│       ↓
│    object
│
├── fn()
│       ↓
│    undefined en strict mode
│
├── fn.call(obj)
│       ↓
│    obj
│
├── fn.apply(obj, args)
│       ↓
│    obj
│
└── fn.bind(obj)
        ↓
     nueva función
     con this fijado


ARROW FUNCTION
│
└── hereda this del
    entorno exterior


============================================================
PARTE 28 — ¿POR QUÉ TE IMPORTA ESTO?
============================================================

Quizás estés pensando:

"¿Pero yo voy a usar esto
si quiero trabajar con React?"


SÍ.


Aunque React moderno utiliza
muchísimas funciones y hooks
que no requieren que manipules
this constantemente,
entender this te ayuda a:

    comprender JavaScript

    entender callbacks

    entender event handlers

    leer código antiguo de React

    trabajar con APIs del lenguaje

    entender librerías

    pasar funciones correctamente

    entender objetos y métodos

    superar entrevistas técnicas


Además, cuando trabajes con Node,
JavaScript del backend,
SDKs o librerías,
puedes encontrarte
con este patrón.


============================================================
PARTE 29 — RESUMEN
============================================================

THIS

Representa un contexto
determinado por cómo se utiliza
una función normal.


MÉTODO

Una función almacenada
como propiedad de un objeto.


OBJECT.METHOD()

Normalmente:

this = object


ARROW FUNCTION

No crea su propio this.


CALL()

Ejecuta inmediatamente
usando un this específico.


APPLY()

Ejecuta inmediatamente
usando un this específico
y argumentos en array.


BIND()

Crea una nueva función
con this fijado.


============================================================
PARTE 30 — LO QUE DEBES PODER EXPLICAR
============================================================

Si alguien te pregunta:

"¿Qué es this?"

No quiero que respondas:

"Es el objeto."


Quiero que puedas decir:

"En una función normal,
this representa el contexto de la
llamada. En una llamada del tipo
objeto.metodo(), normalmente this
es el objeto que está a la izquierda
del punto. Si separamos el método,
podemos perder ese contexto. Las
arrow functions son diferentes porque
no tienen su propio this y capturan
el this del entorno exterior."


Si puedes explicar eso
con tus propias palabras:

DÍA 2 DOMINADO.


============================================================
FIN DE TEORÍA
============================================================
*/