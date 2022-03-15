const path = require('path');

module.exports = {
  base: '/vuepress-blog', // 设置站点根路径
  title: '冬辰的博客',
  description: '冬辰的博客',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.jpg' }], // 需要被注入到当前页面的 HTML <head> 中的标签
    /*'script', // 百度统计
    {},
    `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?12118623aa14a9196dd27640b1fce234";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `*/
  ],
  plugins: [
    '@vuepress/back-to-top',
    'reading-progress',
    path.resolve(__dirname, './vuepress-plugin-code-copy/index.js'),
    // require('./another-plugin'),
  ],
  markdown: {
    lineNumbers: true
  },
  theme: '@vuepress/blog',
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    smoothScroll: true,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '分类',
        link: '/category/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '关于',
        link: '/abouts/',
      },
    ],
    newsletter: {
      endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    },
    sitemap: {
      hostname: 'https://aguoxing.github.io/vuepress-blog/'
    },
    feed: {
      canonical_base:'https://aguoxing.github.io/vuepress-blog/',
      rss:false,
      atom:true,
      json:false
    },
    summaryLength: {
      serviceWorker: true,
      updatePopup: true
    },
    comment: // Vssue
    {
      service: 'vssue',
      owner: 'aguoxing',
      repo: 'vuepress-blog',
      clientId: 'Iv1.2e5bd8af44281072',
      clientSecret: '93fdc99f4ba7cd37a8f8f991c3f6b6f68752f4dd',
    },
    directories: [
      {
        id: 'post', // 当前分类器的唯一 ID
        dirname: '_posts', // 匹配的目录名称
        path: '/', // 当前分类器的入口页面
        title: '首页', // 当前分类器的条目和分页页面标题
        layout: 'IndexWriting', // 入口页面的布局组件名称
        frontmatter:{ // 入口页面的前端
          tag: 'vuepress'
        },
        itemLayout: 'Writing', // 匹配页面的布局
        itemPermalink: '/blog/:year/:month/:day/:slug', // 匹配页面的永久链接
        pagination: { // 分页行为
          prevText:'<<', // Text for previous links.
          nextText:'>>', // Text for next links.
          lengthPerPage:'10', // Maximum number of posts per page.
          layout:'Pagination', // Layout for pagination page
        },
      }
    ],
    frontmatters: [
      {
        id: 'category', // Unique id for current classifier
        keys: ['category'], // Frontmatter keys used to classify pages
        path: '/category/', // Entry page for current classifier
        title: '分类', // Entry, scope and pagination page titles for current classifier.
        layout: 'IndexCategory', // Layout component name for entry page.
        scopeLayout: 'ScopeCategory', // Layout component name for scope page.
        frontmatter: { //Front matter for entry page.
          description: 'Hello'
        },
        pagination: { // Pagination behavior
          prevText:'<<', // Text for previous links.
          nextText:'>>', // Text for next links.
          lengthPerPage:'10', // Maximum number of posts per page.
          layout:'Pagination', // Layout for pagination page
        },
      },
      {
        id: 'tag', // Unique id for current classifier
        keys: ['tag','tags'], // Frontmatter keys used to classify pages
        path: '/tag/', // Entry page for current classifier
        title: '标签', // Entry, scope and pagination page titles for current classifier.
        layout: 'IndexTag', // Layout component name for entry page.
        scopeLayout: 'ScopeTag', // Layout component name for scope page.
        frontmatter: { //Front matter for entry page.
          description: 'Hello'
        },
        pagination: { // Pagination behavior
          prevText:'<<', // Text for previous links.
          nextText:'>>', // Text for next links.
          lengthPerPage:'10', // Maximum number of posts per page.
          layout:'Pagination', // Layout for pagination page
        },
      },
    ],
    footer: {
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: '© 2021-present gwoksing',
        },
      ],
      contact: [
        {
          type: 'github',
          link: 'https://github.com/aguoxing',
        },
        {
          type: 'gitee',
          link: 'https://gitee.com/aguoxing',
        },
      ],
    },
  }
}
