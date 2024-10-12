# js中的正则

## 正则，1-9999 最多保留一位小数
`/[1-9999]+\.\d$/g`

## 基础示例一
```js
let regexpBase = ()=> {
  console.log(/./.test("123")); 
  console.log(/1234/.test("123"));
  console.log(/[0-9]/.test("123"));
  console.log(/[^0-9]/.test("123"));
  console.log(/\d/.test("123"));
  console.log(/\W/.test("123"));
  console.log(/\d*/.test("123"));  //数字出现0次或任意次
  console.log(/\d+/.test("123"));  //数字至少出现1次
  console.log(/https?:/.test("httpss"));  //s出现0-1次
  console.log(/^1\d{10}$/.test("12345678901"));  //起始数字为1，有11个数字，以数字结尾
  console.log(/thi(c|n)k/.test("think"));
  console.log(/^(.+)@(163|126|188)\.com$/.test("aa@163.com"));  //以1到任意字符为开头，@163或126或188，并以.com为结尾
  console.log(/\d/.test("123"));
  /*let reg = new RegExp("\\d");
  console.log(reg.test("123"));*/
}
```

## 基础示例二
```js
let regexpMatch = ()=> {
  /*
    ()为捕获
    1、http,s出现1次或者多次
    2、转义，//
    3、[^\/]+表示非/的字符出现1到任意次
    4、[^\?]*表示非？的字符出现0到任意次
    5、(\/[^\?]*)?表示(\非？的字符)出现0-1次
    6、[^#]*表示非#的字符出现0到任意次
    7、(\?[^#]*)?表示(\?[^#]*)字符出现0-1次
    8、.*表示任意字符出现0到任意次
   */
  let str = 'http://blog.163.com/album?id=1#comment';
  let reg = /^(https?:)\/\/([^\/]+)(\/[^\?]*)?(\?[^#]*)?(#.*)?$/;
  let arr = str.match(reg);
  let postocol = arr[1];
  let host = arr[2];
  let pathname = arr[3];
  let search = arr[4];
  let hash = arr[5];
  let obj = {
    arr: arr, 
    postocol: postocol, 
    host: host, 
    pathname: pathname, 
    search: search, 
    hash: hash
  }
  console.log(obj);
}
```

## 基础示例三
```js
let regexpReplace = ()=> {
  let str = 'The price of tomato is 5';
  let reg = /(\d+)/;  //+表示出现1到任意次
  console.log(str.replace(reg, '$1.00'));

  let str = 'The price of tomato is 5, The price of apple is 10';
  let reg = /(\d+)/g; //作用在全局
  console.log(str.replace(reg, '$1.00'));

  let html = '<label>网址:</label><input placeholder="以http://起始">';
  console.log(html);
  html = html.replace(/[<>]/g, function(m0){
    switch(m0){
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
    }
  });
  console.log(html);
}
```

## 基础示例四
```js
let execReplace = ()=> {
  let reg = /(.)(\d+)/g;  //()为捕获，(.) 捕获任意非回车的字符，(\d+)捕获一个或多个数字，g表示作用在全局
  let scores = 'Tom $88, Nicholas ￥100, jack £38.';
  let result;
  while(result = reg.exec(scores)){
    console.log(result);
    console.log(reg.lastIndex);
    reg.lastIndex += 10;
  }
}
```

## 基础示例五
```js
let str = 'aaa 12 cc 55';
let aa = str.match(/\d+/g);
console.log(aa);
```

## 基础示例六
```js
let c_string = ()=> {
  console.log("----------------------c_string--------------------------");
  let str = "hello";
  console.log(str.length);
  console.log("charAt:  " + str.charAt(1));
  console.log("toUpperCase:  " + str.toUpperCase());
  console.log("indexOf:  " + str.indexOf("l"));
  console.log("indexOf:  " + str.indexOf("l", 3));
  console.log("substring:  " + str.substring("2"));
  console.log("substring:  " + str.substring(2, 4));
  console.log("slice:  " + str.slice(2));
  console.log("slice:  " + str.slice(2, 4));
  console.log("slice:  " + str.slice(1, -1));
  console.log("replace:  " + str.replace("hel", "ooo"));
  console.log("split:  " + str.split(""));
  console.log("split:  " + str.split("", 3));
  console.log("match:  " + str.match("ll"));
  console.log("match:  " + str.match("ll8"));
  console.log("search:  " + str.search("e"));
  console.log("search:  " + str.search("e2"));
  console.log("--------------------c_string---------------------------");
}
```

