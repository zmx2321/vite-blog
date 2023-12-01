# JavaScript 中的“类型系统”

## 1+‘2’等于多少
- 其实这相当于是在问，在 JavaScript 中，让数字和字符串相加是会报错，还是可以正确执行。如果能正确执行，那么结果是等于数字 3，还是字符串“3”，还是字符串“12”呢
- 在 JavaScript 中执行这段表达式，是可以返回一个结果的，最终返回的结果是字符串“12”

## 什么是类型系统
- 在这个简单的表达式中，涉及到了两种不同类型的数据的相加。要想理清以上两个问题，我们就需要知道类型的概念，以及 JavaScript 操作类型的策略。
- 对机器语言来说，所有的数据都是一堆二进制代码，CPU 处理这些数据的时候，并没有类型的概念，CPU 所做的仅仅是移动数据，比如对其进行移位，相加或相乘。
- 而在高级语言中，我们都会为操作的数据赋予指定的类型，类型可以确认一个值或者一组值具有特定的意义和目的。所以，类型是高级语言中的概念。
![类型](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/8/8-1.png)
- Python 和 JavaScript 定义变量的方式不同，但是它们都不需要直接指定变量的类型，因为虚拟机会根据数据自动推导出类型。
- 通用的类型有数字类型、字符串、Boolean 类型等等，引入了这些类型之后，编译器或者解释器就可以根据类型来限制一些有害的或者没有意义的操作。
- 比如在 Python 语言中，如果使用字符串和数字相加就会报错，因为 Python 觉得这是没有意义的。而在 JavaScript 中，字符串和数字相加是有意义的，可以使用字符串和数字进行相加的。再比如，你让一个字符串和一个字符串相乘，这个操作是没有意义的，所有语言几乎都会禁止该操作。
- 每种语言都定义了自己的类型，还定义了如何操作这些类型，另外还定义了这些类型应该如何相互作用，我们就把这称为类型系统。
- 关于类型系统，wiki 百科上是这样解释的：
    - 在计算机科学中，类型系统（type system）用于定义如何将编程语言中的数值和表达式归类为许多不同的类型，如何操作这些类型，这些类型如何互相作用。
- 直观地理解，一门语言的类型系统定义了各种类型之间应该如何相互操作，比如，两种不同类型相加应该如何处理，两种相同的类型相加又应该如何处理等。还规定了各种不同类型应该如何相互转换，比如字符串类型如何转换为数字类型。
- 一个语言的类型系统越强大，那编译器能帮程序员检查的东西就越多，程序员定义“检查规则”的方式就越灵活。

## V8 是怎么执行加法操作的
- V8 会严格根据 ECMAScript 规范来执行操作。ECMAScript 是一个语言标准，JavaScript 就是 ECMAScript 的一个实现，比如在 ECMAScript 就定义了怎么执行加法操作，如下所示：
![ECMAScript定义加法语义](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/8/8-2.png)
1. 把第一个表达式 (AdditiveExpression) 的值赋值给左引用 (lref)。
2. 使用 GetValue(lref) 获取左引用 (lref) 的计算结果，并赋值给左值
3. 使用ReturnIfAbrupt(lval) 如果报错就返回错误。
4. 把第二个表达式 (MultiplicativeExpression) 的值赋值给右引用 (rref)。
5. 使用 GetValue(rref) 获取右引用 (rref) 的计算结果，并赋值给 rval。
6. 使用ReturnIfAbrupt(rval) 如果报错就返回错误。
7. 使用 ToPrimitive(lval) 获取左值 (lval) 的计算结果，并将其赋值给左原生值 (lprim)。
8. 使用 ToPrimitive(rval) 获取右值 (rval) 的计算结果，并将其赋值给右原生值 (rprim)。
9. 如果 Type(lprim) 和 Type(rprim) 中有一个是 String，则：
    - 把 ToString(lprim) 的结果赋给左字符串 (lstr)；
    - 把 ToString(rprim) 的结果赋给右字符串 (rstr)；
    - 返回左字符串 (lstr) 和右字符串 (rstr) 拼接的字符串。
