---
title: CentOS 7软件安装记录
---

# CentOS7软件安装记录

### 准备工作

#### 更换阿里云源

##### 备份

```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

##### 下载最新的CentOS-Base.repo 到/etc/yum.repos.d/

```
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

##### 生成缓存

```
yum makecache
```

### FTP

#### 安装

```
yum install -y vsftpd
```

#### 修改配置

> 匿名用户常见的配置项及含义：
> anonymous_enable=YES:是否允许匿名访问；
> anon_umask=022:设置匿名用户所上传文件的默认权限掩码值（反掩码）；
> anon_root=/var/ftp:指定匿名用户的根目录；
> anon_upload_enable=YES:是否允许匿名用户上传文件；
> anon_mkdir_write_enable=YES:是否允许匿名用户有创建目录的写入权限；
> anon_other_write_enable=YES：是否允许匿名用户有其他的写入权限（对文件改名、覆盖或删除文件等）；
>
> 本地用户的一些配置项及含义：
> local_enable=YES:是否允许本地用户访问
> local_root=/var/ftp:设置本地用户的FTP根目录（默认为用户的宿主目录）
> chroot_local_user=YES:是否将FTP本地用户禁锢在宿主目录中；
> allow_writeable_chroot=YES:允许被限制的用户主目录具有写权限
> local_max_rate=0：限制本地用户的最大传输速率（0为无限制），单位为字节/秒（B/s）
> 在/etc/vsftpd/目录下还有两个配置文件 ftpusers和user_list
> ftpusers文件：此文件中包含root、bin、daemon等用于系统运行的特殊用户，文件中列出的用户将禁止登陆vsftpd服务器
> user_list：此文件中包含的用户可能被禁止，可能被允许，具体取决于主配置文件vsftpd.conf中的设置，当存在“user_list---enable=YES时”，user_list列表文件生效，若继续指定“user_deny=YES”时，则功能与ftpusers一样，禁止文件内的用户登录，将YES改为NO时，表示允许。

```
vim /etc/vaftpd/vsftpd.conf
vim /etc/vsftpd/vsftpd.conf
:set number
# 12
anonymous_enable=NO
# 101-106
chroot_local_user=YES
102 chroot_list_enable=YES
103 # (default follows)
# 添加
104 userlist_file=/etc/vsftpd/user_list
105 chroot_list_file=/etc/vsftpd/chroot_list
# 添加
106 allow_writeable_chroot=YES
# 116
listen=YES
#125
#listen_ipv6=YES
# 127
添加
userlist_deny=NO
```

2

```javascript
anonymous_enable=NO 
#关闭匿名登录
   
chroot_local_user=YES 
#用于指定用户列表文件中的用户是否允许切换到上级目录。默认值为NO。
#通过搭配能实现以下几种效果： 
#①当chroot_list_enable=YES，chroot_local_user=YES时，在/etc/vsftpd.chroot_list文件中列出的用户，可以切换到其他目录；未在文件中列出的用户，不能切换到其他目录。 
#②当chroot_list_enable=YES，chroot_local_user=NO时，在/etc/vsftpd.chroot_list文件中列出的用户，不能切换到其他目录；未在文件中列出的用户，可以切换到其他目录。 
#③当chroot_list_enable=NO，chroot_local_user=YES时，所有的用户均不能切换到其他目录。 
#④当chroot_list_enable=NO，chroot_local_user=NO时，所有的用户均可以切换到其他目录。 
   
chroot_list_enable=YES 
chroot_list_file=/etc/vsftpd/chroot_list 
 
allow_writeable_chroot=YES 
#加上这行解决了无法登陆的问题 
```

#### 设置开机启动ftp

```javascript
systemctl enable vsftpd
# 或者
chkconfig vsftpd on
```

#### 启动/重新启动ftp服务

```javascript
systemctl start vsftpd.service
systemctl restart vsftpd.service
```

#### 开放21端口

```
firewall-cmd --add-port=21/tcp --permanent
systemctl restart firewalld
```

