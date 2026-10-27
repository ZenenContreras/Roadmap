# Semana 6 — Día 1 — Práctica
# Go desde cero

## Objetivo

Hoy no construiremos todavía una REST API.

Vamos a configurar Go y practicar los fundamentos mediante programas pequeños.

> Escribe, ejecuta, rompe cosas y corrígelas. No copies todo sin entenderlo.

---

# 1. Preparar el entorno

Ejecuta:

```bash
go version
```

Después:

```bash
go env
```

Si utilizas VS Code, instala la extensión oficial de Go.

---

# 2. Crear el proyecto

Crea:

```bash
mkdir git2post-api
cd git2post-api
```

Inicializa:

```bash
go mod init git2post-api
```

Estructura:

```text
git2post-api/
├── go.mod
└── main.go
```

---

# 3. Tu primer programa

En `main.go`, imprime:

```text
Hello, Go!
```

Ejecuta:

```bash
go run .
```

### Reto

Cambia el mensaje por:

```text
Starting my Go backend journey.
```

---

# 4. Variables

Crea variables para:

```text
name
age
isStudent
height
```

Utiliza inferencia cuando tenga sentido.

Después crea al menos una variable con `var`.

### Responde

1. ¿Qué tipo tiene `age`?
2. ¿Qué tipo tiene `name`?
3. ¿Qué diferencia hay entre `var` y `:=`?
4. ¿Qué hace `:=`?

---

# 5. Constantes

Crea:

```text
appName
version
```

como constantes.

Después intenta modificar una.

Observa el error del compilador.

### Pregunta

¿Por qué tiene sentido que una constante no pueda modificarse?

---

# 6. Zero values

Haz este experimento:

```go
var name string
var age int
var active bool
```

Imprime las tres variables.

Comprueba:

```text
string → ""
int → 0
bool → false
```

### Pregunta

Explica con tus propias palabras qué es un zero value.

---

# 7. Programa — Información personal

Crea un programa que muestre:

```text
Name: Zenen
Age: 24
Country: Colombia
Developer: true
```

Puedes utilizar tus propios datos.

Practica:

- variables;
- tipos;
- `fmt.Println`;
- strings;
- ints;
- bools.

---

# 8. Condicionales

Crea:

```text
age
```

Implementa:

```text
age >= 18 → Adult
otherwise → Minor
```

Prueba ambos casos.

---

# 9. Programa — Login simulation

Crea:

```text
username
password
```

Comprueba:

```text
username == "admin"
password == "1234"
```

Si ambos coinciden:

```text
Login successful
```

Si no:

```text
Invalid credentials
```

Practica:

```text
if
else
&&
==
```

Esto es solamente un ejercicio de lógica, no autenticación real.

---

# 10. `for`

Haz que el programa imprima:

```text
1
2
3
4
5
```

utilizando `for`.

Después:

```text
5
4
3
2
1
```

### Reto

Imprime solamente números pares entre 1 y 20.

---

# 11. `switch`

Crea:

```text
status
```

con:

```text
loading
success
error
```

Utiliza `switch` para producir un mensaje diferente para cada estado.

Agrega `default` para un estado desconocido.

---

# 12. Funciones

Crea:

```go
func greet(name string)
```

La función debe producir:

```text
Hello, <name>
```

Pruébala con varios nombres.

---

# 13. Función con retorno

Crea:

```go
func add(a int, b int) int
```

Debe devolver la suma.

Prueba:

```text
5 + 3
10 + 20
100 + 50
```

Haz que `main` imprima el resultado.

---

# 14. Temperature converter

Crea una función:

```text
Celsius → Fahrenheit
```

Fórmula:

```text
F = C * 9/5 + 32
```

Debe recibir y devolver `float64`.

Comprueba:

```text
25°C → 77°F
```

### Reto

Implementa también:

```text
Fahrenheit → Celsius
```

---

# 15. Múltiples valores de retorno

Crea:

```go
func divide(a float64, b float64) (float64, error)
```

Si `b == 0`, devuelve un error.

Para crear el error puedes utilizar:

```go
errors.New(...)
```

Prueba:

```text
10 / 2
10 / 0
```

---

# 16. Manejar el error

Utiliza:

```go
if err != nil {
}
```

Resultado esperado:

```text
Result: 5
```

y:

```text
Error: cannot divide by zero
```

---

# 17. Programa — Simple calculator

Construye una calculadora con:

```text
+
-
*
/
```

Utiliza:

```text
a
b
operation
```

Utiliza `switch` para seleccionar la operación.

Para división reutiliza el manejo de errores.

### Reto

Haz que una operación desconocida produzca un error.

---

# 18. Programa — Simple Task Manager

Todavía NO utilices structs.

Crea:

```text
taskTitle
taskCompleted
```

Muestra:

```text
Task: Learn Go
Completed: false
```

Después:

```text
Task completed
```

o:

```text
Task pending
```

según el estado.

### Reto

Crea:

```text
printTask(title, completed)
```

---

# 19. Lectura de código

