# vitePress-project
基于vitePress搭建的个人轻型博客项目，从零开始用vitePress搭建的静态页面项目模板

预览地址：[https://zmx2321.github.io/vite-blog/](https://zmx2321.github.io/vite-blog/)


## 目录说明
```shell
vitePress-project
  |-docs
    |─.vitepress         // vitepress配置目录（包含网站基本信息配置、自定义主题、顶部、侧边导航配置等）
      |─theme            // 自定义主题配置（自定组件）
      |─config.js        // vitepress网站的基本配置
      |─config           // 导航总配置
        |─navConfig      // 顶部导航配置
        |─sideBarConfig   // 侧边导航配置 - 增删大模块时修改
          |─sidebarManage // 侧边导航配置 - 增删侧栏模块时修改
            |─xxxItems    // 侧边导航配置 - 增删具体页面时修改
    |─about               // 存放关于我们文档的目录
    |─examples            // 存放组件使用文档的目录（引入第三方组件使用的案例页面）
    |─guide               // 存放开始使用向导页面文档的目录
    |─pages               // 主要笔记目录
    |─public              // 静态资源存放目录（图片）
    |─index.md            // 首页内容配置
```

