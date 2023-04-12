<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isFoldMain ? '60px' : '210px'">
        <main-aside :is-fold-main="isFoldMain"></main-aside>
      </el-aside>
      <el-container>
        <el-header>
          <main-header @change-icon="getIconValue"></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '../../utils/cache'
import { LOGIN_TOKEN } from '../../global/constants'
import { useRouter } from 'vue-router'
import MainAside from '@/components/main-menu/Main-aside.vue'
import MainHeader from '@/components/main-header/Main-header.vue'
import { ref } from 'vue'

//vue2中使用路由的方式是: this.$router/this.$router
//Vue3中与之对应的就是: useRouter/useRoute
const router = useRouter()
//退出登录
function btnClick() {
  //1.删除token
  localCache.removeCache(LOGIN_TOKEN)
  //2.跳转到登录页
  router.push('/login')
}

//改变aside显示
const isFoldMain = ref(false)
function getIconValue(payload: boolean) {
  isFoldMain.value = payload
}
</script>

<style scoped lang="less">
.main {
  height: 100%;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  background-color: #fff;
  background-color: #0c2135;
  transition: 0.3s linear;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.main-container {
  height: 100%;

  .el-header {
    height: 50px;
  }
}
</style>
