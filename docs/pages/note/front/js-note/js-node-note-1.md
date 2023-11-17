# node爬虫相关

## 1. 使用express将数据显示到页面上
- `supervisor start app.js`
```js
const express = require('express')
const app = express()

const request = require('request');
const cheerio = require('cheerio');

const port = 3000

app.get('/', (req, res) => {
  // 第一个参数是报错，第二个参数是输出，第三个参数是页面的内容
  request('https://www.jikexueyuan.com', function (error, response, body) {
    // 如果没有错，并且页面的状态码是200
    if(!error && response.statusCode == 200) {
      $ = cheerio.load(body);  // 当前的$就相当于整个body的前端选择器

      var linksDom = $('.recommend-study')
      // 遍历dom集数组
      linksDom.each((index, item) => {
        // 取出title，注意这里使用了$(item)，而不是item本身
        var title = $(item).text()

        // 输出到控制台预览结果
        // console.log(title)

        res.send(title);
      })
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```

## 2. 文件流和cheerio结合
1. 使用同步方法封装
- `mkdir spider` => `cd spider`
- `npm init -y`
- `mkdir app.js`、`mkdir news`
- `yarn add request cheerio` => 安装库
- `node app.js`
```js
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const uri = 'http://sports.sina.com.cn/nba/1.shtml';

// require http会显示不支持https，所以这里只能使用request
let getNeworkData = (uri, callback)=>{
  request(uri, function (err, res, body) {
    // console.log(body);

    // 获取dom树
    // 如果没有报错，并且页面的状态码是200
    if(!err && res.statusCode == 200) {
      let $ = cheerio.load(body);

      callback($);
    } else {
      console.log(err.message)
    }
  });
}

// 封装一个请求数据的方法
getNeworkData(uri, $=>{
  $('#right a').each(function(){
    // console.log($(this).text());

    // 获取子页面链接
    let newsUrl = $(this).attr('href');
    // console.log(newsUrl);

    // 请求子页面
    getNeworkData(newsUrl, $=>{
      console.log($('#artibody').text());

      let article = $('#artibody').text();
      let timeStr = new Date().valueOf();

      fs.writeFileSync('./news/' + timeStr + '.txt', article);
    })
  })
})
```
2. 使用异步方法封装
```js
// 异步封装方法
const requestPromise = uri=> {
    return new Promise((resolve, reject)=> {
        request(uri, (err, res, body)=> {
            // resolve();
            if(res.statusCode === 200) {
                let $ = cheerio.load(body);

                // 成功的时候返回dom
                resolve($);
            } else {
                // 报错的时候抛出异常
                reject(err);
            }
        })
    });
}

// 获取结果
requestPromise(uri).then($=> {
    // 如果是正常的请求
    // console.log($.html());
    // console.log($.text());

    $('#right a').each(function(){
        // console.log($(this).text());
        // console.log($(this).attr('href'));

        getArticle($(this).attr('href'));
    })
});

// 获取文章
let getArticle = async uri=> {
    // 要等到这个函数执行完之后才拿到结果
    let $ = await requestPromise(uri); 
    // console.log($.html());

    let article = {
        name: $('.main-content.w1240 > h1').text(),
        desc: $('#artibody').text()
    }

    console.log(article);
}
```

