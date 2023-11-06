# 开发环境

## 1. 简述
- 面试官想通过开发环境了解候选人的实际工作情况
- 开发环境的工具，能体现工作产出的效率
- 会以聊天为主，不会问具体的问题
  - 通过了基础知识的面试之后，会问你，之前是怎么做的，代码是怎么管理的，出了问题是怎么调试的，比如现在有个bug你是如何去找到他的，项目是怎么打包的，怎么上线的，如果除了问题怎么连测试机的服务器，怎么修改服务器内容等等
- 它是程序员通用的必备的一门知识(前后端都需要知道)
- 如果这些不知道，可能会被认为是没多少项目经验

## 2. 知识点
### 2.1. git
- 简述
  - 最常用的代码版本管理工具
    - svn是集中式的版本管理工具，而git是分布式的
    - svn现在不是很常用了
  - 大型项目需要多人协作开发，必须熟用git
    - 如果本地代码没有了，可以在git上拉取
    - 检查某次版本做了哪些修改操作，可以在git的log中查找历史版本
  - Mac OS自带git命令，windows可以在官网下载安装
  - git服务端常见的有 GitHub、GitLab、coding.net等
  - 大公司会搭建自己的内网git服务 => gitlab => gitlab是github上的一个项目
- 常用git命令
  - git add .
    - 把修改的所有文件都加上，.表示所有
  - git checkout xxx
    - checkout会把文件都还原成以前的状态
  - git commit -m 'xxx'
    - 提交
  - git push origin master
    - 推送到服务端
  - git pull origin master
    - 从服务端获取
  - git branch
    - 查看分支，多人开发的时候，每个人有自己的分支，相互之间不干涉
  - git checkout -b xxx/git checkout xxx
    - 切换分支
  - git merge xxx
    - 合并分支
- 示例
  - 测试git站点：zmx2321.coding.net
    - 国内的git服务
  - 单人开发的情况
    ```
    # 从站点拉取仓库代码
    # 使用https需要输入用户名和密码
    # ssh不用输入账号密码，但需要ssh key
    git clone https://e.coding.net/zmx2321/testgit/testgit1.git 

    # mac添加公钥指令
    # cat ~/.ssh/id_rsa.pub  =>  pub 就是公钥的意思
    # 把公钥拷贝下来，在站点添加公钥，添加名称
    # 添加完之后就可以直接使用ssh下载仓库了

    # 进入文件夹
    cd testgit1

    # 查看当前git状态
    git status

    # 查看当前分支 master是主分支，也是默认新建的分支
    git branch

    # 修改git仓库

    # 再次查看状态
    git status

    # 查看修改的内容
    git diff

    # 查看某个文件修改的内容 => 新增的文件不会在diff里面
    git diff README.md
    git diff *.md

    # 添加一个文件
    git add README.md
    git add *.md

    # 添加所有文件
    git add .

    # 再次查看状态 => 绿色的表示已经添加
    git status

    # 生成一条记录，并写上注释
    git commit -m 'test'

    # 查看日志
    git log

    # 有些需要进行配置 => 这样就能看到你提交的用户名和邮箱
    # 多人协作的时候就知道这是谁提交的
    git config user.name zmx2321
    git config user.email zmx2321@163.com

    # Initial Commit 表示当时创建的时候提交的记录

    # 查看某条记录提交的内容 => git能够跟踪你改的哪些东西
    git log
    # 把下面的commit的标识(id)拷下来
    git show 27e936aab0ff888ff46abf0f1dac215b744cba6b

    ## 再次修改文件内容

    ## 查看状态
    git status

    ## 如果反悔之前修改的内容 => 就会把之前修改的内容取消掉(删除)
    git checkout README.md
    git checkout *.md

    ## 撤销所有修改
    git checkout .

    # 即git有查看当前修改内容的能力，以及反悔的能力
    # 在commit之前，可以把之前修改的内容撤销回来

    # 推送到代码仓库(服务端) => 此时站点才有之前提交的代码
    git push origin master
    git push

    # 多人协作的时候，推送之前，先下拉代码
    git pull origin master
    git pull
    ```
  - 模拟多人开发的情况
    ```
    # 进入文件夹
    cd testgit1

    # 模拟另一个开发人员
    # 做一个新功能之前，需要切换一个新的分支

    # 创建分支
    git checkout -b test2

    # 查看分支 => 高亮表示当前指向的分支
    # git地址后面的括号是当前指向的分支名
    git branch

    # 查看git状态
    git status
    git diff

    # 提交 commit之后，代码已经在这个分支下面了
    git add .
    git commit -m 'test2'

    # 切换到主分支 
    # 和撤回文件内容是一个命令，后面加分支名就是切换分支
    git checkout master

    # 再次模拟一个开发人员

    # 开新分支
    git checkout -b test3

    # 查看分支
    git branch

    # 修改文件，查看状态
    git status

    # 提交
    git add .
    git commit -m 'test3'

    # 提交test3到服务端仓库
    git push origin test3

    # 提交test2到服务端仓库
    git push origin test2

    # 刷新站点仓库，可以看到多出两个分支

    # 将test2和test3合并到主分支master上来

    # 切换到master分支
    git checkout master

    # 模拟项目负责人
    # 合并test2和test3分支

    # 先把服务端所有分支全部拉下来
    git fetch

    # 查看所有分支(本地)
    git branch

    # 将test2分支的代码合并到主分支
    # 切换到test2分支
    git checkout test2

    # 拉取test2分支代码
    git pull origin test2

    # 切回到主分支

    # 合并代码 
    # 将test2分支的代码合并到当前分支上来
    git merge test2

    # 主分支提交代码到服务端
    # 没有冲突直接push，不用commit
    git push origin master

    # 将test3分支的代码合并到主分支
    # 主分支 => 先把服务端所有分支全部拉下来
    # git fetch

    # 切换到test3分支
    git checkout test3

    # 拉取test3分支的代码
    git pull origin test3

    # 切回主分支
    git checkout master

    # 合并代码
    # 将test3分支的代码合并到当前分支
    git merge test3

    # 解决冲突
    # 只要是confict显示的文件都冲突了
    # 打开编辑器(vscode)
    # vscode能够失败冲突，并且有快捷方式
    # 接受当前的改变(本地)
    # 接受传入的改变(merge的分支)
    # 两者同时接受

    # 查看文件状态
    git status

    
    # 解决完冲突需要进行add
    git add .
    git commit -m 'test3 branch'

    # 再次merge显示already up to date

    # 主分支提交代码到服务端
    git push origin master

    # 意外情况
    # 做一个test4功能
    
    # 新建一个分支
    git checkout -b test4

    # 切回到master分支
    git checkout master

    # 如果我们不小心在主分支上做了修改
    
    # 查看分支 => 此时主分支上有test4功能
    git status

    # 把当前修改的东西划出来
    # 把修改的东西暂存起来
    git stash

    # 此时使用status查看，只会显示新建的文件

    # 此时再建分支
    git checkout -b 
    
    # 此时使用status查看，只会显示新建的文件

    # 开放暂存区
    git stash pop

    # 此时使用status查看,显示正常

    # 提交分支代码
    git add .
    git commit -m 'test5'
    git push origin test5

    # 切换到主分支
    git checkout master

    # 撤回主分支上修改的代码
    git checkout .
    ```

