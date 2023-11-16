# git相关笔记

## 1. 上传下载代码常用命令
- `git clone url` 复制的地址
- `git pull` 拉取别人的代码
- `git status` 查看仓库状态
- `git add .` 除了gitignore里面的东西，其余添加到缓存区
- `git commit -m 'deploy'` 将被添加到缓存区的东西提交到缓存区  加文字说明
- `git push` 将缓存区的的文件提交到仓库


## 2. 其他常用命令
- `git config --global credential.helper store` git不输入密码
- 卸载重装git credentials manager
    - `git credential-manager uninstall`  卸载
    - `git credential-manager install`  重装

## 3. 查询是否使用了代理
- git config --global http.proxy

## 4. 取消代理
- git config --global --unset http.proxy

## 5. 避免重复输入密码
- `git config --global credential.helper store`
- `cat ~/.git-credentials` => 查看账号

## 6. git分支相关
### 6.1. 分支命令简述
- `git branch branchName`(在本地创建一个命名为branchName的分支)
- `git branch` 查看当前自己所在的分支
  - 查看本地分支
- `git branch -a` 查看服务器的所有分支以及自己当前所在的分支
  - 查看远程分支 (其中，remotes开头的代表是远程分支)
- `git push origin branchName`(把命名为branchName的本地分支推送到服务器)
- `git checkout --track origin/branchName` (切换为远程服务器上的命名为branchName的远程分支)
- 如果你的搭档要把他本地的分支给关联到服务器上命名为branchName的远程分支，请执行以下操作
  - `git branch --set-upstream localBranchName origin/branchName`  （为本地分支添加一个对应的远程分支 与之相对应）->这行命令用来关联本地的分支与服务器上的分支
- 完成以上操作之后，就可以进行提交代码了，但是在提交代码之前，你要确定你当前所在的分支
- `git push origin branchName`（提交代码到远程服务器上命名为branchName的分支上）
- `git pull origin branchName` （从远程分支上拉取代码）

### 6.2. 创建并使用一个新的分支流程
1. 创建一个分支
  - `git branch 分支名`
2. 切换到分支
    - `git checkout 分支名`
3. 提交代码到远程服务器的分支上
  - `git push origin 分支名`
4. 拉取远程分支内容
  - `git pull origin 分支名`
5. 关联本地的分支与服务器上的分支
  - `git branch --set-upstream localBranchName origin/branchName`
6. 这时候就可以直接pull和push代码了
  - `git pull`
### 6.3. 分支相关复杂指令
- 本地分支关联远程分支
  - 在本地test分支上修改了代码后，需要提交到远程，这时就需要关联远程的某个远程分支
  ```js
  /**
   * 本地提交
   * git gui 
   * push到远程
   * git push origin test:test
   * 第一次无法pull，只能push
   * 如果不写远程分支名称，则默认和本地分支同名，这时命令为：$ git push origin test
   * 从远程pull
   * git pull origin test:test  
   */
  ```
  - 从远程分支上下代码
    - `git clone -b 分支名 http://xxx/xxx.git`
  - clone远程仓库到指定目录
    - `git clone xxx.git "指定目录"`

## 8. 删除分支
1. 删除本地分支
  - `git branch --delete 分支名`
    - 等同于`git branch -d 分支名`
    - 该分支必须完全和它的上游分支merge完成，如果没有上游分支,必须要和HEAD完全merge
  - `git branch -D dev`
    - -D是--delete --force的缩写,这样写可以在不检查merge状态的情况下删除分支
2. 删除远程分支
  - `git push origin --delete 分支名`
3. 删除追踪分支
  - `git branch --delete --remotes <remote>/<branch>`
    - 该操作并没有真正删除远程分支,而是删除的本地分支和远程分支的关联关系

## 9. 使用git config --global设置用户名和邮件
- 安装好git后，在命令行或终端中使用下面的命令可以设置git自己的名字和电子邮件
- 这是因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址
```git
git config --global user.name "zmx2321"
git config --global user.email "zmx2321@163.com"
```
- 注意git config命令的–global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址
- 配置好之后可以查看
  - `git config -l` 
- 查看全局用户名密码
```git
git config --global user.name
git config --global user.email
```
- 为单一的仓库配置用户名和邮箱
```git
git config user.name "username"
git config user.email "email"
```
- 查看单一仓库的配置
```git
git config user.name
git config user.email 
```

## 9. git 下拉警告
- 当使用git版本为2.27.0以上时，使用git pull命令出现以下的警告：
  ```
  warning: Pulling without specifying how to reconcile divergent branches is
  discouraged. You can squelch this message by running one of the following
  commands sometime before your next pull:

    git config pull.rebase false  # merge (the default strategy)
    git config pull.rebase true   # rebase
    git config pull.ff only       # fast-forward only

  You can replace "git config" with "git config --global" to set a default
  preference for all repositories. You can also pass --rebase, --no-rebase,
  or --ff-only on the command line to override the configured default per
  invocation.
  ```
- 翻译如下
  ```
  warning: 不建议在没有为偏离分支指定合并策略时执行pull操作。 
  您可以在执行下一次pull操作之前执行下面一条命令来抑制本消息：

  git config pull.rebase false  # 合并（默认缺省策略）
  git config pull.rebase true   # 变基
  git config pull.ff only       # 仅快进

  您可以将 "git config" 替换为 "git config --global" 以便为所有仓库设置
  缺省的配置项。您也可以在每次执行 pull 命令时添加 --rebase、--no-rebase，
  或者 --ff-only 参数覆盖缺省设置。
  ```
- 解决方法
  - 执行 `git config pull.rebase false`

## 10. push文件过大
- `git config --global http.postBuffer 157286400`
  - 当推送大量数据时（初始推送大型存储库，使用非常大的文件进行更改）可能需要 http.postBuffer 在 git 客户端 （而不是服务器）上设置更高的 设置 ；将 Git 缓冲区大小增加到 repo 的最大单个文件大小

  ## 20. 关于忽略文件.gitignore
  - 我们发现直接将.env.development放入.gitignore不起作用
  - 原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的
  - git清除本地缓存命令
    - git rm .env.development --cached
  - git commit提交代码
  - 此时随意修改.env.development文件，就不会受到git的跟踪了，这样每次提交都不会提交.env.development的修改到git上了

## 21. git提交报错
- cash-config@1.0.0 l
- 只需要在commit 后面追加 --no-verify  就可以解决
  - git commit -m 'merge' --no-verify
  - 不进行校验