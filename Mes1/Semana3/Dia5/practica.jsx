/*
============================================================
SEMANA 3 — DÍA 5
PROYECTO 1 — DEVPULSE
PRACTICA COMPLETA
============================================================

OBJETIVO

Hoy vamos a mejorar DevPulse utilizando:

✓ Conditional Rendering
✓ Lists
✓ map()
✓ key
✓ Forms
✓ Lifting State Up
✓ Callback Props
✓ Single Source of Truth
✓ Immutable State


NO CREES OTRO PROYECTO.

TODO SE HACE DENTRO DE:

devpulse/


============================================================
FASE 1 — CHECKPOINT
============================================================

Antes de comenzar:

[ ] DevPulse inicia correctamente.

[ ] Search funciona.

[ ] Follow funciona.

[ ] Followers funciona.

[ ] Online/Offline funciona.

[ ] Technologies funciona.

[ ] Puedes agregar tecnologías.

[ ] No tienes errores en consola.


Si algo está roto desde
el Día 4:

ARRÉGLALO ANTES
DE CONTINUAR.


============================================================
FASE 2 — REVISAR TECHNOLOGIES
============================================================

Tu objetivo es que las tecnologías
vengan de un Array.


Ejemplo:


const technologies = [

    {
        id: 1,
        name: "JavaScript"
    },

    {
        id: 2,
        name: "React"
    },

    {
        id: 3,
        name: "Node.js"
    }

];


IMPORTANTE:

Si actualmente utilizas:


[
    "JavaScript",
    "React"
]


NO NECESITAS cambiar
obligatoriamente a objetos
si todavía no lo necesitas.


Pero para el proyecto final
sería recomendable tener
IDs estables.


============================================================
FASE 3 — RENDERIZAR LISTA
============================================================

En:

Technologies.jsx


renderiza el array
utilizando:


map()


NO escribas manualmente:


<p>JavaScript</p>

<p>React</p>

<p>Node.js</p>


La UI debe salir
del array.


RESULTADO:


JavaScript

React

Node.js


deben aparecer
porque existen
en el array.


============================================================
FASE 4 — KEY
============================================================

Cada elemento generado
por map()
debe tener una:


key


Si utilizas objetos:


key={technology.id}


Si temporalmente
utilizas strings:


key={technology}


IMPORTANTE:

Entiende por qué
estás utilizando
esa key.


NO pongas:


key={Math.random()}


Porque cambia
constantemente.


============================================================
FASE 5 — TECHNOLOGY COMPONENT
============================================================

Puedes crear:


TechnologyItem.jsx


para representar
una tecnología.


Arquitectura:


Technologies
│
├── TechnologyItem
├── TechnologyItem
└── TechnologyItem


Por ejemplo:


JavaScript

React

Node.js


Cada item recibe
la información mediante:


Props.


OBJETIVO:

Practicar:


Array
 ↓
map()
 ↓
Component
 ↓
Props


============================================================
FASE 6 — EMPTY STATE
============================================================

Ahora implementa
Conditional Rendering.


Si:


technologies.length === 0


mostrar:


No technologies yet.


Si existen tecnologías:


mostrar la lista.


Resultado:


Sin tecnologías:


Technologies

No technologies yet.


Con tecnologías:


Technologies

JavaScript
React
Node.js


============================================================
FASE 7 — MOVER TECHNOLOGIES STATE
============================================================

Ahora viene
Lifting State Up.


Queremos que:


App


sea responsable
del State:


technologies


Por ejemplo:


App

    technologies

    setTechnologies


No copies literalmente
si tu arquitectura
es diferente.


La idea es:


App owns the data.


============================================================
FASE 8 — TECHNOLOGIES RECIBE PROPS
============================================================

Ahora:


App


debe pasar:


technologies


a:


Technologies


Conceptualmente:


<Technologies
    technologies={technologies}
/>


Entonces:


Technologies


ya NO necesita
tener su propia copia
del State.


Debe recibir
la información
por Props.


============================================================
FASE 9 — TECHNOLOGY FORM
============================================================

Ahora:


TechnologyForm


debe encargarse
solamente del formulario.


Debe tener:


input


button


form


State local para
el valor que el usuario
está escribiendo.


Por ejemplo:


technologyName


Ese State pertenece
al formulario porque
solamente el formulario
lo necesita mientras
el usuario escribe.


Esto es un buen ejemplo
de State local.


============================================================
FASE 10 — CALLBACK
============================================================

Ahora:


App


tiene:


handleAddTechnology


Esta función debe recibir
el nombre de una nueva
tecnología.


Conceptualmente:


handleAddTechnology(name)


y debe actualizar:


technologies


IMPORTANTE:

La función debe estar
en el Parent.


============================================================
FASE 11 — PASAR CALLBACK
============================================================

App:


<TechnologyForm
    onAddTechnology={
        handleAddTechnology
    }
/>


Ahora:


TechnologyForm


recibe:


onAddTechnology


como Prop.


Cuando el usuario envíe
el formulario:


TechnologyForm


ejecutará:


onAddTechnology(
    technologyName
);


Eso provoca:


Child
 ↓
callback
 ↓
Parent
 ↓
State update


============================================================
FASE 12 — ACTUALIZAR ARRAY
============================================================

Cuando llegue una nueva
tecnología:


NO:


technologies.push(name)


Utiliza el setter
del State de forma
inmutable.


Resultado esperado:


Antes:


[
    JavaScript,
    React,
    Node.js
]


Usuario agrega:


TypeScript


Después:


[
    JavaScript,
    React,
    Node.js,
    TypeScript
]


============================================================
FASE 13 — LIMPIAR FORM
============================================================

Después de agregar
la tecnología:


TypeScript


el input debería
quedar vacío.


Por ejemplo:


Antes submit:


[ TypeScript ]


Después:


[              ]


Esto lo haces
actualizando el State
local del formulario.


============================================================
FASE 14 — VALIDACIÓN
============================================================

No permitas:


""


ni:


"   "


Utiliza:


trim()


Si el usuario intenta
agregar algo vacío:


NO debe aparecer
una nueva tecnología.


============================================================
FASE 15 — DUPLICADOS
============================================================

Ahora piensa:


¿Qué ocurre si agrego:


React


cuando React ya existe?


No queremos:


JavaScript
React
Node.js
React


Implementa una validación
para evitar duplicados.


Puedes hacer la comprobación
en el Parent, donde vive
la fuente de verdad.


La lógica conceptual:


¿Ya existe?


YES
 ↓
No agregar.


NO
 ↓
Agregar.


============================================================
FASE 16 — CONDITIONAL FOLLOW
============================================================

Revisa:


FollowButton


Debe mostrar:


isFollowing === false

→ Follow


isFollowing === true

→ Following


Utiliza Conditional Rendering.


No tengas dos botones
completamente diferentes
si solamente cambia
el texto.


============================================================
FASE 17 — CONDITIONAL STATUS
============================================================

Revisa:


Status


Debe mostrar:


isOnline

→ 🟢 Online


false

→ 🔴 Offline


Utiliza Conditional Rendering.


============================================================
FASE 18 — PROFILE STATES
============================================================

Ahora piensa en los
diferentes estados
de DevPulse.


Tenemos:


Following

Not Following


Online

Offline


Technologies

No Technologies


Search

No Search


Esto es:

Conditional UI.


No siempre existe
una única interfaz.


============================================================
FASE 19 — OPTIONAL REMOVE
============================================================

Si terminas rápido,
implementa:


Remove Technology


Cada tecnología
puede tener:


[ Delete ]


Al hacer click:


TechnologyItem


debe ejecutar
un callback:


onDelete


El Parent elimina
la tecnología del array.


Utiliza:


filter()


IMPORTANTE:

Esta fase es opcional.


Si todavía no dominas
lo anterior:


NO avances.


Primero domina
Lifting State Up.


============================================================
FASE 20 — ARQUITECTURA FINAL
============================================================

Tu estructura debería
aproximarse a:


devpulse/

└── src/

    ├── components/

    │   ├── Header.jsx
    │   │
    │   ├── SearchBar.jsx
    │   │
    │   ├── ProfileCard.jsx
    │   │
    │   ├── FollowButton.jsx
    │   │
    │   ├── Status.jsx
    │   │
    │   ├── Stats.jsx
    │   │
    │   ├── Technologies.jsx
    │   │
    │   ├── TechnologyItem.jsx
    │   │
    │   └── TechnologyForm.jsx
    │
    ├── App.jsx
    │
    ├── main.jsx
    │
    └── index.css


NO necesitas crear
componentes adicionales
si no tienen sentido.


============================================================
FASE 21 — FLUJO DE TECHNOLOGIES
============================================================

Debes poder dibujar
este flujo:


USER

"TypeScript"


↓

TechnologyForm


↓

onChange


↓

technologyName State


↓

submit


↓

onAddTechnology()


↓

App


↓

handleAddTechnology()


↓

setTechnologies()


↓

technologies actualizado


↓

App re-render


↓

Technologies


↓

map()


↓

TechnologyItem


↓

TypeScript


============================================================
FASE 22 — PRUEBA COMPLETA
============================================================

TEST 1

Eliminar todas
las tecnologías.


RESULTADO:


No technologies yet.


------------------------------------------------------------

TEST 2

Agregar:


React


RESULTADO:


React


------------------------------------------------------------

TEST 3

Agregar:


TypeScript


RESULTADO:


React
TypeScript


------------------------------------------------------------

TEST 4

Intentar agregar:


"   "


RESULTADO:


No se agrega.


------------------------------------------------------------

TEST 5

Intentar agregar:


React


nuevamente.


RESULTADO:


No se duplica.


------------------------------------------------------------

TEST 6

Click Follow.


RESULTADO:


Following


------------------------------------------------------------

TEST 7

Click nuevamente.


RESULTADO:


Follow


------------------------------------------------------------

TEST 8

Cambiar estado.


RESULTADO:


🟢 Online


↕


🔴 Offline


------------------------------------------------------------

TEST 9

Buscar:


torvalds


RESULTADO:


Searching for:
torvalds


------------------------------------------------------------

TEST 10

Recargar página.


RESULTADO:

La aplicación funciona
sin errores.


NOTA:

Todavía no esperamos
persistencia de datos.


Eso NO es el objetivo
de este proyecto.


============================================================
FASE 23 — REFACTOR
============================================================

Ahora revisa tu código.


Pregúntate:


¿Dónde vive technologies?


¿Quién lo necesita?


¿Quién puede modificarlo?


¿TechnologyForm necesita
conocer directamente
el array?


¿Technologies necesita
modificar el array?


¿Estoy pasando funciones
mediante Props?


¿Estoy mutando State?


¿Estoy utilizando
keys estables?


¿Mis componentes tienen
responsabilidades claras?


============================================================
FASE 24 — DEBUGGING
============================================================

Antes de usar IA:


1. Lee el error.


2. Mira la consola.


3. Identifica el componente.


4. Haz console.log.


5. Comprueba Props.


6. Comprueba State.


7. Comprueba el evento.


8. Comprueba el flujo:


Child
 ↓
callback
 ↓
Parent
 ↓
State
 ↓
UI


Si el flujo se rompe,
ahí está probablemente
el problema.


============================================================
🔥 RETO FINAL DEL DÍA 5
============================================================

DevPulse debería poder
hacer esto:


                DevPulse

        Search GitHub Developer

        [ torvalds ]

        [ Search ]


        Zenen Contreras
        Software Engineer

        🟢 Online

        Followers: 1250

        [ Following ]


        Technologies

        ┌──────────────────────┐
        │ JavaScript      [x]  │
        ├──────────────────────┤
        │ React           [x]  │
        ├──────────────────────┤
        │ Node.js         [x]  │
        └──────────────────────┘


        [ TypeScript        ]

        [ Add Technology ]


        Searching for:
        torvalds


============================================================
CHECKLIST FINAL
============================================================

[ ] Utilicé map().

[ ] Entiendo map().

[ ] Utilicé keys.

[ ] Entiendo por qué
    utilizo keys.

[ ] Implementé
    Conditional Rendering.

[ ] Implementé Empty State.

[ ] TechnologyForm tiene
    State local.

[ ] technologies vive
    en el Parent apropiado.

[ ] Technologies recibe
    technologies mediante Props.

[ ] TechnologyForm recibe
    callback mediante Props.

[ ] Child puede provocar
    un cambio en Parent.

[ ] No muté arrays.

[ ] Utilicé actualización
    inmutable del State.

[ ] Evité tecnologías
    duplicadas.

[ ] El proyecto sigue
    funcionando.

[ ] Entiendo el flujo
    completo de datos.


============================================================
RESULTADO DEL DÍA 5
============================================================

Ahora DevPulse tiene:

✓ JSX
✓ Components
✓ Props
✓ useState
✓ Events
✓ Forms
✓ Controlled Inputs
✓ Conditional Rendering
✓ Lists
✓ map()
✓ Keys
✓ Lifting State Up
✓ Callback Props
✓ Immutable State
✓ Component Architecture


Y está listo para
el último gran paso:

DÍA 6

API + useEffect


============================================================
FIN DE PRÁCTICA
============================================================
*/