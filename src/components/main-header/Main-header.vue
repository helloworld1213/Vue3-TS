<template>
  <div class="main-header">
    <div class="left-content">
      <el-icon><Expand /></el-icon>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{ path: '/' }">系统总览</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right-content">
      <div class="left-part">
        <span
          ><el-icon><Bell /></el-icon
        ></span>
        <span>
          <el-icon><ChatDotRound /></el-icon>
        </span>
        <span>
          <el-icon><Postcard /></el-icon>
          <i class="notice"></i>
        </span>
      </div>
      <div class="right-part">
        <img src="../../assets/img/avatar-info.webp" alt="" />
        <span>lilei</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.main-header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-content {
  display: flex;
  height: 100%;
  align-items: center;
  color: #000;
  .el-icon {
    font-size: 30px;
    margin-right: 20px;
  }
}

.right-content {
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
  .right-part {
    display: flex;
    align-items: center;
    margin: 0 20px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
}
</style>
