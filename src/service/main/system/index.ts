import instanceRequest from '../..'

//查询用户信息
export function getUserListRequest(queryInfo: any) {
  return instanceRequest.post({
    url: `/users/list`,
    data: queryInfo
  })
}

//删除用户信息
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

//page信息
//传入pageName,保证通用性
//查询page信息
export function getPageListRequest(pageName: string, queryInfo: any) {
  return instanceRequest.post({
    url: `/${pageName}/list`,
    data: queryInfo
  })
}

//添加page信息
export function addPageListRequest(pageName: string, queryInfo: any) {
  return instanceRequest.post({
    url: `/${pageName}`,
    data: queryInfo
  })
}

//删除page信息
export function deletePageListRequest(pageName: string, id: number) {
  return instanceRequest.delete({
    url: `/${pageName}/${id}`
  })
}

//编辑page信息
export function editPageListRequest(
  pageName: string,
  id: number,
  pageInfo: any
) {
  return instanceRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
