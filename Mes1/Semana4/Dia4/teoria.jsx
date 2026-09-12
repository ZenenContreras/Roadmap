/*
==========================================================
SEMANA 4 — DÍA 4
DATA FETCHING + ASYNC STATE
==========================================================

OBJETIVOS DEL DÍA

Al terminar este día debes entender:

1. Qué significa que una operación sea asíncrona.
2. Cómo funciona async/await.
3. Cómo manejar fetching desde React.
4. Qué estados tiene una petición.
5. Loading state.
6. Success state.
7. Error state.
8. Empty state.
9. Qué significa response.ok.
10. Cómo manejar errores correctamente.
11. Por qué fetch no lanza error automáticamente
    cuando recibimos HTTP 404/500.
12. Qué problemas puede causar useEffect con APIs.
13. Qué es AbortController.
14. Cómo cancelar una petición.
15. Qué es una race condition.
16. Cómo evitar estados inconsistentes.
17. Cómo diseñar un flujo de fetching limpio.
18. Cómo aplicar todo esto a Git2Post.

==========================================================
*/


/*
==========================================================
1. ¿QUÉ SIGNIFICA ASÍNCRONO?
==========================================================

JavaScript ejecuta normalmente instrucciones
de manera secuencial.

Por ejemplo:

console.log("A");

console.log("B");

console.log("C");


Resultado:

A
B
C


Pero algunas operaciones toman tiempo.

Por ejemplo:

- llamadas HTTP
- leer archivos
- consultar una base de datos
- esperar un timer
- pedir información a una API


No queremos congelar toda la aplicación
mientras esperamos.


Por eso utilizamos operaciones asíncronas.


==========================================================
*/


/*
==========================================================
2. UNA PETICIÓN HTTP ES ASÍNCRONA
==========================================================

Cuando hacemos:

fetch("https://api.github.com/users/octocat")


JavaScript necesita:

1. enviar la petición
2. esperar al servidor
3. recibir respuesta
4. procesar respuesta


Eso puede tardar:

100ms
500ms
2 segundos
10 segundos
etc.


Durante ese tiempo React necesita saber:

"Estoy esperando."


Por eso necesitamos:

loading.


==========================================================
*/


/*
==========================================================
3. PROMISE
==========================================================

fetch() devuelve una Promise.


Una Promise representa
un resultado que todavía no tenemos.


Conceptualmente:

Promise
    ↓
PENDING
    ↓
    ├── FULFILLED
    │
    └── REJECTED


PENDING:

La operación todavía está ejecutándose.


FULFILLED:

La operación terminó correctamente.


REJECTED:

La operación falló.


==========================================================
*/


/*
==========================================================
4. async / await
==========================================================

Podemos trabajar con Promises usando:

async
await


Ejemplo:

async function getUser() {

    const response =
        await fetch(
            "https://api.github.com/users/octocat"
        );

}


"await" significa:

Espera el resultado de esta Promise.


IMPORTANTE:

await NO bloquea todo JavaScript.

La función async queda esperando
mientras el resto de la aplicación
puede continuar.


==========================================================
*/


/*
==========================================================
5. ¿POR QUÉ USAR async/await?
==========================================================

Comparemos.


Promises:

fetch(url)
    .then(response => response.json())
    .then(data => {
        ...
    })
    .catch(error => {
        ...
    });


Con async/await:

async function getUser() {

    try {

        const response =
            await fetch(url);

        const data =
            await response.json();

    } catch (error) {

        ...

    }

}


Para operaciones complejas,
async/await suele ser más fácil
de leer.


==========================================================
*/


/*
==========================================================
6. EL PROBLEMA CON FETCH
==========================================================

Esta es una de las cosas MÁS IMPORTANTES
de hoy.


Mucha gente piensa:

fetch()
    ↓
si recibo 404
    ↓
catch()


NO.


fetch solamente rechaza la Promise
cuando ocurre un error de red
u otro fallo de transporte.


Una respuesta HTTP:

404
500
401
403

puede llegar correctamente al navegador.


Por eso debemos revisar:

response.ok


==========================================================
*/


