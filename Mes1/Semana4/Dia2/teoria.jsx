/*
============================================================
SEMANA 4 — DÍA 2
REACT ROUTER
============================================================

PROYECTO:

Git2Post

"Turn your GitHub activity into content."


============================================================
OBJETIVOS DEL DÍA
============================================================

Al terminar este día debes entender:

1. Qué es routing
2. Por qué React necesita un Router
3. React Router
4. BrowserRouter
5. Routes
6. Route
7. Link
8. NavLink
9. useNavigate
10. useLocation
11. useParams
12. Rutas dinámicas
13. Nested Routes
14. Outlet
15. Layouts
16. Navegación programática
17. Página 404
18. Organización de páginas
19. Protected Routes
20. Arquitectura de rutas
21. Cómo aplicar todo esto a Git2Post


============================================================
1. ¿QUÉ ES ROUTING?
============================================================

Imagina una aplicación
web tradicional.


Tienes:


/


/about


/contact


Cada URL representa
una página diferente.


Por ejemplo:


example.com/


example.com/about


example.com/contact


Eso es:

ROUTING.


Routing significa decidir:

"Cuando el usuario visita
esta URL, ¿qué interfaz
debo mostrar?"


============================================================
2. EL PROBLEMA EN REACT
============================================================

React normalmente
es utilizado para construir
Single Page Applications.


SPA.


Single Page Application.


Esto significa que
no necesariamente
descargamos una página
HTML completamente nueva
cada vez que navegamos.


React puede cambiar
la interfaz dinámicamente.


Por eso necesitamos
un sistema que interprete:


URL


y determine:


COMPONENTE


============================================================
3. REACT ROUTER
============================================================

Una de las librerías
más utilizadas para esto
es:


react-router-dom


Nos permite construir:


/dashboard


/repositories


/settings


etc.


============================================================
4. INSTALACIÓN
============================================================

En Git2Post:


npm install react-router-dom


Después tendremos acceso
a los componentes y hooks
del Router.


============================================================
5. BROWSERROUTER
============================================================

El primer concepto
importante es:


BrowserRouter


Normalmente colocamos
nuestra aplicación dentro:


<BrowserRouter>

    <App />

</BrowserRouter>


Esto habilita el sistema
de routing para la aplicación.


============================================================
6. ¿QUÉ HACE BROWSERROUTER?
============================================================

BrowserRouter utiliza
el sistema de navegación
del navegador.


Por ejemplo:


/dashboard


/settings


/profile


React Router puede
detectar el cambio
y renderizar el componente
correspondiente.


============================================================
7. ROUTES
============================================================

Routes funciona como
contenedor de nuestras
rutas.


Ejemplo:


<Routes>

    ...

</Routes>


Dentro colocaremos:


<Route />


============================================================
8. ROUTE
============================================================

Una Route conecta:


URL


con:


Component


Ejemplo:


<Route
    path="/"
    element={<Home />}
/>


Significa:


Cuando la URL sea:


/


renderiza:


<Home />


============================================================
9. EJEMPLO
============================================================

Podemos tener:


<Routes>

    <Route
        path="/"
        element={<Home />}
    />

    <Route
        path="/dashboard"
        element={<Dashboard />}
    />

    <Route
        path="/settings"
        element={<Settings />}
    />

</Routes>


Entonces:


/


→ Home


/dashboard


→ Dashboard


/settings


→ Settings


============================================================
10. URL Y COMPONENTE
============================================================

Piensa en una tabla:


URL


/


↓


Home


----------------


/dashboard


↓


Dashboard


----------------


/settings


↓


Settings


----------------


Esto es básicamente
el trabajo del Router.


============================================================
11. LINK
============================================================

Para navegar dentro
de una aplicación React
podemos utilizar:


<Link />


Ejemplo:


<Link to="/dashboard">

    Dashboard

</Link>


Cuando el usuario hace
click:


URL cambia


y React renderiza
la nueva ruta.


============================================================
12. ¿POR QUÉ NO USAR <a>?
============================================================

Podríamos escribir:


<a href="/dashboard">

    Dashboard

</a>


Pero en una SPA
normalmente queremos
evitar la navegación
tradicional del navegador.


Porque:


<a>


puede provocar
una navegación completa.


<Link>


está diseñado para
la navegación interna
de React Router.


============================================================
13. LINK
============================================================

Utiliza:


<Link>


cuando simplemente
necesitas navegar.


Ejemplo:


<Link to="/settings">

    Settings

</Link>


============================================================
14. NAVLINK
============================================================

Existe también:


<NavLink />


Es parecido a:


<Link />


pero tiene una ventaja:


puede saber si la ruta
actual está activa.


Esto es extremadamente
útil para:


Navbar


Sidebar


Tabs


============================================================
15. EJEMPLO NAVLINK
============================================================

<NavLink
    to="/dashboard"
>

    Dashboard

</NavLink>


Si estamos en:


/dashboard


podemos aplicar
un estilo diferente.


Por ejemplo:


active:


font-weight: bold;


Esto permite mostrar
al usuario dónde está.


============================================================
16. ACTIVE STATE
============================================================

Imagina:


Dashboard

Repositories

Settings


Si estás en:


/repositories


queremos:


Dashboard

Repositories ← ACTIVE

Settings


NavLink facilita esto.


============================================================
17. USE NAVIGATE
============================================================

A veces no queremos
que el usuario navegue
haciendo click en un Link.


Queremos navegar
desde JavaScript.


Para eso:


useNavigate()


Ejemplo:


const navigate =
    useNavigate();


Después:


navigate("/dashboard");


Esto cambia la URL
programáticamente.


============================================================
18. ¿CUÁNDO USAR USE NAVIGATE?
============================================================

Ejemplos:


Después de login:


login()


↓

navigate("/dashboard")


Después de crear
un recurso:


createRepository()


↓

navigate("/repositories")


Después de un formulario:


submit()


↓

navigate("/success")


Es decir:


navegación como
consecuencia de una acción.


============================================================
19. LINK VS NAVIGATE
============================================================

Link:


navegación declarativa.


Ejemplo:


<Link to="/settings">


useNavigate:


navegación programática.


Ejemplo:


navigate("/settings");


Regla práctica:


Si es un elemento
visual de navegación:


Link / NavLink.


Si navegar es consecuencia
de lógica:


useNavigate.


============================================================
20. USE LOCATION
============================================================

Otro hook:


useLocation()


Permite conocer
información sobre
la URL actual.


Por ejemplo:


pathname


Puede ser:


/dashboard


También podemos obtener
otros datos relacionados
con la ubicación.


============================================================
21. ¿PARA QUÉ SIRVE?
============================================================

Puede utilizarse para:


Analytics


Breadcrumbs


UI dependiendo
de la página


detectar cambios
de URL


etc.


Pero no debemos utilizarlo
sin necesidad.


============================================================
22. USE PARAMS
============================================================

Aquí empieza una parte
MUY importante.


Supongamos que tenemos:


/repositories/123


y:


/repositories/456


Ambas representan
la misma estructura:


/repositories/:id


Aquí:


:id


es un:

PARAMETER.


============================================================
23. RUTA DINÁMICA
============================================================

Podemos definir:


<Route
    path="/repositories/:id"
    element={<Repository />}
/>


Ahora:


/repositories/123


funciona.


/repositories/456


también.


/repositories/999


también.


============================================================
24. USE PARAMS
============================================================

Dentro de:


Repository


podemos utilizar:


useParams()


Ejemplo:


const { id } =
    useParams();


Si la URL es:


/repositories/123


entonces:


id


será:


"123"


IMPORTANTE:


Los parámetros de URL
normalmente llegan como
strings.


============================================================
25. GIT2POST
============================================================

Esto será fundamental
para Git2Post.


Podremos tener:


/repositories


y:


/repositories/:id


Por ejemplo:


/repositories


→ lista


/repositories/123


→ repository específico


============================================================
26. FLUJO
============================================================

Usuario:


Repositories


↓

click


↓

RepositoryCard


↓

navigate


↓

/repositories/123


↓

RepositoryDetails


↓

useParams()


↓

id = 123


↓

buscar repository


============================================================
27. NESTED ROUTES
============================================================

Ahora algo más avanzado.


Imagina:


/dashboard


y:


/dashboard/repositories


/dashboard/posts


/dashboard/settings


Todas pertenecen
al Dashboard.


En lugar de repetir
estructuras podemos
utilizar:

Nested Routes.


============================================================
28. NESTED ROUTES
============================================================

Conceptualmente:


Dashboard
│
├── Repositories
├── Posts
└── Settings


URL:


/dashboard


/dashboard/repositories


/dashboard/posts


/dashboard/settings


============================================================
29. LAYOUT
============================================================

Un Layout es una
estructura visual
compartida.


Por ejemplo:


Sidebar


Header


Main


En lugar de repetir:


Sidebar


en cada página:


Dashboard


Repositories


Posts


Settings


creamos:


DashboardLayout


============================================================
30. DASHBOARD LAYOUT
============================================================

Conceptualmente:


DashboardLayout


┌───────────────────────┐
│ Header                │
├─────────┬─────────────┤
│ Sidebar │             │
│         │ Page        │
│         │             │
│         │             │
└─────────┴─────────────┘


La página específica
aparece dentro del Layout.


============================================================
31. OUTLET
============================================================

Aquí aparece:


<Outlet />


Outlet representa:


"Renderiza aquí
la ruta hija."


Ejemplo:


<DashboardLayout>

    <Sidebar />

    <main>

        <Outlet />

    </main>

</DashboardLayout>


Entonces:


/dashboard


puede renderizar:


Dashboard


y:


/dashboard/repositories


puede renderizar:


Repositories


dentro del mismo Layout.


============================================================
32. NESTED ROUTE CON OUTLET
============================================================

Conceptualmente:


<Route
    path="/dashboard"
    element={<DashboardLayout />}
>

    <Route
        index
        element={<Dashboard />}
    />

    <Route
        path="repositories"
        element={<Repositories />}
    />

    <Route
        path="posts"
        element={<Posts />}
    />

</Route>


IMPORTANTE:


Las rutas hijas
no necesitan repetir:


/dashboard


============================================================
33. INDEX ROUTE
============================================================

La palabra:


index


significa:


"Esta es la página
por defecto de este
nivel."


Entonces:


/dashboard


puede renderizar:


Dashboard


mientras:


/dashboard/repositories


renderiza:


Repositories.


============================================================
34. GIT2POST ROUTING
============================================================

Nuestra aplicación
podría tener:


/


Landing


/dashboard


Dashboard


/repositories


Repositories


/repositories/:id


Repository Details


/posts


Generated Posts


/settings


Settings


============================================================
35. ARQUITECTURA
============================================================

Podemos organizar:


src/


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


components/


Navbar.jsx

Sidebar.jsx


============================================================
36. PAGES VS COMPONENTS
============================================================

Una Page normalmente
representa una pantalla
completa.


Ejemplo:


Dashboard.jsx


Un Component normalmente
representa una pieza
reutilizable.


Ejemplo:


RepositoryCard.jsx


No existe una regla
universal absoluta.


Pero esta separación
ayuda muchísimo.


============================================================
37. ROUTER Y ARQUITECTURA
============================================================

Una buena aplicación
puede tener:


App


↓

Router


↓

Layout


↓

Page


↓

Components


Por ejemplo:


App


↓

Router


↓

DashboardLayout


↓

Repositories


↓

RepositoryCard


============================================================
38. 404
============================================================

¿Qué ocurre si alguien
visita:


/this-does-not-exist


?


Necesitamos una ruta
para páginas inexistentes.


Podemos utilizar:


path="*"


Ejemplo conceptual:


<Route
    path="*"
    element={<NotFound />}
/>


Entonces cualquier ruta
no reconocida muestra:


404 Not Found.


============================================================
39. NOT FOUND
============================================================

Nuestra página podría
mostrar:


404


Page not found.


[Back to Dashboard]


Y el botón puede utilizar:


useNavigate()


============================================================
40. PROTECTED ROUTES
============================================================

Ahora una idea
muy importante.


Supongamos que:


/dashboard


solo puede ser visto
por usuarios autenticados.


Necesitamos:


Protected Route.


Conceptualmente:


if user exists:


render page


else:


redirect login


============================================================
41. PROTECTED ROUTE
============================================================

Una estructura
conceptual:


<ProtectedRoute>

    <Dashboard />

</ProtectedRoute>


Si:


authenticated


→ Dashboard


Si:


not authenticated


→ Login


No necesitamos implementar
autenticación real todavía.


Pero debes entender
el patrón.


============================================================
42. REDIRECT
============================================================

React Router proporciona:


<Navigate />


Podemos utilizarlo
para redireccionar.


Ejemplo conceptual:


if (!user) {

    return (
        <Navigate
            to="/login"
        />
    );

}


Entonces el usuario
es enviado a:


/login


============================================================
43. PROTECTED ROUTE EN GIT2POST
============================================================

Eventualmente:


/


Landing


/login


Login


/dashboard


Protected


/repositories


Protected


/posts


Protected


/settings


Protected


============================================================
44. AUTENTICACIÓN
============================================================

Todavía NO vamos
a construir toda
la autenticación.


La veremos cuando
tenga sentido dentro
del proyecto.


Pero debes entender
que el Router puede
formar parte de la
arquitectura de acceso.


============================================================
45. QUERY PARAMETERS
============================================================

Existe otra forma
de información
en la URL.


Ejemplo:


/repositories?language=javascript


Aquí:


language=javascript


es un:

QUERY PARAMETER.


Es diferente de:


/repositories/:id


============================================================
46. PARAM VS QUERY
============================================================

Path Parameter:


/repositories/123


Representa normalmente
un recurso específico.


Query Parameter:


/repositories?language=javascript


Representa normalmente
filtros, búsquedas,
ordenamientos, etc.


============================================================
47. EJEMPLOS
============================================================

Path:


/repositories/123


Query:


/repositories?language=javascript


Query:


/repositories?sort=stars


Query:


/repositories?language=react&sort=stars


============================================================
48. CUÁNDO UTILIZAR CADA UNO
============================================================

Si quieres:


Repository específico:


/repositories/123


Si quieres:


filtrar repositorios:


/repositories?language=javascript


Esto es una decisión
de diseño importante.


============================================================
49. ROUTER Y APIs
============================================================

Router NO reemplaza
tu sistema de API.


Router decide:


"¿Qué página mostrar?"


API decide:


"¿Qué datos obtener?"


Son responsabilidades
diferentes.


============================================================
50. EJEMPLO GIT2POST
============================================================

Usuario visita:


/repositories/123


Router:


RepositoryDetails


↓

useParams()


↓

id = 123


↓

service


↓

GitHub API


↓

repository data


↓

UI


Aquí podemos ver cómo
Router y APIs trabajan
juntos.


============================================================
51. NO HACER TODO EN APP
============================================================

Un error muy común:


App.jsx


con:


1000 líneas


y todas las rutas.


No queremos eso.


Podemos crear:


AppRouter.jsx


para manejar
el routing.


============================================================
52. APP ROUTER
============================================================

Conceptualmente:


App


↓

AppRouter


↓

Routes


Esto mantiene
App limpio.


============================================================
53. ESTRUCTURA
============================================================

Podríamos tener:


src/


router/


AppRouter.jsx


Esto será útil a medida
que Git2Post crezca.


============================================================
54. ORDEN DE RUTAS
============================================================

En React Router moderno
el sistema maneja
matching de rutas
de manera inteligente.


Aun así:


mantén tus rutas
claras y fáciles
de entender.


No construyas
rutas innecesariamente
complejas.


============================================================
55. ROUTING NO ES BACKEND
============================================================

Importante:


/dashboard


no significa que
tengamos un endpoint
backend:


GET /dashboard


Son conceptos diferentes.


Frontend:


route


Backend:


endpoint


============================================================
56. MODELO MENTAL
============================================================

Piensa:


URL


↓

Router


↓

Page


↓

Components


↓

Hooks


↓

Services


↓

API


Por ejemplo:


/repositories/123


↓

RepositoryDetails


↓

useRepository()


↓

repositoryService


↓

GitHub API


============================================================
57. GIT2POST
============================================================

El objetivo de hoy
es que puedas diseñar
la navegación completa
de la aplicación.


No necesitas conectar
GitHub todavía.


Eso llegará después.


============================================================
58. CHECKPOINT
============================================================

Debes poder responder:


¿Qué es routing?


¿Qué es SPA?


¿Qué hace BrowserRouter?


¿Qué hace Routes?


¿Qué hace Route?


¿Qué diferencia hay
entre Link y NavLink?


¿Cuándo usar
useNavigate?


¿Qué hace useParams?


¿Qué es una ruta dinámica?


¿Qué son Nested Routes?


¿Qué hace Outlet?


¿Qué es un Layout?


¿Qué es una Index Route?


¿Qué es una ruta 404?


¿Qué es Protected Route?


¿Qué hace Navigate?


¿Qué diferencia hay
entre Path Params
y Query Params?


============================================================
59. PREGUNTA DE ENTREVISTA
============================================================

Si te preguntan:


"What's the difference
between Link and
useNavigate?"


Debes poder explicar:


Link se utiliza
principalmente para
navegación declarativa
desde la interfaz.


useNavigate permite
navegación programática
desde lógica JavaScript.


============================================================
60. OTRA PREGUNTA
============================================================

¿Qué es:


/repositories/:id


?


Respuesta:


Una ruta dinámica
cuyo parámetro:


id


puede cambiar.


Por ejemplo:


/repositories/1


/ repositories/25


/ repositories/100


y podemos obtenerlo
con:


useParams()


============================================================
61. OBJETIVO FINAL
============================================================

Hoy debes dejar de
pensar en React como:


"componentes en una página"


y comenzar a pensar:


"una aplicación compuesta
por páginas, rutas,
layouts y componentes."


Ese cambio mental
es importante para
un Junior Software Engineer.


============================================================
FIN DE TEORÍA
============================================================
*/