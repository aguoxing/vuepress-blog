---
title: 虚拟机静态IP设置
---

![image-20200522140805425](\images\image-20200522140805425.png)

```
vim /etc/sysconfig/network-scripts/ifcfg-ens33
```

如果没有ens33

```
ifconfig ens33 up
systemctl stop NetworkManager
systemctl disable NetworkManager
ifup ens33
systemctl restart network.service
```

![image-20200522141037214](\images\image-20200522141037214.png)

```
yum install net-tools
rpm -qa|grep vim
yum -y install vim*

yum -y install wget

yum install -y telnet-server.x86_64
yum install -y telnet.x86_64
```

选择手动添加DNS服务器地址

下面是几个常见的公共DNS服务器（首选/备用）

Google Public DNS：8.8.8.8 / 8.8.4.4

OpenDNS：208.67.222.222 / 208.67.220.220

V2EX DNS：199.91.73.222 / 178.79.131.110

Dyn DNS：216.146.35.35 / 216.146.36.36

Comodo Secure DNS：8.26.56.26 / 8.20.247.20

SmartViper Public DNS：208.76.50.50 / 208.76.51.51