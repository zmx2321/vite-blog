# java入门练习题1

## 1. 问题1
> 从键盘输入一行字符，按下列规则加密之后输出。
> 加密的方法是将每个字符映射成字母表中的对称字符。例如a对应z，b对应y，字符串“Java”加密后就成为“Qzez”。
```java
package classic.array.encryption;

import java.util.Scanner;

public class Encryption {
	public static void main(String[] args) {
		String input = null;
		Scanner in = new Scanner(System.in);
		input = in.next();
		in.close();
		StringBuffer changed = new StringBuffer();
		
		for(int i = 0;i < input.length();i++){
			char x = input.charAt(i);
			
			if(input.charAt(i) >= 'a' && input.charAt(i) <= 'z'){
				x = (char) ('a'  + 'z' - x);
				changed.append(x);
			}else if(x >= 'A' && x <= 'Z'){
				x = (char) ('A'  + 'Z' - x);
				changed.append(x);
			}else{
				continue;
			}
		}
		System.out.println(changed);
	}
}
```

## 2. 问题2
> 从键盘输入两个数，然后按升序输出。 
```java
package classic.choosing.ascending;

import java.util.Scanner;

public class Ascending {
	public static void main(String[] args) {
		System.out.print("请输入两个正整数，用空格隔开：");
		
		int num1 = 0,  //用来保存一个正整数
			num2 = 0;  //用来保存一个正整数
		
		//输入两个正整数
		Scanner in = new Scanner(System.in);
		num1 = in.nextInt();
		num2 = in.nextInt();
		in.close();
		
		//比较大小并升序输出
		if(num1<num2){
			System.out.println("升序输出为：\n" + num1 + "," +num2);
		} else {
			System.out.println("升序输出为：\n" + num2 + "," +num1);
		}
	}
}
```

## 3. 问题3
> 分别输入两个整数及一个运算符，其中运算符在两个整数之间输入
```java
package classic.choosing.calculation;

import java.util.Scanner;

public class Calculation {
	public static void main(String[] args) {
		double num1 = 0.0;
		double num2 = 0.0;
		char c = ' ';
		
		System.out.println("请分别输入两个整数及一个运算符，其中运算符在两个整数之间输入：");
		
		Scanner in = new Scanner(System.in);
		num1 = in.nextDouble();
		c = in.next().charAt(0);
		num2 = in.nextDouble();
		in.close();
		
		switch(c){
		case '+':
			System.out.print(num1 + num2);
			break;
		case '-':
			System.out.print(num1 - num2);
			break;
		case '*':
			System.out.print(num1 * num2);
			break;
		case '/':
			System.out.print(num1 / num2);
			break;
		default:
			System.out.println("您的输入有误");
		}
	}
}
```

## 4. 问题4
> 从键盘输入两个整数，求出较大数并输出。 
```java
package classic.choosing.compare;

import java.util.Scanner;

public class Compare_1 {
	public static void main(String[] args) {
		int num1 = 0,  //用来保存一个正整数
			num2 = 0;  //用来保存一个正整数
		
		int max = 0;  //用来保存较大的正整数
		
		System.out.println("请输入两个正整数，用空格隔开：");
		
		//输入两个正整数
		Scanner in = new Scanner(System.in);
		num1 = in.nextInt();
		num2 = in.nextInt();
		in.close();
		
		//比较两个正整数的大小
		max = num1 > num2 ? num1 : num2;
		
		//输出较大的数
		System.out.println("较大的数为：" + max);
	}
}
```

## 5. 问题5
> 从键盘输入三个整数，求出最大数并输出。 
```java
package classic.choosing.compare;

import java.util.Scanner;

public class Compare_2 {
	public static void main(String[] args) {
		System.out.println("请输入三个正整数：");
		
		int num1 = 0,  //定义正整数num1
			num2 = 0,  //定义正整数num2
			num3 = 0;  //定义正整数num3
				
		int max = 0;  //定义三个正整数中的最大值
				
		//输入这三个正整数
		Scanner in = new Scanner(System.in);
		num1 = in.nextInt();
		num2 = in.nextInt();
		num3 = in.nextInt();
		in.close();
			
		//求最大值
		max = (num1>num2?(num1>num3?num1:num3):(num2>num3?num2:num3));
		
		//输出最大值
		System.out.println(num1 + "," + num2 + "," + num3 + "中最大值为：" + max);
	}
}
```

