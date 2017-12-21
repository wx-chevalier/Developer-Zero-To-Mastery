[![返回目录](https://parg.co/UCb)](https://parg.co/UCH) 
 
 


# 微积分

### 两边夹定理

当$x \in U(x_0,r)$时，有$g(x) \le f(x) \le h(x)$成立，并且如果$\lim_{x->x_0}g(x)=A$ $\lim_{x->x_0}g(x)=A$，那么有：

​                                                  $\lim_{x->x_0}f(x)=A$

### 极限存在定理

单调有界数列必有极限

## 导数

简单来说，导数就是曲线的斜率，是曲线变化快慢的反应。而二阶导数是斜率变化快慢的反应，表征曲线的凹凸性。

![](http://d.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=51054ce208d162d991e36a4e70b6c289/e61190ef76c6a7ef9d16aa00fffaaf51f3de66e7.jpg)

### Taylor公式 - Maclaurin公式

$f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots + \\ \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_n(x)$

而Maclaurin公式就是当$x_0 = 0$的时候的Taylor公式

$f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots + \frac{f^{(n)}(0)}{n!}x^n + o(x^n)$

### 方向导数

如果函数$z=f(x,y)$在点$P(x,y)$是可微分的，那么该函数在该点沿任一方向$L$的方向导数都存在，且有：

$\frac{\partial f}{\partial l} = \frac{\partial f}{\partial x}cos\varphi + \frac{\partial f}{\partial y}sin\varphi$

其中，$\varphi$为$x$轴到方向$L$的夹角。

### 梯度

梯度的方向是函数在该点变化最快的方向。梯度经常用在梯度下降法中。设函数$z=f(x,y)$在平面区域$D$内具有一阶连续偏导数，则对于每一个点$P(x,y) \in D$，向量$\lgroup \frac{\partial f}{\partial x},\frac{\partial f}{\partial y} \rgroup$为函数在该点$P$的梯度，记作$grad f(x,y)$

#### 凸函数

割线位于函数之上。

$\forall x,y \in dome , 0 \le \theta \le 1$，有

$f(\theta x + (1 - \theta)y) \le \theta f(x) + (1 - \theta)f(y)$

凸函数在高等数学中有时候被称为凹函数，但是在机器学习中统一称为凸函数。一元二阶可微的函数在区间上是凸的，当且仅当它的二阶导数是非负的。



# 概率论

对于概率的认知：$P(x) \in [0,1]$，需要注意的是，$P=0$并不意味着某件事情一定不会发生。譬如桌子上的任意一定相对于整个桌面的概率就是零，但是硬币落到该点还是可能发生的。所以对概率的定义时，如果$x$为离散/连续变量，则$P(x=x_{0})$表示$x_0$发生的概率/概率密度。

累积分布函数：$\phi(x) = P(x \le x_0 )$

- $\phi(x)$一定为单调递增函数
- $min(\phi(x)) = 0$，$max(\phi(x))$ = 1
- 将值域为$[0,1]$的某函数$y=f(x)$看成y事件的累积概率，若$y$可导，则称$f'(x)$为某个概率的概率密度函数

### 古典概型

### 几何概型

## 概率公式

- 条件概率

$P(A|B) = \frac{P(AB)}{P(B)}$

- 全概率公式

$P(A) = \sum_iP(A|B_i)P(B_i)$

- 贝叶斯公式

$P(B_i|A) = \frac{P(AB_i)}{P(A)} = \frac{P(A|B_i)P(B_i)}{\sum_jP(A|B_j)P(B_j)}$

![](http://7xlgth.com1.z0.glb.clouddn.com/EE3A5CDB-7286-4DC8-A8D4-3C97CE96CCE1.png)

上述公式中的$P(B_i)$即为没有数据支持下，事件$B(i)$的发生概率，也就是先验概率。而$P(B_i|A)$即在数据集合A的情况下，可能是属于事件$B_i$的概率，也就是后验概率。而$P(A|B_i)$即给定某参数的概率分布，也就是似然函数。

## 参数估计

给定某系统的若干样本，求该系统的参数。

- 矩估计/MLE/MaxEnt/EM

频率学派：假定参数是某个/某些未知的定值，求这些参数如何取值，能够使得某目标函数取极大/极小。

- 贝叶斯模型

贝叶斯学派：假定参数本身是变化的，服从某个分布。求在这个分布约束下使得某目标函数极大/极小。



## 常见分布

### 两点分布(0-1分布)

已知随机变量$X$的分布律为：

| $X$  | 1    | 0     |
| ---- | ---- | ----- |
| $p$  | $p$  | $1-p$ |

则有 $E(X) = 1 * p + 0 * q = p$

$D(X) = E(X^2) - [E(X)]^2 = pq$



# 数理统计与参数估计

某个分布的期望，对于离散型而言：

$E(X)=\sum_i{x_i}{p_i}$

连续型：$E(X)=\sum_{-\infty}^{\infty}xf(x)dx$

概率运算中无条件成立的是：

$E(kX)=kE(X)$

$E(X+Y)=E(X)+E(Y)$

如果$X$和$Y$相互独立

$E(XY)=E(X)E(Y)$

反之不成立，事实上，如果$E(XY)=E(X)E(Y)$，只能说明$X$和$Y$不相关。

$Var(X)=E\{[X-E(X)]^2\}=E(X^2)-E^2(X)$

无条件成立：

$Var(c)=0$

$Var(X+c)=Var(X)$

$Var(kX)=k^2Var(X)$

### 协方差

$Cov(X,Y)=E\{[X-E(X)][Y-E(Y)]\}$

性质

$Cov(X,Y)=Cov(Y,X)$

$Cov(aX+b,cY+d)=acCov(X,Y)$

$Cov(X_1+X_Y)=Cov(X_1,Y)+Cov(X_2,Y)$

$Cov(X,Y)=E(XY)-E(X)E(Y)$

如果$Cov(X,Y)=0$，则$X$和$Y$不相关。

协方差是两个随机变量具有相同方向变化趋势的度量：

如果$Cov(X,Y)>0$，它们的变化趋势相同。

如果$Cov(X,Y)<0$，它们的变化趋势相反。

如果$Cov(X,Y)=0$，则称$X$和$Y$不相关。如果$X$和$Y$不相关，则说明$X$和$Y$之间没有线性关系，但是有可能存在其他函数关系，即不能保证$X$和$Y$相互独立。但是对于二维正态随机变量，$X$和$Y$不相关即等价于$X$和$Y$相互独立。

### 相关系数

定义：$\rho=\frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}}$，根据协方差的定义可知：$|\rho|\leq1$

当且仅当$X$和$Y$有线性关系的时候，等号成立。

## 矩

对于随机变量$X$,$X$的$k$阶原点矩为：

$E(X^k)$

### 偏度

![](http://www.fusioninvesting.com/wp-content/uploads/2010/09/Skewness_Statistics.svg_.png)

偏度衡量随机变量概率分布的不对称性，是相对于平均值不对称程度的度量。偏度的值可以为正，可以为负或者无定义。偏度为负/正表示在概率密度函数左侧/右侧的尾部比右侧/左侧的长，长尾在左侧/右侧。

偏度为零表示数值相对均匀地分布在平均值的两侧，但不一定意味着一定是对称分布。偏度有时候用$Skew[X]$表示：

$\gamma_1=E[\lgroup\frac{X-\mu}{\sigma}\rgroup^3]=\frac{E[(X-\mu)^3]}{(E[(X-\mu)^2])^{3/2}}=\frac{E[X^3]-3\mu\sigma^2-\mu^3}{\sigma^3}$

### 峰度

峰度是概率密度在均指处峰值高低的特征，通常定义四阶中心矩除以方差的平方减3。

$$
\gamma_2=\frac{\kappa_4}{\kappa_2^2}=\frac{\mu_4}{\sigma^4}-3=\frac{\frac{1}{n}\sum_{i=1}^n(x_i-\bar  x)^4}{(\frac{1}{n}\sum_{i=1}^n(x_i-\bar x)^2)^2}-3
$$

注意，减3是为了使得高斯分布的峰度为0。

### 切比雪夫不等式

假设随机变量$X$的期望为$\mu$，方差为$\sigma^2$，对于任意整数$\varepsilon$，有：

$P\{|X-\mu|\geq\varepsilon\}\le\frac{\sigma^2}{\varepsilon^2}$

切比雪夫不等式说明，$X$的方差越小，事件$\{|X-\mu|<\varepsilon\}$发生的概率越大，即$X$取值基本上集中在期望$\mu$附近。

### 大数定理

假设随机变量$X_1,X_2,\dots X_n \dots$互相独立，并且具有相同的期望$\mu$和方差$\sigma^2$。作前$n$个随机变量的平均：

$Y_n=\frac{1}{n}\sum_{i=1}^{n}X_i$

，则对于任意整数$\varepsilon$，存在有：

$lim_{n \to \infty}P\{|Y_n-\mu|<\varepsilon\}=1$

一次试验中事件A发生的概率为$p$，重复$n$次独立实验中，事件$A$发生了$n_A$次，则$p$、$n$、$n_A$的关系满足，对于任意整数$\varepsilon$则

$lim_{n \to \infty}P\{|\frac{n_A}{n}-p|<\varepsilon\}=1$

### 中心极限定理

假设随机变量$X_1,X_2,\dots X_n \dots$互相独立，并且具有相同的期望$\mu$和方差$\sigma^2$。则随机变量：

$Y_n=\frac{\sum_{i=1}^{n}X_i-n\mu}{\sqrt{n}\sigma}$

的分布收敛到标准正态分布，也就是说，$\sum_{i=1}^{n}X_i$收敛到正态分布$N(n\mu,n\sigma^2)$

### 样本的统计量

设$X_1,X_2,\dots X_n \dots$为一组样本，则样本均值：

$\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$

样本方差：

$S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar{X})^2$

样本方差的分母使用$n-1$而非$n$，是为了无偏。

## 参数估计

### 矩估计

设总体的均值为$\mu$，方差为$\sigma^2$，其中$\mu$与$\sigma$未知，则有原点距表达式：

$$
\left\{ 
\begin{array}{c}
E(X)=\mu \\ 
E(X^2)=Var(X)+[E(X)]^2=\sigma^2+\mu^2
\end{array}
\right.
$$

根据该总体的一组样本，求得原点距：

$$
\left\{ 
\begin{array}{c}
\hat{\mu} = \bar{X} \\ 
\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^{n}(X_i-\bar{X})^2 
\end{array}
\right.
$$

### 极大似然估计(MLE)

极大似然估计来源于对于贝叶斯公式的抽象，给定某些样本$D$，在这些样本中计算某结论$A_1、A_2、\dots A_n$出现的概率，即$P(A_i|D)$，则有：

$maxP(A_i|D) \to maxP(D|A_i)$

假设总体分布为$f(x,\theta)$,$X_1,X_2,\dots X_n \dots$为独立同分布，于是，它们的联合密度函数为：

$L(x_1,x_2,\dots,x_n;\theta_1,\theta_2,\dots,\theta_k)=\prod_{i=1}{n}f(x_i;\theta_1,\theta_2,\dots,\theta_k)$

这里$\theta$是一个未知量，即$L(x,\theta)$是关于$\theta$的函数，即似然函数。而求取$\theta$值的过程，就是所谓的极大似然估计。

$logL(\theta_1,\theta_2,\dots,\theta_k)=\sum_{i=1}^{n}f(x_i;\theta_1,\theta_2,\dots,\theta_k)$

$\frac{\partial L(\theta)}{\partial \theta_i}=0,i=1,2,\dots,k$

#### 二项分布的极大似然估计

投硬币实验中，进行$N$次的独立实验，$n$次朝上，$N-n$次朝下。假定朝上的概率为$p$，使用对数似然函数作为目标函数：

$f(n|p)=log(p^n(1-p)^{N-n}) {\to}h(p)$

$\frac{\partial h(p)}{\partial p}=\frac{n}{p}-\frac{N-n}{1-p} \to 0$

$p=\frac{n}{N}$

#### 正态分布的极大似然估计

$$
l(x)=log\prod_i \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} \\
=\sum_i log \frac{1}{\sqrt{2\pi}\sigma}e^{-\frac{(x_i-\mu)^2}{2\sigma^2}} \\
= -\frac{n}{2}log(2\pi\sigma^2)-\frac{1}{2\sigma^2}\sum_i{(x_i-\mu)^2}
$$

得到目标函数之后，将目标函数对于参数$\mu$，$\sigma$分别求偏导，很容易得到$\mu$，$\sigma$的式子：

$$
\mu = \frac{1}{n}\sum_ix_i \\
\sigma^2=\frac{1}{n}\sum_i(x_i-\mu)^2
$$

这个结论和矩估计的结果是一致的，并且意义非常直观：样本的均值即高斯分布的均值，样本的伪方差即高斯分布的方差。注意，经典意义下的方差，分母是$n-1$；在似然估计的方法中，求得的方差是$n$。

### 参数估计的无偏性

利用已知样本$X_1,X_2,\dots X_n \dots$能够得到参数的一个估计$\hat \theta$，因此$\hat \theta$可以写成$\hat \theta(X_1,X_2,\dots,X_n)$，对于不同的样本，$\hat \theta$的值一般不同。因此，可以看做是关于样本的随机变量。它是可以求均值的：$E(\hat \theta)$。如果该值等于总体的实际分布$\theta$，就说这个估计是无偏估计，即$E(\hat \theta)=\theta$。

一般来说，样本均值和方差都是总体的无偏估计。假设总体均值为$\mu$，方差为$\sigma^2$，$X_1,X_2,\dots X_n \dots$为来自该总体的样本，即：

$$
\bar X=\frac{1}{n}\sum_{i=1}^nX_i \\
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X^2) \\
E(\bar X)=\mu \\
$$

![](http://7xlgth.com1.z0.glb.clouddn.com/33106155-CB3C-4458-AE27-4E8E0D8B5811.png)

上面是论述了当求样本方差为$n$时候的情况，而如果样本方差为$n-1$时：

$$
E(\bar X^2)=Var(\bar X) + [E(\bar X)]^2=\frac{\sigma^2}{n}+\mu^2 \\
E(X_i^2)=Var(X_i)+[E(X_i)]^2=\sigma^2 + \mu^2 \\
E(S^2)=\frac{1}{n-1}[E(\sum_{i=1}^{n}X_i^2)-nE(\bar X^2)]= \\
\frac{1}{n-1}[(n\sigma^2 + n\mu^2)-n(\frac{\sigma^2}{n} + \mu^2)] \\
= \sigma^2
$$


# 线性代数

方阵的行列式定义如下：

- $1$阶方阵的行列式为该元素本身
- $n$阶方阵的行列式等于它的任一行或者列的各元素与其对应的代数余子式乘积之和。

## 矩阵

## 矩阵运算

### 矩阵模型

考虑某个随机过程$\pi$，它的状态有$n$个，用$1 \sim n$来表示。假设当前时刻$t$处于$i$状态下，那么它在$t+1$时刻位于$j$状态的概率为$P(i,j)=P(j|i)$，即状态转移的概率只会依赖于前一个状态。

任何一个矩阵模型，即转移概率模型都会达到一种平稳分布的状态，即

$$
lim_{n \to \infty}P_{ij}^{n}=\pi(j) \\
lim_{n \to \infty}P^n = 
\begin{bmatrix}  
\pi(1) &  \pi(2)  & \dots & \pi(n)\\ 
    \pi(1) &  \pi(2)  & \dots & \pi(n)\\ 
    \vdots & \vdots & \ddots & \vdots
 \end{bmatrix}  \quad
$$

线性方程$xP=x$的非负且唯一解即是$\pi$。

### 矩阵乘法

$A$为$m*s$阶的矩阵，$B$为$s*n$阶的矩阵，那么，$C=A*B$是$m*n$阶的矩阵，其中：

$c_{ij}=\sum_{k=1}^sa_{ik}b_{kj}$

$A$为$m*s$阶的矩阵，$B$为$s*1$的列向量，则$Ax$为$m*1$的列向量，则$Ax$为$m*1$的列向量，记$\vec {y} = A* \vec x$。由于$n$维列向量和$n$维空间的点一一对应，上式实际给出了从$n$维空间的点到$m$维空间点的线性变换。

### 矩阵的秩

在$m*n$矩阵$A$中，任取$k$行$k$列，不改变这$k^2$个元素在$A$中的次序，得到$k$阶方阵，称为矩阵$A$的$k$阶子式。显然，$m*n$矩阵$A$的$k$阶子式有$C_m^kC_n^k$个。假设在矩阵$A$中有一个不等于0的$r$阶子式$D$，并且所有$r+1$阶子式（如果存在的话）全部等于0，那么$D$称为矩阵$A$的最高阶非零子式，$r$称为矩阵$A$的秩，记作$R(A)=r$。

$$
\left\{ 
\begin{array}{c}
a_{11}x_1+a_{12}x_2+ \dots + +a_{1n}x_n=b_1\\ 
a_{11}x_1+a_{12}x_2+ \dots + +a_{1n}x_n=b_1\\ 
\dots \\
a_{11}x_1+a_{12}x_2+ \dots + +a_{1n}x_n=b_1\\ 
\end{array}
\right.
\to Ax=b
$$

对于$n$元线性方程组$Ax=b$：

- 无解的充要条件是$R(A)<R(A,b)$
- 有唯一解的充要条件是$R(A)=R(A,b)=n$


- 有无限多解的充要条件是$R(A)=R(A,b)<n$

## 向量组

### 向量组等价

向量$b$能由向量组$A:a_1,a_2,\dots,a_m$线性表示的充要条件是矩阵$A=(a_1,a_2,\dots,a_m)$的秩等于矩阵$B=(a_1,a_2,\dots,a_m,b)$的秩。设有两个向量组$A:a_1,a_2,\dots,a_m$以及$B:b_1,b_2,\dots,b_n$，若$B$组的向量都能由向量组$A$线性表示，则称向量组$B$能由向量组$A$线性表示。若向量组$A$与向量组$B$能够相互线性表示，则称两个向量组等价。如果两个向量组等价，则存在矩阵$K$:系数

$$
(b_1 b_2 \dots b_n) = (a_1 a_2 \dots a_n) 
\begin{bmatrix}  
k_{11} &  k_{12}  & \dots & k_{1n}\\ 
   k_{21} &  k_{22}  & \dots & k_{2n}\\ 
    \vdots & \vdots & \ddots & \vdots
 \end{bmatrix}  \quad
$$

向量组$B$能由向量组$A$线性表示的充要条件是矩阵$A=(a_1,a_2,\dots,a_m)$的秩等于矩阵$(A,B)=(a_1,a_2,\dots,a_m,b_1,b_2,\dots,b_n)$的秩，即：$R(A)=R(A,B)$。

## 特征值与特征变换

### 正交阵

如果$n$阶矩阵$A$满足$A^TA=I$，则称$A$为正交矩阵，简称为正交阵。$A$成为正交阵的充要条件是$A$的列（行）向量都是单位向量，且两两正交。$Ax$称作正交变换，注意，正交变换不改变向量长度。

### 特征值与特征向量

$A$是$n$阶矩阵，如果存在数$\lambda$和$n$维非0列向量$x$满足$Ax=\lambda x$，那么，数$\lambda$称为$A$的特征值，$x$称为$A$的对应于特征值$\lambda$的特征向量。假设$n$阶矩阵$A=(a_{ij})$的特征值为$\lambda_1,\lambda_2,\dots,\lambda_n$，则

$$
\lambda_1+\lambda_2+,\dots,+\lambda_n=a_{11}+a_{22}+\dots+a_{nn} \\
\lambda_1 \lambda_2 \dots \lambda_n = |A|
$$

矩阵$A$主行列式的元素和，称作矩阵$A$的迹。