## 3. 使用http和文件流
- 简单的输出
```js
const http = require('http');
const fs = require('fs');

let req = http.request({
    'hostname': 'nodejs.cn',
    'path': '/download/'
}, res=> {
    let arr = [];
    let str = '';

    // 获取post请求的数据需要用on
    res.on('data', buffer=> {
        arr.push(buffer);

        str += buffer;
    })

    res.on('end', ()=> {
        // console.log(str);

        fs.writeFile('download.html', str, {
            encoding: 'utf-8'
        }, err=> {
            console.log(err);
        })
    })
});

req.end();
```
- 下载图片
```js
const https = require('https');
const fs = require('fs');

let req = https.request({
    'hostname': 'zmx2321.github.io',
    'path': '/blog/images/hodgepodge/food-menu/hspg.jpg'
}, res=> {
    let arr = [];

    // 获取post请求的数据需要用on
    res.on('data', buffer=> {
        arr.push(buffer);
    })

    res.on('end', ()=> {
        // 抓取图片必须使用buffer
        // console.log(buffer);
        console.log(arr);

        let b = Buffer.concat(arr)

        fs.writeFile('test.jpg', b, ()=> {
            console.log("抓取成功");
        })
    })
});

req.end();
```
- 使用url库
```js
let str = 'https://zmx2321.github.io/blog/pages/hodgepodge/food-menu/food-menu-1.html';

let urlObj = url.parse(str);
console.log(urlObj);  // 可以将url拆解形成一个对象
```
- 封装-获取文件路径
```js
let getUrl = (sUrl, succ)=> {
    let urlObj = url.parse(sUrl);
    let httpObj = {};

    // 如果是http
    // 块级作用域，let找不到
    if(urlObj.protocol == 'http:') {
        httpObj = require('http');
    } else {
        httpObj = require('https');
    }
    // console.log(httpObj);

    let req = httpObj.request({
        'hostname': urlObj.hostname,
        'path': urlObj.path,
    }, res=> {
        let arr = [];

        res.on('data', buffer=> {
            arr.push(buffer)
        });

        res.on('end', ()=> {
            // console.log(arr);
    
            let b = Buffer.concat(arr)
            // console.log(b);

            succ(b)
        })
    });

    req.end();
    // req.on('error');
}
getUrl('https://zmx2321.github.io/blog/images/hodgepodge/food-menu/hspg.jpg', data=> {
    fs.writeFile('test.jpg', data, ()=> {
        console.log("抓取成功");
    })
});
```

## 3. node连接数据库
> `yarn add mysql`
- 连接数据库
```js
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost", //远程地址，本地MySQL是localhost
    user: "root",
    password: "root"
})

connection.connect(function (err) {
    console.log(err);
    if (err) {
        console.log("连接错误");
        return;
    }
    console.log("成功连接MySQL")
})

connection.end();
```
- 获取网上的数据,增加到数据库
```sql
-- 如果存在，删除
DROP DATABASE IF EXISTS spider_data;

-- 创建数据库
CREATE DATABASE spider_data;

-- 使用数据库
use spider_data;

-- 新闻表(news)
-- 如果存在，删除表
DROP TABLE IF EXISTS news;

CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB CHARSET=utf8;

-- 创建测试数据
INSERT INTO news(title) VALUES('测试数据');
```
```js
const request = require('request');
const cheerio = require('cheerio');
var mysql = require('mysql');

const uri = 'https://www.sina.com.cn/';

 // 创建数据库连接
let db = mysql.createConnection({
    host:     '127.0.0.1',
    user:     'root',
    password: 'root',
    database: 'spider_data'
});

// db.connect();
db.connect(function (err) {
    // console.log(err);
    if (err) {
        console.log("连接错误");
        return;
    }
    
    console.log("成功连接MySQL")
})

// require http会显示不支持https，所以这里只能使用request
let getNeworkData = (uri, callback)=>{
  request(uri, function (err, res, body) {
    // console.log(body);

    // 获取dom树
    // 如果没有报错，并且页面的状态码是200
    if(!err && res.statusCode == 200) {
      let $ = cheerio.load(body);

      callback($);
    } else {
      console.log(err.message)
    }
  });
}

getNeworkData(uri, $=>{
    // console.log($(this).text());

    let arr = [];

    $('.news_top li').each(function(){
        // console.log($(this).text());

        arr.push($(this).text());
    });

    // console.log(arr);

    let sql = "insert into news set title=?";

    arr.forEach(i=> {
        // console.log(i);

        db.query(sql, i, function(err, result) {
            if (err) throw err;
    
            if (!!result) {
                console.log('插入成功');
                console.log(result.insertId);
            } else {
                console.log('插入失败');
            }
        });
    });

    db.end();
});
```

