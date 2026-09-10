/*
==========================================================
SEMANA 4 — DÍA 3
PRÁCTICA — CUSTOM HOOKS
PROYECTO: Git2Post
==========================================================

OBJETIVO:

Refactorizar Git2Post para comenzar a separar:

UI
↓
Lógica React
↓
Servicios
↓
API


IMPORTANTE:

No copies directamente las soluciones.

Primero intenta construir cada pieza.

Consulta teoria.jsx cuando tengas dudas.
==========================================================
*/


/*
==========================================================
PARTE 1 — PREPARACIÓN
==========================================================

Abre Git2Post.

Antes de escribir código revisa:

1. ¿Qué páginas tienes?
2. ¿Qué componentes tienen mucho código?
3. ¿Dónde haces fetch?
4. ¿Dónde tienes useState?
5. ¿Dónde tienes useEffect?
6. ¿Dónde manejas loading?
7. ¿Dónde manejas errores?

Busca especialmente componentes que hagan:

- API
- estado
- transformación de datos
- UI

al mismo tiempo.


CHECKPOINT:

Escribe en un comentario:

¿Qué componente de Git2Post
crees que necesita refactorización
y por qué?

==========================================================
*/


/*
==========================================================
PARTE 2 — CREAR ESTRUCTURA
==========================================================

Dentro de src crea:

hooks/

services/


Resultado:

src/
├── hooks/
└── services/


No crees 20 archivos todavía.

Vamos a crear solamente
los que necesitemos.


==========================================================
*/


/*
==========================================================
PARTE 3 — useToggle
==========================================================

Vamos a empezar con algo sencillo.

Crea:

src/hooks/useToggle.jsx


Objetivo:

const {
    value,
    toggle
} = useToggle();


value debe comenzar en false.


toggle():

false → true
true → false


PIENSA:

¿Qué Hook necesitas?


No mires la solución inmediatamente.


CHECKPOINT:

Debes poder utilizarlo así:

const {
    value,
    toggle
} = useToggle();


Y:

<button onClick={toggle}>
    ...
</button>


Ahora usa useToggle en Git2Post.

Busca algo que pueda:

mostrar / ocultar.


Ejemplos:

- sidebar
- filtros
- preview
- modal
- menú


No inventes una funcionalidad
solo para utilizar el Hook.

Encuentra un caso real.


==========================================================
*/


/*
==========================================================
PARTE 4 — REFACTOR DE GITHUB
==========================================================

Ahora vamos con algo importante.


Busca la parte de Git2Post
que se comunica con GitHub.


Probablemente tengas algo parecido a:

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);


y una función:

searchUser()


y posiblemente:

fetch(...)


TODO ESO es candidato a extracción.


==========================================================

PASO 4.1

Crea:

src/services/githubService.js


Responsabilidad:

COMUNICARSE CON GITHUB.


Debe existir una función equivalente a:

getGitHubUser(username)


Esta función:

1. recibe username
2. realiza fetch
3. comprueba response.ok
4. obtiene JSON
5. devuelve los datos


IMPORTANTE:

El Service NO debería tener:

useState
useEffect
setLoading


¿Por qué?

Porque no es responsable del estado de React.


==========================================================
*/


/*
==========================================================
PARTE 5 — CREAR useGitHub
==========================================================

Crea:

src/hooks/useGitHub.jsx


Este Hook será responsable de:

- user
- loading
- error
- searchUser


Arquitectura:

GitHubPage
      ↓
useGitHub()
      ↓
githubService
      ↓
GitHub API


El Hook debe:

1. mantener el estado
2. llamar al Service
3. manejar loading
4. manejar error
5. almacenar el usuario


==========================================================

ESTADO INICIAL:

user
    ↓
null

loading
    ↓
false

error
    ↓
null


==========================================================

Cuando ejecutas:

searchUser("torvalds")


debe ocurrir:

loading = true


Si funciona:

user = resultado
loading = false


Si falla:

error = mensaje
loading = false


==========================================================
*/


/*
==========================================================
PARTE 6 — CONECTAR EL HOOK
==========================================================

Ahora vuelve a la página
que anteriormente hacía la búsqueda.


ANTES probablemente tenías:

useState
useEffect
fetch
try/catch
loading
error


Después queremos acercarnos a:

const {
    user,
    loading,
    error,
    searchUser
} = useGitHub();


El componente ahora debe concentrarse
principalmente en la UI.


==========================================================
*/


/*
==========================================================
PARTE 7 — REVISAR RESPONSABILIDADES
==========================================================

Abre los tres archivos:

GitHubPage.jsx
useGitHub.jsx
githubService.js


Pregúntate:


GitHubPage.jsx

¿Está mostrando UI?


useGitHub.jsx

¿Está manejando lógica React?


githubService.js

¿Está haciendo llamadas HTTP?


Si cada uno responde "sí":

Excelente.


==========================================================
*/


