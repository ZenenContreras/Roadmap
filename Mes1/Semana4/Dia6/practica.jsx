/*
===========================================================
WEEK 4 — DAY 6
PRACTICA — REFACTORING + ARCHITECTURE
===========================================================

PROYECTO:
Git2Post

IMPORTANTE:

NO crear otro proyecto.

Todo el trabajo de hoy se hace dentro de Git2Post.

OBJETIVO:

Dejar Git2Post con una arquitectura clara, coherente y
mantenible antes de comenzar TypeScript la próxima semana.
===========================================================
*/


/*
===========================================================
PART 1 — AUDITORÍA
===========================================================

Antes de modificar código:

abre Git2Post y revisa:

src/

Crea:

architecture-notes.md

Escribe:

1. ¿Qué Pages tengo?

2. ¿Qué Components tengo?

3. ¿Qué Hooks tengo?

4. ¿Qué Services tengo?

5. ¿Qué Context tengo?

6. ¿Dónde hago fetch?

7. ¿Cuál es mi componente más grande?

8. ¿Dónde tengo código duplicado?

9. ¿Dónde tengo lógica mezclada con UI?

10. ¿Cuál es el archivo más difícil de entender?

NO cambies nada todavía.

Primero entiende el estado actual.
===========================================================
*/


/*
===========================================================
PART 2 — REVISAR APP.JSX
===========================================================

Abre:

App.jsx

Pregunta:

¿App.jsx solamente se encarga de montar la aplicación?

Idealmente:

App
 ↓
AppRouter

Si App.jsx contiene:

- fetch
- grandes estados
- UI
- lógica de repositories
- lógica de posts

analiza qué debería moverse.

OBJETIVO:

App.jsx debe ser pequeño.
===========================================================
*/


/*
===========================================================
PART 3 — REVISAR ROUTER
===========================================================

Busca:

router/

Revisa que las rutas estén organizadas.

Debes tener conceptualmente algo parecido a:

/
 /dashboard
 /repositories
 /posts
 /settings
 *

Si tienes rutas protegidas:

ProtectedRoute

y si tienes estructura general:

DashboardLayout

Revisa:

- rutas
- navegación
- layouts
- 404
- params
- query params
- protected routes

No agregues rutas simplemente por agregarlas.
===========================================================
*/


/*
===========================================================
PART 4 — AUDITAR PAGES
===========================================================

Abre cada Page.

Ejemplo:

Repositories.jsx

Pregunta:

"¿Esta Page está componiendo la pantalla o está haciendo
todo?"

Busca:

- fetch
- estados
- filtros
- formularios
- navegación
- UI
- lógica compleja

Si tienes demasiado código:

refactoriza progresivamente.
===========================================================
*/


/*
===========================================================
PART 5 — REPOSITORY COMPONENTS
===========================================================

Revisa:

RepositoryCard.jsx

Debe recibir:

repository

por props.

Ejemplo:

function RepositoryCard({
    repository
}) {

    return (
        <article>
            <h3>
                {repository.name}
            </h3>

            <p>
                {repository.description}
            </p>
        </article>
    );
}

IMPORTANTE:

RepositoryCard NO debe hacer fetch.

NO debe conocer GitHub API.

NO debe manejar authentication.

Su responsabilidad principal es UI.
===========================================================
*/


/*
===========================================================
PART 6 — CREAR/REVISAR REPOSITORYLIST
===========================================================

Crea o revisa:

components/RepositoryList.jsx

Debe recibir:

repositories

y renderizar:

RepositoryCard

Ejemplo:

function RepositoryList({
    repositories
}) {

    return (
        <div>
            {repositories.map(
                (repository) => (
                    <RepositoryCard
                        key={repository.id}
                        repository={repository}
                    />
                )
            )}
        </div>
    );
}

Revisa especialmente:

key

Debe ser estable y único.
===========================================================
*/


/*
===========================================================
PART 7 — REVISAR GITHUB SERVICE
===========================================================

Busca:

services/githubService.js

Si no existe:

créalo.

La comunicación con GitHub debe estar aquí.

Ejemplo conceptual:

export async function
getUserRepositories(username) {

    const response = await fetch(
        `https://api.github.com/users/${username}/repos`
    );

    if (!response.ok) {
        throw new Error(
            "Unable to fetch repositories"
        );
    }

    return response.json();
}

No pongas JSX aquí.

El service no renderiza UI.
===========================================================
*/


/*
===========================================================
PART 8 — REVISAR useRepositories
===========================================================

Busca:

hooks/useRepositories.js

Si no existe:

créalo.

Debe manejar:

- repositories
- loading
- error
- requests
- efectos

Conceptualmente:

function useRepositories(username) {

    const [
        repositories,
        setRepositories
    ] = useState([]);

    const [
        loading,
        setLoading
    ] = useState(false);

    const [
        error,
        setError
    ] = useState(null);

    // lógica

    return {
        repositories,
        loading,
        error
    };
}

La Page consume el Hook.

No necesita conocer todos los detalles.
===========================================================
*/


