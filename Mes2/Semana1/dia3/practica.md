# Semana 6 — Día 3 — Práctica
# Primer servidor HTTP + JSON + REST

## Tiempo estimado
- Preparar proyecto y leer instrucciones: **15–25 minutos**.
- Ejercicios y construcción del endpoint: **2–3 horas**.
- Debugging y preguntas de comprensión: **30–60 minutos**.
- Total recomendado: **2,5–4 horas**.

Si todavía te cuestan los handlers, requests o pointers, reserva tiempo adicional. Estás conectando un lenguaje nuevo con conceptos de backend.

## Objetivo
Al terminar podrás ejecutar un servidor Go local, crear handlers, responder JSON, controlar status codes, probar endpoints y explicar los fundamentos de REST.

## 1. Crear el proyecto

```bash
mkdir day3-http
cd day3-http
go mod init day3-http
go version
```

Crea `main.go`.

## 2. Primer servidor
Escribe un programa mínimo que:
1. use `package main`;
2. importe `net/http`;
3. registre `/hello`;
4. escuche en `:8080`;
5. responda inicialmente texto plano.

Pistas:

```go
http.HandleFunc(...)
http.ListenAndServe(...)
fmt.Fprintln(w, "Hello from Go")
```

Recuerda importar `fmt`.

Ejecuta `go run .`. En otra terminal:

```bash
curl -i http://localhost:8080/hello
```

Comprueba el status y el body.

## 3. Comprender el handler
Dentro del handler, imprime:

```go
r.Method
r.URL.Path
```

Prueba:

```bash
curl -i http://localhost:8080/hello
curl -i -X POST http://localhost:8080/hello
```

Explica quiénes son `r` y `w`, y por qué el método cambia aunque la ruta sea la misma.

## 4. Controlar el método
Acepta solamente `GET`. Para los demás métodos, devuelve `405`:

```go
http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
```

Después de escribir el error, utiliza `return`.

Prueba de nuevo con `curl`.

## 5. Respuesta JSON
Define:

```go
type HelloResponse struct {
    Message string `json:"message"`
}
```

En el handler:
1. establece `Content-Type: application/json`;
2. escribe `200 OK`;
3. construye `HelloResponse`;
4. utiliza `json.NewEncoder(w).Encode(...)`.

Respuesta esperada:

```json
{
  "message": "Hello from Go"
}
```

Intenta construirlo paso a paso sin copiar todo el ejemplo de la teoría.

## 6. Probar status y headers
Ejecuta:

```bash
curl -i http://localhost:8080/hello
```

Identifica status, `Content-Type` y body. Cambia temporalmente el status a `http.StatusCreated`, observa y vuelve a `http.StatusOK`.

Explica por qué `201 Created` no corresponde a un endpoint de saludo.

## 7. Segundo endpoint
Añade `GET /health`, que devuelva:

```json
{
  "status": "ok"
}
```

Prueba:

```bash
curl -i http://localhost:8080/health
```

## 8. Reto: respuesta dinámica
Crea `GET /greet`, que lea el query parameter:

```text
/greet?name=Zenen
```

Respuesta:

```json
{
  "message": "Hello, Zenen"
}
```

Pista:

```go
r.URL.Query().Get("name")
```

Si falta el nombre, usa `"developer"` como valor por defecto.

Prueba ambas variantes con `curl`.

## 9. `Marshal` y `Unmarshal`
Crea un ejercicio separado o una función temporal que:
1. construya un struct;
2. lo convierta a JSON con `json.Marshal`;
3. imprima `string(data)`;
4. decodifique esos bytes con `json.Unmarshal` en otro struct;
5. compruebe que los valores coinciden.

Modelo:

```go
type Message struct {
    Text string `json:"text"`
}
```

No hace falta añadir este ejercicio al servidor.

## 10. Reto: recibir JSON
Crea `POST /echo` que:
1. acepte solamente `POST`;
2. decodifique JSON del body;
3. devuelva el mismo objeto como JSON;
4. responda `400 Bad Request` si el JSON es inválido.

