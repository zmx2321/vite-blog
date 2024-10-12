# 大屏开发技巧整理
> 此次项目大屏的需求是需要嵌入管理页面中,并且需要放大缩小时两边不能留白,即因不能等比缩放,所以不能使用市面上使用比较多的transform: scale的方法,后来使用vw方案,效果不是很理想,最终使用百分比以及弹性盒子方案来做整体框架布局,为了不影响使用,需要在页面变形前加入滚动条,上下滚动的话在各个子模块中使用滚动,不在全局使用

## 自适应方案
- 鉴于以上需求,并且在页面缩小的时候不影响使用效果,我们在最外层盒子上面添加如下样式
```vue
<template>
    <div class="data_screen_container">
        <div class="scale_box"></div>
    </div>
</template>

<style lang="scss" scoped>
.data_screen_container {
    width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;  // 全局禁用y轴滚动条

    .scale_box {
        background: url("./images/bg.png") top no-repeat;  // 背景图
        background-size: 100% 100%;
        min-width: 1380px;  // 页面缩小时不影响布局
    } 
}
</style>
```
- 在内容主体上我们使用上下结构,先设置两个盒子的宽高
- 主体内容的宽度我们可以用flex也预先定义好
```vue
<template>
    <div class="scale_box">
        <div class="data_screen_header"></div>
        <div class="data_screen_main">
            <div class="data_screen_lf"></div>
            <div class="data_screen_ct"></div>
            <div class="data_screen_rg"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$topHeight: 92px;  // 头部高度
.scale_box {
    .data_screen_header {
        position: relative;  // 里面的内容需要绝对定位
        width: 100%;
        max-height: $topHeight;
        overflow: hidden;
    }

    .data_screen_main {
        display: flex;  // flex弹性盒子布局
        justify-content: space-between;  // 子div撑开并且左右对齐
        width: 99%;  // 两边需要留点白
        margin: .3vw auto 0;  // 上下需要留点白,并且水平居中
        height: calc(100% - $topHeight - .3vw * 2);  // 按照百分比来计算,除去留白部分的主题内容
        z-index: 1;

        .data_screen_lf, .data_screen_rg {
            width: 26%;  // 左右两块宽度
        }

        .data_screen_ct {
            flex: 1;  // 刨去左右两边,中间自适应
        }
    }
}
</style>
```
- 主体区域的宽度和高度已经设置好了,接下来我们设置主题内容块样式
- 主体内容有三裂,横向布局使用flex,纵向为100%,我们按情况进行切割
- 主体内容高度为100%,但我们需要在页面缩小到形变的时候,加入滚动条,并且滚动条需要被隐藏
```vue
<template>
    <div class="data_screen_main">
        <div class="data_screen_lf">
            <div class="scroll_auto">
                <div class="dt_scrn_item"></div>
                <div class="dt_scrn_item"></div>
                <div class="dt_scrn_item"></div>
            </div>
        </div>
        <div class="data_screen_ct">
            <div class="scroll_auto">
                <div class="dsren_ct_top">
                    <div class="dt_scrn_item"></div>
                    <div class="dt_scrn_item"></div>
                </div>
                <div class="dsren_ct_bot">
                    <div class="dt_scrn_item"></div>
                    <div class="dt_scrn_item"></div>
                </div>
            </div>
        </div>
        <div class="data_screen_rg">
            <div class="scroll_auto">
                <div class="dt_scrn_item"></div>
                <div class="dt_scrn_item"></div>
                <div class="dt_scrn_item"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$marginBetween: 8px;

.data_screen_main {
    // 三纵列的公共样式
    .data_screen_lf, .data_screen_ct, .data_screen_rg {
        overflow: auto;  // 需要滚动
        scrollbar-width: none;  // 并且隐藏滚动条

        .scroll_auto {
            width: 100%;
            height: 100%;
            min-height: 678px;  // 滚动区域
            overflow: hidden;
        }
    }

    // 主体区域的宽度,上面已经使用flex设置好了,这边就不作赘述了
    // 这里主要展示内部怎么分层

    // 左右两边样式 - 因为是对称的,所以两边应该是相同的
    .data_screen_lf, .data_screen_rg {
        top: -48px;  // 按照需求,左右两边需要向上提
        height: calc(100% + 48px);  // 向上提之后,高度增加了,需要在100%的高度基础上增加

        // 接下来设置左右两边内部一个个子模块的高度,宽度则是100%
        .dt_scrn_item {
            width: 100%;
            height: calc(100% / 3);  // 高度为z了精确,我们直接进行计算,三等分
            overflow: hidden;
        }
    }

    // 中间样式
    .data_screen_ct {
        // 中间需要留白,为了留白距离一样,我们设置变量
        margin: 0 $marginBetween;

        // 先设置中间上下两个盒子的高度,第一个盒子要高一些
        .dsren_ct_top {
            height: 63%;
            margin-bottom: $marginBetween;
            overflow: hidden;
        }
        .dsren_ct_bot {
            // 第二个盒子直接用百分比进行计算,并且减去留白
            height: calc(100% - 63% - $marginBetween);
            overflow: hidden;
        }

        // 至此中间的两个盒子宽高都填充完成了,接下来就是内部子模块的填充

        // 上下两个盒子,第一个盒子和第二个盒子需要上下对齐,即它们的高度相同,所以需要同时进行设置
        .dsren_ct_top, .dsren_ct_bot {
            display: flex;
            width: 100%;  // 高度默认是100%

            .dt_scrn_item {
                // 两个盒子的第一列
                &:first-child {
                    width: 65%;
                    margin-right: $marginBetween;
                }

                // 两个盒子的第二列
                &:last-child {
                    flex: 1;  // 刨去第一列和留白,flex会自动进行填充
                }
            }
        }
    }
}
</style>
```
- 至此,整个页面的整体布局就完成了,这也是我们此次大屏自适应的核心方案

