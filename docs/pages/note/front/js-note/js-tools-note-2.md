## 常用js工具方法

## 判断对象是否为空
```js
export const objIsEmpty = obj=> {
    if(JSON.stringify(obj) == '{}' ){
        return true;
    }

    return false;
};
```

## 数组去重
```js
// 数组去重
export const uniqueArr = (arr)=> {
    return Array.from(new Set(arr))
}
```

## 去字符串所有空格
```js
// 去字符串所有空格
export const replaceSpace = str=> {
    return str.replace(/\s*/g,"");
}
```

## 去除字符串末尾逗号
```js
// 去除字符串末尾逗号
export const delComma = str=> {
    return str.replace(/,$/gi,"");
}
```

## format+blob下载
```js
// 重写通用下载方法 - 原生
export const download = (url, params, filename, status)=> {
  // console.log(url, params, filename)

  // 下载附件公共方法
  let createObjectURL = (object) => {
    return window.URL
      ? window.URL.createObjectURL(object)
      : window.webkitURL.createObjectURL(object);
  };

  // 使用原生xhr并添加请求头
  let xhr = new XMLHttpRequest();
  let formData = new FormData();

  // 添加formdata
  for (let item in params) {
    formData.append(item, params[item]);
  }

  /* for (let keys of formData.entries()) {
    console.log(keys);
  } */

  if (!status) {
    xhr.open("get", url);
  } else {
    xhr.open("post", url);
  }

  // 请求头
  let token = "Bearer " + getToken();
  xhr.setRequestHeader("Authorization", token);
  xhr.responseType = "blob";

  // 加载
  xhr.onload = function (e) {
    if (this.status == 200) {
      let blob = this.response;
      // console.log(blob)

      if (filename === undefined) {
        console.log("文件名为空");
      }

      // 如果文件名不存在
      if (!filename) {
        filename = "code.zip";
      } else {
        if (filename.toString().indexOf(".") === -1) {
          filename = `${filename.toString()}.zip`;
        }
      }
      console.log(filename);

      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
      } else {
        let a = document.createElement("a");
        let url = createObjectURL(blob);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    }
  };

  xhr.send(formData); // 发送formdata到xhr
}

this.download(url, 555);
```

## 时间戳
```js
// 设置时间戳 - 显示
export const getDateTimeNowFormate = (time) => {
  time = new Date();
  let year = time.getFullYear(); // 年
  let month = time.getMonth() + 1; // 月
  let date = time.getDate(); // 日
  let hour = time.getHours(); // 时
  let minute = time.getMinutes(); // 分
  let second = time.getSeconds(); // 秒

  let day = time.getDay(); // 获取当前星期几
  let weekday = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  // console.log(weekday[day])

  // 加上0
  month < 10 ? (month = `0${month}`) : month; // 月
  date < 10 ? (date = `0${date}`) : date; // 日
  hour < 10 ? (hour = `0${hour}`) : hour; // 时
  minute < 10 ? (minute = `0${minute}`) : minute; // 分
  second < 10 ? (second = `0${second}`) : second; // 秒

  return `${year}-${month}-${date} ${hour}:${minute}:${second} ${weekday[day]}`;
};
```

## 深拷贝
```js
// 深拷贝
export const deepClone = (obj = {}) => {
  // obj是null，或者不是对象或数组，直接返回
  if (typeof obj !== "object" || obj == null) {
    // 递归里面，如果是值，直接返回
    return obj;
  }

  // 递归中如果遇到对象里面的值是对象或者数组，走下面的逻辑
  // 初始化返回结果
  let result;
  // 判断是否是数组
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  // 无论对象还是数组，都可以使用for in遍历
  for (let key in obj) {
    // 判断这个key是不是这个对象自身所拥有的属性
    // 保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归(重点)
      // obj[key]表示值
      // 递归是为了防止对象中有深层次的东西，因为你不知道要拷贝的对象中有多少层
      result[key] = deepClone(obj[key]);
    }
  }

  // 返回结果
  return result;
};
```

## 防抖

