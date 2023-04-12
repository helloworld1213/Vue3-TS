<template>
  <div class="main-header">
    <div class="main-icon" @click="changeIcon">
      <el-icon>
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <header-breadcrumb></header-breadcrumb>
      <header-info></header-info>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderBreadcrumb from './Header-breadcrumb.vue'
import { ref } from 'vue'

const isFold = ref(false)
const emit = defineEmits(['changeIcon'])
function changeIcon() {
  isFold.value = !isFold.value
  emit('changeIcon', isFold.value)
}
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  align-items: center;
  height: 100%;
}
.main-icon {
  font-size: 28px;
  margin-right: 20px;
  margin-top: 3px;
}
.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}
</style>