## 6. 问题6
> 求一元二次方程的实数根。 
```java
package classic.choosing.equation;

import java.util.Scanner;

public class Equation {
	public static void main(String[] args) {
		System.out.println("***** 求一元二次方程的实数根 *****");
		float a = (float)0.0,  //用来保存二次项系数
			  b = (float)0.0,  //用来保存一次项系数
			  c = (float)0.0;  //用来保存常数项
		
		float delta = (float)0.0;  //用来判断该一元二次方程的实数根的个数
		
		@SuppressWarnings("unused")
		float x = (float)0.0,	//用来保存方程的实数根
			  x1 = (float)0.0,	//用来保存方程的实数根
			  x2 = (float)0.0;	//用来保存方程的实数根
		
		//输入一元二次方程的三个系数
		Scanner in = new Scanner(System.in);
		
		//输入一个二次项系数
		System.out.print("请输入二次项系数(二次项系数大于0)：");
		a = in.nextFloat();
		
		//判断输入的二次项系数是否正确
		while(a<0){
			System.out.println("二次项系数应大于0，请重新输入：");
			a = in.nextFloat();
		}
		
		//输入一个一次项系数
		System.out.print("请输入一次项系数：");
		b = in.nextFloat();
		
		//输入一个常数项
		System.out.print("请输入常数项：");
		c = in.nextFloat();
		
		//关闭输入
		in.close();
		
		//给用户提示
		System.out.println("这个方程是：" + a + "x(2) + " + b + "x + " + c + "\n");
		
		//计算delta的值，并四舍五入取两位有效数字
		delta = (float)(Math.round((Math.pow(b,2)-4*a*c)*100)*0.01);
		
		//判断根的个数，并求值
		if(delta>0){
			System.out.println("该方程有两个根：");
			//计算x1和x2的值，并四舍五入取两位有效数字
			x1 = (float)(Math.round(((-b + Math.sqrt(delta))/2*a)*100)*0.01);
			x2 = (float)(Math.round(((-b - Math.sqrt(delta))/2*a)*100)*0.01);
			System.out.println("该方程的两个根分别为：" + x1 + "," + x2);
		} else if (delta==0) {
			System.out.println("该方程只有一个根：");
			//计算x的值，并四舍五入取两位有效数字
			x = (float)(Math.round((-b/2*a)*100)*0.01);
		} else {
			System.out.println("delta小于0，该方程无实数根");
		}
	}
}
```

## 7. 问题7
> 从键盘输入一个字符，若为小写字母，则转化为大写字母，否则保持不变。
```java
package classic.choosing.judgeLetter;

import java.util.Scanner;

public class JudgeLetter_1 {
	public static void main(String[] args) {
		System.out.print("请任意输入一个字母：");
		char ch = 0;  //用来保存一个任意字母
		
		//输入一个任意字母
		Scanner in = new Scanner(System.in);
		ch = in.next().charAt(0);
		in.close();
		
		//判断该字母的大小写，并按条件输出
		if(Character.isUpperCase(ch)){
			System.out.println("该字母为大写，该字母为：" + ch);
		} else {
			System.out.println("该字母为小写");
			System.out.println("该字母的大写为：" + (ch -= 32));
		}
	}
}
```

## 8. 问题8
> 从键盘输入一个字符，若为小写字母，则转化为大写字母;若为大写字母，则转化为小写字母，否则保持不变。
```java
package classic.choosing.judgeLetter;

import java.util.Scanner;

public class JudgeLetter_2 {
	public static void main(String[] args) {
		System.out.print("请输入一个字符：");
		
		char ch = 0;  //用来保存一个字符
		
		//输入一个字符
		Scanner in = new Scanner(System.in);
		ch = in.next().charAt(0);
		in.close();
		
		//判断字符并按条件输出
		if(Character.isUpperCase(ch)){
			System.out.println("该字母为大写");
			System.out.println("该字母的小写为：" + (ch += 32));
		} else if (Character.isLowerCase(ch)){
			System.out.println("该字母为小写");
			System.out.println("该字母的大写为：" + (ch -= 32));
		} else {
			System.out.println("该字符不是字母，该字符为：" + ch);
		}
	}
}
```

## 9. 问题9
> 从键盘输入一个字符，若为小写字母，则转化为大写字母;若为大写字母，则转化为小写字母;否则转化为ASCII码表中的下一个字符。
```java
package classic.choosing.judgeLetter;

import java.util.Scanner;

public class JudgeLetter_3 {
	public static void main(String[] args) {
		System.out.print("请输入一个字符：");
		
		char ch = 0;  //用来保存一个字符
		
		//输入一个字符
		Scanner in = new Scanner(System.in);
		ch = in.next().charAt(0);
		in.close();
		
		//判断字符并按条件输出
		if(Character.isUpperCase(ch)){
			System.out.println("该字母为大写");
			System.out.println("该字母的小写为：" + (ch += 32));
		} else if (Character.isLowerCase(ch)){
			System.out.println("该字母为小写");
			System.out.println("该字母的大写为：" + (ch -= 32));
		} else {
			System.out.println("该字符不是字母，该字符在ASCII表中下一个字符为：\"" + (ch += 1) + "\"");
		}
	}
}

```

## 10. 问题10
> 从键盘输入一个实数，求其绝对值并输出。 
```java
package classic.choosing.magnitude;

import java.util.Scanner;

public class Magnitude {
	public static void main(String[] args) {
		System.out.print("请输入一个任意实数：");
		double num = 0.0;
		double numAbs = 0.0;
		
		//输入一个任意实数
		Scanner in = new Scanner(System.in);
		num = in.nextDouble();
		in.close();
		
		//求该实数的绝对值
		numAbs = Math.abs(num);
		
		//输出该实数的绝对值
		System.out.println("该实数的绝对值是：" + numAbs);
	}
}
```

