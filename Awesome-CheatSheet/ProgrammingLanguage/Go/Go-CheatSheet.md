# Go CheatSheet

```go
// 声明三个变量，皆为 bool 类型
var c, python, java bool

// 声明不同类型的变量，并且赋值
var i bool, j int = true, 2

// 复杂变量声明
var (
	ToBe   bool       = false
	MaxInt uint64     = 1<<64 - 1
	z      complex128 = cmplx.Sqrt(-5 + 12i)
)

// 短声明变量
c, python, java := true, false, "no!"
```
