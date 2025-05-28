import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "机场推荐",
  description: "2025年便宜好用的翻墙机场推荐评测(长期更新 欢迎推荐",
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
          { text: 'XSUS', link: '/vpn/XSUS' },
          { text: 'Flybit', link: '/vpn/flybit' },
          { text: 'SSOne', link: '/vpn/ssone' },
          { text: 'XX云', link: '/vpn/xxyun' },
          { text: '九霄云', link: '/vpn/jiuxiao' },
          { text: '冲上云霄', link: '/vpn/chongshangyunxiao' },
          { text: '加速啦', link: '/vpn/jiasula' },
          { text: '大哥云', link: '/vpn/dgy.html' },
          { text: '好鸭云', link: '/vpn/duck' },
          { text: '掌中世界', link: '/vpn/zzsj' },
          { text: '灯塔Cloud', link: '/vpn/dengta' },
          { text: '白羊星', link: '/vpn/baiyangxing' },
          { text: '百变小樱', link: '/vpn/baibianxiaoying' },
          { text: '纵云梯', link: '/vpn/zongyunti' },
          { text: '老头VPN', link: '/vpn/laotouvpn' },
          { text: '闪狐云', link: '/vpn/shanhuyun' },
          { text: '阿达西', link: '/vpn/adaxi' },
          { text: '青云梯', link: '/vpn/qyt' },
          { text: '龙猫云', link: '/vpn/longmao' }
        ]
      }
    ],

    footer: {
      message: '2025年便宜好用的翻墙机场推荐评测(长期更新 欢迎推荐)',
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
