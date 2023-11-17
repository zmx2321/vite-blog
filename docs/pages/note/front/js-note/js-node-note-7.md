# 当node爬虫遇到登陆和验证码

## 1. node模拟登陆开源中国(无验证码)
> 首先登录获取cookie，之后携带cookie请求首页
```js
const cheerio=require("cheerio");
const request = require('request');

const CryptoJS = require('crypto-jS');  // 加密

let config = {
    loginUrl: 'https://www.oschina.net/action/user/hash_login?from=',  // 登录地址
    homeUrl: 'https://www.oschina.net/', // 首页
    username: [用户名],
    password: [密码]
}

/**
* @desc 模拟登录开源中国
*/
let loginOschina = ()=> {
  let option = {
    url: config.loginUrl,
    method: 'POST',
    form: {
      email: config.username,
      pwd: CryptoJS.SHA1(config.password).toString(),
      verifyCode: '',
      ave_login: '1'
    }
  }
  request(option, (err, req, res) => {
    // console.log(req.headers['set-cookie']);  // 获取cookie ！！！重要
    let option = {
      url: config.homeUrl,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
        'Cookie': req.headers['set-cookie'],
      }
    }
    request(option, (err, req, res) => {
      $ = cheerio.load(res);
      let name = $('#userSidebar > div > h3').text()

      if (name) {
        console.log('登录成功，昵称为:', name)
      }
    })
  })
}

loginOschina(config)
```


---
<br />

<font color="#666" size="5">\~End~</font>