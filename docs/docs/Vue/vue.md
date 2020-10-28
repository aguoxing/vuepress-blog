---
title: vue快速入门
tag: 前端
---

# 第1章

## vue快速入门

### 1.1 什么是vue

Vue是一个渐进式的JavaScript，什么是渐进式？

渐进式意味着你可以将Vue作为你应用的一部分嵌入其中，带来更丰富的交互体验，也可以使用更多的Vue核心库去进行开发。

Vue是目前最火的前端框架，与Angular、React并称为前端三大框架。是一个轻量级的MVVM框架，通过数据驱动和组件化进行前端开发，通过简单地API就能实现响应式的数据绑定和组合的视图组件。

### 1.2 为什么学习vue

- Vue是目前非常火的一个前端框架，是前端程序员必备的一个技能。

- Vue发展迅速，在大多数后端程序员中，也需要会Vue。

- Vue简单易学，并且性能高效，可以很大程度上提高代码开发效率。

### 1.3 VsCode

#### 1.3.1 安装

官网：[vscode](https://code.visualstudio.com/)

#### 1.3.2 常用插件

- HTML Snippets： 超级实用且初级的 H5代码片段以及提示

- HTMLHint： html代码检测

- HTML CSS Support : 让 html 标签上写class 智能提示当前项目所支持的样式。新版已经支持scss文件检索，这个也是必备插件之一

- Path Autocomplete : 路径智能补全

- Path Intellisense ： 路径智能提示
- JavaScript Snippet Pack： 针对js的插件，包含了js的常用语法关键字，很实用；

- View InBrowser： 从浏览器中查看html文件，使用系统的当前默认浏览器

- Class autocomplete for HTML： 编写html代码的朋友们对html代码的一大体现就是重复，如果纯用手敲不仅累还会影响项目进度，这款自动补全插件真的很棒；

- beautify : 格式化代码的工具，可以格式化JSON|JS|HTML|CSS|SCSS,比内置格式化好用

- Debugger for Chrome： 让 vscode 映射 chrome 的 debug功能，静态页面都可以用 vscode 来打断点调试，真666~

- jQuery Code Snippets： jquery 重度患者必须品

- vscode-icon： 让 vscode 资源树目录加上图标，必备良品！

- VSCode Great Icons： 另一款资源树目录图标 

- Code Runner : 代码编译运行看结果，支持众多语言

- GitLens： 丰富的git日志插件

- vetur： vue语法高亮、智能感知、Emmet等

- VueHelper： vue代码提示

#### 1.3.3 常用快捷键

...

### 1.4 快速上手

#### 1.4.1 HelloVue

```vue
<body>
  <div id="app">
    <h2>Hello {{name}}</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      name: 'Vue'
    }
  })
</script>
```

这是我们的第一个Vue程序，代码做了哪些事情？

- 创建了一个Vue对象，此时在浏览器的内存中就有了一个Vue。

- 创建Vue的时候，传入了一个参数，这个参数是一个对象options

- 参数中有el属性。该属性决定了这个Vue对象挂载到哪一个元素上。

- 参数中有data属性，该属性定义存储大部分的数据。这些数据可以自己直接定义，也可以从网络中获取。

#### 1.4.2 vue列表显示

```vue
<body>
  <div id="app">
    <ul>
      <li v-for="item in books">{{item}}</li>
    </ul>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      books: ['三体', 'Vue从入门到精通', '颈椎病康复指南', '活着', '母猪的产后护理']
    }
  })
</script>
```

我们现在来一个更复杂的数据格式：列表。

我们需要把一个列表展示到HTML代码中，应该使用v-for指令。

是不是非常简单？我们传统的操作方式是使用JavaScript/JQuery获取到ul的dom，然后构造li的dom，拼接到ul中进行渲染。而Vue中则只需要在data中定义这个数组，我们就可以使用v-for指令在页面中循环输出。

更重要的是，它是响应式的

#### 1.4.3 计数器案例

```vue
<body>
  <div id="app">
    <h3>当前计数：{{count}}</h3>
    <button @click="addCount">加</button>
    <button @click="delCount">减</button>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      count: 0
    },
    methods: {
      addCount() {
        this.count++
      },
      delCount() {
        this.count--
      }
    }
  })
</script>
```

点击“加”，数字+1、点击“减”，数字-1

这里我们使用到了@click，这是vue中监听点击事件的方式，而@click需要指定发生点击时所执行的方法，该方法是在methods中定义的。

Methods是vue实例中options的一个属性，和data平级，该属性用于定义Vue对象中的方法。

### 1.5 前端框架的发展历程

#### 1.5.1 什么是框架

> 框架：半成品的项目，提高开发效率。

#### 1.5.2 前端框架发展

- DOM：原生JS->ExtJS、JQuery->easyui、layui等等（简化DOM操作，但是降低了ajax请求的复用性）

- MVVM：Angular、Vue、React。能够帮助我们减少不必要的DOM操作，提高渲染效率。数据绑定（单向、双向），通过框架提供的一些指令，我们只需要关注数据的业务逻辑，不需要关注DOM是如何渲染的。在vue中，一个最核心的思想就是不让用户去操作DOM元素。

### 1.6 MVVM

- Model：对应数据层的域模型，它主要做数据的管理，通过ajax/fetch/axios等api完成客户端和服务端的Model同步，在层间关系里，它主要用于抽象出ViewModel中的Model。

- View：View是作为视图模板，用于定义结构、布局。它自己不处理数据，只是将ViewModel中的数据展现出来。

- ViewModel：ViewModel起着链接View和Model的作用，同时用于处理View中的逻辑。ViewModel从Model中取数据，渲染到View中。![MVVM](/images/mvvm.png)

#### 1.6.1 通过计数器分析MVVM

在我们的计数器案例中，就有严格的MVVM思想。

View依然是我们的HTML

Model就是我们抽离出来的data

ViewModel就是我们创建的Vue对象实例。

它们之间是如何工作呢？

首先VM通过数据绑定让data中的数据实时的在HTML中显示。

其次VM通过监听HTML中的事件，并且通过methods中的操作，来改变data中的数据。

Data中的数据被改变了之后，立即响应回HTML中。

有了Vue帮助我们完成ViewModel层的任务，在后续的开发中，我们就可以专注于数据的处理，以及HTML、CSS的编写工作了，而不去关注DOM的操作。

# 第2章

## 基础语法

### 2.1 插值操作

#### 2.1.1 插值运算符

语法：{{数据}}

插值运算符可以对数据进行显示，也可以在插值运算符中进行表达式计算。

```vue
<body>
  <div id="app">
    <h2>Hello {{name}}</h2>
    <h2>{{firstName}} {{lastName}}</h2>
    <h2>{{count*2}}</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      name: 'Vue',
      firstName: '张',
      lastName: '狗子',
      count: 10
    }
  })
</script>
```

#### 2.1.2 v-once（了解）

有些情况下，我们可能不希望页面随意的改变，这个时候我们可以使用v-once指令。

该指令后面不需要跟任何的表达式，该指令表示元素和组件之间只会渲染一次，不会随着数据的改变而改变

```vue
<h2 v-once>{{firstName}} {{lastName}}</h2>
```

#### 2.1.3 v-html

在某些情况下，我们从服务端请求到的数据本身是一个HTML代码，如果我们直接使用{{}}输出，会将HTML代码一起输出。

如果我们希望使用html格式进行输出，我们可以使用v-html指令。

```vue
<h2 v-html="htmlData"></h2>
```

#### 2.1.4 v-text

v-text作用和插值运算符比较类似，都是用于将数据显示在页面中。通常情况下，v-text接受一个string类型。v-text会替换标签内的内容。

```vue
<h2 v-text="name">Hello</h2>
```

#### 2.1.5 v-pre（了解）

v-pre是用于跳过这个元素和它子元素的编译过程。标签内怎么写，页面就怎么展示。

```vue
<h2 v-pre>{{firstName}} {{lastName}}</h2>
```

#### 2.1.6 v-clock （了解）

在某些情况下，我们浏览器可能会直接显示出未编译的插值运算符。

```
<h2 v-clock>{{firstName}} {{lastName}}</h2>
  <style>
    [v-clock] {
      display: none;
    }
  </style>
```

#### 2.1.7 过滤器

有时候我们得到的数据并不直接符合我们的需求，这时候需要对其进行改变。如果每个数据都手动编写，将非常的麻烦，我们可以将有共同特点、共同需求的数据使用过滤器统一进行处理。

Filters属性与data和methods平级，用于定义过滤器。过滤器本质上是一个方法，接收一个参数。在页面中，使用插值运算符，语法：{{数据 | 过滤器名称}}，不需要写参数，不需要写括号，过滤器默认会把前面的数据作为参数传递给方法。

过滤器的方法需要返回一个数据，返回的数据作为最终结果渲染到页面中。

```vue
<body>
  <div id="app">
    <h2>{{count | filterEven}}</h2>
    <h2>{{count2 | filterEven}}</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      count: 10,
      count2: 11
    },
    filters: {
      filterEven(num) {
        if (num % 2 === 0) {
          return num
        } else {
          return '非法数字'
        }
      }
    }
  })
</script>
```

### 2.2 属性绑定

#### 2.2.1 v-bind

前面我们学习的指令主要作用是将数据插入到我们模板的内容中，但是 除了内容需要动态决定以外，某些属性我们也希望动态来绑定，比如a标签的href、img标签的src等。这时候我们可以使用v-bind指令。

v-bind指令用于绑定一个值或者多个值

v-bind有简写方式，直接使用冒号:

```vue
<body>
  <div id="app">
    <a v-bind:href="baiduLink">百度</a>
    <!-- v-bind有简写方式 -->
    <a :href="baiduLink">百度</a>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      baiduLink: 'http://www.baidu.com'
    }
  })
</script>
```

#### 2.2.2 v-bind绑定class

很多时候，我们希望动态的来切换class。比如当数据为某个状态的时候，字体显示红色，当是另一种状态时，字体显示绿色。

v-bind绑定class，可以接受一个对象，也可以接受一个数组。

```vue
<body>
  <div id="app">
    <!-- 方式1：直接通过{}绑定一个类 -->
    <h2 :class="{'active':isActive}">Hello Vue</h2>
    <!-- 方式2：这种方式可以通过判断，传入多个值 -->
    <h2 :class="{'active':isActive, 'size': big}">Hello Vue</h2>
    <!-- 方式3：和普通类同时存在，并不冲突 -->
    <h2 class="h2-border" :class="{'active':isActive, 'size': big}">Hello Vue</h2>
    <!-- 方式4：如果过于复杂，可以放到一个data中 -->
    <h2 class="h2-border" :class="classes">Hello Vue</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      isActive: true,
      big: true,
      classes: ['active', 'size']
    }
  })
</script>
```

#### 2.2.3 v-bind绑定style（了解）

我们可以通过:style的方式动态的绑定一些css的内联样式。在写CSS属性名的时候，比如font-size，我们在v-bind需要转换为驼峰规则来编写，或者使用横线分隔，使用横线的情况下，需要加上引号。

```vue
<body>
  <div id="app">
    <!-- 方式1：直接绑定对象 -->
    <h2 :style="{color: 'red', fontSize: '15px'}">Hello Vue</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
    }
  })
</script>
```

#### 2.2.4 v-model

表单在实际开发中非常常见，一般是用于数据的提交，需要使用大量的表单。

Vue中使用v-model来实现表单元素和数据的双向绑定。

```vue
<body>
  <div id="app">
    <input type="text" name="name" v-model="name">
    <h2>{{name}}</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      name: '张三'
    }
  })
</script>
```

当我们输入表单中的数据时，data中也会随之改变，data被改变后，插值运算符中的显示内容也会随之改变。

#### 2.2.5 v-model绑定select

当我们选中option的时候，会将它对应的value赋值给mySelect。当我们mySelect的值改变时，option会自动选中对应value的那一项

```vue
<body>
  <div id="app">
    <select v-model="mySelect">
      <option value="java">Java从入门到精通</option>
      <option value="python">python从入门到精通</option>
      <option value="php">php从入门到精通</option>
      <option value="mysql">mysql从删库到跑路</option>
    </select>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      mySelect: 'php'
    }
  })
</script>
```

### 2.3 监听器

如果我们需要监听某个值的变化，当这个值变化是，进行一些操作，可以使用监听器。监听器的属性名称是watch，和data平级。监听器中的数据是方法，接收两个参数，分别为改变后的值和改变前的值。

```vue
<body>
  <div id="app">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <h2>{{fullName}}</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      firstName: '张',
      lastName: '狗子',
      fullName: ''
    },
    watch: {
      firstName: function(newVal, oldVal) {
        // 在vue中，操作data、method必须使用this
        this.fullName = this.firstName + this.lastName
      },
      lastName(newVal, oldVal) {
        this.fullName = this.firstName + this.lastName
      }
    }
  })
</script>
```

### 2.4 计算属性

#### 2.4.1 什么是计算属性

我们知道在模板中可以通过插值语法现实一些data中的数据。但是某些情况，我们可能需要对数据进行一些转换后再现实，或者需要将多个数据结合起来进行现实。

```vue
<body>
  <div id="app">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <h2>{{fullName}}</h2>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      firstName: '张',
      lastName: '狗子'
    },
    computed: {
      fullName() {
        // 写法是个方法，但是使用的时候是作为属性使用的，和data一致。
        return this.firstName + this.lastName
      }
    }
  })
</script>
```

计算属性是一个属性，而不是方法。虽然写法是方法，但是我们使用的时候是直接视为一个属性去操作的，使用方式和data一致。

计算属性中使用到的data中的数据只要发生了变化，计算属性就会重新计算。如果两次获取计算属性的时候，里面使用到的属性没有发生变化，计算属性会直接使用之前缓存的值。

#### 2.4.2 计算属性的getter和setter

每一个计算属性都包含get方法和set方法。在上面的例子中，我们只是使用get去读取计算属性的值，在某些情况下，我们可能会需要人工改变计算属性的数据，这时候我们就需要使用setter方法。

计算属性如果需要定义set和get方法，这时候计算属性就使用对象进行编写。

```vue
<body>
  <div id="app">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="text" v-model="fullName">
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      firstName: '张',
      lastName: '狗子'
    },
    computed: {
      fullName: {
        get() {
          console.log('调用了get方法')
          return this.firstName+' '+this.lastName
        },
        set(val) {
          console.log('调用了set方法')
          const names = val.split(' ')
          this.firstName = names[0]
          this.lastName = names[1]
        }
      }
    }
  })
</script>
```

**注意**

计算属性。在computed中，可以定义一些属性，这些属性叫做计算属性，他本质上就是一个方法，但是，我们使用的时候是当做属性来使用。计算属性使用的过程中，一定不要加()，它就是一个属性，和data里的属性用法一样。

只要极速暗属性中所用到的data中的属性发生了变化，就会立即去重新计算属性的值。

计算属性的结果会被缓存起来，方便下次调用，如果计算属性中用到的data都没有变化，就不会重新求值。

在计算属性中，无论如何都需要return一个值，用来代表这个属性的值。

计算属性和监听器的区别：

Computed用法视为一个属性，并且结果会被缓存。

Methods表示方法，表示一个具体的操作，主要用来写业务逻辑

Watch是一个对象，key是需要监听的表达式，value是对应的回调函数，主要用来监听某些数据的变化，从而执行某些具体的业务逻辑。可以看做是计算属性和methods的结合体。

### 2.5 事件监听

#### 2.5.1 v-on

vue中如何监听事件呢？这里使用v-on指令。

v-on也有简写方式，直接写成@

```vue
<body>
  <div id="app">
    <h2>{{count}}</h2>
    <input type="text" v-on:focus="alertMsg">
    <button v-on:click="addCount">点我</button>
    <!-- v-on的简写方式 -->
    <button @click="addCount">点我</button>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      count: 0
    },
    methods: {
      addCount() {
        this.count++
      },
      alertMsg() {
        alert('获取了焦点')
      }
    }
  })
</script>
```

#### 2.5.2 v-on参数

当通过methods定义方法，以供@click调用时，需要注意参数问题

- 如果该方法不需要参数，那么方法后的括号不可以添加。因为存在某些框架，如果加了括号之后，可能在页面渲染完毕后立即加载一遍该方法。

- 如果需要传入某个参数，那么这个时候需要括号，并且需要在括号中传入参数。

### 2.6 条件判断

#### 2.6.1 v-if

v-if、v-else-if、v-else。

这三个指令与JS中的条件判断if、else if、else类似。

v-if可以根据表达式中的值渲染或者销毁元素和组件。

```vue
<body>
  <div id="app">
    <div v-if="score >= 90">优秀</div>
    <div v-else-if="score >= 75">良好</div>
    <div v-else-if="score >= 60">及格</div>
    <div v-else>不及格</div>
    <button @click="delScore">减分</button>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      score: 100
    },
    methods: {
      delScore() {
        this.score -= 10
      }
    }
  })
</script>
```

#### 2.6.2 v-show

v-show的用法与v-if类似，也是用于条件判断的。

```vue
<body>
  <div id="app">
    <div v-show="score >= 90">优秀</div>
    <div v-show="score >= 75 && score < 90">良好</div>
    <div v-show="score >= 60 && score < 75">及格</div>
    <div v-show="score < 60">不及格</div>
    <button @click="delScore">减分</button>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      score: 100
    },
    methods: {
      delScore() {
        this.score -= 10
      }
    }
  })
</script>
```

**二者的区别：**

v-if是完全不创建DOM元素，而v-show则是创建了DOM元素，仅仅是使用display：none隐藏了该元素。

当需要频繁的显示、隐藏一些内容时，使用v-show。当我们仅有一次切换，某些v-if场景根本不会显示出来的时候，用v-if。

### 2.7 循环遍历

#### 2.7.1 v-for遍历数组

当我们有一组数据需要进行渲染时，我们就可以使用v-for完成。

v-for类似于JS中的for循环。

格式：item in items。后面的items代表着你需要遍历的数组，item则表示每一项的名称。

```vue
<body>
  <div id="app">
    <ul>
      <li v-for="item in dataList">{{item}}</li>
    </ul>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      dataList: [
        'Java从入门到精通',
        'php从入门到精通',
        'mysql从删库到跑路',
        'Vue从单身到脱单'
      ]
    }
  })
</script>
```

如果我们需要在便利的过程中，获取该元素所在数组中的索引值，应该怎么操作？

v-for="(item, index) in items"

```vue
<li v-for="(item, index) in dataList">{{index + ':' + item}}</li>
```

#### 2.7.2 v-for遍历对象（了解）

v-for可以遍历对象。比如某个对象中存储着你的信息，我们希望用列表的形式显示出来。

语法：v-for="(value, key, index) in myInfo"

```vue
<ul>
    <li v-for="(value, key, index) in myInfo">{{index}}:{{key}}:{{value}}</li>
</ul>
myInfo: {
    id: 3,
    name: '张三',
    age: 23,
    hobby: '唱跳rap篮球'
}
```

#### 2.7.3 v-for遍历数组对象

```vue
<li v-for="item in userList">{{item.id}}--{{item.name}}--{{item.age}}</li>
userList: [
    {id: 3, name: '张三', age: 23},
    {id: 4, name: '李四', age: 24},
    {id: 5, name: '王五', age: 25},
    {id: 6, name: '赵六', age: 26}
]
```

Vue官方建议，如果我们使用v-for去遍历一个对象、数组的话，建议给对应的元素或者组件上加一个key属性，并且要保证key的唯一。

### 2.8 过渡动漫（了解）

```vue
<style>
    /* v-enter 这个是一个时间点，表示动画进入之前，元素的起始状态，此时还没有进入 */
    /* v-leave-to 这是一个时间点，是动画离开之后，元素的终止状态，此时，元素动画已经结束了 */
    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(50px);
    }
    
    /* v-enter-active 表示入场动画的时间段 */
    /* v-leave-active 表示离场动画的时间段 */
    .v-enter-active,
    .v-leave-active {
      transition: all 0.8s ease;
    }
  </style>
</head>

<body>
  <div id="app">
    <button @click="flag = !flag">点击</button>
    <transition>
      <div v-show="flag">这个是第一个div</div>
    </transition>
  </div>
</body>
<script>
  let app = new Vue({
    el: '#app',
    data: {
      flag: true
    },
    methods: {
    }
  })
</script>
```

此时如果我们想要让div1消失后，div2进来，div2消失后div1进来，应该怎么办？

只需要写两套动画即可

```vue
<transition>
	<div v-show="flag">这个是第一个div</div>
</transition>
<transition>
	<div v-show="!flag">这个是第二个div</div>
</transition>
```

如果div1和div2不想公用一套动画，应该怎么办？这时候我们可以给transition命名，使用name属性即可。定义了name之后，两个transition则使用自己独立的动画效果。定义了name之后，动画的相关class，要以name开头，不能以v开头。

```vue
<transition name="div1">
    <div v-show="flag">这个是第一个div</div>
</transition>
<transition name="div2">
    <div v-show="!flag">这个是第二个div</div>
</transition>
  <style>
    /* v-enter 这个是一个时间点，表示动画进入之前，元素的起始状态，此时还没有进入 */
    /* v-leave-to 这是一个时间点，是动画离开之后，元素的终止状态，此时，元素动画已经结束了 */
    .div1-enter,
    .div1-leave-to {
      opacity: 0;
      transform: translateX(50px);
    }
    
    /* v-enter-active 表示入场动画的时间段 */
    /* v-leave-active 表示离场动画的时间段 */
    .div1-enter-active,
    .div1-leave-active {
      transition: all 0.8s ease;
    }
    /* v-enter 这个是一个时间点，表示动画进入之前，元素的起始状态，此时还没有进入 */
    /* v-leave-to 这是一个时间点，是动画离开之后，元素的终止状态，此时，元素动画已经结束了 */
    .div2-enter,
    .div2-leave-to {
      opacity: 0;
      transform: translateX(50px);
    }
    
    /* v-enter-active 表示入场动画的时间段 */
    /* v-leave-active 表示离场动画的时间段 */
    .div2-enter-active,
    .div2-leave-active {
      transition: all 0.2s ease;
    }
</style>
```

### 2.9 vue生命周期

![1](/images/1.png)



![2](/images/2.png)

生命周期函数，是与data、methods平级的，并不是写到methods中。

一般开发中，我们很少会使用到第三阶段的生命周期，我们往往不会轻易地去销毁一个组件。

# 第3章

## 组件化开发

### 3.1 什么是组件化开发

人面对复杂问题的处理方式：

我们面对一个复杂问题时，不太可能一次性搞定所有的内容，我们可以将问题拆解，拆解成一个一个小问题，再讲这些小问题一个一个解决。

组件化开发就是类似的思想。

如果我们将一个页面中所有的逻辑都放到一起，处理起来会非常的复杂，而且不利于后续的管理和扩展。

但是如果我们将一个页面拆分成一个一个的小功能块，每个功能块完成属于自己的这部分独立的功能，那么之后整个页面管理和维护都变得非常容易。

### 3.2 vue组件化思想

组件化是Vue的一个重要思想，它提供了一种抽象，让我们可以开发出一个个独立可复用的小组件来构建我们的应用。任何的应用都会被抽象成一颗组件树。

![](/images/3.png)

组件化开发的应用：

有了组件化的思想，我们在之后的开发中就要充分的利用它。

尽可能的讲页面拆分成一个个小的、可复用的组件。

这样让我们的代码，更加方便组织、管理、扩展。

### 3.3 注册组件

组件的使用分成三个步骤：创建组件构造器、注册组件、使用组件。

```vue
<body>
  <div id="app">
    <my-component></my-component>
    <my-component2></my-component2>
    <my-component3></my-component3>
    <my-component4></my-component4>
  </div>
</body>

<template id="temp">
  <div>
    <p>我是p标签</p>
    <h1>我是h1标签</h1>
    <div style="color: red;">哈哈哈</div>
  </div>
</template>
<script>
  var num = 10
  /**
   * 1 使用Vue.extend来注册 组件
   * 按照了Java的开发思想，变量名往往是驼峰规则。
   * 但是使用组件的时候一般不使用驼峰规则
   * 而是将驼峰规则全部改成小写，然后中间用-连接
   */
  Vue.component('myComponent', Vue.extend({
    // template就是组件要展示的内容，可以是html标签
    template: '<h3>这是用extend注册的组件</h3>'
  }))
  /**
   * 2.不使用extend去注册组件
   */
  Vue.component('myComponent2', {
    // template就是组件要展示的内容，可以是html标签
    template: '<div><h3>这是不用extend注册的组件</h3><h3>我是第二个h3</h3></div>'
  })
  // 不论使用哪一种注册方式，template属性只能有一个，并且有且仅有一个根节点。
  Vue.component('myComponent3', {
    // template就是组件要展示的内容，可以是html标签
    template: `<div><h3>组件中使用外部变量num:${num}</h3></div>`
  })
  // 3.使用template
  Vue.component('myComponent4', {
    template: '#temp'
  })
  let app = new Vue({
    el: '#app'
  })
</script>
```

### 3.4 私有组件

我们上面使用Vue.component注册组件时，注册的是全局的组件。这意味着我们可以再任意的Vue实例中，使用该组件。

如果我们想要注册一个局部的私有组件，可以将组件挂载到某个实例上。

```vue
<body>
  <div id="app">
    <my-component></my-component>
    <my-comp></my-comp>
  </div>
  <div id="app2">
    <my-component></my-component>
  </div>
</body>

<script>
  /**
   * 注册的是全局组件
   */
  Vue.component('myComponent', Vue.extend({
    // template就是组件要展示的内容，可以是html标签
    template: '<h3>这是用extend注册的组件</h3>'
  }))
  let myComp = Vue.extend({
    // template就是组件要展示的内容，可以是html标签
    template: '<h3>我是私有组件</h3>'
  })
  let app = new Vue({
    el: '#app',
    components: {
      myComp
    }
  })
  let app2 = new Vue({
    el: '#app2'
  })
</script>
```

### 3.5 父组件与子组件

前面我们看到了组件树，组件和组件之间存在层级关系。这就是父组件与子组件。组件中也有components关键字，同样是使用components将子组件注册到父组件。

```vue
<body>
  <div id="app">
    <parent-com></parent-com>
  </div>
</body>

<script>
  // 1.创建一个子组件
  let childCom = Vue.extend({
    template: `
      <div>我是子组件内容。</div>
    `
  })
  // 2.创建一个父组件
  let parentCom = Vue.extend({
    template: `
      <div>
        <h1>我是父组件内容</h1>
        <child-com></child-com>
      </div>
    `,
    components: {
      childCom
    }
  })
  let app = new Vue({
    el: '#app',
    components: {
      parentCom
    }
  })
</script>
```

### 3.6 组件的数据

组件是一个单独的功能模块的封装，这个模块有属于自己的HTML模板，也应该有属于自己的data。

我们先测试一下组件是否能使用Vue实例中的data。

```vue
<body>
  <div id="app">
    <my-com></my-com>
  </div>
</body>

<script>
  let myCom = Vue.extend({
    template: `<div>我是组件{{msg}}</div>`
  })
  let app = new Vue({
    el: '#app',
    data: {
      msg: '哈哈哈'
    },
    components: {
      myCom
    }
  })
</script>
```

经过测试，我们发现不能使用。即使可以使用，如果将所有的数据都放到Vue实例中，Vue实例是不是会变得非常臃肿。那么 组件的数据存放到哪里？组件也有个data属性、methods、filters等等等等，使用方式与Vue一致（data不一样。），Data必须是一个方法，返回一个对象。其他的与Vue实例使用方式一样。

```vue
<script>
  let myCom = Vue.extend({
    template: `<div>我是组件{{msg}}</div>`,
    data() {
      return {
        msg: '我是子组件的msg'
      }
    }
  })
  let app = new Vue({
    el: '#app',
    data: {
      msg: '哈哈哈'
    },
    components: {
      myCom
    }
  })
</script>
```

#### 3.6.1 为什么组件的data必须是一个方法

首先，如果不是一个方法，Vue直接会报错。

其次，原因在于Vue让每一个组件对象都返回一个新的对象，如果是同一个对象的，组件会在多次使用后相互影响。如果我们不写成方法返回对象的话，那么就是所有组件公用一个data。

```vue
<body>
  <div id="app">
    <my-com></my-com>
    <my-com></my-com>
    <my-com></my-com>
    <my-com></my-com>
  </div>
</body>
<template id="myTemp">
  <div>
    <button @click="addCount">点我</button>
    <span>当前数量：{{count}}</span>
  </div>
</template>
<script>
  let obj = {
    count: 0
  }
  let myCom = Vue.extend({
    template: '#myTemp',
    data() {
      return obj
    },
    methods: {
      addCount() {
        this.count++
      }
    }
  })
  let app = new Vue({
    el: '#app',
    components: {
      myCom
    }
  })
</script>
```

### 3.7 组件的通信

在上一节中，我们提到了子组件不能使用Vue实例中的数据

但是在开发中，往往会存在这个场景，让子组件使用父组件的数据。

比如我们从后台获取到一些数据后，这些数据需要传递到子组件去使用，或者我们获取到了很多的数据，这些数据分别需要分发到下面的各个子组件中使用。怎么操作？

#### 3.7.1 父组件向子组件传值

组件中，可以使用props来声明需要从父级接受到的数据。

首先在父组件中使用v-bind将数据绑定给子组件，再在子组件中，使用props接收。

Props和data、methods平级，有两种使用方式。

- 字符串数组，数组中的字符串就是传递时的名称。

```vue
<body>
  <div id="app">
    <!-- 第一步，用绑定的方式，将父组件的数据绑定给子组件 -->
    <my-com :msg="msg"></my-com>
  </div>
</body>
<template id="myTemp">
  <div>
    <span>当前数量：{{count}}</span>
    <div>{{msg}}</div>
  </div>
</template>
<script>
  let myCom = Vue.extend({
    template: '#myTemp',
    data() {
      return {
        count: 0
      }
    },
    props: [
      // 第二步，使用props接收.
      'msg'
    ]
  })
  let app = new Vue({
    el: '#app',
    data: {
      msg: '我是父组件的msg'
    },
    components: {
      myCom
    }
  })
</script>
```

- 对象，对象可以设置传递时的类型和默认值。

```vue
<body>
  <div id="app">
    <!-- 第一步，用绑定的方式，将父组件的数据绑定给子组件 -->
    <my-com :msg="msg"></my-com>
  </div>
</body>
<template id="myTemp">
  <div>
    <span>当前数量：{{count}}</span>
    <div>{{msg}}</div>
  </div>
</template>
<script>
  let myCom = Vue.extend({
    template: '#myTemp',
    data() {
      return {
        count: 0
      }
    },
    // props: [
    //   // 第二步，使用props接收.
    //   'msg'
    // ]
    props: {
      msg: {
        type: String,
        default: '我是默认值，父组件没有传给我msg'
      }
    }
  })
  let app = new Vue({
    el: '#app',
    data: {
      msg: '我是父组件的msg'
    },
    components: {
      myCom
    }
  })
</script>
```

> Type支持的类型：String、Number、Boolean、Array、Object、Date、Function、Symbol

#### 3.7.2 父组件向子组件传递方法

Props用于父组件向子组件传递数据，还有一种比较常见的就是子组件传递数据或者事件到父组件中。

我们可以使用自定义事件来完成。

父组件调用子组件的方法，使用$emit来实现。

```vue
<body>
  <div id="app">
    <!-- 第一步，在子组件上，使用@符号为该组件绑定一个事件 -->
    <my-com @alert-msg="alertMsg"></my-com>
  </div>
</body>
<template id="myTemp">
  <div>
    <button @click="handlerMethod">点我</button>
  </div>
</template>
<script>
  let myCom = Vue.extend({
    template: '#myTemp',
    methods: {
      handlerMethod() {
        // 第一个参数表示要调用的方法。
        // 第二个参数往后，就是我们需要传递的参数
        this.$emit('alert-msg', '调用')
      }
    }
  })
  let app = new Vue({
    el: '#app',
    data: {
      msg: '我是父组件的msg'
    },
    methods: {
      alertMsg(msg) {
        alert(msg)
      }
    },
    components: {
      myCom
    }
  })
</script>
```

#### 3.7.3 父组件调用子组件方法

`$refs`是和ref一起使用的。通过ref给某个子组件绑定一个特定的ID，然后我们使用$refs.ID就可以访问到子组件了。

```vue
<body>
  <div id="app">
    <button @click="countAdd">点我</button>
    <!-- 第一步，给子组件绑定一个ref -->
    <my-com ref="myComp"></my-com>
  </div>
</body>
<template id="myTemp">
  <div>
    {{count}}
  </div>
</template>
<script>
  let myCom = Vue.extend({
    template: '#myTemp',
    data() {
      return {
        count: 1
      }
    },
    methods: {
      addCount() {
        this.count++
      }
    }
  })
  let app = new Vue({
    el: '#app',
    methods: {
      countAdd() {
        // 第二步，在父组件中使用this.$refs.id就行了
        console.log(this.$refs.myComp.count)
        this.$refs.myComp.addCount()
      }
    },
    components: {
      myCom
    }
  })
</script>
```

### 3.8 插槽（了解）

#### 3.8.1 为什么使用插槽

Slot翻译为插槽。

在生活中我们很多地方都有插槽，必读电脑的USB插槽，插板的电源插槽。

插槽的目的是让我买原来的设备具备更多的扩展性。

组件的插槽：

组建的插槽也是为了让我们封装的组件更具有扩展性。让使用者可以决定组件内部的一些内容要展示什么。

比如移动web中的导航栏。导航栏的内容可能不一样，因此这里就需要使用插槽了。

#### 3.8.2 如何封装

如何去封装这类组件？

它们有很多的区别，但是也有很多的共性，

如果我们每一个都单独去封装一个组件，显然不合适。但是我们如果只封装一个，也有些不合理。有些导航栏有左侧菜单，有些是返回按钮，有些是搜索框，有些是文字。

封装的思想就是，抽取共性，保留不同。将共性抽取到组件中，将不同的区域暴露为插槽，供用户自己去设置。

#### 3.8.3 slot的基本使用

在子组件中，使用特殊的标签<slot>就可以为子组件开启一个插槽。该插槽中插入什么内容取决于父组件的使用。

```vue
<body>
  <div id="app">
    <my-com>
      <h2>我是替换插槽的内容</h2>
      <ul>
        <li>我也是</li>
        <li>我也是的</li>
        <li>俺也一样</li>
      </ul>
    </my-com>
  </div>
</body>
<template id="myTemp">
  <div>
    哈哈哈哈
    <slot>我是插槽中的默认内容</slot>
    哈哈哈
  </div>
</template>
<script>
  let myCom = Vue.extend({
    template: '#myTemp',
  })
  let app = new Vue({
    el: '#app',
    components: {
      myCom
    }
  })
</script>
```

3.8.4 具名插槽

当子组件功能复杂时，子组件的插槽可能不止一个。比如我们封装导航栏的组件，可能就需要三个插槽，分别代表左中右。那么外面在给我们插槽插入内容时，如何区分插入的是哪一个呢？

这时候我们就需要使用具名插槽。具名插槽就是在slot上定义一个名字。而在父组件中如果想要给指定位置的插槽插入内容的话，应该给标签加上slot属性，比如<span slot="left">

```vue
<body>
  <div id="app">
    <my-com>
      <span slot="left">返回按钮</span>
      <span slot="center">搜索框</span>
      <span slot="right">菜单内容</span>
    </my-com>
  </div>
</body>
<template id="myTemp">
  <div>
    <slot name="left">我是左边</slot>
    <slot name="center">我是中间</slot>
    <slot name="right">我是右边</slot>
  </div>
</template>
<script>
  let myCom = Vue.extend({
    template: '#myTemp',
  })
  let app = new Vue({
    el: '#app',
    components: {
      myCom
    }
  })
</script>
```

# 第4章

## 模块化开发

> 组件化开发，一般是将重复的代码抽取成一个组件，供其他地方复用，一般情况下，提到组件化开发，都是指前端的组件化开发。
>
> 模块化开发，一般是将同一类功能模块的代码放到一起统一进行管理，是基于代码层面的，一般情况下，提到模块化开发，都是指后端。

### 4.1 JavaScript原始功能

在网页开发初期，js作为一个脚本语言，做一些简单的表单验证或者动画效果，那个时候，js代码还是比较少的。

而随着ajax请求的出现，慢慢的形成了前后端分离，客户端要做的事情越来越多，代码量也与日俱增。为了应对代码量的剧增，我们通常会将代码组织到多个js中，方便维护。

但是这种维护方式，依然不能避免一些灾难性的问题。比如变量的污染。

```vue
flag = true // aaa.js
flag = false // bbb.js
  <script src="./js/aaa.js"></script>
  <script src="./js/bbb.js"></script>
  <script>
    if(flag) {
      console.log('flag的值是', flag)
    }
  </script>
```

### 4.2 使用模块作为出口

我们可以使用将需要的暴露在外面的变量，使用一个模块作为出口。

```vue
var moduleA = (function() {
  var flag = true
  return flag
})()
var moduleB = (function() {
  var flag = false
  return flag
})()
  <script src="./js/aaa.js"></script>
  <script src="./js/bbb.js"></script>
  <script>
    console.log('flag的值是', moduleB)
  </script>
```

以上代码就是模块化开发的雏形。将变量定义到一个匿名函数中，这样就可以避免变量名的冲突，最后，在匿名函数中返回一个对象，这个对象，就代表着这一整个js文件中所有暴露在外的数据。

### 4.3 export

export用于导出变量。

```vue
// 分别导出name、age、gender三个变量
export let name = '张三'
export let age = 23
export let gender = '男'
```

### 4.4 import

我们使用export指令导出了模块对外提供的接口，下面我们通过import指令来加载这个模块。在html中使用script标签引入js文件，注意，这里需要把type设置为module。

接着，使用import在main.js中引入info.js。注意，info中使用export导出了什么，我们使用的时候就需要用什么去接收，变量名必须一致。此外，如果我们不需要使用某变量，比如gender。我们可以不写。

```vue
import {name, age, gender} from './info.js'
console.log(name, age, gender)
```

如果我们希望某个模块中所有的信息都导入，一个个导入显然非常麻烦。

通过 * 可以导入模块中所有的export变量。

### 4.5 export 导出方法

```vue
export function test(content) {
  console.log(content)
}
```

### 4.6 export default

某些情况下。一个模块中包含某个功能，我们并不希望给这个功能去命名，而让我们导入者可以自己去命名。这个时候就可以使用export default

```vue
let user = {
  name: '张三',
  age: 23,
  gender: '男'
}
export default user
```

那么，我们在main.js中，就可以直接使用了

```vue
import aaa from './info2.js'
console.log(aaa)
```

- 需要注意的是：export default在一个模块中，不允许同时出现多个

# 第5章

## webpack

### 5.1 什么是webpack

> 从本质上讲，webpack是一个现代的JavaScript应用的静态模块打包工具。

### 5.2 安装

安装nodejs

### 5.3 npm

npm是一个装包工具，一般情况下我们使用webpack开发的时候一定会用到npm。

语法：npm install 包名 安装模式

安装模式：

-g：全局安装

--save-dev：开发环境安装，只在开发中有效，打包后不打包进项目

--save：生产环境。默认就是--save

### 5.4 安装nrm和cnpm

由于国内直接使用npm的镜像是国外的，非常缓慢，建议切换成淘宝镜像。

Npm config set registry http://registry.npm.taobao.org

直接切换镜像不太方便，我们可以安装一个镜像管理工具nrm

安装：

Npm install -g nrm

查看镜像列表：nrm ls

切换镜像：nrm use 镜像名称

也可以安装cnpm工具。但是我们不推荐使用cnpm。

Npm install -g cnpm --registry=https://registry.npm.taobao.org

### 5.5 快速入门

#### 5.5.1 前期准备

我们需要创建这些文件夹和文件。

dist文件夹：存放打包后的文件。

src文件夹：存放我们的源码

main.js：项目的入口，在src下面

utils.js：demo代码，一个工具类

index.html：浏览器打开展示的首页html

新建一个项目目录，执行npm init初始化项目

- util中代码

```javascript
function add(num1, num2) {
  return num1 + num2
}

function multipart(num1, num2) {
  return num1 * num2
}
module.exports = {
  add,
  multipart
}
```

- main.js代码

```javascript
const math = require('./utils')
console.log(math.add(10,20))
console.log(math.multipart(10,3))
```

#### 5.5.2 打包

因为js中使用到了require关键字，这个是nodejs中的关键字，浏览器无法识别，代码无法正常执行，因此需要打包后才可以执行，

我们应该怎么做？这里就需要使用webpack。

打包命令：webpack src/main.js dist/bundle.js

`bundle.js`文件，是webpack处理了项目的文件依赖之后生成的一个js文件，我们只需要将这个文件引入到index.html中。

### 5.6 webpack配置

#### 5.6.1 入口和出口

我们考虑一下，如果每次使用webpack命令都需要指定入口和出口的文件作为参数，就非常麻烦，我们可以将这个打包命令写到配置文件中，在运行时直接读取。

在项目根目录下创建一个webpack.config.js

```javascript
const path = require('path')
module.exports = {
  // 入口，可以是字符串/数组/对象。
  entry: './src/main.js',
  // 出口，通常是一个对象，里面至少包含path和filename
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
```

配置完毕后，直接执行webpack命令，就可以打包成功。

#### 5.6.2 局部安装webpack

目前我们使用的webpack是全局的，如果我们想要使用局部的webpack怎么操作呢？

因为一个项目往往依赖特定的webpack版本，如果我们不去局部安装webpack，可能就会存在各种版本问题。因此通常一个项目，都会有自己的局部webpack

安装：

Npm install [webpack@3.6.0](mailto:webpack@3.6.0) --save-dev

执行命令：

node_modules/.bin/webpack

#### 5.6.3 package.json

我们每次执行的时候，都需要执行一长串命令，十分的不方便。即使我们配置了webpack的入口和出口，也会存在多环境下开发时，命令有所不同的情况，这时候，我们可以在package.json中定义自己的脚本。

```javascript
{
  "name": "1.webpack1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^3.6.0"
  }
}
```

之后，执行npm run build 即可。

### 5.7 loader

#### 5.7.1 什么是loader

loader是webpack中非常核心的概念。

我们在开发中不仅仅有js文件，还有css、图片、包括一些高级的ES6代码、TypeScript代码、scss、less、jsx、vue文件等等，最终都需要转换成js文件。

Webpack本身不支持这些转化，需要安装对应的扩展loader即可。

loader使用过程

- npm安装对应的loader

- 在webpack.config.js中的modules关键字下面进行配置。

#### 5.7.2 css-loader

在项目开发过程中，我们必然需要添加很多的样式，而样式我们往往写到一个单独的文件中。

我们将p标签设置为红色，样式并没有生效，打包还报错了。

### 5.8 引入vue

我们需要在webpack环境中集成vue

首先：安装vue

npm install vue

安装成功之后，我们就可以像之前的写法一样使用vue了。

```javascript
// 以后引入包的时候，全部使用import
import Vue from 'vue'
let app = new Vue({
  el: '#app',
  data: {
    name: '张三'
  }
})
```

打包没有报错，但是执行结果不是我们预期的结果，怎么回事？

报错信息说我们使用的是runtime-only版本的vue。这是一个阉割版，移除了部分的功能，使我们可能无法像之前的使用方式一样去使用vue。

解决方案。就webpack配置中，加入以下配置。

```javascript
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
```

这次报错说，cannot find element #app

解决方案：把引入bundle.js的script移动到body下面即可。

### 5.9 vue组件化开发

Vue组件化开发，我们将采用一种全新的方式来组织一个Vue组件。

首先创建一个.vue结尾的文件

Vue文件以三个模块进行划分：template、script、style

```vue
<template>
  <div>
    <span class="title">{{name}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '我是.vue的app组件'
    }
  }
}
</script>
<style scoped>
.title {
  color: red;
}
</style>
```

接着，在main.js中引入。

```javascript
// 以后引入包的时候，全部使用import
import Vue from 'vue'
import App from './App.vue'
let app = new Vue({
  el: '#app',
  data: {
    name: '张三'
  },
  render: e => e(App)
})
```

但是，这样可以正确被加载吗？

.vue格式是一种特殊的文件格式，如果需要加载，就需要对应的loader。

这里需要装vue-loader，vue-template-compiler

npm install vue-loader vue-template-compiler --save-dev

装包完毕后，修改webpack配置文件。

```javascript
{
test: /\.vue$/,
use: ['vue-loader']
}
```

### 5.10 打包html插件

目前，我们的index.html文件是存放到项目根目录下的。

我们在实际发布项目的时候，发布的是dist文件夹中的内容。但是dist文件夹中没有index.html文件。

所以，我们需要将index.html也打包到dist文件夹中。这个时候就可以使用HTMLWebpackPlugin插件

安装：

npm install html-webpack-plugin --save-dev

安装完毕后，修改配置文件。

```javascript
const htmlWebpackPlugin = require('html-webpack-plugin')
  plugins: [
    new htmlWebpackPlugin({
      // 指定打包用的html模板
      template: 'index.html'
    })
  ]
```

在项目发布之前，我们需要对js等文件进行压缩处理，这里我们对js文件进行压缩

我们使用uglifyjs-webpack-plugin，版本号指定为1.1.1

最后，在webpack配置文件中配置

```javascript
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
  plugins: [
    new htmlWebpackPlugin({
      // 指定打包用的html模板
      template: 'index.html'
    }),
    new uglifyJsPlugin()
  ]
```

### 5.11 搭建本地服务器

Webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新效果。

Npm install [webpack-dev-server@2.9.1](mailto:webpack-dev-server@2.9.1) --save-dev

在package.json中进行配置。

```javascript
"scripts": {
"dev": "webpack-dev-server --port 3000 --hot --open",
"build": "webpack"
},
```

port：端口号

hot：热更新

open：项目启动自动打开浏览器

# 第6章

## vue-cli

### 6.1 什么是vue-cli

如果你只是简单写几个Vue的demo，那么你不需要使用VueCli

如果你在开发实际的项目，必然会使用VueCli

如果开发一个项目，我们需要考虑代码结构、目录结构、部署、热加载、单元测试等等，如果我们都手动去完成，那么效率非常的低。通常我们会使用一些脚手架去完成，

Cli翻译为命令行界面，但是我们俗称脚手架。

### 6.2 安装

npm install -g @vue/cli

这样安装，安装的是最新版。

我们如果需要使用2.0版本，可以不必去安装2.0版本的cli。只需要安装一个cli-init

npm install -g @vue/cli-init

### 6.3 vue-cli2（了解）

#### 6.3.1 创建项目

vue init webpack projectName

#### 6.3.2 目录结构

...

### 6.4 vue-cli3

#### 6.4.1 创建目录

- 命令行创建

vue create projectName

![](/images/4.png)

![](/images/5.png)

![](/images/6.png)

![](/images/7.png)

![](/images/8.png)

- 可视化界面创建

vue ui

...

#### 6.4.2 目录结构

![](/images/9.png)



#### 6.4.3 vue.config.js

Vue-cli脚手架搭建完毕后，项目目录中没有vue.config.js，需要我们手动创建，这是VueCli3的配置文件。

vue.config.js是一个可选的配置文件。如果项目的根目录存在这个文件，那么就会被自动加载。这个文件需要导出一个包含了选项的对象。

#### 6.4.4 配置选项

- publicPath：默认是 /

部署应用时的基本url，用法和webpack的output.publicPath一致。这个配置也可以设置成空字符串或者./

- outputDir：默认是dist

输出文件目录。我们执行npm run build时会将代码打包到对应的目录。

- assetsDir：默认是空字符串

放置生成的静态资源目录

- indexPath：默认是index.html

指定生成的index.html的输出路径，也可以是一个绝对路径

- lintOnSave：默认是true是否在保存的时候使用eslint-loader进行语法检查，可以设置为true、false、error。设置为error时，检查出语法不规范的地方会直接编译失败。

- productionSourceMap：默认是true

如果你不需要生产环境的source map，可以设置为false。以加速生产构建

- devServer：设置开发的服务器配置、open、host、port、https、hotOnly、proxy

```javascript
module.exports = {
  // 基本路径
  publicPath: "./",
  // 构建时的输出目录
  outputDir: "dist",
  // 放置生成的静态资源目录
  assetsDir: "static",
  // 指定html输出路径
  indexPath: "index.html",
  // 设置语法检查
  lintOnSave: false,
  // 设置是否需要sourceMap
  productionSourceMap: false,
  // 配置开发环境下的一些服务器配置
  devServer: {
    open: true,
    port: 3000,
    proxy: {
      // 配置代理
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': ""
        }
      }
    }
  }
}
```

#### 6.4.5 全局常量

全局常量用于配置一些全局的常量，这些常量是不会被改变的，一般把项目运行过程中永远不会修改的数据放到这里。

全局常量文件命名是固定的

开发环境：.env.development

生产环境：.env.production

这里需要注意：全局变量除了NODE_ENV和BASE_URL这两个保留变量以外，其余的自定义变量都要用VUE_APP开头。

在vue的任何组件、任何js中可以用下面的语法进行获取

process.env.变量名

# 第7章

## vue-router

### 7.1 认识路由

#### 7.1.1 什么是路由

路由就是通过互联网把信息从源地址传输到目的地址的活动。

路由是决定数据宝从来源到目的地的路径。转送将输入端的数据转移到合适的输出端。

#### 7.1.2 后端路由

早期的网站开发整个HTML页面都是由服务器渲染的。

服务器直接生产渲染好的HTML页面，返回给客户端进行展示。

但是，一个网站，那么多的页面，服务器如何处理呢？

每一个页面都有自己对应的网址（url），url会发送到服务器，服务器会根据url进行匹配，并且交给一个Controlelr进行处理。Controller进行了一系列的处理之后，最终生成HTML或者数据，返回给前端。

这么做的好处是：有利于SEO优化。

缺点：一种情况是整个页面的开发是由后端程序员来编写和维护的。另一种情况是前端开发人员如果需要开发页面，则需要通过php或者java等语言来编写页面代码。所以通常情况下，这么写的代码逻辑和数据会混到一起，后期极难维护。

#### 7.1.3 前端路由

前后端分离阶段：

随着ajax的出现，有了前后端分离的开发模式。后端只提供API来返回数据，前端通过Ajax获取数据，并且通过JavaScript将数据渲染到页面中。这样做最大的优点就是前后端责任清晰，后端专注于数据，前端专注于可视化和用户体验。

并且当移动端出现之后，后端不需要进行任何处理，继续使用之前的一套API即可。

目前前后端分离是一个趋势，已经有非常多的网站使用这种模式开发。

Vue开发的属于前后端分离的单页面应用，由前端来维护路由。通过改变url但是页面不进行整体的刷新。

#### 7.1.4 认识vue-router

目前前端流行的三大框架，都有自己的路由实现

Angular：ngRouter

React：ReactRouter

Vue：vue-routere

vue-router是vue官方提供的路由插件，它和vue是深度集成的，适合用于构建单页应用。

在vue-router的单页应用中，页面路径的改变就是组件的切换。

### 7.2 基本使用

#### 7.2.1 安装

npm install vue-router --save

- 导入路由对象，并且调用Vue.use(VueRouter)

- 创建路由实例，并且传入路由映射配置

- 在Vue实例中挂载创建的路由实例

使用vue-router的步骤

- 创建路由组件

- 配置路由映射，将路由和组件进行关联

- 使用路由

#### 7.2.2 创建路由

在src下面创建一个文件夹router，文件夹下创建index.js，写入以下代码。

```javascript
import Vue from 'vue'
// 导入路由插件
import VueRouter from 'vue-router'
// 注入插件
Vue.use(VueRouter)
// 定义路由
const routes = []
// 创建router实例
const router = new VueRouter({
  routes
})
// 导出router实例
export default router
```

#### 7.2.3 挂载路由

在main.js中引入上面的文件，进行挂载

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
```

#### 7.2.4 创建路由组件

![](/images/10.png)

#### 7.2.5 配置路由

```javascript
import Vue from 'vue'
// 导入路由插件
import VueRouter from 'vue-router'
// 导入路由组件
import Home from '../components/home'
import About from '../components/about'
// 注入插件
Vue.use(VueRouter)
// 定义路由
const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
// 创建router实例
const router = new VueRouter({
  routes
})
// 导出router实例
export default router
```

#### 7.2.6 使用路由

使用路由需要使用到两个组件

Router-link：用于设置路由跳转

Router-view：用于显示当前路由的组件。

```vue
<template>
  <div id="app">
    <h1>我是app.vue的标题</h1>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- router-view是一个坑，用于显示当前路由的内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
```

#### 7.2.7 路由默认路径

我们这里有一个不太合理的地方

默认情况下，我们进入一个网站的首页，是不是应该先把首页渲染。但是我们没有这么做。

这里可以使用默认路径，让这个路径跳转到首页。

```javascript
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]
```

这里使用到的是重定向，当访问到/的时候，路由会重定向到/home

#### 7.2.8 使用HTML5的history模式（了解）

```javascript
const router = new VueRouter({
  routes,
  mode: 'history'
})
```

#### 7.2.9 router-link补充（了解）

我们在前面只使用到了to属性。router-link还有其他的属性。

Tag：tag可以指定router-link会被渲染成什么标签。默认是a标签。

active-class：当router-link被点击后，会自动给当前元素设置一个router-link-active的class。设置这个的作用是改变激活状态下的显示。

如果需要修改，也是可以的，在router中进行配置即可。

```javascript
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
```

### 7.3 编程式导航

我们使用router-link的to属性，可以直接跳转路由。但是有时候，我们需要执行一段js代码之后，再跳转路由，这时候可以使用编程式导航。

语法：

this.$router.push(‘路由url’)

```vue
<button @click="toHome">首页</button>
  methods: {
    toHome() {
      console.log('我将要跳转到首页')
      this.$router.push('/home')
    }
  }
