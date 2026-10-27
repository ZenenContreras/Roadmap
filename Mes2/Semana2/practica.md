# Semana 7 — Día 1: Práctica de PostgreSQL

## Objetivo
Preparar PostgreSQL y crear una primera tabla para Git2Post. Al terminar podrás conectarte a la base de datos, insertar posts y consultarlos con SQL.

## Tiempo estimado
- **Lectura de instrucciones:** 15–25 minutos.
- **Práctica:** 2–3 horas.
- **Total:** 2.5–3.5 horas.

No avances deprisa solo para terminar. Intenta explicar qué hace cada sentencia antes de ejecutarla.

## Parte 1 — Verificar el entorno
1. Comprueba si PostgreSQL está instalado.
2. Comprueba que puedes ejecutar `psql --version`.
3. Abre `psql` o pgAdmin.
4. Conéctate a una base existente.
5. Identifica host, puerto y usuario de tu conexión.

Si aún no tienes PostgreSQL instalado, instala una versión estable compatible con tu sistema operativo. No necesitas Docker para esta práctica.

**Criterio de éxito:** puedes conectarte al servidor sin errores.

## Parte 2 — Crear la base de datos
Si no existe todavía:

```sql
CREATE DATABASE git2post;
```

Conéctate desde `psql`:

```text
\c git2post
```

Comprueba la conexión:

```text
\conninfo
```

Si la base ya existe, no ejecutes otra vez el `CREATE DATABASE`; simplemente conéctate.

## Parte 3 — Crear la tabla `posts`
Ejecuta:

```sql
CREATE TABLE posts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT posts_status_check
        CHECK (status IN ('draft', 'published', 'archived'))
);
```

Inspecciona la tabla con `psql`:

```text
\d posts
```

Responde en tus palabras:
1. ¿Por qué `id` es una clave primaria?
2. ¿Qué pasa si insertas una fila sin `title`?
3. ¿Qué valor recibe `status` si no lo especificas?
4. ¿Qué sucede si intentas usar `status = 'deleted'`?
5. ¿Por qué `created_at` tiene un valor por defecto?

## Parte 4 — Insertar datos de prueba
Inserta al menos cuatro posts con diferentes estados:

```sql
INSERT INTO posts (title, content, status)
VALUES
    ('Aprendiendo Go', 'Hoy practiqué structs y slices.', 'draft'),
    ('Mi primera API', 'Construí endpoints REST con net/http.', 'published'),
    ('Aprendiendo SQL', 'Estoy preparando la base de datos de Git2Post.', 'draft'),
    ('Proyecto semanal', 'El objetivo es conectar Go con PostgreSQL.', 'archived');
```

No incluyas `id` ni `created_at`: PostgreSQL debe generarlos automáticamente.

Consulta los registros:

```sql
SELECT id, title, content, status, created_at
FROM posts;
```

**Criterio de éxito:** aparecen cuatro filas con identificadores y fechas generados por PostgreSQL.

## Parte 5 — Consultas básicas
Escribe y ejecuta cada consulta por tu cuenta:

- **Ejercicio A:** muestra solamente el título y el estado de todos los posts.
- **Ejercicio B:** muestra los posts cuyo estado sea `draft`.
- **Ejercicio C:** muestra todos los posts desde el más reciente hasta el más antiguo.
- **Ejercicio D:** muestra como máximo dos posts.
- **Ejercicio E:** muestra los títulos de los posts `published`, ordenados por fecha de creación descendente.

Intenta resolverlos antes de consultar las pistas del final.

## Parte 6 — Comprobar restricciones
Prueba cada operación por separado. Si falla, lee el error y explica por qué.

### Prueba A: título nulo

```sql
INSERT INTO posts (title, content)
VALUES (NULL, 'Contenido de prueba');
```

Debe fallar por `NOT NULL`.

### Prueba B: estado inválido

```sql
INSERT INTO posts (title, content, status)
VALUES ('Estado inválido', 'Este registro no debería guardarse.', 'deleted');
```

Debe fallar por la restricción `CHECK`.

### Prueba C: valor por defecto

```sql
INSERT INTO posts (title, content)
VALUES ('Valores por defecto', 'No especifiqué status ni created_at.')
RETURNING id, status, created_at;
```

Debe mostrar el `status` por defecto y una fecha de creación.

## Parte 7 — Documentar el trabajo
En el repositorio Git2Post, crea una nota, por ejemplo `docs/week-07-day-01.md`. Incluye:
- Cómo instalaste o preparaste PostgreSQL.
- Cómo te conectaste.
- El esquema de `posts`.
- Dos consultas SQL que te resultaron útiles.
- Un error que encontraste y cómo lo resolviste.
- Por qué una base persistente es mejor que guardar los posts solo en memoria.

No incluyas contraseñas, tokens ni cadenas de conexión con credenciales.

## Pistas para las consultas
Intenta resolverlas primero sin mirar.

**A — Seleccionar columnas**
```sql
SELECT title, status FROM posts;
```

**B — Filtrar**
```sql
SELECT id, title, status FROM posts WHERE status = 'draft';
```

**C — Ordenar**
```sql
SELECT id, title, created_at FROM posts ORDER BY created_at DESC;
```

**D — Limitar**
```sql
SELECT id, title FROM posts LIMIT 2;
```

**E — Combinar**
```sql
SELECT title
FROM posts
WHERE status = 'published'
ORDER BY created_at DESC;
```

## Checklist final
- [ ] Puedo conectarme a PostgreSQL.
- [ ] Creé o accedí a la base `git2post`.
- [ ] Creé la tabla `posts`.
- [ ] Inserté al menos cuatro registros.
- [ ] Consulté, filtré, ordené y limité resultados.
- [ ] Verifiqué `NOT NULL`, `DEFAULT` y `CHECK`.
- [ ] Documenté lo que hice sin publicar credenciales.
- [ ] Puedo explicar cada sentencia SQL utilizada.

## Preguntas de autoevaluación
1. ¿Cuál es la diferencia entre una tabla y una base de datos?
2. ¿Qué garantiza una clave primaria?
3. ¿Cuál es la diferencia entre `NOT NULL` y `CHECK`?
4. ¿Qué hacen `WHERE`, `ORDER BY` y `LIMIT`?
5. ¿Qué significa que los datos sean persistentes?
6. ¿Por qué no conectaremos Go con PostgreSQL todavía?

**Siguiente paso:** en el Día 2 aprenderás operaciones SQL CRUD, filtros y operadores, actualizaciones y eliminaciones.
