import { createPinia } from 'pinia'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // 在存储变化的时候执行
  })
  store.$onAction(() => {
    // 在 action 的时候执行
  })
})

export default pinia
