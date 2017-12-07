# Docker

![](https://coding.net/u/hoteam/p/Cache/git/raw/master/2017/6/1/WX20170703-131127.png)

参考了 [Docker Cheat Sheet](https://parg.co/Upp)

# 镜像与容器

## 镜像

### 拉取与创建

```sh
# 拉取镜像
docker pull image_name

# 将某个容器保存为镜像
docker commit -m “commit message” -a “author”  container_name username/image_name:tag
```

### 管理

```sh
# 删除所有无用的镜像
docker rmi $(docker images -q -f dangling=true)
```

## 容器

### 生命周期

* 创建容器

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

* 启动容器

```sh
# 启动/停止某个容器
docker [start|stop] container_name
```

* 容器交互

```sh
# 在某个容器内执行某条命令
docker exec -ti container_name command.sh



# 查看某个容器的输出日志
docker logs -ft container_name
```

### 编排

* Docker Machine

```
# 启动某个 Docker Machine
docker-machine start machine_name



# 配置 Docker 管理远程机器
eval “$(docker-machine env machine_name)”
```

# Volume: 数据卷

For example, the following creates a tmpfs volume called foo with a size of 100 megabyte and uid of 1000.

```sh
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

# Orchestration: 编排

## Docker Compose

Docker Compose 是用于定义和运行复杂 Docker 应用的工具。你可以在一个文件中定义一个多容器的应用，然后使用一条命令来启动你的应用，然后所有相关的操作都会被自动完成。

```yaml
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

## Docker Swarm