#### 建立ftp账号

```javascript
useradd -d /path（你的ftp文件夹） -s /sbin/nologin ftpname（用户名）
```

#### 修改密码

```javascript
passwd ftpname
```

#### 设置账户权限

```javascript
chown -R ftpname /path（你的ftp路径）
chmod 777 /path
```

#### 设置路径运行上传

```javascript
setsebool -P ftp_home_dir on
setsebool allow_ftpd_full_access on
```

#### 重启vsftp服务

```javascript
systemctl restart vsftpd.service
```

#### 添加用户

```
vim /etc/vaftpd/chroot_list
# 添加刚刚设置的用户
vim /etc/vaftpd/user_list
# 添加刚刚设置的用户
```

### iptables

```
yum -y install iptables-services
systemctl restart iptables
systemctl enable iptables
```

```
-1，先检查是否安装了telnet ：
 
  rpm -qa | grep telnet
-2. 然后检查yum列表里面有什么
 
[root@slave01 ~]# yum list | grep telnet
telnet-server.x86_64                       1:0.17-48.el6                 @base 
telnet.x86_64                              1:0.17-48.el6                 base
 
-3、安装
 
yum install -y telnet-server.x86_64
yum install -y telnet.x86_64
 
-4.执行telnet ip port
```



### Java1.8

#### 下载安装包

[官网下载](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)

#### 安装

```
# 解压 移动到/usr/local/java
tar -zxvf jdk-8u241-linux-x64.tar.gz
mv jdk1.8.0_241 /usr/local/java
```

#### 设置环境变量

```
# 修改配置文件
vim /etc/profile

# 在文本末尾添加以下内容
export JAVA_HOME=/usr/local/Java/jdk1.8.0_241
export JRE_HOME=${JAVA_HOME}/jre 
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib 
export PATH=${JAVA_HOME}/bin:$PATH

# 使配置生效
source /etc/profile
```

```
# 检验是否安装成功 出现版本号即成功
java -version
```

### MySQL5.7

> 2种安装方式

#### 1、在线安装

#### 下载rpm安装源

