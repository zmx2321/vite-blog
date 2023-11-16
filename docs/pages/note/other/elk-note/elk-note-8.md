# elasticSearch的requestBody查询
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 简单示例
1. 查询下雨天
```
# 匹配的方式和上文url查询一样
GET kibana_sample_data_flights/_search
{
  # 固定写法
  "query": {
    # 匹配方式
    "match": {
      # 属性名和值
      "OriginWeather": "Rain"
    }
  }
}
```
2. 范围查询以及分页查询
```
GET movies/_search
{
  "query": {
    # 范围查询
    "range": {
      # 大于等于1990，小于等于1992
      "year": {
        "gte": 1990,
        "lte": 1992
      }
    }
  },
  # 从第五页开始，查询20条数据
  "from": 5,
  "size": 20
}
```
3. 只查询部分属性
```
GET kibana_sample_data_flights/_search
{
  # 查询结果只带两个字段
  "_source": ["OriginWeather", "OriginCityName"],
  "query": {
    "match": {
      "OriginWeather": "Rain"
    }
  }
}
```
3. 联合查询
- query只能放一种查询方式
```
GET movies/_search
{
  "query": {
    # 多条件查询需要使用bool
    "bool": {
      # 这里面可以放多种查询，一个查询一个对象
      "must": [
        # 第一种查询方式
        {
          "range": {
            # 大于等于1990，小于等于1992
            "year": {
              "gte": 1990,
              "lte": 1992
            }
          },
        },
        # 第二种查询方式
        {
          "title": "but test"
        }
      ]
    }
  }
}
```

## 2. term查询
> term是表达语义的最小单位，不会进行分词处理
1. 简单使用
- 区分大小写(分词会将大写转换成小写)
```
GET movies/_search
{
  "query": {
    "term": {
      "title": {
        # 使用大写数据就没了
        "value": "beautiful"
      }
    }
  }
}
```
2. 匹配多个单词
- 使用terms查询
```
GET movies/_search
{
  "query": {
    "terms": {
      "title": {
        "but",
        "test",
      }
    }
  }
}
```
3. 排序
```
GET movies/_search
{
  "query": {
    "terms": {
      "title": {
        "but",
        "test",
      }
    },
    # 排序
    "sort": [
      {
        # 根据年份降序
        "year": {
          "order": "desc"
          # "order": "asc"  # 升序
        }
      }
    ]
  }
}
```
4. constantScore
- 算分（匹配有多少相似文字）
- took表示响应时间
- 只能使用term查询
```
GET movies/_search
{
  "query": {
    # 不进行算分，查询数据进行缓存，提高效率
    # 相当于过滤
    "constant_score": {
      "filter": {
        "term": {
          "title": "beautiful"
        }
      }
    }
  }
}
```

## 3. 测试所有代码
```
# elasticSearch的requestBody查询
GET kibana_sample_data_flights/_search
{
  "query": {
    "match": {
      "OriginWeather": "Rain"
    }
  }
}

# 查询部分数据
GET kibana_sample_data_flights/_search
{
  "_source": ["OriginWeather", "OriginCityName"],
  "query": {
    "match": {
      "OriginWeather": "Rain"
    }
  }
}
```

## 4. 修改索引限制
```

# 修改ES中所有的index配置 
PUT _all/_settings
{
  "index":{
    "max_result_window": 100000 
  }
}
 
# 修改ES中指定的index配置
PUT index_name/_settings
{
  "index":{
    "max_result_window": 100000
  }
}
```

## 5. 实例
- 使用match多条件查询
```
# 根据时间和id查询机组组合状态列表
GET need_status/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "id": 1
          }
        },
        {
          "match": {
            "time": "2021-04-07"
          }
        }
      ]
    }
  },
  "size": 1000
}
```
- 使用term多条件查询
```
GET need_status/_search
{
  "query": {
    "bool": {
      "filter": [
        {
          "term": {
            "id": 1
          }
        },
        {
          "term": {
            "time": "2021-04-07"
          }
        }
      ]
    }
  },
  "size": 1000
}
```
