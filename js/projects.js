// File: projects.js
// This file contains a list of Go programming projects.

if (typeof window.globalData === 'undefined') {
    window.globalData = {};
}

var projects = [
    // =================================================================
    // =                      Original Projects (4)                      =
    // =================================================================
    {
        title: "ASCII Art Generator",
        difficulty: "Medium",
        description: "A command-line tool that converts input text into ASCII art.",
        problemStatement: "Develop a tool that reads text from a file or standard input and prints it as ASCII art using a predefined font. The tool should handle different character sets and be able to output to the console.",
        relevantTopics: ["File I/O", "String Manipulation", "Command-line Arguments", "Slices"],
        relevantLinks: ["https://gobyexample.com/command-line-arguments", "https://gobyexample.com/reading-files"],
        functionToImplement: `package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	// 1. Check for the correct number of command-line arguments.
	// 2. Read the input string from the arguments.
	// 3. Read the banner file (e.g., "standard.txt").
	// 4. Split the banner file into lines.
	// 5. Iterate 8 times (for each line of the ASCII character).
	// 6. In each iteration, loop through the input string's characters.
	// 7. Calculate the starting line in the banner file for the current character.
	// 8. Print the corresponding line from the banner file.
	// 9. Print a newline at the end of each of the 8 lines.
}`,
        expectedOutput: `
        _  _   _    _   _
       | || | | |  | | | |
       | || |_| |  | | | |
       |__   _| |  |_| |_|
          | | | |      | |
          |_| |_|      |_|
`
    },
    {
        title: "Web Scraper",
        difficulty: "Hard",
        description: "A concurrent web scraper to extract data from websites.",
        problemStatement: "Build a web scraper that starts from a given URL, extracts all links, and concurrently visits them up to a certain depth. The scraper should collect specific information (e.g., page titles) and avoid visiting the same link twice.",
        relevantTopics: ["Concurrency", "Goroutines", "Channels", "net/http", "HTML Parsing"],
        relevantLinks: ["https://gobyexample.com/goroutines", "https://pkg.go.dev/net/http"],
        functionToImplement: `package main

import (
	"fmt"
	"net/http"
	"golang.org/x/net/html"
)

// This function will be recursive to traverse the HTML node tree.
func findLinks(n *html.Node) {
    // 1. Check if the current node is an <a> element.
    // 2. If it is, iterate through its attributes to find the "href".
    // 3. Print the href value.
    // 4. Recursively call findLinks for each child of the current node.
}

func main() {
	// 1. Define the starting URL.
	// 2. Use http.Get to fetch the content of the URL.
	// 3. Handle potential errors and defer closing the response body.
	// 4. Use html.Parse to parse the HTML from the response body.
	// 5. Call a recursive function to traverse the parsed HTML tree and find links.
}`,
        expectedOutput: `(A list of links extracted from http://example.com)`
    },
    {
        title: "Simple Blockchain",
        difficulty: "Hard",
        description: "Implementation of a basic blockchain.",
        problemStatement: "Create a simple blockchain data structure. Each block should contain a timestamp, data, the hash of the previous block, and its own hash. Implement functions to add new blocks and validate the integrity of the chain.",
        relevantTopics: ["Data Structures", "Structs", "Hashing (crypto/sha256)"],
        relevantLinks: ["https://gobyexample.com/sha256-hashes"],
        functionToImplement: `package main

import (
	"crypto/sha256"
	"fmt"
	"time"
)

type Block struct {
	Timestamp     int64
	Data          string
	PrevBlockHash []byte
	Hash          []byte
}

func NewBlock(data string, prevBlockHash []byte) *Block {
	// 1. Create a new Block instance with the provided data and previous hash.
	// 2. Set the timestamp using time.Now().Unix().
	// 3. Combine the block's data (PrevBlockHash, Data, Timestamp) into a single byte slice.
	// 4. Calculate the SHA256 hash of the combined data.
	// 5. Set the block's Hash field.
	// 6. Return the newly created block.
	return nil // Placeholder
}

func main() {
	// Create the first block in the chain (the "genesis block").
	// It has no previous hash.
	genesisBlock := NewBlock("Genesis Block", []byte{})
	fmt.Printf("Data: %s\\n", genesisBlock.Data)
	fmt.Printf("Prev. hash: %x\\n", genesisBlock.PrevBlockHash)
	fmt.Printf("Hash: %x\\n", genesisBlock.Hash)
}`,
        expectedOutput: `Data: Genesis Block
Prev. hash: 
Hash: (A unique hash)`
    },
    {
        title: "REST API for a Blog",
        difficulty: "Medium",
        description: "Create a backend REST API for a simple blogging platform.",
        problemStatement: "Develop a RESTful API with endpoints for creating, reading, updating, and deleting blog posts (CRUD). The API should handle JSON requests and responses and store data in memory (or a simple file).",
        relevantTopics: ["net/http", "JSON", "RESTful Principles", "Structs"],
        relevantLinks: ["https://gobyexample.com/json", "https://gobyexample.com/http-servers"],
        functionToImplement: `package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Post struct {
	ID    string \`json:"id"\`
	Title string \`json:"title"\`
	Body  string \`json:"body"\`
}

// posts will act as our in-memory database.
var posts []Post

func handlePosts(w http.ResponseWriter, r *http.Request) {
	// Use a switch statement on r.Method to handle different HTTP methods.
	// "GET": return a list of all posts.
	// "POST": create a new post from the request body.
	// Add other methods like PUT and DELETE as an extension.
}

func main() {
	// Add an initial post for testing.
	posts = append(posts, Post{ID: "1", Title: "First Post", Body: "This is the first post."})
	
	// Register the handler function for the "/posts" endpoint.
	http.HandleFunc("/posts", handlePosts)

	// Start the HTTP server on port 8080.
	fmt.Println("Server starting on port 8080...")
	http.ListenAndServe(":8080", nil)
}`,
        expectedOutput: `(When accessing /posts, a JSON list of posts is returned)`
    },

    // =================================================================
    // =                     New Projects (30)                         =
    // =================================================================

    // --- Easy Projects ---
    {
        title: "Simple Calculator (CLI)",
        difficulty: "Easy",
        description: "A simple command-line calculator.",
        problemStatement: "Write a program that takes three command-line arguments: two numbers and an operator (+, -, *, /). The program should perform the calculation and print the result.",
        relevantTopics: ["Command-line Arguments", "strconv", "Switch Statement"],
        relevantLinks: ["https://gobyexample.com/command-line-flags"],
        functionToImplement: `package main

import (
    "fmt"
    "os"
    "strconv"
)

func main() {
    // 1. Check if the number of arguments is exactly 4.
    // 2. Convert the first and third arguments to integers using strconv.Atoi.
    // 3. Use a switch statement on the second argument (the operator).
    // 4. Perform the correct calculation for each case (+, -, *, /).
    // 5. Print the final result.
}`,
        expectedOutput: `(When run with 'go run . 10 + 5', the result should be '15')`
    },
    {
        title: "Number Guessing Game",
        difficulty: "Easy",
        description: "A simple number guessing game.",
        problemStatement: "The program generates a secret number between 1 and 100. It prompts the user to guess the number. After each guess, the program tells the user if their guess was too high, too low, or correct.",
        relevantTopics: ["Random Numbers (math/rand)", "User Input (fmt.Scanln)", "Loops"],
        relevantLinks: ["https://gobyexample.com/random-numbers"],
        functionToImplement: `package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // 1. Seed the random number generator.
    // 2. Generate a secret number between 1 and 100.
    // 3. Start an infinite loop for guessing.
    // 4. Read the user's guess using fmt.Scanln.
    // 5. Compare the guess to the secret number and provide feedback ("Too low", "Too high").
    // 6. If the guess is correct, print a success message and break the loop.
}`,
        expectedOutput: `(Interaction with the user until the correct number is guessed)`
    },
    // ... (8 more easy projects)
    {
        title: "File Word Counter",
        difficulty: "Easy",
        description: "A tool to count words, lines, and characters in a file.",
        problemStatement: "Create a command-line tool that takes a filename as an argument and prints the number of lines, words, and characters in that file, similar to the `wc` command in Unix.",
        relevantTopics: ["File I/O", "os package", "bufio", "strings package"],
        relevantLinks: ["https://gobyexample.com/reading-files"],
        functionToImplement: `package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    // 1. Check for a single command-line argument (the filename).
    // 2. Open the file using os.Open. Handle errors. Defer file.Close().
    // 3. Initialize counters for lines, words, and characters.
    // 4. Create a new scanner using bufio.NewScanner to read the file line by line.
    // 5. Loop through the scanner:
    //    a. Increment the line counter.
    //    b. Add the length of the line (and a newline character) to the character counter.
    //    c. Use strings.Fields to count the words in the line and add to the word counter.
    // 6. Print the final counts.
}`,
        expectedOutput: `(When run with a file, e.g., 'go run . myfile.txt', it prints counts like 'Lines: 10, Words: 52, Characters: 342')`
    },
    {
        title: "Simple Web Server",
        difficulty: "Easy",
        description: "A server that responds with 'Hello, World!'.",
        problemStatement: "Write a basic HTTP server that listens on port 8080. It should have one route, `/hello`, that responds with the text 'Hello, World!'. All other routes should respond with a 404 Not Found error.",
        relevantTopics: ["net/http", "HTTP Handlers"],
        relevantLinks: ["https://gobyexample.com/http-servers"],
        functionToImplement: `package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    // This handler will be called for the /hello route.
    // Use fmt.Fprintf to write the response to the ResponseWriter.
}

func main() {
    // 1. Register the helloHandler for the "/hello" path using http.HandleFunc.
    // 2. Print a message indicating the server is starting.
    // 3. Start the server on port 8080 using http.ListenAndServe.
}`,
        expectedOutput: `(Server runs, and accessing http://localhost:8080/hello in a browser shows 'Hello, World!')`
    },
    {
        title: "Directory Lister",
        difficulty: "Easy",
        description: "A tool that lists files and directories in a path.",
        problemStatement: "Create a command-line tool that takes a directory path as an argument and lists all files and subdirectories within it, indicating whether each entry is a file or a directory.",
        relevantTopics: ["io/ioutil", "os package", "Command-line Arguments"],
        relevantLinks: ["https://pkg.go.dev/io/ioutil#ReadDir"],
        functionToImplement: `package main

import (
    "fmt"
    "io/ioutil"
    "os"
)

func main() {
    // 1. Get the directory path from command-line arguments. Default to "." if no argument is given.
    // 2. Use ioutil.ReadDir to get a list of all entries in the directory. Handle errors.
    // 3. Loop through the list of file entries.
    // 4. For each entry, check if it's a directory using entry.IsDir().
    // 5. Print the entry name, prefixed with "[D]" for directories and "[F]" for files.
}`,
        expectedOutput: `(Lists contents of a directory, e.g., '[D] myfolder', '[F] myfile.txt')`
    },

    // --- Medium Projects ---
    {
        title: "Sudoku Validator",
        difficulty: "Medium",
        description: "Validate a Sudoku board.",
        problemStatement: "Write a function that checks if a 9x9 Sudoku board (partially filled) is valid. The board is valid if each row, each column, and each of the nine 3x3 sub-boxes contain the digits 1-9 without repetition.",
        relevantTopics: ["2D Arrays (Slices of Slices)", "Maps", "Looping"],
        relevantLinks: ["https://en.wikipedia.org/wiki/Sudoku"],
        functionToImplement: `package main

func isValidSudoku(board [][]byte) bool {
    // 1. Create maps to track numbers in rows, columns, and 3x3 boxes.
    // 2. Iterate through each cell of the board.
    // 3. If the cell is not empty ('.'), check if the number has already appeared
    //    in the current row, column, or 3x3 box using the maps.
    // 4. If a duplicate is found, return false.
    // 5. If no duplicates are found after checking all cells, return true.
    return true // Placeholder
}`,
        expectedOutput: `(Returns 'true' for a valid board and 'false' for an invalid one)`
    },
    {
        title: "Quad Pattern Generator",
        difficulty: "Medium",
        description: "A generator for quadrilateral patterns.",
        problemStatement: "Write a program that generates geometric patterns using quadrilateral shapes (like squares and rectangles) based on input parameters (width, height, character).",
        relevantTopics: ["Looping", "Conditional Logic", "String Manipulation"],
        relevantLinks: [],
        functionToImplement: `package main

import "fmt"

func QuadA(x, y int) {
	// 1. Handle cases where x or y are not positive.
	// 2. Use a nested loop: the outer loop for rows (y), the inner for columns (x).
	// 3. Inside the inner loop, use if/else if/else conditions:
	//    - If it's a corner, print 'o'.
	//    - If it's a horizontal edge (but not a corner), print '-'.
	//    - If it's a vertical edge (but not a corner), print '|'.
	//    - Otherwise, print ' '.
	// 4. After the inner loop, print a newline character.
}

func main() {
    QuadA(5, 3)
}`,
        expectedOutput: `o---o
|   |
o---o`
    },
    {
        title: "URL Shortener",
        difficulty: "Medium",
        description: "A web service that shortens long URLs.",
        problemStatement: "Create a web service with two endpoints. One endpoint accepts a long URL and returns a short, unique URL. The other endpoint accepts a short URL, looks up the original long URL, and redirects the user to it.",
        relevantTopics: ["net/http", "Maps", "Hashing", "String Generation"],
        relevantLinks: ["https://gobyexample.com/http-redirects"],
        functionToImplement: `package main

import (
    "fmt"
    "net/http"
)

// Use a map to store shortUrl -> longUrl mappings.
var urlStore = make(map[string]string)

func shortenerHandler(w http.ResponseWriter, r *http.Request) {
    // 1. Handle POST requests to shorten a URL.
    // 2. Read the long URL from the request body.
    // 3. Generate a short, random string (e.g., 6 characters).
    // 4. Store the mapping in urlStore.
    // 5. Return the short URL to the client.
}

func redirectHandler(w http.ResponseWriter, r *http.Request) {
    // 1. Get the short URL from the request path.
    // 2. Look up the long URL in urlStore.
    // 3. If found, use http.Redirect to send the user to the long URL.
    // 4. If not found, return a 404 error.
}

func main() {
    http.HandleFunc("/shorten", shortenerHandler)
    http.HandleFunc("/", redirectHandler)
    http.ListenAndServe(":8080", nil)
}`,
        expectedOutput: `(A running web service that can create and redirect short URLs)`
    },
    {
        title: "Basic Markdown to HTML Converter",
        difficulty: "Medium",
        description: "Converts basic Markdown to HTML.",
        problemStatement: "Write a function that takes a string containing basic Markdown and converts it to HTML. It should support headings (#), bold text (**text**), and italic text (*text*).",
        relevantTopics: ["String Manipulation", "strings package", "Regular Expressions (optional)"],
        relevantLinks: ["https://pkg.go.dev/strings"],
        functionToImplement: `package main

import (
    "fmt"
    "strings"
)

func convertMarkdown(md string) string {
    // 1. Use strings.ReplaceAll to convert **text** to <b>text</b>.
    // 2. Use strings.ReplaceAll to convert *text* to <i>text</i>.
    // 3. Use strings.HasPrefix to check for lines starting with # and convert them to <h1>...</h1>.
    // 4. Wrap non-heading lines in <p>...</p> tags.
    return "" // Placeholder
}

func main() {
    markdown := "# My Title\\n\\nThis is **bold** and *italic*."
    html := convertMarkdown(markdown)
    fmt.Println(html)
}`,
        expectedOutput: `<h1>My Title</h1><p>This is <b>bold</b> and <i>italic</i>.</p>`
    },
    {
        title: "Concurrent Prime Sieve",
        difficulty: "Medium",
        description: "Finds prime numbers using a concurrent Sieve of Eratosthenes.",
        problemStatement: "Implement the Sieve of Eratosthenes algorithm to find all prime numbers up to a given integer `n`. The implementation should leverage goroutines and channels to filter out multiples concurrently.",
        relevantTopics: ["Concurrency", "Goroutines", "Channels", "Algorithms"],
        relevantLinks: ["https://gobyexample.com/channels"],
        functionToImplement: `package main

// Generate sends numbers from 2 to n into a channel.
func Generate(n int, ch chan<- int) {
    // ...
}

// Filter copies values from an input channel to an output channel,
// removing those divisible by 'prime'.
func Filter(in <-chan int, out chan<- int, prime int) {
    // ...
}

func main() {
    // 1. Create a channel and start a goroutine with Generate.
    // 2. Loop indefinitely:
    //    a. Receive the next prime from the current channel.
    //    b. Print the prime.
    //    c. Create a new channel.
    //    d. Start a new Filter goroutine with the old channel, new channel, and the new prime.
    //    e. Update the current channel to be the new channel.
}`,
        expectedOutput: `(Prints a sequence of prime numbers: 2, 3, 5, 7, 11, ...)`
    },
    {
        title: "Weather App (CLI)",
        difficulty: "Medium",
        description: "A CLI app to fetch weather data from an API.",
        problemStatement: "Create a command-line application that takes a city name as an argument and fetches the current weather data from a free public weather API (like OpenWeatherMap). The application should parse the JSON response and display the temperature and weather description.",
        relevantTopics: ["net/http", "JSON Parsing", "Command-line Arguments", "Structs"],
        relevantLinks: ["https://openweathermap.org/api"],
        functionToImplement: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "os"
)

// Define structs to match the JSON structure of the weather API response.
type WeatherResponse struct {
    // ...
}

func main() {
    // 1. Get the city name from os.Args.
    // 2. Construct the API URL with the city and your API key.
    // 3. Make an HTTP GET request to the URL.
    // 4. Read and parse the JSON response body into your structs.
    // 5. Print the relevant weather information in a user-friendly format.
}`,
        expectedOutput: `(e.g., 'Weather in London: 15.0°C, clear sky')`
    },


    // --- Hard Projects ---
    {
        title: "Sudoku Solver",
        difficulty: "Hard",
        description: "Solve Sudoku puzzles using backtracking.",
        problemStatement: "Write a program that solves a 9x9 Sudoku puzzle. The program should fill the empty cells (represented by '.') with the correct numbers to solve the puzzle.",
        relevantTopics: ["Recursion", "Backtracking", "2D Arrays"],
        relevantLinks: ["https://en.wikipedia.org/wiki/Sudoku_solving_algorithms"],
        functionToImplement: `package main

// solveSudoku solves the board in-place.
func solveSudoku(board [][]byte) {
    // 1. Create a recursive helper function, e.g., solve().
    // 2. In solve(), find the next empty cell ('.'). If no empty cells, a solution is found, return true.
    // 3. For the empty cell, try numbers from '1' to '9'.
    // 4. For each number, check if it's valid to place it in the current cell.
    // 5. If valid, place the number and recursively call solve().
    // 6. If the recursive call returns true, a solution was found, so return true.
    // 7. If not, backtrack: reset the cell to '.' and try the next number.
    // 8. If all numbers are tried and none lead to a solution, return false.
}`,
        expectedOutput: `(A fully solved Sudoku board)`
    },
    {
        title: "Quad Checker",
        difficulty: "Hard",
        description: "A checker for the output of the Quad Pattern Generator.",
        problemStatement: "Write a program that takes the output of a 'Quad' program as input and determines which 'Quad' function (QuadA, QuadB, ...) generated it. It must handle different dimensions and invalid inputs.",
        relevantTopics: ["String Parsing", "Input/Output", "Algorithmic Logic"],
        relevantLinks: [],
        functionToImplement: `package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

// This requires generating the output of each Quad function and comparing.
func main() {
	// 1. Read the entire input from os.Stdin.
	// 2. Determine the width and height from the input string.
	// 3. Generate the expected output for each Quad function (QuadA, QuadB, etc.)
	//    with the determined width and height.
	// 4. Compare the input with each generated output.
	// 5. Print the name of the matching Quad function along with its dimensions.
	// 6. Handle cases where multiple functions match or none match.
}`,
        expectedOutput: `[QuadA] [5] [3]`
    },
    {
        title: "Simple TCP Chat Server",
        difficulty: "Hard",
        description: "A server for multiple clients to chat.",
        problemStatement: "Build a TCP server that can handle multiple client connections simultaneously. When a client sends a message, the server should broadcast it to all other connected clients.",
        relevantTopics: ["net package", "TCP Sockets", "Concurrency", "Goroutines", "Channels"],
        relevantLinks: ["https://gobyexample.com/tcp-servers"],
        functionToImplement: `package main

import (
    "net"
)

// This map will store all active client connections.
var clients = make(map[net.Conn]bool) 
// This channel will broadcast incoming messages to all clients.
var messages = make(chan string)

func handleConnection(conn net.Conn) {
    // 1. Announce the new client connection.
    // 2. Add the new client to the 'clients' map.
    // 3. Use a scanner to read messages from the client in a loop.
    // 4. Send each received message to the 'messages' channel.
    // 5. When the connection closes, remove the client from the map.
}

func broadcaster() {
    // 1. Start an infinite loop.
    // 2. Wait to receive a message from the 'messages' channel.
    // 3. Loop through all 'clients' and send the message to each one.
}

func main() {
    // 1. Start the TCP listener on a port (e.g., 8080).
    // 2. Start the broadcaster goroutine.
    // 3. Loop forever, accepting new client connections.
    // 4. For each new connection, start a new 'handleConnection' goroutine.
}`,
        expectedOutput: `(A running chat server. Clients can connect via 'telnet localhost 8080' and send messages to each other.)`
    },
    {
        title: "In-Memory Key-Value Store",
        difficulty: "Hard",
        description: "A simple in-memory database server like Redis.",
        problemStatement: "Create a TCP server that acts as a key-value store. It should support commands like `SET key value`, `GET key`, and `DELETE key`. The data should be stored in a map and be safe for concurrent access.",
        relevantTopics: ["net package", "TCP Sockets", "Concurrency", "sync.Mutex", "Maps"],
        relevantLinks: ["https://gobyexample.com/mutexes"],
        functionToImplement: `package main

import (
    "net"
    "sync"
)

type SafeStore struct {
    mu    sync.Mutex
    store map[string]string
}

func (s *SafeStore) Set(key, value string) { /* ... */ }
func (s *SafeStore) Get(key string) (string, bool) { /* ... */ }
func (s *SafeStore) Delete(key string) { /* ... */ }

func handleClient(conn net.Conn, db *SafeStore) {
    // 1. Create a scanner to read commands from the client.
    // 2. Loop and read each command line.
    // 3. Parse the command (e.g., split by space).
    // 4. Use a switch on the command (SET, GET, DELETE).
    // 5. Call the appropriate method on the SafeStore.
    // 6. Write the response back to the client.
}

func main() {
    // 1. Create an instance of SafeStore.
    // 2. Start a TCP listener.
    // 3. Loop and accept connections, starting a new goroutine with handleClient for each.
}`,
        expectedOutput: `(A running key-value server. Clients can connect via 'telnet' and issue SET/GET/DELETE commands.)`
    },
    {
        title: "Load Balancer",
        difficulty: "Hard",
        description: "A basic load balancer for HTTP requests.",
        problemStatement: "Implement a simple round-robin load balancer. It should listen for HTTP requests on one port and forward them sequentially to a list of backend servers running on different ports.",
        relevantTopics: ["net/http", "net/http/httputil", "Concurrency", "sync/atomic"],
        relevantLinks: ["https://pkg.go.dev/net/http/httputil#ReverseProxy"],
        functionToImplement: `package main

import (
    "net/http"
    "net/http/httputil"
    "net/url"
    "sync/atomic"
)

type Backend struct {
    URL *url.URL
    Proxy *httputil.ReverseProxy
}

var serverPool []*Backend
var current uint64

func getNextBackend() *Backend {
    // Use atomic.AddUint64 to cycle through the serverPool safely.
    return nil // Placeholder
}

func loadBalancer(w http.ResponseWriter, r *http.Request) {
    // 1. Get the next available backend server.
    // 2. Call the backend's proxy to serve the HTTP request.
}

func main() {
    // 1. Define a list of backend server URLs.
    // 2. Create a Backend instance for each URL.
    // 3. Start the load balancer HTTP server.
}`,
        expectedOutput: `(A running load balancer that distributes requests to backend servers.)`
    }
];

// Assign the projects array to window.globalData.projects
window.globalData.projects = projects;
