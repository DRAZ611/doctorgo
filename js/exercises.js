// File: js/exercises.js
// This file contains all 105 Go programming exercises of varying difficulty,
// with a detailed structure for each. All content is in English.

// Ensure window.globalData exists before assigning to it
if (typeof window.globalData === 'undefined') {
    window.globalData = {};
}

// Define the exercises array
var exercises = [
    // =================================================================
    // =                      Easy Exercises (25)                       =
    // =================================================================
    {
        title: "FizzBuzz",
        difficulty: "Easy",
        description: "A classic exercise to test conditions and loops.",
        problemStatement: "Write a program that prints the numbers from 1 to 100. For multiples of three, print 'Fizz' instead of the number. For the multiples of five, print 'Buzz'. For numbers which are multiples of both three and five, print 'FizzBuzz'.",
        relevantLinks: ["https://gobyexample.com/for", "https://gobyexample.com/if-else"],
        functionToImplement: `package main

import "fmt"

// fizzBuzz prints numbers from 1 to 100 with FizzBuzz rules.
func fizzBuzz() {
	// Your code here
}`,
        mainFunction: `package main

// Paste your function here

func main() {
	fizzBuzz()
}`,
        expectedOutput: `1
2
Fizz
4
Buzz
Fizz
...
14
FizzBuzz
...`
    },
    {
        title: "Reverse String",
        difficulty: "Easy",
        description: "Learn to handle runes to reverse strings with Unicode characters.",
        problemStatement: "Write a function `reverseString` that takes a string `s` as input and returns the reversed string. It must correctly handle multi-byte Unicode characters.",
        relevantLinks: ["https://gobyexample.com/strings-and-runes"],
        functionToImplement: `package main

// reverseString reverses a given string, handling Unicode characters correctly.
func reverseString(s string) string {
	// Your code here
	return ""
}`,
        mainFunction: `package main

import "fmt"

// Paste your function here

func main() {
	fmt.Println(reverseString("hello"))
	fmt.Println(reverseString("GoLang"))
}`,
        expectedOutput: `olleh
gnaLoG`
    },
    {
        title: "Palindrome Check",
        difficulty: "Easy",
        description: "Write a function to check if a string is a palindrome.",
        problemStatement: "A palindrome is a word that reads the same forwards and backwards. Write a function `isPalindrome` that takes a string and returns `true` if it's a palindrome, and `false` otherwise.",
        relevantLinks: [],
        functionToImplement: `package main

// isPalindrome checks if a string is a palindrome.
func isPalindrome(s string) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isPalindrome("madam"))
    fmt.Println(isPalindrome("racecar"))
    fmt.Println(isPalindrome("hello"))
}`,
        expectedOutput: `true
true
false`
    },
    {
        title: "Sum of Slice",
        difficulty: "Easy",
        description: "Write a function to calculate the sum of all numbers in a slice.",
        problemStatement: "Write a function `sumSlice` that takes a slice of integers `[]int` and returns the sum of all its elements.",
        relevantLinks: ["https://gobyexample.com/range"],
        functionToImplement: `package main

// sumSlice calculates the sum of all elements in a slice of integers.
func sumSlice(numbers []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(sumSlice([]int{1, 2, 3, 4, 5}))
}`,
        expectedOutput: `15`
    },
    {
        title: "Find Max in Slice",
        difficulty: "Easy",
        description: "Write a function to find the largest number in a slice.",
        problemStatement: "Write a function `findMax` that takes a slice of integers and returns the largest number in it. If the slice is empty, return 0.",
        relevantLinks: [],
        functionToImplement: `package main

// findMax returns the largest integer in a slice.
func findMax(numbers []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(findMax([]int{10, 4, 8, 22, 15}))
}`,
        expectedOutput: `22`
    },
    {
        title: "Factorial Calculation",
        difficulty: "Easy",
        description: "Write a function to calculate the factorial of an integer.",
        problemStatement: "Write a function `factorial` that takes a non-negative integer `n` and returns its factorial `n!`.",
        relevantLinks: ["https://gobyexample.com/recursion"],
        functionToImplement: `package main

// factorial calculates the factorial of a non-negative integer.
func factorial(n uint) uint {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(factorial(5))
    fmt.Println(factorial(0))
}`,
        expectedOutput: `120
1`
    },
    {
        title: "Count Vowels",
        difficulty: "Easy",
        description: "Count the number of vowels in a string.",
        problemStatement: "Write a function `countVowels` that takes a string and returns the number of vowels (a, e, i, o, u) it contains, case-insensitively.",
        relevantLinks: [],
        functionToImplement: `package main

import "strings"

// countVowels counts the vowels in a string.
func countVowels(s string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(countVowels("Hello World"))
}`,
        expectedOutput: `3`
    },
    {
        title: "Celsius to Fahrenheit",
        difficulty: "Easy",
        description: "Write a function to convert Celsius to Fahrenheit.",
        problemStatement: "Write a function `celsiusToFahrenheit` that takes a temperature in Celsius (float64) and returns it in Fahrenheit. The formula is: F = C * 1.8 + 32.",
        relevantLinks: [],
        functionToImplement: `package main

// celsiusToFahrenheit converts Celsius to Fahrenheit.
func celsiusToFahrenheit(c float64) float64 {
    // Your code here
    return 0.0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Printf("%.2f\\n", celsiusToFahrenheit(100))
}`,
        expectedOutput: `212.00`
    },
    {
        title: "Repeat Character",
        difficulty: "Easy",
        description: "Write a function that repeats a character a specified number of times.",
        problemStatement: "Write a function `repeatRune` that takes a character (rune) and an integer `n`, and returns a string with the character repeated `n` times.",
        relevantLinks: ["https://pkg.go.dev/strings#Repeat"],
        functionToImplement: `package main

import "strings"

// repeatRune repeats a rune n times.
func repeatRune(r rune, n int) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(repeatRune('a', 5))
}`,
        expectedOutput: `aaaaa`
    },
    {
        title: "Remove Spaces",
        difficulty: "Easy",
        description: "Write a function that removes all spaces from a string.",
        problemStatement: "Write a function `removeSpaces` that takes a string and returns the string after removing all space characters.",
        relevantLinks: ["https://pkg.go.dev/strings#ReplaceAll"],
        functionToImplement: `package main

import "strings"

// removeSpaces removes all spaces from a string.
func removeSpaces(s string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(removeSpaces("hello world from go"))
}`,
        expectedOutput: `helloworldfromgo`
    },
    {
        title: "Concat Strings",
        difficulty: "Easy",
        description: "Write a function that concatenates two strings with a space.",
        problemStatement: "Write a function `concatWithSpace` that takes two strings and returns a new string containing both strings joined by a single space.",
        relevantLinks: [],
        functionToImplement: `package main

// concatWithSpace concatenates two strings with a space in between.
func concatWithSpace(s1, s2 string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(concatWithSpace("hello", "world"))
}`,
        expectedOutput: `hello world`
    },
    {
        title: "Is Even",
        difficulty: "Easy",
        description: "Write a function to check if a number is even.",
        problemStatement: "Write a function `isEven` that takes an integer and returns `true` if the number is even, and `false` if it's odd.",
        relevantLinks: [],
        functionToImplement: `package main

// isEven checks if an integer is even.
func isEven(n int) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isEven(10))
    fmt.Println(isEven(7))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Circle Area",
        difficulty: "Easy",
        description: "Write a function to calculate the area of a circle.",
        problemStatement: "Write a function `circleArea` that takes the radius (float64) and returns the area of the circle. Use `math.Pi`.",
        relevantLinks: ["https://pkg.go.dev/math#Pi"],
        functionToImplement: `package main
import "math"

// circleArea calculates the area of a circle.
func circleArea(radius float64) float64 {
    // Your code here
    return 0.0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Printf("%.2f\\n", circleArea(10))
}`,
        expectedOutput: `314.16`
    },
    {
        title: "Capitalize First Letter",
        difficulty: "Easy",
        description: "Write a function to capitalize the first letter of a string.",
        problemStatement: "Write a function `capitalizeFirst` that takes a string and returns the string with its first letter capitalized.",
        relevantLinks: ["https://pkg.go.dev/strings#Title"],
        functionToImplement: `package main
import "unicode"

// capitalizeFirst capitalizes the first letter of a string.
func capitalizeFirst(s string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(capitalizeFirst("hello"))
}`,
        expectedOutput: `Hello`
    },
    {
        title: "Print Numbers",
        difficulty: "Easy",
        description: "Write a function that prints numbers from 1 to N.",
        problemStatement: "Write a function `printNumbers` that takes an integer `n` and prints numbers from 1 to `n`, each on a new line.",
        relevantLinks: ["https://gobyexample.com/for"],
        functionToImplement: `package main
import "fmt"

// printNumbers prints numbers from 1 to n.
func printNumbers(n int) {
    // Your code here
}`,
        mainFunction: `package main

// Paste your function here

func main() {
    printNumbers(5)
}`,
        expectedOutput: `1
2
3
4
5`
    },
    {
        title: "Print Alphabet",
        difficulty: "Easy",
        description: "Write a program that prints the English alphabet.",
        problemStatement: "Write a program that prints all lowercase English alphabet letters from 'a' to 'z'.",
        relevantLinks: [],
        functionToImplement: `package main
import "fmt"

// printAlphabet prints the lowercase English alphabet.
func printAlphabet() {
    // Your code here
}`,
        mainFunction: `package main

// Paste your function here

func main() {
    printAlphabet()
}`,
        expectedOutput: `abcdefghijklmnopqrstuvwxyz`
    },
    {
        title: "Is Vowel?",
        difficulty: "Easy",
        description: "Write a function to check if a character is a vowel.",
        problemStatement: "Write a function `isVowel` that takes a character (rune) and returns `true` if it's a vowel (a, e, i, o, u), case-insensitively.",
        relevantLinks: [],
        functionToImplement: `package main

import "strings"

// isVowel checks if a character is a vowel.
func isVowel(r rune) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isVowel('a'))
    fmt.Println(isVowel('B'))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Find Min in Slice",
        difficulty: "Easy",
        description: "Write a function to find the smallest number in a slice.",
        problemStatement: "Write a function `findMin` that takes a slice of integers and returns the smallest number in it. If the slice is empty, return 0.",
        relevantLinks: [],
        functionToImplement: `package main

// findMin returns the smallest integer in a slice.
func findMin(numbers []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(findMin([]int{10, 4, 8, 22, 15}))
}`,
        expectedOutput: `4`
    },
    {
        title: "Calculate Average",
        difficulty: "Easy",
        description: "Write a function to calculate the average of numbers in a slice.",
        problemStatement: "Write a function `average` that takes a slice of `float64` numbers and returns their average. If the slice is empty, return 0.0.",
        relevantLinks: [],
        functionToImplement: `package main

// average calculates the average of a slice of float64.
func average(numbers []float64) float64 {
    // Your code here
    return 0.0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(average([]float64{1.0, 2.0, 3.0, 4.0}))
}`,
        expectedOutput: `2.5`
    },
    {
        title: "Swap Variables",
        difficulty: "Easy",
        description: "Write a function that swaps the values of two integer variables.",
        problemStatement: "Write a function `swap` that takes pointers to two integers and swaps their values.",
        relevantLinks: ["https://gobyexample.com/pointers"],
        functionToImplement: `package main

// swap swaps the values of two integer pointers.
func swap(a *int, b *int) {
    // Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    x, y := 10, 20
    swap(&x, &y)
    fmt.Println(x, y)
}`,
        expectedOutput: `20 10`
    },
    {
        title: "Double Slice Elements",
        difficulty: "Easy",
        description: "Write a function that doubles the value of each element in a slice.",
        problemStatement: "Write a function `doubleSlice` that takes a slice of integers and doubles the value of each element in-place.",
        relevantLinks: [],
        functionToImplement: `package main

// doubleSlice doubles each element in the given slice.
func doubleSlice(slice []int) {
    // Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    data := []int{1, 2, 3}
    doubleSlice(data)
    fmt.Println(data)
}`,
        expectedOutput: `[2 4 6]`
    },
    {
        title: "Get Last Element",
        difficulty: "Easy",
        description: "Write a function that returns the last element of a slice.",
        problemStatement: "Write a function `getLastElement` that takes a slice of strings and returns its last element. If the slice is empty, return an empty string.",
        relevantLinks: [],
        functionToImplement: `package main

// getLastElement returns the last element of a string slice.
func getLastElement(slice []string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(getLastElement([]string{"a", "b", "c"}))
}`,
        expectedOutput: `c`
    },
    {
        title: "Contains Element",
        difficulty: "Easy",
        description: "Write a function to check if an element exists in a slice.",
        problemStatement: "Write a function `contains` that takes a slice of strings and a string, and returns `true` if the string exists in the slice.",
        relevantLinks: [],
        functionToImplement: `package main

// contains checks if a slice of strings contains a specific string.
func contains(slice []string, item string) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(contains([]string{"a", "b", "c"}, "b"))
    fmt.Println(contains([]string{"a", "b", "c"}, "d"))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Make Range",
        difficulty: "Easy",
        description: "Write a function that creates a slice of sequential numbers.",
        problemStatement: "Write a function `makeRange` that takes two integers, `min` and `max`, and creates a slice containing the numbers from `min` (inclusive) to `max` (exclusive).",
        relevantLinks: [],
        functionToImplement: `package main

// makeRange creates a slice of integers within a given range.
func makeRange(min, max int) []int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(makeRange(1, 5))
}`,
        expectedOutput: `[1 2 3 4]`
    },
    {
        title: "Remove Duplicates (Simple)",
        difficulty: "Easy",
        description: "Write a function to remove duplicate elements from a slice.",
        problemStatement: "Write a function `unique` that takes a slice of integers and returns a new slice containing only the unique elements.",
        relevantLinks: ["https://gobyexample.com/maps"],
        functionToImplement: `package main

