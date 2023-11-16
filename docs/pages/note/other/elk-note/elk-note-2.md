# kibana的使用

## 1. ElasticSearch注意情况
- 我们的数据是存储在ElasticSearch里的，因为要做数据分析，因为要做数据分析，所以在ES里的数据需要是结构化的，不要是一大段没有结构的文本，这样是无法进行分析的 。
<div style="width:523px; height:255px;">
    <img src="https://zmx2321.github.io/vite-blog/images/note/other/elk-note/es_use.jpg" style="width:100%; height:100%;" />
</div>

- 注意字段是否有分词的情况
  - 如果一个字段的type是text而不是keyword，就有可能会影响统计
  ```js
  // 字段source: 央视新闻
  // 类型为text
  'source': {
    'analyzer': 'ik_max_word',  // 一个分词的操作
    'type': 'text'
  }
  // => 央视、新闻 => 在正常情况下，会分为两个词，然后单独地进行统计，然后统计四个字的时候，可能会获取不到

  // 其中一个解决办法
  // 给这个字段加一个扩展类型，类型为keyword
  'source': {
    'analyzer': 'ik_max_word',  // 一个分词的操作
    'type': 'text',
    'fields': {
      // 这个名字可以随意定义
      'keyword1': {
        'type': 'keyword',
      }
    }
  }

  // => source.keyword => 央视新闻
  ```

## 2. kibana使用前期准备
### 2.1. 准备测试数据
- 威廉·莎士比亚全集
  - `wget https://download.elastic.co/demos/kibana/gettingstarted/shakespeare_6.0.json`
- 一组虚构的账户与随机生成的数据
  - `wget https://download.elastic.co/demos/kibana/gettingstarted/accounts.zip`
- 一组随机生成的日志文件
  - `wget https://download.elastic.co/demos/kibana/gettingstarted/logs.json.gz`

  ### 2.2 kibana创建图表的流程
  1. 准备数据
  2. 创建mapping
    - 在开发工具中创建
    - 之后确认mapping
      - `GET /.kibana_1/_mapping`
  3. 导入数据
    - 导入之后需要确认数据
      - `GET /.kibana_1/_search`
  4. 创建索引模式
    - 在管理操作界面Management，在Kibana栏目下，点击第一个，即索引模式
    - 索引模式输入框中，我们可以使用通配符*调取所有与其前缀相关的索引
    - 创建成功后，可以在页面上看出，可以被检索的字段，与可以被统计的字段等
  5. 设计图表
    - 进Discover中，可以探索一下数据
    - 根据筛选查出数据
  6. 制作图表完成工作
    - 进入到Visualize中进行图表创作
    - 点击创建图表 => 选择图表类型 => 选择数据集
    - 选择x轴 => 选择聚合(关键字或者日期等) => 选择字段
    - 顺序=>表示升序或者降序、大小=>表示当前一共显示多少个柱状图
    - 左上角点击保存，Visualize中就可以看到结果了
    - 我们可以在Visualize中的图表基础上继续创作
    - 可以进入仪表台里面来管理多个图表

### 2.3. kibana主界面菜单栏
- Discover - 数据探索
  - 左侧菜单栏可以选择已经创建的索引模式
  - 菜单选择下面可用字段中左边的图标表示字段类型，地球标志的图标表示坐标类型的数据
- Visualize - 图表创作
- Dashboard - 仪表台
  - 可以把很多图表组合为一个大的仪表台
  - 通俗来讲，仪表台可能类似汽车上的速度表、流量表等
  - 我们先单独地去制作一个个单独地仪表，然后再在仪表台里面将他们组合起来
- Timelion
  - 时序模式，高级一点的时序图表会用到这个
- Machine Learning
  - 机器学习，使用kibana创建一些机器学习的操作等
- Graph
  - 图能力，探索ES里面的数据关联等
- Dev Tools
  - 开发者工具，在这里可以和ES进行相互操作
- Monitoring
  - 监控，主要是对elk系统中，已经加入链接的ElasticSearch以及Logstash的运行状况等进行监控
- Management
  - 管理操作，例如用户权限，kibana的索引模式，已保存的图表管理、高级设置等

## 3. kibana使用示例
### 3.1. 威廉·莎士比亚全集
1. 下载
  - `wget https://download.elastic.co/demos/kibana/gettingstarted/shakespeare_6.0.json`
