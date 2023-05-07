import { defineStore } from 'pinia'
import {
  getRoleListRequest,
  getDepartmentListRequest,
  getMenuListRequest
} from '@/service/main/main'
import menu from '@/router/main/system/menu/menu'

interface ISystemState {
  roleList: any[]
  departmentList: any[]
  menuList: any[]
}
const useRoleListStore = defineStore('roleList', {
  state: (): ISystemState => ({
    roleList: [],
    departmentList: [],
    menuList: []
  }),
  actions: {
    //获取角色列表和部门列表he菜单列表
    async getListAction() {
      const roleListResult = await getRoleListRequest()
      const departmentListResult = await getDepartmentListRequest()
      const menuListResult = await getMenuListRequest()
      this.roleList = roleListResult.data.list
      this.departmentList = departmentListResult.data.list
      this.menuList = menuListResult.data.list
    }
  }
})

export default useRoleListStore
