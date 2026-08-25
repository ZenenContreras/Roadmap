/*
============================================================
SEMANA 2 — DÍA 3
PRÁCTICA
PROMISES + ASINCRONÍA
============================================================

REGLAS:

1. Predice antes de ejecutar.
2. No uses IA.
3. Ejecuta.
4. Compara.
5. Si fallas, intenta explicar por qué.
6. Presta MUCHA atención al orden de ejecución.

============================================================
*/


// ============================================================
// EJERCICIO 1 — SÍNCRONO
// ============================================================

console.log("A");

console.log("B");

console.log("C");


/*
RESULTADO ESPERADO:

A
B
C
*/


// ============================================================
// EJERCICIO 2 — SETTIMEOUT
// ============================================================

console.log("A");

setTimeout(() => {

    console.log("B");

}, 1000);

console.log("C");


/*
RESULTADO ESPERADO:

A
C
B
*/


// ============================================================
// EJERCICIO 3 — SETTIMEOUT 0
// ============================================================

console.log("A");

setTimeout(() => {

    console.log("B");

}, 0);

console.log("C");


/*
RESULTADO ESPERADO:

A
C
B


IMPORTANTE:

0 ms no significa:

"ejecutar inmediatamente".

Significa que el callback
puede ejecutarse cuando
el entorno lo permita.
*/


// ============================================================
// EJERCICIO 4 — CREAR PROMISE
// ============================================================

const promise1 = new Promise((resolve, reject) => {

    resolve("Success");

});


promise1.then((value) => {

    console.log(value);

});


/*
RESULTADO ESPERADO:

Success
*/


// ============================================================
// EJERCICIO 5 — REJECT
// ============================================================

const promise2 = new Promise((resolve, reject) => {

    reject(new Error("Something failed"));

});


promise2.catch((error) => {

    console.log(error.message);

});


/*
RESULTADO ESPERADO:

Something failed
*/


// ============================================================
// EJERCICIO 6 — FINALLY
// ============================================================

Promise.resolve("Success")

    .then((value) => {

        console.log(value);

    })

    .finally(() => {

        console.log("Finished");

    });


/*
RESULTADO ESPERADO:

Success
Finished
*/


// ============================================================
// EJERCICIO 7 — THEN CHAIN
// ============================================================

Promise.resolve(10)

    .then((value) => {

        return value * 2;

    })

    .then((value) => {

        return value + 5;

    })

    .then((value) => {

        console.log(value);

    });


/*
RESULTADO ESPERADO:

25
*/


// ============================================================
// EJERCICIO 8 — ERROR
// ============================================================

Promise.resolve(10)

    .then(() => {

        throw new Error("Oops");

    })

    .then(() => {

        console.log("Success");

    })

    .catch((error) => {

        console.log(error.message);

    });


/*
RESULTADO ESPERADO:

Oops


"Success" NO aparece.
*/


// ============================================================
// EJERCICIO 9 — CATCH RECUPERANDO
// ============================================================

Promise.reject(new Error("Failed"))

    .catch((error) => {

        console.log(error.message);

        return "Recovered";

    })

    .then((value) => {

        console.log(value);

    });


/*
RESULTADO ESPERADO:

Failed
Recovered
*/


// ============================================================
// EJERCICIO 10 — EL RETURN IMPORTA
// ============================================================

Promise.resolve(5)

    .then((value) => {

        return value * 2;

    })

    .then((value) => {

        console.log(value + 10);

    });


/*
RESULTADO ESPERADO:

20
*/


// ============================================================
// EJERCICIO 11 — FALTA RETURN
// ============================================================

Promise.resolve(5)

    .then((value) => {

        value * 2;

    })

    .then((value) => {

        console.log(value);

    });


/*
RESULTADO ESPERADO:

undefined


¿Por qué?

Porque el primer then()
no hizo return.
*/


// ============================================================
// EJERCICIO 12 — PROMISE.ALL
// ============================================================

