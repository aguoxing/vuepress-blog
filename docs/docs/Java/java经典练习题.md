---
title: java练习题
---

##### 1、有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少？

```java
public static void exercise1(int m) {
    int m1 = 1, m2 = 1, m3;
    System.out.println("第1个月兔子的总数：1");
    System.out.println("第2个月兔子的总数：1");
    for (int i = 3; i < m + 1; i++) {
        m3 = m1 + m2;
        m1 = m2;
        m2 = m3;
        System.out.println("第" + i + "个月兔子的总数：" + m3);
    }
}
```

##### 2、判断101-202之间有多少个素数，并输出所有素数。

```java
public static void exercise2() {
    int count = 0;
    for (int i = 101; i < 202; i++) {
        boolean flag = false;
        for (int j = 2; j < Math.sqrt(i); j++) {
            if (i % j == 0) {
                flag = false;
                break;
            } else {
                flag = true;
            }
        }
        if (flag) {
            count++;
            System.out.println(i);
        }
    }
    System.out.println("101-202之间一共有：" + count + "个素数");
}

// 
public static void exercise2(int n) {
    // 素数总和
    int sum = 0;
    // 1000万以内的所有素数
    // 用数组将1000万以内的数分为两大派系，素数用0代替数值，合数用1代替数值；
    // 一开始默认全部为素数，所以值全部为0，等到开始筛选的时候再把为合数的赋值为1
    int[] num = new int[n];
    // 由于1规定不是素数，所以要提前用1标值
    num[0] = 1;
    // 根据埃氏筛法的结论，要得到自然数  N 以内的全部素数，必须把不大于" 二次根号  N "的所有素数的倍数剔除，剩下的就是素数
    double prescription = Math.sqrt(n);
    for (int i = 2; i <= prescription; i++) {
        // 开始把所有素数的倍数剔除，剩下的就是素数
        for (int j = i * i; j <= n; j += i) {
            // 从i*i开始去除，因为比i*i小的倍数，已经在前面去除过了
            // 例如：i=5
            // 5的2倍（10），3倍（15），在i=2的时候，已经去除过了
            // 把素数的倍数剔除，也就是赋值为1，不是素数就是合数
            num[j - 1] = 1;   
        }
    }
    // 遍历数组，把值为0的数全部统计出来，得到素数之和
    for (int value : num) {
        if (value == 0)
            sum++;
    }
    System.out.println(n + "以内的素数有" + sum + "个");
}
```

##### 3、打印出所有的水仙花数。

```java
public static void exercise3() {
    int x, y, z;
    for (int m = 100; m < 999; m++) {
        x = m / 100;
        y = m % 100 / 10;
        z = m % 10;
        if (x * x * x + y * y * y + z * z * z == m) {
            System.out.println(m);
        }
    }
}
```

##### 4、将一个数分解质因数。

```java
public static void exercise4() {
    System.out.print("请输入一个数：");
    int i = input.nextInt();
    System.out.print(i + "=");
    int k = 2;
    while (k <= i) {
        if (k == i) {
            System.out.println(k);
            break;
        } else if (i % k == 0) {
            System.out.print(k + "*");
            i = i / k;
        } else {
            k++;
        }
    }
}
```

##### 5、学习成绩>=90分的同学用A表示，60-89分之间的用B表示，60分以下的用C表示。

```java
public static void exercise5() {
    System.out.print("请输入成绩：");
    int score = input.nextInt();
    char rating;
    rating = score >= 90 ? 'A' : score >= 60 ? 'B' : 'C';
    System.out.println("成绩等级为：" + rating);
}
```

##### 6、输入两个正整数m和n，求其最大公约数和最小公倍数。

```java
public static void exercise6() {
    System.out.print("请输入M（M>N）：");
    int m = input.nextInt();
    System.out.print("请输入N：");
    int n = input.nextInt();
    int a = m, b = n;
    while (m % n != 0) {
        int temp = n;
        n = m % n;
        m = temp;
    }
    System.out.println("最大公因数：" + n);
    System.out.println("最小公倍数：" + a * b / n);
}
```

##### 7、输入一行字符，分别统计出其中英文字母、空格、数字和其它字符的个数。

```java
public static void exercise7() {
    int character = 0, digit = 0, blank = 0, other = 0;
    System.out.print("请输入一行字符串：");
    String str = input.nextLine();
    char[] chars = str.toCharArray();
    for (char ch : chars) {
        if (Character.isDigit(ch)) { // aChar >= '0' && aChar <= '9'
            digit++;
        } else if (Character.isLetter(ch)) {
            character++;
        } else if (Character.isSpaceChar(ch)) {
            blank++;
        } else {
            other++;
        }
    }
    System.out.println("数字个数：" + digit);
    System.out.println("字母个数：" + character);
    System.out.println("空格个数：" + blank);
    System.out.println("其他字符个数：" + other);
}
```

##### 8、求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。

```java
public static void exercise8() {
    System.out.print("请输入个位数字：");
    int a = input.nextInt();
    int temp = a;
    System.out.print("请输入最高位数：");
    int max = input.nextInt();
    int sum = 0;
    for (int i = 0; i < max; i++) {
        sum = sum + a;
        a = 10 * a + temp;
    }
    System.out.println(sum);
}
```

##### 9、一个数如果恰好等于它的因子之和，这个数就称为"完数"。例如6=1＋2＋3.编程找出1000以内的所有完数。