[官网地址](https://dev.mysql.com/downloads/repo/yum/)

[rpm文件地址](https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm)

```
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
```

```
rpm -ivh mysql57-community-release-el7-11.noarch.rpm
```

#### 安装

```
yum install -y mysql-community-server
```

##### 设置开机启动

```
systemctl enable mysqld
systemctl daemon-reload
```

##### 启动MySQL服务

```
systemctl start mysqld
```

##### 修改root登录密码

```
# 获取root默认密码（由于Mysql安全策略升级，安装完成后系统自动设置了一个随机密码）
grep 'temporary password' /var/log/mysqld.log
```

```
# 输入上面获取到的密码
mysql -u root -p
```

```
vim /etc/my.cnf
# 末尾添加
validate_password = off
# 重启服务
systemctl restart mysqld
```

```
alert user 'root@localhost' identified by '123456';
```

##### 配置远程用户登录

```
GRANT ALL PRIVILEGES ON *.* TO 'xing'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;
```

```
# 开放3306端口
firewall-cmd --zone=public --add-port=3306/tcp --permanent 
firewall-cmd --reload
```

```
flush privileges;
```

#### 2、解压安装

...

### Tomcat8.5

[下载地址](https://tomcat.apache.org/download-80.cgi)

#### 安装

```
tar -zxvf apache-tomcat-8.5.51.tar.gz
cd /usr/local
mkdir -p Tomcat
mv /home/ftp/apache-tomcat-8.5.51 /usr/local/Tomcat/
```

#### 开放8080端口

```
firewall-cmd --add-port=8080/tcp --permanent
firewall-cmd --query-port=8080/tcp
systemctl restart firewalld.service
```

#### 开启ManagerApp

```
cd conf
vim tomcat-users.xml
<role rolename="manager-gui"/>
<user username="tomcat" password="s3cret" roles="manager-gui"/>
```



### Redis

#### 安装

##### 下载

```
wget http://download.redis.io/releases/redis-5.0.7.tar.gz
```

##### 解压安装包

```
# 解压后移动到/usr/local/redis
tar -zxvf redis-5.0.7.tar.gz
```

##### 安装gcc依赖

```
yum install gcc
```

##### 编译安装

```
# 到解压目录下
cd /usr/local/redis

make MALLOC=libc

# 将/usr/local/redis/src目录下的文件加到/usr/local/bin目录
cd src && make install
```

#### 启动redis的三种方式

##### 1、直接启动

```
# 在src目录下
./redis-server
```

此方法不太方便，要一直开启窗口

##### 2、以后台进程方式启动redis

```
# 修改redis.conf 改为yes
daemonize no

# 指定redis.conf文件启动
./redis-server /usr/local/redis/redis.conf

# 关闭redis进程
ps -aux | grep redis 查看进程
root  7142  0.0  0.0 112712   960 pts/0  S+ 17:44   0:00 grep --color=auto redis
# kill命令杀死进程
kill 7142
```

##### 3、开机自启(推荐)

```
# 在/etc目录下新建redis目录
cd /etc/
mkdir -p redis
# 将/usr/local/redis/redis.conf 文件复制一份到/etc/redis目录下，并命名为6379.conf（名字随便）

cp /usr/local/redis/redis.conf /etc/redis/6379.conf

# 将redis的启动脚本复制一份放到/etc/init.d目录下
cp /usr/local/redis/redis-5.0.7/utils/redis_init_script /etc/init.d/redisd

# 设置redis开机自启动  先切换到/etc/init.d目录下
chkconfig redisd on

# 可能出现的错误
service redisd does not support chkconfig
# 解决方法
vim /etc/init.d/redisd
# chkconfig:   2345 90 10
# description:  Redis is a persistent key-value database
```

```
# 启动
service redisd start
# 关闭
service redisd stop
```

参考：

https://www.cnblogs.com/zuidongfeng/p/8032505.html

https://www.cnblogs.com/heqiuyong/p/10463334.html

### MongoDB

#### 配置MongoDB的yum源

```
vim /etc/yum.repos.d/mongodb-org-4.2.repo
# 添加以下内容
[mongodb-org-4.2] 
name=MongoDB Repository 
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/ 
gpgcheck=1 
enabled=1 
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
```

#### 安装

```
yum -y install mongodb-org
```

##### 查看是否安装成功

```
mongo -version
```

##### 查看mongodb安装后的相关文件目录

```
whereis mongo
```

MongoDB默认将数据文件存放在 /var/lib/mongo 目录下，将日志文件存放在 /var/log/mongodb 目录下，并且以 mongod 用户身份运行。

可以通过修改 /etc/mongod.conf 文件指定数据文件目录和日志文件目录。

有关日志路径和数据存储路径的更多信息请参考

[帮助文档1]( https://docs.mongodb.com/manual/reference/configuration-options/#systemLog.path) 

[帮助文档2](https://docs.mongodb.com/manual/reference/configuration-options/#storage.dbPath)

如果更改了运行MongoDB的用户，则必须修改 /var/lib/mongo 和 /var/log/mongodb 的权限，使得相应的运行用户能够访问修改权限。

#### 启动

```
systemctl start mongod.service

# 开机自启
systemctl enable mongod.service
...
```

#### 创建用户

```
# 设置管理员用户和密码
mongo
use admin
db.createUser({user:"admin",pwd:"root",roles:[{role:"userAdminAnyDatabase",db:"admin"}]})
```

##### 开启身份验证

```
vim /etc/mongod.conf
# 取消注释
security:
# 添加以下内容
  authorization: enabled #要修改的位置(不要忘记authorization前面的空格2个)
```

##### 管理员登录

```
mongo -u admin -p
# 创建用户数据库
use hello
# 添加数据库用户
db.createUser({user:"xing",pwd:"123456",roles:[{role:"readWrite",db:"hello"}]})
# 登录xing用户
 mongo -u xing -p 123456 hello
```

#### 配置远程连接

##### 修改配置文件mongod.conf

```
vim /etc/mongod.conf
# 把bandIp=127.0.0.1注释或修改为bandIp=0.0.0.0
```

##### 重启mongodb服务

```
systemctl restart mongod.service
```

##### 开放27017端口

```
iptables -A INPUT -p tcp -m state --state NEW -m tcp --dport 27017 -j ACCEPT
# 或者
firewall-cmd --zone=public --add-port=27017/tcp --permanent
```

**阿里云服务器需要在安全组开放端口**

##### 远程连接

推荐使用Navicat Premium 15

...

#### 补充

##### roles:

- Read：允许用户读取指定数据库
- readWrite：允许用户读写指定数据库
- dbAdmin：允许用户在指定数据库中执行管理函数，如创建索引，删除，查看统计或访问system.profile
- userAdmin：允许用户向system.users集合写入，可以在指定数据库里创建，删除和管理用户
- clusterAdmin：只在admin数据库可用，赋予用户所有分片和复制集相关函数的管理权限
- readAnyDatabase：只在admin数据库可用，赋予用户所有数据库的读取权限
- readWriteAnyDatabase：只在admin数据库可用，赋予用户所有数据库的读写权限
- userAdminAnyDatabase：只在admin数据库可用，赋予用户所有数据库的userAdmin权限
- dbAdminAnyDatabase：只在admin数据库可用，赋予用户所有数据库的dbAdmin权限
- root：只在admin数据库可用，超级账号，超级权限

### Docker

```
https://wuxuowe5.mirror.aliyuncs.com
```

https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors

```
uname -r
```

```
yum update
```



```
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

```
yum install -y yum-utils device-mapper-persistent-data lvm2
```

```
yum-config-manager --add-repo http://download.docker.com/linux/centos/docker-ce.repo（中央仓库）

yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo（阿里仓库）
```

```
yum list docker-ce --showduplicates | sort -r
```

```
yum -y install docker-ce
```

```
systemctl start docker
```

```
docker ps 查看当前正在运行的容器
docker ps -a 查看所有容器的状态
docker start/stop id/name 启动/停止某个容器
docker attach id 进入某个容器(使用exit退出后容器也跟着停止运行)
docker exec -ti id 启动一个伪终端以交互式的方式进入某个容器（使用exit退出后容器不停止运行）
docker images 查看本地镜像
docker rm id/name 删除某个容器
docker rmi id/name 删除某个镜像
docker run --name test -ti ubuntu /bin/bash  复制ubuntu容器并且重命名为test且运行，然后以伪终端交互式方式进入容器，运行bash
docker build -t soar/centos:7.1 .  通过当前目录下的Dockerfile创建一个名为soar/centos:7.1的镜像
docker run -d -p 2222:22 --name test soar/centos:7.1  以镜像soar/centos:7.1创建名为test的容器，并以后台模式运行，并做端口映射到宿主机2222端口，P参数重启容器宿主机端口会发生改变
```

```
docker run -d --network=host --name storage -e TRACKER_SERVER=39.97.191.230:22122 -v /www/fdfs/storage:/var/fdfs -e GROUP_NAME=group1 delron/fastdfs storage
```

镜像重命名

docker images

docker tag IMAGEID(镜像id) REPOSITORY:TAG（仓库：标签）

示例：docker tag 9f6c2e7c4ff7 39.97.191.230:5000/jdk1.8:1.8





















1、开放端口

**firewall-cmd --zone=public --add-port=5672/tcp --permanent**  # 开放5672端口

**firewall-cmd --zone=public --remove-port=5672/tcp --permanent** #关闭5672端口

**firewall-cmd --reload**  # 配置立即生效

 

2、查看防火墙所有开放的端口

**firewall-cmd --zone=public --list-ports**

 

3.、关闭防火墙

如果要开放的端口太多，嫌麻烦，可以关闭防火墙，安全性自行评估

**systemctl stop firewalld.service**

 

4、查看防火墙状态

 **firewall-cmd --state**

 

5、查看监听的端口

**netstat -lnpt**

![img](https://img2018.cnblogs.com/blog/1336432/201903/1336432-20190302110949754-1765820036.png)

*PS:centos7默认没有 netstat 命令，需要安装 net-tools 工具，yum install -y net-tools*

 

 

6、检查端口被哪个进程占用

**netstat -lnpt |grep 5672**

![img](https://img2018.cnblogs.com/blog/1336432/201903/1336432-20190302104128381-1210567174.png)

 

7、查看进程的详细信息

**ps 6832**

![img](https://img2018.cnblogs.com/blog/1336432/201903/1336432-20190302104342651-779103690.png)

 

8、中止进程

**kill -9 6832**



```shell
#!/bin/bash
#chkconfig:- 20 90
#description:zookeeper
#processname:zookeeper
ZOOKEEPER_HOME=/usr/local/zookeeper
export JAVA_HOME=/usr/local/java/jdk1.8.0_241 # 此处根据你的实际情况更换对应 
case $1 in
		start) su root $ZOOKEEPER_HOME/bin/zkServer.sh start;;
		stop) su root $ZOOKEEPER_HOME/bin/zkServer.sh stop;;
		status) su root $ZOOKEEPER_HOME/bin/zkServer.sh status;;
		restart) su root $ZOOKEEPER_HOME/bin/zkServer.sh restart;;
		*) echo "require start|stop|status|restart" ;;

