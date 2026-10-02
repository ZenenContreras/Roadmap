# Semana 5 — Día 5 — Práctica Final — API Types, Type Guards & Auditoría de Git2Post

## Objetivo

Hoy vas a cerrar TypeScript dentro de Git2Post.

No se trata de construir una feature enorme. Se trata de tomar lo aprendido durante los cuatro días anteriores y dejar el proyecto con una base tipada coherente.

---

# Parte 0 — Preparación

1. Ejecuta Git2Post.
2. Comprueba que funciona.
3. Revisa el flujo principal.
4. Haz un commit si tienes cambios estables.

---

# Parte 1 — Audita tus endpoints

Busca todos los lugares donde Git2Post realiza:

```ts
fetch(...)
```

Para cada uno responde:

- ¿Qué endpoint consume?
- ¿Qué datos espera?
- ¿Qué tipo representa esos datos?
- ¿Dónde se transforma la respuesta?
- ¿Dónde se muestra?

---

# Parte 2 — `response.ok`

Revisa tus requests.

No dependas únicamente de:

```ts
await response.json()
```

Implementa el control correspondiente:

```ts
if (!response.ok) {
  throw new Error(...)
}
```

Prueba qué sucede cuando una request falla.

---

# Parte 3 — Tipar la respuesta

Revisa cada:

```ts
response.json()
```

Pregunta:

> ¿Qué estructura debería tener este dato?

Relaciona cada respuesta con tus tipos:

```text
GitHubUser
Repository
Post
...
```

No crees tipos innecesarios.

---

# Parte 4 — Typed Service

Localiza el service responsable de obtener repositorios.

Haz que su contrato sea explícito:

```ts
async function getRepositories(): Promise<Repository[]> {
  ...
}
```

El nombre puede ser diferente en tu proyecto.

---

# Parte 5 — Type Guard

Crea un type guard para `Repository`:

```ts
function isRepository(value: unknown): value is Repository {
  ...
}
```

Comprueba las propiedades mínimas necesarias.

Objetivo:

```text
unknown
   ↓
check
   ↓
Repository
```

---

# Parte 6 — Type Guard para arrays

Crea:

```ts
function isRepositoryArray(value: unknown): value is Repository[] {
  ...
}
```

Usa:

```ts
Array.isArray(...)
```

y una comprobación de cada elemento.

---

# Parte 7 — Runtime validation

Responde por escrito:

```ts
const data = await response.json() as Repository[];
```

¿Esto valida los datos?

Explica por qué.

Después compara:

```text
Type assertion
vs
Runtime validation
```

---

# Parte 8 — Generic `ApiResponse<T>`

Crea:

```ts
type ApiResponse<T> = {
  data: T;
  success: boolean;
};
```

Prueba mentalmente:

```ts
ApiResponse<Repository[]>
```

y:

```ts
ApiResponse<GitHubUser>
```

Explica qué representa cada uno.

---

# Parte 9 — Generic Function

Crea:

```ts
function success<T>(data: T): ApiResponse<T> {
  ...
}
```

Prueba con:

- un string;
- un usuario;
- un array de repositories.

Observa cómo TypeScript infiere `T`.

---

# Parte 10 — Audita tus `catch`

Busca:

```ts
catch (error)
```

No asumas automáticamente:

```ts
error.message
```

Practica:

```ts
error instanceof Error
```

---

# Parte 11 — Simula un error

Haz que temporalmente una request falle.

Comprueba:

```text
request
   ↓
error
   ↓
service
   ↓
hook
   ↓
UI
```

Pregunta:

> ¿El usuario recibe un estado de error entendible?

---

# Parte 12 — Auditoría global de `any`

Busca en `src/`:

```text
any
```

Por cada resultado:

1. ¿Realmente necesito `any`?
2. ¿Puedo usar un tipo concreto?
3. ¿Necesito `unknown`?
4. ¿Puedo crear un type/interface?

No conviertas todo automáticamente. Entiende cada caso.

---

# Parte 13 — Auditoría global de `as`

Busca:

```text
as
```

Para cada assertion pregunta:

> ¿Tengo evidencia de que esto realmente es `Something`?

No necesitas eliminar todos los `as`. Debes evitar usarlos como escape para ocultar problemas.

---

# Parte 14 — Auditoría de `useState`

Revisa todos los estados.

Especialmente:

```ts
useState(null)
```

Pregunta:

> ¿Qué tipos puede tener este estado durante toda su vida?

Ejemplos:

```ts
useState<GitHubUser | null>(null)
```

```ts
useState<Repository[]>([])
```

---

# Parte 15 — Auditoría de Props

Revisa los componentes principales.

Comprueba:

- datos;
- callbacks;
- props opcionales;
- children;
- unions cuando tengan sentido.

Ejemplo:

```ts
type RepositoryCardProps = {
  repository: Repository;
  onSelect: (repository: Repository) => void;
};
```

---

# Parte 16 — Auditoría de Context

Revisa los Contexts de Git2Post.

Comprueba:

- tipo del contexto;
- Provider;
- valores iniciales;
- custom hook;
- manejo de `undefined`.

Debes poder explicar por qué existe el tipo del Context.

