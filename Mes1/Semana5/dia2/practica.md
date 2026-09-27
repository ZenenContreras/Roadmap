# Semana 5 --- Día 2: Práctica en Git2Post

## Objetivo

Hoy vas a tomar los tipos del Día 1 y hacer que también representen los
estados de Git2Post.

------------------------------------------------------------------------

## 1. Revisa el trabajo de ayer

Abre:

``` text
src/types/
├── user.ts
├── repository.ts
└── post.ts
```

Comprueba que Git2Post funciona.

Responde:

1.  ¿Qué representa `Repository`?
2.  ¿Qué propiedad puede ser `null`?
3.  ¿Qué propiedades son obligatorias?
4.  ¿Qué componentes usan repositories?
5.  ¿Dónde llegan desde GitHub?

Dibuja:

``` text
GitHub API
   ↓
Service
   ↓
Hook
   ↓
Page
   ↓
RepositoryList
   ↓
RepositoryCard
```

------------------------------------------------------------------------

## 2. Practica interface

Si `Repository` está como `type`, crea una versión equivalente como
`interface`:

``` ts
interface Repository {
  id: number;
  name: string;
  description: string | null;
}
```

Comprueba que Git2Post continúa funcionando.

------------------------------------------------------------------------

## 3. Practica readonly

Prueba:

``` ts
interface Repository {
  readonly id: number;
  name: string;
  description: string | null;
}
```

Después intenta:

``` ts
repository.id = 999;
```

Observa el error y decide si `id` debe ser readonly en tu modelo real.

------------------------------------------------------------------------

## 4. Crea GitHubUser como interface

En `src/types/user.ts`:

``` ts
export interface GitHubUser {
  readonly id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
}
```

Ajusta las propiedades a los datos que realmente utiliza Git2Post.

------------------------------------------------------------------------

## 5. Crea RequestStatus

Crea:

``` ts
export type RequestStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

En un componente/hook de Git2Post, prueba:

``` ts
const [status, setStatus] =
  useState<RequestStatus>("idle");
```

Después:

``` ts
setStatus("loading");
setStatus("success");
setStatus("error");
```

Y finalmente:

``` ts
setStatus("banana");
```

Comprueba que TypeScript lo rechaza.

------------------------------------------------------------------------

## 6. Practica narrowing

Crea:

``` ts
function formatRepositoryId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(0);
}
```

Identifica el tipo de `id`:

``` text
Antes del if → string | number
Dentro del if → string
Después → number
```

------------------------------------------------------------------------

## 7. Narrowing con null

Crea:

``` ts
function formatDescription(
  description: string | null
) {
  if (description !== null) {
    return description.toUpperCase();
  }

  return "No description";
}
```

Elimina temporalmente el `if` y observa el error.

Explica por qué TypeScript no puede asumir que `description` es string.

------------------------------------------------------------------------

## 8. Aplica narrowing a Git2Post

Busca un componente que muestre:

``` text
repository.description
```

Como puede ser:

``` ts
string | null
```

maneja ambos casos:

``` tsx
{repository.description !== null
  ? repository.description
  : "No description"}
```

Prueba también una solución con `?`/truthiness y piensa cuál expresa
mejor tu intención.

------------------------------------------------------------------------

## 9. Crea RepositoryState

Crea:

``` ts
export type RepositoryState =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data: Repository[];
    }
  | {
      status: "error";
      message: string;
    };
```

------------------------------------------------------------------------

## 10. Practica discriminated unions

Crea:

``` ts
function getRepositoryMessage(
  state: RepositoryState
) {
  if (state.status === "idle") {
    return "Search for repositories";
  }

  if (state.status === "loading") {
    return "Loading repositories...";
  }

  if (state.status === "error") {
    return state.message;
  }

  return `${state.data.length} repositories found`;
}
```

Observa que TypeScript sabe que:

``` text
error → message existe
success → data existe
```

------------------------------------------------------------------------

## 11. Conecta el modelo con el flujo real

Identifica en Git2Post:

``` text
Search
   ↓
fetch GitHub
   ↓
loading
   ↓
success/error
```

Mapéalo a:

``` text
idle
  ↓
loading
  ↓
success
```

o:

``` text
idle
  ↓
loading
  ↓