## 纵向排列的dom如何进行自适应
- 页面里面还有一个点的样式需要单独拉出来讲一下,纵向排列的有序列表,如何在盒子中进行等分排列,并且页面不管如何缩放都是等分排列的
- 这一点困扰了我很久,我把我捣鼓出来的解决方案分享一下
```vue
<template>
    <div class="data_dot_list">
        <ul>
            <li v-for=(item in dataDotList) :key="item.id">
                <dl>
                    <!-- 这里是一个小图标 -->
                    <dt></dt>
                    <dd>
                        <span>xxxx</span>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt></dt>
                    <dd>
                        <span>xxxx</span>
                    </dd>
                </dl>
            </li>
            <li>
                <dl>
                    <dt></dt>
                    <dd>
                        <span>xxxx</span>
                    </dd>
                </dl>
            </li>
        </ul>
    </div>
</template>

<script setup>
const dataDotList = ref([])
</script>

<style lang="scss" scoped>
// 我们默认data_dot_list是一个100%
.data_dot_list {
    height: 100%;

    ul {
        display: flex;
        flex-direction: column;  // 纵向排列
        // 设置文本内容的位置
        width: 80%;
        margin: 2.6% auto 0;

        // 设置每个子项文本的高度
        li {
            position: relative;
            // height: calc(100% / 8 - .6%);
            // 或者动态获取
            height: calc(100% / v-bind("dataDotList.length") - .6%);

            // ......
            // 其他就是简单的样式,不作赘述了
        }
    }
}
</style>
```

## 遇到渐变色时,如果使用transition过渡属性
- 页面上我们需要做一个平行四边形效果,背景色渐变,并且需要过渡效果,但是在渐变的时候transition失效,于是我使用了另外一种方案尽量避开渐变和transition的冲突
```vue
<template>
<ul class="btn_list" @click="btnListLink">
    <li>
        <div class="box"><b></b></div>
        <span>aaaa</span>
    </li>
    <li>
        <div class="box"><b></b></div>
        <span>bbbb</span>
    </li>
    <li>
        <div class="box"><b></b></div>
        <span>cccc</span>
    </li>
    <li>
        <div class="box"><b></b></div>
        <span>dddd</span>
    </li>
    <li>
        <div class="box"><b></b></div>
        <span>eeee</span>
    </li>
</ul>
</template>

<style lang="scss" scoped>
// 整个盒子我们设置绝对定位,不过这里和我们要说的点没有关系
ul.btn_list {
    position: absolute;
    top: 7px;
    left: 10px;
    z-index: 1;
    cursor: pointer;

    // 我们使用li来作为每个需要添加效果的盒子,并设置相对定位
    li {
        position: relative;
        display: inline-block;  // 横向排列
        width: 88px;
        height: 26px;
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 10px;  // 刨去最后一个,给每个盒子设置间距
        }

        // 上下两个大盒子,一个是用来作效果的,一个用来放文字
        .box, span {
            position: absolute;
            top: 0;
            left: 0;
            min-width: 88px
        }

        // 这里开始效果展示 - 核心代码
        // 这个box就是平行四边形
        .box {
            display: block;
            width: 100%;
            height: 100%;
            transform: skew(-20deg);  // 旋转 - 平行四边形核心代码
            // transform: skew(23deg);
            background: linear-gradient(to left, #1F4F8A, #0f275a);
            border-radius: 5px;

            // 平行四边形里面的小盒子用来展示鼠标移入的渐变效果
            // 默认是隐藏,即透明度为0
            // 鼠标移入实际上是移到b标签这个位置
            b {
                display: block;
                width: 100%;
                height: 100%;
                background: linear-gradient(to right, #1F4F8A, #0f275a);
                opacity: 0;
                transition: .5s linear;
                border-radius: 5px;
            }

            // + 表示兄弟属性,这里的文字也需要在鼠标移入的时候变亮
            &+span {
                display: block;
                left: 51%;
                top: 50%;
                transform: translate(-50%, -50%);
                font-family: $mainFontFamily;
                font-size: 16px;
                color: #4ABEFE;
                line-height: 100%;
                text-align: center;
                opacity: .8;
                transition: .8s linear;
            }
        }

        // 在鼠标移入box的时候触发hover效果
        // 并且需要作用在box的兄弟元素span和b上
        &:hover {
            .box {
                &+span,
                    b {
                    opacity: 1;
                    transition: .8s linear;
                }
            }
        }
    }
}
</style>

<script setup>
// 使用冒泡的方式捕获dom并设置dom下的所有事件
const btnListLink = (e) => {
  const { target } = e
  const { innerText } = target
  // console.log(innerText)

  switch (innerText) {
    case 'aaaa':
      console.log('aaaa')
      break
    case 'bbbb':
      console.log('bbbb')
      break
    case 'cccc':
      console.log('cccc')
      break
    case 'dddd':
      console.log('dddd')
      break
    case 'eeee':
      console.log('eeee')
      break
  }
}
</script>
```
- 以上就完成了在渐变色遇上过度效果时,如何共存的问题,主要就是使用加一个div上去用来显示鼠标移入后的效果,默认为透明,然后鼠标移入的时候,改变透明度,这样就可以实现渐变色和过度效果共存了
- 同时为了方便,直接使用冒泡去捕获`btn_list`盒子下的所有dom,并为其设置事件

