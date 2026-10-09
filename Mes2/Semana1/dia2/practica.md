# Semana 6 — Día 2 — Práctica
# Go Core

## Objetivo

Hoy practicarás:

```text
Arrays
 ↓
Slices
 ↓
Maps
 ↓
Structs
 ↓
Pointers
 ↓
Methods
 ↓
Interfaces
 ↓
Git2Post models
```

No construiremos HTTP todavía.

> Escribe, ejecuta, rompe cosas y corrígelas.

---

# 1. Array básico

Crea:

```go
numbers := [5]int{10, 20, 30, 40, 50}
```

Haz que el programa:

1. imprima el primer elemento;
2. imprima el último;
3. cambie el primero a `100`;
4. imprima todo el array.

---

# 2. Array + loop

Recorre el array con un `for` clásico.

Después recórrelo utilizando:

```go
range
```

Compara ambos enfoques.

---

# 3. Slice básico

Crea:

```go
numbers := []int{10, 20, 30}
```

Agrega:

```text
40
50
60
```

Después imprime:

```text
slice
len
cap
```

Observa cómo cambia la colección.

---

# 4. Slice de strings

Crea un slice con:

```text
React
TypeScript
Go
PostgreSQL
Docker
```

Recórrelo utilizando:

```go
range
```

y muestra:

```text
Technology: React
Technology: TypeScript
...
```

---

# 5. Slicing

Con:

```go
technologies := []string{
    "React",
    "TypeScript",
    "Go",
    "PostgreSQL",
    "Docker",
}
```

obtén solamente:

```text
Go
PostgreSQL
Docker
```

utilizando slicing.

---

# 6. Reto — promedio

Crea:

```text
grades
```

como `[]float64`.

Crea:

```text
average(numbers []float64) float64
```

que calcule el promedio.

Practicarás:

- slices;
- parámetros;
- `range`;
- retorno;
- matemáticas.

---

# 7. Map básico

Crea:

```go
ages := map[string]int{}
```

Agrega:

```text
Zenen → 24
Ana → 22
Carlos → 27
```

Después imprime la edad de Zenen.

---

# 8. Comprobar una key

Prueba:

```text
Zenen
Unknown
```

Utiliza:

```go
value, ok := map[key]
```

Muestra:

```text
User found
```

o:

```text
User not found
```

---

# 9. Eliminar

Elimina:

```text
Carlos
```

utilizando:

```go
delete(...)
```

Después recorre el map y comprueba que ya no aparezca.

---

# 10. Reto — repository lookup

Crea:

```go
repositories := map[int]string{
    1: "Git2Post",
    2: "DevPulse",
    3: "Portfolio",
}
```

Crea:

```text
findRepository(id int)
```

que devuelva:

```text
name
ok
```

Prueba:

```text
findRepository(2)
→ DevPulse, true

findRepository(99)
→ "", false
```

---

# 11. Primer struct

Crea:

```go
type Post struct {
    ID      int
    Content string
}
```

Después:

```go
post := Post{
    ID:      1,
    Content: "Learning Go",
}
```

Imprime:

```text
ID
Content
```

---

# 12. Modificar un struct

Cambia:

```text
Learning Go
```

por:

```text
Learning Go for backend development
```

e imprime el resultado.

---

# 13. Struct completo

Amplía `Post`:

```go
type Post struct {
    ID        int
    Content   string
    CreatedAt string
    Published bool
}
```

Crea dos posts y muestra sus datos.

---

# 14. Slice de structs

Crea:

```go
posts := []Post{
    {
        ID:      1,
        Content: "Learning Go",
    },
    {
        ID:      2,
        Content: "Building Git2Post",
    },
}
```

Recorre:

```go
for _, post := range posts {
}
```

Muestra:

```text
Post #1: Learning Go
Post #2: Building Git2Post
```

---

# 15. Reto — buscar un Post

Crea:

```text
findPost(posts []Post, id int)
```