## 11. 问题11
> 从键盘输入x的值，求y的值并输出。 
```java
package classic.choosing.piecewise;

import java.util.Scanner;

public class Piecewise {
	public static void main(String[] args) {
		System.out.print("请输入x的值：");
		
		float x = (float)0.0;  //用来保存x的值
		int y = 0;  //用来保存y的值
		
		//输入x的值
		Scanner in = new Scanner(System.in);
		x = in.nextFloat();
		in.close();
		
		//根据输入的x求y的值
		if(x > 0){
			y = 1;
			System.out.println("y的值为：" + y);
		}else if(x == 0){
			y = 0;
			System.out.println("y的值为：" + y);
		} else {
			y = -1;
			System.out.println("y的值为：" + y);
		}
	}
}
```

## 12. 问题12
> 从键盘输入一个百分制分数，将其转化为等级分输出。
```java
package classic.choosing.score;

import java.util.Scanner;

public class Score_1 {
	public static void main(String[] args) {
		System.out.print("请输入你的分数：");
		
		int score = 0;  //用来保存你的分数
		
		//输入分数
		Scanner in = new Scanner(System.in);
		score = in.nextInt();
		in.close();
		
		//将其转换成等级输出
		int grade = 0;
		grade = score/10;
		
		switch(grade){
			case 10:
			case 9:
				System.out.println("A");
				break;
			case 8:
				System.out.println("B");
				break;
			case 7:
				System.out.println("C");
				break;
			case 6:
				System.out.println("D");
				break;
			default:
				System.out.println("E");
		}
	}
}
```

## 13. 问题13
> 从键盘输入一个百分制分数，将其转化为等级分输出。
```java
package classic.choosing.score;

import java.util.Scanner;

public class Score_2 {
	public static void main(String[] args) {
		System.out.print("请输入你的分数：");
		
		double score = 0;  //用来保存你的分数
		String level = "";  //等级
		
		//输入分数
		Scanner in = new Scanner(System.in);
		score = in.nextDouble();
		
		//判断所输入分数是否在0-100区间内
		while(score>100||score<0){
			System.out.print("分数有误，请重新输入：");
			score = in.nextInt();
		}
		
		in.close();
		
		//将其转换成等级输出
		if(score>=90){
			level = "A";
		} else if(score>=80) {
			level = "B";
		} else if(score>=70) {
			level = "C";
		} else if(score>=60) {
			level = "D";
		} else {
			level = "E";
		}
		
		System.out.println("等级为：" + level);
	}
}
```

## 14. 问题14
> 用循环程序求10的阶乘
```java
package classic.loop.factorial;

public class Factorial_1 {
	public static void main(String[] args) {
		int res = 1;  //用来保存计算的结果
		for(int i=10; i>0; i--){
			res *= i;
		}
		System.out.println("10！= " + res);
	}
}
```

## 15. 问题15
> 从键盘输入一个正整数，求出其阶乘并输出。
```java
package classic.loop.factorial;

import java.util.Scanner;

public class Factorial_2 {
	public static void main(String[] args) {
		System.out.print("请输入一个正整数：");
		
		int n = 0;  //用来保存用户输入的正整数
		int res = 1;  //用来保存计算的结果
		
		//输入
		Scanner in = new Scanner(System.in);
		n = in.nextInt();
		in.close();
		
		//计算结果
		for(int i=1; i<=n; i++){
			System.out.print(i > 1 ? " * " + i : i);
			res *= i;
		}
		
		//输出
		System.out.println(" = " + res);
	}
}
```

## 16. 问题16
> 从键盘两个整数，求其最大公约数和最小公倍数
```java
package classic.loop.GCDandLCM;

import java.util.Scanner;

public class GCDandLCM {
	static public int gcd1_1(int x, int y)   //非递归的辗转相除法
	 {
	  int temp;
	  
	  do{
	  temp = x % y;
	  x = y;
	  y = temp;
	  }while(temp != 0); 
	  
	  return x;
	 }
	 
	 static public int gcd2_1(int x, int y)   //非递归的辗转相减法
	 {
	  int max, min;
	  int temp;
	  max = (x > y) ? x : y;
	  min = (x < y) ? x : y;
	  
	  while (max != min)
	  {
	   temp = max - min;
	   max = (temp > min) ? temp : min;
	   min = (temp < min) ? temp : min;   
	  }
	  
	  return max;
	 }
	 
	 static public int gcd1_2(int x, int y)   //递归的辗转相除法
	 {
	  return (y == 0) ? x : gcd1_2(y, x % y);
	 }
	 
	 static public int gcd2_2(int x, int y)   //递归的辗转相减法
	 {
	  if(x == y) return x;
	  return (x > y) ? gcd2_2(x - y, y) : gcd2_2(x, y - x);
	 }
	 
	public static void main(String[] args) {
		//定义变量
		int num1 = 0;  //要求用户输入的数字1
		int num2 = 0;  //要求用户输入的数字2
		int res = 0;  //用来保存结果
		
		//提示
		System.out.print("请从键盘输入两个整数，用空格隔开：");
		
		//获取输入
		Scanner in = new Scanner(System.in);
		num1 = in.nextInt();
		num2 = in.nextInt();   
		in.close();
		
		 res = gcd1_1(num1, num2);
		  System.out.println("最大公约数为：" + res);
		  res = gcd1_2(num1, num2);
		  System.out.println("最大公约数为：" + res);
		  res = gcd2_1(num1, num2);
		  System.out.println("最大公约数为：" + res);
		  res = gcd2_2(num1, num2);
		  System.out.println("最大公约数为：" + res);
		  System.out.println("最小公倍数为： " + num1 * num2 / res); // 最小公倍数
	}
}
```

