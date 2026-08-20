/*
============================================================
DÍA 5 — JAVASCRIPT MODERNO
CALLBACKS + MAP + FILTER + REDUCE + SPREAD + REST
============================================================

OBJETIVO DEL DÍA

Al terminar este día NO quiero que simplemente memorices:

map()
filter()
reduce()
...

Quiero que entiendas:

1. Qué problema resuelve cada uno.
2. Cómo funciona.
3. Qué recibe.
4. Qué devuelve.
5. Cuándo utilizarlo.
6. Cómo combinar varios métodos.
7. Cómo trabajar con arrays de objetos.
8. Cómo evitar modificar datos originales.

Estos conceptos son FUNDAMENTALES para:

- React
- Node.js
- Express
- APIs
- procesamiento de datos
- entrevistas técnicas
- proyectos reales

============================================================
*/


// ============================================================
// PARTE 1
// ¿QUÉ ES UNA FUNCIÓN CALLBACK?
// ============================================================

/*
Antes de entender map(), filter() y reduce(),
necesitamos entender algo:

CALLBACKS.


Un callback simplemente es:

UNA FUNCIÓN QUE LE PASAMOS A OTRA FUNCIÓN
COMO ARGUMENTO.


Por ejemplo:

*/


function greet() {

    console.log("Hello");

}


/*
Tenemos una función llamada greet.

Ahora podemos pasarla como argumento
a otra función.
*/


function executeFunction(callback) {

    callback();

}


executeFunction(greet);


/*
¿Qué ocurrió?

1. Creamos greet().
2. Creamos executeFunction().
3. executeFunction recibe una función.
4. Esa función queda guardada en "callback".
5. Ejecutamos callback().

Por eso aparece:

Hello


IMPORTANTE:

Una función en JavaScript puede tratarse
como cualquier otro dato.

Podemos:

- guardarla en una variable
- pasarla como argumento
- devolverla desde otra función


Esto se conoce como:

FIRST-CLASS FUNCTIONS
(funciones de primera clase)
*/


// ============================================================
// EJEMPLO
// ============================================================

function sayHello() {

    return "Hello";

}


const myFunction = sayHello;


/*
Aquí NO estamos ejecutando sayHello.

Esto:

sayHello

significa:

"la función"


Mientras que:

sayHello()

significa:

"ejecuta la función"


Esto es MUY importante.
*/


console.log(myFunction());


// Resultado:
//
// Hello


// ============================================================
// ¿POR QUÉ SON IMPORTANTES LOS CALLBACKS?
// ============================================================

/*
Porque nos permiten crear funciones
más flexibles.

Imagina que tienes:

executeOperation()


Pero no sabes qué operación quieres ejecutar.

Podrías pasarle diferentes funciones.
*/


function executeOperation(number, operation) {

    return operation(number);

}


function double(number) {

    return number * 2;

}


function square(number) {

    return number * number;

}


console.log(
    executeOperation(5, double)
);


console.log(
    executeOperation(5, square)
);


/*
Resultado:

10

25


La función executeOperation()
no necesita saber qué operación realizar.

Simplemente dice:

"Yo recibiré una función y la ejecutaré."


Esto es una idea MUY importante
en programación funcional.
*/


// ============================================================
// PARTE 2
// ARROW FUNCTIONS
// ============================================================

/*
Una arrow function es simplemente
una forma más corta de escribir funciones.


Forma tradicional:
*/


function multiply(a, b) {

    return a * b;

}


/*
Arrow function:
*/


const multiplyArrow = (a, b) => {

    return a * b;

};


/*
Y podemos hacerla todavía más corta:

*/


const multiplyShort = (a, b) => a * b;


/*
¿Por qué son importantes?

Porque los callbacks suelen ser
funciones pequeñas.

Por ejemplo:
*/


const numbers = [1, 2, 3, 4];


const doubled = numbers.map(

    number => number * 2

);


/*
En lugar de escribir:

function(number) {
    return number * 2;
}


escribimos:

number => number * 2


Esto hace el código mucho más limpio.
*/


// ============================================================
// PARTE 3
// MAP()
// ============================================================

/*
Ahora llegamos a uno de los métodos
más importantes de JavaScript:

map()


La pregunta que debes hacerte es:

"¿QUIERO TRANSFORMAR CADA ELEMENTO
DE UN ARRAY?"


Si la respuesta es sí:

probablemente necesitas map().
*/


const prices = [

    100,
    200,
    300,
    400

];


