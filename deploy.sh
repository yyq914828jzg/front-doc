#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


git push -f https://github.com/yyq914828jzg/front-doc.git master:gh-pages



cd -

rm -rf docs/.vitepress/dist 