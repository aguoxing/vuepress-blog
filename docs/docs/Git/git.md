---
title: git基本使用
---

### 服务端

> CentOS7为例

#### 安装

```shell
yum install -y git
```

#### 查看git版本

```shell
git -version
```

#### 添加git用户

```shell
useradd -d /home/git git
passwd git
```

#### 初始化git位置

```shell
git init --bare /git/workspace/schoolweb.git 
```

#### 文件授权 git 用户组

```shell
chown -R git:git /git/
```

### 客户端

#### 安装

```http
https://git-scm.com/
```

安装成功后：

![image-20200521103135104](http://cdn.codexing.cn/image-20200521103135104.png)

#### 设置提交者名字和邮箱

```shell
git config --global user.name "操作者名字"
git config --global user.email "操作者 email"
```

#### 下载源码 

```shell
git clone git@192.168.235.134:/git/workspace/schoolweb.git 
```

### Gitlab /Github公私钥配置

```shell
ssh-keygen -t rsa -C "邮箱地址@qq.com"
```

生成的文件在 C:\Users\Administrator\.ssh

### git commit 规范

用于说明 commit 的类别，只允许使用下面7个标识。

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动