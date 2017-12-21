[![返回目录](https://parg.co/UCb)](https://parg.co/UCH) 
 
 
# Create: 虚拟机创建

## ISO Storage

What you can do is issue the following command:

xe sr-create name-label=<NAME> type=iso device-config:legacy_mode=true device-config:location=<ISODIR> content-type=iso

And with generic fields populated:

xe sr-create name-label=Local type=iso device-config:legacy_mode=true device-config:location=/vm/iso content-type=iso

When you run that command, if successful, it will return a UUID for the created storage repository. Please note, you can repeat the same command as many times as you want, and each time it will create a new storage repository, which will show in your GUI afterwards as a separate entry.

xe sr-create name-label=Local type=iso device-config:legacy_mode=true device-config:location=/vm/iso content-type=iso 3476e496-185f-9eba-0f89-bb822db31ebd You can do this from the local shell after connecting via SSH:

![Local shell](http://www.dedoimedo.com/images/computers_years/2012_1/xenserver-ssh-local-shell.png)

![SR added](http://www.dedoimedo.com/images/computers_years/2012_1/xenserver-local-added.png)

And then, when you try to install the VM, you will find Local listed. Notice the two identical entries, which will show up if you enter the same command twice, so do note this as this could confuse you. Not sure if this is a bug, but this is how it works.

![Local SR shows twice](http://www.dedoimedo.com/images/computers_years/2012_1/xenserver-local-twice.jpg)

# Start

## AutoStart

在 Critix 6.0 之后将单个虚拟机的自启动功能去掉了，不过我们可以通过 TAG 管理的方式配置多个虚拟机自动启动，可惜这种方式不能支持虚拟机启动顺序的指定。首先我们需要 XenCenter 里面选中 vm---Properties---General--Tags--Edit Tags，比如输入 autostart 作为 Tag 的值，给所有需要自动启动的虚拟机都做同样的打标机操作，然后用 SSH 工具连到 XenServer, 用 vi 编辑文件 /etc/rc.d/rc.local，在文件末尾添加两行内容：

```
    sleep 60
    xe vm-start tags=autostart --multiple
```

注意 multiple 前面是两个中杠，tags=autostart 和 Step1 保持一样，保存并退出，下次启动 Xenserver 就会发现打了 Tas 的 vm 自动启动。
