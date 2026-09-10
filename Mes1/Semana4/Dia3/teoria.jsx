/*
==========================================================
SEMANA 4 — DÍA 3
CUSTOM HOOKS
==========================================================

Objetivos:

1. Entender qué es un Custom Hook.
2. Entender por qué existen.
3. Aprender cuándo utilizarlos.
4. Aprender los Rules of Hooks.
5. Extraer lógica de componentes.
6. Crear Hooks reutilizables.
7. Separar UI, lógica y servicios.
8. Crear Hooks relacionados con APIs.
9. Crear Hooks relacionados con formularios.
10. Aplicar arquitectura profesional en React.

==========================================================
*/


/*
==========================================================
1. EL PROBLEMA QUE RESUELVEN LOS CUSTOM HOOKS
==========================================================

Imagina un componente:

function Repositories() {

    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchRepositories = async () => {
        ...
    };

    useEffect(() => {
        fetchRepositories();
    }, []);

    return (
        ...
    );
}

Al principio no hay ningún problema.

Pero imagina que este componente crece.

Ahora también tiene:

- filtros
- búsqueda
- paginación
- ordenamiento
- modales
- validaciones
- selección
- estados visuales

Podríamos terminar con:

function Repositories() {

    // 20 estados

    // 10 useEffects

    // 15 funciones

    // 5 llamadas API

    // 300 líneas de JSX

}

El componente comienza a tener demasiadas responsabilidades.


==========================================================
2. SEPARACIÓN DE RESPONSABILIDADES
==========================================================

Una buena aplicación intenta separar responsabilidades.

Por ejemplo:

COMPONENTE
    ↓
Se preocupa por la UI.

HOOK
    ↓
Se preocupa por la lógica relacionada con React.

SERVICE
    ↓
Se preocupa por comunicarse con una API.

API
    ↓
Proporciona los datos.


Por ejemplo:

Repositories.jsx
    ↓
useRepositories()
    ↓
repositoriesService.js
    ↓
GitHub API


Esto hace que cada pieza tenga una responsabilidad clara.


==========================================================
3. ¿QUÉ ES UN CUSTOM HOOK?
==========================================================

Un Custom Hook es una función de JavaScript que:

1. utiliza uno o más Hooks de React
2. normalmente comienza con "use"
3. encapsula lógica reutilizable

Ejemplo:

function useCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    return {
        count,
        increment
    };
}


Podemos utilizarlo:

function Counter() {

    const {
        count,
        increment
    } = useCounter();

    return (
        <button onClick={increment}>
            {count}
        </button>
    );
}


El componente NO necesita saber cómo funciona el contador.

Solo utiliza la API que le proporciona el Hook.


==========================================================
4. COMPONENTE VS CUSTOM HOOK
==========================================================

COMPONENTE:

function Counter() {

    return <button>Counter</button>;

}


Su trabajo:

UI.


CUSTOM HOOK:

function useCounter() {

    const [count, setCount] = useState(0);

    ...

}


Su trabajo:

Lógica.


Una forma sencilla de recordarlo:

Component
    ↓
¿Qué veo?

Hook
    ↓
¿Cómo funciona?


==========================================================
5. ¿POR QUÉ EL NOMBRE "use..."?
==========================================================

Por convención, los Custom Hooks empiezan con:

use

Ejemplos:

useAuth()
useForm()
useGitHub()
useRepositories()
usePosts()
useToggle()


Esto permite reconocer inmediatamente:

"Esta función es un Hook."


Pero hay algo más importante.

React utiliza las reglas de Hooks para determinar cómo debe manejar su estado.


==========================================================
6. RULES OF HOOKS
==========================================================

Existen reglas fundamentales.

Los Hooks deben ejecutarse:

- en componentes React
- en Custom Hooks

Y deben ejecutarse siempre en el mismo orden.


==========================================================
7. NO USES HOOKS DENTRO DE IF
==========================================================

INCORRECTO:

if (isLogged) {

    const [user, setUser] = useState(null);

}


¿Por qué?

Porque el orden de ejecución podría cambiar.

Primer render:

useState()
useEffect()
useState()


Segundo render:

useState()

if no se cumple
useState() no se ejecuta

El orden cambió.


React necesita mantener el mismo orden de Hooks entre renders.


CORRECTO:

const [user, setUser] = useState(null);

if (isLogged) {

    ...

}


==========================================================
8. NO USES HOOKS DENTRO DE LOOPS
==========================================================

INCORRECTO:

users.map(user => {

    const [active, setActive] = useState(false);

});


Los Hooks no deben depender de la cantidad de elementos.


==========================================================
9. NO USES HOOKS DENTRO DE FUNCIONES NORMALES
==========================================================

INCORRECTO:

function getUser() {

    const [user, setUser] = useState(null);

}


Si esa función necesita Hooks, debería ser:

function useUser() {

    const [user, setUser] = useState(null);

}


==========================================================
10. UN CUSTOM HOOK PUEDE UTILIZAR OTROS HOOKS
==========================================================

Esto es completamente válido:

function useUser() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        ...

    }, []);

}


Nuestro Custom Hook puede combinar:

useState
useEffect
useContext
useReducer
useMemo
useCallback
etc.


==========================================================
11. EL HOOK PUEDE DEVOLVER LO QUE NECESITEMOS
==========================================================

Por ejemplo:

function useCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    };

    return {
        count,
        increment,
        decrement
    };
}


El componente recibe:

{
    count,
    increment,
    decrement
}


Podemos pensar en esto como una pequeña API.


==========================================================
12. UN CUSTOM HOOK ES UNA ABSTRACCIÓN
==========================================================

Esta palabra es importante:

ABSTRACCIÓN.


El componente no necesita conocer los detalles internos.


Por ejemplo:

const {
    repositories,
    loading,
    error
} = useRepositories();


El componente no necesita saber:

- qué endpoint utilizaste
- cómo hiciste fetch
- cómo manejaste el error
- cómo cambiaste loading
- cómo guardaste los datos


Todo eso está abstraído.


==========================================================
13. CUSTOM HOOK PARA API
==========================================================

Un caso muy común:

function useGitHub() {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);


    const searchUser = async (username) => {

        try {

            setLoading(true);
            setError(null);

            const response = await fetch(
                `https://api.github.com/users/${username}`
            );

            if (!response.ok) {
                throw new Error("User not found");
            }

            const data = await response.json();

            setUser(data);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }

    };


    return {
        user,
        loading,
        error,
        searchUser
    };
}


Ahora nuestro componente puede hacer:

const {
    user,
    loading,
    error,
    searchUser
} = useGitHub();


Mucho más limpio.


==========================================================
14. PERO TODAVÍA PODEMOS MEJORARLO
==========================================================

Tenemos:

Component
    ↓
Hook
    ↓
fetch()


Esto puede funcionar.

Pero en una aplicación más grande queremos:

Component
    ↓
Hook
    ↓
Service
    ↓
API


¿Por qué?


Porque el Service es responsable de las comunicaciones externas.


Por ejemplo:

githubService.js

export async function getGitHubUser(username) {

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        throw new Error("User not found");
    }

    return response.json();
}


Entonces:

useGitHub.jsx

import { getGitHubUser } from "../services/githubService";


function useGitHub() {

    ...

    const searchUser = async (username) => {

        try {

            setLoading(true);

            const data =
                await getGitHubUser(username);

            setUser(data);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }

    };

}


Ahora cada capa tiene una responsabilidad.


==========================================================
15. RESPONSABILIDADES
==========================================================

COMPONENT:

"Quiero mostrar un botón."

HOOK:

"Cuando se presiona, necesito ejecutar esta lógica."

SERVICE:

"Necesito hacer esta petición HTTP."

API:

"Te devuelvo estos datos."


Esto parece sencillo.

Pero es una de las bases de una arquitectura mantenible.


==========================================================
16. CUSTOM HOOK PARA FORMULARIOS
==========================================================

Los formularios también tienen lógica repetitiva.


Ejemplo:

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");


Y:

const handleChange = (event) => {

    setUsername(event.target.value);

};


En aplicaciones grandes esto se repite constantemente.


Podemos crear:

function useForm(initialValues) {

    const [values, setValues] =
        useState(initialValues);


    const handleChange = (event) => {

        const {
            name,
            value
        } = event.target;


        setValues(prev => ({

            ...prev,

            [name]: value

        }));

    };


    const reset = () => {

        setValues(initialValues);

    };


    return {

        values,
        handleChange,
        reset

    };

}


Ahora:

const {
    values,
    handleChange,
    reset
} = useForm({

    username: ""

});


Esto es reutilizable.


==========================================================
17. CUSTOM HOOK PARA TOGGLE
==========================================================

Otro patrón muy común:

const [isOpen, setIsOpen] = useState(false);


Y:

setIsOpen(prev => !prev);


Podemos abstraerlo:

function useToggle(initialValue = false) {

    const [value, setValue] =
        useState(initialValue);


    const toggle = () => {

        setValue(prev => !prev);

    };


    return {

        value,
        toggle

    };

}


Ahora:

const {
    value,
    toggle
} = useToggle();


Esto puede utilizarse para:

- modales
- sidebar
- filtros
- dropdowns
- previews


==========================================================
18. ¿CUÁNDO CREAR UN CUSTOM HOOK?
==========================================================

NO debes convertir absolutamente todo en un Hook.


Crea un Custom Hook cuando:

1. Existe lógica reutilizable.
2. Existe lógica relacionada con React.
3. Un componente se está volviendo demasiado complejo.
4. Varios componentes necesitan la misma lógica.
5. Quieres separar lógica de presentación.


Ejemplo:

useAuth()
    → autenticación

useForm()
    → formularios

useGitHub()
    → GitHub

useRepositories()
    → repositorios


==========================================================
19. ¿CUÁNDO NO CREARLO?
==========================================================

Si simplemente tienes:

const fullName =
    `${firstName} ${lastName}`;


No necesitas:

useFullName()


Eso sería innecesario.


Puedes utilizar una función normal.


Recuerda:

CUSTOM HOOK
    ↓
Lógica que utiliza Hooks de React.


FUNCIÓN NORMAL
    ↓
Lógica que no necesita Hooks.


==========================================================
20. REGLA MENTAL
==========================================================

Pregúntate:

"¿Necesito useState, useEffect,
useContext u otro Hook?"

Si NO:

Probablemente una función normal.


Si SÍ:

Puede tener sentido un Custom Hook.


==========================================================
21. HOOKS NO SON PARA OCULTAR TODO
==========================================================

Esto también es importante.


No queremos:

useEverything()


que haga:

- autenticación
- GitHub
- posts
- filtros
- navegación
- modales
- settings


Eso sería un Hook monstruoso.


Queremos Hooks pequeños y enfocados.


useGitHub()
useRepositories()
usePosts()
useForm()
useToggle()


Cada uno tiene una responsabilidad.


==========================================================
22. ARQUITECTURA DE GIT2POST
==========================================================

Nuestro objetivo será:

src/

    components/

    pages/

    hooks/

        useGitHub.jsx
        useRepositories.jsx
        usePosts.jsx
        useForm.jsx
        useToggle.jsx

    services/

        githubService.js
        repositoriesService.js
        postsService.js

    context/

    layouts/

    router/

    App.jsx


No significa que obligatoriamente tengas que crear
todos esos archivos hoy.


Los iremos creando cuando exista una razón.


==========================================================
23. MENTALIDAD PROFESIONAL
==========================================================

No quiero que aprendas:

"Custom Hooks porque están en React."


Quiero que entiendas:

"Los Custom Hooks me permiten separar
comportamiento reutilizable de la UI."


Esa diferencia es enorme.


==========================================================
24. RESUMEN
==========================================================

Custom Hook:

function useSomething() {

    // lógica React

    return {
        ...
    };

}


Component:

function Something() {

    const data = useSomething();

    return (
        // UI
    );

}


Arquitectura:

Component
    ↓
Custom Hook
    ↓
Service
    ↓
API


Objetivo:

Componentes más pequeños,
lógica reutilizable
y código más mantenible.
*/