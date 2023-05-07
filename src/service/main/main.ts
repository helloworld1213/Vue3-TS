import instanceRequest from '@/service'

//获取角色列表信息
export function getRoleListRequest() {
  return instanceRequest.post({
    url: '/role/list'
  })
}

//获取部门列表信息
export function getDepartmentListRequest() {
  return instanceRequest.post({
    url: '/department/list'
  })
}

//获取菜单列表信息
export function getMenuListRequest() {
  return instanceRequest.post({
    url: '/menu/list'
  })
}