const pricesWithTax = prices.map(

    price => price * 1.19

);


console.log(pricesWithTax);


/*
Resultado:

[
    119,
    238,
    357,
    476
]


¿Qué hizo map()?


Tomó:

100 → 119

200 → 238

300 → 357

400 → 476


Es decir:

UN ARRAY
↓
MAP
↓
OTRO ARRAY


IMPORTANTE:

map() NO modifica el array original.
*/


console.log(prices);


/*
Resultado:

[
    100,
    200,
    300,
    400
]
*/


// ============================================================
// ¿QUÉ DEVUELVE MAP?
// ============================================================

/*
map() SIEMPRE devuelve un nuevo array.

Si tienes:

4 elementos


obtendrás:

4 elementos


Por ejemplo:
*/


const numbers2 = [1, 2, 3];

const result = numbers2.map(

    number => number + 10

);


/*
Resultado:

[
    11,
    12,
    13
]
*/


/*
Por eso:

map = TRANSFORMAR


No pienses:

"map sirve para recorrer"


Aunque técnicamente recorre el array,
su propósito principal es:

TRANSFORMAR CADA ELEMENTO.
*/


// ============================================================
// MAP CON OBJETOS
// ============================================================

const users = [

    {
        name: "Ana",
        age: 20
    },

    {
        name: "Carlos",
        age: 30
    },

    {
        name: "Laura",
        age: 25
    }

];


/*
Supongamos que solo queremos
los nombres.


Podemos transformar:

objeto
↓
nombre
*/


const names = users.map(

    user => user.name

);


console.log(names);


/*
Resultado:

[
    "Ana",
    "Carlos",
    "Laura"
]
*/


// ============================================================
// DESTRUCTURING DENTRO DE MAP
// ============================================================

/*
Como ya aprendimos destructuring,
podemos hacer esto:
*/


const names2 = users.map(

    ({ name }) => name

);


/*
Aquí:

({ name })


significa:

"del objeto que recibo,
extrae la propiedad name."


Por lo tanto:

user

↓

{
    name: "Ana",
    age: 20
}


↓

name

↓

"Ana"


Esto es extremadamente común
en React.
*/


// ============================================================
// PARTE 4
// FILTER()
// ============================================================

/*
Ahora piensa:

"No quiero todos los elementos."

"Quiero solamente algunos."


Ahí usamos:

filter()


FILTER significa:

FILTRAR.


Ejemplo:
*/


const ages = [

    12,
    18,
    25,
    14,
    30

];


const adults = ages.filter(

    age => age >= 18

);


console.log(adults);


/*
Resultado:

[
    18,
    25,
    30
]
*/


/*
¿Cómo funciona?


filter() revisa cada elemento.


12

¿12 >= 18?

NO


18

¿18 >= 18?

SÍ → se queda


25

¿25 >= 18?

SÍ → se queda


14

NO


30

SÍ


Resultado:

[18,25,30]
*/


// ============================================================
// MAP VS FILTER
// ============================================================

/*
Esta diferencia debes dominarla.


MAP:

"Quiero CAMBIAR cada elemento."


FILTER:

"Quiero DECIDIR cuáles elementos se quedan."


Ejemplo:


MAP:

[1,2,3]

↓

[2,4,6]


Estamos transformando.


FILTER:

[1,2,3,4,5]

↓

[2,4]


Estamos seleccionando.


Modelo mental:

MAP
→ TRANSFORMAR


FILTER
→ SELECCIONAR
*/


// ============================================================
// FILTER CON OBJETOS
// ============================================================

const developers = [

    {
        name: "Ana",
        experience: 1
    },

    {
        name: "Carlos",
        experience: 4
    },

    {
        name: "Laura",
        experience: 2
    }

];


const experiencedDevelopers = developers.filter(

    developer => developer.experience >= 2

);


console.log(experiencedDevelopers);


/*
Resultado:

[
    {
        name: "Carlos",
        experience: 4
    },

    {
        name: "Laura",
        experience: 2
    }
]
*/


// ============================================================
// PARTE 5
// COMBINAR FILTER + MAP
// ============================================================

/*
Aquí comienza una parte MUY importante.


Supongamos:

Tenemos usuarios.

Queremos:

1. Usuarios mayores de 25.
2. Solo sus nombres.


Primero necesitamos FILTRAR.

Después TRANSFORMAR.
*/


