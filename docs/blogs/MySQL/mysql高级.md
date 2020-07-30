---
title: MySQL高级
---

# MySQL的架构介绍

## MySQL简介

### 概述

 MySQL是一个关系型数据库管理系统，由瑞典MySQL AB公司开发，目前属于Oracle公司。MySQL是一种关联数据库管理系统，将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。 Mysql是开源的，所以你不需要支付额外的费用。Mysql是可以定制的，采用了GPL协议，你可以修改源码来开发自己的Mysql系统。Mysql支持大型的数据库。可以处理拥有上千万条记录的大型数据库。MySQL使用标准的SQL数据语言形式。Mysql可以允许于多个系统上，并且支持多种语言。这些编程语言包括C、C++、Python、Java、Perl、PHP、Eiffel、Ruby和Tcl等。MySQL支持大型数据库，支持5000万条记录的数据仓库，32位系统表文件最大可支持4GB，64位系统支持最大的表文件为8TB。 

### MySQL进阶

1. 数据库内部结构和原理
2. 数据库建模优化
3. 数据库索引建立
4. SQL语句优化
5. SQL编程
6. MySQL服务器的安装配置
7. 数据库的性能监控分析与系统优化
8. 各种参数常量设定
9. 主从复制
10. 分布式架构搭建、垂直切割和水平切割
11. 数据迁移
12. 容灾备份和备份
13. shell或python等脚本语言开发
14. 对开源数据库进行二次开发

## MySQL Linux版的安装

### MySQL5.7

...

## MySQL配置文件

### 主要文件

#### 二进制日志log-bin

#### 错误日志log-error

#### 慢查询log

#### 数据文件

#### 如何配置

## MySQL的用户于权限管理

### MySQL的用户管理

### 权限管理

### 通过工具远程访问

## MySQL的一些杂项配置

### 大小写问题

### 生成环境 sql_mode

## MySQL逻辑架构介绍

### 总体概览

和其它数据库相比，MySQL有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要体现在存储引擎的架构上，插件式的存储引擎架构将查询处理和其它的系统任务以及数据的存储提取相分离。这种架构可以根据业务的需求和实际需要选择合适的存储引擎。  

1. 连接层 

   最上层是一些客户端和连接服务，包含本地sock通信和大多数基于客户端/服务端工具实现的类似于tcp/ip的通信。主要完成一些类似于连接处理、授权认证、及相关的安全方案。在该层上引入了线程池的概念，为通过认证安全接入的客户端提供线程。同样在该层上可以实现基于SSL的安全链接。服务器也会为安全接入的每个客户端验证它所具有的操作权限。

2. 服务层 

   - Management Serveices & Utilities： 系统管理和控制工具

   - SQL Interface: SQL接口

     接受用户的SQL命令，并且返回用户需要查询的结果。比如select from就是调用SQL Interface

   - Parser: 解析器

     SQL命令传递到解析器的时候会被解析器验证和解析

   - Optimizer: 查询优化器

     SQL语句在查询之前会使用查询优化器对查询进行优化

     用一个例子就可以理解： select uid,name from user where gender= 1;   优化器来决定先投影还是先过滤

   - Cache和Buffer： 查询缓存

     如果查询缓存有命中的查询结果，查询语句就可以直接去查询缓存中取数据。这个缓存机制是由一系列小缓存组成的。比如表缓存，记录缓存，key缓存，权限缓存等，缓存是负责读，缓冲负责写

3. 引擎层

   存储引擎层，存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API与存储引擎进行通信。不同的存储引擎具有的功能不同，这样我们可以根据自己的实际需要进行选取

4. 存储层 

   数据存储层，主要是将数据存储在运行于裸设备的文件系统之上，并完成与存储引擎的交互

### 查询说明

查询流程图

![image-20200706104729052](images/image-20200706104729052.png)

首先，mysql的查询流程大致是：mysql客户端通过协议与mysql服务器建连接，发送查询语句，先检查查询缓存，如果命中(一模一样的sql才能命中)，直接返回结果，否则进行语句解析,也就是说，在解析查询之前，服务器会先访问查询缓存(query cache)——它存储SELECT语句以及相应的查询结果集。

如果某个查询结果已经位于缓存中，服务器就不会再对查询进行解析、优化、以及执行。它仅仅将缓存中的结果返回给用户即可，这将大大提高系统的性能。 语法解析器和预处理：首先mysql通过关键字将SQL语句进行解析，并生成一颗对应的“解析树”。

mysql解析器将使用mysql语法规则验证和解析查询；预处理器则根据一些mysql规则进一步检查解析数是否合法。 查询优化器当解析树被认为是合法的了，并且由优化器将其转化成执行计划。一条查询可以有很多种执行方式，最后都返回相同的结果。

优化器的作用就是找到这其中最好的执行计划。

然后，mysql默认使用的BTREE索引，并且一个大致方向是:无论怎么折腾sql，至少在目前来说，mysql最多只用到表中的一个索引。

## MySQL储存引擎

### 查看命令

- 看你的mysql现在已提供什么存储引擎

  ```sql
  show engines
  ```

- 看你的mysql当前默认的存储引擎

  ```sql
  show variables like '%storage_engine%'
  ```

### 各个引擎简介

1. InnoDB存储引擎

InnoDB是MySQL的默认事务型引擎，它被设计用来处理大量的短期(short-lived)事务。除非有非常特别的原因需要使用其他的存储引擎，否则应该优先考虑InnoDB引擎。行级锁，适合高并发情况 

2. MyISAM存储引擎

MyISAM提供了大量的特性，包括全文索引、压缩、空间函数(GIS)等，但MyISAM不支持事务和行级锁(myisam改表时会将整个表全锁住)，有一个毫无疑问的缺陷就是崩溃后无法安全恢复。 

3. Archive引擎

Archive存储引擎只支持INSERT和SELECT操作，在MySQL5.1之前不支持索引。Archive表适合日志和数据采集类应用。适合低访问量大数据等情况。根据英文的测试结论来看，Archive表比MyISAM表要小大约75%，比支持事务处理的InnoDB表小大约83%。 

