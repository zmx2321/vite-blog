# springBoot
## 概念
- Spring Boot是由Pivotal团队提供的全新框架，其设计目的是用来简化新Spring应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。通过这种方式，Spring Boot致力于在蓬勃发展的快速应用开发领域(rapid application development)成为领导者。
- boot表示启动,表示启动一个spring应用
- 无xml配置,无代码生成,无任何第三方依赖管理工具配置内容(例如Maven或Gradle)
- 表示一种启动方式 
- springBoot是一个脚手架
- 用于快速搭建一个基于Spring的web应用,开箱即用,创建即可开发业务代码
- 其设计目的是用来简化Spring应用的初始搭建以及开发过程
- 需要先熟练使用maven进行项目构建和依赖管理

## springBoot核心思想
- 约定优于配置

## 优点
- 快速创建独立运行的Spring应用
- 内嵌web服务器(tomcat、jetty、undertow)
  - 不需要像之前打包成war包,部署到外部的tomcat中,只要运行jar包即可
- 提供各种starter简化配置,还管理了版本号,减少版本冲突所带来的问题
- 自动配置Spring以及第三方功能(约定大于配置)
- 无需配置xml,无代码生成,开箱即用(通过纯注解的形式)