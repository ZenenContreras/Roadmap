/*
============================================================
DÍA 4 — JAVASCRIPT OBJECTS
============================================================

OBJETIVO

Al terminar este día debes entender:

✓ Qué es un objeto
✓ Propiedades
✓ Valores
✓ Acceder a propiedades
✓ Modificar propiedades
✓ Agregar propiedades
✓ Eliminar propiedades
✓ Objetos anidados
✓ Object.keys()
✓ Object.values()
✓ Object.entries()
✓ Destructuring
✓ Destructuring anidado
✓ Renombrar variables con destructuring
✓ Default values
✓ Spread operator
✓ Copiar objetos
✓ Combinar objetos
✓ Rest operator
✓ Optional chaining
✓ Shorthand properties

Estos conceptos aparecen CONSTANTEMENTE en React.

============================================================
*/


// ============================================================
// 1. ¿QUÉ ES UN OBJECT?
// ============================================================

/*
Un objeto permite representar una entidad
utilizando propiedades.

Ejemplo:

Una persona tiene:

name
age
country
email
*/


const user = {

    name: "Zenen",

    age: 24,

    country: "Colombia",

    isStudent: true

};


console.log(user);


/*
Visualmente:

user
│
├── name
├── age
├── country
└── isStudent
*/


// ============================================================
// 2. ACCEDER A PROPIEDADES
// ============================================================

console.log(user.name);

console.log(user.age);


/*
También existe:

bracket notation
*/


console.log(user["name"]);

console.log(user["age"]);


/*
¿Cuándo es útil?

Cuando el nombre de la propiedad
está almacenado en una variable.
*/


const property = "country";

console.log(
    user[property]
);


// ============================================================
// 3. MODIFICAR PROPIEDADES
// ============================================================

user.age = 25;

console.log(user);


/*
También:

user["age"] = 26;
*/


// ============================================================
// 4. AGREGAR PROPIEDADES
// ============================================================

user.email = "example@email.com";

console.log(user);


// ============================================================
// 5. ELIMINAR PROPIEDADES
// ============================================================

delete user.isStudent;

console.log(user);


// ============================================================
// 6. OBJETOS ANIDADOS
// ============================================================

const developer = {

    name: "Zenen",

    skills: {

        frontend: [
            "JavaScript",
            "React",
            "Tailwind"
        ],

        backend: [
            "Node",
            "Express"
        ]

    },

    address: {

        city: "Barranquilla",

        country: "Colombia"

    }

};


console.log(
    developer.skills.frontend
);


console.log(
    developer.address.city
);


// ============================================================
// 7. OPTIONAL CHAINING
// ============================================================

/*
Si intentamos:

developer.contact.phone

y contact no existe:

ERROR.


Podemos utilizar:
*/


console.log(
    developer.contact?.phone
);


/*
Resultado:

undefined
*/


// ============================================================
// 8. OBJECT.KEYS()
// ============================================================

const product = {

    name: "Laptop",

    price: 3000,

    stock: 5

};


console.log(
    Object.keys(product)
);


/*
Resultado:

[
    "name",
    "price",
    "stock"
]
*/


// ============================================================
// 9. OBJECT.VALUES()
// ============================================================

console.log(
    Object.values(product)
);


/*
Resultado:

[
    "Laptop",
    3000,
    5
]
*/


// ============================================================
// 10. OBJECT.ENTRIES()
// ============================================================

console.log(
    Object.entries(product)
);


/*
Resultado:

[
    ["name", "Laptop"],
    ["price", 3000],
    ["stock", 5]
]
*/


/*
Esto es MUY útil cuando quieres recorrer
propiedades de un objeto.
*/


// ============================================================
// 11. DESTRUCTURING
// ============================================================

/*
En lugar de:

const name = user.name;

const age = user.age;


podemos hacer:
*/


const person = {

    name: "Carlos",

    age: 30,

    country: "Colombia"

};


const {
    name,
    age,
    country
} = person;


console.log(name);

console.log(age);

console.log(country);


// ============================================================
// 12. DESTRUCTURING CON RENOMBRE
// ============================================================

const {

    name: userName,

    age: userAge

} = person;


console.log(userName);

console.log(userAge);


/*
IMPORTANTE:

name: userName

NO significa:

name = userName


Significa:

"extrae la propiedad name
y guárdala en una variable llamada userName."
*/


