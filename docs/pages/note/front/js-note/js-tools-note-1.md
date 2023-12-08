# js工具库封装

## 定时刷新功能
```js
let myrefresh = ()=> {
    window.location.reload();
}

// 获取刷新时间（分钟）
let getFreshTime = (min) => {
    return 1000*60*min;
}

setTimeout('myrefresh()', getFreshTime(25));
```

## 用原生js实现带请求头下载文件
```js
// 带请求头下载附件
downLoadToken(url) {
    // 下载附件公共方法
    let createObjectURL = (object)=> {
        return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
    }

    // 使用原生xhr添加请求头
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    // xhr.open('get',"http://192.168.0.66:8092"+row.contractAccessory);  //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
    xhr.open('get', url);  //url填写后台的接口地址，如果是post，在formData append参数（参考原文地址）
      
    xhr.setRequestHeader("X-Token", sessionStorage.getItem("key"));
    xhr.responseType = 'blob';

    xhr.onload = function (e) {
        if (this.status == 200) {
            var blob = this.response;
            var filename = "附件";

            if (window.navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, filename);
            } else {
                var a = document.createElement('a');
                var url = createObjectURL(blob);
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
              }
          }
      };

      xhr.send(formData);  // 发送formdata到xhr
},
```

## 深拷贝
```js
// 深拷贝
// 做vue中前端查询，，查询时遍历深拷贝出来的数组，渲染列表的数组再赋值该数组
deepClone(obj) {
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);

    return objClone
},

// 根据交易类型查询列表
getDetquaByType(tradingType) {
    let purdequaData = [];

    // 遍历深拷贝出来的数据
    for(let item in this.purdequaSearchData ) {
    if(this.purdequaSearchData [item].tradingType === tradingType) {
        purdequaData.push(this.purdequaSearchData [item]);
    }
    }

    return purdequaData;
},

// 渲染列表
this.purchaseDetquaInfo = this.getDetquaByType(params.tradingType);
```

## 使用formData上传文件加表单
```js
let formData = new FormData();

formData.append('file', this.upload_arg.fileFile[0]);
// formData.append('guiNos', this.$route.params.guiNo);
formData.append('guiNos', this.addBannerData.guiNos);
formData.append('type', this.addBannerData.type);
formData.append('content', this.addBannerData.content);
// console.log(this.upload_arg.fileFile[0]);

console.log(formData.get("file"));

// 获取值，因为get只能获取一个值，如果是多选框，使用getAll方法
console.log(formData.getAll('guiNos'));  // 返回一个数组，获取Key为guiNos的所有值

formData.has('guiNos'); // true
formData.has('key2'); // false

formData.delete('k1');

// 获取所有数据 - 键值对
for (let keys of formData.entries()) {
    console.log(keys);
}

// 获取所有值
for (let keys of formData.values()) {
    console.log(keys);
}

let config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
};

addBanner(formData, config).then(() => {
    this.$message({
        message: "添加成功！",
        type: "success"
    });

    this.listLoading = false;

    this.addBannerVisible = false;

    this.getBannerList();
});
```

## 判断对象是否为空
```js
export const objIsEmpty = obj=> {
    if(JSON.stringify(obj) == '{}' ){
        return true;
    }

    return false;
};
```

## 选项卡异步切换
```js
// 选项卡异步切换
export const switchTab = (tab, thisTab)=> {
    // for (let [key, value] of Object.entries(this.tabRefresh)) {
    for (let [key] of Object.entries(thisTab)) {
        if (key == tab) {
            thisTab[key] = true
        } else {
            thisTab[key] = false
        }
    }
}
```

## 数组去重
```js
// 数组去重
export const unique = (arr)=> {
    return Array.from(new Set(arr))
}
```

## 去字符串所有空格
```js
// 去字符串所有空格
export const replaceSpace = str=> {
    return str.replace(/\s*/g,"");
}
```