2. 创建mapping
```js
PUT /shakespeare
{
  "mappings": {
    "doc": {
      "properties": {
        "speaker": {"type": "keyword"},
        "play_name": {"type": "keyword"},
        "line_id": {"type": "integer"},
        "speech_number": {"type": "integer"}
      }
    }
  }
}
```
3. 导入数据
  - `curl -H 'Content-Type: application/x-ndjson' -XPOST 'http://elasticserver:9200/shakespeare/doc/_bulk?pretty'   -u elktest[自己的账号] --data-binary @/download/shakespeare_6.0.json`
4. 确认mapping
  - `GET /shakespeare/_mapping`
5. 确认数据
  - `GET /shakespeare/_search`

### 3.2. 一组虚构的账户与随机生成的数据
> 本示例无需创建mapping
1. 下载
  - `wget https://download.elastic.co/demos/kibana/gettingstarted/accounts.zip`
2. 解压缩
  - `unzip accounts.zip`
    - `yum install zip unzip`
3. 导入数据
  - `curl -H 'Content-Type: application/x-ndjson' -XPOST 'http://elasticserver:9200/bank/account/_bulk?pretty'  -u elktest[自己的账号] --data-binary @/download/accounts.json`
4. 确认mapping
  - `GET /account/_mapping`
5. 确认数据
  - `GET /account/_search`
6. 进入到Management中创建索引模式
  - bank
  - 可以看到有些字段可以被统计等信息
7. 进入到Discover查看数据情况
  - 进入到bank，看到有数据了
8. 分析字段，设计需要制作的图表 - 饼图
9. 进入到Visualize进行图表制作
  - 创建一个饼图
  - 选择索引模式-bank
  - 点击Split来分割
  - 分割的依据Aggregation选择range区间模式
  - 分割的字段field，选择***(balance)
  - 分成若干个区间(1-10, 10-20，...)
  - 图表生成后，可以基于当前图表创建一个新的图表
  - 点击add sub-buckets创建外围扩展图
  - 选择切片类型
  - sub Aggregation聚合选择terms
  - 选择字段age

### 3.3. 一组随机生成的日志文件
> 主要取其中的经纬度
1. 下载
  - `wget https://download.elastic.co/demos/kibana/gettingstarted/logs.jsonl.gz`
2. 解压缩
  - `gunzip logs.jsonl.gz`
3. 创建mapping
> 可以直接在kibana里面的开发工具直接运行
  - 创建mapping-1
  ```js
  PUT /logstash-2015.05.18
  {
    "mappings": {
      "log": {
        "properties": {
          "geo": {
            "properties": {
              "coordinates": {
                "type": "geo_point"
              }
            }
          }
        }
      }
    }
  }
  ```
  - 创建mapping-2
  ```js
  PUT /logstash-2015.05.19
  {
    "mappings": {
      "log": {
        "properties": {
          "geo": {
            "properties": {
              "coordinates": {
                "type": "geo_point"
              }
            }
          }
        }
      }
    }
  }
  ```
  - 创建mapping-3
  ```js
  PUT /logstash-2015.05.20
  {
    "mappings": {
      "log": {
        "properties": {
          "geo": {
            "properties": {
              "coordinates": {
                "type": "geo_point"
              }
            }
          }
        }
      }
    }
  }
  ```
4. 导入数据
  - `curl -H 'Content-Type: application/x-ndjson' -XPOST ''http://elasticserver:9200/_bulk?pretty'  -u elktest[自己的账号] --data-binary @/download/logs.jsonl`
5. 确认mapping
  - `GET /logstash-2015.05.20/_mapping`
6. 确认数据
  - `GET /logstash-2015.05.20/_search`
7. 创建索引模式
  - 这时候要用通配符了，因为有三个索引
  - logstash-2015.05*
  - 更改字段(例如时间)
8. 进入Visualize创建图表
  - 选择地图图表
  - 选择索引模式
  - 点击右上角选择时间范围(因为日志数据在2015)
  - 左侧栏，选择坐标作为依据，选择坐标字段
  - 运行之后就可以看到地图上显示了坐标点

## 4. 将kibana以iframe的方式嵌入
- 进入Visualize或者Dashboard，点击共享
- 固定链接中会带菜单栏和头部
- 点击嵌入代码，不选择短url，生成的页面是只带图表的
  - 在链接中，修改其参数可以修改图表，包括样式
