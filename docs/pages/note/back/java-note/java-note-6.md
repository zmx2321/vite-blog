# javase的基础知识点
## jdk
- jdk是java开发工具包，是java的核心，包括了java运行环境（jre）和java工具（javac、java、jar等）

## java的数据类型
- 基本数据类型：byte、short、int、long、float、double、char、boolean
```java
 /* 整型 */
byte a = 10;  // -128-127
short b = 20;  // 正负3w
int c = 30;  // 正负21亿
long d = 12345678901L;  // 很大,如果表示的数超过int类型,需要在后面加L

/* 浮点型 */
float e = 3.14f;  // 需要加f
double f = 3.14;  // 小数点后面位数多的用double

/* 字符型 */
// 字符串是多个字符拼接
char g = 'a';  // 单引号 - 字符

/* 布尔类型 */
boolean flag = true;
```

## 循环
```java
// 定义变量
int num = 1;
// 定义一个变量接收
int sum = 0;
int sum1 = 0;

// 循环 - 条件初始化、条件判断、循环体、迭代
while (num <= 100) {
    sum += num;
    num++;
}

for (int num1 = 1; num1 <= 100; num1++) {
    sum1 += num1;
}

System.out.println("和: " + sum + " " + sum1);
```

## 定义方法 
- 方法就是一段用来完成特定功能的代码块
```java
public class TestMethods {
    // 提取方法,将两个数求和
    // [方法修饰符] [方法的返回值对应的数据类型] [方法名] [形参列表]
    // 没有返回值 用void
    public static int addNum(int num1, int num2) {
        return num1 + num2;
    }

    public static void main(String[] args) {
        int sum = addNum(10, 20);  // 实参列表
        System.out.println(sum);
    }
}
```
- 同一个类中,方法名相同,参数列表不同的多个方法,就是重载
  - 允许方法名重复,但参数列表不同
  - 方法的重载只和方法名和形参列表有关,与其他无关
  - 要求方法名必须相同,参数列表必须不同(类型、顺序、个数)
```java
public class TestMethods {
    // 提取方法,将两个数求和
    // [方法修饰符] [方法的返回值对应的数据类型] [方法名] [形参列表]
    // 没有返回值 用void
    public static int addNum(int num1, int num2) {
        return num1 + num2;
    }

    // 重载
    public static int addNum(int num1, int num2, int num3) {
        return num1 + num2 + num3;
    }

    public static void main(String[] args) {
        int sum = addNum(10, 20);  // 实参列表
        System.out.println(sum);

        int sum1 = addNum(10, 20, 30);  // 实参列表
        System.out.println(sum1);
    }
}
```

## 数组
```java
public class TestArray {
    public static void main(String[] args) {
        /* // 声明数组
        int[] arr;
        // 创建数组
        arr = new int[3];  // 在创建的时候要给定数组的长度,创建一个长度为3的int类型的数组*/
        // 声明和创建合成一句话
        // 底层默认长度为3的空间中,每个元素有默认值: 0
        int[] arr = new int[3];
        // 数组赋值
        arr[0] = 1;
        arr[1] = 2;
        arr[2] = 3;
        System.out.println(arr[0]);

        // 遍历
        for (int num : arr) {
            // 对arr数组进行遍历,遍历出来的每一个元素用num变量接收
            // 每次循环输出num的数值
            System.out.println(num);
        }
    }
}
```

## 面向对象
### 概念
- 面向对象编程（OOP）是一种编程范式或编程模型，它使用“对象”来设计软件。面向对象编程的主要目的是提高程序的模块化和可重用性。
- 面向对象编程的三大特性：封装、继承、多态
- 封装：将对象的属性和行为封装在一起，对外隐藏对象的内部实现细节，只对外提供公共的访问接口。
  - 封装是一种思想，将对象的属性和行为封装在一起，对外隐藏对象的内部实现细节，只对外提供公共的访问接口。
