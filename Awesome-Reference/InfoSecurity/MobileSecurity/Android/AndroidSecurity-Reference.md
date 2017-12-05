# Reverse Engineering(逆向工程)

## [ClassyShark](https://github.com/google/android-classyshark)

![](http://7xi5sw.com1.z0.glb.clouddn.com/Screen%20Shot%202016-02-23%20at%2017.06.49.png)

1. Open APK `java -jar ClassyShark.jar -open `

2. Export all generated data to a text file`java -jar ClassyShark.jar -dump `

3. Export generated file from a specific class to a text file`java -jar ClassyShark.jar -dump  `

4. Open ClassyShark and display a specific class in the GUI`java -jar ClassyShark.jar -open  `

5. Inspect APK`java -jar ClassyShark.jar -inspect `

6. Dump all strings (combined classes.dex string and method tables) from your APK`java -jar ClassyShark.jar -stringdump `

## [Google-enjarify](https://github.com/google/enjarify):translating Dalvik bytecode to equivalent Java bytecode
Enjarify 是一个将Dalvik字节码转化为等价的Java字节码，然后可以用一系列的Java分析工具去分析Android应用。之前我们一直使用Dex2jar来完成这个工作，不过Dex2jar已经算是一个非常老的工具咯。Dex2jar在绝大部分情况下都挺不错的，但是如果碰到了些模糊的特性或者特殊案例就会出错或者默默地吐出一些错误的结果。相比之下，Enjarify在设计的时候就考虑到了尽可能多的情况，特别是对于那些Dex2jar不起作用的情况下。另外，Enjarify能够有效地处理Unicode编码的类名、常量，隐式类型转换、正常处理流程中的移除处理啊等等。
### [](https://github.com/google/enjarify#usage-and-installation)Usage and installation
Enjarify是一个普通的Python 3的应用程序，你可以直接Git Clone然后运行。下载好了之后直接进到对应的目录下：
```
python3 -O -m enjarify.main yourapp.apk
```

#### [](https://github.com/google/enjarify#linux)Linux
有时候为了方便调用，可以将该脚本做一层封装，尽可能的使用Pypy，这货会比CPython速度快一点。另外，如果你希望能够像调用命令一样直接调用Enjarify，你可以将它作为链接放到你的环境变量中，譬如：
```
ln -s "$PWD/enjarify.sh" ~/bin/enjarify
```

#### [](https://github.com/google/enjarify#windows)Windows
我们提供了一个可执行的脚本enjarify.bat，同样地把这个脚本放到环境变量中就可以了。
#### [](https://github.com/google/enjarify#usage)Usage
可以直接用以下命令调用：
```
enjarify yourapp.apk
```
最简单的用法就是可以将一个apk文件或者一个dex文件作为命令行的输入，如果你使用的是一个多dex的apk，那么Enjarify会自动将这些dex打包到一个单一的jar文件中。而如果你选定了一个dex文件，那么只有这个dex文件会被解析。
```
enjarify classes2.dex
```
默认的输出是会在当前目录下创建一个[inputname]-enjarify.jar文件。可以通过`-o`参数来指定输出文件的名称：
```
enjarify yourapp.apk -o yourapp.jar
```

默认情况下，Enjarify不会覆盖已经存在的文件，不过可以使用`-f`或者`--force`参数来强制指定覆盖。

### [](https://github.com/google/enjarify#limitations)Limitations

Enjarify 目前还不能狗完整解析一些可选的信息，譬如源文件的属性、行数以及注解。Enjarify已经尽可能地去解析所有的类，不过因为Android或者Java的限制，有些隐藏类并不能很好地解析，不过往往只有在有很多人为混淆的情况下才会出现。

### [](https://github.com/google/enjarify#performance-tips)Performance tips
PyPy可是比CPython快很多，可以在这里[http://pypy.org/](http://pypy.org/).下载，注意要使用PyPy3，而不是普通的PyPy。Linux下默认会使用pypy3，Windows下面则需要你自己去编辑了。另外，Enjarify默认会使用一些优化算法使得整个反编译之后的代码的可读性增加，比如移除未使用的变量等。如果你不需要这些，可以使用`--fast`参数来加快速度。








