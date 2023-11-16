# 初识elk
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

> [官方说明手册传送门](https://www.elastic.co/guide/cn/kibana/current/index.html)

## 1. 适用对象
- 对各种数据可视化需求并期望找到一个解决方案的同学
- 希望对运维有一些了解的同学
- 本文档需要有一些基础的互联网开发知识，对ElasticSearch有了解

## 2. elk家族介绍
> 在实际工作中，我们每天都会有很多的数据需要收集、处理、分析，elk提供了这个需求的整体解决方案
- e => ElasticSearch
  - 是一个实时的分布式搜索引擎，他可以用于全文搜索，结构化搜索及分析。
  - 在ElasticSearch中，我们可以存储海量的数据
  - 简称为es
- l => Logstash
  - 是ELK的数据收集、分发工具，用于不同目标收集不同格式的数据，经过格式化处理后输出到不同的存储目标 。
- k => Kibana
  - 提供了可视化的平台，他可以在ElasticSearch的索引中查找、交互数据，并生成各种表格、图形等。便于进行数据分析的工作 。
- 在elk家族中，Logstash负责收集各种类型的数据进行处理，然后把这些海量的数据入库到ElasticSearch中，最终由Kibana负责数据的可视化展示

## 3. kibana安装
> [kibana](https://www.elastic.co/cn/kibana)
- 如果ElasticSearch、Logstash、Kibana要一起合用，大版本要一致
- 安装X-pack插件用来身份验证
  - 用户 => X-pack => Kibana
- 不建议ELK系列软件使用root用户运行
  - 可以创建一个elastic用户
- 下载命令：
  - wget https://artifacts.elastic.co/downloads/kibana/kibana-7.11.2-x86_64.tar.gz => 49M
- 解压：
  - tar -zxvf kibana-7.11.2-linux-x86_64.tar.gz
  - 之后可以重命名一下:`mv kibana-7.11.2-linux-x86_64 kibana`
  - 放到local中: `mv kibana /usr/local/`
- 配置
  - 进到主目录 => `cd /usr/local/kibana`
  - 主要有四个文件夹需要注意
    - bin => kibana可执行应用程序目录，包含kibana和安装插件的kibana-plugin等
      - 安装身份验证插件x-pack:`/usr/local/kibana/bin/kibana-plugin install x-pack`
      - 他会自动去找对应版本的x-pack插件，下载然后安装
    - config
      - kibana的配置文件目录，包含kibana.yml文件
      - cd config => 找到kibana.yml
      - vim kibana.yml
      - 我们的主要配置
        - server.port => 5601
        - server.host => 0.0.0.0
        - server.name => kibana
        - elasticsearch.url => ES实例地址
        - elasticsearch.username => 链接ES时使用的用户名
          - 这个用户需要具有manager权限，不然会报错，因为kibana也需要有往里面存数据等操作
        - elasticsearch.password => 链接ES时使用的密码
        - kibana.index => .kibana
        - xpack.security.encrypitopnKey => 随便写一个但需要长度为32位的字符串
      - 详细配置说明详见kibana配置项
    - data
      kibana或kibana插件写数据的存储目录
    - plugins
      插件目录，kibana的每一个插件都会存在该目录
- 启动
  - `/usr/local/kibana/bin/kibana`
  - `nohub /usr/local/kibana/bin/kibana > /dev/null &` => 后台运行
  - 初始化用户名: kibana / 初始密码: changeme


## 4. kibana配置项
- server.port => kibana绑定的端口号，默认是5601
- server.host => 默认是localhost
- server.name => 实例名称，默认主机名
- kibana.defaultAppId => 进入kibana时加载的应用，默认是discover
- eleasticsearch.url => ES实例地址，用来处理所有的查询请求，默认是 http://localhost:9200
- eleasticsearch.username => 链接ES时使用的用户名，如果ES没有设置用户权限，此项可不以启用
- eleasticsearch.password => 链接ES时使用的密码，如果ES没有设置用户权限，此项可不以启用
- kibana.index => kibana需要在ES中创建一个索引来存储kibana的搜索、可视化和仪表盘的数据。如果该索引不存在，则会自动创建，默认是.kibana
- elasticsearch.pingTimeout => 设置请求ES的响应超时时间，单位毫秒，默认是elasticsearch.requestTimeout
- elasticsearch.requestTimeout => ES响应超时时间(毫秒)，该值必须为正整数，默认3000
- elasticsearch.shardTimeout => ES等待碎片响应的时间(毫秒)。设置为0以禁用。默认值为0
- logging.dest => kibana日志输出文件，默认是stdout
- logging.slient => 设置改配置，所有日志都输出，默认是false
- xpack.security.encrypitopnKey => 加密秘钥，防止密码被暴力破解
  - 原先没有，要自己加，最后一个key是大写
- [更多配置传送带](https://www.elastic.co/guide/en/kibana/current/settings.html)

## 5. kibana汉化
> 这个过程是不可逆的，汉化工具是直接修改原始Kibana程序里面的文字来进行汉化的，如果要改回来，需要重装
- kibana的配置文件目录，包含kibana.yml文件
- 修改kibana.yml文件最后一行
- 改成`i18n.local:"zh-CN"`
- 重启
