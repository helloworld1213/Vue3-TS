<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
//报错,在env.d.ts中声明
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//配置时间为中文
</script>

<style scoped lang="less">
.app {
  width: 100vw;
  height: 100vh;
}
</style>
