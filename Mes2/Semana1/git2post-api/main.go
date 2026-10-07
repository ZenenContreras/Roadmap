package main

import "fmt"

/*
func personalInfo(name string, age int, Country string, Developer bool) {
	fmt.Println("name: ", name, "Age: ", age, "Country: ", Country, "Developer: ", Developer )
}

func main () {
	personalInfo("Zenen Contreras", 24, "Colombia", true)

}

*/

func login(username string, password int) {
	if username == "admin" && password == 1234 {
		fmt.Println("Login Succesful")
	} else {
		fmt.Println("Invalid Credential")
	}
}

func main() {
	login("admin", 1234)
}
