/*
============================================================
SEMANA 2 — JAVASCRIPT INTERMEDIO
DÍA 3 — PROMISES Y JAVASCRIPT ASÍNCRONO
============================================================

OBJETIVO DEL DÍA

Al terminar este día debes entender:

1. Qué significa código síncrono.
2. Qué significa código asíncrono.
3. Por qué JavaScript necesita asincronía.
4. Qué es el Call Stack.
5. Qué hace el Event Loop.
6. Qué es un callback.
7. Qué problema tienen los callbacks.
8. Qué es una Promise.
9. Estados de una Promise.
10. resolve()
11. reject()
12. .then()
13. .catch()
14. .finally()
15. Encadenamiento de Promises.
16. Cómo manejar errores.
17. Promise.all()
18. Promise.allSettled()
19. Promise.race()
20. Promise.any()


============================================================
PARTE 1 — ¿QUÉ SIGNIFICA SÍNCRONO?
============================================================

Comencemos con algo sencillo.

Cuando decimos que un programa es:

SÍNCRONO

significa que las instrucciones
normalmente se ejecutan una después de otra.


Por ejemplo:
*/


console.log("Primero");

console.log("Segundo");

console.log("Tercero");


/*
Resultado:

Primero
Segundo
Tercero


La ejecución sigue el orden
en el que escribimos las instrucciones.


Podemos visualizarlo:


console.log("Primero")
        ↓
termina
        ↓
console.log("Segundo")
        ↓
termina
        ↓
console.log("Tercero")
        ↓
termina


Esto es ejecución síncrona.


============================================================
PARTE 2 — ¿POR QUÉ NECESITAMOS ASINCRONÍA?
============================================================

Ahora imagina que quieres:

    descargar una imagen

    consultar una API

    leer un archivo

    consultar una base de datos

    esperar un temporizador

    realizar una operación de red


Algunas de estas operaciones
pueden tardar.


Imagina:


descargarArchivo();


Si esa operación tarda:

    1 segundo

    5 segundos

    30 segundos


¿Debería TODO JavaScript quedarse
congelado esperando?


Sería terrible.


Por eso existe la:

ASINCRONÍA.


============================================================
PARTE 3 — EJEMPLO MENTAL
============================================================

Imagina que estás en un restaurante.

Tú:

"Quiero una hamburguesa."


El restaurante dice:

"Perfecto, estará lista en 10 minutos."


¿El restaurante debería decir:

"Todos tienen que quedarse quietos
durante 10 minutos hasta que esté lista"?


No.


Mientras preparan la hamburguesa,
pueden atender otras cosas.


Esto es una analogía
de una operación asíncrona.


JavaScript puede iniciar una operación
y continuar trabajando.


Cuando la operación termina,
se ejecuta el código correspondiente.


============================================================
PARTE 4 — setTimeout
============================================================

Uno de los ejemplos clásicos:
*/


console.log("Inicio");

setTimeout(() => {

    console.log("Terminó el timeout");

}, 2000);

console.log("Fin");