/*
===========================================================
PART 9 — ESTADOS DE UI
===========================================================

Git2Post debe distinguir:

IDLE

No se ha realizado una búsqueda.


LOADING

Se está realizando una petición.


SUCCESS

Tenemos repositories.


EMPTY

La petición funcionó pero:

[]

ERROR

La petición falló.

Revisa que cada estado tenga una UI clara.
===========================================================
*/


/*
===========================================================
PART 10 — ERROR STATE
===========================================================

Prueba:

un username inexistente.

Debe aparecer un estado de error.

No debería ocurrir:

- pantalla en blanco
- crash
- error sin explicar
- aplicación bloqueada

El diseño debe seguir la identidad de Git2Post:

blanco
negro
grises

Errores:

rojo
===========================================================
*/


/*
===========================================================
PART 11 — EMPTY STATE
===========================================================

Prueba un resultado vacío.

Debe diferenciarse de un error.

Ejemplo:

"No repositories found."

NO:

"Something went wrong."

Porque no ocurrió ningún error.

La API simplemente no devolvió datos.
===========================================================
*/


/*
===========================================================
PART 12 — LOADING STATE
===========================================================

Durante una petición:

muestra Loading.

Además:

el botón de búsqueda puede estar disabled.

Ejemplo:

<button disabled={loading}>
    Search
</button>

Comprueba que no puedas provocar múltiples acciones
innecesarias mientras está cargando.
===========================================================
*/


/*
===========================================================
PART 13 — LIMPIAR ERRORES
===========================================================

Prueba:

1. búsqueda incorrecta
2. aparece error
3. realiza una búsqueda correcta

El error anterior NO debe continuar visible.

Si es necesario:

setError(null);

antes de iniciar una nueva petición.
===========================================================
*/


/*
===========================================================
PART 14 — CONTEXT AUDIT
===========================================================

Abre:

context/

Por cada Context responde:

¿Por qué existe?

¿Realmente es compartido?

¿Podría ser local?

Si tienes:

AuthContext

probablemente tiene sentido.

Si tienes:

SearchContext

pero search solamente lo utiliza una página:

considera moverlo a estado local.
===========================================================
*/


/*
===========================================================
PART 15 — PROP DRILLING CHALLENGE
===========================================================

Busca una cadena parecida a:

A
 ↓
B
 ↓
C
 ↓
D

donde:

A pasa data a B

B pasa data a C

C pasa data a D

pero B y C realmente no utilizan data.

Analiza si existe una mejor solución.

IMPORTANTE:

No utilices Context automáticamente.

Primero intenta mejorar la composición.
===========================================================
*/


/*
===========================================================
PART 16 — COMPONENTE DEMASIADO GRANDE
===========================================================

Encuentra el componente más grande de Git2Post.

Escribe:

Responsabilidad 1
Responsabilidad 2
Responsabilidad 3
Responsabilidad 4

Ahora clasifica:

UI?
→ Component

Lógica?
→ Hook

API?
→ Service

Estado global?
→ Context

Pantalla?
→ Page

Extrae una responsabilidad.

Prueba.

Después extrae otra si realmente tiene sentido.
===========================================================
*/


/*
===========================================================
PART 17 — LOADING STATE REUTILIZABLE
===========================================================

Si tienes loading repetido en varias partes:

crea:

components/LoadingState.jsx

Ejemplo:

function LoadingState() {
    return (
        <div>
            Loading...
        </div>
    );
}

Úsalo donde tenga sentido.

NO lo hagas si solamente existe una vez y no hay
necesidad real.
===========================================================
*/


/*
===========================================================
PART 18 — EMPTY STATE REUTILIZABLE
===========================================================

Puedes crear:

components/EmptyState.jsx

Ejemplo:

function EmptyState({
    title,
    description
}) {

    return (
        <div>
            <h2>{title}</h2>

            <p>
                {description}
            </p>
        </div>
    );
}

Uso:

<EmptyState
    title="No repositories found"
    description="Try another GitHub username."
/>

Comprueba que siga siendo fácil de entender.
===========================================================
*/


/*
===========================================================
PART 19 — ERROR STATE REUTILIZABLE
===========================================================

Crea si tiene sentido:

components/ErrorState.jsx

Debe recibir:

message

Ejemplo:

<ErrorState
    message="Unable to load repositories."
/>

El estilo de error debe utilizar el color rojo que
definiste para Git2Post.
===========================================================
*/


/*
===========================================================
PART 20 — REVISIÓN DE DUPLICACIÓN
===========================================================

Busca:

- botones repetidos
- loading repetido
- empty states
- error messages
- cards
- layouts
- funciones repetidas

Pregunta:

¿Existe una abstracción clara?

Si sí:

extraer.

Si no:

dejarlo.

No abstraigas por deporte.
===========================================================
*/


/*
===========================================================
PART 21 — STATE COLOCATION
===========================================================

Busca estados que estén demasiado arriba.

Ejemplo:

App.jsx

const [search, setSearch] = useState("");

Pero solamente:

RepositorySearch

lo necesita.

Pregunta:

¿Puede vivir dentro de RepositorySearch?

Si sí:

muévelo.

Después prueba toda la funcionalidad.
===========================================================
*/


