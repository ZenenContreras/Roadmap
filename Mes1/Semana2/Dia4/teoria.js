/*
============================================================
SEMANA 2 — JAVASCRIPT INTERMEDIO
DÍA 4
ASYNC / AWAIT + FETCH + APIs
============================================================

OBJETIVOS

Al terminar este archivo debes entender:

1. Qué significa async.
2. Qué significa await.
3. Por qué async/await funciona con Promises.
4. Qué devuelve una función async.
5. Cómo manejar errores con try/catch.
6. Qué es HTTP.
7. Qué es una API.
8. Qué es un endpoint.
9. Qué es una request.
10. Qué es una response.
11. Qué es JSON.
12. Qué hace fetch().
13. Qué devuelve fetch().
14. Diferencia entre response y response.json().
15. Métodos HTTP básicos.
16. Status codes.
17. Cómo enviar headers.
18. Cómo enviar body.
19. Cómo hacer GET.
20. Cómo hacer POST.
21. Cómo detectar errores correctamente.
22. Cómo construir funciones que consumen APIs.


============================================================
PARTE 1 — ¿QUÉ ES ASYNC?
============================================================

La palabra:

async

se utiliza para declarar
una función asíncrona.


Ejemplo:
*/

async function hello() {

    return "Hello";

}


/*
A primera vista parece
que la función devuelve:

"Hello"


Pero hay algo MUY importante.


Una función async
SIEMPRE devuelve una Promise.


Es decir:


hello()


no devuelve directamente:

"Hello"


Devuelve conceptualmente:


Promise("Hello")


Por eso podemos hacer:
*/

hello().then((value) => {

    console.log(value);

});


/*
Resultado:

Hello


============================================================
PARTE 2 — REGLA FUNDAMENTAL
============================================================

MEMORIZA ESTO:

Toda función declarada con:

async

devuelve una Promise.


Por ejemplo:
*/

async function getNumber() {

    return 10;

}


/*
Esto:

getNumber()


es una Promise.


Por eso:
*/

getNumber().then((value) => {

    console.log(value);

});


/*
Resultado:

10


============================================================
PARTE 3 — ¿QUÉ HACE AWAIT?
============================================================

Ahora aparece:

await


await permite esperar
el resultado de una Promise
dentro de una función async.


Ejemplo:
*/

function getData() {

    return Promise.resolve("Data");

}


async function main() {

    const result = await getData();

    console.log(result);

}


main();


/*
Resultado:

Data


Podemos pensar:

getData()
    ↓
Promise
    ↓
await
    ↓
resultado
    ↓
result


============================================================
PARTE 4 — SIN ASYNC/AWAIT
============================================================

Antes haríamos:

getData()
    .then((result) => {

        console.log(result);

    });


Ahora podemos hacer:

async function main() {

    const result = await getData();

    console.log(result);

}


main();


Ambos utilizan Promises.


La diferencia principal
es la forma en que escribimos
el código.


.then():

Promise.resolve(...)
    .then(...)
    .then(...)
    .catch(...)


async/await:

try {

    const result = await ...

} catch (error) {

}


async/await suele hacer que
los flujos asíncronos complejos
sean más fáciles de leer.


============================================================
PARTE 5 — AWAIT NO FUNCIONA
EN CUALQUIER PARTE
============================================================

Normalmente:

await

debe utilizarse dentro
de una función async.


Ejemplo correcto:
*/

async function example() {

    const result = await Promise.resolve(10);

    console.log(result);

}


/*
Esto es válido.


Dentro de módulos modernos
también existen escenarios
donde puede utilizarse
top-level await.


Pero para nuestro roadmap
vamos a acostumbrarnos primero
a utilizar:

async function


============================================================
PARTE 6 — ¿AWAIT BLOQUEA JAVASCRIPT?
============================================================

Esta pregunta es MUY importante.


Cuando hacemos:

const result = await promise;


no significa:

"JavaScript entero se congeló."


Significa que la ejecución
de ESA función async
espera el resultado
de la Promise.


El resto del entorno
puede continuar procesando
otras tareas.


Esto es una diferencia
muy importante.


============================================================
PARTE 7 — TRY / CATCH
============================================================

Ahora necesitamos manejar errores.


Con Promises teníamos:

.catch()


Con async/await
normalmente usamos:

try / catch


Ejemplo:
*/

