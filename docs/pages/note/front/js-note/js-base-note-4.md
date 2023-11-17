# echarts问题集锦
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. vue中echarts图表
- `yarn add echarts`
- main.js
```js
import echarts from 'echarts'

Vue.prototype.echarts = echarts;
```
- 父组件
```js
<ZhuZhuangTu ref="zzt" :zzt='zzt' />

data() {
  return {
    // 柱状图信息
    zzt: {
        area: [],  // 柱状图省份
        cityNum: [],  // 柱状图数据
    },
  }
}

methods: {
  // 人员进出省份统计
  getTrackCountByProList() {
      this.listLoading = true;

      let params = {
          stime: new DateTime().getTheDate() + " 00:00:00",
          etime: new DateTime().getTheDate() + " 23:59:59"
      }

      getTrackCountByPros(params).then(res=> {
          this.listLoading = false;

          let trackCountByProsList = res.data.data.data;

          // console.log(trackCountByProsList);

          for(let item in trackCountByProsList) {
              if(typeof trackCountByProsList[item] !== 'function') {
                  // console.log(trackCountByProsList[item]);

                  // 获取城市名称数组
                  this.province_name.push({
                      name: trackCountByProsList[item].name
                  });

                  // 获取城市人流量
                  this.zzt.cityNum.push({
                      num: trackCountByProsList[item].num
                  });
              }
          }

          // 柱状图
          this.zzt.area = this.province_name;

          this.$refs.zzt.getChartData();
      }).catch({});
  },
}

mouteds: {
  this.getTrackCountByProList();
}
```
- 子组件
```js
// 接受父组件的值
props: {
  zzt: Object,
},

// 柱状图数据
methods: {
  province_name:[],
  cityNum: [],
}

methods: {
  // 获取柱状图数据
  getChartData(){
      // console.log(this.zzt);

      // 获取省份
      for(let item in this.zzt.area) {
          if(this.zzt.area[item].name != "") {
              this.province_name.push(this.zzt.area[item].name);
          }
      }
      // console.log("获取省份", this.province_name);

      // 获取城市数据
      for(let item in this.zzt.cityNum) {
          if(this.zzt.cityNum[item].num !== undefined) {
              this.cityNum.push(this.zzt.cityNum[item].num);
          }
      }
      // console.log("获取城市数据", this.cityNum);

      // 渲染柱状图
      this.drawCal();
  },

  // 渲染柱状图
  drawCal() {
      var myChart = this.echarts.init(document.getElementById('echarts'))

      let option = {
          xAxis: {
              type: 'category',
              data: this.province_name,
              axisLabel: {
                  inside: false,
                  textStyle: {
                      color: '#b9b7b7',
                  },
                  interval: 0,  // 加上这个强制显示
                  rotate: 63
              },
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              z: 10
          },
          yAxis: {
              name: "单位/人",
              nameTextStyle: {
                  color: '#9FA9BC',
                  padding : [0, 0, 0, -50],
              },
              axisLine: {
                  show: false
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  textStyle: {
                      color: '#b9b7b7'
                  }
              }
          },
          dataZoom: [
              {
                  type: 'inside'
              }
          ],
          series: [
              {
                  type: 'bar',
                  itemStyle: {
                      color: 'rgba(0,0,0,0.05)',
                  },
                  barGap: '-100%',
                  barCategoryGap: '40%',
                  data: this.dataShadow,
                  animation: false,
              },
              {
                  type: 'bar',
                  itemStyle: {
                      barBorderRadius: [4.6, 4.6, 0, 0],

                      color: {
                          type: "linear",
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [
                              {
                                  offset: 0,
                                  color: "#03C2AC" // 0% 处的颜色
                              },
                              {
                                  offset: 1,
                                  color: "#000" // 100% 处的颜色
                              }
                          ],
                          globalCoord: false // 缺省为 false
                      },
                  },
                  emphasis: {
                      itemStyle: {
                          color: {
                              type: "linear",
                              x: 0,
                              y: 0,
                              x2: 0,
                              y2: 1,
                              colorStops: [
                                  {
                                  offset: 0,
                                  color: "#000" // 0% 处的颜色
                                  },
                                  {
                                  offset: 1,
                                  color: "#03C2AC" // 100% 处的颜色
                                  }
                              ],
                              globalCoord: false // 缺省为 false
                          },
                      },
                  },
                  data: this.cityNum,
                  label: {
                      show: true, //开启显示
                      position: 'top', //在上方显示
                      textStyle: { //数值样式
                          color: '#9FA9BC',
                          fontSize: 12
                      }
                  },
              }
          ]
      };

      /* var zoomSize = 6;
      myChart.on('click', function (params) {
          console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
          myChart.dispatchAction({
              type: 'dataZoom',
              startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
              endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
          });
      }); */

      myChart.setOption(option);
  },
}
```