```

### 7.4 路由懒加载

当打包构建应用时，js包会变得非常大，影响页面加载。

如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问时才加载组件，这样就更高效了。我们使用路由懒加载即可。

路由懒加载的作用是将路由对应的组件都打包成一个小的js代码块。只有当路由被访问到的时候，才会加载对应的组件。

引入语法：

const home = () => import(‘组件路径’)

```javascript
// 导入路由组件
const Home = () => import('../components/home')
// 注入插件
Vue.use(VueRouter)
// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: () => import('../components/about')
  }
]
```

### 7.5 嵌套路由

比如在home页中，我们希望通过/home/news这种形式访问一些组件，在home页的基础上，进行组件展示，这时候可以使用嵌套路由。

实现嵌套路由有两个步骤。

- 创建对应的子组件，并且在路由配置中配置子路由。

- 在组件内部使用<router-view>组件

```javascript
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [ // 配置子路由
      {
        path: 'news',
        component: () => import('../components/news')
      },
      {
        path: 'message',
        component: () => import('../components/message')
      }
    ]
  },
  {
    path: '/about',
    component: () => import('../components/about')
  }
```

### 7.6 路由传参

路由跳转可进行参数传递，参数传递分为两种：params和query

Params的类型：

配置路由格式：/news/:id

这样就表示，我们在使用news的时候，需要在后面携带id参数。传递参数后的url：/news/123

query类型

配置路由方式不变。在路由后面使用?key=value传递

#### 7.6.1 router-link传参

```vue
<router-link :to="{
      path: '/home/news',
      query: {name: '张三', age: 23}
    }">新闻2</router-link>
