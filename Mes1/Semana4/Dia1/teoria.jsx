/*
============================================================
SEMANA 4 — DÍA 1
REACT INTERMEDIO
useContext + useReducer
============================================================

PROYECTO:

Git2Post

"Turn your GitHub activity into content."

============================================================

OBJETIVOS DEL DÍA
============================================================

Al terminar este día debes entender:

1. El problema del Prop Drilling
2. Qué es Context
3. Qué es Provider
4. useContext
5. Cuándo utilizar Context
6. Cuándo NO utilizar Context
7. Context vs Props
8. Context vs State
9. Qué es useReducer
10. Reducer
11. Action
12. Dispatch
13. State
14. El flujo de useReducer
15. useReducer vs useState
16. Combinar Context + useReducer
17. Crear un Global State
18. Aplicarlo a Git2Post


============================================================
1. ¿POR QUÉ APRENDEMOS ESTO?
============================================================

Hasta ahora has trabajado principalmente
con:

useState

Props

Lifting State Up


Eso funciona perfectamente
para aplicaciones pequeñas.


Pero imagina Git2Post.


Tendremos:


GitHub user

Repositories

Selected repository

Commits

Generated posts

Theme

User preferences

Authentication

Loading states

etc.


Si comenzamos a pasar todo
mediante Props:

App
 ↓
Dashboard
 ↓
RepositorySection
 ↓
RepositoryCard
 ↓
Button


podemos terminar con
muchísimos Props.


Aquí aparecen dos herramientas:

useContext

useReducer


============================================================
2. PROP DRILLING
============================================================

Prop Drilling significa pasar
información mediante Props
por componentes que realmente
no necesitan utilizar esa
información.


Ejemplo:


App
 ↓
Dashboard
 ↓
Sidebar
 ↓
RepositoryList
 ↓
RepositoryCard


Supongamos que:

App

tiene:

user


pero:

Dashboard

no necesita user.


Sidebar

tampoco.


RepositoryList

tampoco.


RepositoryCard

sí.


Entonces podríamos terminar:

<App user={user}>

↓

<Dashboard user={user}>

↓

<Sidebar user={user}>

↓

<RepositoryList user={user}>

↓

<RepositoryCard user={user}>


Esto es:

PROP DRILLING.


============================================================
3. ¿ES PROP DRILLING SIEMPRE MALO?
============================================================

NO.


Esto es importante.


Pasar Props es una de las
formas PRINCIPALES de
comunicar componentes
en React.


El problema aparece cuando
tenemos cadenas profundas
de Props que hacen que la
arquitectura sea difícil
de mantener.


No debes pensar:


"Props = malo."


Debes pensar:


"¿Tiene sentido que este
dato viaje por estos
componentes?"


============================================================
4. CONTEXT
============================================================

Context permite compartir
información con múltiples
componentes sin tener que
pasarla manualmente mediante
Props en cada nivel.


Conceptualmente:


Provider
   │
   ├── Component A
   │
   ├── Component B
   │
   └── Component C


Todos pueden acceder
al Context.


============================================================
5. CREATE CONTEXT
============================================================

Para crear un Context:

createContext()


Ejemplo:


import {
    createContext
} from "react";


const UserContext =
    createContext(null);


Ahora tenemos:

UserContext


Pero todavía nadie
lo está proporcionando.


============================================================
6. PROVIDER
============================================================

Un Provider proporciona
el valor del Context.


Conceptualmente:


<UserContext.Provider
    value={user}
>

    <App />

</UserContext.Provider>


Todo componente dentro
del Provider puede acceder
a:

user


============================================================
7. EL ÁRBOL
============================================================

Ejemplo:


UserProvider
│
├── Header
│
├── Sidebar
│
├── Dashboard
│   │
│   ├── Profile
│   └── Repositories
│
└── Settings


Todos están dentro
del Provider.


Entonces pueden acceder
al mismo Context.


============================================================
8. useContext
============================================================

Para consumir un Context
utilizamos:

useContext()


Ejemplo:


const user =
    useContext(UserContext);


Ahora:

user


contiene el valor
proporcionado por:

UserContext.Provider


============================================================
9. CONTEXT NO ES MAGIC STATE
============================================================

Context no reemplaza
automáticamente:

useState


Context es principalmente
un mecanismo para:

COMPARTIR DATOS.


Por ejemplo:


Theme

User

Language

Authentication

Preferences


Pero Context por sí solo
no es un sistema completo
de gestión de estado.


============================================================
10. CONTEXT VS PROPS
============================================================

Props:


Parent
 ↓
Child


Context:


Provider
 ↓
Cualquier descendant


Props son ideales cuando:

Parent necesita configurar
un Child.


Context es útil cuando:

Muchos componentes necesitan
el mismo dato.


============================================================
11. EJEMPLO
============================================================

Tenemos:


ThemeContext


Puede almacenar:


dark


o:


light


En lugar de pasar:

theme


por:

App
 ↓
Layout
 ↓
Sidebar
 ↓
Button


podemos utilizar:


ThemeContext


y consumirlo directamente
desde Button.


============================================================
12. CONTEXT EN GIT2POST
============================================================

Git2Post podría tener:


AuthContext

GitHubContext

ThemeContext


Pero:

NO vamos a crear
10 Contexts sin necesidad.


Tenemos que aprender
a diseñar el estado.


============================================================
13. GLOBAL STATE
============================================================

Un estado global es un
estado que múltiples partes
de la aplicación necesitan.


Ejemplo:


authenticatedUser


Podría necesitarlo:


Header

Sidebar

Dashboard

Profile


En ese caso Context
puede tener sentido.


============================================================
14. ¿TODO DEBE SER GLOBAL?
============================================================

NO.


Esto sería un error.


Por ejemplo:


isModalOpen


si solamente lo utiliza
un componente:


Modal


no necesita ser global.


Mantén:

local state

cuando el estado
solamente pertenece
a ese componente.


============================================================
15. REGLA PRÁCTICA
============================================================

Antes de utilizar Context
pregúntate:


¿Quién necesita este dato?


Si solamente lo necesita
un componente:


useState.


Si lo necesitan
varios componentes
relacionados:


Props.


Si lo necesitan
muchos componentes
en diferentes ramas:


Context puede tener sentido.


============================================================
16. AHORA useReducer
============================================================

useReducer aparece cuando
el State empieza a ser
más complejo.


Hasta ahora:


useState


Ejemplo:


const [count, setCount] =
    useState(0);


Muy sencillo.


Pero imagina:


user

loading

error

repositories

selectedRepo

generatedPosts

etc.


Podríamos terminar
con muchos:

setSomething()


y lógica dispersa.


useReducer ayuda a
centralizar las transiciones
del estado.


============================================================
17. ¿QUÉ ES UN REDUCER?
============================================================

Un reducer es una función
que recibe:


currentState

action


y devuelve:


newState


Conceptualmente:


state + action
      ↓
   reducer
      ↓
 newState


============================================================
18. ESTRUCTURA
============================================================

Un reducer tiene:

function reducer(state, action) {

    ...

}


Por ejemplo:


function counterReducer(
    state,
    action
) {

    if (
        action.type === "increment"
    ) {

        return {
            count: state.count + 1
        };

    }

}


La función NO modifica
el State directamente.


Devuelve un nuevo State.


============================================================
19. ACTION
============================================================

Una Action describe:

"¿Qué ocurrió?"


Ejemplo:


{
    type: "increment"
}


Otro:


{
    type: "decrement"
}


Otro:


{
    type: "reset"
}


La Action no tiene que decir
exactamente cómo modificar
el State.


Describe el evento.


============================================================
20. DISPATCH
============================================================

¿Cómo enviamos una Action?


dispatch()


Ejemplo:


dispatch({
    type: "increment"
});


Flujo:


User clicks button


↓

dispatch(action)


↓

reducer


↓

new state


↓

React render


============================================================
21. USE REDUCER
============================================================

La sintaxis:

const [
    state,
    dispatch
] = useReducer(
    reducer,
    initialState
);


Tenemos:

state

dispatch


El reducer decide
cómo cambia el State.


============================================================
22. EJEMPLO COMPLETO
============================================================

const initialState = {
    count: 0
};


function reducer(state, action) {

    switch(action.type) {

        case "increment":

            return {
                count: state.count + 1
            };

        case "decrement":

            return {
                count: state.count - 1
            };

        default:

            return state;
    }
}


Después:


const [
    state,
    dispatch
] = useReducer(
    reducer,
    initialState
);


============================================================
23. SWITCH
============================================================

Una forma muy común
de escribir reducers:


switch(action.type)


Ejemplo:


switch(action.type) {

    case "increment":

        return ...;

    case "decrement":

        return ...;

    default:

        return state;
}


Esto hace que el reducer
sea fácil de leer.


============================================================
24. IMMUTABILITY
============================================================

MUY IMPORTANTE.


No debemos hacer:


state.count++


porque estamos modificando
directamente el objeto.


Debemos devolver
un nuevo objeto:


return {
    ...state,
    count: state.count + 1
};


Esto respeta el concepto
de Inmutabilidad.


============================================================
25. SPREAD OPERATOR
============================================================

Si tenemos:


state = {

    user: "Zenen",

    loggedIn: true

}


Podemos crear un nuevo
objeto:


{

    ...state,

    loggedIn: false

}


El Spread copia
las propiedades anteriores
y sobrescribe la que
queremos modificar.


============================================================
26. USESTATE VS USEREDUCER
============================================================

useState:


Excelente para:

boolean

string

number

simple objects

simple arrays


useReducer:


Útil cuando:

hay muchas transiciones

hay múltiples acciones

el estado tiene estructura

las actualizaciones
son complejas


============================================================
27. EJEMPLO GIT2POST
============================================================

Imagina:

Git2Post tiene un dashboard.


Estado:


repositories

selectedRepository

commits

generatedPost

loading

error


Podríamos terminar
con:


setRepositories()

setSelectedRepository()

setCommits()

setGeneratedPost()

setLoading()

setError()


Esto puede volverse
difícil de coordinar.


useReducer puede
centralizar las acciones.


============================================================
28. ACTIONS GIT2POST
============================================================

Podríamos tener:


LOAD_REPOSITORIES


SELECT_REPOSITORY


LOAD_COMMITS


GENERATE_POST


GENERATION_SUCCESS


GENERATION_ERROR


RESET


Cada Action representa
un evento importante
de la aplicación.


============================================================
29. STATE GIT2POST
============================================================

Conceptualmente:


const initialState = {

    repositories: [],

    selectedRepository: null,

    commits: [],

    generatedPost: null,

    loading: false,

    error: null

};


Esto representa el
estado de una sección
del sistema.


============================================================
30. REDUCER GIT2POST
============================================================

El reducer podría responder:


LOAD_REPOSITORIES


↓

loading = true


LOAD_REPOSITORIES_SUCCESS


↓

repositories = data

loading = false


SELECT_REPOSITORY


↓

selectedRepository = repo


LOAD_COMMITS


↓

loading = true


GENERATION_SUCCESS


↓

generatedPost = content


============================================================
31. UNA IDEA FUNDAMENTAL
============================================================

El reducer NO debería:

hacer fetch

llamar APIs

manipular DOM

generar contenido con IA


El reducer debe ser
predecible.


Su trabajo es:

State + Action
→ New State


============================================================
32. SIDE EFFECTS
============================================================

Recuerda Semana 3.


API requests son:

SIDE EFFECTS.


Por lo tanto:


fetch()


NO debería vivir
dentro del reducer.


Podemos tener:


useEffect


Custom Hook


Service


para manejar
esas operaciones.


Esto será especialmente
importante en Git2Post.


============================================================
33. REDUCER PURO
============================================================

Idealmente:


function reducer(
    state,
    action
) {


    return newState;

}


Dado el mismo:


state


y:


action


debería producir
el mismo resultado.


Eso hace que sea
mucho más fácil
de entender y testear.


============================================================
34. CONTEXT + REDUCER
============================================================

Ahora combinemos
las dos herramientas.


Context:


comparte.


Reducer:


gestiona.


Entonces:


Context
+
Reducer


puede proporcionar
un estado global
organizado.


============================================================
35. ARQUITECTURA
============================================================

Podemos tener:


Git2PostProvider
│
├── state
│
├── dispatch
│
└── children


Entonces:


Header
Dashboard
Sidebar
RepositoryList


pueden acceder a:


state


y:


dispatch


============================================================
36. EJEMPLO CONCEPTUAL
============================================================

Provider:


const [
    state,
    dispatch
] = useReducer(
    reducer,
    initialState
);


Después:


<Git2PostContext.Provider
    value={{
        state,
        dispatch
    }}
>


    {children}


</Git2PostContext.Provider>


============================================================
37. CONSUMIR
============================================================

Un componente:


RepositoryList


puede hacer:


const {
    state,
    dispatch
} = useContext(
    Git2PostContext
);


Entonces:


state.repositories


y:


dispatch({
    type: "SELECT_REPOSITORY",
    payload: repo
});


============================================================
38. PAYLOAD
============================================================

Una Action puede
llevar información adicional.


Ejemplo:


{
    type: "SELECT_REPOSITORY",

    payload: repo
}


Aquí:

type


dice:

qué ocurrió.


payload


dice:

con qué información
ocurrió.


============================================================
39. ACTION
============================================================

Piensa en Actions
como eventos.


No:


"setRepositories"


sino:


"repositories loaded"


No:


"setSelectedRepository"


sino:


"repository selected"


Este enfoque hace
que el reducer sea
más fácil de razonar.


============================================================
40. REDUCER COMO MÁQUINA
============================================================

Puedes imaginar:


                 ACTION
                    ↓
                REDUCER
                    ↓
STATE ─────────────→ NEW STATE


Ejemplo:


repositories: []


ACTION:


REPOSITORIES_LOADED


payload:


[repo1, repo2]


↓

REDUCER


↓

repositories:
[repo1, repo2]


============================================================
41. CONTEXT + REDUCER NO SIEMPRE
============================================================

No quiero que termines
pensando:


"Todo State debe usar
Context + Reducer."


NO.


Eso sería overengineering.


Una buena aplicación
utiliza la herramienta
adecuada para cada
problema.


============================================================
42. REGLA DE DECISIÓN
============================================================

Pregunta 1:


¿El State es local?


↓

useState


Pregunta 2:


¿El State es complejo?


↓

useReducer


Pregunta 3:


¿Muchos componentes
necesitan acceder
al State?


↓

Context


Pregunta 4:


¿Es complejo Y compartido?


↓

Context + useReducer


============================================================
43. GIT2POST
============================================================

Para Git2Post inicialmente
queremos una estructura
simple.


Por ejemplo:


Git2PostContext


contendrá información
relacionada con la aplicación.


Pero no vamos a meter
TODO allí.


El proyecto debe
seguir siendo fácil
de mantener.


============================================================
44. ¿QUÉ PODRÍA SER GLOBAL?
============================================================

Ejemplos:


currentUser

repositories

selectedRepository

generatedPosts


Dependiendo de cómo
diseñemos la aplicación.


============================================================
45. ¿QUÉ PODRÍA SER LOCAL?
============================================================

Ejemplos:


inputValue

isDropdownOpen

isModalOpen

form validation


Si solo un componente
los necesita:


useState.


============================================================
46. CONTEXT Y RE-RENDERS
============================================================

Hay algo importante.


Cuando cambia el valor
proporcionado por un
Context:


los consumidores
correspondientes pueden
volver a renderizarse.


Por eso no debemos
convertir Context
en un contenedor
gigantesco para
absolutamente todo.


Arquitectura importa.


============================================================
47. SEPARAR CONTEXT
============================================================

En aplicaciones grandes
podemos tener:


AuthContext


ThemeContext


GitHubContext


etc.


Pero debemos hacerlo
cuando realmente
exista una razón.


No por moda.


============================================================
48. CUSTOM PROVIDER
============================================================

Es común crear:


Git2PostProvider


para esconder la
implementación del Context.


Entonces:


<Git2PostProvider>

    <App />

</Git2PostProvider>


Y dentro:


state

dispatch


Esto deja:

main.jsx


mucho más limpio.


============================================================
49. MAIN.JSX
============================================================

Conceptualmente:


createRoot(
    document.getElementById(
        "root"
    )
).render(

    <Git2PostProvider>

        <App />

    </Git2PostProvider>

);


Ahora toda la aplicación
tiene acceso al Context.


============================================================
50. UNA VENTAJA ENORME
============================================================

Sin Context:


App
 ↓
Dashboard
 ↓
Repositories
 ↓
RepositoryCard


con Props.


Con Context:


Git2PostProvider
      │
      ├── Dashboard
      │
      ├── Repositories
      │
      └── RepositoryCard


Los componentes pueden
consumir directamente
el Context.


============================================================
51. PERO...
============================================================

No significa:


"Props desaparecen."


Seguiremos utilizando
Props muchísimo.


Ejemplo:


<RepositoryCard
    repository={repo}
/>


es perfectamente
válido.


Context no reemplaza
Props.


============================================================
52. MODELO MENTAL
============================================================

Piensa así:


Props:

"Te paso este dato."


Context:

"Este dato está disponible
para esta parte de la app."


useState:

"Yo controlo este estado."


useReducer:

"Estas son las reglas
para cambiar este estado."


Context + Reducer:

"Estas son las reglas
para cambiar este estado
compartido."


============================================================
53. GIT2POST
============================================================

Hoy comenzamos
a preparar:


Git2Post


para crecer.


La aplicación tendrá
eventualmente:


Authentication


GitHub API


Repositories


Commits


AI generation


Posts


History


Settings


etc.


No vamos a construir
todo hoy.


Vamos a construir
la arquitectura correcta
para poder hacerlo.


============================================================
54. CHECKPOINT
============================================================

Antes de cerrar
debes poder responder:


¿Qué es Prop Drilling?


¿Por qué puede ser
un problema?


¿Qué es Context?


¿Qué es Provider?


¿Qué hace useContext()?


¿Cuándo usar Props?


¿Cuándo usar Context?


¿Qué es useReducer?


¿Qué es un reducer?


¿Qué es una Action?


¿Qué hace dispatch()?


¿Qué es payload?


¿Por qué un reducer
debe ser predecible?


¿Por qué no hacemos
fetch dentro del reducer?


¿Qué significa
inmutabilidad?


¿Cuándo usar useState?


¿Cuándo usar useReducer?


¿Cuándo usar Context?


¿Cuándo combinar
Context + useReducer?


============================================================
55. PREGUNTA CLAVE
============================================================

Si mañana te preguntan:


"¿Por qué usarías
Context + useReducer
en lugar de varios
useState?"


Una buena respuesta sería:


"Because the state is shared
across multiple components
and has multiple state
transitions that are easier
to manage through centralized
actions and a reducer."


No necesitas memorizar
esa frase.


Debes entender
el concepto.


============================================================
FIN DE TEORÍA
============================================================
*/