## 2.图表电池样式
```js
// var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];
var barData = [60, 30, 52, 34, 90];
var lineData = [63, 63, 63, 63, 100]
this.chart.setOption(
  // option-start
  {
    grid: [{//图形的位置
        top: "-1%",
        left: "0%",
        right: "0%",
        bottom: "4%",
    }],
    xAxis: {
      show: false,//是否展示X轴
    },
    yAxis: {
      axisLine: {
        show: false//不展示刻度
      },
      type: "category",
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        inside: true,
      },
      data: ['服务器数（台）', '计算容量（核）', '内存容量（GB）', '存储容量（PB）'],
    },
    series: [
      // 下层块
      { 
        name: '',
        type: 'pictorialBar',
        symbol: 'roundRect',
        barWidth: '3%',
        barMaxWidth: '20%',
        symbolOffset: [75, 0],
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.2000)'
          }
        },
        z: -11,
        symbolRepeat: true,
        symbolSize: [6, 16],
        data: lineData,
        barGap: 50,
        barCategoryGap: 0,
        animationEasing: 'elasticOut',
      },
      // 上层块
      { 
        // name: '', // blue bar
        type: 'pictorialBar',
        symbol: 'roundRect',
        barWidth: '2%',
        barMaxWidth: 100,
        symbolOffset: [75, 0],
        itemStyle: {
          normal: {
            barMaxWidth: '20%',
            barBorderRadius: 100,
            color: '#00C0FF',
          }
        },
        symbolRepeat: true,
        symbolSize: [6, 16],
        data: barData,
      },
    ],
  }
  // option-end
)
```
```js
symbolSize: [6, 10],  // 电池大小
symbolOffset: [75, 0],  // 电池位置

{
  //图形的位置
  grid: [{
    top: -1,
    left: "-28%",
    right: '29%',
    bottom: 0,
  }],
  xAxis: {
    show: false,//是否展示X轴
  },
  yAxis: {
    axisLine: {
      show: false//不展示刻度
    },
    type: "category",
  },
  series: [
    // 下层块(总)
    // var barData = [0, ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100), ~~(Math.random() * 100)];
    { 
      type: 'pictorialBar',
      symbol: 'roundRect',
      // barWidth: 0,
      symbolOffset: this.symbolOffset,
      itemStyle: {
        normal: {
          color: 'rgba(255,255,255,0.2000)'
        }
      },
      symbolRepeat: true,
      symbolSize: this.symbolSize,
      barGap: 50,
      barCategoryGap: 0,
      animationEasing: 'elasticOut',
      data: lineData,
    },
    // 上层块
    { 
      type: 'pictorialBar',
      symbol: 'roundRect',
      // barWidth: 0,
      symbolOffset: this.symbolOffset,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#00C0FF',
            },
            {
              offset: 1,
              color: 'rgba(0,192,255,0.3000)',
            },
          ], false),
        }
      },
      symbolRepeat: true,
      symbolSize: this.symbolSize,
      data: barData,
    },
  ],
}
```

