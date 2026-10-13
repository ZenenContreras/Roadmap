# Semana 6 — Día 3 — Teoría
# Go Backend: HTTP, JSON y REST

## Tiempo estimado
- Lectura inicial: **45–60 minutos**.
- Lectura comprensiva y seguir los ejemplos: **90–120 minutos**.
- Práctica del día: **2,5–4 horas**.
- Total recomendado: **4–6 horas**, idealmente en dos sesiones.

Como HTTP y los servidores son nuevos para ti, ejecuta los ejemplos y explica con tus palabras qué ocurre. No intentes memorizarlo todo de una vez.

## Objetivo
Entender cómo se comunican cliente y servidor, qué contiene una petición HTTP, cómo responde un servidor Go, cómo se representa información con JSON y qué significa diseñar una API REST.

Al final construirás un endpoint `GET /hello` que responde JSON.

```text
Cliente
  │ HTTP request
  ▼
Servidor Go
  │ Handler
  ▼
Respuesta HTTP + JSON
```

## 1. ¿Qué es un backend?
- **Frontend:** interfaz con la que interactúa la persona.
- **Backend:** lógica del servidor, validación, reglas y coordinación de operaciones.
- **Base de datos:** almacenamiento persistente.

En Git2Post, React + TypeScript puede mostrar repositorios y posts. Go expondrá endpoints y procesará peticiones.

```text
React + TypeScript
        │ HTTP
        ▼
      Go API
        │
        ▼
  Datos / servicios
```

Esta semana los posts estarán en memoria. PostgreSQL llega en la Semana 7.

Un **servidor** es un programa que escucha solicitudes y responde. Tu computador puede ejecutar uno localmente. Un **cliente** puede ser el navegador, React, Postman, `curl` u otro servidor.

## 2. Leer una URL
Ejemplo:

```text
http://localhost:8080/hello
```

- `http`: protocolo.
- `localhost`: tu propio computador.
- `8080`: puerto donde escucha el servidor.
- `/hello`: ruta solicitada.

Un puerto permite distinguir servicios que corren en la misma máquina. Por ejemplo, Vite podría usar `5173` y Go `8080`.

El endpoint que probaremos es `GET /hello`: la ruta y el método forman parte de la operación.

## 3. ¿Qué es HTTP?
HTTP es un protocolo de comunicación entre clientes y servidores. El cliente envía una **request** y el servidor devuelve una **response**.

HTTP no es un lenguaje ni una base de datos.

## 4. Anatomía de una request
Una petición puede incluir método, ruta, headers y body.

```http
POST /posts HTTP/1.1
Content-Type: application/json

{
  "content": "Learning Go"
}
```

- `POST`: método.
- `/posts`: ruta.
- `Content-Type`: header.
- JSON: body.

Un `GET` normalmente solicita datos y no necesita un body.

Headers frecuentes:
- `Content-Type`: formato del body enviado.
- `Accept`: formatos que acepta el cliente.
- `Authorization`: credenciales o token.

