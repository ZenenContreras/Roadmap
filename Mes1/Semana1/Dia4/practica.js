/*
============================================================
DÍA 4 — PRÁCTICA
OBJECTS
============================================================

REGLAS:

1. Intenta resolver cada ejercicio SIN IA.
2. Primero escribe tu solución.
3. Ejecuta.
4. Compara con RESULTADO ESPERADO.
5. Si falla, intenta entender POR QUÉ.

No copies la solución.
Solo utiliza el resultado para comprobarte.
============================================================
*/


// ============================================================
// EJERCICIO 1 — CREAR OBJETO
// ============================================================

/*
Crea un objeto:

developer

con:

name
age
country
role
skills

skills debe ser un array.
*/


// TU CÓDIGO:

const developer = {  
    name: "Zenen",
    age: 24,
    country: "Colombia",
    role: "Software Engineer",
    skills: ['Javascript', 'React', 'Nodejs', 'Typescript']
}

console.log('EJERCICIO 1: ', developer)

// RESULTADO ESPERADO:

/*
{
    name: "Zenen",
    age: 24,
    country: "Colombia",
    role: "Software Engineer",
    skills: [...]
}
*/


// ============================================================
// EJERCICIO 2 — ACCESO
// ============================================================

/*
Usando el objeto anterior:

imprime:

name
country
role
*/

console.log('EJERCICIO 2: ', developer.name , developer.country, developer.role)

// TU CÓDIGO:


// RESULTADO ESPERADO:

/*
Zenen
Colombia
Software Engineer
*/


// ============================================================
// EJERCICIO 3 — MODIFICAR
// ============================================================

/*
Cambia:

age

a:

25
*/



// TU CÓDIGO:

developer.age = 25

console.log(developer.age)

// RESULTADO ESPERADO:

/*
25
*/


// ============================================================
// EJERCICIO 4 — AGREGAR
// ============================================================

/*
Agrega:

email

"zenen@example.com"
*/



// TU CÓDIGO:

developer.email = "zenen@example.com"

console.log(developer.email)

// RESULTADO ESPERADO:

/*
zenen@example.com
*/


// ============================================================
// EJERCICIO 5 — OBJECT.KEYS
// ============================================================

/*
Obtén las propiedades
del objeto.
*/


// TU CÓDIGO:
console.log(Object.keys(developer))


// RESULTADO ESPERADO:

/*
[
    "name",
    "age",
    "country",
    "role",
    "skills",
    "email"
]
*/


// ============================================================
// EJERCICIO 6 — OBJECT.VALUES
// ============================================================

/*
Obtén todos los valores.
*/


// TU CÓDIGO:

console.log(Object.values(developer))

// RESULTADO ESPERADO:

/*
[
    "Zenen",
    25,
    "Colombia",
    "Software Engineer",
    [...],
    "zenen@example.com"
]
*/


// ============================================================
// EJERCICIO 7 — DESTRUCTURING
// ============================================================

/*
Extrae:

name
role
country

utilizando destructuring.
*/


// TU CÓDIGO:

const {name, role, country} = developer
console.log(name, role, country)

// RESULTADO ESPERADO:

/*
name = "Zenen"

role = "Software Engineer"

country = "Colombia"
*/


// ============================================================
// EJERCICIO 8 — RENOMBRAR
// ============================================================

/*
Extrae:

name

pero guárdalo como:

developerName
*/

const {name : developerName} = developer

console.log(developerName)


// TU CÓDIGO:


// RESULTADO ESPERADO:

/*
developerName === "Zenen"
*/


// ============================================================
// EJERCICIO 9 — DEFAULT VALUE
// ============================================================

/*
Crea:

const user = {
    name: "Ana"
};


Extrae:

name
role

role debe tener:

"Developer"

si no existe.
*/


// TU CÓDIGO:

const user = {
    username: "Ana"
};

const {username, rolee = 'Developer'} = user

console.log(username, rolee)

// RESULTADO ESPERADO:

/*
Ana
Developer
*/


// ============================================================
// EJERCICIO 10 — OBJETO ANIDADO
// ============================================================

const company = {

    name: "Tech Corp",

    location: {

        city: "Barranquilla",

        country: "Colombia"

    }

};


/*
Obtén:

Barranquilla
*/

console.log(company.location?.city)


// TU CÓDIGO:


// RESULTADO ESPERADO:

/*
Barranquilla
*/


// ============================================================
// EJERCICIO 11 — OPTIONAL CHAINING
// ============================================================

/*
Obtén:

company.contact.phone

SIN que el programa se rompa.
*/


// TU CÓDIGO:

console.log(company.contact?.phone)

// RESULTADO ESPERADO:

/*
undefined
*/


// ============================================================
// EJERCICIO 12 — SPREAD
// ============================================================

const userA = {

    name: "Zenen",

    age: 24

};


/*
Crea:

userB

como copia de userA.
*/

const userB = {
    ...userA
}

console.log(userB)
// TU CÓDIGO:


// RESULTADO ESPERADO:

/*
{
    name: "Zenen",
    age: 24
}
*/


// ============================================================
// EJERCICIO 13 — COPIAR Y MODIFICAR
// ============================================================

/*
Crea:

updatedUser

copiando userA

pero:

age = 25
*/