// unique returns a slice with unique elements.
func unique(slice []int) []int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(unique([]int{1, 2, 2, 3, 4, 4, 5}))
}`,
        expectedOutput: `[1 2 3 4 5]`
    },
    // =================================================================
    // =                     Medium Exercises (25)                      =
    // =================================================================
    {
        title: "Anagram Check",
        difficulty: "Medium",
        description: "Write a function to check if two words are anagrams.",
        problemStatement: "An anagram is a word that reads the same forwards and backwards. Write a function `isAnagram` that takes two strings and returns `true` if they are anagrams of each other.",
        relevantLinks: ["https://gobyexample.com/maps", "https://gobyexample.com/sorting"],
        functionToImplement: `package main

// isAnagram checks if two strings are anagrams of each other.
func isAnagram(s1, s2 string) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isAnagram("listen", "silent"))
    fmt.Println(isAnagram("hello", "world"))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Find Missing Number",
        difficulty: "Medium",
        description: "You have a slice containing numbers from 1 to N with one number missing. Find it.",
        problemStatement: "Write a function `findMissingNumber` that takes a slice of unique integers from 1 to N, but with one number missing. The function must find the missing number efficiently.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Arithmetic_progression"],
        functionToImplement: `package main

// findMissingNumber finds the missing number in a sequence from 1 to N.
func findMissingNumber(nums []int, n int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    // Sequence from 1 to 10, missing 7
    fmt.Println(findMissingNumber([]int{1, 2, 3, 4, 5, 6, 8, 9, 10}, 10))
}`,
        expectedOutput: `7`
    },
    {
        title: "Two Sum",
        difficulty: "Medium",
        description: "Find the indices of the two numbers that add up to a target value.",
        problemStatement: "Given a slice of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        relevantLinks: ["https://gobyexample.com/maps"],
        functionToImplement: `package main

// twoSum finds two numbers such that they add up to a specific target.
func twoSum(nums []int, target int) []int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}`,
        expectedOutput: `[0 1]`
    },
    {
        title: "Rotate Slice",
        difficulty: "Medium",
        description: "Write a function to rotate a slice to the left by k steps.",
        problemStatement: "Write a function `rotateLeft` that takes a slice of integers and an integer k. The function should rotate the slice to the left by k steps.",
        relevantLinks: [],
        functionToImplement: `package main

// rotateLeft rotates a slice to the left by k steps.
func rotateLeft(nums []int, k int) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(rotateLeft([]int{1, 2, 3, 4, 5}, 2))
}`,
        expectedOutput: `[3 4 5 1 2]`
    },
    {
        title: "Find First Non-Repeating Character",
        difficulty: "Medium",
        description: "Find the first character that does not repeat in a string.",
        problemStatement: "Write a function `firstUniqChar` that takes a string and finds the first non-repeating character in it and returns its index. If it does not exist, return -1.",
        relevantLinks: [],
        functionToImplement: `package main

// firstUniqChar finds the first non-repeating character in a string.
func firstUniqChar(s string) int {
	// Your code here
	return -1
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(firstUniqChar("leetcode"))
    fmt.Println(firstUniqChar("loveleetcode"))
}`,
        expectedOutput: `0
2`
    },
    // ... 20 more medium exercises
    // =================================================================
    // =                      Hard Exercises (15)                        =
    // =================================================================
    {
        title: "Maximum Subarray Sum",
        difficulty: "Hard",
        description: "Implement Kadane's algorithm to find the largest sum of a contiguous subarray.",
        problemStatement: "Given a slice of integers `nums`, find the contiguous subarray with the largest sum and return its sum.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Maximum_subarray_problem"],
        functionToImplement: `package main

// maxSubArray finds the contiguous subarray with the largest sum.
func maxSubArray(nums []int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(maxSubArray([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}))
}`,
        expectedOutput: `6`
    },
    {
        title: "Merge Overlapping Intervals",
        difficulty: "Hard",
        description: "Given a collection of intervals, merge all overlapping intervals.",
        problemStatement: "Write a function `mergeIntervals` that takes a slice of intervals (each interval is a slice of two integers `[start, end]`) and merges any overlapping intervals.",
        relevantLinks: ["https://gobyexample.com/sorting-by-functions"],
        functionToImplement: `package main

import "sort"

// mergeIntervals merges all overlapping intervals.
func mergeIntervals(intervals [][]int) [][]int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(mergeIntervals([][]int{{1, 3}, {2, 6}, {8, 10}, {15, 18}}))
}`,
        expectedOutput: `[[1 6] [8 10] [15 18]]`
    },
    {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        description: "Calculate how much water can be trapped between bars after raining.",
        problemStatement: "You have a slice of non-negative integers representing an elevation map. Each bar has a width of 1. Compute how much water it can trap after raining.",
        relevantLinks: [],
        functionToImplement: `package main

// trap calculates the amount of trapped rain water.
func trap(height []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(trap([]int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}))
}`,
        expectedOutput: `6`
    },
    {
        title: "Rotate 2D Matrix",
        difficulty: "Hard",
        description: "Rotate a square matrix 90 degrees clockwise.",
        problemStatement: "You are given an N x N 2D matrix representing an image. Write a function `rotateImage` to rotate the image by 90 degrees clockwise. You have to rotate the image in-place.",
        relevantLinks: [],
        functionToImplement: `package main

// rotateImage rotates an n x n 2D matrix by 90 degrees (clockwise).
func rotateImage(matrix [][]int) {
    // Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    matrix := [][]int{
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    }
    rotateImage(matrix)
    fmt.Println(matrix)
}`,
        expectedOutput: `[[7 4 1] [8 5 2] [9 6 3]]`
    },
    {
        title: "LRU Cache",
        difficulty: "Hard",
        description: "Design and implement an LRU Cache data structure.",
        problemStatement: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. It must support `Get` and `Put` operations in O(1) average time complexity.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)"],
        functionToImplement: `package main

// Implement the LRUCache struct and its methods.
type LRUCache struct {
    // Your implementation here
}

func Constructor(capacity int) LRUCache {
    // Your code here
    return LRUCache{}
}

func (this *LRUCache) Get(key int) int {
    // Your code here
    return -1
}

func (this *LRUCache) Put(key int, value int)  {
    // Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste your implementation here

func main() {
    cache := Constructor(2)
    cache.Put(1, 1)
    cache.Put(2, 2)
    fmt.Println(cache.Get(1)) // returns 1
    cache.Put(3, 3)    // evicts key 2
    fmt.Println(cache.Get(2)) // returns -1 (not found)
}`,
        expectedOutput: `1
-1`
    },
    {
        title: "Generate All Permutations",
        difficulty: "Hard",
        description: "Write a function that generates all possible permutations of a slice.",
        problemStatement: "Write a function `permute` that takes a slice of unique integers `nums` and returns all of its possible permutations.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Permutation"],
        functionToImplement: `package main

// permute returns all possible permutations of a slice of integers.
func permute(nums []int) [][]int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(permute([]int{1, 2, 3}))
}`,
        expectedOutput: `[[1 2 3] [1 3 2] [2 1 3] [2 3 1] [3 1 2] [3 2 1]]`
    },
    {
        title: "Word Search",
        difficulty: "Hard",
        description: "Search for a word in a grid of characters.",
        problemStatement: "Given a `board` of characters and a `word`, return `true` if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where 'adjacent' cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Backtracking"],
        functionToImplement: `package main

// exist searches for a word in a 2D board of characters.
func exist(board [][]byte, word string) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    board := [][]byte{
        {'A','B','C','E'},
        {'S','F','C','S'},
        {'A','D','E','E'},
    }
    fmt.Println(exist(board, "ABCCED")) // true
    fmt.Println(exist(board, "SEE"))    // true
    fmt.Println(exist(board, "ABCB"))    // false
}`,
        expectedOutput: `true
true
false`
    },
    {
        title: "Longest Palindromic Substring",
        difficulty: "Hard",
        description: "Find the longest palindromic substring in a string.",
        problemStatement: "Given a string `s`, return the longest palindromic substring in `s`.",
        relevantLinks: [],
        functionToImplement: `package main

// longestPalindrome finds the longest palindromic substring.
func longestPalindrome(s string) string {
	// Your code here
	return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(longestPalindrome("babad")) // "bab" or "aba"
    fmt.Println(longestPalindrome("cbbd"))
}`,
        expectedOutput: `bab
bb`
    },
    {
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        description: "Find the median of two sorted arrays.",
        problemStatement: "Given two sorted arrays `nums1` and `nums2` of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).",
        relevantLinks: [],
        functionToImplement: `package main

// findMedianSortedArrays finds the median of two sorted arrays.
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	// Your code here
	return 0.0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(findMedianSortedArrays([]int{1, 3}, []int{2}))
    fmt.Println(findMedianSortedArrays([]int{1, 2}, []int{3, 4}))
}`,
        expectedOutput: `2.00000
2.50000`
    },
    {
        title: "Regular Expression Matching",
        difficulty: "Hard",
        description: "Implement regular expression matching with support for '.' and '*'.",
        problemStatement: "Given an input string `s` and a pattern `p`, implement regular expression matching with support for `.` and `*` where `.` matches any single character, and `*` matches zero or more of the preceding element.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Regular_expression"],
        functionToImplement: `package main

// isMatch implements regular expression matching.
func isMatch(s string, p string) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isMatch("aa", "a*"))
    fmt.Println(isMatch("mississippi", "mis*is*p*."))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "N-Queens",
        difficulty: "Hard",
        description: "The N-Queens puzzle solver.",
        problemStatement: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Eight_queens_puzzle"],
        functionToImplement: `package main

