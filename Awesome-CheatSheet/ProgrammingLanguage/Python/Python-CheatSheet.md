[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

![](https://media.githubusercontent.com/media/wxyyxc1992/OSS/master/Cover/Coder-Essentials/Awesome-CheatSheet/ProgrammingLanguage/Python/Python-CheatSheet.jpg)

# Python 语法速览与实战清单

本文是对于 [现代 Python 开发：语法基础与工程实践](https://parg.co/Urh)的总结，更多 Python 相关资料参考 [Python 学习与实践资料索引](https://parg.co/Ur4)；本文参考了 [Python Crash Course - Cheat Sheets](https://parg.co/UrA)，[pysheeet](https://parg.co/Urd) 等。本文仅包含笔者在日常工作中经常使用的，并且认为较为关键的知识点与语法，如果想要进一步学习 Python 相关内容或者对于机器学习与数据挖掘方向感兴趣，可以参考[程序猿的数据科学与机器学习实战手册](https://parg.co/Ur0)。

# 基础语法

Python 是一门高阶、动态类型的多范式编程语言；定义 Python 文件的时候我们往往会先声明文件编码方式 :

```py
# 指定脚本调用方式
#!/usr/bin/env python
# 配置 utf-8 编码
# -*- coding: utf-8 -*-

# 配置其他编码
# -*- coding: <encoding-name> -*-

# Vim 中还可以使用如下方式
# vim:fileencoding=<encoding-name>
```

人生苦短，请用 Python，大量功能强大的语法糖的同时让很多时候 Python 代码看上去有点像伪代码。譬如我们用 Python 实现的简易的快排相较于 Java 会显得很短小精悍 :

```py
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) / 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

print quicksort([3,6,8,10,1,2,1])
# Prints "[1, 1, 2, 3, 6, 8, 10]"
```

## 控制台交互

可以根据 `__name__` 关键字来判断是否是直接使用 python 命令执行某个脚本，还是外部引用；Google 开源的 fire 也是不错的快速将某个类封装为命令行工具的框架：

```py
import fire

class Calculator(object):
  """A simple calculator class."""

  def double(self, number):
    return 2 * number

if __name__ == '__main__':
  fire.Fire(Calculator)

# python calculator.py double 10  # 20
# python calculator.py double --number=15  # 30
```

Python 2 中 print 是表达式，而 Python 3 中 print 是函数；如果希望在 Python 2 中将 print 以函数方式使用，则需要自定义引入 :

```py
from __future__ import print_function
```

我们也可以使用 pprint 来美化控制台输出内容：

```py
import pprint

stuff = ['spam', 'eggs', 'lumberjack', 'knights', 'ni']
pprint.pprint(stuff)

# 自定义参数
pp = pprint.PrettyPrinter(depth=6)
tup = ('spam', ('eggs', ('lumberjack', ('knights', ('ni', ('dead',('parrot', ('fresh fruit',))))))))
pp.pprint(tup)
```

## 模块

Python 中的模块(Module)即是 Python 源码文件，其可以导出类、函数与全局变量；当我们从某个模块导入变量时，函数名往往就是命名空间(Namespace)。而 Python 中的包（Package ）则是模块的文件夹，往往由 `__init__.py` 指明某个文件夹为包 :

```py
# 文件目录
someDir/
	main.py
	siblingModule.py

# siblingModule.py

def siblingModuleFun():
	print('Hello from siblingModuleFun')

def siblingModuleFunTwo():
	print('Hello from siblingModuleFunTwo')

import siblingModule
import siblingModule as sibMod

sibMod.siblingModuleFun()

from siblingModule import siblingModuleFun
siblingModuleFun()

try:
    # Import 'someModuleA' that is only available in Windows
    import someModuleA
except ImportError:
    try:
	    # Import 'someModuleB' that is only available in Linux
        import someModuleB
    except ImportError:
```

Package 可以为某个目录下所有的文件设置统一入口 :

```py
# 目录格式
someDir/
	main.py
	subModules/
		__init__.py
		subA.py
		subSubModules/
			__init__.py
			subSubA.py

# subA.py

def subAFun():
	print('Hello from subAFun')

def subAFunTwo():
	print('Hello from subAFunTwo')

# subSubA.py

def subSubAFun():
	print('Hello from subSubAFun')

def subSubAFunTwo():
	print('Hello from subSubAFunTwo')

# __init__.py from subDir

# Adds 'subAFun()' and 'subAFunTwo()' to the 'subDir' namespace
from .subA import *

# The following two import statement do the same thing, they add 'subSubAFun()' and 'subSubAFunTwo()' to the 'subDir' namespace. The first one assumes '__init__.py' is empty in 'subSubDir', and the second one, assumes '__init__.py' in 'subSubDir' contains 'from .subSubA import *'.

# Assumes '__init__.py' is empty in 'subSubDir'
# Adds 'subSubAFun()' and 'subSubAFunTwo()' to the 'subDir' namespace
from .subSubDir.subSubA import *

# Assumes '__init__.py' in 'subSubDir' has 'from .subSubA import *'
# Adds 'subSubAFun()' and 'subSubAFunTwo()' to the 'subDir' namespace
from .subSubDir import *
# __init__.py from subSubDir

# Adds 'subSubAFun()' and 'subSubAFunTwo()' to the 'subSubDir' namespace
from .subSubA import *

# main.py

import subDir

subDir.subAFun() # Hello from subAFun
subDir.subAFunTwo() # Hello from subAFunTwo
subDir.subSubAFun() # Hello from subSubAFun
subDir.subSubAFunTwo() # Hello from subSubAFunTwo
```

# 表达式与控制流

## 条件选择

Python 中使用 if、elif 、 else 来进行基础的条件选择操作：

```py
if x < 0:
     x = 0
     print('Negative changed to zero')
 elif x == 0:
     print('Zero')
 else:
     print('More')
```

Python 同样支持 ternary conditional operator:

```py
a if condition else b
```

也可以使用 Tuple 来实现类似的效果：

```py
# test 需要返回 True 或者 False
(falseValue, trueValue)[test]

# 更安全的做法是进行强制判断
(falseValue, trueValue)[test == True]

# 或者使用 bool 类型转换函数
(falseValue, trueValue)[bool(<expression>)]
```

## 循环遍历

for-in 可以用来遍历数组与字典：

```py
words = ['cat', 'window', 'defenestrate']

for w in words:
    print(w, len(w))

# 使用数组访问操作符，能够迅速地生成数组的副本
for w in words[:]:
    if len(w) > 6:
        words.insert(0, w)

# words -> ['defenestrate', 'cat', 'window', 'defenestrate']
```

如果我们希望使用数字序列进行遍历，可以使用 Python 内置的 `range` 函数：

```py
a = ['Mary', 'had', 'a', 'little', 'lamb']

for i in range(len(a)):
    print(i, a[i])
```

# 基本数据类型

可以使用内建函数进行强制类型转换（Casting ） :

```py
int(str)
float(str)
str(int)
str(float)
```

isinstance 方法用于判断某个对象是否源自某个类 :

```py
ex = 10

# 判断是否为 int 类型
isinstance(ex,int)

# isinstance 也支持同时判断多个类型
# 如下代码判断是否为数组
def is_array(var):
    return isinstance(var, (list, tuple))
```

## Number: 数值类型

```py
x = 3
print type(x) # Prints "<type 'int'>"
print x       # Prints "3"
print x + 1   # Addition; prints "4"
print x - 1   # Subtraction; prints "2"
print x * 2   # Multiplication; prints "6"
print x ** 2  # Exponentiation; prints "9"
x += 1
print x  # Prints "4"
x *= 2
print x  # Prints "8"
y = 2.5
print type(y) # Prints "<type 'float'>"
print y, y + 1, y * 2, y ** 2 # Prints "2.5 3.5 5.0 6.25"
```

## 布尔类型

Python 提供了常见的逻辑操作符，不过需要注意的是 Python 中并没有使用 &&、|| 等，而是直接使用了英文单词。

```py
t = True
f = False
print type(t) # Prints "<type 'bool'>"
print t and f # Logical AND; prints "False"
print t or f  # Logical OR; prints "True"
print not t   # Logical NOT; prints "False"
print t != f  # Logical XOR; prints "True"
```

## String: 字符串

Python 2 中支持 Ascii 码的 str() 类型，独立的 unicode() 类型，没有 byte 类型；而 Python 3 中默认的字符串为 utf-8 类型，并且包含了 byte 与 bytearray 两个字节类型：

```py
type("Guido") # string type is str in python2
# <type 'str'>

# 使用 __future__ 中提供的模块来降级使用 Unicode
from __future__ import unicode_literals
type("Guido") # string type become unicode
# <type 'unicode'>
```

Python 字符串支持分片、模板字符串等常见操作 :

```py
var1 = 'Hello World!'
var2 = "Python Programming"

print "var1[0]: ", var1[0]
print "var2[1:5]: ", var2[1:5]
# var1[0]:  H
# var2[1:5]:  ytho

print "My name is %s and weight is %d kg!" % ('Zara', 21)
# My name is Zara and weight is 21 kg!
```

```py
str[0:4]
len(str)

string.replace("-", " ")
",".join(list)
"hi {0}".format('j')
str.find(",")
str.index(",")   # same, but raises IndexError
str.count(",")
str.split(",")

str.lower()
str.upper()
str.title()

str.lstrip()
str.rstrip()
str.strip()

str.islower()
```

```py
# 移除所有的特殊字符
re.sub('[^A-Za-z0-9]+', '', mystring)
```

如果需要判断是否包含某个子字符串，或者搜索某个字符串的下标 :

```py
# in 操作符可以判断字符串
if "blah" not in somestring:
    continue

# find 可以搜索下标
s = "This be a string"
if s.find("is") == -1:
    print "No 'is' here!"
else:
    print "Found 'is' in the string."
```

## Regex: 正则表达式

```py
import re

# 判断是否匹配
re.match(r'^[aeiou]', str)

# 以第二个参数指定的字符替换原字符串中内容
re.sub(r'^[aeiou]', '?', str)
re.sub(r'(xyz)', r'\1', str)

# 编译生成独立的正则表达式对象
expr = re.compile(r'^...$')
expr.match(...)
expr.sub(...)
```

下面列举了常见的表达式使用场景 :

```py
# 检测是否为 HTML 标签
re.search('<[^/>][^>]*>', '<a href="#label">')

# 常见的用户名密码
re.match('^[a-zA-Z0-9-_]{3,16}$', 'Foo') is not None
re.match('^\w|[-_]{3,16}$', 'Foo') is not None

# Email
re.match('^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$', 'hello.world@example.com')

# Url
exp = re.compile(r'''^(https?:\/\/)? # match http or https
                ([\da-z\.-]+)            # match domain
                \.([a-z\.]{2,6})         # match domain
                ([\/\w \.-]*)\/?$        # match api or file
                ''', re.X)
exp.match('www.google.com')

# IP 地址
exp = re.compile(r'''^(?:(?:25[0-5]
                     |2[0-4][0-9]
                     |[1]?[0-9][0-9]?)\.){3}
                     (?:25[0-5]
                     |2[0-4][0-9]
                     |[1]?[0-9][0-9]?)$''', re.X)
exp.match('192.168.1.1')
```

# 集合类型

## List: 列表

### Operation: 创建增删

list 是基础的序列类型：

```py
l = []
l = list()

# 使用字符串的 split 方法，可以将字符串转化为列表
str.split(".")

# 如果需要将数组拼装为字符串，则可以使用 join
list1 = ['1', '2', '3']
str1 = ''.join(list1)

# 如果是数值数组，则需要先进行转换
list1 = [1, 2, 3]
str1 = ''.join(str(e) for e in list1)
```

可以使用 append 与 extend 向数组中插入元素或者进行数组连接

```py
x = [1, 2, 3]

x.append([4, 5]) # [1, 2, 3, [4, 5]]

x.extend([4, 5]) # [1, 2, 3, 4, 5]，注意 extend 返回值为 None
```

可以使用 pop、slices 、 del、remove 等移除列表中元素：

```py
myList = [10,20,30,40,50]

# 弹出第二个元素
myList.pop(1) # 20
# myList: myList.pop(1)

# 如果不加任何参数，则默认弹出最后一个元素
myList.pop()

# 使用 slices 来删除某个元素
a = [  1, 2, 3, 4, 5, 6 ]
index = 3 # Only Positive index
a = a[:index] + a[index+1 :]

# 根据下标删除元素
myList = [10,20,30,40,50]
rmovIndxNo = 3
del myList[rmovIndxNo] # myList: [10, 20, 30, 50]

# 使用 remove 方法，直接根据元素删除
letters = ["a", "b", "c", "d", "e"]
numbers.remove(numbers[1])
print(*letters) # used a * to make it unpack you don't have to
```

### Iteration: 索引遍历

你可以使用基本的 for 循环来遍历数组中的元素，就像下面介个样纸 :

```py
animals = ['cat', 'dog', 'monkey']
for animal in animals:
    print animal
# Prints "cat", "dog", "monkey", each on its own line.
```

如果你在循环的同时也希望能够获取到当前元素下标，可以使用 enumerate 函数 :

```py
animals = ['cat', 'dog', 'monkey']
for idx, animal in enumerate(animals):
    print '#%d: %s' % (idx + 1, animal)
# Prints "#1: cat", "#2: dog", "#3: monkey", each on its own line
```

Python 也支持切片（Slices ） :

```py
nums = range(5)    # range is a built-in function that creates a list of integers
print nums         # Prints "[0, 1, 2, 3, 4]"
print nums[2:4]    # Get a slice from index 2 to 4 (exclusive); prints "[2, 3]"
print nums[2:]     # Get a slice from index 2 to the end; prints "[2, 3, 4]"
print nums[:2]     # Get a slice from the start to index 2 (exclusive); prints "[0, 1]"
print nums[:]      # Get a slice of the whole list; prints ["0, 1, 2, 3, 4]"
print nums[:-1]    # Slice indices can be negative; prints ["0, 1, 2, 3]"
nums[2:4] = [8, 9] # Assign a new sublist to a slice
print nums         # Prints "[0, 1, 8, 9, 4]"
```

### Comprehensions: 变换

Python 中同样可以使用 map、reduce 、 filter，map 用于变换数组 :

```py
# 使用 map 对数组中的每个元素计算平方
items = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, items))

# map 支持函数以数组方式连接使用
def multiply(x):
    return (x*x)
def add(x):
    return (x+x)

funcs = [multiply, add]
for i in range(5):
    value = list(map(lambda x: x(i), funcs))
    print(value)
```

reduce 用于进行归纳计算 :

```py
# reduce 将数组中的值进行归纳

from functools import reduce
product = reduce((lambda x, y: x * y), [1, 2, 3, 4])

# Output: 24
```

filter 则可以对数组进行过滤 :

```py
number_list = range(-5, 5)
less_than_zero = list(filter(lambda x: x < 0, number_list))
print(less_than_zero)

# Output: [-5, -4, -3, -2, -1]
```

## 字典类型

### 创建增删

```py
d = {'cat': 'cute', 'dog': 'furry'}  # 创建新的字典
print d['cat']       # 字典不支持点（Dot）运算符取值
```

如果需要合并两个或者多个字典类型：

```py
# python 3.5
z = {**x, **y}

# python 2.7
def merge_dicts(*dict_args):
    """
    Given any number of dicts, shallow copy and merge into a new dict,
    precedence goes to key value pairs in latter dicts.
    """
    result = {}
    for dictionary in dict_args:
        result.update(dictionary)
    return result
```

### 索引遍历

可以根据键来直接进行元素访问 :

```py
# Python 中对于访问不存在的键会抛出 KeyError 异常，需要先行判断或者使用 get
print 'cat' in d     # Check if a dictionary has a given key; prints "True"

# 如果直接使用 [] 来取值，需要先确定键的存在，否则会抛出异常
print d['monkey']  # KeyError: 'monkey' not a key of d

# 使用 get 函数则可以设置默认值
print d.get('monkey', 'N/A')  # Get an element with a default; prints "N/A"
print d.get('fish', 'N/A')    # Get an element with a default; prints "wet"


d.keys() # 使用 keys 方法可以获取所有的键
```

可以使用 for-in 来遍历数组 :

```py
# 遍历键
for key in d:

# 比前一种方式慢
for k in dict.keys(): ...

# 直接遍历值
for value in dict.itervalues(): ...

# Python 2.x 中遍历键值
for key, value in d.iteritems():

# Python 3.x 中遍历键值
for key, value in d.items():
```

## 其他序列类型

### 集合

```python
# Same as {"a", "b","c"}
normal_set = set(["a", "b","c"])

# Adding an element to normal set is fine
normal_set.add("d")

print("Normal Set")
print(normal_set)

# A frozen set
frozen_set = frozenset(["e", "f", "g"])

print("Frozen Set")
print(frozen_set)

# Uncommenting below line would cause error as
# we are trying to add element to a frozen set
# frozen_set.add("h")
```

### Tuple

```py
# 修改 Tuple 中的值
t = ('275', '54000', '0.0', '5000.0', '0.0')
lst = list(t)
lst[0] = '300'
t = tuple(lst)
```

### Enum: 枚举类型

```py
class Enum(set):
    def __getattr__(self, name):
        if name in self:
            return name
        raise AttributeError
```

# 函数

## 函数定义

Python 中的函数使用 def 关键字进行定义，譬如 :

```py
def sign(x):
    if x > 0:
        return 'positive'
    elif x < 0:
        return 'negative'
    else:
        return 'zero'


for x in [-1, 0, 1]:
    print sign(x)
# Prints "negative", "zero", "positive"
```

Python 支持运行时创建动态函数，也即是所谓的 lambda 函数：

```py
def f(x): return x**2

# 等价于
g = lambda x: x**2
```

lambda 表达式是 Python 函数式开发的重要基石，其方便实现 Partial Function 等模式；典型的 lambda 函数声明如下：

```python
lambda x: x**2 + 2*x - 5
```

典型的用法譬如自定义的 filter 函数中：

```python
mult3 = filter(lambda x: x % 3 == 0, [1, 2, 3, 4, 5, 6, 7, 8, 9])
```

```python
def filterfunc(x):
    return x % 3 == 0
mult3 = filter(filterfunc, [1, 2, 3, 4, 5, 6, 7, 8, 9])

mult3 = [x for x in [1, 2, 3, 4, 5, 6, 7, 8, 9] if x % 3 == 0]

range(3,10,3)
```

## 参数

### Option Arguments: 不定参数

```py
def example(a, b=None, *args, **kwargs):
  print a, b
  print args
  print kwargs

example(1, "var", 2, 3, word="hello")
# 1 var
# (2, 3)
# {'word': 'hello'}

a_tuple = (1, 2, 3, 4, 5)
a_dict = {"1":1, "2":2, "3":3}
example(1, "var", *a_tuple, **a_dict)
# 1 var
# (1, 2, 3, 4, 5)
# {'1': 1, '2': 2, '3': 3}
```

对于不定参数的调用，同样可以使用 `**` 运算符：

```py
func(**{'type':'Event'})
# 等价于
func(type='Event')
```

## 生成器

```py
def simple_generator_function():
    yield 1
    yield 2
    yield 3

for value in simple_generator_function():
    print(value)

# 输出结果
# 1
# 2
# 3
our_generator = simple_generator_function()
next(our_generator)
# 1
next(our_generator)
# 2
next(our_generator)
#3

# 生成器典型的使用场景譬如无限数组的迭代
def get_primes(number):
    while True:
        if is_prime(number):
            yield number
        number += 1
```

## 装饰器

装饰器是非常有用的设计模式 :

```py
# 简单装饰器

from functools import wraps
def decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print('wrap function')
        return func(*args, **kwargs)
    return wrapper

@decorator
def example(*a, **kw):
    pass

example.__name__  # attr of function preserve
# 'example'
# Decorator

# 带输入值的装饰器

from functools import wraps
def decorator_with_argument(val):
  def decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
      print "Val is {0}".format(val)
      return func(*args, **kwargs)
    return wrapper
  return decorator

@decorator_with_argument(10)
def example():
  print "This is example function."

example()
# Val is 10
# This is example function.

# 等价于

def example():
  print "This is example function."

example = decorator_with_argument(10)(example)
example()
# Val is 10
# This is example function.
```

# 类与对象

## 类定义

Python 中对于类的定义也很直接 :

```py
class Greeter(object):

    # Constructor
    def __init__(self, name):
        self.name = name  # Create an instance variable

    # Instance method
    def greet(self, loud=False):
        if loud:
            print 'HELLO, %s!' % self.name.upper()
        else:
            print 'Hello, %s' % self.name

g = Greeter('Fred')  # Construct an instance of the Greeter class
g.greet()            # Call an instance method; prints "Hello, Fred"
g.greet(loud=True)   # Call an instance method; prints "HELLO, FRED!"
```

### Managed Attributes: 受控属性

```py
# property、setter、deleter 可以用于复写点方法

class Example(object):
    def __init__(self, value):
       self._val = value
    @property
    def val(self):
        return self._val
    @val.setter
    def val(self, value):
        if not isintance(value, int):
            raise TypeError("Expected int")
        self._val = value
    @val.deleter
    def val(self):
        del self._val
    @property
    def square3(self):
        return 2**3

ex = Example(123)
ex.val = "str"
# Traceback (most recent call last):
#   File "", line 1, in
#   File "test.py", line 12, in val
#     raise TypeError("Expected int")
# TypeError: Expected int
```

### 类方法与静态方法

```py
class example(object):
  @classmethod
  def clsmethod(cls):
    print "I am classmethod"
  @staticmethod
  def stmethod():
    print "I am staticmethod"
  def instmethod(self):
    print "I am instancemethod"

ex = example()
ex.clsmethod()
# I am classmethod
ex.stmethod()
# I am staticmethod
ex.instmethod()
# I am instancemethod
example.clsmethod()
# I am classmethod
example.stmethod()
# I am staticmethod
example.instmethod()
# Traceback (most recent call last):
#   File "", line 1, in
# TypeError: unbound method instmethod() ...
```

## 对象

### 实例化

### 属性操作

Python 中对象的属性不同于字典键，可以使用点运算符取值，直接使用 in 判断会存在问题 :

```py
class A(object):
    @property
    def prop(self):
        return 3

a = A()
print "'prop' in a.__dict__ =", 'prop' in a.__dict__
print "hasattr(a, 'prop') =", hasattr(a, 'prop')
print "a.prop =", a.prop

# 'prop' in a.__dict__ = False
# hasattr(a, 'prop') = True
# a.prop = 3
```

建议使用 hasattr、getattr 、 setattr 这种方式对于对象属性进行操作 :

```py
class Example(object):
  def __init__(self):
    self.name = "ex"
  def printex(self):
    print "This is an example"


# Check object has attributes
# hasattr(obj, 'attr')
ex = Example()
hasattr(ex,"name")
# True
hasattr(ex,"printex")
# True
hasattr(ex,"print")
# False

# Get object attribute
# getattr(obj, 'attr')
getattr(ex,'name')
# 'ex'

# Set object attribute
# setattr(obj, 'attr', value)
setattr(ex,'name','example')
ex.name
# 'example'
```

## 类继承

```py
# 父类必须继承 object 或者其他父类
class BaseClass(object):
    def __init__(self, *args, **kwargs):
        pass

class ChildClass(BaseClass):
    def __init__(self, *args, **kwargs):
        super(ChildClass, self).__init__(*args, **kwargs)
```

```py
class Car(object):
    condition = "new"

    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg

class ElectricCar(Car):
    def __init__(self, battery_type, model, color, mpg):
        self.battery_type=battery_type
        super(ElectricCar, self).__init__(model, color, mpg)

car = ElectricCar('battery', 'ford', 'golden', 10)
print car.__dict__
```

# 异常与测试

## 异常处理

### try

```py
import sys

try:
    f = open('myfile.txt')
    s = f.readline()
    i = int(s.strip())
except OSError as err:
    print("OS error: {0}".format(err))
except ValueError:
    print("Could not convert data to an integer.")
except:
    print("Unexpected error:", sys.exc_info()[0])
    raise
```

```py
class B(Exception):
    pass

class C(B):
    pass

class D(C):
    pass

for cls in [B, C, D]:
    try:
        raise cls()
    except D:
        print("D")
    except C:
        print("C")
    except B:
        print("B")
```

### Context Manager - with

with 常用于打开或者关闭某些资源 :

```py
host = 'localhost'
port = 5566
with Socket(host, port) as s:
    while True:
        conn, addr = s.accept()
        msg = conn.recv(1024)
        print msg
        conn.send(msg)
        conn.close()
```

## 单元测试

```py
from __future__ import print_function

import unittest

def fib(n):
    return 1 if n<=2 else fib(n-1)+fib(n-2)

def setUpModule():
        print("setup module")
def tearDownModule():
        print("teardown module")

class TestFib(unittest.TestCase):

    def setUp(self):
        print("setUp")
        self.n = 10
    def tearDown(self):
        print("tearDown")
        del self.n
    @classmethod
    def setUpClass(cls):
        print("setUpClass")
    @classmethod
    def tearDownClass(cls):
        print("tearDownClass")
    def test_fib_assert_equal(self):
        self.assertEqual(fib(self.n), 55)
    def test_fib_assert_true(self):
        self.assertTrue(fib(self.n) == 55)

if __name__ == "__main__":
    unittest.main()
```

# 存储

## 文件读写

### 路径处理

Python 内置的 `__file__` 关键字会指向当前文件的相对路径，可以根据它来构造绝对路径，或者索引其他文件 :

```py
# 获取当前文件的相对目录
dir = os.path.dirname(__file__) # src\app

## once you're at the directory level you want, with the desired directory as the final path node:
dirname1 = os.path.basename(dir)
dirname2 = os.path.split(dir)[1] ## if you look at the documentation, this is exactly what os.path.basename does.

# 获取当前代码文件的绝对路径，abspath 会自动根据相对路径与当前工作空间进行路径补全
os.path.abspath(os.path.dirname(__file__)) # D:\WorkSpace\OWS\tool\ui-tool-svn\python\src\app

# 获取当前文件的真实路径
os.path.dirname(os.path.realpath(__file__)) # D:\WorkSpace\OWS\tool\ui-tool-svn\python\src\app

# 获取当前执行路径
os.getcwd()
```

可以使用 listdir、walk 、 glob 模块来进行文件枚举与检索：

```py
# 仅列举所有的文件
from os import listdir
from os.path import isfile, join
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

# 使用 walk 递归搜索
from os import walk

f = []
for (dirpath, dirnames, filenames) in walk(mypath):
    f.extend(filenames)
    break

# 使用 glob 进行复杂模式匹配
import glob
print(glob.glob("/home/adam/*.txt"))
# ['/home/adam/file1.txt', '/home/adam/file2.txt', .... ]
```

### 简单文件读写

```py
# 可以根据文件是否存在选择写入模式
mode = 'a' if os.path.exists(writepath) else 'w'

# 使用 with 方法能够自动处理异常
with open("file.dat",mode) as f:
    f.write(...)
    ...
    # 操作完毕之后记得关闭文件
    f.close()

# 读取文件内容
message = f.read()
```

## 复杂格式文件

### JSON

```py
import json

# Writing JSON data
with open('data.json', 'w') as f:
     json.dump(data, f)

# Reading data back
with open('data.json', 'r') as f:
     data = json.load(f)
```

### XML

我们可以使用 [lxml](http://lxml.de/parsing.html) 来解析与处理 XML 文件，本部分即对其常用操作进行介绍。lxml 支持从字符串或者文件中创建 Element 对象：

```py
from lxml import etree

# 可以从字符串开始构造
xml = '<a xmlns="test"><b xmlns="test"/></a>'
root = etree.fromstring(xml)
etree.tostring(root)
# b'<a xmlns="test"><b xmlns="test"/></a>'

# 也可以从某个文件开始构造
tree = etree.parse("doc/test.xml")

# 或者指定某个 baseURL
root = etree.fromstring(xml, base_url="http://where.it/is/from.xml")
```

其提供了迭代器以对所有元素进行遍历：

```py
# 遍历所有的节点
for tag in tree.iter():
    if not len(tag):
        print tag.keys() # 获取所有自定义属性
        print (tag.tag, tag.text) # text 即文本子元素值

# 获取 XPath
for e in root.iter():
    print tree.getpath(e)
```

lxml 支持以 XPath 查找元素，不过需要注意的是，XPath 查找的结果是数组，并且在包含命名空间的情况下，需要指定命名空间：

```py
root.xpath('//page/text/text()',ns={prefix:url})

# 可以使用 getparent 递归查找父元素
el.getparent()
```

lxml 提供了 insert、append 等方法进行元素操作：

```py
# append 方法默认追加到尾部
st = etree.Element("state", name="New Mexico")
co = etree.Element("county", name="Socorro")
st.append(co)

# insert 方法可以指定位置
node.insert(0, newKid)
```

### Excel

可以使用 [xlrd]() 来读取 Excel 文件，使用 [xlsxwriter](http://xlsxwriter.readthedocs.io/) 来写入与操作 Excel 文件。

```py
# 读取某个 Cell 的原始值
sh.cell(rx, col).value
```

```py
# 创建新的文件
workbook = xlsxwriter.Workbook(outputFile)
worksheet = workbook.add_worksheet()

# 设置从第 0 行开始写入
row = 0

# 遍历二维数组，并且将其写入到 Excel 中
for rowData in array:
    for col, data in enumerate(rowData):
        worksheet.write(row, col, data)
    row = row + 1

workbook.close()
```

## 文件系统

对于高级的文件操作，我们可以使用 Python 内置的 shutil

```py
# 递归删除 appName 下面的所有的文件夹
shutil.rmtree(appName)
```

# 网络交互

## Requests

[Requests](https://parg.co/UrO) 是优雅而易用的 Python 网络请求库 :

```py
import requests

r = requests.get('https://api.github.com/events')
r = requests.get('https://api.github.com/user', auth=('user', 'pass'))

r.status_code
# 200
r.headers['content-type']
# 'application/json; charset=utf8'
r.encoding
# 'utf-8'
r.text
# u'{"type":"User"...'
r.json()
# {u'private_gists': 419, u'total_private_repos': 77, ...}

r = requests.put('http://httpbin.org/put', data = {'key':'value'})
r = requests.delete('http://httpbin.org/delete')
r = requests.head('http://httpbin.org/get')
r = requests.options('http://httpbin.org/get')
```

# 数据存储

## MySQL

```py
import pymysql.cursors

# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='user',
                             password='passwd',
                             db='db',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

try:
    with connection.cursor() as cursor:
        # Create a new record
        sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
        cursor.execute(sql, ('webmaster@python.org', 'very-secret'))

    # connection is not autocommit by default. So you must commit to save
    # your changes.
    connection.commit()

    with connection.cursor() as cursor:
        # Read a single record
        sql = "SELECT `id`, `password` FROM `users` WHERE `email`=%s"
        cursor.execute(sql, ('webmaster@python.org',))
        result = cursor.fetchone()
        print(result)
finally:
    connection.close()
```
