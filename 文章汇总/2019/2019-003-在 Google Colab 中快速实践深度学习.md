> 本文很多是对于 [Colab 官方 Welcome](https://colab.research.google.com/notebooks) 系列的总结，更多人工智能与深度学习相关知识参考[人工智能与深度学习实战 https://github.com/wx-chevalier/AIDL-Series](https://github.com/wx-chevalier/AIDL-Series) 系列文章。

# Colaboratory

Colaboratory 是一个免费的 Jupyter 笔记本环境，不需要进行任何设置就可以使用，并且完全在云端运行。借助 Colaboratory，我们可以在浏览器中编写和执行代码、保存和共享分析结果，以及利用强大的计算资源，包含 GPU 与 TPU 来运行我们的实验代码。

Colab 能够方便地与 Google Driver 与 Github 链接，我们可以使用 [Open in Colab](https://chrome.google.com/webstore/detail/open-in-colab/iogfkhleblhcpcekbiedikdehleodpjo) 插件快速打开 Github 上的 Notebook，或者使用类似于 https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb 这样的链接打开。如果需要将 Notebook 保存回 Github，直接使用 `File→Save a copy to GitHub` 即可。譬如笔者所有与 Colab 相关的代码归置在了 [AIDL-Workbench/colab](https://github.com/wx-chevalier/AIDL-Workbench/tree/master/apps/colab)。

# 依赖与运行时

## 依赖安装

Colab 提供了便捷的依赖安装功能，允许使用 pip 或者 apt-get 命令进行安装：

```sh
# Importing a library that is not in Colaboratory
!pip install -q matplotlib-venn
!apt-get -qq install -y libfluidsynth1

# Upgrading TensorFlow
# To determine which version you're using:
!pip show tensorflow

# For the current version:
!pip install --upgrade tensorflow

# For a specific version:
!pip install tensorflow==1.2

# For the latest nightly build:
!pip install tf-nightly

# Install Pytorch
from os import path
from wheel.pep425tags import get_abbr_impl, get_impl_ver, get_abi_tag
platform = '{}{}-{}'.format(get_abbr_impl(), get_impl_ver(), get_abi_tag())

accelerator = 'cu80' if path.exists('/opt/bin/nvidia-smi') else 'cpu'

!pip install -q http://download.pytorch.org/whl/{accelerator}/torch-0.4.0-{platform}-linux_x86_64.whl torchvision

# Install 7zip reader libarchive
# https://pypi.python.org/pypi/libarchive
!apt-get -qq install -y libarchive-dev && pip install -q -U libarchive
import libarchive

# Install GraphViz & PyDot
# https://pypi.python.org/pypi/pydot
!apt-get -qq install -y graphviz && pip install -q pydot
import pydot

# Install cartopy
!apt-get -qq install python-cartopy python3-cartopy
import cartopy
```

在 Colab 中还可以设置环境变量：

```py
%env KAGGLE_USERNAME=abcdefgh
```

## 硬件加速

我们可以通过如下方式查看 Colab 为我们提供的硬件：

```py
from tensorflow.python.client import device_lib
device_lib.list_local_devices()

!ls /proc
# CPU信息
!cat /proc/cpuinfo
# 内存
!cat /proc/meminfo
# 版本
!cat /proc/version
# 设备
!cat /proc/devices
# 空间
!df
```

如果需要为 Notebook 启动 GPU 支持：`Click Edit->notebook settings->hardware accelerator->GPU`，然后在代码中判断是否有可用的 GPU 设备：

```py
import tensorflow as tf
device_name = tf.test.gpu_device_name()
if device_name != '/device:GPU:0':
  raise SystemError('GPU device not found')
print('Found GPU at: {}'.format(device_name))
```

我们可以通过构建经典的 CNN 卷积层来比较 GPU 与 CPU 在运算上的差异：

```py
import tensorflow as tf
import timeit

# See https://www.tensorflow.org/tutorials/using_gpu#allowing_gpu_memory_growth
config = tf.ConfigProto()
config.gpu_options.allow_growth = True

with tf.device('/cpu:0'):
  random_image_cpu = tf.random_normal((100, 100, 100, 3))
  net_cpu = tf.layers.conv2d(random_image_cpu, 32, 7)
  net_cpu = tf.reduce_sum(net_cpu)

with tf.device('/gpu:0'):
  random_image_gpu = tf.random_normal((100, 100, 100, 3))
  net_gpu = tf.layers.conv2d(random_image_gpu, 32, 7)
  net_gpu = tf.reduce_sum(net_gpu)

sess = tf.Session(config=config)

# Test execution once to detect errors early.
try:
  sess.run(tf.global_variables_initializer())
except tf.errors.InvalidArgumentError:
  print(
      '\n\nThis error most likely means that this notebook is not '
      'configured to use a GPU.  Change this in Notebook Settings via the '
      'command palette (cmd/ctrl-shift-P) or the Edit menu.\n\n')
  raise

def cpu():
  sess.run(net_cpu)

def gpu():
  sess.run(net_gpu)

# Runs the op several times.
print('Time (s) to convolve 32x7x7x3 filter over random 100x100x100x3 images '
      '(batch x height x width x channel). Sum of ten runs.')
print('CPU (s):')
cpu_time = timeit.timeit('cpu()', number=10, setup="from __main__ import cpu")
print(cpu_time)
print('GPU (s):')
gpu_time = timeit.timeit('gpu()', number=10, setup="from __main__ import gpu")
print(gpu_time)
print('GPU speedup over CPU: {}x'.format(int(cpu_time/gpu_time)))

sess.close()
```

## 本地运行

Colab 还支持直接将 Notebook 连接到本地的 Jupyter 服务器以运行，首先需要启用 jupyter_http_over_ws 扩展程序：

```py
pip install jupyter_http_over_ws
jupyter serverextension enable --py jupyter_http_over_ws
```

然后在正常方式启动 Jupyter 服务器，设置一个标记来明确表明信任来自 Colaboratory 前端的 WebSocket 连接：

```sh
jupyter notebook \
  --NotebookApp.allow_origin='https://colab.research.google.com' \
  --port=8888 \
  --NotebookApp.port_retries=0
```

然后在 Colab 的 Notebook 中选择连接到本地代码执行程序即可。

# 数据与外部模块

Colab 中的 notebook 和 py 文件默认都是以 /content/ 作为工作目录，需要执行一下命令手动切换工作目录，例如：

```py
import os

path = "/content/drive/colab-notebook/lesson1-week2/assignment2"
os.chdir(path)
os.listdir(path)
```

## Google Driver

在过去进行实验的时候，大量训练与测试数据的获取、存储与加载一直是令人头疼的问题；在 Colab 中，笔者将 [Awesome DataSets https://url.wx-coder.cn/FqwyP](https://url.wx-coder.cn/FqwyP)) 中的相关数据通过 [AIDL-Workbench/datasets](https://github.com/wx-chevalier/AIDL-Workbench/tree/master/datasets) 中的脚本持久化存储在 Google Driver 中。

在 Colab 中我们可以将 Google Driver 挂载到当的工作路径：

```py
from google.colab import drive
drive.mount("/content/drive")

print('Files in Drive:')
!ls /content/drive/'My Drive'
```

然后通过正常的 Linux Shell 命令来创建与操作：

```sh
# Working with files
# Create directories for the new project
!mkdir -p drive/kaggle/talkingdata-adtracking-fraud-detection

!mkdir -p drive/kaggle/talkingdata-adtracking-fraud-detection/input/train
!mkdir -p drive/kaggle/talkingdata-adtracking-fraud-detection/input/test
!mkdir -p drive/kaggle/talkingdata-adtracking-fraud-detection/input/valid

# Download files
!wget -O /content/drive/'My Drive'/Data/fashion_mnist/train-images-idx3-ubyte.gz http://fashion-mnist.s3-website.eu-central-1.amazonaws.com/train-images-idx3-ubyte.gz

# Download and Unzip files
%env DIR=/content/drive/My Drive/Data/animals/cats_and_dogs

!rm -rf "$DIR"
!mkdir -pv "$DIR"
!wget -O "$DIR"/Cat_Dog_data.zip https://s3.amazonaws.com/content.udacity-data.com/nd089/Cat_Dog_data.zip

# remove existing directories
!(cd "$DIR" && unzip -qqj Cat_Dog_data.zip -d .)
```

## 外部 Python 文件

Colab 允许我们上传 Python 文件到工作目录下，或者加载 Google Driver 中的 Python：

```py
# Import modules
import imp
helper = imp.new_module('helper')
exec(open("drive/path/to/helper.py").read(), helper.__dict__)

fc_model = imp.new_module('fc_model')
exec(open("pytorch-challenge/deep-learning-v2-pytorch/intro-to-pytorch/fc_model.py").read(), fc_model.__dict__)
```

## 文件上传与下载

Colab 还允许我们在运行脚本时候直接从本地文件上传，或者将生成的模型下载到本地文件：

```py
from google.colab import files

# Upload file
uploaded = files.upload()

for fn in uploaded.keys():
  print('User uploaded file "{name}" with length {length} bytes'.format(
      name=fn, length=len(uploaded[fn])))

# Download file
with open('example.txt', 'w') as f:
  f.write('some content')

files.download('example.txt')
```

## BigQuery

如果我们使用了 BigQuery 提供了大数据的查询与管理功能，那么在 Colab 中也可以直接引入 BigQuery 中的数据源：

```py
from google.cloud import bigquery

client = bigquery.Client(project=project_id)

sample_count = 2000
row_count = client.query('''
  SELECT
    COUNT(*) as total
  FROM `bigquery-public-data.samples.gsod`''').to_dataframe().total[0]

df = client.query('''
  SELECT
    *
  FROM
    `bigquery-public-data.samples.gsod`
  WHERE RAND() < %d/%d
''' % (sample_count, row_count)).to_dataframe()

print('Full dataset has %d rows' % row_count)
```

# 控件使用

## 网格

Colab 为我们提供了 Grid 以及 Tab 控件，来便于我们构建简单的图表布局：

```py
import numpy as np
import random
import time
from matplotlib import pylab
grid = widgets.Grid(2, 2)
for i in range(20):
  with grid.output_to(random.randint(0, 1), random.randint(0, 1)):
    grid.clear_cell()
    pylab.figure(figsize=(2, 2))
    pylab.plot(np.random.random((10, 1)))
  time.sleep(0.5)
```

![](https://i.postimg.cc/JzFGTQdc/image.png)

TabBar 提供了页签化的布局：

```py
from __future__ import print_function

from google.colab import widgets
from google.colab import output
from matplotlib import pylab
from six.moves import zip


def create_tab(location):
  tb = widgets.TabBar(['a', 'b'], location=location)
  with tb.output_to('a'):
    pylab.figure(figsize=(3, 3))
    pylab.plot([1, 2, 3])
  # Note you can access tab by its name (if they are unique), or
  # by its index.
  with tb.output_to(1):
    pylab.figure(figsize=(3, 3))
    pylab.plot([3, 2, 3])
    pylab.show()


print('Different orientations for tabs')

positions = ['start', 'bottom', 'end', 'top']

for p, _ in zip(positions, widgets.Grid(1, 4)):
  print('---- %s ---' % p)
  create_tab(p)
```

![](https://i.postimg.cc/xTb7JjVf/image.png)

## 表单

值得称道的是，Colab 还提供了可交互的表单式组件，来方便我们构建可动态输入的应用：

```py
#@title String fields

text = 'value' #@param {type:"string"}
dropdown = '1st option' #@param ["1st option", "2nd option", "3rd option"]
text_and_dropdown = '2nd option' #@param ["1st option", "2nd option", "3rd option"] {allow-input: true}

print(text)
print(dropdown)
print(text_and_dropdown)
```

![](https://i.postimg.cc/4x6SP83j/image.png)

# 延伸阅读

- [人工智能与深度学习实战 https://github.com/wx-chevalier/AIDL-Series](https://github.com/wx-chevalier/AIDL-Series)

- [AIDL-Workbench | 代码实践 https://github.com/wx-chevalier/AIDL-Workbench](https://github.com/wx-chevalier/AIDL-Workbench)

- [Awesome DataScienceAI Lists https://parg.co/4B0](https://parg.co/4B0)

- [现代 Python 开发：语法基础与工程实践 https://url.wx-coder.cn/0xsNK](https://url.wx-coder.cn/0xsNK)
