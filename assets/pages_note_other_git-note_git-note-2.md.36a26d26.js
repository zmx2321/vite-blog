import{_ as s,o as n,c as a,e}from"./app.f071aef6.js";const g=JSON.parse('{"title":"git示例","description":"","frontmatter":{},"headers":[],"relativePath":"pages/note/other/git-note/git-note-2.md","filePath":"pages/note/other/git-note/git-note-2.md","lastUpdated":1703657631000}'),p={name:"pages/note/other/git-note/git-note-2.md"},l=e(`<h1 id="git示例" tabindex="-1">git示例 <a class="header-anchor" href="#git示例" aria-label="Permalink to &quot;git示例&quot;">​</a></h1><blockquote><p>模拟多人协作分支操作 测试git站点：zmx2321.coding.net</p></blockquote><h2 id="单人开发的情况" tabindex="-1">单人开发的情况 <a class="header-anchor" href="#单人开发的情况" aria-label="Permalink to &quot;单人开发的情况&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 从站点拉取仓库代码</span></span>
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
<span class="line"><span style="color:#24292e;">git pull</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div><h2 id="模拟多人开发的情况" tabindex="-1">模拟多人开发的情况 <a class="header-anchor" href="#模拟多人开发的情况" aria-label="Permalink to &quot;模拟多人开发的情况&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 进入文件夹</span></span>
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
<span class="line"><span style="color:#24292e;">git checkout .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br></div></div>`,6),c=[l];function o(r,t,i,b,y,m){return n(),a("div",null,c)}const d=s(p,[["render",o]]);export{g as __pageData,d as default};
