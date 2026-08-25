/*
============================================================
SEMANA 2 — DÍA 5
JAVASCRIPT INTERMEDIO + APIS
INTEGRACIÓN Y DEBUGGING
============================================================

HOY VAMOS A APRENDER:

1. Cómo estructurar código que consume APIs.
2. Separación de responsabilidades.
3. Funciones async reutilizables.
4. Transformación de datos provenientes de APIs.
5. Manejo correcto de errores.
6. Diferencia entre errores de red y errores HTTP.
7. Debugging de código asíncrono.
8. Promise.all().
9. Promise.allSettled().
10. Evitar requests innecesarias.
11. Encadenamiento de operaciones.
12. Cómo pensar como un backend/frontend developer.
13. Cómo construir una pequeña aplicación basada en una API.


============================================================
PARTE 1
LA DIFERENCIA ENTRE "QUE FUNCIONE"
Y "QUE ESTÉ BIEN CONSTRUIDO"
============================================================

Supongamos que tienes:

async function getUsers() {

    const response =
        await fetch(url);

    const data =
        await response.json();

    console.log(data);
}


Esto funciona.

Pero un Software Engineer
no solamente piensa:

"¿Funciona?"


También piensa:

¿Qué pasa si falla?

¿Qué pasa si la API devuelve 500?

¿Qué pasa si devuelve un array vacío?

¿Qué pasa si tarda 10 segundos?

¿Qué pasa si el usuario no existe?

¿Esta función se puede reutilizar?

¿Estoy mezclando responsabilidades?


Estas preguntas empiezan a diferenciar
a alguien que solamente escribe código
de alguien que empieza a pensar
como ingeniero.


============================================================
PARTE 2
SEPARACIÓN DE RESPONSABILIDADES
============================================================

Imagina una aplicación:

Usuario
   ↓
Frontend
   ↓
API
   ↓
Backend
   ↓
Database


Una mala función podría hacer
TODO al mismo tiempo:

- llamar API
- transformar datos
- imprimirlos
- manejar UI
- manejar errores


Es mejor separar.


Por ejemplo:


getUsers()

se encarga de:

"Obtener usuarios."


Después:

formatUsers()

se encarga de:

"Transformar usuarios."


Y otra parte de la aplicación
decide:

"¿Qué hago con esos usuarios?"


Esto se llama:

SEPARATION OF CONCERNS


No necesitas memorizar el término.

Necesitas entender la idea.


============================================================
PARTE 3
UNA FUNCIÓN PARA OBTENER DATOS
============================================================

Podemos crear:

async function getUsers() {

    const response =
        await fetch(url);

    if (!response.ok) {

        throw new Error(
            `HTTP ${response.status}`
        );

    }

    return response.json();
}


Observa algo importante.


No hacemos:

console.log(users)


La función simplemente:

OBTIENE Y DEVUELVE.


Esto permite reutilizarla.


Por ejemplo:


const users = await getUsers();


O:


const users = await getUsers();

const names =
    users.map(user => user.name);


La función no sabe
qué haremos con los usuarios.

Y eso está bien.


============================================================
PARTE 4
TRANSFORMAR DATOS
============================================================

Las APIs normalmente
no nos entregan exactamente
el formato que nuestra aplicación
necesita.


Por ejemplo:


API:

{
    id: 1,
    name: "Leanne Graham",
    email: "..."
}


Pero nuestro frontend
quizás solamente necesita:


{
    id: 1,
    displayName: "Leanne Graham"
}


Podemos transformar:

const simplifiedUsers =
    users.map(user => ({

        id: user.id,

        displayName: user.name

    }));


Esto es MUY común
en aplicaciones reales.


============================================================
PARTE 5
MAP EN DATOS DE API
============================================================

Supongamos:


const users = [
    {
        id: 1,
        name: "Zenen"
    },
    {
        id: 2,
        name: "Carlos"
    }
];


Podemos hacer:


const names =
    users.map(user => user.name);


Resultado:


[
    "Zenen",
    "Carlos"
]


Esto es extremadamente
común cuando trabajas
con APIs.


============================================================
PARTE 6
FILTER + API
============================================================

Supongamos que tenemos:


const users = [
    {
        id: 1,
        name: "Zenen",
        active: true
    },
    {
        id: 2,
        name: "Carlos",
        active: false
    }
];


Podemos hacer:


const activeUsers =
    users.filter(user => user.active);


Resultado:


[
    {
        id: 1,
        name: "Zenen",
        active: true
    }
]


Esto aparece constantemente
en aplicaciones reales.


============================================================
PARTE 7
REDUCE + API
============================================================

Supongamos:


const products = [

    {
        price: 100
    },

    {
        price: 200
    },

    {
        price: 50
    }

];


Queremos el total.


Podemos hacer:


const total =
    products.reduce(
        (sum, product) =>
            sum + product.price,
        0
    );


Resultado:


350


La idea importante:

Los datos vienen de una API.

Los transformamos
con JavaScript.


============================================================
PARTE 8
HTTP ERROR VS NETWORK ERROR
============================================================

Esto es MUY importante.


Existen diferentes tipos
de problemas.


Caso 1:

La API responde:

404


Tenemos una respuesta HTTP.


fetch()
puede resolverse normalmente.


Por eso debemos revisar:


response.ok


Caso 2:

El servidor está completamente
inaccesible.


Por ejemplo:

problema de red.


En ese caso fetch()
puede rechazar la Promise.


Por eso necesitamos:

try/catch


Entonces:


HTTP ERROR

↓


response.ok === false


NETWORK ERROR

↓


catch


Esta diferencia es importante.


============================================================
PARTE 9
PATRÓN PROFESIONAL
============================================================

Un patrón que debes
acostumbrarte a escribir:


async function getUsers() {

    try {

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }

        const users =
            await response.json();

        return users;

    } catch (error) {

        console.error(
            "Failed to fetch users:",
            error
        );

        throw error;

    }

}


¿Por qué hacemos:

throw error

después del console.error?


Porque quizás queremos que
otra parte de la aplicación
decida qué hacer.


Por ejemplo:


try {

    const users =
        await getUsers();

} catch (error) {

    showErrorToUser();

}


La función inferior registra
el error.


La función superior decide
cómo reaccionar.


Esto es separación
de responsabilidades.


============================================================
PARTE 10
PROMISE.ALL
============================================================

Supongamos:


getUsers()

y:


getPosts()


No dependen uno del otro.


Mala estrategia:


const users =
    await getUsers();

const posts =
    await getPosts();


Estamos esperando:

users

y después:

posts


Si cada request tarda:

1 segundo


el total puede ser aproximadamente:

2 segundos.


Podemos hacer:


const [users, posts] =
    await Promise.all([

        getUsers(),

        getPosts()

    ]);


Ahora pueden ejecutarse
simultáneamente.


Aproximadamente:

1 segundo


en lugar de:

2 segundos.


============================================================
PARTE 11
CUÁNDO NO USAR PROMISE.ALL
============================================================

Supongamos:


getUser()


devuelve:

user


Y necesitamos:

user.id


para hacer:


getPosts(user.id)


Entonces:


getPosts()


DEPENDE DE:

getUser()


Por eso:


const user =
    await getUser();


const posts =
    await getPosts(user.id);


Aquí el código debe ser secuencial.


Regla:


Si B necesita A:

A
↓
B


Si A y B son independientes:

Promise.all()


============================================================
PARTE 12
PROMISE.ALL Y ERRORES
============================================================

Promise.all()
falla si una Promise falla.


Por ejemplo:


Promise.all([

    Promise.resolve("A"),

    Promise.reject(
        new Error("B failed")
    ),

    Promise.resolve("C")

]);


El resultado general
será rechazado.


Esto es perfecto cuando:

"Necesito que TODAS funcionen."


Pero a veces queremos
que cada operación tenga
su propio resultado.


Ahí aparece:


Promise.allSettled()


============================================================
PARTE 13
PROMISE.ALLSETTLED
============================================================

Ejemplo:


const results =
    await Promise.allSettled([

        Promise.resolve("A"),

        Promise.reject(
            new Error("B failed")
        ),

        Promise.resolve("C")

    ]);


Obtendremos resultados
para cada Promise.


Conceptualmente:


[
    {
        status: "fulfilled",
        value: "A"
    },

    {
        status: "rejected",
        reason: Error(...)
    },

    {
        status: "fulfilled",
        value: "C"
    }
]


Esto es útil cuando:

"Quiero saber qué operaciones
funcionaron y cuáles fallaron."


============================================================
PARTE 14
DEBUGGING ASÍNCRONO
============================================================

Ahora viene una de las
habilidades MÁS importantes.


Cuando algo falla:

NO empieces inmediatamente
a cambiar código.


Primero pregunta:


¿Qué esperaba que ocurriera?


¿Qué ocurrió realmente?


¿En qué línea cambió
el comportamiento?


Ejemplo:


const response =
    await fetch(url);


const data =
    await response.json();


console.log(data.users);


Si:

data.users

es undefined.


No significa automáticamente
que fetch() falló.


Quizás:

data

ya era un array.


Por ejemplo:


[
    {
        id: 1
    }
]


Entonces:


data.users


no existe.


El error puede estar
en nuestra suposición
sobre la estructura.


============================================================
PARTE 15
DEBUGGING CON CONSOLE.LOG
============================================================

Una técnica simple:

console.log()


Pero úsala estratégicamente.


No hagas:

console.log()
console.log()
console.log()
console.log()
console.log()


sin pensar.


Haz:


console.log("response:", response);


Después:


console.log("data:", data);


Después:


console.log("users:", users);


La idea es descubrir:

¿Dónde deja de ser correcto
el dato?


============================================================
PARTE 16
DEBUGGING DE TIPOS
============================================================

Otro error común:


const users =
    await getUsers();


console.log(users.length);


Si:

users

no es array,
puede ocurrir algo inesperado.


Puedes comprobar:


console.log(
    Array.isArray(users)
);


Resultado:

true


o:

false


También:


console.log(typeof value);


Esto es fundamental
para debugging.


============================================================
PARTE 17
DEBUGGING DE OBJETOS
============================================================

Cuando recibas información
de una API:

NO asumas la estructura.


Primero mira:

console.log(data);


Después observa:


data

¿Es:

array?


object?


null?


string?


etc.


Después accede
a las propiedades.


Esto parece básico.

Pero evita MUCHOS bugs.


============================================================
PARTE 18
OPTIONAL CHAINING
============================================================

JavaScript tiene:


?.


Ejemplo:


user?.address?.city


Esto significa:


Si user existe:

continúa.


Si user es null
o undefined:

devuelve undefined
en lugar de lanzar
un error por acceso.


Ejemplo:


const city =
    user?.address?.city;


Esto es muy útil
cuando trabajamos
con datos externos.


Porque una API puede
no tener siempre
la estructura esperada.


============================================================
PARTE 19
NULLISH COALESCING
============================================================

También tenemos:


??


Ejemplo:


const name =
    user.name ?? "Unknown";


Significa:

Si user.name es null
o undefined:

usa:

"Unknown"


Ejemplo:


const value =
    null ?? "Default";


Resultado:


"Default"


Pero:


const value =
    0 ?? "Default";


Resultado:


0


Esto es diferente
a utilizar ||.


============================================================
PARTE 20
API → TRANSFORMACIÓN → RESULTADO
============================================================

Este patrón debes
empezar a reconocer:


API
 ↓
raw data
 ↓
map/filter/reduce
 ↓
application data
 ↓
UI


Ejemplo:


const users =
    await getUsers();


const activeUsers =
    users.filter(
        user => user.active
    );


Después:

React

mostraría:

activeUsers.


Esto es exactamente
el tipo de transformación
que vas a hacer constantemente
como frontend/full-stack developer.


============================================================
PARTE 21
ABSTRACCIÓN
============================================================

Una función como:


async function getUsers()


es una abstracción.


El resto del programa
no necesita saber:

cómo funciona fetch.


Solamente sabe:


getUsers()


→ devuelve usuarios.


Esto es poderoso.


Puedes cambiar:

fetch


por:

axios


o:

otra API


sin necesariamente cambiar
toda la aplicación.


============================================================
PARTE 22
FUNCIONES QUE HACEN UNA SOLA COSA
============================================================

Una función debería tener
una responsabilidad clara.


Mala:


async function getUsersAndCreateUIAndSaveDatabaseAndSendEmail()


Demasiadas responsabilidades.


Mejor:


getUsers()


formatUsers()


saveUsers()


sendEmail()


Cada función tiene
un propósito claro.


============================================================
PARTE 23
EL FLUJO COMPLETO
============================================================

Imagina:


async function getDashboard()


Dentro:


1. obtener usuarios


2. obtener posts


3. obtener comentarios


4. combinar información


5. calcular estadísticas


6. devolver resultado


Este tipo de lógica
aparece muchísimo
en aplicaciones reales.


============================================================
PARTE 24
PENSAMIENTO DE SOFTWARE ENGINEER
============================================================

Cuando recibas un requisito:


"Mostrar dashboard"


No pienses inmediatamente:

"¿Qué código escribo?"


Piensa:


¿Qué datos necesito?


¿De dónde vienen?


¿Son independientes?


¿Qué API necesito?


¿Qué puede fallar?


¿Qué formato necesito?


¿Qué transformaciones necesito?


¿Qué debería devolver
mi función?


Este cambio de mentalidad
es MUY importante.


============================================================
PARTE 25
REGLA DE DEBUGGING
============================================================

Cuando tengas un bug:


1. Reproduce el bug.


2. Lee el error.


3. Identifica la línea.


4. Comprueba tus suposiciones.


5. Inspecciona los datos.


6. Reduce el problema.


7. Formula una hipótesis.


8. Prueba la hipótesis.


9. Corrige.


10. Vuelve a ejecutar.


NO:

bug
↓
IA
↓
copiar solución


Queremos:

bug
↓
investigar
↓
entender
↓
solucionar


La IA después puede ayudarte
a revisar o mejorar tu solución.


============================================================
PARTE 26
LO QUE DEBES SER CAPAZ DE HACER
============================================================

Al terminar esta semana
debes poder escribir
sin tutorial:

async function getUsers() {

    try {

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }

        const data =
            await response.json();

        return data;

    } catch (error) {

        console.error(error);

        throw error;

    }

}


Y entender:

CADA LÍNEA.


============================================================
FIN DE TEORÍA
============================================================
*/