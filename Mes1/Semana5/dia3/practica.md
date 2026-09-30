# Semana 5 — Día 3
## Práctica — Functions, Arrays, Objects & Generics en Git2Post

**Toda la práctica se hace dentro de Git2Post.**

---

## Parte 0 — Revisión

1. Ejecuta Git2Post.
2. Confirma que funciona.
3. Revisa `src/types/`.
4. Identifica tus tipos reales de `Repository`, `GitHubUser`, `Post` y estados.

No reemplaces tus modelos reales por ejemplos de la teoría.

---

## Parte 1 — Tipar funciones reales

Busca 3–5 funciones existentes.

Para cada una responde:

```text
¿Qué recibe?
¿Qué devuelve?
¿Puede devolver undefined?
¿Es async?
¿Recibe callbacks?
```

Después tipa sus parámetros.

Ejemplo:

```ts
function formatRepository(
  repository: Repository
): string {
  return repository.name;
}
```

Prioriza services, utilidades y funciones exportadas.

---

## Parte 2 — Service tipado

Encuentra el service que obtiene información de GitHub.

Debe tener un contrato similar a:

```ts
async function getRepositories(
  username: string
): Promise<Repository[]> {
  // implementación real
}
```

Usa la respuesta REAL que consume Git2Post.

No asumas que el endpoint devuelve exactamente `Repository[]` si tu aplicación usa otra estructura.

---

## Parte 3 — Arrays

Busca un array de repositories.

Asegúrate de entender:

```ts
Repository[]
```

y no confundas:

```ts
Repository
```

con:

```ts
Repository[]
```

---

## Parte 4 — `map`

Encuentra una transformación real:

```ts
const names = repositories.map(
  (repository) => repository.name
);
```

Comprueba que TypeScript infiera:

```ts
string[]
```

No añadas una anotación innecesaria si TypeScript ya la conoce.

---

## Parte 5 — `filter`

Encuentra un filtro real:

```ts
const withDescription = repositories.filter(
  (repository) => repository.description !== null
);
```

Comprueba que siga siendo:

```ts
Repository[]
```

---

## Parte 6 — `find`

Busca un repository:

```ts
const repository = repositories.find(
  (repository) => repository.id === repositoryId
);
```

Comprueba que sea:

```ts
Repository | undefined
```

Después haz narrowing:

```ts
if (!repository) {
  return;
}

console.log(repository.name);
```

---

## Parte 7 — Función reutilizable

Crea una función:

```ts
function findRepositoryById(
  repositories: Repository[],
  id: number
): Repository | undefined {
  return repositories.find(
    (repository) => repository.id === id
  );
}
```

Adáptala a tus tipos reales y úsala donde tenga sentido.

---

## Parte 8 — Transformación

Crea una estructura de UI reutilizable:

```ts
type RepositoryOption = {
  id: number;
  label: string;
};
```

Después:

```ts
function toRepositoryOptions(
  repositories: Repository[]
): RepositoryOption[] {
  return repositories.map((repository) => ({
    id: repository.id,
    label: repository.name,
  }));
}
```

Adapta los campos a Git2Post.

---

## Parte 9 — Callback tipado

Crea:

```ts
function transformRepositories(
  repositories: Repository[],
  transform: (repository: Repository) => string
): string[] {
  return repositories.map(transform);
}
```

Prueba:

```ts
const names = transformRepositories(
  repositories,
  (repository) => repository.name
);
```

Observa cómo TypeScript conoce el tipo de `repository`.

---

## Parte 10 — Crear `ApiResponse<T>`

En una ubicación adecuada, por ejemplo:

```text
src/types/api.ts
```

crea:

```ts
export type ApiResponse<T> = {
  data: T;
  error: string | null;
};
```

No lo introduzcas en toda la aplicación todavía.

Primero comprueba que entiendes el patrón.

---

## Parte 11 — Usarlo con tus modelos

Prueba:

```ts
type RepositoryResponse =
  ApiResponse<Repository[]>;
```

y:

```ts
type UserResponse =
  ApiResponse<GitHubUser>;
```

Comprueba qué tipo tiene `data` en cada caso.

---

## Parte 12 — Generic function

Crea:

```ts
function createApiResponse<T>(
  data: T
): ApiResponse<T> {
  return {
    data,
    error: null,
  };
}
```

