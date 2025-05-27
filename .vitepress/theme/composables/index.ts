import DefaultTheme from 'vitepress/theme';
export * from './useFormatPath'
export * from './useMediumZoom'
export * from './usePageId'
import comment from "../components/gitalk.vue";// 引入这一段
import './custom.css';
import './custom2.css';

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx)
      ctx.app.component("gitalk", comment)// 引入这一段
    },
  };