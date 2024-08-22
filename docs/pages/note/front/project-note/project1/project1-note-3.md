# 实现全局水印功能
> 本项目的水印有以下几个要求
> - 在所有功能页面显示(即在登录注册页面不显示)
> - 需要设置成可配置项,在若依框架中在服务端进行配置显示或者隐藏
> - 水印需要显示用户信息
> - 水印不能被遮挡,不能只设置成背景,并且不影响正常的业务点击
> - 水印全屏显示,并且在滚动条滚动时,水印要一直存在

## 若依框架配置水印是否显示
- 参数设置键值对,不显示为true,否则一直显示
- 在store中设置config配置,以便在全局获取参数
```js
import { defineStore } from 'pinia'
import { listConfig } from "@/api/system/config";

export const useConfigStore = defineStore({
  id: 'config',

  state: () => ({
    configList: []
  }),

  actions: {
    getConfigList() {
      return new Promise((resolve, reject) => {
        let params = {
          pageNum: 1,
          pageSize: 999
        }
        listConfig(params).then(res => {
          this.configList = res.rows

          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
})

export default useConfigStore


// 使用store获取参数列表
import { useConfigStore } from '@/store/modules/config.js'  // store
const configStoreData = useConfigStore()
const { configList } = configStoreData

// 如果水印参数为false,则不显示
let waterMarkerConfig = configList.filter(item => item.configKey === 'sys.waterMarker')[0]

if (waterMarkerConfig && waterMarkerConfig.configValue === 'false') {
    return
}
```

## 全局实现水印功能
- 新建水印js文件 ➡️ `@/utils/watermark.js`
```js
const watermark = (settings) => {
    // 默认设置
    const defaultSettings = {
        watermark_txt: "text",
        watermark_align: "left",
        watermark_x: 20, //水印起始位置x轴坐标
        watermark_y: 20, //水印起始位置Y轴坐标
        watermark_rows: 20, //水印行数
        watermark_cols: 20, //水印列数
        watermark_x_space: 70, //水印x轴间隔
        watermark_y_space: 50, //水印y轴间隔
        watermark_color: '#aaa', //水印字体颜色
        watermark_alpha: 0.4, //水印透明度
        watermark_fontsize: '15px', //水印字体大小
        watermark_font: '微软雅黑', //水印字体
        watermark_width: 210, //水印宽度
        watermark_height: 80, //水印长度
        watermark_angle: 30 //水印倾斜度数
    };

    if (settings && typeof settings === "object") {
        for (let key in settings) {
            if (settings[key] && defaultSettings[key] && settings[key] === defaultSettings[key]) {
                continue
            } else if (settings[key]) {
                defaultSettings[key] = settings[key];
            }
        }
    }
    let oTemp = document.createDocumentFragment();
    //获取页面最大宽度
    let page_width = Math.max(document.body.scrollWidth, document.body.clientWidth);
    let cutWidth = page_width * 0.0150;
    page_width = page_width - cutWidth;
    //获取页面最大高度
    // let page_height = Math.max(document.body.scrollHeight, document.body.clientHeight) + 450;
    let page_height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + 450
    page_height = Math.max(page_height, window.innerHeight - 30);

    //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
        defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
        defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
        defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
        defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
    }
    let x;
    let y;
    for (let i = 0; i < 6; i++) {
        y = (defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i) + 70;
        for (let j = 0; j < defaultSettings.watermark_cols; j++) {
            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
            let mask_div = document.createElement('div');
            mask_div.id = 'mask_div' + i + j;
            mask_div.className = 'mask_div';
            mask_div.innerHTML = defaultSettings.watermark_txt;
            // mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
            //设置水印div倾斜显示
            mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.visibility = "";
            mask_div.style.position = "absolute";
            mask_div.style.left = x + 'px';
            mask_div.style.top = y + 'px';
            mask_div.style.overflow = "hidden";
            mask_div.style.zIndex = "9999";
            mask_div.style.pointerEvents = 'none';  //让水印不遮挡页面的点击事件
            mask_div.style.opacity = defaultSettings.watermark_alpha;
            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
            mask_div.style.fontFamily = defaultSettings.watermark_font;
            mask_div.style.color = defaultSettings.watermark_color;
            mask_div.style.textAlign = defaultSettings.watermark_align;
            mask_div.style.lineHeight = '22px';
            mask_div.style.width = defaultSettings.watermark_width + 'px';
            mask_div.style.height = defaultSettings.watermark_height + 'px';
            mask_div.style.display = "block";
            oTemp.appendChild(mask_div);
        };
    };
    document.body.appendChild(oTemp);
}

export default watermark;

// 使用
import watermark from './watermark.js'
watermark.setWatermark()  // 默认参数
watermark.setWatermark({ watermark_txt: '测试水印', watermark_id: 'wm_div_id'})  // 自定义参数
// 里面任意参数都可以自定义,以对象的形式传入
watermark.setWatermark(
    {
        watermark_txt: "text",
        watermark_align: "left",
        watermark_x: 20, //水印起始位置x轴坐标
        watermark_y: 20, //水印起始位置Y轴坐标
        watermark_rows: 20, //水印行数
        watermark_cols: 20, //水印列数
        watermark_x_space: 70, //水印x轴间隔
        watermark_y_space: 50, //水印y轴间隔
        watermark_color: '#aaa', //水印字体颜色
        watermark_alpha: 0.4, //水印透明度
        watermark_fontsize: '15px', //水印字体大小
        watermark_font: '微软雅黑', //水印字体
        watermark_width: 210, //水印宽度
        watermark_height: 80, //水印长度
        watermark_angle: 30 //水印倾斜度数
    }
)
```
- 这时候基本的水印功能差不多完成了
- 注意点: 
    - css设置`pointerEvents: none`,可以让业务代码点击水印的时候不触发点击事件
    - 在若依框架的layout文件下面使用,可以作用到全局业务代码上

