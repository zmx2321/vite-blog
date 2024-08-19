# echarts问题集锦

## vue中echarts图表
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


## 图表电池样式
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

## 柱状图定制
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

## 图表横向重叠
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

## echarts在lend上添加百分比
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

## 在图例上做点击事件
```js
this.chart.on('legendselectchanged', obj=> {
  // console.log(this.chartData, obj)

  this.chart.setOption({
    legend:{ selected:{  [obj.name]: true}}
  })

  // ......
})
```

## echarts日历
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

## echarts警告
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

## 在计算属性中获取echarts
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

## 柱状图配置
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

## echarts柱状图（滚动条）
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

## 多个echart
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

## 解决echarts报There is a chart instance already initialized on the dom.错误
```js
 echarts.init(document.getElementById("echartsTest5")).dispose();//解决echarts dom已经加载的报错
 myChart = echarts.init(document.getElementById("echartsTest5"));
```

## 动态echart示例
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

## echarts饼状图进度条
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

## echarts引入地图
```vue
<template>
  <section
    ref="refChart"
    class="chart_wrap"
    :class="className"
    :style="{ height: height, width: width }"
  ></section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from "vue";
import * as echarts from "echarts";
import nbGeoJSON from "./GEOJSON/nbGeoJSON.json";

/**
 * 父组件参数
 */
const props = defineProps({
  className: {
    type: String,
    default: "chart",
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  chartFontColor: {
    type: String,
    default: "#000",
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
  chartData: {
    type: Object,
    required: true,
  },
  txtFontSize: {
    type: Number,
    default: 15,
  },
});

/**
 * 定义变量
 */
let myChart = null; // 图表
const refChart = ref(null); // 图表ref

/**
 * 监听数据
 */
watch(
  props.chartData,
  (val) => {
    setOption(val);
  },
  { deep: true }
);

/**
 * 方法
 */
/**
 * 工具方法
 */
const setProxyData = (proxyData) => JSON.parse(JSON.stringify(proxyData));

/**
 * 图表相关
 */
// 销毁图表
const destroyChart = (next) => {
  if (myChart) {
    myChart.dispose();
    myChart = null;

    if (next) {
      next();
    }
  }
};
// 重置图表
const resetChart = () => {
  // console.log("初始化图表", myChart)

  destroyChart(() => {
    // 重新启动图表
    initChart();
  });
};
// 初始化图表
const initChart = () => {
  myChart = echarts.init(refChart.value);
  echarts.registerMap("ningbo", nbGeoJSON);
  setOption(props.chartData);
};

let mTime = null;
let dataIndex = 0;

// 地图高亮轮播
const mapActive = (mapData) => {
  if (!myChart) {
    return;
  }
  const dataLength = mapData.length;
  // 用定时器控制高亮
  mTime = setInterval(() => {
    // 清除之前的高亮
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: dataIndex,
    });
    dataIndex++;
    // 当前下标高亮
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: dataIndex,
    });
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: dataIndex,
    });
    if (dataIndex > dataLength) {
      dataIndex = 0;
    }
  }, 3000);
  myChart.on("mouseover", () => {
    console.log("mouseover");
    // 停止定时器，清除之前的高亮
    clearInterval(mTime);
    mTime = "";
    console.log(mTime);
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: dataIndex,
    });
  });
  // 鼠标划出重新定时器开始
  myChart.on("mouseout", () => {
    mapActive(mapData, myChart);
  });
};

// 设置图表
const setOption = ({ mapData } = {}) => {
  // 绘制图表
  myChart.setOption(
    // ----------------------------  图表配置开始
    {
      tooltip: {
        textStyle: {
          fontSize: 15,
          color: "#fff",
        },
        trigger: "item",
        backgroundColor: "rgba(0,0,0,0)",
        formatter: (params) => {
          // console.log(params);

          let { data } = params;
          // console.log(data);

          let str = `
            <div class="chart_tooltip">
              <h3>${data.name}</h3>
              <ul>
                <li>
                  <dl>
                    <dt>近30天健康度平均分:</dt>
                    <dd>${data.data1}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>投诉数量:</dt>
                    <dd>${data.data2}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>故障工单:</dt>
                    <dd>${data.data3}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>采编未处理:</dt>
                    <dd>${data.data4}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>其他关键信息:</dt>
                    <dd>${data.data5}</dd>
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
          type: "map",
          map: "ningbo",
          layoutCenter: ["50%", "50%"],
          layoutSize: "100%",
          data: mapData,
          roam: true, // 开启拖拽和缩放
          itemStyle: {
            // 地图样式
            borderColor: "rgba(0, 178, 255, 1)",
            borderWidth: 2,
            areaColor: "#0b3eb3",
            /* areaColor: new echarts.graphic.LinearGradient(
              0,
              1,
              0,
              0,
              [
                { offset: 0, color: "rgba(0, 137, 208, 0.32)" },
                { offset: 1, color: "rgba(0, 66, 164, 0.32)" },
              ],
              false
            ), */
            shadowColor: "RGBA(7, 59, 115, .1)",
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10,
          },
          emphasis: {
            // 鼠标移入动态的时候显示的默认样式
            itemStyle: {
              areaColor: "#00ade0",
              borderColor: "#00ade0",
              borderWidth: 2,
            },
            label: {
              // 文字
              show: true,
              color: "#fff",
              fontSize: 20,
            },
          },
          // 选中样式
          select: {
            label: {
              // 选中区域的label(文字)样式
              color: "#fff",
            },
            itemStyle: {
              color: "#fff",
              // 选中区域
              areaColor: "#00ade0",
              // 选中区域边框
              borderColor: "#00ade0",
              borderWidth: 3,
            },
          },
          // 地图默认label样式
          label: {
            show: true,
            color: "#fff",
            fontSize: 11,
            fontWeight: 600,
          },
        },
      ],
    }
    // ----------------------------  图表配置结束
  );

  // mapActive(mapData);
  window.onresize = function () {
    // 自适应大小
    myChart.resize();
  };
};

