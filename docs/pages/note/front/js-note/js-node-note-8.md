# node问题集锦

## 1. 当前根路径下某文件的路径
```js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(resolve('src/utils'));
```

## 2. 在node中引入文件
```js
// config.js
const ahUrl = "http://xxx:9200"

// 提供给node的常量
module.exports = {
    ahUrl,
}

// 外部引入
const config = require('./config');
// console.log(config.ahUrl);
```


---
<br />

<font color="#666" size="5">\~End~</font>