## 遇到问题并解决问题
- 如果页面很长,水印会只显示一部分,所以需要设置水印的高度,让水印可以显示在页面的最底部
    - 所以这时候需要给滚动条比较长的页面传入一个高度,让水印可以显示在页面的最底部
- 其他页面如何通知layout组件来重新渲染水印
- 因为页面一开始就渲染了水印,设置具体页面高度之后,水印会重复渲染
- 因为页面一加载就会显示水印,并且只执行一次,如果设置具体页面高度之后,在其他正常页面高度不会进行相对应的变化

### 如何设置水印高度
- 我们需要将高度传入进去,同时我们也需要自定义水印内容,代码作如下修改
```js
const setWaterMarker = (watermark_height = 80) => {
  const { nickName, phonenumber } = userStoreData.userMseeage

  watermark({
    watermark_txt: `<p>${nickName}<br />${phonenumber}</p>`,
    watermark_height
  });
}
```

### 其他页面通知(订阅)layout组件渲染水印
- 我们使用mitt工具来进行发布订阅事件
```js
// '@/utils/mittBus.js'
import mitt from "mitt";
const mittBus = mitt();
export default mittBus;

// setWaterMarker方法不变,我们在订阅中调用该方法

// layout组件
import mittBus from '@/utils/mittBus.js'
import watermark from '@/utils/watermark.js'

mittBus.on("setWaterMarker", (watermark_height) => {
    console.log("设置水印", watermark_height);

    setWaterMarker(watermark_height)
});

// 其他页面
import mittBus from '@/utils/mittBus.js'
mittBus.emit("setWaterMarker", 130);
```

### 在每次设置水印之前先进行初始化
- 水印是通过生成dom来进行显示的,我们在生成水印之前,先判断是否存在水印,如果存在先进行晴空,代码如下
```js
const maskDivList = document.querySelectorAll('.mask_div')
maskDivList.forEach(item => {
    item.remove()
})
```