## 3. 柱状图定制
```js
{
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#fff',
      fontSize: 10,
    },
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#fff'
      }
    }
  },
  grid: {
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    height: '83%',
    containLabel: true,
  },
  legend: [
    {
      data:[
        {
          name: '资产负债率',
          icon: this.legendIcon
        }
      ],
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'left',
      textStyle: this.chartTextStyle
    }, 
    {
      data:[
        {
          name: '存货增长比率',
          icon: this.legendIcon
        }
      ],   
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'left',
      left:'15%' , // 调整位置
      textStyle: this.chartTextStyle
    }, 
    {
      data:[
        {
          name: '应收账款增长率',
          icon: this.legendIcon
        }
      ],  
      itemWidth: this.legendItem,
      itemHeight: this.legendItem,
      left: 'right',
      textStyle: this.chartTextStyle
    },
  ],
  xAxis: {
    type: 'category',
    offset: 15,
    axisTick:{
      show: false,  // 隐藏刻度线
    },
    axisLabel: {
      padding: [0, 0, 0, -23],
      interval: 0, // 横轴信息全部显示
      rotate: 30,
      ...this.chartTextStyle,
      align:'left',
      formatter (val) {
        var strs = val.split(""); //字符串数组
        var str = "";
        for (var i = 0, s; (s = strs[i++]);) {
          //遍历字符串数组
          str += s;
          if (!(i % 4)) str += "\n"; //按需要求余
        }
        return str;
      }
    },
    data: fieldData,
  },
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: this.yAxisLine,
      },
      axisLabel: {
        ...this.chartTextStyle,
        formatter(val) {
          if(val === 0) {
            return val
          }

          return `${val}%`
        },
      },
      /* min: 0,
      max: 100,
      interval: 20, */
    },
    {
      type: 'value',
      splitLine: {
        show: this.yAxisLine,
      },
      axisLabel: {
        ...this.chartTextStyle,
        formatter(val) {
          if(val === 0) {
            return val
          }

          return `${val}%`
        },
      },
      min: 0,
      max: 2.5,
      interval: 0.5,
    }
  ],
  series: [
    {
      name: '资产负债率',
      type: this.seriesType,
      barWidth: this.barWidth,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(72,143,255,100)',
          },
          {
            offset: 1,
            color: 'rgba(5,32,115,0)',
          },
        ], false),
      },
      data: yData1,
    },
    {
      name: '存货增长比率',
      type: this.seriesType,
      barWidth: this.barWidth,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(175,143,255,100)',
          },
          {
            offset: 1,
            color: 'rgba(175,143,255,0)',
          },
        ], false),
      },
      data: yData2
    },
    {
      name: '应收账款增长率',
      type: this.seriesType,
      barWidth: this.barWidth,
      yAxisIndex: 1,  // 在单个图表实例中存在多个y轴的时候有用
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(26,175,135,100)',
          },
          {
            offset: 1,
            color: 'rgba(26,175,135,0)',
          },
        ], false),
      },
      data: yData3
    }
  ]
}
```

## 4. 图表横向重叠
```js
{
  color: this.lineColors,
  legend: {
    left: 'left',
    textStyle: this.lendTextStyle,
    itemWidth: this.legendItem,
    itemHeight: this.legendItem,
    /* formatter (val) {
      console.log(val)
    } */
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  xAxis: {
    type: 'value',
    show: false,
    minorSplitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: [''],
    // 去除网格线
    axisLine: {
      show: false
    },
    // 去除刻度线
    axisTick: {
      show: false
    }
  },
  series: [],
}

this.setOptions(option=> {
  console.log(option)

  for(let i=0; i<this.chartData.fieldData.length; i++) {
    option.series.push({
      type: 'bar',
      stack: 'total',
      barWidth: '10px',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series'
      },
      name: this.chartData.legend[i],
      data: this.chartData.fieldData[i],
    })
  }

  this.chart.setOption(option)
})

export const industrialTalentData1 = {
  legend: ['华为', '中兴', '烽火', '瑞斯'],
  fieldData: [[320], [120], [220], [150]],
}
```

## 5. echarts在lend上添加百分比
```js
formatter (name) {
  let { fieldData, legend } = that.chartData
  let total = 0
  let curData

  for(let i=0; i<legend.length; i++) {
    total += parseInt(fieldData[i][0])

    if(legend[i] === name) {
      curData = parseInt(fieldData[i][0])
    }
  }
  var p = Math.round(((curData / total) * 100)) + '%'; //求出百分比

  return `${name} ${p}`
}

formatter (name) {
  let { fieldData } = that.chartData
  let curData

  for(let i=0; i<fieldData.length; i++) {
    if(fieldData[i].name === name) {
      curData = fieldData[i].percentage
    }
  }

  return `${name}(${curData}%)`
}
```

## 6. 在图例上做点击事件
```js
this.chart.on('legendselectchanged', obj=> {
  // console.log(this.chartData, obj)

  this.chart.setOption({
    legend:{ selected:{  [obj.name]: true}}
  })

  // ......
})
```