Promise.all([

    Promise.resolve("Users"),

    Promise.resolve("Posts"),

    Promise.resolve("Comments")

])

.then((results) => {

    console.log(results);

});


/*
RESULTADO ESPERADO:

[
    "Users",
    "Posts",
    "Comments"
]


El orden se conserva.
*/


// ============================================================
// EJERCICIO 13 — PROMISE.ALL CON ERROR
// ============================================================

Promise.all([

    Promise.resolve("A"),

    Promise.reject(new Error("B failed")),

    Promise.resolve("C")

])

.catch((error) => {

    console.log(error.message);

});


/*
RESULTADO ESPERADO:

B failed
*/


// ============================================================
// EJERCICIO 14 — ALLSETTLED
// ============================================================

Promise.allSettled([

    Promise.resolve("A"),

    Promise.reject(new Error("B failed")),

    Promise.resolve("C")

])

.then((results) => {

    console.log(results);

});


/*
RESULTADO ESPERADO:

Un array de 3 resultados.

Conceptualmente:

[
    {
        status: "fulfilled",
        value: "A"
    },
    {
        status: "rejected",
        reason: Error(...)
    },
    {
        status: "fulfilled",
        value: "C"
    }
]


El formato exacto mostrado
por Node puede variar ligeramente
por cómo imprime Error.
*/


// ============================================================
// EJERCICIO 15 — RACE
// ============================================================

const fastPromise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Fast");

    }, 1000);

});


const slowPromise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Slow");

    }, 3000);

});


Promise.race([
    fastPromise,
    slowPromise
])

.then((value) => {

    console.log(value);

});


/*
RESULTADO ESPERADO:

Fast
*/


// ============================================================
// EJERCICIO 16 — ANY
// ============================================================

Promise.any([

    Promise.reject(new Error("A failed")),

    Promise.resolve("B"),

    Promise.resolve("C")

])

.then((value) => {

    console.log(value);

});


/*
RESULTADO ESPERADO:

B


Porque B es la primera Promise
que se cumple correctamente
en este ejemplo.
*/


// ============================================================
// EJERCICIO 17 — ORDER OF EXECUTION
// ============================================================

console.log("1");

Promise.resolve().then(() => {

    console.log("2");

});

console.log("3");


/*
RESULTADO ESPERADO:

1
3
2


Porque .then()
se ejecuta como microtask.
*/


// ============================================================
// EJERCICIO 18 — PROMISE VS TIMER
// ============================================================

console.log("A");

setTimeout(() => {

    console.log("B");

}, 0);

Promise.resolve().then(() => {

    console.log("C");

});

console.log("D");


/*
RESULTADO ESPERADO:

A
D
C
B


Este ejercicio es MUY importante.


A y D:

síncronos.


C:

microtask.


B:

timer task.


Las microtasks pendientes
se procesan antes de la siguiente
task del timer.
*/


// ============================================================
// EJERCICIO 19 — PROMISE QUE TARDA
// ============================================================

const delayedPromise = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Done");

    }, 2000);

});


delayedPromise.then((value) => {

    console.log(value);

});


/*
RESULTADO ESPERADO:

Después de aproximadamente
2 segundos:

Done
*/


// ============================================================
// EJERCICIO 20 — CREAR TU PROPIA PROMISE
// ============================================================

const waitTwoSeconds = () => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Finished")
    }, 2000)
})

waitTwoSeconds()
    .then((value) => {
        console.log(value)
    })
/*
Crea:

function waitTwoSeconds()


Debe devolver una Promise.

Después de 2 segundos
debe hacer:

resolve("Finished")


Ejemplo:

waitTwoSeconds()
    .then((message) => {
        console.log(message);
    });


RESULTADO ESPERADO:

Después de 2 segundos:

Finished
*/


// ============================================================
// EJERCICIO 21 — VALIDACIÓN
// ============================================================

