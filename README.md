# Roadmap definitivo — Software Engineer Junior

## Objetivo

Llegar preparado para aplicar a posiciones **Junior Software Engineer / Full-Stack / Frontend** remotas, con fundamentos sólidos, proyectos reales, portfolio, preparación técnica y experiencia de deployment.

## Roadmap general

| Semana | Área | Objetivo |
|---|---|---|
| 1 | JavaScript Fundamentals | Dominar fundamentos de JavaScript |
| 2 | JavaScript Intermedio + APIs | Promises, async/await, fetch, HTTP y APIs |
| 3 | React Fundamentals + proyecto | Dominar fundamentos de React y construir un proyecto |
| 4 | React Intermedio + proyecto | Profundizar React y construir un proyecto completo |
| 5 | TypeScript + React Hooks | Types, interfaces, unions, functions, generics básicos + hooks |
| 6 | Node.js + Express | Crear una REST API funcional |
| 7 | SQL + PostgreSQL | Diseñar BD relacional y escribir queries |
| 8 | Backend + Authentication | Controllers, middleware, JWT/cookies y auth |
| 9 | Testing | Unit, integration, API testing y React Testing Library |
| 10 | Docker | Dockerfile, Compose y variables de entorno |
| 11 | AWS / Cloud | IAM, EC2, S3, RDS, VPC, CloudWatch, CloudFront, Route 53 |
| 12 | CI/CD + Software Engineering | GitHub Actions, security, refactoring y documentation |
| 13 | JS + React Interview Prep | Arrays, strings, hash maps y preguntas JS/React |
| 14 | Data Structures + Technical Questions | Two pointers, sliding window, stacks, queues |
| 15 | Algorithms + Job Search | Binary search, recursion, trees, mock interviews y applications |
| 16 | Consolidación profesional | Portfolio, CV, GitHub, entrevistas y aplicaciones |

---

# MES 1 — JAVASCRIPT + REACT + TYPESCRIPT

## Semana 1 — JavaScript Fundamentals

| Temario | Práctica | Resultado |
|---|---|---|
| Variables, tipos y operadores | Ejercicios | Fundamentos sólidos |
| Condicionales | Problemas con if/else/switch | Resolver lógica |
| Loops | for/while | Iterar correctamente |
| Functions | Parámetros, return, scope | Crear funciones |
| Arrays | Métodos y manipulación | Trabajar con colecciones |
| Objects | Propiedades y acceso | Manipular objetos |
| map/filter/reduce | Ejercicios combinados | Transformar datos |
| Debugging | Resolver bugs sin IA | Encontrar y explicar errores |

**Proyecto:** colección de ejercicios JavaScript.

## Semana 2 — JavaScript Intermedio + APIs

| Temario | Práctica | Resultado |
|---|---|---|
| Promises | Crear y encadenar Promises | Dominar asincronía |
| then/catch/finally | Promise chains | Controlar flujos async |
| async/await | Reescribir Promises | Código async legible |
| try/catch | Manejo de errores | Controlar fallos |
| HTTP | Requests, responses, status codes | Entender cliente-servidor |
| fetch | GET requests | Consumir APIs |
| JSON | Parsear y transformar | Trabajar con datos |
| POST | Headers y body | Enviar información |
| Promise.all | Requests paralelas | Optimizar operaciones |
| Debugging | Errores HTTP/network | Resolver sin depender de IA |

**Proyecto:** User Analytics API.

## Semana 3 — React Fundamentals + Proyecto

| Temario | Práctica | Resultado |
|---|---|---|
| React + Vite | Crear proyecto | Entender estructura |
| JSX | Renderizado | Escribir JSX |
| Components | Componentes reutilizables | Dividir UI |
| Props | Pasar datos | Componentes configurables |
| useState | Estado local | UI interactiva |
| Events | Click/input/submit | Manejar interacción |
| Conditional rendering | Estados visuales | Mostrar/ocultar UI |
| Lists + key | Arrays | Renderizar colecciones |
| Forms | Inputs controlados | Formularios |
| Lifting state up | Compartir estado | Flujo de datos |
| API + useEffect | Consumo de APIs | Datos reales |

**Proyecto:** aplicación React pequeña/mediana.

## Semana 4 — React Intermedio + Proyecto

| Temario | Práctica | Resultado |
|---|---|---|
| useEffect profundo | Dependencias y cleanup | Entender efectos |
| Composition | Arquitectura de componentes | Código mantenible |
| Custom Hooks | Extraer lógica | Reutilización |
| Context API | Estado compartido | Reducir prop drilling |
| React Router | Rutas | SPA multipágina |
| URL params | Rutas dinámicas | Páginas dinámicas |
| Loading/Error/Empty states | UX | UI profesional |
| API integration | CRUD | Frontend real |
| Performance basics | Renders | Código eficiente |
| Architecture | Organización | Proyecto mantenible |

