# Java面试

## JavaSE

### 自增变量

```java
public static void main(String[] args) {
    int i = 1;
    i = i++;
    int j = i++;
    int k = i + ++i * i++;
    System.out.println("i=" + i);  // 4
    System.out.println("j=" + j);  // 1
    System.out.println("k=" + k);  // 11
}
```

> ++ i 是先加后赋值
>
> i ++ 是先赋值后加
>
> ++i和i++都是分两步完成的
>
> i++ 返回原来的值，++i 返回加1后的值
> i++ 不能作为左值，而++i 可以

### 单例设计模式

#### 什么是Singleton？

- Singleton：在Java中即指单例设计模式，它是软件开发的常用设计模式之一
- 单：唯一
- 例：实例
- 单例设计模式，即某个类在整个系统中只能有一个实例对象可被获取和使用的代码模式
- 例如：代表JVM运行环境的Runtime类

#### 要点

- 某个类只能有一个实例

  构造器私有化

- 它必须自行创建这个实例

  含有一个该类的静态变量来保存这个唯一的实例

- 它必须自行向整个系统提供这个实例

  对外提供获取该实例对象的方式：

  1. 直接暴露
  2. 用静态变量的get方法获取

#### 几种常见形式

- 饿汉式：直接创建对象，不存在线程安全问题
  1. 直接实例化饿汉式（简洁直观）
  2. 枚举式（最简介）
  3. 静态代码块饿汉式（适合复杂实例化）

```java
/**
 * @author guoxing
 * @date 2020/7/20 14:00
 *
 * 饿汉式：
 * 直接常见实例对象，不管是否需要这个对象
 *
 * （1）构造器私有化
 * （2）自行创建，并用静态变量保存
 * （3）向外提供这个实例
 * （4）强调这是一个单单例，使用final修饰
 */
public class Singleton1 {

    public static final Singleton1 INSTANCE = new Singleton1();

    private Singleton1() {

    }
}
```

- 懒汉式：延迟创建对象
  1. 线程不安全（适用于单线程）
  2. 线程安全（适用于多线程）
  3. 静态内部类形式（使用于多线程）

```java
/**
 * @author guoxing
 * @date 2020/7/20 14:34
 * <p>
 * 懒汉式：延迟创建对象
 * （1）构造器私有化
 * （2）用一个静态变量保存这个唯一实例
 * （3）提供一个静态方法，获取这个实例对象
 */
public class Singleton4 {
    private static Singleton4 instance;

    private Singleton4() {

    }

    public static Singleton4 getInstance() {
        if (instance == null) {
            instance = new Singleton4();
        }
        return instance;
    }
}
```



### 类初始化和实例初始化

- 类的初始化过程
  1. 一个类创建实例需要先加载并初始化该类
     - main方法所在的类需要先加载和初始化
  2. 一个子类要初始化需要先初始化父类
  3. 一个类初始化就是执行<clinit>()方法
     - <clinit>()方法由静态类变量显示赋值代码和静态代码块组成
     - 类变量显示赋值代码块和静态代码块代码从上到下顺序执行
     - <clinit>()方法只执行一次
- 实例初始化过程
  1. 实例初始化就是执行<init>()方法
     - <init>()方法可能重载有多个，有几个构造器就有几个<init>方法
     - <init>()方法由非静态实例变量显示赋值代码和非静态代码块、对应构造器代码组成
   - 非静态实例变量显示赋值代码和非静态代码块从上到下顺序执行，而对应构造器的代码最后执行
     - 每次创建实例对象，调用对应构造器，执行的就是对应的<init>方法
     - <init>方法的首行是supper()或super(实参列表)，即对应父类的<init>方法
- 方法的重写
  1. 哪些方法不可以被重写
     - final方法
     - 静态方法
     - private等子类中不可见的方法
  2. 对象的多态性
     - 子类如果重写了父类的方法，通过子类对象调用的一定是子类重写过的代码
     - 非静态方法默认的调用对象是this
     - this对象在构造器或者是<init>方法中就是正在创建的对象

### 方法的参数传递机制

1. 形参是基本数据类型
   - 传递数据值
2. 实参是引用数据类型
   - 传递地址值
   - 特殊的类型：String、包装类等对象不可变性

### 递归与迭代

编程题：有n步台阶，一次只能上1步或2步，共有多少种走法？

1. 递归

   - n=1				->一步				                                                                                      ->f(1) =  1

   - n=2             ->（1）一步一步（2）直接2步                                                         ->f(2) = 2

   - n=3             ->（1）先到达f（1），然后从f（1）直接跨2步                             ->f(3) = f(1) + f(2)

     ​							（2）先到达f（2），然后从f（2）跨1步

   - n=4             ->（1）先到达f（2），然后从f（2）直接跨2步                             ->f(4) = f(2) + f(3)

     ​							（2）先到达f（3），然后从f（3）跨1步

   - n=x             ->（1）先到达f（x-2），然后从f（x-2）直接跨2步                   ->f(3) = f(x-2) + f(x-1)

     ​							（2）先到达f（x-1），然后从f（x-1）跨1步

