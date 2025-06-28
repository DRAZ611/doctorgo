// File: exam.js
// This file contains all 90 exam exercises for the Go platform, sorted by difficulty.
// Each exercise includes a problem statement, a function to implement, a main function for testing, and the expected output.

// Ensure window.globalData exists before assigning to it
if (typeof window.globalData === 'undefined') {
    window.globalData = {};
}

var exam = [
    // =================================================================
    // =                Elementary Exercises (5% - 35%)                 =
    // =================================================================
    {
        title: "onlyf",
        percentage: 5,
        category: "Elementary",
        description: "A simple program that prints the letter 'f'.",
        problemStatement: "Write a program that prints the letter 'f' followed by a newline.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printF() {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintF()\n}`,
        expectedOutput: `f`
    },
    {
        title: "onlya",
        percentage: 5,
        category: "Elementary",
        description: "A program that prints the letter 'a'.",
        problemStatement: "Write a program that prints the letter 'a' followed by a newline.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printA() {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintA()\n}`,
        expectedOutput: `a`
    },
    {
        title: "onlyb",
        percentage: 5,
        category: "Elementary",
        description: "A program that prints the letter 'b'.",
        problemStatement: "Write a program that prints the letter 'b' followed by a newline.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printB() {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintB()\n}`,
        expectedOutput: `b`
    },
    {
        title: "onlyz",
        percentage: 5,
        category: "Elementary",
        description: "A program that prints the letter 'z'.",
        problemStatement: "Write a program that prints the letter 'z' followed by a newline.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printZ() {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintZ()\n}`,
        expectedOutput: `z`
    },
    {
        title: "only1",
        percentage: 5,
        category: "Elementary",
        description: "A program that prints the number '1'.",
        problemStatement: "Write a program that prints the number '1' followed by a newline.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printOne() {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintOne()\n}`,
        expectedOutput: `1`
    },
    {
        title: "printifnot",
        percentage: 10,
        category: "Elementary",
        description: "Print only letters and numbers from a string.",
        problemStatement: "Write a program that prints only the alphabetic and numeric characters from a given string.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printAlphanumeric(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintAlphanumeric("abc!123@")\n}`,
        expectedOutput: `abc123`
    },
    {
        title: "countcharacter",
        percentage: 10,
        category: "Elementary",
        description: "Count the occurrences of a specific character.",
        problemStatement: "Write a function that counts how many times a specific character appears in a string.",
        functionToImplement: `package main\n\n// Complete this function\nfunc countCharacter(s string, c rune) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(countCharacter("hello world", 'l'))\n}`,
        expectedOutput: `3`
    },
    {
        title: "checknumber",
        percentage: 10,
        category: "Elementary",
        description: "Check if a string is a number.",
        problemStatement: "Write a function that checks if a string represents a valid integer (may contain a '-' sign).",
        functionToImplement: `package main\n\n// Complete this function\nfunc isNumeric(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isNumeric("123"))\n\tfmt.Println(isNumeric("-45"))\n\tfmt.Println(isNumeric("12a3"))\n}`,
        expectedOutput: `true\ntrue\nfalse`
    },
    {
        title: "countalpha",
        percentage: 10,
        category: "Elementary",
        description: "Count the number of alphabetic characters.",
        problemStatement: "Write a function that counts the number of alphabetic characters (both uppercase and lowercase) in a string.",
        functionToImplement: `package main\n\n// Complete this function\nfunc countAlpha(s string) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(countAlpha("Hello 123 World!"))\n}`,
        expectedOutput: `10`
    },
    {
        title: "printif",
        percentage: 10,
        category: "Elementary",
        description: "Print the string if it meets a condition.",
        problemStatement: "Write a program that prints the string 'OK' if the input equals 'go'.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printIf(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintIf("go")\n\tprintIf("stop")\n}`,
        expectedOutput: `OK`
    },
    {
        title: "rectperimeter",
        percentage: 10,
        category: "Elementary",
        description: "Calculate the perimeter of a rectangle.",
        problemStatement: "Write a function that calculates the perimeter of a rectangle based on its width and height.",
        functionToImplement: `package main\n\n// Complete this function\nfunc rectPerimeter(width, height int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(rectPerimeter(10, 5))\n}`,
        expectedOutput: `30`
    },
    {
        title: "history",
        percentage: 20,
        category: "Intermediate",
        description: "An exercise for handling command history.",
        problemStatement: "Write a program that simulates a simple `history` command.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc history(commands []string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\thistory([]string{"ls", "pwd", "whoami"})\n}`,
        expectedOutput: `1 ls\n2 pwd\n3 whoami`
    },
    {
        title: "lastword",
        percentage: 20,
        category: "Intermediate",
        description: "Write a program that prints the last word of a string.",
        problemStatement: "Write a program that takes a string as an argument and prints its last word followed by a newline.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc lastWord(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tlastWord("  hello world  ")\n}`,
        expectedOutput: `world`
    },
    {
        title: "digitlen",
        percentage: 20,
        category: "Intermediate",
        description: "Count the number of digits in a string.",
        problemStatement: "Write a function that counts the number of digits in a string.",
        functionToImplement: `package main\n\n// Complete this function\nfunc digitLen(s string) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(digitLen("abc123def45"))\n}`,
        expectedOutput: `5`
    },
    {
        title: "retainfirsthalf",
        percentage: 20,
        category: "Intermediate",
        description: "Retain the first half of a string.",
        problemStatement: "Write a function that takes a string and returns its first half.",
        functionToImplement: `package main\n\n// Complete this function\nfunc retainFirstHalf(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(retainFirstHalf("abcdef"))\n\tfmt.Println(retainFirstHalf("abcde"))\n}`,
        expectedOutput: `abc\nabc`
    },
    {
        title: "cameltosnakecase",
        percentage: 20,
        category: "Intermediate",
        description: "Convert from CamelCase to snake_case.",
        problemStatement: "Write a function that converts a CamelCase string to snake_case.",
        functionToImplement: `package main\n\nimport "unicode"\n\n// Complete this function\nfunc camelToSnake(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(camelToSnake("helloWorld"))\n\tfmt.Println(camelToSnake("anotherTest"))\n}`,
        expectedOutput: `hello_world\nanother_test`
    },
    {
        title: "firstword",
        percentage: 20,
        category: "Intermediate",
        description: "Get the first word of a string.",
        problemStatement: "Write a function that takes a string and returns its first word.",
        functionToImplement: `package main\n\n// Complete this function\nfunc firstWord(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(firstWord("  hello world  "))\n}`,
        expectedOutput: `hello`
    },
    {
        title: "fishandchips",
        percentage: 20,
        category: "Intermediate",
        description: "A FizzBuzz-like exercise.",
        problemStatement: "Write a program that prints 'fish' for multiples of 2, 'chips' for multiples of 3, and 'fish and chips' for both.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc fishAndChips(n int) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tfishAndChips(6)\n\tfishAndChips(2)\n\tfishAndChips(3)\n\tfishAndChips(7)\n}`,
        expectedOutput: `fish and chips\nfish\nchips\n`
    },
    {
        title: "gcd",
        percentage: 20,
        category: "Intermediate",
        description: "Find the greatest common divisor.",
        problemStatement: "Write a function that calculates the greatest common divisor (GCD) of two integers.",
        functionToImplement: `package main\n\n// Complete this function\nfunc gcd(a, b int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(gcd(48, 18))\n}`,
        expectedOutput: `6`
    },
    {
        title: "hashcode",
        percentage: 20,
        category: "Intermediate",
        description: "Implement a simple hash function.",
        problemStatement: "Write a simple hash function that takes a string and returns a hash value.",
        functionToImplement: `package main\n\n// Complete this function\nfunc hashCode(s string) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(hashCode("hello"))\n}`,
        expectedOutput: `some integer`
    },
    {
        title: "repeatalpha",
        percentage: 20,
        category: "Intermediate",
        description: "Repeat letters according to their alphabetical order.",
        problemStatement: "Write a program that takes a string and repeats each alphabetic character a number of times equal to its position in the alphabet (a=1, b=2, ...).",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc repeatAlpha(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\trepeatAlpha("abc")\n}`,
        expectedOutput: `abbccc`
    },
    {
        title: "searchreplace",
        percentage: 20,
        category: "Intermediate",
        description: "Find and replace a character.",
        problemStatement: "Write a program that takes a string and two characters, finds the first character and replaces it with the second.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc searchAndReplace(s string, find rune, replace rune) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tsearchAndReplace("hello world", 'l', 'x')\n}`,
        expectedOutput: `hexxo worxd`
    },
    {
        title: "iscapitalized",
        percentage: 35,
        category: "Intermediate",
        description: "Check if words start with a capital letter.",
        problemStatement: "Write a function that checks if all words in a string start with a capital letter.",
        functionToImplement: `package main\n\nimport "unicode"\n\n// Complete this function\nfunc isCapitalized(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isCapitalized("Hello World"))\n\tfmt.Println(isCapitalized("Hello world"))\n}`,
        expectedOutput: `true\nfalse`
    },
    {
        title: "cleanstr",
        percentage: 35,
        category: "Intermediate",
        description: "Clean a string of extra spaces.",
        problemStatement: "Write a function that cleans a string by removing extra spaces between words, leaving only a single space.",
        functionToImplement: `package main\n\n// Complete this function\nfunc cleanString(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Printf("'%s'\\n", cleanString("  hello   world  "))\n}`,
        expectedOutput: `'hello world'`
    },
    {
        title: "expandstr",
        percentage: 35,
        category: "Intermediate",
        description: "Expand a string by adding spaces.",
        problemStatement: "Write a function that expands a string by adding 3 spaces between each word.",
        functionToImplement: `package main\n\n// Complete this function\nfunc expandStr(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(expandStr("hello world"))\n}`,
        expectedOutput: `hello   world`
    },
    {
        title: "findprevprime",
        percentage: 35,
        category: "Intermediate",
        description: "Find the previous prime number.",
        problemStatement: "Write a function that finds the closest prime number smaller than a given number.",
        functionToImplement: `package main\n\n// Complete this function\nfunc findPrevPrime(n int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(findPrevPrime(10))\n}`,
        expectedOutput: `7`
    },
    {
        title: "fromto",
        percentage: 35,
        category: "Intermediate",
        description: "Get a substring.",
        problemStatement: "Write a function that takes a string and two indices, and returns the part of the string between them.",
        functionToImplement: `package main\n\n// Complete this function\nfunc fromTo(s string, from, to int) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(fromTo("hello", 1, 3))\n}`,
        expectedOutput: `el`
    },
    {
        title: "itoa",
        percentage: 35,
        category: "Intermediate",
        description: "Convert an integer to a string.",
        problemStatement: "Write a function that converts an integer to its string representation.",
        functionToImplement: `package main\n\n// Complete this function\nfunc itoa(n int) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(itoa(123))\n}`,
        expectedOutput: `123`
    },
    {
        title: "printmemory",
        percentage: 35,
        category: "Intermediate",
        description: "Print memory representation.",
        problemStatement: "Write a program that takes a slice of bytes and prints its memory representation.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc printMemory(data []byte) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintMemory([]byte("hello"))\n}`,
        expectedOutput: `... (Memory representation)`
    },
    {
        title: "printrevcomb",
        percentage: 35,
        category: "Intermediate",
        description: "Print combinations in reverse order.",
        problemStatement: "Write a program that prints all combinations of 3 different digits in descending order.",
        functionToImplement: `package main\n\n// Complete this function\nfunc printRevComb() {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintRevComb()\n}`,
        expectedOutput: `987, 986, ...`
    },
    {
        title: "thirdtimeisacharm",
        percentage: 35,
        category: "Intermediate",
        description: "Print every third character.",
        problemStatement: "Write a program that prints every third character of a string.",
        functionToImplement: `package main\n\n// Complete this function\nfunc thirdTimeIsACharm(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tthirdTimeIsACharm("abcdefghi")\n}`,
        expectedOutput: `cfi`
    },
    {
        title: "weareunique",
        percentage: 35,
        category: "Intermediate",
        description: "Check for character uniqueness.",
        problemStatement: "Write a function that checks if all characters in a string are unique.",
        functionToImplement: `package main\n\n// Complete this function\nfunc weAreUnique(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(weAreUnique("abcde"))\n\tfmt.Println(weAreUnique("abacde"))\n}`,
        expectedOutput: `true\nfalse`
    },
    {
        title: "zipstring",
        percentage: 35,
        category: "Intermediate",
        description: "Compress a string.",
        problemStatement: "Write a function that compresses a string by replacing repeated characters with their count (e.g., 'aaabb' -> '3a2b').",
        functionToImplement: `package main\n\n// Complete this function\nfunc zipString(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(zipString("aaabbc"))\n}`,
        expectedOutput: `3a2b1c`
    },
    
    // =================================================================
    // =                  Hard Exercises (50% - 75%)                    =
    // =================================================================
    {
        title: "addprimesum",
        percentage: 50,
        category: "Hard",
        description: "Sum of prime numbers.",
        problemStatement: "Write a program that calculates the sum of all prime numbers up to a given number.",
        functionToImplement: `package main\n\n// Complete this function\nfunc addPrimeSum(n int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(addPrimeSum(10))\n}`,
        expectedOutput: `17`
    },
    {
        title: "canjump",
        percentage: 50,
        category: "Hard",
        description: "Check if you can jump.",
        problemStatement: "You have a slice of integers representing the maximum jump length. Check if you can reach the last element.",
        functionToImplement: `package main\n\n// Complete this function\nfunc canJump(nums []int) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(canJump([]int{2,3,1,1,4}))\n}`,
        expectedOutput: `true`
    },
    {
        title: "chunk",
        percentage: 50,
        category: "Hard",
        description: "Split a slice into chunks.",
        problemStatement: "Write a function that splits a slice into multiple chunks of a given size.",
        functionToImplement: `package main\n\n// Complete this function\nfunc chunk(slice []int, size int) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tchunk([]int{1,2,3,4,5}, 2)\n}`,
        expectedOutput: `[[1 2] [3 4] [5]]`
    },
    {
        title: "concatalternate",
        percentage: 50,
        category: "Hard",
        description: "Concatenate slices alternately.",
        problemStatement: "Write a function that concatenates two slices by taking elements alternately.",
        functionToImplement: `package main\n\n// Complete this function\nfunc concatAlternate(s1, s2 []int) []int {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(concatAlternate([]int{1,3,5}, []int{2,4,6}))\n}`,
        expectedOutput: `[1 2 3 4 5 6]`
    },
    {
        title: "concatslice",
        percentage: 50,
        category: "Hard",
        description: "Concatenate two slices.",
        problemStatement: "Write a function that concatenates two slices into a single slice.",
        functionToImplement: `package main\n\n// Complete this function\nfunc concatSlice(s1, s2 []int) []int {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(concatSlice([]int{1,2}, []int{3,4}))\n}`,
        expectedOutput: `[1 2 3 4]`
    },
    {
        title: "fprime",
        percentage: 50,
        category: "Hard",
        description: "Prime factorization.",
        problemStatement: "Write a program that decomposes an integer into its prime factors.",
        functionToImplement: `package main\n\n// Complete this function\nfunc fprime(n int) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tfprime(12)\n}`,
        expectedOutput: `2*2*3`
    },
    {
        title: "hiddenp",
        percentage: 50,
        category: "Hard",
        description: "Find a hidden word.",
        problemStatement: "Write a program that checks if the first string can be formed from characters of the second string in order.",
        functionToImplement: `package main\n\n// Complete this function\nfunc hiddenP(s1, s2 string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\thiddenP("abc", "axbyc")\n}`,
        expectedOutput: `1`
    },
    {
        title: "inter",
        percentage: 50,
        category: "Hard",
        description: "Find the intersection of two strings.",
        problemStatement: "Write a program that finds and displays the common characters between two strings without repetition.",
        functionToImplement: `package main\n\n// Complete this function\nfunc inter(s1, s2 string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tinter("hello", "world")\n}`,
        expectedOutput: `lo`
    },
    {
        title: "reversestrcap",
        percentage: 50,
        category: "Hard",
        description: "Reverse the case of characters in a string.",
        problemStatement: "Write a function that reverses the case of each character in a string (uppercase becomes lowercase and vice versa).",
        functionToImplement: `package main\n\n// Complete this function\nfunc reverseStrCap(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(reverseStrCap("HeLLo"))\n}`,
        expectedOutput: `hEllO`
    },
    {
        title: "saveandmiss",
        percentage: 50,
        category: "Hard",
        description: "An advanced exercise.",
        problemStatement: "Write a function that takes a number. If the number is less than 10, print 'Save'. If it is greater than or equal to 10, print 'Miss'.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc saveAndMiss(n int) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tsaveAndMiss(5)\n\tsaveAndMiss(15)\n}`,
        expectedOutput: `Save\nMiss`
    },
    {
        title: "union",
        percentage: 50,
        category: "Hard",
        description: "Find the union of two strings.",
        problemStatement: "Write a program that finds and displays the union of characters between two strings without repetition.",
        functionToImplement: `package main\n\n// Complete this function\nfunc union(s1, s2 string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tunion("hello", "world")\n}`,
        expectedOutput: `helowrd`
    },
    {
        title: "wdmatch",
        percentage: 50,
        category: "Hard",
        description: "Word matching.",
        problemStatement: "Write a program that checks if the first string exists entirely in the second with the same character order.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc wdmatch(s1, s2 string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\twdmatch("faya", "fg A Ay")\n}`,
        expectedOutput: `faya`
    },
    {
        title: "fifthandskip",
        percentage: 65,
        category: "Hard",
        description: "Skip every fifth element.",
        problemStatement: "Write a program that prints a string, but skips every fifth character.",
        functionToImplement: `package main\n\n// Complete this function\nfunc fifthAndSkip(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tfifthAndSkip("abcdefghijklmnopqrstuvwxyz")\n}`,
        expectedOutput: `abcd fghi jklm nopq rstu vwxyz`
    },
    {
        title: "notdecimal",
        percentage: 65,
        category: "Hard",
        description: "Check if a string is not a decimal number.",
        problemStatement: "Write a function that checks if a string does not contain a decimal point (like . or ,).",
        functionToImplement: `package main\n\n// Complete this function\nfunc notDecimal(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(notDecimal("123"))\n\tfmt.Println(notDecimal("123.45"))\n}`,
        expectedOutput: `true\nfalse`
    },
    {
        title: "revconcatalternate",
        percentage: 65,
        category: "Hard",
        description: "Concatenate slices alternately with the first one reversed.",
        problemStatement: "Write a function that reverses the first slice and then concatenates it with the second slice alternately.",
        functionToImplement: `package main\n\n// Complete this function\nfunc revConcatAlternate(s1, s2 []int) []int {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(revConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6}))\n}`,
        expectedOutput: `[3 4 2 5 1 6]`
    },
    {
        title: "slice",
        percentage: 65,
        category: "Hard",
        description: "Get a slice of a string.",
        problemStatement: "Write a function that takes a string and two indices, and returns the part of the string between them. Handle edge cases.",
        functionToImplement: `package main\n\n// Complete this function\nfunc slice(s string, start, end int) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(slice("hello world", 2, 7))\n}`,
        expectedOutput: `llo w`
    },
    {
        title: "findpairs",
        percentage: 75,
        category: "Hard",
        description: "Find pairs of numbers with a certain sum.",
        problemStatement: "Write a function that takes a slice of integers and a target number, and prints all pairs of numbers in the slice whose sum equals the target number.",
        functionToImplement: `package main\n\n// Complete this function\nfunc findPairs(nums []int, target int) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tfindPairs([]int{1, 2, 3, 4, 5, 6}, 7)\n}`,
        expectedOutput: `1,6\n2,5\n3,4`
    },
    {
        title: "revwstr",
        percentage: 75,
        category: "Hard",
        description: "Reverse the order of words in a string.",
        problemStatement: "Write a program that takes a string and reverses the order of its words.",
        functionToImplement: `package main\n\n// Complete this function\nfunc revWstr(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\trevWstr("hello world")\n}`,
        expectedOutput: `world hello`
    },
    {
        title: "rostring",
        percentage: 75,
        category: "Hard",
        description: "Rotate a string.",
        problemStatement: "Write a program that takes a string and rotates it: the first word becomes the last, and the rest of the words shift forward.",
        functionToImplement: `package main\n\n// Complete this function\nfunc rostring(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\trostring("abc   123   def")\n}`,
        expectedOutput: `123 def abc`
    },
    {
        title: "wordflip",
        percentage: 75,
        category: "Hard",
        description: "Flip words longer than 4 characters.",
        problemStatement: "Write a function that flips words longer than 4 characters in a sentence, while maintaining the word order.",
        functionToImplement: `package main\n\n// Complete this function\nfunc wordFlip(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(wordFlip("this is a longer test"))\n}`,
        expectedOutput: `this is a regnol test`
    },
    
    // =================================================================
    // =                Expert Exercises (85% - 100%)                  =
    // =================================================================
    {
        title: "itoabase",
        percentage: 85,
        category: "Expert",
        description: "Convert an integer to any base.",
        problemStatement: "Write a function that converts an integer to its string representation in a given base (from 2 to 16).",
        functionToImplement: `package main\n\n// Complete this function\nfunc itoBase(n, base int) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(itoBase(10, 2))\n\tfmt.Println(itoBase(255, 16))\n}`,
        expectedOutput: `1010\nFF`
    },
    {
        title: "options",
        percentage: 85,
        category: "Expert",
        description: "Parse command-line options.",
        problemStatement: "Write a program that parses command-line options (flags). It should recognize the options and display them correctly.",
        functionToImplement: `package main\n\n// Complete this function\nfunc parseOptions(args []string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\nimport "os"\n\n// Paste your function here\n\nfunc main() {\n\tparseOptions(os.Args[1:])\n}`,
        expectedOutput: `// Run: go run . -h -a -b\n// Output: hab`
    },
    {
        title: "piglatin",
        percentage: 85,
        category: "Expert",
        description: "Translate to Pig Latin.",
        problemStatement: "Write a program that translates a string into Pig Latin. Rules: If a word starts with a vowel, add 'ay' to the end. If it starts with a consonant, move all initial consonants to the end and add 'ay'.",
        functionToImplement: `package main\n\n// Complete this function\nfunc toPigLatin(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\ttoPigLatin("pig latin")\n\ttoPigLatin("apple")\n}`,
        expectedOutput: `igpay atinlay\nappleay`
    },
    {
        title: "romannumbers",
        percentage: 85,
        category: "Expert",
        description: "Convert Roman numerals.",
        problemStatement: "Write a program that takes a positive integer (between 1 and 4000) and converts it to its Roman numeral representation.",
        functionToImplement: `package main\n\n// Complete this function\nfunc toRoman(num int) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(toRoman(1994))\n}`,
        expectedOutput: `MCMXCIV`
    },
    {
        title: "brackets",
        percentage: 95,
        category: "Expert",
        description: "Check for balanced brackets.",
        problemStatement: "Write a program that takes a string containing brackets `()`, `[]`, `{}` and checks if the brackets are balanced and correctly closed.",
        functionToImplement: `package main\n\n// Complete this function\nfunc areBracketsBalanced(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(areBracketsBalanced("({[]})"))\n\tfmt.Println(areBracketsBalanced("([)]"))\n}`,
        expectedOutput: `true\nfalse`
    },
    {
        title: "rpncalc",
        percentage: 95,
        category: "Expert",
        description: "RPN calculator.",
        problemStatement: "Write a calculator that evaluates expressions in Reverse Polish Notation (RPN).",
        functionToImplement: `package main\n\n// Complete this function\nfunc rpnCalc(expr string) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(rpnCalc("3 4 + 5 *"))\n}`,
        expectedOutput: `35`
    },
    {
        title: "brainfuck",
        percentage: 100,
        category: "Expert",
        description: "An interpreter for the Brainfuck language.",
        problemStatement: "Write an interpreter for the Brainfuck programming language. The interpreter should take a string of Brainfuck code and execute it.",
        functionToImplement: `package main\n\n// Complete this function\nfunc interpretBrainfuck(code string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tinterpretBrainfuck("++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.")\n}`,
        expectedOutput: `Hello World!`
    },
    // =================================================================
    // =                    NEW EXAMS (25 Added)                       =
    // =================================================================
    {
        title: "ispowerof2",
        percentage: 15,
        category: "Elementary",
        description: "Check if a number is a power of 2.",
        problemStatement: "Write a function that determines if a given integer is a power of 2.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isPowerOfTwo(n int) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isPowerOfTwo(16))\n\tfmt.Println(isPowerOfTwo(15))\n}`,
        expectedOutput: `true\nfalse`
    },
    {
        title: "alphamirror",
        percentage: 15,
        category: "Elementary",
        description: "Mirror the alphabet.",
        problemStatement: "Write a program that takes a string and replaces each letter with its opposite in the alphabet (a -> z, b -> y, etc.).",
        functionToImplement: `package main\n\n// Complete this function\nfunc alphaMirror(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(alphaMirror("abc"))\n}`,
        expectedOutput: `zyx`
    },
    {
        title: "atoibase",
        percentage: 25,
        category: "Intermediate",
        description: "Convert a string from a given base to an integer.",
        problemStatement: "Write a function that converts a string representation of a number in a given base (from 2 to 16) to an integer.",
        functionToImplement: `package main\n\n// Complete this function\nfunc atoiBase(s string, base int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(atoiBase("1010", 2))\n\tfmt.Println(atoiBase("FF", 16))\n}`,
        expectedOutput: `10\n255`
    },
    {
        title: "doop",
        percentage: 25,
        category: "Intermediate",
        description: "Simple calculator.",
        problemStatement: "Write a program that takes two numbers and an operator (+, -, *, /, %) and performs the calculation.",
        functionToImplement: `package main\n\nimport (\n\t"fmt"\n\t"os"\n\t"strconv"\n)\n\n// Complete this function\nfunc doop() {\n\t// Your code here, read from os.Args\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\t// Run as: go run . 5 + 3\n\tdoop()\n}`,
        expectedOutput: `8`
    },
    {
        title: "expandstr2",
        percentage: 40,
        category: "Hard",
        description: "Expand a string with 3 spaces between words.",
        problemStatement: "Write a program that takes a string and expands it by adding exactly three spaces between each word.",
        functionToImplement: `package main\n\n// Complete this function\nfunc expandStr2(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(expandStr2("  hello   world  "))\n}`,
        expectedOutput: `hello   world`
    },
    {
        title: "isconcentrically",
        percentage: 40,
        category: "Hard",
        description: "Check if a matrix is concentrically symmetrical.",
        problemStatement: "Write a function that checks if a square matrix is concentrically symmetrical.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isConcentric(matrix [][]int) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tmatrix := [][]int{{1,1,1},{1,2,1},{1,1,1}}\n\tfmt.Println(isConcentric(matrix))\n}`,
        expectedOutput: `true`
    },
    {
        title: "lcm",
        percentage: 40,
        category: "Hard",
        description: "Find the least common multiple.",
        problemStatement: "Write a function that calculates the least common multiple (LCM) of two integers.",
        functionToImplement: `package main\n\n// Complete this function\nfunc lcm(a, b int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(lcm(4, 6))\n}`,
        expectedOutput: `12`
    },
    {
        title: "printhex",
        percentage: 40,
        category: "Hard",
        description: "Print a number in hexadecimal.",
        problemStatement: "Write a program that takes an integer and prints its hexadecimal representation.",
        functionToImplement: `package main\n\n// Complete this function\nfunc printHex(n int) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tprintHex(255)\n}`,
        expectedOutput: `ff`
    },
    {
        title: "reversebits",
        percentage: 45,
        category: "Hard",
        description: "Reverse the bits of a byte.",
        problemStatement: "Write a function that reverses the bits of a byte.",
        functionToImplement: `package main\n\n// Complete this function\nfunc reverseBits(b byte) byte {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\t// Example for a number, e.g. 4 (00000100) -> 32 (00100000)\n\tfmt.Println(reverseBits(4))\n}`,
        expectedOutput: `32`
    },
    {
        title: "split",
        percentage: 45,
        category: "Hard",
        description: "Split a string by a separator.",
        problemStatement: "Write a function that splits a string by a given separator string.",
        functionToImplement: `package main\n\n// Complete this function\nfunc split(s, sep string) []string {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(split("hello world", " "))\n}`,
        expectedOutput: `[hello world]`
    },
    {
        title: "tabmult",
        percentage: 45,
        category: "Hard",
        description: "Multiplication table.",
        problemStatement: "Write a program that takes a number and prints its multiplication table up to 9.",
        functionToImplement: `package main\n\nimport "os"\n\n// Complete this function\nfunc tabmult() {\n\t// Read from os.Args\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\t// Run as: go run . 9\n\ttabmult()\n}`,
        expectedOutput: `1 x 9 = 9\n2 x 9 = 18\n...`
    },
    {
        title: "treesize",
        percentage: 60,
        category: "Hard",
        description: "Calculate the size of a binary tree.",
        problemStatement: "Write a function that calculates the number of nodes in a binary tree.",
        functionToImplement: `package main\n\ntype TreeNode struct {\n\tVal int\n\tLeft, Right *TreeNode\n}\n\n// Complete this function\nfunc treeSize(root *TreeNode) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and treeSize here\n\nfunc main() {\n\troot := &TreeNode{Val: 1, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 3}}\n\tfmt.Println(treeSize(root))\n}`,
        expectedOutput: `3`
    },
    {
        title: "balancedtree",
        percentage: 70,
        category: "Hard",
        description: "Check if a binary tree is height-balanced.",
        problemStatement: "Write a function that checks if a binary tree is height-balanced (the depth of the two subtrees of every node never differs by more than 1).",
        functionToImplement: `package main\n\ntype TreeNode struct {\n\tVal int\n\tLeft, Right *TreeNode\n}\n\n// Complete this function\nfunc isBalanced(root *TreeNode) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and isBalanced here\n\nfunc main() {\n\troot := &TreeNode{Val: 3, Left: &TreeNode{Val: 9}, Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}}\n\tfmt.Println(isBalanced(root))\n}`,
        expectedOutput: `true`
    },
    {
        title: "clonelist",
        percentage: 70,
        category: "Hard",
        description: "Clone a linked list.",
        problemStatement: "Write a function that clones a linked list.",
        functionToImplement: `package main\n\ntype ListNode struct {\n\tVal int\n\tNext *ListNode\n}\n\n// Complete this function\nfunc cloneList(head *ListNode) *ListNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\n// Paste ListNode and cloneList here\n\nfunc main() {\n\t// Test here\n}`,
        expectedOutput: `(A new identical list)`
    },
    {
        title: "islooping",
        percentage: 70,
        category: "Hard",
        description: "Check if a linked list has a cycle.",
        problemStatement: "Write a function that checks if a linked list contains a cycle.",
        functionToImplement: `package main\n\ntype ListNode struct {\n\tVal int\n\tNext *ListNode\n}\n\n// Complete this function\nfunc isLooping(head *ListNode) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\n// Paste ListNode and isLooping here\n\nfunc main() {\n\t// Test here\n}`,
        expectedOutput: `true or false`
    },
    {
        title: "orderoftree",
        percentage: 70,
        category: "Hard",
        description: "In-order traversal of a tree.",
        problemStatement: "Write a function that performs an in-order traversal of a binary tree.",
        functionToImplement: `package main\n\ntype TreeNode struct {\n\tVal int\n\tLeft, Right *TreeNode\n}\n\n// Complete this function\nfunc inOrder(root *TreeNode) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste TreeNode and inOrder here\n\nfunc main() {\n\troot := &TreeNode{Val: 4, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 5}}\n\tinOrder(root)\n}`,
        expectedOutput: `2 4 5`
    },
    {
        title: "reverselist",
        percentage: 70,
        category: "Hard",
        description: "Reverse a linked list.",
        problemStatement: "Write a function that reverses a linked list.",
        functionToImplement: `package main\n\ntype ListNode struct {\n\tVal int\n\tNext *ListNode\n}\n\n// Complete this function\nfunc reverseList(head *ListNode) *ListNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\n// Paste ListNode and reverseList here\n\nfunc main() {\n\t// Test here\n}`,
        expectedOutput: `(Reversed list)`
    },
    {
        title: "gacrux",
        percentage: 80,
        category: "Expert",
        description: "An advanced algorithm exercise.",
        problemStatement: "Solve the Gacrux problem (specifics would be provided in a real exam).",
        functionToImplement: `package main\n\n// Complete this function\nfunc gacrux() {\n\t// Your code here\n}`,
        mainFunction: `package main\n\nfunc main() {\n\tgacrux()\n}`,
        expectedOutput: `(Problem specific output)`
    },
    {
        title: "displaylist",
        percentage: 80,
        category: "Expert",
        description: "Display a linked list.",
        problemStatement: "Write a function that displays the elements of a linked list, separated by ' -> '.",
        functionToImplement: `package main\n\nimport "fmt"\n\ntype ListNode struct {\n\tVal int\n\tNext *ListNode\n}\n\n// Complete this function\nfunc displayList(head *ListNode) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste ListNode and displayList here\n\nfunc main() {\n\thead := &ListNode{Val: 1, Next: &ListNode{Val: 2}}\n\tdisplayList(head)\n}`,
        expectedOutput: `1 -> 2`
    },
    {
        title: "treedeletion",
        percentage: 80,
        category: "Expert",
        description: "Delete a node from a BST.",
        problemStatement: "Write a function that deletes a node from a Binary Search Tree.",
        functionToImplement: `package main\n\ntype TreeNode struct {\n\tVal int\n\tLeft, Right *TreeNode\n}\n\n// Complete this function\nfunc deleteNode(root *TreeNode, key int) *TreeNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\n// Paste TreeNode and deleteNode here\n\nfunc main() {\n\t// Test here\n}`,
        expectedOutput: `(Tree after deletion)`
    },
    {
        title: "stack",
        percentage: 90,
        category: "Expert",
        description: "Implement a Stack.",
        problemStatement: "Implement a Stack data structure with Push, Pop, and Peek methods.",
        functionToImplement: `package main\n\ntype Stack struct {\n\titems []int\n}\n\nfunc (s *Stack) Push(i int) {}\nfunc (s *Stack) Pop() int { return 0 }\nfunc (s *Stack) Peek() int { return 0 }`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste Stack implementation here\n\nfunc main() {\n\ts := &Stack{}\n\ts.Push(1)\n\tfmt.Println(s.Peek())\n}`,
        expectedOutput: `1`
    },
    {
        title: "bal",
        percentage: 90,
        category: "Expert",
        description: "Check for balanced string.",
        problemStatement: "Check if a string has a balanced number of opening and closing parentheses.",
        functionToImplement: `package main\n\n// Complete this function\nfunc bal(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste bal here\n\nfunc main() {\n\tfmt.Println(bal("(())"))\n\tfmt.Println(bal("(()"))\n}`,
        expectedOutput: `true\nfalse`
    },
    {
        title: "isheap",
        percentage: 90,
        category: "Expert",
        description: "Check if a slice represents a valid min-heap.",
        problemStatement: "Write a function to check if a given slice represents a valid min-heap.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isMinHeap(arr []int) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste isMinHeap here\n\nfunc main() {\n\theap := []int{1, 3, 2, 6, 5}\n\tfmt.Println(isMinHeap(heap))\n}`,
        expectedOutput: `true`
    },
    {
        title: "graphiscycle",
        percentage: 99,
        category: "Expert",
        description: "Detect a cycle in a graph.",
        problemStatement: "Write a function to detect if a given directed graph has a cycle.",
        functionToImplement: `package main\n\n// Complete this function\nfunc hasCycle(graph map[int][]int) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste hasCycle here\n\nfunc main() {\n\tgraph := map[int][]int{0: {1}, 1: {2}, 2: {0}}\n\tfmt.Println(hasCycle(graph))\n}`,
        expectedOutput: `true`
    },
    {
        title: "graphshortestpath",
        percentage: 99,
        category: "Expert",
        description: "Find the shortest path in an unweighted graph.",
        problemStatement: "Write a function to find the shortest path between two nodes in an unweighted graph using BFS.",
        functionToImplement: `package main\n\n// Complete this function\nfunc shortestPath(graph map[int][]int, start, end int) []int {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste shortestPath here\n\nfunc main() {\n\tgraph := map[int][]int{0:{1,2}, 1:{3}, 2:{3}, 3:{4}}\n\tfmt.Println(shortestPath(graph, 0, 4))\n}`,
        expectedOutput: `[0 1 3 4] or [0 2 3 4]`
    },
    // =================================================================
    // =               ADDITIONAL EXAMS (20 Added)                       =
    // =================================================================
    {
        title: "arraytostr",
        percentage: 15,
        category: "Elementary",
        description: "Convert a slice of integers to a space-separated string.",
        problemStatement: "Write a function that converts a slice of integers to a string where each number is separated by a space.",
        functionToImplement: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\n// Complete this function\nfunc arrayToStr(arr []int) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(arrayToStr([]int{1, 2, 3}))\n}`,
        expectedOutput: `1 2 3`
    },
    {
        title: "firstnonrepeating",
        percentage: 25,
        category: "Intermediate",
        description: "Find the first non-repeating character.",
        problemStatement: "Write a function that finds the first non-repeating character in a string and returns it. If no such character exists, return a null character (0).",
        functionToImplement: `package main\n\n// Complete this function\nfunc firstNonRepeating(s string) rune {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(string(firstNonRepeating("aabbcdeeff")))\n}`,
        expectedOutput: `c`
    },
    {
        title: "longestword",
        percentage: 30,
        category: "Intermediate",
        description: "Find the longest word in a sentence.",
        problemStatement: "Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one encountered.",
        functionToImplement: `package main\n\nimport "strings"\n\n// Complete this function\nfunc longestWord(sentence string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(longestWord("This is a test sentence"))\n}`,
        expectedOutput: `sentence`
    },
    {
        title: "countsetbits",
        percentage: 35,
        category: "Intermediate",
        description: "Count set bits in a number.",
        problemStatement: "Write a function that counts the number of set (1) bits in the binary representation of a given non-negative integer.",
        functionToImplement: `package main\n\n// Complete this function\nfunc countSetBits(n int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(countSetBits(7))  // Binary 111\n\tfmt.Println(countSetBits(10)) // Binary 1010\n}`,
        expectedOutput: `3\n2`
    },
    {
        title: "reversewords",
        percentage: 40,
        category: "Hard",
        description: "Reverse the order of words in a string, maintaining spaces.",
        problemStatement: "Write a function that reverses the order of words in a given string. Leading/trailing spaces should be trimmed, and multiple spaces between words should be reduced to a single space. Example: \"the sky is blue\" -> \"blue is sky the\".",
        functionToImplement: `package main\n\nimport "strings"\n\n// Complete this function\nfunc reverseWords(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(reverseWords("  hello world  "))\n\tfmt.Println(reverseWords("a good   example"))\n}`,
        expectedOutput: `world hello
example good a`
    },
    {
        title: "findkthsmallest",
        percentage: 45,
        category: "Hard",
        description: "Find the Kth smallest element in an unsorted slice.",
        problemStatement: "Given an unsorted slice of integers `nums` and an integer `k`, return the `k`-th smallest element in the slice. Note that it is the `k`-th smallest element in sorted order, not the `k`-th distinct element.",
        functionToImplement: `package main\n\nimport "sort"\n\n// Complete this function\nfunc findKthSmallest(nums []int, k int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(findKthSmallest([]int{3, 2, 1, 5, 6, 4}, 2))\n\tfmt.Println(findKthSmallest([]int{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4))\n}`,
        expectedOutput: `2
3`
    },
    {
        title: "minstack",
        percentage: 55,
        category: "Hard",
        description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
        problemStatement: "Design a stack that supports `push`, `pop`, `top`, and retrieving the minimum element in constant time.",
        functionToImplement: `package main\n\n// Implement the MinStack struct and its methods.\ntype MinStack struct {\n\t// Your implementation here\n}\n\nfunc ConstructorMinStack() MinStack { return MinStack{} }\nfunc (this *MinStack) Push(val int) {}\nfunc (this *MinStack) Pop() {}\nfunc (this *MinStack) Top() int { return 0 }\nfunc (this *MinStack) GetMin() int { return 0 }`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your MinStack implementation here\n\nfunc main() {\n\tminStack := ConstructorMinStack()\n\tminStack.Push(-2)\n\tminStack.Push(0)\n\tminStack.Push(-3)\n\tfmt.Println(minStack.GetMin()) // return -3\n\tminStack.Pop()\n\tfmt.Println(minStack.Top())    // return 0\n\tfmt.Println(minStack.GetMin()) // return -2\n}`,
        expectedOutput: `-3
0
-2`
    },
    {
        title: "sortedlisttobst",
        percentage: 60,
        category: "Hard",
        description: "Convert a sorted linked list to a height-balanced binary search tree.",
        problemStatement: "Given the `head` of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
        functionToImplement: `package main\n\ntype ListNode struct { Val int; Next *ListNode }\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc sortedListToBST(head *ListNode) *TreeNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste ListNode, TreeNode, and sortedListToBST here\n\nfunc main() {\n\t// Example: -10 -> -3 -> 0 -> 5 -> 9\n\thead := &ListNode{Val: -10, Next: &ListNode{Val: -3, Next: &ListNode{Val: 0, Next: &ListNode{Val: 5, Next: &ListNode{Val: 9}}}}}\n\tbstRoot := sortedListToBST(head)\n\t// You can implement an in-order traversal to verify the BST structure\n\tfmt.Println(bstRoot.Val) // Should be 0\n}`,
        expectedOutput: `0`
    },
    {
        title: "maxdepthbinarytree",
        percentage: 65,
        category: "Hard",
        description: "Calculate the maximum depth of a binary tree.",
        problemStatement: "Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
        functionToImplement: `package main\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc maxDepth(root *TreeNode) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and maxDepth here\n\nfunc main() {\n\troot := &TreeNode{Val: 3, Left: &TreeNode{Val: 9}, Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}}\n\tfmt.Println(maxDepth(root))\n}`,
        expectedOutput: `3`
    },
    {
        title: "rottingoranges",
        percentage: 70,
        category: "Hard",
        description: "Time for all fresh oranges to rot in a grid.",
        problemStatement: "You are given an `m x n` grid where each cell can have one of three values: `0` (empty cell), `1` (fresh orange), or `2` (rotten orange). Every minute, any fresh orange that is horizontally or vertically adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no fresh oranges are present. If this is impossible, return -1.",
        functionToImplement: `package main\n\n// Complete this function\nfunc orangesRotting(grid [][]int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tgrid1 := [][]int{{2,1,1},{1,1,0},{0,1,1}}\n\tfmt.Println(orangesRotting(grid1))\n\tgrid2 := [][]int{{2,1,1},{0,1,1},{1,0,1}}\n\tfmt.Println(orangesRotting(grid2))\n\tgrid3 := [][]int{{0,2}}\n\tfmt.Println(orangesRotting(grid3))\n}`,
        expectedOutput: `4
-1
0`
    },
    {
        title: "maximalrectangle",
        percentage: 75,
        category: "Expert",
        description: "Find the largest rectangle containing only '1's in a binary matrix.",
        problemStatement: "Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return its area.",
        functionToImplement: `package main\n\n// Complete this function\nfunc maximalRectangle(matrix [][]byte) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tmatrix := [][]byte{\n\t\t{'1','0','1','0','0'},\n\t\t{'1','0','1','1','1'},\n\t\t{'1','1','1','1','1'},\n\t\t{'1','0','0','1','0'},\n\t}\n\tfmt.Println(maximalRectangle(matrix))\n}`,
        expectedOutput: `6`
    },
    {
        title: "countandsegment",
        percentage: 80,
        category: "Expert",
        description: "Count words and segment a string.",
        problemStatement: "Write a program that takes a string and prints the number of words it contains. A word is defined as a sequence of alphabetic characters. Then, print each word on a new line.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc countAndSegmentWords(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tcountAndSegmentWords("Hello, world! How are you?")\n\tcountAndSegmentWords("  GoLang is FUN!  ")\n}`,
        expectedOutput: `Word Count: 5
Hello
world
How
are
you

Word Count: 3
GoLang
is
FUN`
    },
    {
        title: "levelordertraversal",
        percentage: 85,
        category: "Expert",
        description: "Perform level-order (BFS) traversal of a binary tree.",
        problemStatement: "Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
        functionToImplement: `package main\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc levelOrder(root *TreeNode) [][]int {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and levelOrder here\n\nfunc main() {\n\troot := &TreeNode{Val: 3, Left: &TreeNode{Val: 9}, Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}}\n\tfmt.Println(levelOrder(root))\n}`,
        expectedOutput: `[[3] [9 20] [15 7]]`
    },
    {
        title: "serializebt",
        percentage: 90,
        category: "Expert",
        description: "Serialize a binary tree to a string.",
        problemStatement: "Design an algorithm to serialize a binary tree into a string. The string can then be deserialized back into the tree.",
        functionToImplement: `package main\n\nimport (\n\t"strconv"\n\t"strings"\n)\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc serialize(root *TreeNode) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and serialize here\n\nfunc main() {\n\troot := &TreeNode{Val: 1, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 3, Left: &TreeNode{Val: 4}, Right: &TreeNode{Val: 5}}}\n\tfmt.Println(serialize(root))\n}`,
        expectedOutput: `1,2,#,#,3,4,#,#,5,#,#` // Example format: pre-order with # for nulls
    },
    {
        title: "deserializbt",
        percentage: 90,
        category: "Expert",
        description: "Deserialize a binary tree from a string.",
        problemStatement: "Design an algorithm to deserialize a binary tree from a string generated by your `serialize` function.",
        functionToImplement: `package main\n\nimport (\n\t"strconv"\n\t"strings"\n)\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc deserialize(data string) *TreeNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and deserialize here\n\nfunc main() {\n\tserializedData := "1,2,#,#,3,4,#,#,5,#,#"\n\troot := deserialize(serializedData)\n\tfmt.Println(root.Val) // Should be 1\n\tfmt.Println(root.Right.Left.Val) // Should be 4\n}`,
        expectedOutput: `1
4`
    },
    {
        title: "longestincreasingsubsequence",
        percentage: 95,
        category: "Expert",
        description: "Find the length of the longest increasing subsequence.",
        problemStatement: "Given an unsorted array of integers `nums`, return the length of the longest increasing subsequence.",
        functionToImplement: `package main\n\n// Complete this function\nfunc lengthOfLIS(nums []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(lengthOfLIS([]int{10, 9, 2, 5, 3, 7, 101, 18}))\n\tfmt.Println(lengthOfLIS([]int{0, 1, 0, 3, 2, 3}))\n}`,
        expectedOutput: `4
4`
    },
    {
        title: "decode_message",
        percentage: 95,
        category: "Expert",
        description: "Decode a message using a given mapping.",
        problemStatement: "You are given a string `key` and a string `message`. To decode the message, first create a mapping from `key` to the lowercase English alphabet. The mapping is created by taking the first appearance of each character in `key` (excluding space) in order and assigning it to the next available letter in the alphabet ('a', 'b', 'c', ...). Then, use this mapping to decode `message`. Spaces in `message` should remain spaces.",
        functionToImplement: `package main\n\n// Complete this function\nfunc decodeMessage(key string, message string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tkey := "the quick brown fox jumps over the lazy dog"\n\tmessage := "vkbs bs tpeup ifmepq" // Decodes to: this is a secret\n\tfmt.Println(decodeMessage(key, message))\n}`,
        expectedOutput: `this is a secret`
    },
    {
        title: "shortest_path_binary_matrix_v2",
        percentage: 95,
        category: "Expert",
        description: "Find the shortest path in a binary matrix (8-directional).",
        problemStatement: "Given an `n x n` binary matrix `grid`, return the length of the shortest clear path in the matrix. If there is no clear path, return -1. A clear path is a path from the top-left cell `(0, 0)` to the bottom-right cell `(n - 1, n - 1)` such that all visited cells are `0`. You can move in 8 directions (horizontally, vertically, and diagonally).",
        functionToImplement: `package main\n\n// Complete this function\nfunc shortestPathBinaryMatrix(grid [][]int) int {\n\t// Your code here\n\treturn -1\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tgrid1 := [][]int{{0,1},{1,0}}\n\tfmt.Println(shortestPathBinaryMatrix(grid1))\n\tgrid2 := [][]int{{0,0,0},{1,1,0},{1,1,0}}\n\tfmt.Println(shortestPathBinaryMatrix(grid2))\n}`,
        expectedOutput: `2
4`
    },
    {
        title: "number_of_islands",
        percentage: 99,
        category: "Expert",
        description: "Count the number of islands in a 2D binary grid.",
        problemStatement: "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
        functionToImplement: `package main\n\n// Complete this function\nfunc numIslands(grid [][]byte) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tgrid1 := [][]byte{\n\t\t{'1','1','1','1','0'},\n\t\t{'1','1','0','1','0'},\n\t\t{'1','1','0','0','0'},\n\t\t{'0','0','0','0','0'},\n\t}\n\tfmt.Println(numIslands(grid1))\n\tgrid2 := [][]byte{\n\t\t{'1','1','0','0','0'},\n\t\t{'1','1','0','0','0'},\n\t\t{'0','0','1','0','0'},\n\t\t{'0','0','0','1','1'},\n\t}\n\tfmt.Println(numIslands(grid2))\n}`,
        expectedOutput: `1
3`
    },
    {
        title: "min_cost_climbing_stairs",
        percentage: 99,
        category: "Expert",
        description: "Find the minimum cost to reach the top of a staircase.",
        problemStatement: "You are given an integer array `cost` where `cost[i]` is the cost of `i`-th step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from step 0, or step 1. Return the minimum cost to reach the top of the floor.",
        functionToImplement: `package main\n\nimport "math"\n\n// Complete this function\nfunc minCostClimbingStairs(cost []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(minCostClimbingStairs([]int{10,15,20}))\n\tfmt.Println(minCostClimbingStairs([]int{1,100,1,1,1,100,1,1,100,1}))\n}`,
        expectedOutput: `15
6`
    },
    {
        title: "house_robber",
        percentage: 99,
        category: "Expert",
        description: "Find the maximum amount of money you can rob from houses.",
        problemStatement: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses are arranged in a circle, meaning the first house is the neighbor of the last one. Meanwhile, adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
        functionToImplement: `package main\n\nimport "math"\n\n// Complete this function\nfunc rob(nums []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(rob([]int{2,3,2}))\n\tfmt.Println(rob([]int{1,2,3,1}))\n\tfmt.Println(rob([]int{0}))\n}`,
        expectedOutput: `3
4
0`
    },
    {
        title: "longest_palindromic_subsequence",
        percentage: 99,
        category: "Expert",
        description: "Find the length of the longest palindromic subsequence.",
        problemStatement: "Given a string `s`, find the length of the longest palindromic subsequence in `s`.",
        functionToImplement: `package main\n\n// Complete this function\nfunc longestPalindromeSubsequence(s string) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(longestPalindromeSubsequence("bbbab"))\n\tfmt.Println(longestPalindromeSubsequence("cbbd"))\n}`,
        expectedOutput: `4
2`
    },
    {
        title: "regular_expression_matching_advanced",
        percentage: 100,
        category: "Expert",
        description: "Implement regular expression matching with full `.` and `*` support (DP solution).",
        problemStatement: "Given an input string `s` and a pattern `p`, implement regular expression matching with support for `.` (matches any single character) and `*` (matches zero or more of the preceding element). This problem typically requires a dynamic programming approach.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isMatchAdvanced(s string, p string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isMatchAdvanced("aa", "a"))\n\tfmt.Println(isMatchAdvanced("aa", "a*"))\n\tfmt.Println(isMatchAdvanced("ab", ".*"))\n\tfmt.Println(isMatchAdvanced("aab", "c*a*b"))\n}`,
        expectedOutput: `false
true
true
true`
    },
    // =================================================================
    // =               ADDITIONAL EXAMS (20 Added)                       =
    // =================================================================
    {
        title: "arraytostr",
        percentage: 15,
        category: "Elementary",
        description: "Convert a slice of integers to a space-separated string.",
        problemStatement: "Write a function that converts a slice of integers to a string where each number is separated by a space.",
        functionToImplement: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n)\n\n// Complete this function\nfunc arrayToStr(arr []int) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(arrayToStr([]int{1, 2, 3}))\n}`,
        expectedOutput: `1 2 3`
    },
    {
        title: "firstnonrepeating",
        percentage: 25,
        category: "Intermediate",
        description: "Find the first non-repeating character.",
        problemStatement: "Write a function that finds the first non-repeating character in a string and returns it. If no such character exists, return a null character (0).",
        functionToImplement: `package main\n\n// Complete this function\nfunc firstNonRepeating(s string) rune {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(string(firstNonRepeating("aabbcdeeff")))\n}`,
        expectedOutput: `c`
    },
    {
        title: "longestword",
        percentage: 30,
        category: "Intermediate",
        description: "Find the longest word in a sentence.",
        problemStatement: "Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one encountered.",
        functionToImplement: `package main\n\nimport "strings"\n\n// Complete this function\nfunc longestWord(sentence string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(longestWord("This is a test sentence"))\n}`,
        expectedOutput: `sentence`
    },
    {
        title: "countsetbits",
        percentage: 35,
        category: "Intermediate",
        description: "Count set bits in a number.",
        problemStatement: "Write a function that counts the number of set (1) bits in the binary representation of a given non-negative integer.",
        functionToImplement: `package main\n\n// Complete this function\nfunc countSetBits(n int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(countSetBits(7))  // Binary 111\n\tfmt.Println(countSetBits(10)) // Binary 1010\n}`,
        expectedOutput: `3\n2`
    },
    {
        title: "reversewords",
        percentage: 40,
        category: "Hard",
        description: "Reverse the order of words in a string, maintaining spaces.",
        problemStatement: "Write a function that reverses the order of words in a given string. Leading/trailing spaces should be trimmed, and multiple spaces between words should be reduced to a single space. Example: \"the sky is blue\" -> \"blue is sky the\".",
        functionToImplement: `package main\n\nimport "strings"\n\n// Complete this function\nfunc reverseWords(s string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(reverseWords("  hello world  "))\n\tfmt.Println(reverseWords("a good   example"))\n}`,
        expectedOutput: `world hello
example good a`
    },
    {
        title: "findkthsmallest",
        percentage: 45,
        category: "Hard",
        description: "Find the Kth smallest element in an unsorted slice.",
        problemStatement: "Given an unsorted slice of integers `nums` and an integer `k`, return the `k`-th smallest element in the slice. Note that it is the `k`-th smallest element in sorted order, not the `k`-th distinct element.",
        functionToImplement: `package main\n\nimport "sort"\n\n// Complete this function\nfunc findKthSmallest(nums []int, k int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(findKthSmallest([]int{3, 2, 1, 5, 6, 4}, 2))\n\tfmt.Println(findKthSmallest([]int{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4))\n}`,
        expectedOutput: `2
3`
    },
    {
        title: "minstack",
        percentage: 55,
        category: "Hard",
        description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
        problemStatement: "Design a stack that supports `push`, `pop`, `top`, and retrieving the minimum element in constant time.",
        functionToImplement: `package main\n\n// Implement the MinStack struct and its methods.\ntype MinStack struct {\n\t// Your implementation here\n}\n\nfunc ConstructorMinStack() MinStack { return MinStack{} }\nfunc (this *MinStack) Push(val int) {}\nfunc (this *MinStack) Pop() {}\nfunc (this *MinStack) Top() int { return 0 }\nfunc (this *MinStack) GetMin() int { return 0 }`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your MinStack implementation here\n\nfunc main() {\n\tminStack := ConstructorMinStack()\n\tminStack.Push(-2)\n\tminStack.Push(0)\n\tminStack.Push(-3)\n\tfmt.Println(minStack.GetMin()) // return -3\n\tminStack.Pop()\n\tfmt.Println(minStack.Top())    // return 0\n\tfmt.Println(minStack.GetMin()) // return -2\n}`,
        expectedOutput: `-3
0
-2`
    },
    {
        title: "sortedlisttobst",
        percentage: 60,
        category: "Hard",
        description: "Convert a sorted linked list to a height-balanced binary search tree.",
        problemStatement: "Given the `head` of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
        functionToImplement: `package main\n\ntype ListNode struct { Val int; Next *ListNode }\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc sortedListToBST(head *ListNode) *TreeNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste ListNode, TreeNode, and sortedListToBST here\n\nfunc main() {\n\t// Example: -10 -> -3 -> 0 -> 5 -> 9\n\thead := &ListNode{Val: -10, Next: &ListNode{Val: -3, Next: &ListNode{Val: 0, Next: &ListNode{Val: 5, Next: &ListNode{Val: 9}}}}}\n\tbstRoot := sortedListToBST(head)\n\t// You can implement an in-order traversal to verify the BST structure\n\tfmt.Println(bstRoot.Val) // Should be 0\n}`,
        expectedOutput: `0`
    },
    {
        title: "maxdepthbinarytree",
        percentage: 65,
        category: "Hard",
        description: "Calculate the maximum depth of a binary tree.",
        problemStatement: "Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
        functionToImplement: `package main\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc maxDepth(root *TreeNode) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and maxDepth here\n\nfunc main() {\n\troot := &TreeNode{Val: 3, Left: &TreeNode{Val: 9}, Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}}\n\tfmt.Println(maxDepth(root))\n}`,
        expectedOutput: `3`
    },
    {
        title: "rottingoranges",
        percentage: 70,
        category: "Hard",
        description: "Time for all fresh oranges to rot in a grid.",
        problemStatement: "You are given an `m x n` grid where each cell can have one of three values: `0` (empty cell), `1` (fresh orange), or `2` (rotten orange). Every minute, any fresh orange that is horizontally or vertically adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no fresh oranges are present. If this is impossible, return -1.",
        functionToImplement: `package main\n\n// Complete this function\nfunc orangesRotting(grid [][]int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tgrid1 := [][]int{{2,1,1},{1,1,0},{0,1,1}}\n\tfmt.Println(orangesRotting(grid1))\n\tgrid2 := [][]int{{2,1,1},{0,1,1},{1,0,1}}\n\tfmt.Println(orangesRotting(grid2))\n\tgrid3 := [][]int{{0,2}}\n\tfmt.Println(orangesRotting(grid3))\n}`,
        expectedOutput: `4
-1
0`
    },
    {
        title: "maximalrectangle",
        percentage: 75,
        category: "Expert",
        description: "Find the largest rectangle containing only '1's in a binary matrix.",
        problemStatement: "Given a `rows x cols` binary `matrix` filled with `0`'s and `1`'s, find the largest rectangle containing only `1`'s and return its area.",
        functionToImplement: `package main\n\n// Complete this function\nfunc maximalRectangle(matrix [][]byte) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tmatrix := [][]byte{\n\t\t{'1','0','1','0','0'},\n\t\t{'1','0','1','1','1'},\n\t\t{'1','1','1','1','1'},\n\t\t{'1','0','0','1','0'},\n\t}\n\tfmt.Println(maximalRectangle(matrix))\n}`,
        expectedOutput: `6`
    },
    {
        title: "countandsegment",
        percentage: 80,
        category: "Expert",
        description: "Count words and segment a string.",
        problemStatement: "Write a program that takes a string and prints the number of words it contains. A word is defined as a sequence of alphabetic characters. Then, print each word on a new line.",
        functionToImplement: `package main\n\nimport "fmt"\n\n// Complete this function\nfunc countAndSegmentWords(s string) {\n\t// Your code here\n}`,
        mainFunction: `package main\n\n// Paste your function here\n\nfunc main() {\n\tcountAndSegmentWords("Hello, world! How are you?")\n\tcountAndSegmentWords("  GoLang is FUN!  ")\n}`,
        expectedOutput: `Word Count: 5
Hello
world
How
are
you

Word Count: 3
GoLang
is
FUN`
    },
    {
        title: "levelordertraversal",
        percentage: 85,
        category: "Expert",
        description: "Perform level-order (BFS) traversal of a binary tree.",
        problemStatement: "Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
        functionToImplement: `package main\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc levelOrder(root *TreeNode) [][]int {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and levelOrder here\n\nfunc main() {\n\troot := &TreeNode{Val: 3, Left: &TreeNode{Val: 9}, Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}}\n\tfmt.Println(levelOrder(root))\n}`,
        expectedOutput: `[[3] [9 20] [15 7]]`
    },
    {
        title: "serializebt",
        percentage: 90,
        category: "Expert",
        description: "Serialize a binary tree to a string.",
        problemStatement: "Design an algorithm to serialize a binary tree into a string. The string can then be deserialized back into the tree.",
        functionToImplement: `package main\n\nimport (\n\t"strconv"\n\t"strings"\n)\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc serialize(root *TreeNode) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and serialize here\n\nfunc main() {\n\troot := &TreeNode{Val: 1, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 3, Left: &TreeNode{Val: 4}, Right: &TreeNode{Val: 5}}}\n\tfmt.Println(serialize(root))\n}`,
        expectedOutput: `1,2,#,#,3,4,#,#,5,#,#` // Example format: pre-order with # for nulls
    },
    {
        title: "deserializbt",
        percentage: 90,
        category: "Expert",
        description: "Deserialize a binary tree from a string.",
        problemStatement: "Design an algorithm to deserialize a binary tree from a string generated by your `serialize` function.",
        functionToImplement: `package main\n\nimport (\n\t"strconv"\n\t"strings"\n)\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc deserialize(data string) *TreeNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and deserialize here\n\nfunc main() {\n\tserializedData := "1,2,#,#,3,4,#,#,5,#,#"\n\troot := deserialize(serializedData)\n\tfmt.Println(root.Val) // Should be 1\n\tfmt.Println(root.Right.Left.Val) // Should be 4\n}`,
        expectedOutput: `1
4`
    },
    {
        title: "longestincreasingsubsequence",
        percentage: 95,
        category: "Expert",
        description: "Find the length of the longest increasing subsequence.",
        problemStatement: "Given an unsorted array of integers `nums`, return the length of the longest increasing subsequence.",
        functionToImplement: `package main\n\n// Complete this function\nfunc lengthOfLIS(nums []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(lengthOfLIS([]int{10, 9, 2, 5, 3, 7, 101, 18}))\n\tfmt.Println(lengthOfLIS([]int{0, 1, 0, 3, 2, 3}))\n}`,
        expectedOutput: `4
4`
    },
    {
        title: "decode_message",
        percentage: 95,
        category: "Expert",
        description: "Decode a message using a given mapping.",
        problemStatement: "You are given a string `key` and a string `message`. To decode the message, first create a mapping from `key` to the lowercase English alphabet. The mapping is created by taking the first appearance of each character in `key` (excluding space) in order and assigning it to the next available letter in the alphabet ('a', 'b', 'c', ...). Then, use this mapping to decode `message`. Spaces in `message` should remain spaces.",
        functionToImplement: `package main\n\n// Complete this function\nfunc decodeMessage(key string, message string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tkey := "the quick brown fox jumps over the lazy dog"\n\tmessage := "vkbs bs tpeup ifmepq" // Decodes to: this is a secret\n\tfmt.Println(decodeMessage(key, message))\n}`,
        expectedOutput: `this is a secret`
    },
    {
        title: "shortest_path_binary_matrix_v2",
        percentage: 95,
        category: "Expert",
        description: "Find the shortest path in a binary matrix (8-directional).",
        problemStatement: "Given an `n x n` binary matrix `grid`, return the length of the shortest clear path in the matrix. If there is no clear path, return -1. A clear path is a path from the top-left cell `(0, 0)` to the bottom-right cell `(n - 1, n - 1)` such that all visited cells are `0`. You can move in 8 directions (horizontally, vertically, and diagonally).",
        functionToImplement: `package main\n\n// Complete this function\nfunc shortestPathBinaryMatrix(grid [][]int) int {\n\t// Your code here\n\treturn -1\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tgrid1 := [][]int{{0,1},{1,0}}\n\tfmt.Println(shortestPathBinaryMatrix(grid1))\n\tgrid2 := [][]int{{0,0,0},{1,1,0},{1,1,0}}\n\tfmt.Println(shortestPathBinaryMatrix(grid2))\n}`,
        expectedOutput: `2
4`
    },
    {
        title: "number_of_islands",
        percentage: 99,
        category: "Expert",
        description: "Count the number of islands in a 2D binary grid.",
        problemStatement: "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
        functionToImplement: `package main\n\n// Complete this function\nfunc numIslands(grid [][]byte) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tgrid1 := [][]byte{\n\t\t{'1','1','1','1','0'},\n\t\t{'1','1','0','1','0'},\n\t\t{'1','1','0','0','0'},\n\t\t{'0','0','0','0','0'},\n\t}\n\tfmt.Println(numIslands(grid1))\n\tgrid2 := [][]byte{\n\t\t{'1','1','0','0','0'},\n\t\t{'1','1','0','0','0'},\n\t\t{'0','0','1','0','0'},\n\t\t{'0','0','0','1','1'},\n\t}\n\tfmt.Println(numIslands(grid2))\n}`,
        expectedOutput: `1
3`
    },
    {
        title: "min_cost_climbing_stairs",
        percentage: 99,
        category: "Expert",
        description: "Find the minimum cost to reach the top of a staircase.",
        problemStatement: "You are given an integer array `cost` where `cost[i]` is the cost of `i`-th step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from step 0, or step 1. Return the minimum cost to reach the top of the floor.",
        functionToImplement: `package main\n\nimport "math"\n\n// Complete this function\nfunc minCostClimbingStairs(cost []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(minCostClimbingStairs([]int{10,15,20}))\n\tfmt.Println(minCostClimbingStairs([]int{1,100,1,1,1,100,1,1,100,1}))\n}`,
        expectedOutput: `15
6`
    },
    {
        title: "house_robber",
        percentage: 99,
        category: "Expert",
        description: "Find the maximum amount of money you can rob from houses.",
        problemStatement: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses are arranged in a circle, meaning the first house is the neighbor of the last one. Meanwhile, adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
        functionToImplement: `package main\n\nimport "math"\n\n// Complete this function\nfunc rob(nums []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(rob([]int{2,3,2}))\n\tfmt.Println(rob([]int{1,2,3,1}))\n\tfmt.Println(rob([]int{0}))\n}`,
        expectedOutput: `3
4
0`
    },
    {
        title: "longest_palindromic_subsequence",
        percentage: 99,
        category: "Expert",
        description: "Find the length of the longest palindromic subsequence.",
        problemStatement: "Given a string `s`, find the length of the longest palindromic subsequence in `s`.",
        functionToImplement: `package main\n\n// Complete this function\nfunc longestPalindromeSubsequence(s string) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(longestPalindromeSubsequence("bbbab"))\n\tfmt.Println(longestPalindromeSubsequence("cbbd"))\n}`,
        expectedOutput: `4
2`
    },
    {
        title: "regular_expression_matching_advanced",
        percentage: 100,
        category: "Expert",
        description: "Implement regular expression matching with full `.` and `*` support (DP solution).",
        problemStatement: "Given an input string `s` and a pattern `p`, implement regular expression matching with support for `.` (matches any single character) and `*` (matches zero or more of the preceding element). This problem typically requires a dynamic programming approach.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isMatchAdvanced(s string, p string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isMatchAdvanced("aa", "a"))\n\tfmt.Println(isMatchAdvanced("aa", "a*"))\n\tfmt.Println(isMatchAdvanced("ab", ".*"))\n\tfmt.Println(isMatchAdvanced("aab", "c*a*b"))\n}`,
        expectedOutput: `false
true
true
true`
    },
    // =================================================================
    // =                 NEW EXAMS (30 Added)                          =
    // =================================================================
    {
        title: "find_median",
        percentage: 10,
        category: "Elementary",
        description: "Find the median of a slice of numbers.",
        problemStatement: "Write a function `findMedian` that takes a slice of integers and returns its median. Assume the slice is already sorted. If the slice has an even number of elements, return the average of the two middle elements (as a float).",
        functionToImplement: `package main\n\n// Complete this function\nfunc findMedian(nums []int) float64 {\n\t// Your code here\n\treturn 0.0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(findMedian([]int{1, 2, 3, 4, 5}))\n\tfmt.Println(findMedian([]int{1, 2, 3, 4}))\n}`,
        expectedOutput: `3
2.5`
    },
    {
        title: "count_unique_elements",
        percentage: 15,
        category: "Elementary",
        description: "Count unique elements in a slice.",
        problemStatement: "Write a function `countUnique` that takes a slice of integers and returns the count of unique elements in it.",
        functionToImplement: `package main\n\n// Complete this function\nfunc countUnique(nums []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(countUnique([]int{1, 2, 2, 3, 1, 4}))\n}`,
        expectedOutput: `4`
    },
    {
        title: "remove_nth_from_end",
        percentage: 20,
        category: "Intermediate",
        description: "Remove the Nth node from the end of a linked list.",
        problemStatement: "Given the `head` of a linked list, remove the `n`-th node from the end of the list and return its head.",
        functionToImplement: `package main\n\ntype ListNode struct { Val int; Next *ListNode }\n\n// Complete this function\nfunc removeNthFromEnd(head *ListNode, n int) *ListNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste ListNode and removeNthFromEnd here\n\nfunc printList(head *ListNode) {\n\tfor head != nil {\n\t\tfmt.Print(head.Val, " ")\n\t\thead = head.Next\n\t}\n\tfmt.Println()\n}\n\nfunc main() {\n\thead := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: &ListNode{Val: 5}}}}}\n\tnewHead := removeNthFromEnd(head, 2)\n\tprintList(newHead)\n}`,
        expectedOutput: `1 2 3 5 `
    },
    {
        title: "merge_two_lists",
        percentage: 25,
        category: "Intermediate",
        description: "Merge two sorted linked lists.",
        problemStatement: "Merge two sorted linked lists into a single sorted list. The list should be made by splicing together the nodes of the first two lists.",
        functionToImplement: `package main\n\ntype ListNode struct { Val int; Next *ListNode }\n\n// Complete this function\nfunc mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste ListNode and mergeTwoLists here\n\nfunc printList(head *ListNode) {\n\tfor head != nil {\n\t\tfmt.Print(head.Val, " ")\n\t\thead = head.Next\n\t}\n\tfmt.Println()\n}\n\nfunc main() {\n\tlist1 := &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 4}}}\n\tlist2 := &ListNode{Val: 1, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4}}}\n\tmergedList := mergeTwoLists(list1, list2)\n\tprintList(mergedList)\n}`,
        expectedOutput: `1 1 2 3 4 4 `
    },
    {
        title: "valid_anagram",
        percentage: 30,
        category: "Intermediate",
        description: "Check if two strings are anagrams.",
        problemStatement: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isAnagram(s string, t string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isAnagram("anagram", "nagaram"))\n\tfmt.Println(isAnagram("rat", "car"))\n}`,
        expectedOutput: `true\nfalse`
    },
    {
        title: "longest_common_prefix",
        percentage: 35,
        category: "Intermediate",
        description: "Find the longest common prefix string amongst an array of strings.",
        problemStatement: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `\"\"`.",
        functionToImplement: `package main\n\nimport "strings"\n\n// Complete this function\nfunc longestCommonPrefix(strs []string) string {\n\t// Your code here\n\treturn ""\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(longestCommonPrefix([]string{"flower","flow","flight"}))\n\tfmt.Println(longestCommonPrefix([]string{"dog","racecar","car"}))\n}`,
        expectedOutput: `fl
`
    },
    {
        title: "valid_palindrome",
        percentage: 40,
        category: "Hard",
        description: "Check if a string is a palindrome, ignoring non-alphanumeric characters and case.",
        problemStatement: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
        functionToImplement: `package main\n\nimport (\n\t"strings"\n\t"unicode"\n)\n\n// Complete this function\nfunc isPalindrome(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isPalindrome("A man, a plan, a canal: Panama"))\n\tfmt.Println(isPalindrome("race a car"))\n\tfmt.Println(isPalindrome(" "))\n}`,
        expectedOutput: `true\nfalse\ntrue`
    },
    {
        title: "single_number",
        percentage: 45,
        category: "Hard",
        description: "Find the single number that appears only once.",
        problemStatement: "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.",
        functionToImplement: `package main\n\n// Complete this function\nfunc singleNumber(nums []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(singleNumber([]int{2, 2, 1}))\n\tfmt.Println(singleNumber([]int{4, 1, 2, 1, 2}))\n}`,
        expectedOutput: `1
4`
    },
    {
        title: "happy_number",
        percentage: 50,
        category: "Hard",
        description: "Determine if a number is a 'happy number'.",
        problemStatement: "A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return `true` if `n` is a happy number, and `false` if not.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isHappy(n int) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isHappy(19))\n\tfmt.Println(isHappy(2))\n}`,
        expectedOutput: `true
false`
    },
    {
        title: "contains_duplicate",
        percentage: 55,
        category: "Hard",
        description: "Check if a slice contains duplicate elements.",
        problemStatement: "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
        functionToImplement: `package main\n\n// Complete this function\nfunc containsDuplicate(nums []int) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(containsDuplicate([]int{1, 2, 3, 1}))\n\tfmt.Println(containsDuplicate([]int{1, 2, 3, 4}))\n}`,
        expectedOutput: `true
false`
    },
    {
        title: "invert_binary_tree",
        percentage: 60,
        category: "Hard",
        description: "Invert a binary tree.",
        problemStatement: "Given the `root` of a binary tree, invert the tree, and return its root.",
        functionToImplement: `package main\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc invertTree(root *TreeNode) *TreeNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and invertTree here\n\nfunc printInOrder(node *TreeNode) {\n\tif node == nil { return }\n\tprintInOrder(node.Left)\n\tfmt.Print(node.Val, " ")\n\tprintInOrder(node.Right)\n}\n\nfunc main() {\n\troot := &TreeNode{Val: 4, Left: &TreeNode{Val: 2, Left: &TreeNode{Val: 1}, Right: &TreeNode{Val: 3}}, Right: &TreeNode{Val: 7, Left: &TreeNode{Val: 6}, Right: &TreeNode{Val: 9}}}\n\tinvertedRoot := invertTree(root)\n\tprintInOrder(invertedRoot)\n\tfmt.Println()\n}`,
        expectedOutput: `9 7 6 4 3 2 1 `
    },
    {
        title: "valid_parentheses",
        percentage: 65,
        category: "Hard",
        description: "Check if a string has valid parentheses.",
        problemStatement: "Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[`, `]`, determine if the input string is valid. An input string is valid if: 1. Open brackets must be closed by the same type of brackets. 2. Open brackets must be closed in the correct order. 3. Every close bracket has a corresponding open bracket of the same type.",
        functionToImplement: `package main\n\n// Complete this function\nfunc isValid(s string) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(isValid("()"))\n\tfmt.Println(isValid("()[]{}"))\n\tfmt.Println(isValid("(]"))\n\tfmt.Println(isValid("([{}])"))\n}`,
        expectedOutput: `true\ntrue\nfalse\ntrue`
    },
    {
        title: "implement_queue_using_stacks",
        percentage: 70,
        category: "Hard",
        description: "Implement a queue using two stacks.",
        problemStatement: "Implement a first-in-first-out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).",
        functionToImplement: `package main\n\ntype MyQueue struct {\n\t// Your implementation here\n}\n\nfunc ConstructorMyQueue() MyQueue { return MyQueue{} }\nfunc (this *MyQueue) Push(x int) {}\nfunc (this *MyQueue) Pop() int { return 0 }\nfunc (this *MyQueue) Peek() int { return 0 }\nfunc (this *MyQueue) Empty() bool { return true }`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste MyQueue implementation here\n\nfunc main() {\n\tobj := ConstructorMyQueue()\n\tobj.Push(1)\n\tobj.Push(2)\n\tfmt.Println(obj.Peek())  // returns 1\n\tfmt.Println(obj.Pop())   // returns 1\n\tfmt.Println(obj.Empty()) // returns false\n}`,
        expectedOutput: `1
1
false`
    },
    {
        title: "climb_stairs",
        percentage: 75,
        category: "Hard",
        description: "Count distinct ways to climb to the top of a staircase.",
        problemStatement: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        functionToImplement: `package main\n\n// Complete this function\nfunc climbStairs(n int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(climbStairs(2))\n\tfmt.Println(climbStairs(3))\n\tfmt.Println(climbStairs(4))\n}`,
        expectedOutput: `2
3
5`
    },
    {
        title: "symmetric_tree",
        percentage: 80,
        category: "Expert",
        description: "Check if a binary tree is symmetric.",
        problemStatement: "Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
        functionToImplement: `package main\n\ntype TreeNode struct { Val int; Left, Right *TreeNode }\n\n// Complete this function\nfunc isSymmetric(root *TreeNode) bool {\n\t// Your code here\n\treturn false\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste TreeNode and isSymmetric here\n\nfunc main() {\n\t// Symmetric tree: [1,2,2,3,4,4,3]\n\troot1 := &TreeNode{Val: 1, Left: &TreeNode{Val: 2, Left: &TreeNode{Val: 3}, Right: &TreeNode{Val: 4}}, Right: &TreeNode{Val: 2, Left: &TreeNode{Val: 4}, Right: &TreeNode{Val: 3}}}\n\tfmt.Println(isSymmetric(root1))\n\n\t// Asymmetric tree: [1,2,2,nil,3,nil,3]\n\troot2 := &TreeNode{Val: 1, Left: &TreeNode{Val: 2, Right: &TreeNode{Val: 3}}, Right: &TreeNode{Val: 2, Right: &TreeNode{Val: 3}}}\n\tfmt.Println(isSymmetric(root2))\n}`,
        expectedOutput: `true
false`
    },
    {
        title: "max_subarray_sum_contiguous",
        percentage: 85,
        category: "Expert",
        description: "Find the maximum sum of a contiguous subarray (Kadane's algorithm).",
        problemStatement: "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        functionToImplement: `package main\n\nimport "math"\n\n// Complete this function\nfunc maxSubArray(nums []int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}))\n\tfmt.Println(maxSubArray([]int{1}))\n\tfmt.Println(maxSubArray([]int{5, 4, -1, 7, 8}))\n}`,
        expectedOutput: `6
1
23`
    },
    {
        title: "merge_intervals",
        percentage: 90,
        category: "Expert",
        description: "Merge all overlapping intervals.",
        problemStatement: "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        functionToImplement: `package main\n\nimport "sort"\n\n// Complete this function\nfunc merge(intervals [][]int) [][]int {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(merge([][]int{{1,3},{2,6},{8,10},{15,18}}))\n\tfmt.Println(merge([][]int{{1,4},{4,5}}))\n}`,
        expectedOutput: `[[1 6] [8 10] [15 18]]
[[1 5]]`
    },
    {
        title: "unique_paths",
        percentage: 95,
        category: "Expert",
        description: "Count unique paths in a grid.",
        problemStatement: "A robot is located at the top-left corner of an `m x n` grid (marked 'Start' in the diagram below). The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below). How many possible unique paths are there?",
        functionToImplement: `package main\n\n// Complete this function\nfunc uniquePaths(m int, n int) int {\n\t// Your code here\n\treturn 0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(uniquePaths(3, 7))\n\tfmt.Println(uniquePaths(3, 2))\n}`,
        expectedOutput: `28
3`
    },
    {
        title: "word_break_ii",
        percentage: 100,
        category: "Expert",
        description: "Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.",
        problemStatement: "Given a string `s` and a dictionary of strings `wordDict`, return all such possible sentences that can be formed by segmenting `s` into words from `wordDict`.",
        functionToImplement: `package main\n\n// Complete this function\nfunc wordBreak(s string, wordDict []string) []string {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(wordBreak("leetcode", []string{"leet","code"}))\n\tfmt.Println(wordBreak("applepenapple", []string{"apple","pen"}))\n}`,
        expectedOutput: `[leet code]
[apple pen apple]`
    },
    {
        title: "median_of_two_sorted_arrays_hard",
        percentage: 100,
        category: "Expert",
        description: "Find the median of two sorted arrays with O(log(min(m,n))) time complexity.",
        problemStatement: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(min(m, n))).",
        functionToImplement: `package main\n\n// Complete this function\nfunc findMedianSortedArraysAdvanced(nums1 []int, nums2 []int) float64 {\n\t// Your code here\n\treturn 0.0\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste your function here\n\nfunc main() {\n\tfmt.Println(findMedianSortedArraysAdvanced([]int{1, 3}, []int{2}))\n\tfmt.Println(findMedianSortedArraysAdvanced([]int{1, 2}, []int{3, 4}))\n}`,
        expectedOutput: `2.0
2.5`
    },
    {
        title: "serialize_and_deserialize_n_ary_tree",
        percentage: 100,
        category: "Expert",
        description: "Encode and decode an N-ary tree to a string and back (BFS/DFS based).",
        problemStatement: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later. Design an algorithm to serialize and deserialize an N-ary tree.",
        functionToImplement: `package main\n\nimport (\n\t"strconv"\n\t"strings"\n)\n\ntype NaryNode struct {\n\tVal      int\n\tChildren []*NaryNode\n}\n\ntype CodecNary struct{}\n\nfunc ConstructorNary() CodecNary { return CodecNary{} }\n\n// Complete this function\nfunc (this *CodecNary) serialize(root *NaryNode) string {\n\t// Your code here\n\treturn ""\n}\n\n// Complete this function\nfunc (this *CodecNary) deserialize(data string) *NaryNode {\n\t// Your code here\n\treturn nil\n}`,
        mainFunction: `package main\n\nimport "fmt"\n\n// Paste NaryNode, CodecNary, and its methods here\n\nfunc main() {\n\t// Example usage:\n\t// root := &NaryNode{Val: 1,\n\t// \tChildren: []*NaryNode{\n\t// \t\t{Val: 3, Children: []*NaryNode{{Val: 5}, {Val: 6}}},\n\t// \t\t{Val: 2},\n\t// \t\t{Val: 4},\n\t// \t},\n\t// }\n\t// codec := ConstructorNary()\n\t// ser := codec.serialize(root)\n\t// fmt.Println("Serialized:", ser)\n\t// deser := codec.deserialize(ser)\n\t// fmt.Println("Deserialized root val:", deser.Val)\n}`,
        expectedOutput: `(A reconstructed N-ary tree representation)`
    }
];

// Assign the exam array to window.globalData.exam
// This makes the data accessible to main.js as expected.
window.globalData.exam = exam;