### 2.2. Chrome调试工具
- 简述
  - 一般不会面试时考察
  - 但这是前端工程师必备的技能(不算知识)
- 范围
  - Elements
    - 显示dom结构、css、盒模型
  - Console
    - 打印
      - console.log()
      - console.info()
      - console.error()
  - Application
    - 本地存储
      - localstroage
      - sessionstroage
      - cookie
      - web sql
  - Network
    - 查看网络请求(资源加载)
      - 可以选择类型
        - xhr、js、css、img、dom等
  - Sources
    - 里面有源码
    - 可以在源码中打断点(debugger)
    - 第二个图标(下一步)比较常用

### 2.3. 抓包
- 简述
  - 移动端、混合开发常用
  - 移动端h5页，查看网络请求，需要用抓包工具抓包
  - window一般用fiddler
  - Mac OS一般用charles
    - 图标是一个花瓶
- 过程
  - 手机和电脑连同一个局域网
  - 将手机代理到电脑上
  - 手机浏览网页，即可抓包
- 查看抓包结果
  - 查看网络请求
  - 网址代理
  - https
- mac的charles使用方法
  - 手机电脑同一个局域网
  - 手机代理连到电脑的代理上
    - 手机上代理选择手动
    - 查看电脑局域网ip
    - 在软件的proxy上的setting中查看端口，一般是8888
  - 在手机端访问局域网地址
  - 在抓包软件上找到资源
    - contents里面就是内容
  - 启用一个网址代理
    - tools => map remote
    - 勾选启用
    - 点击添加
  - https的功能(解密)
    - 有个红叉就是https的请求 => 加密请求
    - proxy下面有个ssl proxying setting
    - 勾选ssl proxying
    - add => host:*; port:443
    - help下的ssl proxy下面就有一些引导
    - 苹果设备根据引导安装完证书就可以了