```

### 7.7 JS代码传参

```javascript
    toNews() {
      this.$router.push({
        path: '/home/news',
        query: {name: '李四', age: 24}
      })
    }
```

### 7.8 获取参数

获取参数通过$route对象获取的。

在使用了vue-router组件的应用中，路由会被注入到每一个组件中，赋值为this.$route。当路由切换时，路由对象会更新。

```javascript
created() {
    console.log(this.$route)
}
```

### 7.9 $router和$route

- $route和$router是有区别的

- $router是VueRouter实例，想要导航到不同的URL，使用$router.push方法。

- $route是当前router的跳转对象，可以获取name、path等等

### 7.10 路由守卫

#### 7.10.1 为什么使用路由守卫

在一个单页应用中，只存在一个HTML文件。而网页的标题是通过html中的title标签显式的，我们在单页应用中应当如何修改网页标题呢？

Window.document.title = ‘xxx’

这里可以使用路由守卫。

路由守卫作用是监听路由的进入和离开

vue-router提供了beforeEach和afterEach这两个钩子函数，它们会在路由即将改变前和改变后触发。

#### 7.10.2 使用

在创建路由实例之后，就可以使用路由守卫。beforeEach中有三个参数：

to：即将要进入的目标路由对象

from：即将要离开的路由对象

next：调用该方法之后才会进入下一个路由。

```javascript
// 创建完路由实例之后，可以使用路由守卫
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})
```

# 第8章

## Promise

### 8.1 什么是Promise

ES6中一个非常重要和好用的特性就是Promise

Promise是异步编程的一种解决方案。

那什么时候我们会来处理异步事件呢？

一种很常见的场景应该就是网络请求了。

我们封装一个网络请求的函数，因为不能立即拿到结果，所以不能像简单的3+4=7一样将结果返回。

所以往往我们会传入另外一个函数，在数据请求成功时，将数据通过传入的函数回调出去。

如果只是一个简单的网络请求，那么这种方案不会给我们带来很大的麻烦。

但是，当网络请求非常复杂时，就会出现回调地狱。

OK，我以一个非常夸张的案例来说明。

### 8.2 回调地狱

我们来考虑下面的场景：

我们需要通过一个url1从服务器加载一个数据data1，data1中包含了下一个请求的url2

我们需要通过data1取出url2，从服务器加载数据data2，data2中包含了下一个请求的url3

我们需要通过data2取出url3，从服务器加载数据data3，data3中包含了下一个请求的url4

发送网络请求url4，获取最终的数据data4

```javascript
$.ajax('url1',function(data1){
    $.ajax('url2',function(data2){
        $.ajax('url3',function(data3){
            $.ajax('url4',function(data4){
                console.log(data4);
			})
		})
	})
})
```

上面的代码不会有什么问题，可以正常运行并且获取我们想要的结果。

但是，这样的代码难看而且不容易维护。

我们更加期望的是一种更加优雅的方式来进行这种异步操作。

如何做呢？就是使用Promise。

Promise可以以一种非常优雅的方式来解决这个问题。

### 8.3 基本使用

使用定时器模拟异步请求。

```javascript
setTimeout(()=>{
    const data = 'HelloWorld'
    console.log(data)
}, 1000)
// 改写成Promise
new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('HelloWorld')
		reject('Error')
	}, 1000)
}).then(data => {
	console.log(data)
}).catch(error=>{
	console.log(error)
})
```

### 8.4 解析

new Promise：创建了Promise对象

括号中的参数是一个回调函数，这个回调该函数，我们是固定的写法，参数里有resolve和reject。

往往我们会判断请求是否成功。

如果成功了，调用resolve。接着就会调用then

如果失败了，调用reject。接着就会调用catch

代码拆分解析

```javascript
const p = new Promise(function(resolve, reject) {
        setTimeout(() => {
          resolve("HelloWorld");
          reject("Error");
        }, 1000);
      });
      p.then(function(data) {
        console.log(data)
      })
