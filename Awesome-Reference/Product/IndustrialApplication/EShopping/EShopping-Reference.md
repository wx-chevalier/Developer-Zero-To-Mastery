[![章节头](https://parg.co/UGo)](https://parg.co/b4z) 
 - [电子商务资料索引[解密Airbnb的定价算法](http://www.infoq.com/cn/articles/decryption-airbnb-pricing-algorithm?utm_campaign=rightbar_v2&utm_source=infoq&utm_medium=articles_link&utm_content=link_text)](#%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E8%B5%84%E6%96%99%E7%B4%A2%E5%BC%95%E8%A7%A3%E5%AF%86airbnb%E7%9A%84%E5%AE%9A%E4%BB%B7%E7%AE%97%E6%B3%95httpwwwinfoqcomcnarticlesdecryption-airbnb-pricing-algorithmutm_campaignrightbar_v2utm_sourceinfoqutm_mediumarticles_linkutm_contentlink_text)
- [电子支付](#%E7%94%B5%E5%AD%90%E6%94%AF%E4%BB%98)
  * [微信支付[微信支付SDK-两行代码解决支付 ](http://arccode.net/2016/05/02/%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98SDK-%E4%B8%A4%E8%A1%8C%E4%BB%A3%E7%A0%81%E8%A7%A3%E5%86%B3%E6%94%AF%E4%BB%98/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)](#%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98sdk-%E4%B8%A4%E8%A1%8C%E4%BB%A3%E7%A0%81%E8%A7%A3%E5%86%B3%E6%94%AF%E4%BB%98-httparccodenet20160502%25e5%25be%25ae%25e4%25bf%25a1%25e6%2594%25af%25e4%25bb%2598sdk-%25e4%25b8%25a4%25e8%25a1%258c%25e4%25bb%25a3%25e7%25a0%2581%25e8%25a7%25a3%25e5%2586%25b3%25e6%2594%25af%25e4%25bb%2598hmsrtoutiaoioutm_mediumtoutiaoioutm_sourcetoutiaoio)
- [红包](#%E7%BA%A2%E5%8C%85) 

# 电子商务资料索引[解密Airbnb的定价算法](http://www.infoq.com/cn/articles/decryption-airbnb-pricing-algorithm?utm_campaign=rightbar_v2&utm_source=infoq&utm_medium=articles_link&utm_content=link_text)
[Airbnb支付平台如何进行异常检测](http://www.infoq.com/cn/news/2016/03/Airbnb-FFT-anomaly-detection) 

# 电子支付
- [凤凰牌老熊:支付系统设计系列文章](http://blog.lixf.cn/essay/2016/10/08/account-1/)
- [2017-探讨一下常见支付系统的对外接口](https://segmentfault.com/a/1190000008942039) 
## 微信支付[微信支付SDK-两行代码解决支付 ](http://arccode.net/2016/05/02/%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98SDK-%E4%B8%A4%E8%A1%8C%E4%BB%A3%E7%A0%81%E8%A7%A3%E5%86%B3%E6%94%AF%E4%BB%98/?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io) 
# 红包
[10亿红包从天而降，揭秘微信摇一摇背后的技术细节](http://www.infoq.com/cn/articles/1-billion-bonus-from-the-clouds)## 微信红包算法```java
public static double getRandomMoney(LeftMoneyPackage _leftMoneyPackage) {
    // remainSize 剩余的红包数量
    // remainMoney 剩余的钱
    if (_leftMoneyPackage.remainSize == 1) {
        _leftMoneyPackage.remainSize--;
        return (double) Math.round(_leftMoneyPackage.remainMoney * 100) / 100;
    }
    Random r     = new Random();
    double min   = 0.01; //
    double max   = _leftMoneyPackage.remainMoney / _leftMoneyPackage.remainSize * 2;
    double money = r.nextDouble() * max;
    money = money <= min ? 0.01: money;
    money = Math.floor(money * 100) / 100;
    _leftMoneyPackage.remainSize--;
    _leftMoneyPackage.remainMoney -= money;
    return money;
}
```
测试数据。
测试结果测试随机红包
以上面的初始化数据（30人抢500块），执行了两次，结果如下：
// 第一次
15.69    21.18    24.11    30.85    0.74    20.85    2.96    13.43    11.12    24.87    1.86    19.62    5.97    29.33    3.05    26.94    18.69    34.47    9.4    29.83    5.17    24.67    17.09    29.96    6.77    5.79    0.34    23.89    40.44    0.92

// 第二次
10.44    18.01    17.01    21.07    11.87    4.78    30.14    32.05    16.68    20.34    12.94    27.98    9.31    17.97    12.93    28.75    12.1    12.77    7.54    10.87    4.16    25.36    26.89    5.73    11.59    23.91    17.77    15.85    23.42    9.77
对应图表如下：

![](https://pic4.zhimg.com/383a5c9dd7451db4d1bde8f59dcc66fb_b.png)
还有一张：
![](https://pic1.zhimg.com/f3db54ba944f208ed8917651cbb7ce70_b.png)
多次均值
200次
![](https://pic2.zhimg.com/90c57b9fed9398b866e636a910e8f86d_b.png)
2000次
![](https://pic1.zhimg.com/9c9d0c51d6528c2ac6ae599a640c271c_b.png)
可以看到，这个算法可以让大家抢到的红包面额在概率上是大致均匀的。

