# Semana 5 --- Día 1: Práctica en Git2Post

## Objetivo

Hoy NO crearás otro proyecto.

Vas a comenzar la migración de Git2Post:

``` text
JavaScript / JSX
       ↓
TypeScript / TSX
```

Y vas a crear los primeros modelos de datos.

------------------------------------------------------------------------

## 1. Audita Git2Post antes de modificarlo

Revisa:

``` text
src/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── router/
├── services/
└── ...
```

Identifica:

1.  Dónde se utilizan repositories.
2.  Dónde se utilizan users.
3.  Dónde se crean/guardan posts.
4.  Dónde se consume GitHub.
5.  Qué hook recibe repositories.
6.  Qué componentes reciben repositories.

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

No continúes hasta entender ese flujo.

------------------------------------------------------------------------

## 2. Verifica TypeScript

Si Git2Post todavía no tiene soporte para TypeScript, configura
TypeScript siguiendo la configuración de tu versión actual de Vite.

Debes terminar con soporte para:

``` text
.ts
.tsx
```

y un `tsconfig.json`.

Después:

``` bash
npm run dev
```

Comprueba que la aplicación continúa funcionando.

------------------------------------------------------------------------

## 3. Crea src/types

Crea:

``` text
src/types/
├── user.ts
├── repository.ts
└── post.ts
```

------------------------------------------------------------------------

## 4. Crea GitHubUser

En `src/types/user.ts`, crea un tipo que represente los datos de usuario
que realmente utiliza Git2Post.

Ejemplo:

``` ts
export type GitHubUser = {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
};
```

Pero revisa tu API actual y ajusta el modelo a tus datos reales.

------------------------------------------------------------------------

## 5. Crea Repository

En `src/types/repository.ts`:

``` ts
export type Repository = {
  id: number;
  name: string;
  description: string | null;
};
```

Después revisa qué propiedades muestra realmente Git2Post.

Si utilizas:

``` text
language
stars
forks
url
owner
updated_at
```

incorpóralas al modelo con sus tipos correctos.

No agregues propiedades simplemente porque existen en GitHub. Modela
primero lo que tu aplicación necesita.

------------------------------------------------------------------------

## 6. Crea Post

En `src/types/post.ts`:

``` ts
export type Post = {
  id: string;
  content: string;
  createdAt: string;
};
```

Más adelante agregaremos más propiedades si el proyecto las necesita.

------------------------------------------------------------------------

## 7. Usa Repository en datos reales

Busca algún lugar de Git2Post donde tengas repositories hardcodeados o
mocks.

Importa:

``` ts
import type { Repository } from "../types/repository";
```

y tipa el array:

``` ts
const repositories: Repository[] = [
  {
    id: 1,
    name: "git2post",
    description: "Turn GitHub activity into professional content.",
  },
];
```

La ruta del import dependerá de tu estructura.

------------------------------------------------------------------------

## 8. Provoca errores intencionalmente

Haz temporalmente:

``` ts
const repository: Repository = {
  id: "1",
  name: "git2post",
  description: null,
};
```

Observa el error.

¿Por qué ocurre?

Porque:

``` ts
id: number
```

pero proporcionaste:

``` ts
id: string
```

Corrígelo:

``` ts
id: 1
```

------------------------------------------------------------------------

### Segundo error

Prueba:

``` ts
const repository: Repository = {
  id: 1,
  name: "git2post",
};
```

Si `description` es obligatoria, TypeScript debe indicar que falta.

Ahora prueba:

``` ts
type Repository = {
  id: number;
  name: string;
  description?: string;
};
```

Observa cómo cambia.

Después vuelve a decidir qué representa mejor los datos reales:

``` ts
description?: string
```

o:

``` ts
description: string | null
```

------------------------------------------------------------------------

## 9. Experimenta con any

Crea temporalmente:

``` ts
let data: any = "Git2Post";

data = 123;
data = true;
data = {};
```

Observa que TypeScript deja de protegerte.

Después cambia a:

``` ts
let data: unknown = "Git2Post";
```

Prueba:

``` ts
data.toUpperCase();
```

Debe aparecer un error.

Ahora:

``` ts
if (typeof data === "string") {
  data.toUpperCase();
}
```

Este concepto será profundizado mañana con type narrowing.

------------------------------------------------------------------------

## 10. Experimenta con inference

Escribe:

``` ts
const username = "Zenen";
const age = 25;
const active = true;
```

Pasa el mouse sobre cada variable en VS Code.

Observa qué tipo infiere TypeScript.

Después:

``` ts
let username = "Zenen";

username = 123;
```

¿Qué ocurre?

