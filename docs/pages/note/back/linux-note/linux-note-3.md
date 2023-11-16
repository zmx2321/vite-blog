# linux简单命令积累

## 1. 如何使用cmder远程连接服务器
- 如果有端口
    - `ssh -p port user@ip`
    - 例：`ssh -p 233 zmx@192.168.0.64`
- 如果没有端口
    - `ssh user@ip`
    - 例：`ssh zmx@192.168.0.64`

## 2. 测试linux是否能访问外网
- `curl -l http://www.baidu.com` 
    - 输出百度页面的HTML
- `wget http://www.baidu.com`
    - 下载百度页面并在当前文件夹保存为index

## 3. 查看端口占用
- `lsof -i:端口号`
    - 用于查看某一端口的占用情况
    - 例：`lsof -i:8000` 查看8000端口使用情况

## 4. 查看Nginx是否已经安装
1. 查看进程列表
> Linux每个应用运行都会产生一个进程，那么我们就可以通过查看Nginx进程是否存在来判断它是否启动。
- 用ps -ef列出进程列表，然后通过grep过滤
    - `ps -ef | grep nginx`

2. 查看Nginx的进程id
- `ps -C nginx -o pid`

## 5. 传输文件
- `scp -r -P port D:\temp\ zmx@ip:/usr/local/nginx/html`

## 6. 删除非空文件夹
- `rm -d -r xxx`

## 7. 要将所有 jpeg的后缀名图片文件修改为 jpg文件
- `rename .jpeg .jpg *.jpeg`

## 8. centos7安装Jenkins
- JAVA安装
    - yum list installed |grep java
    - yum -y list java* => 查看
    - yum install java-1.8.0-openjdk.x86_64 java-1.8.0-openjdk-devel.x86_64 
    - java -version
    - ls /usr/lib/jvm/
    - vi /etc/profile => 修改配置信息
    - 将下面的三行粘贴到 /etc/profile 中
        - export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.222.b10-1.el7_7.x86_64
        - export CLASSPATH=.:$JAVA_HOME/jre/lib/rt.jar:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
        - export PATH=$PATH:$JAVA_HOME/bin
    - source /etc/profile => 立即生效
    - 查看
        - echo $JAVA_HOME
        - echo $CLASSPATH
        - echo $PATH
- 安装jenkins
    - 官网yum形式不知道为啥无效
    - wget http://pkg.jenkins-ci.org/redhat-stable/jenkins-2.7.3-1.1.noarch.rpm
    - rpm -ivh jenkins-2.7.3-1.1.noarch.rpm
    - vi /etc/sysconfig/jenkins => 改端口
    - 启动jenkins服务
        - service jenkins start/stop/restart
        - systemctl stop jenkins
        - systemctl start jenkins
    - cat /var/lib/jenkins/secrets/initialAdminPassword => 查看密码