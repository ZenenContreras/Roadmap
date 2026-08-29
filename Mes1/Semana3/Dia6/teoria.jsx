/*
============================================================
SEMANA 3 — DÍA 6
REACT FUNDAMENTALS
API + useEffect
============================================================

OBJETIVOS

Al terminar este día debes entender:

1. Qué es un API
2. Qué es fetch()
3. Qué es una petición HTTP
4. Qué devuelve una API
5. JSON
6. async / await
7. useEffect
8. Dependency Array
9. Cuándo se ejecuta useEffect
10. Loading State
11. Error State
12. Success State
13. Empty State
14. API + State
15. useEffect + API
16. Cleanup básico
17. Race conditions a nivel conceptual
18. Arquitectura de una aplicación React
19. Cómo consumir GitHub API
20. Cómo construir DevPulse


============================================================
1. ¿QUÉ ES UNA API?
============================================================

Una API permite que diferentes
sistemas se comuniquen.


Por ejemplo:

DevPulse
   ↓
GitHub API
   ↓
GitHub


DevPulse pregunta:


"Quiero información
sobre este usuario."


GitHub responde:


"Estos son sus datos."


Entonces:


CLIENT
 ↓
REQUEST
 ↓
API
 ↓
RESPONSE
 ↓
CLIENT


============================================================
2. ¿QUÉ ES UNA API HTTP?
============================================================

Una API HTTP normalmente
está disponible mediante
una URL.


Por ejemplo:


https://api.github.com/users/octocat


DevPulse puede hacer
una petición a esa URL.


GitHub devuelve información
sobre ese usuario.


============================================================
3. REQUEST
============================================================

Una Request es la petición
que enviamos al servidor.


Puede contener:


URL

Method

Headers

Body


En una petición GET
normalmente queremos
obtener información.


Ejemplo conceptual:


GET
/api/users/octocat


Significa:


"Obtén la información
de este usuario."


============================================================
4. RESPONSE
============================================================

El servidor responde.


Por ejemplo:


Status:

200


y un contenido:


{
    "login": "octocat",
    "id": 1,
    "followers": 100
}


DevPulse recibe
esa información.


============================================================
5. STATUS CODES
============================================================

Algunas respuestas comunes:


200

OK


201

Created


400

Bad Request


401

Unauthorized


403

Forbidden


404

Not Found


500

Server Error


No necesitas memorizar
todos ahora.


Pero debes reconocer
los más comunes.


============================================================
6. JSON
============================================================

Las APIs normalmente
devuelven datos
estructurados.


Uno de los formatos
más utilizados es:


JSON


Ejemplo:


{
    "login": "octocat",
    "name": "The Octocat",
    "followers": 100
}


JavaScript puede trabajar
fácilmente con esta
información.


============================================================
7. FETCH
============================================================

JavaScript proporciona:


fetch()


para realizar
peticiones HTTP.


Ejemplo:


fetch(
    "https://api.github.com/users/octocat"
);


fetch devuelve
una Promise.


Esto significa que
la respuesta llegará
más adelante.


============================================================
8. PROMISE
============================================================

Recuerda Semana 2.


Una Promise representa
una operación que
terminará en el futuro.


Tenemos:


fetch()
 ↓
Promise
 ↓
response


Por eso podemos utilizar:


.then()


o:


async / await


============================================================
9. ASYNC / AWAIT
============================================================

Ejemplo:


async function getUser() {

    const response =
        await fetch(url);

}


await significa:


"Espera el resultado
de esta Promise
antes de continuar
esta función."


IMPORTANTE:

await NO bloquea
todo JavaScript.


La espera ocurre
dentro del flujo
asíncrono correspondiente.


============================================================
10. RESPONSE.JSON()
============================================================

fetch devuelve
un Response.


No tenemos todavía
el objeto JavaScript
final.


Por ejemplo:


const response =
    await fetch(url);


Después:


const data =
    await response.json();


Ahora:


data


contiene el JSON
convertido en
un objeto JavaScript.


Flujo:


fetch()
 ↓
Response
 ↓
response.json()
 ↓
JavaScript object


============================================================
11. EJEMPLO COMPLETO
============================================================

async function getUser() {

    const response =
        await fetch(url);

    const data =
        await response.json();

    console.log(data);

}


Tenemos:


REQUEST

↓

RESPONSE

↓

JSON

↓

OBJECT


============================================================
12. ¿DÓNDE GUARDAMOS LOS DATOS?
============================================================

Aquí entra:


useState


Por ejemplo:


const [user, setUser] =
    useState(null);


Inicialmente:


user = null


Después de la API:


setUser(data)


Ahora:


user = data


React vuelve a renderizar
el componente.


============================================================
13. PROBLEMA
============================================================

Tenemos un problema.


¿Cuándo hacemos
la petición?


NO queremos:


function App() {

    fetch(url);

}


directamente en el cuerpo
del componente.


¿Por qué?


Porque el componente
puede renderizarse
muchas veces.


Podríamos terminar
haciendo múltiples
peticiones inesperadas.


Aquí aparece:


useEffect


============================================================
14. ¿QUÉ ES useEffect?
============================================================

useEffect permite ejecutar
side effects en un componente.


Un side effect es algo
que ocurre fuera del
cálculo directo de la UI.


Ejemplos:


API request

Timer

Suscripción

Event listener

Modificar algo externo


Consumir una API
es uno de los casos
más comunes.


============================================================
15. useEffect BÁSICO
============================================================

Ejemplo:


useEffect(() => {

    console.log("Effect");

}, []);


El segundo argumento:


[]


es el Dependency Array.


Con un array vacío,
el Effect se ejecuta
después del render inicial.


============================================================
16. RENDER VS EFFECT
============================================================

Esto es MUY importante.


React hace:


Render


↓

DOM/UI


↓

Effect


Por eso useEffect
no ocurre exactamente
"antes del render".


Primero React necesita
renderizar.


Después ejecuta
el Effect.


============================================================
17. DEPENDENCY ARRAY
============================================================

Tenemos:


useEffect(
    () => {

        ...

    },
    []
);


Array vacío:


[]


significa que el Effect
no depende de valores
reactivos específicos.


Conceptualmente:

ejecútalo después
del montaje inicial.


============================================================
18. DEPENDENCY
============================================================

Supongamos:


const [username, setUsername] =
    useState("");


Podemos tener:


useEffect(() => {

    console.log(username);

}, [username]);


Ahora el Effect
reacciona cuando:


username


cambia.


Flujo:


username changes
 ↓
render
 ↓
effect


============================================================
19. POR QUÉ DEV PULSE NECESITA ESTO
============================================================

Tenemos:


search


El usuario escribe:


torvalds


Después hace:


Search


Queremos:


username
 ↓
API request
 ↓
user data
 ↓
State
 ↓
UI


useEffect puede reaccionar
a un valor que representa
la búsqueda.


Pero debemos diseñar
bien cuándo queremos
hacer la petición.


============================================================
20. NO HACER REQUEST
21. EN CADA LETRA
============================================================

Si tenemos:


search


y hacemos:


useEffect(() => {

    fetch(
        `/users/${search}`
    );

}, [search]);


cada letra provocaría
una petición.


Usuario escribe:


t


↓

request


to


↓

request


tor


↓

request


tora


↓

request


toral


etc.


Esto puede ser
innecesario.


Por eso debemos distinguir:


search


de:


submittedSearch


============================================================
22. submittedSearch
============================================================

Día 4 hicimos:


search


y:


submittedSearch


search


representa:


lo que estoy escribiendo.


submittedSearch


representa:


lo que realmente envié.


Entonces:


User types:


torvalds


↓

search


"torvalds"


Después:


Search


↓

submittedSearch


"torvalds"


Ahora sí podemos
hacer:


API request.


============================================================
23. API FLOW DE DEVPULSE
============================================================

Tenemos:


USER

escribe username


↓

search State


↓

submit


↓

submittedSearch


↓

useEffect


↓

fetch()


↓

GitHub API


↓

response


↓

JSON


↓

setUser()


↓

React re-render


↓

Profile


============================================================
24. LOADING STATE
============================================================

Una petición
no es instantánea.


Mientras esperamos:


Loading...


Necesitamos State:


const [loading,
       setLoading] =
       useState(false);


Antes de request:


setLoading(true);


Después:


setLoading(false);


Entonces:


loading === true


↓

Loading...


============================================================
25. ERROR STATE
============================================================

Las peticiones
pueden fallar.


Por ejemplo:


usuario no existe.


Necesitamos:


error


Ejemplo:


const [error,
       setError] =
       useState(null);


Si ocurre error:


setError(
    "User not found"
);


UI:


User not found.


============================================================
26. SUCCESS STATE
============================================================

Cuando todo funciona:


user


contiene los datos.


Entonces:


user !== null


↓

Profile


Tenemos tres grandes
estados:


LOADING


ERROR


SUCCESS


============================================================
27. EMPTY STATE
============================================================

También existe:


EMPTY


Antes de hacer una búsqueda:


Search for a GitHub user.


Después de buscar:


Loading...


Después:


Profile


o:


Error


Estos estados son
fundamentales para UX.


============================================================
28. ESTADO COMPLETO
============================================================

Conceptualmente:


user = null
error = null
loading = false


Inicial:


Search for a GitHub user.


Request:


loading = true


↓

Loading...


Success:


loading = false

user = data


↓

Profile


Error:


loading = false

error = message


↓

Error UI


============================================================
29. TRY / CATCH
============================================================

Con async / await
podemos manejar errores:


try {

    const response =
        await fetch(url);

}
catch (error) {

    console.error(error);

}


Esto permite manejar
errores de red
u otros problemas.


============================================================
30. response.ok
============================================================

Importante:


fetch()


no necesariamente
lanza un error
cuando recibimos:


404


Por eso podemos
comprobar:


response.ok


Si:


response.ok === false


podemos lanzar
nuestro propio error.


Conceptualmente:


if (!response.ok) {

    throw new Error(
        "Request failed"
    );

}


Esto es importante
cuando trabajas
con APIs.


============================================================
31. CLEANUP
============================================================

useEffect puede devolver
una función:


useEffect(() => {

    ...

    return () => {

        ...

    };

}, []);


Esta función es cleanup.


Se utiliza para limpiar
recursos.


Ejemplos:


event listeners

timers

subscriptions


En requests también
existen mecanismos
para cancelarlas.


Por ahora solamente
necesitas comprender
el concepto.


============================================================
32. ASYNC DENTRO DE useEffect
============================================================

No hacemos:


useEffect(
    async () => {

        ...

    },
    []
);


Aunque puede parecer
natural, no es la forma
recomendada.


Mejor:


useEffect(() => {

    async function
    fetchUser() {

        ...

    }

    fetchUser();

}, []);


Esto mantiene
la función que recibe
useEffect con el
comportamiento esperado.


============================================================
33. FETCH USER
============================================================

Podemos tener:


async function fetchUser() {

    try {

        ...

    }
    catch (error) {

        ...

    }

}


Y dentro:


const response =
    await fetch(url);


Después:


const data =
    await response.json();


Finalmente:


setUser(data);


============================================================
34. RESET STATES
============================================================

Cuando hacemos
una nueva búsqueda:


debemos limpiar
el estado anterior.


Por ejemplo:


setError(null);

setUser(null);

setLoading(true);


Así evitamos mostrar
datos antiguos mientras
esperamos los nuevos.


============================================================
35. FLUJO DE UNA NUEVA BÚSQUEDA
============================================================

Usuario ya tiene:


octocat


Ahora busca:


torvalds


Antes de request:


user = null

error = null

loading = true


↓

Loading...


↓

API


↓

Success


↓

user = torvalds


↓

Profile actualizado.


============================================================
36. REPOSITORIES
============================================================

GitHub también proporciona
repositorios.


Podemos hacer
otra petición:


/users/{username}/repos


Entonces:


User API


y:


Repositories API


Son datos diferentes.


Podemos guardar:


user


y:


repositories


en States separados.


============================================================
37. ARRAY DE REPOSITORIES
============================================================

Por ejemplo:


const [
    repositories,
    setRepositories
] = useState([]);


Después:


setRepositories(data);


Ahora:


repositories


es un array.


Podemos utilizar:


map()


para renderizar.


============================================================
38. API + map()
============================================================

Tenemos:


repositories


↓

map()


↓

RepositoryCard


Ejemplo conceptual:


repositories.map(repo => (

    <RepositoryCard
        key={repo.id}
        repo={repo}
    />

))


Esto conecta
varios conceptos
de días anteriores.


============================================================
39. COMPONENTE REPOSITORY CARD
============================================================

RepositoryCard
puede recibir:


repo


como Prop.


Entonces puede mostrar:


repo.name

repo.description

repo.stargazers_count

repo.language


La API proporciona
los datos.


El componente
los representa.


============================================================
40. NO HARDcodear
============================================================

Antes:


name="Zenen"


followers={1250}


Ahora:


user.name

user.followers


La información viene
de la API.


Esto convierte
DevPulse en una aplicación
real.


============================================================
41. NULL SAFETY
============================================================

Si:


user = null


NO podemos hacer:


user.name


porque provocaría
un error.


Primero debemos comprobar
que existe.


Por ejemplo:


user && user.name


o mediante
Conditional Rendering.


Esto es especialmente
importante con APIs.


============================================================
42. OPTIONAL CHAINING
============================================================

También podemos utilizar:


user?.name


Si:


user


existe:


user.name


Si:


user === null


el resultado será:


undefined


en lugar de lanzar
un error por acceder
a una propiedad
de null.


============================================================
43. API DATA ≠ UI DATA
============================================================

No siempre necesitamos
utilizar directamente
todo lo que devuelve
la API.


GitHub puede devolver
muchísimos campos.


DevPulse solamente
necesita algunos:


login

name

avatar_url

bio

followers

following

public_repos


El frontend decide
qué mostrar.


============================================================
44. SEPARACIÓN DE RESPONSABILIDADES
============================================================

Idealmente:


App


coordina State.


SearchBar


maneja búsqueda.


ProfileCard


representa usuario.


RepositoryList


representa repositorios.


RepositoryCard


representa un repositorio.


Cada componente tiene
una responsabilidad.


============================================================
45. COMPONENT TREE
============================================================

DevPulse:


App
│
├── Header
│
├── SearchBar
│
├── Loading
│
├── Error
│
├── ProfileCard
│   ├── FollowButton
│   └── Status
│
├── Stats
│
├── Technologies
│
└── RepositoryList
    │
    ├── RepositoryCard
    ├── RepositoryCard
    └── RepositoryCard


Esto ya parece
una aplicación real.


============================================================
46. useEffect + DEPENDENCY
============================================================

Debes entender
esta relación:


useEffect(
    callback,
    dependencies
)


Si:


[]


→ ejecución inicial.


Si:


[username]


→ reacciona cuando
username cambia.


Si no tenemos
dependency array:


useEffect(() => {

});


puede ejecutarse
después de cada render.


Por eso debes comprender
qué dependencias tiene
tu Effect.


============================================================
47. EFECTOS Y RENDER
============================================================

Recuerda:


State update


↓

Render


↓

Effect


↓

Posible State update


↓

Render


Esto puede crear
ciclos si diseñamos
mal el Effect.


Por eso:


useEffect


debe utilizarse
con intención.


============================================================
48. DEV PULSE
============================================================

Nuestro flujo final:


SearchBar


↓

submittedSearch


↓

useEffect


↓

fetch user


↓

setUser


↓

ProfileCard


Y:


fetch repositories


↓

setRepositories


↓

RepositoryList


Todo esto ocurre
sin recargar la página.


============================================================
49. SPA
============================================================

DevPulse es una:


Single Page Application.


El usuario interactúa
con la aplicación
sin que el navegador
tenga que recargar
la página completa
para cada acción.


React actualiza
la interfaz según
el State.


============================================================
50. MODELO MENTAL FINAL
============================================================

Quiero que entiendas
esta secuencia:


USER
 ↓
EVENT
 ↓
STATE UPDATE
 ↓
RENDER
 ↓
EFFECT
 ↓
API REQUEST
 ↓
RESPONSE
 ↓
STATE UPDATE
 ↓
RENDER
 ↓
UPDATED UI


Este flujo resume
gran parte de lo que
has aprendido en
estas tres semanas.


============================================================
51. DEV PULSE V1
============================================================

Al finalizar hoy:

DevPulse debería poder:


1. Buscar usuario GitHub.


2. Consultar GitHub API.


3. Mostrar Loading.


4. Mostrar Error.


5. Mostrar Profile.


6. Mostrar followers.


7. Mostrar following.


8. Mostrar avatar.


9. Mostrar bio.


10. Mostrar repositories.


11. Renderizar repositories
    con map().


12. Utilizar keys.


13. Mantener interacción
    con Follow.


14. Mantener Status.


15. Mantener Technologies.


============================================================
52. CHECKPOINT
============================================================

Debes poder explicar:


¿Qué es una API?


¿Qué es fetch()?


¿Qué devuelve fetch()?


¿Qué es JSON?


¿Qué hace response.json()?


¿Qué es async / await?


¿Qué es useEffect?


¿Qué es un side effect?


¿Qué es dependency array?


¿Qué significa []?


¿Por qué no hacer
fetch directamente
en el cuerpo del componente?


¿Qué es loading state?


¿Qué es error state?


¿Qué es success state?


¿Por qué comprobar
response.ok?


¿Qué hace try/catch?


¿Por qué usamos
setUser(data)?


¿Por qué repositories
es un array?


¿Por qué utilizamos
map()?


¿Por qué necesitamos
key?


¿Por qué debemos
comprobar si user
existe antes de
usar user.name?


Si puedes explicar
todo esto sin mirar:

🔥 SEMANA 3 COMPLETADA.


============================================================
FIN DE TEORÍA
============================================================
*/