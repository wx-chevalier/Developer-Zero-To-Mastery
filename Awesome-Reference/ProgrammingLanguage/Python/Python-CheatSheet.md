# Python

![](https://realpython.com/learn/python-first-steps/images/pythonlogo.jpg)

Python 是一门高阶、动态类型的多范式编程语言。人生苦短，请用Python，大量功能强大的语法糖的同时让很多时候Python代码看上去有点像伪代码。譬如我们用Python实现的简易的快排相较于Java会显得很短小精悍:
```
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
## Python 版本
Python社区存在的最大的问题就是版本分裂，这也是笔者一直觉得有点鸡肋般的感觉，毕竟对于处女座而言实在是难受。目前Python社区中存在两个不同的主要版本：2.7与3.4。Python 3.0引入了很多不向后兼容的变化，因此很多遵循2.7版本的代码并不能适用于3.4版本。我们可以使用`python --version`命令来查看当前使用的版本。

## 常用习惯

| 模块   | 注意点                                      |
| ---- | ---------------------------------------- |
| 换行   | 反斜杠（\）继续上一行，Python文件以模块形式组织。Python程序语句不以分号结尾，而以换行符结尾。Python 使用硬回车来分割语句, 冒号和缩进来分割代码块。C++ 和 Java 使用分号来分割语句, 花括号来分割代码块。 |
| 注释   | a．  使用#符号标示注释；  b．  在模块、类或者函数起始添加一个字符串起文档作用；  c．  使用三引号标示注释。  print """  Usage: thingy [OPTIONS]  -h Display this usage  message  -H hostname Hostname to  connect to  """ |
| 主流程  | Python 中没有子程序，只有函数, 所有的函数都有返回值,并且所有的函数都以 def 开始。 |
| 字符串  | Python中单引号与双引号的区别类似于PHP中，双引号中可以包括单引号。    |
| 数组   | Python中数组下标可以为负数，即从右端开始计量，-1即为最后一个数。Python不可以修改数组中值，字符串下标索引方式类似于MATLAB。 |
| 函数   | Python的函数可以嵌套定义                          |
 

# Installation:环境搭建

## Conda

笔者推荐使用Anaconda作为环境搭建工具，并且推荐使用Python 3.5版本，可以在[这里](https://www.continuum.io/downloads)下载。如果是习惯使用Docker的小伙伴可以参考[anaconda-notebook](https://github.com/rothnic/anaconda-notebook)
```
docker pull rothnic/anaconda-notebook
docker run -p 8888:8888 -i -t rothnic/anaconda-notebook
```
安装完毕之后可以使用如下命令验证安装是否完毕:
```
conda --version
```
安装完毕之后我们就可以创建具体的开发环境了，主要是通过create命令来创建新的独立环境:
```
conda create --name snowflakes biopython
```
该命令会创建一个名为snowflakes并且安装了Biopython的环境，如果你需要切换到该开发环境，可以使用activate命令:
- Linux, OS X: `source activate snowflakes`
- Windows:  `activate snowflakes`

我们也可以在创建环境的时候指明是用python2还是python3:
```
conda create --name bunnies python=3 astroid babel
```
环境创建完毕之后，我们可以使用`info`命令查看所有环境:
```
conda info --envs
conda environments:

     snowflakes          * /home/username/miniconda/envs/snowflakes
     bunnies               /home/username/miniconda/envs/bunnies
     root                  /home/username/miniconda
```
当我们切换到某个具体的环境后，可以安装依赖包了:
```
conda list # 列举当前环境中的所有依赖包
conda install nltk # 安装某个新的依赖
```

## Jupyter Notebook

![](http://jupyter.org/assets/jupyterpreview.png)

在Conda安装之后，Jupyter Notebook是默认安装好的，直接在工作目录下打开即可:
```
jupyter notebook
```
你可以参阅[Running the Notebook](http://jupyter.readthedocs.io/en/latest/running.html#running)获取更多命令细节。


# 基础数据类型
和其他主流语言一样，Python为我们提供了包括integer、float、boolean、strings等在内的很多基础类型。

## 数值类型
```
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
不过需要注意的是，Python并没有`x++`或者`x--`这样的自增或者自减操作符。另外，Python内置的也提供了长整型与其他复杂数值类型的整合，可以参考[这里](https://docs.python.org/2/library/stdtypes.html#numeric-types-int-float-long-complex)。

## 布尔类型
Python提供了常见的逻辑操作符，不过需要注意的是Python中并没有使用`&&、||`等，而是直接使用了英文单词。
```
t = True
f = False
print type(t) # Prints "<type 'bool'>"
print t and f # Logical AND; prints "False"
print t or f  # Logical OR; prints "True"
print not t   # Logical NOT; prints "False"
print t != f  # Logical XOR; prints "True" 
```
## 字符串
Python对于字符串的支持还是很好的，不过需要注意到`utf-8`编码问题。
```
hello = 'hello'   # String literals can use single quotes
world = "world"   # or double quotes; it does not matter.
print hello       # Prints "hello"
print len(hello)  # String length; prints "5"
hw = hello + ' ' + world  # String concatenation
print hw  # prints "hello world"
hw12 = '%s %s %d' % (hello, world, 12)  # sprintf style string formatting
print hw12  # prints "hello world 12"
```
Python中的字符串对象还包含了很多有用的方法，譬如:
```
s = "hello"
print s.capitalize()  # Capitalize a string; prints "Hello"
print s.upper()       # Convert a string to uppercase; prints "HELLO"
print s.rjust(7)      # Right-justify a string, padding with spaces; prints "  hello"
print s.center(7)     # Center a string, padding with spaces; prints " hello "
print s.replace('l', '(ell)')  # Replace all instances of one substring with another;
                               # prints "he(ell)(ell)o"
print '  world '.strip()  # Strip leading and trailing whitespace; prints "world"
```
可以在[这里](https://docs.python.org/2/library/stdtypes.html#string-methods)中查看详细的方法列表。

# 复杂数据类型
## 列表
Python中的列表等价于数组，不过其能够动态扩展并且能够存放不同类型的数值。
```
xs = [3, 1, 2]   # Create a list
print xs, xs[2]  # Prints "[3, 1, 2] 2"
print xs[-1]     # Negative indices count from the end of the list; prints "2"
xs[2] = 'foo'    # Lists can contain elements of different types
print xs         # Prints "[3, 1, 'foo']"
xs.append('bar') # Add a new element to the end of the list
print xs         # Prints "[3, 1, 'foo', 'bar']"
x = xs.pop()     # Remove and return the last element of the list
print x, xs      # Prints "bar [3, 1, 'foo']"
```
同样你可以在[文档](https://docs.python.org/2/tutorial/datastructures.html#more-on-lists)中查看更多的细节。

### 切片

Python中对于数组的访问也相当人性化，通过简单的操作符即可以完成对于数组中子数组的截取。
```
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
### 遍历
你可以使用基本的`for`循环来遍历数组中的元素，就像下面介个样纸:
```
animals = ['cat', 'dog', 'monkey']
for animal in animals:
    print animal
# Prints "cat", "dog", "monkey", each on its own line.
```
如果你在循环的同时也希望能够获取到当前元素下标，可以使用`enumerate`函数:
```
animals = ['cat', 'dog', 'monkey']
for idx, animal in enumerate(animals):
    print '#%d: %s' % (idx + 1, animal)
# Prints "#1: cat", "#2: dog", "#3: monkey", each on its own line
```
### 变换
在编程中我们经常需要对数组进行变换，比较著名的我们可以使用`map、reduce、filter`这几个函数，而在Python中提供了非常方便的List Comprehension操作符。譬如我们需要对数组中元素进行依次平方操作
```
nums = [0, 1, 2, 3, 4]
squares = []
for x in nums:
    squares.append(x ** 2)
print squares   # Prints [0, 1, 4, 9, 16]
```
我们可以简写为如下方式:
```
nums = [0, 1, 2, 3, 4]
squares = [x ** 2 for x in nums]
print squares   # Prints [0, 1, 4, 9, 16]
```
List Comprehensions也支持进行条件选择:
```
nums = [0, 1, 2, 3, 4]
even_squares = [x ** 2 for x in nums if x % 2 == 0]
print even_squares  # Prints "[0, 4, 16]"
```
## 字典
Python中的字典类型即类似于Java中的Map或者JavaScript中的Object，也就是所谓的键值对类型，基本的使用方式为:
```
d = {'cat': 'cute', 'dog': 'furry'}  # Create a new dictionary with some data
print d['cat']       # Get an entry from a dictionary; prints "cute"
print 'cat' in d     # Check if a dictionary has a given key; prints "True"
d['fish'] = 'wet'    # Set an entry in a dictionary
print d['fish']      # Prints "wet"
# print d['monkey']  # KeyError: 'monkey' not a key of d
print d.get('monkey', 'N/A')  # Get an element with a default; prints "N/A"
print d.get('fish', 'N/A')    # Get an element with a default; prints "wet"
del d['fish']        # Remove an element from a dictionary
print d.get('fish', 'N/A') # "fish" is no longer a key; prints "N/A"
```
更多的语法细节可以参考[这里](https://docs.python.org/2/library/stdtypes.html#dict)。

### 遍历
对于字典的遍历也非常简单:
```
d = {'person': 2, 'cat': 4, 'spider': 8}
for animal in d:
    legs = d[animal]
    print 'A %s has %d legs' % (animal, legs)
# Prints "A person has 2 legs", "A spider has 8 legs", "A cat has 4 legs"
```
如果你希望同时访问键和其对应的值，可以使用`iteritems`方法:
```
d = {'person': 2, 'cat': 4, 'spider': 8}
for animal, legs in d.iteritems():
    print 'A %s has %d legs' % (animal, legs)
# Prints "A person has 2 legs", "A spider has 8 legs", "A cat has 4 legs"
```
### 变换
```
nums = [0, 1, 2, 3, 4]
even_num_to_square = {x: x ** 2 for x in nums if x % 2 == 0}
print even_num_to_square  # Prints "{0: 0, 2: 4, 4: 16}"
```
## Set
Set是一系列无序且唯一的元素的集合：
```
animals = {'cat', 'dog'}
print 'cat' in animals   # Check if an element is in a set; prints "True"
print 'fish' in animals  # prints "False"
animals.add('fish')      # Add an element to a set
print 'fish' in animals  # Prints "True"
print len(animals)       # Number of elements in a set; prints "3"
animals.add('cat')       # Adding an element that is already in the set does nothing
print len(animals)       # Prints "3"
animals.remove('cat')    # Remove an element from a set
print len(animals)       # Prints "2"
```
更多语法细节可以参考[这里](https://docs.python.org/2/library/sets.html#set-objects)。

### 遍历
集合遍历的语法和数组遍历很类似，不过因为集合本身是无序的，因此你不能够依赖于遍历的顺序来预测集合中元素的顺序:
```
animals = {'cat', 'dog', 'fish'}
for idx, animal in enumerate(animals):
    print '#%d: %s' % (idx + 1, animal)
# Prints "#1: fish", "#2: dog", "#3: cat"
```
### 变换
```
from math import sqrt
nums = {int(sqrt(x)) for x in range(30)}
print nums  # Prints "set([0, 1, 2, 3, 4, 5])"
```
## Tuples
Python中的Tuple指不可变的有序元素集合，Tuple很类似于列表，不过区别在于Tuple可以做字典中的键类型，而列表则不可以。
```
d = {(x, x + 1): x for x in range(10)}  # Create a dictionary with tuple keys
t = (5, 6)       # Create a tuple
print type(t)    # Prints "<type 'tuple'>"
print d[t]       # Prints "5"
print d[(1, 2)]  # Prints "1"
```

# Function:函数

Python中的函数使用`def`关键字进行定义，譬如:
```
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
同时，Python中的函数还支持可选参数:
```
def hello(name, loud=False):
    if loud:
        print 'HELLO, %s!' % name.upper()
    else:
        print 'Hello, %s' % name

hello('Bob') # Prints "Hello, Bob"
hello('Fred', loud=True)  # Prints "HELLO, FRED!"
```
更多的语法细节可以参考[这里](https://docs.python.org/2/tutorial/controlflow.html#defining-functions)。

# Classes:类
Python中对于类的定义也很直接:
```
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
可以参考[这里](https://docs.python.org/2/tutorial/classes.html)获取更多信息。

# 延伸阅读
- [Python Numpy Tutorial](http://cs231n.github.io/python-numpy-tutorial/#numpy-broadcasting)













