/*
==========================================================
SEMANA 4 — DÍA 5
PERFORMANCE EN REACT
==========================================================

TEMAS:

1. Render
2. Re-render
3. Qué provoca un re-render
4. Qué NO provoca un re-render
5. Parent → Child
6. Referential Equality
7. Objetos y referencias
8. Funciones y referencias
9. React.memo
10. useMemo
11. useCallback
12. Diferencias entre ellos
13. Cuándo utilizarlos
14. Cuándo NO utilizarlos
15. Listas y performance
16. Cálculos costosos
17. Props
18. Memoización
19. Errores comunes
20. Aplicación a Git2Post

==========================================================
*/


/*
==========================================================
1. ¿QUÉ SIGNIFICA RENDERIZAR?
==========================================================

Uno de los conceptos más importantes
para entender performance en React
es entender qué significa "render".

Cuando React necesita actualizar
la interfaz, ejecuta el componente
para determinar qué debería mostrar.

Por ejemplo:

function Profile() {

    return (
        <h1>Zenen</h1>
    );

}


React ejecuta:

Profile()


y obtiene:

<h1>Zenen</h1>


Eso forma parte del proceso de render.


==========================================================
*/


/*
==========================================================
2. ¿QUÉ ES UN RE-RENDER?
==========================================================

Un re-render significa que React
vuelve a ejecutar un componente
para determinar si su salida visual
necesita actualizarse.


Por ejemplo:

function Counter() {

    const [count, setCount] =
        useState(0);


    return (
        <button
            onClick={() =>
                setCount(count + 1)
            }
        >
            {count}
        </button>
    );

}


Cuando:

setCount(...)


actualiza el estado,

React vuelve a ejecutar:

Counter()


Esto es un re-render.


==========================================================
*/


/*
==========================================================
3. RE-RENDER NO SIGNIFICA
NECESARIAMENTE ACTUALIZAR EL DOM
==========================================================

Esto es MUY importante.


React puede volver a ejecutar
un componente sin necesariamente
modificar todo el DOM.


Conceptualmente:

State changes
     ↓
React render
     ↓
React compares result
     ↓
React updates only
what changed


Por eso:

"re-render"

NO significa:

"React reconstruyó toda la página
desde cero."


==========================================================
*/


/*
==========================================================
4. ¿QUÉ PROVOCA UN RE-RENDER?
==========================================================

Principalmente:

1. Cambio de state.
2. Cambio de props.
3. Re-render del parent.
4. Actualizaciones relacionadas
   con Context.


Por ejemplo:

const [count, setCount] =
    useState(0);


setCount(1);


provoca una actualización
del componente que posee ese state.


==========================================================
*/


/*
==========================================================
5. EL PARENT Y EL CHILD
==========================================================

Imagina:

function Parent() {

    const [count, setCount] =
        useState(0);


    return (
        <>
            <button>
                {count}
            </button>

            <Child />
        </>
    );

}


function Child() {

    console.log("Child render");

    return <div>Child</div>;

}


Cuando Parent cambia:

setCount(...)


Parent vuelve a renderizar.


Y normalmente React vuelve a procesar
también el Child.


Aunque:

Child

no haya cambiado.


Esto puede ser perfectamente normal.


==========================================================
*/


/*
==========================================================
6. ¿ESO ES UN PROBLEMA?
==========================================================

NO necesariamente.


Un re-render no es automáticamente
un problema de performance.


React está diseñado para
renderizar frecuentemente.


El problema aparece cuando:

- hay muchos componentes
- hay listas grandes
- existen cálculos pesados
- existen renders muy frecuentes
- hay componentes costosos
- existen objetos/funciones nuevas
  innecesariamente
- la aplicación realiza demasiado trabajo


Entonces debemos optimizar.


==========================================================
*/


/*
==========================================================
7. PRIMERA REGLA DE PERFORMANCE
==========================================================

NO optimices sin necesidad.


Esto es muy importante.


Incorrecto:

"Voy a poner useMemo
en todos mis componentes."


No.


Primero:

1. Detectar problema.
2. Medir.
3. Entender causa.
4. Optimizar.
5. Volver a medir.


Performance profesional
es:

MEDIR → ENTENDER → OPTIMIZAR.


==========================================================
*/


/*
==========================================================
8. REFERENCIAS
==========================================================

Aquí aparece un concepto
MUY importante:

Referential Equality.


En JavaScript:

const a = {};
const b = {};


Aunque:

a

y:

b

tengan exactamente
el mismo contenido,


a === b


es:

false


¿Por qué?


Porque son objetos diferentes
en memoria.


==========================================================
*/


