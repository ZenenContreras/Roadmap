/*
============================================================
SEMANA 2 — DÍA 4
PRÁCTICA
ASYNC / AWAIT + FETCH + APIs
============================================================

REGLAS:

1. Predice primero.
2. Escribe tú el código.
3. No uses IA.
4. Ejecuta.
5. Compara con el resultado esperado.
6. Si algo falla, intenta entenderlo antes de buscar ayuda.

============================================================
*/


// ============================================================
// EJERCICIO 1 — FUNCIÓN ASYNC
// ============================================================

/*
Crea:

async function greet()

Debe devolver:

"Hello Zenen"


Después:

greet().then(...)


RESULTADO ESPERADO:

Hello Zenen
*/


// ============================================================
// EJERCICIO 2 — AWAIT
// ============================================================

/*
Crea:

function getNumber()

que devuelva:

Promise.resolve(100)


Después crea:

async function main()


Utiliza await para obtener
el número.


RESULTADO ESPERADO:

100
*/


// ============================================================
// EJERCICIO 3 — ASYNC SIEMPRE DEVUELVE PROMISE
// ============================================================

async function getValue() {

    return 50;

}


console.log(getValue());


/*
PREDICE ANTES DE EJECUTAR.

RESULTADO ESPERADO:

No imprime simplemente:

50


Imprime una Promise cuyo estado
será fulfilled y cuyo valor será:

50


Después prueba:

getValue().then((value) => {

    console.log(value);

});


RESULTADO:

50
*/


// ============================================================
// EJERCICIO 4 — AWAIT + PROMISE
// ============================================================

async function calculate() {

    const result =
        await Promise.resolve(20);

    console.log(result);

}


calculate();


/*
RESULTADO ESPERADO:

20
*/


// ============================================================
// EJERCICIO 5 — TRY/CATCH
// ============================================================

async function testError() {

    try {

        throw new Error("Something failed");

    } catch (error) {

        console.log(error.message);

    }

}


testError();


/*
RESULTADO ESPERADO:

Something failed
*/


// ============================================================
// EJERCICIO 6 — FINALLY
// ============================================================

async function process() {

    try {

        return "Success";

    } catch (error) {

        console.log(error.message);

    } finally {

        console.log("Finished");

    }

}


process();


/*
RESULTADO ESPERADO:

Finished


IMPORTANTE:

Aunque hagamos return,
finally se ejecuta.
*/


// ============================================================
// EJERCICIO 7 — ASYNC CHAIN
// ============================================================

function getValue2() {

    return Promise.resolve(10);

}


async function calculate2() {

    const value =
        await getValue2();

    return value * 2;

}


calculate2().then((result) => {

    console.log(result);

});


/*
RESULTADO ESPERADO:

20
*/


// ============================================================
// EJERCICIO 8 — SECUENCIAL
// ============================================================

function firstOperation() {

    return Promise.resolve("First");

}


function secondOperation(value) {

    return Promise.resolve(
        value + " Second"
    );

}


async function main2() {

    const first =
        await firstOperation();

    const second =
        await secondOperation(first);

    console.log(second);

}


main2();


/*
RESULTADO ESPERADO:

First Second
*/


// ============================================================
// EJERCICIO 9 — ERROR CON AWAIT
// ============================================================

function failOperation() {

    return Promise.reject(
        new Error("Failed")
    );

}


async function main3() {

    try {

        const result =
            await failOperation();

        console.log(result);

    } catch (error) {

        console.log(error.message);

    }

}


main3();


/*
RESULTADO ESPERADO:

Failed
*/


// ============================================================
// EJERCICIO 10 — PROMISE.ALL + ASYNC/AWAIT
// ============================================================

function getUsers2() {

    return Promise.resolve("Users");

}


function getProducts2() {

    return Promise.resolve("Products");

}


async function loadData() {

    const [users, products] =
        await Promise.all([

            getUsers2(),

            getProducts2()

        ]);

    console.log(users);

    console.log(products);

}


loadData();


/*
RESULTADO ESPERADO:

Users
Products
*/


// ============================================================
// EJERCICIO 11 — FETCH GET
// ============================================================

/*
Utiliza:

fetch()

para realizar una petición GET
a esta API pública:

https://jsonplaceholder.typicode.com/users


Obtén la respuesta.

Después conviértela a JSON.

Finalmente imprime:

data


RESULTADO ESPERADO:

Un array con 10 usuarios.

Cada usuario tiene propiedades
como:

id
name
username
email
address
etc.
*/


// ============================================================
// EJERCICIO 12 — PRIMER USUARIO
// ============================================================

/*
Utilizando la misma API:

https://jsonplaceholder.typicode.com/users


Obtén los usuarios.

Después imprime:

users[0]


RESULTADO ESPERADO:

Un objeto correspondiente
al usuario con:

id: 1


y entre sus propiedades:

name: "Leanne Graham"


El objeto completo tendrá
más propiedades.
*/


// ============================================================
// EJERCICIO 13 — SOLO NOMBRES
// ============================================================

/*
Obtén los usuarios.

Después recorre el array
e imprime únicamente:

user.name


RESULTADO ESPERADO:

Se imprimirán 10 nombres.

El primero:

Leanne Graham

El segundo:

Ervin Howell

y así sucesivamente.
*/


// ============================================================
// EJERCICIO 14 — FILTRAR USUARIOS
// ============================================================

/*
Obtén:

https://jsonplaceholder.typicode.com/users


Después utiliza:

filter()


para encontrar usuarios
cuyo username tenga
más de 5 caracteres.


RESULTADO ESPERADO:

Un nuevo array con
los usuarios que cumplen
la condición.

IMPORTANTE:

No tienes que memorizar
el resultado exacto.

Debes obtenerlo mediante
filter().
*/