## 66. echarts日历
```js
const fxrl = ()=> {
  var graphData1 = [
    [
       '2021-02-01',
        260
    ],
    [
        '2021-02-04',
        200
    ],
    [
        '2021-02-09',
        279
    ],
    [
        '2021-02-13',
        847
    ],
    [
        '2021-02-18',
        241
    ],
    [
        '2021-02-23',
        411
    ],
    [
        '2021-02-27',
        985
    ]
];

var graphData2 = [
    [
       '2021-01-01',
        260
    ],
    [
        '2021-01-04',
        200
    ]
];
    
    return {
      tooltip: {
          position: 'top'
      },
  
      calendar: [{
          orient: 'vertical',
          yearLabel: {
              margin: 40
          },
          monthLabel: {
              nameMap: 'cn',
              margin: 20
          },
          dayLabel: {
              firstDay: 1,
              nameMap: 'cn'
          },
          cellSize: 40,
          range: '2021-02'
      },
      {
          orient: 'vertical',
          yearLabel: {
              margin: 40
          },
          monthLabel: {
              nameMap: 'cn',
              margin: 20
          },
          dayLabel: {
              firstDay: 1,
              nameMap: 'cn'
          },
          cellSize: 40,
          left: 460,
          range: '2021-01'
      }],
  
      series: [
          {
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          symbolSize: 10,
          calendarIndex: 0,
          data: graphData1
      },  
      {
          type: 'effectScatter',
          coordinateSystem: 'calendar',
          calendarIndex: 1,
          data: graphData2
      }
      ]
  }
}
```

## 68. echarts警告
> There is a chart instance already initialized on the dom
```js
// 资金下拉框
changeMoney(val) {
    // 初始化数据
    this.nameList = []
    this.moneyYearAvgList = []
    this.moneyNowSimList = []

    // 数据
    let hyzj = ()=> {
        this.resdata.industry_money_cnt_list.forEach(item=> {
            this.nameList.push(item.name)
            this.moneyYearAvgList.push(item.l_money)
            this.moneyNowSimList.push(item.money)
        })

        // 主要是这个
        let myChart = this.$echarts.getInstanceByDom(this.moneyChartDom);

        // 渲染图表
        this.moneyOption && myChart.setOption(this.moneyOption);
    }

    // 数据
    let hyfg = ()=> {
        this.resdata.industry_money_cnt_list.forEach(item=> {
            this.nameList.push(item.name)
            this.moneyYearAvgList.push(item.l_ent_count)
            this.moneyNowSimList.push(item.ent_count)
        })

        // 主要是这个
        let myChart = this.$echarts.getInstanceByDom(this.moneyChartDom);

        // 渲染图表
        this.moneyOption && myChart.setOption(this.moneyOption);
    }

    switch(val) {
        case "0":
            hyzj();
            break;
        case "1":
            hyfg();
            break;
    }
},
```

## 69. 在计算属性中获取echarts
```js
// 地区柱状图配置
areaOption() {
    return {
    grid: {      
        bottom: this.gridBottom,
        top: this.gridTop,
        y2: 150,  // 增加柱形图纵向的高度
        left: this.gridLeft,
        height: this.gridHeight
    },
    xAxis: [{
        type: 'category', 
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
        show: false
        },
        data: this.areaList,  // 地区
        axisLabel:{ 
        interval: 0, // 横轴信息全部显示    
        // rotate: this.xroute, // 角倾斜显示  
        formatter(val) {
            var strs = val.split(''); //字符串数组
            var str = ''
            for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
                str += s;
                if(!(i % 6)) str += '\n'; //按需要求余
            }
            return str
        }   
        },
    }],
    legend: {
        data: ['年度平均值', '本次模拟值'],
        top: this.legTop,
        right: this.legRight
    },
    yAxis: {
        type: 'value',
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
         show: false
        }
    },
    /* dataZoom: [{
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'filter'
    },
    {
        type: 'inside'
    }], */
    series: [{
        name: '年度平均值',
        data: this.areaYearAvgList,
        type: 'bar',
        barWidth: this.barWid,
        color: '#3675FF',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
    },
    {
        name: '本次模拟值',
        barWidth: this.barWid,
        data: this.areaNowSimList,
        type: 'bar',
        color: '#FFA025',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
      }]
    }
},

// 地区dom
areaChartDom() {
    return document.querySelector('#areaChart');
},
```