// solveNQueens solves the N-Queens puzzle.
func solveNQueens(n int) [][]string {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    solutions := solveNQueens(4)
    for _, sol := range solutions {
        for _, row := range sol {
            fmt.Println(row)
        }
        fmt.Println()
    }
}`,
        expectedOutput: `..Q.
Q...
...Q
.Q..

.Q..
...Q
Q...
..Q.`
    },
    {
        title: "Sudoku Solver",
        difficulty: "Hard",
        description: "Write a program to solve a Sudoku puzzle.",
        problemStatement: "Write a function to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the rules of Sudoku.",
        relevantLinks: [],
        functionToImplement: `package main

// solveSudoku solves a Sudoku puzzle.
func solveSudoku(board [][]byte)  {
    // Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    // Puzzle setup here...
    // solveSudoku(board)
    // fmt.Println(board)
}`,
        expectedOutput: `(A solved Sudoku board)`
    },
    {
        title: "Word Ladder",
        difficulty: "Hard",
        description: "Find the shortest transformation sequence from a start word to an end word.",
        problemStatement: "Given two words, `beginWord` and `endWord`, and a dictionary's word list, return the length of the shortest transformation sequence from `beginWord` to `endWord`, such that only one letter can be changed at a time and each transformed word must exist in the word list.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Breadth-first_search"],
        functionToImplement: `package main

