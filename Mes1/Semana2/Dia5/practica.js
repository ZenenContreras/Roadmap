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

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();

        console.log(users.length);

        return users;  

    } catch (error) {
        console.error('Error fetching users:', error);
        throw error
    }
}

//getUsers();


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

async function transFormUsers () {
    const users = await getUsers()
    console.log(users.map(user => user.name))
}

//transFormUsers()

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

async function simple() {
    const users = await getUsers()

    console.log(users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.name
    })))
}

//simple()

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

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok){
            throw new Error(`Status code: ${response.status}`)
        }

        const posts = await response.json()
        console.log(posts.length)

    } catch (error) {
        console.error(error)
        throw error
    }
}

//getPosts()

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

async function getUserPosts(userId){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        if(!response.ok){
            throw new Error(`Status code: ${response.status}`)
        }

        const posts = await response.json()

        console.log(posts)
        return posts

    } catch (error) {
        console.error(error)
        throw error
    }
}

//getUserPosts(1)



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

async function userPost1(){
    const posts = await getUserPosts(1)
    console.log(posts.length)
    return posts
}

//userPost1()

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

async function titlePosts(){
    const posts = await userPost1()
    const title = await posts.map(user => user.title)

    console.log(title)
}

//titlePosts()

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

async function titlePostsLong() {
    const posts = await userPost1();
    const longestPost = posts.reduce((max, post) => 
      post.body.length > max.body.length ? post : max
    );
    console.log('LONGEST', longestPost);
    return longestPost;
  }
  
  //titlePostsLong();

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

async function getUsersPosts(){
    try {
        const [resp1, resp2] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/users'), fetch('https://jsonplaceholder.typicode.com/posts')])

        if(!resp1.ok || !resp2.ok){
            throw new Error('Something bad')
        }

        const [users, posts] = await Promise.all([resp1.json(), resp2.json()])

        console.log([users.length, posts.length])

        return [users, posts]
         
    } catch (error) {
        console.error(error)
        throw error
    }
}

 getUsersPosts()

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

async function dashboard(){
    const [users, posts] = await getUsersPosts()

    const dashboard = {totalUsers: users.length, totalPosts: posts.length}

    console.log(dashboard)
    return dashboard
}

// dashboard()

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

async function postPerUser(){
    const [ , posts] = await getUsersPosts()

    const usersPosts = posts.reduce((total, post) => {
        const userId = post.userId

        total[userId] = (total[userId] || 0) + 1

        return total
        
    }, {})

    console.log(usersPosts)

}

// postPerUser()

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

async function usersWithPosts() {
    const [users, posts] = await getUsersPosts()

    const usersWithPosts = users.map((user) => {

        const posts = posts.filter(post => post.userId === user.id)

        return {  
            id: user.id,
            name: user.name,
            email: user.name,
            posts: posts
        }
    })
}
// usersWithPosts()

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

    console.log('USERSSSSSS', data);

}
// brokenFunction()

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

    console.log(data.name);

}

// brokenFunction2()


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

//console.log(user?.profile?.city)

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


const optionalChaining = async () => {
    const user = await getUsers()

    console.log(user.filter(user=> user.id === 1 ).map(user => user.company?.name))

}

//optionalChaining()

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

const displayName = username || 'Guest'

console.log(displayName)

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

async function errorHttp(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/999999')

        if(!response.ok){
            throw new Error(`ERROR HTTP: ${response.status}`)
        }

        const data = await response.json()

        console.log(data)
    } catch (error) {
        console.error(error)
        throw error
    }
}

// errorHttp()

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

async function errorNetwork(){
    try {
        const response = await fetch('https://jsonpla.com')

        if(!response.ok){
            throw new Error(`ERROR HTTP: ${response.status}`)
        }

        const data = await response.json()

        console.log(data)
    } catch (error) {
        console.error(error)
        throw error
    }
}
//errorNetwork()

// errorHttp()

/*
Intenta hacer fetch
a una URL inválida,
por ejemplo un dominio
que no exista.


Maneja el error
con try/catch.


RESULTADO ESPERADO:

El catch debe ejecutarse.

el error de network ocurre cuando ni siquiera alcanza hasta el servidor y el http error tenemos que agarrarlo con el !response.ok para que salte si hay algun error HTTP
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

const promise1 = new Promise((resolve) => {
    resolve(10)
})

// const promise2 = new Promise((resolve, reject) => {
//    reject(new Error('Error'))
// })

const promise3 = new Promise((resolve) => {
    resolve(10)
})

// Promise.allSettled([promise1, promise2, promise3]).then((values) => console.log(values))

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

*/
/*
============================================================
REQUISITO 1
============================================================

Crea:

getUsers()


Debe devolver usuarios.

*/

async function getUsersFinal(){
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok){
            throw new Error(`Status Code: ${response.status}`)
        }

        const users = await response.json()

        return users
        
    } catch (error) {
        console.error(error)
        throw error
    }

}


/*
============================================================
REQUISITO 2
============================================================

Crea:

getPosts()


Debe devolver posts.
*/

async function getPostsFinal(){
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if(!response.ok){
            throw new Error(`Status Code: ${response.status}`)
        }

        const posts = await response.json()

        return posts
        
    } catch (error) {
        console.error(error)
        throw error
    }

}


/*

============================================================
REQUISITO 3
============================================================

Crea:

getDashboard()


Debe obtener users y posts.


Como son independientes:

utiliza Promise.all()

*/

async function getDashboardFinal(){
    try {
        const [users, posts] = await Promise.all([getUsersFinal(), getPostsFinal()])

        const totalUsers = users.length

        const totalPosts = posts.length

        const averagePostsPerUser =  totalUsers > 0 ? totalPosts / totalUsers : 0

        const postsPerUser = posts.reduce((total, post) => {
            const userId = post.userId
            total[userId] = (total[userId] || 0) + 1

            return total
        }, {})

        const usersWithPosts = users.map((user) => {
            const userPosts = posts.filter(post => post.userId === user.id)

            return {
                id: user.id,
                name : user.name,
                email  : user.email,
                posts: userPosts,
            }

        })

        const topUser = usersWithPosts.reduce((max, user) => user.posts.length > (max?.posts?.length || 0 ) ? user.name : max.name, null)

        return {
            totalUsers: totalUsers,
            totalPosts: totalPosts,
            averagePostsPerUser: averagePostsPerUser,
            postsPerUser: postsPerUser,
            usersWithPosts: usersWithPosts,
            topUser: topUser
        }
    } catch (error) {
        console.error(error)
    }
}

console.log(await getDashboardFinal())

/*
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