/*
==========================================================
7. response.ok
==========================================================

Ejemplo:

const response =
    await fetch(url);


if (!response.ok) {

    throw new Error(
        "Request failed"
    );

}


response.ok normalmente es:

true

cuando el status está en
el rango exitoso.


Y:

false

cuando la respuesta HTTP indica
un error.


Por ejemplo:

404
500


==========================================================
*/


/*
==========================================================
8. PATRÓN CORRECTO
==========================================================

Un Service puede hacer:

export async function getGitHubUser(username) {

    const response =
        await fetch(
            `https://api.github.com/users/${username}`
        );


    if (!response.ok) {

        throw new Error(
            "GitHub user not found"
        );

    }


    return response.json();

}


Ahora el Hook puede decidir
qué hacer con ese error.


==========================================================
*/


/*
==========================================================
9. LOS ESTADOS DE UNA PETICIÓN
==========================================================

Una petición no es simplemente:

data / no data.


Tiene estados.


Un modelo sencillo:

IDLE
    ↓
LOADING
    ↓
SUCCESS


o:


IDLE
    ↓
LOADING
    ↓
ERROR


También podemos tener:

LOADING
    ↓
EMPTY


Por ejemplo:


IDLE

Todavía no hemos realizado
ninguna búsqueda.


LOADING

Estamos esperando GitHub.


SUCCESS

Recibimos datos.


ERROR

La petición falló.


EMPTY

La petición funcionó,
pero no tenemos resultados.


==========================================================
*/


/*
==========================================================
10. IDLE
==========================================================

Antes de realizar una búsqueda:

user = null
loading = false
error = null


La UI puede mostrar:

"Search for a GitHub user."


No deberíamos mostrar:

"Loading..."


porque todavía no estamos cargando nada.


==========================================================
*/


/*
==========================================================
11. LOADING
==========================================================

Cuando ejecutamos:

searchUser("octocat")


hacemos:

setLoading(true);


La UI puede mostrar:

Loading...


También podemos:

- deshabilitar botones
- mostrar skeleton
- mostrar spinner


==========================================================
*/


/*
==========================================================
12. SUCCESS
==========================================================

Si todo funciona:

setUser(data);


y:

setLoading(false);


La UI muestra:

Profile
Repositories
Followers
etc.


==========================================================
*/


/*
==========================================================
13. ERROR
==========================================================

Si ocurre un error:

setError(error.message);


Y:

setLoading(false);


La UI puede mostrar:

"User not found"


IMPORTANTE:

No queremos que la aplicación
simplemente explote.


El error debe convertirse
en un estado visual.


==========================================================
*/


/*
==========================================================
14. EMPTY
==========================================================

Existe una diferencia importante:

ERROR:

La operación falló.


EMPTY:

La operación funcionó,
pero no hay datos.


Por ejemplo:

GitHub API responde correctamente:

[]

Eso no es un error.


Es:

empty state.


La UI podría mostrar:

"No repositories found."


==========================================================
*/


/*
==========================================================
15. ESTADO ASÍNCRONO COMPLETO
==========================================================

Podemos visualizar:

                ┌───────────┐
                │   IDLE    │
                └─────┬─────┘
                      ↓
                ┌───────────┐
                │  LOADING  │
                └─────┬─────┘
                      ↓
             ┌───────────────┐
             │               │
             ↓               ↓
         SUCCESS           ERROR
             │
             ↓
           EMPTY


SUCCESS no significa
necesariamente que existan datos.


Puede ser:

SUCCESS + DATA

o:

SUCCESS + EMPTY


==========================================================
*/