const users2 = [

    {
        name: "Ana",
        age: 20
    },

    {
        name: "Carlos",
        age: 30
    },

    {
        name: "Laura",
        age: 25
    },

    {
        name: "Pedro",
        age: 40
    }

];


const result2 = users2

    .filter(

        ({ age }) => age >= 25

    )

    .map(

        ({ name }) => name

    );


console.log(result2);


/*
Resultado:

[
    "Carlos",
    "Laura",
    "Pedro"
]


¿Qué pasó?

ARRAY ORIGINAL

↓

FILTER

↓

usuarios >= 25

↓

MAP

↓

nombres


Esto se llama:

CHAINING

o encadenamiento.


Y vas a verlo MUCHÍSIMO
en código profesional.
*/


// ============================================================
// PARTE 6
// FIND()
// ============================================================

/*
filter() devuelve VARIOS elementos.

Pero:

¿qué pasa si queremos encontrar UNO?


Usamos:

find()
*/


const users3 = [

    {
        id: 1,
        name: "Ana"
    },

    {
        id: 2,
        name: "Carlos"
    },

    {
        id: 3,
        name: "Laura"
    }

];


const user = users3.find(

    user => user.id === 2

);


console.log(user);


/*
Resultado:

{
    id: 2,
    name: "Carlos"
}


Diferencia:

filter()
→ devuelve ARRAY


find()
→ devuelve UN ELEMENTO


Esto es importante.
*/


// ============================================================
// PARTE 7
// SOME()
// ============================================================

/*
Pregunta:

"¿EXISTE AL MENOS UN elemento
que cumpla esta condición?"


Usamos:

some()
*/


const scores = [

    40,
    55,
    70,
    30

];


const hasHighScore = scores.some(

    score => score >= 70

);


console.log(hasHighScore);


/*
Resultado:

true


Porque existe:

70
*/


// ============================================================
// EVERY()
// ============================================================

/*
Pregunta:

"¿TODOS cumplen esta condición?"


Usamos:

every()
*/


const scores2 = [

    80,
    90,
    75,
    85

];


const allPassed = scores2.every(

    score => score >= 60

);


console.log(allPassed);


/*
Resultado:

true


Porque TODOS son >= 60.
*/


// ============================================================
// SOME VS EVERY
// ============================================================

/*

SOME

¿Existe AL MENOS UNO?

↓

true / false


EVERY

¿TODOS cumplen?

↓

true / false


Ejemplo:

[10,20,30]


some(x => x > 25)

→ true


every(x => x > 25)

→ false
*/


// ============================================================
// PARTE 8
// REDUCE()
// ============================================================

/*
Ahora viene uno de los métodos
que más suele costar al principio:

reduce()


Pero no quiero que lo memorices.

Primero entiende el problema.


Tenemos:

*/


const numbers3 = [

    10,
    20,
    30,
    40

];


/*
Queremos:

10 + 20 + 30 + 40

Podríamos hacerlo manualmente.

Pero queremos que JavaScript
acumule el resultado.


Ahí entra:

reduce()
*/


const total = numbers3.reduce(

    (accumulator, currentNumber) => {

        return accumulator + currentNumber;

    },

    0

);


console.log(total);


/*
Resultado:

100
*/


// ============================================================
// ¿QUÉ SIGNIFICA ACCUMULATOR?
// ============================================================

/*
Esta es la parte que debes entender.


Tenemos:

[10,20,30,40]


Y empezamos:

accumulator = 0


Primera iteración:

0 + 10 = 10


Ahora:

accumulator = 10


Segunda:

10 + 20 = 30


Ahora:

accumulator = 30


Tercera:

30 + 30 = 60


Cuarta:

60 + 40 = 100


Resultado final:

100
*/


/*
Por eso reduce significa:

"REDUCIR MUCHOS ELEMENTOS
A UN SOLO RESULTADO."


Puede ser:

array
↓
número


array
↓
string


array
↓
object


array
↓
array


etc.
*/


// ============================================================
// REDUCE CON OBJETOS
// ============================================================

const cart = [

    {
        name: "Laptop",
        price: 3000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 100,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 200,
        quantity: 1
    }

];


const cartTotal = cart.reduce(

    (total, product) => {

        return total +
            product.price *
            product.quantity;

    },

    0

);


console.log(cartTotal);


/*
Calculamos:

Laptop:

3000 × 1 = 3000


Mouse:

100 × 2 = 200


Keyboard:

200 × 1 = 200


TOTAL:

3400


Resultado:

3400
*/


// ============================================================
// ¿CUÁNDO USAR REDUCE?
// ============================================================