Prueba:

```ts
const repositoryResponse =
  createApiResponse(repositories);
```

y observa el tipo inferido.

Haz lo mismo con un usuario real.

---

## Parte 13 — Aplicarlo al service

Revisa si tu arquitectura realmente se beneficia de:

```ts
Promise<ApiResponse<Repository[]>>
```

en lugar de:

```ts
Promise<Repository[]>
```

No tienes que usar `ApiResponse<T>` obligatoriamente.

El objetivo es reconocer cuándo un generic elimina repetición y mejora el contrato.

---

## Parte 14 — Refactor

Busca:

```text
any
funciones sin tipos
responses sin tipos
arrays ambiguos
objetos repetidos
```

Prioridad:

1. eliminar `any` innecesarios;
2. tipar funciones importantes;
3. tipar responses;
4. reutilizar tipos;
5. introducir generics donde realmente aporten.

No intentes refactorizar todo Git2Post.

---

# Challenges

## Challenge 1

Sin mirar la teoría:

```ts
function getRepositoryNames(
  repositories: Repository[]
): string[] {
  // ...
}
```

Debe devolver solamente nombres.

---

## Challenge 2

```ts
function findRepository(
  repositories: Repository[],
  name: string
): Repository | undefined {
  // ...
}
```

Busca por nombre y maneja correctamente `undefined`.

---

## Challenge 3 — Generic + callback

Crea:

```ts
function mapRepositories<T>(
  repositories: Repository[],
  transform: (repository: Repository) => T
): T[] {
  // ...
}
```

Después:

```ts
const names = mapRepositories(
  repositories,
  (repository) => repository.name
);
```

y:

```ts
const ids = mapRepositories(
  repositories,
  (repository) => repository.id
);
```

Comprueba:

```text
names → string[]
ids   → number[]
```

---

## Challenge 4 — Response

Crea:

```ts
type ApiResponse<T> = {
  data: T;
  error: string | null;
};
```

Después:

```ts
function success<T>(data: T): ApiResponse<T> {
  // ...
}
```

y:

```ts
function failure<T>(message: string): ApiResponse<T> {
  // ...
}
```

Piensa qué debería contener `data` en un error antes de implementarlo.

---

# Debugging Challenge 1

Introduce temporalmente:

```ts
const repository: Repository = {
  id: "123",
  name: "git2post",
  description: null,
};
```

Explica:

1. qué propiedad está incorrecta;
2. qué esperaba TypeScript;
3. qué recibió;
4. cómo lo solucionas.

Después corrígelo.

---

# Debugging Challenge 2

Prueba:

```ts
const repository = repositories.find(
  (repo) => repo.id === 999999
);

console.log(repository.name);
```

Explica por qué TypeScript no permite acceder directamente a `name`.

Después corrige con narrowing.

---

# Revisión final

Revisa:

```text
src/types/
src/services/
src/utils/
src/components/
```

Pregúntate:

- ¿Los modelos principales están definidos?
- ¿Los services tienen entradas y salidas claras?
- ¿Hay funciones reutilizables correctamente tipadas?
- ¿Los componentes siguen utilizando `any`?
- ¿Hay estructuras repetidas que podrían compartir un tipo?

---

# Definition of Done

- [ ] Parámetros tipados
- [ ] Retornos tipados donde aportan claridad
- [ ] `Promise<T>`
- [ ] `Repository[]`
- [ ] `map`
- [ ] `filter`
- [ ] `find` + `undefined`
- [ ] callbacks
- [ ] `<T>`
- [ ] `ApiResponse<T>`
- [ ] generic function
- [ ] type inference
- [ ] menos `any`
- [ ] aplicación real en Git2Post

---

# Qué aprendiste hoy

Hoy trabajaste con TypeScript a nivel de **flujo de datos**, no solamente de modelos.

```text
Repository[]
     ↓
functions
     ↓
callbacks
     ↓
Promise<T>
     ↓
generics
     ↓
reusable contracts
```

## Próximo día

### Día 4 — TypeScript + React

Mañana llevaremos estos tipos directamente a:

```text
Props
↓
Components
↓
useState<T>
↓
useEffect
↓
useContext
↓
Events
↓
Forms
```

y empezaremos a tipar el flujo real de Git2Post de extremo a extremo.
