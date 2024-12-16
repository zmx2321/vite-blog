# 数据库练习
## 用数据库优化书店管理系统
- 实体类
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
- jdbcinfo.properties
```properties
mysql.driver=com.mysql.jdbc.Driver
mysql.url=jdbc:mysql://localhost:3306/book-store
mysql.user=root
mysql.password=123456
```
- BookStore
```java
package com.my.book;

import java.io.IOException;
import java.sql.*;
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

    private static Connection conn;

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
    public static void select(int choice) throws SQLException, IOException {
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
    public static void addBook() throws SQLException, IOException {
        System.out.println("请录入书籍编号:");
        int bNo = input.nextInt();  // 录入书籍编号
        System.out.println("请录入书籍名称:");
        String bName = input.next();  // 录入书籍编号
        System.out.println("请录入书籍作者:");
        String bAuthor = input.next();  // 录入书籍作者

        conn = DbHelp.getConnection();
        String sql = "INSERT INTO `t_book` "
                + "(`bNo`, `bName`, `bAuthor`) "
                + "VALUES (?, ?, ?)";

        PreparedStatement ps  = null;

        ps = conn.prepareStatement(sql);

        ps.setInt(1, bNo);
        ps.setString(2, bName);
        ps.setString(3, bAuthor);

        int n = ps.executeUpdate();//执行并更新数据库内容
        if (n <= 0) {
            System.out.println("添加失败!\n");
            return;
        }

        DbHelp.closeAll(conn, ps);

        System.out.println("添加成功!\n");
    }

    // 查询
    public static void checkBook() throws SQLException, IOException {
        conn = DbHelp.getConnection();
        String sql = "select * from t_book";
        PreparedStatement ps  = null;
        ResultSet rs  = null;

        ps = conn.prepareStatement(sql);
        rs = ps.executeQuery();

        ArrayList<Book> bookList = new ArrayList<>();

        // 处理结果
        // 判断是否有记录存在
        while (rs.next()) {
            int bNo = rs.getInt(1);
            String bName = rs.getString(2);
            String bAuthor = rs.getString(3);

            Book book = new Book(bNo, bName, bAuthor);
            bookList.add(book);
        }

        DbHelp.closeAll(conn, ps, rs);

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
    public static void removeBook() throws SQLException, IOException {
        System.out.println("请录入要下架的书籍编号:");
        int bNo = input.nextInt();

        // 从集合中删除该书籍
        conn = DbHelp.getConnection();
        String sql = "delete from t_book where bNo = " + bNo;

        // 创建会话
        Statement sta = conn.createStatement();
        // 发送sql
        int n = sta.executeUpdate(sql);

        DbHelp.closeAll(conn, null);

        System.out.println(n);
        if (n <= 0) {
            System.out.println("删除失败!\n");
            return;
        }

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
            } catch (SQLException | IOException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}
```
- Test
```java
package com.my.book;

/**
 * 1. 根据书籍编号查询书籍信息
 * 2. 查询所有书籍信息
 * 3. 删除指定书籍编号对应的书籍
 * 4. 退出
 */
public class Test {
    public static void main(String[] args) {
        BookStore.start();
    }
}
```