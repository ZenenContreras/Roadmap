# Semana 6 — Día 1 — Teoría
# Go desde cero: lenguaje + entorno

## Objetivo

Hoy empiezas Go desde cero. El objetivo no es construir una API todavía, sino entender el lenguaje y preparar el entorno.

Al terminar deberías poder:

- explicar qué es Go;
- entender por qué se utiliza mucho en backend;
- diferenciar Go de JavaScript/TypeScript;
- entender qué significa que Go sea compilado;
- crear un proyecto Go con `go.mod`;
- entender `package main` y `func main()`;
- declarar variables y constantes;
- entender tipos, inferencia y zero values;
- utilizar `if`, `for` y `switch`;
- crear funciones;
- trabajar con múltiples valores de retorno;
- entender el patrón `value, err`;
- ejecutar, formatear y compilar un programa Go.

---

## 1. ¿Qué es Go?

Go, también llamado Golang, es un lenguaje creado en Google.

Fue diseñado con énfasis en:

- simplicidad;
- rendimiento;
- concurrencia;
- compilación rápida;
- tooling integrado;
- mantenibilidad.

Se utiliza mucho en:

- APIs;
- microservicios;
- cloud;
- infraestructura;
- herramientas CLI;
- networking;
- sistemas distribuidos;
- DevOps.

En nuestro roadmap lo utilizaremos principalmente para backend.

Tu stack empieza a verse así:

```text
React + TypeScript
        ↓
       HTTP
        ↓
       Go
        ↓
   PostgreSQL
```

No estás aprendiendo Go de forma aislada: estás construyendo la segunda mitad de tu perfil Full-Stack.

---

## 2. Go vs JavaScript/TypeScript

Ya conoces JavaScript y TypeScript, así que podemos utilizarlos como referencia.

### JavaScript

Normalmente:

```text
JavaScript
    ↓
Node.js
    ↓
programa
```

Node.js proporciona el runtime.

JavaScript es dinámico:

```js
let value = "hello";
value = 123;
```

Esto es válido.

### TypeScript

TypeScript agrega tipos:

```ts
let value: string = "hello";
```

Pero finalmente se transforma a JavaScript:

```text
TypeScript
    ↓
JavaScript
    ↓
Runtime
```

### Go

Go normalmente se compila:

```text
Go source code
       ↓
    compiler
       ↓
 executable
       ↓
 operating system
```

Por eso utilizaremos:

```bash
go run .
```

durante desarrollo y:

```bash
go build
```

para compilar.

La idea importante:

> Go es un lenguaje compilado y fuertemente tipado.

---

## 3. ¿Por qué esto importa para backend?

Cuando construyamos Git2Post:

```text
React
  ↓
HTTP Request
  ↓
Go Server
  ↓
Business Logic
  ↓
PostgreSQL
  ↓
HTTP Response
  ↓
React
```

Go será el proceso que recibe solicitudes HTTP y ejecuta la lógica del backend.

Por eso primero aprendemos el lenguaje y después:

```text
HTTP
 ↓
JSON
 ↓
REST
 ↓
Handlers
 ↓
Services
 ↓
Database
```

---

## 4. El entorno de Go

Verifica la instalación:

```bash
go version
```

También:

```bash
go env
```

No necesitas memorizar la salida. Solo queremos comprobar que el toolchain funciona.

---

## 5. Tooling de Go

Las herramientas principales son:

```bash
go run
go build
go test
go mod
gofmt
```

### `go run`

Ejecuta durante desarrollo:

```bash
go run .
```

### `go build`

Compila:

```bash
go build
```

### `go test`

Ejecuta tests. Lo estudiaremos profundamente en la Semana 9.

### `go mod`

Gestiona módulos y dependencias.

### `gofmt`

Formatea automáticamente código Go.

En JavaScript probablemente utilizaste Prettier. Go tiene una herramienta oficial de formato.

---

## 6. Crear el primer proyecto

Crea:

```text
git2post-api
```

Después:

```bash
cd git2post-api
go mod init git2post-api
```

