import { defineStore } from 'pinia'
import {
  getRoleListRequest,
  getDepartmentListRequest
} from '@/service/main/main'

interface ISystemState {
  roleList: any[]
  departmentList: any[]
}
const useRoleListStore = defineStore('roleList', {
  state: (): ISystemState => ({
    roleList: [],
    departmentList: []
  }),
  actions: {
    //获取角色列表和部门列表
    async getListAction() {
      const roleListResult = await getRoleListRequest()
      const departmentListResult = await getDepartmentListRequest()
      this.roleList = roleListResult.data.list
      this.departmentList = departmentListResult.data.list
    }
  }
})

export default useRoleListStore
