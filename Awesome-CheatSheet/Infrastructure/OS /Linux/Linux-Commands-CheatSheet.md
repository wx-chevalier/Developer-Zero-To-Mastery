# Linux DevOps 中常用命令


## 文件目录

- 当前目录：.
- 上一级目录的上一级目录：..
- 用户的主目录：~
- 文件的系统根目录：/

### 通配符

这类似于 SQL 中的% 符号，例如，使用「WHERE first_name LIKE 『John%』」搜索所有以 John 起始的名字。

在 bash 中，相应的命令是「John*」。如果想列出一个文件夹中所有以「.json」结尾的文件，可以输入：「ls *.json」。

# 常用命令

- cd {directory}：转换当前目录
- ls -lha：列出目录文件（详细信息）
- vim or nano：命令行编辑器
- touch {file}：创建一个新的空文件
- cp -R {original_name} {new_name}：复制一个文件或目录（包含内部所有文件）
- mv {original_name} {new_name}：移动或重命名文件
- rm {file}：删除文件
- rm -rf {file/folder}：永久删除文件或文件夹（小心使用）
- pwb：打印当前工作目录
- cat or less or tail or head -n10 {file}：文件的标准输出内容
- mkdir {directory}：创建一个空的目录
- grep -inr {string}：在当前目录或子目录的文件中搜索一个字符串
- column -s, -t <delimited_file>：在 columnar 格式中展示逗号分隔文件
- ssh {username}@{hostname}：连接到远程机器中
- tree -LhaC 3：向下展示三级目录结构（带有文件大小信息和隐藏目录信息）
- htop (or top)：任务管理器
- pip install --user {pip_package}：Python 安装包管理器，安装包到~/.local/bin 目录下
- pushd . ; popd ; dirs; cd -：在堆栈上 push/pop/view 一个目录，并变回最后一个目录
- sed -i "s/{find}/{replace}/g" {file}：替代文件中的一个字符串
- find . -type f -name '*.txt' -exec sed -i "s/{find}/{replace}/g" {} \;：替换当前目录和子目录下后缀名为.txt 文件的一个字符串
- tmux new -s session, tmux attach -t session：创建另一个终端会话界面而不创建新的窗口 [高级命令]
- wget {link}：下载一个网页或网页资源
- curl -X POST -d "{key: value}" http://www.google.com：发送一个 HTTP 请求到网站服务器
- find <directory>：递归地列出所有目录和其子目录的内容
- lsof -i :8080：列出打开文件的描述符（-i 是网络接口的标记）
- netstat | head -n20：列出当前打开的 Internet/UNIX 接口（socket）以及相关信息
- dstat -a：输出当前硬盘、网络、CPU 活动等信息
- nslookup <IP address>：找到远程 IP 地址的主机名
- strace -f -e <syscall> <cmd>：跟踪程序的系统调用（-e 标记用于过滤某些系统调用）
- ps aux | head -n20：输出目前活动的进程
- file <file>：检查文件类型（例如可执行文件、二进制文件、ASCII 文本文件）
- uname -a：内核信息
- lsb_release -a：系统信息
- hostname：检视你的机器的主机名（即其他电脑可以搜索到的名称）
- pstree：可视化分支进程
- time <cmd>：执行一个命令并报告用时
- CTRL + z ; bg; jobs; fg：从当前 tty 中传递一个进程到后台再返回前台
- cat file.txt | xargs -n1 | sort | uniq -c：统计文件中的独特字（unique words）数量
- wc -l <file>：计算文件的行数
- du -ha：在磁盘上显示目录及其内容的大小
- zcat <file.gz>：显示压缩文本文件的内容
- scp <user@remote_host> <local_path>：将文件从远端复制到本地服务器，或反过来
- man {command}：为一个命令显示 manual（说明文档），但是通常这样不如谷歌搜索好

## 命令连接

### 管道

1 | 
 一种管道，其左方是一个命令的 STNOUT，将作为管道右方的另一个命令的 STDIN。
 例如：echo ‘test text’ | wc -l

2 >
 大于号，作用是取一个命令 STDOUT 位于左方，并将其写入/覆写（overwrite）入右方的一个新文件。
 例如：ls > tmp.txt

3 >>
 两个大于号，作用是取一个命令 STDOUT 位于左方，并将其追加到右方的一个新的或现有文件中。
例如：date >> tmp.txt

## Tmux

Tmux 是一个工具，用于在一个终端窗口中运行多个终端会话；还可以通过 Tmux 使终端会话运行于后台或是按需接入、断开会话。本部分是对于 [tmux shortcuts & cheatsheet](https://parg.co/UrT) 一文的总结提取:

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

在 Tmux 中，使用 `ctrl + b` 前缀，然后可以使用如下命令:

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