## 基础示例七
```js
let regexp = ()=> {
  console.log("-----------------------regexp-------------------------");
  let str = "this is a regexp test";

  //创建正则的两种方法
  // let reg = /regexp/;
  let reg = new RegExp("regexp");
  //常用
  console.log("常用");
  console.log("exec:   " + reg.exec(str)[0]);
  console.log("test:   " + reg.test(str));
  //通配符
  console.log("通配符(大写为反)");
  let reg = /./;
  console.log("/./(是否为空):   " + reg.test(str));

  let phone = 123456789;
  let reg = /\d/;
  let reg2 = /\D/;
  console.log("/\\d/(数字):   " + reg.test(phone));
  console.log("/\\D/(非数字):   " + reg2.test(phone));

  let reg = /\s/;
  console.log("/\\s/(是否有空白字符):   " + reg.test(str));

  let reg = /\w/;
  console.log("/\\w/(是否有字母、数字、下划线):   " + reg.test(str));

  let reg = /\bt/;
  let reg2 = /t\b/;
  console.log("/\\bt/(是否以t开头):   " + reg.test(str));
  console.log("/t\\b/(是否以t结尾):   " + reg2.test(str));
  console.log("-----------------------regexp-------------------------");

  console.log("通配符2");

  let str1 = "hello";
  let reg = /[ec]/;
  let reg2 = /[^hello]/;
  console.log("[ec](字符串中是否包含c或者e):   " + reg.test(str1));
  console.log("[^hello](字符串中是否包含非h非e非l非l非o的字符):   " + reg2.test(str1));

  let reg = /[0-9]/;
  let reg1 = /[a-z]/;
  let reg2 = /[A-Z]/;
  console.log("/[0-9]/(是否包含0-9中的数字):   " + reg.test(str));
  console.log("/[a-z]/(是否包含小写字母):   " + reg1.test(str));
  console.log("/[A-Z]/(是否包含大写写字母):   " + reg2.test(str));

  let reg = /(red|blue|green)/;
  console.log("/(red|blue|green)/(是否包含red或blue或green):   " + reg.test(str));

  console.log("通配符3");
  let reg = /i+/;
  console.log("/i+/(i出现至少一次):   " + reg.test(str));

  let reg = /i*/;
  console.log("/i*/(i包含零个或多个):   " + reg.test(str));

  let reg = /i?/;
  console.log("/i?/(i包含零个或一个):   " + reg.test(str));

  let reg = /i{2}/;
  console.log("/i{2}/(是否包含连续2个i):   " + reg.test(str));

  let reg = /i{2,}/;
  console.log("/i{2,}/(是否包含至少2个连续的i):   " + reg.test(str));

  let reg = /i{2,5}/;
  console.log("/i{2,5}/(是否包含至少2-5个连续的i):   " + reg.test(str));

  let reg = /^t/;
  console.log("/^t/(是否以t开头):   " + reg.test(str));

  let reg = /t$/;
  console.log("/^t/(是否以t结尾):   " + reg.test(str));

  console.log("修饰符")

  let reg = /T/;
  let reg2 = /T/i;
  console.log("/T/(是否有大写T):   " + reg.test(str));
  console.log("/T/i(是否存在t，对大小写不敏感):   " + reg2.test(str));

  let reg = /t/;
  let reg2 = /t/g;
  console.log("/t/(是否存在t):   " + reg.test(str));
  console.log("/t/g(全局查找从左往右，第1个t):   " + reg2.test(str));
  console.log("/t/g(全局查找从左往右，第2个t):   " + reg2.test(str));
  console.log("/t/g(全局查找从左往右，第3个t):   " + reg2.test(str));
  console.log("/t/g(全局查找从左往右，第4个t不存在):   " + reg2.test(str));

  let str2 = "aaa\nbbb";
  let reg = /^b/;
  let reg = /^b/m;
  console.log("/^b/(是否以b开头):   " + reg.test(str));
  console.log("/^b/m(换行后是否以b开头):   " + reg2.test(str));

  let reg = /^[0-9a-zA-Z_-]+@[0-9a-zA-Z_-]+\.(com|cn|org)$/;
  console.log(reg.test("123@sina.com"));
}
```

## 整数或者保留两位小数
```js
/^(\d+)*([\.](\d){1,2})?$/.test("0.111");
```

## input框只能输入纯数字
```html
<!-- onafterpaste防止用户从其它地方copy内容粘贴到输入框  -->
<input type="text" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " name="f_order" value="1"/> 

 <!--输入框只能输入字母和下横线的正则表达式  -->
<input onkeyup="this.value=this.value.replace(/[^_a-zA-Z]/g,'')" onpaste="this.value=this.value.replace(/[^_a-zA-Z]/g,'')"> 

 <!-- 输入框只能输入字母数字和下横线的正则表达式 -->
<input onkeyup="this.value=this.value.replace(/[^\w]/g,'')" onpaste="this.value=this.value.replace(/[^\w]/g,'')"> 
 <!-- 或 -->
<input onkeyup="this.value=this.value.replace(/[\W]/g,'')" onpaste="this.value=this.value.replace(/[\W]/g,'')">
```

## 正则匹配整数或小数
```js
/^[+-]?[0-9]+(\.[0-9]{1,4})?$/.test("aaa")
```

## 将字符串根据某个字符分割成数组
```js
let str = '今日平均分今日平均分今日平均分今日平均分今日平均分'
let arr = str.match(/今日平均分/g)
console.log(arr)
```