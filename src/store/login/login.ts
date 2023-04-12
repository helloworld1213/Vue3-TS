import { defineStore } from 'pinia'
import {
  accountLoginRequest,
  getRoleMenusRequest,
  getUserInfoByIdRequest
} from '@/service/login/login'
import type { IAccount } from '@/types/login'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'
import { mapMenuToRoutes } from '@/utils/map-menus'

interface ILoginState {
  token: string
  userInfo: any
  roleMenus: any
}
const useAccountLogin = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    roleMenus: []
  }),
  actions: {
    //登录
    async accountLoginActions(account: IAccount) {
      //1.请求数据
      const loginResult = await accountLoginRequest(account)
      // console.log(loginResult)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      const name = loginResult.data.name

      //2.存储数据
      localCache.setCache(LOGIN_TOKEN, this.token)

      //3.1根据id获取用户详细信息(role)
      const userInfoResult = await getUserInfoByIdRequest(id)
      // console.log(userInfoResult)
      this.userInfo = userInfoResult.data
      //缓存数据
      localCache.setCache('userInfo', this.userInfo)
      //3.2根据用户id获取权限
      const roleMenusResult = await getRoleMenusRequest(id)
      // console.log(roleMenusResult)
      this.roleMenus = roleMenusResult.data
      //缓存数据
      localCache.setCache('roleMenus', this.roleMenus)

      //4.动态添加路由
      //4.1动态的获取到路由对象,放到数组中
      //*路由对象都在独立的文件中
      //*从文件中将所有的路由对象先读取到数组中
      // const localRoutes: RouteRecordRaw[] = []
      // //*.ts:所有的.ts结尾的文件
      // const files: Record<string, any> = import.meta.glob(
      //   '@/router/main/**/*.ts',
      //   { eager: true }
      // )
      // // console.log(files)
      // //遍历files,拿到default
      // for (const key in files) {
      //   const module = files[key]
      //   //files类型是Record<string, unknown>,即
      //   //module是unknown类型,unknown类型上做任何事情都是
      //   //违法的,所以要对file做一下类型处理,将第二个值变成any即可
      //   // console.log(module.default)
      //   //将得到的路径添加到localRoutes中
      //   localRoutes.push(module.default)
      // }
      // for (const itme of this.roleMenus) {
      //   for (const subItem of itme.children) {
      //     const route = localRoutes.find((item) => item.path === subItem.url)
      //     // router.addRoute('xxx')前不带'/',父路由(即main)里面写name
      //     //不然路由添加到全局去了
      //     if (route) router.addRoute('main', route)
      //   }
      // }

      const routes = mapMenuToRoutes(this.roleMenus)
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
      //5.页面跳转
      router.push('/main')
    },

    //1.刷新时重新加载数据(保证刷新时有路由数据)
    //2.调用(在main.ts里面)
    loadLocalCacheActions() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache('userInfo')
      const roleMenus = localCache.getCache('roleMenus')

      if (token && userInfo && roleMenus) {
        this.token = token
        this.userInfo = userInfo
        this.roleMenus = roleMenus

        //动态添加路由
        const routes = mapMenuToRoutes(this.roleMenus)
        routes.forEach((route) => router.addRoute('main', route))
      }
    }
  }
})

export default useAccountLogin
