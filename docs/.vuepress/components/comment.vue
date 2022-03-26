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
  mounted() {
    const commentConfig = {
      clientID: 'Iv1.2e5bd8af44281072',
      clientSecret: 'ffde1f33878c524cd5b0f6f90073b5c7f9e2d681',
      repo: 'vuepress-blog',
      owner: 'gwoksing',
      admin: ['gwoksing'],
      id: md5(location.pathname),
      distractionFreeMode: false
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render('gitalk-container');
  }
};
</script>
