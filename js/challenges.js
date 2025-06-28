// File: challenges.js
// This file contains a list of 67 Go programming challenges,
// structured as requested, with descriptions in English.
if (typeof window.globalData === 'undefined') {
    window.globalData = {};
}

var challenges = [
    // =================================================================
    // =                     Medium Challenges (15)                    =
    // =================================================================
    {
        title: "Anagram Checker",
        difficulty: "Medium",
        problemStatement: "Write a function that checks if two words are anagrams of each other (they contain the same characters with the same frequency).",
        relevantTopics: ["Maps", "String Manipulation", "For Loops"],
        functionToImplement: `package main

// isAnagram checks if strings s1 and s2 are anagrams.
func isAnagram(s1, s2 string) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste the isAnagram function here

func main() {
	fmt.Println(isAnagram("listen", "silent"))
	fmt.Println(isAnagram("hello", "world"))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Find the Missing Element",
        difficulty: "Medium",
        problemStatement: "You have a slice of numbers from 1 to N, but one number is missing. Find this number efficiently.",
        relevantTopics: ["Slices", "Arithmetic Operations", "Mathematical Formulas (Sum of an Arithmetic Series)"],
        functionToImplement: `package main

// findMissingNumber finds the missing number in a sequence from 1 to n.
func findMissingNumber(nums []int, n int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the findMissingNumber function here

func main() {
    // Sequence from 1 to 10, with the number 7 missing
	fmt.Println(findMissingNumber([]int{1, 2, 3, 4, 5, 6, 8, 9, 10}, 10))
}`,
        expectedOutput: `7`
    },
    {
        title: "Maximum Stock Profit",
        difficulty: "Medium",
        problemStatement: "Given a slice representing stock prices over several days, find the maximum profit that can be achieved from a single buy and sell transaction.",
        relevantTopics: ["Slices", "Algorithms (Finding Min/Max)"],
        functionToImplement: `package main

import "math"

// maxProfit calculates the maximum profit from stock prices.
func maxProfit(prices []int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the maxProfit function here

func main() {
	fmt.Println(maxProfit([]int{7, 1, 5, 3, 6, 4}))
}`,
        expectedOutput: `5`
    },
    {
        title: "Reverse Words in a Sentence",
        difficulty: "Medium",
        problemStatement: "Write a function that reverses the order of words in a sentence while preserving the order of characters in each word.",
        relevantTopics: ["'strings' package", "Slices"],
        functionToImplement: `package main

import "strings"

// reverseWords reverses the order of words in a sentence.
func reverseWords(s string) string {
	// Your code here
	return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste the reverseWords function here

func main() {
	fmt.Println(reverseWords("Go is awesome"))
}`,
        expectedOutput: `awesome is Go`
    },
    {
        title: "Fibonacci Sequence Generator",
        difficulty: "Medium",
        problemStatement: "Write a function that generates the first n numbers of the Fibonacci sequence.",
        relevantTopics: ["Slices", "For Loops", "Recursion as an alternative solution"],
        functionToImplement: `package main

// fibonacciGenerator generates the first n numbers of the Fibonacci sequence.
func fibonacciGenerator(n int) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the fibonacciGenerator function here

func main() {
	fmt.Println(fibonacciGenerator(10))
}`,
        expectedOutput: `[0 1 1 2 3 5 8 13 21 34]`
    },
    {
        title: "Remove Duplicates from a Slice",
        difficulty: "Medium",
        problemStatement: "Create a function that removes duplicate elements from a slice while preserving the original order of elements.",
        relevantTopics: ["Maps (for tracking elements)", "Slices"],
        functionToImplement: `package main

// removeDuplicates removes duplicate elements from a slice.
func removeDuplicates(slice []int) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the removeDuplicates function here

func main() {
	fmt.Println(removeDuplicates([]int{1, 2, 3, 2, 1, 4}))
}`,
        expectedOutput: `[1 2 3 4]`
    },
    {
        title: "Binary Search",
        difficulty: "Medium",
        problemStatement: "Implement the binary search algorithm to find an element in a sorted slice.",
        relevantTopics: ["Algorithms", "Slices", "Index Manipulation"],
        functionToImplement: `package main

// binarySearch searches for an element in a sorted slice.
func binarySearch(sortedSlice []int, target int) int {
	// Your code here
	return -1 // if the element is not found
}`,
        mainFunction: `package main
import "fmt"

// Paste the binarySearch function here

func main() {
	fmt.Println(binarySearch([]int{1, 3, 5, 7, 9, 11}, 7))
	fmt.Println(binarySearch([]int{1, 3, 5, 7, 9, 11}, 6))
}`,
        expectedOutput: `3
-1`
    },
    {
        title: "Validate Parentheses",
        difficulty: "Medium",
        problemStatement: "Write a function that checks if a string of parentheses ({, }, [, ], (, )) is balanced and properly closed.",
        relevantTopics: ["Data Structures (Stack)", "Maps"],
        functionToImplement: `package main

// isValidParentheses checks for balanced parentheses.
func isValidParentheses(s string) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste the isValidParentheses function here

func main() {
	fmt.Println(isValidParentheses("()[]{}"))
	fmt.Println(isValidParentheses("([)]"))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Factorial Calculation",
        difficulty: "Medium",
        problemStatement: "Write a recursive function to calculate the factorial of a given number.",
        relevantTopics: ["Recursion", "Base cases"],
        functionToImplement: `package main

// factorial calculates the factorial of a number using recursion.
func factorial(n uint) uint {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the factorial function here

func main() {
	fmt.Println(factorial(5))
}`,
        expectedOutput: `120`
    },
    {
        title: "String Compression",
        difficulty: "Medium",
        problemStatement: "Write a function to compress a string, for example, 'AAABBCDDDD' becomes 'A3B2C1D4'.",
        relevantTopics: ["String Manipulation", "'strconv' package"],
        functionToImplement: `package main

import "strconv"

// compressString compresses a string.
func compressString(s string) string {
	// Your code here
	return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste the compressString function here

func main() {
	fmt.Println(compressString("AAABBCDDDD"))
}`,
        expectedOutput: `A3B2C1D4`
    },
    {
        title: "Rotate a Slice",
        difficulty: "Medium",
        problemStatement: "Write a function that rotates a slice to the right by k steps.",
        relevantTopics: ["Slices", "Arithmetic operations on Indices"],
        functionToImplement: `package main

// rotateSlice rotates a slice to the right.
func rotateSlice(nums []int, k int) {
	// Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste the rotateSlice function here

func main() {
	s := []int{1, 2, 3, 4, 5, 6, 7}
	rotateSlice(s, 3)
	fmt.Println(s)
}`,
        expectedOutput: `[5 6 7 1 2 3 4]`
    },
    {
        title: "Prime Number Check",
        difficulty: "Medium",
        problemStatement: "Write an efficient function to check if a given number is a prime number.",
        relevantTopics: ["Arithmetic Operations", "Algorithm Optimizations", "'math' package"],
        functionToImplement: `package main

import "math"

// isPrime checks if a number is prime.
func isPrime(n int) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste the isPrime function here

func main() {
	fmt.Println(isPrime(17))
	fmt.Println(isPrime(15))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Merge Two Sorted Slices",
        difficulty: "Medium",
        problemStatement: "Write a function that merges two sorted slices into a new, single sorted slice.",
        relevantTopics: ["Slices", "Merge Algorithms", "Pointers"],
        functionToImplement: `package main

// mergeSortedSlices merges two sorted slices.
func mergeSortedSlices(s1, s2 []int) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the mergeSortedSlices function here

func main() {
	fmt.Println(mergeSortedSlices([]int{1, 3, 5}, []int{2, 4, 6}))
}`,
        expectedOutput: `[1 2 3 4 5 6]`
    },
    {
        title: "First Non-Repeating Character",
        difficulty: "Medium",
        problemStatement: "Find the index of the first non-repeating character in a string.",
        relevantTopics: ["Maps", "String Manipulation"],
        functionToImplement: `package main

// firstUniqChar finds the index of the first unique character.
func firstUniqChar(s string) int {
	// Your code here
	return -1
}`,
        mainFunction: `package main
import "fmt"

// Paste the firstUniqChar function here

func main() {
	fmt.Println(firstUniqChar("leetcode"))
	fmt.Println(firstUniqChar("loveleetcode"))
}`,
        expectedOutput: `0
2`
    },
    {
        title: "Maximum Subarray Sum (Kadane's Algorithm)",
        difficulty: "Medium",
        problemStatement: "Find the largest sum of a contiguous subarray within an array of integers.",
        relevantTopics: ["Algorithms (Kadane's Algorithm)", "Slices"],
        functionToImplement: `package main

// maxSubarraySum finds the largest contiguous subarray sum.
func maxSubarraySum(nums []int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the maxSubarraySum function here

func main() {
	fmt.Println(maxSubarraySum([]int{-2, 1, -3, 4, -1, 2, 1, -5, 4}))
}`,
        expectedOutput: `6`
    },

    // =================================================================
    // =                       Hard Challenges (20)                      =
    // =================================================================
    {
        title: "Sudoku Solver",
        difficulty: "Hard",
        problemStatement: "Write a program that solves 9x9 Sudoku puzzles using a backtracking algorithm.",
        relevantTopics: ["Recursion", "Backtracking Algorithm", "2D Arrays"],
        functionToImplement: `package main

// solveSudoku solves a Sudoku puzzle.
func solveSudoku(board [][]byte) {
	// Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste the solveSudoku function here

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
	solveSudoku(board)
	for _, row := range board {
		fmt.Println(string(row))
	}
}`,
        expectedOutput: `534678912
672195348
198342567
859761423
426853791
713924856
961537284
287419635
345286179`
    },
    {
        title: "Knapsack Problem",
        difficulty: "Hard",
        problemStatement: "You have a set of items, each with a weight and a value. Determine the number of each item to include in a bag so that the total weight is less than or equal to a given limit and the total value is as large as possible.",
        relevantTopics: ["Dynamic Programming", "2D Arrays"],
        functionToImplement: `package main

// knapsack solves the knapsack problem.
func knapsack(weights []int, values []int, capacity int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the knapsack function here

func main() {
	values := []int{60, 100, 120}
	weights := []int{10, 20, 30}
	capacity := 50
	fmt.Println(knapsack(weights, values, capacity))
}`,
        expectedOutput: `220`
    },
    {
        title: "Shortest Path in a Maze",
        difficulty: "Hard",
        problemStatement: "Using an algorithm like Breadth-First Search (BFS), find the shortest path from a start point to an end point in a maze represented by a binary matrix.",
        relevantTopics: ["Search Algorithms (BFS)", "Data Structures (Queue)", "2D Arrays"],
        functionToImplement: `package main

// shortestPathInMaze finds the shortest path in a maze.
func shortestPathInMaze(maze [][]int, start, end [2]int) int {
	// Your code here
	return -1
}`,
        mainFunction: `package main
import "fmt"

// Paste the shortestPathInMaze function here

func main() {
	maze := [][]int{
		{1, 0, 1, 1, 1},
		{1, 0, 1, 0, 1},
		{1, 1, 1, 0, 1},
		{0, 0, 0, 0, 1},
		{1, 1, 1, 0, 1},
	}
	start := [2]int{0, 0}
	end := [2]int{4, 4}
	fmt.Println(shortestPathInMaze(maze, start, end))
}`,
        expectedOutput: `10`
    },
    {
        title: "Generate All Permutations",
        difficulty: "Hard",
        problemStatement: "Write a function that generates all possible permutations of a set of elements.",
        relevantTopics: ["Recursion", "Backtracking Algorithm"],
        functionToImplement: `package main

// generatePermutations generates all permutations of a slice.
func generatePermutations(nums []int) [][]int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the generatePermutations function here

func main() {
	fmt.Println(generatePermutations([]int{1, 2, 3}))
}`,
        expectedOutput: `[[1 2 3] [1 3 2] [2 1 3] [2 3 1] [3 1 2] [3 2 1]]`
    },
    {
        title: "Word Ladder",
        difficulty: "Hard",
        problemStatement: "Find the shortest transformation from a start word to an end word, where you can only change one letter at a time, and each intermediate word must be in the dictionary.",
        relevantTopics: ["Search Algorithms (BFS)", "Maps"],
        functionToImplement: `package main

// wordLadder finds the shortest word ladder length.
func wordLadder(beginWord, endWord string, wordList []string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the wordLadder function here

func main() {
	wordList := []string{"hot","dot","dog","lot","log","cog"}
	fmt.Println(wordLadder("hit", "cog", wordList))
}`,
        expectedOutput: `5`
    },
    {
        title: "N-Queens Problem",
        difficulty: "Hard",
        problemStatement: "Place N chess queens on an N×N chessboard so that no two queens threaten each other.",
        relevantTopics: ["Recursion", "Backtracking Algorithm"],
        functionToImplement: `package main

// solveNQueens solves the N-Queens problem.
func solveNQueens(n int) [][]string {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the solveNQueens function here

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
        title: "Iterative Tree Traversal",
        difficulty: "Hard",
        problemStatement: "Implement the three tree traversal methods (In-order, Pre-order, Post-order) without using recursion.",
        relevantTopics: ["Data Structures (Stack, Binary Tree)", "Algorithms"],
        functionToImplement: `package main

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

// inorderTraversal performs an in-order traversal iteratively.
func inorderTraversal(root *TreeNode) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste TreeNode and inorderTraversal here

func main() {
	root := &TreeNode{Val: 1, Right: &TreeNode{Val: 2, Left: &TreeNode{Val: 3}}}
	fmt.Println(inorderTraversal(root))
}`,
        expectedOutput: `[1 3 2]`
    },
    {
        title: "Regex Parser",
        difficulty: "Hard",
        problemStatement: "Create a simple regular expression parser that supports `.` (any character) and `*` (zero or more of the preceding character).",
        relevantTopics: ["Recursion", "Dynamic Programming"],
        functionToImplement: `package main

// isMatch implements a simple regex matcher.
func isMatch(s, p string) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste the isMatch function here

func main() {
	fmt.Println(isMatch("aa", "a*"))
	fmt.Println(isMatch("mississippi", "mis*is*p*."))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Lowest Common Ancestor",
        difficulty: "Hard",
        problemStatement: "Find the lowest common ancestor (LCA) of two nodes in a binary tree.",
        relevantTopics: ["Data Structures (Binary Tree)", "Recursion"],
        functionToImplement: `package main

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

// lowestCommonAncestor finds the lowest common ancestor.
func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste TreeNode and lowestCommonAncestor here

func main() {
	// Build the tree here
	root := &TreeNode{Val: 3}
	p := &TreeNode{Val: 5}
	q := &TreeNode{Val: 1}
	root.Left = p
	root.Right = q
	// ...
	// lca := lowestCommonAncestor(root, p, q)
	// fmt.Println(lca.Val)
}`,
        expectedOutput: `3`
    },
    {
        title: "Merge K Sorted Lists",
        difficulty: "Hard",
        problemStatement: "Write an efficient function to merge k sorted linked lists into one sorted list.",
        relevantTopics: ["Data Structures (Linked List, Min-Heap)", "Merge Algorithms"],
        functionToImplement: `package main

type ListNode struct {
    Val int
    Next *ListNode
}

// mergeKLists merges k sorted lists.
func mergeKLists(lists []*ListNode) *ListNode {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste ListNode and mergeKLists here

func main() {
	// Create and test the lists here
}`,
        expectedOutput: `(A single sorted list)`
    },
    {
        title: "Trapping Rain Water",
        difficulty: "Hard",
        problemStatement: "Given a slice of non-negative integers representing an elevation map, calculate the amount of water that can be trapped after rainfall.",
        relevantTopics: ["Slices", "Two Pointers Algorithm"],
        functionToImplement: `package main

// trap calculates the amount of trapped water.
func trap(height []int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the trap function here

func main() {
	fmt.Println(trap([]int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}))
}`,
        expectedOutput: `6`
    },
    {
        title: "Median of a Data Stream",
        difficulty: "Hard",
        problemStatement: "Design a data structure that supports adding numbers from a data stream and finding the median of all elements added so far.",
        relevantTopics: ["Data Structures (Heap/Priority Queue)"],
        functionToImplement: `package main

import "container/heap"

// MedianFinder is the required data structure.
type MedianFinder struct {
    // Your code here
}

func Constructor() MedianFinder {
	// Your code here
}

func (this *MedianFinder) AddNum(num int)  {
	// Your code here
}

func (this *MedianFinder) FindMedian() float64 {
	// Your code here
	return 0.0
}`,
        mainFunction: `package main
import "fmt"

// Paste MedianFinder and its methods here

func main() {
	mf := Constructor()
	mf.AddNum(1)
	mf.AddNum(2)
	fmt.Println(mf.FindMedian()) // -> 1.5
	mf.AddNum(3)
	fmt.Println(mf.FindMedian()) // -> 2.0
}`,
        expectedOutput: `1.5
2`
    },
    {
        title: "Word Break",
        difficulty: "Hard",
        problemStatement: "Given a string and a dictionary of words, determine if the string can be segmented into a sequence of dictionary words.",
        relevantTopics: ["Dynamic Programming"],
        functionToImplement: `package main

// wordBreak checks if a string can be segmented.
func wordBreak(s string, wordDict []string) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste the wordBreak function here

func main() {
	fmt.Println(wordBreak("leetcode", []string{"leet", "code"}))
}`,
        expectedOutput: `true`
    },
    {
        title: "Longest Increasing Subsequence",
        difficulty: "Hard",
        problemStatement: "Find the length of the longest increasing subsequence in a slice.",
        relevantTopics: ["Dynamic Programming"],
        functionToImplement: `package main

// lengthOfLIS finds the length of the longest increasing subsequence.
func lengthOfLIS(nums []int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the lengthOfLIS function here

func main() {
	fmt.Println(lengthOfLIS([]int{10, 9, 2, 5, 3, 7, 101, 18}))
}`,
        expectedOutput: `4`
    },
    {
        title: "Spiral Matrix",
        difficulty: "Hard",
        problemStatement: "Write a function that prints or returns the elements of a matrix in spiral order.",
        relevantTopics: ["2D Arrays", "Simulation"],
        functionToImplement: `package main

// spiralOrder returns the elements of a matrix in spiral order.
func spiralOrder(matrix [][]int) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the spiralOrder function here

func main() {
	matrix := [][]int{{1,2,3},{4,5,6},{7,8,9}}
	fmt.Println(spiralOrder(matrix))
}`,
        expectedOutput: `[1 2 3 6 9 8 7 4 5]`
    },
    {
        title: "Implement LRU Cache",
        difficulty: "Hard",
        problemStatement: "Design and implement a data structure for a Least Recently Used (LRU) Cache.",
        relevantTopics: ["Data Structures (Doubly Linked List, Hash Map)"],
        functionToImplement: `package main

type LRUCache struct {
    // Your code here
}

func Constructor(capacity int) LRUCache { /* ... */ }
func (this *LRUCache) Get(key int) int { /* ... */ }
func (this *LRUCache) Put(key int, value int)  { /* ... */ }`,
        mainFunction: `package main
import "fmt"

// Paste the LRUCache implementation here

func main() {
	cache := Constructor(2)
	cache.Put(1, 1)
	cache.Put(2, 2)
	fmt.Println(cache.Get(1))    // returns 1
	cache.Put(3, 3)    // evicts key 2
	fmt.Println(cache.Get(2))    // returns -1 (not found)
}`,
        expectedOutput: `1
-1`
    },
     {
        title: "Group Anagrams",
        difficulty: "Hard",
        problemStatement: "Given a slice of strings, group the anagrams together.",
        relevantTopics: ["Maps", "Sorting"],
        functionToImplement: `package main

import "sort"

// groupAnagrams groups anagrams together.
func groupAnagrams(strs []string) [][]string {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the groupAnagrams function here

func main() {
	fmt.Println(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))
}`,
        expectedOutput: `[[eat tea ate] [tan nat] [bat]]`
    },
     {
        title: "Jump Game II",
        difficulty: "Hard",
        problemStatement: "You have a slice of non-negative integers. You are initially at the first index. Each element represents the maximum jump length. Your goal is to reach the last index in the minimum number of jumps.",
        relevantTopics: ["Greedy Algorithms"],
        functionToImplement: `package main

// jump finds the minimum number of jumps.
func jump(nums []int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the jump function here

func main() {
	fmt.Println(jump([]int{2, 3, 1, 1, 4}))
}`,
        expectedOutput: `2`
    },
    {
        title: "Longest Common Prefix",
        difficulty: "Hard",
        problemStatement: "Write a function to find the longest common prefix among a set of strings.",
        relevantTopics: ["String Manipulation", "Comparison"],
        functionToImplement: `package main

// longestCommonPrefix finds the longest common prefix.
func longestCommonPrefix(strs []string) string {
	// Your code here
	return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste the longestCommonPrefix function here

func main() {
	fmt.Println(longestCommonPrefix([]string{"flower", "flow", "flight"}))
}`,
        expectedOutput: `fl`
    },
    {
        title: "Container With Most Water",
        difficulty: "Hard",
        problemStatement: "Given a slice of non-negative integers representing the heights of vertical lines, find two lines that, together with the x-axis, form a container that holds the most water.",
        relevantTopics: ["Slices", "Two Pointers Algorithm"],
        functionToImplement: `package main

// maxArea finds the container with the most water.
func maxArea(height []int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the maxArea function here

func main() {
	fmt.Println(maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7}))
}`,
        expectedOutput: `49`
    },


    // =================================================================
    // =                    Very Hard Challenges (20)                  =
    // =================================================================
    {
        title: "A* Algorithm",
        difficulty: "Very Hard",
        problemStatement: "Implement the A* search algorithm to find the optimal path in a graph, considering the path cost and a heuristic.",
        relevantTopics: ["Heuristic Search Algorithms", "Data Structures (Priority Queue)"],
        functionToImplement: `package main

// aStarSearch implements the A* algorithm.
func aStarSearch(graph map[string]map[string]int, start, goal string, heuristic map[string]int) []string {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the aStarSearch function here

func main() {
	// Define the graph and heuristic here
	// fmt.Println(aStarSearch(graph, "S", "G", heuristic))
}`,
        expectedOutput: `[S A D G]`
    },
    {
        title: "Traveling Salesman Problem",
        difficulty: "Very Hard",
        problemStatement: "Find the shortest possible route that visits each city exactly once and returns to the origin city. This is an NP-hard challenge, so an approximate solution is acceptable.",
        relevantTopics: ["Approximation Algorithms", "Recursion with Memoization"],
        functionToImplement: `package main

// tsp solves the Traveling Salesman Problem.
func tsp(dist [][]int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the tsp function here

func main() {
	dist := [][]int{{0, 10, 15, 20}, {10, 0, 35, 25}, {15, 35, 0, 30}, {20, 25, 30, 0}}
	fmt.Println(tsp(dist))
}`,
        expectedOutput: `80`
    },
    {
        title: "Fenwick Tree (Binary Indexed Tree)",
        difficulty: "Very Hard",
        problemStatement: "Implement a Fenwick Tree to efficiently support point updates and range sum queries (O(log n)).",
        relevantTopics: ["Advanced Data Structures", "Bitwise Operations"],
        functionToImplement: `package main

type FenwickTree struct {
    // Your code here
}

func NewFenwickTree(size int) *FenwickTree { /* ... */ }
func (ft *FenwickTree) Update(index, delta int) { /* ... */ }
func (ft *FenwickTree) Query(index int) int { /* ... */ }`,
        mainFunction: `package main
import "fmt"

// Paste the FenwickTree implementation here

func main() {
	// Test the tree here
}`,
        expectedOutput: `(Correct sums after updates)`
    },
    {
        title: "Turing Machine Simulator",
        difficulty: "Very Hard",
        problemStatement: "Write a program that simulates the operation of a simple Turing machine.",
        relevantTopics: ["Theory of Computation", "Simulation", "State Management"],
        functionToImplement: `package main

// turingMachine simulates a Turing machine.
func turingMachine(tape []int, rules map[string]string) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the turingMachine function here

func main() {
	// Define the tape and rules and test them here
}`,
        expectedOutput: `(Final tape state)`
    },
    {
        title: "Fast Fourier Transform (FFT)",
        difficulty: "Very Hard",
        problemStatement: "Implement the Fast Fourier Transform algorithm to multiply large polynomials.",
        relevantTopics: ["Advanced Algorithms", "Complex Numbers"],
        functionToImplement: `package main

import "math/cmplx"

// fft implements the Fast Fourier Transform.
func fft(a []complex128) []complex128 {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the fft function here

func main() {
	// Test the algorithm here
}`,
        expectedOutput: `(Correct FFT results)`
    },
    {
        title: "Max Flow Min Cut",
        difficulty: "Very Hard",
        problemStatement: "Implement the Ford-Fulkerson algorithm to solve the max flow problem in a network.",
        relevantTopics: ["Graph Algorithms", "Ford-Fulkerson Algorithm", "Depth-First Search (DFS)"],
        functionToImplement: `package main

// maxFlow finds the maximum flow in a network.
func maxFlow(graph [][]int, source, sink int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the maxFlow function here

func main() {
	graph := [][]int{/* ... define graph ... */}
	fmt.Println(maxFlow(graph, 0, 5))
}`,
        expectedOutput: `(Correct max flow value)`
    },
    {
        title: "Union-Find Data Structure",
        difficulty: "Very Hard",
        problemStatement: "Implement a Union-Find data structure with path compression and union by rank optimizations.",
        relevantTopics: ["Advanced Data Structures", "Algorithms"],
        functionToImplement: `package main

type UnionFind struct {
    // Your code here
}

func NewUnionFind(size int) *UnionFind { /* ... */ }
func (uf *UnionFind) Find(i int) int { /* ... */ }
func (uf *UnionFind) Union(i, j int) { /* ... */ }`,
        mainFunction: `package main
import "fmt"

// Paste the UnionFind implementation here

func main() {
	// Test the structure here
}`,
        expectedOutput: `(Correct set representatives after unions)`
    },
    {
        title: "Vertex Cover Problem",
        difficulty: "Very Hard",
        problemStatement: "Find the smallest set of vertices in a graph such that every edge is incident to at least one vertex in the set. This is an NP-hard problem; find an approximate solution.",
        relevantTopics: ["Graph Algorithms", "Approximation Algorithms"],
        functionToImplement: `package main

// vertexCover finds an approximate vertex cover.
func vertexCover(graph map[int][]int) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the vertexCover function here

func main() {
	// Define and test the graph here
}`,
        expectedOutput: `(A valid vertex cover)`
    },
    {
        title: "Markdown to HTML Converter",
        difficulty: "Very Hard",
        problemStatement: "Write a program that converts basic Markdown syntax (like # for headers, * for italics, ** for bold) to HTML.",
        relevantTopics: ["String Parsing", "Regular Expressions"],
        functionToImplement: `package main

// markdownToHTML converts Markdown to HTML.
func markdownToHTML(markdown string) string {
	// Your code here
	return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste the markdownToHTML function here

func main() {
	md := "# Title\n\n**Bold** and *italic*."
	fmt.Println(markdownToHTML(md))
}`,
        expectedOutput: `<h1>Title</h1><p><b>Bold</b> and <i>italic</i>.</p>`
    },
    {
        title: "Mini LISP Interpreter",
        difficulty: "Very Hard",
        problemStatement: "Write an interpreter that can evaluate basic LISP expressions, like (+ 1 2).",
        relevantTopics: ["Compiler Design", "Parsing", "Evaluation", "Recursion"],
        functionToImplement: `package main

// evalLisp evaluates a LISP expression.
func evalLisp(expression string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the evalLisp function here

func main() {
	fmt.Println(evalLisp("(+ 1 (* 2 3))"))
}`,
        expectedOutput: `7`
    },
    {
        title: "Suffix Tree",
        difficulty: "Very Hard",
        problemStatement: "Construct a suffix tree for a given string. This structure is very useful in many string problems.",
        relevantTopics: ["Advanced Data Structures", "String Algorithms (Ukkonen's algorithm)"],
        functionToImplement: `package main

type SuffixNode struct { /* ... */ }

// buildSuffixTree builds a suffix tree.
func buildSuffixTree(s string) *SuffixNode {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the suffix tree implementation here

func main() {
	// Test the construction here
}`,
        expectedOutput: `(A correctly constructed suffix tree)`
    },
    {
        title: "Longest Common Subsequence",
        difficulty: "Very Hard",
        problemStatement: "Find the length of the longest common subsequence between two strings.",
        relevantTopics: ["Dynamic Programming"],
        functionToImplement: `package main

// lcs finds the length of the longest common subsequence.
func lcs(text1, text2 string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the lcs function here

func main() {
	fmt.Println(lcs("abcde", "ace"))
}`,
        expectedOutput: `3`
    },
    {
        title: "Coin Change Problem",
        difficulty: "Very Hard",
        problemStatement: "Given a set of coin denominations and a total amount, find the minimum number of coins needed to make up that amount.",
        relevantTopics: ["Dynamic Programming"],
        functionToImplement: `package main

// coinChange solves the coin change problem.
func coinChange(coins []int, amount int) int {
	// Your code here
	return -1
}`,
        mainFunction: `package main
import "fmt"

// Paste the coinChange function here

func main() {
	fmt.Println(coinChange([]int{1, 2, 5}, 11))
}`,
        expectedOutput: `3`
    },
    {
        title: "Implement Trie (Prefix Tree)",
        difficulty: "Very Hard",
        problemStatement: "Design and implement a Trie data structure that supports insert, search, and startsWith operations.",
        relevantTopics: ["Advanced Data Structures (Trie/Prefix Tree)"],
        functionToImplement: `package main

type TrieNode struct { /* ... */ }
type Trie struct { /* ... */ }

func Constructor() Trie { /* ... */ }
func (this *Trie) Insert(word string)  { /* ... */ }
func (this *Trie) Search(word string) bool { /* ... */ }
func (this *Trie) StartsWith(prefix string) bool { /* ... */ }`,
        mainFunction: `package main
import "fmt"

// Paste the Trie implementation here

func main() {
	trie := Constructor()
	trie.Insert("apple")
	fmt.Println(trie.Search("apple"))   // true
	fmt.Println(trie.Search("app"))     // false
	fmt.Println(trie.StartsWith("app")) // true
}`,
        expectedOutput: `true
false
true`
    },
     {
        title: "Dijkstra's Algorithm",
        difficulty: "Very Hard",
        problemStatement: "Implement Dijkstra's algorithm to find the shortest paths between a starting node and all other nodes in a weighted graph.",
        relevantTopics: ["Graph Algorithms", "Data Structures (Priority Queue)"],
        functionToImplement: `package main

// dijkstra implements Dijkstra's algorithm.
func dijkstra(graph map[string]map[string]int, startNode string) map[string]int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the dijkstra function here

func main() {
	graph := map[string]map[string]int{
		"A": {"B": 1, "C": 4},
		"B": {"A": 1, "C": 2, "D": 5},
		"C": {"A": 4, "B": 2, "D": 1},
		"D": {"B": 5, "C": 1},
	}
	distances := dijkstra(graph, "A")
	fmt.Println(distances)
}`,
        expectedOutput: `map[A:0 B:1 C:3 D:4]`
    },
    {
        title: "Simple Text Editor",
        difficulty: "Very Hard",
        problemStatement: "Design a text editor that supports operations like add, delete, undo, and redo.",
        relevantTopics: ["Data Structures (Stack, Gap Buffer)", "System Design"],
        functionToImplement: `package main

type TextEditor struct {
    // Your code here
}

func (te *TextEditor) Add(text string) {}
func (te *TextEditor) Delete(count int) {}
func (te *TextEditor) Undo() {}
func (te *TextEditor) Redo() {}`,
        mainFunction: `package main
import "fmt"

// Paste the TextEditor implementation here

func main() {
	// Test the editor here
}`,
        expectedOutput: `(Correct text state after operations)`
    },
    {
        title: "Matrix Multiplication (Strassen's Algorithm)",
        difficulty: "Very Hard",
        problemStatement: "Implement Strassen's algorithm to multiply two square matrices more efficiently than the traditional method.",
        relevantTopics: ["Advanced Algorithms (Divide and Conquer)"],
        functionToImplement: `package main

// strassenMultiply multiplies two matrices using Strassen's algorithm.
func strassenMultiply(A, B [][]int) [][]int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the strassenMultiply function here

func main() {
	// Test the algorithm here
}`,
        expectedOutput: `(Correct matrix product)`
    },
    {
        title: "Minimum Spanning Tree",
        difficulty: "Very Hard",
        problemStatement: "Implement Prim's or Kruskal's algorithm to find the minimum spanning tree of a connected, weighted graph.",
        relevantTopics: ["Graph Algorithms", "Data Structures (Union-Find, Priority Queue)"],
        functionToImplement: `package main

// primMST finds the minimum spanning tree using Prim's algorithm.
func primMST(graph [][]int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the primMST function here

func main() {
	// Define and test the graph here
}`,
        expectedOutput: `(Correct minimum spanning tree weight)`
    },
    {
        title: "In-Memory File System",
        difficulty: "Very Hard",
        problemStatement: "Design and implement a simple file system that operates entirely in memory and supports commands like `mkdir`, `ls`, `addContentToFile`, and `cat`.",
        relevantTopics: ["System Design", "Data Structures (Tree, Trie)"],
        functionToImplement: `package main

type FileSystem struct {
    // Your code here
}

func Constructor() FileSystem { /* ... */ }
func (fs *FileSystem) Ls(path string) []string { /* ... */ }
func (fs *FileSystem) Mkdir(path string) { /* ... */ }
func (fs *FileSystem) AddContentToFile(filePath string, content string) { /* ... */ }
func (fs *FileSystem) Cat(filePath string) string { /* ... */ }`,
        mainFunction: `package main
import "fmt"

// Paste the FileSystem implementation here

func main() {
	fs := Constructor()
	fs.Mkdir("/a/b/c")
	fs.AddContentToFile("/a/b/c/d", "hello")
	fmt.Println(fs.Ls("/a/b"))
	fmt.Println(fs.Cat("/a/b/c/d"))
}`,
        expectedOutput: `[c]
hello`
    },
    {
        title: "Concurrent Task Scheduler",
        difficulty: "Very Hard",
        problemStatement: "Design and implement a task scheduler that can run a limited number of tasks concurrently. It must be able to add new tasks to a queue and execute them when a worker is available.",
        relevantTopics: ["Concurrency", "Channels", "Goroutines", "sync.WaitGroup"],
        functionToImplement: `package main

type TaskScheduler struct {
    // Your code here
}

func NewTaskScheduler(concurrency int) *TaskScheduler { /* ... */ }
func (ts *TaskScheduler) AddTask(task func()) { /* ... */ }
func (ts *TaskScheduler) Wait() { /* ... */ }`,
        mainFunction: `package main
import (
	"fmt"
	"time"
)

// Paste the TaskScheduler implementation here

func main() {
	scheduler := NewTaskScheduler(2) // 2 workers
	for i := 0; i < 5; i++ {
		taskId := i
		scheduler.AddTask(func() {
			fmt.Printf("Starting task %d\n", taskId)
			time.Sleep(time.Second)
			fmt.Printf("Finished task %d\n", taskId)
		})
	}
	scheduler.Wait()
}`,
        expectedOutput: `(Tasks executed concurrently with a limit of 2)`
    },
    // =================================================================
    // =               NEW CHALLENGES (12 Added)                       =
    // =================================================================
    {
        title: "Implement Set Data Structure",
        difficulty: "Medium",
        problemStatement: "Implement a Set data structure for integers that supports Add, Remove, and Contains operations in O(1) time complexity on average.",
        relevantTopics: ["Data Structures", "Maps"],
        functionToImplement: `package main

type IntSet struct {
    elements map[int]bool
}

func NewIntSet() *IntSet {
    // Your code here
    return &IntSet{elements: make(map[int]bool)}
}

func (s *IntSet) Add(element int) {
    // Your code here
}

func (s *IntSet) Remove(element int) {
    // Your code here
}

func (s *IntSet) Contains(element int) bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import "fmt"

// Paste the IntSet implementation here

func main() {
    set := NewIntSet()
    set.Add(1)
    set.Add(2)
    fmt.Println(set.Contains(1)) // true
    set.Remove(1)
    fmt.Println(set.Contains(1)) // false
    fmt.Println(set.Contains(2)) // true
}`,
        expectedOutput: `true
false
true`
    },
    {
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
        problemStatement: "Write a function to determine if a given binary tree is a valid Binary Search Tree (BST).",
        relevantTopics: ["Data Structures (Binary Tree)", "Recursion"],
        functionToImplement: `package main

import "math"

type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

// isValidBST checks if a binary tree is a valid BST.
func isValidBST(root *TreeNode) bool {
	// Your code here
	return false
}`,
        mainFunction: `package main
import "fmt"

// Paste TreeNode and isValidBST implementation here

func main() {
    // Valid BST
    tree1 := &TreeNode{Val: 2, Left: &TreeNode{Val: 1}, Right: &TreeNode{Val: 3}}
    fmt.Println(isValidBST(tree1))

    // Invalid BST
    tree2 := &TreeNode{Val: 5, Left: &TreeNode{Val: 1}, Right: &TreeNode{Val: 4, Left: &TreeNode{Val: 3}, Right: &TreeNode{Val: 6}}}
    fmt.Println(isValidBST(tree2))
}`,
        expectedOutput: `true
false`
    },
    {
        title: "Kth Largest Element in a Slice",
        difficulty: "Medium",
        problemStatement: "Find the k-th largest element in an unsorted slice. Note that it is the k-th largest element in the sorted order, not the k-th distinct element.",
        relevantTopics: ["Sorting", "Slices"],
        functionToImplement: `package main

import "sort"

// findKthLargest finds the kth largest element.
func findKthLargest(nums []int, k int) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the findKthLargest function here

func main() {
    fmt.Println(findKthLargest([]int{3,2,1,5,6,4}, 2))
}`,
        expectedOutput: `5`
    },
    {
        title: "Roman to Integer",
        difficulty: "Medium",
        problemStatement: "Write a function to convert a Roman numeral string to an integer.",
        relevantTopics: ["Maps", "String Manipulation"],
        functionToImplement: `package main

// romanToInt converts a Roman numeral to an integer.
func romanToInt(s string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the romanToInt function here

func main() {
    fmt.Println(romanToInt("III"))
    fmt.Println(romanToInt("LVIII"))
    fmt.Println(romanToInt("MCMXCIV"))
}`,
        expectedOutput: `3
58
1994`
    },
    {
        title: "Implement a Thread Pool",
        difficulty: "Hard",
        problemStatement: "Implement a thread pool that manages a fixed number of worker goroutines to execute tasks from a queue.",
        relevantTopics: ["Concurrency", "Goroutines", "Channels"],
        functionToImplement: `package main

type Task func()

type Pool struct {
    taskQueue chan Task
    workerCount int
}

func NewPool(workers int) *Pool {
    // Your code here
    return nil
}

func (p *Pool) Start() {
    // Your code here
}

func (p *Pool) AddTask(task Task) {
    // Your code here
}`,
        mainFunction: `package main
import (
    "fmt"
    "time"
)
// Paste the Pool implementation here

func main() {
    pool := NewPool(3)
    pool.Start()
    for i := 0; i < 10; i++ {
        taskId := i
        pool.AddTask(func() {
            fmt.Printf("Processing task %d\\n", taskId)
            time.Sleep(500 * time.Millisecond)
        })
    }
    time.Sleep(4 * time.Second) // Wait for tasks to be processed
}`,
        expectedOutput: `(Tasks processed by 3 workers)`
    },
    {
        title: "Find All Anagrams in a String",
        difficulty: "Hard",
        problemStatement: "Given a string `s` and a non-empty string `p`, find all the start indices of `p`'s anagrams in `s`.",
        relevantTopics: ["Sliding Window Algorithm", "Maps"],
        functionToImplement: `package main

// findAnagrams finds all start indices of p's anagrams in s.
func findAnagrams(s string, p string) []int {
	// Your code here
	return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the findAnagrams function here

func main() {
    fmt.Println(findAnagrams("cbaebabacd", "abc"))
}`,
        expectedOutput: `[0 6]`
    },
    {
        title: "Implement a Rate Limiter",
        difficulty: "Hard",
        problemStatement: "Design a rate limiter that limits the number of requests a user can make in a given time window using the Token Bucket algorithm.",
        relevantTopics: ["Concurrency", "Channels", "time package"],
        functionToImplement: `package main

import "time"

type RateLimiter struct {
    tokens chan struct{}
    fillInterval time.Duration
}

func NewRateLimiter(rate int, per time.Duration) *RateLimiter {
    // Your code here
    return nil
}

func (rl *RateLimiter) Allow() bool {
    // Your code here
    return false
}`,
        mainFunction: `package main
import (
    "fmt"
    "time"
)

// Paste the RateLimiter implementation here

func main() {
    limiter := NewRateLimiter(5, time.Second) // 5 requests per second
    for i := 0; i < 10; i++ {
        if limiter.Allow() {
            fmt.Println("Request", i, "allowed")
        } else {
            fmt.Println("Request", i, "blocked")
        }
        time.Sleep(100 * time.Millisecond)
    }
}`,
        expectedOutput: `(First 5 requests allowed, subsequent ones blocked until token is refilled)`
    },
    {
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Hard",
        problemStatement: "Given a string, find the length of the longest substring without repeating characters.",
        relevantTopics: ["Sliding Window Algorithm", "Maps"],
        functionToImplement: `package main

// lengthOfLongestSubstring finds the length of the longest substring without repeats.
func lengthOfLongestSubstring(s string) int {
	// Your code here
	return 0
}`,
        mainFunction: `package main
import "fmt"

// Paste the lengthOfLongestSubstring function here

func main() {
    fmt.Println(lengthOfLongestSubstring("abcabcbb")) // "abc"
    fmt.Println(lengthOfLongestSubstring("bbbbb"))    // "b"
    fmt.Println(lengthOfLongestSubstring("pwwkew"))   // "wke"
}`,
        expectedOutput: `3
1
3`
    },
    {
        title: "Implement a Simple Blockchain",
        difficulty: "Very Hard",
        problemStatement: "Implement a basic blockchain. Each block should have an index, timestamp, data, hash, and the hash of the previous block. The hash should be a SHA256 of the block's contents.",
        relevantTopics: ["Data Structures", "Cryptography (`crypto/sha256`)"],
        functionToImplement: `package main

import (
    "crypto/sha256"
    "time"
)

type Block struct {
    // Your struct fields here
}

func NewBlock(data string, prevBlockHash []byte) *Block {
    // Your code here
    return nil
}

type Blockchain struct {
    blocks []*Block
}

func NewBlockchain() *Blockchain {
    // Your code here
    return nil
}`,
        mainFunction: `package main
import "fmt"

// Paste the Block and Blockchain implementations here

func main() {
    bc := NewBlockchain()
    bc.AddBlock("Send 1 BTC to Ivan")
    bc.AddBlock("Send 2 more BTC to Ivan")

    for _, block := range bc.blocks {
        fmt.Printf("Prev. hash: %x\\n", block.PrevBlockHash)
        fmt.Printf("Data: %s\\n", block.Data)
        fmt.Printf("Hash: %x\\n\\n", block.Hash)
    }
}`,
        expectedOutput: `(Blockchain structure printed)`
    },
    {
        title: "Concurrent Web Crawler",
        difficulty: "Very Hard",
        problemStatement: "Write a web crawler that fetches URLs concurrently, finds new URLs on the pages, and crawls them, while avoiding crawling the same URL twice.",
        relevantTopics: ["Concurrency", "Goroutines", "Channels", "Maps", "net/http"],
        functionToImplement: `package main

import (
    "fmt"
    "sync"
)

type SafeURLMap struct {
    v   map[string]bool
    mux sync.Mutex
}

func (c *SafeURLMap) CheckAndSet(key string) bool {
    // Your code here
    return false
}

// Crawl uses findLinks to recursively crawl pages
// starting with url, to a maximum of depth.
func Crawl(url string, depth int, fetched *SafeURLMap) {
	// Your code here
}`,
        mainFunction: `package main
import "fmt"

// Paste Crawl and SafeURLMap implementations here

func main() {
    fetched := &SafeURLMap{v: make(map[string]bool)}
    // Note: This requires a mock fetcher to work in a playground.
    // Crawl("http://golang.org/", 4, fetched)
    fmt.Println("Web crawler logic would execute here.")
}`,
        expectedOutput: `(List of fetched URLs)`
    },
    {
        title: "Build a Simple TCP Server",
        difficulty: "Very Hard",
        problemStatement: "Write a simple TCP server that listens on a port, accepts client connections, and echoes back any message it receives from the client.",
        relevantTopics: ["Networking (`net` package)", "Concurrency", "Goroutines"],
        functionToImplement: `package main

import (
    "net"
    "log"
)

func handleConnection(conn net.Conn) {
    // Your code here
}

func runServer() {
	// Your code here
}`,
        mainFunction: `package main

// Paste handleConnection and runServer here

func main() {
    // To test this, you would run the program and then connect with a client
    // like 'telnet localhost 8080' or another Go program.
    // runServer()
}`,
        expectedOutput: `(Server listens and echoes client messages)`
    },
    {
        title: "Huffman Coding",
        difficulty: "Very Hard",
        problemStatement: "Implement the Huffman coding algorithm for data compression. Create functions to build the Huffman tree, generate codes, encode a string, and decode it.",
        relevantTopics: ["Algorithms", "Data Structures (Binary Tree, Priority Queue)"],
        functionToImplement: `package main

// HuffmanNode represents a node in the Huffman tree.
type HuffmanNode struct {
    // Your struct fields
}

// BuildHuffmanTree builds the Huffman tree from text.
func BuildHuffmanTree(text string) *HuffmanNode {
    // Your code here
    return nil
}

// Encode uses the Huffman tree to compress text.
func Encode(text string, tree *HuffmanNode) string {
    // Your code here
    return ""
}`,
        mainFunction: `package main
import "fmt"

// Paste HuffmanNode and related function implementations here

func main() {
    text := "this is an example for huffman encoding"
    tree := BuildHuffmanTree(text)
    encodedString := Encode(text, tree)
    fmt.Printf("Original size: %d, Encoded size: %d\\n", len(text)*8, len(encodedString))
}`,
        expectedOutput: `(Size comparison showing compression)`
    }
];

window.globalData.challenges = challenges;