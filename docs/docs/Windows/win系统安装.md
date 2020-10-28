---
title: win10系统安装
---

### 可能出现的问题

1. Windows无法安装到GPT分区形式磁盘

### 解决方案

- 进入命令行模式，按顺序执行

  ```
  shift+f10
  ```

1. ```
   diskpart
   ```

2. ```
   # 显示磁盘信息
   list disk
   ```

3. ```
   # 选择第0个磁盘（电脑的硬盘编号是从0开始的）
   select disk0
   ```

4. ```
   # 删除磁盘分区&格式化
   clean
   ```

5. ```
   # 将当前磁盘分区设置为XXX形式
   convert gpt
   ```

6. ```
   create partition efi size=200
   ```

7. ```
   create partition msr size=200
   ```

8. ```
   create partition primary size=102400
   ```