---

# Parte 17 — Auditoría `.ts` / `.tsx`

Regla:

```text
Lógica sin JSX → .ts
React + JSX → .tsx
```

No conviertas archivos solamente por convertirlos.

---

# Parte 18 — Challenge: `undefined`

Crea:

```ts
function getRepositoryName(repository: Repository | undefined) {
  ...
}
```

Debe devolver:

- el nombre si existe;
- un texto apropiado si no existe.

Recuerda que:

```ts
find(...)
```

puede devolver:

```ts
Repository | undefined
```

---

# Parte 19 — Challenge: Generic `mapRepositories`

Crea una función genérica que reciba un array y transforme cada elemento.

El objetivo es entender:

```ts
<T>
```

y cómo un tipo puede viajar a través de una función.

Después responde:

> ¿Por qué un generic puede ser mejor que `any` aquí?

---

# Parte 20 — Challenge: explica este tipo

Explica:

```ts
Promise<ApiResponse<Repository[]>>
```

Descompón:

```text
Promise
  ↓
ApiResponse
  ↓
Repository[]
```

Si puedes explicarlo sin mirar apuntes, has entendido una parte importante de TypeScript.

---

# Parte 21 — Challenge: estado discriminado

Sin mirar el código anterior, intenta crear:

```ts
type SearchStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

Después intenta representar:

```text
idle
loading
success + data
error + message
```

Idealmente como discriminated union.

---

# Parte 22 — Challenge: `isString`

Escribe desde memoria:

```ts
function isString(value: unknown): value is string {
  ...
}
```

Después usa un valor `unknown` y utilízalo solamente después de comprobarlo.

---

# Parte 23 — Dibuja el flujo final

Dibuja:

```text
GitHub
   ↓
API response
   ↓
Type / validation
   ↓
Service
   ↓
Hook
   ↓
State
   ↓
Props
   ↓
Component
   ↓
UI
```

Añade dónde ocurren:

- loading;
- success;
- error;
- empty state.

---

# Parte 24 — Revisión final de Git2Post

## TypeScript

- [ ] tipos básicos
- [ ] interfaces
- [ ] type aliases
- [ ] unions
- [ ] literal types
- [ ] optional properties
- [ ] readonly
- [ ] type narrowing
- [ ] type guards
- [ ] generics

## React + TypeScript

- [ ] Props
- [ ] callbacks
- [ ] children
- [ ] useState
- [ ] useEffect
- [ ] useContext
- [ ] events
- [ ] discriminated unions

## API

- [ ] services
- [ ] Promise<T>
- [ ] response.ok
- [ ] API types
- [ ] unknown
- [ ] error handling
- [ ] type guards

---

# Examen final de la Semana 5

No mires apuntes inicialmente.

1. ¿Qué diferencia existe entre `type` e `interface`?
2. ¿Qué es una union?
3. ¿Qué es una discriminated union?
4. ¿Qué significa `Repository | undefined`?
5. ¿Qué significa `Promise<Repository[]>`?
6. ¿Qué diferencia existe entre `any` y `unknown`?
7. ¿Qué es un type guard?
8. ¿Qué significa `value is Repository`?
9. ¿Para qué sirven los generics?
10. ¿Por qué usamos `useState<GitHubUser | null>(null)`?
11. ¿Qué tipo tiene normalmente un callback como `onSelect`?
12. ¿Por qué `response.ok` importa?
13. ¿Por qué `as Repository[]` no valida una respuesta?
14. ¿Qué responsabilidad tiene un service?
15. Explica el flujo completo de datos de Git2Post.

Si fallas alguna, no significa que no aprendiste. Busca la respuesta, entiende el motivo y vuelve a explicarla con tus propias palabras.

---

# Definition of Done

Has terminado el Día 5 cuando:

- [ ] Git2Post funciona después de la migración.
- [ ] Las principales estructuras tienen tipos.
- [ ] Las Props importantes están tipadas.
- [ ] Los estados principales están tipados.
- [ ] Los services tienen contratos claros.
- [ ] Los errores de API se manejan correctamente.
- [ ] Entiendes `unknown`.
- [ ] Entiendes type guards.
- [ ] Entiendes generics básicos.
- [ ] Revisaste `any`.
- [ ] Revisaste `as`.
- [ ] Puedes explicar API → service → hook → component.
- [ ] Puedes responder el examen final con tus propias palabras.

---

# 🎉 Fin de Semana 5 — Fin del Mes 1

Llegaste al final del primer mes.

Tu progresión fue:

```text
JavaScript
    ↓
APIs
    ↓
React
    ↓
Arquitectura React
    ↓
TypeScript
    ↓
React + TypeScript
    ↓
API types
    ↓
Type guards
```

Y Git2Post fue evolucionando contigo.

No necesitas haber memorizado absolutamente todo. El objetivo es haber construido suficientes modelos mentales para investigar, depurar y seguir aprendiendo por tu cuenta.

# Semana 6 — Go Fundamentals + Backend

La próxima etapa:

```text
Frontend
React + TypeScript
       ↓
Backend
Go
       ↓
HTTP
       ↓
REST API
```

**MES 1: COMPLETADO.**
