/*
============================================================
SEMANA 2 — DÍA 2
PRÁCTICA — THIS + CALL + APPLY + BIND
============================================================

REGLAS:

1. Predice primero.
2. Ejecuta después.
3. No uses IA.
4. Si te equivocas, explica por qué.
5. No memorices las respuestas.

============================================================
*/


// ============================================================
// EJERCICIO 1 — THIS BÁSICO
// ============================================================

const user1 = {

    name: "Zenen",

    greet() {

        console.log(this.name);

    }

};

user1.greet();


/*
PREDICE:

¿Qué imprime?

RESULTADO ESPERADO:

Zenen
*/


// ============================================================
// EJERCICIO 2 — DOS OBJETOS
// ============================================================

const personA = {

    name: "Carlos",

    greet() {

        console.log(this.name);

    }

};

const personB = {

    name: "Laura",

    greet: personA.greet

};

personB.greet();


/*
RESULTADO ESPERADO:

Laura


¿Por qué?

Porque la función se llama como:

personB.greet()


Entonces:

this = personB
*/


// ============================================================
// EJERCICIO 3 — MÉTODO SEPARADO
// ============================================================

const user2 = {

    name: "Zenen",

    greet() {

        console.log(this.name);

    }

};

const greetUser = user2.greet;

greetUser();


/*
RESULTADO ESPERADO EN STRICT MODE:

TypeError al intentar acceder a this.name

La razón:

greetUser()

ya no está siendo llamada como:

user2.greet()


El contexto del objeto se perdió.
*/


// ============================================================
// EJERCICIO 4 — ARROW FUNCTION
// ============================================================

const user3 = {

    name: "Zenen",

    greet: () => {

        console.log(this);

    }

};

user3.greet();


/*
RESULTADO:

NO debes esperar que this sea user3.


La arrow function hereda
el this de su entorno exterior.


El valor exacto puede depender
del entorno donde ejecutes el archivo.

LO IMPORTANTE:

this NO es user3.
*/


// ============================================================
// EJERCICIO 5 — NORMAL VS ARROW
// ============================================================

const user4 = {

    name: "Zenen",

    normal() {

        console.log(this.name);

    },

    arrow: () => {

        console.log(this.name);

    }

};

user4.normal();

user4.arrow();


/*
RESULTADO ESPERADO:

Zenen

undefined


¿Por qué?

normal():

this = user4


arrow():

no crea su propio this.
*/


// ============================================================
// EJERCICIO 6 — CALLBACK
// ============================================================

const user5 = {

    name: "Zenen",

    friends: ["Ana", "Carlos"],

    greetFriends() {

        this.friends.forEach((friend) => {

            console.log(
                `${this.name} knows ${friend}`
            );

        });

    }

};

user5.greetFriends();


/*
RESULTADO ESPERADO:

Zenen knows Ana
Zenen knows Carlos


¿Por qué funciona?

La arrow function hereda
el this de greetFriends().
*/


// ============================================================
// EJERCICIO 7 — CALL
// ============================================================

function greet() {

    console.log(`Hello ${this.name}`);

}

const user6 = {

    name: "Zenen"

};

greet.call(user6);


/*
RESULTADO ESPERADO:

Hello Zenen
*/


// ============================================================
// EJERCICIO 8 — CALL CON ARGUMENTOS
// ============================================================

function introduce(age, country) {

    console.log(
        `${this.name} is ${age} from ${country}`
    );

}

const user7 = {

    name: "Zenen"

};

introduce.call(
    user7,
    24,
    "Colombia"
);


/*
RESULTADO ESPERADO:

Zenen is 24 from Colombia
*/


// ============================================================
// EJERCICIO 9 — APPLY
// ============================================================

function introduce2(age, country) {

    console.log(
        `${this.name} is ${age} from ${country}`
    );

}

const user8 = {

    name: "Carlos"

};

introduce2.apply(
    user8,
    [30, "Colombia"]
);


/*
RESULTADO ESPERADO:

Carlos is 30 from Colombia
*/


// ============================================================
// EJERCICIO 10 — CALL VS APPLY
// ============================================================

