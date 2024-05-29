# js中的dom操作

## 在jquery中将dom结构转换成字符串
```js
……
// dom转字符串
domToStr() {
    if(!document.HTMLDOMtoString){
        document.HTMLDOMtoString = function(HTMLDOM){
            const div = document.createElement("div")
            div.appendChild(HTMLDOM)
            return div.innerHTML
        }
    }
},
// dom转字符串用例
domToStrExam(dom) {
    let src = document.HTMLDOMtoString(dom);
    src.replace("&lt;","<");
    src.replace("&gt;",">");

    return src;
},
……

utilTip.domToStr();  // dom转字符串
console.log(utilTip.domToStrExam(e.toElement));  // dom转字符串用例

// 或者
function domToString (node) {
    let tmpNode = document.createElement('div')
    tmpNode.appendChild(node)
    let str = tmpNode.innerHTML
    tmpNode = node = null; // 解除引用，以便于垃圾回收
    return str;
}
```

## class绑定
```html
<li :class="[resdata.budget<resdata.l_budget ? 'jt_top' : 'jt_down']"><b>预计投入资金：</b><span>{{ resdata.budget }}万元</span></li>
```

## 根据事件对象获取dom
```js
// 跳转表格 - 使用事件代理
linkTable(e) {
    let { target } = e
    let { textContent } = target
    let { nodeName } = target

    // console.log(target)
    // console.log("dom名", target.nodeName)

    let levelTxt1 = ''
    let leve1Txt2 = ''

    /**
     * 提取值
     * 点击不同位置做区分
     */
    // 点击li - 区分左右
    if(nodeName === 'LI') {
    levelTxt1 = target.parentNode.parentNode.parentNode.parentNode.previousSibling.getElementsByTagName('ul')[0].getElementsByClassName('font_bold')[0].textContent

    // 如果没有类
    if(target.classList.length !== 0) {
        leve1Txt2 = textContent
    } else {
        leve1Txt2 = target.parentNode.getElementsByTagName('li')[0].textContent
    }
    } else {
    // 点击外层
    leve1Txt2 = target.getElementsByTagName('li')[0].textContent
    }

    // 点击ul
    if(nodeName === 'UL') {
    levelTxt1 = target.parentNode.parentNode.parentNode.previousSibling.getElementsByTagName('ul')[0].getElementsByClassName('font_bold')[0].textContent
    }

    // 点击dd
    if(nodeName === 'DD') {
    levelTxt1 = target.parentNode.parentNode.previousSibling.getElementsByTagName('ul')[0].getElementsByClassName('font_bold')[0].textContent
    }

    // 处理跳转数据
    this.resolveLinkData(levelTxt1, leve1Txt2)
},
```

## dom节点操作
```js
getButtonList(next) {
    this.$nextTick(()=> {
    let buttonList = document.querySelector('.el-tabs__content').getElementsByTagName('button')

    buttonList.forEach(item=> {
        // console.log(item.innerText)

        next(item)
    })
    })
},

this.getButtonList(item=> {
    if(item.innerText === '草稿') {
        item.classList.add('factivity')
    }
})

// 移除所有指定class
this.getButtonList(item=> {
    item.classList.remove('factivity')
})
```

## 标签多选
```js
setTagStatus(e) {
    let { target } = e
    let { textContent } = target

    target.classList.toggle('active')  // 选中效果
    let activeFlag = target.classList.contains('active')  // 判断是否选中 （选中:true）
    // console.log(activeFlag, textContent)

    /**
     * 0：未选中，1：选中  selected
     * 点击，根据当前textContent匹配数组项，根据activeFlag修改selected字段
     * 根据当前项修改数组中对应项
     */
    // console.log("tagList", this.tagList)
    this.tagList.forEach(item=> {
        // 根据当前点击项匹配数组中对应的对象
        if(item.brandLabel === textContent) {
            // console.log("数组项", item)  // 数组项

            // true 选中 1 => selected=1
            if(activeFlag) {
                item.selected = '1'
            } else {
                item.selected = '0'
            }
        }
    })
},
// 确认标签
tagSubmit() {
    // console.log("确认标签")
    // console.log("tagList", this.tagList)

    let idStr = ""

    // 遍历标签列表，摘选出所有选中标签   selected=1
    this.tagList.forEach(item=> {
        if(item.selected === '1') {
            idStr += item.id + ','
        }
    })
    // 删除末尾逗号
    idStr = idStr.substr(0, idStr.length-1)

    console.log(idStr)
}
```

