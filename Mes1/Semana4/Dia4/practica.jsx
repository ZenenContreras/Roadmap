/*
==========================================================
SEMANA 4 — DÍA 4
PRÁCTICA APLICADA
PROYECTO: Git2Post
TEMA: DATA FETCHING + ASYNC STATE
==========================================================

OBJETIVO:

Convertir el fetching de Git2Post
en un flujo profesional:

IDLE
↓
LOADING
↓
SUCCESS / ERROR
↓
EMPTY


Además:

- manejar HTTP errors
- limpiar errores
- manejar AbortController
- evitar resultados obsoletos
- separar Service / Hook / UI

==========================================================
*/


/*
==========================================================
PARTE 1 — AUDITORÍA
==========================================================

Antes de tocar código:

Busca dónde Git2Post
realiza llamadas a APIs.


Encuentra:

fetch()


y responde:

1. ¿Dónde está el fetch?
2. ¿Dónde está loading?
3. ¿Dónde está error?
4. ¿Dónde se guardan los datos?
5. ¿Dónde se muestra el error?
6. ¿Qué pasa si la API devuelve 404?
7. ¿Qué pasa si devuelve []?
8. ¿Qué pasa si el usuario hace
   dos búsquedas rápidamente?


Escribe tus respuestas
en comentarios.


==========================================================
*/


/*
==========================================================
PARTE 2 — DEFINIR EL FLUJO
==========================================================

Antes de programar,
define el flujo de GitHub.

Por ejemplo:

IDLE
    ↓
Usuario escribe username
    ↓
Usuario presiona Search
    ↓
LOADING
    ↓
GitHub API
    ↓
SUCCESS
    ↓
Mostrar usuario


O:

LOADING
    ↓
ERROR
    ↓
Mostrar error


Debes visualizarlo
antes de escribir código.


==========================================================
*/


/*
==========================================================
PARTE 3 — REVISAR githubService.js
==========================================================

Abre:

src/services/githubService.js


La función debe tener
una responsabilidad clara:

realizar la petición.


Ejemplo conceptual:

export async function getGitHubUser(username) {

    const response =
        await fetch(url);


    if (!response.ok) {

        throw new Error(
            "GitHub user not found"
        );

    }


    return response.json();

}


IMPORTANTE:

El Service no debe tener:

useState
useEffect
setLoading
setError


==========================================================
*/


/*
==========================================================
PARTE 4 — PRUEBA response.ok
==========================================================

Busca un username
que no exista.


Por ejemplo:

"this-user-should-not-exist-123456789"


La API debería responder
con un error HTTP.


Tu Service debe detectar:

!response.ok


y lanzar un Error.


OBJETIVO:

Que el Hook reciba el error.


==========================================================
*/


/*
==========================================================
PARTE 5 — useGitHub
==========================================================

Abre:

src/hooks/useGitHub.jsx


Debes tener estados equivalentes
a:

user
loading
error


Piensa:

¿Cuál debe ser el valor inicial?


user:
null


loading:
false


error:
null


==========================================================
*/


/*
==========================================================
PARTE 6 — searchUser
==========================================================

Construye:

searchUser(username)


Flujo esperado:


1.

setLoading(true)


2.

setError(null)


3.

llamar:

getGitHubUser(username)


4.

guardar resultado:

setUser(...)


5.

manejar error


6.

finalmente:

setLoading(false)


==========================================================
*/


/*
==========================================================
PARTE 7 — ERROR
==========================================================

Haz una búsqueda inválida.


Debe suceder:


loading
    ↓
true


Después:


error
    ↓
"GitHub user not found"


y:


loading
    ↓
false


IMPORTANTE:

La aplicación no debe romperse.


El error debe aparecer
en la interfaz.


==========================================================
*/


/*
==========================================================
PARTE 8 — LIMPIAR ERROR
==========================================================

Ahora:

1. Busca usuario inválido.
2. Aparece error.
3. Busca usuario válido.


Comprueba:

¿El error anterior desaparece?


Si no:

necesitas limpiar:

setError(null)


al comenzar una nueva petición.


==========================================================
*/


