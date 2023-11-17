# node-express-mysql入门小栗子

> 可用作express开发模板

## 1. 配置环境
- 安装node
- 安装express
  - `npm install express -g`
  - `npm install express-generator -g`
  - `express --version`
- 搭建项目
  - `express nodexm_demo`
  - `yarn` 或 `npm install`
- 启动项目查看环境是否配置成功
  - `cd bin`
  - `node www`
- 安装mysql
  - `yarn add mysql`
- 创建数据库与表结构
```sql
-- 如果存在，删除
DROP DATABASE IF EXISTS exapp;

-- 创建数据库
CREATE DATABASE exapp;

-- 使用数据库
use exapp;

-- 分类表(cate)
-- 如果存在，删除表
DROP TABLE IF EXISTS cate;

CREATE TABLE `cate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB CHARSET=utf8;

-- 创建测试数据
INSERT INTO cate(`category`, `status`, `create_time`) VALUES('生活用品', 1, '2021-03-24 11:30:58');
```

## 2. 配置数据库连接池
- 创建一个util文件夹,并创建数据库配置文件
  - `mkdir util`
  - `cd util`
  - `touch dbconfig.js`
- 配置数据库(修改dbconfig.js)
```js
const mysql = require('mysql');

module.exports = {
    // 数据库配置
    config: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'exapp'  // 数据库
    },

    // 连接数据库，使用mysql的连接池的连接方式
    // 连接池对象
    // 使用连接池的好处是，在数据很大的时候，减少数据查询的时间
    sqlConnect(sql, sqlArr, callback) {
        let pool = mysql.createPool(this.config);

        pool.getConnection((err, conn)=> {
            console.log("请求页面");

            if(err) {
                console.log("连接失败");
                return;
            }

            // 事件驱动回调
            conn.query(sql, sqlArr, callback);

            // 释放连接
            conn.release();
        });
    }
}
```
- 测试连接池是否连通
  - 打开`route/index.js` => 页面显示出来的消息
  - 开启服务`node app`
  - 或者使用热启动
  ```js
  const express = require('express');
  const router = express.Router();
  const dbConfig = require('../util/dbconfig');

  // 页面显示出来的消息
  /* GET home page. */
  router.get('/', function(req, res, next) {
    let sql = "select * from cate";
    let sqlArr = [];
    let callback = (err, data)=> {
      if(err) {
        console.log("连接出错");
      } else {
        // 如果连接正常，返回接口数据
        res.send({
          'list': data
        });
      }
    }

    dbConfig.sqlConnect(sql, sqlArr, callback);
  });

  module.exports = router;
  ```
- 使用热启动
  - nodemon
    - `npm install nodemon -g`
    - `nodemon app`
  - supervisor
    - `npm install supervisor -g`
    - `supervisor start app`
- 请求页面
  - `http://localhost:3000/`

## 3. 封装请求方法
- 创建文件
  - `mkdir controllers`
  - `touch cateController.js`
- 把写在`routes/index.js`里面的代码复制过去(cateController.js)
```js
const dbConfig = require('../util/dbconfig');  // 数据库配置

// 获取分类
let getCate = (req, res, next)=> {
    let sql = "select * from cate";
    let sqlArr = [];
    let callback = (err, data)=> {
        if(err) {
            console.log("连接出错");
        } else {
            // 如果连接正常，返回接口数据
            res.send({
            'list': data
            });
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callback);
}

module.exports = {
    getCate
}
```
- 改写路由(routes/index)
```js
const express = require('express');
const router = express.Router();
const cate = require('../controllers/cateController');

router.get('/', cate.getCate);

module.exports = router;
```
- 删减app.js中不需要的代码
```js
const express = require('express');
const path = require('path');
const http = require('http');

const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const server = http.createServer(app);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

server.listen('3000');
```

## 3. 带参数获取列表
> 获取指定分类下的文章列表
- 创建数据库
```sql
-- 文章表(post)
-- 如果存在，删除表
DROP TABLE IF EXISTS post;

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cate_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 创建测试数据
INSERT INTO post(`name`, `pic`, `desc`, `cate_id`, `create_time`) 
VALUES('洗衣液', '/test/1.jpg', '洗衣液文章洗衣液文章洗衣液文章洗衣液文章洗衣液文章', '1', '2021-03-24 13:13:04');
```
- 修改`controllers/cateController`
```js
let getCate = (req, res)=> {
  // ......
  // 代码同上
}

// 获取指定分类的文章列表
// 写完之后注册路由
let getPostCate = (req, res)=> {
    let {id} = req.query;  // 分类id

    let sql = "select * from post where cate_id = ?";
    let sqlArr = [id];
    let callback = (err, data)=> {
        if(err) {
            console.log("连接出错");
        } else {
            // 如果连接正常，返回接口数据
            res.send({
            'list': data
            });
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callback);
}

module.exports = {
    getCate,  // 获取分类
    getPostCate  // 获取指定分类的文章列表
}
```
- 注册路由(routes/index)
```js
const express = require('express');
const router = express.Router();
const cate = require('../controllers/cateController');

// 注册获取分类路由
router.get('/', cate.getCate);

// 注册获取指定分类的文章路由
router.get('/getPostCate', cate.getPostCate);

module.exports = router;
```
- 请求页面
  - `http://localhost:3000/getPostCate?id=1`