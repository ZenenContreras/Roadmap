# Semana 6 — Día 5 — Práctica
## Consolidar, refactorizar y evaluar Git2Post API

### Tiempo estimado
- Leer instrucciones y preparar: **15–25 min**.
- Repaso y refactorización: **60–100 min**.
- Build, pruebas manuales y README: **45–75 min**.
- Evaluación final: **45–60 min**.
- Total recomendado: **3,5–5 horas**.

## Objetivo
Dejar la API en un estado que puedas explicar y ejecutar, revisar su calidad básica y prepararte para PostgreSQL en la Semana 7.

## 1. Revisa el proyecto
Desde la raíz, confirma que puedes explicar:
- dónde se define `Post`;
- dónde se registran las rutas;
- qué hace cada handler;
- dónde está la lógica de negocio;
- dónde se guardan los posts;
- por qué se pierden al reiniciar.

Si todo está en `main.go`, refactoriza gradualmente. No cambies demasiadas cosas a la vez.

## 2. Prueba los endpoints
Arranca el servidor y prueba con `curl` o Postman:
- listar posts;
- consultar un ID existente;
- consultar uno inexistente;
- crear un post;
- enviar JSON inválido;
- enviar contenido vacío;
- eliminar un post;
- usar un método incorrecto.

Registra los errores y corrígelos.

## 3. Refactorización breve
Revisa el código:
- elimina duplicación evidente;
- utiliza nombres descriptivos;
- separa HTTP de la lógica si aporta claridad;
- centraliza errores JSON si repites código;
- comprueba status codes;
- no escribas body después de `204`;
- evita abstracciones innecesarias.

## 4. Formato y build

Desde la raíz:

```bash
gofmt -w .
go build ./...
```

Corrige errores y, si usas Git, revisa el diff.

## 5. Prueba unitaria de calentamiento
Crea una función sencilla y pura, por ejemplo `add`, y una prueba en un archivo `*_test.go` con el paquete `testing`. Ejecuta:

```bash
go test ./...
```

Esto es solo una introducción; no necesitas construir una suite HTTP completa hoy. La Semana 9 cubrirá testing en profundidad.

## 6. Escribe el README
Incluye:
- qué hace Git2Post API;
- requisitos y versión de Go;
- cómo ejecutar `go run .`;
- endpoints y métodos;
- ejemplos de `curl`;
- códigos de respuesta;
- limitaciones: almacenamiento en memoria, pérdida de datos al reiniciar y ausencia de autenticación/PostgreSQL.

Verifica que las instrucciones coinciden con el código real.

## 7. Revisión básica de seguridad
- [ ] No hay tokens, claves ni contraseñas en el repositorio.
- [ ] Los errores no revelan detalles internos innecesarios.
- [ ] Se valida el JSON.
- [ ] Se comprueban métodos y rutas.
- [ ] Las limitaciones están documentadas.

## 8. Evaluación final — sin consultar la teoría
1. ¿Qué diferencia hay entre slice y map?
2. ¿Qué es un struct y para qué sirven los JSON tags?
3. ¿Qué representa `&input`?
4. ¿Qué hace un handler?
5. ¿Qué hace un service?
6. ¿Cuándo devolverías `201 Created`?
7. ¿Por qué `204 No Content` no lleva body?
8. ¿Cuándo usarías `400` y cuándo `404`?
9. ¿Qué diferencia hay entre `PUT` y `PATCH`?
10. ¿Qué hace `gofmt -w .`?
11. ¿Qué verifica `go build ./...`?
12. ¿Qué hace `go test ./...`?
13. ¿Por qué se pierden los posts al reiniciar?
14. ¿Qué cambiará cuando conectemos PostgreSQL?

## 9. Reto final
Sin copiar una solución previa, añade una mejora pequeña:
- endpoint `GET /health`;
- validación contra contenido compuesto solo por espacios;
- mensaje de error más claro para ID inválido;
- un ejemplo adicional de `curl` en el README;
- o `PUT` si todavía no lo implementaste.

Prueba la mejora y explica por qué funciona.

## Definition of Done
- [ ] Puedo explicar el flujo request → handler → service/datos → response.
- [ ] Los endpoints implementados funcionan.
- [ ] Probé casos exitosos y errores.
- [ ] Ejecuté `gofmt -w .`.
- [ ] `go build ./...` termina correctamente.
- [ ] Ejecuté `go test ./...`.
- [ ] El README permite ejecutar y probar el proyecto.
- [ ] Documenté que el almacenamiento es temporal.
- [ ] Puedo responder la evaluación sin consultar la teoría.

## Cierre de Semana 6
La meta es poder decir con honestidad: **“Sé Go básico, entiendo cómo funciona un servidor HTTP y puedo construir una REST API CRUD desde cero con almacenamiento temporal.”**

## Qué sigue: Semana 7 — PostgreSQL + Go
Conectaremos esta API a una base de datos relacional para que los posts persistan tras reiniciar el servidor. Aprenderás SQL, tablas, claves, consultas CRUD, conexión desde Go y configuración mediante variables de entorno.