```

### 8.5 链式调用

我们通过控制台输出得知，then和catch都返回了一个Promise。所以我们的代码是支持链式调用的。

Promise.resolve()：将数据包装成Promise对象，并且在内部回调resolve

Promise.reject()：将数据包装成Promise对象，并且在内部回调reject。

```javascript
 new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve('HelloWorld')
        }, 1000)
      }).then(data => {
        console.log(data)
        return Promise.resolve(data + '111')
      }).then(data => {
        console.log(data)
        return Promise.resolve(data + '222')
      }).then(data => {
        console.log(data)
      })
```

如果我们直接返回一个数据，那么默认就是调用了Promise.resolve

# 第9章

## Vuex

### 9.1 Vuex的作用

> Vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

简单理解，就是将多个组件共享的变量统一放到一个地方去管理。

### 9.2 快速上手

安装：npm install vuex

首先，我们创建一个文件夹：store，在文件夹中创建一个index.js文件，写入以下代码。

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})
export default store
```

其次，我们要让所有的Vue组件都能使用这个store。就需要在main.js中引入。引入方式与router一致。

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
```

最后，使用

```vue
<template>
  <div>
    <h2>{{$store.state.count}}</h2>
    <button @click="addCount">增加</button>
    <button @click="delCount">减少</button>
  </div>
