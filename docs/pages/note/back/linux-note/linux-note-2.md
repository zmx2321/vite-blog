# Ubuntu部署服务

## 1. 服务器信息
  - 服务器类型：Ubuntu
  - 账号：test
  - 密码：xxx
  - 远程链接端口：222
  - 链接远程服务器
    - ssh -p 222 test@192.168.0.146 ---- xxx

## 2. 部署项目服务
### 2.1. 内容
  - 安装nginx
  - 安装jdk
  - 安装tomcat
  - 安装mysql
  - mysql链接navicat

### 2.2. 安装nginx
1. 更新APT源
    ```
    sudo apt-get update 
    sudo apt-get install nginx
    ```
2. 修改配置文件
    - /etc/nginx/nginx.conf 主配置文件
    - /etc/nginx/sites-enabled 配置端口
      - 该目录下有一个default文件，修改默认端口名为6060
      - 查看文件 cat nginx.conf 
      - 进入编辑模式 vi nginx.conf 
      - 按i键，在下方显示insert 
      - 按esc改变编辑状态 
      - 按:使光标停留在最后一行 
      - 输入wq!保存文档并退出编辑模式
      ```
      server { 
        # 默认端口为80 
        listen 6060 default_server; 
        listen [::]:6060 default_server;

        ......
      }
      ```
3. 重启nginx
    - `sudo service nginx reload`
4. 将项目放入nginx服务
    - nginx的根目录文件夹地址为`/var/www/html`
    - nginx访问的地址为`ip:6060/文件名`
    - `scp -r -P 222 D:\sf\test test@192.168.0.146.146:/home/myspace`
      - 由于权限原因，首先要先将文件传入'/home/myspace'文件夹下(xxx)
      - p要大写
    - 将myspace根目录下的文件剪切到nginx服务下
      - cd ~
      - `mv test /var/www/html`

5. 其它相关帮助
    - `/usr/sbin/nginx` => 主程序
    - `sudo /usr/sbin/nginx -t` => 查看是否安装完成
    - `/etc/nginx` => 配置文件目录,所有的nginx配置文件都在这里
    - `/etc/nginx/nginx.conf` => 主配置文件
    - `/var/log/nginx/access.log` => 每一个访问请求都会记录在这个文件中，除非你做了其它设置
    - `/var/log/nginx/error.log` => 任何Nginx的错误信息都会记录到这个文件中
    - 常用命令
      ```
      sudo service nginx {start|stop|restart|reload|force- reload|status|configtest|rotate|upgrade}
      ```

### 2.3. 安装jdk
1. 查看本机是否安装了jre
    - 输入 java
2. 安装jre
    - `sudo apt install openjdk-8-jre-headless`
3. 安装jdk
    - `sudo apt install openjdk-8-jdk-headless`
    - 使用 javac 命令检测jdk是否安装成功

### 2.4. 安装tomcat
1. 创建tomcat文件夹
    - 进入到 /usr/local/ 文件夹下 => `cd /usr/local/`
    - 创建tomcat文件夹 => `sudo mkdir tomcat`
2. 在apache官网下载对应apache-tomcat-9.0.29.tar.gz版本
3. 传输apache-tomcat-9.0.29.tar.gz文件
    -  传输apache-tomcat-9.0.29.tar.gz文件夹到 ~
      - `scp -r -P 222 D:\sf\apache-tomcat-9.0.29.tar.gz test@192.168.0.146:/home/myspace`
    - 剪切到 /usr/local/mydata 目录下
      - cd ~
      - sudo mv apache-tomcat-9.0.29.tar.gz /usr/local/tomcat
4. 安装tomcat
    - 解压apache-tomcat-9.0.29.tar.gz文件
      - `sudo tar -zxvf apache-tomcat-9.0.29.tar.gz`
    - 修改权限
      - `sudo chmod 755 -R apache-tomcat-9.0.29`
    - 修改配置文件
      - `cd apache-tomcat-9.0.29/conf`
      - `vi service.xml` => 编辑具体指令详见nginx配置
    - 复制war包到webapps目录下
      - `scp -r -P 222 D:\sf\test.war test@192.168.0.146:/home/myspace`
    - 剪切文件到webapps目录下
      - `sudo mv test.war /usr/local/tomcat/apache-tomcat- 9.0.29/webapps/`
    - 启动tomcat
      - `cd apache-tomcat-9.0.29`
      - `cd bin`
      - `./startup.sh`

### 2.5. 安装mysql
1. 访问源列表里的每个网址，并读取软件列表，然后保存在本地电脑
    - sudo apt-get update
2. 开始安装mysql
   - `sudo apt-get install mysql-server`
3. 安装过程中会出现一个界面提示输入root用户的密码，这里输入root
4. 一会又出来一个界面，提示再次输入root用户的密码
5. 等待一会就安装完成了
6. 验证
    - `mysql -u root -p`
    - 进入mysql界面
    - mysql> show databases;

### 2.6. mysql链接navicat
1. 配置ufw或iptables，开放端口或关闭防火墙
    - `sudo ufw allow 端口号/tcp（允许连接）`
    - ssh（22）/ MySQL（3306）
    - 启用UFW
      - sudo ufw enable
    - 检查UFW状态和规则
      - sudo ufw status verbose
2. 授权
    - `mysql -u root -p` => 登陆
    - `grant all privileges on *.* to root@"%" identified by 'root'`
      - grant是授权命令，其中root是连接用的用户名、'root'是 数据库密码，用户名后面的“%”通用符表示 允许各host
3. 修改MySql配置文件
    - `cd /etc/mysql/mysql.conf.d`
    - `sudo vim mysqld.cnf`
      - `找到bind-address=127.0.0.1并注释，MySql就可以开启远程访问了`
4. 重启mysql服务
    - sudo service mysql restart

## 3. 其他
### 3.1. 防火墙
- 有时候防火墙开启无法访问nginx服务
- 查看防火墙的状态
  - `systemctl status firewalld.service`
  - 或者 `systemctl status firewalld`
  - active(running)表示防火墙开启
- 关闭防火墙
  - `systemctl stop firewalld.service`
  - 或者 `systemctl stop firewalld`
- 开启防火墙
  - `systemctl start firewalld.service`
  - 或者 `systemctl status firewalld`
- 前面的方法，一旦重启操作系统，防火墙就自动开启了
  - `systemctl disable firewalld.service`，开机禁止防火墙服务器
  - `systemctl enable firewalld.service`，开机启动防火墙服务器