## 去除字符串末尾逗号
```js
// 去除字符串末尾逗号
export const delComma = str=> {
    return str.replace(/,$/gi,"");
}
```

## 获取文件类型
```js
// 重写通用下载方法 - 原生
export function download(url, params, filename, status) {
  // console.log(url, params, filename)

  // 下载附件公共方法
  let createObjectURL = (object) => {
    return window.URL
      ? window.URL.createObjectURL(object)
      : window.webkitURL.createObjectURL(object);
  };

  // 使用原生xhr并添加请求头
  let xhr = new XMLHttpRequest();
  let formData = new FormData();

  // 添加formdata
  for (let item in params) {
    formData.append(item, params[item]);
  }

  /* for (let keys of formData.entries()) {
    console.log(keys);
  } */

  if (!status) {
    xhr.open("get", url);
  } else {
    xhr.open("post", url);
  }

  // 请求头
  let token = "Bearer " + getToken();
  xhr.setRequestHeader("Authorization", token);
  xhr.responseType = "blob";

  // 加载
  xhr.onload = function (e) {
    if (this.status == 200) {
      let blob = this.response;
      // console.log(blob)

      if (filename === undefined) {
        console.log("文件名为空");
      }

      // 如果文件名不存在
      if (!filename) {
        filename = "code.zip";
      } else {
        if (filename.toString().indexOf(".") === -1) {
          filename = `${filename.toString()}.zip`;
        }
      }
      console.log(filename);

      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        let a = document.createElement("a");
        let url = createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    }
  };

  xhr.send(formData); // 发送formdata到xhr
}

this.download(url, 555);
```

## 对象数组根据对象属性删除
```js
// 对象数组根据对象属性删除
removeByValue(arr, value) {
  for(var i in arr){
    if(arr[i].attrs.label === value) {
      arr.splice(i,1);
    }
  }
},
```

## 判断是否为图片
```js
// 获取路径扩展名
getFileprefix(url) {
  // 获取最后一个.的位置
  var index= url.lastIndexOf(".");
  // 获取后缀
  var ext = url.substr(index+1);

  return ext
},
// 判断是否为图片
isAssetTypeAnImage(ext) {
  return ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(ext.toLowerCase()) !== -1;
},
// 读取路径
getFileValue(row, item) {
  let url = row[item['prop']]
  let tp = ""

  // 如果有地址
  if(url) {
    if(this.isAssetTypeAnImage(this.getFileprefix(url))) {
      // 图片
      // console.log(url)
      tp = `<img src='${url}' />`
    } else {
      // 文件
      // console.log(url)
      tp = `<a href='${url}'>点击下载</a>`
    }
  }

  return tp
},
```

## 参数转对象
```js
const urlToObj = (str) => {
  let strContainer = {};
  let arrStr = str.split("&");
  arrStr.forEach((item, index, arr) => {
    console.log(item);
    let arrA = item.split("=");
    console.log(arrA);
    strContainer[arrA[0]] = arrA[1];
  });
  return strContainer;
};
```

## 时间相关
### 1. 时间戳
```js
// 设置时间戳
getNowFormate(time) {
    time = new Date();
    let year = time.getFullYear(); // 年
    let month = time.getMonth() + 1;  // 月
    let date = time.getDate();  // 日
    let hour = time.getHours();  // 时
    let minute = time.getMinutes();  // 分
    let second = time.getSeconds();  // 秒

    // 加上0
    month < 10 ? month=`0${month}` : month;  // 月
    date < 10 ? date=`0${date}` : date;  // 日
    hour < 10 ? hour=`0${hour}` : hour;  // 时
    minute < 10 ? minute=`0${minute}` : minute;  // 分
    second < 10 ? second=`0${second}` : second;  // 秒

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`
}

getNowFormate();  // 默认当前时间
```

### 2. 获取上月
```js
// 设置时间戳
export const getNowFormate = (time) => {
  time = new Date();
  let year = time.getFullYear(); // 年
  let month = time.getMonth() + 1; // 月
  let date = time.getDate(); // 日

  return `${year}-${month}-${date}`;
};