/*
Piensa en reduce cuando
tengas que convertir:

MUCHOS → UNO


Ejemplos:

productos → precio total

ventas → total de ventas

usuarios → estadísticas

transacciones → balance

array → objeto agrupado


No pienses:

"reduce es complicado"


Piensa:

"Necesito acumular información."
*/


// ============================================================
// PARTE 9
// SPREAD OPERATOR
// ============================================================

/*
El operador:

...


puede utilizarse para:

EXPANDIR.


Ejemplo:
*/


const frontend = [

    "HTML",
    "CSS",
    "JavaScript"

];


const backend = [

    "Node",
    "Express",
    "SQL"

];


const fullstack = [

    ...frontend,

    ...backend

];


console.log(fullstack);


/*
Resultado:

[
    "HTML",
    "CSS",
    "JavaScript",
    "Node",
    "Express",
    "SQL"
]
*/


/*
¿Qué significa?

...frontend

básicamente dice:

"coloca aquí todos los elementos
que están dentro de frontend."


Es como abrir el array.
*/


// ============================================================
// SPREAD CON OBJETOS
// ============================================================

const user4 = {

    name: "Zenen",

    age: 24

};


const updatedUser = {

    ...user4,

    age: 25

};


console.log(updatedUser);


/*
Resultado:

{
    name: "Zenen",
    age: 25
}


¿Por qué es importante?

Porque estamos creando
un NUEVO objeto.


No estamos haciendo:

user4.age = 25


Estamos creando:

nuevo objeto
+
datos anteriores
+
cambio
*/


// ============================================================
// ESTO ES FUNDAMENTAL PARA REACT
// ============================================================

/*
React trabaja muchísimo
con el concepto de:

INMUTABILIDAD.


No quieres hacer:

user.age = 25


Quieres crear:

const updatedUser = {
    ...user,
    age: 25
}


¿Por qué?

Porque React necesita detectar
cambios de estado de forma predecible.


Esto lo veremos profundamente
cuando lleguemos a React.
*/


// ============================================================
// PARTE 10
// REST PARAMETERS
// ============================================================

/*
El mismo símbolo:

...


también puede significar REST.


REST significa:

"recoger el resto."


Ejemplo:
*/


function sumAll(...numbers) {

    console.log(numbers);

}


sumAll(1, 2, 3, 4, 5);


/*
numbers será:

[
    1,
    2,
    3,
    4,
    5
]


Es decir:

Todos los argumentos
fueron recogidos
dentro de un array.
*/


// ============================================================
// SPREAD VS REST
// ============================================================

/*

SPREAD:

EXPANDE.


const numbers = [1,2,3];

const copy = [...numbers];


REST:

RECOGE.


function test(...numbers) {

}


Una buena forma de recordarlo:

SPREAD

→ abre


REST

→ guarda el resto
*/


// ============================================================
// PARTE 11
// OPTIONAL CHAINING
// ============================================================

/*
Supongamos que tenemos:
*/


const user5 = {

    name: "Zenen"

};


/*
Y hacemos:

user5.address.city


Esto genera un ERROR porque:

address

no existe.


Podemos usar:

*/


console.log(
    user5.address?.city
);


/*
Resultado:

undefined


El símbolo:

?

significa aproximadamente:

"si esto existe, continúa."
*/


/*
Esto es muy útil trabajando
con APIs.


Porque no siempre sabes
si un dato existe.
*/


// ============================================================
// PARTE 12
// NULLISH COALESCING
// ============================================================

/*
Tenemos:

?.


Y ahora:

??


El operador:

??

significa:

"si el valor es null o undefined,
utiliza otro valor."
*/


const username = null;

const displayName = username ?? "Guest";


console.log(displayName);


/*
Resultado:

Guest
*/


/*
Ejemplo real:


Una API puede devolver:

{
    username: null
}


Y tú quieres mostrar:

Guest


Entonces:

*/


const nameToShow =
    username ?? "Guest";


// ============================================================
// NULLISH VS OR
// ============================================================

/*
Esto es importante.


|| considera valores falsy.


Por ejemplo:

0
""
false
null
undefined


Pero ??

solamente considera:

null
undefined


Ejemplo:
*/


const score = 0;


console.log(
    score || 100
);


/*
Resultado:

100


Pero:
*/


console.log(
    score ?? 100
);


/*
Resultado:

0


¿Por qué?

Porque 0 NO es null
ni undefined.
*/


