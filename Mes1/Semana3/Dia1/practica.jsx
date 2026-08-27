/*
============================================================
SEMANA 3 — DÍA 1
PRÁCTICA
REACT + JSX + COMPONENTS
============================================================

ANTES DE EMPEZAR:

Crea un proyecto React con Vite.

Tecnología:

React
JavaScript


NO copies soluciones.

Intenta escribir cada ejercicio tú mismo.


============================================================
EJERCICIO 1 — PRIMER COMPONENTE
============================================================

Crea un componente:

HelloWorld


Debe mostrar:


Hello World


RESULTADO ESPERADO:

Hello World
*/


// ============================================================
// EJERCICIO 2 — COMPONENTE PERSONALIZADO
// ============================================================

/*
Crea:

function Welcome()


Debe mostrar:

Welcome to React


Después úsalo dentro de:

App


RESULTADO ESPERADO:

Welcome to React
*/


// ============================================================
// EJERCICIO 3 — JSX
// ============================================================

/*
Crea una variable:

const name = "Zenen";


Después crea un componente
que muestre:

Hello Zenen


Debes utilizar:

{ }


para insertar la variable.


RESULTADO ESPERADO:

Hello Zenen
*/


// ============================================================
// EJERCICIO 4 — EXPRESIONES
// ============================================================

/*
Crea:

const a = 10;
const b = 20;


Muestra:


10 + 20 = 30


Debes calcular el resultado
utilizando JavaScript dentro
del JSX.


RESULTADO ESPERADO:

10 + 20 = 30
*/


// ============================================================
// EJERCICIO 5 — MULTIPLICACIÓN
// ============================================================

/*
Crea:

const price = 100;
const quantity = 3;


Muestra:

Total: 300


El 300 debe ser calculado,
no escrito directamente.


RESULTADO ESPERADO:

Total: 300
*/


// ============================================================
// EJERCICIO 6 — PERFIL
// ============================================================

/*
Crea un componente:

Profile


Debe mostrar:


Name: Zenen
Role: Software Engineer
Experience: Junior


Utiliza variables JavaScript
para los valores.


RESULTADO ESPERADO:

Name: Zenen
Role: Software Engineer
Experience: Junior
*/


// ============================================================
// EJERCICIO 7 — COMPONENTE CARD
// ============================================================

/*
Crea:

UserCard


Debe tener:

div
h2
p


Visualmente:

-------------------------
Zenen
Software Engineer
-------------------------


RESULTADO ESPERADO:

Una tarjeta mostrando:

Zenen
Software Engineer
*/


// ============================================================
// EJERCICIO 8 — DOS COMPONENTES
// ============================================================

/*
Crea:

Header

y:

Footer


Header:

DevPulse


Footer:

© 2026 DevPulse


Después crea:

App


que muestre ambos.


RESULTADO ESPERADO:

DevPulse

© 2026 DevPulse
*/


// ============================================================
// EJERCICIO 9 — COMPONENTES ANIDADOS
// ============================================================

/*
Crea:

UserCard


y:

Dashboard


Dashboard debe utilizar:

<UserCard />


RESULTADO ESPERADO:

Dashboard

[User Card]
*/


// ============================================================
// EJERCICIO 10 — VARIAS USER CARDS
// ============================================================

/*
Utiliza el mismo:

UserCard


DOS veces dentro de App.


RESULTADO ESPERADO:

User Card

User Card


Deben existir
DOS instancias del componente.
*/


// ============================================================
// EJERCICIO 11 — JAVASCRIPT + JSX
// ============================================================

/*
Crea:

const username = "Zenen";
const followers = 1250;


Muestra:


Zenen
Followers: 1250


RESULTADO ESPERADO:

Zenen
Followers: 1250
*/


// ============================================================
// EJERCICIO 12 — OBJECT
// ============================================================

/*
Crea:


const user = {

    name: "Zenen",

    role: "Software Engineer",

    location: "Colombia"

};


Muestra:


Zenen
Software Engineer
Colombia


Utiliza:

user.name
user.role
user.location


RESULTADO ESPERADO:

Zenen
Software Engineer
Colombia
*/


// ============================================================
// EJERCICIO 13 — ARRAY + MAP
// ============================================================

/*
Utiliza:


const technologies = [

    "JavaScript",

    "React",

    "Node.js",

    "PostgreSQL"

];


Utiliza:

map()


para mostrar cada tecnología
como:

<li>


RESULTADO ESPERADO:

JavaScript
React
Node.js
PostgreSQL


en una lista.
*/


// ============================================================
// EJERCICIO 14 — COMPONENTE TECHNOLOGIES
// ============================================================

/*
Crea:

Technologies


Dentro utiliza el array:

technologies


y:

map()


para renderizar
la lista.


RESULTADO ESPERADO:

JavaScript
React
Node.js
PostgreSQL
*/


// ============================================================
// EJERCICIO 15 — COMPONENT TREE
// ============================================================

/*
Construye:


App
│
├── Header
├── Main
│   ├── Profile
│   └── Technologies
└── Footer


Crea los 5 componentes:

App
Header
Main
Profile
Technologies
Footer


RESULTADO ESPERADO:

La aplicación debe mostrar
todas las secciones.


Y debes poder explicar
el árbol:


App
 ↓
Main
 ↓
Profile / Technologies
*/


