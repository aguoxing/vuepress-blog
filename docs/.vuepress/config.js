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
      { text: '文章', link: '/blogs/' },
      { text: '关于', link: '/about/' },
      {
        text: '链接',
        items: [
          { text: 'GitHub', link: 'https://github.com/aguoxing' },
          { text: 'Gitee', link: 'https://gitee.com/aguoxing' },
          { text: 'QQ', link: 'http://sighttp.qq.com/authd?IDKEY=73a6878f272caac4245dce5ad8e38afa940eb94ca6128183' }
        ]
      }
    ],
    sidebar: {
      '/blogs/': [{
        title: 'Docker',
        collapsable: true,
        children: [
          '/blogs/Docker/docker',
        ]
      },
      {
        title: 'Dubbo',
        collapsable: true,
        children: [
          '/blogs/Dubbo/dubbo',
        ]
      },
      {
        title: 'Git',
        collapsable: true,
        children: [
          '/blogs/Git/git',
        ]
      },
      {
        title: 'Java',
        collapsable: true,
        children: [
		  '/blogs/Java/cron表达式',
          '/blogs/Java/java经典练习题',
          '/blogs/Java/java面试题',
		  '/blogs/Java/尚硅谷Java面试题-1'
        ]
      },
      {
        title: 'Linux',
        collapsable: true,
        children: [
          '/blogs/Linux/linux',
          '/blogs/Linux/centos7',
          '/blogs/Linux/vim'
        ]
      },
      {
        title: 'MQ',
        collapsable: true,
        children: [
          '/blogs/MQ/消息队列',
        ]
      },
      {
        title: 'MyBatis',
        collapsable: true,
        children: [
          '/blogs/MyBatis/mybatis',
          '/blogs/MyBatis/mybatis逆向工程'
        ]
      },
      {
        title: 'MySQL',
        collapsable: true,
        children: [
          '/blogs/MySQL/50道MySQL练习题',
		  '/blogs/MySQL/MySQL常用语句',
		  '/blogs/MySQL/MySQL高级'
        ]
      },
      {
        title: 'Nginx',
        collapsable: true,
        children: [
          '/blogs/Nginx/nginx',
        ]
      },
      {
        title: 'Redis',
        collapsable: true,
        children: [
          '/blogs/Redis/redis',
        ]
      },
      {
        title: 'Spring',
        collapsable: true,
        children: [
          '/blogs/Spring/spring',
        ]
      },
      {
        title: 'Spring MVC',
        collapsable: true,
        children: [
          '/blogs/Spring MVC/spring mvc',
        ]
      },
      {
        title: 'SpringBoot',
        collapsable: true,
        children: [
          '/blogs/SpringBoot/springboot',
        ]
      },
      {
        title: 'SpringCloud',
        collapsable: true,
        children: [
          '/blogs/SpringCloud/springcloud',
        ]
      },
	  {
        title: 'Vue',
        collapsable: true,
        children: [
          '/blogs/Vue/vue',
        ]
      },
	  {
        title: 'Windows',
        collapsable: true,
        children: [
          '/blogs/Windows/notepad++',
		  '/blogs/Windows/win系统安装'
        ]
      },
      {
        title: '其他',
        collapsable: true,
        children: [
          '/blogs/其他/VIP视频解析接口',
        ]
      },
	  {
        title: 'Zookeeper',
        collapsable: true,
        children: [
          '/blogs/Zookeeper/zookeeper分布式锁',
        ]
      },
      {
        title: '设计模式',
        collapsable: true,
        children: [
          '/blogs/设计模式/23设计模式',
        ]
      },
      {
        title: '数据结构与算法',
        collapsable: true,
        children: [
          '/blogs/数据结构与算法/数据结构与算法',
        ]
      }]
    }
  }
}