</template>
<script>
export default {
  name: 'about',
  methods: {
    addCount() {
      this.$store.commit('increment')
    },
    delCount() {
      this.$store.commit('decrement')
    }
  }
}
</script>
```

这就是Vuex最简单的使用方式。

- 提取出公共的store对象，用于保存在多个组件中共享的状态

- 将store对象放到Vue实例中，这样可以保证所有的组件都能使用到数据

- 在其他组件中使用store中的数据即可。
- 通过this.$store.state.属性，即可访问状态
- 通过this.$store.commit(‘名称’)即可访问mutations中对应的方法。
- state中的状态可以直接进行修改，但是我们不建议这么修改。我们建议通过mutations去进行操作。

### 9.3 核心概念

#### 9.3.1 state

Vuex提出使用单一状态树（单一数据源）。就是将一堆公用的数据放到一起去管理。如果你的状态信息是存放到多个Store中的，那么之后的管理和维护就会非常麻烦。

State类似于vue中data，用于定义全局信息。不建议直接修改state中的数据。

#### 9.3.2 getters

有时候，我们需要从state中获取一些经过改变后的数据，可以使用getter。同时，state中的数据不建议直接获取，最好是通过getter。

```javascript
state: {
    count: 0,
    studentList: [
      {id: 3, name: '张三', age: 23},
      {id: 4, name: '李四', age: 24},
      {id: 5, name: '王五', age: 25},
      {id: 6, name: '赵六', age: 26}
    ]
  },
  getters: {
    getStudentByAge(state) {
      return state.studentList.filter(e => e.age > 24)
    }
  }
