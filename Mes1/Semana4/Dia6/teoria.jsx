/*
===========================================================
WEEK 4 — DAY 6
REFACTORING + ARCHITECTURE EN REACT
===========================================================

OBJETIVO

Hoy no vamos a aprender una nueva API de React.

Vamos a aprender a organizar correctamente una aplicación
React para que sea:

- fácil de entender
- fácil de modificar
- reutilizable
- mantenible
- escalable

Todo esto lo aplicaremos directamente a Git2Post.
===========================================================
*/


/*
===========================================================
1. ¿QUÉ ES REFACTORING?
===========================================================

Refactoring significa modificar la estructura interna del
código sin cambiar lo que la aplicación hace para el usuario.

Ejemplo:

ANTES:

function Dashboard() {
    // 300 líneas
}

DESPUÉS:

function Dashboard() {
    return (
        <>
            <RepositorySearch />
            <RepositoryList />
            <RecentPosts />
        </>
    );
}

La aplicación puede hacer exactamente lo mismo.

La diferencia está en cómo está organizado el código.

-----------------------------------------------------------

IMPORTANTE:

Refactorizar NO significa:

"Voy a reescribir todo."

Una buena refactorización suele ser incremental:

Código
  ↓
Pequeño cambio
  ↓
Probar
  ↓
Pequeño cambio
  ↓
Probar

Esto reduce la posibilidad de introducir bugs.
===========================================================
*/


/*
===========================================================
2. ¿POR QUÉ NECESITAMOS ARQUITECTURA?
===========================================================

Una aplicación pequeña puede funcionar incluso con código
desorganizado.

Por ejemplo:

src/
    App.jsx
    Component.jsx
    Component2.jsx
    api.js

Pero cuando la aplicación crece empiezan a aparecer:

- componentes enormes
- código duplicado
- lógica mezclada
- APIs dentro de componentes
- estados difíciles de controlar
- prop drilling
- archivos difíciles de encontrar

Git2Post eventualmente podría tener:

- GitHub authentication
- repositories
- commits
- pull requests
- generación de posts
- historial
- editor
- settings
- analytics

Por eso necesitamos una estructura.
===========================================================
*/


/*
===========================================================
3. SEPARACIÓN DE RESPONSABILIDADES
===========================================================

Una de las ideas más importantes de arquitectura es:

"Cada parte del sistema debería tener una responsabilidad
clara."

Por ejemplo:

COMPONENT
→ UI

PAGE
→ pantalla

HOOK
→ lógica reutilizable

SERVICE
→ comunicación externa

CONTEXT
→ estado compartido

ROUTER
→ navegación

LAYOUT
→ estructura general
===========================================================
*/


/*
===========================================================
4. PAGES VS COMPONENTS
===========================================================

Una PAGE representa una pantalla.

Ejemplo:

/dashboard
/repositories
/posts
/settings

Podríamos tener:

pages/
    Dashboard.jsx
    Repositories.jsx
    Posts.jsx
    Settings.jsx


Un COMPONENT representa una pieza de UI.

components/
    Navbar.jsx
    Sidebar.jsx
    RepositoryCard.jsx
    PostCard.jsx
    EmptyState.jsx

-----------------------------------------------------------

Mentalidad:

PAGE
→ "¿Qué pantalla estoy mostrando?"

COMPONENT
→ "¿Qué pieza de interfaz estoy mostrando?"
===========================================================
*/


/*
===========================================================
5. UNA PAGE NO DEBERÍA HACER TODO
===========================================================

Esto puede funcionar:

function Repositories() {

    // fetch

    // loading

    // error

    // filtering

    // search

    // navigation

    // rendering

}

Pero cuando crece puede convertirse en un componente enorme.

Preferimos:

function Repositories() {

    const {
        repositories,
        loading,
        error
    } = useRepositories();

    return (
        <>
            <RepositorySearch />
            <RepositoryList
                repositories={repositories}
            />
        </>
    );
}

La Page ahora principalmente ORQUESTA la pantalla.
===========================================================
*/