## 监听dom以到达自适应效果
> 怎么做到若伊框架侧边栏展开或收起时,大屏页面自适应
- 侧栏收起,框架是使用cookie去控制open变量,又是通过open变量去控制openSidebar和hideSidebar,所以我们可以监听openSidebar和hideSidebar的变化,从而实现自适应
```js
// 初始化子页面图表
const resetAllChart = () => {
  setTimeout(() => {
    nextTick(() => {
      refLeftPage.value && refLeftPage.value.resetChart()
      refCenterPage.value && refCenterPage.value.resetChart()
      refRightPage.value && refRightPage.value.resetChart()
    })
  }, 500)
}

// 监听dom变化,在展开或者收起的时候重新渲染图表
// 创建Observer实例，并指定回调函数
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutations => {
        // 处理DOM变化
        resetAllChart()
    });
});

// 需要被监听的dom
const targetNode = document.querySelector('.app-wrapper');
// observer.observe(targetNode, { childList: true, subtree: true, attributes: true, characterData: true });

// 如果dom存在,则监听dom的某几个属性
if (targetNode) {
    observer.observe(targetNode, { attributes: true, attributeFilter: ['class'] });
}
```

## echarts封装,新的取值方式
> - vue3种echart的封装使用方式大体和之前相同,但里面随着页面的缩小放大,echarts需要重新渲染的功能之前使用mix的方式写的,vue3中我们来重新弄一下
> - 这里将echart组件整个粘贴过来了,后面组件主要是在option里面作了修改,大体结构都是一样的,其他echart组件都可以参考本节
### 修改之后的echarts封装
- 在页面使用时,echarts子组件的渲染会在父组件之前,即先渲染子组件,再渲染父组件
- 这样导致了,每次echarts里面是没有数据的,同时数据传递是异步的,就更加影响组件的渲染了
- 梳理一下,我们不做任何操作,页面逻辑是这样的   子组件渲染(数据默认为空) => 父组件渲染 => 异步获取接口数据
- 但是我们需要 父组件渲染 => 异步获取接口数据 => 子组件渲染
- 所以我们需要设置监听从父组件传到子组件的数据,在数据加载完成之后再进行渲染
- 有两种方式,一种是设置flag,在数据请求完成之后,flag为true,再进行渲染图表,但这种方案在echart组件比较多的时候比较麻烦
- 我们使用第二种,监听,但监听有一个弊端,echart组件是一直存在的,就是数据为空的时候会进行一次加载,所以在echarts里面需要进行一次非空判断
- 注: 里面还包含了轮播代码
```vue
<template>
  <section ref="refChart" class="chart_wrap" :class="className" :style="{ height: height, width: width }"></section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import * as echarts from 'echarts'
import { myDebounce } from '@/utils/index'

/**
 * 父组件参数
 */
const props = defineProps({
  className: {
    type: String,
    default: 'chart'
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  chartFontColor: {
    type: String,
    default: '#000'
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  chartData: {
    type: Object,
    required: true
  },
  txtFontSize: {
    type: Number,
    default: 15
  }
})

/**
 * 定义变量
 */
let myChart = null // 图表
const refChart = ref(null) // 图表ref

let changePieInterval = null

const chartConfig = {
  barWidth: '10',
  textStyle: {
    color: '#fff',
    fontSize: 10.5,
  },
  lineStyle: {
    color: 'rgba(255, 255, 255, .6)', // 设置横坐标线颜色
    // width: 2, // 设置横坐标线宽度
  }
}

/**
 * 监听数据
 */
// setoption解构传参用这种监听
/* watch(
  props.chartData,
  (val) => {
    setOption(val)
  },
  { deep: true }
) */
// 重新修改传值方式之后,监听需要修改
watch(() => props.chartData, val => {
  setOption(val)
})

/**
 * 方法
 */
/**
 * 工具方法
 */
const setProxyData = (proxyData) => JSON.parse(JSON.stringify(proxyData))

/**
 * 图表相关
 */
// 销毁图表
const destroyChart = (next) => {
  if (myChart) {
    myChart.dispose()
    myChart = null

    if (next) {
      next()
    }
  }
}
// 重置图表
const resetChart = () => {
  // console.log("初始化图表", myChart)

  destroyChart(() => {
    // 重新启动图表
    initChart()
  })
}
// 初始化图表
const initChart = () => {
    myChart = echarts.init(refChart.value, 'macarons')
    setOption(props.chartData);

    // 使用防抖减少渲染次数
    // 在页面放大或缩小时,重新渲染echart
    window.addEventListener('resize', myDebounce(() => {
        resetChart()
    }));
}

// 轮播
const chartAuto = (option) => {
  if (JSON.stringify(props.chartData) === '{}') {
    return
  }

  let intervaltime = 3000

  if (changePieInterval) {
    clearInterval(changePieInterval)
  }

  let currentIndex = -1; // 当前高亮图形在饼图数据中的下标
  changePieInterval = setInterval(selectChart, intervaltime); // 设置自动切换高亮图形的定时器

  // 取消所有高亮并高亮当前图形
  function highlightChart() {
    if (!myChart) {
      return
    }

    for (var idx in option.series[0].data) {
      // 遍历饼图数据，取消所有图形的高亮效果
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: idx
      });
    }
    // 高亮当前图形
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
  }

  // 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形
  myChart.on('mouseover', (params) => {
    if (changePieInterval) {
      clearInterval(changePieInterval);
    }
    currentIndex = params.dataIndex;
    highlightChart();
  });

  // 用户鼠标移出时，重新开始自动切换
  myChart.on('mouseout', (params) => {
    if (changePieInterval) {
      clearInterval(changePieInterval);
    }
    changePieInterval = setInterval(selectChart, intervaltime);
  });

  // 高亮效果切换到下一个图形
  function selectChart() {
    if (option.series[0].data) {
      var dataLen = option.series[0].data.length;
      currentIndex = (currentIndex + 1) % dataLen;
      highlightChart();
    }
  }
}

// 设置图表
const setOption = (chartData) => {
  if (!chartData) {
    return
  }

  // ----------------------------  图表配置开始
  const option = {
    title: {
      text: '单位(分)',
      top: "2.5%",
      right: '2%',
      textStyle: {
        color: '#fff',
        fontSize: 10,
      }
    },
    tooltip: {
      trigger: 'axis',
      textStyle: {
        color: '#000',
        fontSize: 11,
      },
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#fff'
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '5%',
      height: '83%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      offset: 18,
      axisTick: {
        show: false,  // 隐藏刻度线
      },
      axisLine: {
        lineStyle: chartConfig.lineStyle
      },
      axisLabel: {
        padding: [0, 0, 0, -11],
        interval: 0, // 横轴信息全部显示
        rotate: 30,
        ...chartConfig.textStyle,
        align: 'left',
      },
      data: chartData.map(item => item.name),  // 对象数组使用map转换成name的数组传入
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,  // 隐藏刻度线
      },
      axisLine: {
        show: true, // 显示y轴线
        lineStyle: chartConfig.lineStyle
      },
      axisLabel: {
        color: '#fff',
        fontSize: 10,
      }
    },
    series: [
      {
        name: '健康度',
        type: 'line',
        barWidth: chartConfig.barWidth,
        smooth: true,
        showSymbol: false, // 在 tooltip hover 的时候显示
        itemStyle: {
          color: 'rgba(82, 217, 95, 0.8)',
        },
        lineStyle: {
          color: '#52D95F',
          width: 2, // 设置线宽
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(82, 217, 95, 0.3)' },
            { offset: 1, color: 'rgba(0,211,252,0)' },
          ]),
        },
        data: chartData.map(item => item.healthLevel),
      },
    ]
  }
  // ----------------------------  图表配置结束

  // 绘制图表
  myChart.setOption(option)
  // 轮播
  chartAuto(option)
}

/**
 * 生命周期
 */
onMounted(() => {
  nextTick(() => {
    initChart() // 初始化图表
  })
})
onBeforeUnmount(() => {
  destroyChart() // 销毁图表
})

/**
 * 暴露方法
 */
defineExpose({
  resetChart
})
</script>
```