```

在页面中，就可以通过this.$store.getters.xxx获取 。这里获取的时候不加括号。

#### 9.3.3 mutations

通过mutations可以对数据进行修改，也可以传入其他参数。

Mutations类似于vue中的methods

Mutations中的方法，第一个参数一定是state，如果需要传参，从第二个参数开始。

```javascript
mutations: {
    increment(state, n) {
      state.count += n
    },
    decrement(state) {
      state.count--
    }
  }
```

在其他组件中，如果需要调用mutations，直接使用this.$store.commit(‘方法名’, 参数列表)即可。

#### 9.3.4 actions（了解）

我们强调，mutations里面不要进行异步操作。但是某些情况，我们确实希望在Vuex中进行一些异步操作，比如发送ajax请求。如何进行？

Action类似于Mutations，但是是用于替代mutations进行异步操作的。

Actions的方法第一个参数是context。Context是和store对象具有相同方法和属性的对象。也就是说，我们可以使用context.commit去操作mutations。

```javascript
actions: {
    decrement(context) {
      context.commit('increment')
    }
  }
```

如果我们想要调用actions里面的方法，那么就需要使用dispatch，叫做action的分发。

this.$store.dispatch('action方法名')

#### 9.3.5 action返回promise（了解）

Actions是用于操作异步操作的，那么就可以使用Promise。在actions中，我们可以将异步操作放入一个Promise中，在成功或者失败后，调用对应的方法。

```javascript
decrement(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('decrement')
          Resolve()
        }, 1000)
      })
    }
      this.$store.dispatch('decrement').then(res => {
        alert('数据更新完毕！')
      })
