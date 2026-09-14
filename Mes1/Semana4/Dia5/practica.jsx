/*
==========================================================
SEMANA 4 — DÍA 5
PRÁCTICA APLICADA
PROYECTO: Git2Post
==========================================================

TEMA:

Performance

React.memo
useMemo
useCallback
State Colocation
Renderización


REGLA PRINCIPAL:

NO OPTIMIZAR A CIEGAS.

Primero:

OBSERVAR
↓
MEDIR
↓
ENTENDER
↓
OPTIMIZAR


==========================================================
*/


/*
==========================================================
PARTE 1 — AUDITORÍA DE GIT2POST
==========================================================

Abre Git2Post.

Busca componentes grandes.


Pregúntate:

1. ¿Cuál tiene más JSX?
2. ¿Cuál tiene más state?
3. ¿Cuál tiene más funciones?
4. ¿Cuál tiene listas?
5. ¿Cuál tiene filtros?
6. ¿Cuál recibe muchos props?
7. ¿Cuál se actualiza frecuentemente?


Haz una lista.


Ejemplo:

Dashboard
RepositoryList
RepositoryCard
PostGenerator


NO optimices todavía.


==========================================================
*/


/*
==========================================================
PARTE 2 — OBSERVAR RE-RENDERS
==========================================================

En un componente importante
agrega temporalmente:

console.log("Dashboard render");


Haz lo mismo en:

RepositoryList


y:

RepositoryCard


Ahora interactúa con la aplicación.


Por ejemplo:

- escribe en un input
- abre modal
- cambia filtro
- selecciona repositorio
- navega


Observa qué componentes
vuelven a renderizar.


==========================================================
*/


/*
==========================================================
PARTE 3 — ENTENDER EL PROBLEMA
==========================================================

No todos los renders
son malos.


Si haces:

setSearch(...)


es normal que
el componente relacionado
se vuelva a renderizar.


La pregunta es:

¿Qué componentes están
renderizando sin necesitarlo?


==========================================================
*/


/*
==========================================================
PARTE 4 — STATE COLOCATION
==========================================================

Busca un state que esté
demasiado arriba.


Por ejemplo:

const [search, setSearch] =
    useState("");


Pregunta:

¿Quién necesita search?


Si solamente:

RepositorySearch


lo necesita,


considera moverlo
más cerca de ese componente.


Esto puede reducir
el área afectada
por los renders.


==========================================================
*/


/*
==========================================================
PARTE 5 — IDENTIFICAR LISTAS
==========================================================

Busca:

.map()


especialmente:

repositories.map()


posts.map()


activity.map()


Identifica:

¿Qué componente representa
cada elemento?


Por ejemplo:

RepositoryCard


Ese componente será candidato
para analizar con React.memo.


==========================================================
*/


/*
==========================================================
PARTE 6 — REACT.MEMO
==========================================================

Selecciona una card
que realmente tenga sentido.


Por ejemplo:

RepositoryCard


Antes:

function RepositoryCard(...) {

    ...

}


Después:

const RepositoryCard =
    React.memo(
        function RepositoryCard(...) {

            ...

        }
    );


Ahora prueba la aplicación.


Observa:

¿realmente disminuyeron
renders innecesarios?


No asumas.


Comprueba.


==========================================================
*/


/*
==========================================================
PARTE 7 — CREAR UN RENDER COUNTER
==========================================================

Temporalmente puedes utilizar:

console.count(
    "RepositoryCard render"
);


Ahora interactúa con:

- búsqueda
- filtros
- botones
- navegación


Observa cuántas veces
se renderiza.


Después de terminar
puedes eliminar estos logs.


==========================================================
*/


/*
==========================================================
PARTE 8 — PROBAR React.memo
==========================================================

Haz una prueba.


Parent cambia un state
que NO debería modificar
RepositoryCard.


Pregunta:

¿RepositoryCard
sigue renderizando?


Si sí:

investiga sus props.


Especialmente:

- objetos
- arrays
- funciones


==========================================================
*/


/*
==========================================================
PARTE 9 — ENCONTRAR UN OBJETO
COMO PROP
==========================================================

Busca algo parecido a:

<RepositoryCard
    repository={{
        ...
    }}
/>


o:

const repositoryData = {
    ...
};


y luego:

<RepositoryCard
    repository={repositoryData}
/>


Analiza si ese objeto
se crea nuevamente
en cada render.


==========================================================
*/


