/*
============================================================
SEMANA 2 — DÍA 5
PRÁCTICA
INTEGRACIÓN + DEBUGGING + APIs
============================================================

API PRINCIPAL:

https://jsonplaceholder.typicode.com/

============================================================
*/


// ============================================================
// EJERCICIO 1 — GET USERS
// ============================================================

/*
Crea:

async function getUsers()

Debe:

1. Hacer GET.
2. Comprobar response.ok.
3. Convertir a JSON.
4. Retornar los usuarios.

RESULTADO ESPERADO:

Array de 10 usuarios.

users.length

→ 10
*/


// ============================================================
// EJERCICIO 2 — TRANSFORMAR USUARIOS
// ============================================================

/*
Obtén los usuarios.

Crea:

const names

que contenga únicamente
los nombres.

Utiliza map().

RESULTADO ESPERADO:

Array de 10 strings.

Primer elemento:

"Leanne Graham"
*/


// ============================================================
// EJERCICIO 3 — CREAR OBJETOS SIMPLIFICADOS
// ============================================================

/*
Transforma:

user

en:

{
    id,
    name,
    email
}


RESULTADO ESPERADO:

Un array con 10 objetos.

Ejemplo del primero:

{
    id: 1,
    name: "Leanne Graham",
    email: "..."
}
*/


// ============================================================
// EJERCICIO 4 — POSTS
// ============================================================

/*
Crea:

getPosts()


Endpoint:

https://jsonplaceholder.typicode.com/posts


RESULTADO ESPERADO:

Array de 100 posts.


posts.length

→ 100
*/


// ============================================================
// EJERCICIO 5 — POSTS DE UN USUARIO
// ============================================================

/*
Crea:

getUserPosts(userId)


Endpoint:

https://jsonplaceholder.typicode.com/posts?userId=${userId}


Prueba:

getUserPosts(1)


RESULTADO ESPERADO:

Array de posts
pertenecientes al usuario 1.

JSONPlaceholder devuelve
10 posts para el usuario 1.
*/


// ============================================================
// EJERCICIO 6 — COUNT
// ============================================================

/*
Obtén los posts del usuario 1.

Imprime:

posts.length


RESULTADO ESPERADO:

10
*/


// ============================================================
// EJERCICIO 7 — TÍTULOS
// ============================================================

/*
Obtén los posts del usuario 1.

Utiliza map()
para obtener únicamente
los títulos.


RESULTADO ESPERADO:

Array de 10 títulos.
*/


// ============================================================
// EJERCICIO 8 — POST MÁS LARGO
// ============================================================

/*
Obtén los posts del usuario 1.

Encuentra el post cuyo:

body

tenga más caracteres.


RESULTADO ESPERADO:

Un objeto post.

NO tienes que adivinar
el resultado.

Tu código debe encontrarlo.
*/


// ============================================================
// EJERCICIO 9 — PROMISE.ALL
// ============================================================

/*
Obtén simultáneamente:

users

posts


Utiliza:

Promise.all()


RESULTADO ESPERADO:

users.length
→ 10

posts.length
→ 100
*/


// ============================================================
// EJERCICIO 10 — DASHBOARD STATS
// ============================================================

/*
Utilizando los datos anteriores:

Calcula:

totalUsers

totalPosts


Retorna:

{
    totalUsers,
    totalPosts
}


RESULTADO ESPERADO:

{
    totalUsers: 10,
    totalPosts: 100
}
*/


// ============================================================
// EJERCICIO 11 — POSTS POR USUARIO
// ============================================================

/*
Obtén todos los posts.

Calcula cuántos posts
tiene cada usuario.


Resultado esperado conceptualmente:

{
    1: 10,
    2: 10,
    3: 10,
    ...
    10: 10
}


Puedes utilizar:

reduce()


Este ejercicio es importante.
*/


// ============================================================
// EJERCICIO 12 — USUARIOS + POSTS
// ============================================================

/*
Obtén:

users

posts


Después crea:

usersWithPosts


Cada usuario debe tener:

{
    id,
    name,
    email,
    posts
}


Donde:

posts

contiene solamente
los posts de ese usuario.


RESULTADO ESPERADO:

usersWithPosts.length

→ 10


usersWithPosts[0].posts.length

→ 10
*/


// ============================================================
// EJERCICIO 13 — DEBUGGING
// ============================================================

/*
Tienes este código:

*/

async function brokenFunction() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

    const data =
        await response.json();

    console.log(data.users);

}


/*
PROBLEMA:

data.users

es undefined.


TU TRABAJO:

NO cambies código inmediatamente.

Primero:

console.log(data)


y observa qué estructura
realmente devuelve la API.


Después corrige el código.


RESULTADO ESPERADO:

Obtener correctamente
el array de usuarios.


============================================================
*/


// ============================================================
// EJERCICIO 14 — DEBUGGING 2
// ============================================================

/*
Tienes:

*/

async function brokenFunction2() {

    const response =
        await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

    const data =
        await response.json();

    console.log(data[0].name);

}


/*
El código falla.

¿Por qué?


Antes de corregirlo:

1. Mira data.
2. Determina su tipo.
3. Determina su estructura.
4. Corrige.


RESULTADO ESPERADO:

Leanne Graham
*/