### 在页面中使用
- 在之前的封装中,是字段名和值分开传入,每次都需要将对象数组重组传入,我们现在直接将对象数组传入echart组件中,用map的形式将数组传入
- 具体代码见上
```vue
<right-chart-1 ref="refRightChart1" :chart-data="rightChart1Data" />

<script setup>
import RightChart1 from '../components/chart/RightChart1.vue';

const refRightChart1 = ref(null)
const rightChart1Data = ref([])

// 获取接口数据
const getRightChart1Data = async () => {
  // 获取接口数据接口
  const resDataData = await apiCommon(screenApi.xxxxxx);

  // 数据处理
  // ......

  // 假数据 - 使用对象数组
  rightChart1Data.value = [
    { name: '慈溪市', value: 85 },
    { name: '余姚市', value: 66 },
    { name: '海曙区', value: 88 },
    { name: '江北区', value: 78 },
    { name: '镇海区', value: 70 },
    { name: '奉化区', value: 12 },
    { name: '鄞州区', value: 72 },
    { name: '北仑区', value: 33 },
    { name: '宁海县', value: 95 },
    { name: '象山县', value: 75 },
  ]
}
</script>
```

### 代码中使用的防抖
```js
export const myDebounce = (fn, delay = 500) => {
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

## 进行全屏时遇到的一些问题
> 因为大屏是作为子页面的,有时候有菜单栏,有时候没有,有时候菜单栏收起,有时候展开,有4种情况
- 全屏代码 - 常规的全屏按钮
```js
// falg为当前的全屏状态
export const setFullScreen = (falg) => {
  if (!falg) {
    // 全屏
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    // 退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// 使用
// api相关
import { setFullScreen } from "@/utils/index.js";
<button class="title" @click="setFullScreen(isFullscreen)">{{ isFullscreen ? '退出全屏' : '全屏' }}<button>
```
- 上面是根据状态来进行全屏操作的,所以需要监听全屏状态的变化,来修改flag状态,上面那个方法才能生效
- 如果在全屏的状态,点击跳转到单独的大屏页面,页面是重新加载了,但状态值还没有发生改变,所以要在页面一加载的时候就判断当前的全屏状态
```js
// 判断是否全屏方法封装
const getIsFullScreenStatus = (into, out) => {
  if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen) {
    isFullscreen.value = true

    if (into) { into() }
  } else {
    isFullscreen.value = false

    if (out) { out() }
  }
}

// 监听全屏状态修改标识
const setFullScreenFlag = (e) => {
  getIsFullScreenStatus() // 页面一加载就先判断是否全屏

  // 监听是否全屏事件
  window.addEventListener('fullscreenchange', () => {
    // 可以写一些进出全屏的回调
    getIsFullScreenStatus(() => {
        // console.log('进入全屏模式');
    }, () => {
        // console.log('退出全屏模式');
    })
  });
}

const initPage = ()=> {
    setFullScreenFlag() // 监听全屏状态修改标识
}
```

## echarts三维地图是怎么形成的
- 这里贴出三维地图的echart配置
```vue
<center-chart-1 ref="refCenterChart1" :chart-data="centerChart1Data" />

<script setup>
const centerChart1Data.value = [
    {
      name: "aaaa",
      data1: 99, 
    },
    {
      name: "bbbb",
      data1: 85,
    },
    {
      name: "cccc",
      data1: 88,
    },
];
</script>

<section ref="refChart"></section>

<script setup>
import nbGeoJSON from "./GEOJSON/nbGeoJSON.json";
// 初始化图表
const initChart = () => {
  myChart = echarts.init(refChart.value);
  echarts.registerMap("ningbo", nbGeoJSON);
  setOption(props.chartData);
};

const option = {
    tooltip: {
        show: true,
        textStyle: {
            fontSize: 13,
            color: "#fff",
        },
        trigger: "item",
        backgroundColor: "rgba(0,0,0,0.3)",
        borderColor: 'rgba(74,190,254,0.5)',
        borderWidth: 2.5,
        formatter: (params) => {
            let { data } = params;

            let str = `
                <div class="chart_tooltip">
                    <h3>${data.name}</h3>
                    <ul>
                        <li>
                            <dl>
                                <dt>xxxxxx:</dt>
                                <dd>${data.data1}</dd>
                            </dl>  
                        </li>  
                    </ul>
                </div>
            `;

            return str;
        },
    },
    series: [
        {
            type: 'map3D', // 系列类型
            map: "ningbo",
            data: chartData,
            label: {
                // 标签的相关设置
                show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
                // 标签的字体样式
                color: '#fff', // 地图初始化区域字体颜色
                fontSize: 11, // 字体大小
                opacity: .8, // 字体透明度
            },
            itemStyle: {
                color: '#0b3eb3', // 地图板块的颜色
                borderWidth: 0.5, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域   [ default: 0 ]
                borderColor: 'rgba(0, 178, 255, 1)' // 图形描边的颜色。[ default: #333 ]
            },
            emphasis: {
                label: {
                    show: true, // 是否显示高亮
                    color: '#fff', // 高亮文字颜色
                    fontSize: 15,
                },
                itemStyle: {
                    color: '#00ade0', // 地图高亮颜色
                    borderWidth: 10, // 分界线wdith
                    borderColor: '#00ade0' // 分界线颜色
                }
            },
            shading: 'realistic',
            groundPlane: {
                // 地面可以让整个组件有个“摆放”的地方，从而使整个场景看起来更真实，更有模型感。
                show: false, // 是否显示地面。[ default: false ]
                color: '#0C264D' // 地面颜色。[ default: '#aaa' ]
            },
            shading: 'realistic', // 三维地理坐标系组件中三维图形的着色效果，echarts-gl 中支持下面三种着色方式:
            realisticMaterial: {
                // detailTexture: 'https://cdn.polyhaven.com/asset_img/primary/kloppenheim_06_puresky.png?height=780', // 纹理贴图
                detailTexture: mapbg, // 纹理贴图
                textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
                roughness: .8, // 材质粗糙度，0完全光滑，1完全粗糙
                metalness: 0, // 0材质是非金属 ，1金属
            }, // 真实感材质相关的配置项，在 shading 为'realistic'时有效。
            light: {
                // 光照相关的设置。在 shading 为 'color' 的时候无效。  光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
                main: {
                    color: '#ffe',
                    intensity: 1.1,
                    shadow: true,
                    shadowQuality: 'high',
                    alpha: 25,
                    beta: 40
                },
                ambient: {
                    // 全局的环境光设置。
                    color: '#fff', // 环境光的颜色。[ default: #fff ]
                    intensity: 1 // 环境光的强度。[ default: 0.2 ]
                }
            },
            viewControl: {
                // 用于鼠标的旋转，缩放等视角控制。
                projection: 'orthographic', // 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
                autoRotate: false, // 是否开启视角绕物体的自动旋转查看。[ default: false ]
                autoRotateDirection: 'ccw', // 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
                autoRotateSpeed: 10, // 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
                autoRotateAfterStill: 3, // 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
                damping: 0, // 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动（旋转和缩放）。[ default: 0.8 ]
                rotateSensitivity: 1, // 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。	rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
                zoomSensitivity: 1, // 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
                panSensitivity: 1, // 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度
                panMouseButton: 'middle', // 平移操作使用的鼠标按键，支持：'left' 鼠标左键（默认）;'middle' 鼠标中键 ;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
                rotateMouseButton: 'left', // 旋转操作使用的鼠标按键，支持：'left' 鼠标左键;'middle' 鼠标中键（默认）;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)

                alpha: 23, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
                beta: 40, // 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
                minAlpha: 5, // 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
                maxAlpha: 50, // 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
                minBeta: -360, // 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
                maxBeta: 360, // 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]

                center: [-3, 3, -1.5], // 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。

                animation: true, // 是否开启动画。[ default: true ]
                animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
                animationEasingUpdate: 'cubicInOut', // 过渡动画的缓动效果。[ default: cubicInOut ]


                // 缩放大小，数值越大，地图越小
                zoomSensitivity: 0.5
            },
        },
    ],
}
</script>
```

## 如何让eacharts饼图颜色渐变
- 如果要单独设置饼图数据的颜色,需要在series的data属性里面单独作配置
```vue
<section ref="refChart"></section>

<script setup>
// 设置图表
const setOption = (chartData) => {
  if (!chartData) {
    return
  }

  // ----------------------------  图表配置开始
  const option = {
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#000',
        fontSize: 11,
      },
      formatter(val) {
        const { name } = val
        let curData = null
        let sum = 0

        chartData.forEach(item => {
          if (item.name === name)
            curData = item

          sum += item.value
        })

        return `${curData.name}：${curData.value}个 (${parseFloat(curData.value / sum * 100).toFixed(2)}%)`
      }
    },
    title: {
      text: '基站个数',
      right: "24.2%",
      top: "16%",
      textAlign: "center",
      show: true,
      textStyle: {
        color: "#fff",
        fontSize: 12,
        align: "center",
        fontWeight: 800,
      },
    },
    legend: {
      show: true,
      orient: 'vertical',
      itemWidth: 11,
      itemHeight: 11,
      icon: "rect",
      top: '32%',
      right: '8%',
      padding: [0, 0, 0, 0],
      height: '100%',
      itemGap: 18,       // 设置图例项之间的间隔
      textStyle: {
        color: '#fff',
        fontSize: '11.5px'
      },
      tooltip: {
        show: false
      },
      formatter: name => {
        let curData = null
        let sum = 0
        let avage = 0

        chartData.forEach(item => {
          if (item.name === name)
            curData = item

          sum += item.value
        })

        if (sum !== 0) {
          avage = parseFloat(curData.value / sum * 100).toFixed(2)
        }

        return `${curData.name}：${curData.value} 个 (${avage}%)`
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['49%', '81.5%'],
        center: ['28.5%', '51.5%'],
        data: chartData,  // 在这里使用数据
        labelLine: {
          show: false
        },
        label: {
          show: false,
          position: 'center',
          formatter(val) {
            const { name } = val
            let curData = null

            chartData.forEach(item => {
              if (item.name === name) {
                curData = item
              }
            })

            return `{title|${name}} \n\n {num|${curData.value}个}`
          }
        },
        emphasis: {
          label: {
            show: true,
            rich: {
              // 标题
              title: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 800,
              },
              num: {
                color: "#4ABEFE",
                fontSize: 22,
                fontWeight: 900,
              },
            }
          }
        },
      }
    ]
  }
  // ----------------------------  图表配置结束

  // 绘制图表
  myChart.setOption(option)
  // 轮播
  chartAuto(option)
}

