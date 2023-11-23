# js中的数组操作

## 数组的遍历
1. for
```js
let arr = [7, 5, 9];
// console.dir(arr);

for(let i=0; i<arr.length; i++){
	console.log(arr[i]);
}
```

2. for in
```js
let arr = [7, 5, 9];

for(let key in arr){
	console.log(arr[key]);
}
```

## 数组的增加、修改、删除
### 1. 向数组末尾新增一项（push）
```js
let arr = [7, 5, 9];

arr.push(111);
console.dir(arr);
```

### 2. 返回值(长度)
```js
let arr = [7, 5, 9];

let res = arr.push(999, "qqq");
console.log(res, arr);
```

### 3. 删除数组中的最后一项（pop）
```js
let arr = [7, 5, 9];

let res = arr.pop();
console.log(res, arr);

arr.length--;
console.log(arr);
```

### 4. 删除数组中的第一项(shift)
```js
let arr = [7, 5, 9];

let res = arr.shift();
console.log(res, arr);
```

### 5. 向数组开头增加一项（unshift）
```js
let arr = [7, 5, 9];

let res = arr.unshift(1000);
console.log(res, arr);
```

## 实现增加、删除、修改(splice)
### 1. 删除
```js
let arr = [55, 88, 99, 33, 66, 44, 22];
console.log(arr);

//删除
//ary.splice(n, m) 从索引n开始，删除m个元素，把删除的内容以一个新数组的方式返回
//ary.splice(n) 从索引n开始，删除到数组末尾
//ary.splice(0)，清空数组（克隆之前的数组）
//ary.splice()未删除，返回原数组
let res = arr.splice(1, 3);
console.log(res, arr);
```
### 2. 修改
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

//splice(n, m, x),从索引n开始，删除m个，用x修改
let res = arr.splice(1, 3, 1000);
console.log(res, arr);
```

### 3. 增加
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

//splice(n, 0, x),从索引n开始，不删除，把x放在n前面
let res = arr.splice(1, 0, 1000);
console.log(res, arr);
//增加到末尾
let res = arr.splice(arr.length, 0 , 2000);
console.log(res, arr);
```

## 数组的截取和拼接(slice截取)
```js
// slice(n, m), 从索引n开始，找到索引m处，不包含m
// slice(n),从索引n开始，找到数组的末尾
// concat 把两个数组拼接到一起
```

## 数组转换成字符串
- toString
```js
// join("x"),用x分隔字符串

let arr = [55, 88, 99, 33, 66, 44, 22];
console.log(arr.join("+"));

// eval把js中字符串转换成js表达式(求和)
console.log(eval(arr.join("+")));
```

## 倒序排列（reverse）
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

let res = arr.reverse();
console.log(res);
```

## sort(从大到小排序)（按Unicode码）
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

let res = arr.sort();
console.log(res);

let res = arr.sort(function(a, b){
	// return a - b;	//从小到大排序
	// return b - a;	//从大到小排序
});

//indexOf，验证是否存在（不存在返回-1）
```

## 遍历数组forEach、map
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

arr.forEach(function(item, index){
	console.log(item, index);
});
```

## 返回的新数组每项都*10（替换原来的数组）
```js
let arr = [55, 88, 99, 33, 66, 44, 22];

let res = arr.map(function(item, index){
	return item * 10;
});
console.log(res);
```

## 使用filter判断对象数组中是否有某个值
```js
let result = group_obj.filter((item) => {
	return item.userId === 20027796
})
```

## 根据索引删除数组元素
```js
// 根据索引删除数组元素
delArrEleByIndex(arr, indexsArr) {
    indexsArr.sort(function(a, b) { return b - a});
    
    indexsArr.forEach(function(indexsArr) { arr.splice(indexsArr, 1) })

    return arr;
},
```

## js中数组倒序
`res.data.reverse()`

## 使用find遍历
```js
// 量价明细下拉当明细表有数据则禁用
judgeDetailData() {
    // 遍历明细表
    for(let item in this.purchaseDetquaInfo) {
        // 遍历字典
        this.constTradeingType.find(typeItem=> {
            if(this.purchaseDetquaInfo[item].tradingType === typeItem.value) {

            typeItem.disabled = true;
            }
            // item.disabled=true
        })
    }
},
```

## 数组去重
```js
// 数组去重
unique(arr) {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
},
```

## 前端删除列表项
```js
this.purchaseDetquaInfo = this.purchaseDetquaInfo.filter(item => {
for (let i = 0; i < this.selectionList.length; i++){
if(this.selectionList[i] === item) {
    return false
}
}

return true
})

this.clearSelections();

this.$message.success("删除成功！");
```

## 当一个方法执行完之后，再执行其他方法
```js
arr.reduce((res, url)=> {
    return new Promise(async resolve=> {
        await getList(url);  // 等这个方法执行完之后
        resolve();
    });
}, Promise.resolve());
```

## 数组中id提取出来，以逗号隔开
1. 方法一
```js
let idStr = "";

// 获取选中的id集合
for(let item in this.selectionList) {
    idStr += this.selectionList[item].id + ",";
}
// console.log(idStr);