// ============================================================
// EJERCICIO 15 — OPTIONAL CHAINING
// ============================================================

const user = {

    name: "Zenen",

    profile: {

        city: "Barranquilla"

    }

};


/*
Obtén:

user.profile.city


utilizando optional chaining.


RESULTADO ESPERADO:

Barranquilla
*/


// ============================================================
// EJERCICIO 16 — OPTIONAL CHAINING + API
// ============================================================

/*
Obtén un usuario.

Intenta acceder a:

user.company?.name


RESULTADO ESPERADO:

El nombre de la compañía
del usuario.

Para user 1:

"Romaguera-Crona"
*/


// ============================================================
// EJERCICIO 17 — NULLISH
// ============================================================

const username = null;


/*
Crea:

displayName


Si username es null
o undefined:

"Guest"


RESULTADO ESPERADO:

Guest
*/


// ============================================================
// EJERCICIO 18 — ERROR HTTP
// ============================================================

/*
Haz request a:

https://jsonplaceholder.typicode.com/users/999999


Comprueba:

response.ok


Si es false:

throw new Error(...)


Maneja con catch.


RESULTADO ESPERADO:

El catch debe ejecutarse.


============================================================
*/


// ============================================================
// EJERCICIO 19 — NETWORK ERROR
// ============================================================

/*
Intenta hacer fetch
a una URL inválida,
por ejemplo un dominio
que no exista.


Maneja el error
con try/catch.


RESULTADO ESPERADO:

El catch debe ejecutarse.


Después piensa:

¿Qué diferencia hubo
entre este error y el 404
del ejercicio anterior?


No busques la respuesta.

Explícatelo tú primero.
*/


// ============================================================
// EJERCICIO 20 — ALLSETTLED
// ============================================================

/*
Crea tres Promises:

A → resolve

B → reject

C → resolve


Utiliza:

Promise.allSettled()


RESULTADO ESPERADO:

Tres resultados.

Uno:

rejected


Dos:

fulfilled
*/


// ============================================================
// ============================================================
// 🔥 PROYECTO FINAL DE LA SEMANA 2
// ============================================================
// ============================================================


// ============================================================
// MINI PROYECTO — USER ANALYTICS API
// ============================================================

/*
Vas a construir una pequeña
herramienta de análisis
de usuarios.


API:

https://jsonplaceholder.typicode.com/users

API:

https://jsonplaceholder.typicode.com/posts


============================================================
REQUISITO 1
============================================================

Crea:

getUsers()


Debe devolver usuarios.


============================================================
REQUISITO 2
============================================================

Crea:

getPosts()


Debe devolver posts.


============================================================
REQUISITO 3
============================================================

Crea:

getDashboard()


Debe obtener users y posts.


Como son independientes:

utiliza Promise.all()


============================================================
REQUISITO 4
============================================================

Calcula:

totalUsers

totalPosts


============================================================
REQUISITO 5
============================================================

Calcula:

averagePostsPerUser


Fórmula:

totalPosts / totalUsers


RESULTADO:

10


============================================================
REQUISITO 6
============================================================

Calcula:

postsPerUser


Debe tener:

1 → 10
2 → 10
3 → 10

etc.


============================================================
REQUISITO 7
============================================================

Crea:

usersWithPosts


Cada usuario debe tener:

{
    id,
    name,
    email,
    posts
}


============================================================
REQUISITO 8
============================================================

Crea:

topUser


Debe ser el usuario
con más posts.


RESULTADO:

Cualquier usuario
tendrá 10 posts,
por lo que el primero
que cumpla la condición
será válido.


============================================================
REQUISITO 9
============================================================

Manejo de errores.


Todo el dashboard
debe estar protegido
con try/catch.


============================================================
REQUISITO 10
============================================================

Retorna un objeto final:

{
    totalUsers,
    totalPosts,
    averagePostsPerUser,
    postsPerUser,
    usersWithPosts,
    topUser
}


============================================================
RESULTADO FINAL ESPERADO
============================================================

totalUsers:

10


totalPosts:

100


averagePostsPerUser:

10


usersWithPosts:

10 elementos


Cada usuario:

10 posts


topUser:

Un usuario con:

10 posts


============================================================
REGLA DEL PROYECTO
============================================================

NO copies la solución.

NO busques un tutorial
que haga exactamente esto.

NO uses IA para construirlo.

Tú ya tienes las herramientas:

fetch
async
await
try/catch
Promise.all
map
filter
reduce
objects
arrays


Ahora toca COMBINARLAS.


============================================================
BONUS — NIVEL MÁS ALTO
============================================================

Crea:

getUserAnalytics(userId)


Debe retornar:

{
    user,
    totalPosts,
    totalComments
}


Utiliza:

users

posts

comments


Endpoints:

/users/${userId}

/posts?userId=${userId}

/comments?postId=...


Aquí ya tendrás que pensar
cómo obtener los comentarios
de todos los posts del usuario.


No importa si te toma tiempo.


Este es precisamente
el tipo de problema
que quiero que aprendas
a resolver.


============================================================
FIN DE SEMANA 2
============================================================
*/