// 对外供出渐变色方法
const setColor = (color1, color2) => {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: color1 },
    { offset: 1, color: color2 }
  ])
}

/**
 * 生命周期
 */
onMounted(() => {
  nextTick(() => {
    initChart() // 初始化图表
  })
})

onBeforeUnmount(() => {
  destroyChart() // 销毁图表
})

/**
 * 暴露方法
 */
defineExpose({
  resetChart,
  setColor
})
</script>
```

- 使用
```vue
<left-chart-2 ref="refLeftChart2" :chart-data="leftChart2Data" />

<script setup>
const refLeftChart2 = ref(null)
const leftChart2Data = ref([])

// 接口数据
const getLeftChart2Data = async () => {
  // 获取接口数据接口
  const resDataData = await apiCommon(screenApi.getDistributionInfo);

  const opacity = '.35'

  // const colorArr = ['#D65755', '#8B6BE9', '#F0D18C', '#4389F6', '#EE9D73']
  const colorArr = [
    refLeftChart2.value.setColor('#D65755', `rgba(214, 87, 85, ${opacity})`),
    refLeftChart2.value.setColor('#8B6BE9', `rgba(139, 107, 233, ${opacity})`),
    refLeftChart2.value.setColor('#F0D18C', `rgba(240, 107, 140, ${opacity})`),
    refLeftChart2.value.setColor('#4389F6', `rgba(67, 137, 246, ${opacity})`),
    refLeftChart2.value.setColor('#EE9D73', `rgba(238, 157, 115, ${opacity})`)
  ]

  // 数据处理
  leftChart2Data.value = resDataData.data.map((item, index) => {
    return {
      name: item.section,
      value: item.stationCount,
      itemStyle: { color: colorArr[index] }
    }
  })

  // 假数据 -- 数据处理已完成,使用接口数据,假数据注释即可
  leftChart2Data.value = [
    {
      name: '90-100分', value: 2, itemStyle: {
        color: refLeftChart2.value.setColor('#D65755', `rgba(214, 87, 85, ${opacity})`),
      }
    },
    {
      name: '80-90分', value: 3, itemStyle: {
        color: refLeftChart2.value.setColor('#8B6BE9', `rgba(139, 107, 233, ${opacity})`),
      }
    },
    {
      name: '70-80分', value: 4, itemStyle: {
        color: refLeftChart2.value.setColor('#F0D18C', `rgba(240, 107, 140, ${opacity})`),
      }
    },
    {
      name: '60-70分', value: 10, itemStyle: {
        color: refLeftChart2.value.setColor('#4389F6', `rgba(67, 137, 246, ${opacity})`),
      }
    },
    {
      name: '60分以下', value: 3, itemStyle: {
        color: refLeftChart2.value.setColor('#EE9D73', `rgba(238, 157, 115, ${opacity})`)
      }
    },
  ]
}

