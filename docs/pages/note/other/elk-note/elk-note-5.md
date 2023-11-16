# elk相关问题
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. vue连接es
```js
"/elasticApi": {
  changeOrigin: true, //允许跨域
  target: dataWareConfig.elsearchUrl,
  ws: true,
  pathRewrite: {
    "^/elasticApi": "/"
  }
},

import axios from '@/router/axios_elk';

 // 接口 - 查询
 const getESApi = (indexes, params) => {
    let res = axios({
        url: `/${esApiUrl}/${indexes}/_search`,
        method: 'post',
        data: params
    });
    return res;
};

 // es api 操作 1111
 export const esOptionApi = (indexes, params, succ)=> {
     // console.log("es api 操作");

     getESApi(indexes, params).then(res=> {
         let hitsData = res.data;  // 获取目标数据集合

         if(hitsData.hits) {
             hitsData = hitsData.hits;

             succ(hitsData);
         } else {
             // 当没有返回异常状态码时，执行回调
             if(hitsData.hasOwnProperty("status") == false) succ(hitsData);
             else if(hitsData.status != 404) { // 当索引存在时，返回错误，需要提示
                Message.error("es数据获取异常");
             }
         }
     }).catch(err=> {
         if(err) {
             Message.error("es数据获取异常");
             console.log(err);
         }
     });
 }

 // 调用es接口
let params = {
  "query": {
    "constant_score": {
      "filter": {
        "term": {
          "__id.keyword": id
        }
      }
    }
  }
}

// 调用es接口删除数据
dataWareUtil.esOptionApi(delForecastoList, params, hisData=> {
  // todo(hisData);
})
```

## 2. kibana插件开发
- elastic在npm上发布了一些制作插件的工具，在你没有完全了解该如何做插件开发之前，可以直接使用工具来帮你生成插件
- npm install -g yo
- npm install -g generator-kibana-plugin
- mkdir echartdashboard-plugin
- cd echartdashboard-plugin
- yo kibana-plugin