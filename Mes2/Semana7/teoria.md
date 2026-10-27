# Semana 7 — Día 1: PostgreSQL y fundamentos de bases de datos

## Objetivo
Entender qué problema resuelve una base de datos relacional, preparar PostgreSQL, conectarte a una base de datos y crear tus primeras tablas para Git2Post. Hoy nos enfocaremos en los fundamentos; todavía no conectaremos Go con PostgreSQL.

## Tiempo estimado
- **Lectura y comprensión:** 60–90 minutos.
- **Práctica:** 2–3 horas.
- **Total:** 3–4.5 horas.

Los tiempos son estimaciones realistas. Si nunca has trabajado directamente con SQL, es normal necesitar más tiempo para practicar.

## 1. ¿Qué es una base de datos?
Una base de datos es una forma organizada de almacenar y consultar información de manera persistente.

En la API de Git2Post de la Semana 6, los posts podían guardarse en un slice de Go. Eso sirve para aprender HTTP y CRUD, pero tiene limitaciones:
- Los datos desaparecen cuando el servidor se detiene.
- Todo vive en la memoria del proceso.
- No puedes consultar los datos con SQL.
- Las relaciones y restricciones deben gestionarse manualmente.

Una base de datos como PostgreSQL permite guardar los datos en almacenamiento persistente, consultarlos y establecer reglas para mantener su integridad.

Conceptos:
- **Base de datos:** contenedor lógico de información.
- **Tabla:** conjunto de registros de una misma entidad.
- **Fila o registro:** una instancia, como un post.
- **Columna:** una propiedad, como el título de un post.
- **Esquema:** espacio lógico que organiza objetos de la base de datos. PostgreSQL incluye `public` por defecto.
- **SQL:** lenguaje usado para definir, consultar y modificar datos.

## 2. ¿Qué es PostgreSQL?
PostgreSQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto. Usa SQL y ofrece tipos de datos, restricciones, transacciones, índices, claves foráneas y soporte para datos como JSON.

**PostgreSQL** es el sistema de base de datos; **SQL** es el lenguaje que utilizas para interactuar con él. Otros sistemas, como MySQL y SQLite, también usan SQL, con diferencias entre sus dialectos y capacidades.

## 3. Preparar PostgreSQL
Puedes usar una instalación local o un proveedor administrado. Para aprender, una instalación local suele ser suficiente. Docker se estudiará en la Semana 10, así que no es necesario incorporarlo hoy.

Herramientas habituales:
- **Servidor PostgreSQL:** administra las bases de datos.
- **`psql`:** cliente de terminal para ejecutar SQL.
- **pgAdmin:** interfaz gráfica opcional.

Comprueba que `psql` esté disponible:

```bash
psql --version
```

Ejemplo genérico de conexión:

```bash
psql -h localhost -p 5432 -U postgres -d postgres
```

Host, puerto, usuario y base de datos dependen de tu instalación. Si el comando no existe, revisa la instalación y si la carpeta de ejecutables está en el `PATH`. No publiques contraseñas ni las guardes en el repositorio.

## 4. Crear una base de datos para Git2Post
Conéctate con un usuario que tenga permisos y ejecuta:

```sql
CREATE DATABASE git2post;
```

Luego, desde `psql`, conéctate a ella:

```text
\c git2post
```

Comandos propios de `psql` (no son SQL estándar):
- `\l`: listar bases de datos.
- `\dt`: listar tablas.
- `\d posts`: describir la tabla `posts`.
- `\conninfo`: mostrar información de conexión.
- `\q`: salir.

Si la base ya existe, no la crees otra vez: conéctate a ella.

## 5. Tipos de datos básicos

| Tipo | Uso típico |
|---|---|
| `BIGINT` | Enteros grandes, por ejemplo identificadores |
| `INTEGER` | Enteros y contadores |
| `TEXT` | Texto de longitud variable |
| `VARCHAR(n)` | Texto con límite de longitud |
| `BOOLEAN` | Verdadero o falso |
| `DATE` | Fecha sin hora |
| `TIMESTAMPTZ` | Fecha y hora con zona horaria |
| `UUID` | Identificador universal |

No necesitas memorizar todos los tipos hoy; debes poder justificar por qué eliges uno para cada columna.