Estructura:

```text
git2post-api/
├── go.mod
└── main.go
```

---

## 7. ¿Qué es `go.mod`?

`go.mod` describe el módulo de Go.

Conceptualmente recuerda a `package.json` porque participa en la gestión del proyecto y dependencias, aunque no son equivalentes.

Puede verse así:

```go
module git2post-api

go 1.x
```

El módulo identifica el proyecto y permite gestionar dependencias.

---

## 8. `package main`

Un programa ejecutable normalmente comienza con:

```go
package main
```

Go organiza el código mediante paquetes.

`main` es el paquete especial utilizado para crear un ejecutable.

---

## 9. `func main()`

```go
func main() {

}
```

`func` declara una función.

`main` es la función principal que se ejecuta cuando comienza el programa.

Ejemplo:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
```

Flujo:

```text
program starts
      ↓
   main()
      ↓
 Println()
```

---

## 10. Imports

Para utilizar un paquete:

```go
import "fmt"
```

Después:

```go
fmt.Println("Hello")
```

`fmt` es el paquete y `Println` una función del paquete.

---

## 11. Variables

Puedes declarar:

```go
var name string = "Zenen"
```

También puedes dejar que Go infiera el tipo:

```go
var name = "Zenen"
```

Dentro de una función es muy común:

```go
name := "Zenen"
```

---

## 12. Type inference

Observa:

```go
age := 24
```

Go determina:

```text
age → int
```

Y:

```go
name := "Zenen"
```

produce:

```text
name → string
```

Esto es type inference.

El compilador conoce el tipo aunque tú no lo escribas explícitamente.

---

## 13. `:=`

```go
name := "Zenen"
```

significa:

```text
declarar variable
+
inferir tipo
```

Puedes reasignar:

```go
name = "Carlos"
```

Pero no redeclarar la misma variable en el mismo scope:

```go
name := "Zenen"
name := "Carlos" // error
```

---

## 14. `var` vs `:=`

```go
var name string = "Zenen"
```

permite una declaración explícita.

```go
name := "Zenen"
```

es más compacta y muy común dentro de funciones.

Regla práctica:

```text
Nueva variable dentro de una función
→ normalmente :=
```

---

## 15. Constantes

```go
const appName = "Git2Post"
```

Una constante no puede cambiar:

```go
appName = "Other" // error
```

Úsala cuando un valor conceptualmente no debería cambiar.

---

## 16. Tipos básicos

Debes reconocer:

```text
string
int
float64
bool
byte
rune
```

Ejemplos:

```go
name := "Zenen"
age := 24
price := 19.99
active := true
```

`byte` es un alias de `uint8`.

`rune` es un alias de `int32` y aparece frecuentemente con caracteres Unicode.

No necesitas profundizar en Unicode hoy.

---

## 17. Zero values

Una característica importante de Go es que las variables tienen un valor cero cuando no se inicializan.

Conceptualmente:

```text
string → ""
int → 0
float → 0
bool → false
pointer → nil
slice → nil
map → nil
```

Por ejemplo:

```go
var name string
var age int
```

produce:

```text
name = ""
age = 0
```

Esto será importante cuando trabajemos con structs y datos de APIs.

---

## 18. `nil`

Encontrarás:

```go
nil
```

Representa ausencia de valor para determinados tipos.

Por ejemplo:

```go
var pointer *int
```

inicialmente:

```text
pointer == nil
```

Mañana estudiaremos punteros.

---

## 19. Scope

Las variables tienen alcance:

```go
func main() {
    name := "Zenen"

    if true {
        age := 24
        fmt.Println(age)
    }

    fmt.Println(name)
}
```

`age` existe dentro de ese bloque.

No puedes usarla fuera.

---

## 20. `if`

```go
age := 24

if age >= 18 {
    fmt.Println("Adult")
} else {
    fmt.Println("Minor")
}
```

No necesitas paréntesis obligatorios:

```go
if age >= 18 {
}
```

---

## 21. `for`

Go utiliza `for` como mecanismo principal para loops.

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

También puede funcionar como un while:

```go
count := 0

