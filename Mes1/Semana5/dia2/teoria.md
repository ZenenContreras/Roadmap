# Semana 5 --- Día 1: TypeScript Fundamentals + Types

## Objetivo

Hoy empezarás TypeScript desde cero, pero aplicado directamente a
Git2Post.

Al terminar debes entender:

-   Qué es TypeScript y por qué se usa.
-   Type inference y static typing.
-   `string`, `number`, `boolean`, `null`, `undefined`.
-   Arrays y objetos.
-   `type`.
-   Propiedades opcionales.
-   `any` vs `unknown`.
-   Cómo comenzar la migración `.js/.jsx` → `.ts/.tsx`.

------------------------------------------------------------------------

## 1. ¿Qué es TypeScript?

TypeScript es un superset de JavaScript desarrollado por Microsoft.

Conceptualmente:

``` text
TypeScript
   ↓
JavaScript + sistema de tipos
   ↓
JavaScript ejecutable
```

El navegador termina ejecutando JavaScript. TypeScript nos ayuda durante
el desarrollo a detectar errores y describir la estructura esperada de
nuestros datos.

Ejemplo:

``` ts
const username: string = "Zenen";
const age: number = 25;
const isDeveloper: boolean = true;
```

Si intentas:

``` ts
age = "25";
```

TypeScript detectará el problema.

------------------------------------------------------------------------

## 2. ¿Por qué es importante para Git2Post?

Git2Post ya tiene varias partes que intercambian datos:

``` text
GitHub API
    ↓
Services
    ↓
Custom Hooks
    ↓
Components
    ↓
UI
```

Sin tipos, cada parte puede asumir una estructura diferente.

Con TypeScript podemos establecer contratos:

``` text
GitHub API
    ↓
Repository type
    ↓
Service
    ↓
Hook
    ↓
Component
```

Esto es especialmente útil cuando una aplicación crece.

------------------------------------------------------------------------

## 3. Static typing

JavaScript permite que una variable cambie de tipo:

``` js
let value = "hello";
value = 42;
```

TypeScript puede restringirla:

``` ts
let value: string = "hello";

value = 42; // error
```

La intención es detectar errores antes de ejecutar el programa.

------------------------------------------------------------------------

## 4. Type inference

No tienes que escribir todos los tipos manualmente.

``` ts
const username = "Zenen";
const age = 25;
const active = true;
```

TypeScript infiere:

``` text
username → string
age      → number
active   → boolean
```

Por eso normalmente NO necesitamos:

``` ts
const username: string = "Zenen";
```

si el tipo ya es obvio.

Regla práctica:

> Escribe tipos cuando aporten información o seguridad; no por
> obligación.

------------------------------------------------------------------------

## 5. Tipos primitivos

### string

``` ts
const username: string = "Zenen";
```

### number

``` ts
const age: number = 25;
const price: number = 19.99;
```

En TypeScript los enteros y decimales son `number`.

### boolean

``` ts
const isAuthenticated: boolean = true;
```

------------------------------------------------------------------------

## 6. null y undefined

No son exactamente lo mismo.

``` ts
let username: string | null = null;
```

Esto significa que `username` puede ser un string o `null`.

En datos externos esto es muy común.

Por ejemplo:

``` ts
type Repository = {
  name: string;
  description: string | null;
};
```

Una API puede devolver:

``` json
{
  "name": "git2post",
  "description": null
}
```

------------------------------------------------------------------------

## 7. Arrays

``` ts
const names: string[] = ["Zenen", "John"];
```

También:

``` ts
const names: Array<string> = ["Zenen", "John"];
```

Para objetos:

``` ts
type Repository = {
  id: number;
  name: string;
};

const repositories: Repository[] = [];
```

`Repository[]` significa:

> Un array donde cada elemento debe cumplir el tipo `Repository`.

------------------------------------------------------------------------

## 8. Objetos

Puedes escribir:

``` ts
const user: {
  id: number;
  name: string;
  email: string;
} = {
  id: 1,
  name: "Zenen",
  email: "zenen@example.com",
};
```

Pero si esa estructura se reutiliza, crearemos un tipo.

------------------------------------------------------------------------

## 9. type

``` ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

Después:

``` ts
const user: User = {
  id: 1,
  name: "Zenen",
  email: "zenen@example.com",
};
```

Piensa en `type` como un contrato reutilizable.

------------------------------------------------------------------------

## 10. Objetos anidados

``` ts
type User = {
  id: number;
  name: string;
  profile: {
    avatar: string;
    bio: string;
  };
};
```

Los tipos también describen estructuras complejas.

------------------------------------------------------------------------

## 11. Propiedades opcionales

``` ts
type User = {
  id: number;
  name: string;
  bio?: string;
};
```

`bio?` significa que la propiedad puede no existir.

No es exactamente lo mismo que:

``` ts
bio: string | null;
```

La diferencia:

``` text
bio?: string
→ la propiedad puede faltar

bio: string | null
→ la propiedad existe, pero su valor puede ser null
```

Esta diferencia será importante con APIs.

------------------------------------------------------------------------

## 12. any

`any` desactiva gran parte de la comprobación de TypeScript:

``` ts
let data: any = "hello";

data = 123;
data = true;
data = {};
```

Evita utilizar `any` como solución rápida.

Si llenamos Git2Post de `any`, perdemos buena parte del beneficio de
TypeScript.

------------------------------------------------------------------------

## 13. unknown

`unknown` también significa que todavía no conocemos el tipo, pero
obliga a comprobarlo antes de usarlo.

``` ts
let data: unknown = "hello";
```

Esto no es seguro:

``` ts
data.toUpperCase();
```

Pero esto sí:

``` ts
if (typeof data === "string") {
  data.toUpperCase();
}
```

Mentalidad:

``` text
any
→ "no revises esto"

unknown
→ "todavía no sé qué es; compruébalo"
```

En general, `unknown` es mucho más seguro cuando realmente desconocemos
el tipo.

------------------------------------------------------------------------

## 14. Primeros modelos de Git2Post

Crearemos:

``` text
src/
└── types/
    ├── user.ts
    ├── repository.ts
    └── post.ts
```

Ejemplo inicial:

``` ts
export type GitHubUser = {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
};
```

Repository:

``` ts
export type Repository = {
  id: number;
  name: string;
  description: string | null;
};
```

Post:

``` ts
export type Post = {
  id: string;
  content: string;
  createdAt: string;
};
```

No tienes que copiar exactamente estos modelos: revisa qué propiedades
utiliza realmente tu aplicación.

------------------------------------------------------------------------

## 15. Mental model

Hoy debes terminar entendiendo:

``` text
TypeScript
   ↓
Types
   ├── primitives
   ├── arrays
   └── objects
          ↓
         type
          ↓
   data contracts
          ↓
Git2Post
```

El objetivo no es escribir tipos por todas partes.

El objetivo es que los datos importantes tengan contratos claros.