4. Blackhole引擎

Blackhole引擎没有实现任何存储机制，它会丢弃所有插入的数据，不做任何保存。但服务器会记录Blackhole表的日志，所以可以用于复制数据到备库，或者简单地记录到日志。但这种应用方式会碰到很多问题，因此并不推荐。 

5. CSV引擎

CSV引擎可以将普通的CSV文件作为MySQL的表来处理，但不支持索引。CSV引擎可以作为一种数据交换的机制，非常有用。CSV存储的数据直接可以在操作系统里，用文本编辑器，或者excel读取。 

6. Memory引擎

如果需要快速地访问数据，并且这些数据不会被修改，重启以后丢失也没有关系，那么使用Memory表是非常有用。Memory表至少比MyISAM表要快一个数量级。(使用专业的内存数据库更快，如redis) 

7. Federated引擎

Federated引擎是访问其他MySQL服务器的一个代理，尽管该引擎看起来提供了一种很好的跨服务器的灵活性，但也经常带来问题，因此默认是禁用的。 

### MyISAM和InnoDB

| 对比项         | MyISAM                                                   | InnoDB                                                       |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| 主外键         | 不支持                                                   | 支持                                                         |
| 事务           | 不支持                                                   | 支持                                                         |
| 行表锁         | 表锁，即使操作一条记录也会锁住整个表，不适合高并发的操作 | 行锁，操作时只锁一行，不对其他行有影响，适合高并发的操作     |
| 缓存           | 只缓存索引，不缓存真实数据                               | 不仅缓存索引还缓存真实数据，对内存要求较高，而且内存大小对性能有绝对性影响 |
| 表空间         | 小                                                       | 大                                                           |
| 关注点         | 性能                                                     | 事务                                                         |
| 默认安装       | Y                                                        | Y                                                            |
| 用户表默认使用 | N                                                        | Y                                                            |
| 自带系统表使用 | Y                                                        | N                                                            |
| 索引           | 使用 b-tree                                              | B+TREE、主键为聚簇索引，基于聚簇索引的增删改查效率非常高     |

# 索引优化分析

## 性能下降、SQL慢、执行时间长、等待时间长的原因

### 查询数据过多

- 能不能拆，条件过滤尽量少

### 关联太多表，太多join

- join 原理。用 A 表的每一条数据 扫描 B表的所有数据。所以尽量先过滤。

### 没有利用到索引

 索引针对 列 建索引。但并不可能每一列都建索引索引并非越多越好。当数据更新了，索引会进行调整。也会很消耗性能。且 mysql 并不会把所有索引都用上，只会根据其算法挑一个索引用。所以建的准很重要。

#### 单值

#### 复合

- 条件多时，可以建共同索引(混合索引)。混合索引一般会偶先使用。有些情况下，就算有索引具体执行时也不会被使用。

### 服务器调优及各个参数设置（缓冲、线程数）（DBA的工作）

## 常见的join查询

### SQL执行顺序

#### 手写

```sql
SELECT DISTINCT
<select_list>
FROM
<left_table> <join_type>
JOIN <right_table> ON <join_condition>
WHERE
<where_condition>
GROUP BY
<group_by_list>
HAVING
<having_condition>
ORDER BY
<order_by_condition>
LIMIT <limit_number>
```

#### 机读

```sql
FROM <left_table>
ON <join_condition>
<join_type> JOIN <right_table>
WHERE <where_condition>
GROUP BY <group_by_list>
HAVING <having_condition>
SELECT
DISTINCT <select_list>
ORDER BY <order_by_condition>
LIMIT <limit_number>
```

#### 总结

![image-20200708110842332](images/image-20200708110842332.png)

### Join图

![Visual_SQL_JOINS_V2](images/Visual_SQL_JOINS_V2.png)

### 建表SQL

```sql
CREATE TABLE `t_dept` ( `id` INT(11) NOT NULL AUTO_INCREMENT, `deptName` VARCHAR(30) DEFAULT NULL, `address` VARCHAR(40) DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8; CREATE TABLE `t_emp` ( `id` INT(11) NOT NULL AUTO_INCREMENT, `name` VARCHAR(20) DEFAULT NULL,  `age` INT(3) DEFAULT NULL, `deptId` INT(11) DEFAULT NULL, PRIMARY KEY (`id`), KEY `fk_dept_id` (`deptId`) #CONSTRAINT `fk_dept_id` FOREIGN KEY (`deptId`) REFERENCES `t_dept` (`id`)) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;   INSERT INTO t_dept(deptName,address) VALUES('华山','华山');INSERT INTO t_dept(deptName,address) VALUES('丐帮','洛阳');INSERT INTO t_dept(deptName,address) VALUES('峨眉','峨眉山');INSERT INTO t_dept(deptName,address) VALUES('武当','武当山');INSERT INTO t_dept(deptName,address) VALUES('明教','光明顶'); INSERT INTO t_dept(deptName,address) VALUES('少林','少林寺'); INSERT INTO t_emp(NAME,age,deptId) VALUES('风清扬',90,1);INSERT INTO t_emp(NAME,age,deptId) VALUES('岳不群',50,1);INSERT INTO t_emp(NAME,age,deptId) VALUES('令狐冲',24,1);  INSERT INTO t_emp(NAME,age,deptId) VALUES('洪七公',70,2);INSERT INTO t_emp(NAME,age,deptId) VALUES('乔峰',35,2); INSERT INTO t_emp(NAME,age,deptId) VALUES('灭绝师太',70,3);INSERT INTO t_emp(NAME,age,deptId) VALUES('周芷若',20,3);   INSERT INTO t_emp(NAME,age,deptId) VALUES('张三丰',100,4); INSERT INTO t_emp(NAME,age,deptId) VALUES('张无忌',25,5); INSERT INTO t_emp(NAME,age,deptId) VALUES('韦小宝',18,null); 
```