- 继承：子类继承父类的属性和方法，实现代码的复用。
  - 继承是一种关系，表示一个类是另一个类的子类。子类继承父类的属性和方法，并可以添加自己的属性和方法
- 多态：同一个方法在不同对象上调用，表现出不同的行为。
  - 多态是一种能力，允许一个对象在不同情况下表现出不同的行为。多态可以通过继承和接口实现
- 类：类是对象的模板，定义了对象的属性和行为。
- 对象：对象是类的实例，具有类的属性和行为。
- 构造方法：构造方法是类的一种特殊方法，用于创建对象时初始化对象的属性。
- 方法重载：方法重载是指在同一个类中，方法名相同但参数列表不同。
- 方法重写：方法重写是指在子类中重写父类的方法，实现子类特有的行为。
- 抽象类：抽象类是一种特殊的类，不能被实例化，只能被继承。抽象类中可以包含抽象方法和非抽象方法。
- 接口：接口是一种特殊的抽象类，定义了一组方法，但没有实现。接口可以被类实现，实现类必须实现接口中的所有方法。
- 包：包是一种组织和管理类和接口的方式，可以将类和接口分组，方便管理和使用。
- 访问修饰符：访问修饰符用于控制类、方法和属性的访问权限，包括public、private、protected和默认修饰符。

### 现实中的说法
- 我们看到的每个物件,其实都是一个具体的对象,比如一辆车,一个桌子,一个椅子,这些都是具体的对象,都是具体的实例
- 电脑 => 电脑类具体对象 
- 手机 => 手机类具体对象

### 代码中的写法
```java
/**
 * 定义类: 模板
 */
public class Person {
    // 特性 - 属性
    String name;  // 姓名
    int age;  // 年龄
    double height;  // 身高

    // 行为 - 方法
    public void study() {
        System.out.println("study 111111");
    }
}

/**
 * 测试类
 */
public class Test {
    // 程序入口
    public static void main(String[] args) {
        // 对person类对象进行创建,创建了person对象,名字叫p1
        Person p1 = new Person();
        // 对属性进行赋值
        p1.name = "111";
        p1.age = 18;
        p1.height = 190;

        p1.study();
    }
}
```

## 构造器
- 实际上对于一个类,有三个常见的成员:属性、方法、构造器(也叫构造方法)
- 构造器:构造器是一个特殊的方法,在创建对象时会被自动调用,用于初始化对象的属性
  - java通过new关键字来调用构造器,从而返回该类的实例
  - 构造器的作用就是对象的初始化
```java
/**
 * 定义类: 模板
 */
public class Person {
    // 特性 - 属性
    String name;  // 姓名
    int age;  // 年龄
    double height;  // 身高

    // 显示编写空构造器
    public Person() {
        System.out.println("空构造器");
    }

    // 行为 - 方法
    public void study() {
        System.out.println("study 111111");
    }
}

public class Test02 {
    public static void main(String[] args) {
        /**
         * 创建一个Person类的对象
         * new Person()
         * Person() => 空构造方法
         * new关键字对方法进行调用  => 构造器作用: 底层帮我们创建对象,在创建对象以后进行初始化操作
         *
         * 如果一个类没有显示编写构造器的话,那么系统会为这个类默认分配一个空构造器
         * 即实际上类里面有一个隐藏的Person方法
         * 调用构造器之后,对对象进行初始化操作,将对象的地址返回给p1
         *
         * 以后尽量保证空构造器的存在,某些框架底层需要空构造器,没有可能会报错
         */
        Person p1 = new Person();
    }
}
```

