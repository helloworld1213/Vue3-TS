import {
  deleteUserByIdRequest,
  getUserListRequest,
  addNewUserRequest,
  editUserRequest
} from '@/service/main/system/index'
import { localCache } from '@/utils/cache'
import { defineStore } from 'pinia'
import type { ISystemState } from '../type'

const useUserList = defineStore('userList', {
  state: (): ISystemState => ({
    userList: [],
    userTotalCount: 0
  }),
  actions: {
    // 查询用户列表
    async getUserListActions(queryInfo: any) {
      const userListResult = await getUserListRequest(queryInfo)
      // console.log(userListResult)
      const { list, totalCount } = userListResult.data
      this.userList = list
      this.userTotalCount = totalCount
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
    }
  }
})

export default useUserList
