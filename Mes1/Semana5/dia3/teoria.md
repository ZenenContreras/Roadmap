# Semana 5 — Día 3
## TypeScript: Functions, Arrays, Objects & Generics

### Objetivo
Hoy pasarás de definir datos con TypeScript a **usar esos tipos dentro de funciones y estructuras reutilizables**.

Al terminar debes poder:
- tipar parámetros y retornos;
- tipar callbacks;
- trabajar con arrays y objetos;
- entender `map`, `filter` y `find`;
- entender `Promise<T>`;
- crear funciones genéricas con `<T>`;
- crear estructuras como `ApiResponse<T>`;
- aplicar todo directamente en Git2Post.

---

## 1. Parámetros tipados

```ts
function greet(name: string) {
  return `Hello ${name}`;
}
```

TypeScript sabe que `name` debe ser un `string`.

Con varios parámetros:

```ts
function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}
```

También puedes declarar el retorno:

```ts
function calculateTotal(
  price: number,
  quantity: number
): number {
  return price * quantity;
}
```

TypeScript normalmente puede inferir el retorno, así que no es obligatorio escribirlo siempre.

### Regla práctica

Usa anotaciones explícitas especialmente en:
- funciones importantes;
- services;
- funciones exportadas;
- APIs;
- utilidades reutilizables.

No necesitas llenar cada línea de anotaciones.

---

## 2. Parámetros opcionales

```ts
function greet(name?: string) {
  if (!name) {
    return "Hello";
  }

  return `Hello ${name}`;
}
```

`name` es realmente:

```ts
string | undefined
```

Por eso debemos hacer narrowing antes de asumir que existe.

---

## 3. `void` y `never`

`void`:

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

La función no devuelve un valor útil.

`never`:

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

La función nunca llega normalmente a devolver un valor.

---

## 4. Funciones como valores

```ts
const greet = (name: string): string => {
  return `Hello ${name}`;
};
```

También puedes crear un tipo para una función:

```ts
type Formatter = (value: string) => string;
```

Y usarlo:

```ts
const uppercase: Formatter = (value) => {
  return value.toUpperCase();
};
```

---

## 5. Callbacks

Una función puede recibir otra función:

```ts
function processName(
  name: string,
  formatter: (value: string) => string
) {
  return formatter(name);
}
```

Esto es fundamental para:

```text
map
filter
find
forEach
```

y posteriormente para React.

---

## 6. Arrays

```ts
const names: string[] = [
  "Zenen",
  "John",
  "Maria",
];

const ids: number[] = [1, 2, 3];
```

También existe:

```ts
Array<string>
```

pero normalmente:

```ts
string[]
```

es más sencillo de leer.

Con tus modelos:

```ts
const repositories: Repository[] = [];
```

significa:

> Un array cuyos elementos deben ser `Repository`.

---

## 7. `map`, `filter` y `find`

### map

```ts
const names = repositories.map(
  (repository) => repository.name
);
```

Si `repositories` es `Repository[]`, `names` será:

```ts
string[]
```

### filter

```ts
const withDescription = repositories.filter(
  (repository) => repository.description !== null
);
```

El resultado continúa siendo:

```ts
Repository[]
```

### find

```ts
const repository = repositories.find(
  (repository) => repository.name === "git2post"
);
```

El tipo es:

```ts
Repository | undefined
```

porque puede no encontrar nada.

Por eso:

```ts
if (!repository) {
  return;
}

console.log(repository.name);
```

Después del `if`, TypeScript sabe que existe.

---

## 8. Objetos tipados

```ts
type GitHubStats = {
  repositories: number;
  followers: number;
};

const stats: GitHubStats = {
  repositories: 20,
  followers: 150,
};
```

Si una estructura se reutiliza, es preferible crear un `type` o `interface`.

---

## 9. Type inference

No necesitas escribir tipos que TypeScript ya puede inferir:

```ts
const name = "Zenen";
```

ya es `string`.

No hace falta:

```ts
const name: string = "Zenen";
```

La idea es:

> Si TypeScript puede inferir correctamente el tipo, deja que lo haga.

---

## 10. Generics

Un generic permite crear código que funciona con distintos tipos.