### 构造器重载
```java
/**
 * 定义类: 模板
 */
public class Person {
    // 特性 - 属性
    String name;  // 姓名
    int age;  // 年龄
    double height;  // 身高

    // 显示编写空构造器
    public Person() {
        System.out.println("空构造器");
    }

    // 构造器参数名,如果和属性名重复,会发生就近原则
    // 重名以后,如果要给属性赋值,那么就要在想表达属性的变量前加上this来修饰
    public Person(String name, int age, double height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    // 行为 - 方法
    public void study() {
        System.out.println("study 111111");
    }
}

public class Test02 {
    public static void main(String[] args) {
        /**
         * 创建一个Person类的对象
         * new Person()
         * Person() => 空构造方法
         * new关键字对方法进行调用  => 构造器作用: 底层帮我们创建对象,在创建对象以后进行初始化操作
         *
         * 如果一个类没有显示编写构造器的话,那么系统会为这个类默认分配一个空构造器
         * 即实际上类里面有一个隐藏的Person方法
         * 调用构造器之后,对对象进行初始化操作,将对象的地址返回给p1
         *
         * 以后尽量保证空构造器的存在,某些框架底层需要空构造器,没有可能会报错
         *
         * 如果一个类中有构造器,系统就不会帮你分配默认的空构造器
         */
        Person p1 = new Person("11", 11, 110);
        Person p2 = new Person("12", 12, 110);

        System.out.println(p1.name);
        System.out.println(p2.name);
    }
}
```

## 封装
### 概念
- 封装:将对象的属性隐藏起来,不允许外部直接访问,通过get/set方法进行访问
- 封装的好处:提高代码的安全性,隐藏对象的内部细节,增强程序的灵活性
- 高内聚 => 类的内部数据操作细节自己完成,不允许外部干涉
- 低耦合 => 仅暴露少量的方法给外部使用,尽量减少外部对内部细节的依赖

### 私有属性和get/set方法
- mac快捷键 cmd+n
```java
public class Girl {
    private int age;

    // 给age提供一个赋值的方法 - 需要外部可以调用,用public
    public void setAge(int age) {
        this.age = age;
    }

    // 给age提供一个读取的方法 - 需要外部可以调用
    public int getAge() {
        return age;
    }
}

/**
 * 测试类
 */
public class Test {
    public static void main(String[] args) {
        Girl g = new Girl();
        // g.age = 33;
        // System.out.println("age = " + g.age);

        g.setAge(33);
        System.out.println(g.getAge());
    }
}
```

## 继承
### 基本概念
- 类是对对象的抽象
- 继承是对类的抽象
  - 子类和父类就是继承关系

### 代码
```java
/**
 * 父类
 */
public class Person {
    // 父类公共的属性
    private String name;
    private int age;
    private double height;

    // 父类公共方法
    // get/set方法 - 私有属性无法直接调用,
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    // 其他方法
    public void eat() {
        System.out.println("eat");
    }
    public void sleep() {
        System.out.println("sleep");
    }
}

/**
 * 子类
 */
public class Student extends Person {
    // 定义子类额外的属性
    private int sno;

    // 定义子类额外的方法
    public int getSno() {
        return sno;
    }

    public void setSno(int sno) {
        this.sno = sno;
    }

    public void study() {
        System.out.println("study");
    }
}

/**
 * 测试类
 */
public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.setSno(11111);
        s.setAge(12);

        s.sleep();
        s.study();
    }
}
```

### 方法的重写
- 在子类中,子类对父类的方法不满足时,子类可以重写父类的方法
```java
public class Person {
    public void eat() {
        System.out.println("Person eat");
    }
}

public class Student extends Person{
    public void eat() {
        System.out.println("Student eat");
    }
}

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        s.eat();
    }
}
```
- 重载和重写的区别
  - 重载:同一个类中,方法名相同,参数列表不同,多个方法构成重载
  - 重写:子类对父类的方法进行重写,方法名和参数列表相同,方法体不同
  - 两个没有关系

## 多态
### 基本概念
- 多态:同一个方法,根据不同的对象,产生不同的行为
  - 多态指的是方法的多态,和属性无关
- 多态的前提
  - 子类继承父类
  - 子类重写父类的方法
- 多态的体现
  - 父类引用指向子类对象
  - 父类引用调用子类重写的方法