### 7种JOIN

1. A、B两表共有

   ```sql
   select * from t_emp a inner join t_dept b on a.deptId = b.id;
   ```

2. A、B两表共有+A的独有

   ```sql
   select * from t_emp a left join t_dept b on a.deptId = b.id;
   ```

3. A、B两表共有+B的独有

   ```sql
   select * from t_emp a right join t_dept b on a.deptId = b.id;
   ```

4. A的独有

   ```sql
   select * from t_emp a left join t_dept b on a.deptId = b.id where b.id is null;
   ```

5. B的独有

   ```sql
   select * from t_emp a right join t_dept b on a.deptId = b.id where a.deptId is null;
   ```

6. AB全有

   MySQL Full Join的实现 因为MySQL不支持FULL JOIN,下面是替代方法

   left join + union(可去除重复数据)+ right join

   ```sql
   SELECT * FROM t_emp A LEFT JOIN t_dept B ON A.deptId = B.idUNIONSELECT * FROM t_emp A RIGHT JOIN t_dept B ON A.deptId = B.id
   ```

   这里因为要联合的缘故，不能考虑到小表驱动大表的情况。只能用right join。要保证查询出来的数字要一致。

7. A的独有+B的独有

   ```sql
   select  * FROM t_emp A LEFT JOIN t_dept B ON A.deptId = B.id WHERE B.`id` IS NULLUNIONSELECT * FROM t_emp A RIGHT JOIN t_dept B ON A.deptId = B.id WHERE A.`deptId` IS NULL;
   ```

#### 添加掌门字段

```sql
ALTER TABLE `t_dept` add CEO INT(11);
update t_dept set CEO=2 where id=1;
update t_dept set CEO=4 where id=2;update t_dept set CEO=6 where id=3;
update t_dept set CEO=8 where id=4;update t_dept set CEO=9 where id=5;
# 求各个门派对应的掌门人
select  * from t_dept as b left join t_emp as a on b.CEO=a.id;
# 求所有当上掌门人的平均年龄
select avg(a.age) from t_emp a inner join t_dept b on a.id=b.CEO;
```

#### Join的理解例题

两者区别

1. 子查询理解

- 先知道需要查询并将数据拿出来(若from 后的表也是一个子查询结果)

- 在去寻找满足判断条件的数据(where,on,having 后的参数等)。而这些查询条件通常是通过子查询获得的。子查询是一种根据结果找条件的倒推的顺序

  比较好理解与判断例题中：“人物”在t_emp 表中，所以第一个from 是t_emp 表。(也可以直接将子查询方法 from 后面(因为本题中的子查询中也有select 的数据),所以任然需要上述的推导过程)

2. join理解：执行完第一步后的结果为一张新表。在将新表与 t_emp 进行下一步的 left join 关联。先推出如何获得条件，再像算数题一样一步一步往下 join。可以交换顺序，但只能是因为条件间不相互关联时才能交换顺序。join 比 子查询难一点 join 能用到索引，但是子查询出来的表会使索引失效

求所有人物对应的掌门

1. 使用子查询(不推荐，影响后续用索引)步骤

   a. 创建子查询，查询出每个门派对应的ceo

   b. 根据t_emp 对应的 deptId 关联子查询表查询出所有人物对应的 ceo

```sql
SELECT a.name,f.deptName,f.name FROM t_emp a LEFT JOIN (SELECT d.`id`,e.`name` ,d.`deptName` FROM t_dept dLEFT JOIN t_emp e ON d.`CEO`=e.`id`) fON a.deptId = f.id
```

2. 使用join(推荐)步骤

   a. 关联出每个人物对应的门派

   b. 通过门派的 ceo 关联对应的掌门

```sql
SELECT e.`name`, d.`deptName`,f.`name` ceo FROM t_dept d RIGHT JOIN t_emp e ON d.`id` = e.`deptId`
```

a. 得到关联了部门的一张新的联合表LEFT JOIN t_emp f  ON d.`CEO`=f.`id`   

b. 第二步 --->通过新的联合表中的数据与另一张表关联

```sql
SELECT d.`deptName`, e.`name` CEO,d.`id`,f.name FROM t_dept d LEFT JOIN t_emp e
```

上述两个 join 交换了顺序并不影响执行。前提是两个 join 间不是依赖关系。且都跟ON d.`CEO`=e.`id` LEFT JOIN t_emp fON f.deptId = d.`id` 

## 索引简介

### 索引是什么

> 索引（Index）是帮助MySQL高效获取数据的数据结构

可以得到索引的本质：索引是数据结构

索引的目的在于提高查询效率，可以类比字典，如果要查“mysql”这个单词，我们肯定需要定位到m字母，然后从下往下找到y字母，再找到剩下的sql。如果没有索引，那么你可能需要a----z，如果我想找到Java开头的单词呢？或者Oracle开头的单词呢？是不是觉得如果没有索引，这个事情根本无法完成？

在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法。这种数据结构，就是索引。下图就是一种可能的索引方式示例：

![image-20200708113232938](images/image-20200708113232938.png)

左边是数据表，一共有两列七条记录，最左边的是数据记录的物理地址 为了加快Col2的查找，可以维护一个右边所示的二叉查找树，每个节点分别包含索引键值和一个指向对应数据记录物理地址的指针，这样就可以运用二叉查找在一定的复杂度内获取到相应数据，从而快速的检索出符合条件的记录。二叉树弊端之一：二叉树很可能会发生两边不平衡的情况。

B-TREE: (B:balance) 会自动根据两边的情况自动调节，使两端无限趋近于平衡状态。可以使性能最稳定。(myisam使用的方式)  B-TREE弊端：(插入/修改操作多时，B-TREE会不断调整平衡，消耗性能)从侧面说明了索引不是越多越好。B+TREE:Innodb 所使用的索引 

### 结论