/*
==========================================================
9. OBJETOS
==========================================================

Observa:

const userA = {
    name: "Zenen"
};


const userB = {
    name: "Zenen"
};


userA === userB


false.


Porque:

userA → referencia A

userB → referencia B


Aunque:

userA.name === userB.name


sea:

true.


==========================================================
*/


/*
==========================================================
10. ARRAYS
==========================================================

Lo mismo:

const a = [];
const b = [];


a === b


false.


Cada literal crea
un nuevo array.


==========================================================
*/


/*
==========================================================
11. FUNCIONES
==========================================================

Esto también sucede con funciones.


const handleClick = () => {

    console.log("click");

};


Cada vez que el componente
se vuelve a ejecutar,
esa función puede ser creada
nuevamente.


Es una nueva referencia.


Esto será importante para:

useCallback


==========================================================
*/


/*
==========================================================
12. PROBLEMA CON PROPS
==========================================================

Imagina:

function Parent() {

    const user = {
        name: "Zenen"
    };


    return (
        <Child user={user} />
    );

}


Cada render de Parent
puede crear un nuevo objeto:

{
    name: "Zenen"
}


Aunque los datos sean iguales,
la referencia es diferente.


Esto puede provocar que
un componente memoizado
considere que sus props cambiaron.


==========================================================
*/


/*
==========================================================
13. React.memo
==========================================================

React.memo permite memoizar
un componente.


Ejemplo:

const UserCard = React.memo(
    function UserCard({ user }) {

        return (
            <div>
                {user.name}
            </div>
        );

    }
);


Conceptualmente:

Si las props no cambiaron,
React puede evitar volver
a renderizar el componente.


==========================================================
*/


/*
==========================================================
14. ¿QUÉ HACE REALMENTE React.memo?
==========================================================

React.memo compara
las props del componente.


Si considera que son iguales:

puede reutilizar
el resultado anterior.


Si las props cambian:

renderiza nuevamente.


IMPORTANTE:

React.memo NO significa:

"Este componente jamás
volverá a renderizar."


El componente puede renderizar
por otras razones.


==========================================================
*/


/*
==========================================================
15. React.memo Y OBJETOS
==========================================================

Aquí aparece un problema.


Tenemos:

const Child = React.memo(
    function Child({ user }) {

        ...

    }
);


Parent:

function Parent() {

    const user = {
        name: "Zenen"
    };


    return (
        <Child user={user} />
    );

}


Aunque user tenga:

{
    name: "Zenen"
}


en cada render
podríamos tener una nueva referencia.


Por lo tanto:

React.memo

puede considerar
que la prop cambió.


==========================================================
*/


/*
==========================================================
16. useMemo
==========================================================

Aquí entra:

useMemo()


useMemo permite memorizar
el resultado de un cálculo.


Ejemplo:

const expensiveValue = useMemo(
    () => {

        return expensiveCalculation(data);

    },
    [data]
);


Mientras:

data

no cambie,

React puede reutilizar
el resultado calculado.


==========================================================
*/


/*
==========================================================
17. ¿QUÉ MEMORIZA useMemo?
==========================================================

useMemo memoriza:

VALOR.


Por ejemplo:

const filteredRepositories =
    useMemo(() => {

        return repositories.filter(...);

    }, [repositories, search]);


Lo que estamos memorizando es:

filteredRepositories


No una función.


==========================================================
*/


/*
==========================================================
18. ¿CUÁNDO TIENE SENTIDO useMemo?
==========================================================

Cuando el cálculo es
realmente costoso.


Por ejemplo:

- procesar miles de elementos
- ordenar grandes datasets
- cálculos complejos
- transformaciones pesadas


No tiene mucho sentido:

const fullName = useMemo(
    () => `${name} ${lastName}`,
    [name, lastName]
);


Ese cálculo es trivial.


==========================================================
*/


/*
==========================================================
19. useCallback
==========================================================

useCallback es parecido,
pero memoriza una función.


Ejemplo:

const handleSearch = useCallback(
    (username) => {

        searchUser(username);

    },
    [searchUser]
);


Lo que obtenemos:

una referencia estable
de la función mientras
las dependencias no cambien.


==========================================================
*/


/*
==========================================================
20. DIFERENCIA PRINCIPAL
==========================================================

useMemo:

memoriza un VALOR.


useCallback:

memoriza una FUNCIÓN.


Podemos recordarlo:


useMemo
    ↓
memoized value


useCallback
    ↓
memoized function


==========================================================
*/


