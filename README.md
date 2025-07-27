# z01x

مكتبة Go خفيفة الوزن للطباعة (بديلة z01 الأصلية)، تدعم:
- طباعة الرموز (rune)
- طباعة النصوص
- طباعة الأعداد بعدة قواعد

## الاستخدام

```go
import "github.com/username/z01x"

z01x.PrintRune('A')
z01x.PrintStr("Hello")
z01x.PrintNbr(123)
z01x.PrintNbrBase(255, "01") // binary
```

## التثبيت

```bash
go get github.com/username/z01x
```
