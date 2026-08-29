/*
============================================================
SEMANA 3 — DÍA 4
REACT FUNDAMENTALS
EVENTS + FORMS
============================================================

OBJETIVOS DEL DÍA

Al terminar este día debes entender perfectamente:

1. Qué son los Events en React
2. onClick
3. Event Handlers
4. El objeto event
5. onChange
6. Inputs en React
7. Controlled Components
8. State + Inputs
9. onSubmit
10. preventDefault()
11. Formularios en React
12. event.target
13. event.target.value
14. Funciones inline vs handlers
15. Pasar información a handlers
16. Eventos + Props
17. Separar lógica de UI
18. Formularios controlados
19. Manejo de múltiples inputs
20. Validación básica
21. Estado de un formulario
22. Aplicación a DevPulse


============================================================
1. ¿QUÉ ES UN EVENT?
============================================================

Un Event es algo que ocurre
durante la interacción del usuario
con la aplicación.

Por ejemplo:

- click
- escribir
- enviar un formulario
- mover el mouse
- presionar una tecla
- seleccionar una opción

En una aplicación React
estos eventos permiten que
la interfaz responda al usuario.


Por ejemplo:

USER
 ↓
click button
 ↓
React detecta evento
 ↓
ejecuta función
 ↓
State cambia
 ↓
UI cambia


Este flujo es fundamental.


============================================================
2. onClick
============================================================

Uno de los eventos más comunes:

onClick


Ejemplo:


<button onClick={handleClick}>
    Click me
</button>


Cuando el usuario hace click:

handleClick()


se ejecuta.


============================================================
3. EVENT HANDLER
============================================================

Un Event Handler es una función
que responde a un evento.


Ejemplo:


function handleClick() {

    console.log("Button clicked");

}


Y:


<button onClick={handleClick}>
    Click
</button>


Podemos pensar:


onClick
   ↓
handleClick
   ↓
ejecuta lógica


============================================================
4. MUY IMPORTANTE:
5. NO EJECUTAR LA FUNCIÓN
6. DURANTE EL RENDER
============================================================

Incorrecto:


<button onClick={handleClick()}>
    Click
</button>


¿Por qué?

Porque:


handleClick()


se ejecuta inmediatamente.


Lo correcto:


<button onClick={handleClick}>
    Click
</button>


Aquí estamos pasando
la referencia de la función.


React decidirá cuándo
ejecutarla.


============================================================
7. FUNCIONES INLINE
============================================================

También podemos escribir:


<button
    onClick={() => {
        console.log("Clicked");
    }}
>
    Click
</button>


Esto funciona.


Pero si la lógica crece,
es mejor separarla:


function handleClick() {

    console.log("Clicked");

}


<button onClick={handleClick}>
    Click
</button>


Separar la lógica
normalmente hace el código
más fácil de leer.


============================================================
8. EVENT OBJECT
============================================================

Cuando React ejecuta
un Event Handler,
puede proporcionar información
sobre el evento.


Ejemplo:


function handleClick(event) {

    console.log(event);

}


<button onClick={handleClick}>
    Click
</button>


React proporciona:


event


Este objeto contiene
información relacionada
con la interacción.


============================================================
9. INPUTS
============================================================

Ahora viene uno de los conceptos
más importantes del día.


Tenemos:


<input />


El usuario puede escribir:


Zenen


Pero React necesita saber
qué escribió.


Aquí utilizamos:

onChange.


============================================================
10. onChange
============================================================

Ejemplo:


<input
    onChange={handleChange}
/>


Cada vez que cambia
el valor del input,
React ejecuta:


handleChange


Por ejemplo:


function handleChange(event) {

    console.log(
        event.target.value
    );

}


Si el usuario escribe:


H


vemos:


H


Después:


He


vemos:


He


Después:


Hel


etc.


============================================================
11. event.target
============================================================

¿Qué significa:


event.target


?


Es el elemento HTML
que generó el evento.


Si tenemos:


<input />


y el usuario escribe,
el target es ese input.


Entonces:


event.target


representa:


<input>


============================================================
12. event.target.value
============================================================

El input tiene un valor.


Por ejemplo:


<input value="Zenen">


Entonces:


event.target.value


sería:


"Zenen"


Por eso:


function handleChange(event) {

    console.log(
        event.target.value
    );

}


nos permite saber
qué está escribiendo
el usuario.


============================================================
13. STATE + INPUT
============================================================

Ahora combinamos
lo aprendido ayer.


Tenemos:


const [search, setSearch] =
    useState("");


Y:


function handleChange(event) {

    setSearch(
        event.target.value
    );

}


Input:


<input
    value={search}
    onChange={handleChange}
/>


Ahora tenemos:


USER TYPES
 ↓
onChange
 ↓
event.target.value
 ↓
setSearch()
 ↓
search State
 ↓
React re-render
 ↓
input updated


Este patrón es FUNDAMENTAL
en React.


============================================================
14. CONTROLLED COMPONENT
============================================================

Un input controlado
es un input cuyo valor
está controlado por React State.


Por ejemplo:


const [search, setSearch] =
    useState("");


<input
    value={search}
    onChange={handleChange}
/>


Aquí:

React State
    ↓
value


y:


User input
    ↓
onChange
    ↓
State


Existe un ciclo:


State
 ↓
Input
 ↓
User
 ↓
onChange
 ↓
State


============================================================
15. ¿POR QUÉ CONTROLAR INPUTS?
============================================================

Porque ahora React
conoce el valor actual
del formulario.


Por ejemplo:


search


siempre representa
exactamente lo que hay
en el input.


Esto permite:

- validar
- limpiar
- transformar
- enviar
- deshabilitar botones
- mostrar mensajes
- construir búsquedas


etc.


============================================================
16. LIMPIAR INPUT
============================================================

Supongamos:


const [search, setSearch] =
    useState("");


Podemos limpiar:


setSearch("");


Resultado:


Input vacío.


Esto es otra ventaja
de los controlled inputs.


React controla
completamente el valor.


============================================================
17. onSubmit
============================================================

Ahora vamos a formularios.


Tenemos:


<form>

    <input />

    <button>
        Search
    </button>

</form>


Cuando el usuario
envía el formulario:

onSubmit


puede manejar el evento.


Ejemplo:


<form onSubmit={handleSubmit}>

    ...

</form>


============================================================
18. HANDLE SUBMIT
============================================================

Podemos hacer:


function handleSubmit(event) {

    event.preventDefault();

    console.log("Submitted");

}


Esto se ejecuta
cuando se envía
el formulario.


============================================================
19. preventDefault()
============================================================

Los formularios HTML
tienen un comportamiento
por defecto.


Normalmente:


submit


puede provocar
una navegación/recarga.


En una SPA como React
normalmente no queremos eso.


Por eso:


event.preventDefault();


le dice al navegador:


"No hagas el comportamiento
predeterminado."


Después podemos ejecutar
nuestra propia lógica.


============================================================
20. FORMULARIO CONTROLADO
============================================================

Un formulario típico
en React:

const [search, setSearch] =
    useState("");


function handleChange(event) {

    setSearch(
        event.target.value
    );

}


function handleSubmit(event) {

    event.preventDefault();

    console.log(search);

}


<form onSubmit={handleSubmit}>

    <input
        value={search}
        onChange={handleChange}
    />

    <button type="submit">
        Search
    </button>

</form>


Ahora tenemos
un flujo completo.


============================================================
21. FLUJO DEL SEARCH
============================================================

USER

escribe:


torvalds


↓

onChange


↓

event.target.value


↓

setSearch("torvalds")


↓

search = "torvalds"


↓

UI actualizada.


Después:


USER

presiona Search


↓

onSubmit


↓

preventDefault()


↓

handleSubmit()


↓

search contiene:


"torvalds"


Más adelante:

search


↓

API


↓

GitHub


Eso será el Día 6.


============================================================
22. BUTTON TYPE
============================================================

Dentro de un form:

<button>


por defecto puede comportarse
como submit.


Por eso es recomendable
ser explícito:


<button type="submit">


Para botones que no envían:

<button type="button">


Esto evita comportamientos
inesperados.


============================================================
23. EVENTOS Y STATE
============================================================

Aquí empieza a conectarse
todo React.


Por ejemplo:


const [isFollowing, setIsFollowing] =
    useState(false);


function handleFollow() {

    setIsFollowing(
        previous => !previous
    );

}


<button onClick={handleFollow}>
    ...
</button>


Tenemos:


CLICK
 ↓
handleFollow
 ↓
setIsFollowing
 ↓
State changes
 ↓
re-render
 ↓
button changes


============================================================
24. EVENTOS Y PROPS
============================================================

Los handlers también pueden
pasarse como Props.


Por ejemplo:


function Button({ onFollow }) {

    return (

        <button onClick={onFollow}>
            Follow
        </button>

    );

}


Padre:


function Profile() {

    function handleFollow() {

        console.log("Follow");

    }

    return (

        <Button
            onFollow={handleFollow}
        />

    );

}


Aquí:

Parent
 ↓
function
 ↓
prop
 ↓
Child
 ↓
onClick


Esto será importante
cuando trabajemos
Lifting State Up.


============================================================
25. EVENT HANDLER VS EVENT
============================================================

Diferencia importante.


Esto:


onClick={handleClick}


significa:

"Cuando ocurra el click,
ejecuta handleClick."


Mientras:


onClick={handleClick()}


significa:

"Ejecuta handleClick
AHORA y utiliza su resultado."


Normalmente queremos
la primera.


============================================================
26. PASAR ARGUMENTOS
============================================================

Supongamos:


function handleTechnology(name) {

    console.log(name);

}


Podemos hacer:


<button
    onClick={() =>
        handleTechnology("React")
    }
>
    React
</button>


Aquí utilizamos una función
para poder proporcionar
el argumento.


============================================================
27. FORMS Y STATE
============================================================

Un formulario puede tener
varios datos.


Por ejemplo:


name

email

password


Cada uno puede tener
su propio State:


const [name, setName] =
    useState("");


const [email, setEmail] =
    useState("");


const [password, setPassword] =
    useState("");


Esto funciona.


Pero cuando un formulario
crece, también podemos
guardar todo en un objeto.


Ejemplo:


const [form, setForm] =
    useState({

        name: "",

        email: "",

        password: ""

    });


Lo trabajaremos
más adelante.


============================================================
28. VALIDACIÓN BÁSICA
============================================================

Podemos validar:


if (!search.trim()) {

    return;

}


Esto significa:


Si search está vacío
o solamente contiene
espacios:


no continuar.


¿Por qué:


trim()


?


Porque:


"   "


parece contenido,
pero realmente no tiene
información útil.


============================================================
29. DISABLED
============================================================

Podemos controlar
si un botón está disponible.


Por ejemplo:


<button
    disabled={!search.trim()}
>
    Search
</button>


Si:


search = ""


entonces:


disabled = true


Si:


search = "torvalds"


entonces:


disabled = false


Aquí estamos combinando:


State
+
Conditional logic
+
UI


============================================================
30. SEPARAR RESPONSABILIDADES
============================================================

Un error común:

meter absolutamente
toda la lógica en App.jsx.


Por ejemplo:


App

1000 líneas

❌


Es mejor pensar:


App
│
├── SearchBar
├── ProfileCard
├── Stats
└── RepositoryList


Cada componente tiene
una responsabilidad.


Más adelante aprenderemos
cómo compartir State
entre ellos.


============================================================
31. DEV PULSE
============================================================

Ahora conecta todo.


Tenemos:


SearchBar


Debe contener:


search State


input


button


form


handleChange


handleSubmit


Conceptualmente:


SearchBar


State:

search


UI:

<input>


Event:

onChange


↓

State update.


Submit:


<form>


↓

onSubmit


↓

handleSubmit


============================================================
32. ¿QUÉ PASA CUANDO ESCRIBES?
============================================================

Supongamos que escribes:


react


Primero:


r


↓

onChange


↓

setSearch("r")


Después:


re


↓

setSearch("re")


Después:


rea


↓

setSearch("rea")


Después:


reac


↓

setSearch("reac")


Después:


react


↓

setSearch("react")


Al final:


search === "react"


Esto ocurre mediante
varios updates de State.


============================================================
33. ¿QUÉ PASA CUANDO PRESIONAS SEARCH?
============================================================

Tenemos:


<form onSubmit={handleSubmit}>


Usuario:

click Search


↓

submit event


↓

handleSubmit(event)


↓

preventDefault()


↓

leer search


↓

usar search


Por ahora solamente:

console.log(search)


Más adelante:


fetch GitHub API.


============================================================
34. EVENTOS MÁS IMPORTANTES
============================================================

No necesitas memorizar
todos los eventos existentes.


Por ahora domina:

onClick

onChange

onSubmit


Más adelante aparecerán:


onKeyDown

onKeyUp

onFocus

onBlur

onMouseEnter

etc.


Pero los tres primeros
son prioritarios.


============================================================
35. ERROR COMÚN
============================================================

Esto:

<input
    value={search}
/>


sin:


onChange


puede producir un input
que React controla pero
que el usuario no puede
modificar correctamente.


Si utilizas:

value


normalmente necesitas
una forma de actualizarlo.


Por eso:


value={search}

onChange={handleChange}


trabajan juntos.


============================================================
36. CONTROLLED INPUT
============================================================

Memoriza:


value
+
onChange


Ejemplo:


<input
    value={search}
    onChange={handleChange}
/>


State controla:

value


Usuario modifica:

onChange


onChange modifica:

State


Es un ciclo.


============================================================
37. EL MODELO MENTAL
============================================================

Quiero que puedas explicar:


USER
 ↓
INPUT
 ↓
onChange
 ↓
event.target.value
 ↓
setState()
 ↓
STATE
 ↓
RE-RENDER
 ↓
INPUT UPDATED


Y para forms:


USER
 ↓
SUBMIT
 ↓
onSubmit
 ↓
preventDefault()
 ↓
FUNCTION
 ↓
STATE / API
 ↓
UI


============================================================
38. DEV PULSE — ARQUITECTURA
============================================================

Después del Día 4:

App
│
├── Header
│
├── SearchBar
│   ├── input
│   └── button
│
├── ProfileCard
│   ├── FollowButton
│   └── Status
│
├── Stats
│
└── Technologies


SearchBar controla
temporalmente:

search


ProfileCard controla:

isFollowing

followers

isOnline


Esto cambiará un poco
cuando hagamos
Lifting State Up.


============================================================
39. CHECKPOINT
============================================================

Antes de avanzar debes
poder explicar:

1. ¿Qué es un Event?

2. ¿Qué hace onClick?

3. ¿Qué es un Event Handler?

4. ¿Qué contiene event?

5. ¿Qué significa
   event.target?

6. ¿Qué significa
   event.target.value?

7. ¿Qué hace onChange?

8. ¿Qué es un
   Controlled Component?

9. ¿Qué hace onSubmit?

10. ¿Por qué usamos
    preventDefault()?

11. ¿Qué diferencia hay
    entre:

    onClick={handleClick}

    y:

    onClick={handleClick()}

12. ¿Cómo conectamos
    State con un input?

13. ¿Qué ocurre cuando
    escribes una letra?

14. ¿Qué ocurre cuando
    envías un formulario?

15. ¿Cómo pasa un handler
    de Parent a Child?


Si puedes explicar
todo esto sin mirar:

🔥 DÍA 4 COMPLETADO.


============================================================
FIN DE TEORÍA
============================================================
*/