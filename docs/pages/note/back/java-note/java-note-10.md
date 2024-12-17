# Maven
## 为什么要学习Maven
- 在javaweb中,需要使用大量的jar包,如何能够让一个东西帮我们配置这个jar包
- Marven就是一个专门用来管理jar包的工具
- Maven的核心思想:约定大于配置
  - Maven会规定好如何编写java代码,如何编译代码,如何配置项目,如何打包项目等等

## 配置maven
- 在(官网)[https://maven.apache.org/download.cgi]下载maven
- 解压到某个文件夹
  - 我这里使用 `/usr/local/apache-maven-3.9.9`
- 打开.zshrc配置文件
  - `open ~/.zshrc`
- 添加配置
```
export M2_HOME=/usr/local/apache-maven-3.9.9
export PATH=$PATH:$M2_HOME/bin
```
- 让其生效
  - `source ~/.zshrc`
- 修改权限
  - `chmod a+x /usr/local/apache-maven-3.9.9`
- 验证是否安装成功
  - `mvn -v`
- 安装成功会显示
```
Apache Maven 3.9.9 (8e8579a9e76f7d015ee5ec7bfcdc97d260186937)
Maven home: /usr/local/apache-maven-3.9.9
Java version: 23.0.1, vendor: Oracle Corporation, runtime: /Users/zmx2321/Library/Java/JavaVirtualMachines/openjdk-23.0.1/Contents/Home
Default locale: zh_CN_#Hans, platform encoding: UTF-8
OS name: "mac os x", version: "15.1.1", arch: "aarch64", family: "mac"
```
- 修改setting文件
  - `open /usr/local/apache-maven-3.9.9/conf/settings.xml`
- 设置本地数据仓库位置
  - `<localRepository>/usr/local/apache-maven-3.9.9/repo</localRepository>`
- 为了下载方便，设置阿里云下载，即改为将节点mirror修改为如下内容
```
<mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>https://maven.aliyun.com/repository/public</url>
</mirror>
<mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>*,!jeecg,!jeecg-snapshots</mirrorOf>
      <name>Nexus aliyun</name>
      <url>https://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```