/*
==========================================================
16. UN HOOK REAL
==========================================================

Nuestro useGitHub podría verse
conceptualmente así:

function useGitHub() {

    const [user, setUser] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState(null);


    const searchUser = async (username) => {

        try {

            setLoading(true);
            setError(null);

            const data =
                await getGitHubUser(username);

            setUser(data);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }

    };


    return {
        user,
        loading,
        error,
        searchUser
    };

}


Este patrón es muy importante.


==========================================================
*/


/*
==========================================================
17. ¿POR QUÉ finally?
==========================================================

Podríamos hacer:

try {

    setLoading(true);

    ...

    setLoading(false);

} catch {

    setLoading(false);

}


Funciona.


Pero:

finally

es mejor para decir:

"Esto debe ejecutarse
independientemente de si funcionó
o falló."


Por eso:

try {

    ...

} catch {

    ...

} finally {

    setLoading(false);

}


Es un patrón muy común
para operaciones asíncronas.


==========================================================
*/


/*
==========================================================
18. LIMPIAR ERRORES
==========================================================

Imagina:

Usuario busca:

invalid-user

Resultado:

ERROR


Luego busca:

octocat


Si no hacemos:

setError(null);


podríamos tener:

datos correctos

pero:

error anterior


Eso genera estados inconsistentes.


Por eso al comenzar una nueva petición:

setError(null);


==========================================================
*/


/*
==========================================================
19. ¿DEBEMOS LIMPIAR LOS DATOS?
==========================================================

Depende.


Imagina:

Usuario tiene actualmente:

octocat


Hace una nueva búsqueda:

torvalds


Mientras esperamos:


Opción A:

mostrar el usuario anterior.


Opción B:

limpiar el usuario.


No existe una respuesta universal.


Es una decisión de UX.


Para Git2Post podríamos decidir
que durante una nueva búsqueda
mostramos loading y mantenemos
los datos anteriores.


==========================================================
*/


/*
==========================================================
20. useEffect Y FETCH
==========================================================

Una situación muy común:

useEffect(() => {

    fetch(...);

}, []);


Esto ejecuta la petición
cuando el componente se monta.


Es válido.


Pero hay que entender
qué está pasando.


useEffect significa:

"Después de renderizar,
ejecuta este efecto
cuando sus dependencias cambien."


==========================================================
*/


/*
==========================================================
21. NO HAGAS EL EFFECT ASÍ
==========================================================

No necesitamos:

useEffect(async () => {

    const response =
        await fetch(...);

}, []);


El callback de useEffect
no debe convertirse directamente
en una función async
que devuelva una Promise.


Mejor:

useEffect(() => {

    async function loadData() {

        const response =
            await fetch(...);

    }

    loadData();

}, []);


O utilizar un Hook
que encapsule la lógica.


==========================================================
*/


/*
==========================================================
22. DEPENDENCIAS
==========================================================

Ejemplo:

useEffect(() => {

    fetchUser(username);

}, [username]);


Significa:

Ejecuta el efecto cuando:

username

cambie.


Esto es fundamental.


Si olvidamos una dependencia,
podemos tener datos desactualizados.


==========================================================
*/


/*
==========================================================
23. EL PROBLEMA DE PETICIONES QUE TERMINAN TARDE
==========================================================

Imagina:

Usuario busca:

react


GitHub empieza la petición.


Después rápidamente busca:

nextjs


GitHub empieza otra petición.


Puede ocurrir:

Request 1:
react


Request 2:
nextjs


Pero:

Request 2 termina primero.


Tenemos:

nextjs


Después termina:

Request 1


Y puede sobrescribir el estado:

react


Ahora la UI muestra
el resultado incorrecto.


Esto es una race condition.


==========================================================
*/


/*
==========================================================
24. ¿QUÉ ES UNA RACE CONDITION?
==========================================================

Una race condition ocurre
cuando el resultado depende
del orden en que terminan
operaciones concurrentes.


En nuestro ejemplo:

Request A
Request B


No controlamos exactamente
cuál terminará primero.


Si ambas modifican el mismo estado,
puede aparecer información incorrecta.


==========================================================
*/


