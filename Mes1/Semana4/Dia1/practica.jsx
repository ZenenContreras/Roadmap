/*
============================================================
SEMANA 4 — DÍA 1
PRACTICA
PROYECTO 2 — GIT2POST
============================================================

OBJETIVO:

Preparar la arquitectura inicial
de Git2Post utilizando:

✓ Context
✓ useContext
✓ useReducer
✓ Actions
✓ Dispatch
✓ Global State

IMPORTANTE:

No copies código de internet
sin entenderlo.

Construye primero.

Si te atoras:

1. Lee la teoría.
2. Revisa documentación.
3. Usa console.log.
4. Debuggea.
5. Después pregunta.


============================================================
FASE 1 — CREAR GIT2POST
============================================================

Crea el proyecto React
utilizando Vite.


Nombre:


git2post


Utiliza:


React

JavaScript


NO TypeScript todavía.


TypeScript será parte
de Semana 5.


============================================================
RESULTADO ESPERADO
============================================================

Debe funcionar:


npm run dev


Y debes poder abrir
Git2Post en el navegador.


============================================================
FASE 2 — LIMPIAR EL PROYECTO
============================================================

Elimina el contenido
de ejemplo de Vite
que no necesites.


Queremos empezar
con una aplicación limpia.


Mantén solamente
lo necesario.


============================================================
FASE 3 — ESTRUCTURA
============================================================

Crea inicialmente:


src/
│
├── components/
│
├── context/
│
├── pages/
│
├── hooks/
│
├── services/
│
├── App.jsx
├── main.jsx
└── index.css


Todavía muchas carpetas
estarán vacías.


Está bien.


Las iremos utilizando
durante la semana.


============================================================
FASE 4 — PRIMERA UI
============================================================

Construye una pantalla
inicial para Git2Post.


Debe tener:


Logo / nombre:


Git2Post


Headline:


Turn your GitHub activity
into content.


Descripción:


Transform your commits,
repositories and development
activity into professional
content.


Y un botón:


Connect GitHub


Todavía NO conectaremos
GitHub.


Hoy estamos construyendo
la arquitectura.


============================================================
RESULTADO ESPERADO
============================================================

Debes poder ver:


--------------------------------------------

Git2Post


Turn your GitHub activity
into content.


Transform your development
activity into professional
content.


[ Connect GitHub ]

--------------------------------------------


Diseña tú la interfaz.


Utiliza:


CSS


o:


Tailwind


============================================================
FASE 5 — CREAR GIT2POST CONTEXT
============================================================

Dentro de:


src/context/


crea:


Git2PostContext.jsx


Su responsabilidad será
proporcionar el estado
compartido de Git2Post.


Primero crea el Context.


No agregues todavía
una cantidad enorme
de State.


============================================================
RESULTADO ESPERADO
============================================================

Debes tener conceptualmente:


Git2PostContext


y:


Git2PostProvider


============================================================
FASE 6 — INITIAL STATE
============================================================

Define un estado inicial.


Por ahora utiliza algo
pequeño:


user

repositories

selectedRepository

generatedPost


Por ejemplo conceptualmente:


user: null

repositories: []

selectedRepository: null

generatedPost: null


No copies esto
mecánicamente.


Entiende por qué
cada propiedad existe.


============================================================
PREGUNTA
============================================================

Antes de continuar
pregúntate:


¿Por qué repositories
empieza como []?


¿Por qué user
empieza como null?


¿Por qué selectedRepository
empieza como null?


¿Por qué generatedPost
empieza como null?


Si puedes responderlas,
continúa.


============================================================
FASE 7 — CREAR REDUCER
============================================================

Crea:


git2postReducer


Puede estar dentro
del mismo archivo
por ahora.


Después puedes
separarlo si consideras
que mejora la arquitectura.


El reducer debe recibir:


state


y:


action


============================================================
FASE 8 — ACTIONS
============================================================

Implementa inicialmente
estas Actions:


SET_USER


SET_REPOSITORIES


SELECT_REPOSITORY


SET_GENERATED_POST


RESET


IMPORTANTE:


No estás haciendo
API todavía.


Simplemente estamos
creando las reglas
del State.


============================================================
FASE 9 — PAYLOAD
============================================================

Cada Action que necesite
información debe utilizar:


payload


Por ejemplo:


SET_USER


debe poder recibir:


payload: user


SET_REPOSITORIES


debe recibir:


payload: repositories


SELECT_REPOSITORY


debe recibir:


payload: repository


SET_GENERATED_POST


debe recibir:


payload: post


============================================================
FASE 10 — USE REDUCER
============================================================

Dentro del Provider
utiliza:


useReducer()


Ahora debes tener:


state


y:


dispatch


No necesitas crear
useState para cada
propiedad del State.


Ese es precisamente
el objetivo del ejercicio.


============================================================
FASE 11 — CONTEXT VALUE
============================================================

El Provider debe
compartir algo
conceptualmente como:


state


dispatch


No copies exactamente
sin entenderlo.


Piensa:


¿Qué necesita un
componente para leer
el State?


¿Qué necesita para
cambiarlo?


Respuesta:


state


dispatch


============================================================
FASE 12 — CONECTAR PROVIDER
============================================================

Ahora conecta:


Git2PostProvider


en:


main.jsx


La estructura debe
terminar conceptualmente:


Git2PostProvider
    ↓
App
    ↓
Components


============================================================
RESULTADO ESPERADO
============================================================

Toda la aplicación
debe estar dentro
del Provider.


Esto permitirá que
cualquier componente
descendiente pueda
consumir el Context.


============================================================
FASE 13 — CREAR CUSTOM CONTEXT HOOK
============================================================

Aquí quiero que empieces
a pensar como developer
de una aplicación real.


Crea:


src/hooks/useGit2Post.js


Su responsabilidad
será facilitar el acceso
al Context.


Conceptualmente:


useGit2Post()


debería permitir:


const {
    state,
    dispatch
} = useGit2Post();


Esto evita repetir
la lógica de:


useContext()


en todos los componentes.


============================================================
FASE 14 — CONECTAR APP
============================================================

Dentro de:


App.jsx


consume:


useGit2Post()


Obtén:


state


y:


dispatch


Por ahora solamente
haz un pequeño
debugging:


console.log(state);


============================================================
RESULTADO ESPERADO
============================================================

En consola deberías
ver algo similar:


{
    user: null,
    repositories: [],
    selectedRepository: null,
    generatedPost: null
}


============================================================
FASE 15 — PRIMER DISPATCH
============================================================

Ahora crea temporalmente
un botón:


Set Demo User


Al hacer click:


dispatch()


con:


SET_USER


y un objeto de prueba.


Por ejemplo:


{
    login: "demo-user",
    name: "Demo Developer"
}


NO es una llamada API.


Es solamente para
comprobar que el reducer
funciona.


============================================================
RESULTADO ESPERADO
============================================================

Inicialmente:


user: null


Después del click:


user:


{
    login: "demo-user",
    name: "Demo Developer"
}


Debe cambiar el State.


============================================================
FASE 16 — MOSTRAR USER
============================================================

Ahora muestra
el usuario en pantalla.


Antes:


No user connected.


Después:


Demo Developer


@demo-user


La información debe
venir del Context.


NO pases:


user


mediante Props
desde App.


El objetivo es probar
Context.


============================================================
FASE 17 — SET REPOSITORIES
============================================================

Crea un segundo botón
temporal:


Load Demo Repositories


Haz dispatch:


SET_REPOSITORIES


con un Array de
repositorios ficticios.


Ejemplo conceptual:


[
    {
        id: 1,
        name: "portfolio"
    },
    {
        id: 2,
        name: "devpulse"
    }
]


============================================================
RESULTADO ESPERADO
============================================================

Después del click:


repositories


debe contener:


portfolio

devpulse


============================================================
FASE 18 — SELECT REPOSITORY
============================================================

Renderiza los repositorios.


Cada uno debe tener
un botón:


Select


Cuando se haga click:


dispatch()


con:


SELECT_REPOSITORY


y:


repository


como payload.


============================================================
RESULTADO ESPERADO
============================================================

Si seleccionas:


portfolio


entonces:


selectedRepository


debe ser:


portfolio


Y la UI debe mostrar:


Selected repository:


portfolio


============================================================
FASE 19 — GENERATED POST
============================================================

Agrega un botón temporal:


Generate Demo Post


Haz:


SET_GENERATED_POST


con un string de prueba.


Ejemplo:


"Just shipped a new feature
using React and GitHub."


Después muestra:


Generated Post


y el contenido.


============================================================
FASE 20 — RESET
============================================================

Implementa:


RESET


Debe regresar el State
a su estado inicial.


Después de:


Reset


debe volver a:


user: null

repositories: []

selectedRepository: null

generatedPost: null


============================================================
FASE 21 — DEBUGGING
============================================================

Ahora rompe deliberadamente
algo pequeño.


Por ejemplo:


escribe mal una Action.


Observa qué ocurre.


Después utiliza:


console.log()


para descubrir
el problema.


La meta NO es solamente
hacer que funcione.


Quiero que practiques
debugging.


============================================================
FASE 22 — ANALIZAR EL FLUJO
============================================================

Para cada botón
debes poder explicar:


CLICK


↓

dispatch


↓

action


↓

reducer


↓

new state


↓

React re-render


↓

UI


Ejemplo:


Select Repository


↓

dispatch


↓

SELECT_REPOSITORY


↓

reducer


↓

selectedRepository


↓

render


↓

UI


============================================================
FASE 23 — NO MUTAR STATE
============================================================

Revisa tu reducer.


Asegúrate de NO hacer:


state.user = ...


o:


state.repositories.push(...)


directamente.


El reducer debe devolver
un nuevo State.


Busca especialmente
errores de mutación.


============================================================
FASE 24 — REFACTOR
============================================================

Cuando todo funcione:


elimina:

console.logs innecesarios.


Elimina:

botones temporales
que ya no tengan utilidad.


Pero puedes conservar
alguna UI de debugging
si te ayuda.


Después revisa:


¿El Context tiene
demasiadas responsabilidades?


¿El reducer es legible?


¿Las Actions tienen
nombres claros?


¿Los componentes están
bien separados?


============================================================
FASE 25 — DISEÑO FINAL DEL DÍA
============================================================

Tu Git2Post puede terminar
hoy aproximadamente así:


Git2Post

Turn your GitHub activity
into content.


---------------------------------

Connected user:

Demo Developer
@demo-user


---------------------------------

Repositories:

portfolio
devpulse


Selected:

portfolio


---------------------------------

Generated Post:

Just shipped a new feature
using React and GitHub.


---------------------------------

[ Reset ]


No importa si la UI
todavía es sencilla.


Hoy importa la arquitectura.


============================================================
FASE 26 — ELIMINAR DEMO DATA
============================================================

Antes de terminar:

Decide qué datos
eran únicamente
para probar el Context.


Los datos demo
pueden eliminarse
si ya no son necesarios.


IMPORTANTE:


No queremos que
Git2Post termine
dependiendo de datos
ficticios.


En próximos días
los reemplazaremos
con datos reales.


============================================================
FASE 27 — TEST FINAL
============================================================

TEST 1


La aplicación inicia.


RESULTADO:

Git2Post funciona.


--------------------------------------------

TEST 2


Context funciona.


RESULTADO:

useGit2Post()
puede obtener
state.


--------------------------------------------

TEST 3


SET_USER.


RESULTADO:

user cambia.


--------------------------------------------

TEST 4


SET_REPOSITORIES.


RESULTADO:

repositories cambia.


--------------------------------------------

TEST 5


SELECT_REPOSITORY.


RESULTADO:

selectedRepository cambia.


--------------------------------------------

TEST 6


SET_GENERATED_POST.


RESULTADO:

generatedPost cambia.


--------------------------------------------

TEST 7


RESET.


RESULTADO:

Todo vuelve
al initialState.


--------------------------------------------

TEST 8


Console.


RESULTADO:

No errores.


--------------------------------------------

TEST 9


Reducer.


RESULTADO:

No muta directamente
el State.


============================================================
FASE 28 — CHECKPOINT CONCEPTUAL
============================================================

Debes poder explicar
SIN MIRAR:

¿Qué problema resuelve
Context?


¿Qué problema resuelve
useReducer?


¿Por qué Context y
useReducer son cosas
diferentes?


¿Qué hace Provider?


¿Qué hace useContext?


¿Qué hace dispatch?


¿Qué es una Action?


¿Qué es payload?


¿Qué hace un reducer?


¿Por qué el reducer
debe ser predecible?


¿Por qué no hacemos
fetch dentro del reducer?


¿Cuándo usarías
useState en vez de
useReducer?


¿Cuándo usarías
Props en vez de Context?


¿Cuándo combinarías
Context + useReducer?


============================================================
FASE 29 — RETO EXTRA
============================================================

Si terminaste rápido:

Agrega una nueva Action:


TOGGLE_THEME


State:


theme:


"light"


o:


"dark"


Crea un botón:


Toggle theme


y utiliza:


dispatch()


para cambiar
el tema.


IMPORTANTE:


Esto es un RETO.


Intenta hacerlo
sin mirar ejemplos.


============================================================
🔥 RESULTADO ESPERADO DEL DÍA
============================================================

Al terminar:

Git2Post debe tener:


✓ Proyecto React funcionando.

✓ Arquitectura inicial.

✓ Git2PostContext.

✓ Git2PostProvider.

✓ useContext.

✓ useReducer.

✓ Initial State.

✓ Actions.

✓ Dispatch.

✓ Payload.

✓ Reducer.

✓ Custom Hook.

✓ State compartido.

✓ UI conectada al State.


Y, sobre todo:


DEBES ENTENDER


State


↓

Action


↓

Dispatch


↓

Reducer


↓

New State


↓

React


↓

UI


============================================================
FIN DE PRÁCTICA
============================================================
*/