/*
==========================================================
PARTE 10 — useMemo
==========================================================

Ahora busca un cálculo
real dentro de Git2Post.


Idealmente algo como:

filter()
sort()
map()


que trabaje con
una cantidad significativa
de datos.


Por ejemplo:

const filteredRepositories =
    repositories.filter(...);


Antes de usar useMemo:

pregunta:

¿Este cálculo realmente
es costoso?


Si la respuesta es:

NO


déjalo como está.


Si existe un motivo
para optimizarlo:

utiliza:

useMemo()


==========================================================
*/


/*
==========================================================
PARTE 11 — FILTRO DE REPOSITORIOS
==========================================================

Si Git2Post tiene
búsqueda de repositorios,
implementa o refactoriza:

filteredRepositories


para que el cálculo
pueda utilizar:

useMemo()


Conceptualmente:


const filteredRepositories =
    useMemo(() => {

        return repositories.filter(
            repository => ...
        );

    }, [
        repositories,
        search
    ]);


IMPORTANTE:

No copies sin entender
las dependencias.


Pregúntate:

¿Qué variables utiliza
el cálculo?


Esas variables
deben influir en
el resultado.


==========================================================
*/


/*
==========================================================
PARTE 12 — USECALLBACK
==========================================================

Busca una función
que se pase como prop.


Por ejemplo:

<RepositoryList
    onSelect={handleSelect}
/>


Ahora analiza:

¿RepositoryList
está memoizado?


Si NO:

useCallback puede no aportar
un beneficio real.


Si SÍ:

puede tener sentido estabilizar
la referencia.


==========================================================
*/


/*
==========================================================
PARTE 13 — USECALLBACK
APLICADO
==========================================================

Si existe un caso apropiado:

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


Después observa:

¿cambió el comportamiento?


¿disminuyeron renders?


¿Por qué?


==========================================================
*/


/*
==========================================================
PARTE 14 — DEPENDENCIAS
==========================================================

Ahora cambia algo
que dependa de una variable.


Ejemplo:

const handleSelect =
    useCallback(
        (repository) => {

            console.log(
                selectedCategory
            );

        },
        []
    );


Ahora tienes un problema.


¿Por qué?


Porque:

selectedCategory


es utilizada dentro
de la función.


Debes analizar
si debe formar parte
de dependencies.


Este ejercicio es importante
para entender closures
y referencias.


==========================================================
*/


/*
==========================================================
PARTE 15 — USEMEMO Y DEPENDENCIAS
==========================================================

Haz lo mismo con:

useMemo()


Supón:

const result =
    useMemo(() => {

        return calculate(
            repositories,
            search
        );

    }, [repositories]);


Pregunta:

¿Falta algo?


Sí:

search


porque también afecta
al resultado.


Corrígelo.


==========================================================
*/


/*
==========================================================
PARTE 16 — ERROR INTENCIONAL
==========================================================

Crea temporalmente:

const result =
    useMemo(() => {

        return repositories.filter(
            repo =>
                repo.name
                    .includes(search)
        );

    }, []);


Ahora cambia:

search


Observa qué ocurre.


El resultado puede quedar
obsoleto.


Después corrígelo.


Objetivo:

entender dependencies,
no memorizar una sintaxis.


==========================================================
*/


/*
==========================================================
PARTE 17 — COMPARACIÓN
==========================================================

Crea mentalmente esta tabla:


React.memo
    ↓
componente


useMemo
    ↓
valor


useCallback
    ↓
función


Ahora encuentra
un ejemplo real de cada uno
en Git2Post.


No importa si solamente
utilizas uno o dos.


La comprensión importa
más que la cantidad.


==========================================================
*/


/*
==========================================================
PARTE 18 — ¿QUÉ NO OPTIMIZAR?
==========================================================

Busca componentes pequeños.


Ejemplo:

Button


Si tienes:

const handleClick =
    useCallback(...)


pregúntate:

¿Existe realmente
un problema?


Si no:

elimina la optimización.


Queremos aprender
a NO sobreoptimizar.


==========================================================
*/


