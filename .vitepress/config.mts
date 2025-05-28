import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "机场推荐",
  description: "机场推荐",
  head: [
    // 浏览器中图标
    ["link", {rel: "icon", href: "/favicon.ico"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '🎉机场推荐', link: '/vpn/vpn' }
    ],

    sidebar: [
      {
        text: '机场推荐',
        items: [
          { text: '机场汇总', link: '/vpn/vpn' },
          { text: 'TNT', link: '/vpn/tnt.html' },
          { text: 'XSUS', link: '/vpn/机场推荐XSUS' },
          { text: 'Flybit', link: '/vpn/flybit' },
          { text: 'SSOne', link: '/vpn/ssone' },
          { text: 'XX云', link: '/vpn/机场推荐xx云' },
          { text: '九霄云', link: '/vpn/机场推荐九霄云' },
          { text: '冲上云霄', link: '/vpn/机场推荐冲上云霄' },
          { text: '加速啦', link: '/vpn/机场推荐加速啦' },
          { text: '大哥云', link: '/vpn/dgy.html' },
          { text: '好鸭云', link: '/vpn/机场推荐好鸭云' },
          { text: '掌中世界', link: '/vpn/机场推荐掌中世界' },
          { text: '灯塔Cloud', link: '/vpn/机场推荐灯塔cloud' },
          { text: '白羊星', link: '/vpn/机场推荐白羊星' },
          { text: '百变小樱', link: '/vpn/机场推荐百变小樱' },
          { text: '纵云梯', link: '/vpn/机场推荐纵云梯' },
          { text: '老头VPN', link: '/vpn/laotouvpn' },
          { text: '闪狐云', link: '/vpn/机场推荐闪狐云' },
          { text: '阿达西', link: '/vpn/机场推荐阿达西' },
          { text: '青云梯', link: '/vpn/机场推荐青云梯' },
          { text: '龙猫云', link: '/vpn/机场推荐龙猫云' }
        ]
      }
    ],

    footer: {
      message: '机场推荐',
      copyright: 'Copyright © 2023-2025 <a href="/">机场推荐</a>'
    },
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
   // 文章右侧目录展示级别和标题
   outline: {
    level: [2, 6],
    label: '文章目录'
  },
  // 文章更新时间的前缀文本
  lastUpdatedText: '最后更新时间',
  // 开启本地搜索（左上角）
  search: {
    provider: 'local',
  },
    outlineTitle: '目录导航',
    darkModeSwitchLabel: '暗黑模式',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
  },

cleanUrls: false, // 禁用干净URL，保留.html后缀
    // 站点地图
    sitemap: {
      hostname: 'https://jichangtuijian.uk'
    }
})
