/*
============================================================
SEMANA 3 — DÍA 2
PRÁCTICA
PROPS
============================================================

REGLAS:

1. Resuelve primero sin IA.
2. No copies las soluciones.
3. Ejecuta cada ejercicio.
4. Lee los errores.
5. Debuggea antes de pedir ayuda.
6. Después de cada ejercicio,
   explica qué está pasando.


============================================================
EJERCICIO 1 — PRIMERA PROP
============================================================

Crea:

User


Debe recibir una prop:

name


Desde App envía:

"Zenen"


RESULTADO ESPERADO:

Zenen
*/


// ============================================================
// EJERCICIO 2 — DOS PROPS
// ============================================================

/*
User debe recibir:

name
role


Desde App:

name = "Zenen"
role = "Software Engineer"


RESULTADO ESPERADO:

Zenen
Software Engineer
*/


// ============================================================
// EJERCICIO 3 — TRES PROPS
// ============================================================

/*
Crea:

ProfileCard


Props:

name
role
location


RESULTADO ESPERADO:

Zenen Contreras
Software Engineer
Colombia
*/


// ============================================================
// EJERCICIO 4 — DESTRUCTURING
// ============================================================

/*
Reescribe el ejercicio anterior
utilizando destructuring.


NO debes utilizar:

props.name
props.role
props.location


Debes recibir directamente:

{name, role, location}


RESULTADO ESPERADO:

Zenen Contreras
Software Engineer
Colombia
*/


// ============================================================
// EJERCICIO 5 — NUMBER
// ============================================================

/*
Crea:

Stats


Recibe:

followers


Envía:

1250


RESULTADO ESPERADO:

Followers: 1250


IMPORTANTE:

followers debe ser un NUMBER,
no un string.
*/


// ============================================================
// EJERCICIO 6 — VARIOS NUMBERS
// ============================================================

/*
Stats debe recibir:

repositories
followers
following


Valores:

42
1250
80


RESULTADO ESPERADO:

Repositories: 42
Followers: 1250
Following: 80
*/


// ============================================================
// EJERCICIO 7 — BOOLEAN
// ============================================================

/*
Crea:

Status


Recibe:

isOnline


Si es true:

Online


Si es false:

Offline


Prueba ambos casos.


RESULTADO ESPERADO CASO 1:

Online


RESULTADO ESPERADO CASO 2:

Offline
*/


// ============================================================
// EJERCICIO 8 — BOOLEAN SHORTCUT
// ============================================================

/*
Utiliza la sintaxis:

<Status isOnline />


¿Qué valor recibe?

RESULTADO ESPERADO:

Online


Después elimina:

isOnline


y observa qué ocurre.


El objetivo es entender
el comportamiento booleano.
*/


// ============================================================
// EJERCICIO 9 — ARRAY COMO PROP
// ============================================================

/*
Crea:

Technologies


Recibe:

technologies


Desde App envía:

[
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL"
]


Utiliza:

map()


para mostrar una lista.


RESULTADO ESPERADO:

JavaScript
React
Node.js
PostgreSQL
*/


// ============================================================
// EJERCICIO 10 — OBJECT COMO PROP
// ============================================================

/*
Crea:

const user = {

    name: "Zenen",
    role: "Software Engineer",
    country: "Colombia"

};


Envía el objeto a:

UserCard


RESULTADO ESPERADO:

Zenen
Software Engineer
Colombia


Debes acceder a los valores
desde el objeto recibido.
*/


// ============================================================
// EJERCICIO 11 — MULTIPLES USERS
// ============================================================

/*
Crea:

UserCard


y utiliza el mismo componente
3 veces:


Usuario 1:

Zenen
Software Engineer


Usuario 2:

Carlos
Data Scientist


Usuario 3:

Maria
UX Designer


RESULTADO ESPERADO:

Zenen
Software Engineer

Carlos
Data Scientist

Maria
UX Designer


IMPORTANTE:

Solo debes crear
UN componente UserCard.
*/


// ============================================================
// EJERCICIO 12 — ARRAY DE OBJECTS
// ============================================================

/*
Crea:


const users = [

    {
        id: 1,
        name: "Zenen",
        role: "Software Engineer"
    },

    {
        id: 2,
        name: "Carlos",
        role: "Data Scientist"
    },

    {
        id: 3,
        name: "Maria",
        role: "UX Designer"
    }

];


Utiliza:

map()


para crear:

<UserCard />


para cada usuario.


RESULTADO ESPERADO:

Zenen
Software Engineer

Carlos
Data Scientist

Maria
UX Designer
*/


// ============================================================
// EJERCICIO 13 — KEY
// ============================================================

/*
Utilizando el ejercicio anterior:

UserCard


debe recibir:

id
name
role


Utiliza:

key={user.id}


para renderizar la lista.


RESULTADO ESPERADO:

Los tres usuarios aparecen
correctamente y React no debe
mostrar el warning de keys.
*/


// ============================================================
// EJERCICIO 14 — DEBUGGING
// ============================================================

/*
Encuentra el error:


function UserCard(name) {

    return (
        <h2>
            {name}
        </h2>
    );

}


function App() {

    return (
        <UserCard name="Zenen" />
    );

}


RESULTADO ESPERADO:

Zenen


Pero primero debes entender
por qué el código original
no funciona correctamente.
*/


// ============================================================
// EJERCICIO 15 — DEBUGGING NUMBER
// ============================================================

