# Semana 5 — Día 4
## TypeScript + React: Props, Hooks, Events & Context

## Objetivo

Hoy conectamos TypeScript directamente con React y Git2Post.

Al terminar debes poder:
- trabajar con `.tsx`;
- tipar Props y Props opcionales;
- tipar `children`;
- usar `useState<T>`;
- tipar estados con unions;
- tipar eventos y formularios;
- trabajar correctamente con `useEffect`;
- tipar `useContext` y Providers;
- mantener los tipos de Git2Post a través del flujo:
  `API → service → hook/context → component`.

---

## 1. `.ts` vs `.tsx`

Usa `.ts` para TypeScript sin JSX:

```ts
export function formatName(name: string) {
  return name.toUpperCase();
}
```

Usa `.tsx` cuando el archivo contiene JSX:

```tsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

Por eso normalmente:
- services/utilidades → `.ts`
- componentes → `.tsx`

---

## 2. Props tipadas

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

Esto crea un contrato:

> El componente necesita un `Repository`.

---

## 3. Props múltiples y callbacks

```ts
type RepositoryCardProps = {
  repository: Repository;
  selected: boolean;
  onSelect: (id: number) => void;
};
```

```tsx
function RepositoryCard({
  repository,
  selected,
  onSelect,
}: RepositoryCardProps) {
  return (
    <button onClick={() => onSelect(repository.id)}>
      {repository.name}
    </button>
  );
}
```

Observa que un callback también tiene tipo.

---

## 4. Props opcionales

```ts
type RepositoryCardProps = {
  repository: Repository;
  featured?: boolean;
};
```

`featured` es:

```ts
boolean | undefined
```

por lo que hay que considerar ambos casos.

---

## 5. Literal unions en Props

```ts
type BadgeProps = {
  status: "active" | "inactive" | "pending";
};
```

Esto permite:

```tsx
<Badge status="active" />
```

pero no:

```tsx
<Badge status="finished" />
```

Los literal unions son muy útiles para estados de UI.

---

## 6. `children`

```tsx
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return <div>{children}</div>;
}
```

Evita:

```ts
children: any;
```

---

## 7. `useState`

TypeScript puede inferir:

```tsx
const [count, setCount] = useState(0);
```

El tipo es `number`.

Pero cuando el valor inicial no representa todos los estados posibles:

```tsx
const [user, setUser] =
  useState<GitHubUser | null>(null);
```

Aquí el estado puede ser:
- `null` inicialmente;
- `GitHubUser` después.

Para arrays:

```tsx
const [repositories, setRepositories] =
  useState<Repository[]>([]);
```

---

## 8. Estados con unions

Puedes reutilizar:

```ts
type SearchStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

```tsx
const [status, setStatus] =
  useState<SearchStatus>("idle");
```

Ahora TypeScript impide valores inválidos:

```ts
setStatus("loading");
setStatus("success");
setStatus("error");
```

pero no:

```ts
setStatus("finished");
```

---

## 9. `useEffect`

Normalmente no necesitas poner tipos manuales en `useEffect`.

Lo importante es que las funciones utilizadas estén tipadas:

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

entonces `data` será automáticamente:

```ts
Repository[]
```

No uses `any` para solucionar un error de inferencia.

---

## 10. Eventos

Input:

```tsx
function handleChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  console.log(event.target.value);
}
```

Botón:

```tsx
function handleClick(
  event: React.MouseEvent<HTMLButtonElement>
) {
  console.log(event.currentTarget);
}
```

Formulario:

```tsx
function handleSubmit(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault();
}
```

Los tipos más comunes al principio son:

```text
ChangeEvent<HTMLInputElement>
MouseEvent<HTMLButtonElement>
FormEvent<HTMLFormElement>
KeyboardEvent<HTMLInputElement>
```

No necesitas memorizarlos todos; VS Code puede ayudarte con autocompletado.

---

## 11. Eventos como Props

```ts
type SearchFormProps = {
  onSearch: (username: string) => void;
};
```

