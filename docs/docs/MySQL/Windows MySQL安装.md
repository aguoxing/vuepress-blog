### Windows MySQL安装

- 配置文件

  ```
  [mysqld]
  port = 3306
  basedir=D:/mysql-5.7.21-winx64
  datadir=D:/mysql-5.7.21-winx64/data
  max_connections=200
  character-set-server=utf8
  default-storage-engine=INNODB
  sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
  [mysql]
  default-character-set=utf8
  ```

- 环境变量
  变量名：MYSQL_HOME
  值：安装路径

  以管理员身份打开cmd命令窗口，将目录切换到MySQL的安装目录的bin目录下
  执行以下命令：
  1.mysqld -install //执行命令后提示：Service successfully installed. 表示安装成功
  2.mysqld --initialize-insecure --user=mysql //执行命令后会在MySQL的安装目录下生成data目录并创建root用户
  3.net start mysql  //启动mysql

  4.mysqladmin -u root -p password 新密码  //修改密码
     Enter password: 旧密码 



```
管理员身份运行cmd

mysqld --install

mysqld --initialize --console

*dYlwuy/I9op

net start mysql


alter user 'root'@'localhost' identified by 'mysql123456';

```

