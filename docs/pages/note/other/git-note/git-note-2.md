# git示例
> 模拟多人协作分支操作
> 测试git站点：zmx2321.coding.net

## 单人开发的情况
```
# 从站点拉取仓库代码
# 使用https需要输入用户名和密码
# ssh不用输入账号密码，但需要ssh key
git clone https://e.coding.net/zmx2321/testgit/testgit1.git 

# mac添加公钥指令
# cat ~/.ssh/id_rsa.pub  =>  pub 就是公钥的意思
# 把公钥拷贝下来，在站点添加公钥，添加名称
# 添加完之后就可以直接使用ssh下载仓库了

# 进入文件夹
cd testgit1

# 查看当前git状态
git status

# 查看当前分支 master是主分支，也是默认新建的分支
git branch

# 修改git仓库

# 再次查看状态
git status

# 查看修改的内容
git diff

# 查看某个文件修改的内容 => 新增的文件不会在diff里面
git diff README.md
git diff *.md

# 添加一个文件
git add README.md
git add *.md

# 添加所有文件
git add .

# 再次查看状态 => 绿色的表示已经添加
git status

# 生成一条记录，并写上注释
git commit -m 'test'

# 查看日志
git log

# 有些需要进行配置 => 这样就能看到你提交的用户名和邮箱
# 多人协作的时候就知道这是谁提交的
git config user.name zmx2321
git config user.email zmx2321@163.com

# Initial Commit 表示当时创建的时候提交的记录

# 查看某条记录提交的内容 => git能够跟踪你改的哪些东西
git log
# 把下面的commit的标识(id)拷下来
git show 27e936aab0ff888ff46abf0f1dac215b744cba6b

## 再次修改文件内容

## 查看状态
git status

## 如果反悔之前修改的内容 => 就会把之前修改的内容取消掉(删除)
git checkout README.md
git checkout *.md

## 撤销所有修改
git checkout .

# 即git有查看当前修改内容的能力，以及反悔的能力
# 在commit之前，可以把之前修改的内容撤销回来

# 推送到代码仓库(服务端) => 此时站点才有之前提交的代码
git push origin master
git push

# 多人协作的时候，推送之前，先下拉代码
git pull origin master
git pull
```

## 模拟多人开发的情况
```
# 进入文件夹
cd testgit1

# 模拟另一个开发人员
# 做一个新功能之前，需要切换一个新的分支

# 创建分支
git checkout -b test2

# 查看分支 => 高亮表示当前指向的分支
# git地址后面的括号是当前指向的分支名
git branch

# 查看git状态
git status
git diff

# 提交 commit之后，代码已经在这个分支下面了
git add .
git commit -m 'test2'

# 切换到主分支 
# 和撤回文件内容是一个命令，后面加分支名就是切换分支
git checkout master

# 再次模拟一个开发人员

# 开新分支
git checkout -b test3

# 查看分支
git branch

# 修改文件，查看状态
git status

# 提交
git add .
git commit -m 'test3'

# 提交test3到服务端仓库
git push origin test3

# 提交test2到服务端仓库
git push origin test2

# 刷新站点仓库，可以看到多出两个分支

# 将test2和test3合并到主分支master上来

# 切换到master分支
git checkout master

# 模拟项目负责人
# 合并test2和test3分支

# 先把服务端所有分支全部拉下来
git fetch

# 查看所有分支(本地)
git branch

# 将test2分支的代码合并到主分支
# 切换到test2分支
git checkout test2

# 拉取test2分支代码
git pull origin test2

# 切回到主分支

# 合并代码 
# 将test2分支的代码合并到当前分支上来
git merge test2

# 主分支提交代码到服务端
# 没有冲突直接push，不用commit
git push origin master

# 将test3分支的代码合并到主分支
# 主分支 => 先把服务端所有分支全部拉下来
# git fetch

# 切换到test3分支
git checkout test3

# 拉取test3分支的代码
git pull origin test3

# 切回主分支
git checkout master

# 合并代码
# 将test3分支的代码合并到当前分支
git merge test3

# 解决冲突
# 只要是confict显示的文件都冲突了
# 打开编辑器(vscode)
# vscode能够失败冲突，并且有快捷方式
# 接受当前的改变(本地)
# 接受传入的改变(merge的分支)
# 两者同时接受

# 查看文件状态
git status


# 解决完冲突需要进行add
git add .
git commit -m 'test3 branch'

# 再次merge显示already up to date

# 主分支提交代码到服务端
git push origin master

# 意外情况
# 做一个test4功能

# 新建一个分支
git checkout -b test4

# 切回到master分支
git checkout master

# 如果我们不小心在主分支上做了修改

# 查看分支 => 此时主分支上有test4功能
git status

# 把当前修改的东西划出来
# 把修改的东西暂存起来
git stash

# 此时使用status查看，只会显示新建的文件

# 此时再建分支
git checkout -b 

# 此时使用status查看，只会显示新建的文件

# 开放暂存区
git stash pop

# 此时使用status查看,显示正常

# 提交分支代码
git add .
git commit -m 'test5'
git push origin test5

# 切换到主分支
git checkout master

# 撤回主分支上修改的代码
git checkout .
```