10. 把 ToNumber(lprim) 的结果赋给左数字 (lnum)。
11. 把 ToNumber(rprim) 的结果赋给右数字 (rnum)。
12. 返回左数字 (lnum) 和右数字 (rnum) 相加的数值。
- 通俗地理解，V8 会提供了一个 ToPrimitive 方法，其作用是将 a 和 b 转换为原生数据类型，其转换流程如下：
    - 先检测该对象中是否存在 valueOf 方法，如果有并返回了原始类型，那么就使用该值进行强制类型转换；
    - 如果 valueOf 没有返回原始类型，那么就使用 toString 方法的返回值；
    - 如果 vauleOf 和 toString 两个方法都不返回基本类型值，便会触发一个 TypeError 的错误。
- 将对象转换为原生类型的流程图如下所示：
![ECMAScript定义加法语义](https://zmx2321.github.io/vite-blog/images/note/front/v8-note/8/8-3.png)
- 当 V8 执行 1+“2”时，因为这是两个原始值相加，原始值相加的时候，如果其中一项是字符串，那么 V8 会默认将另外一个值也转换为字符串，相当于执行了下面的操作：
    - `Number(1).toString() + "2"`
- 这里，把数字 1 偷偷转换为字符串“1”的过程也称为强制类型转换，因为这种转换是隐式的，所以如果我们不熟悉语义，那么就很容易判断错误。
- 我们还可以再看一个例子来验证上面流程，你可以看下面的代码：
```js
var Obj = {
    toString() {
      return '200'
    }, 
    valueOf() {
      return 100
    }   
  }
  Obj+3
```
- 由于需要先使用 ToPrimitive 方法将 Obj 转换为原生类型，而 ToPrimitive 会优先调用对象中的 valueOf 方法，由于 valueOf 返回了 100，那么 Obj 就会被转换为数字 100，那么数字 100 加数字 3，那么结果当然是 103 了。
- 如果我改造下代码，让 valueOf 方法和 toString 方法都返回对象，其改造后的代码如下：
```js
var Obj = {
    toString() {
      return new Object()
    }, 
    valueOf() {
      return new Object()
    }   
  }
  Obj+3
```
- 因为 ToPrimitive 会先调用 valueOf 方法，发现返回的是一个对象，并不是原生类型，当 ToPrimitive 继续调用 toString 方法时，发现 toString 返回的也是一个对象，都是对象，就无法执行相加运算了，这时候虚拟机就会抛出一个异常，异常如下所示：
```js
VM263:9 Uncaught TypeError: Cannot convert object to primitive value
    at <anonymous>:9:6
```
- 提示的是类型错误，错误原因是无法将对象类型转换为原生类型。
- 所以说，在执行加法操作的时候，V8 会通过 ToPrimitive 方法将对象类型转换为原生类型，最后就是两个原生类型相加，如果其中一个值的类型是字符串时，则另一个值也需要强制转换为字符串，然后做字符串的连接运算。在其他情况时，所有的值都会转换为数字类型值，然后做数字的相加。

## 总结
- 在 Python 中，数字和字符串相加会抛出异常，这是因为 Python 认为字符串和数字相加是无意义的，所以限制其操作。
- 在 JavaScript 中，数字和字符串相加会返回一个新的字符串，这是因为 JavaScript 认为字符串和数字相加是有意义的，V8 会将其中的数字转换为字符，然后执行两个字符串的相加操作，最终得到的是一个新的字符串。
- 在 JavaScript 中，类型系统是依据 ECMAScript 标准来实现的，所以 V8 会严格根据 ECMAScript 标准来执行。在执行加法过程中，V8 会先通过 ToPrimitive 函数，将对象转换为原生的字符串或者是数字类型，在转换过程中，ToPrimitive 会先调用对象的 valueOf 方法，如果没有 valueOf 方法，则调用 toString 方法，如果 vauleOf 和 toString 两个方法都不返回基本类型值，便会触发一个 TypeError 的错误。

## 经典题目
```js
var Obj = {
    toString() {
      return "200"
    }, 
    valueOf() {
      return 100
    }   
  }
  Obj+"3"
```
- "1003", 如果其中一项是字符串，那么 V8 会默认将另外一个值也转换为字符串
- 先调 valueOf，存在则不调 toString , Number(100).toString() + '3' = '1003'