- 多态的好处
  - 提高了代码的扩展性,定义方法时,使用父类型作为参数,可以传递任意子类对象
- 多态的三要素
  - 继承、重写、父类引用指向子类对象

### 代码示例
```java
/**
 * 父类
 */
public class Animal {
    public void shout(){
        System.out.println("shout");
    }
}

public class Cat extends Animal {
    // 重写父类方法
    // 父类方法不满足子类方法
    public void shout() {
        System.out.println("Cat shout");
    }

    public void scratch() {
        System.out.println("scratch");
    }
}

public class Dog extends Animal {
    // 重写父类方法
    // 父类方法不满足子类方法
    public void shout() {
        System.out.println("Dog shout");
    }

    public void guard() {
        System.out.println("guard");
    }
}

public class Girl {
    /*// 玩的时候要把具体的小猫传进去
    public void play(Cat cat) {
        cat.shout();  // 猫开心了会叫
    }

    // 方法重载 - 同一个类,方法名相同,参数列表不同
    public void play(Dog dog) {
        dog.shout();
    }*/

    // 上面可以不写,猫和狗都属于animal类(继承)
    public void play(Animal animal) {
        animal.shout();
    }
}

public class Test {
    public static void main(String[] args) {
        // 创建girl实例
        Girl girl = new Girl();

        /* // 创建cat实例
        Cat cat = new Cat();
        // 创建dog实例
        Dog dog = new Dog();
        // girl玩cat
        girl.play(cat);  // 具体的小女孩和具体的小猫在玩
        // girl玩dog
        girl.play(dog);*/

        /*// 多态雏形
        Animal animal;  // 定义一个动物,这个动物是什么未知
        Cat cat = new Cat();  // 具体的猫
        // 重写的目的就是为了,让父类引用指向子类对象
        animal = cat;  // 让这个动物是一只具体的猫*/

        // 上面三句话可以合成一句话
        Animal cat = new Cat();
        Animal dog = new Dog();
        girl.play(cat);
        girl.play(dog);
    }
}
```

## 异常
- 捕获异常之后,程序会继续执行
```java
public static void main(String[] args) {
    try {
        System.out.println(12/0);
    } catch (Exception e) {
        // 将try中出现的异常组成对象,和Exception对象做匹配输出
        System.out.println(e.getMessage());
    } finally {
        System.out.println("程序无论是否出异常,逻辑必须会执行,finally");
    }

    System.out.println("1");
}
```
- throw:手动抛出异常
```java
public class Test02 {
    // throws 抛出去之后,谁调用这个方法谁处理
    public static void devide() throws Exception {
        int num1 = 12;
        int num2 = 0;

        if(num2 == 0) {
            // 人为制造异常
            /*try {
                throw new Exception();
            } catch (Exception e) {
                System.out.println("人为处理异常");
            }*/
            throw new Exception();
        } else {
            System.out.println(num1/num2);
        }
    }

    public static void main(String[] args) {
        try {
            devide();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
```

## 集合
### 基本概念
- 数组的缺点
  - 长度固定,类型固定,查找效率高,增删效率低
  - 数组中实际元素数量没办法获取,没有提供对应的方法或者属性获取
  - 数组是有序可重复的,对于无序和不可重复的场合不满足要求
- 集合是java中提供的一种容器,可以用来存储多个数据
- 当需要把相同结构的某些个体整合到一起的时候,就需要这个集合了

### 常用集合
- ArrayList
```java
import java.util.ArrayList;

public class Test {
    public static void main(String[] args) {
        // 定义一个集合对象
        ArrayList<String> list = new ArrayList<String>();

        // 增加元素
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        list.add("ddd");
        System.out.println(list);

        // 删除元素
        list.remove("ccc");
        System.out.println(list);

        // 修改元素
        list.set(2, "fff");
        System.out.println(list);

        // 查看元素
        System.out.println(list.get(2));

        // 遍历
        // for
        for (String s : list) {
            System.out.println(s);
        }
    }
}
```

