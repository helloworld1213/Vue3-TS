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

interface ILoginState {
  token: string
  userInfo: any
  roleMenus: any
}
const useAccountLogin = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo: localCache.getCache('userInfo') ?? {},
    roleMenus: localCache.getCache('roleMenus') ?? []
  }),
  actions: {
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
      //4.页面跳转
      router.push('/main')
    }
  }
})

export default useAccountLogin