## 4. 使用node爬取豆瓣电影
> 摘自别人的博客，用作学习和记录
```js
const superagent = require('superagent');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');

let movieURL = [] //存放链接
var movieIdex = 0  //计数
let index=3 //点击次数

getFile('img')
puppData()

// 先使用puppeteer爬取链接
async function puppData() {
    const browser = await puppeteer.launch({ headless: false, ignoreDefaultArgs: ["--enable-automation"] });
    const page = await browser.newPage();
    await page.goto(`https://movie.douban.com/tag/#/?sort=U&range=0,10&tags=&start=0`);
    await page.setDefaultNavigationTimeout(600000);
    await page.waitFor('.more');
    let timer = setInterval(async function () {//3秒点一次加载更多
        await page.click('.more');
        movieIdex++
        if (movieIdex >= index) {
            clearInterval(timer)
            let a = await page.$$eval('.list-wp>.item', e => {
                let arr = []
                for (var i = 0; i < e.length; i++) {
                    arr.push(e[i].href)
                }
                return arr
            })
            await browser.close(); //爬取链接完成，关闭无头浏览器
            movieURL.push(...a)
            fs.writeFile('b.json', JSON.stringify(movieURL), { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) { //保存在b.json
                if (err) throw err;
                fs.readFile('b.json', 'utf8', (err, doc) => {//由于怕中途出错误，所以先把链接保存到b.json，再读取b.json
                    if (err) throw err;
                    let bItem = JSON.parse(doc)
                    bItem.map((item) => {
                        getVideo(item)
                    })
                })
            })
        }
    }, 3000)
}

// 用superagent爬取电影数据
async function getVideo(url) {
    let html = await superagent.get(url);
    let $ = cheerio.load(html.text);
    let protagonist = ''
    $('#info>span').eq('2').find('a').text(function (index, item) {
        return protagonist += item + '|'
    })
   var info = {
        url: getImg($('#mainpic img').attr('src')),  //图片
        name: $('h1').find('span').text(),  //片名
        year: $('h1 .year').text(),  //时间
        grade: $('.rating_num').text(), //评分
        rating_people: $('.rating_people span').text(), //影评数
        director: $('#info>span').eq('0').find('a').text(), //导演
        scriptwriter: $('#info>span').eq('1').find('a').text(), //编剧
        protagonist, //主演
        type: $('#info>span').eq('5').text() + '|' + $('#info>span').eq('6').text(), //类型
        releaseDate: $('#info>span').eq('-5').text(),//上映日期
        min: $('#info>span').eq('-3').text(),//片长
        brief:$('#link-report span').text()//简介
    }
    fs.writeFile('a.json', JSON.stringify(info)+',', { flag: 'a', encoding: 'utf-8', mode: '0666' }, function (err) {
        if (err) throw err;
    })
}

//爬取图片
function getImg(imgUrl) {
    let name = randomString(32) + '.jpg'
    superagent
        .get(imgUrl)
        .end(function (err, sres) {
            if (err) throw err;
            fs.writeFile("./img/" + name, sres.body, "binary", function (err) {
                if (err) throw err;
            })
        })
    return name
}


//创建img文件
function getFile(file) {
    if (!fs.existsSync(file)) {
        fs.mkdirSync(file);
    }
}

//对图片重命名
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = $chars.length;
    var pwd = '';
    for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
```

## 5. superagent和request的http请求有什么区别
- Request是一个简化的http客户端，它和Python的request库很像。这个库比默认的http 模块更好用，多年来被开源社区作为开发首选
- request是将所有需要的值包在一个对象中去使用的
```js
let getTitle = ()=> {
    return new Promise((resolve, reject)=> {
        request(urlObj.uriTitle, (err, res)=> {
            if(!err && res.statusCode == 200) {
                let $ = cheerio.load(res.body);  // request使用的是html

                let title = $('table font b').text();  

                resolve(title);
            } else {
                reject("获取数据错误!");
            }
        })
    });
}

// 获取异步值
(async ()=> {
    let title = "";  // 获取标题 

    try{
        title = await getTitle();

        console.log(title);
    } catch(err) {
        console.log(err)
    }
})();
```
- 
```js
let getDetail = ()=> {
    let query = {
        rnd: '0.7895444812436259'
    }

    return new Promise((resolve, reject)=> {
        superagent.get(urlObj.uriDetail)
                  .query(query)
                  .end((err, res)=> {
                      if(!err) {
                        let $ = cheerio.load(res.text);  // superagent使用的是text

                        let detail = $.text();

                        resolve(detail);
                      } else {
                        reject("获取数据错误!");
                      }
                  });
    });
}

// 或设置请求头信息

superagent
    .post('/api/pet')
    .send({ name: 'Manny', species: 'cat' })
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(err, res){
        if (res.ok) {
            alert('yay got ' + JSON.stringify(res.body));
        } else {
            alert('Oh no! error ' + res.text);
        }
    });
```


---
<br />

<font color="#666" size="5">\~End~</font>