/*
===========================================================
6. CONTAINER VS PRESENTATIONAL COMPONENT
===========================================================

Un Presentational Component se preocupa principalmente
por mostrar información.

Ejemplo:

function RepositoryCard({ repository }) {

    return (
        <article>
            <h3>{repository.name}</h3>
            <p>{repository.description}</p>
        </article>
    );

}


El componente NO necesita saber:

- cómo obtener el repository
- qué API utilizar
- cómo autenticarse
- dónde almacenar los datos

Simplemente recibe datos.

-----------------------------------------------------------

Un Container puede encargarse de la lógica:

function RepositoryContainer() {

    const data = useRepositories();

    return (
        <RepositoryList
            repositories={data.repositories}
        />
    );

}

No es obligatorio utilizar siempre esta separación.

Es un patrón que debes conocer.
===========================================================
*/


/*
===========================================================
7. PROPS
===========================================================

React utiliza props para pasar información.

Ejemplo:

<RepositoryCard repository={repository} />

El componente recibe:

function RepositoryCard({ repository }) {

}

Esto mantiene el componente desacoplado.

El componente no necesita saber de dónde vino
repository.
===========================================================
*/


/*
===========================================================
8. PROP DRILLING
===========================================================

Prop drilling ocurre cuando pasamos información a través
de componentes que realmente no necesitan esa información.

Ejemplo:

App
 ↓
Dashboard
 ↓
RepositorySection
 ↓
RepositoryList
 ↓
RepositoryCard

Y todos reciben:

user

Aunque solamente RepositoryCard lo necesite.

Esto puede hacer el código más difícil de mantener.
===========================================================
*/


/*
===========================================================
9. CONTEXT
===========================================================

Context permite compartir información sin pasar props
manualmente por cada nivel.

Ejemplos apropiados:

- usuario autenticado
- theme
- idioma
- configuración global

Ejemplo:

const { user } = useAuth();

Pero:

NO significa que todo estado deba ir en Context.

Si solamente RepositorySearch necesita:

const [search, setSearch] = useState("");

probablemente ese estado debería quedarse local.
===========================================================
*/


/*
===========================================================
10. LOCAL STATE VS GLOBAL STATE
===========================================================

LOCAL:

const [search, setSearch] = useState("");

Si solamente una parte de la aplicación lo necesita,
déjalo local.

GLOBAL:

user
authentication
theme
etc.

Si muchas partes alejadas necesitan el mismo estado,
Context puede tener sentido.
===========================================================
*/


/*
===========================================================
11. STATE COLOCATION
===========================================================

State colocation significa:

"Mantener el estado lo más cerca posible del lugar donde
se utiliza."

Ejemplo:

RepositorySearch

const [search, setSearch] = useState("");

Es mejor que guardar search en App.jsx si solamente
RepositorySearch lo necesita.

Beneficios:

- menos prop drilling
- componentes más independientes
- menor complejidad
- potencialmente menos renders innecesarios
===========================================================
*/


/*
===========================================================
12. CUSTOM HOOKS
===========================================================

Un Custom Hook permite extraer lógica reutilizable.

Ejemplo:

function useRepositories(username) {

    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // lógica

    return {
        repositories,
        loading,
        error
    };
}

La Page puede utilizarlo:

const {
    repositories,
    loading,
    error
} = useRepositories(username);

Así la UI no necesita conocer todos los detalles de
la lógica.
===========================================================
*/


/*
===========================================================
13. SERVICES
===========================================================

Un service normalmente se encarga de comunicación externa.

Ejemplo:

githubService.js

export async function getRepositories(username) {

    const response = await fetch(
        `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
        throw new Error(
            "Failed to fetch repositories"
        );
    }

    return response.json();
}

El service NO debería decidir:

- qué spinner mostrar
- qué página abrir
- qué botón deshabilitar
- cómo renderizar la UI

Su responsabilidad principal es la comunicación externa.
===========================================================
*/