Debe buscar por ID.

Piensa qué debería devolver si:

```text
id existe
```

y si:

```text
id no existe
```

Una opción razonable es:

```text
Post
bool
```

---

# 16. Struct tags

Modifica `Post`:

```go
type Post struct {
    ID        int    `json:"id"`
    Content   string `json:"content"`
    CreatedAt string `json:"createdAt"`
}
```

Todavía no hagas JSON.

Solamente familiarízate con la sintaxis.

Mañana entenderás su utilidad.

---

# 17. Pointers — experimento

Crea:

```go
age := 24
ptr := &age
```

Imprime:

```text
age
ptr
*ptr
```

Entiende:

```text
&age
→ dirección

*ptr
→ valor apuntado
```

---

# 18. Modificar mediante pointer

Haz:

```go
age := 24
ptr := &age

*ptr = 30
```

Después:

```go
fmt.Println(age)
```

Debe mostrar:

```text
30
```

Explica por qué.

---

# 19. Pointer con Post

Crea:

```go
post := Post{
    ID:      1,
    Content: "Old content",
}
```

Después:

```go
postPtr := &post
```

Modifica `Content` utilizando `postPtr`.

Comprueba que `post` también cambió.

---

# 20. Primer method

Crea:

```go
func (p Post) Print() {
    fmt.Println(p.Content)
}
```

Después:

```go
post.Print()
```

Explica la diferencia entre:

```text
función normal
```

y:

```text
método
```

---

# 21. Method `Status`

Agrega a `Post`:

```text
Published
```

Crea:

```text
Status()
```

Debe devolver:

```text
"Published"
```

si `Published == true`.

Si no:

```text
"Draft"
```

---

# 22. Pointer receiver

Crea:

```go
func (p *Post) UpdateContent(content string) {
    p.Content = content
}
```

Después:

```go
post.UpdateContent("New content")
```

Comprueba que el contenido cambió.

---

# 23. Value receiver vs pointer receiver

Crea:

```text
Print()
UpdateContent()
```

Haz que:

- `Print` utilice value receiver;
- `UpdateContent` utilice pointer receiver.

Explica por qué.

---

# 24. Primera interface

Crea:

```go
type Speaker interface {
    Speak() string
}
```

Crea:

```go
type Dog struct{}
```

e implementa:

```go
func (d Dog) Speak() string {
    return "Woof"
}
```

Después:

```go
var speaker Speaker = Dog{}
fmt.Println(speaker.Speak())
```

---

# 25. Segunda implementación

Crea:

```go
type Cat struct{}
```

con:

```go
func (c Cat) Speak() string {
    return "Meow"
}
```

Prueba:

```go
var speaker Speaker

speaker = Dog{}
fmt.Println(speaker.Speak())

speaker = Cat{}
fmt.Println(speaker.Speak())
```

Observa cómo una misma interface puede representar distintos tipos.

---

# 26. Reto — Notification

Crea una interface:

```text
Notifier
```

con:

```text
Notify(message string)
```

Crea:

```text
EmailNotifier
ConsoleNotifier
```

Ambos deben implementar `Notify`.

No necesitas enviar emails reales.

El objetivo es practicar abstracción.

---

# 27. Modelar Git2Post

Crea:

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

Piensa si añadirías otros campos.

---

# 28. Almacenamiento temporal

Crea:

```go
posts := []Post{
    {
        ID:        1,
        Content:   "My first Git2Post post",
        CreatedAt: "2026-10-08",
    },
    {
        ID:        2,
        Content:   "Learning Go",
        CreatedAt: "2026-10-08",
    },
}
```

Esto representa nuestra futura "base de datos" temporal.

Más adelante:

```text
[]Post
   ↓
PostgreSQL
```

---

# 29. Reto final — Mini repository

Sin HTTP todavía, crea funciones conceptualmente equivalentes a:

```text
getPosts()
getPostByID()
createPost()
updatePost()
deletePost()
```

