/*
============================================================
SEMANA 3 — DÍA 4
PROYECTO 1 — DEVPULSE
PRACTICA
============================================================

OBJETIVO DEL DÍA

Convertir DevPulse en una aplicación
interactiva utilizando:

- Events
- onClick
- onChange
- onSubmit
- Event handlers
- Controlled inputs
- Forms
- State + Forms
- preventDefault()
- Validación básica

IMPORTANTE:

NO crear ejercicios separados.

TODO se implementa directamente
en el proyecto:

devpulse/


============================================================
ESTADO ACTUAL DEL PROYECTO
============================================================

Al terminar Día 3 deberías tener:

- Profile
- Props
- useState
- Follow
- Followers
- Online / Offline
- Technologies
- Add Node.js


Ahora NO vamos a borrar eso.

Vamos a construir encima.


============================================================
FASE 1 — REVISAR LA ESTRUCTURA
============================================================

Tu proyecto debería tener
una estructura similar a:


src/

    components/

        Header.jsx

        ProfileCard.jsx

        Stats.jsx

        Technologies.jsx


    App.jsx

    main.jsx

    index.css


No tienes que copiar exactamente
estos nombres.

Lo importante es que entiendas
qué responsabilidad tiene
cada componente.


CHECK:

[ ] El proyecto ejecuta correctamente.

[ ] No existen errores
    en consola.

[ ] DevPulse todavía funciona.

[ ] Follow funciona.

[ ] Followers funciona.

[ ] Online/Offline funciona.

[ ] Technologies funciona.


NO continúes hasta que
esto funcione.


============================================================
FASE 2 — CREAR SEARCHBAR
============================================================

Crea un componente:


SearchBar


Ubicación recomendada:


src/components/SearchBar.jsx


Debe representar:

Search GitHub Developer


Y tener:


<input />

<button>


Visualmente:


┌──────────────────────────────┐
│ Search GitHub user...        │
└──────────────────────────────┘

[ Search ]


En este momento
todavía NO debes llamar
ninguna API.


============================================================
FASE 3 — CREAR SEARCH STATE
============================================================

Dentro del componente
correspondiente crea State:


search


Valor inicial:


""


Conceptualmente:


search = ""


Este State representa
lo que el usuario escribe.


IMPORTANTE:

No uses una variable normal:


let search = ""


Debe ser React State.


============================================================
FASE 4 — CONECTAR EL INPUT
============================================================

Convierte el input
en un:

CONTROLLED INPUT.


Debe existir una relación:


State
 ↓
value


y:


User
 ↓
onChange
 ↓
setState


Tu objetivo:


<input
    value={search}
    onChange={...}
/>


No copies esto sin entenderlo.


Debes poder explicar:


¿Por qué value usa search?


¿Por qué onChange
usa setSearch?


¿Qué contiene
event.target.value?


============================================================
FASE 5 — HANDLE CHANGE
============================================================

Crea:


handleChange


Su responsabilidad:

obtener el valor actual
del input y actualizar
el State.


Flujo:


User types
    ↓
onChange
    ↓
handleChange
    ↓
event.target.value
    ↓
setSearch()
    ↓
search


PRUEBA:

Escribe:


react


Después abre DevTools
y comprueba el valor.


Puedes utilizar:


console.log(search)


temporalmente.


RESULTADO ESPERADO:

Si escribes:


React


State debe contener:


"React"


Si borras todo:


search === ""


============================================================
FASE 6 — FORM
============================================================

Ahora NO quiero que el botón
simplemente tenga:

onClick


Vamos a utilizar:

<form>


Tu estructura conceptual:


<form>

    <input />

    <button type="submit">
        Search
    </button>

</form>


El formulario debe tener:


onSubmit={handleSubmit}


============================================================
FASE 7 — HANDLE SUBMIT
============================================================

Crea:


handleSubmit


Debe recibir:


event


Primero:


event.preventDefault()


Después puedes hacer:


console.log(search)


IMPORTANTE:

El navegador NO debe
recargar la página.


PRUEBA:

1. Escribe un username.
2. Presiona Search.
3. Observa la consola.
4. Comprueba que aparece
   el username.
5. Comprueba que la página
   no se recarga.


RESULTADO ESPERADO:

Input:


torvalds


Submit


Console:


torvalds


Y la página permanece
en la misma vista.


============================================================
FASE 8 — VALIDACIÓN BÁSICA
============================================================

Ahora evita búsquedas vacías.


Si:


search === ""


no debería ejecutarse
la lógica de búsqueda.


Pero tampoco queremos
considerar esto válido:


"       "


Utiliza:


trim()


Conceptualmente:


if (!search.trim()) {

    return;

}


Esto significa:


"Si no existe contenido
real, no continúes."


PRUEBA:

Caso 1:


""


Resultado:


No search.


Caso 2:


"     "


Resultado:


No search.


Caso 3:


"zenen"


Resultado:


Search continúa.


============================================================
FASE 9 — DISABLED
============================================================

Ahora mejora UX.


El botón:

Search


debe estar deshabilitado
cuando el input está vacío.


Conceptualmente:


disabled={!search.trim()}


Estado:


search = ""


↓

button disabled


Estado:


search = "react"


↓

button enabled


RESULTADO ESPERADO:


Input vacío:

[ Search ] ← disabled


Input:


react


[ Search ] ← enabled


============================================================
FASE 10 — MOSTRAR SEARCH
============================================================

Ahora crea un pequeño
estado para saber
qué búsqueda fue enviada.


Puedes utilizar:


submittedSearch


Inicial:


""


Cuando el usuario
haga submit:


submittedSearch = search


Entonces muestra:


Searching for:

react


IMPORTANTE:

No confundas:

search


con:


submittedSearch


search


representa lo que
el usuario está escribiendo.


submittedSearch


representa la última búsqueda
que realmente envió.


Esto es una distinción
muy importante.


============================================================
FASE 11 — LIMPIAR INPUT
============================================================

Después de una búsqueda
puedes decidir si quieres
limpiar el input.


Por ahora:

NO es obligatorio.


Primero asegúrate
de entender el flujo.


Puedes dejar:


react


visible después del submit.


Más adelante decidiremos
cómo debe comportarse
la UX definitiva.


============================================================
FASE 12 — NO ROMPER PROFILE
============================================================

Ahora tienes:

SearchBar


pero todavía deben funcionar:

Follow

Followers

Online/Offline

Technologies


Esto es importante.


Una feature nueva
NO debe romper
las features anteriores.


Prueba todo:


[ ] Follow

[ ] Unfollow

[ ] Followers

[ ] Online

[ ] Offline

[ ] Add technology

[ ] Search


============================================================
FASE 13 — EVENTOS EN DEV PULSE
============================================================

Ahora identifica
todos los eventos
que existen actualmente.


Ejemplo:


Follow button

→ onClick


Toggle status

→ onClick


Add technology form

→ onSubmit


Technology input

→ onChange


Search input

→ onChange


Search form

→ onSubmit


Quiero que mentalmente
puedas identificar
el evento correspondiente
para cada interacción.


============================================================
FASE 14 — REVISAR COMPONENTES
============================================================

Tu arquitectura puede
quedar aproximadamente:


App
│
├── Header
│
├── SearchBar
│
├── ProfileCard
│   ├── FollowButton
│   └── Status
│
├── Stats
│
└── Technologies
    └── TechnologyForm


NO necesitas que sea
idéntica.


Lo importante es:

Cada componente
debe tener una responsabilidad
clara.


============================================================
FASE 15 — REVISAR PROPS
============================================================

Como ya aprendiste Props,
puedes tener algo como:


<ProfileCard
    name="Zenen Contreras"
    role="Software Engineer"
/>


Y:


<FollowButton
    isFollowing={isFollowing}
    onFollow={handleFollow}
/>


No necesitas mover
todo State todavía.


Eso será parte importante
del Día 5.


============================================================
FASE 16 — REFACTOR
============================================================

Ahora revisa tu código.


Busca cosas como:


console.log()


que ya no necesitas.


Busca:


variables repetidas.


Busca:


lógica dentro del JSX
que sea demasiado compleja.


Busca:


componentes demasiado grandes.


Busca:


nombres poco claros.


El objetivo no es solamente
que funcione.


Queremos código
que otro developer
pueda entender.


============================================================
FASE 17 — TEST MANUAL
============================================================

Ahora prueba DevPulse
como si fueras un usuario.


TEST 1:

Abrir aplicación.


RESULTADO:

DevPulse aparece.


TEST 2:

Click Follow.


RESULTADO:

Following.


TEST 3:

Click nuevamente.


RESULTADO:

Follow.


TEST 4:

Toggle Online.


RESULTADO:

Offline.


TEST 5:

Toggle nuevamente.


RESULTADO:

Online.


TEST 6:

Agregar tecnología.


RESULTADO:

Nueva tecnología
aparece en la lista.


TEST 7:

Input Search vacío.


RESULTADO:

Search disabled.


TEST 8:

Escribir:


react


RESULTADO:

Search enabled.


TEST 9:

Enviar:


react


RESULTADO:

No recarga la página.


TEST 10:

Resultado:


Searching for: react


============================================================
FASE 18 — DEBUGGING
============================================================

Si algo falla,
NO vayas inmediatamente
a pedirle a la IA
la solución.


Primero pregunta:


1. ¿El evento está conectado?


2. ¿La función se está ejecutando?


3. ¿Qué contiene event?


4. ¿Qué contiene
   event.target.value?


5. ¿El State está cambiando?


6. ¿El componente está
   recibiendo el Prop correcto?


7. ¿Hay un typo?


8. ¿Existe algún error
   en la consola?


Utiliza:

console.log()


cuando sea necesario.


Ejemplo:


console.log(
    event.target.value
);


Y observa qué ocurre.


============================================================
🔥 RETO FINAL — DÍA 4
============================================================

DevPulse debe tener:


                  DevPulse

        Search GitHub Developer

        ┌─────────────────────┐
        │ torvalds             │
        └─────────────────────┘

              [ Search ]

        Searching for:
        torvalds


        ─────────────────────

        Zenen Contreras

        Software Engineer

        🟢 Online

        Followers: 1250

              [ Follow ]


        Technologies

        • JavaScript
        • React
        • Node.js


        ┌─────────────────────┐
        │ TypeScript          │
        └─────────────────────┘

        [ Add Technology ]


Y TODA LA INTERFAZ
DEBE SER INTERACTIVA.


============================================================
CHECKLIST FINAL
============================================================

[ ] Creé SearchBar.

[ ] Entiendo State del input.

[ ] Entiendo controlled input.

[ ] Implementé onChange.

[ ] Entiendo event.target.

[ ] Entiendo event.target.value.

[ ] Implementé form.

[ ] Implementé onSubmit.

[ ] Utilicé preventDefault().

[ ] Implementé validación básica.

[ ] Implementé disabled.

[ ] Implementé submittedSearch.

[ ] No recargo la página
    al hacer submit.

[ ] Las features del Día 3
    siguen funcionando.

[ ] Entiendo cuándo utilizar
    onClick.

[ ] Entiendo cuándo utilizar
    onChange.

[ ] Entiendo cuándo utilizar
    onSubmit.

[ ] Puedo explicar el flujo:


USER
 ↓
EVENT
 ↓
HANDLER
 ↓
setState
 ↓
STATE
 ↓
RE-RENDER
 ↓
UI


[ ] Debuggeé por mi cuenta.

[ ] Entiendo mi código
    y no solamente funciona.


============================================================
RESULTADO DEL DÍA 4
============================================================

DevPulse ahora tiene:

✓ React
✓ JSX
✓ Components
✓ Props
✓ useState
✓ Events
✓ Forms
✓ Controlled Inputs
✓ Conditional button state
✓ Basic validation

Todavía NO hacemos
la API real.

Eso llegará en:

DÍA 6


============================================================
FIN DE PRÁCTICA
============================================================
*/