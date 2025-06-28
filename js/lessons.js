// File: lessons.js
// This file contains a comprehensive list of Go programming lessons 
// with detailed explanations and practical code examples, translated into English.

if (typeof window.globalData === 'undefined') {
    window.globalData = {};
}


var lessons = [    // =================================================================
    // =                       Go Fundamentals (1-8)                     =
    // =================================================================
    {
        title: "What is Go?",
        description: "A comprehensive introduction to the Go language, its features, and its use cases.",
        detailedDescription: "Go (or Golang) is an open-source programming language developed at Google. It is characterized by its simplicity, high performance, and excellent support for concurrency. It is widely used in backend development, command-line tools, DevOps, and distributed systems.",
        codeExample: `package main

import "fmt"

func main() {
	fmt.Println("Go is a powerful and fun language!")
}`
    },
    {
        title: "Setting Up Your Go Environment",
        description: "How to install Go, set up your workspace, and the necessary tools.",
        detailedDescription: "To start programming in Go, you need to install the official Go compiler from golang.org. After installation, you will need to set up environment variables like GOPATH and GOROOT (in modern versions, this is largely automated). The preferred code editor is VS Code with the official Go extension.",
        codeExample: `// After installing Go, you can check the version using this command in the terminal:
// go version

// To run a Go file, use the run command:
// go run your_file_name.go`
    },
    {
        title: "'Hello, World' Program",
        description: "Writing and running your first program in Go.",
        detailedDescription: "The 'Hello, World!' program is the first step to ensure your development environment is working correctly. In Go, every executable program must be in the `main` package and must have a `main` function as its entry point.",
        codeExample: `package main

import "fmt" // Import the fmt package for formatted I/O

// main is the function that gets executed when the program runs
func main() {
	fmt.Println("Hello, World!")
}`
    },
    {
        title: "Comments",
        description: "How to write comments in Go and their importance.",
        detailedDescription: "Comments in Go, as in most languages, are text that the compiler ignores and are used to explain the code. There are two types: single-line comments (`//`) and multi-line comments (`/* ... */`).",
        codeExample: `package main

import "fmt"

func main() {
	// This is a single-line comment. It's used to explain the next line of code.
	fmt.Println("This line will be executed.")

	/*
	  This is a multi-line comment.
	  It's useful for longer explanations.
	*/
}`
    },
    {
        title: "Variables",
        description: "How to declare variables and specify their types in Go.",
        detailedDescription: "Variables are symbolic names for memory locations to store data. In Go, the data type of each variable must be specified (Static Typing). Variables can be declared using the `var` keyword or using the short declaration operator `:=` inside functions.",
        codeExample: `package main

import "fmt"

func main() {
	// Long declaration form using var
	var age int = 30
	var name string = "John"

	// Short declaration form (most common inside functions)
	// Go infers the type automatically
	city := "New York"
	isProgrammer := true

	fmt.Println(name, "is", age, "and lives in", city)
	fmt.Println("Is he a programmer?", isProgrammer)
}`
    },
    {
        title: "Constants",
        description: "Defining and using constants for values that do not change.",
        detailedDescription: "Constants are used to store values that cannot be changed after they are defined. They are declared using the `const` keyword. Their values must be known at compile-time.",
        codeExample: `package main

import "fmt"

const Pi = 3.14
const AppName = "MyGoApp"

func main() {
	fmt.Println("The value of Pi is:", Pi)
	// AppName = "NewApp" // This would cause a compile error
}`
    },
    {
        title: "Basic Data Types",
        description: "A look at data types like int, float64, bool, string.",
        detailedDescription: "Go is a statically typed language. Basic types include:\n- **int, int8, int32, int64:** for integers.\n- **uint:** for non-negative integers.\n- **float32, float64:** for decimal numbers.\n- **bool:** for boolean values `true` or `false`.\n- **string:** for text strings.\n- **rune:** to represent a single Unicode character.",
        codeExample: `package main

import "fmt"

func main() {
	var anInteger int = 42
	var aFloat float64 = 3.14
	var aString string = "Go!"
	var aBoolean bool = false

	fmt.Printf("Type: %T, Value: %v\n", anInteger, anInteger)
	fmt.Printf("Type: %T, Value: %v\n", aFloat, aFloat)
	fmt.Printf("Type: %T, Value: %v\n", aString, aString)
	fmt.Printf("Type: %T, Value: %v\n", aBoolean, aBoolean)
}`
    },
    {
        title: "Formatted Printing (Printf)",
        description: "Using `fmt.Printf` to control the output format.",
        detailedDescription: "The `fmt` package provides the powerful `Printf` function that allows for formatted embedding of variables within strings using 'formatting verbs' like `%v` for value, `%T` for type, `%d` for integer, `%s` for string, and `%f` for float.",
        codeExample: `package main

import "fmt"

func main() {
	personName := "Alice"
	personAge := 25
	personHeight := 1.75

	fmt.Printf("Name: %s, Age: %d, Height: %.2f meters\n", personName, personAge, personHeight)
}`
    },
    // =================================================================
    // =                       Flow Control (9-11)                     =
    // =================================================================
    {
        title: "if/else Statements",
        description: "How to make decisions in code.",
        detailedDescription: "`if`, `else if`, and `else` statements are used to execute different blocks of code based on whether certain conditions are met. A short-lived variable can also be declared within an `if` condition.",
        codeExample: `package main

import "fmt"

func main() {
	score := 88

	if score >= 90 {
		fmt.Println("Excellent")
	} else if score >= 80 {
		fmt.Println("Very Good")
	} else {
		fmt.Println("Good")
	}

	// Variable declaration inside the condition
	if num := 9; num < 10 {
		fmt.Println(num, "is less than 10")
	}
}`
    },
    {
        title: "switch Statements",
        description: "An organized alternative to multiple if/else statements.",
        detailedDescription: "`switch` is a cleaner way to execute different code blocks based on the value of a single variable. In Go, you don't need to write `break` at the end of each `case` by default, a feature that makes the code less error-prone.",
        codeExample: `package main

import "fmt"

func main() {
	day := "Tuesday"

	switch day {
	case "Sunday":
		fmt.Println("Start of the week")
	case "Monday", "Tuesday", "Wednesday":
		fmt.Println("Midweek")
	case "Thursday":
		fmt.Println("Almost the weekend")
	default:
		fmt.Println("Weekend!")
	}
}`
    },
    {
        title: "The 'for' Loop",
        description: "Go has only one type of loop: `for`.",
        detailedDescription: "Unlike other languages, Go only has the `for` loop, but it is very versatile. It can be used as a traditional `for` loop, a `while` loop, or an infinite loop.",
        codeExample: `package main

import "fmt"

func main() {
	// 1. Classic for loop
	for i := 0; i < 3; i++ {
		fmt.Println("Classic style:", i)
	}

	// 2. Using for as a while loop
	j := 0
	for j < 3 {
		fmt.Println("While style:", j)
		j++
	}

	// 3. Loop for iterating over a slice (range)
	names := []string{"John", "Sara"}
	for index, name := range names {
		fmt.Printf("Index: %d, Name: %s\n", index, name)
	}
}`
    },
    // =================================================================
    // =            Composite Data Structures (12-15)                =
    // =================================================================
    {
        title: "Arrays",
        description: "Fixed-size collections of elements of the same type.",
        detailedDescription: "An array in Go is a collection of elements of the same type with a fixed size determined at declaration. Due to their fixed size, arrays are not used as frequently in Go compared to slices.",
        codeExample: `package main

import "fmt"

func main() {
	// Declare an array of 3 integers
	var numbers [3]int
	numbers[0] = 10
	numbers[1] = 20
	numbers[2] = 30

	// Declare and initialize in one line
	names := [2]string{"Alice", "Bob"}

	fmt.Println("Numbers:", numbers)
	fmt.Println("Names:", names)
	fmt.Println("Length of numbers array:", len(numbers))
}`
    },
    {
        title: "Slices",
        description: "A flexible and powerful interface for arrays.",
        detailedDescription: "A slice is the most common and powerful interface for handling data sequences in Go. It is flexible and dynamically sized. A slice internally points to a part of an underlying array and consists of three parts: a pointer, a length, and a capacity.",
        codeExample: `package main

import "fmt"

func main() {
	// Create a slice using make
	numbers := make([]int, 3, 5) // type, length 3, capacity 5
	numbers[0] = 1
	numbers[1] = 2
	numbers[2] = 3

	// Add a new element using append
	// append creates a new underlying array if capacity is exceeded
	numbers = append(numbers, 4)

	fmt.Println("Slice:", numbers)      // [1 2 3 4]
	fmt.Println("Length:", len(numbers)) // 4
	fmt.Println("Capacity:", cap(numbers))  // 5
}`
    },
    {
        title: "Maps",
        description: "An unordered collection of key-value pairs.",
        detailedDescription: "A map is a data structure that stores a collection of key-value pairs. All keys must be of the same type, and all values must be of the same type. They are very useful for fast data lookup.",
        codeExample: `package main

import "fmt"

func main() {
	// Create a map linking student names to their grades
	grades := make(map[string]int)
	grades["John"] = 90
	grades["Sara"] = 95

	// Another way to declare
	// capitals := map[string]string{"USA": "Washington D.C.", "France": "Paris"}

	fmt.Println("John's grade:", grades["John"])

	// Delete an element
	delete(grades, "John")

	// Check if a key exists
	grade, ok := grades["Sara"]
	if ok {
		fmt.Println("Sara's grade exists and it is:", grade)
	}
}`
    },
    {
        title: "Structs",
        description: "Grouping different data types into a single structure.",
        detailedDescription: "A struct is a custom data type that allows grouping multiple data fields (which can be of different types) together into a single entity. It is the primary way in Go to create complex data models (like a user, product, or car).",
        codeExample: `package main

import "fmt"

// Define a struct representing an Employee
type Employee struct {
	ID     int
	Name   string
	Salary float64
}

func main() {
	// Create an instance of the Employee struct
	emp1 := Employee{
		ID:     1,
		Name:   "Mohammed",
		Salary: 5000.0,
	}

	fmt.Println("Employee:", emp1)
	fmt.Println("Employee Name:", emp1.Name)
}`
    },
    // =================================================================
    // =               Functions and Pointers (16-19)                  =
    // =================================================================
    {
        title: "Functions",
        description: "Defining and calling functions in Go.",
        detailedDescription: "Functions are reusable blocks of code that perform a specific task. A function is defined using the `func` keyword, followed by the function name, a list of parameters, and the return value type.",
        codeExample: `package main

import "fmt"

// A function that adds two integers and returns the sum
func add(a int, b int) int {
	return a + b
}

func main() {
	result := add(10, 20)
	fmt.Println("Result:", result)
}`
    },
    {
        title: "Multiple Return Values",
        description: "A powerful feature in Go that allows functions to return more than one value.",
        detailedDescription: "Functions in Go can return multiple values. This feature is very useful and common, especially for returning a result and an error at the same time.",
        codeExample: `package main

import "fmt"

// A function that returns two names
func getNames() (string, string) {
	return "Alice", "Bob"
}

func main() {
	firstName, lastName := getNames()
	fmt.Println("Names:", firstName, lastName)
}`
    },
    {
        title: "Variadic Functions",
        description: "Creating functions that accept an indefinite number of arguments.",
        detailedDescription: "A variadic function is a function that can accept a variable number of arguments of the same type. This is achieved by specifying `...` before the type of the last parameter in the function signature. Inside the function, these arguments are treated as a slice of that type.",
        codeExample: `package main

import "fmt"

// This function takes an arbitrary number of integers
func sumAll(numbers ...int) int {
	total := 0
	for _, num := range numbers {
		total += num
	}
	return total
}

func main() {
	total1 := sumAll(1, 2, 3)
	total2 := sumAll(10, 20, 30, 40)
	fmt.Println("Sum 1:", total1) // 6
	fmt.Println("Sum 2:", total2) // 100
}`
    },
    {
        title: "Pointers",
        description: "Understanding pointers and how to handle memory addresses.",
        detailedDescription: "A pointer is a variable that stores the memory address of another variable. This allows us to pass data to functions 'by reference' instead of 'by value', meaning the function can modify the original variable directly. The `&` operator is used to get the address of a variable, and the `*` operator is used to access the value at that address.",
        codeExample: `package main

import "fmt"

// This function takes a pointer to an integer
func increment(number *int) {
	*number++ // Increment the value at the given address
}

func main() {
	x := 10
	fmt.Println("Original value:", x)

	increment(&x) // Pass the memory address of x

	fmt.Println("Value after modification:", x) // x has been modified
}`
    },
    // =================================================================
    // =      Structs, Methods, and Interfaces (OOP in Go) (20-25)      =
    // =================================================================
    {
        title: "Methods",
        description: "Attaching functions to specific types (like structs).",
        detailedDescription: "A method is a function with a 'receiver'. It is the way Go implements object-oriented programming concepts. By attaching a function to a specific type (usually a struct), it becomes a method of that type and can be called from instances of that type.",
        codeExample: `package main

import "fmt"

type Circle struct {
	Radius float64
}

// area() is a method with a value receiver for the Circle struct
func (c Circle) area() float64 {
	return 3.14 * c.Radius * c.Radius
}

func main() {
	myCircle := Circle{Radius: 5}
	fmt.Println("Circle area:", myCircle.area())
}`
    },
    {
        title: "Pointer vs Value Receivers",
        description: "The difference between modifying the original copy and a copied version of a struct.",
        detailedDescription: "When defining a method, you can use a value receiver or a pointer receiver.\n- **Value Receiver (`func (s MyStruct)`)**: The method operates on a copy of the struct. Any modifications inside the method will not affect the original struct.\n- **Pointer Receiver (`func (s *MyStruct)`)**: The method operates on the original struct (via a pointer). Any modifications will affect the original struct. This is more efficient for large structs.",
        codeExample: `package main

import "fmt"

type Counter struct {
	count int
}

// Method with a pointer receiver to modify the original struct
func (c *Counter) Increment() {
	c.count++
}

func main() {
	myCounter := &Counter{count: 0}
	fmt.Println("Initial count:", myCounter.count)
	myCounter.Increment()
	fmt.Println("Final count:", myCounter.count)
}`
    },
    {
        title: "Interfaces",
        description: "Defining common behaviors among different types.",
        detailedDescription: "An interface in Go is a type that defines a set of method signatures. Any other type that implements all the functions defined in the interface implicitly 'satisfies' that interface. Interfaces are a powerful tool for achieving polymorphism and writing flexible code.",
        codeExample: `package main

import "fmt"

// Define a Shape interface
type Shape interface {
	area() float64
}

type Rectangle struct{ Width, Height float64 }
type Circle struct{ Radius float64 }

// Rectangle satisfies the Shape interface
func (r Rectangle) area() float64 { return r.Width * r.Height }
// Circle satisfies the Shape interface
func (c Circle) area() float64 { return 3.14 * c.Radius * c.Radius }

// A function that takes any Shape and calculates its area
func printArea(s Shape) {
	fmt.Printf("Area of the shape is %0.2f\n", s.area())
}

func main() {
	myRectangle := Rectangle{Width: 10, Height: 5}
	myCircle := Circle{Radius: 7}
	printArea(myRectangle)
	printArea(myCircle)
}`
    },
    {
        title: "Empty Interface and Type Assertion",
        description: "Handling types that are unknown at compile time.",
        detailedDescription: "The empty interface `interface{}` is an interface that has no methods. Since every data type has zero or more methods, any type satisfies the empty interface. This allows us to write functions that accept any type of data. To access the original value and type, we use 'type assertion'.",
        codeExample: `package main

import "fmt"

func describe(i interface{}) {
	fmt.Printf("Type = %T, value = %v\n", i, i)
}

func main() {
	describe(42)
	describe("hello")

	var i interface{} = "world"
	// Type assertion to get the underlying string value
	s, ok := i.(string)
	if ok {
		fmt.Println("It's a string:", s)
	}
}`
    },
    {
        title: "Error Handling",
        description: "Go's pattern for handling errors by returning a value of type error.",
        detailedDescription: "Go treats errors as regular values. It is very common for functions that might fail to return a value of type `error` as the last return value. If the error value is `nil`, it means the function succeeded. Otherwise, it contains information about the error that occurred.",
        codeExample: `package main

import (
	"errors"
	"fmt"
)

// A function that might fail
func divide(a, b float64) (float64, error) {
	if b == 0 {
		return 0, errors.New("cannot divide by zero")
	}
	return a / b, nil // nil means no error
}

func main() {
	result, err := divide(10.0, 0.0)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result:", result)
	}
}`
    },
    {
        title: "Panic and Recover",
        description: "A mechanism for handling exceptional errors that stop the normal flow.",
        detailedDescription: "`panic` is a built-in function that stops the normal flow of control and enters a 'panicking' state. `recover` is a built-in function that regains control after a panic. This mechanism is used only for truly unexpected errors, like accessing an index out of an array's bounds, not for normal errors like failing to open a file.",
        codeExample: `package main

import "fmt"

func mayPanic() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()
    
    fmt.Println("About to panic!")
    panic("something went wrong")
    fmt.Println("This will not be executed.")
}

func main() {
    mayPanic()
    fmt.Println("Program continues after panic recovery.")
}`
    },
    // =================================================================
    // =                      Concurrency (26-31)                       =
    // =================================================================
    {
        title: "Goroutines",
        description: "Running functions concurrently and lightweightly.",
        detailedDescription: "A Goroutine is a lightweight execution thread that can be managed by the Go runtime. You can run a function in a new Goroutine simply by writing the `go` keyword before the function call. This allows for the efficient execution of thousands of concurrent tasks.",
        codeExample: `package main

import (
	"fmt"
	"time"
)

func say(text string) {
	for i := 0; i < 3; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(text)
	}
}

func main() {
	go say("world") // Run in a new goroutine
	say("hello")    // Run in the main goroutine
	time.Sleep(500 * time.Millisecond) // Wait for the goroutine to finish
}`
    },
    {
        title: "Channels",
        description: "A safe way to communicate between Goroutines.",
        detailedDescription: "Channels are typed pipes through which you can send and receive values between Goroutines using the arrow operator `<-`. This prevents race conditions and makes concurrent programming easier and safer.",
        codeExample: `package main

import "fmt"

func main() {
	// Create a channel that can carry strings
	messages := make(chan string)

	// An anonymous goroutine sends a message to the channel
	go func() { messages <- "ping" }()

	// The main goroutine receives the message from the channel
	// This is a 'blocking' operation until the message arrives
	msg := <-messages
	fmt.Println(msg) // prints "ping"
}`
    },
    {
        title: "Buffered Channels",
        description: "Channels that allow storing a limited number of values without a receiver.",
        detailedDescription: "By default, channels are unbuffered, meaning they will block the sender until there is a ready receiver. Buffered channels allow storing a limited number of values without a receiver. Blocking occurs only when the buffer is full (for the sender) or empty (for the receiver).",
        codeExample: `package main

import "fmt"

func main() {
	// Create a buffered channel with a capacity of 2
	messages := make(chan string, 2)

	// We can send two values without a receiver
	messages <- "buffered"
	messages <- "channel"

	// Receiving the values
	fmt.Println(<-messages)
	fmt.Println(<-messages)
}`
    },
    {
        title: "The 'select' Statement",
        description: "Waiting on multiple channel operations.",
        detailedDescription: "`select` is a statement that lets a goroutine wait on multiple channel operations. `select` blocks until one of its cases is ready to execute, then it executes that case. If multiple cases are ready, it chooses one at random.",
        codeExample: `package main

import (
    "fmt"
    "time"
)

func main() {
    c1 := make(chan string)
    c2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        c1 <- "one"
    }()
    go func() {
        time.Sleep(2 * time.Second)
        c2 <- "two"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-c1:
            fmt.Println("received", msg1)
        case msg2 := <-c2:
            fmt.Println("received", msg2)
        }
    }
}`
    },
    {
        title: "sync.WaitGroup",
        description: "A way to wait for a collection of Goroutines to finish.",
        detailedDescription: "`sync.WaitGroup` is a simple yet powerful way to synchronize goroutines. It allows the main goroutine to wait until a group of other goroutines has finished its work before proceeding. It has three functions: `Add` (to increment the counter), `Done` (to decrement the counter), and `Wait` (to wait until the counter becomes zero).",
        codeExample: `package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done() // Decrement the counter when the goroutine completes
    fmt.Printf("Worker %d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("Worker %d done\n", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1) // Increment the counter
        go worker(i, &wg)
    }
    wg.Wait() // Block until the counter is zero
    fmt.Println("All workers completed.")
}`
    },
    {
        title: "sync.Mutex",
        description: "Protecting shared data from concurrent access.",
        detailedDescription: "A mutual exclusion lock (`Mutex`) is used to protect parts of code (called critical sections) that access shared data. A `Mutex` ensures that only one goroutine can execute the critical section at any time, thus preventing race conditions.",
        codeExample: `package main

import (
    "fmt"
    "sync"
)

type SafeCounter struct {
    mu      sync.Mutex
    counter int
}

func (c *SafeCounter) Increment() {
    c.mu.Lock()   // Lock the mutex
    defer c.mu.Unlock() // Unlock when the function returns
    c.counter++
}

func main() {
    sc := SafeCounter{}
    var wg sync.WaitGroup

    for i := 0; i < 1000; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            sc.Increment()
        }()
    }

    wg.Wait()
    fmt.Println("Final counter:", sc.counter) // Should be 1000
}`
    },
    // =================================================================
    // =                 Packages and Standard Library (32-55)           =
    // =================================================================
    {
        title: "The 'defer' Statement",
        description: "Scheduling a function call to be executed just before the current function exits.",
        detailedDescription: "`defer` is a special keyword in Go. It schedules a function call (the deferred function) to be executed immediately before the function containing the `defer` statement finishes. It is typically used for cleanup tasks, such as closing files or releasing resources, to ensure they are executed regardless of how the function exits (whether normally or due to a panic).",
        codeExample: `package main

import "fmt"

func example() {
    defer fmt.Println("world") // This will be executed last
    fmt.Println("hello")
}

func main() {
    example()
}`
    },
    {
        title: "Organizing Code in Packages",
        description: "How to create and use your own packages to organize code.",
        detailedDescription: "Packages are Go's way of organizing and reusing code. Every folder containing Go files can be a package. The package name is defined at the beginning of each file. You can import another package to use its exported functions and types (which start with a capital letter).",
        codeExample: `// In file: mymath/math.go
// package mymath
// func Add(a, b int) int { return a + b }

// In file: main.go
package main
import (
    "fmt"
    // "path/to/your/mymath" // import your package
)
func main() {
    // result := mymath.Add(5, 10)
    // fmt.Println(result)
}`
    },
    {
        title: "File I/O",
        description: "Reading and writing files using the `os` package.",
        detailedDescription: "The `os` package in the standard library provides functions for interacting with the operating system, including file handling. You can create, read, write, and delete files using functions like `os.Create`, `os.ReadFile`, and `os.WriteFile`.",
        codeExample: `package main
import (
	"fmt"
	"os"
)
func main() {
	// Write to a file
	err := os.WriteFile("test.txt", []byte("Hello, Go!"), 0666)
	if err != nil {
		fmt.Println("Error writing file:", err)
		return
	}

	// Read from a file
	data, err := os.ReadFile("test.txt")
	if err != nil {
		fmt.Println("Error reading file:", err)
		return
	}
	fmt.Println("File content:", string(data))
}`
    },
    {
        title: "The `strings` Package",
        description: "A collection of useful functions for string manipulation.",
        detailedDescription: "The `strings` package provides many functions for manipulating strings, such as searching, replacing, splitting, and checking for prefixes or suffixes.",
        codeExample: `package main
import (
	"fmt"
	"strings"
)
func main() {
	text := "hello world, hello go"
	fmt.Println("Contains 'world':", strings.Contains(text, "world"))
	fmt.Println("Count 'hello':", strings.Count(text, "hello"))
	fmt.Println("To Upper:", strings.ToUpper(text))
	fmt.Println("Split by space:", strings.Fields(text))
}`
    },
    {
        title: "The `time` Package",
        description: "Handling time, dates, and durations.",
        detailedDescription: "The `time` package is used to get the current time, format dates, parse date strings, and handle durations and timers.",
        codeExample: `package main
import (
	"fmt"
	"time"
)
func main() {
	now := time.Now()
	fmt.Println("Current time:", now)
	// Go uses a specific layout string: "2006-01-02 15:04:05" to define formats
	fmt.Println("Formatted:", now.Format("2006-01-02 15:04:05"))
	
	later := now.Add(10 * time.Minute)
	fmt.Println("10 minutes later:", later)
}`
    },
    {
        title: "The `net/http` Package (Client)",
        description: "Making HTTP requests to fetch data from the web.",
        detailedDescription: "The `net/http` package allows you to create HTTP clients and servers. As a client, you can use it to make requests like GET, POST to APIs and get responses.",
        codeExample: `package main
import (
	"fmt"
	"io"
	"net/http"
)
func main() {
	resp, err := http.Get("https://api.ipify.org?format=json")
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	fmt.Println("My IP:", string(body))
}`
    },
    {
        title: "The `net/http` Package (Server)",
        description: "Building a simple web server.",
        detailedDescription: "Using the same `net/http` package, you can easily create a web server. You register 'handlers' for different URL paths, then start the server to listen for incoming requests.",
        codeExample: `package main
import (
	"fmt"
	"net/http"
)
func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, Web!")
}
func main() {
	http.HandleFunc("/hello", helloHandler)
	fmt.Println("Starting server on port 8080")
	// This is a blocking call, so the program will run forever
	http.ListenAndServe(":8080", nil)
}`
    },
    {
        title: "The `encoding/json` Package",
        description: "Converting data between Go structs and JSON format.",
        detailedDescription: "The `encoding/json` package is widely used in web development. `json.Marshal` is used to convert a Go struct (or map) into a JSON string. `json.Unmarshal` is used to convert a JSON string into a Go struct.",
        codeExample: `package main
import (
	"encoding/json"
	"fmt"
)
type User struct {
	Name string \`json:"name"\`
	Age  int    \`json:"age"\`
}
func main() {
	// Marshal: Go struct to JSON
	user := User{Name: "Saleh", Age: 29}
	jsonData, _ := json.Marshal(user)
	fmt.Println("JSON Output:", string(jsonData))

	// Unmarshal: JSON to Go struct
	var user2 User
	jsonString := \`{"name":"Fatima","age":25}\`
	json.Unmarshal([]byte(jsonString), &user2)
	fmt.Println("Go Struct Name:", user2.Name)
}`
    },
    {
        title: "The `sort` Package",
        description: "Sorting slices and custom data.",
        detailedDescription: "The `sort` package provides functions for sorting built-in slices (like int, float64, string). It also provides the `sort.Interface` interface to enable sorting of any custom data type.",
        codeExample: `package main
import (
	"fmt"
	"sort"
)
func main() {
	stringSlice := []string{"c", "a", "b"}
	sort.Strings(stringSlice)
	fmt.Println("Sorted Strings:", stringSlice)

	intSlice := []int{7, 2, 4}
	sort.Ints(intSlice)
	fmt.Println("Sorted Ints:", intSlice)

    // Check if a slice is already sorted
    isSorted := sort.IntsAreSorted(intSlice)
    fmt.Println("Are ints sorted?", isSorted)
}`
    },
    {
        title: "The `strconv` Package",
        description: "Converting data between strings and other basic types.",
        detailedDescription: "The `strconv` (string conversion) package provides functions to convert strings to types like int, float, bool, and vice versa.",
        codeExample: `package main
import (
	"fmt"
	"strconv"
)
func main() {
	// String to int
	number, _ := strconv.Atoi("123")
	fmt.Println(number + 1) // 124

	// Int to string
	text := strconv.Itoa(456)
	fmt.Println(text + " is a string")
}`
    },
    {
        title: "The `regexp` Package",
        description: "Searching for patterns in strings using regular expressions.",
        detailedDescription: "The `regexp` package provides support for regular expressions compliant with the RE2 standard. You can use it to check for pattern matches, find patterns, and replace them.",
        codeExample: `package main
import (
	"fmt"
	"regexp"
)
func main() {
	// Check if a string contains only letters
	match, _ := regexp.MatchString("^[a-zA-Z]+$", "hello")
	fmt.Println("Is it a match?", match)

	// Find the first number in a string
	re := regexp.MustCompile("[0-9]+")
	fmt.Println(re.FindString("abc123def456")) // "123"
}`
    },
    {
        title: "The `io` Package and Readers/Writers",
        description: "Understanding the basic `io.Reader` and `io.Writer` interfaces.",
        detailedDescription: "The `io` package is the heart of I/O operations in Go. It defines two fundamental interfaces: `io.Reader` for 'reading from' a data source (like a file or a network request), and `io.Writer` for 'writing to' a data destination. Many packages in Go work with these interfaces.",
        codeExample: `package main
import (
	"fmt"
	"io"
	"strings"
)
func main() {
	// strings.NewReader creates an in-memory io.Reader
	reader := strings.NewReader("Hello from io.Reader!")
	
	buffer := make([]byte, 8)
	for {
		n, err := reader.Read(buffer)
		if err == io.EOF {
			break
		}
		fmt.Print(string(buffer[:n]))
	}
	fmt.Println()
}`
    },
    {
        title: "The `bufio` Package",
        description: "Performing buffered I/O operations, such as reading files line by line.",
        detailedDescription: "The `bufio` package provides buffered I/O functionality. `bufio.Scanner` is a powerful and useful tool for parsing input, such as reading data from a file line by line or word by word.",
        codeExample: `package main
import (
	"bufio"
	"fmt"
	"strings"
)
func main() {
	input := "line one\nline two\nline three"
	scanner := bufio.NewScanner(strings.NewReader(input))
	
	// Scan line by line
	for scanner.Scan() {
		fmt.Println("Line:", scanner.Text())
	}
}`
    },
    {
        title: "The `flag` Package",
        description: "Parsing command-line flags.",
        detailedDescription: "The `flag` package allows for defining and parsing flags passed to your program via the command line. This is very useful for creating customizable command-line tools.",
        codeExample: `package main
import (
	"flag"
	"fmt"
)
func main() {
	// Define a string flag "name" with a default value and a help message
	namePtr := flag.String("name", "world", "a name to greet")
	
	// Parse the flags from the command line
	flag.Parse()
	
	fmt.Printf("Hello, %s!\n", *namePtr)
	// Run with: go run your_file.go --name=Go
}`
    },
    {
        title: "The `log` Package",
        description: "Logging messages and errors in a structured manner.",
        detailedDescription: "The `log` package provides simple functions for logging messages. By default, it prints messages to standard error with a date and time prefix. The output can be customized to log to files.",
        codeExample: `package main
import (
	"log"
	"os"
)
func main() {
	log.Println("This is a standard log message.")
	
	// You can set the output to a file
	file, err := os.OpenFile("app.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err == nil {
		log.SetOutput(file)
	}
	
	log.Println("This message goes to the log file.")
}`
    },
    {
        title: "The `os/exec` Package",
        description: "Running external commands from within a Go program.",
        detailedDescription: "The `os/exec` package allows your Go program to run external commands. You can capture their output, provide them with input, and check their exit status.",
        codeExample: `package main
import (
	"fmt"
	"os/exec"
)
func main() {
	// Execute the "ls -l" command
	cmd := exec.Command("ls", "-l")
	
	output, err := cmd.Output()
	if err != nil {
		fmt.Println("Error executing command:", err)
		return
	}

	fmt.Println(string(output))
}`
    },
    {
        title: "The `path/filepath` Package",
        description: "Handling file paths in a cross-platform safe way.",
        detailedDescription: "The `path/filepath` package provides functions for handling file paths in an operating system-independent manner. This ensures that your code works correctly on Windows, macOS, and Linux.",
        codeExample: `package main
import (
	"fmt"
	"path/filepath"
)
func main() {
	// Join path elements
	fullPath := filepath.Join("dir1", "dir2", "file.txt")
	fmt.Println("Full path:", fullPath)
	
	// Get the base name (file name)
	fmt.Println("Base name:", filepath.Base(fullPath))

	// Get the directory
	fmt.Println("Directory:", filepath.Dir(fullPath))
}`
    },
    // =================================================================
    // =                     Advanced Topics (56-70)                     =
    // =================================================================
    {
        title: "Struct Embedding",
        description: "Achieving composition instead of traditional inheritance.",
        detailedDescription: "Go does not directly support inheritance, but it encourages composition through struct embedding. You can embed a struct within another struct, making the fields and methods of the embedded struct directly available on the outer struct.",
        codeExample: `package main
import "fmt"
type Person struct {
	Name string
}
func (p Person) Greet() {
	fmt.Printf("Hello, my name is %s\n", p.Name)
}
type Employee struct {
	Person   // Embedding Person struct
	JobTitle string
}
func main() {
	emp := Employee{
		Person:   Person{Name: "Khalid"},
		JobTitle: "Developer",
	}
	emp.Greet() // We can call Person's method directly on Employee
}`
    },
    {
        title: "Build Constraints/Tags",
        description: "Including or excluding files from the build process based on conditions.",
        detailedDescription: "Build tags are special comments at the beginning of a Go file that tell the compiler to include the file only when certain conditions are met (like the operating system, architecture, or custom tags). This is useful for writing platform-specific code.",
        codeExample: `// file: mycode_linux.go
// +build linux

package mycode

// This function will only be built on Linux systems.
func GetOS() string {
	return "Linux"
}`
    },
    {
        title: "Generics in Go",
        description: "An introduction to generic programming using type parameters.",
        detailedDescription: "Generics, added in Go 1.18, allow writing code that works with different types without sacrificing type safety. We can create generic functions and data structures using 'type parameters' which are defined in square brackets `[]`.",
        codeExample: `package main

import "fmt"

// A generic function that works with any comparable type
func Index[T comparable](s []T, x T) int {
	for i, v := range s {
		if v == x {
			return i
		}
	}
	return -1
}

func main() {
	// Using the generic function with integers
	intSlice := []int{10, 20, 30, 40}
	fmt.Println("Index of 30:", Index(intSlice, 30))

	// Using the same function with strings
	stringSlice := []string{"foo", "bar", "baz"}
	fmt.Println("Index of 'bar':", Index(stringSlice, "bar"))
}`
    },
    {
        title: "Reflection",
        description: "Inspecting and modifying variables and types at runtime.",
        detailedDescription: "Reflection is a powerful mechanism that allows a program to inspect its own structure at runtime. You can dynamically inspect the type of a variable, its fields, and its methods. It is an advanced concept and should be used with caution as it can make code slower and more complex.",
        codeExample: `package main
import (
	"fmt"
	"reflect"
)
func main() {
	var x float64 = 3.4
	fmt.Println("type:", reflect.TypeOf(x))
	
	v := reflect.ValueOf(x)
	fmt.Println("value:", v)
	fmt.Println("Can set value:", v.CanSet())
}`
    },
    {
        title: "The `context` Package",
        description: "Managing request cancellation, timeouts, and passing values across APIs.",
        detailedDescription: "The `context` package provides a mechanism for carrying deadlines, cancellation signals, and other values across APIs and between goroutines. It is a vital tool in building robust network applications and servers.",
        codeExample: `package main
import (
	"context"
	"fmt"
	"time"
)
func longRunningTask(ctx context.Context) {
	select {
	case <-time.After(3 * time.Second):
		fmt.Println("Task finished")
	case <-ctx.Done():
		fmt.Println("Task canceled:", ctx.Err())
	}
}
func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()
	
	longRunningTask(ctx)
}`
    },
    {
        title: "Creating Custom Errors",
        description: "Creating your own error types to add more context.",
        detailedDescription: "In addition to `errors.New`, you can create custom error types by defining a struct that satisfies the `error` interface. This allows you to attach additional information to the error, making debugging and handling different failure cases easier.",
        codeExample: `package main
import "fmt"
type MyError struct {
	Code    int
	Message string
}
func (e *MyError) Error() string {
	return fmt.Sprintf("Error %d: %s", e.Code, e.Message)
}
func doSomething() error {
	return &MyError{Code: 500, Message: "Internal server error"}
}
func main() {
	err := doSomething()
	if err != nil {
		fmt.Println(err)
	}
}`
    },
    {
        title: "HTTP Middleware",
        description: "A chain of handlers for executing common functions like logging and authentication.",
        detailedDescription: "Middleware is a design pattern that allows for wrapping an HTTP handler with additional functionality. You can create a chain of middlewares to perform tasks like logging requests, checking authentication, compressing responses, and more, before the request reaches the main handler.",
        codeExample: `package main
import (
	"fmt"
	"log"
	"net/http"
)
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Request received for: %s", r.URL.Path)
		next.ServeHTTP(w, r)
	})
}
func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello!")
}
func main() {
	finalHandler := http.HandlerFunc(helloHandler)
	http.Handle("/hello", loggingMiddleware(finalHandler))
	http.ListenAndServe(":8080", nil)
}`
    },
    {
        title: "Working with Databases (database/sql)",
        description: "Interacting with SQL databases using the standard interface.",
        detailedDescription: "The `database/sql` package provides a standard interface for working with SQL databases. You also need a specific 'driver' for the database you are using (e.g., MySQL, PostgreSQL). The package provides functions for connecting, executing queries, and managing transactions.",
        codeExample: `package main
import (
    "database/sql"
    _ "github.com/mattn/go-sqlite3" // Driver for SQLite
)
func main() {
    // db, err := sql.Open("sqlite3", "./test.db")
    // if err != nil { log.Fatal(err) }
    // defer db.Close()
    //
    // _, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)")
    // ...
}`
    },
    {
        title: "Templates (html/template)",
        description: "Creating dynamic HTML outputs that are safe from XSS attacks.",
        detailedDescription: "The `html/template` package provides a powerful mechanism for creating HTML outputs. It automatically escapes data to prevent injection vulnerabilities like Cross-Site Scripting (XSS), making it the safe choice for generating dynamic web pages.",
        codeExample: `package main
import (
	"html/template"
	"os"
)
type TodoPage struct {
	Title string
	Todos []string
}
func main() {
	tmpl, _ := template.New("t").Parse(\`<h1>{{.Title}}</h1>
<ul>{{range .Todos}}<li>{{.}}</li>{{end}}</ul>\`)

	data := TodoPage{
		Title: "My Todos",
		Todos: []string{"Learn Go", "Build a web app"},
	}
	tmpl.Execute(os.Stdout, data)
}`
    },
    {
        title: "gRPC",
        description: "A high-performance RPC framework from Google.",
        detailedDescription: "gRPC is a modern, open-source Remote Procedure Call (RPC) framework that can run in any environment. It uses HTTP/2 for transport and Protocol Buffers as the interface definition language. It is very efficient for communication between microservices.",
        codeExample: `// gRPC requires .proto files to define services and messages.
// syntax = "proto3";
// package greeter;
//
// service Greeter {
//   rpc SayHello (HelloRequest) returns (HelloReply) {}
// }
//
// message HelloRequest {
//   string name = 1;
// }
//
// message HelloReply {
//   string message = 1;
// }`
    },
    // =================================================================
    // =                   Tooling and Practices (71-84)                 =
    // =================================================================
    {
        title: "Go Modules",
        description: "Managing dependencies in Go projects.",
        detailedDescription: "Go Modules is the official dependency management system. It allows for defining precise versions of packages that your project depends on, ensuring consistent and reproducible builds. A module is defined by a `go.mod` file.",
        codeExample: `// Commands to manage modules:
// go mod init <module_path>   // Initializes a new module in the current directory
// go get <package_path>      // Adds and installs a new dependency
// go mod tidy                // Cleans up unused dependencies and updates go.sum
// go mod vendor              // Copies dependencies into a vendor directory`
    },
    {
        title: "Testing in Go",
        description: "Writing unit tests using the `testing` package.",
        detailedDescription: "Testing is an essential part of software development. Go provides built-in support for writing and running tests through the `testing` package and the `go test` tool. Test files must be be named ending in `_test.go`, and test functions must start with `Test`.",
        codeExample: `// In file: main_test.go
// package main
// import "testing"
// func Add(a, b int) int { return a + b }
// func TestAdd(t *testing.T) {
//     result := Add(2, 3)
//     expected := 5
//     if result != expected {
//         t.Errorf("Add(2, 3) = %d; want %d", result, expected)
//     }
// }`
    },
    {
        title: "Benchmarking",
        description: "Measuring code performance using the `testing` package.",
        detailedDescription: "In addition to unit tests, Go allows for writing performance benchmarks to evaluate code speed. Benchmark functions must start with `Benchmark` and are run using `go test -bench=.`.",
        codeExample: `// In file: main_test.go
// package main
// import "testing"
// func Add(a, b int) int { return a + b }
// func BenchmarkAdd(b *testing.B) {
//     // b.N is adjusted by the test runner to get a stable measurement.
//     for i := 0; i < b.N; i++ {
//         Add(100, 200)
//     }
// }`
    },
    {
        title: "The `go vet` Tool",
        description: "Using the static analysis tool to find potential errors.",
        detailedDescription: "`go vet` is a tool that examines Go source code and reports any suspicious constructs, such as incorrect `Printf` calls with wrong arguments. It is a useful tool to run before committing your code.",
        codeExample: `// Command to run vet on the current directory and subdirectories:
// go vet ./...

// Example of what vet might catch:
// fmt.Printf("This is a number: %s\n", 123)
// vet will warn that %s is used for an integer.`
    },
    {
        title: "The `gofmt` Tool",
        description: "Automatically formatting code to follow the standard Go style.",
        detailedDescription: "`gofmt` (or `go fmt`) is a tool that automatically formats your Go code to conform to the recommended standard style. This eliminates debates about style and makes all Go code look familiar.",
        codeExample: `// Command to format a file and write the result back to the file:
// gofmt -w your_file.go

// Command to format all files in the current directory:
// go fmt ./...`
    },
    {
        title: "The Race Detector",
        description: "Finding data race conditions in concurrent code.",
        detailedDescription: "A data race occurs when two or more goroutines access the same memory concurrently, and at least one of them is a write operation. Go can detect these issues at runtime by adding the `-race` flag when compiling or testing.",
        codeExample: `// Run your tests with the race detector enabled:
// go test -race .

// Run your application with the race detector:
// go run -race main.go`
    },
    {
        title: "Profiling",
        description: "Using `pprof` to analyze CPU and memory consumption.",
        detailedDescription: "`pprof` is a built-in performance analysis tool in Go. It can collect data on CPU usage, memory allocation, and more. It is used to analyze application performance and find bottlenecks.",
        codeExample: `// 1. Import the pprof package in your web server
// import _ "net/http/pprof"

// 2. Access http://localhost:8080/debug/pprof/ in your browser
// 3. Use the go tool pprof to analyze the profile:
// go tool pprof http://localhost:8080/debug/pprof/profile?seconds=30`
    },
    {
        title: "Cross-Compilation",
        description: "Building executables for different operating systems and architectures.",
        detailedDescription: "Go makes it very easy to compile your code to run on different operating systems and processor architectures from a single development machine. This is done by setting the `GOOS` (target operating system) and `GOARCH` (target architecture) environment variables.",
        codeExample: `// Build for Windows (from a non-Windows machine):
// GOOS=windows GOARCH=amd64 go build -o myapp.exe

// Build for Linux ARM64 (e.g., Raspberry Pi):
// GOOS=linux GOARCH=arm64 go build -o myapp`
    },
    {
        title: "API Design",
        description: "Best practices for designing clean and robust RESTful APIs in Go.",
        detailedDescription: "Designing good APIs in Go involves correctly using HTTP verbs (GET, POST, PUT, DELETE), using appropriate HTTP status codes, designing clear URL paths, and consistent JSON versioning. Separation of concerns (like separating business logic from the HTTP layer) is crucial.",
        codeExample: `// Good practice: version your API
// /api/v1/users

// Use specific handlers for specific routes
// http.HandleFunc("/api/v1/users", GetUsersHandler)
// http.HandleFunc("/api/v1/users/{id}", GetUserByIDHandler)

// Use structs for JSON request and response bodies
type CreateUserRequest struct {
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}`
    },
    {
        title: "Project Structure",
        description: "Common patterns for organizing code in large Go projects.",
        detailedDescription: "There is no single official project structure, but there are common patterns. A popular pattern is the 'Standard Go Project Layout'. It includes folders like `/cmd` for main applications, `/internal` for project-specific code, `/pkg` for code that can be used by external projects, and `/api` for API definition files.",
        codeExample: `// Example Project Structure:
// /my-project
//  ├── /cmd/my-app/main.go   (main application entrypoint)
//  ├── /internal/user/       (user-related business logic, not importable by others)
//  ├── /internal/database/   (database connection logic)
//  ├── /pkg/logger/          (a reusable logger package)
//  └── go.mod`
    },
    {
        title: "Design Patterns: Singleton",
        description: "Ensuring that only one instance of a particular type exists.",
        detailedDescription: "The Singleton pattern ensures that a class (or a struct in Go) has only one instance and provides a global point of access to it. In Go, this is often achieved using the `sync.Once` package to ensure that initialization happens only once in a thread-safe way.",
        codeExample: `package main
import (
	"fmt"
	"sync"
)
type Database struct{}
func (d *Database) Query(q string) { fmt.Printf("Querying: %s\n", q) }

var (
	once     sync.Once
	instance *Database
)

func GetDBInstance() *Database {
	once.Do(func() {
		instance = &Database{}
	})
	return instance
}

func main() {
    db1 := GetDBInstance()
    db2 := GetDBInstance()
    fmt.Println("Are instances equal?", db1 == db2) // true
}`
    },
    {
        title: "Design Patterns: Factory",
        description: "Creating objects without specifying the exact class of the object that will be created.",
        detailedDescription: "The Factory pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. In Go, it is often implemented as a simple function that returns an interface.",
        codeExample: `package main
import "fmt"
type PaymentMethod interface {
	Pay(amount float64)
}
type CreditCard struct{}
func (c *CreditCard) Pay(amount float64) { fmt.Printf("Paid %.2f using Credit Card\n", amount) }
type PayPal struct{}
func (p *PayPal) Pay(amount float64) { fmt.Printf("Paid %.2f using PayPal\n", amount) }

func GetPaymentMethod(methodType string) PaymentMethod {
	switch methodType {
	case "credit":
		return &CreditCard{}
	case "paypal":
		return &PayPal{}
	default:
		return nil
	}
}

func main() {
    payment := GetPaymentMethod("paypal")
    payment.Pay(100.50)
}`
    },
    {
        title: "Writing Idiomatic Go",
        description: "Understanding and practicing the 'Go way' of writing code.",
        detailedDescription: "Idiomatic code is code written in the way that most Go programmers expect and understand. This includes maintaining simplicity, using interfaces effectively, handling errors as values, and using short, meaningful names for variables. The 'Go Proverbs' are a set of adages that summarize this philosophy.",
        codeExample: `// Idiomatic Go emphasizes clarity and simplicity.
// "A little copying is better than a little dependency."

// Bad: Overly complex interface
// type SuperWriter interface {
//     Write([]byte) (int, error)
//     WriteString(string) (int, error)
//     Close() error
// }

// Good: Small, focused interface (from the standard library)
// type Writer interface {
//     Write(p []byte) (n int, err error)
// }`
    },
    {
        title: "Docker Containers for Go Applications",
        description: "Creating a Dockerfile to package a Go application into a container.",
        detailedDescription: "Docker allows you to package your application and all its dependencies into an isolated container that can be run anywhere. For Go, a Dockerfile often involves a multi-stage build: a first stage to compile the application, and a second stage to copy only the executable into a final, small image.",
        codeExample: `# Stage 1: Build the application
# FROM golang:1.19-alpine AS builder
# WORKDIR /app
# COPY go.mod go.sum ./
# RUN go mod download
# COPY . .
# RUN CGO_ENABLED=0 GOOS=linux go build -o /app/main ./cmd/my-app

# Stage 2: Create the final small image
# FROM alpine:latest
# WORKDIR /root/
# COPY --from=builder /app/main .
# CMD ["./main"]`
    },
    // =================================================================
    // =                   NEW LESSONS (40 Added)                      =
    // =================================================================
    {
        title: "Slices: Slicing and Internals",
        description: "A deeper look at how slicing works and its relationship with underlying arrays.",
        detailedDescription: "Slicing does not create a new copy of the data. It creates a new slice header that points to the same underlying array. Understanding this (length vs. capacity) is key to avoiding subtle bugs.",
        codeExample: `package main
import "fmt"
func main() {
    original := []int{1, 2, 3, 4, 5}
    slice1 := original[1:3] // [2, 3]
    
    // Modifying the slice affects the original array
    slice1[0] = 99
    
    fmt.Println("Original:", original) // [1, 99, 3, 4, 5]
    fmt.Println("Slice1:", slice1)     // [99, 3]
}`
    },
    {
        title: "Maps: Iteration Order",
        description: "Understanding that the iteration order of maps is not guaranteed.",
        detailedDescription: "When you iterate over a map using a `for...range` loop, the order in which you get the key-value pairs is not specified and is not guaranteed to be the same across different runs. If you need a stable order, you must maintain a separate data structure, like a sorted slice of keys.",
        codeExample: `package main
import "fmt"
func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    
    // The output order is not guaranteed
    for k, v := range m {
        fmt.Printf("key: %s, value: %d\n", k, v)
    }
}`
    },
    {
        title: "Structs: Tags",
        description: "Using struct tags to add metadata to struct fields.",
        detailedDescription: "Struct tags are string literals placed after the type of a struct field. They are a way to attach metadata to fields, which can be inspected at runtime using reflection. They are commonly used by packages like `encoding/json` to control how a struct is marshaled or unmarshaled.",
        codeExample: `package main
import (
    "encoding/json"
    "fmt"
)
type User struct {
    Username string \`json:"username"\`
    Password string \`json:"-"\` // The '-' tag means this field is ignored by the json package
}
func main() {
    u := User{Username: "gopher", Password: "password"}
    jsonData, _ := json.Marshal(u)
    fmt.Println(string(jsonData)) // {"username":"gopher"}
}`
    },
    {
        title: "Interfaces: Type Switches",
        description: "A way to perform different actions based on an interface value's dynamic type.",
        detailedDescription: "A type switch is a construct that permits several type assertions in series. It is similar to a regular switch statement, but the cases specify types, not values.",
        codeExample: `package main
import "fmt"
func do(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Twice %v is %v\n", v, v*2)
    case string:
        fmt.Printf("%q is %v bytes long\n", v, len(v))
    default:
        fmt.Printf("I don't know about type %T!\n", v)
    }
}
func main() {
    do(21)
    do("hello")
    do(true)
}`
    },
    {
        title: "Interfaces: The io.Reader and io.Writer",
        description: "Understanding the most important interfaces in Go's standard library.",
        detailedDescription: "`io.Reader` and `io.Writer` are fundamental interfaces for I/O. `Reader` represents any type from which you can read bytes, and `Writer` represents any type to which you can write bytes. Many standard library functions are built around these interfaces, allowing them to work with files, network connections, and in-memory buffers interchangeably.",
        codeExample: `package main
import (
    "fmt"
    "io"
    "os"
    "strings"
)
func main() {
    // strings.Reader implements io.Reader
    r := strings.NewReader("Hello, Reader!")
    
    // os.Stdout implements io.Writer
    io.Copy(os.Stdout, r)
}`
    },
    {
        title: "Concurrency: Select with Default",
        description: "Using the `default` case in a `select` statement for non-blocking operations.",
        detailedDescription: "Adding a `default` case to a `select` statement makes it non-blocking. If no other channel operation is ready, the `default` case will be executed immediately.",
        codeExample: `package main
import "fmt"
func main() {
    messages := make(chan string)
    select {
    case msg := <-messages:
        fmt.Println("received message", msg)
    default:
        fmt.Println("no message received")
    }
}`
    },
    {
        title: "Concurrency: Closing Channels",
        description: "Understanding how and when to close channels.",
        detailedDescription: "Closing a channel indicates that no more values will be sent on it. This is useful for communicating completion to the channel's receivers. It's important to note that only the sender should close a channel, never the receiver.",
        codeExample: `package main
import "fmt"
func main() {
    jobs := make(chan int, 5)
    done := make(chan bool)

    go func() {
        for {
            j, more := <-jobs
            if more {
                fmt.Println("received job", j)
            } else {
                fmt.Println("received all jobs")
                done <- true
                return
            }
        }
    }()

    for j := 1; j <= 3; j++ {
        jobs <- j
        fmt.Println("sent job", j)
    }
    close(jobs) // Sender closes the channel
    fmt.Println("sent all jobs")

    <-done // Wait for the goroutine to finish
}`
    },
    {
        title: "Concurrency: Worker Pools",
        description: "A common concurrency pattern for processing a queue of tasks.",
        detailedDescription: "A worker pool is a pattern where a fixed number of goroutines (workers) are created to process tasks from a shared channel (job queue). This is an efficient way to control the level of concurrency and prevent overwhelming system resources.",
        codeExample: `package main
// See sync.WaitGroup example for a similar implementation.`
    },
    {
        title: "Error Handling: Wrapping and Unwrapping",
        description: "Adding context to errors using wrapping.",
        detailedDescription: "Since Go 1.13, the `fmt.Errorf` function with the `%w` verb allows you to wrap an error, creating a new error that contains the original one. The `errors` package provides `Is` and `As` functions to inspect the chain of wrapped errors.",
        codeExample: `package main
import (
    "errors"
    "fmt"
)
func readFile(path string) error {
    return errors.New("file not found")
}
func processFile(path string) error {
    err := readFile(path)
    if err != nil {
        return fmt.Errorf("processing failed: %w", err)
    }
    return nil
}
func main() {
    err := processFile("data.txt")
    if err != nil {
        fmt.Println(err) // processing failed: file not found
    }
}`
    },
    {
        title: "Packages: The 'internal' Directory",
        description: "Creating packages that are only accessible within your project.",
        detailedDescription: "A special directory name, `internal`, allows you to define packages that are private to your module. Go's tooling will prevent any external module from importing packages under an `internal` directory.",
        codeExample: `// Project Structure:
// /my-project
//  ├── /cmd/my-app/main.go
//  └── /internal/auth/
//
// Code in main.go CAN import the auth package.
// An external project CANNOT import the auth package.`
    },
    {
        title: "Packages: init() Functions",
        description: "Understanding the special `init` function for package initialization.",
        detailedDescription: "Each package can contain one or more `init()` functions. These functions cannot be called directly. They are executed automatically by the Go runtime when the package is imported, before the `main` function starts. They are used for setting up package-level state.",
        codeExample: `package main
import "fmt"

func init() {
    fmt.Println("First init function executed")
}

func init() {
    fmt.Println("Second init function executed")
}

func main() {
    fmt.Println("Main function executed")
}`
    },
    {
        title: "Testing: Table-Driven Tests",
        description: "A common and effective pattern for writing Go tests.",
        detailedDescription: "Table-driven tests allow you to define a slice of test cases (the 'table'), and then iterate over them in a single test function. This makes it easy to add new test cases and keeps your test logic concise and readable.",
        codeExample: `// package main
// import "testing"
// func TestAdd(t *testing.T) {
//     testCases := []struct{
//         a, b int
//         want int
//     }{
//         {1, 2, 3},
//         {0, 0, 0},
//         {-1, 1, 0},
//     }
//     for _, tc := range testCases {
//         got := Add(tc.a, tc.b)
//         if got != tc.want {
//             t.Errorf("Add(%d, %d) = %d; want %d", tc.a, tc.b, got, tc.want)
//         }
//     }
// }`
    },
    {
        title: "Testing: Mocks & Stubs",
        description: "Isolating code for testing by replacing dependencies with fakes.",
        detailedDescription: "When testing a piece of code that depends on an external system (like a database or a web service), it's best to replace that dependency with a 'mock' or 'stub'. This is easily done in Go by defining an interface for the dependency and creating a fake implementation for your tests.",
        codeExample: `// type Datastore interface { GetUser(id int) (User, error) }
// 
// // A mock implementation for tests
// type MockDatastore struct {}
// func (m *MockDatastore) GetUser(id int) (User, error) {
//     return User{Name: "Mock User"}, nil
// }
// 
// func MyHandler(db Datastore) { /* ... */ }
// 
// func TestMyHandler(t *testing.T) {
//     mockDB := &MockDatastore{}
//     MyHandler(mockDB) // Pass the mock instead of a real database
// }`
    },
    {
        title: "Testing: Test Coverage",
        description: "Measuring how much of your code is exercised by your tests.",
        detailedDescription: "Go has built-in support for measuring test coverage. Running `go test -cover` will show the percentage of code statements covered by your tests. This helps identify parts of your code that are not being tested.",
        codeExample: `// Run tests with coverage analysis:
// go test -cover

// To generate a detailed HTML report:
// go test -coverprofile=coverage.out
// go tool cover -html=coverage.out`
    },
    {
        title: "Tooling: go doc",
        description: "Using the `go doc` command to view documentation in the terminal.",
        detailedDescription: "`go doc` is a command-line tool that extracts and displays documentation for Go packages, types, and functions directly in your terminal. It's a quick way to look up information without leaving your development environment.",
        codeExample: `// View documentation for the fmt package
// go doc fmt

// View documentation for the Println function
// go doc fmt.Println`
    },
    {
        title: "Tooling: Linters (staticcheck)",
        description: "Using advanced static analysis tools to find bugs and improve code.",
        detailedDescription: "Linters are tools that analyze source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. `staticcheck` is a popular and powerful linter for Go that can find many types of subtle bugs that the compiler might miss.",
        codeExample: `// Install staticcheck:
// go install honnef.co/go/tools/cmd/staticcheck@latest

// Run it on your project:
// staticcheck ./...`
    },
    {
        title: "Web Dev: Cookies & Sessions",
        description: "Managing user state in web applications using cookies.",
        detailedDescription: "HTTP is stateless. To identify users across multiple requests, web applications use cookies and sessions. A cookie is a small piece of data sent from the server and stored on the user's browser. It can contain a session ID that the server uses to retrieve user-specific data.",
        codeExample: `package main
import "net/http"
func setCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie := http.Cookie{Name: "username", Value: "gopher"}
    http.SetCookie(w, &cookie)
}
func getCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie, err := r.Cookie("username")
    if err != nil { /* ... */ }
    // use cookie.Value
}`
    },
    {
        title: "Web Dev: WebSockets",
        description: "Building real-time, bidirectional communication between client and server.",
        detailedDescription: "WebSockets provide a full-duplex communication channel over a single TCP connection. This is ideal for applications that require real-time updates, such as chat applications, live notifications, and multiplayer games.",
        codeExample: `// A popular WebSocket library for Go is gorilla/websocket
// import "github.com/gorilla/websocket"
// 
// var upgrader = websocket.Upgrader{}
//
// func handler(w http.ResponseWriter, r *http.Request) {
//     conn, err := upgrader.Upgrade(w, r, nil)
//     if err != nil { return }
//     defer conn.Close()
//     // Read and write messages on the connection
// }`
    },
    {
        title: "Web Dev: REST API Best Practices",
        description: "Common patterns for designing robust and maintainable REST APIs.",
        detailedDescription: "Best practices include using proper HTTP verbs (GET, POST, PUT, DELETE), correct status codes (200, 201, 400, 404, 500), consistent resource naming (e.g., `/users`, `/users/{id}`), versioning (`/api/v1`), and structured JSON responses.",
        codeExample: `// Good response structure
// {
//     "data": { "id": 1, "name": "Gopher" },
//     "error": null
// }
// 
// // Bad response structure
// {
//     "id": 1,
//     "name": "Gopher",
//     "errorMessage": "something went wrong" // Mixing data and error fields
// }`
    },
    {
        title: "Databases: Transactions",
        description: "Using transactions to perform multiple database operations atomically.",
        detailedDescription: "A database transaction is a sequence of operations performed as a single logical unit of work. All operations in a transaction must complete successfully, or none of them are applied. This is crucial for maintaining data integrity.",
        codeExample: `// package main
// import "database/sql"
// func transferMoney(db *sql.DB, from, to int, amount float64) error {
//     tx, err := db.Begin()
//     if err != nil { return err }
//
//     _, err = tx.Exec("UPDATE accounts SET balance = balance - ? WHERE id = ?", amount, from)
//     if err != nil {
//         tx.Rollback() // Undo changes
//         return err
//     }
//
//     _, err = tx.Exec("UPDATE accounts SET balance = balance + ? WHERE id = ?", amount, to)
//     if err != nil {
//         tx.Rollback() // Undo changes
//         return err
//     }
//
//     return tx.Commit() // Finalize changes
// }`
    },
    {
        title: "Advanced: The `unsafe` Package",
        description: "Understanding Go's escape hatch for low-level memory operations.",
        detailedDescription: "The `unsafe` package contains operations that step around the type safety of Go. It's a powerful tool for low-level programming but, as its name implies, it is unsafe. Incorrect use can lead to memory corruption and unpredictable behavior. It should be avoided unless absolutely necessary.",
        codeExample: `package main
import (
    "fmt"
    "unsafe"
)
func main() {
    var x float64 = 3.14
    // Get the memory representation of the float as an integer
    bits := *(*uint64)(unsafe.Pointer(&x))
    fmt.Printf("Bits: %064b\n", bits)
}`
    },
    {
        title: "Advanced: CGO",
        description: "Calling C code from Go and vice-versa.",
        detailedDescription: "CGO is the mechanism that allows Go programs to call C libraries directly. This is useful for interoperating with existing C codebases or accessing system-level functionality not available in the standard library.",
        codeExample: `package main
/*
#include <stdio.h>
void myCFunction() {
    printf("Hello from C!\\n");
}
*/
import "C"

func main() {
    C.myCFunction()
}`
    },
    {
        title: "Deployment: CI/CD for Go",
        description: "An overview of setting up a Continuous Integration/Continuous Deployment pipeline.",
        detailedDescription: "A CI/CD pipeline automates the process of building, testing, and deploying your application. For Go, a typical pipeline would: 1. Fetch the code from a repository. 2. Run `go fmt` and `go vet`. 3. Run `go test`. 4. Build the binary. 5. Package it into a Docker container. 6. Push the container to a registry. 7. Deploy the container to a server.",
        codeExample: `# Example GitHub Actions workflow step
# - name: Run tests
#   run: go test -v ./...
# 
# - name: Build
#   run: go build -v -o myapp ./cmd/myapp`
    },
    // =================================================================
    // =                   NEW LESSONS (40 Added)                      =
    // =================================================================
    {
        title: "Slices: Slicing and Internals",
        description: "A deeper look at how slicing works and its relationship with underlying arrays.",
        detailedDescription: "Slicing does not create a new copy of the data. It creates a new slice header that points to the same underlying array. Understanding this (length vs. capacity) is key to avoiding subtle bugs.",
        codeExample: `package main
import "fmt"
func main() {
    original := []int{1, 2, 3, 4, 5}
    slice1 := original[1:3] // [2, 3]
    
    // Modifying the slice affects the original array
    slice1[0] = 99
    
    fmt.Println("Original:", original) // [1, 99, 3, 4, 5]
    fmt.Println("Slice1:", slice1)     // [99, 3]
}`
    },
    {
        title: "Maps: Iteration Order",
        description: "Understanding that the iteration order of maps is not guaranteed.",
        detailedDescription: "When you iterate over a map using a `for...range` loop, the order in which you get the key-value pairs is not specified and is not guaranteed to be the same across different runs. If you need a stable order, you must maintain a separate data structure, like a sorted slice of keys.",
        codeExample: `package main
import "fmt"
func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    
    // The output order is not guaranteed
    for k, v := range m {
        fmt.Printf("key: %s, value: %d\n", k, v)
    }
}`
    },
    {
        title: "Structs: Tags",
        description: "Using struct tags to add metadata to struct fields.",
        detailedDescription: "Struct tags are string literals placed after the type of a struct field. They are a way to attach metadata to fields, which can be inspected at runtime using reflection. They are commonly used by packages like `encoding/json` to control how a struct is marshaled or unmarshaled.",
        codeExample: `package main
import (
    "encoding/json"
    "fmt"
)
type User struct {
    Username string \`json:"username"\`
    Password string \`json:"-"\` // The '-' tag means this field is ignored by the json package
}
func main() {
    u := User{Username: "gopher", Password: "password"}
    jsonData, _ := json.Marshal(u)
    fmt.Println(string(jsonData)) // {"username":"gopher"}
}`
    },
    {
        title: "Interfaces: Type Switches",
        description: "A way to perform different actions based on an interface value's dynamic type.",
        detailedDescription: "A type switch is a construct that permits several type assertions in series. It is similar to a regular switch statement, but the cases specify types, not values.",
        codeExample: `package main
import "fmt"
func do(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Twice %v is %v\n", v, v*2)
    case string:
        fmt.Printf("%q is %v bytes long\n", v, len(v))
    default:
        fmt.Printf("I don't know about type %T!\n", v)
    }
}
func main() {
    do(21)
    do("hello")
    do(true)
}`
    },
    {
        title: "Interfaces: The io.Reader and io.Writer",
        description: "Understanding the most important interfaces in Go's standard library.",
        detailedDescription: "`io.Reader` and `io.Writer` are fundamental interfaces for I/O. `Reader` represents any type from which you can read bytes, and `Writer` represents any type to which you can write bytes. Many standard library functions are built around these interfaces, allowing them to work with files, network connections, and in-memory buffers interchangeably.",
        codeExample: `package main
import (
    "fmt"
    "io"
    "os"
    "strings"
)
func main() {
    // strings.Reader implements io.Reader
    r := strings.NewReader("Hello, Reader!")
    
    // os.Stdout implements io.Writer
    io.Copy(os.Stdout, r)
}`
    },
    {
        title: "Concurrency: Select with Default",
        description: "Using the `default` case in a `select` statement for non-blocking operations.",
        detailedDescription: "Adding a `default` case to a `select` statement makes it non-blocking. If no other channel operation is ready, the `default` case will be executed immediately.",
        codeExample: `package main
import "fmt"
func main() {
    messages := make(chan string)
    select {
    case msg := <-messages:
        fmt.Println("received message", msg)
    default:
        fmt.Println("no message received")
    }
}`
    },
    {
        title: "Concurrency: Closing Channels",
        description: "Understanding how and when to close channels.",
        detailedDescription: "Closing a channel indicates that no more values will be sent on it. This is useful for communicating completion to the channel's receivers. It's important to note that only the sender should close a channel, never the receiver.",
        codeExample: `package main
import "fmt"
func main() {
    jobs := make(chan int, 5)
    done := make(chan bool)

    go func() {
        for {
            j, more := <-jobs
            if more {
                fmt.Println("received job", j)
            } else {
                fmt.Println("received all jobs")
                done <- true
                return
            }
        }
    }()

    for j := 1; j <= 3; j++ {
        jobs <- j
        fmt.Println("sent job", j)
    }
    close(jobs) // Sender closes the channel
    fmt.Println("sent all jobs")

    <-done // Wait for the goroutine to finish
}`
    },
    {
        title: "Concurrency: Worker Pools",
        description: "A common concurrency pattern for processing a queue of tasks.",
        detailedDescription: "A worker pool is a pattern where a fixed number of goroutines (workers) are created to process tasks from a shared channel (job queue). This is an efficient way to control the level of concurrency and prevent overwhelming system resources.",
        codeExample: `package main
// See sync.WaitGroup example for a similar implementation.`
    },
    {
        title: "Error Handling: Wrapping and Unwrapping",
        description: "Adding context to errors using wrapping.",
        detailedDescription: "Since Go 1.13, the `fmt.Errorf` function with the `%w` verb allows you to wrap an error, creating a new error that contains the original one. The `errors` package provides `Is` and `As` functions to inspect the chain of wrapped errors.",
        codeExample: `package main
import (
    "errors"
    "fmt"
)
func readFile(path string) error {
    return errors.New("file not found")
}
func processFile(path string) error {
    err := readFile(path)
    if err != nil {
        return fmt.Errorf("processing failed: %w", err)
    }
    return nil
}
func main() {
    err := processFile("data.txt")
    if err != nil {
        fmt.Println(err) // processing failed: file not found
    }
}`
    },
    {
        title: "Packages: The 'internal' Directory",
        description: "Creating packages that are only accessible within your project.",
        detailedDescription: "A special directory name, `internal`, allows you to define packages that are private to your module. Go's tooling will prevent any external module from importing packages under an `internal` directory.",
        codeExample: `// Project Structure:
// /my-project
//  ├── /cmd/my-app/main.go
//  └── /internal/auth/
//
// Code in main.go CAN import the auth package.
// An external project CANNOT import the auth package.`
    },
    {
        title: "Packages: init() Functions",
        description: "Understanding the special `init` function for package initialization.",
        detailedDescription: "Each package can contain one or more `init()` functions. These functions cannot be called directly. They are executed automatically by the Go runtime when the package is imported, before the `main` function starts. They are used for setting up package-level state.",
        codeExample: `package main
import "fmt"

func init() {
    fmt.Println("First init function executed")
}

func init() {
    fmt.Println("Second init function executed")
}

func main() {
    fmt.Println("Main function executed")
}`
    },
    {
        title: "Testing: Table-Driven Tests",
        description: "A common and effective pattern for writing Go tests.",
        detailedDescription: "Table-driven tests allow you to define a slice of test cases (the 'table'), and then iterate over them in a single test function. This makes it easy to add new test cases and keeps your test logic concise and readable.",
        codeExample: `// package main
// import "testing"
// func TestAdd(t *testing.T) {
//     testCases := []struct{
//         a, b int
//         want int
//     }{
//         {1, 2, 3},
//         {0, 0, 0},
//         {-1, 1, 0},
//     }
//     for _, tc := range testCases {
//         got := Add(tc.a, tc.b)
//         if got != tc.want {
//             t.Errorf("Add(%d, %d) = %d; want %d", tc.a, tc.b, got, tc.want)
//         }
//     }
// }`
    },
    {
        title: "Testing: Mocks & Stubs",
        description: "Isolating code for testing by replacing dependencies with fakes.",
        detailedDescription: "When testing a piece of code that depends on an external system (like a database or a web service), it's best to replace that dependency with a 'mock' or 'stub'. This is easily done in Go by defining an interface for the dependency and creating a fake implementation for your tests.",
        codeExample: `// type Datastore interface { GetUser(id int) (User, error) }
// 
// // A mock implementation for tests
// type MockDatastore struct {}
// func (m *MockDatastore) GetUser(id int) (User, error) {
//     return User{Name: "Mock User"}, nil
// }
// 
// func MyHandler(db Datastore) { /* ... */ }
// 
// func TestMyHandler(t *testing.T) {
//     mockDB := &MockDatastore{}
//     MyHandler(mockDB) // Pass the mock instead of a real database
// }`
    },
    {
        title: "Testing: Test Coverage",
        description: "Measuring how much of your code is exercised by your tests.",
        detailedDescription: "Go has built-in support for measuring test coverage. Running `go test -cover` will show the percentage of code statements covered by your tests. This helps identify parts of your code that are not being tested.",
        codeExample: `// Run tests with coverage analysis:
// go test -cover

// To generate a detailed HTML report:
// go test -coverprofile=coverage.out
// go tool cover -html=coverage.out`
    },
    {
        title: "Tooling: go doc",
        description: "Using the `go doc` command to view documentation in the terminal.",
        detailedDescription: "`go doc` is a command-line tool that extracts and displays documentation for Go packages, types, and functions directly in your terminal. It's a quick way to look up information without leaving your development environment.",
        codeExample: `// View documentation for the fmt package
// go doc fmt

// View documentation for the Println function
// go doc fmt.Println`
    },
    {
        title: "Tooling: Linters (staticcheck)",
        description: "Using advanced static analysis tools to find bugs and improve code.",
        detailedDescription: "Linters are tools that analyze source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. `staticcheck` is a popular and powerful linter for Go that can find many types of subtle bugs that the compiler might miss.",
        codeExample: `// Install staticcheck:
// go install honnef.co/go/tools/cmd/staticcheck@latest

// Run it on your project:
// staticcheck ./...`
    },
    {
        title: "Web Dev: Cookies & Sessions",
        description: "Managing user state in web applications using cookies.",
        detailedDescription: "HTTP is stateless. To identify users across multiple requests, web applications use cookies and sessions. A cookie is a small piece of data sent from the server and stored on the user's browser. It can contain a session ID that the server uses to retrieve user-specific data.",
        codeExample: `package main
import "net/http"
func setCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie := http.Cookie{Name: "username", Value: "gopher"}
    http.SetCookie(w, &cookie)
}
func getCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie, err := r.Cookie("username")
    if err != nil { /* ... */ }
    // use cookie.Value
}`
    },
    {
        title: "Web Dev: WebSockets",
        description: "Building real-time, bidirectional communication between client and server.",
        detailedDescription: "WebSockets provide a full-duplex communication channel over a single TCP connection. This is ideal for applications that require real-time updates, such as chat applications, live notifications, and multiplayer games.",
        codeExample: `// A popular WebSocket library for Go is gorilla/websocket
// import "github.com/gorilla/websocket"
// 
// var upgrader = websocket.Upgrader{}
//
// func handler(w http.ResponseWriter, r *http.Request) {
//     conn, err := upgrader.Upgrade(w, r, nil)
//     if err != nil { return }
//     defer conn.Close()
//     // Read and write messages on the connection
// }`
    },
    {
        title: "Web Dev: REST API Best Practices",
        description: "Common patterns for designing robust and maintainable REST APIs.",
        detailedDescription: "Best practices include using proper HTTP verbs (GET, POST, PUT, DELETE), correct status codes (200, 201, 400, 404, 500), consistent resource naming (e.g., `/users`, `/users/{id}`), versioning (`/api/v1`), and structured JSON responses.",
        codeExample: `// Good response structure
// {
//     "data": { "id": 1, "name": "Gopher" },
//     "error": null
// }
// 
// // Bad response structure
// {
//     "id": 1,
//     "name": "Gopher",
//     "errorMessage": "something went wrong" // Mixing data and error fields
// }`
    },
    {
        title: "Databases: Transactions",
        description: "Using transactions to perform multiple database operations atomically.",
        detailedDescription: "A database transaction is a sequence of operations performed as a single logical unit of work. All operations in a transaction must complete successfully, or none of them are applied. This is crucial for maintaining data integrity.",
        codeExample: `// package main
// import "database/sql"
// func transferMoney(db *sql.DB, from, to int, amount float64) error {
//     tx, err := db.Begin()
//     if err != nil { return err }
//
//     _, err = tx.Exec("UPDATE accounts SET balance = balance - ? WHERE id = ?", amount, from)
//     if err != nil {
//         tx.Rollback() // Undo changes
//         return err
//     }
//
//     _, err = tx.Exec("UPDATE accounts SET balance = balance + ? WHERE id = ?", amount, to)
//     if err != nil {
//         tx.Rollback() // Undo changes
//         return err
//     }
//
//     return tx.Commit() // Finalize changes
// }`
    },
    {
        title: "Advanced: The `unsafe` Package",
        description: "Understanding Go's escape hatch for low-level memory operations.",
        detailedDescription: "The `unsafe` package contains operations that step around the type safety of Go. It's a powerful tool for low-level programming but, as its name implies, it is unsafe. Incorrect use can lead to memory corruption and unpredictable behavior. It should be avoided unless absolutely necessary.",
        codeExample: `package main
import (
    "fmt"
    "unsafe"
)
func main() {
    var x float64 = 3.14
    // Get the memory representation of the float as an integer
    bits := *(*uint64)(unsafe.Pointer(&x))
    fmt.Printf("Bits: %064b\n", bits)
}`
    },
    {
        title: "Advanced: CGO",
        description: "Calling C code from Go and vice-versa.",
        detailedDescription: "CGO is the mechanism that allows Go programs to call C libraries directly. This is useful for interoperating with existing C codebases or accessing system-level functionality not available in the standard library.",
        codeExample: `package main
/*
#include <stdio.h>
void myCFunction() {
    printf("Hello from C!\\n");
}
*/
import "C"

func main() {
    C.myCFunction()
}`
    },
    {
        title: "Deployment: CI/CD for Go",
        description: "An overview of setting up a Continuous Integration/Continuous Deployment pipeline.",
        detailedDescription: "A CI/CD pipeline automates the process of building, testing, and deploying your application. For Go, a typical pipeline would: 1. Fetch the code from a repository. 2. Run `go fmt` and `go vet`. 3. Run `go test`. 4. Build the binary. 5. Package it into a Docker container. 6. Push the container to a registry. 7. Deploy the container to a server.",
        codeExample: `# Example GitHub Actions workflow step
# - name: Run tests
#   run: go test -v ./...
# 
# - name: Build
#   run: go build -v -o myapp ./cmd/myapp`
    },
    // =================================================================
    // =                   NEW LESSONS (40 Added)                      =
    // =================================================================
    {
        title: "Slices: Slicing and Internals",
        description: "A deeper look at how slicing works and its relationship with underlying arrays.",
        detailedDescription: "Slicing does not create a new copy of the data. It creates a new slice header that points to the same underlying array. Understanding this (length vs. capacity) is key to avoiding subtle bugs.",
        codeExample: `package main
import "fmt"
func main() {
    original := []int{1, 2, 3, 4, 5}
    slice1 := original[1:3] // [2, 3]
    
    // Modifying the slice affects the original array
    slice1[0] = 99
    
    fmt.Println("Original:", original) // [1, 99, 3, 4, 5]
    fmt.Println("Slice1:", slice1)     // [99, 3]
}`
    },
    {
        title: "Maps: Iteration Order",
        description: "Understanding that the iteration order of maps is not guaranteed.",
        detailedDescription: "When you iterate over a map using a `for...range` loop, the order in which you get the key-value pairs is not specified and is not guaranteed to be the same across different runs. If you need a stable order, you must maintain a separate data structure, like a sorted slice of keys.",
        codeExample: `package main
import "fmt"
func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    
    // The output order is not guaranteed
    for k, v := range m {
        fmt.Printf("key: %s, value: %d\n", k, v)
    }
}`
    },
    {
        title: "Structs: Tags",
        description: "Using struct tags to add metadata to struct fields.",
        detailedDescription: "Struct tags are string literals placed after the type of a struct field. They are a way to attach metadata to fields, which can be inspected at runtime using reflection. They are commonly used by packages like `encoding/json` to control how a struct is marshaled or unmarshaled.",
        codeExample: `package main
import (
    "encoding/json"
    "fmt"
)
type User struct {
    Username string \`json:"username"\`
    Password string \`json:"-"\` // The '-' tag means this field is ignored by the json package
}
func main() {
    u := User{Username: "gopher", Password: "password"}
    jsonData, _ := json.Marshal(u)
    fmt.Println(string(jsonData)) // {"username":"gopher"}
}`
    },
    {
        title: "Interfaces: Type Switches",
        description: "A way to perform different actions based on an interface value's dynamic type.",
        detailedDescription: "A type switch is a construct that permits several type assertions in series. It is similar to a regular switch statement, but the cases specify types, not values.",
        codeExample: `package main
import "fmt"
func do(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Twice %v is %v\n", v, v*2)
    case string:
        fmt.Printf("%q is %v bytes long\n", v, len(v))
    default:
        fmt.Printf("I don't know about type %T!\n", v)
    }
}
func main() {
    do(21)
    do("hello")
    do(true)
}`
    },
    {
        title: "Interfaces: The io.Reader and io.Writer",
        description: "Understanding the most important interfaces in Go's standard library.",
        detailedDescription: "`io.Reader` and `io.Writer` are fundamental interfaces for I/O. `Reader` represents any type from which you can read bytes, and `Writer` represents any type to which you can write bytes. Many standard library functions are built around these interfaces, allowing them to work with files, network connections, and in-memory buffers interchangeably.",
        codeExample: `package main
import (
    "fmt"
    "io"
    "os"
    "strings"
)
func main() {
    // strings.Reader implements io.Reader
    r := strings.NewReader("Hello, Reader!")
    
    // os.Stdout implements io.Writer
    io.Copy(os.Stdout, r)
}`
    },
    {
        title: "Concurrency: Select with Default",
        description: "Using the `default` case in a `select` statement for non-blocking operations.",
        detailedDescription: "Adding a `default` case to a `select` statement makes it non-blocking. If no other channel operation is ready, the `default` case will be executed immediately.",
        codeExample: `package main
import "fmt"
func main() {
    messages := make(chan string)
    select {
    case msg := <-messages:
        fmt.Println("received message", msg)
    default:
        fmt.Println("no message received")
    }
}`
    },
    {
        title: "Concurrency: Closing Channels",
        description: "Understanding how and when to close channels.",
        detailedDescription: "Closing a channel indicates that no more values will be sent on it. This is useful for communicating completion to the channel's receivers. It's important to note that only the sender should close a channel, never the receiver.",
        codeExample: `package main
import "fmt"
func main() {
    jobs := make(chan int, 5)
    done := make(chan bool)

    go func() {
        for {
            j, more := <-jobs
            if more {
                fmt.Println("received job", j)
            } else {
                fmt.Println("received all jobs")
                done <- true
                return
            }
        }
    }()

    for j := 1; j <= 3; j++ {
        jobs <- j
        fmt.Println("sent job", j)
    }
    close(jobs) // Sender closes the channel
    fmt.Println("sent all jobs")

    <-done // Wait for the goroutine to finish
}`
    },
    {
        title: "Concurrency: Worker Pools",
        description: "A common concurrency pattern for processing a queue of tasks.",
        detailedDescription: "A worker pool is a pattern where a fixed number of goroutines (workers) are created to process tasks from a shared channel (job queue). This is an efficient way to control the level of concurrency and prevent overwhelming system resources.",
        codeExample: `package main
// See sync.WaitGroup example for a similar implementation.`
    },
    {
        title: "Error Handling: Wrapping and Unwrapping",
        description: "Adding context to errors using wrapping.",
        detailedDescription: "Since Go 1.13, the `fmt.Errorf` function with the `%w` verb allows you to wrap an error, creating a new error that contains the original one. The `errors` package provides `Is` and `As` functions to inspect the chain of wrapped errors.",
        codeExample: `package main
import (
    "errors"
    "fmt"
)
func readFile(path string) error {
    return errors.New("file not found")
}
func processFile(path string) error {
    err := readFile(path)
    if err != nil {
        return fmt.Errorf("processing failed: %w", err)
    }
    return nil
}
func main() {
    err := processFile("data.txt")
    if err != nil {
        fmt.Println(err) // processing failed: file not found
    }
}`
    },
    {
        title: "Packages: The 'internal' Directory",
        description: "Creating packages that are only accessible within your project.",
        detailedDescription: "A special directory name, `internal`, allows you to define packages that are private to your module. Go's tooling will prevent any external module from importing packages under an `internal` directory.",
        codeExample: `// Project Structure:
// /my-project
//  ├── /cmd/my-app/main.go
//  └── /internal/auth/
//
// Code in main.go CAN import the auth package.
// An external project CANNOT import the auth package.`
    },
    {
        title: "Packages: init() Functions",
        description: "Understanding the special `init` function for package initialization.",
        detailedDescription: "Each package can contain one or more `init()` functions. These functions cannot be called directly. They are executed automatically by the Go runtime when the package is imported, before the `main` function starts. They are used for setting up package-level state.",
        codeExample: `package main
import "fmt"

func init() {
    fmt.Println("First init function executed")
}

func init() {
    fmt.Println("Second init function executed")
}

func main() {
    fmt.Println("Main function executed")
}`
    },
    {
        title: "Testing: Table-Driven Tests",
        description: "A common and effective pattern for writing Go tests.",
        detailedDescription: "Table-driven tests allow you to define a slice of test cases (the 'table'), and then iterate over them in a single test function. This makes it easy to add new test cases and keeps your test logic concise and readable.",
        codeExample: `// package main
// import "testing"
// func TestAdd(t *testing.T) {
//     testCases := []struct{
//         a, b int
//         want int
//     }{
//         {1, 2, 3},
//         {0, 0, 0},
//         {-1, 1, 0},
//     }
//     for _, tc := range testCases {
//         got := Add(tc.a, tc.b)
//         if got != tc.want {
//             t.Errorf("Add(%d, %d) = %d; want %d", tc.a, tc.b, got, tc.want)
//         }
//     }
// }`
    },
    {
        title: "Testing: Mocks & Stubs",
        description: "Isolating code for testing by replacing dependencies with fakes.",
        detailedDescription: "When testing a piece of code that depends on an external system (like a database or a web service), it's best to replace that dependency with a 'mock' or 'stub'. This is easily done in Go by defining an interface for the dependency and creating a fake implementation for your tests.",
        codeExample: `// type Datastore interface { GetUser(id int) (User, error) }
// 
// // A mock implementation for tests
// type MockDatastore struct {}
// func (m *MockDatastore) GetUser(id int) (User, error) {
//     return User{Name: "Mock User"}, nil
// }
// 
// func MyHandler(db Datastore) { /* ... */ }
// 
// func TestMyHandler(t *testing.T) {
//     mockDB := &MockDatastore{}
//     MyHandler(mockDB) // Pass the mock instead of a real database
// }`
    },
    {
        title: "Testing: Test Coverage",
        description: "Measuring how much of your code is exercised by your tests.",
        detailedDescription: "Go has built-in support for measuring test coverage. Running `go test -cover` will show the percentage of code statements covered by your tests. This helps identify parts of your code that are not being tested.",
        codeExample: `// Run tests with coverage analysis:
// go test -cover

// To generate a detailed HTML report:
// go test -coverprofile=coverage.out
// go tool cover -html=coverage.out`
    },
    {
        title: "Tooling: go doc",
        description: "Using the `go doc` command to view documentation in the terminal.",
        detailedDescription: "`go doc` is a command-line tool that extracts and displays documentation for Go packages, types, and functions directly in your terminal. It's a quick way to look up information without leaving your development environment.",
        codeExample: `// View documentation for the fmt package
// go doc fmt

// View documentation for the Println function
// go doc fmt.Println`
    },
    {
        title: "Tooling: Linters (staticcheck)",
        description: "Using advanced static analysis tools to find bugs and improve code.",
        detailedDescription: "Linters are tools that analyze source code to flag programming errors, bugs, stylistic errors, and suspicious constructs. `staticcheck` is a popular and powerful linter for Go that can find many types of subtle bugs that the compiler might miss.",
        codeExample: `// Install staticcheck:
// go install honnef.co/go/tools/cmd/staticcheck@latest

// Run it on your project:
// staticcheck ./...`
    },
    {
        title: "Web Dev: Cookies & Sessions",
        description: "Managing user state in web applications using cookies.",
        detailedDescription: "HTTP is stateless. To identify users across multiple requests, web applications use cookies and sessions. A cookie is a small piece of data sent from the server and stored on the user's browser. It can contain a session ID that the server uses to retrieve user-specific data.",
        codeExample: `package main
import "net/http"
func setCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie := http.Cookie{Name: "username", Value: "gopher"}
    http.SetCookie(w, &cookie)
}
func getCookieHandler(w http.ResponseWriter, r *http.Request) {
    cookie, err := r.Cookie("username")
    if err != nil { /* ... */ }
    // use cookie.Value
}`
    },
    {
        title: "Web Dev: WebSockets",
        description: "Building real-time, bidirectional communication between client and server.",
        detailedDescription: "WebSockets provide a full-duplex communication channel over a single TCP connection. This is ideal for applications that require real-time updates, such as chat applications, live notifications, and multiplayer games.",
        codeExample: `// A popular WebSocket library for Go is gorilla/websocket
// import "github.com/gorilla/websocket"
// 
// var upgrader = websocket.Upgrader{}
//
// func handler(w http.ResponseWriter, r *http.Request) {
//     conn, err := upgrader.Upgrade(w, r, nil)
//     if err != nil { return }
//     defer conn.Close()
//     // Read and write messages on the connection
// }`
    },
    {
        title: "Web Dev: REST API Best Practices",
        description: "Common patterns for designing robust and maintainable REST APIs.",
        detailedDescription: "Best practices include using proper HTTP verbs (GET, POST, PUT, DELETE), correct status codes (200, 201, 400, 404, 500), consistent resource naming (e.g., `/users`, `/users/{id}`), versioning (`/api/v1`), and structured JSON responses.",
        codeExample: `// Good response structure
// {
//     "data": { "id": 1, "name": "Gopher" },
//     "error": null
// }
// 
// // Bad response structure
// {
//     "id": 1,
//     "name": "Gopher",
//     "errorMessage": "something went wrong" // Mixing data and error fields
// }`
    },
    {
        title: "Databases: Transactions",
        description: "Using transactions to perform multiple database operations atomically.",
        detailedDescription: "A database transaction is a sequence of operations performed as a single logical unit of work. All operations in a transaction must complete successfully, or none of them are applied. This is crucial for maintaining data integrity.",
        codeExample: `// package main
// import "database/sql"
// func transferMoney(db *sql.DB, from, to int, amount float64) error {
//     tx, err := db.Begin()
//     if err != nil { return err }
//
//     _, err = tx.Exec("UPDATE accounts SET balance = balance - ? WHERE id = ?", amount, from)
//     if err != nil {
//         tx.Rollback() // Undo changes
//         return err
//     }
//
//     _, err = tx.Exec("UPDATE accounts SET balance = balance + ? WHERE id = ?", amount, to)
//     if err != nil {
//         tx.Rollback() // Undo changes
//         return err
//     }
//
//     return tx.Commit() // Finalize changes
// }`
    },
    {
        title: "Advanced: The `unsafe` Package",
        description: "Understanding Go's escape hatch for low-level memory operations.",
        detailedDescription: "The `unsafe` package contains operations that step around the type safety of Go. It's a powerful tool for low-level programming but, as its name implies, it is unsafe. Incorrect use can lead to memory corruption and unpredictable behavior. It should be avoided unless absolutely necessary.",
        codeExample: `package main
import (
    "fmt"
    "unsafe"
)
func main() {
    var x float64 = 3.14
    // Get the memory representation of the float as an integer
    bits := *(*uint64)(unsafe.Pointer(&x))
    fmt.Printf("Bits: %064b\n", bits)
}`
    },
    {
        title: "Advanced: CGO",
        description: "Calling C code from Go and vice-versa.",
        detailedDescription: "CGO is the mechanism that allows Go programs to call C libraries directly. This is useful for interoperating with existing C codebases or accessing system-level functionality not available in the standard library.",
        codeExample: `package main
/*
#include <stdio.h>
void myCFunction() {
    printf("Hello from C!\\n");
}
*/
import "C"

func main() {
    C.myCFunction()
}`
    },
    {
        title: "Deployment: CI/CD for Go",
        description: "An overview of setting up a Continuous Integration/Continuous Deployment pipeline.",
        detailedDescription: "A CI/CD pipeline automates the process of building, testing, and deploying your application. For Go, a typical pipeline would: 1. Fetch the code from a repository. 2. Run `go fmt` and `go vet`. 3. Run `go test`. 4. Build the binary. 5. Package it into a Docker container. 6. Push the container to a registry. 7. Deploy the container to a server.",
        codeExample: `# Example GitHub Actions workflow step
# - name: Run tests
#   run: go test -v ./...
# 
# - name: Build
#   run: go build -v -o myapp ./cmd/myapp`
    },
    // =================================================================
    // =                   NEW LESSONS (40 Added)                      =
    // =================================================================
    {
        title: "Slices: Slicing and Internals",
        description: "A deeper look at how slicing works and its relationship with underlying arrays.",
        detailedDescription: "Slicing does not create a new copy of the data. It creates a new slice header that points to the same underlying array. Understanding this (length vs. capacity) is key to avoiding subtle bugs.",
        codeExample: `package main
import "fmt"
func main() {
    original := []int{1, 2, 3, 4, 5}
    slice1 := original[1:3] // [2, 3]
    
    // Modifying the slice affects the original array
    slice1[0] = 99
    
    fmt.Println("Original:", original) // [1, 99, 3, 4, 5]
    fmt.Println("Slice1:", slice1)     // [99, 3]
}`
    },
    {
        title: "Maps: Iteration Order",
        description: "Understanding that the iteration order of maps is not guaranteed.",
        detailedDescription: "When you iterate over a map using a `for...range` loop, the order in which you get the key-value pairs is not specified and is not guaranteed to be the same across different runs. If you need a stable order, you must maintain a separate data structure, like a sorted slice of keys.",
        codeExample: `package main
import "fmt"
func main() {
    m := map[string]int{"a": 1, "b": 2, "c": 3}
    
    // The output order is not guaranteed
    for k, v := range m {
        fmt.Printf("key: %s, value: %d\n", k, v)
    }
}`
    },
    
];

// Assign the exercises array to window.globalData.exercises
// This makes the data accessible to main.js as expected.
window.globalData.lessons = lessons;