## 17. 问题17
> 求1+4+7+……+100之和
```java
package classic.loop.getSum;

public class GetSum_1 {
	public static void main(String[] args) {
		System.out.println("方法1：1+4+7+……+100之和为：" + sum1());
		System.out.println("方法1：1+4+7+……+100之和为：" + sum2());
		System.out.println("方法1：1+4+7+……+100之和为：" + sum3(100));
	}
	
	//方法一  for循环
	public static int sum1(){
		int sum = 0;  //用来求和的结果
		for(int i=0; i<=100; i++){
			sum += i;
		}
		return sum;
	}
	
	//方法二  while循环
	public static int sum2(){
		int sum = 0;  //用来求和的结果
		int i = 0;
		while(i<=100){
			sum += i;
			i++;
		}
		return sum;
	}
	
	//方法三  递归
	public static int sum3(int num){
		if(num == 1){
			return 1;
		} else {
			return num + sum3(num-1);
		}
	}
}
```

## 18. 问题18
> 求1到100之间的奇数之和与偶数之和。
```java
package classic.loop.getSum;

public class GetSum_2 {
	public static void main(String[] args){
		int sumOdd = 0;  //用来保存奇数和的结果
		int sumEven = 0;  //用来保存偶数和的结果
		
		//遍历1-100中的正整数并求和
		for(int i=0; i<=100; i++){
			if(i%2 != 0){
				sumOdd += i;  //求奇数和
            } else {
            	sumEven += i;  //求偶数和
            }
		}
		
		//输出奇数和与偶数和
		System.out.println("1到100之间的奇数之和为：" + sumOdd);
		System.out.println("1到100之间的偶数之和为：" + sumEven);
	}
}
```

## 19. 问题19
> 从键盘输入一个正整数n，求1+2+3+...+n之和并输出。
```java
package classic.loop.getSum;

import java.util.Scanner;

public class GetSum_3 {
	public static void main(String[] args) {
		System.out.print("请输入一个正整数：");
		
		int num = 0;  //用来保存用户输入的正整数
		int sum = 0;  //用来保存求和的结果
		
		//输入
		Scanner in = new Scanner(System.in);
		num = in.nextInt();
		in.close();
		
		//求和
		for(int i=1; i<=num; i++){
			System.out.print(i > 1 ? " + " + i : i);
			sum += i;
		}
		
		//输出
		System.out.println(" = " + sum);
	}
}
```

## 20. 问题20
> 求1*3*5*...*19之积。
```java
package classic.loop.quadrature;

public class Quadrature {
	public static void main(String[] args) {
		int res = 1;  //用来保存计算所得的结果
		for(int i=0; i<20; i++){
			if(i%2 != 0){
				res *= i;
			}
		}
		System.out.println("求1*3*5*...*19之积为：" + res);
	}
}
```

## 21. 问题21
> 从键盘输入球体的半径，求其体积和表面积。  
```java
package classic.sequentially.ball;

import java.util.Scanner;

public class Ball {
	public static void main(String[] args) {
		System.out.print("请输入球体的半径：");
		
		float radius = (float)0.0,	//定义球体的半径
			  V = (float)0.0,  //定义球体的体积
			  S = (float)0.0;  //定义球体的表面积
		
		//输入球体的半径
		Scanner in = new Scanner(System.in);
		radius = in.nextFloat();
		in.close();
		
		//计算球体的体积并四舍五入取两位有效数字
		V = (float)(Math.round((4/3)*Math.PI*Math.pow(radius,2)*100)*0.01);
		
		//计算球体的表面积并四舍五入取两位有效数字
		S = (float)(Math.round(4*Math.PI*Math.pow(radius,3)*100)*0.01);
		
		//输出球体的体积和表面积
		System.out.println("该球体的体积为：" + V);
		System.out.println("该球体的表面积为：" + S);
	}
}

```

## 22. 问题22
> 已知圆的半径为10，求圆的面积。 
```java
package classic.sequentially.circleArea;

public class CircleArea_1 {
	public static void main(String[] args) {
		int radius = 10;	//半径
		float area = (float)0.0;	//面积
			
		//求面积并四舍五入保留两位有效数字
		area = (float)(Math.round(radius*Math.PI*100)*0.01);
		
		//输出面积
		System.out.println("圆的面积为：" + area);
		
	}
}
```