// ============================================================
// EJERCICIO 15 — MAP
// ============================================================

/*
Obtén los usuarios.

Utiliza map()
para crear un nuevo array
que contenga solamente:

{
    id,
    name
}


RESULTADO ESPERADO:

[
    {
        id: 1,
        name: "Leanne Graham"
    },
    ...
]


Debe haber 10 elementos.
*/


// ============================================================
// EJERCICIO 16 — FUNCIÓN getUsers
// ============================================================

/*
Crea:

async function getUsers()


Debe:

1. Hacer fetch.
2. Comprobar response.ok.
3. Convertir response a JSON.
4. Retornar los usuarios.


Después:

const users = await getUsers();


RESULTADO ESPERADO:

users será un array
de 10 usuarios.
*/


// ============================================================
// EJERCICIO 17 — MANEJO DE ERROR
// ============================================================

/*
Crea una función:

async function getData()


que haga fetch a:

https://jsonplaceholder.typicode.com/invalid-url


Debes comprobar:

response.ok


Si es false:

throw new Error(...)


Después utiliza:

try/catch


RESULTADO ESPERADO:

El catch debe ejecutarse.

La API devolverá un error HTTP
como 404.
*/


// ============================================================
// EJERCICIO 18 — OBTENER UN USUARIO
// ============================================================

/*
Crea:

async function getUser(id)


Debe obtener:

https://jsonplaceholder.typicode.com/users/${id}


RESULTADO:

getUser(1)


debe devolver el usuario:

Leanne Graham
*/


// ============================================================
// EJERCICIO 19 — OBTENER POST
// ============================================================

/*
Crea:

async function getPost(id)


Endpoint:

https://jsonplaceholder.typicode.com/posts/${id}


Ejecuta:

getPost(1)


RESULTADO ESPERADO:

Un objeto con:

id: 1

userId: 1

title

body
*/


// ============================================================
// EJERCICIO 20 — USER + POSTS
// ============================================================

/*
Ahora vamos a hacer algo
más realista.


Primero:

getUser(1)


Después:

getPost(1)


Utiliza async/await.


RESULTADO ESPERADO:

Primero obtienes
el usuario.


Después obtienes
el post.


Al final puedes imprimir:

user.name
post.title
*/


// ============================================================
// EJERCICIO 21 — MINI PROYECTO
// ============================================================

/*
Crea:

async function getUserProfile(id)


Debe hacer:

1. Obtener el usuario.

2. Obtener sus posts.

3. Retornar:

{
    user,
    posts
}


Puedes utilizar:

Promise.all()


porque una vez que tienes
el usuario, los posts pueden
obtenerse independientemente
de otras operaciones posteriores.


Endpoint usuarios:

https://jsonplaceholder.typicode.com/users/${id}


Posts:

https://jsonplaceholder.typicode.com/posts?userId=${id}


RESULTADO ESPERADO:

getUserProfile(1)


debe devolver:

{
    user: {...},
    posts: [...]
}


El usuario será:

Leanne Graham


y tendrá varios posts.
*/


// ============================================================
// EJERCICIO 22 — POST REQUEST
// ============================================================

/*
Ahora vamos a enviar información.


Utiliza:

POST

a:

https://jsonplaceholder.typicode.com/posts


Envía:

{
    title: "Learning JavaScript",
    body: "I am learning APIs",
    userId: 1
}


Utiliza:

Content-Type:
application/json


Y:

JSON.stringify()


RESULTADO ESPERADO:

La API devolverá
un objeto que contiene
los datos enviados.

JSONPlaceholder normalmente
simula la creación y devuelve
un id para el nuevo recurso.
*/


// ============================================================
// EJERCICIO 23 — CREAR FUNCIÓN createPost
// ============================================================

/*
Crea:

async function createPost(post)


Debe:

1. Hacer POST.
2. Configurar headers.
3. Convertir post con JSON.stringify.
4. Comprobar response.ok.
5. Hacer response.json().
6. Retornar el resultado.


Después:

createPost({

    title: "My first API",
    body: "Learning fetch",
    userId: 1

});


RESULTADO ESPERADO:

Un objeto con:

title:
"My first API"

body:
"Learning fetch"

userId:
1

y un id generado
por JSONPlaceholder.
*/


// ============================================================
// EJERCICIO 24 — PARALLEL REQUESTS
// ============================================================

/*
Obtén simultáneamente:

users

posts


Utiliza:

Promise.all()


Endpoints:

https://jsonplaceholder.typicode.com/users

https://jsonplaceholder.typicode.com/posts


RESULTADO ESPERADO:

users.length

→ 10


posts.length

→ 100
*/


// ============================================================
// EJERCICIO 25 — RETO FINAL
// ============================================================

/*
ESTE ES EL EJERCICIO
MÁS IMPORTANTE DEL DÍA.


Crea:

async function getDashboard()


Debe obtener:

1. Usuarios.

2. Posts.


Las dos requests
son independientes.


Utiliza:

Promise.all()


Después debes retornar:

{
    totalUsers,
    totalPosts
}


RESULTADO ESPERADO:

{
    totalUsers: 10,
    totalPosts: 100
}


Debes manejar errores
con try/catch.


No copies el patrón.

Intenta construirlo
completamente desde cero.


============================================================
============================================================
BONUS — RETO EXTRA
============================================================
*/


/*
Crea:

async function getUserWithPosts(userId)


Debe:

1. Obtener el usuario.

2. Obtener sus posts.

3. Retornar:

{
    id,
    name,
    email,
    posts
}


RESULTADO PARA userId = 1:

name:

Leanne Graham


email:

Su email correspondiente.


posts:

Array de sus posts.


============================================================
FIN DEL DÍA 4
============================================================
*/