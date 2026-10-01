# Semana 5 — Día 4
## Práctica — TypeScript + React en Git2Post

**Toda la práctica se realiza dentro de Git2Post.**

---

## Parte 0 — Preparación

1. Ejecuta Git2Post.
2. Confirma que funciona.
3. Haz un commit si tienes cambios importantes.
4. Revisa `src/types/`.
5. Revisa `src/components/`.
6. Revisa `src/context/`.
7. Revisa `src/hooks/`.

Hoy no vamos a rediseñar la aplicación. El objetivo es tipar React.

---

## Parte 1 — Migrar un componente a `.tsx`

Busca un componente `.jsx` sencillo y conviértelo a `.tsx`.

No cambies su comportamiento.

Primero consigue que compile exactamente igual.

---

## Parte 2 — Props tipadas

Identifica qué recibe el componente.

Ejemplo:

```ts
type RepositoryCardProps = {
  repository: Repository;
};
```

```tsx
function RepositoryCard({
  repository,
}: RepositoryCardProps) {
  return <h2>{repository.name}</h2>;
}
```

Adapta los campos a tu `Repository` real.

---

## Parte 3 — Props múltiples

Si el componente necesita más información:

```ts
type RepositoryCardProps = {
  repository: Repository;
  selected: boolean;
  onSelect: (id: number) => void;
};
```

Conecta el callback y comprueba que TypeScript conozca cada tipo.

---

## Parte 4 — Props opcionales

Añade una prop opcional solamente si tiene sentido:

```ts
type RepositoryCardProps = {
  repository: Repository;
  featured?: boolean;
};
```

Prueba:

```tsx
<RepositoryCard repository={repository} />
```

y:

```tsx
<RepositoryCard
  repository={repository}
  featured
/>
```

---

## Parte 5 — `children`

Busca un componente wrapper.

```tsx
<Card>
  <RepositoryList />
</Card>
```

Tipa:

```ts
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};
```

No uses `any`.

---

## Parte 6 — Tipar `useState`

Busca:

```tsx
useState(null)
```

Pregunta qué tipo tendrá posteriormente.

Si es un usuario:

```tsx
const [user, setUser] =
  useState<GitHubUser | null>(null);
```

Si es un repository:

```tsx
const [repository, setRepository] =
  useState<Repository | null>(null);
```

Si es un array:

```tsx
const [repositories, setRepositories] =
  useState<Repository[]>([]);
```

---

## Parte 7 — Estado discriminado

Si tu búsqueda puede representarse con estados:

```ts
type SearchStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

utiliza:

```tsx
const [status, setStatus] =
  useState<SearchStatus>("idle");
```

Prueba temporalmente:

```ts
setStatus("finished");
```

Observa el error y explica por qué ocurre.

---

## Parte 8 — Narrowing en React

Si utilizas:

```ts
type RepositoryState =
  | { status: "idle" }
  | { status: "loading" }
  | {
      status: "success";
      data: Repository[];
    }
  | {
      status: "error";
      message: string;
    };
```

haz:

```tsx
if (state.status === "success") {
  return (
    <RepositoryList
      repositories={state.data}
    />
  );
}
```

Comprueba que TypeScript permite `state.data` solamente después del narrowing.

---

## Parte 9 — Input tipado

Busca el input de búsqueda.

Puedes utilizar:

```tsx
function handleChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  setUsername(event.target.value);
}
```

Conecta:

```tsx
<input onChange={handleChange} />
```

También observa qué tipo infiere VS Code si escribes el callback directamente.

---

## Parte 10 — Formulario

Busca el formulario de búsqueda:

```tsx
function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  // lógica real
}
```

Conecta:

```tsx
<form onSubmit={handleSubmit}>
```

No uses `event: any`.

---

## Parte 11 — Callback como Prop

Crea o adapta:

```ts
type SearchFormProps = {
  onSearch: (username: string) => void;
};
```

El hijo debe llamar:

```ts
onSearch(username);
```

El componente no necesita saber cómo se ejecuta la búsqueda.

---

## Parte 12 — `useEffect`

Encuentra el efecto que obtiene datos.

Busca un flujo parecido a:

```tsx
useEffect(() => {
  async function loadRepositories() {
    const data =
      await getRepositories(username);

    setRepositories(data);
  }

  loadRepositories();
}, [username]);
```

Si el service devuelve:

```ts
Promise<Repository[]>
```

comprueba que `data` sea inferido como:

```ts
Repository[]
```

---

## Parte 13 — Context

Si Git2Post utiliza Context, identifica uno real.

Crea un contrato similar a:

```ts
type AuthContextValue = {
  user: GitHubUser | null;
  isAuthenticated: boolean;
  logout: () => void;
};
```

Después:

```tsx
const AuthContext =
  createContext<AuthContextValue | undefined>(
    undefined
  );
