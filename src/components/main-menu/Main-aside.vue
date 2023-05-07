<template>
  <div class="main-aside">
    <!-- 侧边栏标题 -->
    <div class="aside-title">
      <img src="../../assets/img/logo.1829caec.svg" alt="" />
      <span v-show="!isFoldMain">后台管理系统-CMS</span>
    </div>
    <!-- 侧边栏内容 -->
    <div class="content">
      <el-menu
        :default-active="defaultActive"
        unique-opened
        :collapse="isFoldMain"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <template v-for="item in roleMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.substring(8)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                @click="changePath(subItem)"
                :index="subItem.id + ''"
              >
                {{ subItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAccountLogin from '@/store/login/login'
import { toRefs, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { firstMenu, mapPathToMenu } from '../../utils/map-menus'

//1.获取动态菜单
// const { roleMenus } = toRefs(useAccountLogin())
const accountLoginStore = useAccountLogin()
const roleMenus = accountLoginStore.roleMenus

//2.点击item菜单时跳转
const router = useRouter()
function changePath(item: any) {
  // console.log(item)
  const url = item.url
  router.push(url)
}

//3.默认菜单跳转
//两种情况:
//1.首次登录,默认跳转到firstMenu
//2.已经登录了,然后在某个item下面刷新了,这时候还是跳转到firstMenu就
//不合适了,而是应该刷新后还是在某个item下面,这里就用到了useRoute
const route = useRoute()
// console.log(route)//可以刷新查看
// const defaultActive = ref(firstMenu.id + '')

// const pathMenu = mapPathToMenu(route.path, roleMenus)
// const defaultActive = ref(pathMenu.id + '')
//mapPathToMenu()方法里面'==='写成了'=',导致方法不生效,所以
//刷新还是进入firstMenu

//3.当点击面包屑的第一级菜单时,让它跳转到二级菜单的第一项
//但是,页面发生变化了,item没有变化,因为不是响应式的
const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, roleMenus)
  return pathMenu.id + ''
})
defineProps({
  isFoldMain: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="less">
.main-aside {
  height: 100%;
}
.aside-title {
  height: 50px;
  line-height: 50px;
  padding-left: 16px;
  background-color: #001529;
  color: #fff;

  img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }

  span {
    margin-left: 8px;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
  background-color: #001529;

  .el-sub-menu :hover {
    background-color: #001529;
  }

  .el-menu-item {
    background-color: #0c2135;
    color: #b1b7be;
  }

  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-active {
    color: #fff;
    background-color: #0a60bd;
  }
}
</style>