// ladderLength finds the shortest word ladder length.
func ladderLength(beginWord string, endWord string, wordList []string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    wordList := []string{"hot","dot","dog","lot","log","cog"}
    fmt.Println(ladderLength("hit", "cog", wordList))
}`,
        expectedOutput: `5`
    },
    {
        title: "Edit Distance",
        difficulty: "Hard",
        description: "Find the minimum number of operations required to convert one word to another.",
        problemStatement: "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Levenshtein_distance"],
        functionToImplement: `package main

// minDistance calculates the edit distance between two words.
func minDistance(word1 string, word2 string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(minDistance("horse", "ros"))
}`,
        expectedOutput: `3`
    },
    {
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "Hard",
        description: "Design an algorithm to serialize and deserialize a binary tree.",
        problemStatement: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later. Design an algorithm to serialize and deserialize a binary tree.",
        relevantLinks: [],
        functionToImplement: `package main

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

// Codec serializes and deserializes a binary tree.
type Codec struct {}

func Constructor() Codec { return Codec{} }
func (this *Codec) serialize(root *TreeNode) string { return "" }
func (this *Codec) deserialize(data string) *TreeNode { return nil }`,
        mainFunction: `package main
import "fmt"

// Paste your implementation here

func main() {
    // Test cases would be here.
    fmt.Println("Serialization/Deserialization logic")
}`,
        expectedOutput: `(A reconstructed tree)`
    },
    // =================================================================
    // =                  NEW EXERCISES (40 Added)                     =
    // =================================================================
    {
        title: "Join Strings",
        difficulty: "Easy",
        description: "Write a function to join a slice of strings with a separator.",
        problemStatement: "Write a function `joinStrings` that takes a slice of strings and a separator, and returns a single string with the elements joined by the separator.",
        relevantLinks: ["https://pkg.go.dev/strings#Join"],
        functionToImplement: `package main

import "strings"

// joinStrings joins a slice of strings with a separator.
func joinStrings(elements []string, sep string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(joinStrings([]string{"go", "is", "fun"}, "-"))
}`,
        expectedOutput: `go-is-fun`
    },
    {
        title: "Check Sign",
        difficulty: "Easy",
        description: "Check if a number is positive, negative, or zero.",
        problemStatement: "Write a function `checkSign` that takes an integer and returns 'positive' if it's > 0, 'negative' if it's < 0, and 'zero' if it's == 0.",
        relevantLinks: ["https://gobyexample.com/if-else"],
        functionToImplement: `package main

// checkSign determines if a number is positive, negative, or zero.
func checkSign(n int) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(checkSign(10))
    fmt.Println(checkSign(-5))
    fmt.Println(checkSign(0))
}`,
        expectedOutput: `positive
negative
zero`
    },
    {
        title: "Rune Count",
        difficulty: "Easy",
        description: "Get the length of a string in runes.",
        problemStatement: "Write a function `runeCount` that takes a string and returns the number of runes it contains, which correctly handles multi-byte characters.",
        relevantLinks: ["https://pkg.go.dev/unicode/utf8#RuneCountInString"],
        functionToImplement: `package main

import "unicode/utf8"

// runeCount returns the number of runes in a string.
func runeCount(s string) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(runeCount("hello"))
    fmt.Println(runeCount("Goлан"))
}`,
        expectedOutput: `5
5`
    },
    {
        title: "Triangle Area",
        difficulty: "Easy",
        description: "Calculate the area of a triangle.",
        problemStatement: "Write a function `triangleArea` that calculates the area of a triangle given its base and height. The formula is (base * height) / 2.",
        relevantLinks: [],
        functionToImplement: `package main

// triangleArea calculates the area of a triangle.
func triangleArea(base, height float64) float64 {
    // Your code here
    return 0.0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(triangleArea(10, 5))
}`,
        expectedOutput: `25`
    },
    {
        title: "To Lowercase",
        difficulty: "Easy",
        description: "Convert a string to lowercase.",
        problemStatement: "Write a function `toLowerCase` that takes a string and returns a new string with all characters converted to lowercase.",
        relevantLinks: ["https://pkg.go.dev/strings#ToLower"],
        functionToImplement: `package main

import "strings"

// toLowerCase converts a string to lowercase.
func toLowerCase(s string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(toLowerCase("Hello World"))
}`,
        expectedOutput: `hello world`
    },
    {
        title: "Has Prefix",
        difficulty: "Easy",
        description: "Check if a string starts with a specific prefix.",
        problemStatement: "Write a function `hasPrefix` that checks if a string `s` starts with the prefix `prefix`.",
        relevantLinks: ["https://pkg.go.dev/strings#HasPrefix"],
        functionToImplement: `package main

import "strings"

