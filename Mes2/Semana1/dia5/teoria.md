# Semana 6 — Día 5 — Teoría
## Consolidación de Go + calidad de la REST API

### Tiempo estimado
- Lectura inicial: **35–50 minutos**.
- Repaso comprensivo con tu código: **60–90 minutos**.
- Práctica y evaluación: **2,5–4 horas**.
- Total recomendado: **3,5–5,5 horas**.

## Objetivo
Hoy no buscamos añadir muchas funcionalidades nuevas. Vamos a comprobar que entiendes la API, mejorar su estructura y documentarla. PostgreSQL corresponde a la Semana 7.

## 1. Fundamentos que debes explicar
Variables, tipos, funciones, slices, maps, structs, pointers y errores explícitos.

```go
name := "Git2Post"
posts := []Post{}
byID := map[int]Post{}

value, err := operation()
if err != nil {
    // manejar el error
}
```

- Una **slice** es una secuencia de longitud variable.
- Un **map** asocia claves con valores.
- Un **struct** agrupa campos relacionados.
- Los errores de Go suelen devolverse explícitamente.
- Los datos en memoria desaparecen al reiniciar el proceso.

## 2. Structs, JSON y pointers

```go
type Post struct {
    ID      int    `json:"id"`
    Content string `json:"content"`
}
```

El struct modela los datos dentro del programa. Los tags indican cómo representarlos en JSON. Los campos exportados empiezan con mayúscula.

Al decodificar JSON usamos un pointer para que el decoder pueda modificar el valor destino:

```go
err := json.NewDecoder(r.Body).Decode(&input)
```

## 3. Repaso HTTP y REST

Una request puede contener método, path, headers y body. Una response contiene status, headers y, normalmente, body.

| Código | Significado |
|---|---|
| `200 OK` | Operación exitosa |
| `201 Created` | Se creó un recurso |
| `204 No Content` | Éxito sin body |
| `400 Bad Request` | Entrada inválida |
| `404 Not Found` | Ruta o recurso inexistente |
| `405 Method Not Allowed` | Método no admitido |
| `500 Internal Server Error` | Error inesperado del servidor |

Mapeo habitual:

| Operación | Método | Ruta |
|---|---|---|
| Listar | GET | `/posts` |
| Consultar | GET | `/posts/1` |
| Crear | POST | `/posts` |
| Reemplazar | PUT | `/posts/1` |
| Actualizar parcialmente | PATCH | `/posts/1` |
| Eliminar | DELETE | `/posts/1` |

Una API no está bien diseñada solo por devolver JSON: rutas, métodos, status y errores deben ser coherentes.

## 4. Handler, service y model

```text
Cliente → Handler → Service → Almacenamiento
       ← JSON + status ←
```

- **Handler:** interpreta HTTP, valida la petición y prepara la respuesta.
- **Service:** aplica reglas de negocio y realiza operaciones sobre los datos.
- **Model:** define estructuras de datos.
- **main.go:** configura rutas y arranca el servidor.

No necesitas añadir interfaces o capas abstractas sin una razón clara.

## 5. `gofmt`

Go tiene un formateador estándar:

```bash
gofmt -w .
```

Ejecútalo desde la raíz del proyecto. Reformatea archivos Go y facilita que el código mantenga un estilo consistente. Si usas Git, revisa el diff después.

## 6. Ejecutar y compilar

```bash
go run .
go build ./...
```

`go run .` ejecuta la aplicación. `go build ./...` comprueba que los paquetes compilan. Un build correcto no demuestra que la API funcione bien; solo que compila.

## 7. Introducción a `go test`

Los archivos de prueba terminan en `_test.go` y utilizan el paquete `testing`.

```go
package main

import "testing"

func TestAdd(t *testing.T) {
    got := add(2, 3)
    want := 5
    if got != want {
        t.Fatalf("add(2, 3) = %d; want %d", got, want)
    }
}
```

Ejecuta:

```bash
go test ./...
```

Es una introducción. En la Semana 9 profundizaremos en pruebas unitarias, integración, APIs y React Testing Library.

## 8. Pruebas manuales vs. automáticas

Las pruebas manuales con `curl` o Postman te permiten comprobar endpoints y errores. Las pruebas automáticas guardan los casos en código para ejecutarlos repetidamente.

Comprueba al menos:
- listar;
- consultar un ID existente e inexistente;
- crear;
- JSON inválido;
- contenido vacío;
- eliminar;
- método incorrecto.

Una sola petición exitosa no demuestra que una API esté bien probada.

## 9. Concurrencia y almacenamiento en memoria

Un servidor HTTP puede atender varias solicitudes simultáneamente. Si múltiples handlers modifican una slice compartida, necesitas sincronizar el acceso o encapsularlo. `sync.Mutex` puede ayudar, pero hay que usarlo de forma consistente.

Aunque soluciones la concurrencia, los datos se pierden al reiniciar. PostgreSQL resolverá la persistencia en la Semana 7.

## 10. README profesional

Tu README debe permitir que otra persona entienda y ejecute el proyecto. Incluye:
1. Nombre y descripción.
2. Funcionalidades.
3. Requisitos y versión de Go.
4. Instalación y ejecución.
5. Endpoints y métodos.
6. Ejemplos de `curl`.
7. Status codes relevantes.
8. Limitaciones conocidas: almacenamiento en memoria y ausencia de autenticación.
9. Próximos pasos.

No afirmes que hay persistencia o autenticación si aún no existen.

## 11. Revisión de calidad
- Nombres claros y consistentes.
- Errores tratados.
- Status codes correctos.
- JSON válido.
- Endpoints documentados.
- Código formateado.
- Build exitoso.
- Sin tokens o secretos en el repositorio.
- Limitaciones documentadas.

## 12. Evaluación de salida
1. ¿Qué diferencia hay entre slice y map?
2. ¿Qué es un struct?
3. ¿Por qué usamos `&input` al decodificar JSON?
4. ¿Qué diferencia hay entre handler y service?
5. ¿Cuándo devolverías `201`, `204`, `400` y `404`?
6. ¿Qué hace `gofmt`?
7. ¿Qué verifica `go build ./...`?
8. ¿Qué hace `go test ./...`?
9. ¿Por qué los datos en memoria se pierden al reiniciar?
10. ¿Qué cambiará al conectar PostgreSQL?

## Definition of Done
- [ ] Puedo explicar los conceptos Go usados en mi API.
- [ ] Los endpoints principales funcionan.
- [ ] Los errores devuelven status codes coherentes.
- [ ] Ejecuté `gofmt -w .`.
- [ ] Ejecuté `go build ./...` sin errores.
- [ ] Conozco el flujo básico de `go test`.
- [ ] Escribí un README reproducible.
- [ ] Documenté que el almacenamiento es temporal.
- [ ] Puedo explicar el flujo de una petición.
- [ ] Estoy listo para empezar PostgreSQL en la Semana 7.

## Cierre de la Semana 6
La meta es: **“Sé Go básico, entiendo cómo funciona un servidor HTTP y puedo construir una REST API CRUD desde cero con almacenamiento temporal.”**

## Próxima semana: PostgreSQL + Go
Aprenderás SQL relacional, tablas, claves primarias y foráneas, consultas `SELECT`, `INSERT`, `UPDATE` y `DELETE`, conexión desde Go, variables de entorno y reemplazar el almacenamiento en memoria por persistencia real.