La idea es aprender a leer los tipos que TypeScript ya puede inferir.

------------------------------------------------------------------------

## 11. Migra una utilidad real

Busca una utilidad sencilla de Git2Post.

Por ejemplo:

``` text
formatDate.js
```

Cámbiala a:

``` text
formatDate.ts
```

Ejemplo:

``` ts
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString();
}
```

Comprueba que Git2Post continúa funcionando.

Después prueba:

``` ts
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}
```

Observa que ambas versiones funcionan.

Esto demuestra que TypeScript puede inferir algunos return types.

------------------------------------------------------------------------

## 12. Migra un componente pequeño

Escoge un componente pequeño de Git2Post.

Preferiblemente uno que no tenga demasiadas dependencias.

Por ejemplo:

``` text
RepositoryCard.jsx
```

Cámbialo:

``` text
RepositoryCard.tsx
```

Haz que compile.

Después identifica qué props recibe.

Si recibe un repository, empieza a utilizar:

``` ts
import type { Repository } from "../types/repository";
```

No intentes resolver todas las props todavía.

El objetivo de hoy es comenzar la migración.

------------------------------------------------------------------------

# Debugging Challenges

## Challenge 1

¿Qué errores debe detectar TypeScript aquí?

``` ts
const repository: Repository = {
  id: "123",
  name: 123,
  description: false,
};
```

No ejecutes primero. Razónalo.

------------------------------------------------------------------------

## Challenge 2

``` ts
const users: GitHubUser[] = [
  {
    id: 1,
    login: "zenen",
    name: null,
    avatar_url: "avatar.png",
    bio: null,
  },
];
```

Elimina `avatar_url`.

¿Por qué TypeScript protesta?

------------------------------------------------------------------------

## Challenge 3

``` ts
const description: string | null = null;

description.toUpperCase();
```

¿Por qué no puedes llamar directamente `toUpperCase()`?

Intenta resolverlo sin buscar la respuesta.

Pista:

``` ts
if (description !== null) {
  // ...
}
```

Esto prepara el terreno para el Día 2.

------------------------------------------------------------------------

# Checkpoint conceptual

Responde sin copiar:

1.  ¿Qué es TypeScript?
2.  ¿Qué diferencia hay entre JavaScript y TypeScript?
3.  ¿Qué es static typing?
4.  ¿Qué es type inference?
5.  ¿Cuándo escribirías un tipo explícitamente?
6.  ¿Qué diferencia hay entre `null` y `undefined`?
7.  ¿Cómo se tipa un array?
8.  ¿Qué hace `type`?
9.  ¿Qué significa `?` en una propiedad?
10. ¿Por qué `unknown` es más seguro que `any`?
11. ¿Qué representa `Repository` en Git2Post?
12. ¿Por qué `description` podría ser `string | null`?

------------------------------------------------------------------------

# Definition of Done

Marca cada punto cuando realmente puedas hacerlo:

-   [ ] TypeScript funciona en Git2Post.
-   [ ] Entiendo type inference.
-   [ ] Entiendo `string`, `number` y `boolean`.
-   [ ] Entiendo `null` y `undefined`.
-   [ ] Sé tipar arrays.
-   [ ] Sé tipar objetos.
-   [ ] Entiendo `type`.
-   [ ] Entiendo propiedades opcionales.
-   [ ] Entiendo `any` vs `unknown`.
-   [ ] Creé `src/types/`.
-   [ ] Creé `GitHubUser`.
-   [ ] Creé `Repository`.
-   [ ] Creé `Post`.
-   [ ] Migré al menos una utilidad a `.ts`.
-   [ ] Empecé a migrar un componente a `.tsx`.
-   [ ] Git2Post sigue funcionando.
-   [ ] Puedo explicar por qué cada tipo existe.

------------------------------------------------------------------------

# Lo que debes haber aprendido hoy

Tu mentalidad al final del día debería ser:

``` text
GitHub API
     ↓
TypeScript type
     ↓
Service
     ↓
Hook
     ↓
Component
```

Ya no estás diciendo solamente:

> "Espero que el repository tenga estas propiedades."

Ahora estás empezando a decir:

> "Este es el contrato que mi aplicación espera para un Repository."

------------------------------------------------------------------------

# Mañana --- Día 2

Continuaremos con:

``` text
Interfaces
Unions
Literal types
Type narrowing
Type guards
null / undefined
```

Y lo aplicaremos directamente a los estados de Git2Post:

``` text
idle
loading
success
error
```

para que TypeScript no solo conozca tus datos, sino también **los
diferentes estados en los que puede encontrarse tu aplicación**.