/*
==========================================================
PARTE 9 — LOADING REAL
==========================================================

Ahora implementa
el estado visual de loading.


Mientras Git2Post espera:

NO debería parecer
que no está ocurriendo nada.


Puedes utilizar:

Loading...


o tu propio componente.


Si quieres hacerlo mejor:

Skeleton


Pero no es obligatorio.


==========================================================
*/


/*
==========================================================
PARTE 10 — DESHABILITAR SEARCH
==========================================================

Mientras:

loading === true


el botón Search debería
estar deshabilitado.


¿Por qué?


Porque evita:

- múltiples clicks
- múltiples requests
- estados innecesarios


Ejemplo conceptual:

<button
    disabled={loading}
>
    Search
</button>


==========================================================
*/


/*
==========================================================
PARTE 11 — EMPTY STATE
==========================================================

Ahora vamos a trabajar
con repositorios.


Supongamos que GitHub devuelve:

[]


Esto significa:

La petición funcionó.


Pero:

No existen repositorios
que mostrar.


NO debes mostrar:

Error.


Debes mostrar:

Empty State.


Por ejemplo:

"No repositories found."


==========================================================
*/


/*
==========================================================
PARTE 12 — DIFERENCIA NULL VS []
==========================================================

Comprueba que entiendes:


repositories = null

significa:

todavía no hemos obtenido
los repositorios.


repositories = []

significa:

obtuvimos una respuesta válida
pero no hay repositorios.


Esta diferencia debe reflejarse
en tu UI.


==========================================================
*/


/*
==========================================================
PARTE 13 — ABORTCONTROLLER
==========================================================

Ahora vamos a manejar
una situación más avanzada.


Supón:

Usuario busca:

react


Mientras carga:

usuario busca:

nextjs


Tenemos dos requests.


Queremos evitar que
la búsqueda anterior
termine sobrescribiendo
la nueva.


Utiliza:

AbortController


Conceptualmente:


const controller =
    new AbortController();


fetch(url, {
    signal: controller.signal
});


Y cuando sea necesario:

controller.abort();


==========================================================
*/


/*
==========================================================
PARTE 14 — ABORTCONTROLLER EN GIT2POST
==========================================================

Integra AbortController
en la lógica de GitHub.


El objetivo es:

Nueva búsqueda
    ↓
cancelar búsqueda anterior
    ↓
ejecutar nueva búsqueda


No necesitas construir
una arquitectura extremadamente
compleja.


Queremos que entiendas
el concepto.


==========================================================
*/


/*
==========================================================
PARTE 15 — DIFERENCIAR ABORT
==========================================================

Cuando cancelas un fetch,
puede producirse un error:

AbortError


No queremos mostrarlo
como error de usuario.


Por eso debes diferenciar:

AbortError


de:

Network Error
HTTP Error
etc.


Si fue una cancelación intencional:

simplemente ignorarla.


==========================================================
*/


/*
==========================================================
PARTE 16 — CLEANUP
==========================================================

Si utilizas useEffect
para alguna carga automática,
recuerda:

useEffect(() => {

    ...

    return () => {

        // cleanup

    };

}, []);


Ese cleanup puede cancelar
una petición activa.


==========================================================
*/


/*
==========================================================
PARTE 17 — REVISAR USEEFFECT
==========================================================

Ahora busca todos
los useEffect de Git2Post.


Para cada uno pregunta:

¿Por qué existe?


Si responde:

"Porque necesito sincronizar
algo externo con React."

Perfecto.


Si responde:

"Porque React me obligaba
a ponerlo ahí."

Investiga.


No elimines effects
simplemente por eliminarlos.


==========================================================
*/


/*
==========================================================
PARTE 18 — DEPENDENCIAS
==========================================================

Revisa:

useEffect(
    () => {
        ...
    },
    [...]
);


Pregunta:

¿Qué variables utiliza
el efecto?


¿Están correctamente
representadas en dependencies?


No agregues cosas
arbitrariamente.


Entiende por qué están ahí.


==========================================================
*/