## 23. 问题23
> 从键盘输入圆的半径值，求圆的面积。
```java
package classic.sequentially.circleArea;

import java.util.Scanner;

public class CircleArea_2 {
	public static void main(String[] args) {
		System.out.print("请输入圆的半径：");
		
		float radius = (float)0.0,  //定义圆的半径
			  area = (float)0.0;  //定义圆的面积
		
		//输入圆的半径
		Scanner in = new Scanner(System.in);
		radius = in.nextFloat();
		in.close();
		
		//求面积并四舍五入保留两位有效数字
		area = (float) (Math.round(radius*Math.PI*100)*0.01);
		
		//输出圆的面积
		System.out.println("圆的面积为：" + area);
	}
}
```

## 24. 问题24
> 求一元二次方程的实数根。 
```java
package classic.sequentially.equation;

import java.util.Scanner;

public class Equation {
	public static void main(String[] args) {
		System.out.println("***** 求一元二次方程的实数根 *****");
		float a = (float)0.0,  //用来保存二次项系数
			  b = (float)0.0,  //用来保存一次项系数
			  c = (float)0.0;  //用来保存常数项
		
		float delta = (float)0.0;  //用来判断该一元二次方程的实数根的个数
		
		@SuppressWarnings("unused")
		float x = (float)0.0,	//用来保存方程的实数根
			  x1 = (float)0.0,	//用来保存方程的实数根
			  x2 = (float)0.0;	//用来保存方程的实数根
		
		//输入一元二次方程的三个系数
		Scanner in = new Scanner(System.in);
		
		//输入一个二次项系数
		System.out.print("请输入二次项系数(二次项系数大于0)：");
		a = in.nextFloat();
		
		//判断输入的二次项系数是否正确
		while(a<0){
			System.out.println("二次项系数应大于0，请重新输入：");
			a = in.nextFloat();
		}
		
		//输入一个一次项系数
		System.out.print("请输入一次项系数：");
		b = in.nextFloat();
		
		//输入一个常数项
		System.out.print("请输入常数项：");
		c = in.nextFloat();
		
		//关闭输入
		in.close();
		
		//计算delta的值，并四舍五入取两位有效数字
		delta = (float)(Math.round((Math.pow(b,2)-4*a*c)*100)*0.01);
		
		//判断根的个数，并求值
		if(delta>0){
			System.out.println("该方程有两个根：");
			//计算x1和x2的值，并四舍五入取两位有效数字
			x1 = (float)(Math.round(((-b + Math.sqrt(delta))/2*a)*100)*0.01);
			x2 = (float)(Math.round(((-b - Math.sqrt(delta))/2*a)*100)*0.01);
			System.out.println("该方程的两个根分别为：" + x1 + "," + x2);
		} else if (delta==0) {
			System.out.println("该方程只有一个根：");
			//计算x的值，并四舍五入取两位有效数字
			x = (float)(Math.round((-b/2*a)*100)*0.01);
		} else {
			System.out.println("delta小于0，该方程无实数根");
		}
	}
}
```

## 25. 问题25
> 从键盘输入一个字母，判断其为大写还是小写字母，将其转化为相应的大小写字母输出。 
```java
package classic.sequentially.judgeLetter;

import java.util.Scanner;

public class JudgeLetter_1 {
	public static void main(String[] args) {
		System.out.print("请任意输入一个字母：");
		char ch = 0;  //用来保存一个任意字母
		
		//输入一个任意字母
		Scanner in = new Scanner(System.in);
		ch = in.next().charAt(0);
		in.close();
		
		//判断该字母的大小写，并将其转换为相应的大小写，并输出
		if(Character.isUpperCase(ch)){
			System.out.println("该字母为大写");
			System.out.println("该字母的小写为：" + Character.toLowerCase(ch));
		} else {
			System.out.println("该字母为小写");
			System.out.println("该字母的大写为：" + Character.toUpperCase(ch));
		}
	}
}
```

## 26. 问题26
> 从键盘输入一个字母，判断其为大写还是小写字母，将其转化为相应的大小写字母输出。 
```java
package classic.sequentially.judgeLetter;

import java.util.Scanner;

public class JudgeLetter_2 {
	public static void main(String[] args) {
		System.out.print("请任意输入一个字母：");
		char ch = 0;  //用来保存一个任意字母
		
		//输入一个任意字母
		Scanner in = new Scanner(System.in);
		ch = in.next().charAt(0);
		in.close();
		
		//判断该字母的大小写，并将其转换为相应的大小写，并输出
		if(Character.isUpperCase(ch)){
			System.out.println("该字母为大写");
			System.out.println("该字母的小写为：" + (ch += 32));
		} else {
			System.out.println("该字母为小写");
			System.out.println("该字母的大写为：" + (ch -= 32));
		}
	}
}
```

## 27. 问题27
> 已知三角形的底边为20，高为10，求其面积。 
```java
package classic.sequentially.triangleArea;

public class AriangleArea_1 {
	public static void main(String[] args){
		int bottom = 20,  //底
			high = 10,  //高
			area = 0;  //面积
			
		//求面积
		area = bottom * high;
		
		//输出面积
		System.out.println("三角形的面积为：" + area);
			
	}
}
```

