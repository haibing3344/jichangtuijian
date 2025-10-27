import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "机场推荐",
  description: "2025年便宜好用的翻墙机场推荐评测,性价比机场。(长期更新 欢迎推荐）",
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
          { text: '机场汇总', link: '/vpn/vpn.md#汇总' },
          { text: '优信云', link: '/vpn/vpn.md#优信云' },
          { text: '闪狐云', link: '/vpn/shanhuyun.md' },
          { text: '扬帆云', link: '/vpn/vpn.md#扬帆云' },
          { text: 'TNT', link: '/vpn/tnt.md' },
          { text: '青云梯', link: '/vpn/qyt.md' },
          { text: '银河云', link: '/vpn/galaxycloud.md' },
          { text: 'Flybit', link: '/vpn/flybit.md' },
          { text: 'XX云', link: '/vpn/xxyun.md' },
          { text: '肥猫云', link: '/vpn/vpn.md#肥猫云' },
          { text: '魔戒', link: '/vpn/vpn.md#魔戒' },
          { text: 'CyberGuard', link: '/vpn/vpn.md#cyberguard' },
          { text: 'NanoCloud', link: '/vpn/vpn.md#nanocloud' },
          { text: '宝可梦星云', link: '/vpn/vpn.md#宝可梦星云' },
          { text: '好好云', link: '/vpn/vpn.md#好好云' },
          { text: '老百姓自己的机场', link: '/vpn/vpn.md#老百姓自己的机场' },
          { text: 'cloudfisher', link: '/vpn/vpn.md#cloudfisher' },
          { text: 'taishan', link: '/vpn/vpn.md#taishan' },
          { text: '网际快车', link: '/vpn/vpn.md#网际快车' },
          { text: '白羊星', link: '/vpn/baiyangxing.md' },
          { text: '龙猫云', link: '/vpn/longmao.md' },
          { text: '淘气兔', link: '/vpn/vpn.md#淘气兔' },
          { text: '良心云', link: '/vpn/vpn.md#良心云' },
          { text: '一分机场', link: '/vpn/1fen.md' },
          { text: 'CCYZ机场', link: '/vpn/ccyz.md' },
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