// ============================================================
// 13. DEFAULT VALUES
// ============================================================

const account = {

    username: "Zenen"

};


const {

    username,

    role = "user"

} = account;


console.log(username);

console.log(role);


/*
role no existía.

Por eso utiliza:

"user"
*/


// ============================================================
// 14. DESTRUCTURING ANIDADO
// ============================================================

const employee = {

    name: "Ana",

    address: {

        city: "Bogotá",

        country: "Colombia"

    }

};


const {

    address: {

        city

    }

} = employee;


console.log(city);


// ============================================================
// 15. DESTRUCTURING EN FUNCIONES
// ============================================================

/*
Esto aparece muchísimo en React.
*/


function showUser({ name, age }) {

    console.log(
        `${name} is ${age} years old`
    );

}


showUser({

    name: "Carlos",

    age: 30

});


// ============================================================
// 16. SPREAD OPERATOR
// ============================================================

/*
...

se llama spread.

Permite expandir los elementos
de un objeto o array.
*/


const originalUser = {

    name: "Zenen",

    age: 24

};


const copiedUser = {

    ...originalUser

};


console.log(copiedUser);


// ============================================================
// 17. COPIAR Y MODIFICAR
// ============================================================

const updatedUser = {

    ...originalUser,

    age: 25

};


console.log(updatedUser);


/*
Esto es MUY importante en React.

En lugar de modificar directamente:

user.age = 25;


creamos un nuevo objeto:
*/


const newUser = {

    ...originalUser,

    age: 25

};


// ============================================================
// 18. COMBINAR OBJETOS
// ============================================================

const basicInfo = {

    name: "Zenen",

    age: 24

};


const jobInfo = {

    role: "Software Engineer",

    company: "Tech Company"

};


const completeProfile = {

    ...basicInfo,

    ...jobInfo

};


console.log(completeProfile);


// ============================================================
// 19. PROPIEDADES SOBREESCRITAS
// ============================================================

const userA = {

    name: "Zenen",

    role: "Junior"

};


const userB = {

    ...userA,

    role: "Senior"

};


console.log(userB);


/*
La última propiedad gana.

Resultado:

role = "Senior"
*/


// ============================================================
// 20. SHORTHAND PROPERTIES
// ============================================================

const productName = "Laptop";

const productPrice = 3000;


/*
Podríamos hacer:

const product = {
    productName: productName,
    productPrice: productPrice
};


Pero JavaScript permite:
*/


const product2 = {

    productName,

    productPrice

};


console.log(product2);


// ============================================================
// 21. REST OPERATOR
// ============================================================

/*
El mismo símbolo:

...

puede utilizarse como REST.

En este contexto:

"recoge el resto".
*/


const numbers = [

    1,
    2,
    3,
    4,
    5

];


const [

    first,
    second,
    ...rest

] = numbers;


console.log(first);

console.log(second);

console.log(rest);


/*
Resultado:

first → 1

second → 2

rest → [3,4,5]
*/


// ============================================================
// 22. REST CON OBJETOS
// ============================================================

const profile = {

    name: "Zenen",

    age: 24,

    country: "Colombia",

    role: "Developer"

};


const {

    name: profileName,

    ...otherInformation

} = profile;


console.log(profileName);

console.log(otherInformation);


/*
otherInformation contiene:

age
country
role
*/


// ============================================================
// 23. SPREAD VS REST
// ============================================================

/*

SPREAD:

"expande"

...

const copy = {
    ...user
}


REST:

"recoge"

const {
    name,
    ...rest
} = user


Mismo operador.

Función diferente según contexto.
*/


// ============================================================
// 24. OBJECT IMMUTABILITY — CONCEPTO
// ============================================================

/*
En React es MUY importante
evitar mutar directamente los objetos.

Evitar:

user.age = 25;


Preferir:

const updatedUser = {
    ...user,
    age: 25
};
*/


// ============================================================
// 25. MODELO MENTAL
// ============================================================

/*

object

→ entidad con propiedades.


object.property

→ acceder.


object[property]

→ acceso dinámico.


Object.keys()

→ nombres de propiedades.


Object.values()

→ valores.


Object.entries()

→ pares [key, value].


destructuring

→ extraer propiedades.


spread

→ copiar / combinar / actualizar.


rest

→ recoger lo que queda.


optional chaining

→ acceso seguro.


============================================================
FIN DE TEORÍA
============================================================
*/