// 获取上月
export const getLastMonthArr = () => {
  let currentDate = getNowFormate();
  let currentDateArr = currentDate.split("-");
  let lastMonth = "";

  // 判断临界值
  if (currentDateArr[1] === "1") {
    currentDateArr[0] = (parseInt(currentDateArr[0]) - 1).toString();
    currentDateArr[1] = "12";
  } else {
    currentDateArr[1] = (parseInt(currentDateArr[1]) - 1).toString();
    currentDateArr[1] < 10
      ? (currentDateArr[1] = `0${currentDateArr[1]}`)
      : currentDateArr[1];
  }

  lastMonth = currentDateArr.join("-");

  return [lastMonth, currentDate];
};
```

### 3. 完整显示时间

```js
// 设置时间戳 - 显示
export const getDateTimeNowFormate = (time) => {
  time = new Date();
  let year = time.getFullYear(); // 年
  let month = time.getMonth() + 1; // 月
  let date = time.getDate(); // 日
  let hour = time.getHours(); // 时
  let minute = time.getMinutes(); // 分
  let second = time.getSeconds(); // 秒

  let day = time.getDay(); // 获取当前星期几
  let weekday = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  // console.log(weekday[day])

  // 加上0
  month < 10 ? (month = `0${month}`) : month; // 月
  date < 10 ? (date = `0${date}`) : date; // 日
  hour < 10 ? (hour = `0${hour}`) : hour; // 时
  minute < 10 ? (minute = `0${minute}`) : minute; // 分
  second < 10 ? (second = `0${second}`) : second; // 秒

  return `${year}-${month}-${date} ${hour}:${minute}:${second} ${weekday[day]}`;
};
```

## 深拷贝

```js
// 深拷贝
export const deepClone = (obj = {}) => {
  // obj是null，或者不是对象或数组，直接返回
  if (typeof obj !== "object" || obj == null) {
    // 递归里面，如果是值，直接返回
    return obj;
  }

  // 递归中如果遇到对象里面的值是对象或者数组，走下面的逻辑
  // 初始化返回结果
  let result;
  // 判断是否是数组
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  // 无论对象还是数组，都可以使用for in遍历
  for (let key in obj) {
    // 判断这个key是不是这个对象自身所拥有的属性
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归(重点)
      // obj[key]表示值
      // 递归是为了防止对象中有深层次的东西，因为你不知道要拷贝的对象中有多少层
      result[key] = deepClone(obj[key]);
    }
  }

  // 返回结果
  return result;
};
```

## 防抖和节流
### 1. 防抖

```js
// 防抖
export const debounce = (fn, delay = 500) => {
  // timer是在闭包中的 => 下面的if(timer)
  // 这样不会被外界轻易拿到 => 即不对外暴露
  // 我们在外面使用不需要关心
  // 同时也是在debounce的作用域中
  // 闭包的使用场景：函数当做返回值或者参数传入
  let timer = null;

  // 函数作为返回值，这就形成闭包了
  return function () {
    // 这里面的timer需要在它定义的作用域往上寻找
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      // 触发change事件
      // 第一个参数是改变this指向
      // 第二个参数是获取所有的参数
      // apply第二个参数开始，只接收数组
      // fn函数在执行的时候，argument传进来
      // debounce返回的函数可能会传进来一些参数
      // 面试使用fn()也没问题
      // fn()
      fn.apply(this, arguments);

      // 清空定时器
      timer = null;
    }, delay);
  };
};
```

### 2. 节流
```js
// 节流
export const throttle = (fn, delay = 100) => {
  let timer = null; // 这个timer是在闭包里面的

  // 如果不使用apply改变this指向，下面的throttle方法的参数指向这个函数
  // 不会传给下面的那个fn
  return function () {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      // 一般写一个事件，function里面都要加上event参数，即事件对象
      fn.apply(this, arguments); // 打印坐标

      timer = null;
    }, delay);
  };
};

