/*
============================================================
SEMANA 3 — DÍA 2
REACT FUNDAMENTALS
PROPS
============================================================

OBJETIVOS DEL DÍA

Al terminar este día debes entender:

1. Qué son las props
2. Por qué existen
3. Cómo enviar props
4. Cómo recibir props
5. Props como objeto
6. Destructuring de props
7. Props con diferentes tipos de datos
8. Props dinámicas
9. Props con arrays y objetos
10. Props con funciones
11. Props booleanas
12. Children
13. Flujo de datos en React
14. Parent → Child
15. Por qué las props son importantes
16. Cómo utilizar props en DevPulse


============================================================
1. EL PROBLEMA QUE TENÍAMOS AYER
============================================================

Ayer creamos componentes.

Por ejemplo:

function UserCard() {

    return (
        <div>
            <h2>Zenen</h2>
            <p>Software Engineer</p>
        </div>
    );

}


Esto funciona.


Pero tenemos un problema.


¿Qué pasa si queremos mostrar
100 usuarios?


Podríamos hacer:


function UserCard() {

    return (
        <div>
            <h2>Zenen</h2>
            <p>Software Engineer</p>
        </div>
    );

}


Y luego:


function AnotherUserCard() {

    return (
        <div>
            <h2>Carlos</h2>
            <p>Frontend Developer</p>
        </div>
    );

}


Pero esto sería terrible.


Estamos duplicando código.


Necesitamos una manera de decir:


"Utiliza el mismo componente,
pero cambia sus datos."


Ahí aparecen:

PROPS.


============================================================
2. ¿QUÉ SON LAS PROPS?
============================================================

Props significa:

PROPERTIES.


Son datos que un componente
recibe desde su componente padre.


Piensa en una función de JavaScript.


Por ejemplo:


function greet(name) {

    return `Hello ${name}`;

}


Podemos hacer:


greet("Zenen");


o:


greet("Carlos");


La función es la misma.


Lo único que cambia es:

name.


En React ocurre algo parecido.


Tenemos:


function UserCard(props) {

    return (
        <h2>
            {props.name}
        </h2>
    );

}


Ahora podemos hacer:


<UserCard name="Zenen" />


o:


<UserCard name="Carlos" />


El componente es el mismo.


Los datos cambian.


============================================================
3. COMPONENTE PADRE Y COMPONENTE HIJO
============================================================

Cuando un componente utiliza
otro componente:


function App() {

    return (
        <UserCard />
    );

}


Podemos decir:


App

es el:

PARENT

y:


UserCard

es el:

CHILD.


Visualmente:


App
 │
 └── UserCard


Ahora:


App

puede enviar información
a:

UserCard.


Esa información viaja mediante:

PROPS.


Por lo tanto:


Parent
  │
  │ props
  ↓
Child


Este concepto es fundamental.


============================================================
4. ENVIAR UNA PROP
============================================================

Supongamos:


function App() {

    return (
        <UserCard name="Zenen" />
    );

}


Aquí:


name="Zenen"


es una prop.


El componente:

UserCard


está recibiendo:

name.


Podemos enviar varias:


<UserCard
    name="Zenen"
    role="Software Engineer"
    country="Colombia"
/>


Tenemos tres props:


name
role
country


============================================================
5. RECIBIR PROPS
============================================================

Ahora:


function UserCard(props) {

    return (
        <div>

            <h2>
                {props.name}
            </h2>

            <p>
                {props.role}
            </p>

            <p>
                {props.country}
            </p>

        </div>
    );

}


¿Qué está pasando?


React crea un objeto
con las props.


Conceptualmente:


props = {

    name: "Zenen",

    role: "Software Engineer",

    country: "Colombia"

}


Entonces:


props.name


es:


"Zenen"


props.role


es:


"Software Engineer"


props.country


es:


"Colombia"


============================================================
6. LAS PROPS SON UN OBJETO
============================================================

Esto es MUY importante.


Cuando escribes:


function UserCard(props) {


puedes pensar:


props


es un objeto.


Por ejemplo:


props = {

    name: "Zenen",

    role: "Software Engineer"

}


Por eso puedes hacer:


props.name


props.role


Es exactamente la misma
idea que aprendiste en JavaScript
con objetos.


============================================================
7. CONEXIÓN CON JAVASCRIPT
============================================================

En Semana 1 aprendiste:


const user = {

    name: "Zenen",

    age: 25

};


Y:


user.name


Ahora:


function UserCard(props) {

    return (
        <h2>
            {props.name}
        </h2>
    );

}


Es el mismo concepto.


props


es un objeto.


Y:


props.name


accede a una propiedad.


Esto es precisamente
por qué JavaScript sólido
hace React mucho más fácil.


============================================================
8. DESTRUCTURING
============================================================

Podemos escribir:


function UserCard(props) {

    const name = props.name;
    const role = props.role;

}


Pero JavaScript nos permite
hacer destructuring:


function UserCard({ name, role }) {

    return (
        <div>

            <h2>{name}</h2>

            <p>{role}</p>

        </div>
    );

}


Esto significa:


const {
    name,
    role
} = props;


Es simplemente una manera
más limpia de obtener
las propiedades.


============================================================
9. props vs DESTRUCTURING
============================================================

Ambos son correctos.


Forma 1:


function UserCard(props) {

    return (
        <h2>
            {props.name}
        </h2>
    );

}


Forma 2:


function UserCard({ name }) {

    return (
        <h2>
            {name}
        </h2>
    );

}


Personalmente, en proyectos
modernos verás muchísimo:


function UserCard({ name, role }) {


porque es más limpio.


Pero debes entender ambas formas.


============================================================
10. PROPS CON STRINGS
============================================================

Podemos enviar strings:


<UserCard
    name="Zenen"
/>


Y recibir:


function UserCard({ name }) {

    return (
        <h2>{name}</h2>
    );

}


Resultado:


Zenen


============================================================
11. PROPS CON NÚMEROS
============================================================

Para enviar un número
utilizamos:


{ }


Por ejemplo:


<UserCard
    followers={1250}
/>


NO:


<UserCard
    followers="1250"
/>


Aunque ambas parecen similares,
la segunda es un string.


La primera es un number.


Podemos hacer:


function UserCard({ followers }) {

    return (
        <p>
            Followers: {followers}
        </p>
    );

}


Resultado:


Followers: 1250


============================================================
12. ¿POR QUÉ IMPORTA EL TIPO?
============================================================

Porque JavaScript diferencia:


"1250"


de:


1250


El primero:


string


El segundo:


number.


Esto será todavía más importante
cuando lleguemos a TypeScript
en la Semana 5.


============================================================
13. PROPS CON BOOLEANOS
============================================================

También podemos enviar:


isOnline={true}


Por ejemplo:


<UserCard
    isOnline={true}
/>


Y recibir:


function UserCard({ isOnline }) {

    return (
        <p>
            {isOnline ? "Online" : "Offline"}
        </p>
    );

}


Resultado:


Online


Si:


isOnline={false}


Resultado:


Offline


Esto conecta directamente
con JavaScript y operadores
ternarios.


============================================================
14. BOOLEAN PROPS
============================================================

Existe una sintaxis corta.


En lugar de:


<UserCard isOnline={true} />


podemos escribir:


<UserCard isOnline />


Eso significa:


isOnline = true.


Esto es muy común en React.


============================================================
15. PROPS CON ARRAYS
============================================================

Podemos enviar arrays.


Por ejemplo:


const technologies = [
    "JavaScript",
    "React",
    "Node.js"
];


Luego:


<Technologies
    technologies={technologies}
/>


Y recibir:


function Technologies({ technologies }) {

    return (

        <ul>

            {technologies.map(technology => (

                <li key={technology}>
                    {technology}
                </li>

            ))}

        </ul>

    );

}


Aquí tenemos:

Parent
 ↓
array
 ↓
props
 ↓
Child
 ↓
map()
 ↓
UI


============================================================
16. PROPS CON OBJECTS
============================================================

También podemos enviar
un objeto.


Por ejemplo:


const user = {

    name: "Zenen",

    role: "Software Engineer",

    country: "Colombia"

};


Después:


<UserCard
    user={user}
/>


Y:


function UserCard({ user }) {

    return (

        <div>

            <h2>
                {user.name}
            </h2>

            <p>
                {user.role}
            </p>

            <p>
                {user.country}
            </p>

        </div>

    );

}


Esto es simplemente
pasar un objeto como prop.


============================================================
17. PROPS PUEDEN SER CUALQUIER DATO
============================================================

Puedes pasar:


String


Number


Boolean


Array


Object


Function


Incluso otros elementos
de React.


Por ejemplo:


<UserCard
    name="Zenen"
    age={25}
    isOnline={true}
    technologies={["React", "Node"]}
    user={{ id: 1 }}
/>


Las props son muy flexibles.


============================================================
18. PROPS SON READ-ONLY
============================================================

Esta regla es IMPORTANTÍSIMA.


Un componente hijo:

NO debería modificar
directamente sus props.


Por ejemplo:


function UserCard({ name }) {

    name = "Carlos";

}


Esto es una mala práctica.


¿Por qué?


Porque las props pertenecen
al componente padre.


El hijo las recibe.


Visualmente:


Parent
 │
 │ owns data
 ↓
Props
 ↓
Child


El hijo puede:

LEER


las props.


Pero no debería:

MODIFICAR


directamente esas props.


============================================================
19. FLUJO UNIDIRECCIONAL
============================================================

React utiliza normalmente
un flujo de datos:


PARENT
  ↓
CHILD


Los datos bajan.


Por ejemplo:


App
 ↓
Dashboard
 ↓
UserCard


App puede enviar props
a Dashboard.


Dashboard puede enviar props
a UserCard.


Pero un hijo no modifica
directamente los datos
del padre mediante props.


Más adelante aprenderemos
cómo un hijo puede comunicar
una acción al padre utilizando
funciones.


============================================================
20. PROPS Y REUTILIZACIÓN
============================================================

Aquí está el verdadero poder.


Tenemos:


function UserCard({ name, role }) {

    return (

        <div>

            <h2>{name}</h2>

            <p>{role}</p>

        </div>

    );

}


Ahora podemos hacer:


<UserCard
    name="Zenen"
    role="Software Engineer"
/>


<UserCard
    name="Carlos"
    role="Data Scientist"
/>


<UserCard
    name="Maria"
    role="UX Designer"
/>


Mismo componente.


Tres datos diferentes.


Eso es:

REUSABILIDAD.


============================================================
21. PROPS EN DEV PULSE
============================================================

Ayer teníamos:


ProfileCard


con datos escritos directamente:


function ProfileCard() {

    return (

        <div>

            <h2>
                Zenen Contreras
            </h2>

            <p>
                Software Engineer
            </p>

            <p>
                Colombia
            </p>

        </div>

    );

}


Ahora queremos:


function ProfileCard({
    name,
    role,
    location
}) {

    return (

        <div>

            <h2>{name}</h2>

            <p>{role}</p>

            <p>{location}</p>

        </div>

    );

}


Y desde App:


<ProfileCard
    name="Zenen Contreras"
    role="Software Engineer"
    location="Colombia"
/>


Ahora ProfileCard
es realmente reutilizable.


============================================================
22. STATS EN DEV PULSE
============================================================

Podemos hacer:


function Stats({
    repositories,
    followers,
    following
}) {

    return (

        <div>

            <p>
                Repositories: {repositories}
            </p>

            <p>
                Followers: {followers}
            </p>

            <p>
                Following: {following}
            </p>

        </div>

    );

}


Y:


<Stats
    repositories={42}
    followers={120}
    following={80}
/>


Esto es mucho mejor
que escribir los números
directamente dentro del componente.


============================================================
23. ¿QUIÉN ES RESPONSABLE DE LOS DATOS?
============================================================

Esta pregunta es importante.


Supongamos:


App


tiene:


const user = {

    name: "Zenen",

    role: "Software Engineer"

};


Entonces:


App


es quien posee
esos datos.


Puede pasarlos:


<UserCard user={user} />


UserCard


simplemente los recibe.


Esto será extremadamente
importante cuando aprendamos:

useState.


Porque entonces tendremos:


STATE
 ↓
PROPS
 ↓
COMPONENT


============================================================
24. PROPS NO SON STATE
============================================================

No confundas:


PROPS


con:


STATE.


Props:

- vienen del padre
- son recibidas por el hijo
- son read-only para el hijo


State:

- pertenece a un componente
- puede cambiar
- provoca actualizaciones
- se estudia principalmente
  con useState


Hoy nos enfocamos
solamente en props.


Mañana veremos:

useState.


============================================================
25. CHILDREN
============================================================

Existe una prop especial:


children


Por ejemplo:


<Card>

    <h2>
        Hello
    </h2>

</Card>


Todo lo que colocamos
dentro de:


<Card>


se recibe mediante:


children.


El componente:


function Card({ children }) {

    return (

        <div>

            {children}

        </div>

    );

}


Esto permite crear
componentes muy flexibles.


============================================================
26. EJEMPLO DE CHILDREN
============================================================

Podemos hacer:


<Card>

    <h2>
        Zenen
    </h2>

    <p>
        Software Engineer
    </p>

</Card>


Card recibe:


children


que conceptualmente
contiene:


<h2>Zenen</h2>


y:


<p>Software Engineer</p>


Esto se llama:

COMPOSITION.


Lo usaremos mucho
en React.


============================================================
27. PROPS + FUNCTIONS
============================================================

También podemos pasar
funciones.


Por ejemplo:


function App() {

    function handleClick() {

        console.log("Clicked");

    }

    return (

        <Button
            onClick={handleClick}
        />

    );

}


El componente hijo:


function Button({ onClick }) {

    return (

        <button onClick={onClick}>
            Click me
        </button>

    );

}


Aquí:

App

envía una función.


Button

la recibe.


Esto será MUY importante
mañana cuando aprendamos
events + state.


============================================================
28. EL MODELO MENTAL
============================================================

Quiero que visualices:


function App() {

    return (

        <UserCard
            name="Zenen"
            role="Engineer"
        />

    );

}


Visualmente:


App
 │
 │ name = "Zenen"
 │ role = "Engineer"
 ↓
UserCard
 │
 ↓
UI


Las props son
el mecanismo mediante
el cual los componentes
pueden comunicarse
pasando información
hacia abajo.


============================================================
29. ERROR COMÚN #1
============================================================

Incorrecto:


<UserCard
    name={Zenen}
/>


React intentará buscar
una variable llamada:

Zenen.


Correcto:


<UserCard
    name="Zenen"
/>


O:


const name = "Zenen";

<UserCard
    name={name}
/>


============================================================
30. ERROR COMÚN #2
============================================================

Esto:


<UserCard
    followers="1250"
/>


manda un string.


Esto:


<UserCard
    followers={1250}
/>


manda un number.


============================================================
31. ERROR COMÚN #3
============================================================

Esto:


function UserCard(name) {


NO significa que:

name


sea directamente
la prop.


El primer argumento
es el objeto completo
de props.


Correcto:


function UserCard(props) {

    props.name;

}


O:


function UserCard({ name }) {

    name;

}


============================================================
32. ERROR COMÚN #4
============================================================

No hagas:


function UserCard({ name }) {

    name = "Carlos";

}


Las props deben tratarse
como read-only.


============================================================
33. LA IDEA MÁS IMPORTANTE
============================================================

Si solamente recuerdas
una cosa de hoy:


PROPS = DATOS QUE UN PADRE
ENVÍA A UN HIJO.


Es decir:


Parent
   ↓
 props
   ↓
Child


Y esto permite:


COMPONENTES REUTILIZABLES.


============================================================
34. CONEXIÓN CON TU JAVASCRIPT
============================================================

Lo que aprendiste
en las semanas anteriores:

Objects
Destructuring
Arrays
map
Functions


ahora aparece dentro
de React.


Ejemplo:


function UserCard({ user }) {

    return (

        <h2>
            {user.name}
        </h2>

    );

}


Aquí estás utilizando:

destructuring


object


property access


JSX


Todo lo que aprendiste
anteriormente.


Por eso NO estamos
aprendiendo React desde cero.


Estamos construyendo
sobre JavaScript.


============================================================
35. CHECKPOINT
============================================================

Antes de terminar el día
deberías poder explicar
sin mirar:

1. ¿Qué significa props?

2. ¿Quién envía las props?

3. ¿Quién recibe las props?

4. ¿Qué forma tienen
   normalmente las props?

5. ¿Cómo accedes a una prop?

6. ¿Qué es destructuring?

7. ¿Cómo pasas un number?

8. ¿Cómo pasas un boolean?

9. ¿Cómo pasas un array?

10. ¿Por qué las props
    son importantes?

11. ¿Qué significa
    flujo unidireccional?

12. ¿Qué es children?

13. ¿Cuál es la diferencia
    entre props y state?


Si puedes explicar todo esto
con tus propias palabras:

DÍA 2 COMPLETADO.


============================================================
MODELO MENTAL FINAL
============================================================


          PARENT
             │
             │
          PROPS
             │
             ↓
           CHILD
             │
             ↓
             UI


Props hacen que nuestros
componentes sean:

REUTILIZABLES
DINÁMICOS
CONFIGURABLES


============================================================
FIN DE TEORÍA
============================================================
*/