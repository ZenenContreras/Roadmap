# Semana 5 --- Día 2: Interfaces + Unions + Type Narrowing

## Objetivo

Hoy construimos sobre el Día 1:

``` text
type
→ interface
→ unions
→ literal types
→ type narrowing
→ type guards
```

Todo se aplica directamente a Git2Post.

Al terminar debes poder: - crear interfaces reutilizables; - entender
`interface` vs `type`; - usar propiedades opcionales y `readonly`; -
crear union y literal types; - modelar estados; - entender type
narrowing; - usar `typeof`, `in` y comprobaciones de `null`; - crear
discriminated unions.

------------------------------------------------------------------------

## 1. Interface

Una `interface` describe la forma que debe tener un objeto:

``` ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Entonces:

``` ts
const user: User = {
  id: 1,
  name: "Zenen",
  email: "zenen@example.com",
};
```

Piensa en una interface como un contrato para una estructura.

------------------------------------------------------------------------

## 2. interface vs type

Ambos pueden describir objetos:

``` ts
type User = {
  id: number;
  name: string;
};
```

``` ts
interface User {
  id: number;
  name: string;
}
```

Ambos son válidos.

Regla práctica para este roadmap:

``` text
interface
→ contratos/estructuras de objetos

type
→ aliases, unions y composiciones
```

No es una regla absoluta. Lo importante es ser consistente.

------------------------------------------------------------------------

## 3. Optional properties

``` ts
interface User {
  id: number;
  name: string;
  bio?: string;
}
```

`bio?` significa que la propiedad puede no existir.

Esto es diferente de:

``` ts
bio: string | null;
```

Porque:

``` text
bio?: string
→ puede faltar

bio: string | null
→ existe, pero puede valer null
```

------------------------------------------------------------------------

## 4. readonly

``` ts
interface Repository {
  readonly id: number;
  name: string;
}
```

Después:

``` ts
repository.id = 2;
```

TypeScript debe impedirlo.

Es útil para valores que conceptualmente no deberían cambiar
accidentalmente.

------------------------------------------------------------------------

## 5. Extending interfaces

Una interface puede extender otra:

``` ts
interface User {
  id: number;
  name: string;
}

interface GitHubUser extends User {
  login: string;
  avatar_url: string;
}
```

`GitHubUser` contiene todos los campos de `User` más los nuevos.

------------------------------------------------------------------------

## 6. Union types

Un union significa que un valor puede ser uno de varios tipos:

``` ts
let id: string | number;

id = 123;
id = "123";
```

Pero no:

``` ts
id = true;
```

No significa "cualquier cosa". Significa exactamente las alternativas
declaradas.

------------------------------------------------------------------------

## 7. Literal types

Podemos limitar todavía más los valores:

``` ts
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

Ahora:

``` ts
let status: Status = "idle";
status = "loading";
status = "success";
status = "error";
```

Pero:

``` ts
status = "banana";
```

es inválido.

Esto es perfecto para estados de UI.

------------------------------------------------------------------------

## 8. Git2Post y RequestStatus

En Semana 4 trabajamos estados como:

``` text
idle
loading
success
error
```

Ahora podemos convertirlos en un contrato:

``` ts
export type RequestStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

Esto evita valores arbitrarios.

------------------------------------------------------------------------

## 9. Unions con null

``` ts
description: string | null;
```

significa que puede ser `string` o `null`.

Por eso esto no es seguro:

``` ts
description.toUpperCase();
```

Primero debemos comprobarlo.

------------------------------------------------------------------------

## 10. Type narrowing

Type narrowing significa que TypeScript puede reducir un tipo amplio
después de una comprobación.

``` ts
function formatId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(0);
}
```

Antes:

``` text
string | number
```

Dentro del `if`:

``` text
string
```

Después:

``` text
number
```

------------------------------------------------------------------------

## 11. typeof

Uno de los guards más comunes:

``` ts
typeof value === "string"
```

Ejemplo:

``` ts
function formatId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return id.toFixed(0);
}
```

------------------------------------------------------------------------

## 12. Narrowing con null

``` ts
function printDescription(description: string | null) {
  if (description !== null) {
    console.log(description.toUpperCase());
  }
}
```

Dentro del `if`, TypeScript sabe que `description` es `string`.

------------------------------------------------------------------------

## 13. Optional properties y narrowing

``` ts
interface User {
  name: string;
  bio?: string;
}
```

Podemos comprobar:

``` ts
function showBio(user: User) {
  if (user.bio) {
    console.log(user.bio.toUpperCase());
  }
}
```

Antes de comprobarlo:

``` text
string | undefined
```

Después:

``` text
string
```

------------------------------------------------------------------------

## 14. in operator

Podemos comprobar si una propiedad existe:

``` ts
if ("bio" in user) {
  // ...
}
```

Esto puede ayudar a hacer narrowing cuando tenemos estructuras
diferentes.

------------------------------------------------------------------------

## 15. Union de objetos

Podemos representar diferentes estados:

``` ts
interface SuccessState {
  status: "success";
  data: Repository[];
}

interface ErrorState {
  status: "error";
  message: string;
}

type RepositoryState =
  | SuccessState
  | ErrorState;
```

La propiedad `status` permite distinguir las variantes.

------------------------------------------------------------------------

## 16. Discriminated unions

Podemos hacerlo todavía más completo:

``` ts
type RepositoryState =
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

Ahora:

``` ts
function renderState(state: RepositoryState) {
  if (state.status === "loading") {
    return "Loading...";
  }

  if (state.status === "error") {
    return state.message;
  }

  if (state.status === "success") {
    return state.data;
  }

  return "Search for repositories";
}
```

TypeScript sabe qué propiedades existen en cada estado.

------------------------------------------------------------------------

## 17. Por qué es útil

En vez de tener combinaciones ambiguas:

``` ts
{
  loading: boolean;
  error: string | null;
  data: Repository[] | null;
}
```

podemos representar estados válidos explícitamente:

``` text
idle
loading
success + data
error + message
```

No siempre necesitas una discriminated union, pero debes aprender a
reconocer cuándo puede mejorar el modelo.

------------------------------------------------------------------------

## 18. Errores a evitar

No uses:

``` ts
any
```

para silenciar errores.

No hagas unions enormes sin necesidad:

``` ts
string | number | boolean | object | null
```

No uses `as` solamente para callar TypeScript.

Y no confundas:

``` ts
bio?: string
```

con:

``` ts
bio: string | null
```

------------------------------------------------------------------------

## Mental model

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
   ├── success + data
   └── error + message
```
