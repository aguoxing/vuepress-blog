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
      clientID: 'Iv1.474dfbee9a4f1aac',
      clientSecret: 'd092b1e9c70cc94c2f96727c4b2a43812d06a172',
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