## 28. 问题28
>  从键盘输入三角形的底边及高的长度，求其面积。 
```java
package classic.sequentially.triangleArea;

import java.util.Scanner;

public class AriangleArea_2 {
	public static void main(String[] args) {
		System.out.println("请输入三角形的底边长度和高：");
		
		float bottom = (float)0.0,	//底
			  high = (float)0.0,	//高
			  area = (float)0.0;	//面积
		
		//输入底和高
		Scanner in = new Scanner(System.in);
		bottom = in.nextFloat();
		high = in.nextFloat();
		in.close();
		
		//求面积
		area = bottom * high;
		
		//输出面积
		System.out.println("三角形的面积为：" + area);
	}
}
```

## 29. 问题29
> 为指定成绩加分，直到分数大于等于 60 为止，输出加分前和加分后的成绩，并统计加分的次数
```java
package demo.arr.arrsort;

import java.util.Scanner;

public class Arrsort {
	public static void main(String[] args){
    System. out.print( "请输入考试成绩：" );
    Scanner input = new Scanner(System. in);
    int score = input.nextInt();
    System. out.println( "加分前的考试成绩为：" +score );
    input.close();
    int count = 0;
    while( score < 60 ){
        count++;
        score++;
    }
    System. out.println( "一共加了"+count +"次" );
    System. out.println( "加分后的成绩为" +score );
	}
}
```

## 30. 问题30
> a+b
```java
package demo.ease.AplusB;

import java.util.Scanner;

public class AplusB_2 {
	public static void main(String[] args){
		Scanner in = new Scanner(System.in);
		
		while(in.hasNextInt()){
			int a = in.nextInt();
			int b = in.nextInt();
			
			System. out.println( a + " + " + b + " = " + ( a + b) );
		}
		
		in.close();
	}
}
```

## 31. 问题31
> a-b
```java
package demo.ease.AreduceB;

import java.util.Scanner;

public class AreduceB_2 {
	public static void main(String[] args){
		Scanner in = new Scanner(System.in);
		
		while(in.hasNextInt()){
			int a = in.nextInt();
			int b = in.nextInt();
			
			System.out.println( a + " - " + b + " = " + ( a - b) );
		}
		in.close();
	}
}
```

## 32. 问题32
> 计算 1 到 n 之间不能被 3 整除的数之和
```java
package demo.ease.cal;

import java.util.Scanner;

public class Cal {
	public static void main(String[] args){
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    in.close();
    
    int sum = 0;
    for( int i=1 ; i<=n ; i++){
      if( i%3 != 0 ){
        sum += i;
      }
    }
    System. out.println( "1到" + n + "之间不能被3整除的数之和为：" +sum );
  }
}
```

## 33. 问题33
> 输入一字符串，统计出现最多的字符，以及出现次数。 
```java
package demo.ease.charCount;

public class CharCount {
	public static void main(String[] args) {
		//定义的字符串
		String str="aaabbb";
		//分割成数组
		char[] c=str.toCharArray();
		//定义一个记住最大次数的变量
		int max=0;
		//定义一个保存出现最多次数的字符
		char cc = 0;
		//循环比较
		for(int i=0;i<c.length;i++){
			//定义一个中间值
			int is=0;
			
			for(int j=0;j<c.length-1;j++){
				//比较字符
				if(c[i]==c[j+1]){
					is++;
				}
				//比较出现次数大的输出
				if(is>max){
					max=is;
					cc=c[i];
				}
			}
			
		}
		//打印
		System.out.println("出现次数最多的是"+cc+",出现"+max+"次");
	}
}
```

## 34. 问题34
> 判断素数并求和
```java
package demo.ease.primeNumber;

import java.util.Scanner;

public class PrimeNumber {
public static void main(String[] args){
    Scanner in = new Scanner(System. in);
    int m = in.nextInt();
    int n = in.nextInt();
    in.close();
    if( m == 1 )     m=2;
    int cnt = 0;
    int sum = 0;
    for( int i=m ; i<=n ; i++ ) {
      boolean isPrime = true;
      for( int k=2 ; k< i ; k++ ) {
        if( i % k == 0 ) {
          isPrime = false;
          break;
        }
      }
      if( isPrime ){
        cnt++;
        sum++;
      }
    }
    System. out.println( "在" + m + "和" + n + "之间有" + cnt + "个素数，总和为" + sum );
  }
}
```

