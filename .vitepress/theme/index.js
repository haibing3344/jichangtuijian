import DefaultTheme from 'vitepress/theme'
import './custom.css'
import "./style/index.css"; //引入自定义的样式
import "./style/pricing.css"; //引入自定义的样式
import MNavLinks from './components/MNavLinks.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MNavLinks', MNavLinks)
  }
}