async function test() {

    try {

        const result =
            await Promise.reject(
                new Error("Something failed")
            );

        console.log(result);

    } catch (error) {

        console.log(error.message);

    }

}


test();


/*
Resultado:

Something failed


============================================================
PARTE 8 — FINALLY
============================================================

También podemos utilizar:

finally


Ejemplo:
*/

async function test2() {

    try {

        const result =
            await Promise.resolve("Success");

        console.log(result);

    } catch (error) {

        console.log(error.message);

    } finally {

        console.log("Finished");

    }

}


test2();


/*
Resultado:

Success
Finished


============================================================
PARTE 9 — ¿QUÉ PASA SI NO MANEJAMOS
EL ERROR?
============================================================

Ejemplo:
*/

async function fail() {

    throw new Error("Oops");

}


fail();


/*
La Promise devuelta por fail()
será rechazada.


Por eso en aplicaciones reales
debemos pensar siempre:

¿Qué pasa si falla?


============================================================
PARTE 10 — ¿QUÉ ES UNA API?
============================================================

API significa:

Application Programming Interface.


En nuestro contexto,
una API permite que
un programa pueda comunicarse
con otro sistema.


Por ejemplo:

Tu aplicación React

        ↓

API

        ↓

Servidor

        ↓

Base de datos


Tu frontend puede preguntar:

"¿Cuáles son los productos?"


El backend responde:

[
    {
        ...
    }
]


============================================================
PARTE 11 — ¿QUÉ ES HTTP?
============================================================

HTTP es el protocolo
utilizado para comunicación
entre clientes y servidores.


Un cliente puede ser:

    navegador
    aplicación React
    aplicación móvil
    Node.js


Un servidor puede ser:

    Express
    Node
    Spring Boot
    Django
    etc.


El cliente realiza:

REQUEST


El servidor devuelve:

RESPONSE


Visualmente:


CLIENTE
   ↓
REQUEST
   ↓
SERVIDOR
   ↓
RESPONSE
   ↓
CLIENTE


============================================================
PARTE 12 — ¿QUÉ ES UN ENDPOINT?
============================================================

Un endpoint es una dirección
específica de una API.


Por ejemplo:

https://api.example.com/users


Podría representar:

GET /users


Otro:

https://api.example.com/users/10


Podría representar:

GET /users/10


Cada endpoint representa
un recurso u operación.


============================================================
PARTE 13 — MÉTODOS HTTP
============================================================

Los principales que debes conocer:


GET

Obtener información.


POST

Crear información.


PUT

Actualizar/reemplazar
información.


PATCH

Actualizar parcialmente.


DELETE

Eliminar información.


Una forma sencilla
de recordarlo:


GET
→ dame algo


POST
→ crea algo


PUT
→ reemplaza algo


PATCH
→ modifica algo


DELETE
→ elimina algo


============================================================
PARTE 14 — EJEMPLO
============================================================

Imagina una API:

/users


GET /users

→ obtener usuarios


POST /users

→ crear usuario


GET /users/10

→ obtener usuario 10


PATCH /users/10

→ modificar usuario 10


DELETE /users/10

→ eliminar usuario 10


Esto es fundamental
para trabajar con backend.


============================================================
PARTE 15 — ¿QUÉ ES JSON?
============================================================

JSON significa:

JavaScript Object Notation.


Es un formato muy utilizado
para intercambiar información
entre frontend y backend.


Ejemplo:

{
    "id": 1,
    "name": "Zenen",
    "role": "Software Engineer"
}


Se parece mucho
a un objeto JavaScript.


Pero recuerda:

JSON es un formato de texto.


JavaScript Object:

{
    id: 1,
    name: "Zenen"
}


JSON:

{
    "id": 1,
    "name": "Zenen"
}


============================================================
PARTE 16 — FETCH()
============================================================

JavaScript proporciona:

fetch()


para realizar requests HTTP.


Ejemplo:

*/

fetch("https://example.com");


/*
fetch()
devuelve una Promise.


Por eso podemos hacer:

*/