数据本身之外，数据库还维护着一个满足特定查找算法的数据结构，这些数据结构以某种方式指向数据，这样就可以在这些数据结构的基础上实现高级查找算法，这种数据结构就是索引。 

### 优势

1. 类似大学图书馆建书目索引，提高数据检索的效率，降低数据库的IO成本

2. 通过索引列对数据进行排序，降低数据排序的成本，降低了CPU的消耗

### 劣势

1. 实际上索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以索引列也是要占用空间的
2. 虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、UPDATE和DELETE。
   因为更新表时，MySQL不仅要保存数据，还要保存一下索引文件每次更新添加了索引列的字段，
   都会调整因为更新所带来的键值变化后的索引信息
3. 索引只是提高效率的一个因素，如果你的MySQL有大数据量的表，就需要花时间研究建立最优秀的索引，或优化查询语句

### MySQL索引结构

#### BTree

##### 原理图

  【初始化介绍】 一颗b树，浅蓝色的块我们称之为一个磁盘块，可以看到每个磁盘块包含几个数据项（深蓝色所示）和指针（黄色所示），如磁盘块1包含数据项17和35，包含指针P1、P2、P3，P1表示小于17的磁盘块，P2表示在17和35之间的磁盘块，P3表示大于35的磁盘块。真实的数据存在于叶子节点即3、5、9、10、13、15、28、29、36、60、75、79、90、99。非叶子节点不存储真实的数据，只存储指引搜索方向的数据项，如17、35并不真实存在于数据表中。 

【查找过程】如果要查找数据项29，那么首先会把磁盘块1由磁盘加载到内存，此时发生一次IO，在内存中用二分查找确定29在17和35之间，锁定磁盘块1的P2指针，内存时间因为非常短（相比磁盘的IO）可以忽略不计，通过磁盘块1的P2指针的磁盘地址把磁盘块3由磁盘加载到内存，发生第二次IO，29在26和30之间，锁定磁盘块3的P2指针，通过指针加载磁盘块8到内存，发生第三次IO，同时内存中做二分查找找到29，结束查询，总计三次IO。 真实的情况是，3层的b+树可以表示上百万的数据，如果上百万的数据查找只需要三次IO，性能提高将是巨大的，如果没有索引，每个数据项都要发生一次IO，那么总共需要百万次的IO，显然成本非常非常高。 

##### 时间复杂度

同一问题可用不同算法解决，而一个算法的质量优劣将影响到算法乃至程序的效率。算法分析的目的在于选择合适算法和改进算法。 1 N logN 分别表示数据与查询次数之间的关系。常数 1*c 表示查询最快的方式。查询次数不随数据的增加而增加变量 N 表示查询次数随数据数量的增加而增加对数 logN 表示查询次数与数据数量成对数关系。 介于常数与 N 之间。n*logN 表示使用的复合方法。 

#### B+Tree

##### 原理图

B+TREE 第二级的 数据并不能直接取出来，只作索引使用。在内存有限的情况下，查询效率高于 B-TREEB-TREE 第二级可以直接取出来，树形结构比较重，在内存无限大的时候有优势。

##### B树和B+数的区别

B+Tree与B-Tree 的区别：结论在内存有限的情况下，B+TREE 永远比 B-TREE好。无限内存则后者方便 1）B-树的关键字和记录是放在一起的，叶子节点可以看作外部节点，不包含任何信息；B+树叶子节点中只有关键字和指向下一个节点的索引，记录只放在叶子节点中。(一次查询可能进行两次i/o操作)　 2）在B-树中，越靠近根节点的记录查找时间越快，只要找到关键字即可确定记录的存在；而B+树中每个记录的查找时间基本是一样的，都需要从根节点走到叶子节点，而且在叶子节点中还要再比较关键字。从这个角度看B-树的性能好像要比B+树好，而在实际应用中却是B+树的性能要好些。因为B+树的非叶子节点不存放实际的数据，这样每个节点可容纳的元素个数比B-树多，树高比B-树小，这样带来的好处是减少磁盘访问次数。尽管B+树找到一个记录所需的比较次数要比B-树多，但是一次磁盘访问的时间相当于成百上千次内存比较的时间，因此实际中B+树的性能可能还会好些，而且B+树的叶子节点使用指针连接在一起，方便顺序遍历（例如查看一个目录下的所有文件，一个表中的所有记录等），这也是很多数据库和文件系统使用B+树的缘故。 思考：为什么说B+树比B-树更适合实际应用中操作系统的文件索引和数据库索引？ 1) B+树的磁盘读写代价更低 　B+树的内部结点并没有指向关键字具体信息的指针。因此其内部结点相对B 树更小。如果把所有同一内部结点的关键字存放在同一盘块中，那么盘块所能容纳的关键字数量也越多。一次性读入内存中的需要查找的关键字也就越多。相对来说IO读写次数也就降低了。 2) B+树的查询效率更加稳定 　由于非终结点并不是最终指向文件内容的结点，而只是叶子结点中关键字的索引。所以任何关键字的查找必须走一条从根结点到叶子结点的路。所有关键字查询的路径长度相同，导致每一个数据的查询效率相当。

#### 聚簇索引与非聚簇索引

聚簇索引并不是一种单独的索引类型，而是一种数据存储方式。术语‘聚簇’表示数据行和相邻的键值进错的存储在一起。 如下图，左侧的索引就是聚簇索引，因为数据行在磁盘的排列和索引排序保持一致。 聚簇索引的好处：按照聚簇索引排列顺序，查询显示一定范围数据的时候，由于数据都是紧密相连，数据库不用从多个数据块中提取数据，所以节省了大量的io操作。聚簇索引的限制：对于mysql数据库目前只有innodb数据引擎支持聚簇索引，而Myisam并不支持聚簇索引。由于数据物理存储排序方式只能有一种，所以每个Mysql的表只能有一个聚簇索引。一般情况下就是该表的主键。为了充分利用聚簇索引的聚簇的特性，所以innodb表的主键列尽量选用有序的顺序id，而不建议用无序的id，比如uuid这种。（参考聚簇索引的好处。） 这里说明了主键索引为何采用自增的方式：1、业务需求，有序。2、能使用到聚簇索引  

