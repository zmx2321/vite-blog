# js中的对象

## 对象和json
- JSON.stringify(obj)将JSON转为字符串。
```js
JSON.stringify(this.cknwContract);  // 对象转json字符串
```
- JSON.parse(string)将字符串转为JSON格式
```js
cknwContract = JSON.parse(cknwContract);  // json字符串转对象
```

## 如何判断对象是否为空
1. 将json对象转化为json字符串，再判断该字符串是否为"{}"
```js
var data = {};
var b = (JSON.stringify(data) == "{}");
alert(b);//true
```

2. for in 循环判断
```js
var obj = {};

var b = function() {
for(var key in obj) {
return false;
}
return true;
}
alert(b());//true
```

3. 使用ES6的Object.keys()方法
```js
var data = {};
var arr = Object.keys(data);
alert(arr.length == 0);//true
```

## 对象数组去重
```js
let arr = [ 
    { uid: 10002, msg: 'Roshan has fallen to the dire.' }, 
    { uid: 10003, msg: 'Hello, Li Lei. I am Pang Meimo.' } 
];
function update(record) {  
    let index = 0;  
    for(let rec of arr) {  // Search for corresponding record
    if(rec.uid == record.uid) {  // Record matched
    // Delete old record
    arr.splice(index, 1);
    }
    index++;
    }

    arr.push(record);
}

update({ uid: 10002, msg: 'Radiant victory!' });
console.log(arr);
```

```js
let person = [
    {id: 0, name: "小明"},
    {id: 1, name: "小张"},
    {id: 2, name: "小李"},
    {id: 3, name: "小孙"},
    {id: 1, name: "小周"},
    {id: 2, name: "小陈"},   
];

let obj = {};

let peon = person.reduce((cur,next) => {
    obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
    return cur;
},[]) //设置cur默认类型为数组，并且初始值为空的数组
console.log(peon);
```

## 判断对象数组中是否有值
```js
 // 判断1，2是否存在，如果存在，则返回
let depChangguiData = this.purchaseDetquaInfo.find(item => {
    return item.tradingType === 1 || item.tradingType === 2;
});
// console.log(depChangguiData);

// 如果存在常规数据
if(depChangguiData !== undefined) {
    this.dicTradingType.find(typeItem=> {
        if(parseInt(typeItem.value) === 1 || parseInt(typeItem.value) === 2) {
            typeItem.disabled = true;
        }
    });
}
```

## 取对象数组中的重复元素去重并取出
```js
let arr = [
    { name: '笔记本', value: '2', type: '1' },
    { name: '记事本', value: '3', type: '1' },
    { name: '书本', value: '3', type: '1' },
    { name: '笔本', value: '2', type: '1' },
    { name: '笔记本', value: '4', type: '1' },
    { name: '笔记本', value: '5', type: '1' }
];
let arrD = [];
const map = new Map();
arr.forEach(v => {  if (map.get(v.name) && arrD.every(vD => vD.name != v.name)) {
    arrD.push(v);
    } else {
    map.set(v.name, v);
    }
});

console.log(arrD);
```

```js
let temparr = [];
const map = new Map();

for(let j in this.grantVOData.scopeList) {
    if(this.grantVOData.scopeList[j].hasChildren) {
        this.grantVOData.scopeList[j].children.forEach(v=> {
            if(map.get(v.id) && temparr.every(vd=> vd.id !== v.id)) {
                temparr.push(v)
            } else {
                map.set(v.id, v);
            }
        });

        this.grantVOData.scopeList[j].children = [];
        this.grantVOData.scopeList[j].children = temparr;
    }
}
```

## JS如何将变量作为一个对象的Key
```js
var lastWord = 'last word';

var a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"
```

## for和switch一起使用
```js
// 字典数据
// 将字典中的值与id匹配
for(let itm in list) {
    for(let i=1; i<arr.length; i++) {
        switch(list[itm].forecast_model) {
        case i:
            list[itm].forecast_model_name = arr[i-1].label;
            break;
        }
    }
}
```

## 把已知对象提取出有值的部分转换成新的对象
### 1. 方案一
```js
// 根据已知对象动态生成es查询语句
export const getDynamicParams = paramsData=> {
    let fieldArr = [];  // 存放对象属性集合
    let n = 0;  // 计数器

    let filterArr = [];  // 存放最终查询语句
    
    // 处理对象数据并返回对象属性数量
    for(let item in paramsData) {
        if(paramsData[item]){
            // console.log(item);
            fieldArr.push(item);
            n++
        }
    }
    // console.log(n);

    // 根据对象属性数量动态生成新的对象
    for(let i=0; i<n; i++) {
        // console.log(fieldArr[i]);

        // 形成新的对象 - 匹配es查询
        filterArr.push({
            "term": {
                [fieldArr[i]]: paramsData[fieldArr[i]]  // 对象后面如果是字符串
            }
        });
    } 
    // console.log(filterArr);

    return filterArr;
};

let params = {
    "query": {
        "bool": {
        "filter": dataWareUtil.getDynamicParams(paramsData)
        }
    },
    // "size": this.defPageSize
    "size": this.defDataSize
}
// console.log(params);
```

