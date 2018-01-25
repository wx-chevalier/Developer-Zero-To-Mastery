[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

# Linux DevOps 中常用命令

## 文件目录

* 当前目录：.
* 上一级目录的上一级目录：..
* 用户的主目录：~
* 文件的系统根目录：/

### 通配符

这类似于 SQL 中的 % 符号，例如，使用「WHERE first_name LIKE 『 John%』」搜索所有以 John 起始的名字。

在 bash 中，相应的命令是「John*」。如果想列出一个文件夹中所有以「.json 」结尾的文件，可以输入：「 ls *.json」。

## 命令连接

### 管道

1 | 一种管道，其左方是一个命令的 STNOUT，将作为管道右方的另一个命令的 STDIN。 例如：echo ‘test text’ | wc -l

2 > 大于号，作用是取一个命令 STDOUT 位于左方，并将其写入 / 覆写（overwrite ）入右方的一个新文件。 例如：ls > tmp.txt

3 >> 两个大于号，作用是取一个命令 STDOUT 位于左方，并将其追加到右方的一个新的或现有文件中。例如：date >> tmp.txt

## Tmux

Tmux 是一个工具，用于在一个终端窗口中运行多个终端会话；还可以通过 Tmux 使终端会话运行于后台或是按需接入、断开会话。本部分是对于 [tmux shortcuts & cheatsheet](https://parg.co/UrT) 一文的总结提取 :

```sh
# 启动新会话
tmux

# 指定新 Session 的名称，并创建
tmux new -s myname

# 列举出所有的 Session
tmux ls

# 附着到某个 Session
tmux a  #  (or at, or attach)

# 根据指定的名称附着到 Session
tmux a -t myname

# 关闭某个 Session
tmux kill-session -t myname

# 关闭全部 Session
tmux ls | grep : | cut -d. -f1 | awk '{print substr($1, 0, length($1)-1)}' | xargs kill
```

在 Tmux 中，使用  `ctrl + b` 前缀，然后可以使用如下命令 :

```sh
# Sessions
:new<CR>  new session
s  list sessions
$  name session

# Windows (tabs)
c  create window
w  list windows
n  next window
p  previous window
f  find window
,  name window
&  kill window

# Panes (splits)
%  vertical split
"  horizontal split

o  swap panes
q  show pane numbers
x  kill pane
+  break pane into window (e.g. to select text by mouse to copy)
-  restore pane from window
⍽  space - toggle between layouts
<prefix> q (Show pane numbers, when the numbers show up type the key to goto that pane)
<prefix> { (Move the current pane left)
<prefix> } (Move the current pane right)
<prefix> z toggle pane zoom

# Resizing Panes
PREFIX : resize-pane -D (Resizes the current pane down)
PREFIX : resize-pane -U (Resizes the current pane upward)
PREFIX : resize-pane -L (Resizes the current pane left)
PREFIX : resize-pane -R (Resizes the current pane right)
PREFIX : resize-pane -D 20 (Resizes the current pane down by 20 cells)
PREFIX : resize-pane -U 20 (Resizes the current pane upward by 20 cells)
PREFIX : resize-pane -L 20 (Resizes the current pane left by 20 cells)
PREFIX : resize-pane -R 20 (Resizes the current pane right by 20 cells)
PREFIX : resize-pane -t 2 20 (Resizes the pane with the id of 2 down by 20 cells)
PREFIX : resize-pane -t -L 20 (Resizes the pane with the id of 2 left by 20 cells)
```

## Cron

![](http://fs.gimoo.net/img/2014/10/12/011835_5439666b84167.jpg)

```sh
\*　　 \*　　 \*　　 \*　　 \*　　 command
分　   时　   日　   月　   周　   命令
```

第 1 列表示分钟 1 ～ 59 每分钟用*或者 */1 表示第 2 列表示小时 1 ～ 23 （ 0 表示 0 点）第 3 列表示日期 1 ～ 31 第 4 列表示月份 1 ～ 12 第 5 列标识号星期 0 ～ 6 （ 0 表示星期天）第 6 列要运行的命令

在以上各个字段中，还可以使用以下特殊字符：

星号（\* ）：代表所有可能的值，例如 month 字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。

逗号（, ）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”

中杠（- ）：可以用整数之间的中杠表示一个整数范围，例如 “2-6” 表示 “2,3,4,5,6”

正斜线（/ ）：可以用正斜线指定时间的间隔频率，例如 “0-23/2” 表示每两小时执行一次。同时正斜线可以和星号一起使用，例如 \*/10，如果用在 minute 字段，表示每十分钟执行一次。

cron 是一个可以用来根据时间、日期、月份、星期的组合来调度对重复任务的执行的守护进程。

cron 假定系统持续运行。如果当某任务被调度时系统不在运行，该任务就不会被执行。√√

# 文件系统

## 打包

### tar

```sh
# 指定文件名创建压缩包
$ tar -cv -f archive.tar file1.txt file2.txt

# 过滤某个文件夹下面的某些子文件夹
$ tar cfvz --exclude='<dir1>' --exclude='<dir2>' target.tgz target_dir
$ tar cvf dir.tar.gz --exclude='/dir/subdir/subsubdir/*' dir

# 向压缩包中添加文件
$ tar -rf archive.tar file3.txt

######
```

```sh
# 展示 curl 的进度
$ curl --progress-bar -T "${SOME_LARGE_FILE}" "${UPLOAD_URL}" | tee /dev/null
```
