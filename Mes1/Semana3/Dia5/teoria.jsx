/*
============================================================
SEMANA 3 — DÍA 5
REACT FUNDAMENTALS
============================================================

TEMAS:

1. Conditional Rendering
2. Operador ternario
3. Operador &&
4. Renderizado alternativo
5. Lists
6. map()
7. Keys
8. Por qué React necesita keys
9. Forms
10. State de formularios
11. Lifting State Up
12. Compartir State
13. Flujo de datos en React
14. Parent → Child
15. Child → Parent mediante callbacks
16. Props + State
17. Arquitectura de DevPulse
18. Errores comunes
19. Modelo mental completo


============================================================
1. CONDITIONAL RENDERING
============================================================

Conditional Rendering significa:

"Mostrar diferentes elementos
dependiendo de una condición."


Por ejemplo:


isOnline


Si:


isOnline === true


mostramos:


🟢 Online


Si:


isOnline === false


mostramos:


🔴 Offline


La UI depende del State.


============================================================
2. ¿POR QUÉ ES IMPORTANTE?
============================================================

Una aplicación real
constantemente tiene estados.


Por ejemplo:


Usuario autenticado
Usuario no autenticado


Datos cargando
Datos cargados


Error
Sin error


Lista vacía
Lista con datos


Usuario encontrado
Usuario no encontrado


Por eso una aplicación
no puede mostrar siempre
la misma UI.


La UI debe reaccionar
al estado de la aplicación.


============================================================
3. OPERADOR TERNARIO
============================================================

Una forma muy común
de hacer Conditional Rendering
es el operador ternario.


Sintaxis:


condition
    ? true
    : false


Ejemplo:


{isOnline
    ? <p>🟢 Online</p>
    : <p>🔴 Offline</p>
}


Significa:


Si isOnline es true:

mostrar Online.


Si es false:

mostrar Offline.


============================================================
4. EJEMPLO
============================================================

Tenemos:


const [isFollowing, setIsFollowing] =
    useState(false);


Podemos mostrar:


{isFollowing
    ? "Following"
    : "Follow"
}


Cuando:


isFollowing = false


vemos:


Follow


Cuando:


isFollowing = true


vemos:


Following


La UI depende del State.


============================================================
5. OPERADOR &&
============================================================

Otra forma común:


&&


Ejemplo:


{isOnline && (
    <p>🟢 Online</p>
)}


Significa:


"Si isOnline es true,
muestra esto."


Si:


isOnline = false


no se renderiza
ese elemento.


============================================================
6. TERNARIO VS &&
============================================================

Ternario:


condition
    ? A
    : B


Se utiliza cuando
tenemos dos posibilidades.


Por ejemplo:


Online
vs
Offline


Mientras:


condition && A


se utiliza cuando
solamente queremos mostrar
algo si una condición
se cumple.


Por ejemplo:


isAdmin && <AdminPanel />


============================================================
7. CONDITIONAL RENDERING
============================================================

También podemos utilizar
if statements.


Por ejemplo:


if (!user) {

    return <p>No user</p>;

}


return <Profile />;


Esto es especialmente útil
cuando la lógica es más compleja.


No todo debe hacerse
con ternarios.


============================================================
8. LISTS
============================================================

Supongamos que tenemos:


const technologies = [

    "JavaScript",

    "React",

    "Node.js"

];


Queremos mostrar:


JavaScript

React

Node.js


Podríamos escribir
manualmente:


<p>JavaScript</p>

<p>React</p>

<p>Node.js</p>


Pero esto no escala.


¿Qué pasa si tenemos:


100 technologies?


No vamos a escribir
100 elementos manualmente.


Aquí utilizamos:


map()


============================================================
9. map()
============================================================

map() permite transformar
cada elemento de un array.


Ejemplo:


technologies.map(
    technology => ...
)


Podemos crear JSX:


{technologies.map(
    technology => (
        <p>{technology}</p>
    )
)}


React renderizará
un elemento por cada
elemento del array.


============================================================
10. MODELO MENTAL DE MAP
============================================================

Tenemos:


[
    "JavaScript",
    "React",
    "Node.js"
]


map()


↓

Elemento 1:

JavaScript


↓

JSX


Elemento 2:

React


↓

JSX


Elemento 3:

Node.js


↓

JSX


Resultado:

JavaScript
React
Node.js


============================================================
11. ¿QUÉ ES UNA KEY?
============================================================

Cuando renderizamos
listas en React:


{technologies.map(
    technology => (
        <p>
            {technology}
        </p>
    )
)}


React necesita una:

key


Ejemplo:


<p key={technology}>
    {technology}
</p>


La key identifica
ese elemento dentro
de la lista.


============================================================
12. ¿POR QUÉ REACT NECESITA KEY?
============================================================

React necesita saber
qué elemento corresponde
a qué elemento.


Supongamos:


A
B
C


Después:


A
C
D


React necesita entender:


A → sigue siendo A


B → desapareció


C → sigue siendo C


D → apareció


Las keys ayudan a React
a identificar estos elementos.


============================================================
13. KEY DEBE SER ESTABLE
============================================================

Idealmente:


id


Por ejemplo:


repositories.map(repo => (

    <Repository
        key={repo.id}
        {...repo}
    />

))


Porque:


repo.id


es estable.


============================================================
14. ¿POR QUÉ NO INDEX?
============================================================

Podemos hacer:


key={index}


Pero puede provocar problemas
cuando una lista cambia
de posición, se agregan
elementos o se eliminan.


Ejemplo:


A
B
C


Si eliminamos A:


B
C


Los índices cambian.


Por eso cuando existe
un ID estable:


key={item.id}


es preferible.


============================================================
15. FORMS
============================================================

Ya trabajamos forms
en el Día 4.


Hoy vamos a conectarlos
con Lists y State.


Supongamos:


technologies


es un array.


Tenemos:


[
    "JavaScript",
    "React"
]


El usuario escribe:


TypeScript


y envía:


form


Entonces debemos:


1. Obtener input.


2. Actualizar State.


3. Agregar elemento
   al array.


4. React renderiza
   nuevamente la lista.


============================================================
16. NO MUTAR STATE
============================================================

Tenemos:


const [technologies,
       setTechnologies] =
       useState([
           "JavaScript",
           "React"
       ]);


Incorrecto:


technologies.push("Node.js");


¿Por qué?


Porque estás modificando
directamente el array
que está en State.


React espera que actualicemos
el State mediante su setter.


============================================================
17. CREAR UN NUEVO ARRAY
============================================================

Correcto:


setTechnologies(
    previous => [
        ...previous,
        "Node.js"
    ]
);


Aquí:


...previous


copia los elementos
existentes.


Después agregamos:


"Node.js"


Resultado:


[
    "JavaScript",
    "React",
    "Node.js"
]


Tenemos un nuevo array.


============================================================
18. ¿QUÉ ES INMUTABILIDAD?
============================================================

En React generalmente
no modificamos directamente
el State.


En lugar de:


modificar objeto existente


hacemos:


crear nuevo objeto.


En arrays:


crear nuevo array.


En objetos:


crear nuevo objeto.


Esto permite que React
detecte correctamente
los cambios.


============================================================
19. LIFTING STATE UP
============================================================

Ahora viene uno de
los conceptos más importantes
del día.


Supongamos:


App


tiene:


technologies


Pero:


TechnologyForm


necesita agregar
una tecnología.


El State no necesariamente
debe vivir dentro
de TechnologyForm.


Podemos subirlo:


App
│
├── Technologies
│
└── TechnologyForm


El State vive en:


App


Y ambos componentes
reciben lo necesario.


============================================================
20. ¿POR QUÉ SUBIR STATE?
============================================================

Porque ambos componentes
necesitan acceder
al mismo dato.


Por ejemplo:


Technologies


necesita:


technologies


TechnologyForm


necesita:


setTechnologies


Entonces podemos poner
el State en su ancestro
común:


App


============================================================
21. PARENT → CHILD
============================================================

Los datos normalmente
fluyen:


Parent
 ↓
Child


mediante:


Props


Ejemplo:


<App />


renderiza:


<Profile
    name={name}
/>


Profile recibe:


function Profile({ name }) {

}


Esto es:

Parent → Child.


============================================================
22. CHILD → PARENT
============================================================

React no tiene
un flujo directo:

Child → Parent


como tal.


Pero podemos conseguir
la comunicación mediante
una función.


Parent:


function handleAddTechnology(
    technology
) {

    setTechnologies(
        previous => [
            ...previous,
            technology
        ]
    );

}


Después:


<TechnologyForm
    onAddTechnology={
        handleAddTechnology
    }
/>


Child:


function TechnologyForm({
    onAddTechnology
}) {

}


Y cuando ocurre:


onAddTechnology("TypeScript");


la función del Parent
se ejecuta.


============================================================
23. CALLBACK PROPS
============================================================

Una función pasada
como Prop suele utilizarse
como callback.


Ejemplo:


<Child
    onAction={handleAction}
/>


Child:


<button
    onClick={onAction}
>
    Action
</button>


Entonces:


Child
 ↓
callback
 ↓
Parent function
 ↓
State update


Esto es fundamental
para Lifting State Up.


============================================================
24. FLUJO COMPLETO
============================================================

Tenemos:


App
│
├── Technologies
│
└── TechnologyForm


State:


technologies


vive en:


App


App pasa:


technologies


a:


Technologies


App pasa:


onAddTechnology


a:


TechnologyForm


Usuario:


TypeScript


↓

TechnologyForm


↓

onAddTechnology(
    "TypeScript"
)


↓

App


↓

setTechnologies()


↓

State actualizado


↓

App re-render


↓

Technologies recibe
nuevo array


↓

UI actualizada.


============================================================
25. ESTO ES IMPORTANTÍSIMO
============================================================

El flujo es:


USER
 ↓
CHILD
 ↓
CALLBACK PROP
 ↓
PARENT
 ↓
STATE UPDATE
 ↓
RE-RENDER
 ↓
CHILD
 ↓
NEW PROPS
 ↓
UPDATED UI


Este patrón aparecerá
constantemente en React.


============================================================
26. SINGLE SOURCE OF TRUTH
============================================================

Cuando varios componentes
necesitan el mismo dato,
queremos evitar tener
copias independientes.


Por ejemplo:


App


tiene:


technologies


No queremos:


App → technologies

TechnologyForm → technologies

Technologies → technologies


tres States diferentes.


Queremos:


App → technologies


y los componentes
consumen ese dato.


Esto crea una:

Single Source of Truth.


============================================================
27. DEV PULSE
============================================================

Nuestro árbol:


App
│
├── Header
│
├── SearchBar
│
├── ProfileCard
│
│   ├── FollowButton
│   └── Status
│
├── Stats
│
└── Technologies
    │
    └── TechnologyForm


Hoy vamos a comenzar
a mover algunos States
a lugares más apropiados.


============================================================
28. ¿DÓNDE DEBE VIVIR STATE?
============================================================

Pregunta:


¿Quién necesita este State?


Si solamente un componente
lo necesita:


puede vivir allí.


Si varios hermanos
lo necesitan:


subimos el State
al Parent común.


Ejemplo:


SearchBar
Profile


necesitan:


search


Entonces posiblemente:


App


sea el lugar apropiado.


============================================================
29. NO SUBAS TODO
============================================================

Lifting State Up
NO significa:


"Todos los States
deben vivir en App."


Eso sería incorrecto.


Cada State debe vivir
lo más cerca posible
de donde se necesita.


Solamente lo subimos
cuando otros componentes
necesitan compartirlo.


============================================================
30. CONDITIONAL + LISTS
============================================================

Podemos combinar ambos.


Por ejemplo:


Si no hay tecnologías:


"No technologies yet"


Si existen:


renderizar lista.


Conceptualmente:


technologies.length === 0

        ↓

"No technologies"


else

        ↓

technologies.map(...)


Esto es muy común
en aplicaciones reales.


============================================================
31. EMPTY STATES
============================================================

Una lista vacía
también es un estado.


Por ejemplo:


Repositories


puede tener:


0 repos


En lugar de dejar
un espacio vacío:


No repositories found.


Esto mejora
la experiencia del usuario.


============================================================
32. DEV PULSE
============================================================

Nuestro proyecto ahora
tendrá varios estados.


SEARCH:

search


SUBMITTED:

submittedSearch


PROFILE:

user data


FOLLOW:

isFollowing


STATUS:

isOnline


TECHNOLOGIES:

technologies


Esto empieza a parecer
una aplicación real.


============================================================
33. ERROR COMÚN
============================================================

No hagas:


const [technologies,
       setTechnologies] =
       useState(...);


dentro de:


Technologies


y otra copia dentro de:


TechnologyForm


Eso crea dos fuentes
de verdad.


En su lugar:


App


puede controlar:


technologies


y pasar:


technologies


y:


onAddTechnology


============================================================
34. OTRO ERROR
============================================================

No hagas:


setTechnologies(
    technologies.push(
        "React"
    )
);


Porque:


push()


devuelve la longitud
del array.


Además estás mutando
el State.


Utiliza:


setTechnologies(
    previous => [
        ...previous,
        "React"
    ]
);


============================================================
35. FILTER
============================================================

Aunque hoy el objetivo
principal es map(),
también debes conocer:


filter()


Por ejemplo:


setTechnologies(
    previous =>
        previous.filter(
            technology =>
                technology !== "React"
        )
);


Esto crea un nuevo array
sin React.


Será útil para
eliminar tecnologías.


============================================================
36. MAP VS FILTER
============================================================

map()


transforma elementos.


Ejemplo:


["JS", "React"]


↓

["JavaScript", "React"]


filter()


elimina elementos
que no cumplen
una condición.


Ejemplo:


["JS", "React", "CSS"]


↓

["JS", "CSS"]


Son herramientas
fundamentales para trabajar
con listas en React.


============================================================
37. MODELO MENTAL
============================================================

Quiero que entiendas:


STATE


contiene los datos.


PROPS


transportan datos.


EVENTS


detectan interacción.


CALLBACKS


permiten comunicar
acciones hacia el Parent.


RENDER


convierte State + Props
en UI.


============================================================
38. DEV PULSE — FLUJO
============================================================

Usuario escribe:


TypeScript


↓

TechnologyForm


↓

onChange


↓

form State


↓

onSubmit


↓

onAddTechnology()


↓

App


↓

setTechnologies()


↓

technologies actualizado


↓

App re-render


↓

Technologies recibe
nuevo Prop


↓

map()


↓

TypeScript aparece.


Este flujo es uno
de los principales
patrones que debes dominar
antes de entrar a React
Intermedio.


============================================================
39. CHECKPOINT
============================================================

Antes de terminar
debes poder explicar:

1. ¿Qué es Conditional Rendering?

2. ¿Cuándo utilizar ternario?

3. ¿Cuándo utilizar &&?

4. ¿Qué hace map()?

5. ¿Qué es una key?

6. ¿Por qué las keys
   deben ser estables?

7. ¿Por qué evitar
   index como key
   cuando existe un ID?

8. ¿Por qué no debemos
   mutar State?

9. ¿Qué es Lifting State Up?

10. ¿Por qué subir State?

11. ¿Qué es un callback Prop?

12. ¿Cómo puede un Child
    provocar un cambio
    en el Parent?

13. ¿Qué significa
    Single Source of Truth?

14. ¿Dónde debería vivir
    un State?

15. ¿Qué diferencia existe
    entre map() y filter()?


Si puedes explicar
todo esto sin mirar:

🔥 DÍA 5 COMPLETADO.


============================================================
FIN DE TEORÍA
============================================================
*/