```java
public static void exercise9() {
    for (int i = 1; i < 1000; i++) {
        int sum = 1;
        for (int j = 2; j < Math.sqrt(i); j++) {
            if (i % j == 0) {
                sum += j + i / j;
            }
        }
        if (sum == i) {
            System.out.println(i);
        }
    }
}
```

##### 10、一球从100米高度自由落下，每次落地后反跳回原高度的一半； 再落下，求它在 第10次落地时，共经过多少米？第10次反弹多高？

```java
public static void exercise10() {
    System.out.print("第几次落地？");
    int n = input.nextInt();
    double distance = 100 * (3 - Math.pow(0.5, n - 2));
    double height = 100 * (Math.pow(0.5, n));
    System.out.println("第"+n+"次落地：共经过"+distance+"米，反弹"+height+"米");

    /*        double sum = 0, height = 100;
        for (int i = 0; i < n; i++) {
            if (i == 1)
                sum += height;
            else
                sum += 2 * height;
            if (i < 10)
                height /= 2;
        }
        System.out.println("第" + n + "次时经过" + sum + "米，第" + n + "次反弹" + height + "米");*/

    /*        double sum = 100, height = 100;
        for (int i = 0; i < n; i++) {
            sum += height;
            height /= 2;
        }
        System.out.println("第" + n + "次时经过" + sum + "米，第" + n + "次反弹" + height + "米");*/

}
```

##### 11、有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？

```java
public static void exercise11() {
    int count = 0;
    for (int i = 1; i < 5; i++) {
        for (int j = 1; j < 5; j++) {
            for (int k = 1; k < 5; k++) {
                if (i != j && j != k && i != k) {
                    count++;
                    System.out.println(i * 100 + j * 10 + k);
                }
            }
        }
    }
    System.out.println("共有："+count);
}
```

##### 12、从键盘输入当月利润I，求应发放奖金总数？

企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；
利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可可提成7.5%；
20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；
60万到100万之间时，高于60万元的部分，可提成1.5%， 高于100万元时，超过100万元的部分按1%提成；

```java
public static void exercise12() {
    double x = 0, y = 0;
    System.out.print("输入当月利润（万）：");
    x = input.nextInt();
    if (x > 0 && x <= 10) {
        y = x * 0.1;
    } else if (x > 10 && x <= 20) {
        y = 10 * 0.1 + (x - 10) * 0.075;
    } else if (x > 20 && x <= 40) {
        y = 10 * 0.1 + 10 * 0.075 + (x - 20) * 0.05;
    } else if (x > 40 && x <= 60) {
        y = 10 * 0.1 + 10 * 0.075 + 20 * 0.05 + (x - 40) * 0.03;
    } else if (x > 60 && x <= 100) {
        y = 20 * 0.175 + 20 * 0.05 + 20 * 0.03 + (x - 60) * 0.015;
    } else if (x > 100) {
        y = 20 * 0.175 + 40 * 0.08 + 40 * 0.015 + (x - 100) * 0.01;
    }
    System.out.println("应该提取的奖金是 " + y + "万");
}
```

##### 13、一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，请问该数是多少？

```java
public static void exercise13() {
    for (int x = 1; x < 100000; x++) {
        if (Math.sqrt(x + 100) % 1 == 0) {
            if (Math.sqrt(x + 168) % 1 == 0) {
                System.out.println(x + "加100是一个完全平方数，再加168又是一个完全平方数");
            }
        }
    }
}
```

##### 14、输入某年某月某日，判断这一天是这一年的第几天？ 注意: 闰年的二月多一天

```java
public static void exercise14() {
    int year = input.nextInt();// 获取年份
    int month = input.nextInt();// 获取月份
    int day = input.nextInt();// 获取天数
    int sum = 0;// 天数总和
    // 创建一个包含月份天数的数组，先按小年计算，如果是闰年，并且在三月以后再加1
    int[] arr = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    sum = day; // 输入的天数肯定是要加的
    for (int i = 1; i < month; i++) {  // 加上包含的月份天数
        sum += arr[i];
    }
    // 最后判断是否是闰年，如果是的话再加1，否则sum就是结果了,条件比较长，我就抽出来写了
    boolean isRight = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) && (month > 2);
    if (isRight) {
        sum += 1;
    }
    System.out.println(year + "年" + month + "月" + day + "日，是这年的第" + sum + "天");
}
```

##### 15、输入三个整数x,y,z，请把这三个数由小到大输出。 令x,y,z依次递增

```java
public static void exercise15() {

    int[] arr = new int[3];

    for (int x = 0; x < arr.length; x++) {
        arr[x] = input.nextInt();
    }

    for (int i = 1; i < arr.length; i++) {
        for (int j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            int temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }

    for (int n : arr) {
        System.out.println(n);
    }
}
```

##### 16、输出9*9口诀

```java
public static void exercise16() {
    for (int i=1;i<10;i++){
        for (int j=1;j<=i;j++){
            System.out.print(i+"*"+j+"="+i*j);
            System.out.print(" ");
        }
        System.out.println("");
    }
}
```

##### 17、猴子吃桃问题

猴子第一天摘下若干个桃子，当即吃了一半，还不过瘾，又多吃了一个 第二天早上又将剩的桃子吃掉一半，又多吃了一个。
以后每天早上都吃了前一天剩下的一半零一个。 到第10天早上想再吃时，见只剩下一个桃子了。 求第一天共摘了多少。

```java
public static void exercise17() {
    int count = 1;
    for (int i = 2; i <=10; i++) {
        count = (count+1)*2;
        System.out.println("第" + i + "天，有" + count + "个桃");
    }
    System.out.println("一共有" + count + "个桃");
}
```

