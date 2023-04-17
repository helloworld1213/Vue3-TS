<template>
  <div class="info">
    <div class="left-part">
      <span>
        <el-icon><Bell /></el-icon>
      </span>
      <span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Postcard /></el-icon>
        <i class="notice"></i>
      </span>
    </div>
    <div class="right-part">
      <header-drop></header-drop>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderDrop from './Header-drop.vue'
</script>

<style scoped lang="less">
.info {
  display: flex;

  .left-part {
    font-size: 20px;
    line-height: 35px;
    text-align: center;

    span {
      display: inline-block;
      width: 40px;
      height: 35px;
      position: relative;
    }

    .notice {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: red;
    }
  }
}
</style>
