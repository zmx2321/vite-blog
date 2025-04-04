# 编程语言

## 编程语言分类
- 低级语言
  - 汇编语言、机器语言
  - cpu运行机器指令，直接操作硬件
- 高级语言
  - java、python、javascript、c、c++、c#

## 高级语言
> 高级语言之母是c语言
> 高级语言的核心就是语句封装了指令
- 1972年，贝尔实验室的Dennis Ritchie发明了C语言
- 在汇编之后，高级语言的出现，使得程序员不再需要直接操作硬件，而是通过高级语言编写程序，然后编译器将高级语言编译成汇编语言，最后汇编语言再编译成机器语言，然后由计算机执行
- c可以全面调用计算机的功能接口

## 编译器和解释器
- 编译器
  - 将高级语言编译成汇编语言
  - 将汇编语言编译成机器语言
  - 编译器是一种程序，它能够将高级语言编写的程序转换为计算机可以理解的机器语言
  - 编译器的工作原理是将源代码一次性编译成机器语言，然后执行
  - 编译器的优点是执行速度快，因为它不需要解释，直接执行机器语言
  - 编译器的缺点是不能在不同的操作系统上运行，因为它需要编译成特定的机器语言
  - 代表语言：C、C++、Go
- 解释器
  - 解释器是一种程序，它能够将高级语言编写的程序转换为计算机可以理解的机器语言
  - 解释器的工作原理是将源代码逐行解释成机器语言，然后执行
  - 解释器的优点是可以在任何操作系统上运行，因为它不需要编译成特定的机器语言
  - 解释器的缺点是执行速度慢，因为它需要解释
  - 代表语言：Python、JavaScript、PHP、Ruby

## 编译型语言和解释型语言
- 编译型语言
  - 编译型语言的程序在执行之前，需要一个专门的编译过程，将程序编译成机器语言的文件，运行时不需要重新翻译，直接使用编译的结果就行了
  - 代表语言：C、C++、Go
  - 编译器将程序翻译成可执行语言(机器语言) => 先翻译后执行
  - 可以直接交给cpu去执行
  - 一次编译，多次运行
  - 编译完之后,可以直接执行
- 解释型语言
  -  解释型语言的程序不需要编译，在运行时，解释器对程序逐行进行解释和执行
     -  一边翻译一边执行
     -  逐行执行,交给c,然后交给cpu去执行
  -  代表语言：Python、JavaScript、PHP、Ruby
  -  无论什么时候执行，都需要解释器进行翻译
  
## 编译型语言和解释型语言的区别
- 编译型语言
  - 优点：执行速度快
  - 缺点：开发效率低
  - 换到其他环境上运行需要重新编译
  - 编译型语言对代码的静态类型检查较为严格
- 解释型语言
  - 优点：开发效率高
  - 缺点：执行速度慢
  - 换到其他环境上运行不需要重新编译
  - 只要有解释器,就可以运行
  - 跨平台方便
  - 具有动态类型检查的灵活性,变量在运行时确定类型

## python
- 胶水语言
  - 胶水语言是一种编程语言，它可以将其他编程语言编写的程序连接起来，形成一个整体
## 终端环境
- 终端环境是一种编程环境，它允许用户通过命令行界面与计算机进行交互
- 终端环境是一种命令行界面，它允许用户输入命令，然后计算机执行命令
- 终端环境是一种编程环境，它允许用户编写程序，然后计算机执行程序