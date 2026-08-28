/*
============================================================
SEMANA 3 — DÍA 3
PRÁCTICA
STATE + useState
============================================================

REGLAS:

1. No uses IA para resolver.
2. Lee el ejercicio.
3. Intenta resolverlo.
4. Ejecuta.
5. Si falla, debuggea.
6. Explica por qué funciona.
7. No copies directamente la teoría.


============================================================
EJERCICIO 1 — PRIMER STATE
============================================================

Crea un componente:

Counter


Utiliza:

useState


El valor inicial debe ser:

0


Muestra:


Count: 0


RESULTADO ESPERADO:

Count: 0
*/


// ============================================================
// EJERCICIO 2 — INCREMENT
// ============================================================

/*
Agrega un botón:

Increment


Cada click debe aumentar
el contador en 1.


RESULTADO ESPERADO:

Inicial:

Count: 0


Primer click:

Count: 1


Segundo click:

Count: 2


Tercer click:

Count: 3
*/


// ============================================================
// EJERCICIO 3 — DECREMENT
// ============================================================

/*
Agrega:

Decrement


Ahora tendrás:


Count: 0

[ - ] [ + ]


RESULTADO ESPERADO:

Click +

Count: 1


Click +

Count: 2


Click -

Count: 1
*/


// ============================================================
// EJERCICIO 4 — RESET
// ============================================================

/*
Agrega:

Reset


Debe devolver el contador
a 0.


RESULTADO ESPERADO:

Count: 5

↓

Click Reset

↓

Count: 0
*/


// ============================================================
// EJERCICIO 5 — STATE STRING
// ============================================================

/*
Crea:

const [name, setName]


Valor inicial:

"Zenen"


Muestra:

Hello Zenen


Agrega un botón:

Change Name


Al hacer click cambia:

"Carlos"


RESULTADO ESPERADO:

Inicial:

Hello Zenen


Después del click:

Hello Carlos
*/


// ============================================================
// EJERCICIO 6 — TOGGLE
// ============================================================

/*
Crea:

isOnline


Valor inicial:

false


Muestra:

Offline


Botón:

Toggle Status


Cada click debe cambiar:


Offline
↕
Online


RESULTADO ESPERADO:

Inicial:

Offline


Click:

Online


Click:

Offline


Click:

Online
*/


// ============================================================
// EJERCICIO 7 — TOGGLE BUTTON
// ============================================================

/*
Crea:

isFollowing


Inicialmente:

false


El botón debe mostrar:

Follow


Cuando se hace click:

Following


Si se vuelve a hacer click:

Follow


RESULTADO ESPERADO:

Follow
↓
Following
↓
Follow
↓
Following
*/


// ============================================================
// EJERCICIO 8 — CONTADOR CON LÍMITES
// ============================================================

/*
Crea un contador.


Debe empezar:

0


Debe poder aumentar
hasta 10.


Cuando llegue a 10,
no debe aumentar más.


RESULTADO ESPERADO:

0
1
2
3
...
9
10


Después de intentar
incrementar desde 10:

10


No:

11.
*/


// ============================================================
// EJERCICIO 9 — STATE CON ARRAY
// ============================================================

/*
Crea:

technologies


Valor inicial:

[
    "JavaScript",
    "React"
]


Muestra las tecnologías
en una lista.


Agrega botón:

Add Node.js


Al hacer click debe agregarse:

Node.js


RESULTADO ESPERADO:

Inicial:

JavaScript
React


Después:

JavaScript
React
Node.js
*/


// ============================================================
// EJERCICIO 10 — AGREGAR TECNOLOGÍAS
// ============================================================

/*
Crea botones:

Add JavaScript
Add React
Add Node.js
Add PostgreSQL


Cada botón debe agregar
su tecnología al array.


RESULTADO ESPERADO:

Si haces:

Add React

Add Node.js


Debe aparecer:

React
Node.js


El array debe mantenerse
en State.
*/


// ============================================================
// EJERCICIO 11 — REMOVE ITEM
// ============================================================

/*
Utiliza State con un array.


Ejemplo inicial:


[
    "JavaScript",
    "React",
    "Node.js"
]


Crea un botón para eliminar:

Node.js


Utiliza:

filter()


para crear un nuevo array.


RESULTADO ESPERADO:

Inicial:

JavaScript
React
Node.js


Después:

JavaScript
React
*/


// ============================================================
// EJERCICIO 12 — STATE OBJECT
// ============================================================

/*
Crea:


const [user, setUser]


Estado inicial:


{
    name: "Zenen",
    role: "Software Engineer"
}


Muestra:

Zenen
Software Engineer


Agrega botón:

Change Role


Al hacer click cambia:

role

a:

Senior Software Engineer


RESULTADO ESPERADO:

Inicial:

Zenen
Software Engineer


Después:

Zenen
Senior Software Engineer
*/


// ============================================================
// EJERCICIO 13 — ACTUALIZAR UNA PROPIEDAD
// ============================================================

/*
Utiliza el mismo objeto.


Agrega:

Change Name


Debe cambiar:

Zenen

↓

Carlos


IMPORTANTE:

No debes perder:

role


RESULTADO ESPERADO:

Inicial:

Zenen
Software Engineer


Después:

Carlos
Software Engineer
*/


// ============================================================
// EJERCICIO 14 — DEBUGGING
// ============================================================

/*
Encuentra el problema:


function Counter() {

    const [count, setCount] =
        useState(0);

    function increment() {

        count++;

    }

    return (

        <button onClick={increment}>

            {count}

        </button>

    );

}


¿Por qué no funciona
correctamente?


Corrígelo.


RESULTADO ESPERADO:

0
↓
1
↓
2
↓
3
*/