## IO流
### 基本概念    
- 方向
  - 输入流、输出流
- 处理单元
  - 字节流、字符流
- 功能
  - 节点流、处理流

## 代码示例
- 字符输入流
```java
package com.my.test11;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class Test {
    public static void main(String[] args) throws IOException {
        // 对文件进行操作,必须将文件封装为具体的file类对象
        File file = new File("/Users/zmx2321/Documents/code/_poj/aa.txt");
        // 输入字符流
        FileReader fr = new FileReader(file);

        // 开始动作 - 读取
        /*int n1 = fr.read();
        System.out.println(n1);*/
        int n = fr.read();
        // 当读取到-1时,表示没有数据流,终止循环
        while (n != -1) {
            System.out.println(n);
            n = fr.read();
        }

        // 关闭流
        fr.close();
    }
}
```
- 字符输出流
```java
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

/**
 * 将程序中的内容输出到文件中
 */
public class Test1 {
    public static void main(String[] args) throws IOException {
        String str = "233333";

        // 对文件进行操作,必须将文件封装为具体的file类对象
        File file = new File("/Users/zmx2321/Documents/code/_poj/aa.txt");

        // 输出字符流
        FileWriter fw = new FileWriter(file);

        // 开始动作
        fw.write(str);

        // 关闭流
        fw.close();
    }
}
```

## 程序、进程、线程
### 概念
- 程序
  - 是一段静态的代码,存放在某个地方
- 进程
  - 是程序的一次执行过程,是动态的,是系统资源分配的单位
- 线程
  - 是进程的一个执行单元,是程序执行的最小单位,是CPU调度的单位
- 总结
  - 一个程序可以包含多个进程,一个进程可以包含多个线程
  - 进程时操作系统进行资源分配的基本单位
  - 线程时操作系统调度执行的基本单位

### 线程的创建
- 继承Thread类
- 实现Runnable接口
- 实现Callable接口

### 代码示例
- 这里只展示继承Thread类的方式
- 线程类
```java
package com.my.test12;

/**
 * 创建一个线程类 - 具备多线程能力
 */
public class TestThread extends Thread {
    // 线程对应的任务放在一个方法
    @Override
    public void run() {
        for (int i = 0; i < 1000; i++) {
            System.out.println("子线程----" + i);
        }
    }
}
```
- 主类
```java
package com.my.test12;

/**
 * 线程
 * 继承Thread类
 * 程序中无论有多少个线程,总有一个主线程,就是main方法
 */
public class Test {
    // main方法作为程序的入口,里面执行的逻辑/任务就是主线程的任务
    public static void main(String[] args) {
        for (int i = 0; i < 1000; i++) {
            System.out.println("main---" + i);
        }

        // 创建子线程对象,执行任务
        TestThread t = new TestThread();
        // 执行任务,不是直接调用run方法,而是要将线程启动
        // 一旦子线程启动,就会和主线程争抢cpu资源
        t.start();

        // 主线程中再加一个循环
        for (int i = 0; i < 1000; i++) {
            System.out.println("main--main----" + i);
        }
    }
}
```

## 网络
### 概念
- 网络编程
  - 在网络通信中进行的编程
- 网络编程三要素
  - IP地址
    - 用来定位计算机
  - 端口号
    - 用来定位具体的应用程序
  - 协议
    - 通信的规则
- 网络通信协议的分层
  - 名义上的标准
    - ISO/OSI参考模型
  - 事实上的标准
    - TCP/IP协议栈(internet使用的协议)
- ISO/OSI参考模型
  - 应用层
    - 程序实现需求
  - 表示层
    - 解决不同系统的通信问题 => 如linux给windows发消息
  - 会话层
    - 自动发包,自动寻址功能
  - 传输层
    - 当传输内容过大时,对发出去的数据进行封装
  - 网络层
    - 传输过程中选择最优路径(路由器、交换机那些具有寻址功能的设备所实现的功能)
  - 数据链路层
    - 确保数据传输正确.提供检测和纠错功能
  - 物理层
    - 定义物理设备的标准:网线的接口类型、光纤的接口类型、各种传输介质的传输速率等变成010101从物理设备中传输出去