/*
¿Qué esperarías?

Quizás:

Inicio
Terminó el timeout
Fin


Pero NO.


El resultado será:

Inicio
Fin
Terminó el timeout


¿Por qué?


Porque setTimeout()
programa una función
para ejecutarse posteriormente.


JavaScript no se queda esperando
esos 2 segundos.


============================================================
PARTE 5 — PRIMER MODELO MENTAL
============================================================

Cuando ejecutamos:


console.log("Inicio");


se ejecuta inmediatamente.


Después:


setTimeout(...)


programa algo para después.


Luego:


console.log("Fin");


se ejecuta inmediatamente.


Y aproximadamente 2 segundos después:

callback


se ejecuta.


Visualmente:


Inicio
  ↓
setTimeout()
  ↓
Fin
  ↓
espera
  ↓
callback


Esto es asincronía.


============================================================
PARTE 6 — JAVASCRIPT NO ES SIMPLEMENTE
"TODO ASÍNCRONO"
============================================================

Esto es importante.


JavaScript ejecuta código
normalmente de forma síncrona.


La asincronía se consigue mediante
mecanismos proporcionados por
el entorno donde se ejecuta JavaScript.


Por ejemplo:

Navegador:

    timers
    DOM
    fetch
    eventos


Node.js:

    filesystem
    networking
    timers
    etc.


Por eso es mejor pensar:

JavaScript + entorno
        ↓
mecanismos asíncronos


============================================================
PARTE 7 — CALL STACK
============================================================

Ahora vamos un poco más profundo.


JavaScript utiliza una estructura
llamada:

CALL STACK


Puedes imaginarla como una pila.


Ejemplo:


function first() {

    second();

}


function second() {

    console.log("Hello");

}


first();


La ejecución puede visualizarse:


CALL STACK

first()
  ↓
second()
  ↓
console.log()


La función que entra
último a la pila
es la primera que termina.


Esto es:

LIFO

Last In
First Out


============================================================
PARTE 8 — ¿QUÉ PASA CON setTimeout?
============================================================

Mira:


console.log("A");

setTimeout(() => {

    console.log("B");

}, 0);

console.log("C");


Aunque escribimos:

B


antes de:

C


el resultado será:


A
C
B


¿Por qué?


Porque setTimeout()
no coloca inmediatamente
el callback en el Call Stack.


El entorno maneja el timer.


Cuando corresponde,
el callback puede entrar
a las colas correspondientes
y el Event Loop ayuda a coordinar
su ejecución.


============================================================
PARTE 9 — EVENT LOOP
============================================================

Aquí aparece:

EVENT LOOP


Su función conceptual es ayudar
a coordinar:

    Call Stack

    tareas pendientes

    callbacks

    APIs del entorno


Una forma simplificada
de imaginarlo:


        CALL STACK
            ↑
            │
       EVENT LOOP
            ↑
            │
    CALLBACK / TASK QUEUE
            ↑
            │
      APIs DEL ENTORNO


El Event Loop observa
si el Call Stack está libre.


Cuando corresponde,
permite que una tarea pendiente
pueda ejecutarse.


============================================================
PARTE 10 — CALLBACK
============================================================

Un callback es:

UNA FUNCIÓN QUE PASAMOS
A OTRA FUNCIÓN PARA QUE
SEA EJECUTADA POSTERIORMENTE
O CUANDO OCURRA ALGO.


Ejemplo:


function greet(name) {

    console.log(`Hello ${name}`);

}


function processUser(callback) {

    callback("Zenen");

}


processUser(greet);


Aquí:

greet


es el callback.


============================================================
PARTE 11 — CALLBACK ASÍNCRONO
============================================================

Ahora:


function finish() {

    console.log("Finished");

}


setTimeout(finish, 2000);


finish


es un callback.


Se ejecutará
cuando el timer corresponda
y el entorno permita su ejecución.


============================================================
PARTE 12 — EL PROBLEMA DE LOS CALLBACKS
============================================================

Imagina que tienes:

1. Registrar usuario.

Después:

2. Crear perfil.

Después:

3. Enviar email.

Después:

4. Guardar información.

Podrías terminar escribiendo algo así:


registerUser(user, function(result) {

    createProfile(result, function(profile) {

        sendEmail(profile, function(email) {

            saveData(email, function(data) {

                console.log(data);

            });

        });

    });

});


Esto puede convertirse
en algo difícil de leer.


A esto se le suele llamar:

CALLBACK HELL.


Visualmente:


callback
    ↓
   callback
       ↓
      callback
          ↓
         callback


Aquí aparecen problemas de:

    legibilidad

    mantenimiento

    manejo de errores


Y por eso aparecieron
abstracciones como:

PROMISES.


============================================================
PARTE 13 — ¿QUÉ ES UNA PROMISE?
============================================================

Una Promise representa:

EL RESULTADO FUTURO
DE UNA OPERACIÓN ASÍNCRONA.


No significa:

"El resultado ya existe."


Significa:

"Existe una operación
cuyo resultado llegará después."


Por ejemplo:


const promise = new Promise((resolve, reject) => {

});


Esta Promise está pendiente.


============================================================
PARTE 14 — ESTADOS DE UNA PROMISE
============================================================

Una Promise tiene estados.


PENDING

La operación todavía no terminó.


        ↓


FULFILLED

La operación terminó correctamente.


        ↓


REJECTED

La operación falló.


Visualmente:


             PENDING
             /    \
            /      \
           ↓        ↓
      FULFILLED   REJECTED


Una Promise puede pasar
de pending a fulfilled
o de pending a rejected.


Una vez establecida,
no cambia nuevamente
a otro estado.


============================================================
PARTE 15 — RESOLVE
============================================================

Veamos:


const promise = new Promise((resolve, reject) => {

    resolve("Success");

});


Aquí llamamos:

resolve()


Eso significa:

"La operación terminó correctamente."


La Promise queda:

FULFILLED


y su valor es:

"Success"


============================================================
PARTE 16 — REJECT
============================================================

Ahora:


const promise = new Promise((resolve, reject) => {

    reject("Something went wrong");

});


La Promise queda:

REJECTED


con un motivo/valor de rechazo.


Normalmente se recomienda
rechazar con un Error:


reject(new Error("Something went wrong"));


Esto permite trabajar
mejor con errores.


============================================================
PARTE 17 — UNA PROMISE NO SE EJECUTA
"CUANDO LE HAGO THEN"
============================================================

Esto es importante.


Cuando haces:


const promise = new Promise((resolve) => {

    console.log("Executing");

    resolve("Done");

});


la función ejecutora
se ejecuta inmediatamente
cuando se crea la Promise.


Es decir:


new Promise(...)


ejecuta su executor
de inmediato.


Luego podemos utilizar:

.then()


para reaccionar al resultado.


============================================================
PARTE 18 — THEN()
============================================================

Ejemplo:


const promise2 = new Promise((resolve) => {

    resolve("Hello");

});


promise2.then((value) => {

    console.log(value);

});


Resultado:

Hello


".then()"

recibe una función
que se ejecutará
cuando la Promise
se cumpla.


============================================================
PARTE 19 — THEN RECIBE EL RESULTADO
DE RESOLVE
============================================================

Si hacemos:


resolve("Zenen");


entonces:


promise.then((value) => {

    console.log(value);

});


"value" será:


"Zenen"


Es decir:


resolve("Zenen")


↓

.then(value => ...)


↓

value = "Zenen"


============================================================
PARTE 20 — CATCH()
============================================================

¿Qué pasa si la Promise falla?


const promise3 = new Promise(
    (resolve, reject) => {

        reject(
            new Error("Something failed")
        );

    }
);


Para manejarlo:


promise3.catch((error) => {

    console.log(error.message);

});


Resultado:


Something failed


.catch()
maneja el rechazo.


============================================================
PARTE 21 — FINALLY()
============================================================

También tenemos:


.finally()


Se ejecuta independientemente
de si la Promise:

    se cumple

o:

    falla


Ejemplo:


promise3
    .then((value) => {

        console.log(value);

    })
    .catch((error) => {

        console.log(error.message);

    })
    .finally(() => {

        console.log("Finished");

    });


"Finished"

se ejecutará
al final.


Esto es útil para:

    ocultar loading

    limpiar recursos

    cerrar estados

etc.


============================================================
PARTE 22 — CHAINING
============================================================

Aquí empieza una de las partes
más importantes.


Las Promises pueden encadenarse.


Ejemplo:


Promise.resolve(10)
    .then((value) => {

        return value * 2;

    })
    .then((value) => {

        return value + 5;

    })
    .then((value) => {

        console.log(value);

    });


Resultado:

25


¿Por qué?


Primero:

10


Después:

10 * 2

↓

20


Después:

20 + 5

↓

25


============================================================
PARTE 23 — CADA THEN PUEDE DEVOLVER
UN NUEVO VALOR
============================================================

Mira:


Promise.resolve(5)

    .then((value) => {

        return value * 2;

    })

    .then((value) => {

        return value + 10;

    })

    .then((value) => {

        console.log(value);

    });


Resultado:

20


La razón:

5

↓

10

↓

20


Cada .then()
recibe el resultado anterior.


============================================================
PARTE 24 — CADA THEN PUEDE DEVOLVER
UNA PROMISE
============================================================

Esto es MUY importante.


Un .then()
puede devolver:

    un valor

o:

    otra Promise


Por ejemplo:


Promise.resolve(10)

    .then((value) => {

        return new Promise((resolve) => {

            setTimeout(() => {

                resolve(value * 2);

            }, 1000);

        });

    })

    .then((value) => {

        console.log(value);

    });


Resultado después de aproximadamente
1 segundo:

20


El segundo .then()
espera a que la Promise
devuelta por el primero
termine.


============================================================
PARTE 25 — ERROR EN UNA PROMISE
============================================================

Mira:


Promise.resolve(10)

    .then((value) => {

        throw new Error("Oops");

    })

    .then((value) => {

        console.log("Esto no se ejecuta");

    })

    .catch((error) => {

        console.log(error.message);

    });


Resultado:

Oops


Un error dentro del chain
puede terminar en catch().


============================================================
PARTE 26 — REJECT
============================================================

También podemos:


Promise.reject(
    new Error("Failed")
)

.catch((error) => {

    console.log(error.message);

});


Resultado:

Failed


============================================================
PARTE 27 — CATCH TAMBIÉN PUEDE CONTINUAR
============================================================

Un .catch()
también devuelve una Promise.


Por eso podemos:


Promise.reject(
    new Error("Failed")
)

.catch((error) => {

    console.log(error.message);

    return "Recovered";

})

.then((value) => {

    console.log(value);

});


Resultado:

Failed

Recovered


Es decir:

catch()
manejó el error
y devolvió un nuevo valor.


============================================================
PARTE 28 — PROMISES Y ASINCRONÍA
============================================================

Una Promise no hace que
una operación sea automáticamente
más rápida.


Tampoco significa:

"JavaScript crea otro hilo
para cada Promise."


Una Promise representa
el resultado eventual
de una operación.


El entorno puede realizar
trabajo asíncrono
y posteriormente resolver
o rechazar la Promise.


============================================================
PARTE 29 — PROMISE.RESOLVE
============================================================

JavaScript nos proporciona:


Promise.resolve(value)


Ejemplo:


Promise.resolve("Hello")
    .then((value) => {

        console.log(value);

    });


Resultado:

Hello


Es una forma sencilla
de crear una Promise cumplida.


============================================================
PARTE 30 — PROMISE.REJECT
============================================================

También:


Promise.reject(
    new Error("Failed")
)
.catch((error) => {

    console.log(error.message);

});


Resultado:

Failed


============================================================
PARTE 31 — PROMISE.ALL
============================================================

Ahora entramos a algo
MUY utilizado en aplicaciones reales.


Supongamos que necesitamos:

    usuarios

    productos

    configuraciones


Y son operaciones independientes.


Podríamos ejecutar varias
Promises juntas:


Promise.all([

    Promise.resolve("Users"),

    Promise.resolve("Products"),

    Promise.resolve("Config")

])
.then((results) => {

    console.log(results);

});


Resultado:


[
    "Users",
    "Products",
    "Config"
]


Promise.all()
espera a que todas
se cumplan.


============================================================
PARTE 32 — PROMISE.ALL
SI UNA FALLA
============================================================

Mira:


Promise.all([

    Promise.resolve("A"),

    Promise.reject(
        new Error("Failed")
    ),

    Promise.resolve("C")

])
.catch((error) => {

    console.log(error.message);

});


Resultado:

Failed


Promise.all()
rechaza si una de las Promises
rechaza.


============================================================
PARTE 33 — ORDEN DE RESULTADOS
============================================================

Esto es importante.


Promise.all()
mantiene el orden
de las Promises originales.


Aunque una termine antes.


Ejemplo conceptual:


Promise A → 3 segundos

Promise B → 1 segundo

Promise C → 2 segundos


Promise.all([A, B, C])


devuelve:

[A, B, C]


No:

[B, C, A]


El resultado mantiene
el orden de entrada.


============================================================
PARTE 34 — PROMISE.ALLSETTLED
============================================================

¿Qué pasa si queremos
conocer el resultado de TODAS,
incluso si algunas fallan?


Utilizamos:


Promise.allSettled()


Ejemplo:


Promise.allSettled([

    Promise.resolve("A"),

    Promise.reject(
        new Error("B failed")
    ),

    Promise.resolve("C")

])
.then((results) => {

    console.log(results);

});


Obtendremos resultados
que indican si cada Promise
fue fulfilled o rejected.


Esto es útil cuando:

"Quiero saber qué pasó
con cada operación."


============================================================
PARTE 35 — PROMISE.RACE
============================================================

Promise.race()


devuelve el resultado
de la primera Promise
que se establece.


Por ejemplo:


Promise.race([

    new Promise((resolve) => {

        setTimeout(() => {

            resolve("Fast");

        }, 1000);

    }),

    new Promise((resolve) => {

        setTimeout(() => {

            resolve("Slow");

        }, 3000);

    })

])
.then((value) => {

    console.log(value);

});


Resultado:

Fast


Porque esa Promise
terminó primero.


============================================================
PARTE 36 — IMPORTANTE CON RACE
============================================================

"Settled" significa:

    fulfilled

o:

    rejected


Por eso Promise.race()
puede terminar por:

    resolve

o:

    reject


La primera Promise
que se establezca
gana.


============================================================
PARTE 37 — PROMISE.ANY
============================================================

Promise.any()
busca la primera Promise
que se cumpla correctamente.


Ejemplo:


Promise.any([

    Promise.reject(
        new Error("A failed")
    ),

    Promise.resolve("B"),

    Promise.resolve("C")

])
.then((value) => {

    console.log(value);

});


Resultado:

B


Porque B fue la primera
que se cumplió correctamente.


Los rechazos individuales
no hacen que any()
falle si alguna Promise
termina correctamente.


============================================================
PARTE 38 — ALL VS ALLSETTLED VS RACE VS ANY
============================================================

PROMISE.ALL

"Necesito TODAS."

Si una falla:

→ reject


PROMISE.ALLSETTLED

"Quiero saber qué pasó
con TODAS."

No falla por un rechazo individual.


PROMISE.RACE

"Quiero la primera
que termine."

Puede ser:

fulfilled
o
rejected.


PROMISE.ANY

"Quiero la primera
que funcione."

Ignora rechazos individuales
hasta que no quede ninguna
Promise cumplida.


============================================================
PARTE 39 — CALLBACK VS PROMISE
============================================================

CALLBACK:


getUser(function(user) {

    getPosts(user, function(posts) {

        getComments(posts, function(comments) {

        });

    });

});


PROMISE:


getUser()

    .then((user) => {

        return getPosts(user);

    })

    .then((posts) => {

        return getComments(posts);

    })

    .then((comments) => {

        console.log(comments);

    });


La segunda estructura
puede ser mucho más legible.


Y mañana veremos:

async/await


que permite escribir
este flujo de una forma
todavía más parecida
al código síncrono.


============================================================
PARTE 40 — ERROR MUY COMÚN
============================================================

Mira:


Promise.resolve(10)
    .then((value) => {

        value * 2;

    })
    .then((value) => {

        console.log(value);

    });


¿Qué ocurre?


El primer then()
NO hizo return.


Por lo tanto:

undefined


pasa al siguiente then.


Esto es extremadamente importante:


SI QUIERES PASAR UN RESULTADO
AL SIGUIENTE THEN:

    RETURN


============================================================
PARTE 41 — EJEMPLO CORRECTO
============================================================


Promise.resolve(10)

    .then((value) => {

        return value * 2;

    })

    .then((value) => {

        console.log(value);

    });


Resultado:

20


============================================================
PARTE 42 — PROMISE EXECUTOR
============================================================

Cuando hacemos:


new Promise((resolve, reject) => {

    // executor

});


La función dentro
se llama:

EXECUTOR


Y se ejecuta inmediatamente.


Por ejemplo:


console.log("A");


new Promise((resolve) => {

    console.log("B");

    resolve();

});


console.log("C");


Resultado:


A
B
C


Pero un .then()
se ejecuta posteriormente
como parte de la maquinaria
de microtasks.


Esto nos lleva a algo
MUY importante.


============================================================
PARTE 43 — MICROTASKS
============================================================

Las callbacks de Promise
como:

.then()

.catch()

.finally()


se ejecutan mediante
la cola de microtasks.


Los timers como:

setTimeout()


utilizan tareas/macrotasks
del entorno.


En términos simplificados:


CALL STACK
    ↓
MICROTASKS
    ↓
TASKS


Cuando el stack queda libre,
las microtasks pendientes
se procesan antes de continuar
con tareas posteriores.


Esto explica comportamientos
como:
*/


