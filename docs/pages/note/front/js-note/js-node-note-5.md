# node定时任务

> 在实际开发项目中，会遇到很多定时任务的工作。比如：定时导出某些数据、定时发送消息或邮件给用户、定时备份什么类型的文件等等

## 1. 定时任务环境配置
- `yarn add node-schedule`

## 2. 定时任务普通用法
```js
const schedule = require('node-schedule');

const  scheduleCronstyle = ()=>{
  /**
   * 6个占位符从左到右分别代表：秒、分、时、日、月、周
   * *代表通配符 ，匹配任意，当秒是*时，表示任意秒数都触发，其它类推
   * 每分钟的第30秒触发： '30 * * * * *'
   * 每小时的1分30秒触发 ：'30 1 * * * *'
   * 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
   * 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'
   * 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'
   * 每周1的1点1分30秒触发 ：'30 1 1 * * 1'
   */

  // 每分钟的第30秒定时执行一次:
  schedule.scheduleJob('30 * * * * *',()=>{
      console.log('scheduleCronstyle:' + new Date());
  }); 
}

scheduleCronstyle();
```

## 3. 参数可以传入数值范围
```js
const task1 = ()=>{
  // 每分钟的1-10秒都会触发，其它通配符依次类推
  schedule.scheduleJob('1-10 * * * * *', ()=>{
    console.log('scheduleCronstyle:'+ new Date());
  })
}

task1()
```

## 4. 对象文本语法定时器
```js
const schedule = require('node-schedule');

function scheduleObjectLiteralSyntax(){

    // dayOfWeek
    // month
    // dayOfMonth
    // hour
    // minute
    // second
    // 每周一的下午16：11分触发，其它组合可以根据我代码中的注释参数名自由组合
    schedule.scheduleJob({hour: 16, minute: 11, dayOfWeek: 1}, function(){
        console.log('scheduleObjectLiteralSyntax:' + new Date());
    });
   
}

scheduleObjectLiteralSyntax();
```

## 5. 取消定时器
```js
var schedule = require('node-schedule');

function scheduleCancel(){

    var counter = 1;
    var j = schedule.scheduleJob('* * * * * *', function(){
        
        console.log('定时器触发次数：' + counter);
        counter++;
        
    });

    setTimeout(function() {
        console.log('定时器取消')
        j.cancel();   
    }, 5000);
    
}

scheduleCancel();
```

## 6. 定时任务其他配置方式
- 每5秒钟执行一次
```js
const https = require('https');
const schedule = require("node-schedule");

let uri = `https://www.baidu.com/`;

// 获取状态码
let httpGet = ()=> {
  https.get(uri, res=> { 
    console.log("状态码: " + res.statusCode); 
  }).on('error', err=> { 
    console.log("error: " + err.message); 
  });
}

// 实例化定时任务
let rule = new schedule.RecurrenceRule();
let times = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 51, 56];  // 每隔5秒
rule.second = times;  // 只设置秒，将times数组赋值给rule.second(秒)
schedule.scheduleJob(rule, ()=> {
  console.log(new Date);

  httpGet();  // 获取状态码
});
```


---
<br />

<font color="#666" size="5">\~End~</font>