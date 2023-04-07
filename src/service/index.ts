import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './configs'
import MyRequest from './request'
import { LOGIN_TOKEN } from '@/global/constants'

const instanceRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      //发送请求前携带token
      const token = localCache.getCache(LOGIN_TOKEN)
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export default instanceRequest
