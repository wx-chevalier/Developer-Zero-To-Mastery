[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

# Docker

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/6/1/WX20170703-131127.png)

参考了 [Docker Cheat Sheet](https://parg.co/Upp)

# 镜像

## 镜像管理

最后，运行 `docker images` 命令检查镜像现在是否可用。

```
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
mynewimage          latest              4d2eab1c0b9a        5 minutes ago       278.1 MB
ubuntu              14.04               ad892dd21d60        11 days ago         275.5 MB
<none>              <none>              6b0a59aa7c48        11 days ago         169.4 MB
<none>              <none>              6cfa4d1f33fb        7 weeks ago         0 B
```

```sh
# 删除所有无用的镜像
docker rmi $(docker images -q -f dangling=true)
```

```sh
# 拉取镜像
docker pull image_name

# 将某个容器保存为镜像
docker commit -m “commit message” -a “author”  container_name username/image_name:tag
```

## Dockfile

Dockerfile 由一行行命令语句组成，并且支持以 `#` 开头的注释行。一般的，Dockerfile 分为四部分：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令。例如：

```sh
# This dockerfile uses the ubuntu image
# VERSION 2 - EDITION 1
# Author: docker_user
# Command format: Instruction [arguments / command] ..

# Base image to use, this must be set as the first line
FROM ubuntu

# Maintainer: docker_user <docker_user at email.com> (@docker_user)
MAINTAINER docker_user docker_user@email.com

# Commands to update the image
RUN echo "deb http://archive.ubuntu.com/ubuntu/ raring main universe" >> /etc/apt/sources.list
RUN apt-get update && apt-get install -y nginx
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf

# Commands when creating a new container
CMD /usr/sbin/nginx
```

其中，一开始必须指明所基于的镜像名称，接下来推荐说明维护者信息。后面则是镜像操作指令，例如 `RUN` 指令，`RUN` 指令将对镜像执行跟随的命令。每运行一条 `RUN` 指令，镜像添加新的一层，并提交。最后是 `CMD` 指令，来指定运行容器时的操作命令。

| 指令名 | 格式                                        | 描述                                                                                                                   |
| ------ | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| FROM   | 格式为 `FROM <image>`或`FROM <image>:<tag>` | 第一条指令必须为 `FROM` 指令。并且，如果在同一个 Dockerfile 中创建多个镜像时，可以使用多个 `FROM` 指令（每个镜像一次） |

* MAINTAINER

格式为 `MAINTAINER <name>`，指定维护者信息。

* RUN

格式为 `RUN <command>` 或 `RUN ["executable", "param1", "param2"]`。

前者将在 shell 终端中运行命令，即 `/bin/sh -c`；后者则使用 `exec` 执行。指定使用其它终端可以通过第二种方式实现，例如 `RUN ["/bin/bash", "-c", "echo hello"]`。

每条 `RUN` 指令将在当前镜像基础上执行指定命令，并提交为新的镜像。当命令较长时可以使用 `\` 来换行。

* CMD

支持三种格式

* `CMD ["executable","param1","param2"]` 使用 `exec` 执行，推荐方式；
* `CMD command param1 param2` 在 `/bin/sh` 中执行，提供给需要交互的应用；
* `CMD ["param1","param2"]` 提供给 `ENTRYPOINT` 的默认参数；

指定启动容器时执行的命令，每个 Dockerfile 只能有一条 `CMD` 命令。如果指定了多条命令，只有最后一条会被执行。

如果用户启动容器时候指定了运行的命令，则会覆盖掉 `CMD` 指定的命令。

* EXPOSE

格式为 `EXPOSE <port> [<port>...]`。

告诉 Docker 服务端容器暴露的端口号，供互联系统使用。在启动容器时需要通过 -p 来指定端口映射，Docker 主机会自动分配一个端口转发到指定的端口。

* ENV

格式为 `ENV<key><value>`。指定一个环境变量，会被后续 `RUN` 指令使用，并在容器运行时保持。

例如

```
ENV PG_MAJOR 9.3
ENV PG_VERSION 9.3.4
RUN curl -SL http://example.com/postgres-$PG_VERSION.tar.xz | tar -xJC /usr/src/postgress && …
ENV PATH /usr/local/postgres-$PG_MAJOR/bin:$PATH
```

* ADD

格式为 `ADD<src><dest>`。

该命令将复制指定的 `<src>` 到容器中的 `<dest>`。其中 `<src>` 可以是 Dockerfile 所在目录的一个相对路径；也可以是一个 URL；还可以是一个 tar 文件（自动解压为目录）。

* COPY

格式为 `COPY <src><dest>`。

复制本地主机的 `<src>`（为 Dockerfile 所在目录的相对路径）到容器中的 `dest`。

当使用本地目录为源目录时，推荐使用 `COPY`。

* ENTRYPOINT

两种格式：

* `ENTRYPOINT ["executable", "param1", "param2"]`
* `ENTRYPOINT command param1 param2`（ shell 中执行）。

配置容器启动后执行的命令，并且不可被 `docker run` 提供的参数覆盖。

每个 Dockerfile 中只能有一个 `ENTRYPOINT`，当指定多个时，只有最后一个起效。

* VOLUME

格式为 `VOLUME ["/data"]`。

创建一个可以从本地主机或其他容器挂载的挂载点，一般用来存放数据库和需要保持的数据等。

* USER

格式为 `USER daemon`。

指定运行容器时的用户名或 UID，后续的 `RUN` 也会使用指定用户。

当服务不需要管理员权限时，可以通过该命令指定运行用户。并且可以在之前创建所需要的用户，例如：`RUN groupadd -r postgres && useradd -r -g postgres postgres`。要临时获取管理员权限可以使用 `gosu`，而不推荐 `sudo`。

* WORKDIR

格式为 `WORKDIR /path/to/workdir`。

为后续的 `RUN`、`CMD`、`ENTRYPOINT` 指令配置工作目录。

可以使用多个 `WORKDIR` 指令，后续命令如果参数是相对路径，则会基于之前命令指定的路径。例如

```
WORKDIR /a
WORKDIR b
WORKDIR c
RUN pwd
```

则最终路径为 `/a/b/c`。

* ONBUILD

格式为 `ONBUILD [INSTRUCTION]`。

配置当所创建的镜像作为其它新创建镜像的基础镜像时，所执行的操作指令。

例如，Dockerfile 使用如下的内容创建了镜像 `image-A`。

```
[...]
ONBUILD ADD . /app/src
ONBUILD RUN /usr/local/bin/python-build --dir /app/src
[...]
```

如果基于 image-A 创建新的镜像时，新的 Dockerfile 中使用 `FROM image-A`指定基础镜像时，会自动执行 `ONBUILD` 指令内容，等价于在后面添加了两条指令。

```sh
FROM image-A

#Automatically run the following
ADD . /app/src
RUN /usr/local/bin/python-build --dir /app/src
```

使用 `ONBUILD` 指令的镜像，推荐在标签中注明，例如 `ruby:1.9-onbuild`。

最后，这边有一个 Docker 官方 MongoDB 的例子：

```shell
#
# MongoDB Dockerfile
#
# https://github.com/dockerfile/mongodb
#

# Pull base image.
FROM dockerfile/ubuntu

# Install MongoDB.
RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > /etc/apt/sources.list.d/mongodb.list && \
  apt-get update && \
  apt-get install -y mongodb-org && \
  rm -rf /var/lib/apt/lists/*

# Define mountable directories.
VOLUME ["/data/db"]

# Define working directory.
WORKDIR /data

# Define default command.
CMD ["mongod"]

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017
```

指令的一般格式为 `INSTRUCTION arguments`，指令包括 `FROM`、`MAINTAINER`、`RUN` 等。

### 创建镜像

编写完成 Dockerfile 之后，可以通过 `docker build` 命令来创建镜像。

基本的格式为 `docker build [ 选项 ] 路径`，该命令将读取指定路径下（包括子目录）的 Dockerfile，并将该路径下所有内容发送给 Docker 服务端，由服务端来创建镜像。因此一般建议放置 Dockerfile 的目录为空目录。也可以通过 `.dockerignore` 文件（每一行添加一条匹配模式）来让 Docker 忽略路径下的目录和文件。

要指定镜像的标签信息，可以通过 `-t` 选项，例如

```
$ sudo docker build -t myrepo/myapp /tmp/test1/
```

## 容器

### 创建与移除

你的 Container 会在你结束命令之后自动退出，使用以下的命令选项可以将容器保持在激活状态：

* `-i` 即使在没有附着的情况下依然保持 STDIN 处于开启。单纯使用 -i 命令是不会出现`root@689d580b6416:/` 这种前缀。
* `-t` 分配一个伪 TTY 控制台

```sh
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

### 控制

```sh
# 启动/停止某个容器
docker [start|stop] container_name
```

```sh
# 在某个容器内执行某条命令
docker exec -ti container_name command.sh



# 查看某个容器的输出日志
docker logs -ft container_name
```

# 容器

## Volume: 数据卷

容器运行时应该尽量保持容器存储层不发生写操作，对于数据库类需要保存动态数据的应用，其数据库文件应该保存于卷(volume)中，后面的章节我们会进一步介绍 Docker 卷的概念。为了防止运行时用户忘记将动态文件所保存目录挂载为卷，在 Dockerfile 中，我们可以事先指定某些目录挂载为匿名卷，这样在运行时如果用户不指定挂载，其应用也可以正常运行，不会向容器存储层写入大量数据。数

据卷是一个可供一个或多个容器使用的特殊目录，它绕过 UFS，可以提供很多有用的特性：

* 数据卷可以在容器之间共享和重用
* 对数据卷的修改会立马生效
* 对数据卷的更新，不会影响镜像
* 卷会一直存在，直到没有容器使用

* 数据卷的使用，类似于 Linux 下对目录或文件进行 mount。

For example,

```sh
# the following creates a tmpfs volume called foo with a size of 100 megabyte and uid of 1000.
docker volume create --driver local \
    --opt type=tmpfs \
    --opt device=tmpfs \
    --opt o=size=100m,uid=1000 \
    foo
```

nother example that uses nfs to mount the /path/to/dir in rw mode from 192.168.1.1:

```sh
docker volume create --driver local \
    --opt type=nfs \
    --opt o=addr=192.168.1.1,rw \
    --opt device=:/path/to/dir \
    foo
```

```sh
docker run -d \
  -it \
  --name devtest \
  -v myvol2:/app \
  nginx:latest
```

```json
"Mounts": [
    {
        "Type": "volume",
        "Name": "myvol2",
        "Source": "/var/lib/docker/volumes/myvol2/_data",
        "Destination": "/app",
        "Driver": "local",
        "Mode": "",
        "RW": true,
        "Propagation": ""
    }
],
```

```sh
docker system prune -a
```

Docker `-v` 标记也可以指定挂载一个本地主机的目录 / 文件到容器中去：

```sh
# 挂载目录
$ sudo docker run -d -P --name web -v /src/webapp:/opt/webapp training/webapp python app.py

# 挂载文件
$ sudo docker run --rm -it -v ~/.bash_history:/.bash_history ubuntu /bin/bash

# Docker 挂载数据卷的默认权限是读写，用户也可以通过 `:ro` 指定为只读。
$ sudo docker run -d -P --name web -v /src/webapp:/opt/webapp:ro
training/webapp python app.py
```

注意：Dockerfile 中不支持这种用法，这是因为 Dockerfile 是为了移植和分享用的。然而，不同操作系统的路径格式不一样，所以目前还不能支持。

```yaml
VOLUME /data
```

## Network: 网络

# Orchestration: 编排

## Docker Compose

Docker Compose 是用于定义和运行复杂 Docker 应用的工具。你可以在一个文件中定义一个多容器的应用，然后使用一条命令来启动你的应用，然后所有相关的操作都会被自动完成。

```yaml
zookeeper:
  image: wurstmeister/zookeeper
  ports:
    - "49181:2181"
    - "22"
nimbus:
  image: wurstmeister/storm-nimbus
  ports:
    - "49773:3773"
    - "49772:3772"
    - "49627:6627"
    - "22"
  links:
    - zookeeper:zk
supervisor:
  image: wurstmeister/storm-supervisor
  ports:
    - "8000"
    - "22"
  links:
    - nimbus:nimbus
    - zookeeper:zk
ui:
  image: wurstmeister/storm-ui
  ports:
    - "49080:8080"
    - "22"
  links:
    - nimbus:nimbus
    - zookeeper:zk
```

在上面的 yaml 文件中，我们可以看到 compose 文件的基本结构。首先是定义一个服务名，下面是 yaml 服务中的一些选项条目：

​ `image`: 镜像的 ID

​ `build`: 直接从 pwd 的 Dockerfile 来 build，而非通过 image 选项来 pull

​ `links`：连接到那些容器。每个占一行，格式为 SERVICE[:ALIAS], 例如 – db[:database]

​ `external_links`：连接到该 compose.yaml 文件之外的容器中，比如是提供共享或者通用服务的容器服务。格式同 links

​ `command`：替换默认的 command 命令

​ `ports`: 导出端口。格式可以是：

```
ports:
-"3000"
    -"8000:8000"
    -"127.0.0.1:8001:8001"
```

​ `expose`：导出端口，但不映射到宿主机的端口上。它仅对 links 的容器开放。格式直接指定端口号即可。

​ `volumes`：加载路径作为卷，可以指定只读模式：

```
volumes:-/var/lib/mysql
 - cache/:/tmp/cache
 -~/configs:/etc/configs/:ro
```

​ `volumes_from`：加载其他容器或者服务的所有卷

```
environment:- RACK_ENV=development
  - SESSION_SECRET
```

​ `env_file`：从一个文件中导入环境变量，文件的格式为 RACK_ENV=development

​ `extends`: 扩展另一个服务，可以覆盖其中的一些选项。一个 sample 如下：

```
common.yml
webapp:
  build:./webapp
  environment:- DEBUG=false- SEND_EMAILS=false
development.yml
web:extends:
    file: common.yml
    service: webapp
  ports:-"8000:8000"
  links:- db
  environment:- DEBUG=true
db:
  image: postgres
```

​ `net`：容器的网络模式，可以为 ”bridge”, “none”, “container:[name or id]”, “host” 中的一个。

​ `dns`：可以设置一个或多个自定义的 DNS 地址。

​ `dns_search`: 可以设置一个或多个 DNS 的扫描域。

其他的`working_dir, entrypoint, user, hostname, domainname, mem_limit, privileged, restart, stdin_open, tty, cpu_shares`，和 `docker run`命令是一样的，这些命令都是单行的命令。例如：

```
cpu_shares:73
working_dir:/code
entrypoint: /code/entrypoint.sh
user: postgresql
hostname: foo
domainname: foo.com
mem_limit:1000000000
privileged:true
restart: always
stdin_open:true
tty:true
```

## Docker Swarm

## Docker Stack
