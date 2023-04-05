<template>
  <div class="app">
    <h2>app</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <h2>main: {{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from './store/counter'

//调用一下获得store
const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterActions(666)
}
</script>

<style scoped lang="less"></style>
