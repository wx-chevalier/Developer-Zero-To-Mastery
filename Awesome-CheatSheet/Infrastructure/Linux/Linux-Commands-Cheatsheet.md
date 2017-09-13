

# Linux DevOps 中常用命令
![](http://7xkt0f.com1.z0.glb.clouddn.com/65DCC0D6-CDE4-4199-9669-2CA32259FB15.png)

本文参考资料包括但不限于：[the-art-of-command-line](https://parg.co/bXZ)、[Git 的奇技淫巧](https://parg.co/bXu)、[Docker Cheat Sheet](https://github.com/wsargent/docker-cheat-sheet)，更多参考资料请前往[ Linux Reference ]()、[ Linux Shell Reference ]()、[ Docker Reference ]()、[ Git Reference ]()。

# Bash

## 快捷操作

- 使用 `man bash` 查看说明文档，使用 `Tab` 查看推荐参数或者指令。
- 使用 `ctrl-r` 进入命令历史搜索模式，使用 `Enter` 执行指定命令，使用左右箭头进入命令编辑模式；使用 `history` 查看历史命令记录，使用 `!n` 执行第 n 个历史命令，使用 `!$` 执行上一个历史命令。
- 使用 `ctrl-w` 删除最后一个单词，使用 `ctrl-u` 删除自光标处到行首的内容，使用 `ctrl-k` 删除自光标处到行末的内容；使用 `ctrl-b` 与 `ctrl-f` 按字母进行前后移动；使用 `ctrl-a` 将光标移动到行首，使用 `ctrl-e` 将光标移动到行末。
- 使用 `alias` 创建常用命令的快捷方式，譬如 `alias ll = 'ls -latr'` 创建新的名为 `ll` 的快捷方式。

## 命令执行

- 使用 `xargs` 将长列表参数切分为可用的短列表，常用的命令譬如：`find . -name "*.java" | xargs grep "Stock"`、`find /tmp -name "*.tmp" | xargs rm`

## 终端增强

### OhMyZsh

### Tmux

### Gotty

# 用户权限

## SSH

- 创建密钥
```
# 生成名为 id_rsa 的私钥文件和名为 id_rsa.pub 的公钥文件
ssh-keygen -t rsa 

# 指定 4096 位的长度
ssh-keygen -b 4096 -t rsa
```

- 远端登录
```
# 指定登录端口
ssh root@{host} -p{port}

# 上传公钥进行免密码登录
touch ~/.ssh/authorized_keys
cat -n ~/.ssh/rsa.pub ~/.ssh/authorized_keys

# 使用 ssh-copy-id 添加公钥
ssh-copy-id username@remote-server
```
# 文件系统

## 目录

- 创建

```shell
# 创建文件夹
mkdir <name>

# 递归创建父文件夹
mkdir -p / --parents backup/old

# 创建文件夹时同时指定权限
mkdir -m a=rwx backup
mkdir -p -m 777 backup/server/2011/11/30

```

- 解压缩

```
# 将文件解压到指定文件名
tar -xvzf fileName.tar.gz -C newFileName

```

## 磁盘
- 查看磁盘状态
```
# 查看磁盘剩余空间
df -sh
```

## 文件

- 使用 `fuser tmpFile.js` 查看指定文件被进程占用情况，

# 文件读写



# 系统进程



## 系统
- 使用 `hostname` 查看当前主机名，使用 `sudo hostname newName` 修改当前主机名

## 内存

## 进程

- 使用 `pstree -p` 查看当前进程树，使用 `ps -A` 查看所有进程信息，使用 `ps -aux ` 查看所有正在内存中的程序，使用 `ps -ef` 查看所有连同命令行的进程信息；使用 `ps -u root` 显示指定用户信息；使用 `ps -ef | grep ssh` 查看特定进程。
- 使用 `top` 查看进程资源占用情况，也可以使用扩展 `htop` 或者 `gtop`。
```
# 指定查看用户
top -u oracle

# 栏目内容解释
# PID：进程的ID
# USER：进程所有者
# PR：进程的优先级别，越小越优先被执行
# NInice：值
# VIRT：进程占用的虚拟内存
# RES：进程占用的物理内存
# SHR：进程使用的共享内存
# S：进程的状态。S表示休眠，R表示正在运行，Z表示僵死状态，N表示该进程优先值为负数
# %CPU：进程占用CPU的使用率
# %MEM：进程使用的物理内存和总内存的百分比
# TIME+：该进程启动后占用的总的CPU时间，即占用CPU使用时间的累加值。
# COMMAND：进程启动命令名称
```

# 网络

## 状态

- 使用 `lsof -i:80` 查看指定端口的占用情况

## 配置

## 请求

# 开发工具

## Git

### 基础配置

```
# 缓存用户最近输入的验证信息
git config --global credential.helper cache
```

### 远程仓库

- 将独立仓库添加为本仓库的子模块
```
git submodule add -b master git@github.com:githubuser/foo.git apps/foo
```

### 本地操作

- 查看

- 提交

- 回滚
```
# 抛弃本地所有的修改，回到远程仓库的状态
git fetch --all && git reset --hard origin/master
```

- LFS 文件管理
```
# 本地安装 LFS
brew install git-lfs

# 初始化 LFS
git lfs install

# 指定需要托管给 LFS 的文件类型
git lfs track "*.psd"
git add .gitattributes
```

### 分支管理

## Docker

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/6/1/WX20170703-131127.png)

### 镜像

- 镜像管理

```
# 拉取镜像
docker pull image_name

# 删除所有无用的镜像
docker rmi $(docker images -q -f dangling=true)

# 将某个容器保存为镜像
docker commit -m “commit message” -a “author”  container_name username/image_name:tag
```

### 容器

- 容器管理

```
# 启动/停止某个容器
docker [start|stop] container_name

# 创建，并且启动某个容器以执行某个命令
docker run -ti --name container_name image_name command

# 创建，启动容器执行某个命令然后删除该容器
docker run --rm -ti image_name command

# 创建，启动容器，并且映射卷与端口，同时设置环境变量
docker run -it --rm -p 8080:8080 -v /path/to/agent.jar:/agent.jar -e JAVA_OPTS=”-javaagent:/agent.jar” tomcat:8.0.29-jre8

# 关闭所有正在运行的容器
docker kill $(docker ps -q)

# 移除所有停止的容器
docker rm $(docker ps -a -q)

```
- 容器交互
```
# 在某个容器内执行某条命令
docker exec -ti container_name command.sh

# 查看某个容器的输出日志
docker logs -ft container_name
```

### 编排

- Docker Machine
```
# 启动某个 Docker Machine
docker-machine start machine_name

# 配置 Docker 管理远程机器
eval “$(docker-machine env machine_name)”
```
- Docker Compose
```
# 基本语法
version: “2”
services:
web:
 container_name: “web”
 image: java:8 # image name
 # command to run
 command: java -jar /app/app.jar
 ports: # map ports to the host
 - “4567:4567”
 volumes: # map filesystem to the host
 - ./myapp.jar:/app/app.jar
mongo: # container name
 image: mongo # image name
```

- Docker Swarm
