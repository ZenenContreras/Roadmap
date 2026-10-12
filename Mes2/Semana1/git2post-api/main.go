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

	
}


func login(username string, password int) {
	if username == "admin" && password == 1234 {
		fmt.Println("Login Succesful")
	} else {
		fmt.Println("Invalid Credential")
	}
}

func main() {
	grades := []float64{4, 5, 3, 2}

	login("admin", 1234)
	practicaDia2()
	fmt.Println(average(grades))

}