// ============================================================
// PARTE 13
// COMBINANDO TODO
// ============================================================

/*
Ahora vamos a pensar como
un programador de verdad.


Tenemos productos:
*/


const products = [

    {
        name: "Laptop",
        price: 3000,
        stock: 5,
        category: "tech"
    },

    {
        name: "Mouse",
        price: 100,
        stock: 0,
        category: "tech"
    },

    {
        name: "Chair",
        price: 500,
        stock: 10,
        category: "office"
    },

    {
        name: "Keyboard",
        price: 200,
        stock: 3,
        category: "tech"
    }

];


/*
Pregunta:

¿Cuáles productos:

1. Son tech
2. Tienen stock
3. Cuestan más de 150
4. Y quiero solamente sus nombres?


No necesitamos hacer
un montón de loops manualmente.

Pensamos:

FILTRAR
↓
FILTRAR
↓
TRANSFORMAR
*/


const result = products

    .filter(

        ({ category }) =>
            category === "tech"

    )

    .filter(

        ({ stock }) =>
            stock > 0

    )

    .filter(

        ({ price }) =>
            price > 150

    )

    .map(

        ({ name }) =>
            name

    );


console.log(result);


/*
Resultado:

[
    "Laptop",
    "Keyboard"
]
*/


/*
Mira lo que acabamos de hacer:

ARRAY
↓
FILTER
↓
FILTER
↓
FILTER
↓
MAP
↓
ARRAY FINAL


Esto es pensamiento funcional.


No estamos diciendo:

"haz un for aquí,
luego otro if,
luego otra variable..."


Estamos diciendo:

"Quiero estos datos."

Y expresamos la transformación.
*/


// ============================================================
// PARTE 14
// TRANSFORMAR OBJETOS SIN MUTARLOS
// ============================================================

/*
Supongamos que una API devuelve:
*/


const productOriginal = {

    name: "Laptop",

    price: 3000

};


/*
Queremos agregar:

discountedPrice
*/


const productUpdated = {

    ...productOriginal,

    discountedPrice: 2500

};


/*
El original sigue igual:

*/


console.log(productOriginal);


/*
Resultado:

{
    name: "Laptop",
    price: 3000
}
*/


console.log(productUpdated);


/*
Resultado:

{
    name: "Laptop",
    price: 3000,
    discountedPrice: 2500
}
*/


/*
Este patrón:

{
    ...object,
    nuevaPropiedad: valor
}


lo vas a utilizar MUCHÍSIMO
en React.
*/


// ============================================================
// PARTE 15
// MAP + SPREAD
// ============================================================

/*
Ahora imagina que tenemos
muchos productos.

Queremos agregar:

onSale: true

a todos.
*/


const products2 = [

    {
        name: "Laptop",
        price: 3000
    },

    {
        name: "Mouse",
        price: 100
    }

];


const productsOnSale = products2.map(

    product => ({

        ...product,

        onSale: true

    })

);


console.log(productsOnSale);


/*
Resultado:

[
    {
        name: "Laptop",
        price: 3000,
        onSale: true
    },

    {
        name: "Mouse",
        price: 100,
        onSale: true
    }
]


Esto es:

MAP
+
SPREAD


Una combinación extremadamente útil.
*/


// ============================================================
// PARTE 16
// REDUCE PARA CREAR ESTADÍSTICAS
// ============================================================

const transactions = [

    {
        type: "income",
        amount: 1000
    },

    {
        type: "expense",
        amount: 200
    },

    {
        type: "income",
        amount: 500
    },

    {
        type: "expense",
        amount: 100
    }

];


/*
Queremos obtener:

{
    income: 1500,
    expense: 300
}


Aquí reduce es perfecto.

¿Por qué?

Porque tenemos:

MUCHAS TRANSACCIONES

y queremos:

UN SOLO OBJETO DE RESUMEN.
*/


const summary = transactions.reduce(

    (result, transaction) => {

        if (transaction.type === "income") {

            result.income += transaction.amount;

        } else {

            result.expense += transaction.amount;

        }

        return result;

    },

    {
        income: 0,
        expense: 0
    }

);


console.log(summary);


/*
Resultado:

{
    income: 1500,
    expense: 300
}
*/


// ============================================================
// PARTE 17
// CÓMO PENSAR LOS MÉTODOS
// ============================================================