/*
===========================================================
14. PAGE → HOOK → SERVICE → API
===========================================================

Esta será una de las arquitecturas mentales más importantes
para Git2Post.

Page
 ↓
Hook
 ↓
Service
 ↓
API

Ejemplo:

Repositories
 ↓
useRepositories()
 ↓
githubService
 ↓
GitHub API


La Page se preocupa por la pantalla.

El Hook se preocupa por la lógica.

El Service se preocupa por la comunicación.

La API proporciona los datos.
===========================================================
*/


/*
===========================================================
15. COMPONENTS
===========================================================

Los componentes deberían tener responsabilidades claras.

Ejemplo:

RepositoryCard

Responsabilidad:

Mostrar un repository.

No debería encargarse de:

- authentication
- API requests
- routing complejo
- generación de AI
- gestión global

Cuanto más independiente sea un componente,
más fácil será reutilizarlo.
===========================================================
*/


/*
===========================================================
16. CARPETAS
===========================================================

Git2Post:

src/
│
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── router/
├── services/
├── App.jsx
├── main.jsx
└── index.css


components/

UI reutilizable.


pages/

Pantallas.


layouts/

Estructura general.


hooks/

Lógica reutilizable.


services/

APIs y servicios externos.


context/

Estado compartido.


router/

Navegación y rutas.
===========================================================
*/


/*
===========================================================
17. CÓDIGO DUPLICADO
===========================================================

Supongamos:

Repositories.jsx

<div>Loading...</div>


Posts.jsx

<div>Loading...</div>


Dashboard.jsx

<div>Loading...</div>

Si son realmente el mismo patrón, podemos crear:

LoadingState.jsx

function LoadingState() {
    return <div>Loading...</div>;
}

Y utilizar:

<LoadingState />

Pero cuidado.

NO todo código parecido necesita convertirse en un componente.

La abstracción debe resolver un problema real.
===========================================================
*/


/*
===========================================================
18. SOBRE-ABSTRACCIÓN
===========================================================

También podemos equivocarnos intentando reutilizar
demasiado.

Por ejemplo:

<UniversalCard
    variant="repository"
    mode="dashboard"
    compact
    showAvatar
    showStats
    interactive
/>

Esto puede terminar siendo más complicado que tener
componentes separados.

Regla:

No preguntes solamente:

"¿Puedo reutilizar esto?"

Pregunta:

"¿Tiene sentido reutilizar esto?"
===========================================================
*/


/*
===========================================================
19. COMPONENTES DEMASIADO GRANDES
===========================================================

No existe una regla:

"Todo componente debe tener máximo 100 líneas."

La pregunta correcta es:

"¿Tiene demasiadas responsabilidades?"

Si Dashboard tiene:

- header
- search
- repositories
- statistics
- posts
- activity

probablemente puedas dividirlo.

Por ejemplo:

Dashboard
 ├── DashboardHeader
 ├── RepositoryPreview
 ├── Statistics
 ├── RecentPosts
 └── Activity
===========================================================
*/


/*
===========================================================
20. NAMING
===========================================================

Los nombres deben explicar responsabilidades.

Evitar:

Data.jsx
Helper.jsx
Utils.jsx
Component.jsx
Manager.jsx
Stuff.jsx

Preferir:

RepositoryCard.jsx
RepositoryList.jsx
useRepositories.js
githubService.js
AuthContext.jsx
DashboardLayout.jsx

El nombre debe ayudarte a entender el proyecto sin
abrir el archivo.
===========================================================
*/


/*
===========================================================
21. COUPLING
===========================================================

Coupling = dependencia entre partes del sistema.

Muy acoplado:

RepositoryCard

    ↓ fetch
    ↓ auth
    ↓ navigation
    ↓ global state
    ↓ modal
    ↓ analytics

El componente sabe demasiado.

Más desacoplado:

function RepositoryCard({
    repository,
    onSelect
}) {

    return (
        <button
            onClick={() => onSelect(repository)}
        >
            {repository.name}
        </button>
    );
}

Ahora el componente solamente sabe:

"Me dieron un repository y una función."
===========================================================
*/


