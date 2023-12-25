# node爬虫案例-定时发送邮件

<!-- ## 1. 案例一 -->

## 1. 说明
1. 主要实现功能
  - 利用node实现网页爬取数据
  - 利用模板引擎制作html邮件
  - 利用node发送电子邮件
  - 利用node实现定时任务
2. 项目依赖
> 所有依赖均在[npm官网](https://www.npmjs.com)中可以找到
  - superagent => 向服务器发起http请求
  - cheerio => 解析html
  - art-template => 模板引擎
  - nodemailer => 发送邮件
  - node-schedule => 定时任务
3. 需要抓取的页面
  - `http://tianqi.moji.com/`
  - `http://wufazhuce.com/`

## 2. 环境安装
- 创建文件夹及初始化
  - `mkdir nodemail`
  - `npm init -y`
- 安装所有依赖包
  - `yarn add superagent cheerio art-template nodemailer node-schedule`
  - 查看文件目录 => `ls` 或 `ls -al`
  - 打开文件 => `start package.json`

## 3. 处理日期格式
- `main.js`
```js
// 获取时间信息
let getDayDate = ()=> {
    // 由于很多数据要提前准备好，才能渲染到页面，最终才能发送
    // 这里就使用promise
    return new Promise((resolve, reject)=> {
        // 现在的时间
        let today = new Date();
        // 设定的时间(2019-5-20)
        let anniversary = new Date('2019-05-20');

        // 计算时间差毫秒值
        let count = today - anniversary;
        // 时间格式转换（转换为天并向上取整）
        count = Math.ceil(count/1000/60/60/24);
        // count = Math.floor(count/1000/60/60/24); // 向下取整
        // console.log(count);

        let format = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`

        let dayData = {
            count,
            format
        }
        // console.log(dayData);
        resolve(dayData);
    }).catch(err=> {
        reject(err);
    });
}

getDayDate();  // 获取时间信息
```

## 4. 请求墨迹天气获取数据
```js
// 向服务器发起http请求
const superagent = require('superagent');  
const cheerio = require('cheerio');

// 请求墨迹天气获取数据
let getMojiData = ()=> {
    // 发起http请求
    superagent.get('https://tianqi.moji.com/weather/china/zhejiang/xiaoshan-district').end((err, res)=> {
        // 如果可以成功返回
        if(err) {
            return console.log("数据请求失败，请检查路径");
        }

        // console.log(res.text);

        // 把字符串解析成html，并可用jquery核心选择器获取内容
        let $ = cheerio.load(res.text);

        // 获取图标
        let icon = $('.wea_weather span img').attr('src');
        // console.log(icon);

        // 获取天气
        let weather = $('.wea_weather b').text();
        // console.log(weather);

        // 获取温度
        let temperature = $('.wea_weather em').text();
        // console.log(temperature);

        // 获取提示
        let tip = $('.wea_tips em').text();
        // console.log(tip);

        let mojiData = {
            icon,
            weather, 
            temperature,
            tip
        }
        console.log(mojiData);
    });
}
getMojiData();  // 请求墨迹天气获取数据
```

## 5. 请求one网站
> 该网站每天会出一张图和一句话
```js
// 请求one抓取数据
let getOneData = ()=> {
    superagent.get("http://wufazhuce.com/").end((err, res)=> {
        // 如果可以成功返回
        if(err) {
            return console.log("数据请求失败，请检查路径");
        }
        // console.log(res.text);

        // 把字符串解析成html，并可用jquery核心选择器获取内容
        let $ = cheerio.load(res.text);

        // 获取图片
        let onePic = $('.carousel-inner .item.active img').attr('src');
        // let onePic = $('#carousel-one > div > div.item img').eq(0).attr('src');
        console.log(onePic);

        // 获取文本
        let oneTxt = $('.carousel-inner .item.active .fp-one-cita a').text();
        // let oneTxt = $('.carousel-inner .item .fp-one-cita a').eq(0).text();
        console.log(oneTxt);

        let oneData = {
            onePic, 
            oneTxt
        }

        console.log(oneData);
    });
}
getOneData();
```

## 5. 等待数据请求完成
> 需要注意执行顺序,将所有方法全部改成promise的方式，并使用async和await控制
```js
const superagent = require('superagent');  // 向服务器发起http请求
const cheerio = require('cheerio');