- TCP/IP协议栈
  - 应用层
  - 传输层
  - 网络层
  - 数据链路层
  - 物理层

## 套接字
### 概念
- 套接字就像传输层为应用层开的一个小口,应用程序通过这个小口向远程发送数据,或接收远程发来的数据,而这个小口以内,也就是数据进入这个小口之后,或者数据从这个口出来之前,是不知道也不需要知道的,数据传输的细节,由传输层来处理
- 套接字是传输层提供给应用程序编程接口,应用程序通过套接字向传输层发送数据,传输层通过套接字接收应用程序发送的数据
- socket就是应用层和传输层之间的桥梁

### 代码示例
#### 单向通信
- 服务端
```java
package com.my.test13;

import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServer {
    public static void main(String[] args) throws IOException {
        System.out.println("服务器端启动");

        // 套接字
        ServerSocket ss = new ServerSocket(8888);

        // 等待客户端发送数据
        Socket s = ss.accept();

        // 服务器感受到输入流
        InputStream is = s.getInputStream();
        DataInputStream dis = new DataInputStream(is);

        // 接收客户端发送的数据
        String str = dis.readUTF();
        System.out.println(str);

        // 流、网络资源关闭
        // 从下往上关闭
        dis.close();
        is.close();
        s.close();
        ss.close();
    }
}
```
- 客户端
```java
package com.my.test13;

import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;

/**
 * 客户端
 */
public class TestClient {
    public static void main(String[] args) throws IOException {
        System.out.println("客户端启动");

        // 套接字 - 指定服务器的ip和端口
        Socket s = new Socket("192.168.2.1", 8888);

        // 利用输出流传送数据
        OutputStream os = s.getOutputStream();
        // 数据流
        DataOutputStream dos = new DataOutputStream(os);

        // 利用数据流往外传送数据
        dos.writeUTF("hello");

        // 流、网络资源关闭
        dos.close();
        os.close();
        s.close();
    }
}
```
#### 双向通信
- 客户端
```java
package com.my.test13;

import java.io.*;
import java.net.Socket;

/**
 * 客户端
 */
public class TestClient {
    public static void main(String[] args) throws IOException {
        System.out.println("客户端启动");

        // 套接字 - 指定服务器的ip和端口
        Socket s = new Socket("192.168.2.1", 8888);

        // 利用输出流传送数据
        OutputStream os = s.getOutputStream();
        // 数据流
        DataOutputStream dos = new DataOutputStream(os);

        // 利用数据流往外传送数据
        dos.writeUTF("你好, 服务器, 我是客户端");

        // 对服务器返回的数据做处理
        InputStream is = s.getInputStream();
        DataInputStream dis = new DataInputStream(is);
        String str = dis.readUTF();
        System.out.println("服务器对我说:" + str);

        // 流、网络资源关闭
        dos.close();
        os.close();
        s.close();
    }
}
```
- 服务端
```java
package com.my.test13;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;

public class TestServer {
    public static void main(String[] args) throws IOException {
        System.out.println("服务器端启动");

        // 套接字
        ServerSocket ss = new ServerSocket(8888);

        // 等待客户端发送数据
        Socket s = ss.accept();

        // 服务器感受到输入流
        InputStream is = s.getInputStream();
        DataInputStream dis = new DataInputStream(is);

        // 接收客户端发送的数据
        String str = dis.readUTF();
        System.out.println("客户端:" + str);

        // 向客户端发送数据
        OutputStream os =  s.getOutputStream();
        DataOutputStream dos = new DataOutputStream(os);

        dos.writeUTF("你好客户端,我接收到你的信息了");

        // 流、网络资源关闭
        // 从下往上关闭
        dis.close();
        is.close();
        s.close();
        ss.close();
    }
}
```

