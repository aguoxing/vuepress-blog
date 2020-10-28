### IDEA设置

- 快捷键

  setting ---> keymap    eclipse

- IDEA设置智能提示忽略大小写

  作用：输入关键字时忽略大小写自动提示
  操作：File > settings > Editor > General > Code Completion，在右侧配置界面把Match case（匹配大小写）前面的√去掉

  ![image-20201027102213988](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20201027102213988.png)



- **IDEA自定义注释**

  作用：创建类时按照指定模板生成注释，快捷键生成自定义注释

  **1、自定义类(文件)注释**

  作用：创建类时按照指定模板生成注释
  操作：File > settings > Editor -> File and Code Templates -> Files -> Class
  在右边输入(可以自定义其它标签)

**1、自定义类(文件)注释**

作用：创建类时按照指定模板生成注释
操作：File > settings > Editor -> File and Code Templates -> Files -> Class
在右边输入(可以自定义其它标签)

```java
/**`` ``*`` ``* @title: ${NAME}`` ``* @Author Tan`` ``* @Date: ${DATE} ${TIME}`` ``* @Version 1.0`` ``*/``public` `class` `${NAME} {``}
```

![img](https://img.jbzj.com/file_images/article/202006/2020062811155733.png)

同理，其它格式文件也是这样设置(Interface，Enum）
注意：这样的设置只在新建类时生效，如果以前的类或其他文件 没有注释现在加上需要用 Live Template 来完成(看自定义注释)

**2、自定义注释**

作用：快捷键生成自定义注释
操作：File > settings > Editor -> Live Templates

①新建组：![img](https://img.jbzj.com/file_images/article/202006/2020062811155734.png)命名为user

②选中刚新建的组，新建注释模板![img](https://img.jbzj.com/file_images/article/202006/2020062811155735.png)，命名如xx![img](https://img.jbzj.com/file_images/article/202006/2020062811155736.png)。注意：这个名字同时用做快捷输入，越简单越好

③在Template text 填写模板内容 $$夹起来的变量会在 edite variables 面板里面显示可编辑。注意：如果格式不对 edite variables 是不可选的，这是经常容易犯的错误，特别是刚接触的朋友

```
/*`` ``* @Date: $DATE$ $TIME$`` ``* $zhan$`` ``*/
```

④选择内容文件![img](https://img.jbzj.com/file_images/article/202006/2020062811155737.png)勾选everywhere，全选

⑤打开面板![img](https://img.jbzj.com/file_images/article/202006/2020062811155738.png)

![img](https://img.jbzj.com/file_images/article/202006/2020062811155739.png)

⑥保存，在需要该注释的地方敲入 xx 就会自动填充注释了

⑦所有步骤动图演示(循环播放，刷新页面从头开始)

![img](https://img.jbzj.com/file_images/article/202006/2020062811155840.gif)

**3、最后附上其他两个注释的模板**

①、类注释 cc

```
/**`` ``* @Description: $NAME$`` ``* @Author Tan`` ``* @Date: $DATE$ $TIME$`` ``* @Version 1.0`` ``*/
```

②、步骤注释 zz

```
/*`` ``* @Date: $DATE$ $TIME$`` ``* Step $step$: $content$`` ``*/
```

**四、IDEA自定义代码颜色**

作用：根据喜好指定代码颜色，比如注释代码颜色，选中单词颜色等等
操作：File > settings > Editor > Color Scheme > java

**1、注释代码颜色**

右边的 Comments
行注释 00AA35
块注释 3D8272
方法类注释 118AB1

![img](https://img.jbzj.com/file_images/article/202006/2020062811155841.png)

**2、选中颜色** 

默认的颜色很浅，看不清楚
选中代码背景色    2484F8
与选中单词相同背景色  FFB000

![img](https://img.jbzj.com/file_images/article/202006/2020062811155842.png)

**3、以上两点设置效果**

![img](https://img.jbzj.com/file_images/article/202006/2020062811155843.png)

**五、IDEA 设置鼠标滚轮调节字体大小**

作用：可以鼠标滚轮调节字体大小
操作：File > settings > Editor > General 

![img](https://img.jbzj.com/file_images/article/202006/2020062811155844.png)

**六、IDEA 设置鼠标悬停提示方法注释**

作用：将鼠标放在方法或者变量上会弹出注释说明
操作：setting -> Editor -> General -> Show quick documentation on mouse move 

![img](https://img.jbzj.com/file_images/article/202006/2020062811155845.png)

**七、IDEA设置打开当前文件的本地目录快捷键**

作用：快速打开本地目录
操作：操作：setting > Keymap > 输入 show in explorer 查找 > 双击目标项 > 点击Add Keyboard Shortcut > 按下键盘上的 Alt Shift W 然后确定即可
说明：Alt+Shift+W 这个快捷键是eclipse的，以前习惯了，不要可以自定义其他，设置好了后在文件里按下就会弹出文件系统目录，对于需要svn 提交，或者打包提取都非常方便

![img](https://img.jbzj.com/file_images/article/202006/2020062811155846.png)

**八、IDEA给选中内容添加双引号""**

作用：快速选中内容添加双引号""
操作：setting > Editor > General > Smart Keys > 勾选Surround selection on typing quote or brace

![img](https://img.jbzj.com/file_images/article/202006/2020062811155847.png)

然后就可以在写代码时，选中指定内容，按 键盘上的双引号（shift+"）就能给选中的文本加上上引号了





### File—>settings—>Tools—->Terminal—>

### 设置shell path 为D:\Program Files\Git\bin\bash.exe