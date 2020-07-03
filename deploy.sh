# 生成静态文件
npm run docs:build

# 生成静态文件后先推到master分支
git add .
git commit -m "update"
git push -f git@github.com:aguoxing/vuepress-blog.git master

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'xingzxc.xyz' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:aguoxing/vuepress-blog.git master:gh-pages

cd -