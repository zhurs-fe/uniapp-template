import axios from 'axios'
import { UniAdapter } from 'uniapp-axios-adapter'

let TOKEN_KEY = 'x-token' // TODO 根据自己后端配置

// 设置表单类型
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const baseURL = import.meta.env.VITE_API_HOST

const request = axios.create({
  baseURL,
  adapter: UniAdapter,
  timeout: 5000,
})

// request请求拦截器
request.interceptors.request.use(
  (config: any) => {
    config.headers['Authorization'] = uni.getStorageSync(TOKEN_KEY)

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// request响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response
      return Promise.resolve(data)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    const status = error.status
    switch (status) {
      case 401:
        break

      default:
        uni.showToast({
          title: '请求失败，请稍后重试',
          duration: 3000,
        })
        break
    }
    return Promise.reject(error)
  }
)

export default request