## 71. 柱状图配置
```js
data() {
    return {
      // 柱状图配置
      barWid: 25,  // 柱子宽
      legTop: 14,  // 图例距离
      legRight: 120,  // 图例距离
      gridHeight: 400, // 图大小
      gridBottom: 120, // 图距离
      gridTop: 50,  // 图距离
      gridLeft: 100,  // 图距离
      xroute: -8,  // x轴文字倾斜
    }
}

// 在计算属性computed中
// 地区柱状图配置
areaOption() {
    return {
    grid: {      
        bottom: this.gridBottom,
        top: this.gridTop,
        y2: 150,  // 增加柱形图纵向的高度
        left: this.gridLeft,
        height: this.gridHeight
    },
    xAxis: [{
        type: 'category', 
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
        show: false
        },
        data: this.areaList,  // 地区
        axisLabel:{ 
        interval: 0, // 横轴信息全部显示    
        // rotate: this.xroute, // 角倾斜显示  
        formatter(val) {
            var strs = val.split(''); //字符串数组
            var str = ''
            for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
                str += s;
                if(!(i % 6)) str += '\n'; //按需要求余
            }
            return str
        }   
        },
    }],
    legend: {
        data: ['年度平均值', '本次模拟值'],
        top: this.legTop,
        right: this.legRight
    },
    yAxis: {
        type: 'value',
        splitLine: {
        show: false
        },
        axisLine: {
        show: true
        },
        axisTick: {
         show: false
        }
    },
    /* dataZoom: [{
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'filter'
    },
    {
        type: 'inside'
    }], */
    series: [{
        name: '年度平均值',
        data: this.areaYearAvgList,
        type: 'bar',
        barWidth: this.barWid,
        color: '#3675FF',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
    },
    {
        name: '本次模拟值',
        barWidth: this.barWid,
        data: this.areaNowSimList,
        type: 'bar',
        color: '#FFA025',
        itemStyle: {
        normal: {
        label: {
            show: true,
            position: "top",
        },
        }}
      }]
    }
},
```

## 75. echarts柱状图（滚动条）
```js
// 柱状图配置
barWid: 25, // 柱子宽
legTop: 0, // 图例距离
ledPosition: "center",
gridHeight: 360, // 图大小
gridTop: 80, // 图距离
gridLeft: 150, // 图距离
xroute: -8, // x轴文字倾斜
zoomLeft: '9%', // 滚动条左边的距离
zoomRight: '10%', // 滚动条右边的距离
zoomBottom: 15, // 滚动条下边的距离
zoomEnd: 50,

areaOption() {
    return {
    grid: {
        top: this.gridTop,
        left: this.gridLeft,
        height: this.gridHeight,
    },
    xAxis: [
        {
        type: "category",
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
        },
        axisTick: {
            show: false,
        },
        data: this.areaList, // 地区
        axisLabel: {
            interval: 0, // 横轴信息全部显示
            // rotate: this.xroute, // 角倾斜显示
            formatter(val) {
            var strs = val.split(""); //字符串数组
            var str = "";
            for (var i = 0, s; (s = strs[i++]); ) {
                //遍历字符串数组
                str += s;
                if (!(i % 6)) str += "\n"; //按需要求余
            }
            return str;
            },
        },
        },
    ],
    legend: {
        left: this.ledPosition,
        data: ["上年度单个条款平均值", "上年度同类政策平均值", "本次模拟值"],
        top: this.legTop,
    },
    yAxis: {
        type: "value",
        splitLine: {
        show: false,
        },
        axisLine: {
        show: true,
        },
        axisTick: {
        show: false,
        },
    },
    dataZoom: [
        {
        end: this.zoomEnd,  
        show: true,
        xAxisIndex: [0],
        handleSize: 0, // 滑动条的 左右2个滑动条的大小
        height: 8, //组件高度
        left: this.zoomLeft, //左边的距离
        right: this.zoomRight, //右边的距离
        bottom: this.zoomBottom, //右边的距离
        borderColor: "#fff",
        fillerColor: '#ccc',
        borderRadius:5,
        backgroundColor: '#fff', //两边未选中的滑动条区域的颜色
        showDataShadow: false, //是否显示数据阴影 默认auto
        showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        realtime:true, //是否实时更新
        filterMode: 'filter',
        },
        {
        type: 'inside',
        },
    ],
    series: [
        {
        name: "上年度单个条款平均值",
        data: this.areaYearAvgList,
        type: "bar",
        barWidth: this.barWid,
        color: "#3675FF",
        itemStyle: {
            normal: {
            label: {
                show: true,
                position: "top",
            },
            },
        },
        },
        {
        name: "上年度同类政策平均值",
        data: this.areaPolicyYearAvgList,
        type: "bar",
        barWidth: this.barWid,
        color: "#f00",
        itemStyle: {
            normal: {
            label: {
                show: true,
                position: "top",
            },
            },
        },
        },
        {
        name: "本次模拟值",
        barWidth: this.barWid,
        data: this.areaNowSimList,
        type: "bar",
        color: "#FFA025",
        itemStyle: {
            normal: {
            label: {
                show: true,
                position: "top",
            },
            },
        },
        },
    ],
    };
},
```

