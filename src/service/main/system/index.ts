import instanceRequest from '../..'

//查询
export function getUserListRequest(queryInfo: any) {
  return instanceRequest.post({
    url: `/users/list`,
    data: queryInfo
  })
}

//删除
export function deleteUserByIdRequest(id: number) {
  return instanceRequest.delete({
    url: `/users/${id}`
  })
}

//确认添加新用户
export function addNewUserRequest(userInfo: any) {
  return instanceRequest.post({
    url: `/users`,
    data: userInfo
  })
}

//编辑用户信息
export function editUserRequest(userInfo: any, id: number) {
  return instanceRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}