/*
===========================================================
PART 22 — PERFORMANCE AUDIT
===========================================================

Busca:

React.memo
useMemo
useCallback

Por cada uno pregunta:

¿Por qué existe?

Si no puedes explicar la razón:

analiza si realmente es necesario.

No elimines automáticamente.

Primero entiende qué problema intentaba solucionar.
===========================================================
*/


/*
===========================================================
PART 23 — CONSOLE.COUNT
===========================================================

Temporalmente agrega:

console.count(
    "RepositoryCard render"
);

Interactúa con Git2Post.

Observa:

¿Cuándo renderiza?

¿Cuántas veces?

¿Qué acción provoca el render?

Después elimina console.count.
===========================================================
*/


/*
===========================================================
PART 24 — USEMEMO
===========================================================

Si Git2Post tiene filtering:

const filteredRepositories =
    repositories.filter(...);

Analiza si useMemo tendría sentido.

Ejemplo:

const filteredRepositories =
    useMemo(() => {

        return repositories.filter(
            (repository) =>
                repository.name
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )
        );

    }, [
        repositories,
        search
    ]);

IMPORTANTE:

No lo agregues solamente para "hacerlo profesional".

Debes poder explicar por qué existe.
===========================================================
*/


/*
===========================================================
PART 25 — USECALLBACK
===========================================================

Si tienes:

const handleSelect = (repository) => {
    ...
};

y lo pasas a un componente memoizado:

<RepositoryCard
    onSelect={handleSelect}
/>

analiza referential equality.

Puedes experimentar con:

useCallback

Pero nuevamente:

debe existir una razón.
===========================================================
*/


/*
===========================================================
PART 26 — USEEFFECT AUDIT
===========================================================

Revisa TODOS los useEffect.

Para cada uno:

[ ] Dependencias correctas
[ ] No genera loops
[ ] No ejecuta innecesariamente
[ ] Cleanup cuando corresponde
[ ] Maneja requests correctamente
[ ] Maneja errores
===========================================================
*/


/*
===========================================================
PART 27 — ABORTCONTROLLER
===========================================================

Si Git2Post hace requests basados en cambios rápidos,
considera AbortController.

Conceptualmente:

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

Prueba que no aparezcan errores falsos cuando una
petición es cancelada.
===========================================================
*/


/*
===========================================================
PART 28 — ARCHITECTURE CLEANUP
===========================================================

Tu estructura debería aproximarse a:

src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── RepositoryCard.jsx
│   ├── RepositoryList.jsx
│   ├── RepositorySearch.jsx
│   ├── LoadingState.jsx
│   ├── EmptyState.jsx
│   └── ErrorState.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── hooks/
│   ├── useAuth.js
│   └── useRepositories.js
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Repositories.jsx
│   ├── Posts.jsx
│   ├── Settings.jsx
│   └── NotFound.jsx
│
├── router/
│   ├── AppRouter.jsx
│   └── ProtectedRoute.jsx
│
├── services/
│   ├── githubService.js
│   └── aiService.js
│
├── App.jsx
├── main.jsx
└── index.css

NO necesitas tener exactamente estos archivos.

La estructura debe representar lo que realmente existe
en Git2Post.
===========================================================
*/


/*
===========================================================
PART 29 — FINAL ARCHITECTURE CHALLENGE
===========================================================

Imagina que mañana tu cliente dice:

"Quiero generar automáticamente un post de LinkedIn
a partir de un repository."

Antes de programar:

¿Dónde pondrías la UI?

components/

¿Dónde pondrías la página?

pages/

¿Dónde pondrías la lógica?

hooks/

¿Dónde pondrías la comunicación con AI?

services/

¿Dónde pondrías estado global?

context/

¿Dónde pondrías la ruta?

router/

Si puedes responder esto sin pensar demasiado:

vas entendiendo arquitectura.
===========================================================
*/


/*
===========================================================
PART 30 — FINAL TEST
===========================================================

Sin mirar el código:

explica verbalmente:

Page
 ↓
Hook
 ↓
Service
 ↓
API

Después explica:

Context
 ↓
Shared State

Después:

Page
 ↓
Components

Finalmente:

¿Por qué no debería RepositoryCard hacer fetch?
===========================================================
*/


/*
===========================================================
PART 31 — GIT2POST FINAL TEST
===========================================================

Antes de cerrar:

[ ] App funciona
[ ] Router funciona
[ ] Navigation funciona
[ ] Pages funcionan
[ ] Repository search funciona
[ ] Loading funciona
[ ] Error funciona
[ ] Empty state funciona
[ ] Components funcionan
[ ] Hooks funcionan
[ ] Services funcionan
[ ] Context funciona
[ ] No hay errores en consola
[ ] No hay código innecesariamente duplicado
[ ] No hay componentes gigantes innecesarios
[ ] useEffect fue revisado
[ ] useMemo fue revisado
[ ] useCallback fue revisado
[ ] React.memo fue revisado

IMPORTANTE:

La aplicación debe seguir funcionando después de cada
refactorización.
===========================================================
*/