### 监听路由,保证每次跳转重新渲染水印
- 为了保证我们改变高度渲染水印之后不影响其他页面水印的渲染情况,得对路由进行监听,在特别长的页面需要修改水印高度,其他页面则使用默认值
- 我们使用`router.beforeEach`这个钩子来对路由进行监听,并且把mitt事件放到路由守卫当中
- 同时为了判断当前是否需要进行派发事件,需要使用一个标识进行判断,代码如下
```js
import { useRouter /* useRoute */ } from "vue-router";

const router = useRouter();

router.beforeEach((to, from, next) => {
   // console.log('路由即将改变：', from.path, '->', to.path);

  let flag = false

  mittBus.on("setWaterMarker", (watermark_height) => {
    console.log("设置水印", watermark_height);

    flag = true

    setWaterMarker(watermark_height)
  });
  
  if (!false) {
    setWaterMarker()
  }
  next();
})
```

## 最终代码
- `@/utils/watermark.js`
```js
import { useConfigStore } from '@/store/modules/config.js'  // store

const watermark = (settings) => {
    const configStoreData = useConfigStore()

    let waterMarkerConfig = configStoreData.configList.filter(item => item.configKey === 'sys.waterMarker')[0]

    if (waterMarkerConfig && waterMarkerConfig.configValue === 'false') {
        return
    }

    let maskDivList = document.querySelectorAll('.mask_div')

    maskDivList.forEach(item => {
        item.remove()
    })

    // 默认设置
    const defaultSettings = {
        watermark_txt: "text",
        watermark_align: "left",
        watermark_x: 20, //水印起始位置x轴坐标
        watermark_y: 20, //水印起始位置Y轴坐标
        watermark_rows: 20, //水印行数
        watermark_cols: 20, //水印列数
        watermark_x_space: 70, //水印x轴间隔
        watermark_y_space: 50, //水印y轴间隔
        watermark_color: '#aaa', //水印字体颜色
        watermark_alpha: 0.4, //水印透明度
        watermark_fontsize: '15px', //水印字体大小
        watermark_font: '微软雅黑', //水印字体
        watermark_width: 210, //水印宽度
        watermark_height: 80, //水印长度
        watermark_angle: 30 //水印倾斜度数
    };

    if (settings && typeof settings === "object") {
        for (let key in settings) {
            if (settings[key] && defaultSettings[key] && settings[key] === defaultSettings[key]) {
                continue
            } else if (settings[key]) {
                defaultSettings[key] = settings[key];
            }
        }
    }
    let oTemp = document.createDocumentFragment();
    //获取页面最大宽度
    let page_width = Math.max(document.body.scrollWidth, document.body.clientWidth);
    let cutWidth = page_width * 0.0150;
    page_width = page_width - cutWidth;
    //获取页面最大高度
    // let page_height = Math.max(document.body.scrollHeight, document.body.clientHeight) + 450;
    let page_height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + 450
    page_height = Math.max(page_height, window.innerHeight - 30);

    // console.log(page_height)

    //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
        defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
        defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
    }
    //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
        defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
        defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
    }
    let x;
    let y;
    for (let i = 0; i < 6; i++) {
        y = (defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i) + 70;
        for (let j = 0; j < defaultSettings.watermark_cols; j++) {
            x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
            let mask_div = document.createElement('div');
            mask_div.id = 'mask_div' + i + j;
            mask_div.className = 'mask_div';
            mask_div.innerHTML = defaultSettings.watermark_txt;
            // mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
            //设置水印div倾斜显示
            mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
            mask_div.style.visibility = "";
            mask_div.style.position = "absolute";
            mask_div.style.left = x + 'px';
            mask_div.style.top = y + 'px';
            mask_div.style.overflow = "hidden";
            mask_div.style.zIndex = "9999";
            //让水印不遮挡页面的点击事件
            mask_div.style.pointerEvents = 'none';
            mask_div.style.opacity = defaultSettings.watermark_alpha;
            mask_div.style.fontSize = defaultSettings.watermark_fontsize;
            mask_div.style.fontFamily = defaultSettings.watermark_font;
            mask_div.style.color = defaultSettings.watermark_color;
            mask_div.style.textAlign = defaultSettings.watermark_align;
            mask_div.style.lineHeight = '22px';
            mask_div.style.width = defaultSettings.watermark_width + 'px';
            mask_div.style.height = defaultSettings.watermark_height + 'px';
            mask_div.style.display = "block";
            oTemp.appendChild(mask_div);
        };
    };
    document.body.appendChild(oTemp);
}

export default watermark;
```
- `layout/index.vue`
```js
import { useRouter } from "vue-router";
import mittBus from "@/utils/mittBus"; // mitt - 组件传参工具

const router = useRouter();

// 路由监听,并接收其他组件派发的方法
router.beforeEach((to, from, next) => {
  let flag = false

  mittBus.on("setWaterMarker", (watermark_height) => {
    console.log("设置水印", watermark_height);

    flag = true

    setWaterMarker(watermark_height)
  });
  // console.log('路由即将改变：', from.path, '->', to.path);
  if (!false) {
    setWaterMarker()
  }
  next();
})

/**
 * 设置水印
 */
const setWaterMarker = (watermark_height = 80) => {
  const { nickName, phonenumber } = userStoreData.userMseeage
  // console.log(userStoreData, nickName, phonenumber)

  watermark({
    watermark_txt: `<p>${nickName}<br />${phonenumber}</p>`,
    watermark_height
  });
}
setWaterMarker()
```
- 最终具体页面使用
```js
import mittBus from "@/utils/mittBus"; // mitt - 组件传参工具
mittBus.emit("setWaterMarker", 130);
```