// ============================================================
// EJERCICIO 15 — DEBUGGING
// ============================================================

/*
Encuentra el problema:


<button onClick={increment()}>
    Increment
</button>


¿Por qué es incorrecto?


Corrígelo.


RESULTADO ESPERADO:

La función increment
solo debe ejecutarse
cuando el usuario haga click.
*/


// ============================================================
// EJERCICIO 16 — PREVIOUS STATE
// ============================================================

/*
Crea un contador.


Utiliza:

setCount(prev => prev + 1)


NO utilices:

setCount(count + 1)


en este ejercicio.


RESULTADO ESPERADO:

0
1
2
3
4
5
*/


// ============================================================
// EJERCICIO 17 — DOUBLE INCREMENT
// ============================================================

/*
Crea un botón:

+2


Cada click debe aumentar
el contador en 2.


Utiliza dos actualizaciones
basadas en previous state.


RESULTADO ESPERADO:

Inicial:

0


Click:

2


Click:

4


Click:

6


Click:

8
*/


// ============================================================
// EJERCICIO 18 — LIKE BUTTON
// ============================================================

/*
Crea:

likes


Inicial:

0


Botón:

Like


Cada click aumenta
los likes en 1.


Resultado:

Likes: 0

↓

Likes: 1

↓

Likes: 2

↓

Likes: 3


RESULTADO ESPERADO:

El número debe actualizarse
sin recargar la página.
*/


// ============================================================
// EJERCICIO 19 — SHOW / HIDE
// ============================================================

/*
Crea:

isVisible


Inicial:

true


Muestra:

Secret information


Botón:

Hide


Cuando se hace click,
oculta el texto.


El botón debe cambiar
a:

Show


Al hacer click nuevamente:

Secret information


RESULTADO ESPERADO:

Secret information

[Hide]

↓

[Show]

↓

Secret information

[Hide]
*/


// ============================================================
// EJERCICIO 20 — MULTIPLE STATES
// ============================================================

/*
Crea un componente:

UserProfile


Debe tener:

name

isOnline

followers


Valores iniciales:

name = "Zenen"

isOnline = false

followers = 100


Muestra:


Zenen
Offline
Followers: 100


Crea botones:

Change Name
Toggle Status
Follow


RESULTADO ESPERADO:

Inicial:

Zenen
Offline
Followers: 100


Change Name:

Carlos
Offline
Followers: 100


Toggle Status:

Carlos
Online
Followers: 100


Follow:

Carlos
Online
Followers: 101
*/


// ============================================================
// 🔥 RETO DEV PULSE — DÍA 3
// ============================================================

/*
Ahora vamos a agregar
STATE real a DevPulse.


============================================================
PARTE 1 — FOLLOW
============================================================

En ProfileCard o en el componente
correspondiente crea:


isFollowing


Inicial:


false


Botón:

Follow


Cuando se hace click:

Following


Segundo click:

Follow


RESULTADO ESPERADO:

Follow
↓
Following
↓
Follow


============================================================
PARTE 2 — FOLLOWERS
============================================================

Crea:


followers


Inicial:


1250


Cuando el usuario presione
Follow:


1251


Si deja de seguir:


1249


IMPORTANTE:

El número debe cambiar
según el estado.


RESULTADO ESPERADO:

Followers: 1250

Click Follow

↓

Followers: 1251

Click Following

↓

Followers: 1250


============================================================
PARTE 3 — PROFILE STATUS
============================================================

Crea:


isOnline


Inicial:


true


Muestra:


Online


Agrega botón:


Toggle Status


RESULTADO ESPERADO:


Online

↓

Offline

↓

Online


============================================================
PARTE 4 — TECHNOLOGIES
============================================================

Crea un State:


technologies


Inicial:


[
    "JavaScript",
    "React"
]


Agrega botón:


Add Node.js


Resultado:


JavaScript
React


↓

Click


↓

JavaScript
React
Node.js


============================================================
PARTE 5 — DEV PROFILE
============================================================

Ahora DevPulse debería tener
aproximadamente:


DevPulse


Zenen Contreras

Software Engineer

Online


Followers: 1250


[Follow]


Technologies:


JavaScript
React


[Add Node.js]


============================================================
PARTE 6 — THINKING
============================================================

Para cada elemento,
pregúntate:


¿Qué dato puede cambiar?


Ese dato probablemente
puede ser State.


Por ejemplo:


Followers
→ puede cambiar
→ State


Online
→ puede cambiar
→ State


Following
→ puede cambiar
→ State


Technologies
→ puede cambiar
→ State


Nombre del usuario
→ por ahora no cambia
→ puede permanecer
   como prop.


============================================================
CHECKLIST FINAL
============================================================

Antes de pasar al Día 4:

[ ] Entiendo qué es State.

[ ] Entiendo useState.

[ ] Sé leer State.

[ ] Sé actualizar State.

[ ] Entiendo qué hace
    el setter.

[ ] Entiendo re-render.

[ ] Sé usar State con numbers.

[ ] Sé usar State con strings.

[ ] Sé usar State con booleans.

[ ] Sé usar State con arrays.

[ ] Sé usar State con objects.

[ ] Entiendo inmutabilidad.

[ ] Sé utilizar spread
    para actualizar arrays
    y objects.

[ ] Entiendo previous state.

[ ] Sé explicar la diferencia
    entre Props y State.

[ ] Puedo explicar:

    Event
      ↓
    setState
      ↓
    State change
      ↓
    Re-render
      ↓
    UI


Si puedes explicar todo
sin mirar la teoría:

🔥 DÍA 3 COMPLETADO.


============================================================
FIN DE PRÁCTICA
============================================================
*/