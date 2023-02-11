import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import uView from 'vk-uview-ui'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia).use(uView)
  return {
    app,
  }
}
