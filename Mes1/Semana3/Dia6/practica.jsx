/*
============================================================
SEMANA 3 — DÍA 6
PROYECTO 1 — DEVPULSE
PRACTICA COMPLETA
============================================================

OBJETIVO

Convertir DevPulse en una aplicación
que consuma datos REALES de GitHub.

Hoy aprenderás:

✓ fetch
✓ async / await
✓ useEffect
✓ API
✓ Loading
✓ Error
✓ Success
✓ Empty states
✓ API data
✓ Repositories
✓ map
✓ keys
✓ State + API
✓ React + APIs

============================================================


============================================================
FASE 1 — CHECKPOINT
============================================================

Antes de empezar:


[ ] Search funciona.

[ ] Search es un
    controlled input.

[ ] onSubmit funciona.

[ ] Follow funciona.

[ ] Followers funciona.

[ ] Online/Offline funciona.

[ ] Technologies funciona.

[ ] Lists funcionan.

[ ] Keys funcionan.

[ ] Lifting State Up funciona.

[ ] No tienes errores
    en consola.


Si algo está roto:

ARRÉGLALO ANTES
DE CONTINUAR.


============================================================
FASE 2 — INVESTIGAR LA API
============================================================

Antes de programar:


Investiga la GitHub REST API.


Debes identificar
qué endpoint necesitas
para obtener un usuario.


Necesitas poder responder:


¿Cuál es la URL?


¿Qué método HTTP utilizo?


¿Qué información devuelve?


¿Qué propiedad contiene
el username?


¿Qué propiedad contiene
el avatar?


¿Qué propiedad contiene
followers?


¿Qué propiedad contiene
following?


¿Qué propiedad contiene
repositories?


NO copies código todavía.


Primero entiende
la API.


============================================================
FASE 3 — USER STATE
============================================================

En el componente apropiado
crea State para:


user


Inicialmente:


null


Conceptualmente:


user = null


Después de una petición
exitosa:


user = API response


IMPORTANTE:


No pongas un objeto
ficticio como valor inicial.


Queremos representar:


"No tenemos usuario
todavía."


Por eso:


null


============================================================
FASE 4 — REPOSITORIES STATE
============================================================

Crea:


repositories


Inicialmente:


[]


¿Por qué?


Porque todavía
no tenemos repositorios.


Después de la API:


repositories = data


donde:


data


es un Array.


============================================================
FASE 5 — LOADING STATE
============================================================

Crea:


loading


Inicial:


false


Cuando comienza
la búsqueda:


true


Cuando termina:


false


La UI debe mostrar:


Loading...


mientras:


loading === true


============================================================
FASE 6 — ERROR STATE
============================================================

Crea:


error


Inicial:


null


Si ocurre un problema:


setError(...)


Después:


error !== null


debe mostrar
un mensaje.


Ejemplo:


User not found.


============================================================
FASE 7 — SUBMITTED SEARCH
============================================================

Recuerda el Día 4.


Tenemos:


search


y:


submittedSearch


NO hagas que la API
se llame por cada letra.


Debe funcionar así:


User writes:


torvalds


↓

search


User clicks:


Search


↓

submittedSearch


↓

API


============================================================
FASE 8 — useEffect
============================================================

Ahora utiliza:


useEffect


para reaccionar
a la búsqueda enviada.


Tu Effect debe saber
cuándo debe realizar
la petición.


IMPORTANTE:


No hagas:


fetch()


directamente
en el cuerpo del componente.


Debe existir un:


useEffect


responsable del
side effect.


============================================================
FASE 9 — CREAR FETCH USER
============================================================

Dentro de la lógica
del Effect crea una función
asíncrona responsable
de obtener el usuario.


Conceptualmente:


async function fetchUser() {

    ...

}


Dentro:


fetch()


↓

response


↓

response.json()


↓

data


No copies código
sin entender cada paso.


============================================================
FASE 10 — COMPROBAR RESPONSE
============================================================

Después de:


fetch()


comprueba:


response.ok


Si no es OK:


lanza o maneja
un error.


Esto es importante
porque:


404


no necesariamente
hace que fetch()
entre automáticamente
en catch.


Debes entender
la diferencia entre:


Network error


y:


HTTP error.


============================================================
FASE 11 — ACTUALIZAR USER
============================================================

Cuando recibas:


data


haz:


setUser(data)


Ahora:


user


contiene información
real de GitHub.


La UI debe reaccionar.


============================================================
FASE 12 — RESET STATES
============================================================

Cuando comienza
una nueva búsqueda:


error


debe limpiarse.


user anterior


debe limpiarse.


loading


debe activarse.


Conceptualmente:


error → null

user → null

loading → true


Esto evita que
se mezclen datos viejos
con datos nuevos.


============================================================
FASE 13 — PROFILE CARD
============================================================

Ahora elimina
los datos hardcodeados
del ProfileCard.


ANTES:


Zenen Contreras

Software Engineer

Followers: 1250


DESPUÉS:


Los datos deben venir
de:


user


Por ejemplo:


user.login

user.name

user.bio

user.followers

user.following

user.avatar_url


IMPORTANTE:


No asumas que
todos los campos
tendrán contenido.


Algunos pueden ser:


null


o:


vacíos.


Tu UI debe tolerarlo.


============================================================
FASE 14 — AVATAR
============================================================

Utiliza:


user.avatar_url


para mostrar
la imagen.


Debes tener:


alt


descriptivo.


Por ejemplo:


alt={user.login}


No dejes
imágenes sin alt.


============================================================
FASE 15 — PROFILE CONDITIONAL
============================================================

No muestres:


ProfileCard


si:


user === null


Primero debes tener
un usuario.


Flujo:


user === null


↓

no profile


user !== null


↓

Profile


Esto evita errores
como:


user.name


cuando:


user === null


============================================================
FASE 16 — LOADING UI
============================================================

Mientras:


loading === true


muestra:


Loading...


Puedes crear:


Loading.jsx


si quieres.


Por ejemplo:


Loading...


o:


Loading GitHub profile...


No necesitas
una animación todavía.


============================================================
FASE 17 — ERROR UI
============================================================

Si:


error !== null


muestra:


error


Por ejemplo:


User not found.


No muestres
el ProfileCard
si hubo un error.


============================================================
FASE 18 — EMPTY STATE
============================================================

Antes de buscar:


Search for a GitHub developer.


Después de buscar
y encontrar:


Profile.


Si no encuentra:


User not found.


Queremos distinguir:


EMPTY


LOADING


SUCCESS


ERROR


============================================================
FASE 19 — REPOSITORIES API
============================================================

Ahora obtiene
los repositorios
del usuario.


Utiliza el endpoint
correspondiente de
GitHub.


El username debe
venir del usuario
que buscaste.


Conceptualmente:


username


↓

repositories endpoint


↓

fetch


↓

JSON


↓

repositories State


============================================================
FASE 20 — REPOSITORIES
============================================================

Cuando recibas:


data


haz:


setRepositories(data)


Ahora:


repositories


contiene un Array.


Ejemplo conceptual:


[
    repo1,
    repo2,
    repo3
]


============================================================
FASE 21 — REPOSITORY LIST
============================================================

Crea:


RepositoryList.jsx


Debe recibir:


repositories


como Prop.


No debería tener
una copia propia
del array.


El Parent es la
fuente de verdad.


============================================================
FASE 22 — MAP
============================================================

En:


RepositoryList


utiliza:


map()


para crear:


RepositoryCard


por cada repositorio.


Conceptualmente:


repositories.map(repo => ...)


NO escribas
repositorios manualmente.


============================================================
FASE 23 — KEY
============================================================

Cada:


RepositoryCard


debe tener:


key


Utiliza:


repo.id


si está disponible.


No utilices:


Math.random()


Y evita:


index


cuando existe
un ID estable.


============================================================
FASE 24 — REPOSITORY CARD
============================================================

Crea:


RepositoryCard.jsx


Debe recibir:


repo


como Prop.


Muestra información
útil:


name

description

language

stars


No necesitas mostrar
todo lo que devuelve
GitHub.


Selecciona información
relevante.


============================================================
FASE 25 — LINKS
============================================================

Cada repositorio
debería poder abrirse
en GitHub.


GitHub proporciona
una URL para el repo.


Utilízala.


El enlace debe:


abrirse correctamente.


Puedes decidir si
se abre en otra pestaña.


Si haces eso,
considera las prácticas
básicas de seguridad
para links externos.


============================================================
FASE 26 — LIMITAR REPOS
============================================================

Si el usuario tiene
cientos de repositorios,
no necesitas mostrar
todos.


Puedes limitar
temporalmente la cantidad
que renderizas.


Por ejemplo:


primeros 6


o:


primeros 10


La decisión es tuya.


Lo importante es que
entiendas que la API
puede devolver muchos
datos.


============================================================
FASE 27 — EMPTY REPOSITORIES
============================================================

¿Qué pasa si:


repositories.length === 0


?


No dejes simplemente
un espacio vacío.


Muestra:


No repositories found.


Esto es:


Empty State.


============================================================
FASE 28 — ERROR DE REPOSITORIES
============================================================

Piensa:


¿El usuario existe?


¿Pero la petición
de repositorios falla?


Idealmente tu aplicación
debe poder manejar
ese escenario.


Puedes utilizar
un State de error
específico si lo
consideras necesario.


No compliques demasiado
la arquitectura todavía.


============================================================
FASE 29 — NO DUPLICAR LOGIC
============================================================

Evita repetir:


loading


error


fetch logic


innecesariamente.


Piensa:


¿Qué pertenece a App?


¿Qué pertenece a SearchBar?


¿Qué pertenece a ProfileCard?


¿Qué pertenece a RepositoryList?


¿Qué pertenece a RepositoryCard?


============================================================
FASE 30 — COMPONENT ARCHITECTURE
============================================================

Tu árbol final puede ser:


App
│
├── Header
│
├── SearchBar
│
├── Loading
│
├── ErrorMessage
│
├── ProfileCard
│   ├── FollowButton
│   └── Status
│
├── Stats
│
├── Technologies
│   └── TechnologyForm
│
└── RepositoryList
    │
    ├── RepositoryCard
    ├── RepositoryCard
    └── RepositoryCard


No tiene que ser
exactamente así.


Debe tener sentido
para tu aplicación.


============================================================
FASE 31 — FLUJO COMPLETO
============================================================

Ahora debes poder
explicar este flujo:


USER

escribe:


octocat


↓

search


↓

click Search


↓

submittedSearch


↓

useEffect


↓

loading = true


↓

fetch()


↓

GitHub


↓

response


↓

JSON


↓

setUser()


↓

setRepositories()


↓

loading = false


↓

React re-render


↓

ProfileCard


+

RepositoryList


============================================================
FASE 32 — NUEVA BÚSQUEDA
============================================================

Prueba:


octocat


Después:


torvalds


Después:


gaearon


Después:


tu propio username
de GitHub.


Cada búsqueda
debe actualizar
la interfaz.


IMPORTANTE:


No debe quedarse
mostrando información
del usuario anterior
mientras esperas
el nuevo resultado.


============================================================
FASE 33 — USUARIO INEXISTENTE
============================================================

Busca algo como:


this-user-definitely-does-not-exist-123456789


RESULTADO:


No crash.


No pantalla en blanco.


Debe aparecer:


User not found.


o un mensaje
equivalente.


============================================================
FASE 34 — INPUT VACÍO
============================================================

Presiona Search
sin escribir nada.


RESULTADO:


No debe ejecutarse
una petición inútil.


Utiliza la validación
que construiste
en el Día 4.


============================================================
FASE 35 — NETWORK / API ERROR
============================================================

Piensa:


¿Qué pasa si GitHub
no responde?


Tu aplicación no debería
romperse completamente.


Debe existir
un estado de error.


No necesitas simular
un servidor caído.


Solamente asegúrate
de que tu estructura
puede manejar errores.


============================================================
FASE 36 — DEVTOOLS
============================================================

Abre:

Network


en DevTools.


Haz una búsqueda.


Observa:


Request


Status


Response


URL


Headers


Esto es MUY importante.


No quiero que solamente
veas:


fetch()


como magia.


Quiero que entiendas
qué ocurre en el navegador.


============================================================
FASE 37 — INSPECCIONAR JSON
============================================================

Abre la respuesta
de GitHub.


Busca:


login


name


avatar_url


bio


followers


following


public_repos


y otros campos.


Compara:


API response


vs:


UI


Pregunta:


¿Qué datos utilizo?


¿Qué datos ignoro?


============================================================
FASE 38 — DEBUGGING
============================================================

Si algo falla:


NO preguntes inmediatamente
a la IA.


Haz:


console.log(response);


console.log(data);


console.log(user);


console.log(repositories);


Y observa.


Pregúntate:


¿La petición salió?


¿La URL es correcta?


¿El status es 200?


¿response.ok es true?


¿JSON contiene datos?


¿setUser se ejecutó?


¿El componente recibe
los Props correctos?


============================================================
FASE 39 — REFACTOR
============================================================

Después de hacerlo
funcionar:

revisa todo.


Busca:


fetch duplicados.


componentes gigantes.


State innecesario.


Props innecesarios.


console.log olvidados.


Nombres malos.


Código repetido.


Condiciones demasiado
complejas.


No busques
"código perfecto".


Busca código:


claro

legible

mantenible


============================================================
FASE 40 — UX
============================================================

Ahora mejora
la experiencia.


Mientras carga:


Loading GitHub profile...


Si error:


User not found.


Si éxito:


Profile


Si no buscó:


Search for a GitHub developer.


Si no hay repos:


No repositories found.


La aplicación debe
comunicar claramente
qué está ocurriendo.


============================================================
FASE 41 — RESPONSIVE
============================================================

Comprueba DevPulse
en:

Desktop


Tablet


Mobile


No necesitas hacer
una obra de arte.


Pero debe ser usable.


Utiliza tus conocimientos
de:


CSS


Tailwind


para mejorar
la interfaz.


============================================================
FASE 42 — FINAL UI
============================================================

El resultado aproximado:


================================================
                    DEVPULSE
================================================

        Search GitHub Developer

        ┌─────────────────────────────┐
        │ torvalds                    │
        └─────────────────────────────┘

                  [ Search ]


        ─────────────────────────────


        [ Avatar ]

        Linus Torvalds
        @torvalds

        Bio...


        Followers: XXXXX
        Following: XXXXX
        Repositories: XXXXX


        🟢 Online

        [ Follow ]


        ─────────────────────────────


        Technologies

        JavaScript
        React
        Node.js


        ─────────────────────────────


        Repositories


        ┌─────────────────────────────┐
        │ linux                       │
        │ Linux kernel source tree    │
        │ ⭐ XXXXX                    │
        │ C                           │
        └─────────────────────────────┘


        ┌─────────────────────────────┐
        │ repository                  │
        │ Description...              │
        │ ⭐ XXXXX                    │
        └─────────────────────────────┘


================================================
                    DEVPULSE
================================================


Los datos del perfil
y repositorios deben
ser REALES.


============================================================
FASE 43 — GIT
============================================================

Antes de cerrar:

git status


Revisa cambios.


Después:


git diff


Revisa qué hiciste.


Después:


git add .


git commit


Utiliza un mensaje
descriptivo.


Ejemplo:


feat: integrate GitHub API


Después:


git push


si tienes
el repositorio remoto
configurado.


============================================================
FASE 44 — README
============================================================

Actualiza:


README.md


Debe explicar:


¿Qué es DevPulse?


¿Qué problema resuelve?


¿Qué tecnologías utiliza?


¿Cómo ejecutarlo?


¿Qué API utiliza?


¿Qué aprendiste?


Incluye una captura
de pantalla si quieres.


Esto será útil
para tu portfolio.


============================================================
🔥 FASE 45 — RETO FINAL
============================================================

Ahora intenta
hacer una mejora
SIN que yo te diga
cómo.


Ideas:


1. Mostrar número
   de estrellas.


2. Mostrar lenguaje
   principal.


3. Mostrar fecha
   de actualización.


4. Mostrar link
   al perfil GitHub.


5. Mostrar cantidad
   de repositorios.


6. Ordenar repositorios.


7. Agregar un botón
   para limpiar búsqueda.


ELIGE AL MENOS UNA.


============================================================
FASE 46 — TEST FINAL
============================================================

TEST 1


Buscar:


octocat


RESULTADO:


Perfil real.


------------------------------------------------------------

TEST 2


Buscar:


torvalds


RESULTADO:


Perfil diferente.


------------------------------------------------------------

TEST 3


Buscar usuario
inexistente.


RESULTADO:


Error amigable.


------------------------------------------------------------

TEST 4


Buscar vacío.


RESULTADO:


No request.


------------------------------------------------------------

TEST 5


Observar Network.


RESULTADO:


Request correcto.


------------------------------------------------------------

TEST 6


Esperar mientras
carga.


RESULTADO:


Loading visible.


------------------------------------------------------------

TEST 7


Ver repositorios.


RESULTADO:


Lista real.


------------------------------------------------------------

TEST 8


Recargar.


RESULTADO:


Aplicación inicia
correctamente.


------------------------------------------------------------

TEST 9


Mobile.


RESULTADO:


UI usable.


------------------------------------------------------------

TEST 10


Console.


RESULTADO:


Sin errores.


============================================================
CHECKLIST FINAL — SEMANA 3
============================================================

[ ] Entiendo API.

[ ] Entiendo HTTP.

[ ] Entiendo fetch.

[ ] Entiendo Promise.

[ ] Entiendo async/await.

[ ] Entiendo JSON.

[ ] Entiendo response.json().

[ ] Entiendo response.ok.

[ ] Entiendo try/catch.

[ ] Entiendo useEffect.

[ ] Entiendo dependency array.

[ ] Entiendo [].

[ ] Entiendo cuándo
    ejecutar un Effect.

[ ] Entiendo Loading State.

[ ] Entiendo Error State.

[ ] Entiendo Success State.

[ ] Entiendo Empty State.

[ ] Consumí GitHub API.

[ ] Obtengo usuario real.

[ ] Obtengo repositorios reales.

[ ] Utilizo map().

[ ] Utilizo keys.

[ ] Utilizo Props.

[ ] Utilizo State.

[ ] Utilizo Events.

[ ] Utilizo Forms.

[ ] Utilizo Lifting State Up.

[ ] Tengo componentes
    separados.

[ ] No tengo errores
    en consola.

[ ] Probé usuarios
    diferentes.

[ ] Probé usuario inexistente.

[ ] Probé input vacío.

[ ] Revisé Network DevTools.

[ ] Actualicé README.

[ ] Hice commit.


============================================================
🏆 RESULTADO
============================================================

HAS TERMINADO:

SEMANA 3


React Fundamentals


Y construiste:


DEV PULSE v1


Utilizando:


React
+
JavaScript
+
GitHub API


No es un proyecto
de tutorial aislado.


Es una aplicación
real que consume
datos externos.


============================================================
FIN
============================================================
*/