## XML
### 基本概念
- XML（可扩展标记语言，EXtensible Markup Language）
- XML的作用
  - XMKL不会做任何事情,它是被设计用来结构化、存储以及传输信息的,它仅仅是纯文本
  - 它仅仅将信息包装在xml标签中
  - 我们需要写程序,才能传送、接收和显示出这个文档
- 定义XML
  - 必须有声明语句
    - XML声明是文档的第一句,格式如下
      - `<?xml version="1.0" encoding="UTF-8"?>`
  - 只有一个根元素
  - 注意大小写
  - 所有标记必须关闭
  - 属性值使用引号
  - 可以加入注释

### 代码示例
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!--
 注释
 version: 版本号
 encoding: 文档编号
 <students> 根元素
 <student> 子元素
-->
<students>
    <student id="1">
        <name>aaa</name>
        <age>11</age>
        <sex>男</sex>
        <score>66</score>
    </student>
    <student id="2">
        <name>bbb</name>
        <age>22</age>
        <sex>男</sex>
        <score>44</score>
    </student>
    <student id="3">
        <name>ccc</name>
        <age>33</age>
        <sex>男</sex>
        <score>99</score>
    </student>
</students>
```
- 解析XML(需要导入demo4.jar包)
- 一般框架里面都会封装
```java
package com.my.test01;

import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import java.io.File;
import java.util.Iterator;
import java.util.List;