// TU CÓDIGO:

const updatedUser = {
    ...userA,
    age: 25
}

console.log(updatedUser)


// RESULTADO ESPERADO:

/*
userA.age === 24

updatedUser.age === 25
*/


// ============================================================
// EJERCICIO 14 — COMBINAR
// ============================================================

const personal = {

    name: "Zenen",

    age: 24

};


const professional = {

    role: "Software Engineer",

    company: "Tech Corp"

};


/*
Combina ambos objetos.
*/


// TU CÓDIGO:

const combinedObject = {
    ...personal,
    ...professional
}

console.log(combinedObject)

// RESULTADO ESPERADO:

/*
{
    name: "Zenen",
    age: 24,
    role: "Software Engineer",
    company: "Tech Corp"
}
*/


// ============================================================
// EJERCICIO 15 — OVERWRITE
// ============================================================

const junior = {

    name: "Zenen",

    role: "Junior"

};


/*
Crea una copia donde:

role = "Software Engineer"
*/


// TU CÓDIGO:

const copyjunior = {
    ...junior,
    role: 'Software Engineer'
}

console.log(copyjunior)


// RESULTADO ESPERADO:

/*
{
    name: "Zenen",
    role: "Software Engineer"
}
*/


// ============================================================
// EJERCICIO 16 — REST
// ============================================================

const person = {

    name: "Zenen",

    age: 24,

    country: "Colombia",

    role: "Developer"

};


/*
Extrae name.

Después guarda todo lo demás
en:

otherData
*/

const  {name : personName, ...otherInformation } = person

const otherData = otherInformation

console.log(otherData)


// TU CÓDIGO:


// RESULTADO ESPERADO:

/*
name:

"Zenen"


otherData:

{
    age: 24,
    country: "Colombia",
    role: "Developer"
}
*/


// ============================================================
// EJERCICIO 17 — DESTRUCTURING DE ARRAY
// ============================================================

const skills = [

    "JavaScript",

    "React",

    "Node",

    "SQL"

];


/*
Extrae:

firstSkill
secondSkill
restSkills
*/


// TU CÓDIGO:
const [ first, second, ...rest] = skills

console.log(first)
console.log(second)
console.log(rest)


// RESULTADO ESPERADO:

/*
firstSkill:

"JavaScript"


secondSkill:

"React"


restSkills:

[
    "Node",
    "SQL"
]
*/


// ============================================================
// EJERCICIO 18 — FUNCIÓN CON DESTRUCTURING
// ============================================================

/*
Crea:

showUser(user)

Debe recibir un objeto
y utilizar destructuring
directamente en los parámetros.

Debe devolver:

"Zenen is 24 years old"
*/


// TU CÓDIGO:

function showUser(user){
    const {name, age} = user

    return `${name} is ${age} years old`
}

const userrr = {
    name: 'zenen',
    age: 24
}

console.log(showUser(userrr))


// RESULTADO ESPERADO:

/*
"Zenen is 24 years old"
*/


// ============================================================
// EJERCICIO 19 — PRODUCT
// ============================================================

const product = {

    name: "Laptop",

    price: 3000,

    stock: 5,

    category: "tech"

};


/*
Crea:

updatedProduct

donde:

price = 2800

stock = 10


NO modifiques product.
*/


// TU CÓDIGO:

const updatedProduct = {
    ...product,
    price: 2800,
    stock : 10
}

console.log(updatedProduct)


// RESULTADO ESPERADO:

/*
product.price === 3000

product.stock === 5


updatedProduct.price === 2800

updatedProduct.stock === 10
*/


// ============================================================
// EJERCICIO 20 — OBJECT.ENTRIES
// ============================================================

/*
Obtén las entries
de product.
*/


// TU CÓDIGO:

console.log(Object.entries(product))

// RESULTADO ESPERADO:

/*
[
    ["name", "Laptop"],
    ["price", 3000],
    ["stock", 5],
    ["category", "tech"]
]
*/


// ============================================================
// 🚀 RETO FINAL — USER PROFILE
// ============================================================

/*
Crea:

userProfile

con:

personal:

name
age
country


professional:

role
skills


Después:

1. Extrae name y age.

2. Extrae role.

3. Crea una copia del usuario.

4. Actualiza el role.

5. Agrega una nueva skill SIN modificar
el objeto original.


RESULTADO ESPERADO:

El objeto original NO debe cambiar.

El nuevo objeto debe contener
los datos actualizados.
*/

const userProfile = {
    personal: {
        name: 'Zenen Contreras Royero',
        age: 24,
        country: 'Colombia'
    },
    professional: {
        role: 'Junior SWE',
        skills: ['Javascript', 'SQL', 'Others']
    }
}

const {
    personal: {name : nameUser, age} ,
    professional: {role: rol}
    
} = userProfile

const UserCOPY = {
    ...userProfile,
    professional: {
        role : 'SWE',
        skills: [...skills, 'Nodejs']
    }
}

console.log(UserCOPY)

// ============================================================
// CHECKPOINT
// ============================================================

/*
Antes de continuar debes poder explicar:

1. object.property
2. object[property]
3. Object.keys()
4. Object.values()
5. Object.entries()
6. destructuring
7. spread
8. rest
9. optional chaining
10. por qué spread es importante en React
*/