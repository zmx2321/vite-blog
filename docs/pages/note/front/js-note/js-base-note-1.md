# js中基础理论及常用api

## 生成随机数
```js
// 生成随机数
getRandomNumber (m,n){
    return Math.floor(Math.random()*(m - n) + n);
},
```

## 播放videojs
```js
// 播放videojs
playVideoJS(videoName, videoId) {
    videoName = this.$video(videoId, {
        bigPlayButton: false,
        textTrackDisplay: false,
        posterImage: true,
        errorDisplay: false,
        controlBar: true,
    }, function () {
        this.play()
    });
},
```

## 两个按钮点击事件重叠在一起
- `event.stopPropagation();  // 原生js实现阻止冒泡-使点击眼睛只触发当前事件`

## 使用jquery实现一个上传功能
```js
// 上传图片
const uploadImg = ()=> {
    let formData = new FormData();

    $("#fUpload").change(()=> {
        let file = $("#fUpload")[0].files[0];

        formData.append('multipartFile', file);

        // console.log(formData.get("multipartFile"));  // 获取formData对象

        $.ajax({
           url: URL + "/api/upload/file",
           type: "POST",
           data:formData,
           processData: false,  // 如果想发送不想转换的的信息的时候需要手动将其设置为false
           contentType:false,
           cache:false,
           headers: {
                "X-Token":sessionStorage.getItem("token")//此处放置请求到的用户token
           },
           success: ()=> {
               alert("上传成功");
           },
           error: err=> {
               console.log(err);
           }
        });
    });
}
```

## jquery动态渲染
> jquery动态渲染出来的dom结构点击事件无法获取当前dom信息($(this))
```js
// 渲染按钮
btnStr = `
    <ul>
        <li>
            <button class="ac_btn sp_jj" data-ckid=${bxspdcl[item].expenseId}>拒绝</button>
        </li>
        <li>
            <button class="ac_btn sp_ty" data-ckid=${bxspdcl[item].expenseId}>同意</button>
        </li>
    </ul>
`;

// 审批-拒绝
$('body').on('click', '.sp_jj', e=> {
    utilTip.dspBtnParm.applyId = e.currentTarget.dataset.ckid;  // 审批id
});
```

## JavaScript根据经纬度获取距离信息
```js
//经纬度转换成三角函数中度分表形式。
function rad(d) {
  return d * Math.PI / 180.0;
}

/**
 *
 * @param lat1  纬度1
 * @param lng1  经度1
 * @param lat2  纬度2
 * @param lng2  经度2
 */
function geoDistance(lat1, lng1, lat2, lng2) {
  let radLat1 = rad(lat1);
  let radLat2 = rad(lat2);
  let a = radLat1 - radLat2;
  let b = rad(lng1) - rad(lng2);
  let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
  s = s * 6378.137;// EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000; // 输出为公里
  return s;
}
```

## 30. sessionStorage传输对象
```js
// 存储
sessionStorage.setItem("rowData", JSON.stringify(row));

// 读取
let getRowDataString, getRowDataObj;

getRowDataString = sessionStorage.getItem("rowData");
getRowDataObj = JSON.parse(getRowDataString);  // json字符串转对象

console.log(getRowDataObj);
```

## 36. 生成位数数字
```js
// 生成位数数字
getSuiJiNum(n) {
    const max = Math.pow(10, n) - 1;
    const min = Math.pow(10, n - 1);
    
    return Math.round(Math.random() * (max - min)) + min;
},

this.getSuiJiNum(6);  // 6位
```

## 46. 外部引入用法
### 46.1. node引入方式
```js
// config.js
module.exports = {
    aUrl: "http://xxx:5603",  // xxx地址
    bUrl: "http://xxx:5603",  // xxx地址
}

import test from '@/util/config'

console.log(test.aUrl)
console.log(test.bUrl)
```

### 46.2. es6引入方式
```js
// 获取es数据列表
export const getEsDataList = hitList=> {
    let esDataList = [];

    hitList.forEach(val=> {
        // 获取es目标数据的数据源
        esDataList.push(val._source);
    });

    return esDataList;
}

import * as config from '@/util/config'
let esDataList = config.getEsDataList(unitCrewHits);  // 获取es数据列表
```

## 47. 函数传参(对象)
```js
aa(s,v) {
    let obj = {}
    obj[s] = v
},
```

## 76. 判断ie
```js
// 判断ie
let isIe = ()=> {
if(!!window.ActiveXObject || "ActiveXObject" in window)  
    return true;  
else  
    return false; 
}
```

## 93. 浏览器地址逆解析
```js
let { hash } = window.location
let index = hash.lastIndexOf('=')
this.username = decodeURIComponent(hash.substring(index+1, hash.length))
```

## 9. 输入框非空
```js
// 在处理输入框相关业务时，往往会判断输入框未输入值的场景

// es5
if(value !== null && value !== undefined && value !== ''){
    //...
}

// es6
// ES6中新出的空值合并运算符
if(value??'' !== ''){
  //...
}
```