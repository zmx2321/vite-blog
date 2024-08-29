import{_ as s,o as n,c as a,e as l}from"./app.413a7b74.js";const m=JSON.parse('{"title":"开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"pages/interview/foundation/interview-foundation-15.md","filePath":"pages/interview/foundation/interview-foundation-15.md","lastUpdated":1699250630000}'),p={name:"pages/interview/foundation/interview-foundation-15.md"},e=l(`<h1 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h1><h2 id="_1-简述" tabindex="-1">1. 简述 <a class="header-anchor" href="#_1-简述" aria-label="Permalink to &quot;1. 简述&quot;">​</a></h2><ul><li>面试官想通过开发环境了解候选人的实际工作情况</li><li>开发环境的工具，能体现工作产出的效率</li><li>会以聊天为主，不会问具体的问题 <ul><li>通过了基础知识的面试之后，会问你，之前是怎么做的，代码是怎么管理的，出了问题是怎么调试的，比如现在有个bug你是如何去找到他的，项目是怎么打包的，怎么上线的，如果除了问题怎么连测试机的服务器，怎么修改服务器内容等等</li></ul></li><li>它是程序员通用的必备的一门知识(前后端都需要知道)</li><li>如果这些不知道，可能会被认为是没多少项目经验</li></ul><h2 id="_2-知识点" tabindex="-1">2. 知识点 <a class="header-anchor" href="#_2-知识点" aria-label="Permalink to &quot;2. 知识点&quot;">​</a></h2><h3 id="_2-1-git" tabindex="-1">2.1. git <a class="header-anchor" href="#_2-1-git" aria-label="Permalink to &quot;2.1. git&quot;">​</a></h3><ul><li>简述 <ul><li>最常用的代码版本管理工具 <ul><li>svn是集中式的版本管理工具，而git是分布式的</li><li>svn现在不是很常用了</li></ul></li><li>大型项目需要多人协作开发，必须熟用git <ul><li>如果本地代码没有了，可以在git上拉取</li><li>检查某次版本做了哪些修改操作，可以在git的log中查找历史版本</li></ul></li><li>Mac OS自带git命令，windows可以在官网下载安装</li><li>git服务端常见的有 GitHub、GitLab、coding.net等</li><li>大公司会搭建自己的内网git服务 =&gt; gitlab =&gt; gitlab是github上的一个项目</li></ul></li><li>常用git命令 <ul><li>git add . <ul><li>把修改的所有文件都加上，.表示所有</li></ul></li><li>git checkout xxx <ul><li>checkout会把文件都还原成以前的状态</li></ul></li><li>git commit -m &#39;xxx&#39; <ul><li>提交</li></ul></li><li>git push origin master <ul><li>推送到服务端</li></ul></li><li>git pull origin master <ul><li>从服务端获取</li></ul></li><li>git branch <ul><li>查看分支，多人开发的时候，每个人有自己的分支，相互之间不干涉</li></ul></li><li>git checkout -b xxx/git checkout xxx <ul><li>切换分支</li></ul></li><li>git merge xxx <ul><li>合并分支</li></ul></li></ul></li><li>示例 <ul><li>测试git站点：zmx2321.coding.net <ul><li>国内的git服务</li></ul></li><li>单人开发的情况<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 从站点拉取仓库代码</span></span>
<span class="line"><span style="color:#e1e4e8;"># 使用https需要输入用户名和密码</span></span>
<span class="line"><span style="color:#e1e4e8;"># ssh不用输入账号密码，但需要ssh key</span></span>
<span class="line"><span style="color:#e1e4e8;">git clone https://e.coding.net/zmx2321/testgit/testgit1.git </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># mac添加公钥指令</span></span>
<span class="line"><span style="color:#e1e4e8;"># cat ~/.ssh/id_rsa.pub  =&gt;  pub 就是公钥的意思</span></span>
<span class="line"><span style="color:#e1e4e8;"># 把公钥拷贝下来，在站点添加公钥，添加名称</span></span>
<span class="line"><span style="color:#e1e4e8;"># 添加完之后就可以直接使用ssh下载仓库了</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">cd testgit1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看当前git状态</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看当前分支 master是主分支，也是默认新建的分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改git仓库</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 再次查看状态</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看修改的内容</span></span>
<span class="line"><span style="color:#e1e4e8;">git diff</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看某个文件修改的内容 =&gt; 新增的文件不会在diff里面</span></span>
<span class="line"><span style="color:#e1e4e8;">git diff README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">git diff *.md</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 添加一个文件</span></span>
<span class="line"><span style="color:#e1e4e8;">git add README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">git add *.md</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 添加所有文件</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 再次查看状态 =&gt; 绿色的表示已经添加</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 生成一条记录，并写上注释</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;test&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看日志</span></span>
<span class="line"><span style="color:#e1e4e8;">git log</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 有些需要进行配置 =&gt; 这样就能看到你提交的用户名和邮箱</span></span>
<span class="line"><span style="color:#e1e4e8;"># 多人协作的时候就知道这是谁提交的</span></span>
<span class="line"><span style="color:#e1e4e8;">git config user.name zmx2321</span></span>
<span class="line"><span style="color:#e1e4e8;">git config user.email zmx2321@163.com</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Initial Commit 表示当时创建的时候提交的记录</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看某条记录提交的内容 =&gt; git能够跟踪你改的哪些东西</span></span>
<span class="line"><span style="color:#e1e4e8;">git log</span></span>
<span class="line"><span style="color:#e1e4e8;"># 把下面的commit的标识(id)拷下来</span></span>
<span class="line"><span style="color:#e1e4e8;">git show 27e936aab0ff888ff46abf0f1dac215b744cba6b</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">## 再次修改文件内容</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">## 查看状态</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">## 如果反悔之前修改的内容 =&gt; 就会把之前修改的内容取消掉(删除)</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout *.md</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">## 撤销所有修改</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout .</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 即git有查看当前修改内容的能力，以及反悔的能力</span></span>
<span class="line"><span style="color:#e1e4e8;"># 在commit之前，可以把之前修改的内容撤销回来</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 推送到代码仓库(服务端) =&gt; 此时站点才有之前提交的代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin master</span></span>
<span class="line"><span style="color:#e1e4e8;">git push</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 多人协作的时候，推送之前，先下拉代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git pull origin master</span></span>
<span class="line"><span style="color:#e1e4e8;">git pull</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;"># 从站点拉取仓库代码</span></span>
<span class="line"><span style="color:#24292e;"># 使用https需要输入用户名和密码</span></span>
<span class="line"><span style="color:#24292e;"># ssh不用输入账号密码，但需要ssh key</span></span>
<span class="line"><span style="color:#24292e;">git clone https://e.coding.net/zmx2321/testgit/testgit1.git </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># mac添加公钥指令</span></span>
<span class="line"><span style="color:#24292e;"># cat ~/.ssh/id_rsa.pub  =&gt;  pub 就是公钥的意思</span></span>
<span class="line"><span style="color:#24292e;"># 把公钥拷贝下来，在站点添加公钥，添加名称</span></span>
<span class="line"><span style="color:#24292e;"># 添加完之后就可以直接使用ssh下载仓库了</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 进入文件夹</span></span>
<span class="line"><span style="color:#24292e;">cd testgit1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看当前git状态</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看当前分支 master是主分支，也是默认新建的分支</span></span>
<span class="line"><span style="color:#24292e;">git branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 修改git仓库</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 再次查看状态</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看修改的内容</span></span>
<span class="line"><span style="color:#24292e;">git diff</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看某个文件修改的内容 =&gt; 新增的文件不会在diff里面</span></span>
<span class="line"><span style="color:#24292e;">git diff README.md</span></span>
<span class="line"><span style="color:#24292e;">git diff *.md</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 添加一个文件</span></span>
<span class="line"><span style="color:#24292e;">git add README.md</span></span>
<span class="line"><span style="color:#24292e;">git add *.md</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 添加所有文件</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 再次查看状态 =&gt; 绿色的表示已经添加</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 生成一条记录，并写上注释</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;test&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看日志</span></span>
<span class="line"><span style="color:#24292e;">git log</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 有些需要进行配置 =&gt; 这样就能看到你提交的用户名和邮箱</span></span>
<span class="line"><span style="color:#24292e;"># 多人协作的时候就知道这是谁提交的</span></span>
<span class="line"><span style="color:#24292e;">git config user.name zmx2321</span></span>
<span class="line"><span style="color:#24292e;">git config user.email zmx2321@163.com</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Initial Commit 表示当时创建的时候提交的记录</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看某条记录提交的内容 =&gt; git能够跟踪你改的哪些东西</span></span>
<span class="line"><span style="color:#24292e;">git log</span></span>
<span class="line"><span style="color:#24292e;"># 把下面的commit的标识(id)拷下来</span></span>
<span class="line"><span style="color:#24292e;">git show 27e936aab0ff888ff46abf0f1dac215b744cba6b</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">## 再次修改文件内容</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">## 查看状态</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">## 如果反悔之前修改的内容 =&gt; 就会把之前修改的内容取消掉(删除)</span></span>
<span class="line"><span style="color:#24292e;">git checkout README.md</span></span>
<span class="line"><span style="color:#24292e;">git checkout *.md</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">## 撤销所有修改</span></span>
<span class="line"><span style="color:#24292e;">git checkout .</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 即git有查看当前修改内容的能力，以及反悔的能力</span></span>
<span class="line"><span style="color:#24292e;"># 在commit之前，可以把之前修改的内容撤销回来</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 推送到代码仓库(服务端) =&gt; 此时站点才有之前提交的代码</span></span>
<span class="line"><span style="color:#24292e;">git push origin master</span></span>
<span class="line"><span style="color:#24292e;">git push</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 多人协作的时候，推送之前，先下拉代码</span></span>
<span class="line"><span style="color:#24292e;">git pull origin master</span></span>
<span class="line"><span style="color:#24292e;">git pull</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div></li><li>模拟多人开发的情况<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 进入文件夹</span></span>
<span class="line"><span style="color:#e1e4e8;">cd testgit1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 模拟另一个开发人员</span></span>
<span class="line"><span style="color:#e1e4e8;"># 做一个新功能之前，需要切换一个新的分支</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 创建分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout -b test2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看分支 =&gt; 高亮表示当前指向的分支</span></span>
<span class="line"><span style="color:#e1e4e8;"># git地址后面的括号是当前指向的分支名</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看git状态</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;">git diff</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 提交 commit之后，代码已经在这个分支下面了</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;test2&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切换到主分支 </span></span>
<span class="line"><span style="color:#e1e4e8;"># 和撤回文件内容是一个命令，后面加分支名就是切换分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 再次模拟一个开发人员</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 开新分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout -b test3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 修改文件，查看状态</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 提交</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;test3&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 提交test3到服务端仓库</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin test3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 提交test2到服务端仓库</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin test2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 刷新站点仓库，可以看到多出两个分支</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将test2和test3合并到主分支master上来</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切换到master分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 模拟项目负责人</span></span>
<span class="line"><span style="color:#e1e4e8;"># 合并test2和test3分支</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 先把服务端所有分支全部拉下来</span></span>
<span class="line"><span style="color:#e1e4e8;">git fetch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看所有分支(本地)</span></span>
<span class="line"><span style="color:#e1e4e8;">git branch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将test2分支的代码合并到主分支</span></span>
<span class="line"><span style="color:#e1e4e8;"># 切换到test2分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout test2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 拉取test2分支代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git pull origin test2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切回到主分支</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 合并代码 </span></span>
<span class="line"><span style="color:#e1e4e8;"># 将test2分支的代码合并到当前分支上来</span></span>
<span class="line"><span style="color:#e1e4e8;">git merge test2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 主分支提交代码到服务端</span></span>
<span class="line"><span style="color:#e1e4e8;"># 没有冲突直接push，不用commit</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 将test3分支的代码合并到主分支</span></span>
<span class="line"><span style="color:#e1e4e8;"># 主分支 =&gt; 先把服务端所有分支全部拉下来</span></span>
<span class="line"><span style="color:#e1e4e8;"># git fetch</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切换到test3分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout test3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 拉取test3分支的代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git pull origin test3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切回主分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 合并代码</span></span>
<span class="line"><span style="color:#e1e4e8;"># 将test3分支的代码合并到当前分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git merge test3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 解决冲突</span></span>
<span class="line"><span style="color:#e1e4e8;"># 只要是confict显示的文件都冲突了</span></span>
<span class="line"><span style="color:#e1e4e8;"># 打开编辑器(vscode)</span></span>
<span class="line"><span style="color:#e1e4e8;"># vscode能够失败冲突，并且有快捷方式</span></span>
<span class="line"><span style="color:#e1e4e8;"># 接受当前的改变(本地)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 接受传入的改变(merge的分支)</span></span>
<span class="line"><span style="color:#e1e4e8;"># 两者同时接受</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看文件状态</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 解决完冲突需要进行add</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;test3 branch&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 再次merge显示already up to date</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 主分支提交代码到服务端</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 意外情况</span></span>
<span class="line"><span style="color:#e1e4e8;"># 做一个test4功能</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 新建一个分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout -b test4</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切回到master分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 如果我们不小心在主分支上做了修改</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 查看分支 =&gt; 此时主分支上有test4功能</span></span>
<span class="line"><span style="color:#e1e4e8;">git status</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 把当前修改的东西划出来</span></span>
<span class="line"><span style="color:#e1e4e8;"># 把修改的东西暂存起来</span></span>
<span class="line"><span style="color:#e1e4e8;">git stash</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 此时使用status查看，只会显示新建的文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 此时再建分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout -b </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 此时使用status查看，只会显示新建的文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 开放暂存区</span></span>
<span class="line"><span style="color:#e1e4e8;">git stash pop</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 此时使用status查看,显示正常</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 提交分支代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git add .</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &#39;test5&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">git push origin test5</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 切换到主分支</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout master</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 撤回主分支上修改的代码</span></span>
<span class="line"><span style="color:#e1e4e8;">git checkout .</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;"># 进入文件夹</span></span>
<span class="line"><span style="color:#24292e;">cd testgit1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 模拟另一个开发人员</span></span>
<span class="line"><span style="color:#24292e;"># 做一个新功能之前，需要切换一个新的分支</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 创建分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout -b test2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看分支 =&gt; 高亮表示当前指向的分支</span></span>
<span class="line"><span style="color:#24292e;"># git地址后面的括号是当前指向的分支名</span></span>
<span class="line"><span style="color:#24292e;">git branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看git状态</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;">git diff</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交 commit之后，代码已经在这个分支下面了</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;test2&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切换到主分支 </span></span>
<span class="line"><span style="color:#24292e;"># 和撤回文件内容是一个命令，后面加分支名就是切换分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 再次模拟一个开发人员</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 开新分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout -b test3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看分支</span></span>
<span class="line"><span style="color:#24292e;">git branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 修改文件，查看状态</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;test3&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交test3到服务端仓库</span></span>
<span class="line"><span style="color:#24292e;">git push origin test3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交test2到服务端仓库</span></span>
<span class="line"><span style="color:#24292e;">git push origin test2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 刷新站点仓库，可以看到多出两个分支</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将test2和test3合并到主分支master上来</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切换到master分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 模拟项目负责人</span></span>
<span class="line"><span style="color:#24292e;"># 合并test2和test3分支</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 先把服务端所有分支全部拉下来</span></span>
<span class="line"><span style="color:#24292e;">git fetch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看所有分支(本地)</span></span>
<span class="line"><span style="color:#24292e;">git branch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将test2分支的代码合并到主分支</span></span>
<span class="line"><span style="color:#24292e;"># 切换到test2分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout test2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 拉取test2分支代码</span></span>
<span class="line"><span style="color:#24292e;">git pull origin test2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切回到主分支</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 合并代码 </span></span>
<span class="line"><span style="color:#24292e;"># 将test2分支的代码合并到当前分支上来</span></span>
<span class="line"><span style="color:#24292e;">git merge test2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 主分支提交代码到服务端</span></span>
<span class="line"><span style="color:#24292e;"># 没有冲突直接push，不用commit</span></span>
<span class="line"><span style="color:#24292e;">git push origin master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 将test3分支的代码合并到主分支</span></span>
<span class="line"><span style="color:#24292e;"># 主分支 =&gt; 先把服务端所有分支全部拉下来</span></span>
<span class="line"><span style="color:#24292e;"># git fetch</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切换到test3分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout test3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 拉取test3分支的代码</span></span>
<span class="line"><span style="color:#24292e;">git pull origin test3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切回主分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 合并代码</span></span>
<span class="line"><span style="color:#24292e;"># 将test3分支的代码合并到当前分支</span></span>
<span class="line"><span style="color:#24292e;">git merge test3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 解决冲突</span></span>
<span class="line"><span style="color:#24292e;"># 只要是confict显示的文件都冲突了</span></span>
<span class="line"><span style="color:#24292e;"># 打开编辑器(vscode)</span></span>
<span class="line"><span style="color:#24292e;"># vscode能够失败冲突，并且有快捷方式</span></span>
<span class="line"><span style="color:#24292e;"># 接受当前的改变(本地)</span></span>
<span class="line"><span style="color:#24292e;"># 接受传入的改变(merge的分支)</span></span>
<span class="line"><span style="color:#24292e;"># 两者同时接受</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看文件状态</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 解决完冲突需要进行add</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;test3 branch&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 再次merge显示already up to date</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 主分支提交代码到服务端</span></span>
<span class="line"><span style="color:#24292e;">git push origin master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 意外情况</span></span>
<span class="line"><span style="color:#24292e;"># 做一个test4功能</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 新建一个分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout -b test4</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切回到master分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 如果我们不小心在主分支上做了修改</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 查看分支 =&gt; 此时主分支上有test4功能</span></span>
<span class="line"><span style="color:#24292e;">git status</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 把当前修改的东西划出来</span></span>
<span class="line"><span style="color:#24292e;"># 把修改的东西暂存起来</span></span>
<span class="line"><span style="color:#24292e;">git stash</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 此时使用status查看，只会显示新建的文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 此时再建分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout -b </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 此时使用status查看，只会显示新建的文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 开放暂存区</span></span>
<span class="line"><span style="color:#24292e;">git stash pop</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 此时使用status查看,显示正常</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 提交分支代码</span></span>
<span class="line"><span style="color:#24292e;">git add .</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &#39;test5&#39;</span></span>
<span class="line"><span style="color:#24292e;">git push origin test5</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 切换到主分支</span></span>
<span class="line"><span style="color:#24292e;">git checkout master</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 撤回主分支上修改的代码</span></span>
<span class="line"><span style="color:#24292e;">git checkout .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br></div></div></li></ul></li></ul><h3 id="_2-2-chrome调试工具" tabindex="-1">2.2. Chrome调试工具 <a class="header-anchor" href="#_2-2-chrome调试工具" aria-label="Permalink to &quot;2.2. Chrome调试工具&quot;">​</a></h3><ul><li>简述 <ul><li>一般不会面试时考察</li><li>但这是前端工程师必备的技能(不算知识)</li></ul></li><li>范围 <ul><li>Elements <ul><li>显示dom结构、css、盒模型</li></ul></li><li>Console <ul><li>打印 <ul><li>console.log()</li><li>console.info()</li><li>console.error()</li></ul></li></ul></li><li>Application <ul><li>本地存储 <ul><li>localstroage</li><li>sessionstroage</li><li>cookie</li><li>web sql</li></ul></li></ul></li><li>Network <ul><li>查看网络请求(资源加载) <ul><li>可以选择类型 <ul><li>xhr、js、css、img、dom等</li></ul></li></ul></li></ul></li><li>Sources <ul><li>里面有源码</li><li>可以在源码中打断点(debugger)</li><li>第二个图标(下一步)比较常用</li></ul></li></ul></li></ul><h3 id="_2-3-抓包" tabindex="-1">2.3. 抓包 <a class="header-anchor" href="#_2-3-抓包" aria-label="Permalink to &quot;2.3. 抓包&quot;">​</a></h3><ul><li>简述 <ul><li>移动端、混合开发常用</li><li>移动端h5页，查看网络请求，需要用抓包工具抓包</li><li>window一般用fiddler</li><li>Mac OS一般用charles <ul><li>图标是一个花瓶</li></ul></li></ul></li><li>过程 <ul><li>手机和电脑连同一个局域网</li><li>将手机代理到电脑上</li><li>手机浏览网页，即可抓包</li></ul></li><li>查看抓包结果 <ul><li>查看网络请求</li><li>网址代理</li><li>https</li></ul></li><li>mac的charles使用方法 <ul><li>手机电脑同一个局域网</li><li>手机代理连到电脑的代理上 <ul><li>手机上代理选择手动</li><li>查看电脑局域网ip</li><li>在软件的proxy上的setting中查看端口，一般是8888</li></ul></li><li>在手机端访问局域网地址</li><li>在抓包软件上找到资源 <ul><li>contents里面就是内容</li></ul></li><li>启用一个网址代理 <ul><li>tools =&gt; map remote</li><li>勾选启用</li><li>点击添加</li></ul></li><li>https的功能(解密) <ul><li>有个红叉就是https的请求 =&gt; 加密请求</li><li>proxy下面有个ssl proxying setting</li><li>勾选ssl proxying</li><li>add =&gt; host:*; port:443</li><li>help下的ssl proxy下面就有一些引导</li><li>苹果设备根据引导安装完证书就可以了</li></ul></li></ul></li></ul><h3 id="_2-4-webpack和babel" tabindex="-1">2.4. webpack和babel <a class="header-anchor" href="#_2-4-webpack和babel" aria-label="Permalink to &quot;2.4. webpack和babel&quot;">​</a></h3><h4 id="_2-4-1-简述" tabindex="-1">2.4.1. 简述 <a class="header-anchor" href="#_2-4-1-简述" aria-label="Permalink to &quot;2.4.1. 简述&quot;">​</a></h4><ul><li>这里使用的是webpack5</li><li>使用webpack和babel的价值 <ul><li>ES6模块化，浏览器暂不支持</li><li>ES6语法，浏览器不完全支持</li><li>压缩代码，整合代码，以让网页加载更快</li><li>如果webpack做的好的话，会让我们的代码更多地命中缓存，让页面加载更快</li></ul></li></ul><h4 id="_2-4-2-使用webpack构建一个服务" tabindex="-1">2.4.2. 使用webpack构建一个服务 <a class="header-anchor" href="#_2-4-2-使用webpack构建一个服务" aria-label="Permalink to &quot;2.4.2. 使用webpack构建一个服务&quot;">​</a></h4><ul><li>建一个webpack-demo的文件夹，并进入到文件夹 <ul><li><code>mkdir webpack-demo</code> =&gt; <code>cd webpack-demo</code></li><li>顺便复制一下.gitignore文件</li></ul></li><li>保证已经安装了node <ul><li><code>node -v</code> =&gt; v14.12.0</li></ul></li><li>初始化webpack环境 <ul><li><code>npm init -y</code><ul><li>package.json即当前目录的描述文件</li></ul></li></ul></li><li>安装webpack和webpack-cli到开发环境 <ul><li><code>npm install webpack webpack-cli -D</code><ul><li>写入dependencies(生产环境) <ul><li>npm install module_name -S =&gt; npm install module_name --save</li><li>npm i xx -S</li></ul></li><li>写入devDependencies <ul><li>npm install module_name -D =&gt; npm install module_name --save-dev</li><li>npm i xx -D</li></ul></li></ul></li></ul></li><li>建一个src文件夹 <ul><li><code>mkdir src</code><ul><li>一般自己写的代码文件都在src</li></ul></li></ul></li><li>在src中建一个index.js <ul><li><code>cd src</code> =&gt; <code>touch index.js</code> =&gt; <code>start index.js</code></li><li>在里面随便写点东西</li></ul></li><li>在项目根目录创建一个配置文件(webpack.config.js) <ul><li><code>cd ..</code> =&gt; <code>touch webpack.config.js</code> =&gt; <code>start webpack.config.js</code></li><li>这个是webpack默认的配置文件的名字</li></ul></li><li>在webpack.config.js文件中配置webpack <ul><li>最精简版的配置</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(path)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// module.exports是nodejs中CommonJs的语法规范</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 开发模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mode: &#39;production&#39;,  // 线上模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这个js实际上是node，所以可以使用node中的path模块</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// __dirname表示当前目录</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 表示能找到当前项目目录下src下的index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 通过join拼接</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 最终找到的这个index.js就是项目的入口</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;index.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 一般叫这个名字</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有dist文件夹，webpack会自动帮我们创建</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(path)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// module.exports是nodejs中CommonJs的语法规范</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 开发模式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mode: &#39;production&#39;,  // 线上模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这个js实际上是node，所以可以使用node中的path模块</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// __dirname表示当前目录</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 表示能找到当前项目目录下src下的index.js</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 通过join拼接</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 最终找到的这个index.js就是项目的入口</span></span>
<span class="line"><span style="color:#24292E;">  entry: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;index.js&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;bundle.js&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 一般叫这个名字</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 目录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有dist文件夹，webpack会自动帮我们创建</span></span>
<span class="line"><span style="color:#24292E;">    path: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></li><li>运行 <ul><li>在package.json文件中添加运行命令<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 指定webpack打包的配置文件是webpack.config.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 但这个文件名字是webpack的默认名字，所以可以不写</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 打包</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;webpack&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &quot;build1&quot;: &quot;webpack --config webpack.config.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 指定webpack打包的配置文件是webpack.config.js</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 但这个文件名字是webpack的默认名字，所以可以不写</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 打包</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;webpack&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &quot;build1&quot;: &quot;webpack --config webpack.config.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><code>npm run build</code></li></ul></li><li>bundle.js简介 <ul><li>打包出来的js有很多，主要原因是webpack打包的时候需要考虑模块化方案</li><li>webpack可以兼容模块化的方案 =&gt; 加上很多模块化相关的代码</li><li>由于我们在webpack配置中mode设置的是开发模式，所以打包出来的是没有压缩过的代码</li></ul></li><li>把dist下的文件在页面展示 <ul><li>在src中建一个html文件 <ul><li><code>cd src</code> =&gt; <code>touch index.html</code> =&gt; 复制代码</li></ul></li><li>安装插件 <ul><li><code>npm install html-webpack-plugin -D</code><ul><li>用来解析html的插件</li></ul></li><li><code>npm install webpack-dev-server -D</code><ul><li>启动服务的一个插件</li></ul></li></ul></li></ul></li><li>修改webpack.config.js<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">path</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;html-webpack-plugin&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// module.exports是nodejs中CommonJs的语法规范</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  mode: </span><span style="color:#9ECBFF;">&#39;development&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 开发模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// mode: &#39;production&#39;,  // 线上模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这个js实际上是node，所以可以使用node中的path模块</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// __dirname表示当前目录</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 表示能找到当前项目目录下src下的index.js</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 通过join拼接</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 最终找到的这个index.js就是项目的入口</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;index.js&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    filename: </span><span style="color:#9ECBFF;">&#39;bundle.js&#39;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 一般叫这个名字</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 如果没有dist文件夹，webpack会自动帮我们创建</span></span>
<span class="line"><span style="color:#E1E4E8;">    path: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 配置插件 - 是一个数组，可以配置多个插件</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HtmlWebpackPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 直接找到html文件</span></span>
<span class="line"><span style="color:#E1E4E8;">      template: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;index.html&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 根据当前模板，输出的文件名(在dist目录下)</span></span>
<span class="line"><span style="color:#E1E4E8;">      filename: </span><span style="color:#9ECBFF;">&#39;index.html&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 启动本地服务</span></span>
<span class="line"><span style="color:#E1E4E8;">  devServer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    port: </span><span style="color:#79B8FF;">3000</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 启动目录</span></span>
<span class="line"><span style="color:#E1E4E8;">    contentBase: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;dist&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">path</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HtmlWebpackPlugin</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;html-webpack-plugin&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// module.exports是nodejs中CommonJs的语法规范</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 模式</span></span>
<span class="line"><span style="color:#24292E;">  mode: </span><span style="color:#032F62;">&#39;development&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 开发模式</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// mode: &#39;production&#39;,  // 线上模式</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这个js实际上是node，所以可以使用node中的path模块</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 入口</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// __dirname表示当前目录</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 表示能找到当前项目目录下src下的index.js</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 通过join拼接</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 最终找到的这个index.js就是项目的入口</span></span>
<span class="line"><span style="color:#24292E;">  entry: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;index.js&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#24292E;">  output: {</span></span>
<span class="line"><span style="color:#24292E;">    filename: </span><span style="color:#032F62;">&#39;bundle.js&#39;</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 一般叫这个名字</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 目录</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 如果没有dist文件夹，webpack会自动帮我们创建</span></span>
<span class="line"><span style="color:#24292E;">    path: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 配置插件 - 是一个数组，可以配置多个插件</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HtmlWebpackPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 直接找到html文件</span></span>
<span class="line"><span style="color:#24292E;">      template: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;index.html&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 根据当前模板，输出的文件名(在dist目录下)</span></span>
<span class="line"><span style="color:#24292E;">      filename: </span><span style="color:#032F62;">&#39;index.html&#39;</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 启动本地服务</span></span>
<span class="line"><span style="color:#24292E;">  devServer: {</span></span>
<span class="line"><span style="color:#24292E;">    port: </span><span style="color:#005CC5;">3000</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 启动目录</span></span>
<span class="line"><span style="color:#24292E;">    contentBase: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;dist&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div></li><li>再次运行 <ul><li>在package.json文件中添加运行命令<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// dev表示开发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;webpack&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;webpack-dev-server&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// dev表示开发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;webpack&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;webpack-dev-server&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><code>npm run dev</code></li></ul></li><li>浏览器访问 <ul><li><code>localhost:3000</code></li></ul></li><li>如果报错Cannot find module &#39;webpack-cli/bin/config-yargs&#39; <ul><li>安装 webpack-cli 3.* 版本 <ul><li><code>npm install webpack-cli@3 -D</code></li><li>安装3x版本的webpack-cli</li><li>但由于babel的缘故，这里的版本只能使用3.3.9</li></ul></li></ul></li><li>所有配置版本 <ul><li>&quot;html-webpack-plugin&quot;: &quot;^3.2.0&quot;,</li><li>&quot;webpack&quot;: &quot;^4.41.0&quot;, <ul><li>使用babel，webpack必须为4x，但如果版本为4.46.0，webpack-cli无法使用</li></ul></li><li>&quot;webpack-cli&quot;: &quot;^3.3.9&quot;, <ul><li>使用webpack-dev-server，webpack-cli版本必须为3x</li></ul></li><li>&quot;webpack-dev-server&quot;: &quot;^3.8.1&quot;</li></ul></li></ul><h4 id="_2-4-3-使用babel将es6转成es5" tabindex="-1">2.4.3. 使用babel将ES6转成ES5 <a class="header-anchor" href="#_2-4-3-使用babel将es6转成es5" aria-label="Permalink to &quot;2.4.3. 使用babel将ES6转成ES5&quot;">​</a></h4><ul><li>简介 <ul><li>在src的index里面写es6语法 <ul><li>如果项目已经启动，并且在浏览器打开，修改js文件，浏览器会进行热更新</li></ul></li><li>我们可以在浏览器的sources里面打开编译后的bundle文件 <ul><li>这里面依旧是es6代码</li></ul></li><li>如何使es6转换成es5 <ul><li>使用babel</li></ul></li></ul></li><li>babel和webpack <ul><li>babel实际上和webpack没有什么关系</li><li>但babel里面有些插件可以供webpack使用</li><li>babel主要提供的就是将es的高级语法向低级语法转变的功能</li><li>而webpack是一个打包的工具</li><li>但是他们经常会在一起使用</li></ul></li><li>安装babel <ul><li><code>npm install @babel/core @babel/preset-env babel-loader -D</code><ul><li>安装babel核心，babel的配置集合</li><li>@表示组的意思</li><li>/表示单个的模块 <ul><li>安装babel模块的core</li><li>安装babel模块的配置集</li></ul></li><li>babel-loader就是给webpack用的插件</li></ul></li></ul></li><li>配置babel <ul><li>在项目根路径创建一个文件 =&gt; .babelrc <ul><li><code>touch .babelrc</code></li><li>这是一个json格式的文件</li><li>编辑 =&gt; 即babel的配置<div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;presets&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;@babel/preset-env&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;presets&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;@babel/preset-env&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><code>@babel/preset-env</code>是babel很多配置插件的集合</li></ul></li></ul></li><li>修改webpack.config.js<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 配置babel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// module是模块的意思</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 针对不同的模块做不同的解析</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">module</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">rules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 它的整体意思是</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 只要测试到时以.js结尾的，我们都去走babel-loader插件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// babel-loader只是babel提供给webpack的一个插件</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 真正做es6到es5转译的是babel/core这个核心去做的</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 所以我们需要做一个.babelrc的配置才行</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 对js定制规则 =&gt; 正则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 只要是以js结尾的</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// test表示用正则表达式验证一下</span></span>
<span class="line"><span style="color:#E1E4E8;">        test:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">js</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 之前安装的babel-loader插件，主要给webpack用</span></span>
<span class="line"><span style="color:#E1E4E8;">        loader: [</span><span style="color:#9ECBFF;">&#39;babel-loader&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 我们有哪些目录需要进行loader</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 我们手写的代码(src里面)都需要经过babel-loader进行转译</span></span>
<span class="line"><span style="color:#E1E4E8;">        include: path.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 正则</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 但是node_modules都是第三方的插件，这个就没必要转译，因为安装的时候已经被转译了</span></span>
<span class="line"><span style="color:#E1E4E8;">        exclude:</span><span style="color:#DBEDFF;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">node_modules</span><span style="color:#9ECBFF;">/</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 配置babel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// module是模块的意思</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 针对不同的模块做不同的解析</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 规则</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">rules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 它的整体意思是</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 只要测试到时以.js结尾的，我们都去走babel-loader插件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// babel-loader只是babel提供给webpack的一个插件</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 真正做es6到es5转译的是babel/core这个核心去做的</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 所以我们需要做一个.babelrc的配置才行</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 对js定制规则 =&gt; 正则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 只要是以js结尾的</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// test表示用正则表达式验证一下</span></span>
<span class="line"><span style="color:#24292E;">        test:</span><span style="color:#032F62;"> /</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">js</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 之前安装的babel-loader插件，主要给webpack用</span></span>
<span class="line"><span style="color:#24292E;">        loader: [</span><span style="color:#032F62;">&#39;babel-loader&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 我们有哪些目录需要进行loader</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 我们手写的代码(src里面)都需要经过babel-loader进行转译</span></span>
<span class="line"><span style="color:#24292E;">        include: path.</span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;src&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 正则</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 但是node_modules都是第三方的插件，这个就没必要转译，因为安装的时候已经被转译了</span></span>
<span class="line"><span style="color:#24292E;">        exclude:</span><span style="color:#032F62;"> /node_modules/</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></li><li>运行 <ul><li><code>npm run dev</code></li><li>babel，webpack，webpack-cli以及webpack-dev-server息息相关，如果版本不对应，会造成无法运行的情况，所以这边罗列锁定的版本 <ul><li>&quot;@babel/core&quot;: &quot;^7.6.2&quot;,</li><li>&quot;@babel/preset-env&quot;: &quot;^7.6.2&quot;,</li><li>&quot;babel-loader&quot;: &quot;^8.0.6&quot;,</li><li>&quot;html-webpack-plugin&quot;: &quot;^3.2.0&quot;,</li><li>&quot;webpack&quot;: &quot;^4.41.0&quot;,</li><li>&quot;webpack-cli&quot;: &quot;^3.3.9&quot;,</li><li>&quot;webpack-dev-server&quot;: &quot;^3.8.1&quot;</li></ul></li><li>经过转译之后，class，箭头函数等都变成了function的形式</li></ul></li></ul><h4 id="_2-4-4-es6模块化" tabindex="-1">2.4.4. es6模块化 <a class="header-anchor" href="#_2-4-4-es6模块化" aria-label="Permalink to &quot;2.4.4. es6模块化&quot;">​</a></h4><ul><li>模块化实际上就是一个导出一个导入的功能</li><li>两个js引用 <ul><li>一个一个地导出<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// a.js =&gt; 供出</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fn&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;b&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;zhangsan&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// b.js =&gt; 导入</span></span>
<span class="line"><span style="color:#6A737D;">// 使用解构 =&gt; es6语法</span></span>
<span class="line"><span style="color:#E1E4E8;">cont { fn, name, obj } from </span><span style="color:#9ECBFF;">&#39;./a&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 可以直接使用</span></span>
<span class="line"><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// a.js =&gt; 供出</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fn&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;b&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;zhangsan&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// b.js =&gt; 导入</span></span>
<span class="line"><span style="color:#6A737D;">// 使用解构 =&gt; es6语法</span></span>
<span class="line"><span style="color:#24292E;">cont { fn, name, obj } from </span><span style="color:#032F62;">&#39;./a&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 可以直接使用</span></span>
<span class="line"><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(name)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li>导出一个文件<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// a.js =&gt; 供出</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fn&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;b&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&quot;zhangsan&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// es6的简写 =&gt; key和value相同</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// es5下实际上是 fn: fn</span></span>
<span class="line"><span style="color:#E1E4E8;">  fn,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name,</span></span>
<span class="line"><span style="color:#E1E4E8;">  obj</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果使用defalut</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> defatlt {</span></span>
<span class="line"><span style="color:#E1E4E8;">  fn,</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// c.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">xxx</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;xxx&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> obj</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// b.js =&gt; 导入</span></span>
<span class="line"><span style="color:#6A737D;">// 使用解构 =&gt; es6语法</span></span>
<span class="line"><span style="color:#E1E4E8;">cont { fn, name, obj } from </span><span style="color:#9ECBFF;">&#39;./a&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可以直接使用</span></span>
<span class="line"><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(name)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果使用defalut</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> af </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">af.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> afile </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./a&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">afile.</span><span style="color:#B392F0;">fn</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入c</span></span>
<span class="line"><span style="color:#6A737D;">// 不使用解构，是export default</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> xxx </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./c&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(xxx)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// a.js =&gt; 供出</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fn&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;b&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;">  </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&quot;zhangsan&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// es6的简写 =&gt; key和value相同</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// es5下实际上是 fn: fn</span></span>
<span class="line"><span style="color:#24292E;">  fn,</span></span>
<span class="line"><span style="color:#24292E;">  name,</span></span>
<span class="line"><span style="color:#24292E;">  obj</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果使用defalut</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> defatlt {</span></span>
<span class="line"><span style="color:#24292E;">  fn,</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// c.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">xxx</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;xxx&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> obj</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// b.js =&gt; 导入</span></span>
<span class="line"><span style="color:#6A737D;">// 使用解构 =&gt; es6语法</span></span>
<span class="line"><span style="color:#24292E;">cont { fn, name, obj } from </span><span style="color:#032F62;">&#39;./a&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可以直接使用</span></span>
<span class="line"><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(name)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 如果使用defalut</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> af </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./&#39;</span></span>
<span class="line"><span style="color:#24292E;">af.</span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// *</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> afile </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./a&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">afile.</span><span style="color:#6F42C1;">fn</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 导入c</span></span>
<span class="line"><span style="color:#6A737D;">// 不使用解构，是export default</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> xxx </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./c&#39;</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(xxx)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div></li></ul></li></ul><h4 id="_2-4-4-配置生产环境的打包" tabindex="-1">2.4.4. 配置生产环境的打包 <a class="header-anchor" href="#_2-4-4-配置生产环境的打包" aria-label="Permalink to &quot;2.4.4. 配置生产环境的打包&quot;">​</a></h4><ul><li>新建一个文件 =&gt; webpack.prod.js <ul><li><code>touch webpack.prod.js</code> =&gt; production =&gt; 生产环境</li></ul></li><li>将webpack.config.js内容拷贝到webpack.prod.js <ul><li>webpack.config.js =&gt; 开发环境配置文件</li><li>webpack.prod.js =&gt; 生产环境配置文件</li></ul></li><li>配置webpack.config.js <ul><li>修改mode =&gt; <code>mode: &#39;production&#39;</code></li><li>删除devServer</li><li>修改output配置 <ul><li><code>filename: &#39;bundle.[contenthash].js&#39;,</code><ul><li>它原先打包的是bundle.js</li><li>现在我们要根据里面的内容算出一个hash值</li><li>代码变了，文件名就变，代码不变，文件名就不变</li><li>使用contenthash能最大程度地将代码命中http缓存</li></ul></li></ul></li></ul></li><li>配置package.json <ul><li>现在的build指令webpeck，实际上操作的是webpack.config.js</li><li>现在我们只需要进行构建，不需要启动服务</li><li>即改变一下配置文件的地址</li><li>将<code>&quot;build&quot;: &quot;webpack&quot;</code>改为<code>webpack --config webpack.prod.js</code></li></ul></li><li>运行 <ul><li><code>npm run build</code></li><li>查看dist里面的js文件，现在文件名有了hash值</li><li>代码没变，hash值就不会变</li><li>目前有两个命令 <ul><li><code>npm run dev</code> =&gt; 开发环境命令</li><li><code>npm run build</code> =&gt; 生产环境命令</li></ul></li></ul></li></ul><h4 id="_2-4-5-配置生产环境的打包" tabindex="-1">2.4.5. 配置生产环境的打包 <a class="header-anchor" href="#_2-4-5-配置生产环境的打包" aria-label="Permalink to &quot;2.4.5. 配置生产环境的打包&quot;">​</a></h4><ul><li><a href="https://zmx2321.github.io/blog_code/interview/interview-one-side/example/deve/webpack-demo/package.json" target="_blank" rel="noreferrer">package.json配置</a></li><li><a href="https://zmx2321.github.io/blog_code/interview/interview-one-side/example/deve/webpack-demo/webpack.config.js" target="_blank" rel="noreferrer">webpack.config.js开发环境配置</a></li><li><a href="https://zmx2321.github.io/blog_code/interview/interview-one-side/example/deve/webpack-demo/webpack.prod.js" target="_blank" rel="noreferrer">webpack.prod.js生产环境配置</a></li></ul><h3 id="_2-5-linux常用命令" tabindex="-1">2.5. linux常用命令 <a class="header-anchor" href="#_2-5-linux常用命令" aria-label="Permalink to &quot;2.5. linux常用命令&quot;">​</a></h3><ul><li>简述 <ul><li>公司的线上机器一般都是linux(参考阿里云)</li><li>测试机也需要保持一直，用linux</li><li>测试机或者线上机出了问题，本地又不能复现，需要去排查</li><li>mac os有些命令和linux是差不多的</li></ul></li><li>cmder链接到服务器 <ul><li><code>ssh root@192.168.2.106</code></li><li>输入密码</li></ul></li><li>文件操作 <ul><li><code>ls</code> =&gt; 查看文件和文件夹</li><li><code>ls -a</code> =&gt; 查看所有文件 =&gt; 平铺 <ul><li>ls有些文件找不到，比如.babelrc这类的文件</li><li>linux下，以点开头的文件都是隐藏文件，所以需要使用-a</li></ul></li><li><code>ll</code> =&gt; 查看文件和文件夹 =&gt; 列表</li><li><code>ll -a</code> =&gt; 查看所有文件 =&gt;</li><li><code>mkdir aaa</code> =&gt; 创建一个aaa的文件夹</li><li><code>rm -rf aaa</code> =&gt; 删除aaa文件夹 <ul><li><code>-rf</code>表示删除文件夹中的所有内容</li><li>-r表示递归，-f表示强制，不加-f会每个都询问是否要删除</li><li>文件夹可能分好几层</li></ul></li><li><code>cd aaa</code> =&gt; 定位到目录</li><li><code>mv index.html test.html</code> =&gt; 重命名</li><li><code>mv bundle.js ../bundle.js</code> =&gt; 移动到上级目录 <ul><li>小技巧，输入mv b之后，按tab键，会自动补全</li></ul></li><li><code>cp a.js a1.js</code> =&gt; 拷贝</li><li><code>rm -f a1.js</code> =&gt; 删除文件 <ul><li>不加-f会进行询问</li><li>使用-rf也可以用</li></ul></li><li><code>vi d.js</code> =&gt; 新建一个js并打开 <ul><li>vi和vim指令一样</li><li>输入i进行编辑 =&gt; 进入insert模式</li><li>按esc退出insert模式</li><li>:w =&gt; 写入(保存)</li><li>:q =&gt; 退出</li><li>:wq! =&gt; 强制写入并退出</li><li><code>vimtutor</code> =&gt; vim教程 <ul><li><code>yum -y install vimtutor</code></li></ul></li></ul></li><li><code>cat d.js</code> =&gt; 查看文件内容</li><li><code>head d.js</code> =&gt; 查看文件内容 =&gt; 打印前面几行</li><li><code>tail d.js</code> =&gt; 查看文件内容 =&gt; 打印末尾几行</li><li><code>grep &quot;222&quot; d.js</code> =&gt; 在某个文件中查找关键字</li></ul></li><li>清屏 =&gt; clear</li></ul><h2 id="_3-面试题解答-总结" tabindex="-1">3. 面试题解答(总结) <a class="header-anchor" href="#_3-面试题解答-总结" aria-label="Permalink to &quot;3. 面试题解答(总结)&quot;">​</a></h2><ul><li>git <ul><li>常用命令</li><li>添加、撤销、查看日志、查看diff、切换分支、新建分支、合并分支、合并如何解决冲突</li></ul></li><li>调试工具 <ul><li>Chrome</li></ul></li><li>抓包 <ul><li>mac环境</li></ul></li><li>webpack babel <ul><li>webpack配置</li><li>启动服务</li><li>用babel编辑es6、模块化</li><li>怎么打包到生产环境下 <ul><li>压缩、文件名根据内容hash</li></ul></li></ul></li><li>linux常用命令 <ul><li>文件操作</li></ul></li></ul>`,27),o=[e];function c(r,i,t,y,b,u){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{m as __pageData,d as default};