/*
==========================================================
PARTE 19 — REVISAR COMPONENTES
==========================================================

Busca componentes
de más de aproximadamente
200-300 líneas.


No significa que estén mal.


Pero analiza:


¿Tiene demasiadas responsabilidades?


¿Podemos dividirlo?


Por ejemplo:


Dashboard


puede convertirse en:


Dashboard
├── DashboardHeader
├── Stats
├── RepositoryList
├── RecentActivity
└── PostPreview


==========================================================
*/


/*
==========================================================
PARTE 20 — DIVIDIR COMPONENTES
==========================================================

Selecciona un componente
grande de Git2Post.


Divide solamente
si tiene sentido.


No hagas:

Component1
Component2
Component3
Component4


sin necesidad.


Busca límites naturales
de responsabilidad.


==========================================================
*/


/*
==========================================================
PARTE 21 — PERFORMANCE CHECK
==========================================================

Ahora prueba:


1.

Abrir Dashboard.


2.

Buscar repositorio.


3.

Filtrar.


4.

Seleccionar repositorio.


5.

Abrir preview.


6.

Generar post.


Observa:

¿Qué renderiza?


¿Qué debería renderizar?


¿Qué podría evitarse?


==========================================================
*/


/*
==========================================================
PARTE 22 — DEBUGGING CHALLENGE
==========================================================

Crea un caso donde:

Parent
    ↓
Child


Child utiliza:

React.memo


Parent crea:

const data = {
    value: 10
};


y pasa:

<Child data={data} />


Observa si memo realmente
evita renders.


Después intenta estabilizar
el objeto con:

useMemo()


Y observa qué ocurre.


Objetivo:

entender referencias.


==========================================================
*/


/*
==========================================================
PARTE 23 — SEGUNDO DEBUGGING CHALLENGE
==========================================================

Crea:

const handleClick = () => {};


Pásala a:

React.memo(Child)


Observa.


Después cambia a:

useCallback()


Observa nuevamente.


Pregunta:

¿Por qué cambió?


==========================================================
*/


/*
==========================================================
PARTE 24 — MEDICIÓN
==========================================================

Utiliza React Developer Tools
si lo tienes disponible.


Busca:

Profiler


La meta no es obtener
un número perfecto.


La meta es aprender
a investigar.


Preguntas:

¿Qué componente renderiza?


¿Por qué?


¿Cuánto trabajo hace?


¿Realmente necesito
optimizarlo?


==========================================================
*/


/*
==========================================================
PARTE 25 — REFACTOR FINAL
==========================================================

Ahora revisa Git2Post.


El código final NO debe tener:

useMemo por todas partes.


useCallback por todas partes.


React.memo por todas partes.


Debe tener solamente
las optimizaciones
que tengan una razón.


Para cada optimización
deberías poder escribir
un comentario temporal:

"Optimizado porque..."


Si no puedes explicar
por qué existe:

probablemente no debería estar.


==========================================================
*/


/*
==========================================================
PARTE 26 — CHECKPOINT TÉCNICO
==========================================================

Responde sin mirar teoría:


1.

¿Qué provoca un re-render?


2.

¿Un re-render significa
que todo el DOM se reconstruye?


3.

¿Qué hace React.memo?


4.

¿Qué memoriza useMemo?


5.

¿Qué memoriza useCallback?


6.

¿Por qué dos objetos
con el mismo contenido
pueden ser diferentes?


7.

¿Por qué una función
puede provocar que
una prop cambie?


8.

¿Cuándo usarías useMemo?


9.

¿Cuándo NO usarías useMemo?


10.

¿Cuándo usarías useCallback?


11.

¿Por qué no debes usar
useCallback en todo?


12.

¿Qué significa
State Colocation?


13.

¿Por qué dividir componentes
puede ayudar a performance?


14.

¿Por qué medir antes
de optimizar?


==========================================================
*/


/*
==========================================================
RESULTADO ESPERADO
==========================================================

Al terminar el día:

✅ Entiendes re-render.

✅ Entiendes referencias.

✅ Entiendes React.memo.

✅ Entiendes useMemo.

✅ Entiendes useCallback.

✅ Entiendes dependencies.

✅ Identificaste renders
   innecesarios en Git2Post.

✅ Optimizaste solamente
   donde tenía sentido.

✅ Mejoraste la estructura
   de algún componente
   si era necesario.

✅ Entiendes que performance
   no significa llenar el código
   de memoización.


==========================================================
*/