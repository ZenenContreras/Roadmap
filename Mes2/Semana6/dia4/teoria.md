# Semana 6 — Día 4 — Teoría
## Construir una REST API en Go

### Tiempo estimado
- Lectura inicial: 45–60 min.
- Comprensión y ejemplos: 90–120 min.
- Práctica: 3–4,5 horas.
- Total recomendado: 4,5–6,5 horas.

## Objetivo
Construir una API de Git2Post que gestione posts en memoria. Implementar listado, consulta por ID, creación y eliminación, y entender `PUT` y `PATCH`. PostgreSQL se verá en la Semana 7.

## 1. Endpoints y CRUD

CRUD significa Create, Read, Update y Delete.

| Método | Ruta | Resultado habitual |
|---|---|---|
| GET | `/posts` | `200 OK`, lista JSON |
| GET | `/posts/{id}` | `200 OK` o `404` |
| POST | `/posts` | `201 Created` |
| PUT | `/posts/{id}` | Reemplaza el post |
| PATCH | `/posts/{id}` | Actualiza parcialmente |
| DELETE | `/posts/{id}` | `204 No Content` o `404` |

## 2. Modelo

```go
type Post struct {
    ID      int    `json:"id"`
    Content string `json:"content"`
}
```

Los campos exportados empiezan en mayúscula para que paquetes externos y `encoding/json` puedan trabajar con ellos. Los tags definen las claves JSON.

## 3. Almacenamiento en memoria

Para practicar podemos usar una slice:

```go
posts := []Post{
    {ID: 1, Content: "Learning Go"},
}
```

Es suficiente para aprender, pero los datos desaparecen cuando el proceso termina. Tampoco es una base de datos ni ofrece persistencia. PostgreSQL llegará en la Semana 7.

## 4. Organización del proyecto

```text
git2post-api/
├── go.mod
├── main.go
├── models/post.go
├── handlers/posts.go
└── services/posts.go
```

- `models`: estructuras de datos.
- `handlers`: HTTP, validación de request, status y JSON.
- `services`: lógica de negocio.
- `main.go`: configuración y arranque.

Puedes empezar en `main.go` y separar responsabilidades cuando funcione. Evita crear capas sin necesidad.

## 5. Handler vs. service

El handler lee la petición, valida su forma, llama a la lógica y convierte el resultado en una respuesta HTTP. El service aplica reglas de negocio y trabaja con los datos.

```text
HTTP request → Handler → Service → Datos
             ← JSON + status code ←
```

## 6. Obtener un ID de la ruta

En Go moderno puedes registrar patrones de `ServeMux`:

```go
mux.HandleFunc("GET /posts/{id}", getPostHandler)
idText := r.PathValue("id")
```

Comprueba tu versión con `go version`. Si no admite esa sintaxis, analiza el path manualmente.

Convierte el ID, que llega como texto:

```go
id, err := strconv.Atoi(idText)
if err != nil || id <= 0 {
    // responder 400 Bad Request
    return
}
```

Un ID no válido suele ser `400`; un ID válido pero inexistente suele ser `404`.

## 7. GET /posts

El handler debe aceptar `GET`, devolver la lista como JSON y responder `200 OK`.

```go
w.Header().Set("Content-Type", "application/json")
w.WriteHeader(http.StatusOK)
json.NewEncoder(w).Encode(posts)
```

Si no hay elementos, prefiere una slice vacía que produzca `[]`, en lugar de un `null` accidental.

## 8. GET /posts/{id}

Pasos:
1. Extraer y convertir el ID.
2. Validarlo.
3. Buscar el post.
4. Responder `200` con el post si existe.
5. Responder `404` si no existe.

## 9. POST /posts

Body de ejemplo:

```json
{"content":"My first Git2Post draft"}
```

El handler debe aceptar `POST`, decodificar el JSON, devolver `400` si es inválido, rechazar contenido vacío, asignar un ID, guardar el post y devolver `201 Created` con el recurso creado.

Para validar contenido vacío puedes usar `strings.TrimSpace`. La API asigna el ID; el cliente no debería poder elegir uno arbitrario.

## 10. DELETE /posts/{id}

Valida el ID, busca el recurso, responde `404` si no existe, elimina el elemento y devuelve `204 No Content`. Un `204` no debe incluir body.

Para quitar un elemento de una slice, si `index` es válido:

```go
posts = append(posts[:index], posts[index+1:]...)
```

## 11. PUT vs. PATCH

- `PUT` normalmente reemplaza la representación completa.
- `PATCH` modifica parte del recurso.

Ejemplos:

```json
{"content":"Completely revised content"}
```

Con un modelo de un solo campo pueden parecer iguales. Cuando hay más campos, `PATCH` puede enviar solo los que cambian. Para distinguir un campo omitido de uno enviado vacío o `null`, un `string` simple no siempre basta. Documenta la regla que adoptes.

## 12. Errores coherentes

```go
type ErrorResponse struct {
    Error string `json:"error"`
}
```

Usa un formato como `{"error":"Post not found"}`. Una función auxiliar `writeJSONError` puede establecer `Content-Type`, status y body. No expongas detalles internos sensibles en errores de producción.

## 13. Validación y autenticación

Valida JSON, contenido, ID y existencia del recurso antes de actualizar o borrar. Validación no es autenticación: la autenticación y autorización se estudiarán en la Semana 8.

## 14. Pruebas con curl

```bash
curl -i http://localhost:8080/posts
curl -i http://localhost:8080/posts/1
curl -i -X POST http://localhost:8080/posts \
  -H "Content-Type: application/json" \
  -d '{"content":"My first post"}'
curl -i -X DELETE http://localhost:8080/posts/1
```

Prueba también IDs inválidos, recursos inexistentes, JSON mal formado, contenido vacío y métodos incorrectos.

## 15. Concurrencia

Un servidor HTTP puede atender peticiones simultáneamente. Una slice global modificada por varios handlers sin sincronización puede causar data races o errores lógicos. Mantén el estado encapsulado y considera `sync.Mutex` si varios handlers comparten datos mutables. No mantengas un lock mientras escribes la respuesta si puedes copiar los datos y liberarlo antes.

## Definition of Done
- [ ] `GET /posts` devuelve una lista JSON.
- [ ] `GET /posts/{id}` devuelve el post o `404`.
- [ ] `POST /posts` valida y crea.
- [ ] `DELETE /posts/{id}` elimina o devuelve `404`.
- [ ] Los errores son coherentes.
- [ ] Sé explicar handler vs. service.
- [ ] Entiendo que los datos se pierden al reiniciar.
- [ ] Puedo probar la API con `curl` o Postman.
- [ ] Puedo explicar `PUT` vs. `PATCH`.

## Preguntas
1. ¿Qué significa CRUD?
2. ¿Qué diferencia hay entre ID inválido e inexistente?
3. ¿Por qué crear suele responder `201`?
4. ¿Por qué `204` no debería tener body?
5. ¿Qué hace el handler y qué hace el service?
6. ¿Qué ocurre con los datos al reiniciar?
7. ¿Por qué importa la concurrencia al compartir una slice?

## Mañana
Día 5 consolidará Go y la API: refactorización, `gofmt`, `go build`, introducción a `go test`, README y evaluación final. Sin PostgreSQL todavía.