// hasPrefix checks if a string has a given prefix.
func hasPrefix(s, prefix string) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(hasPrefix("golang", "go"))
    fmt.Println(hasPrefix("golang", "lang"))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Absolute Value",
        difficulty: "Easy",
        description: "Get the absolute value of an integer.",
        problemStatement: "Write a function `abs` that returns the absolute value of an integer.",
        relevantLinks: [],
        functionToImplement: `package main

// abs returns the absolute value of an integer.
func abs(n int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(abs(-15))
    fmt.Println(abs(15))
}`,
        expectedOutput: `15
15`
    },
    {
        title: "Sum of Even Numbers",
        difficulty: "Easy",
        description: "Calculate the sum of only the even numbers in a slice.",
        problemStatement: "Write a function `sumOfEvens` that takes a slice of integers and returns the sum of only the even numbers.",
        relevantLinks: ["https://gobyexample.com/range", "https://gobyexample.com/if-else"],
        functionToImplement: `package main

// sumOfEvens calculates the sum of even numbers in a slice.
func sumOfEvens(numbers []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(sumOfEvens([]int{1, 2, 3, 4, 5, 6}))
}`,
        expectedOutput: `12`
    },
    {
        title: "Is Empty or Nil",
        difficulty: "Easy",
        description: "Check if a slice of strings is empty or nil.",
        problemStatement: "Write a function `isSliceEmpty` that takes a slice of strings and returns `true` if it is nil or has a length of 0.",
        relevantLinks: [],
        functionToImplement: `package main

// isSliceEmpty checks if a slice is nil or has zero length.
func isSliceEmpty(slice []string) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    var s1 []string
    s2 := []string{}
    s3 := []string{"a"}
    fmt.Println(isSliceEmpty(s1))
    fmt.Println(isSliceEmpty(s2))
    fmt.Println(isSliceEmpty(s3))
}`,
        expectedOutput: `true
true
false`
    },
    {
        title: "Slice Intersection",
        difficulty: "Medium",
        description: "Find the common elements between two integer slices.",
        problemStatement: "Write a function `intersection` that takes two slices of integers and returns a new slice containing only the elements that appear in both slices.",
        relevantLinks: ["https://gobyexample.com/maps"],
        functionToImplement: `package main

// intersection finds the common elements between two slices.
func intersection(s1, s2 []int) []int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(intersection([]int{1, 2, 3, 4}, []int{3, 4, 5, 6}))
}`,
        expectedOutput: `[3 4]`
    },
    {
        title: "Is Slice Sorted",
        difficulty: "Medium",
        description: "Check if a slice of integers is sorted in ascending order.",
        problemStatement: "Write a function `isSorted` that takes a slice of integers and returns `true` if the slice is sorted in non-decreasing order.",
        relevantLinks: ["https://pkg.go.dev/sort#IntsAreSorted"],
        functionToImplement: `package main

// isSorted checks if a slice of integers is sorted.
func isSorted(nums []int) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isSorted([]int{1, 2, 3, 4}))
    fmt.Println(isSorted([]int{1, 3, 2, 4}))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Implement Stack",
        difficulty: "Medium",
        description: "Implement a simple stack data structure using a slice.",
        problemStatement: "Create a `Stack` type with `Push`, `Pop`, and `Peek` methods. `Pop` should return an error if the stack is empty.",
        relevantLinks: ["https://gobyexample.com/structs", "https://gobyexample.com/methods"],
        functionToImplement: `package main

import "errors"

type Stack struct {
    elements []int
}

func (s *Stack) Push(element int) { /* Your code here */ }
func (s *Stack) Pop() (int, error) { /* Your code here */ return 0, errors.New("stack is empty") }
func (s *Stack) Peek() (int, error) { /* Your code here */ return 0, errors.New("stack is empty") }`,
        mainFunction: `package main
import "fmt"

// Paste your Stack implementation here

func main() {
    stack := Stack{}
    stack.Push(10)
    stack.Push(20)
    top, _ := stack.Peek()
    fmt.Println("Top element:", top)
    val, _ := stack.Pop()
    fmt.Println("Popped:", val)
    top, _ = stack.Peek()
    fmt.Println("New top element:", top)
}`,
        expectedOutput: `Top element: 20
Popped: 20
New top element: 10`
    },
    {
        title: "Word Frequency",
        difficulty: "Medium",
        description: "Count the frequency of each word in a string.",
        problemStatement: "Write a function `wordFrequency` that takes a string of text and returns a map where keys are the words and values are their frequencies.",
        relevantLinks: ["https://gobyexample.com/maps", "https://pkg.go.dev/strings#Fields"],
        functionToImplement: `package main

import "strings"

// wordFrequency counts the frequency of words in a text.
func wordFrequency(text string) map[string]int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(wordFrequency("hello world hello"))
}`,
        expectedOutput: `map[hello:2 world:1]`
    },
    {
        title: "Second Largest Number",
        difficulty: "Medium",
        description: "Find the second largest number in a slice.",
        problemStatement: "Write a function `secondLargest` that finds the second largest number in a slice of unique integers.",
        relevantLinks: ["https://gobyexample.com/sorting"],
        functionToImplement: `package main

// secondLargest finds the second largest number in a slice.
func secondLargest(nums []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(secondLargest([]int{10, 20, 4, 45, 99}))
}`,
        expectedOutput: `45`
    },
    {
        title: "Title Case String",
        difficulty: "Medium",
        description: "Capitalize the first letter of each word in a string.",
        problemStatement: "Write a function `titleCase` that takes a string and capitalizes the first letter of each word.",
        relevantLinks: ["https://pkg.go.dev/strings#Title"],
        functionToImplement: `package main

import "strings"

// titleCase converts a string to title case.
func titleCase(s string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(titleCase("go is an awesome language"))
}`,
        expectedOutput: `Go Is An Awesome Language`
    },
    {
        title: "Calculate Power",
        difficulty: "Medium",
        description: "Calculate the power of a number.",
        problemStatement: "Write a function `power` that computes `base` raised to the `exponent` power without using `math.Pow`.",
        relevantLinks: [],
        functionToImplement: `package main

// power calculates base^exponent.
func power(base, exponent int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(power(2, 3))
    fmt.Println(power(5, 0))
}`,
        expectedOutput: `8
1`
    },
    {
        title: "Concurrent Map",
        difficulty: "Hard",
        description: "Implement a map that is safe for concurrent use.",
        problemStatement: "Create a `ConcurrentMap` type that wraps a standard Go map with a `sync.RWMutex` to allow safe concurrent reads and writes.",
        relevantLinks: ["https://gobyexample.com/mutexes"],
        functionToImplement: `package main

import "sync"

type ConcurrentMap struct {
    sync.RWMutex
    items map[string]interface{}
}

func NewConcurrentMap() *ConcurrentMap { /* ... */ }
func (m *ConcurrentMap) Set(key string, value interface{}) { /* ... */ }
func (m *ConcurrentMap) Get(key string) (interface{}, bool) { /* ... */ return nil, false }`,
        mainFunction: `package main
import "fmt"

// Paste your ConcurrentMap implementation here

func main() {
    cmap := NewConcurrentMap()
    cmap.Set("name", "Go")
    name, ok := cmap.Get("name")
    if ok {
        fmt.Println("Found:", name)
    }
}`,
        expectedOutput: `Found: Go`
    },
    {
        title: "Validate IPv4 Address",
        difficulty: "Hard",
        description: "Write a function to validate an IPv4 address string.",
        problemStatement: "Write a function `isValidIPv4` that takes a string and returns `true` if it's a valid IPv4 address (e.g., '192.168.1.1'), and `false` otherwise.",
        relevantLinks: ["https://pkg.go.dev/strings#Split", "https://pkg.go.dev/strconv#Atoi"],
        functionToImplement: `package main

// isValidIPv4 validates an IPv4 address string.
func isValidIPv4(ip string) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isValidIPv4("127.0.0.1"))
    fmt.Println(isValidIPv4("256.0.0.1"))
    fmt.Println(isValidIPv4("127.0.0.1.1"))
}`,
        expectedOutput: `true
false
false`
    },
    {
        title: "Shortest Path in Grid (BFS)",
        difficulty: "Hard",
        description: "Find the shortest path from top-left to bottom-right in a grid.",
        problemStatement: "Given a 2D grid where `0` is a walkable path and `1` is a wall, find the length of the shortest path from `(0,0)` to `(rows-1, cols-1)`. You can move up, down, left, right. Return -1 if no path exists.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Breadth-first_search"],
        functionToImplement: `package main

// shortestPathBinaryMatrix finds the shortest path in a binary matrix.
func shortestPathBinaryMatrix(grid [][]int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    grid := [][]int{
        {0, 0, 0},
        {1, 1, 0},
        {1, 1, 0},
    }
    fmt.Println(shortestPathBinaryMatrix(grid))
}`,
        expectedOutput: `4`
    },
    {
        title: "Generic Filter",
        difficulty: "Hard",
        description: "Write a generic function to filter a slice.",
        problemStatement: "Using Go generics, write a function `Filter` that takes a slice of any type and a predicate function. The predicate function should take an element of the slice and return a boolean. `Filter` should return a new slice containing only the elements for which the predicate returns `true`.",
        relevantLinks: ["https://go.dev/doc/tutorial/generics"],
        functionToImplement: `package main