Pistas:

```go
json.NewDecoder(r.Body).Decode(&input)
json.NewEncoder(w).Encode(input)
```

Modelo:

```go
type EchoRequest struct {
    Message string `json:"message"`
}
```

Prueba una petición válida:

```bash
curl -i -X POST http://localhost:8080/echo   -H "Content-Type: application/json"   -d '{"message":"Learning Go"}'
```

Prueba una inválida:

```bash
curl -i -X POST http://localhost:8080/echo   -H "Content-Type: application/json"   -d '{"message":'
```

La entrada inválida debe producir `400`, no un `500`.

## 11. Reconocer métodos REST
Sin programar todos los endpoints, explica el propósito de:

```text
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```

Para cada uno, responde:
- ¿qué intenta hacer el cliente?
- ¿esperarías un body de request?
- ¿qué status code tendría sentido si funciona?

Justifica tus elecciones; algunas respuestas dependen del diseño de la API.

## 12. Reto: errores JSON consistentes
Define:

```go
type ErrorResponse struct {
    Error string `json:"error"`
}
```

Crea una función auxiliar conceptualmente llamada:

```text
writeJSONError(w, status, message)
```

Debe establecer `Content-Type`, escribir el status recibido y devolver un body como:

```json
{"error":"Post not found"}
```

Pruébala con `400`, `404` y `405`.

## 13. Debugging intencional
Prueba y corrige:
- olvidar `Content-Type`;
- omitir el `return` tras una respuesta de error;
- enviar `POST` a una ruta que solo admite `GET`;
- enviar JSON mal formado;
- solicitar una ruta inexistente;
- ignorar el error de `ListenAndServe`.

Para cada caso, anota qué esperabas, qué ocurrió, cómo encontraste la causa y qué corregiste.

## 14. Preguntas de comprensión
1. ¿Qué hace un servidor HTTP?
2. ¿Qué significa `localhost:8080`?
3. ¿Qué es un handler?
4. ¿Qué contiene `*http.Request`?
5. ¿Para qué sirve `http.ResponseWriter`?
6. ¿Qué hacen `http.HandleFunc` y `http.ListenAndServe`?
7. ¿Qué diferencia hay entre `200` y `201`?
8. ¿Qué significa `405`?
9. ¿Qué diferencia hay entre `json.Marshal` y `json.NewEncoder`?
10. ¿Por qué `Decode(&input)` utiliza un pointer?
11. ¿Qué es un endpoint?
12. ¿Por qué `GET /posts` y `POST /posts` pueden compartir ruta y ser operaciones diferentes?
13. ¿Qué diferencia hay entre devolver JSON y diseñar una API con convenciones REST?

## Definition of Done
- [ ] Puedo iniciar el servidor con `go run .`.
- [ ] Entiendo request y response.
- [ ] Puedo crear un handler.
- [ ] Puedo consultar método y ruta.
- [ ] Puedo controlar métodos HTTP permitidos.
- [ ] Puedo devolver status codes.
- [ ] Puedo configurar `Content-Type`.
- [ ] Puedo responder JSON.
- [ ] Entiendo el uso básico de `Marshal` y `Unmarshal`.
- [ ] Puedo leer JSON del body.
- [ ] Puedo probar endpoints con `curl`.
- [ ] Entiendo convenciones básicas de REST.
- [ ] Mi servidor responde en `/hello` y `/health`.
- [ ] Puedo explicar el recorrido request → handler → response.

## Qué aprendiste hoy
```text
Cliente → HTTP request → Handler Go → JSON + status → HTTP response
```

## Qué sigue mañana
**Día 4 — REST API de Git2Post:** `GET /posts`, `GET /posts/{id}`, `POST /posts`, `DELETE /posts/{id}` e introducción a `PUT` y `PATCH`. Seguiremos con almacenamiento en memoria; PostgreSQL llega en la Semana 7.