/*
==========================================================
21. useCallback NO HACE LA FUNCIÓN
MÁS RÁPIDA
==========================================================

Esto es importante.


useCallback:

NO significa:

"esta función ejecutará
más rápido."


Significa:

"mantén la misma referencia
de esta función mientras
las dependencias no cambien."


Eso puede ayudar a evitar
renders innecesarios
en componentes memoizados.


==========================================================
*/


/*
==========================================================
22. React.memo + useCallback
==========================================================

Aquí tenemos una combinación
muy común.


Parent:

const handleClick = useCallback(
    () => {

        ...

    },
    []
);


Child:

const Button = React.memo(
    function Button({ onClick }) {

        ...

    }
);


Ahora:

Parent re-render


pero:

handleClick

mantiene su referencia.


Por lo tanto:

Button

puede evitar
un re-render innecesario.


==========================================================
*/


/*
==========================================================
23. SIN useCallback
==========================================================

Parent:

function Parent() {

    const handleClick = () => {};

    return (
        <Button
            onClick={handleClick}
        />
    );

}


Cada render:

handleClick

puede ser una nueva referencia.


Entonces:

React.memo(Button)


puede detectar:

onClick cambió.


==========================================================
*/


/*
==========================================================
24. CON useCallback
==========================================================

function Parent() {

    const handleClick =
        useCallback(() => {

            ...

        }, []);


    return (
        <Button
            onClick={handleClick}
        />
    );

}


Ahora:

handleClick

mantiene su referencia
mientras las dependencias
no cambien.


==========================================================
*/


/*
==========================================================
25. PERO NO USES useCallback
EN TODAS PARTES
==========================================================

Esto:

const handleClick =
    useCallback(() => {

        console.log("click");

    }, []);


puede ser completamente
innecesario.


Si:

- el componente es pequeño
- no hay problema de renders
- no existe un child memoizado
- la función es trivial


no necesitas useCallback.


==========================================================
*/


/*
==========================================================
26. MEMOIZACIÓN TIENE COSTO
==========================================================

useMemo
useCallback
React.memo


no son gratis.


React necesita mantener
información adicional.


Por eso:

"más memoización"

NO significa:

"más performance."


Debemos utilizarla
cuando existe un beneficio real.


==========================================================
*/


/*
==========================================================
27. EJEMPLO CON GIT2POST
==========================================================

Imagina:

repositories


y:

search


Tenemos:

const filteredRepositories =
    repositories.filter(
        repository =>
            repository.name
                .toLowerCase()
                .includes(search)
    );


Si tenemos:

5 repositorios


no importa.


Si tenemos:

10,000


puede ser diferente.


Entonces podemos considerar:

useMemo()


==========================================================
*/


/*
==========================================================
28. useMemo EN GIT2POST
==========================================================

Ejemplo conceptual:

const filteredRepositories =
    useMemo(() => {

        return repositories.filter(
            repository =>
                repository.name
                    .toLowerCase()
                    .includes(search
                        .toLowerCase())
        );

    }, [
        repositories,
        search
    ]);


Ahora React puede reutilizar
el resultado mientras:

repositories

y:

search

no cambien.


==========================================================
*/


/*
==========================================================
29. IMPORTANTE:
DEPENDENCIAS
==========================================================

Si escribes:

useMemo(
    () => calculate(data),
    []
);


pero:

data

cambia,


el cálculo no se actualizará
correctamente.


Las dependencias deben representar
los valores utilizados
por el cálculo.


==========================================================
*/


/*
==========================================================
30. useCallback EN GIT2POST
==========================================================

Imagina:

RepositoryList

recibe:

onSelectRepository


Podríamos tener:

const handleSelect =
    useCallback(
        (repository) => {

            setSelectedRepository(
                repository
            );

        },
        []
    );


Y:

<RepositoryList
    onSelect={handleSelect}
/>


Esto puede ser útil
si RepositoryList está memoizado
y existe un motivo real
para estabilizar la referencia.


==========================================================
*/


/*
==========================================================
31. LISTAS
==========================================================

Las listas son un lugar
donde performance puede importar.


Ejemplo:

repositories.map(repository => (

    <RepositoryCard
        key={repository.id}
        repository={repository}
    />

))


Con:

100 repositorios


React tiene bastante trabajo.


Con:

10,000


mucho más.


Aquí podemos considerar:

- memoización
- virtualización
- paginación
- búsqueda
- filtros


==========================================================
*/