## 5. Anatomía de una response
Una respuesta contiene status code, headers y, si corresponde, body.

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "Hello from Go"
}
```

Una respuesta puede no tener body: `204 No Content` indica éxito sin contenido devuelto.

## 6. Métodos HTTP

| Método | Uso habitual | Ejemplo |
|---|---|---|
| `GET` | Leer | `GET /posts` |
| `POST` | Crear o iniciar una operación | `POST /posts` |
| `PUT` | Reemplazar una representación | `PUT /posts/12` |
| `PATCH` | Modificar parcialmente | `PATCH /posts/12` |
| `DELETE` | Eliminar | `DELETE /posts/12` |

En nuestro CRUD:

```text
GET    /posts       → listar
GET    /posts/12    → obtener uno
POST   /posts       → crear
PUT    /posts/12    → reemplazar
PATCH  /posts/12    → modificar parcialmente
DELETE /posts/12    → eliminar
```

## 7. Status codes

- `2xx`: éxito.
- `3xx`: redirección.
- `4xx`: problema con la petición o el acceso.
- `5xx`: error del servidor.

| Código | Significado habitual |
|---|---|
| `200 OK` | Consulta exitosa |
| `201 Created` | Recurso creado |
| `204 No Content` | Éxito sin body |
| `400 Bad Request` | Entrada inválida |
| `401 Unauthorized` | Falta autenticación válida |
| `403 Forbidden` | No tiene permiso |
| `404 Not Found` | Ruta o recurso inexistente |
| `405 Method Not Allowed` | Método no admitido por la ruta |
| `500 Internal Server Error` | Error inesperado del servidor |

Mantén los status codes coherentes. No devuelvas `200` si la operación falló.

## 8. ¿Qué es JSON?
JSON es un formato textual de intercambio de datos.

```json
{
  "id": 1,
  "content": "Learning Go",
  "published": false,
  "tags": ["go", "backend"]
}
```

JSON admite strings, números, booleanos, `null`, arrays y objetos. Las claves de objeto usan comillas dobles; no se permiten comentarios ni comas finales.

JSON no es un struct de Go. Un struct representa datos en el programa; JSON es la representación que podemos transmitir.

```text
Struct Go → codificar → JSON → HTTP
JSON recibido → decodificar → Struct Go
```

## 9. `encoding/json`

Go incluye:

```go
import "encoding/json"
```

### `json.Marshal`
Convierte un valor Go a bytes JSON:

```go
data, err := json.Marshal(post)
if err != nil {
    // manejar error
}
```

### `json.Unmarshal`
Decodifica bytes JSON hacia un valor Go:

```go
err := json.Unmarshal(data, &post)
if err != nil {
    // manejar error
}
```

`&post` proporciona el destino que la función va a modificar.

### `json.NewEncoder`
Escribe JSON directamente en un writer, útil en un handler:

```go
err := json.NewEncoder(w).Encode(post)
```

### `json.NewDecoder`
Lee JSON de un reader, útil para el body HTTP:

```go
err := json.NewDecoder(r.Body).Decode(&post)
if err != nil {
    // manejar error
}
```

## 10. Struct tags y campos exportados
Modelo:

```go
type Post struct {
    ID      int    `json:"id"`
    Content string `json:"content"`
}
```

El tag `json:"id"` hace que la representación use la clave `id`.

En Go, los campos que comienzan con mayúscula son exportados (`ID`, `Content`). Los campos que comienzan con minúscula no son exportados. `encoding/json` no serializa campos no exportados como campos públicos normales, por eso nuestros modelos de API utilizarán campos exportados y tags apropiados.

## 11. `net/http`
Go incluye un paquete estándar para servidores HTTP:

```go
import "net/http"
```

Podemos registrar una ruta y arrancar el servidor:

```go
http.HandleFunc("/hello", helloHandler)
http.ListenAndServe(":8080", nil)
```

`ListenAndServe` normalmente permanece ejecutándose mientras atiende solicitudes. Si devuelve un error, hay que manejarlo.

## 12. ¿Qué es un handler?
Un handler es el código que procesa una petición:

```go
func helloHandler(w http.ResponseWriter, r *http.Request) {
    // procesar petición
}
```

- `w http.ResponseWriter`: permite escribir headers, status y body.
- `r *http.Request`: contiene información de la petición.

Puedes consultar:

```go
r.Method
r.URL.Path
r.Header
r.Body
```

Para escribir respuesta:

```go
w.Header().Set("Content-Type", "application/json")
w.WriteHeader(http.StatusOK)
```

Configura los headers antes de escribir el status/body. El primer status escrito determina el código de respuesta.

## 13. Primer endpoint completo

```go
package main

import (
    "encoding/json"
    "log"
    "net/http"
)

type HelloResponse struct {
    Message string `json:"message"`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
        return
    }

    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusOK)

    response := HelloResponse{Message: "Hello from Go"}
    if err := json.NewEncoder(w).Encode(response); err != nil {
        log.Printf("encode response: %v", err)
    }
}

func main() {
    http.HandleFunc("/hello", helloHandler)
    log.Println("Server listening on http://localhost:8080")

    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}
```

### Qué ocurre
1. `HelloResponse` modela el JSON de salida.
2. `helloHandler` procesa solicitudes a `/hello`.
3. Solo se acepta `GET`.
4. Se establece `Content-Type`.
5. Se escribe `200 OK`.
6. El encoder escribe JSON en la respuesta.
7. `HandleFunc` registra la ruta.
8. `ListenAndServe` inicia el servidor.

Una vez enviados headers/status, no siempre puedes reemplazar la respuesta por otro código. Por eso los errores al escribir el body requieren cuidado.

## 14. Ejecutar y probar
En la carpeta con `go.mod` y `main.go`:

```bash
go run .
```

Deja esa terminal abierta. En otra:

```bash
curl -i http://localhost:8080/hello
```

`-i` muestra status y headers. Verás una respuesta similar a:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"message":"Hello from Go"}
```