```

Adapta esto al Context real de tu aplicación.

---

## Parte 14 — Provider

Tipa las Props:

```ts
type AuthProviderProps = {
  children: ReactNode;
};
```

Y:

```tsx
function AuthProvider({
  children,
}: AuthProviderProps) {
  // ...
}
```

---

## Parte 15 — Custom hook

Si tienes Context, crea o revisa:

```tsx
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}
```

Comprueba que:

```tsx
const { user, logout } = useAuth();
```

tenga tipos correctos.

---

## Parte 16 — Eliminar `any` de Props

Haz una búsqueda global de:

```text
any
```

Prioriza Props.

Por ejemplo:

```ts
type Props = {
  repository: any;
};
```

cámbialo por:

```ts
repository: Repository;
```

cuando realmente corresponda.

No inventes tipos solamente para eliminar la palabra `any`.

---

## Parte 17 — Challenge: RepositoryList

Crea o adapta:

```ts
type RepositoryListProps = {
  repositories: Repository[];
  onSelect: (repository: Repository) => void;
};
```

El componente debe:
1. recibir repositories;
2. renderizarlos;
3. permitir seleccionar uno;
4. enviar el repository al padre.

---

## Parte 18 — Challenge: SearchForm

Crea:

```ts
type SearchFormProps = {
  initialValue?: string;
  onSearch: (username: string) => void;
};
```

Debe:
- mantener el input;
- manejar `onChange`;
- manejar `onSubmit`;
- ejecutar `onSearch`.

Todo debe estar tipado.

---

## Parte 19 — Debugging

Con:

```tsx
const [user, setUser] =
  useState<GitHubUser | null>(null);
```

prueba temporalmente:

```ts
console.log(user.login);
```

Explica el error.

Después corrige:

```ts
if (user) {
  console.log(user.login);
}
```

---

## Parte 20 — Revisión de arquitectura

Revisa el flujo:

```text
GitHub API
   ↓
Repository
   ↓
getRepositories()
   ↓
hook/context
   ↓
RepositoryList
   ↓
RepositoryCard
```

Pregunta:

> ¿El tipo `Repository` puede recorrer todo este flujo sin convertirse en `any`?

Haz las correcciones necesarias.

---

# Definition of Done

- [ ] Al menos un componente migrado a `.tsx`
- [ ] Props tipadas
- [ ] Props opcionales
- [ ] `children: ReactNode`
- [ ] `useState` correctamente tipado
- [ ] `GitHubUser | null`
- [ ] `Repository[]`
- [ ] estado con union
- [ ] input tipado
- [ ] submit tipado
- [ ] callbacks como Props
- [ ] `useEffect` conectado a services tipados
- [ ] Context tipado si existe
- [ ] Provider tipado
- [ ] custom hook tipado
- [ ] reducción de `any`

---

## Qué aprendiste hoy

Conectaste:

```text
Types
 ↓
Functions
 ↓
API
 ↓
Props
 ↓
State
 ↓
Events
 ↓
Context
 ↓
Components
```

Git2Post ahora debería sentirse mucho más como una aplicación real de React + TypeScript.

## Próximo día

### Día 5 — API Types + Consolidación

Cerraremos Semana 5 con:
- API responses reales;
- `fetch` tipado;
- generics en services;
- type guards;
- manejo de errores;
- limpieza de `any`;
- revisión `.ts/.tsx`;
- refactor final de Git2Post.

Después: **Semana 6 — Go Fundamentals + Backend**.
