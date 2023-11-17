# vue2配置

## 1. 在vue脚手架配置接口
- vue.config.js
```js
const bodyParser = require('body-parser');
const jsmd5 = require('js-md5')

module.exports = {
  devServer: {
    // open: true,
    host: 'localhost',
    port: 8088,
    https: false,
    hotOnly: false,
    /* proxy: { // 配置跨域
        '/api': {
            target: 'http://10.10.10.199:8080',
            ws: true,  // 是否启用websockets
            changOrigin: true,  // 开启代理，在本地创建一个虚拟服务端
            pathRewrite: {
                '^/api': ''
            }
        }
    }, */
    before: app => {
      // post请求必须使用中间件才能接收参数
      // 需要载入body-parser中间件才可以使用req.body
      // 2021年body-parser已经被弃用，原因是express框架已经内置
      // 但原生node还是需要中间件来做请求
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));

      app.post('/api/admin/login', (req, res)=> {
        // console.log(req.body)

        let username = req.body.username;
        let password = req.body.password;

        // console.log(jsmd5("admin"))

        if(username == "admin" && password == jsmd5("admin")) {
          res.send({
            msg: '恭喜你登录成功',
            info: { id:1, name: "zhangsan", username: "admin", password: "admin" },
            isOk: true
          })
        } else {
          res.send({
            msg: '登录失败，请检查账号密码',
            isOk: false
          })
        }
      }).get('/api/user/get', res=> {
        res.json([
          { username: "zhangsan" },
          { username: "王五" },
        ])
      })
    }
  },
}
```

## 2. vue.config.js里面的基本配置项
```js
module.exports = {
    lintOnSave: false,  // 关闭eslint
    publicPath: './', // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    assetsDir: 'assets', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
    
    pages: {
      //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
      index: {
        //除了 entry 之外都是可选的
        entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
        template: 'public/index.html', // 模板来源
        filename: 'index.html', // 在 dist/index.html 的输出
        title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
        chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
      }
    },

    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: ['src/assets/less/demo.less', 'src/assets/less/global.less']
      }
    }
    // devServer: {
    //     open: true,
    //     host: 'localhost',
    //     port: 80,
    //     https: false,
    //     hotOnly: false,
    //     proxy: { // 配置跨域
    //         '/api': {
    //             target: 'http://10.10.10.199:8080',
    //             ws: true,
    //             changOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     },
    //     before: app => { }
    // }
};
```

## 3. vue2x使用proxy做代理解决跨域问题 
```js
//开发模式反向代理配置，生产模式请使用Nginx部署并配置反向代理
devServer: {
    port: 9527,
    proxy: {
        '/api': {
        changeOrigin:true,//允许跨域
        
        //本地服务接口地址
        target: 'http://xxx/',
        ws: true,  //如果要代理 websockets，配置这个参数
        secure: false,  // 如果是https接口，需要配置这个参数
        pathRewrite: {
            '^/api': '/'
        }
        },
        '/elasticApi': {
        changeOrigin:true,//允许跨域
        target: 'http://192.168.2.240:9200/',
        ws: true,
        pathRewrite: {
            '^/elasticApi': '/'
        }
        }
    }
}

export const getImgURI = params => {
    return  axios({
        url: `api/upload/uploadImage`,  // 这里api指代本地服务
        method: 'post',
        data: params
    });
};

location ^~/api {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_buffering off;
        rewrite ^/api/(.*)$ /$1 break;
        proxy_pass http://192.168.2.245:8031/;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }
}
```

## 4. 配置全局less
- 方法一
    - `npm i style-resources-loader -S`
    - 创建less文件
    - 在vue.config.js中进行配置
    ```js
    module.exports = {
        ......
        // 引入公共less
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'less',
                patterns:  ['src/assets/less/demo.less', 'src/assets/less/global.less']
            }
        },
        ......
    }
    ```
- 方法二
    - vuecli3x+
    - vue add style-resources-loader
    - 安装完之后vue.config.js里面会自动出现以下内容
        ```js
        pluginOptions: {
            'style-resources-loader': {
                preProcessor: 'less',
                patterns: []
            }
        }
        ```

## 5. vue中将简体转成繁体
```js
// 引入包
yarn add language-tw-loader

// vue.config.js
configureWebpack: {
    module: {
        rules: [ // 可在package.json 配置顶层 sideEffects: false
        {
            test: /\.(js|vue)$/,
            loader: 'language-tw-loader',
        }
        ]
    },
},
```

