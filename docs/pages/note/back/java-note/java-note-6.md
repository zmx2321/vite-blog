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