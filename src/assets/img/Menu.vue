<template>
  <div class="main-menu">
    <!-- 顶部标题 -->
    <div class="aside-title">
      <img src="@/assets/img/logo.1829caec.svg" alt="" />
      <span v-show="!isFoldMenu">Coderwhy-CMS</span>
    </div>
    <!-- 底部内容 -->
    <div class="aside-content">
      <el-menu
        :default-active="defaultActive"
        unique-opened
        :collapse="isFoldMenu"
      >
        <template v-for="item in userMenu" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- 动态展示图标 -->
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="changePath(subItem)"
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
import useAccountStore from '@/store/login/login'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'
import { mapPathToMenu } from '../../utils/map-menus'

defineProps({
  isFoldMenu: {
    type: Boolean,
    default: false
  }
})

const accountStore = useAccountStore()

const userMenu = accountStore.userMenu
// console.log(userMenu)
//这里是路由间跳转,所以是router, 路由内则是route
const router = useRouter()
function changePath(item: any) {
  // console.log(item)
  const url = item.url
  router.push(url)
}

//ElMenu默认菜单
const route = useRoute()
// console.log(route.path)
//在这里使用根据路径匹配需要显示的菜单的函数
// const pathMenu = mapPathToMenu(route.path, userMenu)

// const defaultActive = ref(firstMenu.id + '')
// const defaultActive = ref(pathMenu.id + '')

const defaultActive = computed(() => {
  const pathMenu = mapPathToMenu(route.path, userMenu)
  return pathMenu.id + ''
})
</script>

<style scoped lang="less">
.aside-title {
  height: 50px;
  line-height: 50px;
  padding-left: 8px;
  background-color: #001529;

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
  // color: #fff;
  background-color: #001529;
  border-right: none; //取消侧边栏的右部1px的边框

  .el-sub-menu :hover {
    background-color: #001529;
  }
  .el-menu--inline .is-active {
    background-color: #0a60bd;
    // color: #b1b7be;
    color: #fff;
  }

  .el-menu-item {
    background-color: #0c2135;
    color: #b1b7be;
  }

  .el-menu-item :hover {
    // background-color: #0c2135;
    color: #fff;
  }
}
</style>