// 判断对象为空
export const objIsEmpty = (obj) => {
  if (JSON.stringify(obj) == "{}") {
    return true;
  }

  return false;
};
```

## 获取路径扩展名
```js
// 获取路径扩展名
export const getFileprefix = (url) => {
  // 获取最后一个.的位置
  let index = url.lastIndexOf(".");
  // 获取后缀
  let ext = url.substr(index + 1);

  return ext;
};
```

## 去重

```js
// 去重
export const uniqueArr = (arr) => {
  return Array.from(new Set(arr));
};
```

## 求补集
```js
let a = new Set([1, 2, 3]);
let b = new Set([1, 2, 3, 4, 5]);
let difference = new Set([...b].filter((x) => !a.has(x)));
console.log([...difference]);
```

## 获取设备类型
```js
OSnow() {
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);

  let uaType = ""

  if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
    uaType = "win32"
  }
  if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
    uaType = "win64"
  }
  if(isMac){
    uaType = "mac"
  }

  return uaType
},
```

## 获取 zoom
```js
// 缩放
const getZoom = () => {
  let zoom =
    window.devicePixelRatio ||
    window.screen.deviceXDPI / window.screen.logicalXDPI;
  // console.log("当前浏览器zoom值", zoom)

  if (zoom != 1) {
    // console.log("系统检测到您的设备对显示进行改变，可能导致页面显示不全,请调整后打开")
    // Message.error("系统检测到您的设备对显示进行改变，可能导致页面显示不全,请调整后打开");

    // document.body.style.zoom = -0.6 * zoom + 1.55;
    document.body.style.zoom = 1 / zoom;
  } else {
    document.body.style.zoom = 1;
  }

  // console.log("调整后zoom值", document.body.style.zoom)
};

// 初始化
getZoom();

// 改变窗口大小时重新设置 rem
window.onresize = function () {
  getZoom();
};
```

## 获取月份区间
```js
// 根据年月判断天数
getMonthDay(year, month) {
  // console.log(year, month)
  const isLeapYear = year => {
    if(year/4 == 0 && year/100 != 0){
      return true ;
    } else if (year/400 == 0){
      return true ;
    } else{
      return false ;
    }
  }

  let days = 0

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break
    case 2:
      isLeapYear(year) ? days = 29 : days = 28;
  }

  // console.log(days)
  return days
},

getTitleLabel() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  parseInt(m) < 10 ? m='0'+m : m
  parseInt(d) < 10 ? d='0'+d : d

  let date0 = y + '-' + m
  let thisTimeArr = date0.split('-')
  // 上月
  let lastMonth = parseInt(thisTimeArr[1]) - 1
  parseInt(lastMonth) < 10 ? lastMonth='0'+lastMonth : lastMonth
  // console.log(lastMonth)

  date.setTime(date.getTime()-24*60*60*1000);
  let d1 = date.getDate();
  parseInt(d1) < 10 ? d1='0'+d1 : d1

  let time0Str = ""
  let timeStr = ""

  if(this.queryParams.nowDate === "" || this.queryParams.nowDate.split('-')[1] === m) {
    this.queryParams.nowDate = date0
    // console.log(d, d1)

    if(parseInt(d) === 1) {
      // 月初第一天，昨天应是上个月，判断月 1-月底
      time0Str = thisTimeArr[0] + '.' + lastMonth + '.01'
      timeStr = thisTimeArr[0] + '.' + lastMonth + '.' + this.getMonthDay(parseInt(thisTimeArr[0]), parseInt(thisTimeArr[1]) - 1)
    } else {
      time0Str = y + '.' + m + '.01'
      timeStr = y + '.' + m + '.' + d1
    }
  } else {
    let selTimeArr = this.queryParams.nowDate.split('-')
    console.log(selTimeArr)
    time0Str = selTimeArr[0] + '.' + selTimeArr[1] + '.01'
    timeStr = selTimeArr[0] + '.' + selTimeArr[1] + '.' + this.getMonthDay(parseInt(selTimeArr[0]), parseInt(selTimeArr[1]))
  }

  this.labelTitle = `【${time0Str}-${timeStr}】${this.titleStr}-`
},
```

## 使用递归思想将对象所有 null 转化成空字符串
```js
obj: {
  a: null,
  b: "",
  c: 1,
  d: ['1', '2', null],
  e: {
    e1: null,
    e2: undefined,
    e3: 1,
    e4: '123',
    e5: false,
    e6: {
      e61: [1, 2, 4, undefined, null, 3],
      e62: null,
      e63: undefined,
      e64: {
        e641: null,
        e642: "123",
        e643: true
      }
    }
  }
}

