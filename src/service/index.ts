import { BASE_URL, TIME_OUT } from './configs'
import MyRequest from './request'

const instanceRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default instanceRequest