/*
==========================================================
32. React.memo PARA LIST ITEMS
==========================================================

Podemos tener:

const RepositoryCard =
    React.memo(
        function RepositoryCard({
            repository
        }) {

            return (
                ...
            );

        }
    );


Ahora React puede evitar
renders de cards cuyas props
no hayan cambiado.


Pero nuevamente:

NO significa automáticamente
que debas hacerlo.


Primero observa
si existe un problema.


==========================================================
*/


/*
==========================================================
33. KEYS Y PERFORMANCE
==========================================================

Recuerda:

key


debe ser estable.


Correcto:

key={repository.id}


Evita:

key={index}


cuando los elementos
pueden cambiar de posición,
agregarse o eliminarse.


La key ayuda a React
a identificar elementos.


==========================================================
*/


/*
==========================================================
34. COMPONENTES GRANDES
==========================================================

Un componente gigante puede
dificultar performance y mantenimiento.


Por ejemplo:

Dashboard.jsx


con:

500 líneas.


Puede contener:

Header
Sidebar
Stats
Repositories
Posts
Activity
Modal


Podemos dividirlo:

Dashboard
├── Header
├── Sidebar
├── Stats
├── RepositoryList
├── PostList
└── Activity


Esto mejora:

- mantenimiento
- legibilidad
- reutilización
- capacidad de optimización


==========================================================
*/


/*
==========================================================
35. STATE LOCAL
==========================================================

Una de las mejores optimizaciones
es colocar el state
lo más cerca posible
de donde se utiliza.


Ejemplo:


Si solamente:

SearchInput


necesita:

search


no necesariamente necesitas
guardar search en un componente
padre enorme.


Esto puede reducir
renders innecesarios.


Conceptualmente:

State colocated
    ↓
menos componentes afectados


==========================================================
*/


/*
==========================================================
36. NO SUBAS STATE
SIN NECESIDAD
==========================================================

Esto es:

State Colocation.


En lugar de:

App
 ↓
Dashboard
 ↓
RepositorySection
 ↓
Search


tener:

search state


en App


puede ser mejor:

Search
 ↓
search state


si nadie más necesita
ese estado.


==========================================================
*/


/*
==========================================================
37. PERFORMANCE = ARQUITECTURA
==========================================================

Muchas veces
la mejor optimización
NO es useMemo.


Puede ser:

- dividir componentes
- mover state
- evitar renders innecesarios
- reducir datos
- paginar
- evitar requests
- utilizar caching
- virtualizar listas


Las herramientas de memoización
son solamente una parte
del problema.


==========================================================
*/


/*
==========================================================
38. PERFILAR
==========================================================

React Developer Tools
proporciona herramientas
para analizar renders.


Puedes observar:

- qué componentes renderizan
- cuánto tardan
- qué actualizaciones
  están ocurriendo


La idea profesional:

NO adivinar.


MEDIR.


==========================================================
*/


/*
==========================================================
39. REGLA DE ORO
==========================================================

No hagas:

useMemo
useCallback
React.memo


por costumbre.


Haz:

Detectar problema
↓
Medir
↓
Entender
↓
Optimizar
↓
Medir nuevamente


==========================================================
*/


/*
==========================================================
40. TABLA MENTAL
==========================================================


React.memo

¿Qué memoriza?

COMPONENTE


¿Qué compara?

PROPS


----------------------------------------------------------


useMemo

¿Qué memoriza?

VALOR


----------------------------------------------------------


useCallback

¿Qué memoriza?

FUNCIÓN


==========================================================
*/


/*
==========================================================
41. EJEMPLO FINAL
==========================================================

Tenemos:

const RepositoryList =
    React.memo(
        function RepositoryList({
            repositories,
            onSelect
        }) {

            ...

        }
    );


Parent:

const filtered =
    useMemo(() => {

        return repositories.filter(...);

    }, [repositories, search]);


const handleSelect =
    useCallback(
        repository => {

            setSelectedRepository(
                repository
            );

        },
        []
    );


Entonces:

repositories
    ↓
useMemo
    ↓
filtered


handleSelect
    ↓
useCallback


RepositoryList
    ↓
React.memo


Cada herramienta tiene
una responsabilidad distinta.


==========================================================
*/


/*
==========================================================
42. RESUMEN
==========================================================

RENDER:

React ejecuta componentes
para determinar UI.


RE-RENDER:

El componente vuelve a ejecutarse
después de una actualización.


React.memo:

Memoriza un componente
basándose principalmente
en sus props.


useMemo:

Memoriza un valor calculado.


useCallback:

Memoriza una función.


Y:

NO optimices sin medir.


==========================================================
*/