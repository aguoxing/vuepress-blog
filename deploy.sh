# ���ɾ�̬�ļ�
npm run docs:build

# ���ɾ�̬�ļ������Ƶ�master��֧
git add .
git commit -m "update"
git push -f git@github.com:aguoxing/vuepress-blog.git master

# �������ɵ��ļ���
cd docs/.vuepress/dist

# ����Ƿ������Զ�������
echo 'xingzxc.xyz' > CNAME

git init
git add -A
git commit -m 'deploy'

# ��������� https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# ��������� https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:aguoxing/vuepress-blog.git master:gh-pages

cd -