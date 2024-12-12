# javase小练习
## 功能需求: 书店管理系统
1. 展示书籍
2. 上新书籍
3. 下架书籍
4. 退出应用

## 代码实现
- Book类
```java
package com.my.book;

/**
 * 书籍实体类
 */
public class Book {
    // 属性
    private int bNo;  // 编号
    private String bName;  // 书名
    private String bAuthor;  // 作者

    // 方法
    // 构造器
    public Book() {}
    public Book(int bNo, String bName, String bAuthor) {
        this.bNo = bNo;
        this.bName = bName;
        this.bAuthor = bAuthor;
    }
    // get/set
    public int getbNo() {
        return bNo;
    }
    public void setbNo(int bNo) {
        this.bNo = bNo;
    }
    public String getbName() {
        return bName;
    }
    public void setbName(String bName) {
        this.bName = bName;
    }
    public String getbAuthor() {
        return bAuthor;
    }
    public void setbAuthor(String bAuthor) {
        this.bAuthor = bAuthor;
    }
    // 输出
    @Override
    public String toString() {
        return "{" +
                "书籍编号='" + bNo + '\'' +
                ", 书籍名称='" + bName + '\'' +
                ", 书籍作者='" + bAuthor + '\'' +
                '}';
    }
}
```

- BookStore类
```java
package com.my.book;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

/**
 * 书店
 * 1. 展示书籍
 * 2. 上新书籍
 * 3. 下架书籍
 * 4. 退出应用
 */

public class BookStore {
    static Scanner input = new Scanner(System.in);
    public static int choice;
    public static ArrayList<Book> bookList = new ArrayList<>();

    /**
     * 主页面
     */
    public static void homePage(){
        // 打印菜单
        System.out.println("*********************");
        System.out.println("***欢迎来到书店***");
        System.out.println("1. 展示书籍");
        System.out.println("2. 上新书籍");
        System.out.println("3. 下架书籍");
        System.out.println("4. 退出应用");
        System.out.println("*********************");
        System.out.println("请录入你想要执行的功能序号: ");
    }

    /**
     * 公用退出方法
     */
    public static void exit() {
        System.out.println("谢谢使用本系统，欢迎您再次光临！！！");
        System.exit(0);
    }

    /**
     * 选择
     */
    public static void select(int choice){
        // 根据choice录入的功能进行后续判断
        switch (choice) {
            case 1:
                System.out.println("「书店应用」 >>>>> 1. 展示书籍\n");
                checkBook();
                break;
            case 2:
                System.out.println("「书店应用」 >>>>> 2. 上新书籍\n");
                addBook();
                break;
            case 3:
                System.out.println("「书店应用」 >>>>> 3. 下架书籍\n");
                removeBook();
                break;
            case 4:
                System.out.println("「书店应用」 >>>>> 4. 退出应用\n");
                exit();
                break;
        }
    }

    /**
     * 书籍的增删改查
     */
    // 新增
    public static void addBook(){
        System.out.println("请录入书籍编号:");
        int bNo = input.nextInt();  // 录入书籍编号
        System.out.println("请录入书籍名称:");
        String bName = input.next();  // 录入书籍编号
        System.out.println("请录入书籍作者:");
        String bAuthor = input.next();  // 录入书籍作者

        // 每上新一本书,创建一个书籍对象
        Book book = new Book(bNo, bName, bAuthor);

        // 创建一个集合,存放相同的个体 => 书籍对象
        bookList.add(book);

        System.out.println("添加成功!\n");
        // System.out.println(bookList);
    }

    // 查询
    public static void checkBook(){
        if(bookList.isEmpty()){
            System.out.println("暂无书籍,快去上新书籍吧!\n");
            return;
        }

        for (Book book : bookList) {
            System.out.println(book);
        }

        System.out.println("查询成功!\n");
    }

    // 下架书籍
    public static void removeBook(){
        if(bookList.isEmpty()){
            System.out.println("暂无书籍,快去上新书籍吧!\n");
            return;
        }
        
        System.out.println("请录入要下架的书籍编号:");
        int bNo = input.nextInt();

        // 从集合中删除该书籍
        bookList.removeIf(book -> book.getbNo() == bNo);
        /*for (Book : bookList) {
            if(book.getbNo() == bNo){
                bookList.remove(book);
            }
        }*/

        System.out.println("下架成功!\n");
    }

    /**
     * 开始
     */
    public static void start() {
        while(true) {
            try {
                homePage();  // 主界面
                choice = input.nextInt();  // 录入序号
                select(choice);
            } catch (InputMismatchException e) {
                System.out.println("您输入的格式不正确，请重新输入");
                input = new Scanner(System.in);
            }
        }
    }
}
```
- 输出结果
```java
package com.my.book;

public class Test {
    public static void main(String[] args) {
        BookStore.start();
    }
}
```