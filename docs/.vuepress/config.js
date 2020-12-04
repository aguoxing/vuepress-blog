module.exports = {
  title: 'learncloud',
  description: 'Java程序员的自我修养',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    lastUpdated: 'Last Update',
    // sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: false, // 默认值：true
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/docs/' },
      {
        text: '关于',
        items: [
          { text: 'GitHub', link: 'https://github.com/aguoxing' },
          { text: 'Gitee', link: 'https://gitee.com/aguoxing' },
          { text: 'QQ', link: 'http://sighttp.qq.com/authd?IDKEY=73a6878f272caac4245dce5ad8e38afa940eb94ca6128183' },
          {text: '关于本站', link: '/about/'}
        ]
      }
    ],
    sidebar: {
      '/docs/': [{
        title: 'Docker',
        collapsable: true,
        children: [
          '/docs/Docker/docker',
        ]
      },
      {
        title: 'Dubbo',
        collapsable: true,
        children: [
          '/docs/Dubbo/dubbo',
        ]
      },
      {
        title: 'Git',
        collapsable: true,
        children: [
          '/docs/Git/git',
        ]
      },
      {
        title: 'Java',
        collapsable: true,
        children: [
		  '/docs/Java/cron表达式',
          '/docs/Java/java经典练习题',
          '/docs/Java/java面试题',
		  '/docs/Java/尚硅谷Java面试题-1'
        ]
      },
      {
        title: 'Linux',
        collapsable: true,
        children: [
          '/docs/Linux/linux',
          '/docs/Linux/centos7',
          '/docs/Linux/vim'
        ]
      },
      {
        title: 'MQ',
        collapsable: true,
        children: [
          '/docs/MQ/消息队列',
        ]
      },
      {
        title: 'MyBatis',
        collapsable: true,
        children: [
          '/docs/MyBatis/mybatis',
          '/docs/MyBatis/mybatis逆向工程'
        ]
      },
      {
        title: 'MySQL',
        collapsable: true,
        children: [
          '/docs/MySQL/50道MySQL练习题',
		      '/docs/MySQL/MySQL常用语句',
		      '/docs/MySQL/MySQL高级'
        ]
      },
      {
        title: 'Nginx',
        collapsable: true,
        children: [
          '/docs/Nginx/nginx',
        ]
      },
      {
        title: 'Redis',
        collapsable: true,
        children: [
          '/docs/Redis/redis',
        ]
      },
      {
        title: 'Spring',
        collapsable: true,
        children: [
          '/docs/Spring/spring',
        ]
      },
      {
        title: 'Spring MVC',
        collapsable: true,
        children: [
          '/docs/Spring MVC/spring mvc',
        ]
      },
      {
        title: 'SpringBoot',
        collapsable: true,
        children: [
          '/docs/SpringBoot/springboot',
        ]
      },
      {
        title: 'SpringCloud',
        collapsable: true,
        children: [
          '/docs/SpringCloud/springcloud',
        ]
      },
	  {
        title: 'Vue',
        collapsable: true,
        children: [
          '/docs/Vue/vue',
        ]
      },
	  {
        title: 'Windows',
        collapsable: true,
        children: [
          '/docs/Windows/notepad++',
		  '/docs/Windows/win系统安装'
        ]
      },
      {
        title: '其他',
        collapsable: true,
        children: [
          '/docs/其他/VIP视频解析接口',
        ]
      },
	  {
        title: 'Zookeeper',
        collapsable: true,
        children: [
          '/docs/Zookeeper/zookeeper分布式锁',
        ]
      },
      {
        title: '设计模式',
        collapsable: true,
        children: [
          '/docs/设计模式/23设计模式',
        ]
      },
      {
        title: '数据结构与算法',
        collapsable: true,
        children: [
          '/docs/数据结构与算法/数据结构与算法',
        ]
      }]
    }
  }
}
