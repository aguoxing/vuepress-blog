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
      clientSecret: '404f2e969365be5eaa9ec93977f33b5e49b079fa',
      repo: 'vuepress-blog',
      owner: 'aguoxing',
      admin: ['aguoxing'],
      id: md5(location.pathname),
      distractionFreeMode: false
    };
    const gitalk = new Gitalk(commentConfig);
    gitalk.render('gitalk-container');
  }
};
</script>
