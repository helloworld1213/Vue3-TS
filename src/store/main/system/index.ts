import {
  deleteUserByIdRequest,
  getUserListRequest,
  addNewUserRequest,
  editUserRequest,
  getPageListRequest,
  addPageListRequest,
  deletePageListRequest,
  editPageListRequest
} from '@/service/main/system/index'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import type { ISystemState } from '../type'
import useRoleListStore from '../main'

const useUserList = defineStore('userList', {
  state: (): ISystemState => ({
    userList: [],
    userTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),
  actions: {
    // 查询用户列表
    async getUserListActions(queryInfo: any) {
      const userListResult = await getUserListRequest(queryInfo)
      // console.log(userListResult)
      const { list, totalCount } = userListResult.data
      this.userList = list
      this.userTotalCount = Number(totalCount)
    },
    //确认删除用户
    async deleteUserByIdAction(id: number) {
      const deleteResult = await deleteUserByIdRequest(id)

      this.getUserListActions({ offset: 0, size: 10 })
    },
    //确认添加新用户
    async addNewUserAction(userInfo: any) {
      //1.发送请求确认添加新用户
      const addNewUserResult = await addNewUserRequest(userInfo)

      //2.刷新重新请求数据
      this.getUserListActions({ offset: 0, size: 10 })
    },
    //确认编辑用户信息
    async editUserAction(userInfo: any, id: number) {
      //1.编辑数据
      const editUserResult = await editUserRequest(userInfo, id)

      //2.刷新重新请求数据
      this.getUserListActions({ offset: 0, size: 10 })
    },

    // page页面信息
    //page页面查询信息
    async getPageListAction(pageName: string, queryInfo: any) {
      const pageListResult = await getPageListRequest(pageName, queryInfo)
      this.pageList = pageListResult.data.list
      // console.log(pageListResult)
      this.pageTotalCount = Number(pageListResult.data.totalCount)
      // console.log(typeof this.pageTotalCount) //查看一下totalCount的类型
    },
    //page页面添加信息
    async addPageListAction(pageName: string, pageInfo: any) {
      //1.添加信息
      const addPageListResult = await addPageListRequest(pageName, pageInfo)

      //2.重新请求数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })

      //3.获取完整数据
      const mainStore = useRoleListStore()
      mainStore.getListAction()
    },
    //page页面删除信息
    async deletePageListAction(pageName: string, id: number) {
      //1.删除信息
      const deletePageListResult = await deletePageListRequest(pageName, id)

      // 2.重新请求数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })

      //3.获取完整数据
      const mainStore = useRoleListStore()
      mainStore.getListAction()
    },
    //page页面编辑信息
    async editPageListAction(pageName: string, id: number, pageInfo: any) {
      //1.编辑page信息
      const editPageListResult = await editPageListRequest(
        pageName,
        id,
        pageInfo
      )
      //2.重新请求数据
      this.getPageListAction(pageName, { offset: 0, size: 10 })

      //3.获取完整数据
      const mainStore = useRoleListStore()
      mainStore.getListAction()
    }
  }
})

export default useUserList
