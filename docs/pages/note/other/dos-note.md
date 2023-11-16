# dos相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 修改host文件
> 以GitHub为例
- 进入文件地址备份并进行编辑host文件
  - `C:\Windows\System32\drivers\etc`
- 进入浏览器地址查询Github相关ip
  - `https://github.com.ipaddress.com/`
  - `http://ip.webmasterhome.cn/`
  ```
  199.232.69.194 github.global.ssl.fastly.net
  140.82.113.4 github.com
  13.250.177.223 github.com
  ```
- 刷新DNS缓存
  - ipconfig /flushdns

## 2. 文件流操作
- 显示文件: `ls`、`dir`
- 新建文件夹: `mkdir xxx`
- 删除文件夹: `rd app.js`
- 删除文件: `del xx.txt`

## 3. 在bush中的文件流操作
- 创建文件夹与dos相同
- 删除文件夹
  - `rm -d aa`
- 创建文件
  - `touch aa.txt`
- 删除文件
  - `rm aa.txt`
- 编辑txt文件
  - `vi aa.txt` => 输入i开始编辑 => 按esc键，输入wq保存

## 4. cmder添加右键功能
- 下载cmder
- 配置环境变量到path
  - D:\cmder\
- 以管理员身份运行命令提示符
- 在命令提示符里面输入`Cmder.exe /REGISTER ALL`
- 在运行里面就可以直接只用cmder呼出窗口，以及鼠标右键也可以直接呼出窗口了

## 5. 以运行方式打开软件
- 打开系统环境变量并新建
  - 变量名 k
  - 变量值 D:\_soft_
- 打开path
  - 输入%k%
  - 注意不要漏加分号

## 6. 在Windows环境下安装linux子系统
- 在控制面板-卸载里面打开 适用于Windows的linux系统 功能
- 在应用中心安装ubuntu
- 安装cmder，并在设置中启动wsl
- 在cmder中执行命令安装
- 更新ubuntu软件包
  - sudo apt-get update
- 直接使用apt-get来安装
  - sudo apt-get install nodejs
  - sudo apt-get install npm
  - 这里npm并没有初始安装所以需要单独安装，安装完你会发现版本比较低
- 更新nodejs和npm版本
  - sudo npm install n -g 安装n模块（n模块是用于管理nodejs版本的）
  - sudo n stable（更新到最新版的nodejs  sudo n xxx可更新到指定版本的nodejs）
  - sudo npm install npm -g （更新最新版的npm 同样可指定版本）
- 安装zsh
  - sudo apt-get install zsh 安装zsh
  - zsh --version 确认是否安装成功
  - sudo chsh -s $(which zsh) 设置zsh为默认shell
- 安装oh my zsh
  - sh -c "$(curl -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh)"
  - 配置文件在~/.zshrc，但配置文件只要一改变保存就会出问题，目前还没找到原因
    - 具体问题在无法改变主题，还有vscode除了shell其他从文件到终端打开路径错乱，目前除了重装系统没有找到其他解决办法
- 在zsh里面配置格言
  - `fortune | cowsay | lolcat`
  - 保存之后每次运行就会出现一头彩色的牛，上面有一段格言

## 7. 在linux子系统里面安装
- 彩虹特效
  - sudo apt-get install lolcat
- 跑火车
  - sudo apt-get install sl
- 屏幕特效
  - sudo apt-get install cmatrix
- 会说话的 ascii 奶牛
  - sudo apt-get install cowsay
    - cowsay worlds | lolcat
- 鸡汤
  - sudo apt-get install fortune
    - fortune
    - fortune | cowsay | lolcat

## 8. 关于ssh
- window下ssh在 C:\Users\zmx2321
- mac下ssh在 ~/.ssh
- linux下ssh在 ~/.ssh