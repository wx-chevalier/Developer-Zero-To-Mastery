# Weapp 资料索引

- [微信小程序开发思考总结——腾讯“信用卡还款”项目实践](http://mp.weixin.qq.com/s?__biz=MzA3NTYzODYzMg==&mid=2653578147&idx=1&sn=dc8ed8974bd7086389155eecc82e524d&chksm=84b3b1a4b3c438b275dc04bc454b1177fce1e3175841bd09a3be23ca8bf17679e3be90556d68&scene=4#wechat_redirect)

- [有用！关于微信小程序，那些开发文档没有告诉你的 ](http://www.wxapp-union.com/portal.php?aid=327&hmsr=toutiao.io&mod=view&utm_medium=toutiao.io&utm_source=toutiao.io)

- [微信小程序实战，从入门到弃坑](http://www.jianshu.com/p/4433d46e6235?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)

- [一起脱去小程序的外套和内衣 - 微信小程序架构解析](http://mp.weixin.qq.com/s/KxqdX16MH8AX7ZYv8CQNIw)

- [微信小程序剖析 | 运行机制及框架原理](http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247484316&idx=1&sn=463bbea1626458beb30f55ce155b4983&chksm=9723615ea054e848497c3b72e5264d99c9230144bd21862c508211085bf93b71078cc2fc1fc5&mpshare=1&scene=1&srcid=1010oBHfkIbQVf2UIHdXsURe#rd)


- [微信小程序填坑记，论组件复用](https://segmentfault.com/n/1330000007037416)

WXML提供两种文件引入方式，import和include。区别在于：import可以引入定义好的template模板，模板是有作用域的；而include就是拷贝一个公用的代码片段到目标文件中，适合做公共页面片的拆分。
```
<!--import-->
<import src="../template/a.wxml"/>
<!--include-->
<include src="../include/footer.wxml"/>
```
文件引入在小程序做模块化拆分的过程中非常重要。