/*
===========================================================
22. COHESION
===========================================================

Cohesion = qué tan relacionadas están las responsabilidades
dentro de una unidad.

Alta cohesión:

RepositoryCard

→ mostrar repository

Baja cohesión:

RepositoryCard

→ mostrar repository
→ hacer fetch
→ autenticar
→ manejar AI
→ modificar settings
→ navegar
→ enviar analytics

Objetivo:

ALTA COHESIÓN
+
BAJO ACOPLAMIENTO
===========================================================
*/


/*
===========================================================
23. ARQUITECTURA Y PERFORMANCE
===========================================================

La arquitectura también puede afectar performance.

Si todo el estado está en App:

App
 ↓
muchos componentes
 ↓
muchos renders

Pero si colocamos el estado correctamente:

RepositorySearch
 ↓
search state

solo la parte correspondiente necesita reaccionar.

Esto NO significa que cada render sea malo.

Recuerda Day 5:

render ≠ automáticamente problema.
===========================================================
*/


/*
===========================================================
24. MEMOIZACIÓN
===========================================================

Revisamos:

React.memo
useMemo
useCallback

Pero NO debemos utilizarlos automáticamente.

Proceso correcto:

Problema
 ↓
Medir
 ↓
Encontrar causa
 ↓
Optimizar
 ↓
Medir otra vez


No:

"Voy a usar useMemo porque React recomienda performance."
===========================================================
*/


/*
===========================================================
25. USEEFFECT
===========================================================

Hoy también debemos revisar todos nuestros useEffect.

Preguntas:

- ¿Tiene dependencias correctas?
- ¿Se ejecuta demasiadas veces?
- ¿Puede crear un loop?
- ¿Hay cleanup?
- ¿Puede existir una request antigua?
- ¿El estado se limpia correctamente?

Esto conecta directamente con Day 4.
===========================================================
*/


/*
===========================================================
26. ABORTCONTROLLER
===========================================================

Cuando hacemos requests podemos cancelar una petición.

Ejemplo:

useEffect(() => {

    const controller =
        new AbortController();

    async function load() {

        try {

            const response =
                await fetch(url, {
                    signal: controller.signal
                });

        } catch (error) {

            if (
                error.name !== "AbortError"
            ) {
                setError(error);
            }

        }
    }

    load();

    return () => {
        controller.abort();
    };

}, [url]);

Esto evita continuar trabajando con una petición que
ya no necesitamos.
===========================================================
*/


/*
===========================================================
27. ARQUITECTURA COMPLETA DE GIT2POST
===========================================================

Mentalmente:

                    App
                     ↓
                   Router
                     ↓
                   Layout
                     ↓
                    Page
                  ↙      ↘
          Components     Hooks
                            ↓
                         Services
                            ↓
                           API


Estado compartido:

Context
   ↓
Components / Hooks


Esta arquitectura NO es una regla absoluta.

Es una guía para mantener responsabilidades claras.
===========================================================
*/


/*
===========================================================
28. EL OBJETIVO REAL
===========================================================

El objetivo no es tener muchas carpetas.

El objetivo es que cuando aparezca una nueva feature:

"Generate LinkedIn Post"

sepas inmediatamente dónde empezar.

UI:

components/

Pantalla:

pages/

Lógica:

hooks/

Comunicación AI:

services/

Estado global:

context/

Ruta:

router/

Ese pensamiento es arquitectura.
===========================================================
*/


/*
===========================================================
29. CHECKPOINT
===========================================================

Debes poder explicar:

1. ¿Qué es refactoring?

2. ¿Qué diferencia existe entre Page y Component?

3. ¿Qué es Prop Drilling?

4. ¿Cuándo usar Context?

5. ¿Qué es State Colocation?

6. ¿Qué hace un Custom Hook?

7. ¿Qué hace un Service?

8. ¿Por qué separar API de UI?

9. ¿Qué significa coupling?

10. ¿Qué significa cohesion?

11. ¿Por qué no usar useMemo en todo?

12. Explica:

Page
 ↓
Hook
 ↓
Service
 ↓
API

Si puedes explicarlo con tus palabras,
el objetivo del día está cumplido.
===========================================================
*/