#### full-text全文索引

全文索引（也称全文检索）是目前搜索引擎使用的一种关键技术。它能够利用【分词技术】等多种算法智能分析出文本文字中关键词的频率和重要性，然后按照一定的算法规则智能地筛选出我们想要的搜索结果。 CREATE TABLE `article` ( `id` int(10) unsigned NOT NULL AUTO_INCREMENT, `title` varchar(200) DEFAULT NULL, `content` text, PRIMARY KEY (`id`), FULLTEXT KEY `title` (`title`,`content`)) ENGINE=MyISAM DEFAULT CHARSET=utf8; 不同于like方式的的查询：SELECT * FROM article WHERE content LIKE ‘%查询字符串%’;全文索引用match+against方式查询：SELECT * FROM article WHERE MATCH(title,content) AGAINST (‘查询字符串’); 明显的提高查询效率。 限制：mysql5.6.4以前只有Myisam支持，5.6.4版本以后innodb才支持，但是官方版本不支持中文分词，需要第三方分词插件。5.7以后官方支持中文分词。 随着大数据时代的到来，关系型数据库应对全文索引的需求已力不从心，逐渐被 solr,elasticSearch等专门的搜索引擎所替代。   

#### Hash索引

Hash索引只有Memory, NDB两种引擎支持，Memory引擎默认支持Hash索引，如果多个hash值相同，出现哈希碰撞，那么索引以链表方式存储。NoSql采用此中索引结构。

#### R-Tree索引

R-Tree在mysql很少使用，仅支持geometry数据类型，支持该类型的存储引擎只有myisam、bdb、innodb、ndb、archive几种。相对于b-tree，r-tree的优势在于范围查找。 

### MySQL索引分类

#### 主键索引

- 设定为主键后数据库会自动建立索引，innodb为聚簇索引

- 语法

  ```sql
  # 随表一起建索引
  CREATE TABLE customer (id INT(10) UNSIGNED AUTO_INCREMENT ,customer_no VARCHAR(200),customer_name VARCHAR(200), PRIMARY KEY(id) );
  
  # unsigned (无符号的)使用 AUTO_INCREMENT 关键字的列必须有索引(只要有索引就行)。
  CREATE TABLE customer2 (id INT(10) UNSIGNED  ,customer_no VARCHAR(200),customer_name VARCHAR(200), PRIMARY KEY(id));
  
  # 单独建主键索引
  ALTER TABLE customer add PRIMARY KEY customer(customer_no);
  
  # 删除建主键索引
  ALTER TABLE customer drop PRIMARY KEY;
  # 修改建主键索引 必须先删除掉(drop)原索引，再新建(add)索引
  ```

#### 单值索引

即一个索引只包含单个列，一个表可以有多个单列索引

索引建立成哪种索引类型？根据数据引擎类型自动选择的索引类型除开 innodb 引擎主键默认为聚簇索引 外。 innodb 的索引都采用的 B+TREEmyisam 则都采用的 B-TREE索引

- 语法

```sql
# 随表一起建索引
CREATE TABLE customer (id INT(10) UNSIGNED  AUTO_INCREMENT,customer_no VARCHAR(200),customer_name VARCHAR(200),PRIMARY KEY(id),KEY (customer_name));

# 随表一起建立的索引 索引名同列名(customer_name)单独建单值索引
CREATE INDEX idx_customer_name ON customer(customer_name);  
# 删除索引
DROP INDEX idx_customer_name;
```

#### 唯一索引

- 索引列的值必须唯一，但允许有空值

```sql
# 随表一起建索引
CREATE TABLE customer (id INT(10) UNSIGNED  AUTO_INCREMENT,customer_no
VARCHAR(200),customer_name VARCHAR(200),PRIMARY KEY(id),KEY (customer_name),UNIQUE (customer_no));
# 建立唯一索引时必须保证所有的值是唯一的（除了null），若有重复数据，会报错。  
# 单独建唯一索引
CREATE UNIQUE INDEX idx_customer_no ON customer(customer_no);
# 删除索引
DROP INDEX idx_customer_no on customer;
```

#### 复合索引

- 即一个索引包含多个列

  在数据库操作期间，复合索引比单值索引所需要的开销更小(对于相同的多个列建索引)当表的行数远大于索引列的数目时可以使用复合索引

- 语法

```sql
# 随表一起建索引
CREATE TABLE customer (id INT(10) UNSIGNED AUTO_INCREMENT,customer_no VARCHAR(200),customer_name VARCHAR(200),PRIMARY KEY(id), KEY (customer_name), UNIQUE (customer_name),KEY (customer_no,customer_name));
# 单独建索引
CREATE INDEX idx_no_name ON customer(customer_no,customer_name);
# 删除索引
DROP INDEX idx_no_name  on customer;
```

#### 基本语法

- 创建

  ```sql
  ALTER mytable ADD  [UNIQUE ]  INDEX [indexName] ON (columnname(length)) 
  ```

- 删除

  ```sql
  DROP INDEX [indexName] ON mytable;
  ```

- 查看

  tableNon_uniqueKey_nameSeq_in_indexColumn_nameCollationCardinalitySub_partPackedNullIndex_typeCommentIndex_commentcustomer0primary0idA0(NULL)(NULL)BTREEcustomer1custm_no1custm_noA0(NULL)(NULL)YESBTREE non_unique: 

  是否是唯一索引 1：是  0：不是seq_in_index:列 在索引中的 序列。

  针对符合索引(一个索引对应多个列)。

  针对同一个复合索引 按照创建复合索引时的顺序进行排序collation:cardinality:sub_part:packed:Null:是否允许 null 值comment:index_comment:

  ```sql
  SHOW INDEX FROM table_name
  ```