##### 18、两个乒乓球队进行比赛，各出三人。甲队为a,b,c三人，乙队为x,y,z三人。 以抽签决定比赛名单。有人向队员打听比赛的名单。a说他不和x比，c说他不和x,z比，请编程序找出三队赛手的名单。

```java
public static void exercise18() {
    char[] m = {'a', 'b', 'c'};
    char[] n = {'x', 'y', 'z'};
    // 外层循环遍历甲队队员
    for (char value : m) {
        // 内层循环遍历乙队队员
        for (char c : n) {
            if (value == 'a' && c == 'x')
                continue;
            // 根据题意知道c对战y，a不可能对战y；
            else if (value == 'a' && c == 'y')
                continue;
            // 根据题意；
            else if ((value == 'c' && c == 'x') || (value == 'c' && c == 'z'))
                continue;
            // 推测出b不可能对战y和z;
            else if ((value == 'b' && c == 'y') || (value == 'b' && c == 'z'))
                continue;
            else
                System.out.println(value + " vs " + c);
        }
    }
}
```

##### 19、打印出如下图案（菱形）

```java
public static void exercise19() {
    System.out.print("请输入你要显示的总行数(奇数)：");
    int num = input.nextInt();
    for (int i = 1; i <= (num + 1) / 2; i++) {// 此循环是控制上层的三角的，包括最中间的一行；
        for (int j = 0; j < (num + 1) / 2 - i; j++) {// 控制每一行的空格数
            System.out.print(" ");
        }
        for (int j = 0; j < 2 * i - 1; j++) {// 控制每一行显示的*符号数
            System.out.print("*");
        }
        System.out.println();// 换行
    }
    for (int i = 1; i <= (num - 1) / 2; i++) {// 此循环是控制下层的三角的
        for (int j = 0; j < i; j++) {//控制每一行的空格数
            System.out.print(" ");
        }
        for (int j = 0; j < num - 2 * i; j++) {// 控制每一行显示的*符号数
            System.out.print("*");
        }
        System.out.println();// 换行
    }
}
```

##### 20、有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13... 求出这个数列的前20项之和。

```java
public static void exercise20() {
    double sum = 0, ver = 2;
    for (int i = 1; i <= 10; i++) {
        sum = ver / i;
        ver += i;
    }
    System.out.println(sum);
}
```

##### 21、求1+2!+3!+...+20!的和

```java
public static void exercise21() {
    long sum = 0;
    long temp = 1;// 必须要设置为long类型，不然超过范围；
    for (int i = 1; i <= 20; i++) {
        temp = 1;
        for (int j = 1; j <= i; j++) {
            temp *= j;
        }
        sum += temp;
    }
    System.out.println(sum);
}
```



##### 22、利用递归方法求5!

```java
public static void exercise22() {
    System.out.println(rec(5));
}

/**
*
* @param n
* @return
*/
public static long rec(int n) { // 定义函数实现递归
    long sum = 0;
    if (n == 1) {
        sum = 1;
    } else {
        sum = n * rec(n - 1);
    }
    return sum;
}
```

##### 23、有5个人坐在一起，问第五个人多少岁？他说比第4个人大2岁。 问第4个人岁数，他说比第3个人大2岁。 问第三个人，又说比第2人大两岁。问第2个人，说比第一个人大两岁。 最后问第一个人，他说是10岁。请问第五个人多大？

```java
public static void exercise23() {
    int age = 10;//第一个人的年龄
    for (int i = 1; i <= 4; i++) { // 依次从第一个人加到第五个人
        age += 2;
    }
    System.out.println("第五个人" + age + "岁");
}
```

##### 24、给一个不多于5位的正整数， 要求：一、求它是几位数，二、逆序打印出各位数字。

```java
public static void exercise24() {
    System.out.println("请输入一个不多于五位数的数字：");
    int num = input.nextInt(); // 定义Integer类型变量，便于转换成数组；
    String numString = Integer.toString(num); // 利用Integer的方法转换成字符串；
    char[] arrChar = numString.toCharArray(); // 利用字符串的方法转换成字符数组，便于求长度和输出
    System.out.println("您输入的是" + arrChar.length + "位数");
    for (int i = 0; i < arrChar.length; i++) {
        System.out.println("第" + (i + 1) + "个数字是" + arrChar[i]);
    }
    System.out.println("逆序打印：");
    for (int i = arrChar.length - 1; i >= 0; i--) {
        System.out.print(arrChar[i]);
    }
}
```

##### 25、一个5位数，判断它是不是回文数。 即12321是回文数，个位与万位相同，十位与千位相同。

```java
public static void exercise25() {
    boolean isHuiWen = false;
    System.out.println("请输入一个数判断是不是回文数：");
    int num = input.nextInt();
    char[] arrChar = Integer.toString(num).toCharArray(); // 像上一题一样，利用字符数组解决
    for (int i = 0; i < arrChar.length / 2; i++) {
        isHuiWen = arrChar[i] == arrChar[arrChar.length - i - 1];
    }
    if (isHuiWen) {
        System.out.println("这个数是回文数！");
    } else {
        System.out.println("这个数不是回文数！");
    }
}
```

##### 26、请输入星期几的第一个字母来判断一下是星期几， 如果第一个字母一样，则继续 判断第二个字母。