esac
```















### FastDFS

```
docker run -d --restart=always --privileged=true --net=host --name=fastdfs -e IP=192.168.20.20 -e WEB_PORT=80 -v ${HOME}/leyou:/var/local/leyou registry.cn-beijing.aliyuncs.com/tianzuo/fastdfs
```

- 其中-v ${HOME}/leyou:/var/local/leyou是指：将${HOME}/leyou这个目录挂载到容器里的/var/local/leyou这个目录里。所以上传的文件将被持久化到${HOME}/leyou/storage/data里，IP 后面是自己的服务器公网ip或者虚拟机ip，-e WEB_PORT=80 指定nginx端口





```
docker run -d --network=host --name tracker -v /home/leyou/docker/fastdfs/tracker:/var/fdfs delron/fastdfs tracker
```





```
docker run -d --network=host --name storage -e TRACKER_SERVER=192.168.20.20:22122 -v /home/leyou/docker/fastdfs/storage:/var/fdfs -e GROUP_NAME=group1 delron/fastdfs storage
```









### ElasticSearch

https://www.elastic.co/cn/downloads/past-releases#elasticsearch

```
docker pull elasticsearch:6.x
```



```
docker run --name elasticsearch -d -e ES_JAVA_OPTS="-Xms512m -Xmx512m" -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" f057ebddf832

docker run --name elasticsearch -d -e ES_JAVA_OPTS="-Xms512m -Xmx512m" --net host -e "discovery.type=single-node" -p 9200:9200 -p 9300:9300 f057ebddf832
```



docker inspect 5acf0e8da90b     # 查看容器内部信息



```
docker exec -it elasticsearch /bin/bash


echo 'deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-updates main restricted universe multiverse' >> sources.list
echo 'deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-backports main restricted universe multiverse' >> sources.list
echo 'deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ trusty-security main restricted universe multiverse' >> sources.list

apt-get update  # 获取最新的软件包
apt-get install vim   # 下载


ls
cd config
ls
vim elasticsearch.yml
# 添加以下内容
cluster.name: "qfcwx-cluster"   
network.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: "*"


cluster.name：自定义集群名称。
network.host：当前es节点绑定的ip地址，默认127.0.0.1，如果需要开放对外访问这个属性必须设置。
http.cors.enabled：是否支持跨域，默认为false。
http.cors.allow-origin：当设置允许跨域，默认为*，表示支持所有域名，如果我们只是允许某些网站能访问，那么可以使用正则表达式。

重启容器

```

- kinaba

  docker pull kinaba:6.8


