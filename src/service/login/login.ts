import instanceRequest from '@/service'
import type { IAccount } from '@/types/login'

export function accountLoginRequest(account: IAccount) {
  return instanceRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoByIdRequest(id: number) {
  return instanceRequest.get({
    url: `/users/${id}`
  })
}

export function getRoleMenusRequest(id: number) {
  return instanceRequest.get({
    url: `/role/${id}/menu`
  })
}