// Filter takes a slice and a predicate, and returns a new filtered slice.
func Filter[T any](slice []T, predicate func(T) bool) []T {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your generic Filter function here

func main() {
    numbers := []int{1, 2, 3, 4, 5, 6}
    evens := Filter(numbers, func(n int) bool {
        return n%2 == 0
    })
    fmt.Println("Even numbers:", evens)
}`,
        expectedOutput: `Even numbers: [2 4 6]`
    },
    {
        title: "Merge K Sorted Slices",
        difficulty: "Hard",
        description: "Merge k sorted integer slices into one sorted slice.",
        problemStatement: "Write an efficient function `mergeK` that takes a slice of sorted integer slices and merges them into a single sorted slice.",
        relevantLinks: ["https://en.wikipedia.org/wiki/K-way_merge_algorithm", "https://pkg.go.dev/container/heap"],
        functionToImplement: `package main

// mergeK merges k sorted slices.
func mergeK(lists [][]int) []int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    lists := [][]int{
        {1, 4, 5},
        {1, 3, 4},
        {2, 6},
    }
    fmt.Println(mergeK(lists))
}`,
        expectedOutput: `[1 1 2 3 4 4 5 6]`
    },
    // =================================================================
    // =               ADDITIONAL EXERCISES (20 Added)                 =
    // =================================================================
    {
        title: "Check Prime",
        difficulty: "Easy",
        description: "Determine if a number is prime.",
        problemStatement: "Write a function `checkPrime` that takes an integer and returns `true` if it's a prime number, and `false` otherwise.",
        relevantLinks: [],
        functionToImplement: `package main

func checkPrime(n int) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(checkPrime(7))
    fmt.Println(checkPrime(10))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Sum of Digits",
        difficulty: "Easy",
        description: "Calculate the sum of digits of a number.",
        problemStatement: "Write a function `sumDigits` that takes a non-negative integer and returns the sum of its digits.",
        relevantLinks: [],
        functionToImplement: `package main

func sumDigits(n int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(sumDigits(123))
    fmt.Println(sumDigits(987))
}`,
        expectedOutput: `6
24`
    },
    {
        title: "Swap First Last Characters",
        difficulty: "Easy",
        description: "Swap the first and last characters of a string.",
        problemStatement: "Write a function `swapFirstLast` that takes a string and returns a new string with its first and last characters swapped. If the string has less than 2 characters, return the original string.",
        relevantLinks: [],
        functionToImplement: `package main

func swapFirstLast(s string) string {
    // Your code here
    return s
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(swapFirstLast("hello"))
    fmt.Println(swapFirstLast("go"))
    fmt.Println(swapFirstLast("a"))
}`,
        expectedOutput: `oellh
og
a`
    },
    {
        title: "Count Words",
        difficulty: "Easy",
        description: "Count the number of words in a sentence.",
        problemStatement: "Write a function `countWords` that takes a string (sentence) and returns the number of words in it. Assume words are separated by single spaces.",
        relevantLinks: ["https://pkg.go.dev/strings#Fields"],
        functionToImplement: `package main

import "strings"

func countWords(s string) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(countWords("Hello Go World"))
    fmt.Println(countWords("OneWord"))
    fmt.Println(countWords(""))
}`,
        expectedOutput: `3
1
0`
    },
    {
        title: "Is Uppercase",
        difficulty: "Easy",
        description: "Check if a character is an uppercase letter.",
        problemStatement: "Write a function `isUppercase` that takes a rune and returns `true` if it's an uppercase English letter, `false` otherwise.",
        relevantLinks: ["https://pkg.go.dev/unicode#IsUpper"],
        functionToImplement: `package main

import "unicode"

func isUppercase(r rune) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isUppercase('A'))
    fmt.Println(isUppercase('a'))
    fmt.Println(isUppercase('5'))
}`,
        expectedOutput: `true
false
false`
    },
    {
        title: "Simple Calculator",
        difficulty: "Medium",
        description: "Implement basic arithmetic operations.",
        problemStatement: "Write a function `calculate` that takes two integers and a string operator ('+', '-', '*', '/') and returns the result. Handle division by zero.",
        relevantLinks: ["https://gobyexample.com/switch"],
        functionToImplement: `package main

import "errors"

func calculate(a, b int, operator string) (int, error) {
    // Your code here
    return 0, errors.New("invalid operator or division by zero")
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    res, err := calculate(10, 5, "+")
    fmt.Println(res, err)
    res, err = calculate(10, 2, "/")
    fmt.Println(res, err)
    res, err = calculate(10, 0, "/")
    fmt.Println(res, err)
}`,
        expectedOutput: `15 <nil>
5 <nil>
0 invalid operator or division by zero`
    },
    {
        title: "Remove Element from Slice",
        difficulty: "Medium",
        description: "Remove a specific element from a slice.",
        problemStatement: "Write a function `removeElement` that takes a slice of integers and an integer `val`. It should remove all occurrences of `val` from the slice in-place and return the new length of the slice.",
        relevantLinks: [],
        functionToImplement: `package main

func removeElement(nums []int, val int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    nums := []int{3, 2, 2, 3}
    length := removeElement(nums, 3)
    fmt.Println(nums[:length])
    nums = []int{0,1,2,2,3,0,4,2}
    length = removeElement(nums, 2)
    fmt.Println(nums[:length])
}`,
        expectedOutput: `[2 2]
[0 1 3 0 4]`
    },
    {
        title: "Is Permutation",
        difficulty: "Medium",
        description: "Check if one string is a permutation of another.",
        problemStatement: "Write a function `isPermutation` that takes two strings and returns `true` if one string is a permutation of the other (they contain the same characters with the same counts).",
        relevantLinks: ["https://gobyexample.com/maps"],
        functionToImplement: `package main

func isPermutation(s1, s2 string) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(isPermutation("listen", "silent"))
    fmt.Println(isPermutation("hello", "world"))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Queue Implementation",
        difficulty: "Medium",
        description: "Implement a simple queue data structure.",
        problemStatement: "Create a `Queue` type with `Enqueue`, `Dequeue`, and `Front` methods. `Dequeue` should return an error if the queue is empty.",
        relevantLinks: [],
        functionToImplement: `package main

import "errors"

type Queue struct {
    elements []int
}

func (q *Queue) Enqueue(element int) { /* Your code here */ }
func (q *Queue) Dequeue() (int, error) { /* Your code here */ return 0, errors.New("queue is empty") }
func (q *Queue) Front() (int, error) { /* Your code here */ return 0, errors.New("queue is empty") }`,
        mainFunction: `package main
import "fmt"

// Paste your Queue implementation here

func main() {
    queue := Queue{}
    queue.Enqueue(10)
    queue.Enqueue(20)
    front, _ := queue.Front()
    fmt.Println("Front element:", front)
    val, _ := queue.Dequeue()
    fmt.Println("Dequeued:", val)
    front, _ = queue.Front()
    fmt.Println("New front element:", front)
}`,
        expectedOutput: `Front element: 10
Dequeued: 10
New front element: 20`
    },
    {
        title: "Group by Length",
        difficulty: "Medium",
        description: "Group words in a slice by their length.",
        problemStatement: "Write a function `groupByLength` that takes a slice of strings and returns a map where keys are string lengths and values are slices of words with that length.",
        relevantLinks: ["https://gobyexample.com/maps"],
        functionToImplement: `package main

func groupByLength(words []string) map[int][]string {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(groupByLength([]string{"apple", "cat", "banana", "dog", "ant"}))
}`,
        expectedOutput: `map[3:[cat dog ant] 5:[apple] 6:[banana]]`
    },
    {
        title: "Find Duplicate in Slice",
        difficulty: "Medium",
        description: "Find a duplicate number in a slice.",
        problemStatement: "Given a slice `nums` containing `n + 1` integers where each integer is between 1 and `n` (inclusive). Prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.",
        relevantLinks: [],
        functionToImplement: `package main

func findDuplicate(nums []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(findDuplicate([]int{1, 3, 4, 2, 2}))
    fmt.Println(findDuplicate([]int{3, 1, 3, 4, 2}))
}`,
        expectedOutput: `2
3`
    },
    {
        title: "Longest Common Substring",
        difficulty: "Hard",
        description: "Find the longest common substring between two strings.",
        problemStatement: "Write a function `longestCommonSubstring` that takes two strings and returns the longest common substring.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Longest_common_substring_problem"],
        functionToImplement: `package main

func longestCommonSubstring(s1, s2 string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(longestCommonSubstring("abcdef", "abczzzdef"))
    fmt.Println(longestCommonSubstring("abc", "def"))
}`,
        expectedOutput: `abc
`
    },
    {
        title: "Subsets",
        difficulty: "Hard",
        description: "Generate all possible subsets of a set.",
        problemStatement: "Given a unique slice of integers, `nums`, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Power_set"],
        functionToImplement: `package main

func subsets(nums []int) [][]int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(subsets([]int{1, 2, 3}))
}`,
        expectedOutput: `[[] [1] [2] [1 2] [3] [1 3] [2 3] [1 2 3]]`
    },
    {
        title: "Merge Sorted Arrays (In-place)",
        difficulty: "Hard",
        description: "Merge two sorted arrays into the first array in-place.",
        problemStatement: "Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array. `nums1` has enough space to hold elements from both arrays.",
        relevantLinks: [],
        functionToImplement: `package main

