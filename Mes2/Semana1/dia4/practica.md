# Semana 6 — Día 4 — Práctica
## Git2Post REST API con Go

### Tiempo estimado
- Preparación y lectura: 20–30 min.
- Implementación principal: 2,5–3,5 h.
- Pruebas y debugging: 30–60 min.
- Total recomendado: 3–4,5 horas.

## Resultado esperado
Una API con almacenamiento temporal que implemente `GET /posts`, `GET /posts/{id}`, `POST /posts` y `DELETE /posts/{id}`. También explicarás `PUT` y `PATCH`.

## 1. Crear proyecto

```bash
mkdir git2post-api
cd git2post-api
go mod init git2post-api
mkdir models handlers services
```

Estructura sugerida:

```text
git2post-api/
├── go.mod
├── main.go
├── models/post.go
├── handlers/posts.go
└── services/posts.go
```

Puedes comenzar en `main.go` para validar el servidor y separar los archivos después.

## 2. Crear el modelo
En `models/post.go` define:

```go
package models

type Post struct {
    ID      int    `json:"id"`
    Content string `json:"content"`
}
```

Comprueba que entiendes los campos exportados y los JSON tags.

## 3. Datos iniciales
Crea una slice inicial con al menos dos posts. Decide dónde se mantendrá para que todos los handlers usen el mismo estado.

Recuerda: los datos desaparecerán al detener el programa. No uses PostgreSQL hoy.

## 4. Implementar GET /posts
Requisitos:
- aceptar `GET`;
- devolver todos los posts en JSON;
- responder `200 OK`;
- devolver `[]` si no hay posts, no un `null` accidental.

Prueba:

```bash
curl -i http://localhost:8080/posts
```

## 5. Implementar GET /posts/{id}
Requisitos:
- extraer el ID;
- convertirlo a entero;
- devolver `400` si no es válido;
- devolver `200` y el post si existe;
- devolver `404` si no existe.

En versiones modernas puedes usar `r.PathValue("id")` con patrones de `ServeMux`; confirma tu versión con `go version`. Si no está disponible, analiza el path manualmente.

Prueba:

```bash
curl -i http://localhost:8080/posts/1
curl -i http://localhost:8080/posts/999
curl -i http://localhost:8080/posts/abc
```

## 6. Implementar POST /posts
Recibe:

```json
{"content":"My first Git2Post draft"}
```

Requisitos:
- solo aceptar `POST`;
- decodificar JSON;
- responder `400` ante JSON inválido;
- rechazar contenido vacío o de solo espacios;
- asignar un ID;
- guardar el post;
- devolver `201 Created` y el post creado.

Prueba:

```bash
curl -i -X POST http://localhost:8080/posts \
  -H "Content-Type: application/json" \
  -d '{"content":"My first Git2Post draft"}'
```

Prueba también JSON mal formado y contenido vacío.

## 7. Implementar DELETE /posts/{id}
Requisitos:
- validar ID;
- buscar el post;
- responder `404` si no existe;
- eliminarlo;
- devolver `204 No Content` sin body.

Prueba:

```bash
curl -i -X DELETE http://localhost:8080/posts/1
curl -i -X DELETE http://localhost:8080/posts/999
```

Lista de nuevo los posts para verificar el cambio.

## 8. Diseñar PUT y PATCH
Documenta el comportamiento esperado:
- `PUT /posts/{id}` reemplaza la representación completa.
- `PATCH /posts/{id}` modifica campos seleccionados.

Si terminaste los endpoints anteriores, implementa al menos uno. Si implementas `PATCH`, define cómo distinguir un campo omitido de uno enviado vacío.

## 9. Errores JSON
Define `ErrorResponse` con un campo `Error` y el tag `json:"error"`. Crea una función auxiliar que escriba errores JSON y reutilízala para `400`, `404` y `405`.

## 10. Prueba completa
- [ ] Listar posts.
- [ ] Consultar un post existente.
- [ ] Consultar un ID inexistente.
- [ ] Consultar un ID no numérico.
- [ ] Crear un post válido.
- [ ] Crear un post con JSON inválido.
- [ ] Crear un post vacío.
- [ ] Eliminar un post existente.
- [ ] Eliminar un post inexistente.
- [ ] Probar un método incorrecto.
- [ ] Confirmar que `204` no incluye body.

## 11. Debugging
Anota tres errores reales:
1. síntoma;
2. causa;
3. solución;
4. aprendizaje.

Si varios handlers modifican una slice global, considera la concurrencia. El servidor puede atender peticiones simultáneamente; puedes proteger el estado con `sync.Mutex` o encapsular el almacenamiento.

## Definition of Done
- [ ] `GET /posts` funciona.
- [ ] `GET /posts/{id}` funciona y maneja `404`.
- [ ] `POST /posts` valida y crea.
- [ ] `DELETE /posts/{id}` elimina y maneja `404`.
- [ ] Los status codes son coherentes.
- [ ] Los errores tienen un formato consistente.
- [ ] Puedo probar todo con `curl` o Postman.
- [ ] Sé explicar handler vs. service.
- [ ] Entiendo la limitación del almacenamiento en memoria.
- [ ] Puedo explicar `PUT` vs. `PATCH`.

## Mañana
Día 5 será de consolidación y evaluación: refactorizar la API, revisar fundamentos de Go, organizar handlers/services/models, usar `gofmt`, ejecutar `go build`, conocer `go test`, escribir un README y resolver una evaluación final. PostgreSQL corresponde a la Semana 7.
