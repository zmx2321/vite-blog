# 大屏开发技巧整理
> 此次项目大屏的需求是需要嵌入管理页面中,并且需要放大缩小时两边不能留白,即因不能等比缩放,所以不能使用市面上使用比较多的transform: scale的方法,后来使用vw方案,效果不是很理想,最终使用百分比以及弹性盒子方案来做整体框架布局,为了不影响使用,需要呀在页面变形前加入滚动条,上下滚动的话在各个子模块中使用滚动,不在全局使用

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
> vue3种echart的封装使用方式大体和之前相同,但里面随着页面的缩小放大,echarts需要重新渲染的功能之前使用mix的方式写的,vue3中我们来重新弄一下
### 修改之后的echarts封装
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
// 监听重新修改之后
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
      data: chartData.map(item => item.name),
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
- 在页面使用时,echarts子组件的渲染会在父组件之前,即先渲染子组件,再渲染父组件
- 这样导致了,每次echarts里面是没有数据的,同时数据传递是异步的,就更加影响组件的渲染了
- 梳理一下,我们不做任何操作,页面逻辑是这样的   子组件渲染(数据默认为空) => 父组件渲染 => 异步获取接口数据
- 但是我们需要 父组件渲染 => 异步获取接口数据 => 子组件渲染
- 所以我们需要设置监听从父组件传到子组件的数据,在数据加载完成之后再进行渲染
- 有两种方式,一种是设置flag,在数据请求完成之后,flag为true,再进行渲染图表,但这种方案在echart组件比较多的时候比较麻烦
- 我们使用第二种,监听,但监听有一个弊端,echart组件是一直存在的,就是数据为空的时候会进行一次加载,所以在echarts里面需要进行一次非空判断
- 具体封装代码见上
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

  // 假数据
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

## echarts三维地图是怎么形成的

## 如何让eacharts饼图颜色渐变

## echarts轮播是怎么实现的