## 35. 问题35
> 定义三个字符串，并随机输出其中一个,
> 随机n次，存入数组，并判断输出其中出现次数最多的字符串
```java
package demo.ease.randomStr;

import java.util.Scanner;

public class RandomStr_1 {
	//判断字符串数组中出现次数最多的元素
	public static String majorityElement(String[] arr){
		int i; //循环的参数
    	int count = 0;  //统计次数
    	String temp = null;  //用来保存返回的结果
        
    	for(i=0; i<arr.length; i++){
        		if(count == 0){
            		temp = arr[i];
            			count++;
        		}else{
            		if(temp == arr[i]){
            			count++;
            		}else{
            			count--;
            		} 
        		}
    	}
		return temp;
	}
	
	public static void main(String[] args) {
		//定义变量
		int num,i;  //用来保存随机数和循环参数
		String str = null;  //用来保存三个字符串
		int n = 0;  //用来保存你所需要循环的次数
		//提示
		System.out.print("请输入您所需要产生随机名字的个数：");
		
		//获取输入
		Scanner in = new Scanner(System.in);
		n = in.nextInt();
		in.close();
		
		//换行
		System.out.println();
		
		//定义数组，并给他指定容量
		String[] arr = new String[n];
		
		//开始循环并获取n次随机字符串
		for(i=0; i<n; i++){
			num = (int)(Math.random()*3+1);  //取随机数1-3
			
			switch(num){
				case 1:
					str = "巧巧";
					break;
				case 2:
					str = "小哇";
					break;
				case 3:
					str = "巧林";
					break;
			}
			
			if(i == n-1){
				System.out.print(str + "\n\n");
			}else{
				System.out.print(str + ",");
			}
			
			//将得到的字符串分别存入数组
			arr[i] = str;
		}
		
		//输出字符串数组中出现最多的字符串
		System.out.println("\"" + majorityElement(arr) + "\"这个名字出现次数最多\n以后你的名字就叫\"" + majorityElement(arr) + "\"啦，哈哈哈 !^_^");
	}
}
```

## 36. 问题36
> 定义三个字符串，并随机输出其中一个
```java
package demo.ease.randomStr;

public class RandomStr_2 {
	public static void main(String[] args) {
		String[] str = { "嘿嘿", "嘻嘻", "哈哈", "嘎嘎", "呜呜" };
		int random = (int) ( Math.random () * 5 );
		System.out.println (str[random]);
	}
}
```

## 37. 问题37
> 输出任意行*号
```java
package demo.ease.rightTriangle;

import java.util.Scanner;

public class RightTriangle {
	public static void main(String args[]){
		System.out.println("请输入行数");
		
		Scanner in = new Scanner(System.in);
		int a = in.nextInt();
		in.close();
		
        System. out.println( "输出"+ a +"行星号" ); 
        
        // 外层循环控制行数
		for(int i=1; i<=a; i++){
			// 内层循环控制每行的*号数
            // 内层循环变量的最大值和外层循环变量的值相等
			for ( int j = 1; j <= i ; j ++ ){
				System. out.print( "*" );
			}
			// 每打印完一行后进行换行
            System. out.println();
		}
	}
}
```

## 38. 问题38
> 例如下面程序100有16个被三整除的数字，怎么去实现这16个数字每隔三个换行
```java
package demo.ease.wrap;

public class Wrap {
	public static void main(String[] args){
    int i,j=0;
    for(i=1;i<=100;i++){
      if(i%6==0){
        System.out.print(i+"\t");
        j++;
        if(j%3==0){   //如果能被三整除就换行
          System.out.println();
        }
      }
    }
    System.out.println();  
    System.out.println("有"+j+"个数字");
	}
}
```

## 39. 问题39
### 39.1. 二维数组示例1
```java
package eg.arr.twoDimensionalArray;

public class TwoDimensionalArray_1 {
	public static void main(String[] args){
    int[][] num = {{1,2,3},{4,5,6}};
    for( int i=0 ; i< num. length ; i++){
      for( int j=0 ; j< num[ i]. length ; j++){
        System. out.print( num[ i][ j]);
      }
      System.out.println();
    }
	}
}
```
### 39.2. 二维数组示例2
```java
package eg.arr.twoDimensionalArray;

public class TwoDimensionalArray_2 {
	public static void main(String[] args) {
		int[][] array = new int[3][];
		//每个高维的数组（一维数组）指向一个低维的int数组
		array[0] = new int[2];
		array[1] = new int[3];
		array[2] = new int[4];
		
		//给低维的数组进行赋值
		array[0][0] = 1;
		array[0][1] = 2;
		
		array[1][0] = 3;
		array[1][1] = 4;
		array[1][2] = 5;
		
		array[2][0] = 6;
		array[2][1] = 7;
		array[2][2] = 8;
		array[2][3] = 9;
		
		for(int i=0; i<array.length; i++){
			for(int j=0; j<array[i].length; j++){
				if((i==array.length-1)&&(j==array[i].length-1)){
					System.out.print(array[i][j]);
				}else{
					System.out.print(array[i][j] + ",");
				}
			}
		}
	}
}
```
### 39.3. 二维数组示例3
```java
package eg.arr.twoDimensionalArray;

public class TwoDimensionalArray_3 {
	public static void main(String[] args) {
		int arr[][] = { { 4, 3, 7 }, { 1, 5, 5 } };
		String total="";
		for (int i = 0; i <2; i++) {
			for (int j = 0; j < 3; j++) {
				total+=arr[i][j]+",";
			}
		}
		System.out.println(total.substring(0,total.length()-1));
	}
}
```