También puedes abrir la URL en el navegador.

Prueba método incorrecto:

```bash
curl -i -X POST http://localhost:8080/hello
```

Debe responder `405 Method Not Allowed`.

## 15. ¿Qué significa REST?
REST es un estilo arquitectónico para diseñar APIs. Nos centraremos en recursos, representaciones y uso coherente de HTTP.

En vez de exponer solo acciones como `/getAllPosts` o `/createPost`, una API suele exponer recursos:

```text
/posts
/posts/12
```

y utilizar métodos para expresar la operación.

| Endpoint | Operación |
|---|---|
| `GET /posts` | Listar posts |
| `GET /posts/12` | Consultar un post |
| `POST /posts` | Crear un post |
| `PUT /posts/12` | Reemplazar un post |
| `PATCH /posts/12` | Modificar parte del post |
| `DELETE /posts/12` | Eliminar un post |

Una API REST bien diseñada usa recursos coherentes, métodos HTTP con semántica apropiada, status codes adecuados y respuestas consistentes. Devolver JSON por sí solo no hace que una API sea REST.

## 16. REST no es una base de datos
La API es una interfaz de comunicación. Los datos pueden venir de memoria, de una base de datos o de otro servicio.

Semana 6:

```text
React → HTTP → Go API → []Post en memoria
```

Semana 7:

```text
React → HTTP → Go API → PostgreSQL
```

La interfaz HTTP puede mantenerse parecida aunque cambie el almacenamiento.

## 17. Flujo completo

```text
React
  │ GET /posts
  ▼
Servidor HTTP Go
  ▼
Handler
  ▼
Lógica de la aplicación
  ▼
Colección de posts
  ▼
JSON + status code
  ▼
React
```

## 18. Errores comunes
- No establecer `Content-Type` correctamente.
- Asumir que todo devuelve `200`.
- Confundir JSON con un struct.
- Ignorar errores.
- No verificar el método HTTP.
- Pensar que una ruta define toda la operación.
- Confundir REST con la base de datos.
- Usar campos no exportados en modelos JSON.
- Ignorar el error de `ListenAndServe`.

## 19. Preguntas de comprensión
1. ¿Qué diferencia hay entre frontend y backend?
2. ¿Qué representan `localhost`, `8080` y `/hello`?
3. ¿Qué partes puede tener una request?
4. ¿Qué partes puede tener una response?
5. ¿Para qué sirve `Content-Type`?
6. ¿Qué diferencia hay entre `GET` y `POST`?
7. ¿Cuándo usarías `201`?
8. ¿Qué significa `404` y qué significa `500`?
9. ¿Qué diferencia hay entre un struct y JSON?
10. ¿Para qué sirven `Marshal` y `Unmarshal`?
11. ¿Para qué sirven `NewEncoder` y `NewDecoder`?
12. ¿Qué es un handler?
13. ¿Qué representa `ResponseWriter`?
14. ¿Qué representa `*http.Request`?
15. ¿Qué hace `HandleFunc`?
16. ¿Qué hace `ListenAndServe`?
17. ¿Qué es un endpoint?
18. ¿Qué significa diseñar una API REST?
19. ¿Por qué `GET /posts` y `POST /posts` son operaciones distintas?
20. ¿Qué cambia entre el almacenamiento en memoria y PostgreSQL?

## Qué aprendiste hoy
Ya puedes explicar la comunicación básica entre cliente y servidor, reconocer una request y una response, comprender JSON y entender cómo `net/http` permite construir un endpoint.

```text
Request → Handler → Datos → JSON + status → Response
```

## Qué viene mañana
**Día 4 — Construir la REST API de Git2Post**

Implementaremos `GET /posts`, `GET /posts/{id}`, `POST /posts`, `DELETE /posts/{id}` y una introducción a `PUT` y `PATCH`. Utilizaremos almacenamiento en memoria; PostgreSQL llega en la Semana 7.