```js
// 防抖
export const debounce = (fn, delay = 500) => {
  // timer是在闭包中的 => 下面的if(timer)
  // 这样不会被外界轻易拿到 => 即不对外暴露
  // 我们在外面使用不需要关心
  // 同时也是在debounce的作用域中
  // 闭包的使用场景：函数当做返回值或者参数传入
  let timer = null;

  // 函数作为返回值，这就形成闭包了
  return function () {
    // 这里面的timer需要在它定义的作用域往上寻找
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      // 触发change事件
      // 第一个参数是改变this指向
      // 第二个参数是获取所有的参数
      // apply第二个参数开始，只接收数组
      // fn函数在执行的时候，argument传进来
      // debounce返回的函数可能会传进来一些参数
      // 面试使用fn()也没问题
      // fn()
      fn.apply(this, arguments);

      // 清空定时器
      timer = null;
    }, delay);
  };
};
```

## 节流
```js
// 节流
export const throttle = (fn, delay = 100) => {
  let timer = null; // 这个timer是在闭包里面的

  // 如果不使用apply改变this指向，下面的throttle方法的参数指向这个函数
  // 不会传给下面的那个fn
  return function () {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      // 一般写一个事件，function里面都要加上event参数，即事件对象
      fn.apply(this, arguments); // 打印坐标

      timer = null;
    }, delay);
  };
};

// 判断对象为空
export const objIsEmpty = (obj) => {
  if (JSON.stringify(obj) == "{}") {
    return true;
  }

  return false;
};
```

## 获取路径扩展名
```js
// 获取路径扩展名
export const getFileprefix = (url) => {
  // 获取最后一个.的位置
  let index = url.lastIndexOf(".");
  // 获取后缀
  let ext = url.substr(index + 1);

  return ext;
};
```

## 使用递归思想将对象所有 null 转化成空字符串
```js
obj: {
  a: null,
  b: "",
  c: 1,
  d: ['1', '2', null],
  e: {
    e1: null,
    e2: undefined,
    e3: 1,
    e4: '123',
    e5: false,
    e6: {
      e61: [1, 2, 4, undefined, null, 3],
      e62: null,
      e63: undefined,
      e64: {
        e641: null,
        e642: "123",
        e643: true
      }
    }
  }
}

export const setObj = (obj)=> {
  // 判断是否是对象或数组
  const isObj = obj=> {
    return typeof obj === 'object' && obj !== null
  }

  // 遍历
  for(let key in obj) {
    if(obj[key] == null) {
      obj[key] = ''
    }
    // 对象或者数组
    if(isObj(obj[key])) {
      this.setObj(obj[key])
    }
  }

  return obj
},
```

## 根据 url 获取文件名
```js
exoprt const getUrlsub = (urlStr)=> {
  let file = urlStr.substring(urlStr.lastIndexOf('/') + 1, urlStr.lastIndexOf('.') );

  return file
},

getUrlsub(row.fileUrl)
```

## map转对象数组
```js
export function mapToOptions(map) {
  let arr = Array.from(map).map((item) => {
    return {
      label: item[1],
      value: item[0]
    }
  })

  return [
    {
      label: '全部',
      value: ''
    },
    ...arr
  ]
}
```

## 添加水印
```js
const addWaterMarker = (str, parentNode, font, textColor) => {
  // 水印文字，父元素，字体，文字颜色
  let can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 205
  can.height = 140
  can.style.display = 'none'
  let cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(str, can.width / 10, can.height / 2)
  parentNode.style.backgroundImage = `url(${can.toDataURL('image/png')})`
}

const addWaterMarkerLine = (str, parentNode, font, textColor) => {
  str = "这是一个多行\n水印示例\n第三行"

  /// 水印文字，父元素，字体，文字颜色
  let can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 360
  can.height = 250
  can.style.display = 'none'
  let ctx = can.getContext('2d')
  ctx.rotate((-20 * Math.PI) / 180)
  ctx.font = font || '16px Microsoft JhengHei'
  ctx.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'Middle'
  var lines = str.split('\n');
  var y = can.height / 2;
  var lineHeight = ctx.measureText('M').width + 10;
  // 绘制多行水印
  lines.forEach(function (line) {
    ctx.fillText(line, can.width / 2, y);
    y += lineHeight;
  });
  parentNode.style.backgroundImage = `url(${can.toDataURL('image/png')})`
}

const waterMarker = {
  mounted(el, binding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  }
}

export default waterMarker
```