/*
Tenemos:


function Stats({ followers }) {

    return (
        <p>
            Followers: {followers}
        </p>
    );

}


Y:


<Stats followers="1250" />


Corrígelo para que:

followers


sea un number.


RESULTADO ESPERADO:

Followers: 1250


Y conceptualmente:

typeof followers

debe ser:

"number"
*/


// ============================================================
// EJERCICIO 16 — PROPS + CALCULATION
// ============================================================

/*
Crea:

Price


Recibe:

price
quantity


Ejemplo:


price = 20
quantity = 3


Muestra:


Total: $60


El total debe calcularse
utilizando JavaScript.


RESULTADO ESPERADO:

Total: $60
*/


// ============================================================
// EJERCICIO 17 — PROPS + DEFAULT VALUE
// ============================================================

/*
Crea:

UserCard


que reciba:

name


Si no se proporciona name,
utiliza:

"Unknown User"


Investiga cómo establecer
un valor por defecto
mediante destructuring.


Caso 1:


<UserCard name="Zenen" />


RESULTADO ESPERADO:

Zenen


Caso 2:


<UserCard />


RESULTADO ESPERADO:

Unknown User
*/


// ============================================================
// EJERCICIO 18 — CHILDREN
// ============================================================

/*
Crea:

Card


Debe aceptar:

children


Utiliza:


<Card>

    <h2>
        Zenen
    </h2>

    <p>
        Software Engineer
    </p>

</Card>


RESULTADO ESPERADO:

Zenen
Software Engineer


El componente Card
debe ser reutilizable.
*/


// ============================================================
// EJERCICIO 19 — CHILDREN + VARIAS CARDS
// ============================================================

/*
Utiliza el mismo:

Card


para crear:


Card 1:

Developer


Card 2:

Projects


Card 3:

Technologies


RESULTADO ESPERADO:

Developer

Projects

Technologies


Solo debe existir
un componente Card.
*/


// ============================================================
// EJERCICIO 20 — FUNCTION COMO PROP
// ============================================================

/*
Crea:

Button


Debe recibir:

onClick


Desde App crea una función:


handleClick


que haga:


console.log("Button clicked");


Pasa la función mediante props.


RESULTADO ESPERADO:

Al hacer click:

Button clicked


debe aparecer en la consola.
*/


// ============================================================
// 🔥 RETO DEV PULSE — DÍA 2
// ============================================================

/*
Ahora vamos a modificar
el proyecto DevPulse.


AYER:

Los datos estaban escritos
directamente dentro
de los componentes.


HOY:

Todos esos datos deben
llegar mediante PROPS.


============================================================
PROFILE CARD
============================================================

Crea:


<ProfileCard
    name="Zenen Contreras"
    role="Software Engineer"
    location="Colombia"
/>


RESULTADO ESPERADO:

Zenen Contreras
Software Engineer
Colombia


============================================================
STATS
============================================================

Crea:


<Stats
    repositories={42}
    followers={1250}
    following={80}
/>


RESULTADO ESPERADO:

Repositories: 42
Followers: 1250
Following: 80


============================================================
TECHNOLOGIES
============================================================

Crea:


const technologies = [

    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL"

];


Pasa el array como prop:


<Technologies
    technologies={technologies}
/>


RESULTADO ESPERADO:

JavaScript
React
Node.js
PostgreSQL


============================================================
USER PROFILE
============================================================

Crea un objeto:


const user = {

    name: "Zenen Contreras",

    role: "Software Engineer",

    location: "Colombia",

    followers: 1250

};


Pásalo a:

<ProfileCard />


Utilizando una prop:

user


RESULTADO ESPERADO:

Zenen Contreras
Software Engineer
Colombia
Followers: 1250


============================================================
RETO EXTRA
============================================================

Crea un array:


const developers = [

    {
        id: 1,
        name: "Zenen",
        role: "Software Engineer"
    },

    {
        id: 2,
        name: "Carlos",
        role: "Data Scientist"
    },

    {
        id: 3,
        name: "Maria",
        role: "Frontend Developer"
    }

];


Utiliza:

map()


para crear un:

<ProfileCard />


por cada developer.


RESULTADO ESPERADO:


Zenen
Software Engineer

Carlos
Data Scientist

Maria
Frontend Developer


============================================================
ESTRUCTURA FINAL DE DEVPULSE
============================================================


App
│
├── Header
│
├── ProfileCard
│
├── Stats
│
├── Technologies
│
└── Footer


Pero ahora:

App
 │
 ├── props → ProfileCard
 │
 ├── props → Stats
 │
 └── props → Technologies


Los datos deben venir
desde App.


============================================================
CHECKLIST
============================================================

Antes de terminar el día,
comprueba que puedes responder:

[ ] ¿Qué son props?

[ ] ¿Quién las envía?

[ ] ¿Quién las recibe?

[ ] ¿Qué es props como objeto?

[ ] ¿Qué es destructuring?

[ ] ¿Cómo paso un string?

[ ] ¿Cómo paso un number?

[ ] ¿Cómo paso un boolean?

[ ] ¿Cómo paso un array?

[ ] ¿Cómo paso un object?

[ ] ¿Cómo paso una function?

[ ] ¿Qué es children?

[ ] ¿Por qué las props son
    read-only?

[ ] ¿Qué significa:

    Parent → Child

?


Si puedes explicar todo esto
sin mirar la teoría:

🔥 DÍA 2 COMPLETADO.


============================================================
FIN DE PRÁCTICA
============================================================
*/