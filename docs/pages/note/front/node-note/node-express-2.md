# express登陆和注册

## 1. 创建用户表
- sql
```sql
-- 用户表(user)
-- 如果存在，删除表
DROP TABLE IF EXISTS user;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `userpic` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 创建测试数据
INSERT INTO `user`(`username`, `userpic`, `password`, `phone`, `email`, `status`, `create_time`) 
VALUES('张三', '/test/1.jpg', '123456', '13765471268', 'xx@163.com', '1', '2021-03-24 16:11:57');
```

## 2. 模拟验证码登陆
- 创建一个用户的模块(controllers/userController.js)
  - 接收数据库信息并返回
- 模拟验证码操作(userController.js)
```js
validatePhone = [];  // 存放手机号和验证码

// 获取验证码(4位随机数)
let rand = (min, max)=> {
    return Math.floor(Math.random()*(max-min)) + min;
}

// 判断是否发送过验证码
let isSendCode = phone=> {
    for(let item of validatePhone) {
        if(phone == item.phone) {
            return true;
        }
    }

    return false;
}

// 验证码和手机号是否匹配
let findCodeAndPhone = (phone, code)=> {
    for(let item of validatePhone) {
        if(phone == item.phone && code == item.code) {
            return 'login'
        }
    }

    return 'error'
}

// 模拟验证码发送接口
let sendCode = (req, res)=> {
    let phone = req.query.phone;  // 获取前端输入的手机号

    // 如果已经发送过验证码
    if(isSendCode(phone)) {
        res.send({
            'code': 400,
            'msg': '已经发送过验证码，稍后再发'
        });
    }

    // 验证码
    let code = rand(1000, 9999);

    // 验证码数组
    validatePhone.push({
        'phone': phone,
        'code': code
    });
    // console.log(validatePhone);

    // 返回的参数
    res.send({
        'code': 200,
        'msg': '发送成功'
    });
    console.log("您的验证码是：", code);
}

// 验证码登陆
let codePhoneLogin = (req, res)=> {
    let { phone, code } = req.query;

    // 该手机号是否发送过验证码
    if(isSendCode(phone)) {
        // 验证码和手机号是否匹配
        let status = findCodeAndPhone(phone, code);

        // 登陆成功
        // 登陆成功之后的操作
        if(status == 'login') {
            // 登陆成功
            res.send({
                'code': 200,
                'msg': '登陆成功'
            });
        } else if(status == 'error') {
            // 登陆失败
            res.send({
                'code': 400,
                'msg': '登陆失败'
            });
        }
    } else {
        // 如果没有发送
        res.send({
            'code': 400,
            'msg': '未发送验证码'
        });
    }
}

module.exports = {
    sendCode,  // 模拟验证码发送接口 - 交给user.js注册路由
    codePhoneLogin  // 验证码登陆
}
```
- 注册路由(routs/users.js)
- 由于是post请求，要装一个中间件(body-parser)
  - `yarn add body-parser`
```js
const express = require('express');
const router = express.Router();
const user = require('../controllers/userController');

// 注册路由
// 由于app.js中 app.use('/users', usersRouter)
// 地址实际为 /users/sendCode
// 使用post请求 - 使用postman
// 由于是post请求，要装一个中间件(body-parser)
// 在app.js中引用插件
router.post('/sendCode', user.sendCode);

// 验证码登陆
router.post('/codePhoneLogin', user.codePhoneLogin);

module.exports = router;
```
- 修改app.js(主要加了注释和引入中间件)
```js
const express = require('express');
// 由于是post请求，要装一个中间件(body-parser)
const boayParser = require('body-parser');
const path = require('path');
const http = require('http');

const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 静态资源
app.use(express.static(path.join(__dirname, 'public')));

// post请求需要使用中间件，注册中间件
// 为true表示支持post请求
app.use(boayParser.urlencoded({extended: true}));

// 注册路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

server.listen('3000', ()=> console.log('服务器启动成功：port：http://localhost:3000'));
```
- 访问地址
  - 由于app.js中`app.use('/users', usersRouter)`
  - `http://localhost:3000/users/sendCode`
  - `http://localhost:3000/users/codePhoneLogin`

## 3. 用户注册
- 需要一个用户详情表
```sql
-- 用户表(userinfo)
-- 如果存在，删除表
DROP TABLE IF EXISTS userinfo;

CREATE TABLE `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB CHARSET=utf8;

-- 创建测试数据
INSERT INTO `userinfo`(`userid`, `age`, `sex`, `path`, `birthday`) 
VALUES(1, 10, '男', 'xxx街道', '2006-03-24');
```
- 获取异步数据写一个promise回调(util/dbconfig)
```js
const mysql = require('mysql');