// 初始化图表数据
const initChartData = () => {
  getLeftChart2Data()
}
</script>
```

## echarts轮播是怎么实现的
```js
let changePieInterval = null

// 轮播
const chartAuto = (option) => {
  if (JSON.stringify(props.chartData) === '{}') {
    return
  }

  let intervaltime = 3000

  if (changePieInterval) {
    clearInterval(changePieInterval)
  }

  let currentIndex = -1; // 当前高亮图形在饼图数据中的下标
  changePieInterval = setInterval(selectChart, intervaltime); // 设置自动切换高亮图形的定时器

  // 取消所有高亮并高亮当前图形
  const highlightChart = ()=> {
    if (!myChart) {
      return
    }

    for (var idx in option.series[0].data) {
      // 遍历饼图数据，取消所有图形的高亮效果
      myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: idx
      });
    }
    // 高亮当前图形
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
  }

  // 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形
  myChart.on('mouseover', (params) => {
    if (changePieInterval) {
      clearInterval(changePieInterval);
    }
    currentIndex = params.dataIndex;
    highlightChart();
  });

  // 用户鼠标移出时，重新开始自动切换
  myChart.on('mouseout', (params) => {
    if (changePieInterval) {
      clearInterval(changePieInterval);
    }
    changePieInterval = setInterval(selectChart, intervaltime);
  });

  // 高亮效果切换到下一个图形
  const selectChart = ()=> {
    if (option.series[0].data) {
      var dataLen = option.series[0].data.length;
      currentIndex = (currentIndex + 1) % dataLen;
      highlightChart();
    }
  }
}
```

## 如何让雷达图好看一些
```js
const chartConfig = {
  barWidth: '12',
  textStyle: {
    color: '#fff',
    fontSize: 10.5,
  },
  lineStyle: {
    color: 'rgba(255, 255, 255, .6)', // 设置横坐标线颜色
    // width: 2, // 设置横坐标线宽度
  }
}