## dom添加水印,全部层级可用
```js

const watermark = () => {
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
    let page_height = Math.max(document.body.scrollHeight, document.body.clientHeight) + 450;
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

watermark({
  watermark_txt: `<p>${nickName}<br />${phonenumber}</p>`,
  watermark_align: "center",
});
```

## 判断两个对象是否相同
```js
export function isObjectValueEqual(a, b) {
  if (!a || !b) return false
  let aProps = Object.getOwnPropertyNames(a)
  let bProps = Object.getOwnPropertyNames(b)
  if (aProps.length !== bProps.length) return false
  for (let i = 0; i < aProps.length; i += 1) {
    let propName = aProps[i]
    let propA = a[propName]
    let propB = b[propName]
    // eslint-disable-next-line no-prototype-builtins
    if (!b.hasOwnProperty(propName)) return false
    if (propA instanceof Object) {
      if (!isObjectValueEqual(propA, propB)) return false
    } else if (propA !== propB) {
      return false
    }
  }
  return true
}
```

## 正则校验
```js
export const checkInput = (str, type) => {
  // 校验
  switch (type) {
    case 'phone': // 手机号码
      return /^1[0-9]{10}$/.test(str)
    case 'tel': // 座机
      return /^(0d{2,3}-d{7,8})(-d{1,4})?$/.test(str)
    case 'card': // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': // 密码以字母开头，只能包含字母、数字和下划线
      return /^[a-zA-Z]w{5,17}$/.test(str)
    case 'postal': // 邮政编码
      return /[1-9]d{5}(?!d)/.test(str)
    case 'QQ': // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': // 邮箱
      return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(str)
    case 'money': // 金钱(小数点两位)
      return /^d*(?:.d{0,2})?$/.test(str)
    case 'IP': // IP
      return /((?:(?:25[0-5]|2[0-4]d|[01]?d?d).){3}(?:25[0-5]|2[0-4]d|[01]?d?d))/.test(str)
    case 'date': // 日期时间
      return /^(d{4})-(d{2})-(d{2}) (d{2})(?::d{2}|:(d{2}):(d{2}))$/.test(str) || /^(d{4})-(d{2})-(d{2})$/.test(str)
    case 'number': // 数字
      return /^[0-9]$/.test(str)
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': // 中文
      return /^[u4E00-u9FA5]+$/.test(str)
    case 'lower': // 小写
      return /^[a-z]+$/.test(str)
    case 'upper': // 大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    case 'input': // 常用输入框
      return /^[\u4e00-\u9fa5A-Za-z0-9]{1,20}/.test(str)
    case 'notChinese':
      return /^[A-Za-z0-9]+$/.test(str)
    default:
      return true
  }
}
```