console.log("A");

setTimeout(() => {

    console.log("B");

}, 0);

Promise.resolve().then(() => {

    console.log("C");

});

console.log("D");


/*
Resultado:


A
D
C
B


¿Por qué?


A → síncrono

D → síncrono

C → microtask de Promise

B → timer task


Por eso:

C aparece antes que B.


Este concepto será muy útil
cuando estudiemos el Event Loop
con más profundidad.


============================================================
PARTE 44 — UNA PROMISE NO ES
UN VALOR INMEDIATO
============================================================

Esto:


const result = Promise.resolve(10);


NO significa:


result === 10


No.


result es una:

Promise


que eventualmente
produce:

10


Por eso usamos:


result.then((value) => {

    console.log(value);

});


============================================================
PARTE 45 — MODELO MENTAL DEFINITIVO
============================================================

Cuando veas:


const promise = new Promise(
    (resolve, reject) => {

    }
);


piensa:


"Estoy creando una representación
de un resultado futuro."


Estados:


PENDING
   ↓
FULFILLED

o:

PENDING
   ↓
REJECTED


Después:


.then()

→ éxito


.catch()

→ error


.finally()

→ limpieza/finalización


============================================================
PARTE 46 — Y MAÑANA...
============================================================

Hoy aprendiste:


Promise


Mañana construiremos encima:


async


await


try/catch


fetch


y veremos cómo consumir APIs.


La relación será:


Promise
   ↓
async/await
   ↓
fetch()
   ↓
HTTP
   ↓
API
   ↓
JSON


Por eso hoy es tan importante.


============================================================
FIN DEL DÍA 3 — TEORÍA
============================================================
*/