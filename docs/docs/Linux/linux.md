# Linux

### git安装

- 方法一

  ```
  yum install git
  ```

该方法安装的不是最新的

- 方法二

  下载最新源码编译安装

  https://github.com/git/git/releases

  找到下载链接

  ```
  wget https://github.com/git/git/archive/v2.29.1.tar.gz
  ```

  解压

  ```
  tar -zxvf v2.29.1.tar.gz
  ```

  





安装tar

```
wget http://ftp.gnu.org/gnu/tar/tar-latest.tar.gz
tar -zxvf tar-latest.tar.gz
cd tar-*
mkdir build
cd build
../configure --prefix=/usr/local/tar
make
make install
ln -s -f /usr/local/tar/bin/tar /usr/bin/
```







### ssh连接长时间不操作断开连接问题

```
vim /etc/ssh/sshd_config

# 找到ClientAliveCountMax 设置断开时间 单位为分钟
ClientAliveCountMax 10

# 立即生效
service sshd reload
```

