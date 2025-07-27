package z01x

import (
	"errors"
	"os"
)

// PrintRune يطبع رمزًا Unicode إلى stdout
func PrintRune(r rune) error {
	_, err := os.Stdout.Write([]byte(string(r)))
	return err
}

// PrintStr تطبع سلسلة نصية إلى stdout
func PrintStr(s string) error {
	_, err := os.Stdout.Write([]byte(s))
	return err
}

// PrintNbr تطبع رقمًا صحيحًا
func PrintNbr(n int) error {
	if n == 0 {
		return PrintRune('0')
	}
	if n < 0 {
		PrintRune('-')
		n = -n
	}
	var digits []rune
	for n > 0 {
		digits = append([]rune{rune(n%10) + '0'}, digits...)
		n /= 10
	}
	for _, d := range digits {
		PrintRune(d)
	}
	return nil
}

// PrintNbrBase تطبع رقمًا بأي قاعدة (مثل hex, binary, ...)
func PrintNbrBase(n int, base string) error {
	if len(base) < 2 {
		return errors.New("base must have at least 2 characters")
	}
	baseMap := make(map[rune]bool)
	for _, r := range base {
		if baseMap[r] {
			return errors.New("base must not contain duplicate characters")
		}
		baseMap[r] = true
	}
	b := len(base)
	if n == 0 {
		return PrintRune(rune(base[0]))
	}
	if n < 0 {
		PrintRune('-')
		n = -n
	}
	var digits []rune
	for n > 0 {
		digits = append([]rune{rune(base[n%b])}, digits...)
		n /= b
	}
	for _, d := range digits {
		PrintRune(d)
	}
	return nil
}
