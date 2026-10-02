# Semana 5 — Día 5 — TypeScript: API Types, Type Guards & Consolidación Final

## Objetivo del día

Hoy no vamos a meter una cantidad enorme de sintaxis nueva. El objetivo es integrar todo lo aprendido durante la Semana 5 dentro de Git2Post y cerrar el Mes 1 con una base real de TypeScript aplicada a React.

Mentalidad del día:

```text
Dato externo
    ↓
Tipo
    ↓
Validación / transformación
    ↓
Service
    ↓
Función / Hook
    ↓
Estado
    ↓
Props
    ↓
Component
```

---

## 1. Las APIs externas no conocen tus tipos

TypeScript puede decirte que esperas:

```ts
const repository: Repository = ...
```

pero no controla directamente lo que realmente llega desde Internet.

```ts
const response = await fetch(url);
const data = await response.json();
```

El servidor podría devolver los datos esperados, una estructura diferente o un error.

Por eso:

> TypeScript protege tu código durante el desarrollo, pero los datos externos necesitan una frontera de confianza.

En Git2Post, esa frontera normalmente será el **service**.

---

## 2. `response.json()` y TypeScript

Cuando haces:

```ts
const data = await response.json();
```

TypeScript no conoce automáticamente la estructura exacta de los datos.

No confundas:

```ts
const repositories = data as Repository[];
```

con validación real.

La assertion le dice al compilador qué quieres considerar que es el dato, pero no comprueba el JSON en runtime.

---

## 3. Type assertion: `as`

Puedes encontrar:

```ts
const user = data as GitHubUser;
```

Esto significa:

> “TypeScript, confía en mí: trataré este valor como GitHubUser.”

No significa:

> “Comprueba que realmente es GitHubUser.”

Usa `as` cuando realmente tengas una razón para confiar en el dato; no como forma de silenciar errores.

---

## 4. `unknown` vs `any`

### `any`

```ts
let data: any;
```

Con `any`, prácticamente desactivas el sistema de tipos para ese valor.

### `unknown`

```ts
let data: unknown;
```

Ahora TypeScript te obliga a demostrar qué es antes de utilizarlo.

```ts
function printValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

`unknown` es mucho más seguro para datos que todavía no conoces.

---

## 5. Type Guards

Un type guard permite comprobar un tipo y hacer que TypeScript lo reconozca después.

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

Después:

```ts
if (isString(value)) {
  value.toUpperCase();
}
```

La expresión:

```ts
value is string
```

le comunica a TypeScript que, si la función devuelve `true`, `value` debe tratarse como `string`.

---

## 6. Type Guard para Repository

Podemos crear:

```ts
function isRepository(value: unknown): value is Repository {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return "id" in value && "name" in value;
}
```

La validación puede hacerse más estricta posteriormente.

Lo importante ahora:

```text
unknown
   ↓
isRepository()
   ↓
Repository
```

---

## 7. Validar arrays

Una respuesta puede contener muchos repositorios:

```ts
function isRepositoryArray(value: unknown): value is Repository[] {
  return Array.isArray(value) && value.every(isRepository);
}
```

Entonces:

```ts
if (isRepositoryArray(data)) {
  data.forEach(repository => {
    console.log(repository.name);
  });
}
```

Ahora TypeScript entiende que `data` es `Repository[]`.

---

## 8. TypeScript no sustituye la validación runtime

Esta distinción es importante para una entrevista.

### TypeScript

- analiza tu código;
- detecta inconsistencias durante el desarrollo;
- desaparece cuando el código se convierte a JavaScript.

### Validación runtime

- ocurre mientras el programa está ejecutándose;
- comprueba datos reales;
- protege la frontera entre sistemas.

Por eso existen herramientas como Zod, Valibot y validadores propios.

No necesitas aprenderlas todavía.

---

## 9. `response.ok`

`fetch()` no lanza automáticamente un error para un HTTP 404 o 500.

Una práctica básica:

```ts
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
```

Así puedes distinguir:

```text
HTTP success
HTTP error
network error
```

---

## 10. Servicios tipados

Git2Post debería mantener la comunicación con APIs en una capa específica.

```text
components/
hooks/
services/
types/
```

Un service podría tener:

```ts
async function getRepositories(): Promise<Repository[]> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const data = await response.json();

  return data;
}
```

La parte importante:

```ts
Promise<Repository[]>
```

significa:

> La función es asíncrona y, cuando termina correctamente, produce un array de Repository.

---

## 11. ¿Por qué tipar el retorno?

Porque el resto de la aplicación puede confiar en el contrato del service.

```text
GitHub API
    ↓
getRepositories()
    ↓
Promise<Repository[]>
    ↓
Hook
    ↓
Component
```

El componente no necesita conocer todos los detalles de `fetch`.

Esto mantiene responsabilidades separadas.

---

## 12. Generics

Podemos reutilizar tipos:

```ts
type ApiResponse<T> = {
  data: T;
  success: boolean;
};
```

Entonces:

```ts
ApiResponse<Repository[]>
```

representa:

```ts
{
  data: Repository[];
  success: boolean;
}
```

Mientras:

```ts
ApiResponse<GitHubUser>
```

representa:

```ts
{
  data: GitHubUser;
  success: boolean;
}
```

La idea de `<T>`:

> No sé todavía qué tipo contendrá esta estructura, pero quiero conservar ese tipo cuando se utilice.

---

## 13. Generics en funciones

```ts
function success<T>(data: T): ApiResponse<T> {
  return {
    data,
    success: true
  };
}
```

Si haces:

```ts
const result = success(repositoryList);
```

TypeScript puede inferir `T`.

Esto permite reutilización sin recurrir a `any`.

---

## 14. Errores en `catch`

No debes asumir automáticamente que `error` es un `Error`.

```ts
catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
```

Esto vuelve a utilizar narrowing.

---

## 15. Estados de API

Git2Post debería poder distinguir conceptualmente:

```text
idle
loading
success
error
```

Los errores pueden venir de:

- network failure;
- 401;
- 403;
- 404;
- 500;
- respuesta inesperada.

No necesitas crear un sistema gigantesco de errores. Necesitas que el estado represente la realidad de la operación.

---

## 16. Service → Hook → Component

Uno de los patrones más importantes:

```text
GitHub API
    ↓