// 获取时间信息
let getDayDate = ()=> {
    // 由于很多数据要提前准备好，才能渲染到页面，最终才能发送
    // 这里就使用promise
    return new Promise((resolve, reject)=> {
        // 现在的时间
        let today = new Date();
        // 设定的时间(2019-5-20)
        let anniversary = new Date('2019-05-20');

        // 计算时间差毫秒值
        let count = today - anniversary;
        // 时间格式转换（转换为天并向上取整）
        count = Math.ceil(count/1000/60/60/24);
        // count = Math.floor(count/1000/60/60/24); // 向下取整
        // console.log(count);

        let format = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`

        let dayData = {
            count,
            format
        }
        // console.log(dayData);

        resolve(dayData);  // 返回数据
    });
}
// getDayDate();  // 获取时间信息

// 请求墨迹天气获取数据
let getMojiData = ()=> {
    return new Promise((resolve, reject)=> {
        // 发起http请求
        superagent.get('https://tianqi.moji.com/weather/china/zhejiang/xiaoshan-district').end((err, res)=> {
            // 如果可以成功返回
            if(err) {
                return console.log("数据请求失败，请检查路径");
            }

            // console.log(res.text);

            // 把字符串解析成html，并可用jquery核心选择器获取内容
            let $ = cheerio.load(res.text);

            // 获取图标
            let icon = $('.wea_weather span img').attr('src');
            // console.log(icon);

            // 获取天气
            let weather = $('.wea_weather b').text();
            // console.log(weather);

            // 获取温度
            let temperature = $('.wea_weather em').text();
            // console.log(temperature);

            // 获取提示
            let tip = $('.wea_tips em').text();
            // console.log(tip);

            let mojiData = {
                icon,
                weather, 
                temperature,
                tip
            }
            // console.log(mojiData);

            resolve(mojiData);
        });
    });
}
// getMojiData();  // 请求墨迹天气获取数据

// 请求one抓取数据
let getOneData = ()=> {
    return new Promise((resolve, reject)=> {
        superagent.get("http://wufazhuce.com/").end((err, res)=> {
            // 如果可以成功返回
            if(err) {
                return console.log("数据请求失败，请检查路径");
            }
            // console.log(res.text);

            // 把字符串解析成html，并可用jquery核心选择器获取内容
            let $ = cheerio.load(res.text);

            // 获取图片
            let oneImg = $('.carousel-inner .item.active img').attr('src');
            // let onePic = $('#carousel-one > div > div.item img').eq(0).attr('src');
            // console.log(oneImg);

            // 获取文本
            let oneTxt = $('.carousel-inner .item.active .fp-one-cita a').text();
            // let oneTxt = $('.carousel-inner .item .fp-one-cita a').eq(0).text();
            // console.log(oneTxt);

            let oneData = {
                oneImg, 
                oneTxt
            }
            // console.log(oneData);

            resolve(oneData);
        });
    });
}
// getOneData();

// 通过模板引擎替换html
// 需要注意执行顺序
let renderTemplate = async ()=> {
    // 在方法里面涉及到数据请求(异步)，会造成数据还没拿到，就开始渲染dom了
    // 使用async和await
    // 如果要用await调用得到函数，那么该函数必须返回的是promise对象

    // 获取日期 - 等待请求完成之后才进行赋值
    let dayDate = await getDayDate();

    // 获取墨迹天气 - 等待请求完成之后才进行赋值
    let mojiData = await getMojiData();

    // 获取one数据 - 等待请求完成之后才进行赋值
    let oneData = await getOneData();

    // 所有数据获取成功之后，才进行模板引擎数据的替换
    console.log(dayDate);
    console.log(mojiData);
    console.log(oneData);
}
renderTemplate();
```

## 6. 通过模板引擎替换html
> `art-template`
```js
const template = require('art-template');  // 导入模板引擎
const path = require('path');

// 通过模板引擎替换html
// 需要注意执行顺序
let renderTemplate = async ()=> {
    // ......
    // 代码见上

    // 所有数据获取成功之后，才进行模板引擎数据的替换
    /* console.log(dayDate);
    console.log(mojiData);
    console.log(oneData); */

    // 使用模板方法
    let html = template(path.join(__dirname, './res.html'), {
        // 在这里定义的值,在模板文件可以直接使用双花括号的形式引用
        // test: '测试'
        dayDate,
        mojiData,
        oneData
    })
    console.log(html);
}
renderTemplate();
```
- `res.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>res</title>
</head>
<body>
    <section id="date">
        {{ dayDate.count }}天
        {{ dayDate.format }}
    </section>
    <section id="weather">
        <img src="{{mojiData.icon}}" alt="">
        {{ mojiData.temperature }}
        {{ mojiData.tip }}
    </section>
    <section id="tips">
        <img src="{{oneData.oneImg}}" alt="">
        {{ oneData.oneTxt }}
    </section>
</body>
</html>
```

## 7. 使用node发送邮件
> nodemailer
```js
const nodemailer = require('nodemailer');

// 通过模板引擎替换html
// 需要注意执行顺序
let renderTemplate = async ()=> {
  // ......
  代码见上

  // 使用模板方法
  return new Promise((resolve, reject)=> {
      let html = template(path.join(__dirname, './res.html'), {
        // 在这里定义的值,在模板文件可以直接使用双花括号的形式引用
        // test: '测试'
        dayDate,
        mojiData,
        oneData
      })
      // console.log(html);

      resolve(html);  // html作为成功之后的参数
  });
}

// 发送电子邮件
let sendNodeMail = async ()=> {
    // 必须要等数据全部渲染完成之后，才往后面走
    let html = await renderTemplate();
    // console.log(html);

    // 使用默认SMTP传输，创建可重用邮箱对象
    let transporter = nodemailer.createTransport({
        host: "smtp.163.com",  // 网易邮箱SMTP服务器
        port: 465,
        secure: true, // 开启加密协议，需要使用465端口(网易ssl协议)
        auth: {
            user: 'xxxx@163.com', // 邮箱地址
            pass: "JXOKFCNHYHGKGSRE", // 客户端授权密码(网易邮箱界面、设置、开启IMAP/SMTP)
        },
    });

    // 设置电子邮件数据
    let mailOptions = {
        from: "'xxxx' <xxxx@163.com>",  // 发件人邮箱
        to: 'xxxx@qq.com',  // 收件人列表(可以用逗号隔开)
        subject: '测试邮件',
        html: html  // html内容
    }

    // 发送邮件
    transporter.sendMail(mailOptions, (err, info={})=> {
        if(err) {
            console.log(err);
            sendNodeMail();  // 再次发送
        }

        console.log('邮件发送成功', `${info.response}`);
        console.log('等待下一次发送');
    });
}
sendNodeMail();
```

## 8. 设置定时任务
```js
// 创建定时任务
// 定时每天发送(每天5时20分14秒发送邮件)
(()=> {
    // 每天5时20分14秒
    schedule.scheduleJob('14 20 5 * * *',()=>{
        // 开始发送邮件
        console.log(new Date());
        console.log("===================");
        console.log("====开始发送邮件====");
        console.log("===================");

        sendNodeMail();
    }); 
})();
```

## 9. 全部代码
```js
const superagent = require('superagent');  // 向服务器发起http请求
const cheerio = require('cheerio');

const template = require('art-template');  // 导入模板引擎
const path = require('path');

const nodemailer = require('nodemailer');  // 邮件

const schedule = require("node-schedule");  // 定时任务

// 工具集
/* let util = {
    // 时间戳
    dateFormate(now) {
        let year = now.getFullYear(); // 年
        let month = now.getMonth() + 1;  // 月
        let date = now.getDate();  // 日

        // 加上0
        month < 10 ? month=`0${month}` : month;  // 月
        date < 10 ? date=`0${date}` : date;  // 日

        return `${year}-${month}-${date}`
    },

    // 计算时间
    getCount() {
        // 现在的时间
        let today = new Date();
        // 设定的时间(2019-5-20)
        let anniversary = new Date('2019-05-20');

        // 计算时间差毫秒值
        let count = today - anniversary;
        // 时间格式转换（转换为天并向上取整）
        count = Math.ceil(count/1000/60/60/24);
        // count = Math.floor(count/1000/60/60/24); // 向下取整
        // console.log(count);

        return count;
    }
} */

// 获取时间信息
let getDayDate = ()=> {
    // 由于很多数据要提前准备好，才能渲染到页面，最终才能发送
    // 这里就使用promise
    return new Promise((resolve, reject)=> {
        // 现在的时间
        let today = new Date();
        // 设定的时间(2019-5-20)
        let anniversary = new Date('2019-05-20');

        // 计算时间差毫秒值
        let count = today - anniversary;
        // 时间格式转换（转换为天并向上取整）
        count = Math.ceil(count/1000/60/60/24);
        // count = Math.floor(count/1000/60/60/24); // 向下取整
        // console.log(count);

        let format = `${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`

        let dayData = {
            count,
            format
        }
        // console.log(dayData);

        resolve(dayData);  // 返回数据
    });
}
// getDayDate();  // 获取时间信息

// 请求墨迹天气获取数据
let getMojiData = ()=> {
    return new Promise((resolve, reject)=> {
        // 发起http请求
        superagent.get('https://tianqi.moji.com/weather/china/zhejiang/xiaoshan-district').end((err, res)=> {
            // 如果可以成功返回
            if(err) {
                return console.log("数据请求失败，请检查路径");
            }

            // console.log(res.text);

            // 把字符串解析成html，并可用jquery核心选择器获取内容
            let $ = cheerio.load(res.text);

            // 获取图标
            let icon = $('.wea_weather span img').attr('src');
            // console.log(icon);

            // 获取天气
            let weather = $('.wea_weather b').text();
            // console.log(weather);

            // 获取温度
            let temperature = $('.wea_weather em').text();
            // console.log(temperature);

            // 获取提示
            let tip = $('.wea_tips em').text();
            // console.log(tip);

            let mojiData = {
                icon,
                weather, 
                temperature,
                tip
            }
            // console.log(mojiData);

            resolve(mojiData);
        });
    });
}
// getMojiData();  // 请求墨迹天气获取数据

// 请求one抓取数据
let getOneData = ()=> {
    return new Promise((resolve, reject)=> {
        superagent.get("http://wufazhuce.com/").end((err, res)=> {
            // 如果可以成功返回
            if(err) {
                return console.log("数据请求失败，请检查路径");
            }
            // console.log(res.text);

            // 把字符串解析成html，并可用jquery核心选择器获取内容
            let $ = cheerio.load(res.text);

            // 获取图片
            let oneImg = $('.carousel-inner .item.active img').attr('src');
            // let onePic = $('#carousel-one > div > div.item img').eq(0).attr('src');
            // console.log(oneImg);

            // 获取文本
            let oneTxt = $('.carousel-inner .item.active .fp-one-cita a').text();
            // let oneTxt = $('.carousel-inner .item .fp-one-cita a').eq(0).text();
            // console.log(oneTxt);

            let oneData = {
                oneImg, 
                oneTxt
            }
            // console.log(oneData);

            resolve(oneData);
        });
    });
}
// getOneData();

// 通过模板引擎替换html
// 需要注意执行顺序
let renderTemplate = async ()=> {
    // 在方法里面涉及到数据请求(异步)，会造成数据还没拿到，就开始渲染dom了
    // 使用async和await
    // 如果要用await调用得到函数，那么该函数必须返回的是promise对象

    // 获取日期 - 等待请求完成之后才进行赋值
    let dayDate = await getDayDate();

    // 获取墨迹天气 - 等待请求完成之后才进行赋值
    let mojiData = await getMojiData();

    // 获取one数据 - 等待请求完成之后才进行赋值
    let oneData = await getOneData();

    // 所有数据获取成功之后，才进行模板引擎数据的替换
    /* console.log(dayDate);
    console.log(mojiData);
    console.log(oneData); */

    // 使用模板方法
    return new Promise((resolve, reject)=> {
        let html = template(path.join(__dirname, './res.html'), {
            // 在这里定义的值,在模板文件可以直接使用双花括号的形式引用
            // test: '测试'
            dayDate,
            mojiData,
            oneData
        })
        // console.log(html);

        resolve(html);  // html作为成功之后的参数
    });
}
// renderTemplate();

// 发送电子邮件
let sendNodeMail = async ()=> {
    // 必须要等数据全部渲染完成之后，才往后面走
    let html = await renderTemplate();
    // console.log(html);

    // 使用默认SMTP传输，创建可重用邮箱对象
    let transporter = nodemailer.createTransport({
        host: "smtp.163.com",  // 网易邮箱SMTP服务器
        port: 465,
        secure: true, // 开启加密协议，需要使用465端口(网易ssl协议)
        auth: {
            user: 'xxxx@163.com', // 邮箱地址
            pass: "xxxxxx", // 客户端授权密码(网易邮箱界面、设置、开启IMAP/SMTP)
        },
    });

    // 设置电子邮件数据
    let mailOptions = {
        from: "'xxxx' <xxxx@163.com>",  // 发件人邮箱
        to: 'xxxx@qq.com',  // 收件人列表(可以用逗号隔开)
        subject: '测试邮件',
        html: html  // html内容
    }

    // 发送邮件
    transporter.sendMail(mailOptions, (err, info={})=> {
        if(err) {
            console.log(err);
            sendNodeMail();  // 再次发送
        }

        console.log('邮件发送成功', `${info.response}`);
        console.log('等待下一次发送');
    });
}
// sendNodeMail();

// 创建定时任务
// 定时每天发送(每天5时20分14秒发送邮件)
(()=> {
    // 每天5时20分14秒
    schedule.scheduleJob('14 20 5 * * *',()=>{
        // 开始发送邮件
        console.log(new Date());
        console.log("===================");
        console.log("====开始发送邮件====");
        console.log("===================");

        sendNodeMail();  // 发送电子邮件
    }); 
})();
```