/*
==========================================================
25. ABORTCONTROLLER
==========================================================

JavaScript proporciona:

AbortController


Permite cancelar operaciones
que aceptan un AbortSignal,
incluido fetch.


Ejemplo:

const controller =
    new AbortController();


fetch(url, {
    signal: controller.signal
});


Y podemos cancelar:

controller.abort();


==========================================================
*/


/*
==========================================================
26. ¿POR QUÉ ES ÚTIL?
==========================================================

Si el usuario cambia de búsqueda:

react
↓
nextjs


Podemos cancelar:

react


y mantener solamente:

nextjs


Esto ayuda a evitar
resultados obsoletos.


==========================================================
*/


/*
==========================================================
27. ABORTCONTROLLER EN UN EFFECT
==========================================================

Ejemplo conceptual:

useEffect(() => {

    const controller =
        new AbortController();


    async function load() {

        try {

            const response =
                await fetch(url, {
                    signal:
                        controller.signal
                });


            const data =
                await response.json();


        } catch (error) {

            if (
                error.name === "AbortError"
            ) {

                return;

            }

            // manejar error real

        }

    }


    load();


    return () => {

        controller.abort();

    };

}, [url]);


El return del useEffect
es una función de cleanup.


==========================================================
*/


/*
==========================================================
28. CLEANUP
==========================================================

Cuando React necesita limpiar
un efecto puede ejecutar:

return () => {

    ...


};


Esto puede utilizarse para:

- cancelar requests
- limpiar timers
- remover event listeners
- desconectar recursos


En nuestro caso:

controller.abort();


==========================================================
*/


/*
==========================================================
29. ABORTAR NO ES UN ERROR DE USUARIO
==========================================================

Si nosotros cancelamos
una petición porque el usuario
hizo otra búsqueda,

no deberíamos mostrar:

"Something went wrong."


Fue una cancelación intencional.


Por eso podemos comprobar:

error.name === "AbortError"


y simplemente ignorarla.


==========================================================
*/


/*
==========================================================
30. DATA FETCHING PROFESIONAL
==========================================================

Cuando diseñes fetching piensa:

1. ¿Qué ocurre antes?
2. ¿Qué ocurre mientras espero?
3. ¿Qué ocurre si funciona?
4. ¿Qué ocurre si falla?
5. ¿Qué ocurre si no hay datos?
6. ¿Qué ocurre si el usuario cambia
   la búsqueda?
7. ¿Qué ocurre si el componente
   desaparece?


Esto es pensar como un developer.


==========================================================
*/


/*
==========================================================
31. ESTADO VS DATOS
==========================================================

Hay una diferencia.


DATOS:

user
repositories
posts


ESTADO DE LA PETICIÓN:

loading
error


La combinación de ambos
permite representar correctamente
lo que está pasando.


==========================================================
*/


/*
==========================================================
32. UN ERROR COMÚN
==========================================================

No hagas solamente:

const [data, setData] =
    useState(null);


Porque:

null

puede significar muchas cosas.


¿Significa:

- todavía no cargamos?
- está cargando?
- ocurrió error?
- no existe?
- no hay datos?


Es ambiguo.


Por eso usamos estados separados.


==========================================================
*/


/*
==========================================================
33. DISEÑO DE ESTADO
==========================================================

Por ejemplo:

const [data, setData] =
    useState(null);

const [loading, setLoading] =
    useState(false);

const [error, setError] =
    useState(null);


Ahora podemos distinguir:


loading === false
data === null
error === null

→ IDLE


loading === true

→ LOADING


loading === false
data !== null
error === null

→ SUCCESS


loading === false
error !== null

→ ERROR


==========================================================
*/


/*
==========================================================
34. UI BASADA EN ESTADOS
==========================================================

La UI debería reaccionar
a estos estados.


Ejemplo conceptual:

if (loading) {

    return <Loading />;

}


if (error) {

    return <ErrorMessage />;

}


if (!data) {

    return <EmptyState />;

}


return <Profile />;


Esto convierte estados
en UI.


==========================================================
*/


