# Semana 6 — Día 2 — Teoría
# Go Core: Arrays, Slices, Maps, Structs, Pointers, Methods e Interfaces

## Objetivo del día

Hoy pasamos de los fundamentos básicos de Go a las estructuras que necesitaremos para construir nuestro backend.

Al terminar deberías poder:

- diferenciar arrays y slices;
- utilizar `append`, `len`, `cap` y `range`;
- trabajar con maps y comprobar si una key existe;
- crear y modificar structs;
- entender struct tags;
- entender pointers y los operadores `&` y `*`;
- crear métodos y receivers;
- diferenciar value receivers y pointer receivers;
- entender interfaces básicas e implementación implícita;
- modelar entidades de Git2Post.

---

# 1. ¿Por qué necesitamos estas estructuras?

Ayer trabajamos con valores individuales:

```go
name := "Zenen"
age := 24
active := true
```

Pero un backend necesita trabajar con colecciones y entidades:

```text
Post 1
Post 2
Post 3
...
```

Por eso hoy aprenderemos:

```text
Array
   ↓
Slice
   ↓
Map
   ↓
Struct
   ↓
Pointer
   ↓
Method
   ↓
Interface
```

---

# 2. Arrays

Un array tiene tamaño fijo:

```go
var numbers [5]int
```

Tiene exactamente cinco posiciones:

```text
[0] [1] [2] [3] [4]
```

También:

```go
numbers := [5]int{1, 2, 3, 4, 5}
```

Puedes acceder:

```go
fmt.Println(numbers[0])
```

y modificar:

```go
numbers[0] = 100
```

Pero el tamaño sigue siendo cinco.

---

# 3. Arrays vs JavaScript

En JavaScript:

```js
const numbers = [1, 2, 3];
```

puede crecer.

En Go:

```go
numbers := [3]int{1, 2, 3}
```

tiene tamaño fijo.

Para colecciones flexibles utilizaremos principalmente **slices**.

---

# 4. Slices

Un slice representa una secuencia flexible:

```go
numbers := []int{1, 2, 3}
```

Observa:

```go
[]int
```

No tiene un tamaño declarado.

Puedes crear uno vacío:

```go
numbers := []int{}
```

o:

```go
var numbers []int
```

---

# 5. `append`

Una operación fundamental:

```go
numbers := []int{}

numbers = append(numbers, 10)
numbers = append(numbers, 20)
numbers = append(numbers, 30)
```

Resultado:

```text
[10 20 30]
```

Normalmente debes guardar el resultado:

```go
numbers = append(numbers, 10)
```

---

# 6. `len`

Cantidad actual de elementos:

```go
len(numbers)
```

Si:

```go
numbers := []int{10, 20, 30}
```

entonces:

```text
len(numbers) = 3
```

---

# 7. `cap`

Un slice también tiene capacidad:

```go
cap(numbers)
```

Piensa:

```text
len → cantidad actual
cap → capacidad del almacenamiento
```

No necesitas estudiar todavía cómo funciona internamente la memoria.

---

# 8. Slicing

Puedes obtener una parte:

```go
numbers := []int{10, 20, 30, 40, 50}

part := numbers[1:4]
```

Resultado:

```text
[20 30 40]
```

La regla:

```text
[start:end]
```

incluye `start` y excluye `end`.

---

# 9. `range`

Puedes recorrer un slice con:

```go
for index, value := range numbers {
    fmt.Println(index, value)
}
```

Si no necesitas el índice:

```go
for _, value := range numbers {
    fmt.Println(value)
}
```

El `_` significa que no necesitamos ese valor.

---

# 10. Slices de structs

Más adelante tendremos:

```go
type Post struct {
    ID      int
    Content string
}
```

Y:

```go
posts := []Post{}
```

Esto representa una colección de posts.

Durante Day 4 será nuestro almacenamiento temporal en memoria.

---

# 11. Maps

Un map almacena:

```text
key → value
```

Ejemplo:

```go
ages := map[string]int{
    "Zenen": 24,
    "Ana":   22,
}
```

Aquí:

```text
string → key
int    → value
```

También puedes crear:

```go
ages := make(map[string]int)
```

y agregar:

```go
ages["Zenen"] = 24
```

---

# 12. Leer un map

```go
age := ages["Zenen"]
```

Si existe:

```text
24
```

