# java面向对象相关

## 1. 问题1
> 使用接口造车
```java
/**
 * AbstractFactory
*/
package eg.oop.abstractFactory;

// 创建工厂的接口
public interface AbstractFactory {
  //制造发动机  
  public Engine createEngine();  
  //制造空调   
  public Aircondition createAircondition();  
}

/**
 * Engine
*/
package eg.oop.abstractFactory;

//发动机以及型号  
public interface Engine {}

/**
 * Aircondition
*/
package eg.oop.abstractFactory;

//空调以及型号
public interface Aircondition {}

/**
 * EngineA/B
*/
package eg.oop.abstractFactory;

//调用发动机接口制造发动机A
public class EngineA implements Engine{    
	public EngineA(){
		System.out.println("制造-->EngineA");
	} 
}   
package eg.oop.abstractFactory;

//调用发动机接口制造发动机B
public class EngineB implements Engine{    
  public EngineB(){    
    System.out.println("制造-->EngineB");    
  }    
}  

/**
 * AirconditionA/B
*/
package eg.oop.abstractFactory;

//调用空调接口制造空调A
public class AirconditionA implements Aircondition{    
  public AirconditionA(){    
    System.out.println("制造-->AirconditionA");    
  }    
}
package eg.oop.abstractFactory;

//调用空调接口制造空调B
public class AirconditionB implements Aircondition{    
  public AirconditionB(){    
    System.out.println("制造-->AirconditionB");    
  }    
}   

/**
 * FactoryBMW320
*/
package eg.oop.abstractFactory;

//为宝马320系列生产配件    
public class FactoryBMW320 implements AbstractFactory{ 
	//发动机A
	public Engine createEngine() {      
		return new EngineA();    
	}    
	//空调A
	public Aircondition createAircondition() {    
		return new AirconditionA();    
	}    
}    
/**
 * FactoryBMW523
*/
package eg.oop.abstractFactory;

//宝马523系列  
public class FactoryBMW523 implements AbstractFactory {    
	//发动机B
	public Engine createEngine() {      
		return new EngineB();    
	}
	//空调B
	public Aircondition createAircondition() {    
		return new AirconditionB();    
	}
}   

/**
 * Customer
*/
package eg.oop.abstractFactory;

public class Customer {
	@SuppressWarnings("unused")
	public static void main(String[] args){    
        //生产宝马320系列配件
		System.out.println("生产宝马320系列配件");
        FactoryBMW320 factoryBMW320 = new FactoryBMW320();    
        factoryBMW320.createEngine();  
        factoryBMW320.createAircondition();  
            
        //生产宝马523系列配件
        System.out.println("生产宝马523系列配件");
        FactoryBMW523 factoryBMW523 = new FactoryBMW523();    
        factoryBMW320.createEngine();  
        factoryBMW320.createAircondition();  
    }  
}
/* 生产宝马320系列配件
制造-->EngineA
制造-->AirconditionA
生产宝马523系列配件
制造-->EngineA
制造-->AirconditionA */
```

