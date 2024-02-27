# npm相关笔记

## 1. 删除node_modules
```
npm install rimraf -g
rimraf node_modules
```

## 2. 卸载
- npm uninstall xxx

## 3. 使用npm执行bash文件，并发布到github page
- main.sh
  ```sh
  git pull
  git add .
  git commit -m 'init'

  git push
  ```
- deploy.sh
  ```sh
  #!/usr/bin/env sh

  # 确保脚本抛出遇到的错误
  set -e

  # 生成静态文件
  yarn build

  # 进入生成的文件夹
  cd vue_empty_auto

  git pull
  git init
  git add -A
  git commit -m 'deploy'

  git push -f git@github.com:zmx2321/vue_empty_auto.git master:gh-pages

  cd -
  ```
- package.json
  ```json
  "main": "bash main.sh",
  "deploy": "bash deploy.sh"
  ```

## 使用nvm对node版本进行管理
### 在windows环境安装nvm
#### 安装
- [下载nvm](https://github.com/coreybutler/nvm-windows#installation--upgrades)
  - 如果你安装了 yarn，卸载它，安装 NVM 后重新安装它
  - 选择【nvm-setup.exe】
  - 一直下一步
  - 安装完之后输入 `nvm -v` 查看是否安装成功
#### 使用
- 要使用 NVM，你需要以管理员身份打开 PowerShell 或命令提示符。你也可以使用 Git bash
- 超级强大的 NVM 让你能够在你的机器上安装多个版本的 Node.js
- 要安装最新版本的 Node，请运行 `nvm install latest`。
- 要安装 LTS 版本的 Node，请运行 `nvm install lts`
  - 安装 Node 的长期支持（LTS）版本更好，因为它的 bug 更少。
- 要安装特定版本的 Node，你需要先运行 `nvm list available`，以便查看可用的 Node 版本。
- 要安装该特定版本，请运行 `nvm install node-version-number`
  - 例如，`nvm install 14.20.0`
- 注意：一旦你安装了一个版本的 Node，就会为你安装相应版本的 NPM，所以你不需要单独安装 NPM。
- 如果你要使用的 NPM 版本不可用，请运行 `npm install @npm version-number -g` 进行安装
- 要查看你在 Windows 机器上安装的 Node 版本列表，请运行 `nvm list`
- 要使用特定版本的 Node，请运行
  - `nvm use latest` 使用最新版本
  - `nvm use lts` 使用长期支持版本
  - `nvm use version-number` 使用你已安装的任何其他版本
- 以下是你将与 nvm-windows 一起使用的常用命令
  - `nvm install node-version` – 安装一个版本的 Node
  - `nvm list` – 查看你机器上安装的 Node 版本
  - `nvm use node-version` – 使用特定版本的 Node
### 使用淘宝源
```bash
nvm node_mirror https://npm.taobao.org/mirrors/node
nvm npm_mirror https://npm.taobao.org/mirrors/npm
```

### 在mac环境安装nvm
- 如果之前安装过node,一定要把node卸载干净，如果没有安装过node直接卸载，如果没有安装过node，直接从第二个步骤开始
  1. 如果是官网下载的node安装，直接安装，在终端直接输入下面的命令
    - `sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}`
  2. 如果是通过homebrew安装的node，在终端执行下面命令
    - brew uninstall node
  3. 卸载npm相关
  ```bash
  npm uninstall npm -g
  rm -rf ~/.npm
  ```
  4. 卸载user目录下的相关文件
  ```bash
  rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.* 
  cd /usr/local/lib
  rm -rf node*
  rm -rf /usr/local/lib/dtrace/node.d
  ```
  5. 删除 /usr/local/include 下 node 和 node_modules 目录
  ```bash
  cd /usr/local/include
  sudo rm -rf node*
  ```
  6. 删除 /usr/local/bin 下 node 执行文件
  ```bash
  cd /usr/local/bin
  rm /usr/local/bin/npm
  rm /usr/local/bin/node
  ls -las 仔细查看，全局安装的npm包一般会在这个目录下创建软连接，发现就删除
  ```
  7. 最后查看版本，检查是否卸载
  ```bash
  node  -v
  npm  -v
  ```
- 安装
  - 下载命令
    - 从github下载nvm仓库到 ~/目录
    - `git clone https://github.com/nvm-sh/nvm.git`
  - 执行install.sh
      - 进入 nvm目录中执行install.sh 等待执行完成，执行的操作方法就是直接将文件拖入终端然后回车

## node版本不兼容
- 忽略错误后重新yarn install
  `yarn config set ignore-engines true`