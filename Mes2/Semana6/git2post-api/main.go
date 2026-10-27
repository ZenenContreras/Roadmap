package main

import (
	"fmt"
)

/*
func personalInfo(name string, age int, Country string, Developer bool) {
	fmt.Println("name: ", name, "Age: ", age, "Country: ", Country, "Developer: ", Developer )
}

func main () {
	personalInfo("Zenen Contreras", 24, "Colombia", true)

}

*/

func practicaDia2 (){
	numbers := [5]int{10,20,30,40,50}

	fmt.Println(numbers[0])
	fmt.Println(numbers[4])
	numbers[0] = 100
	fmt.Println(numbers)

	for i := 0; i < len(numbers); i++ {
		fmt.Println("For basico: ", numbers[i])
	}

	for _, value := range numbers{
		fmt.Println("Range: ", value)
	}

	numbers2 := []int{10, 20, 30}

	fmt.Println(numbers2)

	numbers2 = append(numbers2, 40, 50, 60)

	fmt.Println(len(numbers2))
	fmt.Println(cap(numbers2))

	numbers2 = numbers2[0:5]

	fmt.Println(numbers2)

	technologies := []string{
		"React",
		"TypeScript",
		"Go",
		"PostgreSQL",
		"Docker",
	}

	for _, value := range technologies {
		fmt.Println(value)
	}

	technologies = technologies[2:5]

	fmt.Println("Slice: ", technologies)

}


func average(grades []float64) float64 {

	if len(grades) == 0 {
		return 0.0
	}

	sum := 0.0

	for _, value := range grades {
		sum += value
		fmt.Println(sum)
	}

	return sum / float64(len(grades))
}

func mapbasico () {
	ages := map[string]int{}

	ages["Zenen"] = 24
	ages["Ana"] = 22
	ages["Carlos"] = 27

	value, ok := ages["Zenen"]

	if !ok{
		fmt.Println("user not found")
	}else{
		fmt.Println("User found: ", value)
	}

	delete(ages, "Ana")
	fmt.Println(ages)
	
}

var repositories = map[int]string{
	1: "Git2Post",
	2: "DevPulse",
	3: "Portfolio",
}

func findRepository (id int) (string, bool){

	name, ok := repositories[id]

	if !ok{
		fmt.Println("No se encontro un repositorio con ese id", ok)
	}else{
		fmt.Println("Reposiorio encontrado! ", name)
	}

	return name, ok

}

type Post struct {
	ID int `json:"id"`
	Content string `json:"content"`
}


func login(username string, password int) {
	if username == "admin" && password == 1234 {
		fmt.Println("Login Succesful")
	} else {
		fmt.Println("Invalid Credential")
	}
}

func buscarPost (posts []Post, id int) (Post, bool){

	for _, post := range posts{
		if post.ID == id{
			return post, true
		}
	}
	return Post{}, false
}

func punter () {
	age := 24
	ptr := &age

	fmt.Println(age) // variable
	fmt.Println(ptr) // direccion en memoria
	fmt.Println(*ptr) // valor apuntado

	*ptr = 30

	fmt.Println(age) // variable modificada en la direccion en memoria

	post := Post{
		ID: 1,
		Content: "Old Content",
	}

	ptrPost := &post

	*&ptrPost.Content = "New Content"

	fmt.Println(post.Content)
}

func (p Post) Print(){
	fmt.Println(p.Content)
}

func main() {
	grades := []float64{4, 5, 3, 2}

	login("admin", 1234)

	practicaDia2()

	fmt.Println(average(grades))

	mapbasico()

	findRepository(2)

	post := Post{
		ID: 1,
		Content: "Learning go",
	}

	post.Content = "Learning Go for backend development"
	fmt.Println(post.ID , post.Content)

	posts := []Post{
		{
			ID: 1,
			Content: "Learning go",
		},
		{
			ID: 2,
			Content: "Building Git2post",
		},
	}

	for _, post := range posts{
		fmt.Println(post)
	}

	fmt.Println(buscarPost(posts, 2))

	punter()

	post.Print()


}
