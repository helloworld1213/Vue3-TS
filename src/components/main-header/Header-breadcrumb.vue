<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-icon="ArrowRightBold">
      <template v-for="item in breads" :key="item.name">
        <el-breadcrumb-item :to="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { mapPathToBreads } from '../../utils/map-menus'
import { useRoute } from 'vue-router'
import useAccountLogin from '../../store/login/login'
import { computed } from 'vue'

//1.遍历获取到的breads
//1.1先获取path和roleMenus
const route = useRoute()
const roleMenusStore = useAccountLogin()
const roleMenus = roleMenusStore.roleMenus
//1.2调用mapPathToBreads函数并将参数传入
// const breads = mapPathToBreads(route.path, roleMenus)
//1.2.2使其保持响应(路径发生改变,随之变化,不然breads只在setup中执行一次)
//方法一: watch
//方法二: computed(() => {})
const breads = computed(() => {
  return mapPathToBreads(route.path, roleMenus)
})
//1.3在template中v-for遍历
</script>

<style scoped lang="less">
.breadcrumb {
  height: 100%;
  color: #000;
}
</style>