## 滚动条自动滚动
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>autoScroll</title>
</head>
<style>
  .parent {
    width: 300px;
    height: 200px;
    margin: 0 auto;
    background: #242424;
    overflow-y: scroll;
  }
  /*设置的子盒子高度大于父盒子，产生溢出效果*/
  .child {
    height: auto;
  }
  .child li {
    height: 50px;
    margin: 2px 0;
    background: #009678;
  }
</style>
<body>
  <div id="parent" class="parent">
    <div id="child1" class="child">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </div>
    <div id="child2" class="child"></div>
  </div>
  <script type="text/javascript">
    (function () {
      var parent = document.getElementById('parent');
      var child1 = document.getElementById('child1');
      var child2 = document.getElementById('child2');
      child2.innerHTML = child1.innerHTML;
      setInterval(function () {
        if(parent.scrollTop >= child1.scrollHeight) {
          parent.scrollTop = 0;
        } else {
          parent.scrollTop++;
        }
      }, 20);
    })()
  </script>
</body>
</html>
```

## 通过class设置锚点
```js
export const setSmoothScroll = target=> {
  let appDom = document.querySelector('#app')
  appDom.scrollTop = 50;  // 初始值 - 否则会有bug

  target = target?target:'aaa'; // className
  const targetDom = document.querySelector('.' + target); // 目标节点class
  let targetHeight = targetDom.getBoundingClientRect().top - 130  // dom距离顶部距离
  appDom.scrollTop = targetHeight

  let startTime = +new Date();
  let duration = 800; //ms

  const run = ()=> {
    let time = +new Date() - startTime;

    appDom.scrollTo(0,  targetHeight * (time / duration));
    run.timer = requestAnimationFrame(run);

    if (time >= duration) {
      appDom.scrollTo(0, targetHeight);
      cancelAnimationFrame(run.timer);
    }
  }
  requestAnimationFrame(run);
}
```

## 通过class设置锚点2
```js
export const setSmoothScroll = target=> {
    const scrollBox = document.querySelector('#app')
    let distance = scrollBox.scrollTop
    const curTag = document.querySelector('.' + target) // 节点tag
    const offsetTop = curTag.offsetTop - 120 // 滚动距离
    let step = offsetTop / 50
    if (offsetTop > distance) {
        smoothDown()
    } else {
        const newTotal = distance - offsetTop
        step = newTotal / 50
        smoothUp()
    }
    scrollBox.scrollTop = offsetTop
    function smoothDown() {
        if (distance < offsetTop) {
            distance += step
            scrollBox.scrollTop = distance
            setTimeout(smoothDown, 10)
        } else {
            scrollBox.scrollTop = offsetTop
        }
    }
    function smoothUp() {
        if (distance > offsetTop) {
            distance -= step
            scrollBox.scrollTop = distance
            setTimeout(smoothUp, 10)
        } else {
            scrollBox.scrollTop = offsetTop
        }
    }
}
```

## 判断是否包含某个class
```js
this.$el.parentNode.querySelectorAll(calss).forEach(item=> {
    if(!item.classList.contains(dnCls)) {
        item.classList.add(dnCls)
    } else {
        item.classList.remove(dnCls)
    }
})
```

## 批量删除dom
```js
let flickerPointDom = document.querySelectorAll('.flicker_point')

flickerPointDom.forEach(item => {
    item.classList.remove('flicker_point')
})
```