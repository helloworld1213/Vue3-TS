import type { RouteRecordRaw } from 'vue-router'

function getLocalRoutes() {
  //1.获取本地路由,放到一个数组中
  const localRoutes: RouteRecordRaw[] = []
  //获取到本地路由(在每个单独的文件中)
  const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
    eager: true
  })

  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}
//全局的第一个匹配到的菜单(在router的导航守卫里面使用)
export let firstMenu: any = null
export function mapMenuToRoutes(roleMenus: any[]) {
  //获取本地路由
  const localRoutes = getLocalRoutes()

  //根据菜单去匹配正确的路由
  const routes: RouteRecordRaw[] = []
  for (const menu of roleMenus) {
    for (const submenu of menu.children) {
      const route = localRoutes.find((item) => item.path === submenu.url)
      if (route) {
        //给route的一级菜单添加重定向(只需要添加一次即可)
        //menu.url: 一级菜单的路径
        //routes: 所有的路由(包含一级和二级菜单)
        //找出所有的一级路由: routes.find((item) => item.path === menu.url)
        //取反表示一个一级路由都没有,没有则往里面添加
        if (!routes.find((item) => item.path === menu.url)) {
          routes.push({ path: menu.url, redirect: route.path })
        }
        //将二级菜单添加到routes里面
        routes.push(route)
      }
      //记录第一个匹配到的路由,刷新的时候/登录的时候,进入到的就是第一个记录
      //的路由页面
      if (!firstMenu && route) firstMenu = submenu
    }
  }
  // console.log(firstMenu)
  return routes
}

/**
 * 根据路径去匹配需要显示的菜单
 * @param path 需要匹配的路径
 * @param roleMenus 所有的角色菜单
 */
export function mapPathToMenu(path: string, roleMenus: any[]) {
  for (const menu of roleMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        //这里是===而不是=,所以导致刷新还是进入firstMenu
        return submenu
      }
    }
  }
}

interface IBreads {
  name: string
  path: string
}
/**
 * 根据路径匹配面包屑
 * @param path 需要匹配的路径
 * @param roleMenus 所有的角色菜单
 */
export function mapPathToBreads(path: string, roleMenus: any[]) {
  const breads: IBreads[] = []
  for (const menu of roleMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        //1.收集一级菜单(系统总览等四个)
        breads.push({ name: menu.name, path: menu.url })
        //2.收集二级菜单(核心技术等十个)
        breads.push({ name: submenu.name, path: submenu.url })
      }
    }
  }
  return breads
}
