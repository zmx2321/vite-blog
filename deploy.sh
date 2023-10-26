#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# git pull origin master
git init
git add -A
git commit -m 'deploy'


# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
# git push -f https://github.com/zmx2321/blog.git master:gh-pages
git push -f git@github.com:zmx2321/vitepress_empty.git master:gh-pages

cd -