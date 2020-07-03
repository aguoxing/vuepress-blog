module.exports = {
  title: '文档',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/blogs/' },
      { text: '关于', link: '/about/' },
      { text: 'GitHub', link: 'https://github.com/aguoxing' },
    ],
    sidebar: {
      '/blogs/': [{
        title: 'CentOS7',
        collapsable: true,
        children: [
          '/blogs/CentOS7/centos7',
        ]
      },
      {
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
          '/blogs/Java/java经典练习题',
          '/blogs/Java/java面试题'
        ]
      },
      {
        title: 'Linux',
        collapsable: true,
        children: [
          '/blogs/Linux/linux',
        ]
      },
      {
        title: 'MyBatis',
        collapsable: true,
        children: [
          '/blogs/MyBatis/mybatis',
        ]
      },
      {
        title: 'MySQL',
        collapsable: true,
        children: [
          '/blogs/MySQL/50道mysql练习题',
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
      }]
    },
    lastUpdated: '最近更新',
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: false, // 默认值：true
  }
}