// ============================================================
// EJERCICIO 16 — IMPORT / EXPORT
// ============================================================

/*
Crea archivos separados:

Header.jsx
Footer.jsx
Profile.jsx
App.jsx


Exporta cada componente
e impórtalos en App.


RESULTADO ESPERADO:

La aplicación funciona
exactamente igual,
pero los componentes
están separados en archivos.
*/


// ============================================================
// EJERCICIO 17 — DEBUGGING JSX
// ============================================================

/*
Encuentra y corrige
los errores:


function User() {

    return (

        <h1>User</h1>

        <p>Developer</p>

    );

}


RESULTADO ESPERADO:

Debe mostrar:

User
Developer


SIN utilizar dos elementos
raíz independientes.
*/


// ============================================================
// EJERCICIO 18 — DEBUGGING COMPONENT
// ============================================================

/*
Encuentra el problema:


function userCard() {

    return (

        <div>

            <h2>User</h2>

        </div>

    );

}


function App() {

    return <userCard />;

}


Explica:

¿Por qué esto no funciona
como esperas?


Después corrígelo.


RESULTADO ESPERADO:

User


Y debes poder explicar
por qué el nombre del
componente debe comenzar
con mayúscula.
*/


// ============================================================
// EJERCICIO 19 — DEBUGGING JSX
// ============================================================

/*
Corrige:


function App() {

    const name = "Zenen";

    return (

        <div class="profile">

            <h1>
                Hello name
            </h1>

        </div>

    );

}


RESULTADO ESPERADO:

Hello Zenen


Y el div debe utilizar
la sintaxis correcta
de JSX para class.
*/


// ============================================================
// EJERCICIO 20 — MINI COMPONENTE
// ============================================================

/*
Crea:

DeveloperCard


Debe mostrar:


------------------------------
Zenen Contreras
Software Engineer
React Developer
Colombia
------------------------------


Utiliza variables JavaScript
para los datos.


RESULTADO ESPERADO:

Una tarjeta visual
con esos cuatro datos.
*/


// ============================================================
// 🔥 RETO FINAL — DEV PROFILE
// ============================================================

/*
Ahora vamos a comenzar
nuestro proyecto de la semana.


Nombre:

DevPulse


Construye una página
de perfil de desarrollador.


ESTRUCTURA:


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


------------------------------------------------------------
HEADER
------------------------------------------------------------

Debe mostrar:

DevPulse


------------------------------------------------------------
PROFILECARD
------------------------------------------------------------

Debe mostrar:

Nombre
Rol
Ubicación


Por ejemplo:

Zenen Contreras
Software Engineer
Colombia


------------------------------------------------------------
STATS
------------------------------------------------------------

Debe mostrar:

Repositories: 42
Followers: 120
Following: 80


------------------------------------------------------------
TECHNOLOGIES
------------------------------------------------------------

Debe mostrar:

JavaScript
React
Node.js
PostgreSQL


Utiliza:

array.map()


------------------------------------------------------------
FOOTER
------------------------------------------------------------

Debe mostrar:

© 2026 DevPulse


============================================================
RESULTADO ESPERADO FINAL
============================================================


DevPulse

Zenen Contreras
Software Engineer
Colombia

Repositories: 42
Followers: 120
Following: 80

Technologies:

JavaScript
React
Node.js
PostgreSQL

© 2026 DevPulse


============================================================
REGLAS DEL RETO
============================================================

1. Cada sección debe ser un componente.

2. No hagas todo en App.jsx.

3. Utiliza JSX.

4. Utiliza JavaScript dentro de JSX.

5. Utiliza map() para technologies.

6. Separa componentes en archivos.

7. No utilices IA para escribir la solución.

8. Si aparece un error:

   - Lee el error.
   - Identifica la línea.
   - Investiga qué significa.
   - Haz una hipótesis.
   - Prueba.
   - Corrige.


============================================================
BONUS
============================================================

Si terminas rápido:

Crea un componente:

TechItem


y haz:


Technologies
    ↓
TechItem
    ↓
JavaScript

TechItem
    ↓
React

etc.


RESULTADO ESPERADO:

Cada tecnología
es renderizada mediante
su propio componente.


============================================================
AUTOEVALUACIÓN
============================================================

Antes de pasar al Día 2,
deberías poder responder
SIN buscar:


1. ¿Qué es React?

2. ¿Qué es JSX?

3. ¿Qué es un componente?

4. ¿Por qué usamos componentes?

5. ¿Por qué un componente
   empieza con mayúscula?

6. ¿Qué significa renderizar?

7. ¿Qué hace <App />?

8. ¿Qué hacen { } dentro de JSX?

9. ¿Qué diferencia hay
   entre HTML y JSX?

10. ¿Qué hace map() dentro
    de JSX?

11. ¿Qué significa:

    import

    y

    export?


12. ¿Qué es el árbol
    de componentes?


Si puedes explicar
estas preguntas con tus
propias palabras:

DÍA 1 COMPLETADO.


============================================================
FIN DE PRÁCTICA
============================================================
*/