```ts
function identity<T>(value: T): T {
  return value;
}
```

Uso:

```ts
const text = identity<string>("hello");
const number = identity<number>(123);
```

También puede inferirse:

```ts
const text = identity("hello");
const number = identity(123);
```

Aquí `T` representa el tipo que se determinará posteriormente.

---

## 11. ¿Por qué no usar `any`?

Esto:

```ts
function identity(value: any): any {
  return value;
}
```

elimina mucha seguridad.

Con:

```ts
function identity<T>(value: T): T {
  return value;
}
```

TypeScript conserva la información del tipo.

`T` no significa un tipo concreto. Significa:

> Mantén el tipo que recibiste y úsalo de forma consistente.

---

## 12. `ApiResponse<T>`

Este patrón será útil en Git2Post:

```ts
type ApiResponse<T> = {
  data: T;
  error: string | null;
};
```

Ahora podemos representar:

```ts
type RepositoryResponse =
  ApiResponse<Repository[]>;
```

y:

```ts
type UserResponse =
  ApiResponse<GitHubUser>;
```

La estructura es la misma; cambia el tipo de `data`.

---

## 13. Generic functions

```ts
function wrapResponse<T>(
  data: T
): ApiResponse<T> {
  return {
    data,
    error: null,
  };
}
```

Si pasas:

```ts
wrapResponse(repositories);
```

TypeScript puede inferir:

```ts
ApiResponse<Repository[]>
```

Si pasas un usuario:

```ts
wrapResponse(user);
```

obtendrás:

```ts
ApiResponse<GitHubUser>
```

---

## 14. Promise + TypeScript

Esto conecta directamente con lo aprendido en Semana 2:

```ts
async function getRepositories(
  username: string
): Promise<Repository[]> {
  // fetch...
}
```

`Promise<Repository[]>` significa:

> La función es asíncrona y cuando termine producirá un `Repository[]`.

Otros ejemplos:

```ts
Promise<string>
Promise<number>
Promise<GitHubUser>
Promise<Repository[]>
```

---

## 15. Git2Post: flujo tipado

Piensa en la arquitectura:

```text
GitHub API
    ↓
TypeScript types
    ↓
Service
    ↓
Promise<T>
    ↓
Hook
    ↓
Component
```

Por ejemplo:

```ts
async function getRepositories(
  username: string
): Promise<Repository[]> {
  // implementación real
}
```

Esto expresa claramente la entrada y salida del service.

---

## 16. Transformaciones

```ts
function getRepositoryNames(
  repositories: Repository[]
): string[] {
  return repositories.map(
    (repository) => repository.name
  );
}
```

Mentalmente:

```text
Repository[]
      ↓
    map()
      ↓
string[]
```

Este patrón aparecerá constantemente en aplicaciones reales.

---

## 17. Errores comunes

### `any` como solución rápida

Evita:

```ts
function processData(data: any) {}
```

### Confundir objeto con array

```ts
Repository
```

es un repository.

```ts
Repository[]
```

es una colección.

### Ignorar `undefined`

`find()` puede devolver:

```ts
Repository | undefined
```

### Usar generics sin entenderlos

No agregues `<T>` por obligación. Pregunta:

> ¿Qué tipo quiero mantener reutilizable?

---

## Checklist

- [ ] Parámetros tipados
- [ ] Retornos
- [ ] Parámetros opcionales
- [ ] `void`
- [ ] `never`
- [ ] Callbacks
- [ ] Arrays
- [ ] Objects
- [ ] `map`
- [ ] `filter`
- [ ] `find`
- [ ] `Promise<T>`
- [ ] Generics
- [ ] `ApiResponse<T>`
- [ ] Aplicación en Git2Post

---

## Qué aprendiste hoy

Pasaste de describir solamente **qué datos existen** a describir también **cómo fluyen esos datos por las funciones de tu aplicación**.

Ahora puedes expresar:

```text
entrada → función → salida
```

y crear estructuras reutilizables con generics.

## Próximo día

### Día 4 — TypeScript + React

- Props tipadas
- `.tsx`
- `children`
- props opcionales
- `useState<T>()`
- `useEffect`
- `useContext`
- Context tipado
- eventos
- formularios
- estados de Git2Post
