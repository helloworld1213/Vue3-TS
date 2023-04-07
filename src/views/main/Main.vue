<template>
  <div class="main">
    <h2>main</h2>
    <button @click="btnClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '../../utils/cache'
import { LOGIN_TOKEN } from '../../global/constants'
import { useRouter } from 'vue-router'

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
</script>

<style scoped lang="less"></style>