function sum(a, b, c) {

    return a + b + c;

}

console.log(
    sum.call(null, 10, 20, 30)
);

console.log(
    sum.apply(null, [10, 20, 30])
);


/*
RESULTADO ESPERADO:

60
60


Ambos ejecutan la función.

La diferencia está en
cómo reciben los argumentos.
*/


// ============================================================
// EJERCICIO 11 — BIND
// ============================================================

function greet2() {

    console.log(`Hello ${this.name}`);

}

const user9 = {

    name: "Laura"

};

const boundGreet = greet2.bind(user9);

boundGreet();


/*
RESULTADO ESPERADO:

Hello Laura


IMPORTANTE:

bind() no ejecutó greet2 inmediatamente.

Creó boundGreet.
*/


// ============================================================
// EJERCICIO 12 — CAMBIAR THIS CON BIND
// ============================================================

const person1 = {

    name: "Ana"

};

const person2 = {

    name: "Carlos"

};

function sayName() {

    console.log(this.name);

}

const sayPerson1 = sayName.bind(person1);

const sayPerson2 = sayName.bind(person2);

sayPerson1();

sayPerson2();


/*
RESULTADO ESPERADO:

Ana
Carlos
*/


// ============================================================
// EJERCICIO 13 — BIND + ARGUMENTOS
// ============================================================

function multiply(a, b) {

    return a * b;

}

const double = multiply.bind(null, 2);

console.log(
    double(10)
);


/*
RESULTADO ESPERADO:

20
*/


// ============================================================
// EJERCICIO 14 — CREAR TU PROPIO BIND
// ============================================================

const user = {
    name: "Zenen"
};

function introduce() {
    return `My name is ${this.name}`;
}

const boundIntroduce = introduce.bind(user)

console.log(boundIntroduce())


/*
Crea:

const user = {
    name: "Zenen"
};

function introduce() {
    return `My name is ${this.name}`;
}


Tu objetivo:

Crear una función:

boundIntroduce


que siempre utilice:

user


RESULTADO ESPERADO:

boundIntroduce()

↓

"My name is Zenen"


UTILIZA:

bind()
*/


// ============================================================
// EJERCICIO 15 — EXPLICACIÓN
// ============================================================

/*
Sin ejecutar el código:

*/


const account = {

    owner: "Zenen",

    showOwner() {

        console.log(this.owner);

    }

};

const fn = account.showOwner;

fn();

/*
¿Qué ocurre aquí?


const fn = account.showOwner;

fn();


Escribe tu explicación
antes de ejecutar.


RESULTADO ESPERADO:

La función pierde el contexto
del objeto account.


En strict mode,
this será undefined
y this.owner producirá un error.
*/


// ============================================================
// EJERCICIO 16 — SOLUCIONAR CONTEXTO
// ============================================================

const account2 = {

    owner: "Zenen",

    showOwner() {

        console.log(this.owner);

    }

};

const fn2 = account2.showOwner.bind(account2);

fn2();


/*
RESULTADO ESPERADO:

Zenen
*/


// ============================================================
// EJERCICIO 17 — MÉTODO REUTILIZABLE
// ============================================================

const user10 = {

    name: "Zenen",

    introduce(age) {

        console.log(
            `${this.name} is ${age}`
        );

    }

};

const user11 = {

    name: "Carlos"

};

console.log(user10.introduce.call(user11, 24))


/*
Utiliza call()
para hacer que user11
utilice el método introduce()
de user10.


RESULTADO ESPERADO:

Carlos is [la edad que tú elijas]
*/


// ============================================================
// EJERCICIO 18 — ARROW + CLOSURE + THIS
// ============================================================

const user12 = {

    name: "Zenen",

    createGreeting() {

        return () => {

            return `Hello ${this.name}`;

        };

    }

};

const greeting = user12.createGreeting();

console.log(
    greeting()
);


/*
RESULTADO ESPERADO:

Hello Zenen


Este ejercicio combina:

    método
    this
    arrow function
    closure


MUY IMPORTANTE.


¿Por qué funciona?

createGreeting()
se ejecuta como:

user12.createGreeting()


Entonces:

this = user12


La arrow function captura
ese this del entorno.
*/


