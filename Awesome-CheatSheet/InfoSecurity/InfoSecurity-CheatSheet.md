
PKI （ Public Key Infrastructure ）指的是公钥基础设施。 CA （ Certificate Authority ）指的是认证中心。 PKI 从技术上解决了网络通信安全的种种障碍。 CA 从运营、管理、规范、法律、人员等多个角度来解决了网络信任问题。由此，人们统称为“ PKI/CA ”。从总体构架来看， PKI/CA 主要由最终用户、认证中心和注册机构来组成。

KCS 全称是 Public-Key Cryptography Standards ，是由 RSA 实验室与其它安全系统开发商为促进公钥密码的发展而制订的一系列标准，PKCS 目前共发布过 15 个标准。 常用的有： 
PKCS#7 Cryptographic Message Syntax Standard 
PKCS#10 Certification Request Standard 
PKCS#12 Personal Information Exchange Syntax Standard 

X.509是常见通用的证书格式。所有的证书都符合为Public Key Infrastructure (PKI) 制定的 ITU-T X509 国际标准。 

PKCS#7 常用的后缀是： .P7B .P7C .SPC 
PKCS#12 常用的后缀有： .P12 .PFX 
X.509 DER 编码(ASCII)的后缀是： .DER .CER .CRT 
X.509 PAM 编码(Base64)的后缀是： .PEM .CER .CRT 
.cer/.crt是用于存放证书，它是2进制形式存放的，不含私钥。 
.pem跟crt/cer的区别是它以Ascii来表示。 
pfx/p12用于存放个人证书/私钥，他通常包含保护密码，2进制方式 
p10是证书请求 
p7r是CA对证书请求的回复，只用于导入 
p7b以树状展示证书链(certificate chain)，同时也支持单个证书，不含私钥。 

一 用openssl创建CA证书的RSA密钥(PEM格式)： 
openssl genrsa -des3 -out ca.key 1024 

二用openssl创建CA证书(PEM格式,假如有效期为一年)： 
openssl req -new -x509 -days 365 -key ca.key -out ca.crt -config openssl.cnf 
openssl是可以生成DER格式的CA证书的，最好用IE将PEM格式的CA证书转换成DER格式的CA证书。 

三 x509到pfx 
pkcs12 -export –in keys/client1.crt -inkey keys/client1.key -out keys/client1.pfx 

四 PEM格式的ca.key转换为Microsoft可以识别的pvk格式。 
  pvk -in ca.key -out ca.pvk -nocrypt -topvk 
五 PKCS#12 到 PEM 的转换 
openssl pkcs12 -nocerts -nodes -in cert.p12 -out private.pem 
验证 openssl pkcs12 -clcerts -nokeys -in cert.p12 -out cert.pem 
六 从 PFX 格式文件中提取私钥格式文件 (.key) 
openssl pkcs12 -in mycert.pfx -nocerts -nodes -out mycert.key 
七 转换 pem 到到 spc 
openssl crl2pkcs7 -nocrl -certfile venus.pem  -outform DER -out venus.spc 
用 -outform -inform 指定 DER 还是 PAM 格式。例如： 
openssl x509 -in Cert.pem -inform PEM -out cert.der -outform DER 
八 PEM 到 PKCS#12 的转换， 
openssl pkcs12 -export -in Cert.pem -out Cert.p12 -inkey key.pem 

密钥库文件格式【Keystore】 

格式     :  JKS 
扩展名  : .jks/.ks 
描述     : 【Java Keystore】密钥库的Java实现版本，provider为SUN 
特点     :  密钥库和私钥用不同的密码进行保护 

格式     :  JCEKS 
扩展名  :  .jce 
描述     : 【JCE Keystore】密钥库的JCE实现版本，provider为SUN JCE 
特点     :  相对于JKS安全级别更高，保护Keystore私钥时采用TripleDES 

格式     :  PKCS12 
扩展名  :  .p12/.pfx 
描述     : 【PKCS #12】个人信息交换语法标准 
特点     :  1、包含私钥、公钥及其证书 
               2、密钥库和私钥用相同密码进行保护 

格式     :  BKS 
扩展名  : .bks 
描述     :  Bouncycastle Keystore】密钥库的BC实现版本，provider为BC 
特点     :  基于JCE实现 

格式     : UBER 
扩展名  : .ubr 
描述     : 【Bouncycastle UBER Keystore】密钥库的BC更安全实现版本，provider为BC 




证书文件格式【Certificate】 
格式          :  DER 
扩展名       :  .cer/.crt/.rsa 

描述          : 【ASN .1 DER】用于存放证书 
特点          :  不含私钥、二进制 

格式          :  PKCS7 
扩展名       : .p7b/.p7r 
描述          : 【PKCS #7】加密信息语法标准 

特点          : 1、p7b以树状展示证书链，不含私钥 
                  2、p7r为CA对证书请求签名的回复，只能用于导入 

格式          :  CMS 
扩展名       :  .p7c/.p7m/.p7s 
描述          : 【Cryptographic Message Syntax】 
特点          : 1、p7c只保存证书 
                  2、p7m：signature with enveloped data 
                  3、p7s：时间戳签名文件 

格式          :  PEM 
扩展名       : .pem 
描述          : 【Printable Encoded Message】 
特点          : 1、该编码格式在RFC1421中定义，其实PEM是【Privacy-Enhanced Mail】的简写，但他也同样广泛运用于密钥管理 
                  2、ASCII文件 
                  3、一般基于base 64编码 
                  4. Apache 用到的CA证书链就是PEM格式,它实际上可保存普通多个X509证书(.cer),  将每个证书简单加在一起就可以了 

格式         :  PKCS10 
扩展名      : .p10/.csr 
描述         : 【PKCS #10】公钥加密标准【Certificate Signing Request】 
特点         :  1、证书签名请求文件 
                  2、ASCII文件 
                  3、CA签名后以p7r文件回复 

格式         :  SPC 
扩展名      : .pvk/.spc 
描述         : 【Software Publishing Certificate】 
特点         :  微软公司特有的双证书文件格式，经常用于代码签名，其中 
                  1、pvk用于保存私钥 
                  2、spc用于保存公钥