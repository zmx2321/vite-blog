# css工作积累

## 1. css实现从左往右渐变
`background: linear-gradient(to right,#2F76ED,#2451B1);`

## 2. 使用flex的几个应用场景
```html
<div class="time_box">
    <ul>
        <li>上班时间9:00</li>
        <li>下班时间18:00</li>
    </ul>
</div>
```
```css
.kq_main_bot .time_box {
    position: absolute;
    width: 50%;
    height: 90%;
    top: 5%;
    left: 20px;
}
```

> 2.1 使用flex上下对齐
```css
.time_box ul {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.time_box ul li:first-child {
    height: 93%;
}
```
> 2.2. 使用flex实现居中
```css
.time_box ul {
    display: flex;
    height: 100%;
    align-items: center;
}
```
> 2.3 使用flex实现居中,个别元素的对齐方式和其他的不一样
```css
.time_box ul {
    display: flex;
    height: 100%;
    align-items: center;
}
.time_box ul li:first-child {
    align-self: flex-end;
}
```

## 3. 浏览器下拉条样式
```css
/* sass/less */
.xxx {
    &::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }

    &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: rgba(144,147,153,.3);
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(144,147,153,.5)
    }

    &::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
    }
}
```

## 4. css p标签强制换行
```css
p {
    width: 100%;
    word-wrap: break-word;
    font-size: 13.5px;
}
```

## 5. css实现超出部分显示省略号
```css
/* 显示一行，省略号 */
p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
} 
    
 
/* 显示两行，省略号 */
p {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
} 
 
```

## 6. 清除浮动
```css
.f-cb:after,.f-cbli li:after{
    display:block;
    clear:both;
    visibility:hidden;
    height:0;
    overflow:hidden;
    content:".";
}
```

## 7. 文字渐变
```css
.font {
    background-image: linear-gradient(135deg,red,blue);
    -webkit-background-clip:text;
    color: transparent;
}
```

## 8. css初始化
- reset.css
    ```css
    /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    a, button{
        cursor:pointer;
    }
    h1, h2, h3, h4, h5, h6, em, strong, b{
        font-weight:bold;
    }

    del, ins, u, s, a, a:hover{
        text-decoration:none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .el-loading{
    position: absolute;
    z-index: 2000;
    background-color: rgba(255,255,255,.7);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
    }
    .el-loading-spinner{
    top: 50%;
    margin-top: -21px;
    width: 100%;
    text-align: center;
    position: absolute;
    }

    ```
- common.css
    ```css
    /**
     *  common css
     */
    /* ==========================================================================
    function
    ============================================================================ */
    /* 清除浮动 */
    .f-cb:after,.f-cbli li:after{display:block;clear:both;visibility:hidden;height:0;overflow:hidden;content:".";}
    /* inline-block */
    .f-ib li{display:inline-block;*display:inline;*zoom:1;}
    /* 浮动 */
    .f-fl{float:left;}
    .f-fr{float:right;}
    /* 显示/隐藏 */
    .f-dn{display:none;}
    .f-db{display:block;}
    /* relative */
    .f-pr{position:relative;}
    /* 溢出隐藏 */
    .f-oh{overflow:hidden;}
    /* font-size */
    .f-fs1{font-size:12px;}
    .f-fs2{font-size:14px;}
    /* font-weight */
    .f-fwn{font-weight:normal;}
    .f-fwb{font-weight:bold;}
    /* text-align */
    .f-tal{text-align:left;}
    .f-tac{text-align:center;}
    .f-tar{text-align:right;}
    /* justify */
    .f-taj{text-align:justify;text-justify:inter-ideograph;}
    /* 垂直居中 */
    .f-vam,.f-vama *{vertical-align:middle;}
    /* 字间距 */
    .f-ti2{text-indent:2em;}
    /* 行高 */
    .f-lhn{line-height:normal;}
    /* 下划线 */
    .f-tdu,.f-tdu:hover{text-decoration:underline;}
    .f-tdn,.f-tdn:hover{text-decoration:none;}
    /* 超出部分省略号 */
    .f-toe{overflow:hidden;word-wrap:normal;white-space:nowrap;text-overflow:ellipsis;}
    /* 鼠标样式 */
    .f-csp{cursor:pointer;}
    .f-csd{cursor:default;}
    .f-csh{cursor:help;}
    .f-csm{cursor:move;}
    /* 文本不能被选择 */
    .f-usn{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
    /* 边框圆角 */
    .bdr_radiu{border-radius: 4px;}

    /* ===============================================
        layout -- 不转换成rem - 主要修改第三方ui组件库
    ================================================= */
    .main_cont{
    padding: 8px 20px 0 20px;
    }

    [class*=" el-icon-"], [class^=el-icon-] {
    font-size: 16px;
    }
    ```

## 9. flex两边对齐，中间有间隙
```css
.wrap {
    width: 370px;
    height: 40px;
    bottom: 65px;
    left: 50%;
    transform: translateX(-50%);
}

ul {
    display: flex;
    justify-content: space-between;
}

li {
    margin-right: 1%;
    width: 47%;
    height: 100%;
    background: #000;
}
```

## 10. scss中做变量计算
```css
min-height: calc(100vh - #{$navbar} - #{$tagHeight});

calc(100% - #{$a})
```

## 11. 三角形
```html
<li>同比<b class="up">25.87%</b></li>

<style>
.compare {
    b {
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: -12px;
        top: 4px;
        width: 0px; /*设置宽高为0，所以div的内容为空，从才能形成三角形尖角*/
        height: 0px;
        border-left: 5px solid transparent; /*transparent 表示透明*/
        border-right: 5px solid transparent;
        overflow: hidden;
    }

    &.up::before {
        border-bottom: 10px solid #E54246;
    }

    &.down::before {
        border-top: 10px solid #22D9DB;
    }
    }
}
</style>
```

## 12. p标签左右对齐
```css
p {
    text-align:justify;
    text-justify:inter-ideograph;
}
```

## css向下箭头
```css
width: 0;
height: 0;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 5px solid #f00;
```

## css计算
```css
// 输入框宽度
@each $width in 180, 220, 240, 260, 300 {
  // @each可以遍历列表$list中的值
  .w#{$width} {
    width: #{$width}px !important; // 通过变量直接计算出每个class的transition-delay值
  }
}
/* 字号大小 */
@for $i from 12 through 40 {
  .ft#{$i} {
    font-size: #{$i}px !important;
  }
}

/* 外边距、内边距全局样式 */
@for $i from 0 through 40 {
  .mt#{$i} {
    margin-top: #{$i}px !important;
  }
  .mr#{$i} {
    margin-right: #{$i}px !important;
  }
  .mb#{$i} {
    margin-bottom: #{$i}px !important;
  }
  .ml#{$i} {
    margin-left: #{$i}px !important;
  }
  .pt#{$i} {
    padding-top: #{$i}px !important;
  }
  .pr#{$i} {
    padding-right: #{$i}px !important;
  }
  .pb#{$i} {
    padding-bottom: #{$i}px !important;
  }
  .pl#{$i} {
    padding-left: #{$i}px !important;
  }
}
```

## css flex纵向靠右对齐
```css
.x {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
}
```