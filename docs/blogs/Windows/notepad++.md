### 下载

[https://notepad-plus-plus.org/downloads/v7.8.1/](https://notepad-plus-plus.org/downloads/v7.8.1/)

### 安装

免安装版：解压即用

### 其他配置

鼠标右键显示Edit With Notepad++

1. win+r  输入regedit

2. 在计算机\HKEY_CLASSES_ROOT\*\shell下新建项Edit With Notepad++，在Edit With Notepad++下新建项command

   ![image-20200705120146312](/images/image-20200705120146312.png)

3. command设置值 D:\npp.7.8.8.bin.x64\notepad++.exe "%1"

   ![image-20200705120212753](/images/image-20200705120212753.png)

显示图标

1. 在Edit With Notepad++下新建字符串值

   名称：Icon 数据：D:\npp.7.8.8.bin.x64\notepad++.exe

   ![image-20200705123006555](/images/image-20200705123006555.png)

   名称：MultiSelectModel 数据：Single

   ![image-20200705123025759](/images/image-20200705123025759.png)

### 插件

...

