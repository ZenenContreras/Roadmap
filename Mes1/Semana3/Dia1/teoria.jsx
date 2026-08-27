/*
============================================================
SEMANA 3 — DÍA 1
REACT FUNDAMENTALS
============================================================

TEMAS:

1. ¿Qué es React?
2. ¿Qué problema intenta resolver?
3. SPA y aplicaciones modernas
4. React como librería
5. Componentes
6. JSX
7. JavaScript dentro de JSX
8. Reglas de JSX
9. Componentes funcionales
10. Import / Export
11. Componentes anidados
12. Renderizado
13. ReactDOM
14. Vite
15. Estructura de un proyecto React
16. Declarativo vs imperativo
17. Re-render conceptual
18. Errores comunes
19. Cómo pensar en componentes
20. Buenas prácticas


============================================================
1. ¿QUÉ ES REACT?
============================================================

React es una librería de JavaScript utilizada
principalmente para construir interfaces de usuario.

La palabra importante aquí es:

INTERFACES


Una interfaz es aquello con lo que
el usuario interactúa.


Por ejemplo:

- botones
- formularios
- menús
- tarjetas
- dashboards
- tablas
- modales
- páginas


React fue creado alrededor de una idea:

Construir interfaces utilizando
COMPONENTES reutilizables.


============================================================
2. ¿QUÉ PROBLEMA RESUELVE?
============================================================

Imagina una aplicación grande.

Tienes:

Navbar
Sidebar
Cards
Buttons
Forms
Tables
Modals


Sin una estructura clara,
el código puede convertirse
rápidamente en un desastre.


Podrías terminar con:

HTML
+
JavaScript
+
event listeners
+
manipulación manual del DOM
+
muchas condiciones


React propone organizar la interfaz
en pequeñas piezas.


Por ejemplo:


App
│
├── Navbar
├── Sidebar
├── Dashboard
│   ├── StatsCard
│   ├── StatsCard
│   └── StatsCard
└── Footer


Cada pieza puede ser un:

COMPONENTE.


============================================================
3. ¿QUÉ ES UN COMPONENTE?
============================================================

Un componente es una pieza reutilizable
de la interfaz.


Por ejemplo:

function Button() {

    return (
        <button>
            Click me
        </button>
    );

}


Aquí:

Button

es un componente.


Podemos imaginarlo como
una función que devuelve
una parte de la interfaz.


Esto es muy importante.


En JavaScript aprendiste:


function sum(a, b) {

    return a + b;

}


En React:


function Button() {

    return (
        <button>
            Click me
        </button>
    );

}


Ambas son funciones.


La diferencia es que
un componente React devuelve
una descripción de UI.


============================================================
4. COMPONENTES COMO PIEZAS LEGO
============================================================

Una forma excelente de pensar React:


LEGO.


Cada componente es
una pieza.


Por ejemplo:


Button


Card


Navbar


UserAvatar


LoginForm


Luego combinamos:


Navbar
+
Sidebar
+
Card
+
Button


para construir:


Application.


Por eso React escala bien:

No tienes que pensar
en toda la aplicación
como una sola pieza.


Piensas:

"¿Qué componentes necesito?"


============================================================
5. JSX
============================================================

Ahora aparece algo nuevo.


JSX.


JSX permite escribir
una sintaxis parecida a HTML
dentro de JavaScript.


Por ejemplo:


const element = (
    <h1>
        Hello World
    </h1>
);


Esto parece HTML.


Pero NO es HTML.


Es JSX.


JSX será transformado
por las herramientas de React
a JavaScript que el navegador
puede ejecutar.


Por eso puedes hacer:


function App() {

    return (
        <h1>Hello World</h1>
    );

}


Esto es JavaScript + JSX.


============================================================
6. ¿POR QUÉ JSX?
============================================================

Podríamos escribir interfaces
utilizando únicamente JavaScript.


Pero sería mucho más difícil
de leer.


Imagina:


const element =
    React.createElement(
        "h1",
        null,
        "Hello World"
    );


Funciona.


Pero:


<h1>Hello World</h1>


es mucho más fácil
de entender visualmente.


JSX permite describir
la estructura visual
de la interfaz de manera
muy cercana a cómo se ve.


============================================================
7. JSX NO ES HTML
============================================================

Esto es MUY importante.


JSX parece HTML.


Pero tiene diferencias.


Por ejemplo:

HTML:


<div class="card">


JSX:


<div className="card">


¿Por qué?


Porque:

class

es una palabra reservada
de JavaScript.


En JSX utilizamos:


className


Otro ejemplo:


HTML:

<label for="email">


JSX:

<label htmlFor="email">


Hay varias diferencias.


No memorices todas ahora.


Las iremos aprendiendo
cuando aparezcan.


============================================================
8. REGLA: UN SOLO ELEMENTO RAÍZ
============================================================

Un componente debe devolver
un elemento raíz.


Esto NO funciona:


function App() {

    return (

        <h1>Hello</h1>

        <p>Welcome</p>

    );

}


Tenemos dos elementos hermanos.


Una solución:


function App() {

    return (

        <div>

            <h1>Hello</h1>

            <p>Welcome</p>

        </div>

    );

}


Ahora existe:

div

como elemento raíz.


También podemos utilizar
un Fragment:


function App() {

    return (

        <>

            <h1>Hello</h1>

            <p>Welcome</p>

        </>

    );

}


El Fragment:

<>

</>


permite agrupar elementos
sin crear un elemento HTML
adicional.


============================================================
9. JAVASCRIPT DENTRO DE JSX
============================================================

Aquí comienza una de las
partes más importantes de React.


Puedes utilizar JavaScript
dentro de JSX.


Utilizamos:


{ }


Por ejemplo:


const name = "Zenen";


function App() {

    return (

        <h1>
            Hello {name}
        </h1>

    );

}


Resultado visual:


Hello Zenen


Las llaves significan:

"Ahora quiero ejecutar
una expresión JavaScript."


============================================================
10. EXPRESIONES
============================================================

Puedes hacer:


const age = 25;


<h1>
    {age}
</h1>


También:


<h1>
    {age + 1}
</h1>


Resultado:


26


También:


<h1>
    {"Hello".toUpperCase()}
</h1>


Resultado:


HELLO


También:


<h1>
    {10 * 2}
</h1>


Resultado:


20


La idea:

JSX permite insertar
expresiones JavaScript.


============================================================
11. LO QUE NO PUEDES HACER
============================================================

Dentro de JSX puedes colocar
EXPRESIONES.


Pero no puedes colocar
directamente declaraciones
como:


if


Por ejemplo esto NO:


<h1>

    {
        if (age > 18) {
            "Adult"
        }
    }

</h1>


Más adelante aprenderemos
formas correctas de hacer
renderizado condicional.


Por ahora recuerda:


{ expression }


============================================================
12. COMPONENTES FUNCIONALES
============================================================

La forma moderna más común
de crear componentes React:


function Welcome() {

    return (
        <h1>
            Welcome
        </h1>
    );

}


El nombre empieza
normalmente con mayúscula.


Correcto:


function Welcome()


Incorrecto:


function welcome()


¿Por qué?


React utiliza la primera letra
para diferenciar componentes
de elementos HTML.


Por ejemplo:


<div>


es HTML.


Mientras:


<Welcome />


es un componente.


============================================================
13. USAR UN COMPONENTE
============================================================

Una vez creado:


function Welcome() {

    return (
        <h1>
            Welcome
        </h1>
    );

}


Podemos utilizarlo:


function App() {

    return (

        <div>

            <Welcome />

        </div>

    );

}


Aquí:

App

utiliza:

Welcome.


Tenemos:

App
 ↓
Welcome


Esto se llama composición
de componentes.


============================================================
14. COMPONENTES ANIDADOS
============================================================

Podemos tener:


App

↓

Dashboard

↓

UserCard


Por ejemplo:


function UserCard() {

    return (
        <div>
            User Card
        </div>
    );

}


function Dashboard() {

    return (

        <section>

            <h1>
                Dashboard
            </h1>

            <UserCard />

        </section>

    );

}


function App() {

    return (

        <main>

            <Dashboard />

        </main>

    );

}


Esto crea un árbol.


App
│
└── Dashboard
    │
    └── UserCard


Esta idea del árbol de componentes
será extremadamente importante.


============================================================
15. IMPORT Y EXPORT
============================================================

En aplicaciones reales
no vas a poner todo
en un único archivo.


Puedes tener:


Button.jsx


UserCard.jsx


Navbar.jsx


App.jsx


Para utilizar un componente
en otro archivo:


export default function Button() {

    return (
        <button>
            Click
        </button>
    );

}


Después:


import Button from "./Button";


Y podemos utilizar:


<Button />


Esto permite separar
nuestro código.


============================================================
16. EXPORT DEFAULT
============================================================

Cuando hacemos:


export default function Button() {

}


podemos importar:


import Button from "./Button";


El nombre puede incluso cambiar
al importar:


import MyButton from "./Button";


Pero normalmente
mantenemos el mismo nombre
para evitar confusión.


============================================================
17. EXPORT NOMBRADO
============================================================

También existe:


export function Button() {

}


Y luego:


import { Button }
from "./Button";


La diferencia principal
es la sintaxis de importación.


No necesitas dominar
todas las variantes hoy.


Pero debes reconocerlas.


============================================================
18. VITE
============================================================

Ahora:

¿Qué utilizaremos para crear
nuestro proyecto?


Vite.


Vite es una herramienta
de desarrollo frontend.


Nos proporciona:

- servidor de desarrollo
- build
- procesamiento de módulos
- entorno moderno para React


Crear un proyecto normalmente
puede hacerse con:


npm create vite@latest


Después seleccionas:

React


y:

JavaScript


Nuestro proyecto utilizará
React + JSX.


============================================================
19. ESTRUCTURA DE UN PROYECTO
============================================================

Un proyecto React creado
con Vite puede tener algo parecido
a:


my-app/

    node_modules/

    public/

    src/

        assets/

        App.jsx

        main.jsx

    index.html

    package.json

    vite.config.js


No necesitas memorizar
todo ahora.


Pero debes entender
lo importante:


src/


es donde normalmente
vivirá nuestro código fuente.


App.jsx


será nuestro componente principal.


main.jsx


es el punto de entrada
que conecta React con
el documento HTML.


============================================================
20. main.jsx
============================================================

Conceptualmente:


main.jsx


hace algo parecido a:


import ReactDOM
from "react-dom/client"


y después:


ReactDOM.createRoot(
    document.getElementById("root")
)
.render(
    <App />
);


La idea importante:


HTML
 ↓
root
 ↓
React
 ↓
App


En:

index.html


tenemos:


<div id="root"></div>


React utiliza ese elemento
como punto de entrada
para nuestra aplicación.


============================================================
21. ¿QUÉ SIGNIFICA RENDERIZAR?
============================================================

Cuando decimos:

"React renderiza un componente"


significa que React procesa
el componente y actualiza
la interfaz correspondiente.


Por ejemplo:


function App() {

    return (
        <h1>Hello</h1>
    );

}


React procesa:


<App />


y produce la UI:


<h1>Hello</h1>


que termina siendo mostrada
en el navegador.


Más adelante aprenderemos
qué ocurre cuando cambia
el estado.


============================================================
22. REACT ES DECLARATIVO
============================================================

Esta es una idea MUY importante.


JavaScript tradicional
puede trabajar de forma
imperativa.


Imperativo significa:


"Cómo hacer algo."


Por ejemplo:


const title =
    document.querySelector("h1");


title.textContent =
    "Hello";


Estamos diciéndole
al navegador:

1. Busca este elemento.
2. Modifica su contenido.


React normalmente funciona
de manera declarativa.


Declarativo significa:

"Así quiero que se vea
la interfaz dado este estado."


Por ejemplo:


function App() {

    const name = "Zenen";

    return (
        <h1>
            Hello {name}
        </h1>
    );

}


Nosotros describimos:

UI = función de los datos.


React se encarga
de actualizar la interfaz.


Esta diferencia será
fundamental cuando lleguemos
a useState.


============================================================
23. REACT Y EL DOM
============================================================

El navegador utiliza
el DOM.


DOM significa:

Document Object Model.


Representa la estructura
del documento HTML.


React trabaja con el DOM
para mantener la interfaz
actualizada.


No necesitas manipular
manualmente el DOM
para cada cambio de UI.


React se encarga de gran
parte de ese trabajo.


Por eso evitamos escribir
constantemente:


document.querySelector()


document.createElement()


element.innerHTML = ...


Cuando usamos React.


============================================================
24. ¿POR QUÉ APRENDIMOS JAVASCRIPT ANTES?
============================================================

Ahora probablemente
entiendes por qué insistimos
tanto con JavaScript.


React NO reemplaza JavaScript.


React utiliza JavaScript.


Vas a seguir usando:


arrays


objects


functions


map


filter


destructuring


modules


async/await


etc.


Por eso nuestra Semana 1 y 2
eran fundamentales.


Ejemplo:


const users = [
    { name: "Zenen" },
    { name: "Carlos" }
];


En React podrás hacer:


function Users() {

    return (

        <div>

            {users.map(user => (

                <p>
                    {user.name}
                </p>

            ))}

        </div>

    );

}


Esto es JavaScript
aplicado dentro de React.


============================================================
25. REACT NO ES MAGIA
============================================================

Cuando veas:


<UserCard />


no pienses:


"React hace magia."


Piensa:


"Estoy utilizando una función
que representa una pieza de UI."


Cuando veas:


{users.map(...)}


piensa:


"Estoy utilizando JavaScript
para transformar datos
en elementos de interfaz."


Cuando veas:


{user.name}


piensa:


"Estoy insertando un valor
JavaScript dentro de JSX."


Esta mentalidad te ayudará
muchísimo.


============================================================
26. CÓMO PENSAR EN COMPONENTES
============================================================

Supongamos que tienes:


DevPulse


Visualmente:


Navbar

SearchBar

ProfileCard

Stats

ActivityList

ActivityItem


No hagas:


App.jsx

con 800 líneas.


Piensa:


App
│
├── Navbar
├── SearchBar
├── ProfileCard
├── Stats
└── ActivityList
     │
     ├── ActivityItem
     ├── ActivityItem
     └── ActivityItem


Cada componente
tiene una responsabilidad.


============================================================
27. COMPONENTES PEQUEÑOS
============================================================

No significa que todo
tenga que convertirse
en un componente.


No necesitamos:


<RedText />


para cada:


<span>


Queremos componentes
que representen piezas
reutilizables o conceptualmente
importantes.


Por ejemplo:


UserCard


tiene sentido.


Una buena pregunta es:


"¿Esta pieza de UI tiene
su propia responsabilidad?"


Si sí:

podría ser un componente.


============================================================
28. REGLA DE ORO DEL DÍA
============================================================

Quiero que puedas explicar
esta frase:


"React permite construir
interfaces mediante componentes
reutilizables escritos con
JavaScript y JSX."


Y explicar cada palabra:


React
→ librería.


Componentes
→ piezas de UI.


Reutilizables
→ podemos utilizarlas
varias veces.


JavaScript
→ lenguaje que utilizamos.


JSX
→ sintaxis que nos permite
describir UI dentro de JS.


============================================================
29. ERRORES COMUNES
============================================================

ERROR 1:


function button() {}


Usar minúscula
para componente.


Mejor:


function Button() {}


------------------------------------------------------------


ERROR 2:


return (

    <h1>Hello</h1>

    <p>World</p>

);


Dos elementos raíz.


Solución:


<>

    <h1>Hello</h1>

    <p>World</p>

</>


------------------------------------------------------------


ERROR 3:


<div class="card">


En JSX:


<div className="card">


------------------------------------------------------------


ERROR 4:


<button onclick={...}>


En React:

onClick


Mayúscula en C.


------------------------------------------------------------


ERROR 5:


import Button "./Button";


Falta:

from


Correcto:


import Button from "./Button";


============================================================
30. TU MODELO MENTAL
============================================================

Quiero que termines el día
pensando así:


JavaScript
    ↓
React
    ↓
Components
    ↓
JSX
    ↓
UI


Y posteriormente:


Data
    ↓
State
    ↓
React
    ↓
UI


Más adelante:


User interaction
    ↓
State change
    ↓
React
    ↓
Re-render
    ↓
UI


Ese será uno de los
modelos mentales principales
durante las próximas semanas.


============================================================
FIN DE TEORÍA
============================================================
*/