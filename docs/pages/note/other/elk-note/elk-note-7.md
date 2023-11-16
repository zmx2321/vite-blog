# elasticSearch相关基础
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. elasticSearch相关基本概念
### 1.1. 索引的含义
1. 某一类文档的集合构成一个索引，类比到数据库就是一个数据表(7.x之后)
  - 一个索引就是一张表
2. 他还描述了一个动作，就是将某个文档保存在elasticSearch的过程也叫索引
3. 倒排索引

### 1.2. 什么是mapping
- 多个文档形成了一个索引
- mapping是ES每个文档的约束信息，例如属性类型，能否被索引等

### 1.3. 什么是DSL
- DSL是ES的查询语言

## 2. 查看所有索引
- `GET _cat/indices`

## 3. 查看某个索引下有哪些数据
- `GET 索引名称/_search`
  - 主要看hits，表示查出来的数据
  - hits是对象数组，里面的每一个对象就是一个文档
  - _index表示当前文档所处索引
  - _source才表示数据本身
  - 多个文档形成了一个索引

## 4. DSL基本的crud
### 1. 基本的新增和查询
- `GET movies/_search` => 查询movies的数据
- `GET movies/_count` => 查询movies的总数
- `GET movies/_doc/24` => 查询索引中id为24的数据
- 添加
  - 添加id为1的文档，如果没有指定id，es自动生成，定义id比较危险
  - 如果id相同会直接将数据覆盖调
  ```
  POST kibana_sample_data_logs/_doc/aa1
  {
    "bytes": "666"
  }
  GET kibana_sample_data_logs/_doc/aa1
  ```
- 创建
  - 创建id为2的文档，如果索引中存在相同id，会报错，一般使用这个命令
  ```
  POST kibana_sample_data_logs/_create/aa2
  {
    "bytes": "777"
  }
  GET kibana_sample_data_logs/_doc/aa2
  ```

### 2. 如果需要在某文档下追加数据
```
POST kibana_sample_data_logs/_update/aa2
{
  "doc": {
    "test": "测试777"
  }
}
GET kibana_sample_data_logs/_doc/aa2
```

## 5. PUT命令
- _doc用法和post一样
- -create用法和post一样
- 没有_update命令

## 6. 删除数据
1. 删除数据
  - 删除id为aa2的数据
    - `DELETE kibana_sample_data_logs/_doc/aa2`
2. 删除索引
  - `DELETE kibana_sample_data_logs`
  - `GET _cat/indices`

## 7. 批量提交数据
```
POST kibana_sample_data_logs/_bulk
{"index": {"_id": "aa1"}}
{"bytes": "111", "extension": "eee"}
{"index": {"_id": "aa2"}}
{"bytes": "222", "extension": "rrr"}
{"index": {"_id": "aa3"}}
{"bytes": "333", "extension": "ttt"}
GET kibana_sample_data_logs/_doc/aa1
GET kibana_sample_data_logs/_doc/aa2
GET kibana_sample_data_logs/_doc/aa3
```

## 8. 批量查询
```
GET /_mget
{
  "docs": [
    {"_index": "kibana_sample_data_logs", "_id": "aa1"}, 
    {"_index": "kibana_sample_data_logs", "_id": "aa2"}, 
    {"_index": "kibana_sample_data_logs", "_id": "aa3"} 
  ]
}
```

## 9. elasticSearch的url查询
> 泛查询
1. 查询包含2012的数据
  - `GET movies/_search?q=2012`
- q是一个固定值，表示query
- 任何一个字段只要包含2012就会查询出来
- 多个条件的泛查询
  - `GET movies/_search?q=2012&df=title`
  - df => 默认的属性
  - 从title中查找包含2012的所有文档
  - 简写
    - `GET movies/_search?q=title:2012`
2. 查询title中包含but或者test的文档
  - `GET movies/_search?q=title:but test`
  - 另一种写法
    - `GET movies/_search?q=title:(but test)`
3. 查询title中包含but不包含test的文档
  - `GET movies/_search?q=title:(but -test)`
  - `GET movies/_search?q=title:(+but - test)`=>加号可省略
4. 都包含
  - `GET movies/_search?q=title:(but AND test)`
    - 小写表示或
5. 包含短语
  - `GET movies/_search?q=title:"but test"`
6. 查询分页
  - `GET movies/_search?q=title:2012&from=3&size=3`
  - 从第3页查询3条
7. 范围查询
  - `GET movies/_search?q=year:>=2016`
  - `GET movies/_search?q=year:(>=1990 AND <=1992)`
  - `GET movies/_search?q=year:{1990 TO 1992]`
    - 前面大括号中括号都可以，后面必须中括号
8. 查询电影名字中包含beautiful或mind,并且上映的年份在[1990-1992]所有电影
  - `GET movies/_search?q=year:(>=1990 AND <=1992) AND title:beautiful mind`
9. 通配符
  - `GET movies/_search?q=title:min?`
    - ?表示任意字符，只能是一个字符
  - `GET movies/_search?q=title:min*`
    - *表示0到多个

## 10. 测试所有代码
```
# 查询所有数据
GET _search
{
  "query": {
    "match_all": {}
  }
}

# 查询航班所有数据
GET kibana_sample_data_flights/_search

# 查询所有索引
GET _cat/indices

# 查询日志所有数据
GET kibana_sample_data_logs/_search

# 查询日志索引数量
GET kibana_sample_data_logs/_count

# 在索引中添加文档 - id重复会覆盖
POST kibana_sample_data_logs/_doc/aa1
{
  "bytes": "666"
}
# 根据文档id查询
GET kibana_sample_data_logs/_doc/aa1

# 在索引中创建文档 - id重复会报错
POST kibana_sample_data_logs/_create/aa2
{
  "bytes": "777"
}
GET kibana_sample_data_logs/_doc/aa2

# 修改文档结构
POST kibana_sample_data_logs/_update/aa2
{
  "doc": {
    "test": "测试777"
  }
}
GET kibana_sample_data_logs/_doc/aa2

# 删除id为aa2的文档
DELETE kibana_sample_data_logs/_doc/aa2

# 批量提交数据
POST kibana_sample_data_logs/_bulk
{"index": {"_id": "aa1"}}
{"bytes": "111", "extension": "eee"}
{"index": {"_id": "aa2"}}
{"bytes": "222", "extension": "rrr"}
{"index": {"_id": "aa3"}}
{"bytes": "333", "extension": "ttt"}
GET kibana_sample_data_logs/_doc/aa1
GET kibana_sample_data_logs/_doc/aa2
GET kibana_sample_data_logs/_doc/aa3

# 批量查询
GET _mget
{
  "docs": [
    {"_index": "kibana_sample_data_logs", "_id": "aa1"}, 
    {"_index": "kibana_sample_data_logs", "_id": "aa2"}, 
    {"_index": "kibana_sample_data_logs", "_id": "aa3"} 
  ]
}
```