### 2.4. webpack和babel
#### 2.4.1. 简述
- 这里使用的是webpack5
- 使用webpack和babel的价值
  - ES6模块化，浏览器暂不支持
  - ES6语法，浏览器不完全支持
  - 压缩代码，整合代码，以让网页加载更快
  - 如果webpack做的好的话，会让我们的代码更多地命中缓存，让页面加载更快

#### 2.4.2. 使用webpack构建一个服务
- 建一个webpack-demo的文件夹，并进入到文件夹
  - `mkdir webpack-demo` => `cd webpack-demo`
  - 顺便复制一下.gitignore文件
- 保证已经安装了node
  - `node -v` => v14.12.0
- 初始化webpack环境
  - `npm init -y`
    - package.json即当前目录的描述文件
- 安装webpack和webpack-cli到开发环境
  - `npm install webpack webpack-cli -D`
    - 写入dependencies(生产环境)
      - npm install module_name -S => npm install module_name --save
      - npm i xx -S
    - 写入devDependencies
      - npm install module_name -D => npm install module_name --save-dev
      - npm i xx -D
- 建一个src文件夹
  - `mkdir src`
    - 一般自己写的代码文件都在src
- 在src中建一个index.js
  - `cd src` => `touch index.js` => `start index.js`
  - 在里面随便写点东西
- 在项目根目录创建一个配置文件(webpack.config.js)
  - `cd ..` => `touch webpack.config.js` => `start webpack.config.js`
  - 这个是webpack默认的配置文件的名字
- 在webpack.config.js文件中配置webpack
  - 最精简版的配置
  ```js
  const path = require(path)

  // module.exports是nodejs中CommonJs的语法规范
  module.exports = {
    // 模式
    mode: 'development',  // 开发模式
    // mode: 'production',  // 线上模式

    // 这个js实际上是node，所以可以使用node中的path模块
    // 入口
    // __dirname表示当前目录
    // 表示能找到当前项目目录下src下的index.js
    // 通过join拼接
    // 最终找到的这个index.js就是项目的入口
    entry: path.join(__dirname, 'src', 'index.js'),

    // 输出
    output: {
      filename: 'bundle.js',  // 一般叫这个名字
      // 目录
      // 如果没有dist文件夹，webpack会自动帮我们创建
      path: path.join(__dirname, 'dist')
    }
  }
  ```
- 运行
  - 在package.json文件中添加运行命令
    ```js
      // 指定webpack打包的配置文件是webpack.config.js
      // 但这个文件名字是webpack的默认名字，所以可以不写
      // 打包
      "scripts": {
        "build": "webpack",
        // "build1": "webpack --config webpack.config.js"
      },
    ```
  - `npm run build`
- bundle.js简介
  - 打包出来的js有很多，主要原因是webpack打包的时候需要考虑模块化方案
  - webpack可以兼容模块化的方案 => 加上很多模块化相关的代码
  - 由于我们在webpack配置中mode设置的是开发模式，所以打包出来的是没有压缩过的代码
- 把dist下的文件在页面展示
  - 在src中建一个html文件
    - `cd src` => `touch index.html` => 复制代码
  - 安装插件
    - `npm install html-webpack-plugin -D`
      - 用来解析html的插件
    - `npm install webpack-dev-server -D`
      - 启动服务的一个插件
- 修改webpack.config.js
  ```js
  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  // module.exports是nodejs中CommonJs的语法规范
  module.exports = {
    // 模式
    mode: 'development',  // 开发模式
    // mode: 'production',  // 线上模式

    // 这个js实际上是node，所以可以使用node中的path模块
    // 入口
    // __dirname表示当前目录
    // 表示能找到当前项目目录下src下的index.js
    // 通过join拼接
    // 最终找到的这个index.js就是项目的入口
    entry: path.join(__dirname, 'src', 'index.js'),

    // 输出
    output: {
      filename: 'bundle.js',  // 一般叫这个名字
      // 目录
      // 如果没有dist文件夹，webpack会自动帮我们创建
      path: path.join(__dirname, 'dist')
    },

    // 配置插件 - 是一个数组，可以配置多个插件
    plugins: [
      new HtmlWebpackPlugin({
        // 直接找到html文件
        template: path.join(__dirname, 'src', 'index.html'),
        // 根据当前模板，输出的文件名(在dist目录下)
        filename: 'index.html'
      })
    ],

    // 启动本地服务
    devServer: {
      port: 3000,
      // 启动目录
      contentBase: path.join(__dirname, 'dist')
    }
  }
  ```
- 再次运行
  - 在package.json文件中添加运行命令
    ```js
      // dev表示开发
      "scripts": {
        "build": "webpack",
        "dev": "webpack-dev-server"
      },
    ```
  - `npm run dev`
