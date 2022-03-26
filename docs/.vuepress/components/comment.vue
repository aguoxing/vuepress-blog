<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import md5 from 'blueimp-md5'

export default {
  name: 'comment',
  data() {
    return {};
  },
  mounted() {
    let body = document.querySelector('.gitalk-container');
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    body.appendChild(script);
    script.onload = () => {
      const commentConfig = {
        clientID: 'Iv1.2e5bd8af44281072',
        clientSecret: 'ffde1f33878c524cd5b0f6f90073b5c7f9e2d681',
        repo: 'vuepress-blog',
        owner: 'aguoxing',
        // 这里接受一个数组，可以添加多个管理员，可以是你自己
        admin: ['aguoxing'],
        // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，
        // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
        id: md5(location.pathname),
        distractionFreeMode: false,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    };
  },
};
</script>
<style>
</style>
