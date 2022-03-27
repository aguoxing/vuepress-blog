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
      clientID: '4d3d91affc5e32f8a5a1',
      clientSecret: '6346c363b4c4b9c0a2b967c3623e3954fd508c02',
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