## 40. 问题40
> 编写程序在控制台输出斐波那契数列前20项，每输出5个数换行
### 40.1. 定义三个变量方法  
```java
package eg.cal.Tibonacci;

public class Tibonacci_1 {
	// 定义三个变量方法  
  public static void main(String[] args) {  
    int a = 1, b = 1, c = 0;  
    System.out.println("斐波那契数列前20项为：");  
    System.out.print(a + "\t" + b + "\t");  
    //因为前面还有两个1、1 所以i<=18  
    for (int i = 1; i <= 18; i++) {  
      c = a + b;  
      a = b;  
      b = c;  
      System.out.print(c + "\t");  
      if ((i + 2) % 5 == 0) {
        System.out.println(); 
      }
    }  
  }  
}
```
### 40.2. 定义数组方法
```java
package eg.cal.Tibonacci;

public class Tibonacci_2 {
	// 定义数组方法  
  public static void main(String[] args) {  
    int arr[] = new int[20];  
    arr[0] = arr[1] = 1;  
    for (int i = 2; i < arr.length; i++) {  
      arr[i] = arr[i - 1] + arr[i - 2];  
    }  
    System.out.println("斐波那契数列的前20项如下所示：");  
    for (int i = 0; i < arr.length; i++) {  
      if (i % 5 == 0) {
        System.out.println();  
      }
      System.out.print(arr[i] + "\t");  
    }  
  }  
}
```
### 40.3. 定义数组方法
```java
package eg.cal.Tibonacci;

public class Tibonacci_3 {
	// 使用递归方法  
  private static int getFibo(int i) {  
    if (i == 1 || i == 2)  
      return 1;  
    else  
      return getFibo(i - 1) + getFibo(i - 2);  
  }  

  public static void main(String[] args) {  
    System.out.println("斐波那契数列的前20项为：");  
    for (int j = 1; j <= 20; j++) {  
      System.out.print(getFibo(j) + "\t");  
      if (j % 5 == 0)  
        System.out.println();  
    }  
  }  
}
```
### 40.4. 其他  
> 产生10个斐波那契数列并将其存入数组并打印出来：1,1,2,3,5,8...，要求存入和输出单独写方法
```java
package eg.cal.Tibonacci;

public class Tibonacci_4 {
	public static void main(String[] args) {
		int[] res = new int[10];  //用来将求出的结果存入此数组
		
		res[0] = res[1] = 1;  //斐波那契数列前两项值
		
		//求出第三到10项的斐波那契数列值
		for (int i = 2; i < res.length; i++) {  
			res[i] = res[i - 1] + res[i - 2];  
    }
		
		//遍历数组并输出，用逗号隔开
    System.out.print("斐波那契数列的前10项如下所示：");  
    for (int i = 0; i < res.length; i++) {
      if(i == res.length-1){
        System.out.print(res[i]);
      }else{
        System.out.print(res[i] + ","); 
      }
    }
	}
}
```

## 41. 问题41
> 计算n的阶乘 
```java
package eg.degin.factorial;

import java.util.Scanner;

public class Factorial {
	@SuppressWarnings("resource")
	public static void main(String[] arg) {  
      Scanner scanner = new Scanner(System.in);  
      int n = scanner.nextInt();  
      System.out.println(factorial(n));  
    }  
    /** 
     * 使用递归方法计算n的阶乘 
     *  
     * @param n 
     * @return 
     */  
    private static long factorial(int n) {  
      if (n == 0) {  
        System.out.println(n + "! = " + 1);  
        return 1;  
      } else {  
        long num = n * factorial(n - 1);  
        System.out.println(n + "! = " + num);  
        return num;  
      }  
    }  
  
    /** 
     * 使用循环方式计算n的阶乘 
     *  
     * @param n 
     * @return 
     */  
    @SuppressWarnings("unused")
	  private long test(int n) {  
      long num = 1;  
      for (int i = 1; i <= n; i++) {  
        num *= i;  
      }  
      return num;  
    }  
}
```

## 42. 问题42
> 判断是否为数字
### 42.1. 方法一
```java
package eg.ease.execepIsNum;

import java.util.Scanner;

public class IsNum_1 {
	public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("输入x：");
    String x;
    do {
        try {
          x = sc.nextLine();
          if (Integer.valueOf(x) instanceof Integer) {
            System.out.println("输入为整数,程序结束.");
            sc.close();
            break;
          } else {
            x = sc.nextLine();
          }
        } catch (Exception e) {
          System.out.println("请输入整数.");
        }
    } while (true);
  }
}
```
### 42.2. 方法二
```java
package eg.ease.execepIsNum;

import java.util.InputMismatchException;
import java.util.Scanner;

public class IsNum_2 {
	public static void main(String[] args) {
		int num = 0;  //用来保存一个整数
		System.out.print("请输入一个整数：");
		
		do{
			//因为这段程序可能出现异常，所以用try来监测这块代码
			try{  //监测
				Scanner in = new Scanner(System.in);  //获取输入
				num = in.nextInt();  //让用户输入一个整数(如果用户输入不是整数，则会报错InputMismatchException,所以需要抛出异常)
				in.close();
				break;
			}catch(InputMismatchException e){
				System.out.print("您输入的不是整数，请输入整数：");  //打印错误信息
			}catch(Exception e){
				System.out.print("您输入的不是整数，请输入整数：");  //打印错误信息
			}
		}while(true);
		
		System.out.println("\n您输入的" + num + "是整数，程序结束！");
		System.exit(0);
	}
}
```