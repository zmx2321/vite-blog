# kibana使用进阶
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. Graph
> [图形分析组件](https://www.elastic.co/guide/en/kibana/7.11/xpack-graph.html)：图形分析功能使您可以发现ElasticSearch索引中的项目如何关联，<font color="#f00">您可以探索索引项之间的联系，并查看哪些联系最有意义。</font>从欺诈检测到推荐引擎，这在各种应用中都非常有用。例如，图形浏览可以帮助您发现黑客所针对的网站漏洞，从而可以加固您的网站。或者，您可以向电子商务客户提供基于图的个性化推荐。

### 1.1 注意及说明
- Graph是集成在X-pack里的，就是说，只有安装了X-pack插件才会有Graph

### 1.2. 目标
- 制作一张图表
- 方便地观察数据直接的联系
- 便于产品的规划
- 便于编写程序的算法

### 1.3. 使用示例
1. 创建mapping
```js
PUT /viewtest
{
 "mappings": {
  "log": {
   "properties": {
	"uid": {"type": "integer"},
    "product": {"type": "keyword"},  // type改成keyword避免分词产生的问题
    "operation": {"type": "keyword"}
   }
  }
 }
}
```
2. 确认mapping
  - `GET /viewtest/_mapping`
3. 导入数据
```js
POST /viewtest/log/1
{  "uid": 1,  "product": "a",  "operation": "view"}
POST /viewtest/log/2
{  "uid": 1,  "product": "b",  "operation": "view"}
POST /viewtest/log/3
{  "uid": 1,  "product": "c",  "operation": "comment"}
POST /viewtest/log/4
{  "uid": 2,  "product": "a",  "operation": "view"}
POST /viewtest/log/5
{  "uid": 2,  "product": "b",  "operation": "view"}
POST /viewtest/log/6
{  "uid": 2,  "product": "c",  "operation": "comment"}
POST /viewtest/log/7
{  "uid": 3,  "product": "b",  "operation": "view"}
POST /viewtest/log/8
{  "uid": 3,  "product": "b",  "operation": "comment"}
POST /viewtest/log/9
{  "uid": 3,  "product": "b",  "operation": "favorite"}
POST /viewtest/log/10
{  "uid": 4,  "product": "b",  "operation": "view"}
POST /viewtest/log/11
{  "uid": 4,  "product": "b",  "operation": "comment"}
POST /viewtest/log/12
{  "uid": 4,  "product": "d",  "operation": "view"}
POST /viewtest/log/13
{  "uid": 5,  "product": "a",  "operation": "view"}
POST /viewtest/log/14
{  "uid": 5,  "product": "a",  "operation": "comment"}
POST /viewtest/log/15
{  "uid": 5,  "product": "d",  "operation": "view"}
```
4. 确认数据
  - `GET /viewtest/_search`
5. 进入Management创建索引模式
6. 进入Discover验证数据
7. 进入graph创建图表
  - 选择索引模式，确认数据源
  - 点击右边加号选择顶点的字段
  - 按住shift再点击某个顶点，可以取消或者重新开启某个顶点
  - 点击右上角设置(settings)
  - 取消勾选Significant links
  - 设置最小连接次数(certainty)
    - 如果两个记录之间简历的连接少于2，就不会建立连接
    - 设置2有bug，官方建议设置1
  - 在旁边搜索框输入3(用户名)，点击搜索，就会出现连接
  - 右上角面板有对链接节点的相关设置
    - 点击all选择所有节点，然后点击链接link
    - 再连一次以防出错
  - 线条粗细表示关联关系，越粗表示关联关系越强
  - 可以合并顶点，shift选中两个顶点，然后点击右边group，会把两个顶点合并起来计算关系，也可以修改组名称，统一也可以点击ungroup解除合并
8. 保存图表
  - 之后我们可以在右上角点击open打开图表

## 2. Timelion
> [时序分析组件](https://www.elastic.co/guide/cn/kibana/current/timelion.html)：时序控件是一款时间序列数据可视化工具，它可以将多种独立的数据源合并呈现到一张视图上。它是<font color="#f00">由一个简单的表达式语言驱动的，用来检索时间序列数据，执行计算得出复杂问题的答案，并可视化结果。</font>

### 2.1 注意及说明
- 流程
  - 数据源/索引 => 表达式 => 时序分析图

- 选择一组随机生成的日志文件作为示例
  - 在Disvover中，确定数据源是否可用
  - 进入到Timelion界面
    - 右上角docs为他的文档
    - 可以查询各种表达式和作用，点开可以查看当前表达式的参数
    - 上面有一个链接可以进行学习
  - 复制表达式到输入框图表就会显示出来了
    - `.es(*).color(#f66), .es(字段)` => 组合表达式
    - `.es(*).lines(fill=3)` => 筛选
    - `.es('字段').divide(.es()).mutiply(100)` => 算数表达式(百分比)
  - 保存
    - 可以只保存在时序图表页面，也可以保存在仪表台