## 最后的彩蛋
- 最后发现以上的方案还是有问题,痛定思痛,换了个角度思考
- 能不能让水印固定在页面上不随页面的滚动而滚动
- 将上面的代码作如下变化
```js
// ......

let watermarker_wrap = document.createElement("div");
watermarker_wrap.style.position = "fixed";
watermarker_wrap.style.top = "0";
watermarker_wrap.style.left = "0";
watermarker_wrap.style.width = "100%";
watermarker_wrap.style.height = "100%";
watermarker_wrap.style.zIndex = "999999";
watermarker_wrap.style.pointerEvents = 'none';
document.body.appendChild(watermarker_wrap);

// ......
watermarker_wrap.appendChild(oTemp);
```
- 但转念一想,如果只是遍历水印内容,用css固定,完全可以不用这么麻烦
```vue
<div v-if="JSON.stringify(urlObj) !== '{}'" class="watermarker_wrap">
  <div class="item_warp"  v-for="(item1, i1) in 8" :key="i1" :style="`top:${140 * i1}px`">
    <div class="item" v-for="(item, i) in 10" :key="i" :style="`left:${200 * i + 20}px`">
      <p style="margin-bottom: 3px">{{ urlObj.userName }}&nbsp;&nbsp;{{ urlObj.suffixPhone }}</p>
      <p>
        {{ `${new Date().getFullYear()}`.slice(2) }}
        {{ `${new Date().getMonth() + 1}`.padStart(2, "0") }}
        {{ `${new Date().getDate()}`.padStart(2, "0") }}
      </p>
    </div>
  </div>
</div>

<style>
.watermarker_wrap {
  position: fixed;
  width: 100%;
  height: 1080px;
  top: 0;
  left: 0;
  z-index: 999999;
  pointer-events: none;

  .item_warp {
    position: absolute;
    height: 50px;
    width: 100%;
    left: 0;
    .item {
      position: absolute;
      top: 10px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.2);
      transform: rotateZ(-25deg);
    }
  }
}
</style>
```
<br />
  🤣 🤣 🤣  🐶 🐶 🐶