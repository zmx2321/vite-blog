import{_ as l,o as i,c as e,e as a}from"./app.5a785a53.js";const x=JSON.parse('{"title":"前端必会的Linux知识","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/back/linux-note/linux-note-1.md","filePath":"pages/note/back/linux-note/linux-note-1.md","lastUpdated":1700206241000}'),n={name:"pages/note/back/linux-note/linux-note-1.md"},s=a(`<h1 id="前端必会的linux知识" tabindex="-1">前端必会的Linux知识 <a class="header-anchor" href="#前端必会的linux知识" aria-label="Permalink to &quot;前端必会的Linux知识&quot;">​</a></h1><br><h4 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h4><h6> 1. 认识Linux </h6><h6> 2. 安装Linux环境 </h6><h6> 3. 认识Linux环境 </h6><h6> 4. 前端开发必须要懂的知识 </h6><h6> 5. 安装linux开发环境 </h6><h6> 6. 关于某些网站无法访问的解决方法 </h6><h2 id="_1-认识linux" tabindex="-1">1. 认识Linux <a class="header-anchor" href="#_1-认识linux" aria-label="Permalink to &quot;1. 认识Linux&quot;">​</a></h2><h4 id="linux是什么" tabindex="-1">linux是什么 <a class="header-anchor" href="#linux是什么" aria-label="Permalink to &quot;linux是什么&quot;">​</a></h4><ul><li>linux是一个操作系统，它不是一个成型的东西，它的本质是内核<a href="https://www.kernel.org/" target="_blank" rel="noreferrer">“kernel”</a>。 <ul><li>kernel主要是用c写的，里面有各种算法和处理流程。</li><li>内核对性能要求非常高，因为底层的东西需要向上提供各种api，或许一个api每秒钟会执行成千上万次，操作非常频繁，需要很高的效率。</li></ul></li><li>我们平时所说的Ubuntu、CentOS那些是指发行版，linux内核只是拥有最基本的功能，它本身有六大系统，这六大系统就组成了操作系统核心的功能。</li><li>但是那些发行版，除了这六大系统所拥有的功能以外，还加上了很多外壳性的东西，还有各种软件，各种服务等等，这样才构成了完整的linux。</li></ul><h4 id="unix、linux与windows的区别" tabindex="-1">UNIX、linux与windows的区别 <a class="header-anchor" href="#unix、linux与windows的区别" aria-label="Permalink to &quot;UNIX、linux与windows的区别&quot;">​</a></h4><ul><li>UNIX操作系统是一个相当古老的系统，它奠定了现代操作系统的基础，它同时也制定了很多业界的规范。 <ul><li>mac是unix内核，是BSD内核，linux是另外一种内核，BSD内核是有版权的。</li><li>unix它的lience(许可证)和linux定义的是不一样的，开源软件的lience各有特点，纯粹的unix的版权是归属于贝尔实验室的，贝尔实验室是AT&amp;T旗下的（美国的一个大通讯公司）。</li></ul></li><li>windows一般是用在客户端的桌面上，但是也偶尔被用做服务器，用做服务器的windows也是有图形界面的，但其实有图形界面的服务器是对系统资源的浪费。</li><li>linux一般是用在服务器上，基本不使用图形界面，因为服务器它对性能要求很高。linux的内核是从unix上继承下来的，它主张以简为美。windows则比较复杂。</li></ul><h4 id="常用的linux发行版" tabindex="-1">常用的linux发行版 <a class="header-anchor" href="#常用的linux发行版" aria-label="Permalink to &quot;常用的linux发行版&quot;">​</a></h4><ul><li>常用：Ubuntu(一年发行2次[4、10]lts)、CentOS(红帽的社区维护版)、Fedora</li><li>欧美常用：Deblan</li><li>为安全方面开发的：Kali(有很多网络安全工具和黑客工具)</li><li>服务器市场占有比例较大：CentOS、Red Hat(红帽[商业])</li><li>桌面系统市场占有比例较大：Ubuntu、Deblan、Fedora</li></ul><hr><br><h2 id="_2-安装linux环境" tabindex="-1">2. 安装Linux环境 <a class="header-anchor" href="#_2-安装linux环境" aria-label="Permalink to &quot;2. 安装Linux环境&quot;">​</a></h2><blockquote><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><ol><li>推荐安装<a href="https://www.centos.org/" target="_blank" rel="noreferrer">CentOS</a>，有DVD和Minimal(迷你版)，推荐安装迷你版。</li><li>安装CentOS需要依赖虚拟机，推荐使用<a href="https://www.vmware.com/cn.html" target="_blank" rel="noreferrer">VMware</a>，在下载下面选择“Workstation Pro”，然后找一个注册码注册就可以了，但是注意不要升级，否则会失效。</li><li>虚拟机环境：<br>    <em>a. 内存： 如果带图形界面，推荐内存至少2g，如果是迷你版的CentOS，因为他只有500M，推荐内存至少1g。</em><br>    <em>b. 网络适配器： 配置网络的时候不要使用NAT，否则网络环境就会非常复杂了，它会给你自动配置一个虚拟的局域网来，处理事情的时候会产生一些干扰。推荐使用桥接模式。但使用桥接模式，必须要保证网络的畅通，一旦把网络断开，桥接就会失效</em><br>    <em>c. 专门的网络管理： 专门的网络管理在编辑中的虚拟网络编辑器中，它默认配了两个虚拟网络除非是希望配置一个和外部隔绝的一个虚拟网</em><br></li><li>下载centos镜像推荐：<br> 一般如果使用国外的链接地址下载镜像会比较慢，这里推荐使用国内的下载镜像的地址：163、jdcloud、aliyun、huaweicloud <br></li><li>比较老的机子可能不支持虚拟化：<br> 进入BIOS(主板)，进入System Configuration，找到Virtualization Technology，选择Enabled</li></ol></blockquote><h4 id="新建虚拟机向导-vmare14" tabindex="-1">新建虚拟机向导（Vmare14） <a class="header-anchor" href="#新建虚拟机向导-vmare14" aria-label="Permalink to &quot;新建虚拟机向导（Vmare14）&quot;">​</a></h4><p><strong>选择自定义高级</strong></p><ol><li>硬件兼容性 -&gt; 选择最新版</li><li>安装程序光盘映像文件 -&gt; 选择镜像文件（固定路径） <ul><li>示例：“D:\\vm\\systemOS\\centos-7\\xxxx”</li></ul></li><li>虚拟机名称 -&gt; 虚拟机在左边显示的名称</li><li>位置 -&gt; 这是一个大坑，这里的位置是指，在安装好了虚拟机之后，要在硬盘上生成一个非常大的文件，实际上这个文件是一个虚拟磁盘，至少要有10g的富余空间。一般不占用系统空间（C盘）。 <ul><li>示例：“D:\\vm\\sys_space\\CentOS7\\vmspace\\xxx”</li></ul></li><li>处理器数量 -&gt; 1</li><li>每个处理器的内核数量 -&gt; 1-2 <ul><li>处理器就是cpu，我的计算机只有一个处理器(cpu)，6个内核。</li><li>这里的处理器数量和内核数量并不是越多越好，一般这里的选择要小于你的计算机本身的cpu和内核，它取决于你的计算机。</li></ul></li><li>此虚拟机的内存 -&gt; 2048MB</li><li>网络连接 -&gt; 桥接 <ul><li>桥接就是直接使用你物理机的地址</li></ul></li><li>下面的控制器、虚拟磁盘那些都选默认</li><li>创建一个新的虚拟盘</li><li>最大磁盘大小 -&gt; 默认不动 <ul><li>下面立即分配所有磁盘空间不勾选，否则它会直接生成20G的大文件，一般如果不勾选的话，它是达不到20G的。</li></ul></li><li>选择将虚拟磁盘存储为单个文件 <ul><li>分拆的意义在于把虚拟磁盘分成若干个，这样拷贝的时候速度会快一些，这是由底层的IO设备的特点来决定的，但一般创建了虚拟机之后，不会去动他，存储为单个文件，性能反而会高一些。</li></ul></li><li>最后它就开始创建磁盘文件了。 <ul><li>你要去选择一下磁盘文件存放的位置</li><li>示例：“D:\\vm\\sys_space\\CentOS7\\vmdkspace\\CentOS7.vmdk”</li></ul></li><li>点击完成 <br><strong>配置centos7详解</strong></li><li>选择语言</li><li>等一段时间，本地化是自动读取系统配置自动配置的</li><li>系统配置 <ul><li>安装位置 -&gt; 选择安装位置（点一下）之后其他默认，点击完成</li><li>KDUMP -&gt; 取消勾选启用（禁用），它是供你调试用的，除非你要用C语言去做linux的开发，否则它开启的话，意义不大，反而会影响它本身的运行性能，它会把内存的数据转储到你的磁盘上</li><li>网络和主机名 -&gt; 点击去之后，将以太网(我这里名称是ens33)打开，稍等一会，让它获取ip地址，ip地址获取成功，说明网络配置成功</li><li>SECURITYPOLICY -&gt; 它是安全策略的配置，默认不动，否则后面使用会非常麻烦</li></ul></li><li>设置root密码（超级管理员），如果对安全的要求不高（自己的虚拟机），可以设置弱密码，设置弱密码要点击两次完成才能设置成功，在公网上linux密码必须相当复杂，否则很容易被攻破。在生产环境下，避免使用root。</li><li>创建用户，这里的全名是给系统用的（仅仅只是展示），这里的用户名是给用户登陆用的。密码的设置和上面相同。</li><li>接下来等待它安装完成就完成了 。</li></ol><hr><br><h2 id="_3-认识linux环境" tabindex="-1">3. 认识Linux环境 <a class="header-anchor" href="#_3-认识linux环境" aria-label="Permalink to &quot;3. 认识Linux环境&quot;">​</a></h2><h4 id="linux下的目录是做什么用的" tabindex="-1">linux下的目录是做什么用的 <a class="header-anchor" href="#linux下的目录是做什么用的" aria-label="Permalink to &quot;linux下的目录是做什么用的&quot;">​</a></h4><blockquote><ul><li>linux和unix的目录，它是一种文件树的结构，linux属于根目录文件系统，但windows属于多根目录文件系统</li><li>我们在bin目录下为什么不能找到ls、cd等的那些命令？这里有一个概念，我们现在用的终端，它叫“shell（贝壳）”，那些常用的ls、cd等那些是shell本身被内置的命令，而在bin底下是那些不能被内置的命令（因为它们个头比较大或者使用频率比较低）</li><li>etc是最重要的目录，它专门用来放置配置文件的。其中以*.conf结尾的都是配置文件</li></ul></blockquote><ul><li>/bin <ul><li>系统有很多放置执⾏档的⽬录，但/bin⽐较特殊。因为/bin放置的是在单⼈维护模式下还能够被操作的指令。</li><li>在/bin底下的指令可以被root与⼀般帐号所使⽤，主要有：<br> cat、chmod(修改权限)、chown、date、mv、mkdir、cp, bash等等常⽤的指令。</li></ul></li><li>/boot（是核心文件，不能碰） <ul><li>主要放置开机会使⽤到的档案，包括Linux核⼼档案以及开机选单与开机所需设定档等等。</li><li>Linux kernel常⽤的档名为：vmlinuz，如果使⽤的是grub这个开机管理程式，则还会存在/boot/grub/这个⽬录。引导操作系统的菜单。</li></ul></li><li>/dev <ul><li>在Linux系统上，任何装置与周边设备都是以档案的型态存在于这个⽬录当中。</li><li>只要通过存取这个⽬录下的某个档案，就等于存取某个装置。</li><li>⽐较重要的档案有/dev/null,/dev/zero, /dev/tty , /dev/lp, / dev/hd, /dev/sd*等等</li></ul></li><li>/etc <ul><li>系统主要的设定档⼏乎都放置在这个⽬录内，例如⼈员的帐号密码档、各种服务的启始档等等。</li><li>⼀般来说，这个⽬录下的各档案属性是可以让⼀般使⽤者查阅的，但是只有root有权⼒修改。</li><li>FHS建议不要放置可执⾏档(binary)在这个⽬录中。</li><li>⽐较重要的档案有： /etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab, /etc/sysconfig/等等。</li><li>另外，其下重要的⽬录有：/etc/init.d/：所有服务的预设启动script都是放在这⾥的，例如要启动或者关闭iptables的话：/etc/init.d/iptables start、/etc/init.d/、iptables stop/etc/xinetd.d/：这就是所谓的super daemon管理的各项服务的设定档⽬录。</li><li>/etc/X11/：与XWindow有关的各种设定档都在这⾥，尤其是xorg.conf或XF86Config这两个X Server的设定档。</li></ul></li><li>/home（管理员的home目录是root） <ul><li>这是系统预设的使⽤者家⽬录(home directory)。</li><li>在你新增⼀个⼀般使⽤者帐号时，预设的使⽤者家⽬录都会规范到这⾥来。</li><li>⽐较重要的是，家⽬录有两种代号，“~”代表当前使⽤者的家⽬录，⽽“~guest”则代表⽤户名为guest的家⽬录。</li></ul></li><li>/lib <ul><li>系统的函式库⾮常的多，⽽/lib放置的则是在开机时会⽤到的函式库，以及在/bin或/sbin底下的指令会呼叫的函式库⽽已 。</li><li>什么是函式库呢？妳可以将他想成是外挂，某些指令必须要有这些外挂才能够顺利完成程式的执⾏之意。</li><li>尤其重要的是/lib/modules/这个⽬录，因为该⽬录会放置核⼼相关的模组(驱动程式)。</li></ul></li><li>/media <ul><li>media是媒体的英⽂，顾名思义，这个/media底下放置的就是可移除的装置。 包括软碟、光碟、 DVD等等装置都暂时挂载于此。常⻅的档名有：/media/floppy,/media/cdrom等等。</li></ul></li><li>/mnt <ul><li>如果妳想要暂时挂载某些额外的装置，⼀般建议妳可以放置到这个⽬录中。在早时候，这个⽬录的⽤途与/media相同啦。只是有了/media之后，这个⽬录就⽤来暂时挂载⽤了。</li></ul></li><li>/opt <ul><li>这个是给第三⽅协⼒软体放置的⽬录。</li><li>什么是第三⽅协⼒软体啊？举例来说，KDE这个桌⾯管理系统是⼀个独⽴的计画，不过他可以安装到Linux系统中，因此KDE的软体就建议放置到此⽬录下了。</li><li>另外，如果妳想要⾃⾏安装额外的软体(⾮原本的distribution提供的)，那么也能够将你的软体安装到这⾥来。不过，以前的Linux系统中，我们还是习惯放置在/usr/local⽬录下。</li></ul></li><li>/root <ul><li>系统管理员(root)的家⽬录。</li><li>之所以放在这⾥，是因为如果进⼊单⼈维护模式⽽仅挂载根⽬录时，该⽬录就能够拥有root的家⽬录，所以我们会希望root的家⽬录与根⽬录放置在同⼀个分区中。</li><li>忘记密码centos要进入单用户模式 =&gt; <code>passwd</code></li></ul></li><li>/sbin <ul><li>Linux有⾮常多指令是⽤来设定系统环境的，这些指令只有root才能够利⽤来设定系统，其他使⽤者最多只能⽤来查询⽽已。</li><li>放在/sbin底下的为开机过程中所需要的，⾥⾯包括了开机、修复、还原系统所需要的指令。</li><li>⾄于某些伺服器软体程式，⼀般则放置到/usr/sbin/当中。</li><li>⾄于本机⾃⾏安装的软体所产⽣的系统执⾏档(system binary)，则放置到/usr/local/sbin/当中了。常⻅的指令包括： fdisk, fsck, ifconfig, init, mkfs等等。</li></ul></li><li>srv <ul><li>srv可以视为service的缩写，是⼀些⽹路服务启动之后，这些服务所需要取⽤的资料⽬录。</li><li>常⻅的服务例如WWW, FTP等等。举例来说， WWW伺服器需要的⽹⻚资料就可以放置在/srv/www/⾥⾯。</li><li>呵呵，看来平时我们编写的代码应该放到这⾥了。</li></ul></li><li>/tmp <ul><li>这是让⼀般使⽤者或者是正在执⾏的程序暂时放置档案的地⽅。这个⽬录是任何⼈都能够存取的，所以你需要定期的清理⼀下。当然，重要资料不可放置在此⽬录啊。因为FHS甚⾄建议在开机时，应该要将/tmp下的资料都删除。</li></ul></li></ul><h4 id="在windows下终端的类型" tabindex="-1">在windows下终端的类型 <a class="header-anchor" href="#在windows下终端的类型" aria-label="Permalink to &quot;在windows下终端的类型&quot;">​</a></h4><p><strong>用来连接远程的服务器</strong></p><ul><li>putty(开源的但不推荐)</li><li>xshell <ul><li>它是一个商业软件，在英文官网上下载</li><li>它很多年不升级（6.0），但并不落后</li></ul></li><li>Cmdder(推荐) <ul><li>它是一个增强型的终端，放置了大量的linux命令</li></ul></li><li><a href="https://github.com/microsoft/Terminal" target="_blank" rel="noreferrer">Terminal</a><ul><li>微软发布的一个终端</li></ul></li></ul><hr><br><h2 id="_4-前端开发必须要懂的知识" tabindex="-1">4. 前端开发必须要懂的知识 <a class="header-anchor" href="#_4-前端开发必须要懂的知识" aria-label="Permalink to &quot;4. 前端开发必须要懂的知识&quot;">​</a></h2><h4 id="网络端口" tabindex="-1">网络端口 <a class="header-anchor" href="#网络端口" aria-label="Permalink to &quot;网络端口&quot;">​</a></h4><ul><li>什么是端口 <ul><li>如果想通过网络去访问另外一台电脑，必须得去开一个门，这个门，实际上操作系统上有很多门，它们都有它自己的用途，我们究竟需要开什么门，需要在上面编一个号，http这个门是80号门等等，这些门不能乱窜，如果乱窜，就会发生端口冲突。</li><li>换句话说，一个端口，在同一个时间内，只能被一个进程去使用。</li></ul></li><li>默认端口 <ul><li>http默认端口80</li><li>https默认端口 443</li><li>http 代理端口 8080</li></ul></li></ul><h4 id="什么是服务" tabindex="-1">什么是服务 <a class="header-anchor" href="#什么是服务" aria-label="Permalink to &quot;什么是服务&quot;">​</a></h4><ul><li>什么是服务 <ul><li>服务是一种应用程序类型，它在后台运行。服务应用程序通常可以在本地和通过网络为用户提供一些功能，例如客户端/服务器应用程序、Web服务器、数据库服务器以及其他基于服务器的应用程序。</li></ul></li><li>在linux下查看服务 <ul><li><code>systemctl</code> =&gt; 按ctrl+c退出</li><li><code>systemctl status nginx</code> =&gt; 查看nginx服务状态</li><li><code>systemctl start nginx</code> =&gt; 开启服务</li><li><code>systemctl stop nginx</code> =&gt; 停止服务</li><li><code>systemctl restart nginx</code> =&gt; 重启服务</li><li><code>nginx -s reload</code> =&gt; 不停止服务，重新读取一次</li></ul></li></ul><h4 id="什么是终端" tabindex="-1">什么是终端 <a class="header-anchor" href="#什么是终端" aria-label="Permalink to &quot;什么是终端&quot;">​</a></h4><ul><li>终端（Terminal）也称终端设备，是计算机网络中处于网络最外围的设备，主要用于用户信息的输入以及处理结果的输出等。</li><li>在早期计算机系统中，由于计算机主机昂贵，因此一个主机（IBM大型计算机）一般会配置多个终端，这些终端本身不具备计算能力，仅仅承担信息输入输出的工作，运算和处理均由主机来完成。</li><li>在个人计算机时代，个人计算机可以运行称为终端仿真器的程序来模仿一个终端的工作。</li></ul><h4 id="如何使用cmder连接远程服务器" tabindex="-1">如何使用Cmder连接远程服务器 <a class="header-anchor" href="#如何使用cmder连接远程服务器" aria-label="Permalink to &quot;如何使用Cmder连接远程服务器&quot;">​</a></h4><p><strong>使用ssh命令</strong><br></p><ul><li>示例：<code>ssh root@192.168.0.115</code></li><li>它会有一段提示，你正在登陆全新的服务器，然后告诉我们服务器的特征值（服务器指纹），问我们是否继续，然后输入yes才能继续，它是用来防止有人伪造服务器，套你的口令。</li><li>然后输入密码，输入密码的时候它不回显，因为安全性问题，别人不知道你的密码会有多少位。</li></ul><h4 id="最简单的linux命令" tabindex="-1">最简单的linux命令 <a class="header-anchor" href="#最简单的linux命令" aria-label="Permalink to &quot;最简单的linux命令&quot;">​</a></h4><ul><li>exit =&gt; 登出 <ul><li>需要有安全意识，离开计算机及时退出终端</li></ul></li><li>ip addr =&gt; 查看IP地址 <ul><li>ifconfig比较古老，使用ip组合命令</li></ul></li><li>pwd =&gt; 查看当前的目录</li></ul><h4 id="如何远程传输文件到linux服务器" tabindex="-1">如何远程传输文件到linux服务器 <a class="header-anchor" href="#如何远程传输文件到linux服务器" aria-label="Permalink to &quot;如何远程传输文件到linux服务器&quot;">​</a></h4><p><strong>在cmder中使用scp命令</strong></p><ol><li>在windows环境下，进入某个盘符，找到某个文件，示例：<br><code>e:</code> =&gt; <code>dir</code> =&gt; <code>mkdir test</code> =&gt; <code>cd test</code> =&gt; <code>echo 文件中的内容&gt;a.txt</code> =&gt; <code>type a.txt</code></li><li>在linux环境下查看当前目录，示例：<br><code>pwd</code></li><li>到windows环境下，在windows的当前目录下，把windows下找到的文件用scp传到linux当前目录下，示例：<br><code>scp ./a.txt root@192.168.0.115:/root</code><ul><li>在这里输完ip之后要先加上冒号，再加/，后面带linux下的路径</li></ul></li><li>输入密码，传输成功</li><li>到linux环境下，查看是否传输成功，示例：<br><code>ls</code> =&gt; <code>cat a.txt</code></li></ol><h4 id="如何对linux中的网卡进行设置" tabindex="-1">如何对linux中的网卡进行设置 <a class="header-anchor" href="#如何对linux中的网卡进行设置" aria-label="Permalink to &quot;如何对linux中的网卡进行设置&quot;">​</a></h4><ol><li>先检查虚拟硬件 <ul><li>虚拟机配置必须桥接， 物理机（自己的电脑）网卡是否被激活</li><li>如果安装的时候没有激活，就要在etc下找网卡的配置文件</li></ul></li><li>先进入etc目录。 <code>cd etc</code></li><li>网卡的配置文件在sysconfig下面。 <br><code>cd sysconfig/network-scripts</code></li><li>ll查看，带前缀ifcfg，即网卡的配置文件（网卡的名字ens33）</li><li>查看配置文件<br><code>cat ifcfg-ens33</code></li><li>如果没有激活ONBOOT会显示为no，要用vi改成yes <ul><li>输入指令：<code>vi ifcfg-ens33 </code></li><li>默认只读状态，敲一下i变成编辑状态</li><li>按一下esc最下角INSERT不见了</li><li>输入:wq保存并退出 <ul><li>w指write（写[保存]）</li><li>q指quit（退出）</li><li>不能使用qw，必须先保存再退出</li></ul></li></ul></li><li>开启网卡 <code>ifup ens33 </code></li><li>关闭网卡 <code>ifdown ens33 </code></li></ol><h4 id="vi命令-文本编辑器-行" tabindex="-1">vi命令（文本编辑器[行]） <a class="header-anchor" href="#vi命令-文本编辑器-行" aria-label="Permalink to &quot;vi命令（文本编辑器[行]）&quot;">​</a></h4><ul><li>vi 文件名 =&gt; 进入某个文件的编辑</li><li>:q =&gt; 退出</li><li>:q! =&gt; 强行退出(不保存)</li></ul><h4 id="nano的安装和使用" tabindex="-1">nano的安装和使用 <a class="header-anchor" href="#nano的安装和使用" aria-label="Permalink to &quot;nano的安装和使用&quot;">​</a></h4><p><strong>安装</strong></p><ul><li>yum是linux的软件库，使用yum安装nano，示例：<br><code>yum install nano</code></li><li>继续(y)</li><li>确认指纹密钥(y)</li><li>输入nano启动文本编辑器</li></ul><p><strong>使用</strong></p><ul><li>^ 表示ctrl</li><li>ctrl + o 写入</li><li>ctrl + x 退出</li></ul><h4 id="linux中的其他命令" tabindex="-1">linux中的其他命令 <a class="header-anchor" href="#linux中的其他命令" aria-label="Permalink to &quot;linux中的其他命令&quot;">​</a></h4><ul><li>解压缩(*.tar.bz) <ul><li>tar -xvvf *.tar.bz</li><li>-xvvf =&gt; 解压缩.bz格式的参数，不用的压缩包格式，参数不一样，*.gz格式的参数则是-xzzf</li></ul></li></ul><hr><br><h2 id="_5-安装linux开发环境" tabindex="-1">5. 安装linux开发环境 <a class="header-anchor" href="#_5-安装linux开发环境" aria-label="Permalink to &quot;5. 安装linux开发环境&quot;">​</a></h2><h4 id="安装node" tabindex="-1">安装node <a class="header-anchor" href="#安装node" aria-label="Permalink to &quot;安装node&quot;">​</a></h4><p><strong>不能直接使用yum安装，要去下载安装nodejs的源</strong></p><ol><li>添加官方的yum源<br><code>curl -sL https://rpm.nodesource.com/setup_11.x | bash -</code></li><li>用yum安装nodejs（y表示一路确定） <code>yum install -y nodejs</code></li><li>查看安装的版本 <code>node -v</code></li></ol><h4 id="安装xampp集成开发环境" tabindex="-1">安装xampp集成开发环境 <a class="header-anchor" href="#安装xampp集成开发环境" aria-label="Permalink to &quot;安装xampp集成开发环境&quot;">​</a></h4><p>待续</p><hr><br><h2 id="_6-关于某些网站无法访问的解决方法" tabindex="-1">6. 关于某些网站无法访问的解决方法 <a class="header-anchor" href="#_6-关于某些网站无法访问的解决方法" aria-label="Permalink to &quot;6. 关于某些网站无法访问的解决方法&quot;">​</a></h2><p>在浏览器⾥执⾏下列代码</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var hexCharCodeStr =</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;68747470733a2f2f737068617264322e6769746875622e696f2f6766772f&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">var rawStr = hexCharCodeStr.trim();</span></span>
<span class="line"><span style="color:#e1e4e8;">var len = rawStr.length;</span></span>
<span class="line"><span style="color:#e1e4e8;">var curCharCode;</span></span>
<span class="line"><span style="color:#e1e4e8;">var resultStr = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">for(var i = 0; i &lt; len;i = i + 2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    curCharCode = parseInt(rawStr.substr(i, 2), 16);</span></span>
<span class="line"><span style="color:#e1e4e8;">    resultStr.push(String.fromCharCode(curCharCode));</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log( resultStr.join(&quot;&quot;) );</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var hexCharCodeStr =</span></span>
<span class="line"><span style="color:#24292e;">&#39;68747470733a2f2f737068617264322e6769746875622e696f2f6766772f&#39;</span></span>
<span class="line"><span style="color:#24292e;">var rawStr = hexCharCodeStr.trim();</span></span>
<span class="line"><span style="color:#24292e;">var len = rawStr.length;</span></span>
<span class="line"><span style="color:#24292e;">var curCharCode;</span></span>
<span class="line"><span style="color:#24292e;">var resultStr = [];</span></span>
<span class="line"><span style="color:#24292e;">for(var i = 0; i &lt; len;i = i + 2) {</span></span>
<span class="line"><span style="color:#24292e;">    curCharCode = parseInt(rawStr.substr(i, 2), 16);</span></span>
<span class="line"><span style="color:#24292e;">    resultStr.push(String.fromCharCode(curCharCode));</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log( resultStr.join(&quot;&quot;) );</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,73),t=[s];function o(r,u,c,d,p,h){return i(),e("div",null,t)}const m=l(n,[["render",o]]);export{x as __pageData,m as default};