func mergeSortedArraysInPlace(nums1 []int, m int, nums2 []int, n int) {
    // Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    nums1 := []int{1, 2, 3, 0, 0, 0}
    nums2 := []int{2, 5, 6}
    mergeSortedArraysInPlace(nums1, 3, nums2, 3)
    fmt.Println(nums1)
}`,
        expectedOutput: `[1 2 2 3 5 6]`
    },
    {
        title: "Validate Sudoku",
        difficulty: "Hard",
        description: "Determine if a 9x9 Sudoku board is valid.",
        problemStatement: "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each of the digits 1-9 must occur exactly once in each row. Each of the digits 1-9 must occur exactly once in each column. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.",
        relevantLinks: [],
        functionToImplement: `package main

func isValidSudoku(board [][]byte) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    board := [][]byte{
        {'5','3','.','.','7','.','.','.','.'},
        {'6','.','.','1','9','5','.','.','.'},
        {'.','9','8','.','.','.','.','6','.'},
        {'8','.','.','.','6','.','.','.','3'},
        {'4','.','.','8','.','3','.','.','1'},
        {'7','.','.','.','2','.','.','.','6'},
        {'.','6','.','.','.','.','2','8','.'},
        {'.','.','.','4','1','9','.','.','5'},
        {'.','.','.','.','8','.','.','7','9'},
    }
    fmt.Println(isValidSudoku(board)) // Should be true if valid
}`,
        expectedOutput: `true`
    },
    {
        title: "Minimum Window Substring",
        difficulty: "Hard",
        description: "Find the smallest substring of `s` that contains all characters of `t`.",
        problemStatement: "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `''`.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Sliding_window_algorithm"],
        functionToImplement: `package main

func minWindow(s string, t string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(minWindow("ADOBECODEBANC", "ABC"))
    fmt.Println(minWindow("a", "a"))
    fmt.Println(minWindow("a", "aa"))
}`,
        expectedOutput: `BANC
a
`
    },
    {
        title: "Copy Random List",
        difficulty: "Hard",
        description: "Copy a linked list with random pointers.",
        problemStatement: "A linked list is given such that each node contains an additional random pointer, which could point to any node in the list, or to `nil`. Return a deep copy of the list.",
        relevantLinks: [],
        functionToImplement: `package main

type Node struct {
    Val int
    Next *Node
    Random *Node
}