El componente hijo solamente necesita saber que recibe una función que acepta un `string`.

Esto mantiene la separación entre UI y lógica.

---

## 12. `useContext` con TypeScript

Supongamos:

```ts
type AuthContextValue = {
  user: GitHubUser | null;
  isAuthenticated: boolean;
  logout: () => void;
};
```

Creamos:

```tsx
const AuthContext =
  createContext<AuthContextValue | undefined>(
    undefined
  );
```

El `undefined` representa que el contexto todavía no está disponible fuera del Provider.

---

## 13. Custom hook para Context

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

Después:

```tsx
const { user, logout } = useAuth();
```

TypeScript sabe que después del guard `context` ya no es `undefined`.

---

## 14. Provider tipado

```ts
import type { ReactNode } from "react";

type AuthProviderProps = {
  children: ReactNode;
};
```

```tsx
function AuthProvider({
  children,
}: AuthProviderProps) {
  // ...
}
```

---

## 15. Git2Post y discriminated unions

Puedes representar el estado de repositories:

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

Y:

```tsx
const [state, setState] =
  useState<RepositoryState>({
    status: "idle",
  });
```

Luego:

```tsx
if (state.status === "success") {
  return <RepositoryList repositories={state.data} />;
}
```

TypeScript sabe que `data` existe solamente en el estado `success`.

Esto evita combinaciones inconsistentes como:

```text
loading = true
error = "failed"
repositories = []
```

sin saber qué estado representa realmente la aplicación.

---

## 16. Tipar componentes de Git2Post

Busca componentes reales como:
- RepositoryCard
- RepositoryList
- SearchForm
- GitHubProfile
- PostCard
- PostGenerator

No tienen que llamarse exactamente así.

Para cada uno identifica:
1. Props;
2. estado;
3. eventos;
4. callbacks;
5. datos externos.

Ejemplo:

```ts
type RepositoryListProps = {
  repositories: Repository[];
  onSelect: (repository: Repository) => void;
};
```

---

## 17. Inferencia vs anotación

No necesitas:

```tsx
const [count, setCount] =
  useState<number>(0);
```

porque:

```tsx
useState(0)
```

ya es suficientemente claro.

Sí necesitas:

```tsx
const [user, setUser] =
  useState<GitHubUser | null>(null);
```

porque `null` no describe el estado futuro.

Regla:

> Si el valor inicial no representa todo el rango posible del estado, utiliza `useState<T>()`.

---

## 18. Errores comunes

Evita:

```ts
repository: any;
```

si ya conoces `Repository`.

Evita:

```tsx
useState(null)
```

cuando después guardarás un `GitHubUser`.

Evita:

```tsx
createContext(null)
```

para contextos complejos.

Evita:

```ts
event: any
```

para eventos de React.

---

## Checklist

- [ ] `.ts` vs `.tsx`
- [ ] Props
- [ ] Props opcionales
- [ ] Literal unions
- [ ] `ReactNode`
- [ ] `useState`
- [ ] `useState<T>`
- [ ] `GitHubUser | null`
- [ ] `Repository[]`
- [ ] `useEffect`
- [ ] eventos
- [ ] formularios
- [ ] Context
- [ ] Provider
- [ ] custom hook
- [ ] discriminated unions
- [ ] tipos conectados a Git2Post

---

## Qué aprendiste hoy

Hoy conectaste:

```text
Types
 ↓
Props
 ↓
Components
 ↓
State
 ↓
Effects
 ↓
Events
 ↓
Context
```

TypeScript ahora puede seguir tus datos dentro de los componentes, no solamente describir los objetos.

## Próximo día

### Día 5 — API Types + Consolidación TypeScript

Cerraremos la semana con:
- respuestas reales de APIs;
- `fetch` tipado;
- generics en services;
- type guards;
- manejo de errores;
- limpieza de `any`;
- revisión `.ts/.tsx`;
- refactor final de Git2Post.

Después pasaremos a **Semana 6 — Go Fundamentals + Backend**.
