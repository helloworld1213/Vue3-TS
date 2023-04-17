import { createPinia } from 'pinia'
import type { App } from 'vue'
import useAccountLogin from './login/login'

const pinia = createPinia()

//为了调用loadLocalCacheActions刷新加载路由函数,同时代码美观,所以调用
//放在pinia而不是main.ts里面
function registerPinia(app: App<Element>) {
  app.use(pinia)

  const loadLogin = useAccountLogin()
  loadLogin.loadLocalCacheActions()
}

//不需要导出这个了
// export default pinia
export default registerPinia