- 快照和嵌入代码
  - snapshot是个快照，snapshot不会随着服务器的配置而更新， 因此snapshot把当前dashboard的配置都加到url的query参数里了
  - saved 只有dashboard的访问url， 具体配置参数不传递， 根据kibana服务器的即时配置来返回结果呈现给用户
  - 通过snapshot和saved的对比， 我们可以推测kibana的过滤和搜索传递的参数方式

## 5. kibana的dashboard内嵌到web中的定制化问题
- 2个通用的需求：
  1. 去掉AddFilter按钮
    - 因为跨域访问的问题， 导致外层无法访问iframe内部的contentwindow等元素， 也就失去了控制子元素显示或隐藏的机会
    - 最终通过修改kibana前端源码完成， 具体到XXX:\Bitnami\elk-6.2.3-0\kibana\optimize\bundles\commons.style.css
    - 找到".filter-bar"， 添加display:none即可
  2. 自定义传参过滤或者搜索
    - 这个需要仔细分析kibana的dashboard的share的两者方式的不同处
- 了解生成的iframe地址中参数的意义
  - 示例地址
    - `http://192.168.2.240:5601/goto/ab0deee9d5440c185aed952efa11c5c2?embed=true&_g=()`
    - `http://192.168.2.240:5601/app/kibana#/dashboard/df0384c0-87cc-11eb-9a4c-c78247994cce?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:'2021-02-28T16:00:00.000Z',to:'2021-03-31T16:00:00.000Z'))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:15,i:'1',w:24,x:24,y:0),id:'1ef68cb0-87ca-11eb-9a4c-c78247994cce',panelIndex:'1',type:visualization,version:'7.1.1'),(embeddableConfig:(),gridData:(h:15,i:'2',w:24,x:0,y:0),id:a62a4bc0-87cc-11eb-9a4c-c78247994cce,panelIndex:'2',type:visualization,version:'7.1.1')),query:(language:kuery,query:''),timeRestore:!f,title:zmx_test%E4%BB%AA%E8%A1%A8%E7%9B%98,viewMode:view)`
  - ab0deee9d5440c185aed952efa11c5c2 => 表示dashboard的_id
  - embed=true => 代表内嵌到web中， 即只有dashboard，没有kibana的左边导航栏等
  - _a 传递了具体的配置的参数， 内部有filter和query等
    - _a内每次大括号类似json对象的花括号，因此层次不能省略
  - filters:!(）内就是具体过滤的配置， 效果就是AddFilter按钮上变成了具体的过滤值。 
    - 比如我们添加systemid为123456789012的过滤，拼成的过滤url字符串简化掉不需要的参数为`filters:!((meta:(),query:(match:(systemID.keyword:(query:'123456789012',type:phrase)))))`
    - 最终形成`xxxx/?_g= ()&_a=(filters:!((meta:(),query:(match:(systemID.keyword:(query:'123456789012',type:phrase))))))`
  - _g()之前是原始的dashboard的url， 后面_a是我们添加的过滤url
    - _g也有2个关键的字段， refreshInterval和time
    - refreshInterval控制是否自动刷新以及刷新频率
    - time设置dashboard的时间范围from和to，时间间隔interval， 以及时区设置timezone，保证时间轴的时间显示正确
  - query:(match:(systemID.keyword:(query:'123456789012',type:phrase))) 是filter里最关键的字符串，  类似json
  ```json
  // 类似es的queryDSL语句。我们修改sytemId.keyword 和12345679012为我们真正动态改变的字段和值即可
  // filter是查询完成后再过滤，query是直接查询
  "query": {
     "match": {
       "systemID.keyword": {
         "type": "phrase",
         "query": "123456789012"
       }
     }
  }

  // 通过query实现特定数据的方法如下
  // http://localhost:81/elk/app/kibana#/dashboard/de8df1e0-58a6-11e8-aa0c-7db6a9fbe317?embed=true & _g=() & _a=(query:(language:lucene,query:'systemID.keyword:123456789012'))
  // 同样的我们动态修改 "systemID.keyword:123456789012" 为我们具体的field和value即可
  // query的语句类似为
  "query": {
    "language": "lucene",
    "query": "systemID.keyword:123456789012"
  }
  ```
