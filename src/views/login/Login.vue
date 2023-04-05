<template>
  <div class="login">
    <h2>login</h2>
    <button @click="getData">点击登录1</button>
  </div>
</template>

<script setup lang="ts">
import instanceRequest from '@/service/index'

function getData() {
  instanceRequest
    .request({
      url: '/home/multidata'
    })
    .then((res) => {
      console.log('login res:', res)
    })
}
</script>

<style scoped lang="less"></style>
