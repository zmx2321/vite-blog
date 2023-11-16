# 使用WebPack配置正确React项目

## 1. 复习webpack
### 1. 几个基本概念
- [webpack](https://webpack.js.org/) => 模块加载器 => 必须有node才能使用
- webpack就是node里面的一个包
- npm、cnpm、bower、yarn => 包管理器
- 根据官网显示，几乎任何web文件，经过webpack入口处理之后，基本就只有四种文件
  - js、css、jpg、png

### 2. 安装webpack
- 使用之前需要安装两个命令环境
  - `npm install webpack -g`
  - `npm install webpack-dev-server -g` => 小服务器
    - 这个需要基于webpack
- 查看是否安装只需要执行`webpack -v`
  - 会显示出三个已安装文件
    - webpack 5.25.1
    - webpack-cli 4.4.0
    - webpack-dev-server 3.11.2

### 3. webpack的组成
- 需要有一个入口和出口
  - webpack本质就是把入口文件压缩成一个文件，让你的html去引用达到最精简的效果，还可以把你的代码进行压缩
- 有一个loader（加载器）
- 还可以安装插件 => plugins

### 4. 运行一个简单的webpack
> 需要一个配置文件才可以运行 => webpack.config.js
- 创建脚本
```html
<!-- 
  cd xxx => touch webpack.config.js
  touch index.html
  touch index.js
  进入到webpack.config.js根路径
  命令行执行命令 => webpack => 打包完成，执行index.html
-->

<!-- webpack.config.js -->
<script>
// 输出一个东西
module.exports = {
    // 入口文件 => 自己写的文件
    entry: './index.js',

    // 出口文件 => 打包之后的文件
    output: {
      // 打包之后文件的名字
      filename: 'bundle.js',
    }
}
</script>

<!-- index.html -->
<script src="deist/bundle"></script>

<!-- index.js -->
alert(1);
```

### 5. webpack的其他功能
1. 自动打包与实时刷新
  - `webpack -w` => 在脚本运行之后，每次保存都会自动编译，打包文件会做响应修改
    - 这里的w是watch的意思，表示持续监听，并且打包
  - `webpack -p` => 现在已经失效了
    - 压缩打包
  - `webpack -pw` => 现在已经失效了
    - 压缩打包并且持续监听
2. 支持es6模块语法
```html
<!-- index.js -->
<script>
  import {a,b} from './a'
</script>

<!-- a.js -->
<script>
  export const a=1;
  export const b=2;

  // 或

  let a=1, b=2;
  export{a, b}
</script>

<!-- 或打包一个对象 -->

<!-- index.js -->
<script>
  import json from './a'
</script>

<!-- a.js -->
<script>
  export default {
    a: 1,
    b: 2
  }
</script>
```
  
