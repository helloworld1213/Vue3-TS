import useAccountLogin from '@/store/login/login'
import { storeToRefs } from 'pinia'

/**
 *
 * @param permissionsId 一个标识
 */
function usePermissions(permissionsId: string) {
  const permissionsStore = useAccountLogin()
  const { permissions } = storeToRefs(permissionsStore)

  // return permissions.value.find((item) => item.includes(permissionsId))
  //要求拿到布尔类型
  return !!permissions.value.find((item) => item.includes(permissionsId))
}

export default usePermissions