## blob根据地址下载
> 已知资源地址可以在浏览器直接打开,下载的话，需要将资源地址转换成blob文件流，创建a标签进行下载
### 方案一
```js
import { ElMessage, ElLoading } from 'element-plus'

const urlToBlobBase64 = (url) =>
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.responseType = 'blob'
    xhr.onload = function () {
      if (xhr.status === 200) {
        let blob = this.response
        let oFileReader = new FileReader()
        oFileReader.onloadend = function (e) {
          resolve({ blob, base64: e.target.result, dataURL: oFileReader.result })
        }
        oFileReader.readAsDataURL(blob)
      } else {
        reject(new Error('异常'))
      }
    }
    xhr.send()
    xhr.onerror = () => {
      reject(new Error('异常'))
    }
  })

export const downloadFileLink = async (url, fileName) => {
  // console.log(url, fileName)

  const loading = ElLoading.service({
    lock: true,
    text: '正在下载，请稍后....',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  urlToBlobBase64(url).then((blob) => {
    // console.log(blob, fileName, 6666)

    try {
      loading.close()
      ElMessage.success('下载完成！')
      const href = window.URL.createObjectURL(blob.blob) // 创建下载的链接
      console.log(blob, fileName, href)
      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, fileName)
      } else {
        // 谷歌浏览器 创建a标签 添加download属性下载
        const downloadElement = document.createElement('a')
        downloadElement.href = href
        downloadElement.target = '_blank'
        downloadElement.download = fileName
        document.body.appendChild(downloadElement)
        downloadElement.click() // 点击下载
        document.body.removeChild(downloadElement) // 下载完成移除元素
        window.URL.revokeObjectURL(href) // 释放掉blob对象
      }
    } catch (e) {
      console.log('下载失败')
    }
  })
}

downloadFileLink(url, name)
```
### 方案二
```js
async function xhrequest(url, callback) {
    let DownUrl = url;
    let data = await fetch(DownUrl)
        .then((response) => response.blob())
        .then((res) => {
            //获取文件格式
            var index = DownUrl.lastIndexOf(".");
            //获取文件后缀判断文件格式
            var fileType = DownUrl.substr(index + 1);
            let blod = new Blob([res]);
            if (typeof callback == "function") {
                callback(blod, fileType)
            }
        });
    return data;
}

xhrequest('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c1630b19-f7b9-499c-86e9-9cbeb84e37e7/d36420ac-51f8-45f7-965d-0d6a21989c4f.jpg',
    function (blob, type) {
        downloadBlob(blob, "自定义名称" + '.' + type)
    }
)
```

## 全屏
```js
const fullScreen = () => {
  if (document.fullscreenElement) {
    //取消全屏
    document.exitFullscreen();
  } else {
    //页面全屏
    document.documentElement.requestFullscreen();
  }
};
```

## 大屏自适应
### 计算scale实现自适应
- 防抖
```js
// 防抖
export const debounce = (fn, delay = 500) => {
  // timer是在闭包中的 => 下面的if(timer)
  // 这样不会被外界轻易拿到 => 即不对外暴露
  // 我们在外面使用不需要关心
  // 同时也是在debounce的作用域中
  // 闭包的使用场景：函数当做返回值或者参数传入
  let timer = null;

  // 函数作为返回值，这就形成闭包了
  return function () {
      // 这里面的timer需要在它定义的作用域往上寻找
      if (timer) {
          clearTimeout(timer)
      }

      timer = setTimeout(() => {
          // 触发change事件
          // 第一个参数是改变this指向
          // 第二个参数是获取所有的参数
          // apply第二个参数开始，只接收数组
          // fn函数在执行的时候，argument传进来
          // debounce返回的函数可能会传进来一些参数
          // 面试使用fn()也没问题
          // fn()
          fn.apply(this, arguments)

          // 清空定时器
          timer = null
      }, delay)
  }
}
```
- SacaleAuto组件
```html
<template>
    <section class="container">
        <!-- 大屏展示区 -->
        <div class="scale_box" :style="{ width: width + 'px', height: height + 'px' }">
            <slot></slot>
        </div>
    </section>
</template>

<script setup name="ScaleBox">
import { onMounted, ref, watch, onUnmounted } from "vue";
import { debounce } from '@/utils/index.js'

/** props 参数 */
const props = defineProps({
    width: {
        type: Number,
        default: 1920
    },
    height: {
        type: Number,
        default: 1080
    },
});
/** 公共数据 */
const width = ref(props.width)
const height = ref(props.height)
let scale = ref({
    w: 1,
    h: 1,
});

/**
 * 业务方法
 */
const getScale = () => {
    const w = window.innerWidth / width.value;
    const h = window.innerHeight / height.value;
    let scale = w < h ? w : h;
    return [scale, scale];
};
const setScale = (e) => {
    // 缩放比
    scale.value.h = getScale()[0];
    scale.value.w = getScale()[1];
};
let reCalc = debounce(setScale);

/** 监听 */
watch(
    () => width.value,
    () => {
        setScale();
    }
);

/** 生命周期 */
onMounted(() => {
    setScale();
    window.addEventListener("resize", reCalc);
});
onUnmounted(() => {
    window.removeEventListener("resize", reCalc);
});
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: rgba(255, 0, 0, 0.3);
    background-size: cover;

    .scale_box {
        position: fixed;
        // transform: scale(v-bind('scale.h')) translate(-50%, -50%);
        transform: scale(v-bind("scale.w"), v-bind("scale.h")) translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        transform-origin: top left;
        left: 50%;
        top: 50%;
        transition: 0.2s;
        z-index: 999;
        background: #c8f8e3;
    }
}
</style>
```
- 使用组件
```html
<template>
  <scale-box :width="scaleConfig.pageWidth" :height="scaleConfig.pageHight">
    //自适应内容
  </scale-box>
</template>

<script setup name="screen">
import { ref } from "vue";
import ScaleBox from '@/components/SacaleAuto/index.vue'

const scaleConfig = ref({
  pageWidth: 1920,
  pageHight: 1080,
});
// scaleConfig.value.pageHight = window.screen.availHeight;
// scaleConfig.value.pageWidth = window.screen.availWidth;
</script>

<style lang="scss" scoped></style>
```

