---
title: nginx
---

vi /usr/lib/systemd/system/nginx.service

```
[Unit]
Description=nginx
After=network.target
  
[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true
  
[Install]
WantedBy=multi-user.target
```

[Unit]: 服务的说明

Description:描述服务
After:描述服务类别
[Service]服务运行参数的设置
Type=forking是后台运行的形式
ExecStart为服务的具体运行命令
ExecReload为重启命令
ExecStop为停止命令
PrivateTmp=True表示给服务分配独立的临时空间
注意：[Service]的启动、重启、停止命令全部要求使用绝对路径
[Install]运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为3

3、设置开机自启动
`systemctl enable nginx.service`

4、查看nginx状态
`systemctl status nginx.service`
很奇怪，明明启动成功了，为什么显示Active: inactive (dead)？

5、杀死nginx重启nginx
`pkill -9 nginx`

```
ps aux | grep nginx
systemctl start nginx
```

再次查看状态，变成了active，搞定。

6、重启服务器
`reboot`

7、再次连接后，查看服务状态
`systemctl status nginx.service`

```
vim /etc/rc.local

/usr/local/zookeeper/bin/zkServer.sh start
```



```
[Unit]
Description=zookeeper
After=network.target

[Service]
Type=forking
ExecStart=/usr/local/zookeeper/bin/zkServer.sh start
ExecReload=/usr/local/zookeeper/bin/zkServer.sh restart
ExecStop=/usr/local/zookeeper/bin/zkServer.sh stop
PrivateTmp=true
  
[Install]
WantedBy=multi-user.target
```
