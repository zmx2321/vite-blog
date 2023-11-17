# node中的日志文件

## 1. node中的log文件
```js
// yarn add log4js log4js-json-layout
const log4js = require('log4js');
const jsonLayout = require('log4js-json-layout');

log4js.addLayout('json', jsonLayout);
log4js.configure({
  appenders: {
    test: {
      type: 'file', 
      filename: '../logs/test.log',
      layout: { type: 'json', separator: ',' }
    }
  },
  categories: { default: { appenders: ["test"], level: "debug" } }
});

log4js.configure({
  appenders: {
    xxx: {
      type: 'file', 
      filename: '../logs/xxx.log',
      layout: { type: 'json', separator: ',' }
    }
  },
  categories: { default: { appenders: ["xxx"], level: "debug" } }
});

log4js.configure({
  ......
});

module.exports = log4js.getLogger;

const log = require('../lib/logger.js')("test");
log.info({"test": "tttt"}); // write data into log
```


---
<br />

<font color="#666" size="5">\~End~</font>