**Proyecto:** SPA completa con routing y API.

## Semana 5 — TypeScript + React Hooks

| Temario | Práctica | Resultado |
|---|---|---|
| types | Variables y objetos | Tipado básico |
| interfaces | Modelar estructuras | Contratos de datos |
| unions | Valores posibles | Modelar estados |
| functions | Parámetros y returns | Funciones seguras |
| Arrays/objects | Datos estructurados | Tipado de API |
| Generics básicos | `<T>` | Reutilización |
| Type narrowing | Guards | Reducir tipos |
| TypeScript + React | Props tipadas | Componentes seguros |
| Hooks + TS | useState/useEffect/useContext | React tipado |
| API types | Interfaces para responses | Datos externos seguros |

**Proyecto:** aplicación React + TypeScript usando hooks.

---

# MES 2 — BACKEND + DATABASE

> La tabla original empieza el backend en la semana 5. Como el roadmap acordado reserva la semana 5 para TypeScript + React Hooks, el bloque backend comienza en la **semana 6**.

## Semana 6 — Node.js + npm + Express

| Temario | Práctica | Resultado |
|---|---|---|
| Node.js | Runtime y módulos | Entender backend JS |
| npm | package.json/scripts/dependencias | Gestionar proyecto |
| Express | Server | Crear servidor |
| Routing | GET/POST/PUT/DELETE | Endpoints |
| Middleware | Request/response pipeline | Entender middleware |
| HTTP | Status codes/headers | Respuestas correctas |
| REST | Recursos/endpoints | Diseñar API |

**Proyecto:** REST API funcional.

## Semana 7 — SQL + PostgreSQL

| Temario | Práctica | Resultado |
|---|---|---|
| PostgreSQL | Bases y tablas | Crear BD |
| SELECT | Consultas | Obtener datos |
| INSERT/UPDATE/DELETE | CRUD | Modificar datos |
| WHERE/ORDER BY | Filtrado | Queries útiles |
| JOIN | Relaciones | Combinar tablas |
| GROUP BY | Agregaciones | Analizar datos |
| Relationships | 1:1, 1:N, N:M | Diseñar BD |
| Constraints | PK/FK/UNIQUE/NOT NULL | Integridad |

**Proyecto:** BD relacional + queries.

## Semana 8 — Backend profesional + Authentication

| Temario | Práctica | Resultado |
|---|---|---|
| Controllers | Separar HTTP | Código organizado |
| Services | Lógica de negocio | Arquitectura limpia |
| Middleware | Auth/errores/validación | Backend mantenible |
| JWT | Tokens | Autenticación |
| Cookies | Credenciales | Manejo de sesión |
| Password hashing | Seguridad | Passwords protegidos |
| Authorization | Roles/permisos | Recursos protegidos |
| REST architecture | Estructura | Backend profesional |

**Proyecto:** React + Express + PostgreSQL + Auth.

**Resultado:** Full-stack funcionando.

---

# MES 3 — CLOUD + SOFTWARE ENGINEERING

## Semana 9 — Testing

| Temario | Práctica | Resultado |
|---|---|---|
| Unit testing | Tests de funciones | Validar lógica |
| Integration testing | Tests integrados | Validar integración |
| API testing | Endpoints | Probar backend |
| React Testing Library | Componentes | Probar frontend |
| Mocking | Dependencias | Aislar tests |
| Edge cases | Casos límite | Tests robustos |

**Proyecto:** testear backend y frontend.

## Semana 10 — Docker

| Temario | Práctica | Resultado |
|---|---|---|
| Containers | Conceptos | Entender Docker |
| Dockerfile | Crear imagen | Containerizar |
| Images | Build/tags | Gestionar imágenes |
| Ports | Exponer servicios | Conectar servicios |
| Environment variables | Configuración | Separar secretos |
| Docker Compose | Multi-container | Levantar stack |
| Volumes | Persistencia | Mantener datos |

**Proyecto:** dockerizar la aplicación.

## Semana 11 — AWS / Cloud

| Temario | Práctica | Resultado |
|---|---|---|
| IAM | Usuarios/roles/policies | Permisos |
| EC2 | Servidores | Deploy backend |
| S3 | Storage | Assets/archivos |
| RDS | PostgreSQL administrado | BD cloud |
| VPC | Networking | Infraestructura |
| CloudWatch | Logs/monitoring | Observabilidad |
| CloudFront | CDN | Distribución |
| Route 53 | DNS | Dominio |

**Proyecto:** desplegar partes de la aplicación.

**Resultado:** app funcionando en AWS.