/**
 * 生命周期
 */
onMounted(() => {
  nextTick(() => {
    initChart(); // 初始化图表
  });
});
onBeforeUnmount(() => {
  destroyChart(); // 销毁图表
});

/**
 * 暴露方法
 */
defineExpose({
  resetChart,
});
</script>

<style lang="scss" scoped>
.chart_wrap {
  min-height: 100px;

  :deep .chart_tooltip {
    h3 {
    }

    ul {
      li {
        margin-bottom: 1px;

        dl {
          dt,
          dd {
            display: inline-block;
          }

          dt {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
```

## echarts三维地图
```vue
<template>
  <section ref="refChart" class="chart_wrap" :class="className" :style="{ height: height, width: width, }"></section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from "vue";
import * as echarts from "echarts";
import nbGeoJSON from "./GEOJSON/nbGeoJSON.json";
import 'echarts-gl';
import mapbg from '@/assets/images//screen/mapbg.png'

/**
 * 父组件参数
 */
const props = defineProps({
  className: {
    type: String,
    default: "chart",
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  chartFontColor: {
    type: String,
    default: "#000",
  },
  autoResize: {
    type: Boolean,
    default: true,
  },
  chartData: {
    type: Object,
    required: true,
  },
  txtFontSize: {
    type: Number,
    default: 15,
  },
});

/**
 * 定义变量
 */
let myChart = null; // 图表
const refChart = ref(null); // 图表ref

/**
 * 监听数据
 */
watch(() => props.chartData, val => {
  setOption(val)
})

/**
 * 方法
 */
/**
 * 工具方法
 */
const setProxyData = (proxyData) => JSON.parse(JSON.stringify(proxyData));

/**
 * 图表相关
 */
// 销毁图表
const destroyChart = (next) => {
  if (myChart) {
    myChart.dispose();
    myChart = null;

    if (next) {
      next();
    }
  }
};
// 重置图表
const resetChart = () => {
  // console.log("初始化图表", myChart)

  destroyChart(() => {
    // 重新启动图表
    initChart();
  });
};
// 初始化图表
const initChart = () => {
  myChart = echarts.init(refChart.value);
  echarts.registerMap("ningbo", nbGeoJSON);
  setOption(props.chartData);
};

// 设置图表
const setOption = ({ mapData } = {}) => {
  // 绘制图表
  myChart.setOption(
    // ----------------------------  图表配置开始
    {

      tooltip: {
        show: true,
        textStyle: {
          fontSize: 13,
          color: "#fff",
        },
        trigger: "item",
        backgroundColor: "rgba(0,0,0,0.3)",
        borderColor: '#4ABEFE',
        borderWidth: 2.5,
        formatter: (params) => {
          let { data } = params;

          let str = `
            <div class="chart_tooltip">
              <h3>${data.name}</h3>
              <ul>
                <li>
                  <dl>
                    <dt>近30天健康度平均分:</dt>
                    <dd>${data.data1}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>投诉数量:</dt>
                    <dd>${data.data2}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>故障工单:</dt>
                    <dd>${data.data3}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>采编未处理:</dt>
                    <dd>${data.data4}</dd>
                  </dl>  
                </li>  
                <li>
                  <dl>
                    <dt>其他关键信息:</dt>
                    <dd>${data.data5}</dd>
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
          data: mapData,
          label: {
            // 标签的相关设置
            show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
            // textStyle: {
            // 标签的字体样式
            color: '#fff', // 地图初始化区域字体颜色
            fontSize: 11, // 字体大小
            opacity: .8, // 字体透明度
            // }
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
    // ----------------------------  图表配置结束
  );

  // mapActive(mapData);
  window.onresize = function () {
    // 自适应大小
    myChart.resize();
  };
};

/**
 * 生命周期
 */
onMounted(() => {
  nextTick(() => {
    initChart(); // 初始化图表
  });
});
onBeforeUnmount(() => {
  destroyChart(); // 销毁图表
});

/**
 * 暴露方法
 */
defineExpose({
  resetChart,
});
</script>

<style lang="scss" scoped>
.chart_wrap {
  min-height: 100px;
  padding: 10px;

  :deep .chart_tooltip {
    h3 {
      margin-bottom: 6px;
      letter-spacing: 1.5px;
    }

    ul {
      li {
        margin-bottom: 1px;

        dl {

          dt,
          dd {
            display: inline-block;
          }

          dt {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
```

## 渐变双色柱状图
```vue
<template>
  <section ref="refChart" class="chart_wrap" :class="className" :style="{ height: height, width: width }"></section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, nextTick } from 'vue'
import * as echarts from 'echarts'

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

const chartConfig = {
  barWidth: '10',
  textStyle: {
    color: '#fff',
    fontSize: 9,
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
  window.onresize = function () {
    // 自适应大小
    myChart.resize()
  }
}

// 设置图表
const setOption = (chartData) => {
  if (!chartData) {
    return
  }

  // 绘制图表
  myChart.setOption(
    // ----------------------------  图表配置开始
    {
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
      legend: {
        itemWidth: 8,
        itemHeight: 8,
        right: 0,
        top: '4%',
        right: '3%',
        textStyle: chartConfig.textStyle,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        height: '76%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        offset: 13,
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
          name: '月平均',
          type: 'bar',
          barWidth: chartConfig.barWidth,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgb(17,85,231)' },
              // { offset: 1, color: 'rgb(17,85,231,0)' },
              { offset: 1, color: 'rgba(22, 62, 112, 0)' },
            ]),
          },
          data: chartData.map(item => item.monthlyAverage),
        },
        {
          name: '日平均',
          type: 'bar',
          barWidth: chartConfig.barWidth,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgb(63,222,172)' },
              // { offset: 1, color: 'rgba(63,222,172,0)' },
              { offset: 1, color: 'rgba(22, 62, 112, 0)' },
            ]),
          },
          data: chartData.map(item => item.dailyAverage),
        },
      ]
    }
    // ----------------------------  图表配置结束
  )

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

<style lang="scss" scoped>
.chart_wrap {
  min-height: 100px;
  // cursor: pointer;
}
</style>
```

## 雷达图
```vue
<template>
  <section ref="refChart" class="chart_wrap" :class="className" :style="{ height: height, width: width }"></section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch, computed, nextTick } from 'vue'
import * as echarts from 'echarts'

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

const chartConfig = {
  barWidth: '12',
  textStyle: {
    color: '#fff',
    fontSize: 9,
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

/**
 * 监听数据
 */
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
  window.onresize = function () {
    // 自适应大小
    myChart.resize()
  }
}

// 设置图表
const setOption = (chartData) => {
  if (!chartData) {
    return
  }
  // 绘制图表
  myChart.setOption(
    // ----------------------------  图表配置开始
    {
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
        left: '2.6%',
      },
      radar: {
        center: ['53%', '50%'],
        radius: '60%',
        splitNumber: 5,
        shape: 'circle', // 设置为圆形
        indicator: indicator.value,
        /* indicator: chartData.map(item => {
          if (item) {
            return {
              name: item.name,
              max: 100
            }
          }
        }), */
        /* indicator: [  //配置各个维度的最大值
          { name: '基站环境', max: 100 },
          { name: '故障告警', max: 100 },
          { name: '站点价值', max: 100 },
          { name: '用户感知', max: 100 },
          { name: '网络质量', max: 100 }
        ], */
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
            name: "当日各维度评分",
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
  )

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

<style lang="scss" scoped>
.chart_wrap {
  min-height: 100px;
}
</style>
```

## 饼图轮播
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

/**
 * 监听数据
 */
/* watch(
  props.chartData,
  (val) => {
    setOption(val)
  },
  { deep: true }
) */
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

  window.onresize = function () {
    // 自适应大小
    myChart.resize()
  }
}

// 轮播
const chartAuto = (option) => {
  if (JSON.stringify(props.chartData) === '{}') {
    return
  }

  let intervaltime = 2000

  if (changePieInterval) {
    clearInterval(changePieInterval)
  }

  let currentIndex = -1; // 当前高亮图形在饼图数据中的下标
  changePieInterval = setInterval(selectPie, intervaltime); // 设置自动切换高亮图形的定时器

  function highlightPie() { // 取消所有高亮并高亮当前图形
    if (!myChart) {
      return
    }

    for (var idx in option.series[0].data)
      // 遍历饼图数据，取消所有图形的高亮效果
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: idx
      });
    // 高亮当前图形
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
  }

  myChart.on('mouseover', (params) => { // 用户鼠标悬浮到某一图形时，停止自动切换并高亮鼠标悬浮的图形
    if (changePieInterval)
      clearInterval(changePieInterval);
    currentIndex = params.dataIndex;
    highlightPie();
  });

  myChart.on('mouseout', (params) => { // 用户鼠标移出时，重新开始自动切换
    if (changePieInterval)
      clearInterval(changePieInterval);
    changePieInterval = setInterval(selectPie, intervaltime);
  });

  function selectPie() { // 高亮效果切换到下一个图形
    if (option.series[0].data) {
      var dataLen = option.series[0].data.length;
      currentIndex = (currentIndex + 1) % dataLen;
      highlightPie();
    }
  }
}

// 设置图表
// const setOption = ({ fieldData, contData } = {}) => {
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
        data: chartData,
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

<style lang="scss" scoped>
.chart_wrap {
  min-height: 100px;
}
</style>
```