```java
public static void exercise26() {
    System.out.print("请输入第一个字母：");
    String str = input.nextLine().toUpperCase();
    String str2 = "";
    switch (str.charAt(0)) {
        case 'M':
            System.out.println("Monday");
            break;
        case 'W':
            System.out.println("Wednesday");
            break;
        case 'F':
            System.out.println("Friday");
            break;
        case 'T':
            System.out.print("第二个字母：");
            str2 = input.nextLine().toUpperCase();
            if (str2.charAt(0) == 'U') {
                System.out.println("Tuesday");
            } else if (str2.charAt(0) == 'H') {
                System.out.println("Thursday");
            } else {
                System.out.println("输入有误");
            }
            break;
        case 'S':
            System.out.print("第二个字母：");
            str2 = input.nextLine().toUpperCase();
            if (str2.charAt(0) == 'U') {
                System.out.println("Sunday");
            } else if (str2.charAt(0) == 'A') {
                System.out.println("Saturday");
            } else {
                System.out.println("输入有误");
            }
            break;
    }
}
```

##### 27、求100之内的素数

```java
public static void exercise27() {
    boolean flag;
    System.out.print("100以内的素数有：2 ");
    for (int i = 3; i < 100; i += 2) {
        flag = true;
        for (int j = 3; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag)
            System.out.print(i + " ");
    }
}
```

##### 28、对10个数进行排序

```java
public static void exercise28(){
    int[] arr = new int[10];

    for (int x = 0; x < arr.length; x++) {
        System.out.print("输入第"+(x+1)+"个数：");
        arr[x] = input.nextInt();
    }

    for (int i = 1; i < arr.length; i++) {
        for (int j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            int temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }

    System.out.print("从小到大排序：");
    for (int n : arr) {
        System.out.print(n+" ");
    }
}
```

##### 29、求一个3*3矩阵对角线元素之和

```java
public static void exercise29() {
    int sum = 0;
    System.out.println("请输入9个整数以求对角线之和");
    int[][] arrInt = new int[3][3];
    for (int i = 0; i < arrInt.length; i++) {
        for (int j = 0; j < arrInt.length; j++) {
            arrInt[i][j] = input.nextInt();
        }
    }
    System.out.println("您输入的9位数矩阵为：");
    for (int[] ints : arrInt) {
        for (int j = 0; j < arrInt.length; j++) {
            System.out.print(ints[j] + " ");
        }
        System.out.println();
    }
    for (int i = 0; i < arrInt.length; i++) {
        for (int j = 0; j < arrInt.length; j++) {
            if (i == j || i == arrInt.length - 1 - j) {
                sum += arrInt[i][j];
            }
            if (i == 1 && j == 1) { // 最中间的那个数少加一次，要记得加上，如果不是9位矩阵，则需改变
                sum += arrInt[i][j];
            }
        }
    }
    System.out.println("对角线之和为：" + sum);
}
```

##### 30、有一个已经排好序的数组。现输入一个数，要求按原来的规律将它插入数组中

```java
public static void exercise30() {
    int[] a = new int[]{1, 2, 6, 14, 25, 36, 37, 55};
    int[] b = new int[a.length + 1];
    int i = 0;
    System.out.print("请输入一个整数：");
    int num = input.nextInt();
    if (num >= a[a.length - 1]) { // 如果大于最大数，直接加在最后
        b[b.length - 1] = num;
        for (i = 0; i < a.length; i++) { // 把a数组复制给b数组
            b[i] = a[i];
        }
    } else { // 如果不大于最大数
        for (i = 0; i < a.length; i++) {
            if (num >= a[i]) { // 如果次数大于当前的数
                b[i] = a[i]; // 加在b对应的的位置
            } else {
                b[i] = num;
                break;
            }
        }
        for (int j = i + 1; j < b.length; j++) { // a中的i后边元素都在b中往后移一个位置
            b[j] = a[j - 1];
        }
    }
    for (i = 0; i < b.length; i++) { // 输出数组
        System.out.print(b[i] + " ");
    }
}
```

##### 31、将一个数组逆序输出。

```java
public static void exercise31() {
    System.out.println("输入你要输入的数组个数:");
    int n = input.nextInt();
    System.out.println("输入数组:");
    int[] arr = new int[n];
    for (int i = 0; i < n; i++) {
        arr[i] = input.nextInt();
    }
    System.out.println("逆序输出：");
    for (int i = n; i > 0; i--) {
        System.out.print(arr[i - 1] + " ");
    }
}
```

##### 32、取一个整数a从右端开始的4～7位

```java
public static void exercise32() {
    System.out.println("请输入一个大于7位数的整数：");
    long num = input.nextLong(); // 定义数值类型是long类型，防止越界
    String str = Long.toString(num); // 将long类型转换成字符串
    char[] charStr = str.toCharArray(); // 利用字符串的方法转换为字符数组
    int length = charStr.length;
    if (length < 7) { // 容错判断
        System.out.println("您输入的整数长度有误！");
    } else { // 如果输入正确，输入该整数的倒数4-7位
        System.out.println("您输入的整数从右端开始的4-7位分别是：" +
                           charStr[length - 4] + " " + charStr[length - 5] + " "+ charStr[length - 6] + " " + charStr[length - 7]);
    }
}
```

##### 33、打印出杨辉三角形

```java
public static void exercise33() {
    System.out.print("请输入杨辉三角形的行数：");
    int rows = input.nextInt();
    for (int i = 0; i < rows; i++) {
        int number = 1;
        //打印空格字符串
        System.out.format("%" + (rows - i) * 2 + "s", "");
        for (int j = 0; j <= i; j++) {
            System.out.format("%4d", number);
            number = number * (i - j) / (j + 1);
        }
        System.out.println();
    }
}
```

##### 34、输入3个数a,b,c，按大小顺序输出