- 浏览器访问
  - `localhost:3000`
- 如果报错Cannot find module 'webpack-cli/bin/config-yargs'
  - 安装 webpack-cli 3.* 版本  
    - `npm install webpack-cli@3 -D`
    - 安装3x版本的webpack-cli
    - 但由于babel的缘故，这里的版本只能使用3.3.9
- 所有配置版本
  - "html-webpack-plugin": "^3.2.0",
  - "webpack": "^4.41.0",
    - 使用babel，webpack必须为4x，但如果版本为4.46.0，webpack-cli无法使用
  - "webpack-cli": "^3.3.9",
    - 使用webpack-dev-server，webpack-cli版本必须为3x
  - "webpack-dev-server": "^3.8.1"

#### 2.4.3. 使用babel将ES6转成ES5
- 简介
  - 在src的index里面写es6语法
    - 如果项目已经启动，并且在浏览器打开，修改js文件，浏览器会进行热更新
  - 我们可以在浏览器的sources里面打开编译后的bundle文件
    - 这里面依旧是es6代码
  - 如何使es6转换成es5
    - 使用babel
- babel和webpack
  - babel实际上和webpack没有什么关系
  - 但babel里面有些插件可以供webpack使用
  - babel主要提供的就是将es的高级语法向低级语法转变的功能
  - 而webpack是一个打包的工具
  - 但是他们经常会在一起使用
- 安装babel
  - `npm install @babel/core @babel/preset-env babel-loader -D`
    - 安装babel核心，babel的配置集合
    - @表示组的意思
    - /表示单个的模块
      - 安装babel模块的core
      - 安装babel模块的配置集
    - babel-loader就是给webpack用的插件
- 配置babel
  - 在项目根路径创建一个文件 => .babelrc
    - `touch .babelrc`
    - 这是一个json格式的文件
    - 编辑 => 即babel的配置
      ```json
      {
        "presets": ["@babel/preset-env"]
      }
      ```
    - `@babel/preset-env`是babel很多配置插件的集合
- 修改webpack.config.js
  ```js
  // 配置babel
    // module是模块的意思
    // 针对不同的模块做不同的解析
    module: {
      // 规则
      rules: [
        // 它的整体意思是
        // 只要测试到时以.js结尾的，我们都去走babel-loader插件
        // babel-loader只是babel提供给webpack的一个插件
        // 真正做es6到es5转译的是babel/core这个核心去做的
        // 所以我们需要做一个.babelrc的配置才行
        {
          // 对js定制规则 => 正则
          // 只要是以js结尾的
          // test表示用正则表达式验证一下
          test: /\.js$/,
          // 之前安装的babel-loader插件，主要给webpack用
          loader: ['babel-loader'],
          // 我们有哪些目录需要进行loader
          // 我们手写的代码(src里面)都需要经过babel-loader进行转译
          include: path.join(__dirname, "src"),
          // 正则
          // 但是node_modules都是第三方的插件，这个就没必要转译，因为安装的时候已经被转译了
          exclude: /node_modules/
        }
      ]
  },
  ```
- 运行
  - `npm run dev`
  - babel，webpack，webpack-cli以及webpack-dev-server息息相关，如果版本不对应，会造成无法运行的情况，所以这边罗列锁定的版本
    - "@babel/core": "^7.6.2",
    - "@babel/preset-env": "^7.6.2",
    - "babel-loader": "^8.0.6",
    - "html-webpack-plugin": "^3.2.0",
    - "webpack": "^4.41.0",
    - "webpack-cli": "^3.3.9",
    - "webpack-dev-server": "^3.8.1"
  - 经过转译之后，class，箭头函数等都变成了function的形式

#### 2.4.4. es6模块化
- 模块化实际上就是一个导出一个导入的功能
- 两个js引用
  - 一个一个地导出
    ```js
    // a.js => 供出
    export function fn() {
      console.log('fn')
    }
    export const name = 'b'
    export const obj  = {
      name: "zhangsan"
    }

    // b.js => 导入
    // 使用解构 => es6语法
    cont { fn, name, obj } from './a' 
    // 可以直接使用
    fn()
    console.log(name)
    console.log(obj)
    ```
  - 导出一个文件
    ```js
    // a.js => 供出
    function fn() {
      console.log('fn')
    }
    const name = 'b'
    const obj  = {
      name: "zhangsan"
    }

    export {
      // es6的简写 => key和value相同
      // es5下实际上是 fn: fn
      fn,
      name,
      obj
    }

    // 如果使用defalut
    export defatlt {
      fn,
    }

    // c.js
    const xxx = {
      name: 'xxx'
    }

    export default obj

    // b.js => 导入
    // 使用解构 => es6语法
    cont { fn, name, obj } from './a' 
    
    // 可以直接使用
    fn()
    console.log(name)
    console.log(obj)

    // 如果使用defalut
    import af from './'
    af.fn()

    // *
    import * as afile from './a' 
    afile.fn()

    // 导入c
    // 不使用解构，是export default
    import xxx from './c'
    console.log(xxx)
    ```