const indicator = computed(() => {
  if (JSON.stringify(props.chartData) === '[]') {
    return [  //配置各个维度的最大值
      { name: '', max: 0 },
    ]
  }
  return props.chartData.map(item => {
    return {
      name: item.name,
      max: 100
    }
  })
})

// ----------------------------  图表配置开始
const option = {
    tooltip: {
      trigger: 'item',
      textStyle: {
        color: '#000',
        fontSize: 11,
      },
    },
    legend: {
      itemWidth: 9,
      itemHeight: 9,
      icon: "rect",
      textStyle: {
        color: "#fff",
        fontSize: 10
      },
      left: 'left',
      top: '3.5%',
      left: '3.1%',
    },
    radar: {
      center: ['50%', '57.5%'],
      radius: '60%',
      splitNumber: 5,
      shape: 'circle', // 设置为圆形
      indicator: indicator.value,
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
          type: 'dashed'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.5)',
          type: 'dashed'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(17,85,231,.3)', 'transparent']
        }
      }
    },
    series: [
      {
        type: 'radar',
        animation: true,
        data: [{
          name: "当日各维度评分(分)",
          value: chartData.map(item => item.value),
          areaStyle: {
            // 填充区颜色
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(22, 62, 112, .8)' },
              { offset: 1, color: 'rgb(74,190,254,.6)' },
            ])
          },
          // 线条样式
          lineStyle: {
            color: 'rgb(74,194,254,.5)',
            width: 1.5
          },
          symbol: 'circle', // 拐点形状，rect=矩形，circle=圆形
          // 拐点的大小
          symbolSize: 5,
          // 小圆点（拐点）设置为白色
          itemStyle: {
            color: '#4abefe'
          },
        }]
      },
    ]
}
// ----------------------------  图表配置结束
```

## 如何自动点击按钮,并让他们一直循环
```js
const AutoClickMenu = () => {
  const btnList = document.querySelectorAll(".btn_list li")
  let loopTime = 5000

  const clickTool = (i) => {
    btnList[i].click()
    btnList.forEach((item) => {
      item.classList.remove("current")

      btnList[i].classList.add("current")
    })
  }

  for (let i = 0; i < btnList.length; i++) {
    //立即执行函数
    (() => {
      setTimeout(() => {
        clickTool(i)
        if (btnList.length === i + 1) {
          setTimeout(() => {
            AutoClickMenu()
          }, loopTime);
        }
      }, loopTime * i)
    })(i)
  }
}
```