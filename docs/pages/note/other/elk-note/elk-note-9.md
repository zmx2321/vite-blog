# es查询

## 1. 查询所有数据
```js
GET _search
{
  "query": {
    "match_all": {}
  }
}
```

## 2. 范围查询
```
# 范围
GET result/_search
{
  "size": 1000
}

GET result/_search
{
  "query": {
    "bool": {
      "must":[
        {
          "match": {
            "id.keyword": "1"
          }
        },
        {
          "range": {
            "time": {
              "from": "2021-01-01T00:00:00.000Z",
              "to": "2021-01-01T23:30:00.000Z"
            }
          }
        }
      ] 
    }
  },
  "size": 1000
}

GET result/_search
{
  "query": {
    "bool": {
      "filter":[
        {
          "term": {
            "id.keyword": "1"
          }
        },
        {
          "range": {
            "time": {
              "from": "2021-01-01T00:00:00.000Z",
              "to": "2021-01-01T23:30:00.000Z"
            }
          }
        }
      ] 
    }
  },
  "size": 1000
}
```

## 2. 查询多个索引
```
# 查询多个索引
POST /_search
{
  "query": {
    "bool": {
      "should": [
        {
          "bool": {
            "filter": [
              {
                "term": {
                  "_index": "kibana_sample_data_flights1"
                }
              }
            ]
          }
        },
        {
          "bool": {
            "filter": [
              {
                "term": {
                  "_index": "kibana_sample_data_flights2"
                }
              }
            ]
          }
        },
        {
          "bool": {
            "filter": [
              {
                "term": {
                  "_index": "kibana_sample_data_flights3"
                }
              },
              {
                "term": {
                  "id": "10"
                }
              }
            ]
          }
        }
      ]
    }
  },
  "size": 2000
}


# 或
# 查询多个索引
GET /load_forecast,price_forecast,elec_forecast/_search

# 或
GET /load_*/_search
```

## 3. 清空所有索引数据
```
POST blackout_plan/_doc/_delete_by_query
{
  "query": {
    "match_all": {}
  }
}
```

# 4. 创建
```
# 创建索引
PUT /test

# 查询
GET test/_search
{
  "size": 1000
}

# 造数据
POST test/_doc
{
  "id" : 1,
  "time": "2021-05-14",
  "tempurature" : "25℃",
}

# 清空所有数据
POST test/_doc/_delete_by_query
{
  "query": {
    "match_all": {}
  }
}
```

## 5. 模糊查询
```js
// 根据已知对象动态生成es查询语句 - 模糊查询
export const getDynamicParams1 = paramsData=> {
    let filterArr = [];  // 存放最终查询语句
    for (let item in paramsData) {
        // 如果paramsData[item]为真就执行后面的方法,并return
        paramsData[item] && filterArr.push({
                                "wildcard": {
                                    [item]: {
                                        "value": "*" + paramsData[item] + "*"
                                    }
                                }
                            })
    }

    return filterArr;
};
```