fetch("https://example.com")
    .then((response) => {

        console.log(response);

    });


/*
============================================================
PARTE 17 — FETCH + ASYNC/AWAIT
============================================================

Podemos hacer:

*/

async function getData() {

    const response =
        await fetch("https://example.com");

    console.log(response);

}


/*
Aquí:

fetch()
    ↓
Promise<Response>
    ↓
await
    ↓
response


MUY IMPORTANTE:

response NO es todavía
el JSON.


Es un objeto Response.


============================================================
PARTE 18 — RESPONSE.JSON()
============================================================

Para convertir el body
de la respuesta a JSON
normalmente hacemos:

*/

const response3 =
    await fetch(url);

const data =
    await response.json();


/*
Hay DOS operaciones asíncronas:

1.

fetch()

obtiene la respuesta.


2.

response.json()

lee/procesa el body.


Por eso tenemos:

*/

const response1 = await fetch(url);

const data1 = await response.json();


/*
Este concepto es FUNDAMENTAL.


No hagas:

const data = await fetch(url);


esperando obtener directamente
el objeto JSON.


fetch()
te entrega:

Response


Luego:

response.json()


te entrega:

los datos parseados.


============================================================
PARTE 19 — STATUS CODE
============================================================

HTTP utiliza códigos
de estado.


Los principales:


2xx

Éxito.


200

OK.


201

Created.


204

No Content.


4xx

Error del cliente.


400

Bad Request.


401

Unauthorized.


403

Forbidden.


404

Not Found.


5xx

Error del servidor.


500

Internal Server Error.


502

Bad Gateway.


============================================================
PARTE 20 — response.ok
============================================================

La Response tiene:

response.ok


Normalmente será:

true


para respuestas exitosas
dentro del rango 200-299.


Ejemplo:

*/

const response4 = await fetch(url);

if (!response4.ok) {

    throw new Error(
        `HTTP error: ${response4.status}`
    );

}


/*
Esto es MUY importante.


Porque:

fetch()


NO necesariamente rechaza
la Promise cuando el servidor
responde:

404

500

etc.


Si la request HTTP recibió
una respuesta válida,
fetch puede resolverse
con un Response.


Por eso debemos comprobar:

response.ok


============================================================
PARTE 21 — FETCH COMPLETO
============================================================

Un patrón muy común:

*/

async function getUsers() {

    try {

        const response =
            await fetch("https://example.com/users");

        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }

        const users =
            await response.json();

        return users;

    } catch (error) {

        console.error(error);

        throw error;

    }

}


/*
El flujo es:

fetch
 ↓
response
 ↓
response.ok
 ↓
response.json()
 ↓
users
 ↓
return


============================================================
PARTE 22 — HEADERS
============================================================

Una request HTTP puede
tener headers.


Ejemplo:

*/

fetch(url, {

    headers: {

        "Content-Type":
            "application/json"

    }

});


/*
Los headers contienen
metadatos de la request.


También podemos enviar:

Authorization


por ejemplo:

*/

fetch(url, {

    headers: {

        Authorization:
            "Bearer TOKEN"

    }

});


/*
Esto aparece muchísimo
cuando trabajas con APIs
autenticadas.


============================================================
PARTE 23 — POST
============================================================

GET normalmente obtiene datos.


POST normalmente envía datos
para crear algo.


Ejemplo:

*/

const user = {

    name: "Zenen",

    role: "Software Engineer"

};


const response2 = await fetch(
    "https://example.com/users",
    {

        method: "POST",

        headers: {

            "Content-Type":
                "application/json"

        },

        body: JSON.stringify(user)

    }
);


/*
Hay tres cosas importantes:

method

headers

body


============================================================
PARTE 24 — JSON.STRINGIFY
============================================================

JavaScript object:

*/

const user2 = {

    name: "Zenen",

    age: 25

};


/*
Para convertirlo
en JSON:

*/

const json =
    JSON.stringify(user2);


/*
Ahora json es texto JSON.


Cuando enviamos información
por HTTP:

body:

JSON.stringify(user)


es extremadamente común.


============================================================
PARTE 25 — JSON.PARSE
============================================================

Lo contrario sería:

JSON.parse()


Ejemplo:

*/

