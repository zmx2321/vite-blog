# ts的常见使用
> ts官网可以打开演练场用来练习ts语法

## 类型推断
```js
// 类型注解
let str: string = 'abc'
// 或者不给值先进行预声明
let str: string
str = 'abc'
```

## 类型断言
```js
let numArr = [1, 2, 3, 4, 5]
// 这句话操作的最终结果我们断言是number类型
const result = numArr.find(item=> item > 2) as number
result * 5
```

## 基本类型综合示例以及联合类型
```js
let v1: string = 'abc'
let v2: number = 10
let v3: boolean = true
let nu: null = null
let un: undefined = undefined

// 联合类型
let v4: string | null = null
// 具体值的限定
let v5: 1 | 2 | 3 | 4 | 5 = 3
```

## 数组、元祖、枚举
```js
// 由数值组成的数组
let arr: number[] = [1, 2, 3]  
let arr1: Array<number> = [1, 2, 3]

// 元祖
let t1: [number, string, number] = [1, 'a', 3]
let t2: [number, string, number?] = [1, 'a']  // ?表示可选

// 枚举
enum MyEnum {
    A,
    B,
    C
}
console.log(myEnum.A, myEnum.B, myEnum.C)
console.log(myEnum[0])

// void - 空 - 只能被分配undefined值
// 一般用在没有返回值的函数里面
let myFn = (a: number, b: string): string=> {
    return a + b
}
// 如果没有返回值用void
let myFn = (a: number, b: string): void=> {
    console.log(a + b)
}

 // 可选参数加?(所有可选参数在尾部)
 let myFn = (a = 10, b: string, c?: boolean, ...rest: number[]): number=> {
    return 100
}

const f = myFn(20, 'abc', true, 1, 2, 3)
```

## 接口
> 通常用作对象的定义

- 我们希望一个对象都包含name和age
```js
// 规定obj对象的格式
interface ObjInterface {
    name: string,
    age: number
}

const obj: ObjInterface = {
    name: 'foo',
    age: 1
}
```

## 别名
```js
// 有多个数据可能有不同数据类型,可以自己定义规则
type MyUserName = string | number
let a: MyUserName = 'abc'
let b: MyUserName = 123
```

## 泛型
```js
// 泛型 - 表示可能是任意数据类型
// 一个通用函数
const myFn<T> = (a: T, b: T): T[]=> {
    return [a, b]
}

// 在使用的时候规定数据类型
myFn<number>(1, 2)
myFn<string>('1', '2')
myFn(1, 2)  // 这样也可以,ts有类型推断的功能
```

## 函数重载
```js
let myFn = myFn = (value: string | number): string =>{
    if(typeof value === 'string') {
        return 'name' + value
    }

    if(typeof value === 'number') {
        return 'value' + value
    }

    return 
}

myFn(1)
myFn('a')
```

## 继承
```js
interface Parent {
    prop1: string
    prop2: number
}

interface Child extends Parent {
    prop3: string
}

const myObj: Child = {
    prop1: ''
    prop2: 1
    prop1: ''
}
```

## 类
> ts对类设置了很多功能

### 类的修饰符
- 可选属性
- 属性默认值
- 私有属性
- 受保护属性
- 静态成员
```js
class Article {
    // 成员属性
    // 规定类的实例需要哪些属性
    public title: string  // 公开的可以在任意位置访问的属性,即可以在类自身内部以及类的实例(类的外部)以及继承的字类中都可以访问的属性
    content: string  // 可加可不加,不加默认是public
    aaa?: string  // 可选熟悉
    bbb = 100

    private tempData: string // 私有属性,只能在当前类的内部使用
    protected innerData: string // 受保护的属性(只能在当前类内部,或者子类中进行访问),即不能在实例中使用

    static author: string  // 静态属性,将属性设置给类本身,而不是设置给类的实例

    // 如果希望是静态的,又希望只能通过类内部访问
    // static必须在后面
    // readonly表示只读
    private static readonly author1: string = 'aaaasss' // 私有静态属性

    // 构造器 - 如果不在上面写,也可以直接写在参数里面
    // constructor(public title: string) {
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;

        Article.author1  // 只能在这里使用,且不能修改
    }
}

const a = new Article('标题', '内容')
a.tempData  // 无法访问
Article.author  // a.author无法访问

// 继承类
class B extends Article {
    constructor(title: string, content: string) {
        super(title, content)  // 继承

        this.innerData
    }
}
```

## 存取器
> get\set方法

```js
class User {
    private _password: string = ''

    // 看不到值
    get password(): string {
        return '********'
    }

    // 可以设置
    set password(newPass: string): void {
        this._password = newPass
    }
}

const u = new User();
console.log(u.password);
```

## 抽象类
- 一些主要用来规范格式的,没有实例化需求
```js
abstract class Animal {
    abstract name: string  // 抽象属性
    abstract makeSound(): void  // 抽象方法

    // 普通方法
    move(): void {
        console.log("move")
    }
}

// 继承抽象类
class Cat extends Animal {
    name: string = "Cat"
    makeSound(): void {

    }
}
```

## 类实现接口
> 通过接口规范类
```js
interface Animal{
    name: string  // 普通属性
    get sound(): string  // 存取器中的取
    makeSound(): void  // 普通方法
}

interface B {
    age: number
}

// 实现接口的类
class Dog implements Animal, B {
    name: string = 'Dog';
    age: number = 10
    get sound() {
        return ''
    }
    makeSound(): void {
        console.log('aaaa')
    }
}
```

## 泛型类
```js
class MyClass<T> {
    public value: T
    constructor(value: T) {
        this.value = value
    }

    do(input: T): void {
        console.log('1111', this.value)
    }
}

const myStr = new MyClass<string>('hello')
myStr.do('aaa')

const myNumber = new MyClass<number>(123)
myNumber.do(456)
```