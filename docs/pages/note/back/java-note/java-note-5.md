# 启动javaWeb服务

## spring boot简介
- spring boot是基于spring框架的开源框架,其设计目的是用来简化新Spring应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置,尽可能减少开发者的工作量 .
- spring boot更像是一个脚手架,我们可以将一些繁杂的配置工作简化起来糅合成一块儿,如果需要引入其他第三方组件,或做其他什么操作的时候,可以用spring boot来代替,而不需要那种ssm组装多配置的方式
- spring框架重点在一个地方,源码里面有refresh方法,这个方法里面同时又包含了13个方法,他就是贯穿整个spring体系中很多重要的关键步骤

## spring boot特点
- 独立运行：Spring Boot而且可以以jar包的形式独立运行，运行一个Spring Boot应用只需要通过java -jar命令来运行jar文件。
- 简化配置：spring boot采用约定大于配置的原则，很多配置文件都有默认值，无需再进行配置。
- 自动配置：spring boot根据在类路径中的jar包、类和配置文件的变化，自动配置Spring上下文。
- 无代码生成和XML配置：spring boot不生成代码，也不需要XML配置文件。

## 前后端流程
- 客户端(即前端) => api层(get/post/put/delete) => service层(具体业务逻辑) => dao层(即数据访问层,与数据库交互,将关系型数据转化为面向对象的对象) => 数据库

## 初始化javaWeb项目
### 第一种
- idea新建项目 => java => intellij => 创建
- 选择项目 => 右上角查找 => 搜索add iframe support => 选择web application => 点击ok
- 选择项目 => open Module Setting => 选择librarys => 点击java => 查找tomcat路径(shift+command+.显示全部文件) => tomcat中选择lib=>servelt-api.jar => 点击ok
- 右上角点击current file配置tomcat=> edit configuration => 左边点击add => 选择本地tomcat => 选择tomcat路径 => 点击ok
- 选择deployment(部署) => 点击右下角fix => 点击ok
## 第二种
- 创建jakarta项目 => 应用服务器选择tomcat => 点击next => 输入项目名称 => 点击finish