### 2. 方案二
```js
// 根据已知对象动态生成es查询语句
export const getDynamicParams = paramsData=> {
    let filterArr = [];  // 存放最终查询语句

    for (let item in paramsData) {
        // 如果paramsData[item]为真就执行后面的方法,并return
        paramsData[item] && filterArr.push({
                                term: {
                                    [item] : paramsData[item]
                                }
                            })
    }

    // console.log(filterArr);
    return filterArr;
}

let params = {
    "query": {
        "bool": {
        "filter": dataWareUtil.getDynamicParams(paramsData)
        }
    },
    // "size": this.defPageSize
    "size": this.defDataSize
}
// console.log(params);
```

## 根据数组中的某个字段去重，返回数组
```js
delForecasList (list) {
    let obj = {}
    let arrList = list.reduce((total, item) => {
    obj[item.batch_id] ? '' : obj[item.batch_id] = true && total.push(item)
    return total
    }, [])
    return arrList
},
```

## js根据数组中对象的某个属性值进行去重
```js

var arr = [
  {
  from:'张三',
  to: '河南'
  },
  {
    from:'王二',
    to: '阿里'
  },
  {
    from:'王二',
    to: '杭州'
  },
  {
    from:'王二',
    to: '山东'
  },
]

// 有如上数组，想根据数组中的对象的from属性进行去重，如果from一样的话，只去一条。根据ES6属性编写函数代码如下：
function unique(arr1) {
  const res = new Map();
  return arr1.filter((a) => !res.has(a.from) && res.set(a.from, 1))
}
```

## 获取所有参数形成对象
```js
let aa = {}
for(let i=0; i<arguments.length; i++) {
    console.log(arguments[i])

    aa.forEach(itm=> {
        itm[arguments[i]] = ""
    })
}
console.log(aa);
```

## 两个对象数组合并
```js
val = "[{\"line\":\"11\",\"negative_data\":333,\"positive_data\":222}]"

// 导入下一步
export const daoruNext = (val, tabActive, timeArr)=> {
    let kibana_info = [];

    let objVal = JSON.parse(val)

    if(tabActive === "currentInfo") {
        kibana_info.push({
            applied_time: new getTimestamp().nowDateTime()
        })
    } else {
        for(let item in timeArr) {
            kibana_info.push({
                applied_time: timeArr[item],
            })
        }
    }

    for(let i=0; i<kibana_info.length; i++) {
        if(objVal[i]) {
            for(let itm in objVal[i]) {
                kibana_info[i][itm] = objVal[i][itm]
            }
        } else {
            if(objVal[0]) {
                for(let itm in objVal[0]) {
                    kibana_info[i][itm] = ""
                }
            }
        }
    }

    return kibana_info
}
```

## 遍历对象
```js
for(let item in this.chart1Data.data) {
    let j = parseInt(this.getNum(item))-1

    this.chart1Data.data[item] = {
        value: mbd.industry_ratio[j] === undefined ? 0 : mbd.industry_ratio[j].val*100,
        label: mbd.industry_ratio[j] === undefined ? "" : mbd.industry_ratio[j].name
    }
}

this.chart1Data.data = {
    data1: {},
    data2: {},
    data3: {},
    data4: {},
    data5: {},
}
```

## 关于取值
```js
// 从对象obj中取值
const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}

// es5
const a = obj.a;
const b = obj.b;
const c = obj.c;
const d = obj.d;
const e = obj.e;

// es6
// 用ES6的解构赋值来取值
const {a,b,c,d,e} = obj;
const f = a + d;
const g = c + e;

// es6解构自定义属性名
const {a:a1} = obj;
console.log(a1);  // 1

// 解构的对象不能为undefined、null
const {a,b,c,d,e} = obj || {};
```

## 合并数据
```js
// es5
const a = [1,2,3];
const b = [1,5,6];
const c = a.concat(b);//[1,2,3,1,5,6]

const obj1 = {
  a:1,
}
const obj1 = {
  b:1,
}
const obj = Object.assgin({}, obj1, obj2);//{a:1,b:1}

// es6
// ES6的扩展运算符
const a = [1,2,3];
const b = [1,5,6];
const c = [...new Set([...a,...b])];//[1,2,3,5,6]

const obj1 = {
  a:1,
}
const obj2 = {
  b:1,
}
const obj = {...obj1,...obj2};//{a:1,b:1}
```

## 获取对象属性值
```js
// es5
const name = obj && obj.name;

// es6
// ES6中的可选链操作符
const name = obj?.name;
```

## 添加对象属性
```js
// 当给对象添加属性时，如果属性名是动态变化的，该怎么处理

// es5
let obj = {};
let index = 1;
let key = `topic${index}`;
obj[key] = '话题内容';

// es6
// ES6中的对象属性名可以用表达式，不需要额外创建一个变量
let obj = {};
let index = 1;
obj[`topic${index}`] = '话题内容';
```

## js往对象中添加属性以及拷贝
- 1. 给对象obj1中追加obj2中数据
```js
let obj1={a:1};
let obj2={b:3,c:1}
Object.assign(obj1,obj2，..n个);  //第一个元素是要追加的对象，之后的是要添加的对象，可以传多个
console.log(obj1)  //{a:1,b:3,c:1}
```

- 2. 拷贝
```js
let obj1={a:1};
let obj2={b:3,c:1}
obj1=Object.assign(obj2);
console.log(obj1)  //{b:3,c:1}
```