setObj(obj) {
  // 判断是否是对象或数组
  const isObj = obj=> {
    return typeof obj === 'object' && obj !== null
  }

  // 遍历
  for(let key in obj) {
    if(obj[key] == null) {
      obj[key] = ''
    }
    // 对象或者数组
    if(isObj(obj[key])) {
      this.setObj(obj[key])
    }
  }

  return obj
},
```

## 表格滚动
```js
// 表格滚动
tableScroll(tbodyDom) {
  if (tbodyDom.clientHeight >= tbodyDom.scrollHeight){
    return;
  }

  return setInterval(() => {
    // 元素自增距离顶部1像素
    tbodyDom.scrollTop += 10
    // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
    if (tbodyDom.clientHeight + tbodyDom.scrollTop == tbodyDom.scrollHeight) {
      // 重置table距离顶部距离
      tbodyDom.scrollTop = 0
    }
  }, 100)
},

dataAutoScroll() {
  this.$nextTick(()=> {
    let intervalTimer = null  // 定时器
    let tableDom = this.$refs.publicServiceTableRef.$el  // 表格dom
    let tbodyDom = tableDom.querySelector('.el-table__body-wrapper')

    // 设置滚动
    intervalTimer = this.tableScroll(tbodyDom)

    // 鼠标移入，停止滚动
    tbodyDom.onmouseover = ()=> {
      clearInterval(intervalTimer);
    };
    // 鼠标移出，继续滚动
    tbodyDom.onmouseout = ()=> {
      intervalTimer = this.tableScroll(tbodyDom)
    };
  })
},
```

## 根据 url 获取文件名
```js
getUrlsub(urlStr) {
  let file = urlStr.substring(urlStr.lastIndexOf('/') + 1, urlStr.lastIndexOf('.') );

  return file
},