```java
public static void exercise34() {

    int[] arr = new int[3];

    for (int x = 0; x < arr.length; x++) {
        System.out.print("请输入第"+(x+1)+"个数：");
        arr[x] = input.nextInt();
    }

    for (int i = 1; i < arr.length; i++) {
        for (int j = i; j > 0 && arr[j] > arr[j - 1]; j--) {
            int temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    System.out.print("从大到小排序为：");
    for (int n : arr) {
        System.out.print(n+" ");
    }
}
```

##### 35、输入数组，最大的与第一个元素交换，最小的与最后一个元素交换，输出数组

```java
public static void exercise35() {
    int[] a = new int[10]; //创建一个数组
    for (int i = 0; i < a.length; i++) {
        System.out.print("请输入第" + (i + 1) + "个数（10）：");
        a[i] = input.nextInt();  //给数组赋值
    }
    int max = 0, min = 0;
    for (int i = 0; i < a.length; i++) {
        if (a[i] > a[max]) max = i;
        if (a[i] < a[min]) min = i;
    }
    int t = a[0];
    a[0] = a[max];
    a[max] = t;
    t = a[a.length - 1];
    a[a.length - 1] = a[min];
    a[min] = t;
    System.out.println("输出交换后的数组");
    for (int value : a) System.out.print(value + " ");
}
```

##### 36、有n个整数，使其前面各数顺序向后移m个位置，最后m个数变成最前面的m个数

```java
public static void exercise36() {
    System.out.println("请输入数组的长度：");//定义数组长度
    int num = input.nextInt();
    int[] arr = new int[num];
    System.out.println("请输入数组元素：");//键入数组元素
    for (int i = 0; i < num; i++) {
        arr[i] = input.nextInt();
    }
    System.out.println("您输入的数组是：");//打印数组
    for (int i : arr) {
        System.out.print(i + " ");
    }
    System.out.println("请输入移动的位数：");//获取移动位数
    int m = input.nextInt();
    int[] arr2 = new int[num];
    for (int k = 0; k < m; k++) {//先把移动的转移进新数组
        arr2[k] = arr[num - m + k];
    }
    for (int k2 = 0; k2 < num - m; k2++) {//把向后移的插入到新数组
        arr2[m + k2] = arr[k2];
    }
    System.out.println("移动后的数组为：");
    for (int l = 0; l < arr2.length; l++) {
        System.out.println(arr2[l]);
    }
}
```

##### 37、有n个人围成一圈，顺序排号。从第一个人开始报数（从1到3报数）， 凡报到3的人退出圈子，问最后留下的是原来第几号的那位

```java
public static void exercise37() {
    System.out.println("请输入总人数：");//定义数组长度
    int num = input.nextInt();
    //定义数组，用其中的元素标记是否已经被淘汰，0表示为被淘汰
    int[] arr = new int[num];
    for (int i = 0; i < num; i++) {//初始化数组元素都是1
        arr[i] = 1;
    }
    for (int value : arr) {
        System.out.println(value);
    }
    int index = 0;
    int sum = 0;
    while (num > 1)//用来控制剩余的人数
    {
        if (arr[index] == 1) {
            sum++;
            if (sum == 3) {//如果是3，则重新记，从1开始
                sum = 0;
                arr[index] = 0;
                num--;
            }
        }
        index++;
        if (index == arr.length) {//如果索引是数组的长度，则从0开始
            index = 0;
        }
    }
    for (int i = 0; i < arr.length; i++) {
        System.out.println(arr[i]);
    }
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            System.out.println("第" + (i + 1) + "留了下来");
        }
    }
}
```

##### 38、写一个函数，求一个字符串的长度，在main函数中输入字符串，并输出其长度

```java
public static void exercise38(){
    System.out.print("请输入一个字符串：");
    String str = input.nextLine();
    System.out.println("输入的字符串是："+str);
    System.out.println("长度是："+str.length());
}
```

##### 39、编写一个函数，输入n为偶数时，调用函数求1/2+1/4+...+1/n, 当输入n为奇数时，调用函数1/1+1/3+...+1/n

```java
public static void exercise39() {
    System.out.print("请输入一个数：");
    int n = input.nextInt();
    double sum = 0;
    if (n % 2 == 0) {
        for (int i = 2; i <= n; i += 2) {
            sum += (double) 1 / i;
        }
        System.out.println("输入的偶数运算和为："+sum);
    } else {
        for (int i = 1; i <= n; i += 2) {
            sum += (double) 1 / i;
        }
        System.out.println("输入的奇数运算和为："+sum);
    }
}
```

##### 40、字符串排序

```java
public static void exercise40() {
    /*        ArrayList<String> list = new ArrayList<String>();
        list.add("010102");
        list.add("010003");
        list.add("010201");
        Collections.sort(list);
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }*/
    int N = 5;
    String temp = null;
    String[] s = new String[N];
    s[0] = "matter";
    s[1] = "state";
    s[2] = "solid";
    s[3] = "liquid";
    s[4] = "gas";
    for (int i = 0; i < N; i++) {
        for (int j = i + 1; j < N; j++) {
            if (!compare(s[i], s[j])) {
                temp = s[i];
                s[i] = s[j];
                s[j] = temp;
            }
        }
    }
    for (int i = 0; i < N; i++) {
        System.out.println(s[i]);
    }
}
public static boolean compare(String s1, String s2) {
    boolean result = true;
    for (int i = 0; i < s1.length() && i < s2.length(); i++) {
        if (s1.charAt(i) > s2.charAt(i)) {
            result = false;
            break;
        } else if (s1.charAt(i) < s2.charAt(i)) {
            result = true;
            break;
        } else {
            result = s1.length() < s2.length();
        }
    }
    return result;
}
```

