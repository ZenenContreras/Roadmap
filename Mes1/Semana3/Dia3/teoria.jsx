/*
============================================================
SEMANA 3 — DÍA 3
REACT FUNDAMENTALS
STATE + useState
============================================================

OBJETIVOS

Al terminar este día debes entender:

1. Qué es State
2. Por qué necesitamos State
3. La diferencia entre variables normales y State
4. Qué es useState
5. Cómo declarar State
6. Cómo leer State
7. Cómo modificar State
8. Qué es un setter
9. Qué ocurre cuando cambia State
10. Re-rendering
11. Por qué NO debemos modificar State directamente
12. State con números
13. State con strings
14. State con booleanos
15. State con arrays
16. State con objects
17. State inicial
18. Funciones dentro de setState
19. State y eventos
20. Props vs State
21. Componentes con State
22. Errores comunes
23. Aplicación de State a DevPulse


============================================================
1. ¿QUÉ PROBLEMA RESUELVE STATE?
============================================================

Ayer aprendimos Props.

Por ejemplo:


function UserCard({ name }) {

    return (
        <h2>{name}</h2>
    );

}


Y desde el padre:


<UserCard name="Zenen" />


Esto funciona perfectamente.


Pero imagina que tenemos
un contador.


Queremos:

Count: 0


y un botón:


[ + ]


Cuando el usuario haga click:


Count: 1


Después:


Count: 2


Después:


Count: 3


etc.


Necesitamos guardar
el valor actual del contador.


Aquí aparece:

STATE.


============================================================
2. ¿QUÉ ES STATE?
============================================================

State es información que
pertenece a un componente
y que puede cambiar durante
la vida de ese componente.


Por ejemplo:


count


puede empezar en:


0


y después convertirse en:


1


y después:


2


El valor actual es parte
del estado del componente.


Podemos pensar:


Component
   ↓
State
   ↓
UI


Cuando el State cambia:


State cambia
   ↓
React detecta cambio
   ↓
React vuelve a renderizar
   ↓
UI actualizada


Este es uno de los modelos
mentales más importantes
de React.


============================================================
3. UNA VARIABLE NORMAL NO ES STATE
============================================================

Podrías pensar:

"Simplemente utilizo let."


Por ejemplo:


function Counter() {

    let count = 0;

    function increment() {

        count = count + 1;

    }

    return (
        <button onClick={increment}>
            {count}
        </button>
    );

}


Parece lógico.


Pero existe un problema.


Cambiar una variable normal
NO le dice a React:


"Necesito actualizar
la interfaz."


Por eso:


count = count + 1;


no provoca por sí mismo
un nuevo render.


React necesita saber
que algo cambió.


Para eso existe:

useState.


============================================================
4. useState
============================================================

useState es un Hook de React.


Permite agregar State
a un componente funcional.


Ejemplo:


import { useState } from "react";


function Counter() {

    const [count, setCount] =
        useState(0);

}


Aquí tenemos dos cosas:


count


y:


setCount


Y:


useState(0)


establece el valor inicial.


Por lo tanto:


count = 0


al principio.


============================================================
5. ¿QUÉ SIGNIFICA ESTA SINTAXIS?
============================================================

Esta línea:


const [count, setCount] =
    useState(0);


puede parecer extraña.


Pero conecta directamente
con algo que ya aprendiste:


ARRAY DESTRUCTURING.


En JavaScript:


const values = [0, function() {}];


const [value, setValue] = values;


React hace algo conceptualmente
parecido.


useState(0)


nos proporciona dos valores:

1. valor actual
2. función para actualizarlo


Entonces:


[count, setCount]


significa:


count
→ valor actual


setCount
→ función para cambiarlo


============================================================
6. EL PRIMER ARGUMENTO
============================================================

Tenemos:


useState(0)


El:


0


es el valor inicial.


Por ejemplo:


useState("Zenen")


tiene:


"Zenen"


como valor inicial.


También:


useState(true)


tiene:


true


como valor inicial.


Y:


useState([])


empieza con un array vacío.


Y:


useState({})


empieza con un objeto vacío.


============================================================
7. EJEMPLO COMPLETO
============================================================

Tenemos:


function Counter() {

    const [count, setCount] =
        useState(0);

    return (

        <div>

            <p>
                Count: {count}
            </p>

            <button>
                Increment
            </button>

        </div>

    );

}


Inicialmente:


count = 0


Por eso vemos:


Count: 0


Pero todavía no cambia.


Necesitamos utilizar:


setCount.


============================================================
8. EL SETTER
============================================================

setCount es la función
que nos proporciona React
para actualizar:


count.


Por ejemplo:


setCount(1);


Eso indica:


"El nuevo valor del State
debe ser 1."


Pero normalmente no queremos
escribir:


setCount(1)


cada vez.


Queremos incrementar.


Entonces:


setCount(count + 1);


Si:


count = 0


entonces:


count + 1


es:


1


Por lo tanto:


setCount(1)


React actualiza State.


============================================================
9. EJEMPLO COMPLETO DEL COUNTER
============================================================

function Counter() {

    const [count, setCount] =
        useState(0);

    function increment() {

        setCount(count + 1);

    }

    return (

        <div>

            <p>
                Count: {count}
            </p>

            <button onClick={increment}>
                +
            </button>

        </div>

    );

}


Ahora:


Click


↓

increment()


↓

setCount(count + 1)


↓

State cambia


↓

React re-renderiza


↓

UI muestra nuevo count.


============================================================
10. ¿QUÉ ES UN RE-RENDER?
============================================================

Cuando el State cambia,
React vuelve a ejecutar
el componente para determinar
cómo debe verse la UI.


Por ejemplo:


Inicialmente:


count = 0


React renderiza:


Count: 0


Después hacemos:


setCount(1)


React vuelve a procesar
el componente.


Ahora:


count = 1


Y la UI pasa a mostrar:


Count: 1


Después:


setCount(2)


React vuelve a renderizar.


Resultado:


Count: 2


etc.


============================================================
11. IMPORTANTE:
12. RE-RENDER NO SIGNIFICA
13. RECARGAR TODA LA PÁGINA
============================================================

Esto es importante.


Cuando cambia State:


NO significa:


"Recarga el navegador."


React actualiza la interfaz
según sea necesario.


La página continúa
siendo la misma aplicación.


Por eso React es tan útil
para interfaces interactivas.


============================================================
14. STATE Y UI
============================================================

Podemos pensar:


UI = función del State


Por ejemplo:


count = 0


↓

UI:


Count: 0


Si:


count = 10


↓

UI:


Count: 10


Por eso una buena forma
de pensar React es:


State
   ↓
UI


La interfaz representa
el estado actual.


============================================================
15. STATE CON STRINGS
============================================================

No solamente podemos
guardar números.


Por ejemplo:


const [name, setName] =
    useState("Zenen");


Ahora:


name


contiene:


"Zenen"


Podemos cambiarlo:


setName("Carlos");


Después del cambio:


name


será:


"Carlos"


Y React actualizará
la UI.


============================================================
16. STATE CON BOOLEANOS
============================================================

Ejemplo:


const [isOnline, setIsOnline] =
    useState(false);


Inicialmente:


isOnline = false


Podemos mostrar:


Offline


Después:


setIsOnline(true);


Ahora:


isOnline = true


Y podemos mostrar:


Online


Esto es muy común.


Por ejemplo:


const [isDark, setIsDark] =
    useState(false);


Podemos construir
un dark mode.


============================================================
17. TOGGLE
============================================================

Un patrón muy importante
es el:

TOGGLE.


Significa:


false → true


true → false


Podemos hacer:


setIsOnline(!isOnline);


Si:


isOnline = false


entonces:


!isOnline


es:


true.


Si:


isOnline = true


entonces:


!isOnline


es:


false.


Este patrón aparecerá
constantemente en React.


============================================================
18. STATE CON ARRAYS
============================================================

También podemos tener:


const [technologies, setTechnologies] =
    useState([]);


Ahora:


technologies


es un array.


Podemos comenzar con:


useState([
    "JavaScript",
    "React"
]);


Pero aquí aparece
una regla MUY importante.


NO debemos hacer:


technologies.push("Node.js");


y luego esperar que React
detecte correctamente el cambio.


¿Por qué?


Porque estamos modificando
directamente el array.


React trabaja mejor cuando
creamos un nuevo array.


Por ejemplo:


setTechnologies([
    ...technologies,
    "Node.js"
]);


Aquí:


...technologies


copia los elementos actuales.


Y después agregamos:


"Node.js"


============================================================
19. INMUTABILIDAD
============================================================

Esta palabra es importante:


INMUTABILIDAD.


En React normalmente
no modificamos directamente
el State existente.


En lugar de:


modificar el valor existente


hacemos:


crear un nuevo valor.


Por ejemplo:


INCORRECTO:


technologies.push("Node.js");


CORRECTO:


setTechnologies([
    ...technologies,
    "Node.js"
]);


La idea es:


Old state


↓

crear nuevo state


↓

setState(newState)


============================================================
20. STATE CON OBJECTS
============================================================

Podemos tener:


const [user, setUser] =
    useState({

        name: "Zenen",

        role: "Software Engineer"

    });


Ahora:


user


es:


{

    name: "Zenen",

    role: "Software Engineer"

}


Para actualizar el nombre:


setUser({

    ...user,

    name: "Carlos"

});


¿Por qué usamos:


...user


?


Porque queremos mantener
las propiedades existentes.


Si hacemos simplemente:


setUser({

    name: "Carlos"

});


perderíamos:


role.


Por eso normalmente hacemos:


setUser({

    ...user,

    name: "Carlos"

});


Resultado:


{

    name: "Carlos",

    role: "Software Engineer"

}


============================================================
21. STATE Y DESTRUCTURING
============================================================

Recuerda:


const [count, setCount] =
    useState(0);


Esto utiliza:

ARRAY DESTRUCTURING.


No es magia de React.


Es JavaScript.


Esto es precisamente
por qué los fundamentos
que estudiamos anteriormente
eran importantes.


============================================================
22. STATE Y EVENTOS
============================================================

State normalmente
se vuelve interesante
cuando existe interacción.


Por ejemplo:


<button
    onClick={increment}
>


El usuario hace click.


↓

event


↓

function


↓

setCount


↓

state cambia


↓

re-render


↓

UI cambia.


Este flujo debes memorizarlo
conceptualmente.


============================================================
23. NO LLAMES LA FUNCIÓN
24. ANTES DE TIEMPO
============================================================

Incorrecto:


<button
    onClick={increment()}
>


Eso ejecuta:

increment()


durante el render.


Normalmente queremos pasar
la referencia de la función:


<button
    onClick={increment}
>


React la ejecutará
cuando ocurra el click.


Esto es un error
muy común para principiantes.


============================================================
25. ¿Y SI NECESITO ARGUMENTOS?
============================================================

Puedes hacer:


<button
    onClick={() => handleDelete(5)}
>


Aquí:


() =>


crea una función.


Y cuando ocurre el click:


handleDelete(5)


se ejecuta.


Lo estudiaremos con mayor
profundidad en Events.


============================================================
26. FUNCIÓN ACTUALIZADORA
============================================================

Hay una segunda forma
muy importante de actualizar
State.


Tenemos:


setCount(count + 1);


Pero React permite:


setCount(prevCount =>
    prevCount + 1
);


¿Qué significa?


React proporciona
el valor anterior:


prevCount


y nosotros calculamos
el siguiente.


Por ejemplo:


prevCount = 0


↓

prevCount + 1


↓

1


Esto es especialmente útil
cuando hacemos múltiples
actualizaciones.


============================================================
27. ¿POR QUÉ USAR prevState?
============================================================

Imagina:


setCount(count + 1);
setCount(count + 1);


Podrías pensar:


0 → 1 → 2


Pero debido a cómo React
procesa actualizaciones,
no siempre debes depender
de la variable actual
cuando haces múltiples
updates consecutivos.


Es más seguro hacer:


setCount(prev => prev + 1);

setCount(prev => prev + 1);


Ahora React puede aplicar
cada actualización utilizando
el valor anterior correcto.


Resultado:


0 → 1 → 2


Este patrón es MUY importante.


============================================================
28. STATE VS PROPS
============================================================

Ahora podemos comparar.


PROPS:


Parent
 ↓
Child


Son datos recibidos.


STATE:


Component
 ↓
own data


Es información que
el componente administra.


Ejemplo:


function UserCard({ name }) {


name


es:

PROP.


Mientras:


const [isOnline, setIsOnline] =
    useState(false);


isOnline


es:

STATE.


============================================================
29. PROP + STATE
============================================================

Ambos pueden trabajar juntos.


Por ejemplo:


function UserCard({ name }) {

    const [isOnline, setIsOnline] =
        useState(false);

}


Tenemos:


name


→ prop.


isOnline


→ state.


El componente recibe:

name


pero controla:

isOnline.


Esto es extremadamente común
en aplicaciones reales.


============================================================
30. STATE PERTENECE AL COMPONENTE
============================================================

Supongamos:


function Counter() {

    const [count, setCount] =
        useState(0);

}


Ese State pertenece
a esa instancia del componente.


Si utilizamos:


<Counter />


dos veces:


<Counter />
<Counter />


cada uno tendrá
su propio State.


Conceptualmente:


Counter 1
count = 0


Counter 2
count = 0


Si hacemos click
en el primero:


Counter 1
count = 1


Counter 2
count = 0


No necesariamente
cambian ambos.


Cada instancia mantiene
su propio State.


============================================================
31. ¿DÓNDE DECLARAR useState?
============================================================

Los Hooks como useState
deben utilizarse
en el nivel superior
del componente.


Correcto:


function Counter() {

    const [count, setCount] =
        useState(0);

}


No debemos colocarlo
dentro de un if:


if (something) {

    const [count, setCount] =
        useState(0);

}


Tampoco dentro
de un loop.


Por ahora recuerda:


Hooks
→ top level.


Más adelante aprenderemos
por qué React necesita
este comportamiento.


============================================================
32. NOMBRE DE LOS SETTERS
============================================================

Convención:


const [count, setCount]


const [name, setName]


const [isOpen, setIsOpen]


const [users, setUsers]


const [theme, setTheme]


Normalmente:


set + nombre del state.


Esto hace que el código
sea muy fácil de leer.


============================================================
33. STATE NO NECESARIAMENTE
34. ES UN VALOR SIMPLE
============================================================

State puede representar
cosas complejas.


Por ejemplo:


const [form, setForm] =
    useState({

        email: "",

        password: ""

    });


O:


const [users, setUsers] =
    useState([]);


O:


const [isLoading, setIsLoading] =
    useState(false);


Por eso State será
fundamental para construir
aplicaciones reales.


============================================================
35. DEV PULSE — STATE
============================================================

Ahora conectamos
todo lo aprendido.


Ayer DevPulse tenía:


ProfileCard
Stats
Technologies


y recibían Props.


Hoy podemos agregar State.


Por ejemplo:


const [isFollowing, setIsFollowing] =
    useState(false);


Ahora podemos tener:


[ Follow ]


Después del click:


[ Following ]


El flujo:


User clicks
   ↓
setIsFollowing(true)
   ↓
State changes
   ↓
React re-renders
   ↓
Button changes


============================================================
36. DEV PULSE — FOLLOWERS
============================================================

Podemos tener:


const [followers, setFollowers] =
    useState(1250);


Botón:


Follow


Al hacer click:


setFollowers(followers + 1);


Entonces:


1250


↓

1251


La UI se actualiza.


Más adelante aprenderemos
una arquitectura mejor para
manejar esto cuando el valor
venga de una API.


============================================================
37. DEV PULSE — SEARCH
============================================================

Podemos tener:


const [search, setSearch] =
    useState("");


Ahora:


search


representa lo que el usuario
está buscando.


Más adelante:


input


↓

state


↓

API


↓

results


Esto será exactamente
el tipo de flujo que
construiremos en DevPulse.


============================================================
38. EL MODELO MENTAL COMPLETO
============================================================

Este es el modelo
que quiero que entiendas:


USER
 ↓
EVENT
 ↓
FUNCTION
 ↓
setState()
 ↓
STATE CHANGE
 ↓
RE-RENDER
 ↓
UPDATED UI


Ejemplo:


Click
 ↓
increment()
 ↓
setCount()
 ↓
count cambia
 ↓
React renderiza
 ↓
"Count: 1"


============================================================
39. ERROR CRÍTICO
============================================================

NO hagas:


count++;


Ni:


count = count + 1;


Para modificar React State.


Utiliza:


setCount(...)


¿Por qué?


Porque el setter comunica
el cambio a React.


============================================================
40. OTRO ERROR
============================================================

NO hagas:


setCount(count);


si no estás cambiando nada.


Esto no tiene sentido
en la mayoría de casos.


Queremos establecer
un nuevo valor.


============================================================
41. STATE ES REACTIVO
============================================================

Una forma de entender
State:


React "reacciona"
a cambios de State.


Por eso:


State


es una de las bases
del modelo React.


Cuando State cambia:


React
 ↓
re-render
 ↓
UI actualizada.


============================================================
42. CHECKPOINT
============================================================

Antes de terminar el día
debes poder responder
SIN mirar:

1. ¿Qué es State?

2. ¿Qué problema resuelve?

3. ¿Qué hace useState?

4. ¿Qué devuelve useState?

5. ¿Qué es el setter?

6. ¿Qué es un re-render?

7. ¿Qué ocurre después
   de setCount()?

8. ¿Por qué no debemos
   modificar State directamente?

9. ¿Qué significa
   inmutabilidad?

10. ¿Cómo actualizas
    un array?

11. ¿Cómo actualizas
    un object?

12. ¿Qué diferencia hay
    entre Props y State?

13. ¿Qué significa:

    setCount(prev => prev + 1)


14. ¿Qué significa
    "State pertenece
    al componente"?

15. ¿Cuál es el flujo:


    Event
      ↓
    setState
      ↓
    State
      ↓
    re-render
      ↓
    UI


Si puedes explicar esto
con tus propias palabras:

🔥 DÍA 3 COMPLETADO.


============================================================
MODELO MENTAL FINAL
============================================================


          USER
           │
           ↓
         EVENT
           │
           ↓
       setState()
           │
           ↓
      STATE CHANGE
           │
           ↓
       RE-RENDER
           │
           ↓
       UPDATED UI


============================================================
FIN DE TEORÍA
============================================================
*/