/*
==========================================================
PARTE 8 — useRepositories
==========================================================

Ahora repite el patrón con repositorios.


Crea:

src/services/repositoriesService.js

src/hooks/useRepositories.jsx


El Hook debe manejar:

repositories
loading
error


Y una función:

fetchRepositories()


o el nombre que tenga sentido
para tu arquitectura.


==========================================================

OBJETIVO:

RepositoriesPage
      ↓
useRepositories()
      ↓
repositoriesService
      ↓
GitHub API


==========================================================
*/


/*
==========================================================
PARTE 9 — NO DUPLIQUES CÓDIGO
==========================================================

Observa tus Hooks.


Probablemente encontrarás
un patrón repetido:

try {

    setLoading(true);
    setError(null);

    ...

} catch (error) {

    setError(...);

} finally {

    setLoading(false);

}


No intentes crear todavía
un "useApiUniversal".

Quiero que reconozcas
el patrón primero.


Esto es importante.


La arquitectura se aprende
entendiendo problemas reales,
no creando abstracciones
antes de necesitarlas.


==========================================================
*/


/*
==========================================================
PARTE 10 — useForm
==========================================================

Ahora crea:

src/hooks/useForm.jsx


Debe permitir manejar
un formulario de Git2Post.


Por ejemplo:

const {
    values,
    handleChange,
    reset
} = useForm({

    username: ""

});


HTML:

<input
    name="username"
    value={values.username}
    onChange={handleChange}
/>


PIENSA:

¿Por qué necesitamos "name"?

Porque handleChange necesita saber
qué propiedad modificar.


==========================================================
*/


/*
==========================================================
PARTE 11 — INTEGRAR useForm
==========================================================

Busca un formulario real
dentro de Git2Post.


No crees uno adicional
si ya tienes uno.


Refactorízalo para utilizar:

useForm()


El formulario debe continuar
funcionando exactamente igual.


IMPORTANTE:

Refactorizar no significa
cambiar comportamiento.


La aplicación debe:

ANTES:
funcionar.


DESPUÉS:
seguir funcionando.


Pero ahora con mejor estructura.


==========================================================
*/


/*
==========================================================
PARTE 12 — DEBUGGING
==========================================================

Ahora rompe algo intencionalmente.


Prueba esto:

if (something) {

    const [test, setTest] =
        useState(false);

}


Observa qué ocurre.


Después corrígelo.


OBJETIVO:

No memorices:

"No puedo hacer esto."


Entiende:

React necesita que los Hooks
mantengan un orden consistente.


==========================================================
*/


/*
==========================================================
PARTE 13 — CHALLENGE
==========================================================

Sin mirar teoria.jsx:

Crea desde cero:

useToggle()


Después:

useForm()


Después:

useGitHub()


Si consigues hacer los tres
sin copiar:

MUY BUEN PROGRESO.


==========================================================
*/


/*
==========================================================
PARTE 14 — REVISIÓN ARQUITECTÓNICA
==========================================================

Al terminar revisa Git2Post.


Queremos aproximarnos a:

src/

├── components/
│
├── pages/
│
├── hooks/
│   ├── useToggle.jsx
│   ├── useForm.jsx
│   ├── useGitHub.jsx
│   └── useRepositories.jsx
│
├── services/
│   ├── githubService.js
│   └── repositoriesService.js
│
├── context/
│
├── layouts/
│
└── router/


No importa si todavía
no tienes todos los archivos.


Lo importante es entender
por qué existen.


==========================================================
*/


/*
==========================================================
PARTE 15 — CHECKPOINT FINAL
==========================================================

Antes de terminar responde
sin mirar teoría:


1.

¿Qué problema resuelve
un Custom Hook?


2.

¿Cuál es la diferencia entre:

Component
Custom Hook
Service


3.

¿Por qué un Hook empieza
normalmente con "use"?


4.

¿Por qué no puedo hacer:

if (...) {
    useState(...)
}


5.

¿Cuándo utilizarías
una función normal
en lugar de un Custom Hook?


6.

¿Por qué GitHub API debería
estar en un Service?


7.

¿Por qué loading pertenece
al Hook y no al Service?


8.

Explica:

Component
    ↓
Hook
    ↓
Service
    ↓
API


==========================================================
*/


/*
==========================================================
RESULTADO ESPERADO DEL DÍA
==========================================================

Al terminar Git2Post debería:

✅ Tener al menos un Custom Hook real.

✅ Tener useToggle.

✅ Tener useForm si tienes un formulario
   apropiado para refactorizar.

✅ Tener useGitHub.

✅ Haber separado al menos una llamada API
   en un Service.

✅ Tener una página/componentes más limpios.

✅ Entender la diferencia entre:

UI
Lógica
API


==========================================================
*/