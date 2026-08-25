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

async function greet() {
    return "Hello Zenen"
}

greet().then((value) => {
    console.log(value)
})

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

async function getNumber() {
    return Promise.resolve(100)
}

async function main(){
    return await getNumber()
}

main().then((value) => {
    console.log(value)
})

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

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const users = await response.json()

        if(!response.ok){
            throw new Error('Error fetching the server')
        }

         console.log(users)
        
    } catch (error) {
        console.error(error)
    }
}

getUsers()

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

async function getUsers2() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new Error('Error fetching the server')
        }

        const users = await response.json()

        console.log(users[0])
        
    } catch (error) {
        console.error(error)
    }
}

getUsers2()


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

async function getUsers3() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error('Error fetching the server')
        }

        const users = await response.json()

        console.log(users.map(user => user.name))

    } catch (error) {
        console.error(error)
    }
}

getUsers3()

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

async function getUsers4() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error('Error fetching the server')
        }

        const users = await response.json()

        console.log(users.filter(user => user.name.length > 5))

    } catch (error) {
        console.error(error)
    }
}

getUsers4()


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

async function getUsers3() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error('Error fetching the server')
        }

        const users = await response.json()

        console.log(users.map(user => ({id: user.id, name: user.name})))

    } catch (error) {
        console.error(error)
    }
}

getUsers3()

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

async function getUsers5() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
            throw new Error('Error fetching the server')
        }

        const users = await response.json()

        return users

    } catch (error) {
        console.error(error)
    }
}

getUsers5()

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

async function getData(){
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/invalid-url')

        if(!response.ok){
            throw new Error(`Something went wrong: ${response.status} ` )
        }


        const data = await response.json()


    } catch (error) {
        console.error(error)
    }
}

getData()


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

async function getUser6(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        
        if(!response.ok){
            throw new Error(`Status code: ${response.status}`)
        }

        const user = await response.json()

        console.log(`USERRR`, user)

    } catch (error) {
        console.error(error)
    }
}

getUser6(10)

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

async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        
        if(!response.ok){
            throw new Error(`Status code: ${response.status}`)
        }

        const post = await response.json()

        console.log(`POSTTTT`, post)

    } catch (error) {
        console.error(error)
    }
}

getPost(1)

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

async function getUserProfile(id){
    try {
        const [response1, response2] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${id}`), fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)])

        if(!response1.ok || !response2.ok){
            throw new Error('Problemss')
        }

        const [user, post] = await Promise.all([response1.json(), response2.json()])

        console.log( {
            user: user,
            posts: post
        })

        
    } catch (error) {
        console.error(error)
    }
}

getUserProfile(1)


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

async function post() {

    const post = {
        title: "Learning JavaScript",
        body: "I am learning APIs",
        userId: 1
    }

    try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            header: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        })

        if(!response.ok){
            throw new Error('Problemss')
        }

        const data = await response.json()


        console.log(data)

        
    } catch (error) {
        console.error(error)
    }
}

post()

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

async function createPost(post) {

    try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            header: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(post)
        })

        if(!response.ok){
            throw new Error('Problemss')
        }

        const data = await response.json()


        console.log(data)

        
    } catch (error) {
        console.error(error)
    }
}

createPost({

    title: "My first API",
    body: "Learning fetch",
    userId: 1

})

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

async function getDashboard(){
    try {

        const [response1, response2] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/users'), fetch('https://jsonplaceholder.typicode.com/posts')])

        if(!response1.ok || !response2.ok){
            throw new Error('Error reto FINAL')
        }

        const [usuarios, posts] = await Promise.all([response1.json(), response2.json()])

        console.log({totalUsers: usuarios.length, totalPosts: posts.length})
        
    } catch (error) {
        console.error(error)
    }
}

getDashboard()



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

async function getUserWithPosts(userId){
    try {
        const [response1, response2] = await Promise.all([fetch(`https://jsonplaceholder.typicode.com/users/${userId}`), fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)])

        if(!response1.ok || !response2.ok){
            throw new Error('Problemss')
        }

        const [user, post] = await Promise.all([response1.json(), response2.json()])

        console.log( {
            id: user.id,
            name: user.name,
            email: user.email,
            posts: post
        })

        
    } catch (error) {
        console.error(error)
    }
}

getUserWithPosts(1)
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