/*
==========================================================
35. PERO CUIDADO CON EMPTY
==========================================================

Para repositorios:

[]


es distinto de:

null


null:

todavía no tenemos datos.


[]:

tenemos datos y la lista está vacía.


Esto es extremadamente útil
para diseñar correctamente
la interfaz.


==========================================================
*/


/*
==========================================================
36. GIT2POST
==========================================================

Git2Post tendrá varios estados.


Por ejemplo:

Buscar usuario:

IDLE
LOADING
SUCCESS
ERROR


Repositorios:

IDLE
LOADING
SUCCESS
EMPTY
ERROR


Posts:

IDLE
LOADING
SUCCESS
EMPTY
ERROR


Este patrón aparecerá
constantemente en aplicaciones reales.


==========================================================
*/


/*
==========================================================
37. ARQUITECTURA
==========================================================

Queremos:

Component
    ↓
Custom Hook
    ↓
Service
    ↓
API


Ejemplo:

Repositories.jsx
    ↓
useRepositories()
    ↓
getRepositories()
    ↓
GitHub API


El componente NO debería
conocer los detalles HTTP.


==========================================================
*/


/*
==========================================================
38. RESPONSABILIDAD DEL SERVICE
==========================================================

Service:

- endpoint
- fetch
- headers
- HTTP response
- convertir response a JSON
- lanzar errores apropiados


No debería manejar:

useState
setLoading
setError
UI


==========================================================
*/


/*
==========================================================
39. RESPONSABILIDAD DEL HOOK
==========================================================

Hook:

- estado
- loading
- error
- ejecutar operaciones
- sincronizar lógica React
- controlar ciclo de vida


No debería contener
todo el JSX de la aplicación.


==========================================================
*/


/*
==========================================================
40. RESPONSABILIDAD DEL COMPONENTE
==========================================================

Component:

- mostrar loading
- mostrar error
- mostrar empty state
- mostrar datos
- capturar interacción del usuario


El componente consume
el resultado del Hook.


==========================================================
*/


/*
==========================================================
41. ¿Y SI EL FETCHING CRECE MUCHO?
==========================================================

En aplicaciones reales
puedes encontrar herramientas
como:

TanStack Query
SWR
Redux Toolkit Query


Estas herramientas solucionan
muchos problemas de:

- caching
- refetching
- synchronization
- retries
- stale data
- request deduplication


Pero todavía NO necesitamos
meterlas en Git2Post.


Primero necesitas entender
el problema que solucionan.


==========================================================
*/


/*
==========================================================
42. POR QUÉ NO QUIERO QUE USEMOS
UNA LIBRERÍA TODAVÍA
==========================================================

Si mañana instalas:

TanStack Query


y todo funciona automáticamente,
puedes utilizarla.


Pero no necesariamente entiendes:

¿Qué problema solucionó?


Quiero que primero seas capaz
de construir el flujo manualmente.


Después será mucho más fácil
entender una librería.


==========================================================
*/


/*
==========================================================
43. MODELO MENTAL FINAL
==========================================================

Cuando veas una API piensa:

REQUEST
    ↓
LOADING
    ↓
┌───────────────┐
│               │
SUCCESS       ERROR
│
├── DATA
│
└── EMPTY


Y si existen múltiples requests:

REQUEST A
REQUEST B


piensa:

¿Puede ocurrir
una race condition?


Y:

¿Necesito cancelar
la petición anterior?


==========================================================
*/


/*
==========================================================
44. RESUMEN DEL DÍA
==========================================================

Hoy aprendiste:

async / await
Promises
fetch
response.ok
loading
success
error
empty
finally
useEffect
dependencies
cleanup
AbortController
race conditions
data fetching
async state


Y la arquitectura:

Component
    ↓
Hook
    ↓
Service
    ↓
API


Esto será aplicado directamente
en Git2Post.
==========================================================
*/