// ============================================================
// EJERCICIO 19 — DOS GREETINGS
// ============================================================

const user13 = {

    name: "Zenen",

    createGreeting() {

        return () => {

            return `Hello ${this.name}`;

        };

    }

};

const greetZenen = user13.createGreeting();


user13.name = "Carlos";


console.log(
    greetZenen()
);


/*
RESULTADO ESPERADO:

Hello Carlos


PIENSA:

La arrow function no guardó simplemente
la cadena "Zenen".

Mantiene acceso al objeto/contexto
que corresponde a this.


Este es un ejercicio MUY importante.
*/


// ============================================================
// EJERCICIO 20 — RETO
// ============================================================

const calculator = {

    number: 10,

    double() {
        return this.number * 2
    },

    triple() {
        return this.number * 3
    }

};


console.log(calculator.double())
console.log(calculator.triple())


/*
Crea:

const calculator = {

    number: 10,

    double() {
        ...
    },

    triple() {
        ...
    }

};


Debe producir:

calculator.double()

→ 20


calculator.triple()

→ 30


Ambos métodos deben utilizar:

this.number
*/


// ============================================================
// EJERCICIO 21 — RETO
// ============================================================

function createGreeter(name) {

    return () => `Hello ${name}`
}

const greet11 = createGreeter("Zenen");

console.log(greet11());


/*
Crea una función:

createGreeter(name)


Debe devolver una función
que diga:

Hello Zenen


Ejemplo:

const greet = createGreeter("Zenen");

console.log(greet());


RESULTADO:

Hello Zenen


RESTRICCIÓN:

Utiliza una arrow function
y closure.


No utilices this.
*/


// ============================================================
// EJERCICIO 22 — RETO INTERMEDIO
// ============================================================


const user22 = {
    name: "Zenen",

    greet() {
        return `Hello ${this.name}`;
    }
};


const anotherUser = {
    name: "Carlos"
};

console.log(user22.greet.call(anotherUser)) 

/*
Tenemos:


const user = {
    name: "Zenen",

    greet() {
        return `Hello ${this.name}`;
    }
};


Crea:

const anotherUser = {
    name: "Carlos"
};


Tu objetivo es reutilizar
user.greet()


para que:

anotherUser

pueda ejecutar ese método.


Resultado esperado:

Hello Carlos


Utiliza:

call()
*/


// ============================================================
// EJERCICIO 23 — RETO INTERMEDIO
// ============================================================

const person = {
    name: "Zenen",
    age: 24
};

function describePerson(country) {

    return `${this.name} tiene ${this.age} y vive en ${country}`

}

const describe = describePerson.bind(person, "Colombia")

console.log(describe())


/*
Crea:

const person = {
    name: "Zenen",
    age: 24
};


Crea una función:

describePerson(country)


que utilice:

this.name
this.age
country


Luego utiliza bind()
para crear:

describeZenen


Después:

describeZenen("Colombia");


RESULTADO ESPERADO:

Zenen is 24 and lives in Colombia
*/


// ============================================================
// EJERCICIO 24 — EXAMEN FINAL
// ============================================================

const userFinal = {

    name: "Zenen",

    age: 24,

    greet() {

        return `Hello ${this.name}`;

    },

    getInfo() {

        return `${this.name} is ${this.age}`;

    }

};

const otherUser = {
    name: "Carlos",
    age: 30
};

const boundGreett = userFinal.greet.bind(userFinal)
console.log(boundGreett())

console.log(userFinal.getInfo.call(otherUser))
/*

AHORA:

1. Guarda user.greet en una variable.

2. Intenta ejecutarla.

3. Observa qué ocurre.

4. Soluciona el problema utilizando bind().

5. Guarda el resultado en:

boundGreet


6. Ejecuta:

boundGreet()


RESULTADO ESPERADO:

Hello Zenen


DESPUÉS:

Utiliza call() para ejecutar
getInfo() utilizando otro objeto:

const otherUser = {
    name: "Carlos",
    age: 30
};


RESULTADO:

Carlos is 30


============================================================
FIN DEL DÍA 2
============================================================
*/