this.getUrlsub(row.fileUrl)
```

## 判断纯数字

```js
!isNaN(parseFloat(value)) && isFinite(value);
```

## 检查数组中所有元素是否都小于 100 的元素
```js
const isBelow = (currentValue) => currentValue < 100; //数组中所有元素都小于100的元素
const array1 = [10, 30, 39, 99, 10, 13];
console.log(array1.every(isBelow)); // 最后输出的结果为：true eg2:检查数组中所有元素是否都大于100
function isBigEnough(element, index, array) {
  return element >= 100;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[120, 540, 180, 130, 440].every(isBigEnough); // true eg3:基于eg2的实例，改写成使用箭头函数的写法
[12, 5, 8, 130, 44].every((x) => x >= 100); // false
[120, 540, 180, 130, 440].every((x) => x >= 100); // true
```

## 检查数组中的一个元素是否为偶数
```js
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0; // 检查一个元素是否为偶数
console.log(array.some(even)); // 最后输出的结果为：true eg2:检查数组中的一个元素是否大于100
function isBiggerThan10(element, index, array) {
  return element > 100;
}
[20, 50, 80, 10, 40].some(isBiggerThan10); // false
[120, 500, 800, 10, 40].some(isBiggerThan10); // true eg3:检查判断数组中的元素是否存在某个值
var vegetables = ["cabbage", "cucumber", "eggplant", "potato"];
function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}
checkAvailability(vegetables, "tomato"); // false
checkAvailability(vegetables, "eggplant"); // true eg4:箭头函数运用于some()中，以eg2为例子来改写
[20, 50, 80, 10, 40].some((x) => x > 100); // false
[120, 500, 800, 10, 40].some((x) => x > 100); // true
```

## 数组求和
```js
var arr = [1, 5, 8, 6, 15, 78, 65, 25, 48, 55];
var sum = arr.reduce(function (total, currentValue) {
  return total + currentValue;
});
console.log(sum); //306
```

## 合并二维数组
```js
var twoArr = [
  ["mu", "zi"],
  ["dig", "big"],
  ["lucky", "jiji"],
];
var oneArr = twoArr.reduce(function (total, currentValue) {
  // console.log(total)
  return total.concat(currentValue);
});
console.log(oneArr); //["mu", "zi", "dig", "big", "lucky", "jiji"]
```

## 统计一个数组中有多少个不重复的单词
```js
// 不用reduce时：
var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];
function getWordCnt() {
  var obj = {};
  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i];
    obj[item] = obj[item] + 1 || 1;
  }
  return obj;
}
console.log(getWordCnt()); //{apple: 2, orange: 3, pear: 1}
// 用reduce时：
var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];
function getWordCnt() {
  return arr.reduce(function (prev, next) {
    prev[next] = prev[next] + 1 || 1;
    return prev;
  }, {});
}
console.log(getWordCnt()); //{apple: 2, orange: 3, pear: 1}
```

## 判断数组中所有内容都是数字
- `if (!values.every((value) => isNaN(value)))`

## js 判断字符串中某字符出现次数
```js
isSingle(str){
  return (str.match(/-/g) || []).length === 1
},
```

## js 判断中文
```js
isChinese(str){
  let reg = new RegExp("[\\u4E00-\\u9FFF]+","g")

  return reg.test(str)
},
```

## 删除对象数组中指定项
```js
ruleForm.value.storeBusinessList.splice(
  ruleForm.value.storeBusinessList.indexOf(item),
  1
);
```

## 对象数组去重
```js
// 数组去重
const setArr = (arrObj) => {
  let result = [];
  let obj = {};
  for (let i = 0; i < arrObj.length; i++) {
    if (!obj[arrObj[i].id]) {
      result.push(arrObj[i]);
      obj[arrObj[i].id] = true;
    }
  }
  return result;
};
```

## map 数组构造
```js
goodGroupParams.sizeList = goods.map((item) => ({
  id: item.goodsId,
  price: item.price,
}));
```

## 判断数组对象中某个属性的值是否为空
```js
// 判断数组对象中某个属性的值是否为空
const arrPropIsEmpty = (arr, prop) => {
  if (arr) {
    let _arr = [];
    arr.forEach((item) => {
      console.log(item[prop]);
      _arr.push(item[prop]);
    });
    console.log(arr, _arr);
    if (_arr.some((val) => val === "" || !val)) {
      console.log("有空值，不通过"); // true
      return true;
    }
    console.log("无空值，通过"); // false
    return false;
  }
};

if (
  ruleForm.value.sizeList &&
  arrPropIsEmpty(ruleForm.value.sizeList, "price")
) {
  ElMessage.warning("规格价格不能为空");
}
```

## 原生控制选项卡样式
```js
const toggleClass = (prevNode, myClass, selectClass) => {
  let prevNodeList = document.querySelectorAll(myClass);
  prevNodeList.forEach((item) => {
    item.classList.remove(selectClass);
  });

  prevNode.classList.add(selectClass);
};

