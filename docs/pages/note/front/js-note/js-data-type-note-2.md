# js中的字符串操作

## js删除字符串中指定字符最简单的办法
```js
let str = "blog.123csdn.net";
console.log(str.replace("123", ""));  // blog.csdn.net
```

## 根据需求只截取数组前三个
`trackList = trackList.slice(0, 3);`

## 截取字符串前5位并返回新数组
`trackList[item].time = trackList[item].time.substring(5);`

## js将字符串按照逗号分割
```js
let str = "a,b,c";
let m = str.split(",");
// m是个数组通过下标可以取出截取的字符串
// m[0]  取出结果为a
// m[1] 取出结果为b
// m[2] 取出结果为c
```

## js删除字符串的最后一个字符三种方法
1. substr
```js
let basic = "abc,def,ghi,";  
basic = basic.substr(0, basic.length - 1);
console.log(basic);
```

2. substring
```js
let basic = "abc,def,ghi,";  
basic = basic.substring(0, basic.length - 1); 
console.log(basic);
```

2. lastIndexOf
```js
let basic = "abc,def,ghi,";  
basic = basic.substring(0, basic.lastIndexOf(','));
console.log(basic);
```

## url字符串分割成数组并返回名称
```js
getNameArr(urlStr) {
    let fileListObj = [];

    let urlArr = urlStr.split(',');  // 将字符串以逗号分割生成数组

    // 遍历文件集
    for(let item in urlArr) {
    urlArr[item] = urlArr[item].trim();  // 去除字符串中所有空格

    // 获取每段字符串最后一个/索引
    let index = urlArr[item].lastIndexOf("\/");

    // 遍历数据
    fileListObj.push({
        name: urlArr[item].substring(index + 1, urlArr[item].length),
        url: urlArr[item]
    });
    }

    return fileListObj
}

let urlStr = "upload/contract/0/4/1322860251828117506/新建 DOC 文档.doc, upload/contract/0/4/1322860251828117506/新建 DOC 文档 (2).doc";
console.log(this.getNameArr(urlStr));
```

## 判断字符串中是否有某个值
```js
// 审批操作接口
operationApprovalStatus(params) {
    operationApproval(params).then(res=> {
    this.$message.success("操作成功", res);

    this.refreshList();  // 刷新所有列表
    }).catch(err=> {
    let errStr = err.toString();

    if(errStr.indexOf("不能转审给已处于当前审批流程中的人员") !== '-1') {
        this.turnApprovalVisible = true;
    }
    });
},
```

## 判断字符串/数量
```js
let { path } = this.$route

let res = path.match(/\//g)
let count = !res ? 0 : res.length;
console.log(count)
```

## 删除数组中null
```js
Array.prototype.remove = function(val) {
var index = this.indexOf(val);
if (index > -1) {
this.splice(index, 1);
}
};

var emp = ['abs','dsf','sdf','fd']

emp.remove('fd');
```

## 字符串数组操作
```js
pwStr.charAt(pwStr.length-1)  // 获取字符串最后一位

// 数组加逗号
pwlist.forEach((item, index)=> {
    if(index+1 < pwlist.length) {
        pwStr += item.berthId + ','
    } else {
        pwStr += item.berthId
    }
})
```

## 拼接字符串
```js
// es5
const name = '小明';
const score = 59;
let result = '';
if(score > 60){
  result = `${name}的考试成绩及格`; 
}else{
  result = `${name}的考试成绩不及格`; 
}

// es6
// ES6字符串模板可以进行运算，以及引用对象属性
const name = '小明';
const score = 59;
const result = `${name}${score > 60?'的考试成绩及格':'的考试成绩不及格'}`;
```

## 根据图片地址截取图片名称
- `src.substring(src.lastIndexOf('/') + 1, src.length)`

## js大小写
- `str.toLowerCase()` => 大写转小写
- `str.toUpperCase()` => 小写转大写

## 获取手机号后四位
```js
user.phone.slice(-4)
```