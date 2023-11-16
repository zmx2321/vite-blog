# npm相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

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