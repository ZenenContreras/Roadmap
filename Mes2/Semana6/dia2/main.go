package main

import "fmt"

//un array tiene tamaño fijo 

var numbers []int = []int{1, 2, 3, 4}

// los arrays tienen valores fijos 

func array() {
	numbers := [3]int{1,2,3}
	fmt.Println(numbers)
}

//! para colecciones flexibles utilizaremos Slices

var sliceNumbers []int // sin tamaño declarado

//! append 

func appendE() {
	numbers := append(numbers, 10) // solo funciona para slices alparecer
	fmt.Println(numbers)
}

//!len

func lenElements() {
	fmt.Println(len(numbers)) // cantidad actual de elementos
}

//!cap

//un slice tambien tiene una capacidad

func capSlice () {
	fmt.Println(cap(numbers))
}

//! Slicing

// obtener una parte del slice asi como el .slice de js

func slice() {
	numbers:= []int{10,20,30,40,50}

	part := numbers[1:4]

	fmt.Println(part)
}

//slices de structs

//mas adelante se tendra: 

type Post struct { // es como un type en TYPESCRIPT
	ID int
	Content string
}

// Y podremos hacer:

var posts []Post // representa un slices de posts tipado

//! Maps: 

//Un map almacena key -> value 

//ejemplo: 

var ages map[string]int = map[string]int{
	"Zenen" : 24,
	"Ana" : 22,
}

//tambien se puede crear con: 

// ages := make(map[string]int)

//! leer un map: 

var age = ages["zenen"]

//si existe le da el valor si no el resultado sera el zero value del tipo del valor. por ejemplo para int == 0 

//! value, ok

var age2, ok = ages["zenen"]

//si exites age = 24, ok =true si no: age=0 y ok= false

//! eliminar elementos:

// delete(ages, "zenen")

//! recorrer maps: 

func recorrerMaps () {
	for name, age := range ages {
		fmt.Println(name, age)
	}
}

//! slice vs Map :

/*
	Una forma sencilla de pensarlo es asi: 

	slice -> coleccion/secuencia
	posts
	users
	repositories

	map -> acceso por clave
	userId -> user
	repositoryId -> Repository

*/

//! Structs

// un struct permite crear un tipo compuesto

type Post2 struct {
	ID int
	Content string
}

var post2 = Post2{
	ID: 1,
	Content: "My first post",
}

//! Por que se necesitan los structs

// sin un struct los valores esta separados y sin estructura clara y tipada. (No hay una entidad)

//! Struct tags

//cuando trabajemos con JSON tendremos nombres como: 

//ID Content CreatedAt

//Se puede utilizar tags

type Post3 struct{
	ID int `json:"id"`
	content string `json:"content"`
	CreatedAt string `json:"CreatedAt"`
}

//! Pointers

// un pointer permite trabajar con una referencia a un valor

var age3 = 24

var ptr = &age3 // obtener la direcion en donde esta almacenado age

// para obtener el valor apuntado *ptr

//! Pointer a un struct

var post4 = Post3{
	ID: 1,
	content: "Hello",
}

var postPtr = &post4

// y se puede acceder con fmt.Println(postPtr.Content)

//! metodos 

// una funcion normal: 

func printPost (post Post3){
	fmt.Println(post.content)
}

// un metodo perteneciente a un tipo: 

func (p Post3) Print() {
	fmt.Println(p.content)
}

func metodo(){
	p := Post3{ID: 1, content: "Hola content"}
	p.Print()
}

//! Pointer receiver

func (p *Post3) updateContent(content1 string){
	p.content = content1
}

// y se hace post.updateContent("New Content")
// eso modifica el post original porque el receiver es un pointer


//! Value receiver vs pointer receiver !!!

// value receiver: 
func (p Post3) Print2()

// trabaja con una copia del valor, util cuando no se necesita modificar el struct

func (p *Post3) updateContent2(content string)
// trabaja con el objeto original, util cunaod necesitas modificarlo y en otros casos para evitar copias innecesarias 

//! interfaces: 

type Speaker interface{
	Speak() string
}

// un tipo satisface speaker si tiene un metodo Speak() string
// no se necesta escribir implements Speaker

//! Implementacion Implicita

type Dog struct {}

func (d Dog) speak() string {
	return "woof"
}

// se puede hacer: var speaker Speaker = Dog{}

// otro: 

type Cat struct{}

func (c Cat) speak() string {
	return "Meow"
}


func main () {
	
	fmt.Println("Hello go!")
	appendE()
	capSlice()
	slice()

	//! range 
	//recorrer el slice con:
	for index, value := range numbers{ // si no se necesita el indice se coloca _,
		fmt.Println(index, value)
	}

	recorrerMaps()
	fmt.Println(*ptr)
	*ptr = 30
	fmt.Println(*ptr)

	metodo()
}

