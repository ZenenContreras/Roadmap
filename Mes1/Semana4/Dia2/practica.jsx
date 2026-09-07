/*
============================================================
SEMANA 4 — DÍA 2
PRÁCTICA
PROYECTO — GIT2POST
============================================================

OBJETIVO:

Convertir Git2Post en una
aplicación con múltiples
páginas y navegación real.

IMPORTANTE:

Todo se hace dentro del
proyecto Git2Post.

NO crear otro proyecto.


============================================================
FASE 1 — INSTALAR REACT ROUTER
============================================================

Desde Git2Post:


npm install react-router-dom


============================================================
RESULTADO ESPERADO
============================================================

El proyecto debe continuar
funcionando correctamente.


No deben aparecer errores
de instalación.


============================================================
FASE 2 — CREAR ESTRUCTURA
============================================================

Organiza Git2Post:


src/
│
├── components/
│
├── context/
│
├── hooks/
│
├── layouts/
│
├── pages/
│
├── router/
│
├── services/
│
├── App.jsx
├── main.jsx
└── index.css


============================================================
RESULTADO ESPERADO
============================================================

Debes tener al menos:


pages/


Landing.jsx

Dashboard.jsx

Repositories.jsx

RepositoryDetails.jsx

Posts.jsx

Settings.jsx

NotFound.jsx


layouts/


DashboardLayout.jsx


router/


AppRouter.jsx


No necesitas implementar
toda la lógica todavía.


============================================================
FASE 3 — CREAR LANDING
============================================================

Crea:


Landing.jsx


Debe representar
la página inicial.


Contenido sugerido:


Git2Post


Turn your GitHub activity
into content.


Descripción.


Botón:


Get Started


El botón debe llevar
a:


/dashboard


============================================================
RESULTADO ESPERADO
============================================================

Cuando visites:


/


debes ver la Landing.


============================================================
FASE 4 — CREAR DASHBOARD
============================================================

Crea:


Dashboard.jsx


Por ahora puede tener:


Git2Post Dashboard


Welcome back.


Y algunos elementos
visuales:


Repositories

Generated Posts

Recent Activity


No necesitas datos reales.


============================================================
FASE 5 — CREAR REPOSITORIES
============================================================

Crea:


Repositories.jsx


Debe mostrar:


Repositories


y algunos repositorios
de prueba.


Por ejemplo:


DevPulse


Git2Post


Portfolio


Pero NO necesitas
conectarte a GitHub todavía.


============================================================
FASE 6 — CREAR POSTS
============================================================

Crea:


Posts.jsx


Debe mostrar:


Generated Posts


Y un estado vacío:


No posts generated yet.


Puedes agregar un botón:


Create your first post


============================================================
FASE 7 — SETTINGS
============================================================

Crea:


Settings.jsx


Debe mostrar:


Settings


GitHub Account


Preferences


Theme


Account


No necesitas hacer
la funcionalidad todavía.


============================================================
FASE 8 — REPOSITORY DETAILS
============================================================

Crea:


RepositoryDetails.jsx


Debe mostrar:


Repository Details


Repository ID:


...


Todavía no necesitas
buscar datos reales.


============================================================
FASE 9 — NOT FOUND
============================================================

Crea:


NotFound.jsx


Diseña una pantalla:


404


Page not found.


Botón:


Back to Dashboard


============================================================
FASE 10 — APP ROUTER
============================================================

Crea:


src/router/AppRouter.jsx


Aquí centralizarás
las rutas de Git2Post.


Debes crear inicialmente:


/


/dashboard


/repositories


/repositories/:id


/posts


/settings


*


============================================================
RESULTADO ESPERADO
============================================================

Estas URLs deben funcionar:


/


→ Landing


/dashboard


→ Dashboard


/repositories


→ Repositories


/repositories/123


→ Repository Details


/posts


→ Posts


/settings


→ Settings


/cualquier-cosa


→ 404


============================================================
FASE 11 — BROWSERROUTER
============================================================

Conecta:


BrowserRouter


a la aplicación.


La estructura debe ser
conceptualmente:


BrowserRouter


↓

App


↓

AppRouter


↓

Routes


============================================================
FASE 12 — NAVEGACIÓN
============================================================

En la Landing:

crea navegación hacia:


Dashboard


Repositories


Posts


Settings


Utiliza:


Link


NO utilices:


<a href="">


para navegación interna.


============================================================
RESULTADO ESPERADO
============================================================

Puedes navegar entre
las páginas sin realizar
una recarga completa
de la aplicación.


============================================================
FASE 13 — NAVBAR
============================================================

Crea:


components/Navbar.jsx


Debe contener:


Git2Post


Dashboard


Repositories


Posts


Settings


Utiliza:


NavLink


para cada sección.


============================================================
FASE 14 — ACTIVE ROUTE
============================================================

Haz que el elemento
correspondiente a la
página actual tenga
un estilo diferente.


Ejemplo:


Dashboard


active


cuando estamos en:


/dashboard


============================================================
RESULTADO ESPERADO
============================================================

Si estás en:


/repositories


Repositories


debe verse activo.


Si estás en:


/settings


Settings


debe verse activo.


============================================================
FASE 15 — DASHBOARD LAYOUT
============================================================

Crea:


layouts/DashboardLayout.jsx


Debe contener:


Navbar


Sidebar o navegación
lateral


main


Outlet


Conceptualmente:


DashboardLayout


├── Navbar
│
├── Sidebar
│
└── Outlet


============================================================
FASE 16 — SIDEBAR
============================================================

Puedes crear:


components/Sidebar.jsx


Debe contener:


Dashboard


Repositories


Posts


Settings


Utiliza:


NavLink


============================================================
FASE 17 — NESTED ROUTES
============================================================

Ahora cambia
tu arquitectura.


En lugar de:


/dashboard


/repositories


/posts


/settings


haz que formen parte
del Dashboard Layout:


/dashboard


/dashboard/repositories


/dashboard/posts


/dashboard/settings


============================================================
RESULTADO ESPERADO
============================================================

Cuando estés en:


/dashboard/repositories


debe seguir visible:


Navbar


Sidebar


y dentro del área
principal:


Repositories


============================================================
FASE 18 — OUTLET
============================================================

DashboardLayout debe
tener:


<Outlet />


Ese Outlet será donde
React Router renderice
la página hija.


============================================================
RESULTADO ESPERADO
============================================================

La estructura visual:


Navbar
────────────────────────

Sidebar | Page


Si visitas:


/dashboard


Page:


Dashboard


Si visitas:


/dashboard/repositories


Page:


Repositories


Si visitas:


/dashboard/posts


Page:


Posts


============================================================
FASE 19 — INDEX ROUTE
============================================================

Configura:


/dashboard


como la página
por defecto del Layout.


Utiliza:


index route


para renderizar:


Dashboard


============================================================
FASE 20 — ROUTE PARAMS
============================================================

Ahora crea:


/dashboard/repositories/:id


Por ejemplo:


/dashboard/repositories/1


============================================================
FASE 21 — USE PARAMS
============================================================

Dentro:


RepositoryDetails.jsx


utiliza:


useParams()


Obtén:


id


y muéstralo.


============================================================
RESULTADO ESPERADO
============================================================

Si visitas:


/dashboard/repositories/123


debes ver:


Repository Details


Repository ID:


123


Si visitas:


/dashboard/repositories/999


debe aparecer:


Repository ID:


999


============================================================
FASE 22 — REPOSITORY CARD
============================================================

Crea:


components/RepositoryCard.jsx


Cada repository debe
tener:


Name


Description


Language


Button


View Repository


============================================================
FASE 23 — NAVEGACIÓN DINÁMICA
============================================================

Cuando el usuario
haga click:


View Repository


debe navegar a:


/dashboard/repositories/:id


Utiliza:


Link


o:


useNavigate()


Tú debes decidir cuál
tiene más sentido.


============================================================
RESULTADO ESPERADO
============================================================

Si haces click:


Git2Post


debes llegar a:


/dashboard/repositories/2


y ver:


Repository ID:


2


============================================================
FASE 24 — USE NAVIGATE
============================================================

Ahora crea una acción
que utilice:


useNavigate()


Por ejemplo:


Back to Dashboard


Al hacer click:


navigate("/dashboard")


============================================================
RESULTADO ESPERADO
============================================================

El usuario vuelve
a:


/dashboard


sin recargar
la aplicación.


============================================================
FASE 25 — 404
============================================================

Prueba una URL:


/this-route-does-not-exist


Debe aparecer:


404


Page not found.


============================================================
FASE 26 — 404 NAVIGATION
============================================================

El botón:


Back to Dashboard


debe utilizar:


useNavigate()


para regresar.


============================================================
FASE 27 — QUERY PARAMETERS
============================================================

Ahora implementa
una pequeña búsqueda
visual en:


/dashboard/repositories


Agrega:


Search


Por ejemplo:


[ Search repositories... ]


No necesitas hacer
búsqueda real todavía.


============================================================
FASE 28 — URL DE BÚSQUEDA
============================================================

Cuando tengas una búsqueda
como:


react


queremos que conceptualmente
la URL pueda representar:


/dashboard/repositories?search=react


Aquí estás practicando:


Query Parameters.


Todavía no necesitas
hacer toda la lógica.


El objetivo es entender
cómo se representan filtros
en una URL.


============================================================
FASE 29 — PROTECTED ROUTE
============================================================

Ahora crea:


components/ProtectedRoute.jsx


No necesitas implementar
un sistema de autenticación
real todavía.


Utiliza temporalmente
el State que creaste
en Día 1.


Recuerda:


Git2PostContext


tiene:


user


============================================================
FASE 30 — LÓGICA
============================================================

ProtectedRoute debe
conceptualmente hacer:


¿Existe user?


SI


↓

render children


NO


↓

Navigate


↓

/login


============================================================
FASE 31 — LOGIN TEMPORAL
============================================================

Crea:


pages/Login.jsx


Debe mostrar:


Login


y un botón:


Continue with GitHub


No necesitas conectar
GitHub OAuth todavía.


Cuando hagas click:


crea temporalmente
un usuario demo.


Después:


navigate("/dashboard")


============================================================
RESULTADO ESPERADO
============================================================

Flujo:


/login


↓

Continue with GitHub


↓

Demo User


↓

/dashboard


============================================================
FASE 32 — PROTEGER DASHBOARD
============================================================

Ahora protege:


/dashboard


y sus rutas hijas.


Si:


user === null


no debe acceder
al Dashboard.


Debe ser enviado a:


/login


============================================================
FASE 33 — PROBAR PROTECCIÓN
============================================================

Haz:


RESET


desde tu Context.


Después intenta visitar:


/dashboard


Debe ocurrir:


/dashboard


↓

ProtectedRoute


↓

user === null


↓

/login


============================================================
FASE 34 — RESTAURAR SESIÓN DEMO
============================================================

Desde:


Login


haz login demo.


Después:


/dashboard


debe funcionar.


============================================================
FASE 35 — REVISAR ARQUITECTURA
============================================================

Ahora revisa:


src/


components/


pages/


layouts/


router/


context/


hooks/


services/


Pregúntate:


¿Cada archivo tiene
una responsabilidad?


¿Estoy metiendo lógica
de routing dentro de
componentes que no
deberían manejarla?


¿Las páginas están
separadas de componentes?


¿El Layout contiene
el Outlet?


¿Las rutas están
centralizadas?


============================================================
FASE 36 — LIMPIEZA
============================================================

Elimina:


console.logs


código duplicado


componentes innecesarios


imports que no utilizas


rutas antiguas


links rotos


============================================================
FASE 37 — TEST DE NAVEGACIÓN
============================================================

Prueba:


TEST 1


/


Resultado:


Landing.


--------------------------------


TEST 2


/dashboard


Resultado:


Dashboard si estás
autenticado.


--------------------------------


TEST 3


/dashboard/repositories


Resultado:


Repositories.


--------------------------------


TEST 4


/dashboard/posts


Resultado:


Posts.


--------------------------------


TEST 5


/dashboard/settings


Resultado:


Settings.


--------------------------------


TEST 6


/dashboard/repositories/123


Resultado:


Repository ID: 123.


--------------------------------


TEST 7


/random-route


Resultado:


404.


--------------------------------


TEST 8


Cerrar sesión / reset.


Resultado:


Dashboard redirige
a Login.


--------------------------------


TEST 9


Login.


Resultado:


Dashboard funciona
después del login demo.


============================================================
FASE 38 — DEBUGGING
============================================================

Rompe deliberadamente
una ruta.


Por ejemplo:


/dashboard/repositories


y cambia temporalmente
la ruta.


Observa:


¿Qué renderiza?


¿Por qué?


Utiliza DevTools.


Revisa:


URL


React tree


Console


Network


El objetivo es que
entiendas el Router
y no solamente copies
la configuración.


============================================================
FASE 39 — RETO
============================================================

Si terminaste:


Agrega:


/dashboard/repositories/:id/commits


Ejemplo:


/dashboard/repositories/123/commits


Debe mostrar:


Commits


Repository:


123


Aquí empezarás a
pensar en rutas
más profundas.


============================================================
FASE 40 — RETO EXTRA
============================================================

Haz una página:


/dashboard/activity


que muestre:


Recent Activity


Commits


Pull Requests


Releases


No necesitas datos reales.


============================================================
🔥 RESULTADO FINAL
============================================================

Git2Post debe terminar
el día aproximadamente:


Landing
   ↓
Login
   ↓
Dashboard
   │
   ├── Repositories
   │       │
   │       └── :id
   │
   ├── Posts
   │
   ├── Settings
   │
   └── Activity


Con:


✓ BrowserRouter

✓ Routes

✓ Route

✓ Link

✓ NavLink

✓ useNavigate

✓ useParams

✓ Nested Routes

✓ Outlet

✓ Layout

✓ Index Route

✓ Dynamic Routes

✓ 404

✓ Protected Route

✓ Navigate

✓ Context integrado

✓ Reducer integrado


============================================================
CHECKPOINT FINAL
============================================================

Antes de terminar,
debes poder explicar
sin mirar código:


1.

¿Qué problema resuelve
React Router?


2.

¿Cuál es la diferencia
entre Link y NavLink?


3.

¿Cuándo usar
useNavigate?


4.

¿Qué hace useParams?


5.

¿Qué es una ruta dinámica?


6.

¿Qué hace Outlet?


7.

¿Qué es un Layout?


8.

¿Qué son Nested Routes?


9.

¿Qué es una Index Route?


10.

¿Cómo implementarías
una Protected Route?


11.

¿Cuál es la diferencia
entre Path Parameter
y Query Parameter?


12.

¿Por qué separar
pages de components?


13.

¿Por qué centralizar
las rutas?


============================================================
FIN DE PRÁCTICA
============================================================
*/