public class Test {
    public static void main(String[] args) {
        // 创建SAXReader对象
        // 创建一个xml解析器对象(就是一个流)
        SAXReader saxReader = new SAXReader();

        try {
            // 读取XML文件并返回Document对象
            Document document = saxReader.read(new File("javaXMLModule/XML/test.xml"));
            // System.out.println(document);

            // 获取根元素
            Element rootElement = document.getRootElement();

            // 获取根节点下的多个子节点
            Iterator<Element> iterator = rootElement.elementIterator();
            while (iterator.hasNext()) {
                // 获取到子节点
                Element element = iterator.next();
                // 获取子节点的属性
                List<Attribute> atts = element.attributes();
                for (Attribute attribute : atts) {
                    System.out.println("该子节点的属性:" + attribute.getName() + "---" + attribute.getText());
                }
                // 获取到子节点的子节点
                Iterator<Element> iterator2 = element.elementIterator();
                while (iterator2.hasNext()) {
                    Element element2 = iterator2.next();
                    System.out.println("节点:" + element2.getName() + "---" + element2.getText());
                }
            }
        } catch (DocumentException e) {
            e.printStackTrace();
        }
    }
}
```

## 注解
### 基本概念
- 注解是代码里的特殊标记，这些标记可以在编译、类加载、运行时被读取，并执行相应的处理。通过使用注解，程序员可以在不改变原有代码和逻辑的情况下，给代码增加额外的信息，从而实现不同的功能。
- 使用注解时要在前面增加`@`符号,并把该注解当成一个修饰符使用.用于修饰它支持的程序元素(包、类、构造器、方法、成员变量、参数、局部变量)
- 在javase中，注解的作用比较简单，就是起到标记作用，没有其他功能 .在javaee中，注解开始发挥重要的作用，很多框架(如:mybatis、spring)都大量使用注解,例如用来配置应用程序的任何切面,代替javaEE旧版中所遗留的繁冗代码和XML配置等,未来的开发模式都是基于注解的,一定程度上可以说: 框架=注解+反射+设计模式
  
## JDBC
### 基本概念
- JDBC(Java Database Connectivity,java数据库连接)是一种用于执行SQL语句的Java API
- 是SUN公司定义的一套接口(规范)
- java程序 => JDBC规范 => mysql数据库厂商实现mysql驱动、Oracle驱动、sqlserver驱动 => mysql数据库、Oracle数据库、sqlserver数据库

### 使用步骤
1. 加载Driver驱动
2. 建立连接(Connection)
3. 创建会话(Statement)
4. 通过会话执行SQL语句,并得到结果
5. 处理结果
6. 关闭连接(ResultSet、Statement、Connection)

### 代码示例
```java
package com.my.test01;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class TestJDBC {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        // 加载驱动
        Class.forName("com.mysql.jdbc.Driver");

        // 获取连接
        String url = "jdbc:mysql://localhost:3306/myTest";
        String user = "root";
        String password = "123456";
        Connection conn = DriverManager.getConnection(url, user, password);

        // 创建会话
        Statement sta =  conn.createStatement();

        // 发送sql
        int i = sta.executeUpdate("INSERT INTO Users values(11, 'ysrt', '女', 7, 1)");
        // 处理结果 - 表示影响了i条数据
        // 证明对数据库的数据条数有影响
        if(i > 0) {
            System.out.println("插入成功");
        }

        // 关闭资源
        sta.close();
        conn.close();
    }
}
```
- 优化后
- jdbcinfo.properties
```java
mysql.driver=com.mysql.jdbc.Driver
mysql.url=jdbc:mysql://localhost:3306/myTest
mysql.user=root
mysql.password=123456
```
- TestJDBC
```java
package com.my.test02;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class TestJDBC {
    private static  String DRIVER;
    private static  String URL;
    private static  String USER;
    private static  String PASSWORD;

    public static void main(String[] args) throws ClassNotFoundException, SQLException, IOException {
        //用来存放从配置文件中读取的信息
        Properties props = new Properties();
        //读取配置文件，转成流
        InputStream ism = TestJDBC.class.getResourceAsStream("jdbcinfo.properties");
        //读取流中的信息
        props.load(ism);

        // 获取流中的信息存储到静态变量中
        // 加载驱动
        DRIVER = props.getProperty("mysql.driver");
        URL = props.getProperty("mysql.url");
        USER = props.getProperty("mysql.user");
        PASSWORD = props.getProperty("mysql.password");
        System.out.println(DRIVER);

        // 获取连接
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);

        // 创建会话
        Statement sta =  conn.createStatement();

        // 发送sql
        int i = sta.executeUpdate("INSERT INTO Users values(12, 'ysrt', '女', 7, 1)");
        // 处理结果 - 表示影响了i条数据
        // 证明对数据库的数据条数有影响
        if(i > 0) {
            System.out.println("插入成功");
        }

        // 关闭资源
        sta.close();
        conn.close();
    }
}
```
- 查询数据
```java
package com.my.test02;

import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.Properties;

public class TestQuery {
    private static  String DRIVER;
    private static  String URL;
    private static  String USER;
    private static  String PASSWORD;

    public static void main(String[] args) throws ClassNotFoundException, SQLException, IOException {
        //用来存放从配置文件中读取的信息
        Properties props = new Properties();
        //读取配置文件，转成流
        InputStream ism = TestJDBC.class.getResourceAsStream("jdbcinfo.properties");
        //读取流中的信息
        props.load(ism);

        // 获取流中的信息存储到静态变量中
        // 加载驱动
        DRIVER = props.getProperty("mysql.driver");
        URL = props.getProperty("mysql.url");
        USER = props.getProperty("mysql.user");
        PASSWORD = props.getProperty("mysql.password");
        System.out.println(DRIVER);

        // 获取连接
        Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);

        // 创建会话
        Statement sta =  conn.createStatement();

        // 发送sql - 结果集
        ResultSet rs = sta.executeQuery("select * from Users");

        // 处理结果
        // 判断是否有记录存在
        while (rs.next()) {
            System.out.println(
                "id:" + rs.getString(1) +
                " 昵称:" + rs.getString(2) +
                " 性别:" + rs.getString(3) +
                " 星座:" + rs.getString(4) +
                " 血型:" + rs.getString(5)
            );
        }

        // 关闭资源
        sta.close();
        conn.close();
    }
}
```