module.exports = {
    // 数据库配置
    config: {
        // 代码见上
        // ......
    },

    // 连接数据库，使用mysql的连接池的连接方式
    // 连接池对象
    // 使用连接池的好处是，在数据很大的时候，减少数据查询的时间
    sqlConnect(sql, sqlArr, callback) {
        // 代码见上
        // ......
    },

    // 获取异步数据写一个promise回调
    sySqlConnect(sysql, sqlArr) {
        // 写一个promise
        return new Promise((resolve, reject)=> {
            let pool = mysql.createPool(this.config);

            pool.getConnection((err, conn)=> {
                console.log("请求页面");
    
                if(err) {
                    // 使用reject来提示错误
                    reject(err);
                } else {
                    // 事件驱动回调
                    // 直接返回数据
                    conn.query(sysql, sqlArr, (err, data)=>{
                        if(err) {
                            reject(err);
                        } else {
                            // 使用resolve返回数据
                            resolve(data);
                        }
                    });

                    // 释放连接
                    conn.release();
                }
            });
            // 使用promise最好抛出错误
        }).catch(err=> {
            console.log(err);
        });
    }
}
```
- 修改用户模块代码(controllers/userController)
```js
const dbConfig = require('../util/dbconfig');  // 数据库配置

validatePhone = [];  // 存放手机号和验证码

// 获取验证码(4位随机数)
let rand = (min, max)=> {
  // ......
  // 代码见上
}

// 判断是否发送过验证码
let isSendCode = phone=> {
  // ......
  // 代码见上
}

// 验证码和手机号是否匹配
let findCodeAndPhone = (phone, code)=> {
  // ......
  // 代码见上
}

// 检测验证码登陆是否是第一次登陆(异步使用promise)
let phoneLoginBind = async phone=> {
    let sql = "select * from user where  username = ? or phone = ?";
    let sqlArr = [phone, phone];

    let res = await dbConfig.sySqlConnect(sql, sqlArr);

    // 判断是否有值
    if(res.length) {
        // 如果用户已经注册了，获取用户信息
        // 获取用户信息详情
        res[0].userinfo = await getUserInfo(res[0].id);

        return res;
    } else {
        // 如果是第一次登陆，就需要进行注册，绑定表
        let res = await regUser(phone);

        // 获取用户信息详情
        res[0].userinfo = await getUserInfo(res[0].id);

        return res;
    }
}

// 用户注册
let regUser = async phone=> {
    // 检测用户是否第一次注册
    let userpic = 'http://xxx/test.png';  // 头像
    let sql = "INSERT INTO user(username, userpic, phone, create_time) VALUES (?, ?, ?, ?)";
    // 用户名默认手机号
    let sqlArr = [phone, userpic, phone, (new Date()).valueOf()];

    let res = await dbConfig.sySqlConnect(sql, sqlArr);

    // 判断数据库操作是否执行成功(成功1 不成功-1)
    if(res.affectedRows === 1) {
        // 获取用户信息
        let user = await getUser(phone);

        // 绑定用户父表
        let userinfo = await createUserInfo(user[0].id);
        if(res.affectedRows === 1) {
            return userinfo;
        } else {
            return false;
        }
    } else {
        // 执行不成功
        return false;
    }
}

// 获取用户信息
let getUser = username=> {
    let sql = "sqlect * from user where id=? or phonr=? or username=?";
    let sqlArr = [username, username, username];

    return dbConfig.sySqlConnect(sql, sqlArr);
}

// 创建用户副表(userinfo)
let createUserInfo = (user_id)=> {
    let sql = "insert into userinfo(userid, age, sex, path) value(?, ?, ?, ?)";
    let sqlArr = [user_id, 18, '女', '无'];

    return dbConfig.sySqlConnect(sql, sqlArr);
}

// 获取注册的用户详情
let getUserInfo = (userid)=> {
    let sql = "select age, sex, path, birthday from userinfo where userid = ?";
    let sqlArr = [userid];

    return dbConfig.sySqlConnect(sql, sqlArr);
}

// 模拟验证码发送接口
let sendCode = (req, res)=> {
  // ......
  // 代码见上
}

// 验证码登陆
let codePhoneLogin = async (req, res)=> {
    let { phone, code } = req.query;

    // 该手机号是否发送过验证码
    if(isSendCode(phone)) {
        // 验证码和手机号是否匹配
        let status = findCodeAndPhone(phone, code);

        // 登陆成功
        // 登陆成功之后的操作
        // 检测验证码登陆是否是第一次登陆
        let user  = await phoneLoginBind(phone);

        if(status == 'login') {
            // 登陆成功
            res.send({
                'code': 200,
                'msg': '登陆成功',
                'data': user[0]
            });
        } else if(status == 'error') {
            // 登陆失败
            res.send({
                'code': 400,
                'msg': '登陆失败'
            });
        }
    } else {
        // 如果没有发送
        res.send({
            'code': 400,
            'msg': '未发送验证码'
        });
    }
}

module.exports = {
    sendCode,  // 模拟验证码发送接口 - 交给user.js注册路由
    codePhoneLogin  // 验证码登陆
}
```
- 访问地址
  - `http://localhost:3000`
  - 首先获取验证码 
    - `http://localhost:3000/sendCode`
  - 登陆
    - `http://localhost:3000/codePhoneLogin`