if(idStr !== "") {
    idStr = idStr.substring(0, idStr.length-1);
}
// console.log(idStr);
```
2. 方法二
```js
let ids = []

this.selectionList.forEach(item => {
    ids.push(item.id)
})
ids = ids.join(',')
let params = {
    ids: ids
}
console.log(params);
```

## 字典类写法
```js
// dic
// select
const sellist = [
    {
        label: 'aa',
        value: 0,
    },
    {
        label: 'bb',
        value: 1,
    },
]

const aaa = (from, val)=> {
    let arr = [];

    for(let i=from; i<=val; i++) {
        arr.push({
            label: i,
            value: i,
        });
    }

    return arr;
}

export {
    sellist,
    aaa
}

import * as dic from '@/util/dic'  // 字典
console.log(dic.sellist);

dic.aaa(14, 30)
```

## 循环
```js
// 循环匹配id
for(let parItem in parList) {
    // console.log(parList[parItem]);

    this.user_info.forEach(userItem=> {
        if(parItem[parItem].user_id === userItem.id) {
        // console.log(forecastList[forecastItem].user_id + "---" + userItem.id + "---" + userItem.realName);
        parItem[parItem].user_name = userItem.realName;
        }
    })
}
```

## Array.shift() 删除数组的第一项
```js
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
var returnArr = arr1.shift();

console.log(arr1); // [2, 3, 4, 5, 6, 7, 8]
console.log(returnArr); // 1
```

## arguments 相关
```js
[].slice.call( arguments )
// 等效于
Array.prototype.slice.call( arguments )

// 因为slice内部实现是使用的this代表调用对象。那么当[].slice.call() 传入 arguments对象的时候，通过 call函数改变原来 slice方法的this指向, 使其指向arguments，并对arguments进行复制操作，而后返回一个新数组。至此便是完成了arguments类数组转为数组的目的
[].shift.call( arguments )
// 删除并拿到arguments的第一项
```

## 数组去重
```js
console.log(Array.from(new Set(monthArr)));
```

## 72. 去重
```js
unique(arr) {
    return Array.from(new Set(arr))
},
```

## 72. 数组根据值删除
```js
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
this.checkids.remove(row.ent_code)
```

## 77. 数组转字符串
```js
setArr(arr) {
    let str = ""
    arr.forEach(item=> {
    str += item + "、"
    })

    str = str.substring(0, str.length - 1);

    return str
},
```

## 4. if中判断条件
```js
// es5
if(
    type == 1 ||
    type == 2 ||
    type == 3 ||
    type == 4 ||
){
   //...
}

// es6
// ES6中数组实例方法includes
const condition = [1,2,3,4];

if( condition.includes(type) ){
   //...
}
```

## 5. 列表搜索
```js
// es5
// 搜索也要叫过滤，一般用filter来实现
const a = [1,2,3,4,5];
const result = a.filter( 
  item =>{
    return item === 3
  }
)

// es6
// find方法精确搜索，find方法中找到符合条件的项，就不会继续遍历数组，性能优化
const a = [1,2,3,4,5];
const result = a.find( 
  item =>{
    return item === 3
  }
)
```

## 6. 扁平化数组
```js
// 一个部门JSON数据中，属性名是部门id，属性值是个部门成员id数组集合，现在要把有部门的成员id都提取到一个数组集合中

// es5
const deps = {
'采购部':[1,2,3],
'人事部':[5,8,12],
'行政部':[5,14,79],
'运输部':[3,64,105],
}
let member = [];
for (let item in deps){
    const value = deps[item];
    if(Array.isArray(value)){
        member = [...member,...value]
    }
}
member = [...new Set(member)]

// es6
// 涉及到数组的扁平化处理，用ES6提供的flat方法，遇到4维、5维深度的数组，得循环嵌套循环来扁平化
// flat方法不支持IE浏览器
const deps = {
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
}
let member = Object.values(deps).flat(Infinity);
```

## every()和 some()的对比
- 相同点
  - every()和 some()这两个函数都是在 JS 中对数组进行迭代操作的，主要用于检查数组中所有元素是否都符合指定函数的测试，而且要检测数组中的所有元素。
- 不同点
  - every()是检测数组中所有元素都满足某一个指定函数的测试，只有所有元素全部满足才会返回 true，类似&&；some()是检测数组中所有元素只要有某个元素满足就返回 true，如果全部不满足才返回 false，类似||。
  - some()是一直在数组中寻找符合条件的元素值，如果数组中包含符合条件的值并且被立马找到，就直接返回 true，剩下的元素不会再去查找，也就是说不会继续迭代下去；every()是从开始在数组中查找符合条件的元素值，数组中只要有一个元素不符合条件的元素值，就直接返回 false，剩下的元素也不会再去查找，不会继续迭代下去。

  ## js 数组中的 include 方法
```js
if ([1, 2, 3].includes(type)) {
  // code
}
```

## 数组的链式操作
- 判断数组中是否包含另一个对象数组中的数据，有的话，过滤出来
- 将过滤出来的数组组装成只有名称的数组
- 将只有名称的数组转换成字符串，并用逗号分隔
```js
groupTypesOptions()
        .filter((item) => scope.row.groupTypes.includes(item.value))
        .map((item) => item.label)
        .join(','),
```