`TIMESTAMPTZ` suele ser una buena opción para representar instantes de tiempo. PostgreSQL normaliza el instante y lo muestra según la zona horaria de la sesión; no conserva necesariamente la zona original que escribió el usuario.

## 6. Crear una tabla
Una tabla define las columnas y las reglas que deben cumplir sus valores.

```sql
CREATE TABLE posts (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

- `CREATE TABLE posts`: crea la tabla.
- `IDENTITY`: genera automáticamente un identificador.
- `PRIMARY KEY`: identifica de forma única cada fila y no permite nulos.
- `NOT NULL`: la columna debe tener un valor.
- `DEFAULT 'draft'`: usa `draft` si no se proporciona `status`.
- `DEFAULT NOW()`: asigna la fecha y hora actual al insertar.

Restricciones:
- **`PRIMARY KEY`:** identidad única de una fila.
- **`NOT NULL`:** impide valores nulos.
- **`UNIQUE`:** evita duplicados.
- **`CHECK`:** exige que se cumpla una condición.
- **`DEFAULT`:** valor usado si no se especifica otro.
- **`FOREIGN KEY`:** exige que una referencia apunte a una fila válida de otra tabla; se estudiará en el Día 3.

Ejemplo:

```sql
ALTER TABLE posts
ADD CONSTRAINT posts_status_check
CHECK (status IN ('draft', 'published', 'archived'));
```

Esta regla limita `status` a esos tres valores.

## 7. Insertar y consultar datos

Insertar una fila:

```sql
INSERT INTO posts (title, content)
VALUES ('Mi primer post', 'Estoy aprendiendo a construir Git2Post.');
```

Como `status` y `created_at` tienen valores por defecto, no hace falta incluirlos.

Consultar:

```sql
SELECT id, title, content, status, created_at
FROM posts;
```

Filtrar:

```sql
SELECT id, title, status
FROM posts
WHERE status = 'draft';
```

Ordenar y limitar:

```sql
SELECT id, title, created_at
FROM posts
ORDER BY created_at DESC
LIMIT 10;
```

`ORDER BY ... DESC` muestra primero los registros más recientes; `LIMIT 10` devuelve como máximo diez filas. El Día 2 profundizará en CRUD, filtros, actualizaciones y eliminaciones.

## 8. ¿Qué significa persistencia?
Los datos insertados en PostgreSQL persisten después de cerrar el cliente o reiniciar la aplicación, siempre que la base y su almacenamiento sigan disponibles.

En cambio:

```go
var posts []Post
```

es un slice en memoria. Cuando termina el proceso, su contenido no se guarda automáticamente. Durante esta semana reemplazaremos ese almacenamiento por PostgreSQL.

## 9. Reglas de trabajo seguras
1. No guardes contraseñas reales en archivos `.go`, `.sql` o README.
2. No subas credenciales al repositorio.
3. En Go usaremos consultas parametrizadas, no concatenación de strings con datos del usuario.
4. Antes de ejecutar `UPDATE` o `DELETE`, comprueba el `WHERE` con un `SELECT`.
5. Practica en una base de desarrollo, no en una base con datos importantes.

## 10. Qué debes saber al terminar
Debes poder explicar:
- Qué diferencia hay entre PostgreSQL y SQL.
- Qué son una base de datos, tabla, fila y columna.
- Para qué sirven `PRIMARY KEY`, `NOT NULL`, `DEFAULT` y `CHECK`.
- Cómo crear una base y una tabla.
- Cómo insertar una fila y consultarla con `SELECT`.
- Cómo filtrar con `WHERE` y ordenar con `ORDER BY`.
- Por qué una base persistente es mejor que guardar posts solo en memoria.

## Vista previa de la semana
- **Día 1:** fundamentos de PostgreSQL, configuración, tablas, tipos y primeras consultas.
- **Día 2:** SQL CRUD, filtros, operadores, ordenamiento, actualización y eliminación.
- **Día 3:** diseño relacional, claves foráneas, relaciones uno-a-muchos y esquema de Git2Post.
- **Día 4:** conexión de Go con PostgreSQL, variables de entorno, consultas parametrizadas y manejo de errores.
- **Día 5:** integrar el CRUD de Git2Post con PostgreSQL, refactorizar, hacer pruebas manuales y documentar.

El objetivo al final de la semana es que los posts de tu API de Go se guarden en PostgreSQL y sigan existiendo después de reiniciar el servidor.