const text =
    '{"name":"Zenen","age":25}';


const object =
    JSON.parse(text);


console.log(object.name);


/*
Resultado:

Zenen


En fetch normalmente
no necesitamos hacer
JSON.parse manualmente
porque:

response.json()


hace ese procesamiento
por nosotros.


============================================================
PARTE 26 — GET COMPLETO
============================================================

Patrón:

*/

async function getProducts() {

    const response =
        await fetch(
            "https://example.com/products"
        );

    if (!response.ok) {

        throw new Error(
            `HTTP ${response.status}`
        );

    }

    const products =
        await response.json();

    return products;

}


/*
============================================================
PARTE 27 — POST COMPLETO
============================================================

Patrón:

*/

async function createUser(user) {

    const response =
        await fetch(
            "https://example.com/users",
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(user)

            }
        );

    if (!response.ok) {

        throw new Error(
            `HTTP ${response.status}`
        );

    }

    const data =
        await response.json();

    return data;

}


/*
============================================================
PARTE 28 — SEQUENTIAL ASYNC/AWAIT
============================================================

Imagina:

getUser()

y después:

getProfile()


Podemos hacer:

*/

async function loadProfile() {

    const user =
        await getUser();

    const profile =
        await getProfile(user.id);

    return profile;

}


/*
Flujo:

getUser()
   ↓
user
   ↓
getProfile(user.id)
   ↓
profile


Esto es equivalente conceptualmente
a una cadena de Promises.


============================================================
PARTE 29 — PARALLEL ASYNC/AWAIT
============================================================

Pero cuidado.


No siempre queremos:

*/

const users1 =
    await getUsers();

const products1 =
    await getProducts();


/*
Si son completamente independientes,
esto hace:

getUsers()
   ↓
termina

getProducts()
   ↓
empieza


Eso puede ser innecesariamente lento.


Podemos hacer:

*/

const [users, products] =
    await Promise.all([

        getUsers(),

        getProducts()

    ]);


/*
Ahora las operaciones
pueden ejecutarse en paralelo.


Esto es MUY importante
en aplicaciones reales.


============================================================
PARTE 30 — REGLA PRÁCTICA
============================================================

Si B necesita el resultado de A:

A

↓

await A

↓

B


Hazlo secuencial.


Si A y B son independientes:


await Promise.all([A, B])


Esto puede mejorar
considerablemente el tiempo total.


============================================================
PARTE 31 — FUNCIÓN REUTILIZABLE
============================================================

Una buena práctica
es encapsular la lógica.


En lugar de repetir:

fetch()
response.ok
response.json()


podemos crear funciones
especializadas:


getUsers()

getProducts()

createUser()


Esto hace que nuestro código
sea más limpio.


============================================================
PARTE 32 — MODELO MENTAL DEFINITIVO
============================================================

Cuando veas:

*/

const response = await fetch(url);


/*
piensa:

1. fetch inicia HTTP request.

2. fetch devuelve Promise.

3. await espera esa Promise
   dentro de la función async.

4. Obtengo Response.

5. Verifico response.ok.

6. Leo el body:

response.json()

7. Obtengo los datos.


El flujo completo:

fetch()
   ↓
Promise<Response>
   ↓
await
   ↓
Response
   ↓
response.ok
   ↓
response.json()
   ↓
JSON/data


============================================================
PARTE 33 — ERROR MUY COMÚN
============================================================

NO hagas esto:

*/

try {

    const response =
        await fetch(url);

    const data =
        await response.json();

} catch (error) {

}


/*
sin comprobar:

response.ok


Porque un:

404

puede no lanzar
automáticamente un error
de fetch.


Por eso:

*/

if (!response.ok) {

    throw new Error(
        `HTTP ${response.status}`
    );

}


/*
============================================================
PARTE 34 — LO QUE DEBES DOMINAR
============================================================

Debes poder escribir
sin copiar:

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

    }

}


Si entiendes cada línea,
estás listo para empezar
a trabajar seriamente
con APIs.


============================================================
FIN DEL DÍA 4 — TEORÍA
============================================================
*/