## Semana 12 — CI/CD + Software Engineering

| Temario | Práctica | Resultado |
|---|---|---|
| GitHub Actions | Workflows | Automatización |
| CI | Tests automáticos | Validación |
| CD | Deploy automático | Releases |
| Security | Secrets/buenas prácticas | Seguridad |
| Refactoring | Mejorar código | Mantenibilidad |
| Documentation | README/API docs | Proyecto presentable |
| Branching | Branches/PRs | Flujo profesional |

**Proyecto:** pipeline automático + refactor + documentación.

---

# MES 4 — CONSEGUIR EL TRABAJO

## Semana 13 — JavaScript + React Interview Prep

| Temario | Práctica | Resultado |
|---|---|---|
| Arrays | Coding questions | Soltura |
| Strings | Problemas | Velocidad |
| Hash maps | Lookup/frequency maps | Reconocer patrón |
| JS fundamentals | Scope/closures/async | Responder teoría |
| React questions | Props/state/effects/hooks | Explicar React |
| Coding questions | Ejercicios cronometrados | Mejorar velocidad |

## Semana 14 — Data Structures + Technical Questions

| Temario | Práctica | Resultado |
|---|---|---|
| Two pointers | Problemas | Reconocer patrón |
| Sliding window | Arrays/strings | Resolver patrón |
| Stacks | Problemas | Dominar estructura |
| Queues | Problemas | Dominar estructura |
| Technical questions | Frontend/backend | Explicar decisiones |
| System thinking | Diseño básico | Pensar como engineer |

## Semana 15 — Algorithms + Job Search

| Temario | Práctica | Resultado |
|---|---|---|
| Binary search | Problemas | Dominar búsqueda |
| Recursion | Problemas | Entender recursion |
| Trees | Traversals básicos | Conocer árboles |
| Mock interviews | Simulaciones | Mejorar comunicación |
| CV | Adaptar ofertas | CV profesional |
| GitHub | Repos/README | Portfolio |
| LinkedIn | Perfil/networking | Presencia profesional |
| Applications | Aplicaciones | Pipeline de candidaturas |

## Semana 16 — Consolidación profesional

| Área | Trabajo | Resultado |
|---|---|---|
| Portfolio | Pulir proyectos | Portfolio sólido |
| GitHub | README/commits/repos | Perfil profesional |
| CV | ATS + versiones específicas | CV listo |
| LinkedIn | Perfil completo | Marca profesional |
| Interview prep | JS/React/TS/backend | Preparación técnica |
| Coding | LeetCode/problemas | Mejor resolución |
| Applications | Aplicaciones constantes | Pipeline activo |
| Project presentation | Explicar decisiones | Defender proyectos |

---

# Proyectos principales

| Etapa | Proyecto | Tecnologías |
|---|---|---|
| Semana 2 | User Analytics API | JavaScript + APIs |
| Semana 3 | React Fundamentals Project | React + JavaScript |
| Semana 4 | React Intermediate Project | React + APIs + Router |
| Semana 5 | TypeScript React App | React + TypeScript + Hooks |
| Semanas 6–8 | Full-stack App | React + Node + Express + PostgreSQL + Auth |
| Semanas 9–12 | Production-ready Full Stack | Testing + Docker + AWS + CI/CD |
| Semanas 13–16 | Portfolio + interview projects | JS + React + TS + Full Stack |

# Meta final

Al terminar el roadmap debes poder demostrar:

- JavaScript sólido
- React sólido
- TypeScript
- Node.js + Express
- REST APIs
- PostgreSQL + SQL
- Authentication
- Testing
- Docker
- AWS
- CI/CD
- Git/GitHub
- Data Structures & Algorithms básicos
- Proyectos reales desplegados
- Portfolio + CV + LinkedIn
- Capacidad de explicar y debuggear tu propio código

## Orden definitivo

```text
Semana 1  → JavaScript Fundamentals
Semana 2  → JavaScript Intermedio + APIs
Semana 3  → React Fundamentals + Proyecto
Semana 4  → React Intermedio + Proyecto
Semana 5  → TypeScript + React Hooks
Semana 6  → Node.js + Express
Semana 7  → SQL + PostgreSQL
Semana 8  → Backend + Auth
Semana 9  → Testing
Semana 10 → Docker
Semana 11 → AWS
Semana 12 → CI/CD + Software Engineering
Semana 13 → JS + React Interview Prep
Semana 14 → Data Structures + Technical Questions
Semana 15 → Algorithms + Applications
Semana 16 → Portfolio + Interviews + Job Search
```

> **Regla del roadmap:** primero entender → después construir → después depurar → finalmente usar IA como herramienta de productividad, no como sustituto del razonamiento.