#### 2.4.4. 配置生产环境的打包
- 新建一个文件 => webpack.prod.js
  - `touch webpack.prod.js` => production => 生产环境
- 将webpack.config.js内容拷贝到webpack.prod.js
  - webpack.config.js => 开发环境配置文件
  - webpack.prod.js => 生产环境配置文件
- 配置webpack.config.js
  - 修改mode => `mode: 'production'`
  - 删除devServer
  - 修改output配置
    - `filename: 'bundle.[contenthash].js',`
      - 它原先打包的是bundle.js
      - 现在我们要根据里面的内容算出一个hash值
      - 代码变了，文件名就变，代码不变，文件名就不变
      - 使用contenthash能最大程度地将代码命中http缓存
- 配置package.json
  - 现在的build指令webpeck，实际上操作的是webpack.config.js
  - 现在我们只需要进行构建，不需要启动服务
  - 即改变一下配置文件的地址
  - 将`"build": "webpack"`改为`webpack --config webpack.prod.js`
- 运行
  - `npm run build`
  - 查看dist里面的js文件，现在文件名有了hash值
  - 代码没变，hash值就不会变
  - 目前有两个命令
    - `npm run dev` => 开发环境命令
    - `npm run build` => 生产环境命令

#### 2.4.5. 配置生产环境的打包
- [package.json配置](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/deve/webpack-demo/package.json)
- [webpack.config.js开发环境配置](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/deve/webpack-demo/webpack.config.js)
- [webpack.prod.js生产环境配置](https://zmx2321.github.io/blog_code/interview/interview-one-side/example/deve/webpack-demo/webpack.prod.js)

### 2.5. linux常用命令
- 简述
  - 公司的线上机器一般都是linux(参考阿里云)
  - 测试机也需要保持一直，用linux  
  - 测试机或者线上机出了问题，本地又不能复现，需要去排查
  - mac os有些命令和linux是差不多的
- cmder链接到服务器
  - `ssh root@192.168.2.106`
  - 输入密码
- 文件操作
  - `ls` => 查看文件和文件夹
  - `ls -a` => 查看所有文件 => 平铺
    - ls有些文件找不到，比如.babelrc这类的文件
    - linux下，以点开头的文件都是隐藏文件，所以需要使用-a
  - `ll` => 查看文件和文件夹 => 列表
  - `ll -a` => 查看所有文件 => 
  - `mkdir aaa` => 创建一个aaa的文件夹
  - `rm -rf aaa` => 删除aaa文件夹
    - `-rf`表示删除文件夹中的所有内容
    - -r表示递归，-f表示强制，不加-f会每个都询问是否要删除
    - 文件夹可能分好几层
  - `cd aaa` => 定位到目录
  - `mv index.html test.html` => 重命名
  - `mv bundle.js ../bundle.js` => 移动到上级目录
    - 小技巧，输入mv b之后，按tab键，会自动补全
  - `cp a.js a1.js` => 拷贝
  - `rm -f a1.js` => 删除文件
    - 不加-f会进行询问
    - 使用-rf也可以用
  - `vi d.js` => 新建一个js并打开
    - vi和vim指令一样
    - 输入i进行编辑 => 进入insert模式
    - 按esc退出insert模式
    - :w => 写入(保存)
    - :q => 退出
    - :wq! => 强制写入并退出
    - `vimtutor` => vim教程
      - `yum -y install vimtutor`
  - `cat d.js` => 查看文件内容
  - `head d.js` => 查看文件内容 => 打印前面几行
  - `tail d.js` => 查看文件内容 => 打印末尾几行
  - `grep "222" d.js` => 在某个文件中查找关键字 
- 清屏 => clear

## 3. 面试题解答(总结)
- git
  - 常用命令
  - 添加、撤销、查看日志、查看diff、切换分支、新建分支、合并分支、合并如何解决冲突
- 调试工具
  - Chrome
- 抓包
  - mac环境
- webpack babel
  - webpack配置
  - 启动服务
  - 用babel编辑es6、模块化
  - 怎么打包到生产环境下
    - 压缩、文件名根据内容hash
- linux常用命令
  - 文件操作