github.service.ts
    ↓
useRepositories.ts
    ↓
RepositoryList.tsx
```

### Service
Habla con la API.

### Hook
Gestiona la operación dentro de React.

### Component
Renderiza la interfaz.

Esto es mucho más mantenible que colocar toda la lógica dentro de un componente enorme.

---

## 17. TypeScript no reemplaza la arquitectura

Una aplicación puede tener TypeScript perfecto y seguir estando mal diseñada.

TypeScript ayuda con:

- contratos;
- datos;
- funciones;
- props;
- estados;
- errores de tipos.

Pero tú sigues siendo responsable de:

- dónde vive el estado;
- cómo se separan responsabilidades;
- cómo se organiza la aplicación;
- qué componente conoce qué información;
- qué lógica pertenece a un service;
- qué lógica pertenece a un hook.

Esto es pasar de aprender sintaxis a aprender **ingeniería de software**.

---

## 18. Auditoría final de Git2Post

Busca:

```text
any
as
useState(
useEffect(
fetch(
response.json()
catch(
```

Pregúntate:

- ¿Dónde tengo `any`?
- ¿Dónde tengo `as`?
- ¿Estoy ocultando algún problema?
- ¿Hay estados mal tipados?
- ¿Mis Props tienen tipos?
- ¿Mis API responses tienen modelos?
- ¿Mis servicios tienen retornos claros?
- ¿Mis errores están correctamente manejados?

Especialmente revisa:

```ts
useState(null)
```

Si almacenas un usuario:

```ts
useState<GitHubUser | null>(null)
```

---

## 19. Tu modelo mental después del primer mes

```text
Usuario
   ↓
UI
   ↓
Component
   ↓
Hook
   ↓
Service
   ↓
API
   ↓
Data
   ↓
TypeScript
```

Y hacia arriba:

```text
API Data
   ↓
Type
   ↓
State
   ↓
Props
   ↓
Component
   ↓
UI
```

Esto empieza a parecerse mucho más al trabajo real de un Software Engineer.

---

## 20. Checklist final de TypeScript

### Fundamentals
- [ ] string
- [ ] number
- [ ] boolean
- [ ] null
- [ ] undefined
- [ ] arrays
- [ ] objects

### Modeling
- [ ] type
- [ ] interface
- [ ] optional properties
- [ ] readonly
- [ ] extends
- [ ] unions
- [ ] literal types

### Functions
- [ ] parameter types
- [ ] return types
- [ ] optional parameters
- [ ] callbacks

### Narrowing
- [ ] typeof
- [ ] null checks
- [ ] in
- [ ] instanceof
- [ ] type guards
- [ ] discriminated unions

### Generics
- [ ] generic types
- [ ] generic functions
- [ ] `<T>`

### React
- [ ] typed props
- [ ] children
- [ ] useState
- [ ] useEffect
- [ ] useContext
- [ ] typed events
- [ ] typed callbacks

### APIs
- [ ] typed services
- [ ] Promise<T>
- [ ] API response models
- [ ] response.ok
- [ ] unknown
- [ ] error handling

---

## 21. Preguntas finales

Antes de cerrar el día, responde sin mirar apuntes:

1. ¿Cuál es la diferencia entre `Repository` y `Repository[]`?
2. ¿Qué significa `Promise<Repository[]>`?
3. ¿Para qué sirve `ApiResponse<T>`?
4. ¿Por qué `unknown` es más seguro que `any`?
5. ¿Qué hace un type guard?
6. ¿Qué significa `value is Repository`?
7. ¿Por qué `response.ok` es importante?
8. ¿Qué problema existe con `useState(null)`?
9. ¿Por qué usamos `GitHubUser | null`?
10. ¿Qué devuelve `find()` cuando no encuentra un elemento?
11. ¿Qué diferencia hay entre TypeScript y validación runtime?
12. ¿Qué debería hacer un service?
13. ¿Qué debería hacer un hook?
14. ¿Qué debería hacer un component?
15. ¿Cómo fluye un dato desde GitHub hasta la interfaz de Git2Post?

Si puedes explicar estas preguntas con tus propias palabras, ya tienes una base bastante sólida.

---

# 🎉 Cierre del Mes 1

Este es el final de la **Semana 5** y del **Mes 1**.

Durante este primer mes pasaste por:

```text
JavaScript Fundamentals
        ↓
JavaScript + APIs
        ↓
React Fundamentals
        ↓
React Architecture
        ↓
TypeScript
        ↓
TypeScript + React
```

Y lo hiciste construyendo proyectos, no solamente leyendo teoría.

El objetivo ahora no es recordar absolutamente todo.

El objetivo es haber construido suficientes modelos mentales para poder investigar, depurar y seguir aprendiendo por tu cuenta.

## Próximo paso

### Semana 6 — Go Fundamentals + Backend

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

**Mes 1: COMPLETADO.**
