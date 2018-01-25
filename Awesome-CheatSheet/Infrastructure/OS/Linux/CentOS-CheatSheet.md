[![返回目录](https://parg.co/UCb)](https://parg.co/UCH)

**常用命令：**

```
查看所有网卡IP地址：ip addr

启动防火墙：systemctl start firewalld

停止防火墙：systemctl stop firewalld

禁止防火墙开机启动：systemctl disable firewalld

列出正在运行的服务状态：systemctl

启动一个服务：systemctl start postfix

关闭一个服务：systemctl stop postfix

重启一个服务：systemctl restart postfix

显示一个服务的状态：systemctl status postfix

在开机时启用一个服务：systemctl enable postfix

在开机时禁用一个服务：systemctl disable postfix

查看服务是否开机启动：systemctl is-enabled postfix.service;echo $?

查看已启动的服务列表：systemctl list-unit-files|grep enabled

查看运行级别：runlevel

设置系统默认启动运行级别3（命令行模式）：ln -sf /lib/systemd/system/multi-user.target /etc/systemd/system/default.target

设置系统默认启动运行级别5（图形界面模式）：ln -sf/lib/systemd/system/graphical.target/etc/systemd/system/default.target

在线用户：who

联网状态：netstat -a

后台执行的程序：ps -aux

查看Linux系统分区信息：fdisk -l

查看分区使用状况：df -lh

重启：init 6  或 reboot
关机：init 0 或 shutdown
```

**使用 firewall 开放 Linux 端口**：

开启 80 端口(开放 10050 到 10060 端口):

```
firewall-cmd --zone=public --permanent --add-port=80/tcp
firewall-cmd --permanent --zone=public --add-port=10050-10060/tcp
```

重启防火墙:

```
firewall-cmd --reload
```

命令含义：

命令含义：
--zone #作用域

命令含义：
--zone #作用域
--add-port=80/tcp #添加端口，格式为：端口/通讯协议

命令含义：
--zone #作用域
--add-port=80/tcp #添加端口，格式为：端口/通讯协议
--permanent #永久生效，没有此参数重启后失效

命令含义：
--zone #作用域
--add-port=80/tcp #添加端口，格式为：端口/通讯协议
--permanent #永久生效，没有此参数重启后失效其它 firewall 可以用 firewall-cmd -h 查询

**网卡操作命令(ip)：**

CentOS 7 用 ip 命令代替 ifconfig 命令:

```
ip [选项] 操作对象{link|addr|route...}
# ip link show # 显示网络接口信息
# ip link set eth0 upi # 开启网卡
# ip link set eth0 down # 关闭网卡
# ip link set eth0 promisc on # 开启网卡的混合模式
# ip link set eth0 promisc offi # 关闭网卡的混个模式
# ip link set eth0 txqueuelen 1200 # 设置网卡队列长度
# ip link set eth0 mtu 1400 # 设置网卡最大传输单元
# ip addr show # 显示网卡IP信息
# ip addr add 192.168.0.1/24 dev eth0 # 设置eth0网卡IP地址192.168.0.1
# ip addr del 192.168.0.1/24 dev eth0 # 删除eth0网卡IP地址
# ip route list # 查看路由信息
# ip route add 192.168.4.0/24 via 192.168.0.254 dev eth0 # 设置192.168.4.0网段的网关为192.168.0.254,数据走eth0接口
# ip route add default via 192.168.0.254 dev eth0 # 设置默认网关为192.168.0.254
# ip route del 192.168.4.0/24 # 删除192.168.4.0网段的网关
# ip route del default # 删除默认路由
```

**DHCP：ip 地址释放和获取**

```
#dhclient -r          #释放ip
#dhclient             #重新获取ip
```

(注：使用 ln -sf /lib/systemd/system/multi-user.target /etc/systemd/system/default.target 设置 VM 中 CentOS7 的运行级别为 3 之后，需要手动设置其 ip 地址，才能使用 XShell 连接)

**Linux 下安装(卸载)KDE 和 GNOME：**

1.查看是否安装了桌面系统

```
yum grouplist
yum grouplist ｜more ←如果输出太长，可以使用“｜more”分页显示
```

在 grouplist 的输出结果中的“InstalledGroups:”部分中，

在 grouplist 的输出结果中的“InstalledGroups:”部分中，如果你能找到“XWindow System”和“GNOME Desktop Environment 或 KDE (K DesktopEnvironment)或 XFCE-4.4”的话，证明你安装了桌面环境。

在 grouplist 的输出结果中的“InstalledGroups:”部分中，如果你能找到“XWindow System”和“GNOME Desktop Environment 或 KDE (K DesktopEnvironment)或 XFCE-4.4”的话，证明你安装了桌面环境。 2.如果系统安装之前采用最小化安装，没有安装桌面，那么先安装桌面系统：

```
yum group install "X Window System"
```

3.安装 GNOME 桌面环境

```
yum group install "Desktop"
```

4.安装 KDE 桌面环境

```
yumgroupinstall "KDE Desktop"
```

5.卸载 GNOME 桌面环境

```
yum group remove "GNOME Desktop Environment"
```

6.卸载 KDE 桌面环境

```
yum group remove "KDE Desktop"
```

**从命令行界面切换到图形界面：**

**从命令行界面切换到图形界面：**
方法 1：运行命令

```
startx
```

需要先配置图形界面信息

需要先配置图形界面信息（old）方法 2：修改/etc/inittab 文件中的

```
id:3:initdefault ，将3改为5 ，重新启动系统；
```

方法 3：进入图形界面：

```
init 5
```

**从图形界面进入命令行界面：**

```
init 3
```

**开机默认文本界面:**

```
systemctl set-default multi-user.target
```

**开机默认图形界面:**

```
systemctl set-default graphical.target
```

shutdown 关机命令：

```
shutdown now # 立即关机
shutdown +2 # 2 min 后关机
shutdown 10:01 # 10:01关机
shutdown +2 "The machine will shutdown" # 2min 后关机，并通知在线者
```

真机环境中，在图形界面和文本界面间快捷键切换：

```
Ctrl+Alt+F(n) , 其中F(n)为F1-F6 ，为6个控制台；
Ctrl+ALT+F7 ；
eg:CTRL+ALT+F1是进入文本界面，CTRL+ALT+F7才是图形界面。
```

**虚拟机静态 IP 设置及主机名设置绑定**

打开终端，root 权限下：vim /etc/sysconfig/network-scripts/ifcfg-enoXXXX，

在插入模式下：

在插入模式下：修改

```
BOOTPROTO=static
ONBOOT=yes
```

例如添加：

```
IPADDR0=192.168.145.130
NETMASK=255.255.255.0
GATEWAY0=192.168.145.1
DNS1=8.8.8.8
DNS2=8.8.4.4
```

hostname crs811 #设置主机名为 crs811

```
vi /etc/hosts #编辑配置文件
127.0.0.1 localhost www #修改localhost.localdomain为www
```

重启网络：

```
systemctl restart network
```

**Centos7 默认没有 ifconfig 和 netstat**

ifconfig 使用 ip addr 命令代替，

ifconfig 使用 ip addr 命令代替，在 cenots6 下的 ss 命令可以代替 netstat，但是现在的 ss 和以前的完全是两样 ，还是得装上才行方便查看端口占用和 tcp 链接攻击等等。

ifconfig 使用 ip addr 命令代替，在 cenots6 下的 ss 命令可以代替 netstat，但是现在的 ss 和以前的完全是两样 ，还是得装上才行方便查看端口占用和 tcp 链接攻击等等。
Centos7 下把 net-tools 包装上就好了：

```
yum install net-tools
```

**CentOS7 中　 php 默认 5.4, apache 默认 2.4,Mariadb 代替了 mysql**

**CentOS7 dhcp 启动失败可能原因**

出现问题的可能有以下几个可能：

出现问题的可能有以下几个可能：
\1. 配置文件有问题。

出现问题的可能有以下几个可能：
\1. 配置文件有问题。
1.1 内容不符合语法结构，例如，少个分号；

出现问题的可能有以下几个可能：
\1. 配置文件有问题。
1.1 内容不符合语法结构，例如，少个分号；
1.2 声明的子网和子网掩码不符合；

出现问题的可能有以下几个可能：
\1. 配置文件有问题。
1.1 内容不符合语法结构，例如，少个分号；
1.2 声明的子网和子网掩码不符合；
\2. 主机 IP 地址和声明的子网不在同一网段。

出现问题的可能有以下几个可能：
\1. 配置文件有问题。
1.1 内容不符合语法结构，例如，少个分号；
1.2 声明的子网和子网掩码不符合；
\2. 主机 IP 地址和声明的子网不在同一网段。
\3. 主机没有配置静态 IP 地址。

出现问题的可能有以下几个可能：
\1. 配置文件有问题。
1.1 内容不符合语法结构，例如，少个分号；
1.2 声明的子网和子网掩码不符合；
\2. 主机 IP 地址和声明的子网不在同一网段。
\3. 主机没有配置静态 IP 地址。
\4. 配置文件路径出问题，比如在 RHEL6 以下的版本中，配置文件保存在了/etc/dhcpd.conf，但是在 rhel6 及以上版本中，却保存在了/etc/dhcp/dhcpd.conf。

**Linux 课程(Cent OS)常用服务、工具和命令安装列表：**

```
服务：

DNS:    #yum -y install bind-chroot

DHCP:    #yum -y install dhcp

Samba:    #yum -y install samba samba-client samba-common

Web套装下载：https://www.apachefriends.org/index.html

(安装命令：1 #chmod 751*.run    2   #./*.run或#sh *.run)

命令：

dig - 查询域名解析:    #yum install bind-utils

wget - 下载文件命令: #yum install wget

CentOS 6 之前常用网络命令安装:    #yum install net-tools
```