## 6. 配置全局axios服务
- 安装axios
  ```js
  import axios from "axios"
  Vue.prototype.axios = axios;
  ```
- 配置开发环境和打包环境
  - .env.development和.env.production是全局文件，vue会根据环境自动识别
  - .env.development
    ```js
    # 开发环境
    VUE_APP_BASE_API = 'http://localhost:8088/'
    ```
  - .env.production
    ```js
    # 线上环境
    VUE_APP_BASE_API = 'http://localhost:80881/'
    ```
- 封装axios
  ```js
  import axios from 'axios'
  import { Message } from 'element-ui'

  import router from '../router'

  console.log(process.env.VUE_APP_BASE_API)

  const Axios = axios.create({
      baseURL: process.env.VUE_APP_BASE_API, // api
      timeout: 100000,
      responseType: "json",
      withCredentials: true, // 是否允许带cookie这些
      // headers: {
      //     "Content-Type": "application/json;charset=utf-8"
      // }
  });

  //请求拦截  设置统一header
  Axios.interceptors.request.use(config => {
      // console.log(config);

      return config
  }, error => {
      return Promise.reject(error)
  });

  //响应拦截  401 过期处理
  Axios.interceptors.response.use(response => {
      // console.log(response.data.msg);

      const { code } = response.data;  //响应登录状态码

      // console.log(code);

      // 如果响应请求未登录，则返回登录页面
      if (code == -1){
          Message.error(response.data.msg);
          router.push('/login')
      }

      return response
  }, error => {
      // console.log(error.response);

      const { status } = error.response;  //响应错误状态
      const { data } = error.response;  //响应错误详情

      // 错误提醒
      Message.error(data.message);

      if (status === 401) {
          Message.error('登录失效，请重新登录');

          localStorage.removeItem('code');
      }

      return Promise.reject(error)
  });

  export default Axios;
  ```
- 配置文件vue.config.js
  - 注意：使用配置文件请求要注释掉 axios里面的url
    - `baseURL: process.env.VUE_APP_BASE_API, // api`
  ```js
  const serverPath = process.env.VUE_APP_BASE_API;  // 配置文件也可以获取.env变量
  console.log("env", serverPath)

  module.exports: {
    devServer: {
      // open: true,
      host: 'localhost',
      port: 8088,
      https: false,
      hotOnly: false,
      proxy: { // 配置跨域
          '/api': {
              // 用.env变量配置跨越
              target: serverPath,
              ws: true,  // 是否启用websockets
              changOrigin: true,  // 开启代理，在本地创建一个虚拟服务端
              pathRewrite: {
                  '^/api': ''
              }
          }
      },
    }
  }
  ```

## 7. 大屏配置
> 将全局px转换成rem
- 安装插件
  - yarn add @njleonzhang/postcss-px-to-rem
  - yarn add lib-flexible-for-dashboard
- 创建配置文件 => .postcssrc.js
  ```js
  module.exports = {
    plugins: {
      autoprefixer: {},
      "@njleonzhang/postcss-px-to-rem": {
        unitToConvert: 'px',
        widthOfDesignLayout:  1920, // 设计稿的宽度 ，就是设计的UI宽度
        unitPrecision: 3, // 十进制的单位
        selectorBlackList: ['.ignore', '.hairlines', '.el-', '.zmx_'], // (Array) 过滤那些不用转换的class
        // selectorBlackList: ['.ignore', '.hairlines'], // (Array) 过滤那些不用转换的class
        minPixelValue: 1, // 设置要替换的最小像素值
        mediaQuery: false, // 允许在媒体查询中转换px
      }
    }
  }
  ```
- 在main.js里面做配置
  ```js
  const dashboardFlexible = require('lib-flexible-for-dashboard');
  dashboardFlexible.init(16/9)
  ```
- less公共文件
  ```js
  module.exports = {
    pluginOptions: {
    'style-resources-loader': {
        preProcessor: 'less',
        patterns: ['src/assets/less/tools.less', 'src/assets/less/global.less', 'src/assets/less/layerpx.less']
      }
    }
  }
  ```
  - tools.less
    - 全局工具样式 - 公共按钮、弹出框 。。。
  - global.less
    - 规定全局样式变量及框架整体布局
  - layerpx.less
    - 不转换成rem，基本用于框架整体布局
    - 以zmx_为前缀
    ```less
    .container {
      header {}

      .zmx_aside {
        min-width: 160px;
      }

      .main {}
    }
    ```

