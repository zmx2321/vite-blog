// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { useData } from "vitepress";
import SiteList from "./components/SiteList.vue";
import SiteFooter from "./components/SiteFooter.vue";
import Home from "./components/Home.vue";
import BackTop from "./components/BackTop.vue";
import InsidePage from "./components/InsidePage.vue";
import ImgViewer from "./components/ImgViewer.vue";

import DefaultTheme from "vitepress/theme";
import "./styles/custom.scss";
import "./styles/site.scss";
import "./styles/rainbow.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// #48a6c0;
console.log(
  `%c
                                       #    
                                 # # #  
         #                     #        
       # # # # # #             #        
     # # # # # # #               # #    
     #   #       #                 # #  
                 # #                 #  
                 #             # # #    
               # #           #          
           # # #             #          
       # # #                   # #      
       # #           # # # #     # #    
       # #         # # # # # #   # #    
       # #     # # #         # # #      
   # # # # # # # #           # # # #    
         # # #             #   # # #    
   # #                     # #   # # #  
                             #    
    `,
  `
    color: #df6a6a
    `,
);

export default {
  ...DefaultTheme,
  NotFound: () => "404", // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    app.use(ElementPlus);
    // 注册全局组件
    app.component("SiteList", SiteList);
    app.component("Home", Home);
    app.component("BackTop", BackTop);
    app.component("InsidePage", InsidePage);
    app.component("ImgViewer", ImgViewer);
  },
  // 自定义布局配置
  Layout: () => {
    const props = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }
    return h(DefaultTheme.Layout, props, {
      // 自定义文档底部
      "doc-after": () => h(SiteFooter),
    });
  },
};
