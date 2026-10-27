package main

import (
	"errors"
	"fmt"
)

//! Variables:

var name string = "Zenen" // Variable global con tipo stricto

var name2 = "Zenen" // Variable global dejando que go infiera el tipo

//go tiene type inference

// var vs := 

var name3 string = "Zenen" // permite una declaracion explicita

// name := "Zenen" es mas compacta y muy comun dentro de fucniones

//Nueva variable dentro de una funcion -> normalmente := 

//! Constantes: 

const appName = "Git2post" // asi como en js una constante no puede cambiar

//! Tipos basicos:

/* 
	string
	int
	float64
	bool
	byte es un alias de uint8
	rune es un alias de int32 y aparece frecuentemente en caracteres Unicode
*/

//! Zero Values

// Las vasiablsee tienen un valor 0 cuando no se inicializan

// por ejemplo: 

var name5 string // name = ""
var age2 int  // age = 0

//! nil

// Ausencia de valor para determindos tipos, yo lo veo como un null

//por ejemplo: 

var pointer *int // inicialmente pointer == nil

//!scope

// las variables tienen alcance: 

func main () {
	name := "Zenen"
	if true {
		age := 24 //age solo existe en este scope
		fmt.Println(age)
	}
	fmt.Println(name)
}

//!if

/* 
age3 := 24

if age >= 14{
	fmt.Prinln("Adult")
}else{
	fmt.Println("Minor")
}

*/

// no se necesita parentesis obligarorios

//! for 

//go utiliza for como mecanismo principal para loops:

/*

for i := 0 ; i < 5; i++ {
	fmt.Println(i)
}

tambien puede funcionar como un while

count := 0

for count < 5 {
	fmt.Println(count)
	count++
}

*/

//! switch

/*

util para estados y http

status := "success"

switch status{
case "loading" :
	fmt.Println("Loading")
case "success" :
	fmt.Println("success")
case "error" :
	fmt.Println("Error")
default : 
	fmt.Println ("Uknown")
}

*/

//! funciones

// se declaran con: 

func greet (name string) {
	fmt.Println("hello", name )
}

// con retorno asi como en TS

func add(a int, b int) int {
	return a + b
}

var result = add(5, 3) 

//multiples valores de retorno

func divide (a float64, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("cannot divide by zero")
	}
	return a/b, nil
}

//! el patron value, err

// en javascript es muy comun tener esto: 


/*

try{
	const data = await fetchData()
} catch(err){

}

*/

// en go sera esto: 

/*

data, err := fetchData()

if(err != nil){
	manejar error
}

los errores normales forman parte expplicita del flujo de datos

*/

//! el tipo error

// un funcion puede devolver

func something() (string, error)

//si todo sale bien entonces err == nil

// si hubo error : err != nil