### 或者使用 autofit npm包
```js
import autofit from 'autofit.js'

// autofit.init()
/* autofit.init(
  {
    dh: 1080,
    dw: 1920,
    el: '#app',
    // resize: true,
    ignore: ['.demo_wrap']
  },
  false
) */
```

## js拷贝
```js
export const copyTextToClipboard = async (text, next) => {
  // navigator clipboard 需要https等安全上下文
  if (navigator.clipboard && window.isSecureContext) {
    // navigator clipboard 向剪贴板写文本
    next(text)
    return navigator.clipboard.writeText(text);
  } else {
    // document.execCommand('copy') 向剪贴板写文本
    let input = document.createElement('input')
    input.style.position = 'fixed'
    input.style.top = '-10000px'
    input.style.zIndex = '-999'
    document.body.appendChild(input)
    input.value = text
    input.focus()
    input.select()
    try {
      let result = document.execCommand('copy')
      document.body.removeChild(input)
      if (!result || result === 'unsuccessful') {
        console.log('复制失败')
      } else {
        // console.log('复制成功')
        next(text)
      }
    } catch (e) {
      document.body.removeChild(input)
      alert('当前浏览器不支持复制功能，请检查更新或更换其他浏览器操作')
    }
  }
}
```

## 判断数组是否为空
```js
export function arraysIsEmpty(...arrays) {
  return arrays.every(array => Array.isArray(array) && array.length === 0);
}
```

## 判断多个数组是否为空
```js
export function allArraysIsEmpty(arrays) {
  return arrays.every(function (array) {
    return array.length === 0;
  });
}

// 示例使用
var arrays = [[], [], [], [], [], [], [], [], [], []];
var result = areAllArraysEmpty(arrays);
console.log(result); // 输出 true 如果所有数组都是空的，否则输出 false
```

## 时间
```js
const getDateFormate = () => {
  let time = new Date();
  let year = time.getFullYear(); // 年
  let month = time.getMonth() + 1;  // 月
  let date = time.getDate();  // 日
  let hour = time.getHours();  // 时
  let minute = time.getMinutes();  // 分
  let second = time.getSeconds();  // 秒

  let day = time.getDay();  // 获取当前星期几
  let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  // console.log(weekday[day])

  // 加上0
  month < 10 ? month = `0${month}` : month;  // 月
  date < 10 ? date = `0${date}` : date;  // 日
  hour < 10 ? hour = `0${hour}` : hour;  // 时
  minute < 10 ? minute = `0${minute}` : minute;  // 分
  second < 10 ? second = `0${second}` : second;  // 秒


  return `${year}年${month}月${date}日 ${hour}:${minute}:${second} ${weekday[day]}`
}

setInterval(() => {
  console.log(getDateFormate())
}, 1000);
```