Empieza por:

```text
getPosts
getPostByID
createPost
```

Después intenta las otras dos.

Practica:

```text
slice
struct
function
pointer
error
```

No necesitas separar packages todavía.

---

# 30. Preguntas de comprensión

## Arrays y Slices

1. ¿Qué diferencia hay entre array y slice?
2. ¿Por qué utilizaremos slices más frecuentemente?
3. ¿Qué hace `append`?
4. ¿Qué devuelve `len`?
5. ¿Qué representa `cap`?
6. ¿Qué hace `range`?
7. ¿Qué significa `numbers[1:4]`?

## Maps

8. ¿Qué problema resuelve un map?
9. ¿Cómo creas un map?
10. ¿Cómo agregas un valor?
11. ¿Cómo compruebas si existe una key?
12. ¿Qué significan `value, ok`?
13. ¿Cómo eliminas una key?
14. ¿Los maps deben tratarse como colecciones ordenadas?

## Structs

15. ¿Qué es un struct?
16. ¿Por qué es útil para representar un `Post`?
17. ¿Cómo accedes a un campo?
18. ¿Qué es un struct tag?
19. ¿Para qué utilizaremos `json:"id"`?

## Pointers

20. ¿Qué hace `&`?
21. ¿Qué hace `*`?
22. ¿Qué significa que un pointer apunte a un valor?
23. ¿Por qué modificar `*ptr` puede modificar la variable original?

## Methods

24. ¿Qué diferencia hay entre una función y un método?
25. ¿Qué es un receiver?
26. ¿Cuándo usarías un pointer receiver?

## Interfaces

27. ¿Qué describe una interface?
28. ¿Qué significa implementación implícita?
29. ¿Por qué puede ser útil una interface?
30. ¿Por qué no queremos crear interfaces para absolutamente todo?

---

# 31. Debugging

Rompe deliberadamente algunos ejercicios.

Prueba:

- acceder a un índice inexistente;
- usar una key inexistente;
- modificar un struct incorrectamente;
- utilizar un tipo incompatible;
- utilizar incorrectamente un pointer.

Lee primero el error.

No busques inmediatamente la solución.

---

# 32. Definition of Done

- [ ] Entiendo arrays.
- [ ] Entiendo slices.
- [ ] Sé utilizar `append`.
- [ ] Entiendo `len`.
- [ ] Entiendo conceptualmente `cap`.
- [ ] Sé utilizar slicing.
- [ ] Sé utilizar `range`.
- [ ] Sé crear maps.
- [ ] Sé leer y modificar maps.
- [ ] Sé comprobar si existe una key.
- [ ] Sé eliminar una key.
- [ ] Sé crear structs.
- [ ] Sé modificar campos.
- [ ] Entiendo struct tags.
- [ ] Entiendo `&`.
- [ ] Entiendo `*`.
- [ ] Entiendo pointers.
- [ ] Sé crear métodos.
- [ ] Entiendo receivers.
- [ ] Diferencio value receiver y pointer receiver.
- [ ] Entiendo interfaces básicas.
- [ ] Entiendo implementación implícita.
- [ ] Puedo modelar `Post`.
- [ ] Puedo trabajar con `[]Post`.
- [ ] Puedo explicar por qué `[]Post` será nuestro almacenamiento temporal.
- [ ] Puedo leer y corregir errores básicos relacionados con estos conceptos.

---

# Qué aprendiste hoy

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

Y ya puedes representar una entidad real:

```go
type Post struct {
    ID        int    `json:"id"`
    Content   string `json:"content"`
    CreatedAt string `json:"createdAt"`
}
```

---

# Qué sigue mañana

## Day 3 — Go Backend: HTTP + JSON + REST

Mañana conectaremos todo lo aprendido con el mundo real:

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

Construiremos:

```text
GET /hello
```

Después estaremos listos para construir el CRUD de Git2Post en Day 4.