2. 循环迭代

![image-20200721235449873](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200721235449873.png)

![image-20200722000121246](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200722000121246.png)

### 成员变量与局部变量

就近原则

变量的分类

非静态代码块的执行：每次创建实例对象都会执行

方法的调用规则：调用一次执行一次

#### 局部变量和全局变量的区别：

1. 声明的位置
   - 局部变量：方法体{}中，形参，代码块{}中
   - 成员变量：类中方法外
     - 类变量：有static修饰
     - 实例变量：没有static修饰
2. 修饰符
   - 局部变量：final
   - 成员变量：public、protected、private、final、static、volatile、transient
3. 值存储的位置：
   - 局部变量：栈
   - 实例变量：堆
   - 类变量：方法区

![image-20200725214851087](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725214851087.png)

![image-20200725221049544](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725221049544.png)

4. 作用域
   - 局部变量：从声明处开始，到所属的}结束
   - 实例变量：在当前类中“this.”（有时this.可以省略），在其他类中“对象名.”访问
   - 类变量：在当前类中“类名.”（有时类名.可以省略），在其他类中“类名.”或“对象名.”访问
5. 生命周期
   - 局部变量：每一个线程，每一次调用执行都是新的生命周期
   - 实例变量：随着对象的创建而初始化，随着对象的被回收而消亡，每一个对象的实例变量都是独立的
   - 类变量：随着类的初始化而初始化，随着类的卸载而消亡，该类的所有对象的类变量都是共享的

#### 当局部变量与xx变量重名时，如何区分：

1. 局部变量与实例变量重名

   在实例变量前面加“this.”

2. 局部变量与类变量重名

   在类变量前面加“类名.”

#### spring bean的作用域

通过scop属性来指定bean的作用域

- singleton：默认值，当IOC容器一创建就会创建bean的实例，而且是单例的，每次得到的都是同一个
- prototype：原型的，当IOC容器一创建不再实例化该bean，每次调用getBean方法时再实例化该bean
- request：每次请求实例化一个bean
- session：在一次会话中共享一个bean

### 请简介绍spring支持的常用数据库事务传播属性和事务隔离级别？

事务的属性：

1. propagproation：用来设置事务的传播行为

   事务的传播行为：一个方法运行在了一个开启了事务的方法中时，当前方法是使用原来的事务还是开启一个新的事务

   - propagproation.REQUIRED：默认值，使用原来的事务
   - propagproation.REQUIRES_NEW：将原来的事务挂起，开启一个新的事务

2. isolation：用来设置事务的隔离级别

   - Isolation.REPEATABLE_READ：可重复读，MySQL的默认隔离级别
   - Isolation.READ_COMMITTED：读已提交，Oracle默认的隔离级别，开发时通常使用的隔离级别

### spring mvc如何解决post请求中文乱码？

### 简述spring mvc 工作流程

### mybatis中当实体类和数据库中的字段不一样怎么办？

1. sql语句起别名
2. mybatis的全局配置文件开启驼峰命名
3. mapper映射文件中使用resultMapper来自定义映射规则

### Linux常用命令

### Git分支相关命令

### Redis持久化

rdb

aof

### MySQL何时建索引

### JVM垃圾回收机制，GC发生在JVM哪部分，有几种GC，它们的算法是什么？

堆

### redis在项目中的使用场景

| 数据类型 | 使用场景                                                     |
| -------- | ------------------------------------------------------------ |
| String   | 封锁IP，incrby命令                                           |
| Hash     | 储存用户信息                                                 |
| List     | 最新消息的排行，利用List的push命令，将任务存在list集合中，同时使用pop命令将任务取出【秒杀】 |
| Set      | 特殊之处：可以自动排序，比如：好友列表，共同好友（求交集即可） |
| Zset     | 以某一个条件为权重，进行排序，比如：商品详情综合排名，或按照价格排名 |
|          |                                                              |
|          |                                                              |
|          |                                                              |

### ElasticSearch与Solr的区别

基于Lucene搜索服务器基础之上开发，一款优秀的高性能企业级搜索服务器

![image-20200725234236673](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725234236673.png)

### 单点登录

![image-20200725234714799](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725234714799.png)

![image-20200725234750471](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725234750471.png)

### 购物车实现过程

### 消息队列

异步

![image-20200725235355848](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725235355848.png)

并行

![image-20200725235409273](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725235409273.png)

排队

![image-20200725235442083](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725235442083.png)

![image-20200725235506616](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200725235506616.png)