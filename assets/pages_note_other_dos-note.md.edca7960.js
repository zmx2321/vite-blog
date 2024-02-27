import{_ as l,o as i,c as s,e}from"./app.6f8159a9.js";const b=JSON.parse('{"title":"dos相关笔记","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/dos-note.md","filePath":"pages/note/other/dos-note.md","lastUpdated":1700192468000}'),a={name:"pages/note/other/dos-note.md"},t=e(`<h1 id="dos相关笔记" tabindex="-1">dos相关笔记 <a class="header-anchor" href="#dos相关笔记" aria-label="Permalink to &quot;dos相关笔记&quot;">​</a></h1><h2 id="_1-修改host文件" tabindex="-1">1. 修改host文件 <a class="header-anchor" href="#_1-修改host文件" aria-label="Permalink to &quot;1. 修改host文件&quot;">​</a></h2><blockquote><p>以GitHub为例</p></blockquote><ul><li>进入文件地址备份并进行编辑host文件 <ul><li><code>C:\\Windows\\System32\\drivers\\etc</code></li></ul></li><li>进入浏览器地址查询Github相关ip <ul><li><code>https://github.com.ipaddress.com/</code></li><li><code>http://ip.webmasterhome.cn/</code></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">199.232.69.194 github.global.ssl.fastly.net</span></span>
<span class="line"><span style="color:#e1e4e8;">140.82.113.4 github.com</span></span>
<span class="line"><span style="color:#e1e4e8;">13.250.177.223 github.com</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">199.232.69.194 github.global.ssl.fastly.net</span></span>
<span class="line"><span style="color:#24292e;">140.82.113.4 github.com</span></span>
<span class="line"><span style="color:#24292e;">13.250.177.223 github.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li>刷新DNS缓存 <ul><li>ipconfig /flushdns</li></ul></li></ul><h2 id="_2-文件流操作" tabindex="-1">2. 文件流操作 <a class="header-anchor" href="#_2-文件流操作" aria-label="Permalink to &quot;2. 文件流操作&quot;">​</a></h2><ul><li>显示文件: <code>ls</code>、<code>dir</code></li><li>新建文件夹: <code>mkdir xxx</code></li><li>删除文件夹: <code>rd app.js</code></li><li>删除文件: <code>del xx.txt</code></li></ul><h2 id="_3-在bush中的文件流操作" tabindex="-1">3. 在bush中的文件流操作 <a class="header-anchor" href="#_3-在bush中的文件流操作" aria-label="Permalink to &quot;3. 在bush中的文件流操作&quot;">​</a></h2><ul><li>创建文件夹与dos相同</li><li>删除文件夹 <ul><li><code>rm -d aa</code></li></ul></li><li>创建文件 <ul><li><code>touch aa.txt</code></li></ul></li><li>删除文件 <ul><li><code>rm aa.txt</code></li></ul></li><li>编辑txt文件 <ul><li><code>vi aa.txt</code> =&gt; 输入i开始编辑 =&gt; 按esc键，输入wq保存</li></ul></li></ul><h2 id="_4-cmder添加右键功能" tabindex="-1">4. cmder添加右键功能 <a class="header-anchor" href="#_4-cmder添加右键功能" aria-label="Permalink to &quot;4. cmder添加右键功能&quot;">​</a></h2><ul><li>下载cmder</li><li>配置环境变量到path <ul><li>D:\\cmder\\</li></ul></li><li>以管理员身份运行命令提示符</li><li>在命令提示符里面输入<code>Cmder.exe /REGISTER ALL</code></li><li>在运行里面就可以直接只用cmder呼出窗口，以及鼠标右键也可以直接呼出窗口了</li></ul><h2 id="_5-以运行方式打开软件" tabindex="-1">5. 以运行方式打开软件 <a class="header-anchor" href="#_5-以运行方式打开软件" aria-label="Permalink to &quot;5. 以运行方式打开软件&quot;">​</a></h2><ul><li>打开系统环境变量并新建 <ul><li>变量名 k</li><li>变量值 D:_soft_</li></ul></li><li>打开path <ul><li>输入%k%</li><li>注意不要漏加分号</li></ul></li></ul><h2 id="_6-在windows环境下安装linux子系统" tabindex="-1">6. 在Windows环境下安装linux子系统 <a class="header-anchor" href="#_6-在windows环境下安装linux子系统" aria-label="Permalink to &quot;6. 在Windows环境下安装linux子系统&quot;">​</a></h2><ul><li>在控制面板-卸载里面打开 适用于Windows的linux系统 功能</li><li>在应用中心安装ubuntu</li><li>安装cmder，并在设置中启动wsl</li><li>在cmder中执行命令安装</li><li>更新ubuntu软件包 <ul><li>sudo apt-get update</li></ul></li><li>直接使用apt-get来安装 <ul><li>sudo apt-get install nodejs</li><li>sudo apt-get install npm</li><li>这里npm并没有初始安装所以需要单独安装，安装完你会发现版本比较低</li></ul></li><li>更新nodejs和npm版本 <ul><li>sudo npm install n -g 安装n模块（n模块是用于管理nodejs版本的）</li><li>sudo n stable（更新到最新版的nodejs  sudo n xxx可更新到指定版本的nodejs）   - sudo npm install npm -g （更新最新版的npm 同样可指定版本）</li></ul></li><li>安装zsh <ul><li>sudo apt-get install zsh 安装zsh</li><li>zsh --version 确认是否安装成功</li><li>sudo chsh -s $(which zsh) 设置zsh为默认shell</li></ul></li><li>安装oh my zsh <ul><li>sh -c &quot;$(curl -fsSL <a href="https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh" target="_blank" rel="noreferrer">https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh</a>)&quot;</li><li>配置文件在~/.zshrc，但配置文件只要一改变保存就会出问题，目前还没找到原因 <ul><li>具体问题在无法改变主题，还有vscode除了shell其他从文件到终端打开路径错乱，目前除了重装系统没有找到其他解决办法</li></ul></li></ul></li><li>在zsh里面配置格言 <ul><li><code>fortune | cowsay | lolcat</code></li><li>保存之后每次运行就会出现一头彩色的牛，上面有一段格言</li></ul></li></ul><h2 id="_7-在linux子系统里面安装" tabindex="-1">7. 在linux子系统里面安装 <a class="header-anchor" href="#_7-在linux子系统里面安装" aria-label="Permalink to &quot;7. 在linux子系统里面安装&quot;">​</a></h2><ul><li>彩虹特效 <ul><li>sudo apt-get install lolcat</li></ul></li><li>跑火车 <ul><li>sudo apt-get install sl</li></ul></li><li>屏幕特效 <ul><li>sudo apt-get install cmatrix</li></ul></li><li>会说话的 ascii 奶牛 <ul><li>sudo apt-get install cowsay <ul><li>cowsay worlds | lolcat</li></ul></li></ul></li><li>鸡汤 <ul><li>sudo apt-get install fortune <ul><li>fortune</li><li>fortune | cowsay | lolcat</li></ul></li></ul></li></ul><h2 id="_8-关于ssh" tabindex="-1">8. 关于ssh <a class="header-anchor" href="#_8-关于ssh" aria-label="Permalink to &quot;8. 关于ssh&quot;">​</a></h2><ul><li>window下ssh在 C:\\Users\\zmx2321</li><li>mac下ssh在 ~/.ssh</li><li>linux下ssh在 ~/.ssh</li></ul>`,18),o=[t];function n(u,d,c,r,h,p){return i(),s("div",null,o)}const _=l(a,[["render",n]]);export{b as __pageData,_ as default};