- 使用alter命令

  有四种方式来添加数据表的索引

  ```sql
  # 该语句添加一个主键，这意味着索引值必须是唯一的，且不能为NULL。
  ALTER TABLE tbl_name ADD PRIMARY KEY (column_list)
  
  # 这条语句创建索引的值必须是唯一的（除了NULL外，NULL可能会出现多次）
  ALTER TABLE tbl_name ADD UNIQUE index_name (column_list)
  
  # 添加普通索引，索引值可出现多次。
  ALTER TABLE tbl_name ADD INDEX index_name (column_list)
  
  # 该语句指定了索引为 FULLTEXT ，用于全文索引。 
  ALTER TABLE tbl_name ADD FULLTEXT index_name (column_list) 
  ```

### 哪些情况需要创建索引

...

### 哪些情况不需要创建索引

...

## 性能分析

### MySQL常见瓶颈

#### CPU

#### IO

#### 锁

#### 服务器硬件的性能瓶颈

### Explain

#### explain概述

使用EXPLAIN关键字可以模拟优化器执行SQL查询语句，从而知道MySQL是如何处理你的SQL语句的。分析你的查询语句或是表结构的性能瓶颈

http://dev.mysql.com/doc/refman/5.5/en/explain-output.html

#### 作用

- 表的读取顺序
- 哪些索引可以使用
- 数据读取操作的操作类型
- 哪些索引被实际使用
- 表之间的引用
- 每张表有多少行被优化器查询

#### 使用

explain+SQL语句



#### 各字段解释

##### id

- select查询的序列号,包含一组数字，表示查询中执行select子句或操作表的顺序

- 三种情况

  - id相同，执行顺序由上至下

    id相同，执行顺序由上至下 此例中 先执行where 后的第一条语句 t1.id = t2.id 通过 t1.id 关联 t2.id 。 而 t2.id 的结果建立在 t2.id=t3.id 的基础之上

  - id不同，如果是子查询，id的序号会递增，id值越大优先级越高，越先被执行

  - id相同不同，同时存在

    id如果相同，可以认为是一组，从上往下顺序执行；在所有组中，id值越大，优先级越高，越先执行 衍生表 = derived2 --> derived + 2

    （2 表示由 id =2 的查询衍生出来的表。type 肯定是 all ，因为衍生的表没有建立索引）

##### select_type

查询的类型，主要是用于区别普通查询、联合查询、子查询等的复杂查询

1. SIMPLE

   简单的 select 查询,查询中不包含子查询或者UNION

2. PRIMARY

   查询中若包含任何复杂的子部分，最外层查询则被标记为Primary

3. DERIVED

   在FROM列表中包含的子查询被标记为DERIVED(衍生)，MySQL会递归执行这些子查询, 把结果放在临时表里。

   DERIVED 既查询通过子查询查出来的 临时表

4. SUBQUERY

   在SELECT或WHERE列表中包含了子查询

5. DEPENDENT SUBQUERY

   在SELECT或WHERE列表中包含了子查询,子查询基于外层

6. UNCACHEABLE SUBQUREY

   无法被缓存的子查询

7. UNION

   若第二个SELECT出现在UNION之后，则被标记为UNION；
   若UNION包含在FROM子句的子查询中,外层SELECT将被标记为：DERIVED

8. UNION RESULT

   从UNION表获取结果的SELECT

##### table

显示这一行的数据是关于哪张表的

##### type

 type显示的是访问类型，是较为重要的一个指标，结果值从最好到最坏依次是：

```sql
system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range(尽量保证) > index > ALL   system>const>eq_ref>ref>range>index>ALL 
```

一般来说，得保证查询至少达到range级别，最好能达到ref。

##### possible_keys

##### key

##### key_len

##### ref

##### rows

##### Extra

## 查询优化

### 使用索引

### 单表查询优化

#### 建表SQL

```sql
CREATE TABLE IF NOT EXISTS `article` (`id` INT(10) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,`author_id` INT(10) UNSIGNED NOT NULL,`category_id` INT(10) UNSIGNED NOT NULL,`views` INT(10) UNSIGNED NOT NULL,`comments` INT(10) UNSIGNED NOT NULL,`title` VARBINARY(255) NOT NULL,`content` TEXT NOT NULL);INSERT INTO `article`(`author_id`, `category_id`, `views`, `comments`, `title`, `content`) VALUES(1, 1, 1, 1, '1', '1'),(2, 2, 2, 2, '2', '2'),(1, 1, 3, 3, '3', '3');SELECT * FROM article;
```

#### 案例

查询 category_id 为1 且 comments 大于1 的情况下,views最多的 article_id

```sql
EXPLAIN SELECT id,author_id FROM article WHERE category_id = 1 AND comments > 1 ORDER BY views DESC LIMIT 1;
```

结论：很显然,type 是 ALL,即最坏的情况。Extra 里还出现了 Using filesort,也是最坏的情况。优化是必须的。

开始优化：

新建索引+删除索引

```sql
ALTER TABLE `article` ADD INDEX idx_article_ccv (`category_id` , `comments`, `views` );
create index idx_article_ccv on article(category_id,comments,views);
DROP INDEX idx_article_ccv ON article 
```

再次查询

```sql
EXPLAIN SELECT id,author_id FROM `article` WHERE category_id = 1 AND comments >1 ORDER BY views DESC LIMIT 1;
```

结论：type 变成了 range,这是可以忍受的。但是 extra 里使用 Using filesort 仍是无法接受的。但是我们已经建立了索引,为啥没用呢？这是因为按照 BTree 索引的工作原理,

先排序 category_id,

如果遇到相同的 category_id 则再排序 comments,如果遇到相同的 comments 则再排序 views。

当 comments 字段在联合索引里处于中间位置时,#因comments > 1 条件是一个范围值(所谓 range),
MySQL 无法利用索引再对后面的 views 部分进行检索,即 range 类型查询字段后面的索引无效。 

删除第一次建立的索引

```sql
DROP INDEX idx_article_ccv ON article;
```