Si no existe, el resultado será el zero value del tipo del valor.

Por ejemplo, para `int`:

```text
0
```

Por eso necesitamos una forma de saber si realmente existe.

---

# 13. `value, ok`

Utilizamos:

```go
age, ok := ages["Zenen"]
```

Si existe:

```text
age = 24
ok = true
```

Si no existe:

```text
age = 0
ok = false
```

Este patrón es extremadamente importante en Go:

```go
value, ok := map[key]
```

---

# 14. Eliminar elementos

Utilizamos:

```go
delete(ages, "Zenen")
```

Después esa key ya no estará en el map.

---

# 15. Recorrer maps

```go
for name, age := range ages {
    fmt.Println(name, age)
}
```

Importante:

> No debes asumir que un map se recorre en un orden determinado.

Si necesitas orden, normalmente utilizarás otra estructura, como un slice.

---

# 16. Slice vs Map

Una forma sencilla de pensarlo:

### Slice

Colección/secuencia:

```text
posts
users
repositories
```

### Map

Acceso por clave:

```text
userID → User
repositoryID → Repository
```

---

# 17. Structs

Un `struct` permite crear un tipo compuesto:

```go
type Post struct {
    ID      int
    Content string
}
```

Ahora `Post` es un tipo.

Podemos crear:

```go
post := Post{
    ID:      1,
    Content: "My first post",
}
```

---

# 18. ¿Por qué necesitamos structs?

Sin un struct:

```go
id := 1
content := "Hello"
createdAt := "2026-10-08"
```

Los valores están separados.

Con:

```go
type Post struct {
    ID        int
    Content   string
    CreatedAt string
}
```

tenemos una entidad:

```text
Post
├── ID
├── Content
└── CreatedAt
```

Esto es ideal para representar datos de backend.

---

# 19. Acceder y modificar campos

```go
post := Post{
    ID:      1,
    Content: "Hello",
}
```

Acceder:

```go
fmt.Println(post.ID)
```

Modificar:

```go
post.Content = "Updated content"
```

---

# 20. Struct tags

Cuando trabajemos con JSON tendremos nombres como:

```go
ID
Content
CreatedAt
```

pero una API puede necesitar:

```json
{
  "id": 1,
  "content": "Hello",
  "createdAt": "..."
}
```

Podemos utilizar tags:

```go
type Post struct {
    ID        int    `json:"id"`
    Content   string `json:"content"`
    CreatedAt string `json:"createdAt"`
}
```

Esto será fundamental cuando estudiemos JSON mañana.

---

# 21. Structs y TypeScript

Puede recordarte a:

```ts
type Post = {
    id: number;
    content: string;
};
```

En Go:

```go
type Post struct {
    ID      int
    Content string
}
```

Pero no son equivalentes.

Un struct de Go representa una estructura de datos concreta en el programa.

---

# 22. Pointers

Un pointer permite trabajar con una referencia a un valor.

Tenemos:

```go
age := 24
```

Podemos obtener un pointer:

```go
ptr := &age
```

`&age` significa conceptualmente:

> Obtén la dirección donde está almacenado `age`.

Para obtener el valor apuntado:

```go
*ptr
```

Ejemplo:

```go
age := 24
ptr := &age

fmt.Println(*ptr)
```

produce:

```text
24
```

---

# 23. Modificar mediante un pointer

```go
age := 24
ptr := &age

*ptr = 30
```

Ahora:

```go
fmt.Println(age)
```

produce:

```text
30
```

Conceptualmente:

```text
age
 ↓
24

ptr
 ↓
dirección de age
```

y:

```go
*ptr = 30
```

modifica el valor original.

---

# 24. ¿Por qué existen pointers?

Nos interesan principalmente para:

### Modificar el valor original

Una función o método puede necesitar modificar el objeto existente.

### Evitar copias innecesarias

Para determinados structs puede ser útil trabajar con una referencia en vez de copiar todo el valor.

Go tiene garbage collector, por lo que no estamos gestionando manualmente toda la memoria.

---

# 25. Pointer a un struct

```go
post := Post{
    ID:      1,
    Content: "Hello",
}

postPtr := &post
```

Puedes acceder:

```go
fmt.Println(postPtr.Content)
```

Go permite esta sintaxis directamente.

---

# 26. Métodos

Una función normal:

```go
func printPost(post Post) {
    fmt.Println(post.Content)
}
```

Un método pertenece a un tipo:

```go
func (p Post) Print() {
    fmt.Println(p.Content)
}
```

Ahora:

```go
post.Print()
```

El elemento:

```go
(p Post)
```

es el **receiver**.

---

# 27. Pointer receiver

También:

```go
func (p *Post) UpdateContent(content string) {
    p.Content = content
}
```

Ahora:

```go
post.UpdateContent("New content")
```

modifica el `Post` original porque el receiver es un pointer.

---

# 28. Value receiver vs pointer receiver

### Value receiver

```go
func (p Post) Print()
```

Trabaja con una copia del valor.

Útil cuando no necesitas modificar el struct.

### Pointer receiver

```go
func (p *Post) UpdateContent(content string)
```

Trabaja con el objeto original.

Útil cuando necesitas modificarlo y en otros casos para evitar copias innecesarias.

---

# 29. Interfaces

Una interface describe comportamiento.

Ejemplo:

```go
type Speaker interface {
    Speak() string
}
```

Esto significa:

> Un tipo satisface `Speaker` si tiene un método `Speak() string`.

No necesitas escribir:

```text
implements Speaker
```

---

# 30. Implementación implícita

```go
type Dog struct{}

func (d Dog) Speak() string {
    return "Woof"
}
```

`Dog` satisface automáticamente:

```go
type Speaker interface {
    Speak() string
}
```

Podemos hacer:

```go
var speaker Speaker = Dog{}
```

---

# 31. Otro tipo

```go
type Cat struct{}

func (c Cat) Speak() string {
    return "Meow"
}
```

También satisface `Speaker`.

Esto permite:

```text
Speaker
   ↑
 ┌─┴───┐
Dog   Cat
```

---

# 32. ¿Por qué son útiles las interfaces?

Permiten trabajar con comportamientos en lugar de depender de una implementación concreta.

Más adelante pueden ser útiles para separar:

```text
Handler
   ↓
Service
   ↓
Repository
```

Pero no queremos crear interfaces para absolutamente todo.

Primero código concreto; después abstracciones cuando aporten valor.

---

# 33. Modelar Git2Post

Podemos representar:

```go
type Post struct {
    ID        int    `json:"id"`
    Content   string `json:"content"`
    CreatedAt string `json:"createdAt"`
}
```

También:

```go
type User struct {
    ID       int    `json:"id"`
    Username string `json:"username"`
}
```

Y:

```go
type Repository struct {
    ID          int    `json:"id"`
    Name        string `json:"name"`
    Description string `json:"description"`
}
```

Estos modelos serán la base de nuestra API.

---

# 34. Almacenamiento temporal

Durante Day 4 tendremos:

```go
posts := []Post{
    {
        ID:      1,
        Content: "My first Git2Post post",
    },
    {
        ID:      2,
        Content: "Learning Go",
    },
}
```

Esto será nuestro almacenamiento temporal.

Todavía no utilizaremos PostgreSQL.

Eso llegará en Week 7.

---

# 35. Mental model del día

```text
Array
 ↓
colección de tamaño fijo

Slice
 ↓
colección flexible

Map
 ↓
key → value

Struct
 ↓
entidad

Pointer
 ↓
referencia al valor

Method
 ↓
comportamiento de un tipo

Interface
 ↓
comportamiento esperado
```

---

# Qué aprendiste hoy

Deberías poder explicar:

1. Array vs slice.
2. `append`.
3. `len` y `cap`.
4. `range`.
5. Maps.
6. `value, ok`.
7. `delete`.
8. Structs.
9. Struct tags.
10. Pointers.
11. `&` y `*`.
12. Methods.
13. Receivers.
14. Value receiver vs pointer receiver.
15. Interfaces.
16. Implementación implícita.
17. Cuándo puede ser útil una interface.
18. Cómo modelar `Post`.

---

# Qué viene mañana

## Day 3 — Go Backend: HTTP + JSON + REST

Mañana conectaremos el lenguaje con el mundo real:

```text
Go
 ↓
HTTP
 ↓
Request
 ↓
Handler
 ↓
JSON
 ↓
Response
 ↓
REST
```

Construiremos nuestro primer endpoint:

```text
GET /hello
```

Después estaremos listos para construir el CRUD de Git2Post en Day 4.