```

#### 9.3.6 module（了解）

module是模块的意思。Vuex使用单一状态树，当我们的状态过多时，使用store去管理可能就比较臃肿，这时候我们可以按照模块去划分Vuex的数据，让store去统一管理module。

每个module都认为是一个小的Vuex，都拥有state、mutations、actions、getters。

```javascript
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const user = {
  state: {
    studentList: [
      {id: 3, name: '张三', age: 23},
      {id: 4, name: '李四', age: 24},
      {id: 5, name: '王五', age: 25},
      {id: 6, name: '赵六', age: 26}
    ],
    token: '',
    name: '',
    header: ''
  },
  getters: {
    getStudentByAge(state) {
      return state.studentList.filter(e => e.age > 24)
    }
  }
}

const base = {
  state: {
    count: 0,
  },
  mutations: {
    increment(state, n) {
      state.count += n
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    decrement(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('decrement')
          resolve()
        }, 1000)
      })
    }
  }
}

const store = new Vuex.Store({
  modules: {
    user,
    base
  }
})
export default store
```

#### 9.3.7 module 局部状态（了解）

在上面的代码中，我们已经有了整体的组织结构。User和base中都有mutations。Mutations和getters中的第一个参数，就是局部状态。

module一般会在store文件夹下创建一个modules文件夹，使用js文件名作为module名称。

![](/images/11.png)

#### 9.3.8 module中的action（了解）

action的写法呢？接受一个context对象。

局部状态可以使用context.state获取，全局状态则使用context.rootState

# 第10章

## Axios

### 10.1 请求模块选中

- 传统的Ajax

传统的Ajax是基于XMLHTTPRequest去实现的，该技术非常的不友好，配置和代码非常的混乱，使用起来相当的蛋疼，所以很少会在开发中使用这个东西

- jQuery-ajax

以往我们的学习中，会使用jquery封装的ajax。相对于传统的ajax非常好用。但是我们也不用它。

为什么不用它呢？因为使用jquery-ajax意味着要引入jQuery。Vue的理念就是不让开发者操作DOM，因此JQuery就毫无用武之地，那么为了一个ajax请求而引入jQuery是非常不可取的。而且，jQuery代码1万多行，vue代码也就1万多行。我们 为了使用ajax而特意引入这么笨重的一个库，非常的不合适。

- vue-resource

vue-resource是Vue官方在Vue1.x的时候推出的网络请求库，体积比JQuery小很多。但是在Vue2.0推出之后，官方就放弃了使用和维护。

- Axios

在放弃维护vue-resource的同时，作者推荐了使用axios。

### 10.2 Axios

#### 10.2.1 为什么使用axios

功能特点：

- 支持发送ajax异步

- 支持在NodeJs中发送ajax请求。

- 支持Promise

- 支持拦截器请求和响应

- 支持对请求和响应数据的转换。

### 10.2 axios支持的请求方式

- axios(config)

- axios.request(config)

- axios.get(url, config)

- axios.post(url, data, config)

- axios.delete(url, config)

- axios.head(url, config)

- axios.put(url, data, config),

- axios.patch(url,data,config)

### 10.3 快速上手

安装：npm install axios --save

### 10.4 axios封装

全局封装axios。

在src下面创建一个utils目录，在里面创建一个request.js

Axios封装参数：

url：请求地址

method：请求类型

baseURL：根路径

transformRequest：请求前的数据处理

transformResponse：响应后的数据处理

headers：对象，自定义请求头

params：url查询对象，

paramsSerializer：查询对象序列化

data：返回回来的数据

timeout：超时时间

withCredentials：跨域是否携带token

adapter：自定义请求处理

auth：身份验证信息

responseType：相应的数据格式，json。

```javascript
import axios from 'axios'
// 创建axios
const service = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000
})
// 设置axios请求拦截器
// 拦截器中，可以对请求进行一些统一化的操作
service.interceptors.request.use(
  config => {
    // 统一设置请求头
    config.headers['token'] = '12345'
    console.log('config:', config)
    return config
  },
  err => {
    return Promise.reject('请求异常！')
  }
)
// 设置响应拦截器
service.interceptors.response.use(
  response => {
    let res = response.data
    const code = res.code
    if(code === 200) {
      return res
    }else {
      alert('请求失败！')
      return Promise.reject('请求异常！')
    }
  },
  err => {
    alert('请求失败！')
    return Promise.reject('请求异常！')
  }
)
// 把service导出
export default service
```

使用

在src下面创建一个api目录。在api目录下，根据模块去创建对应的js文件，文件中内容如下：

```javascript
// 引入刚刚封装的request
import request from '@/utils/request'
const group_name = 'department'
// 创建一个对象，用于封装请求api
let data = {
  getDepartmentList() {
    // 返回一个request
    return new request({
      url: `/${group_name}/departmentList`,
      method: 'get'
    })
  },
  getDepartmentList2() {
    // 返回一个request
    return new request({
      url: `/${group_name}/departmentList`,
      method: 'get'
    })
  },
}
// 导出
export default data
```

在组件中使用

```javascript
import departmentApi from "@/api/department";
    getDepartment() {
      departmentApi.getDepartmentList().then(res => {
        console.log('返回数据：',res);
      });
    }
```

