package z01x

import "testing"

func TestPrintRune(t *testing.T) {
	PrintRune('A')
	PrintRune('\n')
}

func TestPrintStr(t *testing.T) {
	PrintStr("Hello, z01x!\n")
}

func TestPrintNbr(t *testing.T) {
	PrintNbr(42)
	PrintRune('\n')
	PrintNbr(-1337)
	PrintRune('\n')
}

func TestPrintNbrBase(t *testing.T) {
	PrintNbrBase(255, "01")
	PrintRune('\n')
	PrintNbrBase(255, "01234567")
	PrintRune('\n')
	PrintNbrBase(255, "0123456789ABCDEF")
	PrintRune('\n')
}