toggleClass(prevNode, ".qr_list", "is_select");
```

## 如果数组中不存在某数据，添加一个
```js
if (!ruleForm.value.businessIdList.includes(ruleForm.value.businessId)) {
  ruleForm.value.businessIdList.push(ruleForm.value.businessId);
}
```

## 循环嵌套筛选
```js
data.forEach((item) => {
  item.propList0 = JSON.parse(JSON.stringify(item.propList));

  item.attrId.forEach((jItem) => {
    // console.log(jItem)

    item.propList = item.propList0.filter((qItem) => qItem.id === jItem);
  });

  delete item.propList0;
});
```

## 获取浏览器 url 名称
```js
if (typeof window !== "undefined") {
  const path = window.location.pathname;
  fileName.value = path.split("/")[path.split("/").length - 1].split(".")[0];

  console.log("File: " + fileName.value);
}
```

## 判断详情数据是否在下拉列表中存在
```js
// 判断详情数据是否在下拉列表中存在
export const isHasIds = (dataNotArr = true, optionsArr, dataArr, optionsField = 'id', dataField = 'id') => {
  if (!dataNotArr) {
    // console.log('是否是多选数据', dataArr)

    let optionIds = optionsArr.map((item) => item[optionsField])

    let isHasId = []
    let unUseId = []

    dataArr.forEach((item) => {
      if (typeof item === 'string') {
        if (!optionIds.includes(item)) {
          unUseId.push(item)
        }
      } else {
        if (!optionIds.includes(item[dataField])) {
          unUseId.push(item[dataField])
        }
      }
      isHasId.push(optionIds.includes(item[optionsField]))
    })
    // console.log(isHasId)

    // 如果有false，表示有数据不通过，需要提示 - 有一个false返回true
    // console.log(isHasId.some((item) => item === false))
    if (isHasId.some((item) => item === false)) {
      // console.log('需要提示，失效的id是', unUseId.join(','))
      return unUseId.join(',')
    }
  } else {
    // 单选

    // 重新赋值
    dataField = dataArr
    optionsField = optionsArr
    optionsArr = dataNotArr
    // console.log('000', dataField, optionsField, optionsArr)

    // return optionsArr.some((item) => item[dataArr] === optionsField)
    return optionsArr.some((item) => item[optionsField] === dataField)
  }
}

import { ElMessageBox } from 'element-plus'
import { isHasIds } from '@/utils/validate'

let { roleDTOS } = ruleForm.value
let unUseIdStr = isHasIds(false, userRolesOptions.value, roleDTOS)
if (unUseIdStr) {
  ElMessageBox.confirm(`您选中的角色「${unUseIdStr}」被停用，请联系管理员`, '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {})
    .catch(() => {})
}

let checkPrintIds = isHasIds(printerOptions.value, 'guid', ruleForm.value.printerGuid)
  if (!checkPrintIds) {
    ElMessageBox.confirm(`您选中的打印机「${ruleForm.value.printerGuid}」被停用，请联系管理员`, '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {})
      .catch(() => {})
  }

  let checkBusinessIds = isHasIds(businessOptions.value, 'id', ruleForm.value.businessId)
  // console.log(checkGuidIds)
  if (!checkBusinessIds) {
    ElMessageBox.confirm(`您选中的营业点「${ruleForm.value.businessId}」被停用，请联系管理员`, '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {})
      .catch(() => {})
  }

  let unUseBusinessIdIdStr = isHasIds(false, businessOptions.value, ruleForm.value.businessIdList)
  if (unUseBusinessIdIdStr) {
    ElMessageBox.confirm(`您选中的归属营业点「${unUseBusinessIdIdStr}」被停用，请联系管理员`, '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {})
      .catch(() => {})
  }

  let unUseAreaIdIdStr = isHasIds(false, areaOptions.value, ruleForm.value.areaIdList)
  if (unUseBusinessIdIdStr) {
    ElMessageBox.confirm(`您选中的餐区「${unUseAreaIdIdStr}」被停用，请联系管理员`, '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {})
      .catch(() => {})
  }
```

## map转对象数组
```js
export function mapToOptions(map) {
  let arr = Array.from(map).map((item) => {
    return {
      label: item[1],
      value: item[0]
    }
  })

  return [
    {
      label: '全部',
      value: ''
    },
    ...arr
  ]
}
```