##### 41、海滩上有一堆桃子，五只猴子来分。 第一只猴子把这堆桃子凭据分为五份，多了一个，这只猴子把多的一个扔入海中，拿走了一份。第二只猴子把剩下的桃子又平均分成五份，又多了一个，它同样把多的一个扔入海中，拿走了一份，第三、第四、第五只猴子都是这样做的，问海滩上原来最少有多少个桃子？

```java
public static void exercise41() {
    int i, m, j = 0, k, count;
    for (i = 4; i < 10000; i += 4) {
        count = 0;
        m = i;
        for (k = 0; k < 5; k++) {
            j = i / 4 * 5 + 1;
            i = j;
            if (j % 4 == 0) count++;
            else break;
        }
        i = m;
        if (count == 4) {
            System.out.println("原有桃子 " + j + " 个");
            break;
        }
    }
}

private static int peach(int i) {
    if (i == 5) {
        return 6;
    }
    return peach(i + 1) * 5 + 1;
}
```

##### 42、809* ??=800* ??+9* ??+1 其中??代表的两位数,8*??的结果为两位数，9 * ??的结果为3位数

```java
public static void exercise42() {
    //        String result = "";
    //        for (int i = 100; i < 1000; i++) {
    //            if (809 * i == 800 * i + 9 * i + 1) {
    //                result = i + " ";
    //            }
    //        }
    //        if (result.equals("")) {
    //            System.out.println("没有合适的数");
    //        } else {
    //            System.out.println("合适的数有：" + result);
    //        }
    int a = 809, b, i;
    for (i = 10; i < 13; i++) {
        b = i * a;
        if (8 * i < 100 && 9 * i >= 100)
            System.out.println("809*" + i + "=" + "800*" + i + "+" + "9*" + i + "=" + b);
    }
}
```



##### 43、求0—7所能组成的奇数个数。 奇数,末位为1,3,5,7

```java
public static void exercise43() {
    int sum = 0, total = 0;
    for (int i = 1; i < 9; i++) { //最大位数为8位
        if (i == 1) {
            total = 4; // 1,3,5,7
        } else if (i == 2) {
            total = total * 7;
        } else {
            total *= 8;
        }
        System.out.println("0~7组成" + i + "位数，有：" + total + "个");
        sum += total;
    }
    System.out.println("总计为：" + sum);
}
```



##### 44、一个偶数总能表示为两个素数之和

```java
public static void exercise44() {
    int num = input.nextInt();
    int i, j;
    for (i = 2; i < num; i++) {
        if (isPrime(i)) {
            j = num - i;
            if (isPrime(j)) {
                System.out.println(num + " = " + i + " + " + j);
            }
        }
    }
}

// 判断是否为素数
public static boolean isPrime(int n) {
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n == 2) {
            return true;
        } else if (n % i == 0) {
            return false;
        }
    }
    return true;
}
```

##### 45、判断一个素数能被几个9整除? (能被9整除就不是素数了 把素数改为整数)

```java
public static void exercise45() {
    System.out.print("请输入一个整数：");
    int num = input.nextInt();
    int tmp = num;
    int count = 0;
    for (int i = 0; tmp % 9 == 0; ) {
        tmp = tmp / 9;
        count++;
    }
    System.out.println(num + " 能够被 " + count + " 个9整除。");
}
```



##### 46、两个字符串连接程序

```java
public static void exercise46(){
    System.out.print("请输入第一个字符串：");
    String str1 = input.nextLine();
    System.out.print("请输入第二个字符串：");
    String str2 = input.nextLine();
    System.out.println("使用+直接拼接："+str1+str2);
    System.out.println("使用concat()方法："+str1.concat(str2));

    StringBuilder sb = new StringBuilder(str1);
    sb.append(str2);
    System.out.println("使用StringBuilder："+sb);
}
```

##### 47、读取7个数（1—50）的整数值，每读取一个值，程序打印出该值个数的*