/*
==========================================================
PARTE 19 — TEST MANUAL
==========================================================

Haz estas pruebas:


TEST 1

Abre Git2Post.


Resultado:

IDLE.


Debe aparecer
la interfaz inicial.


----------------------------------------------------------


TEST 2

Busca usuario válido.


Resultado:

LOADING
↓
SUCCESS


----------------------------------------------------------


TEST 3

Busca usuario inválido.


Resultado:

LOADING
↓
ERROR


----------------------------------------------------------


TEST 4

Después del error,
busca usuario válido.


Resultado:

ERROR desaparece.


----------------------------------------------------------


TEST 5

Busca un usuario
sin repositorios.


Resultado:

SUCCESS
↓
EMPTY


----------------------------------------------------------


TEST 6

Haz dos búsquedas rápidamente.


Resultado:

La búsqueda anterior
no debería sobrescribir
incorrectamente la nueva.


==========================================================
*/


/*
==========================================================
PARTE 20 — DEBUGGING
==========================================================

Ahora provoca errores
intencionalmente.


Prueba:

1.

No revisar response.ok.


¿Qué sucede con 404?


----------------------------------------------------------


2.

No limpiar error.


¿Qué sucede después
de una búsqueda exitosa?


----------------------------------------------------------


3.

No poner loading false
en finally.


¿Qué sucede?


----------------------------------------------------------


4.

No manejar AbortError.


¿Qué ocurre al cancelar?


----------------------------------------------------------


5.

Hacer dos requests
rápidamente.


¿Puede aparecer
información incorrecta?


==========================================================
*/


/*
==========================================================
PARTE 21 — REFACTOR
==========================================================

Cuando todo funcione,
mira tu código.


Pregúntate:


¿Mi componente conoce
demasiados detalles de API?


¿Mi Service conoce
demasiado de React?


¿Mi Hook está demasiado grande?


¿Mi componente está más limpio
que antes?


Este es el objetivo real.


==========================================================
*/


/*
==========================================================
PARTE 22 — CHALLENGE
==========================================================

Ahora crea tú mismo:

useRepositories()


Debe manejar:


repositories
loading
error


y:

fetchRepositories()


Debe utilizar:

repositoriesService.js


Arquitectura:


Repositories.jsx
       ↓
useRepositories()
       ↓
repositoriesService.js
       ↓
GitHub API


==========================================================
*/


/*
==========================================================
PARTE 23 — CHALLENGE EXTRA
==========================================================

Agrega estados visuales:


IDLE:

"Search for repositories."


LOADING:

"Loading repositories..."


ERROR:

"Something went wrong."


EMPTY:

"No repositories found."


SUCCESS:

mostrar repositorios.


La interfaz debe cambiar
según el estado.


==========================================================
*/


/*
==========================================================
PARTE 24 — CHECKPOINT TÉCNICO
==========================================================

Sin mirar teoría,
explica:


1.

¿Qué es una Promise?


2.

¿Qué hace await?


3.

¿Qué diferencia hay entre:

network error

y:

HTTP 404?


4.

¿Por qué usamos:

response.ok?


5.

¿Qué significa:

loading?


6.

¿Qué diferencia existe entre:

null

y:

[]?


7.

¿Qué es una race condition?


8.

¿Qué problema resuelve
AbortController?


9.

¿Qué es cleanup
en useEffect?


10.

¿Por qué el Service
no debería manejar useState?


11.

¿Por qué el Hook sí puede
manejar loading?


==========================================================
*/


/*
==========================================================
PARTE 25 — RESULTADO FINAL
==========================================================

Al finalizar el día,
Git2Post debería tener:

✅ Custom Hooks

✅ Services separados

✅ Loading states

✅ Error states

✅ Empty states

✅ response.ok

✅ async/await

✅ manejo de errores

✅ botón protegido durante loading

✅ AbortController
   donde corresponda

✅ mejor separación:

Component
    ↓
Hook
    ↓
Service
    ↓
API


==========================================================
*/