error
```

Analiza dónde tienes actualmente:

``` text
loading boolean
error string | null
data array | null
```

y piensa cómo `RepositoryState` podría representar el flujo con menos
combinaciones ambiguas.

No es obligatorio refactorizar todo todavía.

------------------------------------------------------------------------

## 12. Challenge: estados imposibles

Observa:

``` ts
type BadState = {
  loading: boolean;
  error: string | null;
  data: Repository[] | null;
};
```

¿Puede representar estados contradictorios?

Por ejemplo:

``` ts
{
  loading: false,
  error: "Something went wrong",
  data: [...]
}
```

Compara con:

``` ts
type RepositoryState =
  | { status: "loading" }
  | { status: "success"; data: Repository[] }
  | { status: "error"; message: string };
```

Explica qué información gana el segundo modelo.

------------------------------------------------------------------------

## 13. Challenge: narrowing

Completa:

``` ts
function test(value: string | number | null) {
  // string → uppercase
  // number → string
  // null → "No value"
}
```

Debes utilizar narrowing.

No utilices `any`.

------------------------------------------------------------------------

## 14. Challenge: `in`

Crea:

``` ts
type GitHubProfile = {
  login: string;
};

type GitHubOrganization = {
  login: string;
  company: string;
};
```

Después:

``` ts
function getAccountInfo(
  account: GitHubProfile | GitHubOrganization
) {
  if ("company" in account) {
    return account.company;
  }

  return account.login;
}
```

Explica por qué `in` permite hacer narrowing.

------------------------------------------------------------------------

## 15. Debugging Challenge

Rompe intencionalmente:

``` ts
const state: RepositoryState = {
  status: "success",
  message: "Something went wrong",
};
```

¿Por qué falla?

Después:

``` ts
const state: RepositoryState = {
  status: "error",
  data: [],
};
```

¿Por qué falla?

Después:

``` ts
const state: RepositoryState = {
  status: "loading",
  data: [],
};
```

¿Por qué falla?

La respuesta está en que cada variante tiene su propio contrato.

------------------------------------------------------------------------

## 16. Checkpoint

Responde sin mirar la teoría:

1.  ¿Qué es una interface?
2.  ¿Qué diferencia práctica existe entre `type` e `interface`?
3.  ¿Qué hace `readonly`?
4.  ¿Qué es un union type?
5.  ¿Qué es un literal type?
6.  ¿Qué es type narrowing?
7.  ¿Qué hace `typeof`?
8.  ¿Qué hace `in`?
9.  ¿Por qué hay que comprobar `null`?
10. ¿Qué es una discriminated union?
11. ¿Por qué `RepositoryState` puede ser más seguro que varios booleans?

------------------------------------------------------------------------

## Definition of Done

-   [ ] Entiendo interfaces.
-   [ ] Entiendo `type` vs `interface`.
-   [ ] Entiendo propiedades opcionales.
-   [ ] Entiendo `readonly`.
-   [ ] Sé crear unions.
-   [ ] Sé crear literal types.
-   [ ] Entiendo `string | null`.
-   [ ] Entiendo type narrowing.
-   [ ] Sé usar `typeof`.
-   [ ] Sé comprobar `null`.
-   [ ] Entiendo `in`.
-   [ ] Creé `RequestStatus`.
-   [ ] Creé `RepositoryState`.
-   [ ] Apliqué un estado tipado a Git2Post.
-   [ ] Apliqué narrowing a datos reales.
-   [ ] Git2Post sigue funcionando.
-   [ ] Puedo explicar por qué cada estado tiene sus propiedades.

------------------------------------------------------------------------

## Lo que debes haber aprendido hoy

Ayer:

``` text
¿Qué forma tienen mis datos?
```

Hoy:

``` text
¿Qué formas y estados pueden tener mis datos?
```

Para Git2Post:

``` text
Repository
     ↓
RepositoryState
     ├── idle
     ├── loading
     ├── success → data
     └── error   → message
```

------------------------------------------------------------------------

## Mañana --- Día 3

**Functions + Arrays/Objects + Generics**

Veremos:

``` text
typed parameters
return types
callbacks
function types
arrays
objects
<T>
ApiResponse<T>
```

y lo aplicaremos principalmente a los **services y respuestas de la
GitHub API de Git2Post**.