## 8. 全局注册vue-countup-v2组件
- 先安装countup和vue-countup-v2
- 封装组件
```html
<template>
    <i-count-up class="counter" :endVal="count" :options="options"></i-count-up>
</template>

<script>
import ICountUp from 'vue-countup-v2'

export default {
    name: "testmap",

    components: {
        ICountUp
    },

    props: {
        count: {
            type: Number,
            default: ""
        }
    },

    data () {
        return {
            options: {
              startVal: 120,  // 动画开始数据
              duration: 2,  // 动画持续时间
              useEasing: false,  // 是否禁用easing动画效果
              useGrouping: true,  // 是否使用分组，分组后每三位会用一个符号分隔
              separator: ',',  // 分组符号
              decimal: '.',  // 分隔整数和小数的符号，默认是小数点
              prefix: '',  // 前面添加
              suffix: ''  // 后面添加
          },
        }
    },
}
</script>

<style lang="less" scoped>
.counter {
    display: block;
}
</style>
```
- main.js

```js
import 'countup'
import CountUp from './components/tools/CountUp'
Vue.component("CountUp", CountUp); 
```
- vue组件使用
```html
<count-up :count="123123" />
```

## 9. 在vue.config.js中获取文件名
- outputDir: __dirname.split(/[\\/]/).pop(),

## 10. 脚手架安装报错（sass）
- 报错信息：node-sass@5.0.0 postinstall: `node scripts/build.js`
  - npm uninstall node-sass
  - npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/

## 11. 前端一键自动部署工具
>  deploy-cli-service
- 全局安装
  - `npm install deploy-cli-service -g`
- 本地安装
  - `npm install deploy-cli-service --save-dev`
- 查看版本，表示安装成功
  - deploy-cli-service -v
  -  本地安装的在调用前需要加 npx
    - npx deploy-cli-service -v
- 查看帮助
  - deploy-cli-service -h
- 初始化配置文件(在项目目录下)
  - deploy-cli-service init # 或者使用简写 deploy-cli-service i
  - 根据提示填写内容，会在项目根目录下生成 deploy.config.js 文件，初始化配置只会生成 dev (开发环境)、test (测试环境)、prod (生产环境) 三个配置，再有其他配置可参考模板自行配置。
  - 配置
    ```js
    module.exports = {
      projectName: 'vue_samples', // 项目名称
      privateKey: '/Users/fuchengwei/.ssh/id_rsa',
      passphrase: '',
      dev: {
        // 环境对象
        name: '开发环境', // 环境名称
        script: 'npm run build', // 打包命令
        host: '192.168.0.1', // 服务器地址
        port: 22, // 服务器端口号
        username: 'root', // 服务器登录用户名
        password: '123456', // 服务器登录密码
        distPath: 'dist', // 本地打包生成目录
        webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
        isRemoveRemoteFile: true // 是否删除远程文件（默认true）
      },
      test: {
        // 环境对象
        name: '测试环境', // 环境名称
        script: 'npm run build:test', // 打包命令
        host: '192.168.0.1', // 服务器地址
        port: 22, // 服务器端口号
        username: 'root', // 服务器登录用户名
        password: '123456', // 服务器登录密码
        distPath: 'dist', // 本地打包生成目录
        webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
        isRemoveRemoteFile: true // 是否删除远程文件（默认true）
      },
      prod: {
        // 环境对象
        name: '生产环境', // 环境名称
        script: 'npm run build:prod', // 打包命令
        host: '192.168.0.1', // 服务器地址
        port: 22, // 服务器端口号
        username: 'root', // 服务器登录用户名
        password: '123456', // 服务器登录密码
        distPath: 'dist', // 本地打包生成目录
        webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
        isRemoveRemoteFile: true // 是否删除远程文件（默认true）
      }
    }
    ```
- 部署
  - 命令后面需要加 --mode 环境对象 
  ```js
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    ......
    "deploy:dev": "deploy-cli-service deploy --mode dev",
    "deploy:test": "deploy-cli-service deploy --mode test",
    "deploy:prod": "deploy-cli-service deploy --mode prod"
  }
  ```