```java
public static void exercise47() {
    int n;
    Scanner in = new Scanner(System.in);
    for (int i = 0; i < 7; i++) {
        System.out.println("请输入一个1-50之间的数字");
        n = in.nextInt();
        if (n < 0 || n > 50) {
            System.out.println("输入有误,请重试");
        } else {
            for (int j = 0; j < n; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

##### 48、某个公司采用公用电话传递数据，数据是四位的整数，在传递过程中是加密的，加密规则如下：每位数字都加上5,然后用和除以10的余数代替该数字，再将第一位和第四位交换，第二位和第三位交换。

```java
public static void exercise48() {
    System.out.print("请输入一个整数：");
    int number = input.nextInt();
    int a, aa, aaa, aaaa;
    a = number % 10;
    aa = number / 10 % 10;
    aaa = number / 100 % 10;
    aaaa = number / 1000;
    // 代替数字
    a = (a + 5) % 10;
    aa = (aa + 5) % 10;
    aaa = (aaa + 5) % 10;
    aaaa = (aaaa + 5) % 10;
    // 第一位和第四位交换
    int temp;
    temp = a;
    a = aaaa;
    aaaa = temp;
    // 第二位和第三位交换
    temp = aa;
    aa = aaa;
    aaa = temp;
    System.out.println("交换后的数为" + aaaa + aaa + aa + a);
}
```

##### 49、计算字符串中子串的个数

```java
public static void exercise49() {
    System.out.println("请输入主串：");
    String str1 = input.nextLine();
    System.out.println("请输入子串：");
    String str2 = input.nextLine();
    // 生成子串长度的N个字符串数组
    String[] sa = new String[str1.length() - str2.length() + 1];
    for (int i = 0; i < sa.length; i++) {
        sa[i] = str1.substring(i, i + str2.length());
    }
    int sum = 0;
    // 子串与N个拆开的子串比对
    for (int i = 0; i < sa.length; i++) {
        if (sa[i].equals(str2)) {
            // 成功配对，计数器+1；
            sum++;
            // 因为不计算重叠的子串，所以跳过配对之后的部分拆分子串
            i = i + str2.length();
        }
    }
    System.out.println("主串中共包含" + sum + "个字串");
}
```

##### 50、有五个学生，每个学生有3门课的成绩，从键盘输入以上数据（包括学生号，姓名，三门课成绩），计算出平均成绩；将原有的数据和计算出的平均分数存放在磁盘文件"stud"中。

```java
public static void exercise50() {
    String[][] a = new String[5][6];
    for (int i = 1; i < 6; i++) {
        System.out.print("请输入第" + i + "个学生的学号：");
        a[i - 1][0] = input.nextLine();
        System.out.print("请输入第" + i + "个学生的姓名：");
        a[i - 1][1] = input.nextLine();
        for (int j = 1; j < 4; j++) {
            System.out.print("请输入该学生的第" + j + "个成绩：");
            a[i - 1][j + 1] = input.nextLine();
        }
        System.out.println("\n");
    }
    //以下计算平均分
    float avg;
    int sum;
    for (int i = 0; i < 5; i++) {
        sum = 0;
        for (int j = 2; j < 5; j++) {
            sum = sum + Integer.parseInt(a[i][j]);
        }
        avg = (float) sum / 3;
        a[i][5] = String.valueOf(avg);
    }
    //以下写磁盘文件
    String s1;
    try {
        File f = new File("C:\\stud.txt");
        if (f.exists()) {
            System.out.println("文件存在");
        } else {
            System.out.println("文件不存在，正在创建文件");
            f.createNewFile();//不存在则创建
        }
        BufferedWriter output = new BufferedWriter(new FileWriter(f));
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 6; j++) {
                s1 = a[i][j] + "\r\n";
                output.write(s1);
            }
        }
        output.close();
        System.out.println("数据已写入c盘文件stud中！");
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```







### 附加

1. 用递归实现字符串倒转

```java
public class StringReverse {
  public static String reverse(String originStr) {
    if(originStr == null || originStr.length()== 1) {
      return originStr;
    }
    return reverse(originStr.substring(1))+ originStr.charAt(0);
  }
  
  public static void main(String[] args) {
  System.out.println(reverse("hello"));
  }
}
```

2. 一个有n级的台阶，一次可以走1级、2级或3级，问走完n级台阶有多少种走法

```java
public class GoSteps {
  public static int countWays(int n) {
    if(n < 0) {
      return 0;
    }else if(n == 0) {
      return 1;
    }else {
      return countWays(n - 1) + countWays(n - 2) + countWays(n -3);
    }
  }
  
  public static void main(String[] args) {
    System.out.println(countWays(5)); // 13
  }
}
```

3. 输入年月日，计算该日期是这一年的第几天

```java
public class DayCounting {
  public static void main(String[] args) {
    int[][] data = {
      {31,28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31},
      {31,29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}
    };
    
    Scanner sc = new Scanner(System.in);
  
    System.out.print("请输入年月日(1980 11 28): ");
    int year = sc.nextInt();
    int month = sc.nextInt();
    int date = sc.nextInt();
    int[] daysOfMonth = data[(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)?1 : 0];
    int sum = 0;
    for(int i = 0; i < month -1; i++) {
      sum += daysOfMonth[i];
    }
    sum += date;
    System.out.println(sum);
    sc.close();
  }
}
```

4. 假设今日是2015年3月1日，星期日，请算出13个月零6天后是星期几，距离现在多少天

```java
public class Demo4 {
  public static String[] week = {"星期日","星期一","星期二","星期三","星期四","星期五","星期六"};
  public static int i = 0;
  public static int[] monthday1 = {0,31,28,31,30,31,30,31,31,30,31,30,31};
  public static int[] monthday2 = {0,31,29,31,30,31,30,31,31,30,31,30,31};
  
  //查看距离当前天数的差值
  public static String distance(int year,int month,int day,int newMonth,int newDay) {
    int sum = 0; //设定初始距离天数
    if (month + newMonth >= 12) {
      if (((year + 1) % 4 == 0 && (year + 1) % 100 != 0)||(year + 1) % 400 == 0) {
        sum += 366 + newDay;
        for(int i = 0;i < newMonth - 12;i++) {
          sum += monthday1[month + i];
        }
      } else {
        sum += 365 + newDay;
        for(int i = 0;i < newMonth - 12;i++) {
          sum += monthday1[month + i];
        }
      }
    } else {
      for(int i = 0;i < newMonth;i++) {
        sum += monthday1[month + i];
      }
      sum += newDay;
    }
    return week[sum%7];
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("请输入当前年份");
    int year = scanner.nextInt();
    System.out.println("请输入当前月份");
    int month = scanner.nextInt();
    System.out.println("请输入当前天数");
    int day = scanner.nextInt();
    System.out.println("请输入当前是星期几：以数字表示，如：星期天 为 0");
    int index = scanner.nextInt();
    System.out.println("今天是：" + year + "-" + month + "-" + day + "  " + week[index]);
    
    System.err.println("请输入相隔月份");
    int newMonth = scanner.nextInt();
    System.out.println("请输入剩余天数");
    int newDay = scanner.nextInt();
    
    System.out.println("经过" + newMonth + "月" + newDay + "天后，是" + distance(year,month,day,newMonth,newDay));
  }
}
```

5. 数据里有{1,2,3,4,5,6,7,8,9}，请随机打乱顺序，生成一个新的数组（请以代码实现）

```java
import java.util.Arrays;

