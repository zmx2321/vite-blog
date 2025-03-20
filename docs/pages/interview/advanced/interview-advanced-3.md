# 知识-属性描述符

## 基本概念
- 属性描述符：用来描述对象属性的特性
- 数据描述符：包含`value`、`writable`、`configurable`、`enumerable`四个属性

## 示例
```js
const obj = {
  name: 'zhangsan',
  age: 18
}
// 获取自身属性的描述符
const desc = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(desc)  // 该属性的描述
/* {
  value: 'zhangsan',  // 这个属性的值
  writable: true,  // 这个属性的值是否可以被修改
  enumerable: true,  // 这个属性是否可以被枚举(遍历)
  configurable: true  // 这个属性描述符是否可以被修改
} */
```

## 属性描述符是可以被修改的
> `Object.defineProperty`重新定义某一个属性的描述符
> 他不是直接修改，而是重新定义
> 他不是vue特有的,只是vue用到了这个方法
```js
const obj = {
  name: 'zhangsan',
  age: 18
}
// 获取自身属性的描述符
const desc = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(desc)  // 该属性的描述
/* {
  value: 'zhangsan',  // 这个属性的值
  writable: true,  // 这个属性的值是否可以被修改
  enumerable: true,  // 这个属性是否可以被枚举(遍历)
  configurable: true  // 这个属性描述符是否可以被修改
} */
// 修改描述符
Object.defineProperty(obj, 'name', {
  value: 'lisi',
  writable: false,
  enumerable: false,
  configurable: false
})
```

## defineProperty的访问器
```js
let obj = {}

Object.defineProperty(obj, 'name', {
  /* value: 'zhangsan',
  // writable: false,  // 默认值是true
  // enumerable: false,  // 默认值是false
  // configurable: false  // 默认值是false */

  // 读取器
  get() {},

  // 设置器
  set(val) {}
})

// obj.name => 调用get
// obj.name = 'lisi' => 调用set => set(lisi)
```

## Object相关方法
> `Object.defineProperty`重新定义某一个属性的描述符
> `Object.defineProperties`重新定义多个属性的描述符
> `Object.getOwnPropertyDescriptors`获取一个对象的所有自身属性的描述符
> `Object.preventExtensions`禁止一个对象添加新的属性
> `Object.seal`禁止一个对象添加新的属性，并且所有现有属性标记为不可配置
> `Object.freeze`禁止一个对象添加新的属性，并且所有现有属性标记为不可配置，同时所有现有属性标记为不可写
> `Object.isExtensible`判断一个对象是否可以添加新的属性
> `Object.isSealed`判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置
> `Object.isFrozen`判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置，同时所有现有属性标记为不可写
> `Object.keys`获取一个对象的所有自身可枚举属性的键名
> `Object.getOwnPropertyNames`获取一个对象的所有自身属性的键名
> `Object.getOwnPropertySymbols`获取一个对象的所有自身属性的键名
> `Object.values`获取一个对象的所有自身可枚举属性的键值
> `Object.entries`获取一个对象的所有自身可枚举属性的键值对
> `Object.fromEntries`将一个键值对列表转换为一个对象
> `Object.assign`将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
> `Object.create`创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
> `Object.setPrototypeOf`设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或 null
> `Object.getPrototypeOf`返回指定对象的原型（内部[[Prototype]]属性的值）
> `Object.is`判断两个值是否为同一个值
> `Object.isExtensible`判断一个对象是否可以添加新的属性
> `Object.isSealed`判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置
> `Object.isFrozen`判断一个对象是否可以添加新的属性，并且所有现有属性标记为不可配置，同时所有现有属性标记为不可写