第2次新建索引

```sql
ALTER TABLE `article` ADD INDEX idx_article_cv ( `category_id` , `views` );
create index idx_article_cv on article(category_id,views);
```

第3次EXPLAIN

```sql
EXPLAIN SELECT id,author_id FROM article WHERE category_id = 1 AND comments > 1 ORDER BY views DESC LIMIT 1;
```

结论：可以看到,type 变为了 ref,Extra 中的 Using filesort 也消失了,结果非常理想。

DROP INDEX idx_article_cv ON article;

### 关联查询优化

#### 建表SQL

```sql
CREATE TABLE IF NOT EXISTS `class` (`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,`card` INT(10) UNSIGNED NOT NULL,PRIMARY KEY (`id`));CREATE TABLE IF NOT EXISTS `book` (`bookid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,`card` INT(10) UNSIGNED NOT NULL,PRIMARY KEY (`bookid`));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20))); 
```

#### 案例

下面开始explain分析

```
EXPLAIN SELECT * FROM class LEFT JOIN book ON class.card = book.card;
```

结论：type 有All

添加索引优化

```sql
ALTER TABLE `book` ADD INDEX Y ( `card`); 
```

第2次explain

```sql
EXPLAIN SELECT * FROM class LEFT JOIN book ON class.card = book.card;
```

可以看到第二行的 type 变为了 ref,rows 也变成了优化比较明显。

这是由左连接特性决定的。LEFT JOIN 条件用于确定如何从右表搜索行,左边一定都有,

所以右边是我们的关键点,一定需要建立索引。

删除旧索引 + 新建 + 第3次explain

```sql
DROP INDEX Y ON book;
ALTER TABLE class ADD INDEX X (card);
EXPLAIN SELECT * FROM class LEFT JOIN book ON class.card = book.card;  
```

#### 建议

- 保证被驱动表的join字段已经被索引

  被驱动表 join 后的表为被驱动表 (需要被查询)

- left join 时，选择小表作为驱动表，大表作为被驱动表

   但是 left join 时一定是左边是驱动表，右边是被驱动表

- inner join 时，mysql会自己帮你把小结果集的表选为驱动表

  mysql 自动选择。小表作为驱动表。因为 驱动表无论如何都会被全表扫描？。所以扫描次数越少越好

- 子查询尽量不要放在被驱动表，有可能使用不到索引

  ```sql
  select a.name ,bc.name from t_emp a left join  (select b.id , c.name from t_dept b inner join t_emp c on b.ceo = c.id)bc on bc.id = a.deptid
  ```

  上段查询中用到了子查询，必然 bc 表没有索引。

  肯定会进行全表扫描上段查询 可以直接使用两个 left join 优化

  ```sql
  select a.name , c.name from t_emp a left outer join t_dept b on a.deptid = b.id left outer join t_emp c on b.ceo=c.id
  ```

  所有条件都可以使用到索引 若必须用到子查询，可将子查询设置为驱动表，因为驱动表的type 肯定是 all，而子查询返回的结果表没有索引，必定也是all

### 子查询优化

#### 用exist还是in？

##### 实验

 有索引 大表驱动小表

```sql
select sql_no_cache sum(sal) from emp where deptno in (select deptno from dept);
select sql_no_cache sum(sal) from emp where exists (select 1 from dept where emp.deptno=dept.deptno);
```

用 exists 是否存在，存在返回一条记录，exists 是作为一个查询判断用，所以 select 后返回什么不重要。

```sql
select sql_no_cache sum(sal) from emp inner join dept on emp.deptno=dept.deptno;
```

有索引 小表驱动大表

```sql
select sql_no_cache sum(e.sal) from (select * from emp where id<10000) e where exists (select 1 from emp where e.deptno=emp.deptno);
select sql_no_cache sum(e.sal) from (select * from emp where id<10000) e inner join (select distinct deptno from emp) m on m.deptno=e.deptno;
select sql_no_cache sum(sal) from emp where deptno in (select deptno from dept);
```

> 有索引 小驱动大表 性能优于 大表驱动小表

无索引 小表驱动大表

```sql
select sql_no_cache sum(e.sal) from (select * from emp where id<10000) e where exists (select 1 from emp where e.deptno=emp.deptno);select sql_no_cache sum(e.sal) from (select * from emp where id<10000) e inner join (select distinct deptno from emp) m on m.deptno=e.deptno;
select sql_no_cache sum(sal) from emp where deptno in (select deptno from dept);
```

无索引 大表驱动小表

```sql
select sql_no_cache sum(sal) from emp where deptno in (select deptno from dept);
select sql_no_cache sum(sal) from emp where exists (select 1 from dept where emp.deptno=dept.deptno);
select sql_no_cache sum(sal) from emp inner join dept on emp.deptno=dept.deptno;
```

##### 结论

有索引的情况下 用 inner join 是最好的 其次是 in ，exists最糟糕 无索引的情况下用 小表驱动大表 因为join 方式需要distinct ，没有索引distinct消耗性能较大 所以 exists性能最佳 in其次 join性能最差？ 

无索引的情况下大表驱动小表in 和 exists 的性能应该是接近的 都比较糟糕 exists稍微好一点 超不过5%   但是inner join 优于使用了 join buffer 所以快很多如果left join 则最慢 

### ORDER BY关键字优化

#### 1、ORDER BY子句，尽量使用Index方式排序,避免使用FileSort方式排序

##### 建表

```sql
CREATE TABLE tblA(  id int primary key not null auto_increment,  age INT,  birth TIMESTAMP NOT NULL,  name varchar(200)); INSERT INTO tblA(age,birth,name) VALUES(22,NOW(),'abc');
INSERT INTO tblA(age,birth,name) VALUES(23,NOW(),'bcd');
INSERT INTO tblA(age,birth,name) VALUES(24,NOW(),'def');
CREATE INDEX idx_A_ageBirth ON tblA(age,birth,name);
SELECT * FROM tblA;
```

##### 案例

...

MySQL支持二种方式的排序，FileSort和Index

Index效率高，它指MySQL扫描索引本身完成排序

FileSort方式效率较低

##### ORDER BY满足两情况，会使用Index方式排序

1. ORDER BY 语句使用索引最左前列
2. 使用Where子句与ORDERBY子句条件列组合满足索引最左前列
3. where子句中如果出现索引的范围查询(即explain中出现range)会导致order by 索引失效

#### 2、尽可能在索引列上完成排序操作，遵照索引建的最佳左前缀

第二种中，where a = const and b > const order by b , c 不会出现 using filesort b , c 两个衔接上了但是：where a = const and b > const order by c 将会出现 using filesort 。因为 b 用了范围索引，断了。而上一个 order by 后的b 用到了索引，所以能衔接上 c 

#### 3、如果不在索引列上，filesort有两种算法：mysql就要启动双路排序和单路排序

1. 双路排序

   - MySQL 4.1之前是使用双路排序,字面意思就是两次扫描磁盘，最终得到数据，读取行指针和orderby列，对他们进行排序，然后扫描已经排序好的列表，按照列表中的值重新从列表中读取对应的数据输出

     多路排序需要借助 磁盘来进行排序。所以 取数据，排好了取数据。两次 io操作。比较慢单路排序 ，将排好的数据存在内存中，省去了一次 io 操作，所以比较快，但是需要内存空间足够。

   - 从磁盘取排序字段，在buffer进行排序，再从磁盘取其他字段。

2. 取一批数据，要对磁盘进行了两次扫描，众所周知，I\O是很耗时的，所以在mysql4.1之后，出现了第二种改进的算法，就是单路排序。

3. 单路排序

   从磁盘读取查询需要的所有列，按照order by列在buffer对它们进行排序，然后扫描排序后的列表进行输出，它的效率更快一些，避免了第二次读取数据。并且把随机IO变成了顺序IO,但是它会使用更多的空间，因为它把每一行都保存在内存中了。

4. 结论及引申出的问题

   - 由于单路是后出的，总体而言好过双路

   - 但是用单路有问题

     在sort_buffer中，方法B比方法A要多占用很多空间，因为方法B是把所有字段都取出, 所以有可能取出的数据的总大小超出了sort_buffer的容量，导致每次只能取sort_buffer容量大小的数据，进行排序（创建tmp文件，多路合并），排完再取取sort_buffer容量大小，再排……从而多次I/O。本来想省一次I/O操作，反而导致了大量的I/O操作，反而得不偿失。

5. 优化策略

   - 增大sort_buffer_size参数的设置，用于单路排序的内存大小

   - 增大max_length_for_sort_data参数的设置，单次排序字段大小。(单次排序请求)

   - 去掉select 后面不需要的字段。select 后的多了，排序的时候也会带着一起，很占内存，所以去掉没有用的

   - 提高Order By的速度

     1. Order by时select * 是一个大忌，只Query需要的字段， 这点非常重要。

        在这里的影响是： 

        1.1 当Query的字段大小总和小于max_length_for_sort_data 而且排序字段不是 TEXT|BLOB 类型时，会用改进后的算法——单路排序， 否则用老算法——多路排序。 1.2 两种算法的数据都有可能超出sort_buffer的容量，超出之后，会创建tmp文件进行合并排序，导致多次I/O，但是用单路排序算法的风险会更大一些,所以要提高sort_buffer_size。

     2. 尝试提高 sort_buffer_size不管用哪种算法，提高这个参数都会提高效率，当然，要根据系统的能力去提高，因为这个参数是针对每个进程的

     3. 尝试提高 max_length_for_sort_data提高这个参数， 会增加用改进算法的概率。但是如果设的太高，数据总容量超出sort_buffer_size的概率就增大，明显症状是高的磁盘I/O活动和低的处理器使用率. 

### 分页查询优化（limit）

```sql
EXPLAIN   SELECT SQL_NO_CACHE * FROM emp ORDER BY deptno  LIMIT 10000,40
```

那我们就给deptno这个字段加上索引吧。然而并没什么用...

优化：

先利用覆盖索引把要取的数据行的主键取到，然后再用这个主键列与数据表做关联：(查询的数据量小了后)

```sql
EXPLAIN SELECT SQL_NO_CACHE * FROM emp INNER JOIN (SELECT id FROM emp e ORDER BY deptno LIMIT 10000,40) a ON a.id=emp.id
```

最后比较一下查询速度：

优化前：

优化后： 

实践证明： 

1. order by 后的字段（XXX）有索引

2. sql 中有 limit 时，  当 select id 或 XXX字段索引包含字段时 ，显示 using index  当 select 后的字段含有 bouder by 字段索引不包含的字段时，将显示 using filesort

### GROUP BY查询优化

1. group by实质是先排序后进行分组，遵照索引建的最佳左前缀

2. 当无法使用索引列，增大max_length_for_sort_data参数的设置+增大sort_buffer_size参数的设置
3. where高于having，能写在where限定的条件就不要去having限定了

### 去重优化

1. 尽量不要使用 distinct 关键字去重

2. 优化

   案例：t_mall_sku表

   | id   | shp_id | kcdz         |
   | ---- | ------ | ------------ |
   | 3    | 1      | 北京市昌平区 |
   | 4    | 1      | 北京市昌平区 |
   | 5    | 5      | 北京市昌平区 |
   | 6    | 3      | 重庆         |
   | 8    | 8      | 天津         |

   ```sql
   # 将产生重复数据
   select kcdz form t_mall_sku where id in( 3,4,5,6,8 )
   
   # distinct去重
   select distinct kcdz form t_mall_sku where id in( 3,4,5,6,8 )
   
   # 使用 distinct 关键字去重消耗性能优化  能够利用到索引
   select kcdz form t_mall_sku where id in( 3,4,5,6,8 ) group by kcdz
   ```

# 查询截取分析

# MySQL锁机制

# 主从复制