//打乱数组
public class Demo1 {
  
  //随机打乱
  public static int[] srand(int[] a) {
    int[] b = new int[a.length];
    
    for(int i = 0; i < a.length;i++) {
      //随机获取下标
      int tmp = (int)(Math.random()*(a.length - i)); //随机数:[ 0 ，a.length - i )  
      b[i] = a[tmp];
      
      //将此时a[tmp]的下标移动到靠后的位置
      int change = a[a.length - i - 1];
      a[a.length - i - 1] = a[tmp];
      a[tmp] = change;
    }
    
    return b;
  }
  
  public static void main(String[] args) {
    int[] a = {1,2,3,4,5,6,7,8,9};
    System.out.println(Arrays.toString(srand(a)));
  }
}
```

6. 写出代码判断一个整数是不是2的阶次方（请代码实现，不能用工具）

```java
import java.util.Scanner;

//判断整数是不是2的阶次方
public class Demo2 {
  
  public static boolean check(int sum) {
    boolean flag = true; //判断标志
    while(sum > 1) {
      if (sum % 2 == 0) {
        sum = sum/2;
      } else {
        flag = false;
        break;
      }
    }
    return flag;
  }
  
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("请输入一个整数:");
    int sum = scanner.nextInt();
    System.out.println(sum + " 是不是2的阶次方：" + check(sum));
  }
}
```

7. 有两个篮子，分别为A 和 B，篮子A里装有鸡蛋，篮子B里装有苹果，请用面向对象的思想实现两个篮子里的物品交换

```java
//面向对象思想实现篮子物品交换
public class Demo5 {
  public static void main(String[] args) {
    //创建篮子
    Basket A = new Basket("A");
    Basket B = new Basket("B");
    
    //装载物品
    A.load("鸡蛋");
    B.load("苹果");
    
    //交换物品
    A.change(B);
    
    A.show();
    B.show();
  }
}

class Basket{
  public String name; //篮子名称
  private Goods goods; //篮子中所装物品
  
  public Basket(String name) {
    // TODO Auto-generated constructor stub
    this.name = name;
    System.out.println(name + "篮子被创建");
  }
  
  //装物品函数
  public void load(String name) {
    goods = new Goods(name);
    System.out.println(this.name + "装载了" + name + "物品");
  }
  
  public void change(Basket B) {
    System.out.println(this.name + " 和 " + B.name + "中的物品发生了交换");
    String tmp = this.goods.getName();
    this.goods.setName(B.goods.getName());
    B.goods.setName(tmp);
  }
  
  public void show() {
    System.out.println(this.name + "中有" + goods.getName() + "物品");
  }
}

class Goods{
   private String name; //物品名称
   
   public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Goods(String name) {
    // TODO Auto-generated constructor stub
     this.name = name;
  }
}
```

8. 请写出一个 J.U.C — ForkJoin 测试的 Example 继承 RecursiveTask

```java
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.Future;
import java.util.concurrent.RecursiveTask;

public class ForkJoinTaskExample extends RecursiveTask<Integer>{
  
  public static final  int threshold = 2;
  private int start;
  private int end;
  
  public ForkJoinTaskExample(int start,int end) {
    // TODO Auto-generated constructor stub
    this.start = start;
    this.end = end;
  }
  
  @Override
  protected Integer compute() {
    // TODO Auto-generated method stub
    int sum = 0;
    boolean canCompute = (end - start) <= threshold;
    if (canCompute) {
      for(int i = start;i <= end;i++) {
        sum += i;
      }
    } else {
      int middle = (start + end)/2;
      ForkJoinTaskExample leftTask = new ForkJoinTaskExample(start, middle);
      ForkJoinTaskExample rightTask = new ForkJoinTaskExample(middle + 1, end);
      
      leftTask.fork();
      
      leftTask.fork();
      rightTask.fork();
      
      int leftResult = leftTask.join();
      int rightResult = rightTask.join();
      
      sum = leftResult + rightResult;
    }
    return sum;
  }
  
  public static void main(String[] args) {
    ForkJoinPool forkJoinPool = new ForkJoinPool();
    
    ForkJoinTaskExample task = new ForkJoinTaskExample(1, 100);
    
    Future<Integer> result = forkJoinPool.submit(task);
    
    try {
      System.out.println("result:" + result.get());
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    } catch (ExecutionException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  }
  
}
```

9. 全排列：给出五个数字12345的所有排列。

```java
public class FullPermutation {
  public static void perm(int[] list) {
    perm(list,0);
  }
  
  private static void perm(int[] list, int k) {
    if (k == list.length) {
      for (int i = 0; i < list.length; i++) {
        System.out.print(list[i]);
      }
      System.out.println();
    }else{
      for (int i = k; i < list.length; i++) {
        swap(list, k, i);
        perm(list, k + 1);
        swap(list, k, i);
      }
    }
  }
  
  private static void swap(int[] list, int pos1, int pos2) {
    int temp = list[pos1];
    list[pos1] = list[pos2];
    list[pos2] = temp;
  }

  public static void main(String[] args) {
    int[] x = {1, 2, 3, 4, 5};
    perm(x);
  }
}
```