for count < 5 {
    fmt.Println(count)
    count++
}
```

Go no tiene un `while` separado como JavaScript.

---

## 22. `switch`

```go
status := "success"

switch status {
case "loading":
    fmt.Println("Loading")
case "success":
    fmt.Println("Success")
case "error":
    fmt.Println("Error")
default:
    fmt.Println("Unknown")
}
```

Será útil cuando trabajemos con estados y HTTP.

---

## 23. Funciones

Se declaran con:

```go
func greet() {
    fmt.Println("Hello")
}
```

Se llaman:

```go
greet()
```

Con parámetros:

```go
func greet(name string) {
    fmt.Println("Hello", name)
}
```

---

## 24. Funciones con retorno

```go
func add(a int, b int) int {
    return a + b
}
```

Uso:

```go
result := add(5, 3)
```

Ahora:

```text
result → int
```

---

## 25. Múltiples valores de retorno

Go permite:

```go
func divide(a float64, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }

    return a / b, nil
}
```

Podemos recibir:

```go
result, err := divide(10, 2)
```

Este patrón será fundamental en backend.

---

## 26. El patrón `value, err`

En JavaScript podrías tener:

```js
try {
    const data = await fetchData();
} catch (error) {
}
```

En Go verás frecuentemente:

```go
data, err := fetchData()

if err != nil {
    // manejar error
}
```

La idea:

```text
función
   ↓
resultado + error
   ↓
¿err != nil?
   ↓
manejar error
```

Los errores normales forman parte explícita del flujo de datos.

---

## 27. El tipo `error`

Go tiene un tipo llamado:

```go
error
```

Una función puede devolver:

```go
func something() (string, error)
```

Si todo salió bien:

```go
err == nil
```

Si hubo error:

```go
err != nil
```

Este patrón aparecerá constantemente durante la construcción de la API.

---

## 28. Primer programa completo

```go
package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name
}

func main() {
    name := "Zenen"
    message := greet(name)

    fmt.Println(message)
}
```

Flujo:

```text
main()
  ↓
name
  ↓
greet(name)
  ↓
string
  ↓
message
  ↓
Println
```

---

## 29. Mentalidad para aprender Go

Es normal que Go se sienta extraño después de JavaScript/TypeScript.

No intentes convertir Go en JavaScript con otra sintaxis.

En lugar de:

> ¿Cómo hago esto en Go igual que en JS?

pregunta:

> ¿Cómo resuelve Go este problema?

Usa JavaScript como referencia solamente cuando ayude.

---

## 30. Mapa mental del día

```text
Go
├── Environment
│   ├── go run
│   ├── go build
│   ├── go mod
│   └── gofmt
│
├── Project
│   ├── go.mod
│   └── main.go
│
├── Syntax
│   ├── package
│   ├── import
│   └── func
│
├── Data
│   ├── variables
│   ├── constants
│   ├── types
│   └── zero values
│
├── Control flow
│   ├── if
│   ├── for
│   └── switch
│
└── Functions
    ├── parameters
    ├── return
    ├── multiple returns
    └── errors
```

---

# Qué aprendiste hoy

Deberías poder explicar:

1. Qué es Go.
2. Por qué se utiliza en backend.
3. Qué significa que sea compilado.
4. Qué hace `go run`.
5. Qué hace `go build`.
6. Qué es `go.mod`.
7. Qué significa `package main`.
8. Qué hace `func main()`.
9. Qué son variables y constantes.
10. Qué significa `:=`.
11. Qué es type inference.
12. Qué son zero values.
13. Qué es `nil`.
14. Cómo funcionan `if`, `for` y `switch`.
15. Cómo crear funciones.
16. Cómo retornar valores.
17. Qué significa devolver múltiples valores.
18. Qué significa `value, err`.
19. Por qué el manejo de errores es explícito.

---

# Qué viene mañana

## Day 2 — Go Core

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
```

Mañana empezaremos a modelar entidades reales de Git2Post.