## 78. 多个echart
```js
// 
computed: {
    // dom1
    chartDom1() {
      return document.querySelector("#mnbdr_chart1");
    },
    ......
}

// 旧写法
getChart1() {
    let myChart = this.$echarts.init(this.chartDom1);

    this.dom1Option && myChart.setOption(this.dom1Option);
},
getChart2() {
    let myChart = this.$echarts.init(this.chartDom2);

    this.dom2Option && myChart.setOption(this.dom2Option);
},
getChart3() {
    let myChart = this.$echarts.init(this.chartDom3);

    this.dom3Option && myChart.setOption(this.dom3Option);
},
getBoard() {
    this.getChart1()
    this.getChart2()
    this.getChart3()
},

// 封装
getChart() {
    for(let i=1; i<=3; i++) {
        let domItem = eval(`this.chartDom${i}`)
        let optionItem = eval(`this.dom${i}Option`)

        let myChart = this.$echarts.init(domItem);
        optionItem && myChart.setOption(optionItem);
    }
},
getBoard() {
    this.getChart()
},
```

## 79. 解决echarts报There is a chart instance already initialized on the dom.错误
```js
 echarts.init(document.getElementById("echartsTest5")).dispose();//解决echarts dom已经加载的报错
 myChart = echarts.init(document.getElementById("echartsTest5"));
```

## 80. 动态echart示例
```js
for(let i=1; i<=3; i++) {
    let myChart = null;

    let domItem = eval(`this.chartDom${i}`)
    let optionItem = eval(`this.dom${i}Option`)
    // console.log(optionItem.series)
    // console.log(optionItem.series.slice(0, this.mnbdData.length))

    let nowOptionSeriesItem = optionItem.series.slice(0, this.mnbdData.length)
    // console.log(nowOptionItem)

    optionItem.series = []
    optionItem.series = nowOptionSeriesItem

    // 解决echarts dom已经加载的报错
    this.$echarts.init(domItem).dispose();
    myChart = this.$echarts.init(domItem);

    optionItem && myChart.setOption(optionItem);
}
```

## 84. echarts饼状图进度条
```js
dom0Option() {
      return {
          title: {
            show: true,
            text: '完成度',
            x: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16
            }
          },
          animation: true,
          tooltip: {
            show: false
          },
          series: [
            {
              name: '完成度',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              hoverAnimation: false,
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {
                  value: 20,
                  name: '完成度',
                  selected: false,
                  label: {
                    normal: {
                      show: true,
                      position: 'center',
                      fontSize: 20,
                      formatter: '{b}\n{d}%'
                    }
                  },
                  itemStyle: {
                    color: '#91c7ae'
                  }
                },
                {
                  value: 80,
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  itemStyle: {
                    color: '#eee'
                  }
                }
              ]
            },
            {
              name: '完成度',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              hoverAnimation: false,
              silent: true,
              labelLine: {
                normal: {
                  show: false
                }
              },
              left: '20%',
            right: '100%',
            top: 0,
            bottom: 0,
              data: [
                {
                  value: 20,
                  name: '完成度',
                  selected: false,
                  label: {
                    normal: {
                      show: true,
                      position: 'center',
                      fontSize: 20,
                      formatter: '{b}\n{d}%'
                    }
                  },
                  itemStyle: {
                    color: '#91c7ae'
                  }
                },
                {
                  value: 80,
                  label: {
                    normal: {
                      show: false
                    }
                  },
                  itemStyle: {
                    color: '#eee'
                  }
                }
              ]
            }
          ]
        }
    },
```