Antes de ejecutarlo, predice el resultado:

```go
package main

import "fmt"

func calculate(a int, b int) int {
    return a + b
}

func main() {
    x := 10
    y := 20

    result := calculate(x, y)

    if result > 25 {
        fmt.Println("Large")
    } else {
        fmt.Println("Small")
    }
}
```

Responde:

1. ¿Qué devuelve `calculate`?
2. ¿Qué valor tiene `result`?
3. ¿Qué imprime?
4. ¿Por qué?

Después ejecútalo.

---

# 20. Debugging deliberado

Rompe intencionalmente tu código.

Prueba:

- utilizar una variable inexistente;
- asignar un string a una variable de otro tipo;
- declarar una variable y no utilizarla;
- redeclarar con `:=`;
- modificar una constante.

Antes de buscar la solución:

1. lee el error;
2. identifica archivo;
3. identifica línea;
4. intenta explicar el problema;
5. corrígelo.

Este ejercicio es importante: empieza a utilizar el compilador como herramienta de debugging.

---

# 21. Formatear

Ejecuta:

```bash
gofmt -w .
```

Después:

```bash
go run .
```

Comprueba que siga funcionando.

---

# 22. Compilar

Ejecuta:

```bash
go build
```

Recuerda:

```text
go run .
→ ejecutar durante desarrollo

go build
→ compilar
```

---

# 23. Reto final — Mini Git2Post CLI

Sin copiar un tutorial, crea una pequeña herramienta que represente Git2Post.

Debe manejar:

```text
username
repository
commits
```

Salida conceptual:

```text
Git2Post
---------
User: Zenen
Repository: Git2Post
Commits: 12
```

Reglas:

```text
commits >= 10
→ Active developer

commits < 10
→ Keep coding
```

Crea:

```text
developerStatus(commits)
```

que devuelva el estado.

### Reto extra

Haz que devuelva:

```text
status
error
```

Considera inválido:

```text
commits < 0
```

---

# 24. Preguntas de comprensión

Intenta responder SIN mirar la teoría.

## Go

1. ¿Qué es Go?
2. ¿Por qué lo vamos a utilizar para backend?
3. ¿Qué significa que Go sea compilado?
4. ¿Qué hace `go run .`?
5. ¿Qué hace `go build`?
6. ¿Qué es `go.mod`?
7. ¿Qué significa `package main`?
8. ¿Qué hace `func main()`?

## Variables

9. ¿Qué diferencia hay entre `var` y `:=`?
10. ¿Qué es type inference?
11. ¿Qué es un zero value?
12. ¿Cuál es el zero value de `int`?
13. ¿Cuál es el zero value de `bool`?
14. ¿Qué es `nil`?

## Control flow

15. ¿Cómo funciona `if`?
16. ¿Para qué utilizamos `for`?
17. ¿Qué particularidad tiene `for` en Go?
18. ¿Cuándo utilizarías `switch`?

## Functions

19. ¿Cómo declaras una función?
20. ¿Cómo especificas el tipo de un parámetro?
21. ¿Cómo especificas el tipo de retorno?
22. ¿Puede una función devolver más de un valor?
23. ¿Qué significa `value, err := ...`?
24. ¿Qué significa `err != nil`?

---

# 25. Prueba final

Explica en voz alta:

```text
go mod init
      ↓
go.mod
      ↓
main.go
      ↓
package main
      ↓
func main()
      ↓
variables
      ↓
functions
      ↓
if / for / switch
      ↓
error handling
      ↓
go run .
      ↓
go build
```

Si puedes explicar cada paso sin mirar los apuntes, el día fue exitoso.

---

# Definition of Done

- [ ] Go está instalado.
- [ ] `go version` funciona.
- [ ] Puedo crear un módulo con `go mod init`.
- [ ] Entiendo `go.mod`.
- [ ] Entiendo `package main`.
- [ ] Entiendo `func main()`.
- [ ] Puedo declarar variables.
- [ ] Entiendo `:=`.
- [ ] Puedo utilizar constantes.
- [ ] Entiendo tipos básicos.
- [ ] Entiendo zero values.
- [ ] Reconozco `nil`.
- [ ] Puedo utilizar `if`.
- [ ] Puedo utilizar `for`.
- [ ] Puedo utilizar `switch`.
- [ ] Puedo crear funciones.
- [ ] Puedo retornar valores.
- [ ] Entiendo múltiples valores de retorno.
- [ ] Entiendo `value, err`.
- [ ] Puedo manejar `err != nil`.
- [ ] Puedo ejecutar `go run .`.
- [ ] Puedo utilizar `gofmt`.
- [ ] Puedo ejecutar `go build`.
- [ ] Puedo leer errores básicos del compilador.
- [ ] Puedo explicar lo aprendido sin mirar los apuntes.

---

# Qué aprendiste hoy

```text
Go
 ↓
Environment
 ↓
Variables
 ↓
Types
 ↓
Control Flow
 ↓
Functions
 ↓
Errors
```

---

# Qué sigue mañana

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