/*
Quiero que a partir de ahora
antes de escribir código
te hagas esta pregunta:


¿QUÉ QUIERO HACER CON LOS DATOS?


--------------------------------------------

QUIERO TRANSFORMAR CADA ELEMENTO

↓

MAP


--------------------------------------------

QUIERO QUEDARME CON ALGUNOS

↓

FILTER


--------------------------------------------

QUIERO ENCONTRAR UNO

↓

FIND


--------------------------------------------

QUIERO SABER SI EXISTE AL MENOS UNO

↓

SOME


--------------------------------------------

QUIERO SABER SI TODOS CUMPLEN

↓

EVERY


--------------------------------------------

QUIERO CONVERTIR MUCHOS ELEMENTOS
EN UN RESULTADO

↓

REDUCE


--------------------------------------------


Esto es muchísimo más importante
que memorizar sintaxis.
*/


// ============================================================
// PARTE 18
// EJEMPLO REAL DE E-COMMERCE
// ============================================================

/*
Imagina que tu backend devuelve:
*/


const storeProducts = [

    {
        id: 1,
        name: "Laptop",
        price: 3000,
        stock: 5
    },

    {
        id: 2,
        name: "Mouse",
        price: 100,
        stock: 20
    },

    {
        id: 3,
        name: "Keyboard",
        price: 200,
        stock: 0
    }

];


/*
Quieres mostrar solamente
productos disponibles.


Entonces:

*/


const availableProducts = storeProducts.filter(

    ({ stock }) => stock > 0

);


/*
Luego quieres mostrar
solamente los nombres:


*/


const availableProductNames =
    availableProducts.map(

        ({ name }) => name

    );


/*
Resultado:

[
    "Laptop",
    "Mouse"
]
*/


/*
Pero podríamos encadenarlo:

*/


const availableProductNames2 =
    storeProducts

        .filter(
            ({ stock }) => stock > 0
        )

        .map(
            ({ name }) => name
        );


/*
Este patrón aparece
constantemente en frontend.
*/


// ============================================================
// PARTE 19
// ALGO MUY IMPORTANTE:
// NO TODO DEBE SER MAP/FILTER/REDUCE
// ============================================================

/*
No quiero que salgas pensando:

"Todo lo tengo que hacer con reduce."


NO.


Si un simple:

for

hace el código más claro,
puedes utilizarlo.


Los métodos de arrays son herramientas.


El objetivo es:

CÓDIGO CLARO.
*/


// ============================================================
// PARTE 20
// RESUMEN MENTAL
// ============================================================

/*

CALLBACK

Una función que pasamos
a otra función.


MAP

Transforma.

Muchos → muchos.


FILTER

Selecciona.

Muchos → algunos.


FIND

Busca uno.

Muchos → uno.


SOME

Pregunta:

"¿Existe alguno?"


EVERY

Pregunta:

"¿Todos cumplen?"


REDUCE

Acumula.

Muchos → uno.


SPREAD

Expande / copia.


REST

Recoge argumentos.


DESTRUCTURING

Extrae información.


OPTIONAL CHAINING

Evita errores cuando
una propiedad puede no existir.


NULLISH COALESCING

Proporciona un valor alternativo
cuando tenemos null/undefined.


============================================================
*/


// ============================================================
// PARTE 21
// EL MODELO MENTAL MÁS IMPORTANTE
// ============================================================

/*
Cuando recibas datos:

[
    {...},
    {...},
    {...},
    {...}
]


NO PIENSES INMEDIATAMENTE:

"Necesito un for."


Primero pregunta:


¿Quiero transformar?

→ MAP


¿Quiero eliminar elementos?

→ FILTER


¿Quiero encontrar uno?

→ FIND


¿Quiero comprobar si existe?

→ SOME


¿Quiero comprobar si todos cumplen?

→ EVERY


¿Quiero obtener un resultado acumulado?

→ REDUCE


Y muchas veces:

FILTER → MAP

FILTER → FILTER → MAP

FILTER → REDUCE

MAP → REDUCE


Esto es el tipo de razonamiento
que quiero que desarrolles durante
este roadmap.
*/


// ============================================================
// FIN DEL DÍA 5
// ============================================================

/*
Si entendiste esta clase,
ya no estás simplemente aprendiendo
"sintaxis de JavaScript".

Estás aprendiendo a:

PENSAR EN DATOS.

Y eso es exactamente lo que
vamos a necesitar cuando lleguemos a:

JavaScript
↓
React
↓
APIs
↓
Node
↓
Express
↓
Bases de datos
↓
Proyectos reales


============================================================
FIN
============================================================
*/