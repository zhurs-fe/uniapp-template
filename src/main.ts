import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import uView from 'vk-uview-ui'
import initApp from './init'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia).use(uView)

  // 初始化配置
  initApp()

  return {
    app,
  }
}