## 2. 问题2
### 1.1. 书1
```java
package eg.oop.comparatorDemo_1;

import java.text.DecimalFormat;  
import java.text.SimpleDateFormat;  
import java.util.GregorianCalendar;  
import java.util.Iterator;  
import java.util.TreeMap;

/** 
 * 书实体类 
 *  
 * @author *
 *  
 */  
@SuppressWarnings("rawtypes")
public class Book implements Comparable { // 定义名为Book的类，默认继承自Object类  
  public int id;// 编号  
  public String name;// 名称  
  public double price; // 价格  
  private String author;// 作者  
  public GregorianCalendar calendar;// 出版日期  
  
  public Book() {  
      this(0, "X", 0.0, new GregorianCalendar(), "");  
  }  
  
  public Book(int id, String name, double price, GregorianCalendar calender, tring author) {  
      this.id = id;  
      this.name = name;  
      this.price = price;  
      this.calendar = calender;  
      this.author = author;  
  }  

  // 重写继承自父类Object的方法，满足Book类信息描述的要求  
  public String toString() {  
    String showStr = id + "\t" + name; // 定义显示类信息的字符串  
    DecimalFormat formatPrice = new DecimalFormat("0.00");// 格式化价格到小数点后两位  
    showStr += "\t" + formatPrice.format(price);// 格式化价格  
    showStr += "\t" + author;  
    SimpleDateFormat formatDate = new SimpleDateFormat("yyyy年MM月dd日");  
    showStr += "\t" + formatDate.format(calendar.getTime()); // 格式化时间  
    return showStr; // 返回类信息字符串  
  }  

  public int compareTo(Object obj) {// Comparable接口中的方法  
    Book b = (Book) obj;  
    return this.id - b.id; // 按书的id比较大小，用于默认排序  
  }  

  @SuppressWarnings({ "unchecked", "unused" })
	public static void main(String[] args) {  
    Book b1 = new Book(10000, "红楼梦", 150.86, new GregorianCalendar(2009, 01, 25), "曹雪芹、高鄂");  
    Book b2 = new Book(10001, "三国演义", 99.68, new GregorianCalendar(2008, 7, 8), "罗贯中 ");  
    Book b3 = new Book(10002, "水浒传", 100.8, new GregorianCalendar(2009, 6, 28), "施耐庵 ");  
    Book b4 = new Book(10003, "西游记", 120.8, new GregorianCalendar(2011, 6, 8), "吴承恩");  
    Book b5 = new Book(10004, "天龙八部", 10.4, new GregorianCalendar(2011, 9, 23), "搜狐");  
    TreeMap tm = new TreeMap();  
    tm.put(b1, new Integer(255));  
    tm.put(b2, new Integer(122));  
    tm.put(b3, new Integer(688));  
    tm.put(b4, new Integer(453));  
    tm.put(b5, new Integer(40));  
    Iterator it = tm.keySet().iterator();  
    Object key = null, value = null;  
    Book bb = null;  
    while (it.hasNext()) {  
      key = it.next();  
      bb = (Book) key;  
      value = tm.get(key);  
      System.out.println(bb.toString() + "\t库存：" + tm.get(key));  
    }  
  }  
}  
```
### 1.2. 书2
```java
/*
 *  compare（a,b）方法:根据第一个参数小于、等于或大于第二个参数分别返回负整数、零或正整数。
 *  equals（obj）方法：仅当指定的对象也是一个 Comparator，并且强行实施与此 Comparator 相同的排序时才返回 true。
 *  Collections.sort(list, new PriceComparator());的第二个参数返回一个int型的值，就相当于一个标志，告诉sort方法按什么顺序来对list进行排序。
 */

package eg.oop.comparatorDemo_1;

import java.util.ArrayList;  
import java.util.Collections;  
import java.util.Comparator;  
import java.util.GregorianCalendar;  
import java.util.Iterator;  
import java.util.List; 

public class ComparatorDemo {
  @SuppressWarnings("unchecked")
	public static void main(String args[]) {  
    List<Book> list = new ArrayList<Book>(); // 数组序列  
    Book b1 = new Book(10000, "红楼梦", 150.86, new GregorianCalendar(2009,  
            01, 25), "曹雪芹、高鄂");  
    Book b2 = new Book(10001, "三国演义", 99.68, new GregorianCalendar(2008, 7,  
            8), "罗贯中 ");  
    Book b3 = new Book(10002, "水浒传", 100.8, new GregorianCalendar(2009, 6,  
            28), "施耐庵 ");  
    Book b4 = new Book(10003, "西游记", 120.8, new GregorianCalendar(2011, 6,  
            8), "吴承恩");  
    Book b5 = new Book(10004, "天龙八部", 10.4, new GregorianCalendar(2011, 9,  
            23), "搜狐");  
    list.add(b1);  
    list.add(b2);  
    list.add(b3);  
    list.add(b4);  
    list.add(b5);  
    // Collections.sort(list); //没有默认比较器，不能排序  
    System.out.println("数组序列中的元素:");  
    myprint(list);  
    Collections.sort(list, new PriceComparator()); // 根据价格排序  
    System.out.println("按书的价格排序:");  
    myprint(list);  
    Collections.sort(list, new CalendarComparator()); // 根据时间排序  
    System.out.println("按书的出版时间排序:");  
    myprint(list);  
  }  
  
  // 自定义方法：分行打印输出list中的元素  
  @SuppressWarnings("rawtypes")
	public static void myprint(List<Book> list) {  
    Iterator it = list.iterator(); // 得到迭代器，用于遍历list中的所有元素  
    while (it.hasNext()) {// 如果迭代器中有元素，则返回true  
      System.out.println("\t" + it.next());// 显示该元素  
    }  
  }  
  
  // 自定义比较器：按书的价格排序  
  @SuppressWarnings("rawtypes")
	static class PriceComparator implements Comparator {  
    public int compare(Object object1, Object object2) {// 实现接口中的方法  
      Book p1 = (Book) object1; // 强制转换  
      Book p2 = (Book) object2;  
      return new Double(p1.price).compareTo(new Double(p2.price));  
    }  
  }  
  
  // 自定义比较器：按书出版时间来排序  
  @SuppressWarnings("rawtypes")
	static class CalendarComparator implements Comparator {  
    public int compare(Object object1, Object object2) {// 实现接口中的方法  
      Book p1 = (Book) object1; // 强制转换  
      Book p2 = (Book) object2;  
      return p2.calendar.compareTo(p1.calendar);  
    }  
  } 
}
```