const checkAge = (age) => new Promise((resolve, reject) =>{
    if(age >= 18){
        resolve("Access granted ---")
    }else{
        reject(new Error("Access denied ---"))
    }
})

checkAge(15)
    .then((value) =>{
        console.log(value)
    })
    .catch((error)=>{
        console.error(error)
    })

/*
Crea:

function checkAge(age)


Debe devolver una Promise.


Si age >= 18:

resolve("Access granted")


Si age < 18:

reject(new Error("Access denied"))


Ejemplo:

checkAge(20)
    .then(...)
    .catch(...)


RESULTADO ESPERADO:

Access granted


Y:

checkAge(15)


RESULTADO:

Access denied
*/


// ============================================================
// EJERCICIO 22 — SIMULAR LOGIN
// ============================================================

const login = (username, password) => new Promise((resolve, reject) => {
    username === "admin" && password === '1234' ? resolve('login successfull') :  reject(new Error("Invalid credentials"))
})

login("admin", "1234")
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
/*
Crea:

function login(username, password)


Debe devolver una Promise.


Si:

username === "admin"

Y:

password === "1234"


resolve("Login successful")


En cualquier otro caso:

reject(new Error("Invalid credentials"))


RESULTADO:

login("admin", "1234")

→ Login successful


login("admin", "wrong")

→ Invalid credentials
*/


// ============================================================
// EJERCICIO 23 — CHAIN
// ============================================================

Promise.resolve(10)
    .then((value) => {
        return value  * 2
    })
    .then((value) => {
        return value - 5
    })
    .then((value) => {
        return value  * 3
    })
    .then((value) => {
        console.log(value)
    })    


/*
Crea una cadena que haga:

1. Empiece con:

10


2. Multiplique por 2.


3. Reste 5.


4. Multiplique por 3.


5. Imprima el resultado.


RESULTADO ESPERADO:

45


Porque:

10
↓
20
↓
15
↓
45
*/


// ============================================================
// EJERCICIO 24 — CHAIN + ERROR
// ============================================================
Promise.resolve(10)
    .then((value) => {
        return value * 2
    })
    .then(() => new Error("Something went wrong"))
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })

/*
Crea una cadena:

Promise.resolve(10)


Primer then:

multiplica por 2.


Segundo then:

lanza:

new Error("Something went wrong")


Tercer then:

NO debe ejecutarse.


catch:

debe imprimir:

Something went wrong
*/


// ============================================================
// EJERCICIO 25 — PROMISE.ALL
// ============================================================

const getUser = () => new Promise ((resolve, reject) => {
    resolve('User')
} )

const getPosts = () => new Promise ((resolve, reject) => {
    resolve('getPosts')
} )

const getComments = () => new Promise ((resolve, reject) => {
    resolve('getComments')
} )

Promise.all([
    getUser(), 
    getPosts(), 
    getComments()
]).then((results) => {
    console.log(results)
})

/*
Crea tres Promises:

getUser()

→ "User"


getPosts()

→ "Posts"


getComments()

→ "Comments"


Luego utiliza:

Promise.all()


para obtenerlas juntas.


RESULTADO ESPERADO:

[
    "User",
    "Posts",
    "Comments"
]
*/


// ============================================================
// EJERCICIO 26 — PROMISE.ALL + TIEMPOS
// ============================================================

const getUser2 = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('User')
    }, 1000)
} )

const getPosts2 = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Posts')
    }, 2000)
} )

const getComments2 = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Comments')
    }, 3000)
} )

Promise.all([
    getUser2(), 
    getPosts2(), 
    getComments2()
]).then((results) => {
    console.log(results)
})

/*
Crea:

getUser()

→ tarda 1 segundo

getPosts()

→ tarda 2 segundos

getComments()

→ tarda 3 segundos


Utiliza Promise.all().


Pregunta:

¿La ejecución total debería tardar
aproximadamente:

1 segundo

2 segundos

o 3 segundos?


RESULTADO ESPERADO:

Aproximadamente 3 segundos.


¿Por qué?

Porque las tres operaciones
se inician sin necesidad
de esperar secuencialmente
una a la otra,
y Promise.all espera
hasta que todas terminan.
*/