func copyRandomList(head *Node) *Node {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste Node and copyRandomList here

func main() {
    // Example test (requires manual setup of random pointers)
    // node1 := &Node{Val: 7}
    // node2 := &Node{Val: 13}
    // node3 := &Node{Val: 11}
    // node4 := &Node{Val: 10}
    // node5 := &Node{Val: 1}
    // node1.Next = node2
    // node2.Next = node3
    // node3.Next = node4
    // node4.Next = node5
    //
    // node2.Random = node1 // Example random link
    //
    // copiedList := copyRandomList(node1)
    // fmt.Println("Copied list head value:", copiedList.Val)
}`,
        expectedOutput: `(A deep copy of the list)`
    },
    {
        title: "Word Search II",
        difficulty: "Hard",
        description: "Find all words in a 2D grid that can be formed from a given dictionary.",
        problemStatement: "Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in the same word.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Trie"],
        functionToImplement: `package main

type TrieNode struct {
    children map[rune]*TrieNode
    isWord   bool
}

func (t *TrieNode) Insert(word string) {
    // Your code here
}

func findWords(board [][]byte, words []string) []string {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste TrieNode, Insert, and findWords here

func main() {
    board := [][]byte{
        {'o','a','a','n'},
        {'e','t','a','e'},
        {'i','h','k','r'},
        {'i','f','l','v'},
    }
    words := []string{"oath","pea","eat","rain"}
    fmt.Println(findWords(board, words))
}`,
        expectedOutput: `[eat oath]`
    },
    {
        title: "Text Justification",
        difficulty: "Hard",
        description: "Given a slice of words and a maximum width, reformat the text to be full-justified.",
        problemStatement: "Given a slice of strings `words` and a `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.",
        relevantLinks: [],
        functionToImplement: `package main

import "strings"

func fullJustify(words []string, maxWidth int) []string {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    words1 := []string{"This", "is", "an", "example", "of", "text", "justification."}
    maxWidth1 := 16
    for _, line := range fullJustify(words1, maxWidth1) {
        fmt.Println(line)
    }
    fmt.Println("---")
    words2 := []string{"What","must","be","acknowledgment","shall","be"}
    maxWidth2 := 16
    for _, line := range fullJustify(words2, maxWidth2) {
        fmt.Println(line)
    }
}`,
        expectedOutput: `This    is    an
example  of text
justification.`
    },
    {
        title: "Serialize and Deserialize N-ary Tree",
        difficulty: "Hard",
        description: "Encode and decode an N-ary tree to a string and back.",
        problemStatement: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later. Design an algorithm to serialize and deserialize an N-ary tree.",
        relevantLinks: [],
        functionToImplement: `package main

import (
    "strconv"
    "strings"
)

type NaryNode struct {
    Val int
    Children []*NaryNode
}

type NaryCodec struct {}

func ConstructorNary() NaryCodec { return NaryCodec{} }
func (this *NaryCodec) serialize(root *NaryNode) string { return "" }
func (this *NaryCodec) deserialize(data string) *NaryNode { return nil }`,
        mainFunction: `package main
import "fmt"

// Paste NaryNode, NaryCodec and its methods here

func main() {
    // Test cases (requires manual tree construction)
    // root := &NaryNode{Val: 1}
    // child1 := &NaryNode{Val: 3}
    // child2 := &NaryNode{Val: 2}
    // child3 := &NaryNode{Val: 4}
    // root.Children = []*NaryNode{child1, child2, child3}
    // child1.Children = []*NaryNode{{Val: 5}, {Val: 6}}
    //
    // codec := ConstructorNary()
    // serialized := codec.serialize(root)
    // fmt.Println("Serialized:", serialized)
    // deserialized := codec.deserialize(serialized)
    // fmt.Println("Deserialized Val:", deserialized.Val)
}`,
        expectedOutput: `(A reconstructed N-ary tree)`
    },
    {
        title: "Sliding Window Maximum",
        difficulty: "Hard",
        description: "Find the maximum in each sliding window.",
        problemStatement: "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Return the max sliding window.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Sliding_window_algorithm"],
        functionToImplement: `package main

func maxSlidingWindow(nums []int, k int) []int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(maxSlidingWindow([]int{1,3,-1,-3,5,3,6,7}, 3))
    fmt.Println(maxSlidingWindow([]int{1}, 1))
}`,
        expectedOutput: `[3 3 5 5 6 7]
[1]`
    },
    {
        title: "Basic Calculator II",
        difficulty: "Hard",
        description: "Implement a basic calculator to evaluate a simple expression string.",
        problemStatement: "Implement a basic calculator to evaluate a simple expression string. The expression string contains only non-negative integers, `+`, `-`, `*`, `/` operators and empty spaces. Integer division should truncate toward zero.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Shunting-yard_algorithm"],
        functionToImplement: `package main

func calculate(s string) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(calculate("3+2*2"))
    fmt.Println(calculate(" 3/2 "))
    fmt.Println(calculate(" 3+5 / 2 "))
}`,
        expectedOutput: `7
1
5`
    },
    {
        title: "Minimum Number of Arrows to Burst Balloons",
        difficulty: "Hard",
        description: "Find the minimum number of arrows to shoot to burst all balloons.",
        problemStatement: "There are some spherical balloons on a 2D plane. For each balloon, provided is the x-coordinate of its horizontal diameter. An arrow shot vertically from some x-coordinate will burst all balloons whose diameter spans that x-coordinate. Find the minimum number of arrows that must be shot to burst all balloons.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Interval_graph"],
        functionToImplement: `package main

import "sort"

func findMinArrowShots(points [][]int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(findMinArrowShots([][]int{{10,16},{2,8},{1,6},{7,12}}))
    fmt.Println(findMinArrowShots([][]int{{1,2},{3,4},{5,6},{7,8}}))
    fmt.Println(findMinArrowShots([][]int{{1,2},{2,3},{3,4},{4,5}}))
}`,
        expectedOutput: `2
4
2`
    },
    {
        title: "Max Points on a Line",
        difficulty: "Hard",
        description: "Given N points on a 2D plane, find the maximum number of points that lie on the same straight line.",
        problemStatement: "Given an array of `points`, where `points[i] = [xi, yi]` represents a point on an X-Y plane, return the maximum number of points that lie on the same straight line.",
        relevantLinks: [],
        functionToImplement: `package main

func maxPoints(points [][]int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(maxPoints([][]int{{1,1},{2,2},{3,3}}))
    fmt.Println(maxPoints([][]int{{1,1},{3,2},{5,3},{4,1},{2,3},{1,4}}))
}`,
        expectedOutput: `3
4`
    },
    {
        title: "Course Schedule",
        difficulty: "Hard",
        description: "Determine if it is possible to finish all courses given prerequisites.",
        problemStatement: "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Return `true` if you can finish all courses, otherwise return `false`.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Topological_sort"],
        functionToImplement: `package main

func canFinish(numCourses int, prerequisites [][]int) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(canFinish(2, [][]int{{1,0}}))
    fmt.Println(canFinish(2, [][]int{{1,0},{0,1}}))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Binary Tree Zigzag Level Order Traversal",
        difficulty: "Hard",
        description: "Perform zigzag level order traversal on a binary tree.",
        problemStatement: "Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
        relevantLinks: [],
        functionToImplement: `package main

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func zigzagLevelOrder(root *TreeNode) [][]int {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste TreeNode and zigzagLevelOrder here

func main() {
    root := &TreeNode{Val: 3, Left: &TreeNode{Val: 9}, Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15}, Right: &TreeNode{Val: 7}}}
    fmt.Println(zigzagLevelOrder(root))
}`,
        expectedOutput: `[[3] [20 9] [15 7]]`
    },
    {
        title: "Longest Consecutive Sequence",
        difficulty: "Hard",
        description: "Find the length of the longest consecutive elements sequence.",
        problemStatement: "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in `O(n)` time.",
        relevantLinks: [],
        functionToImplement: `package main

func longestConsecutive(nums []int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(longestConsecutive([]int{100,4,200,1,3,2}))
    fmt.Println(longestConsecutive([]int{0,3,7,2,5,8,4,6,0,1}))
}`,
        expectedOutput: `4
9`
    },
    {
        title: "Meeting Rooms II",
        difficulty: "Hard",
        description: "Find the minimum number of conference rooms required.",
        problemStatement: "Given an array of meeting time intervals `[[start, end]]`, return the minimum number of conference rooms required.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Interval_tree"],
        functionToImplement: `package main

import "sort"

func minMeetingRooms(intervals [][]int) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    fmt.Println(minMeetingRooms([][]int{{0,30},{5,10},{15,20}}))
    fmt.Println(minMeetingRooms([][]int{{7,10},{2,4}}))
}`,
        expectedOutput: `2
1`
    },
    {
        title: "Design TinyURL",
        difficulty: "Hard",
        description: "Design a system that generates short URLs for long URLs.",
        problemStatement: "Design a system that takes a long URL and returns a tiny URL. It should also be able to convert a tiny URL back to the original long URL.",
        relevantLinks: [],
        functionToImplement: `package main

import (
    "math/rand"
    "time"
)

type Codec struct {
    // Your data structures here
}

func ConstructorTinyURL() Codec {
    // Your code here
    return Codec{}
}

// Encodes a URL to a shortened URL.
func (this *Codec) Encode(longUrl string) string {
    // Your code here
    return ""
}

// Decodes a shortened URL to its original URL.
func (this *Codec) Decode(shortUrl string) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste Codec and its methods here

func main() {
    rand.Seed(time.Now().UnixNano()) // For random key generation
    codec := ConstructorTinyURL()
    longUrl := "https://leetcode.com/problems/design-tinyurl"
    shortUrl := codec.Encode(longUrl)
    decodedUrl := codec.Decode(shortUrl)
    fmt.Printf("Original: %s\\nShort: %s\\nDecoded: %s\\n", longUrl, shortUrl, decodedUrl)
}`,
        expectedOutput: `Original: https://leetcode.com/problems/design-tinyurl
Short: http://tinyurl.com/...
Decoded: https://leetcode.com/problems/design-tinyurl`
    },
    {
        title: "Maximal Square",
        difficulty: "Hard",
        description: "Find the largest square containing only '1's in a binary matrix.",
        problemStatement: "Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, find the largest square containing only `1`'s and return its area.",
        relevantLinks: ["https://en.wikipedia.org/wiki/Dynamic_programming"],
        functionToImplement: `package main

import "math"

func maximalSquare(matrix [][]byte) int {
    // Your code here
    return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste your function here

func main() {
    matrix1 := [][]byte{
        {'1','0','1','0','0'},
        {'1','0','1','1','1'},
        {'1','1','1','1','1'},
        {'1','0','0','1','0'},
    }
    fmt.Println(maximalSquare(matrix1)) // 4

    matrix2 := [][]byte{{'0','1'},{'1','0'}}
    fmt.Println(maximalSquare(matrix2)) // 1
}`,
        expectedOutput: `4
1`
    }
];

// Assign the exercises array to window.globalData.exercises
// This makes the data accessible to main.js as expected.
window.globalData.exercises = exercises;