// ============================================================
// EJERCICIO 27 — RETO
// ============================================================

const getUser1 = () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            name: "Zenen"
        })
    }, 1000)
})

getUser1().then((value) => {
    console.log(`user: ${value.name}` )
})

/*
Crea:

function getUser()


Debe devolver:

{
    id: 1,
    name: "Zenen"
}


pero dentro de una Promise
que tarde 1 segundo.


Después:

.then()


debe imprimir:

User: Zenen


RESULTADO ESPERADO:

Después de 1 segundo:

User: Zenen
*/


// ============================================================
// EJERCICIO 28 — RETO INTERMEDIO
// ============================================================

const getUser3 = () => new Promise ((resolve, reject) => {
        resolve({
            id: 1,
            name: "Zenen"
        })

})

const getProfile = (userId) => new Promise ((resolve, reject) => {
    resolve({
        userId: userId,
        role: "Software Engineer"
    })
})

getUser1().then((value) => {
    console.log(`user: ${value.name}` )
})

getUser3()
  .then(user => {
    return getProfile(user.id);
  })
  .then(profile => {
    return profile.role;
  })
  .then(role => {
    console.log(role);
  });

/*
Crea:

function getUser()


que devuelva:

{
    id: 1,
    name: "Zenen"
}


Después crea:

function getProfile(userId)


que devuelva:

{
    userId: 1,
    role: "Software Engineer"
}


Utiliza Promises encadenadas:


getUser()
    .then(...)
    .then(...)
    .then(...)


RESULTADO ESPERADO:

Software Engineer


El objetivo es simular:

User
 ↓
Profile
*/


// ============================================================
// EJERCICIO 29 — RETO AVANZADO
// ============================================================

const registerUser = () => new Promise((resolve, reject) => {
    resolve("User registered")
})

const createProfile = () => new Promise((resolve, reject) => {
    resolve("Profile created")
})

const sendWelcomeEmail = () => new Promise((resolve, reject) => {
    resolve("Email sent")
})

registerUser().then((value) => console.log(value))
createProfile().then((value) => console.log(value))
sendWelcomeEmail().then((value) => console.log(value))
    

/*
Simula un sistema:

registerUser()

→ "User registered"


createProfile()

→ "Profile created"


sendWelcomeEmail()

→ "Email sent"


Las tres funciones deben devolver
Promises.


Haz que se ejecuten
secuencialmente mediante
Promise chaining.


RESULTADO ESPERADO:

User registered
Profile created
Email sent


IMPORTANTE:

La segunda debe comenzar
después de la primera.

La tercera después de la segunda.
*/


// ============================================================
// EJERCICIO 30 — EXAMEN FINAL
// ============================================================

const getProduct = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            name: "RTX 5060 Ti",
            price: 500
        })
    }, 1000)
})

getProduct()
    .then(product => product)
    .then(product => {
        console.log(product.name)
        return product
    })
    .then(product => console.log(product.price))
    .catch((error) => console.error(error))
    .finally(() => console.log('Finished'))

/*

NO MIRES LA TEORÍA.

Construye:

function getProduct()


Debe devolver una Promise
que después de 1 segundo
resuelva:

{
    id: 1,
    name: "RTX 5060 Ti",
    price: 500
}


Después debes:

1. Obtener el producto.

2. Imprimir su nombre.

3. Imprimir su precio.

4. Si ocurre un error,
   manejarlo con catch().

5. Utilizar finally()
   para imprimir:

"Finished"


RESULTADO ESPERADO:

Después de aproximadamente
1 segundo:

RTX 5060 Ti
500
Finished


============================================================
FIN DEL DÍA 3
============================================================
*/