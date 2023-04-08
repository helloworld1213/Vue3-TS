<template>
  <div class="main-aside">
    <!-- 侧边栏标题 -->
    <div class="aside-title">
      <img src="../../assets/img/logo.1829caec.svg" alt="" />
      <span>LiLei-CMS</span>
    </div>
    <!-- 侧边栏内容 -->
    <div class="content">
      <el-menu
        default-active="2"
        unique-opened
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
      >
        <template v-for="item in roleMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.substring(8)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">
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
import useAccountLogin from '@/store/login/login'
import { toRefs } from 'vue'

const { roleMenus } = toRefs(useAccountLogin())
console.log(roleMenus.value)
</script>

<style scoped lang="less">
.main-aside {
  height: 100%;
}
.aside-title {
  height: 50px;
  line-height: 50px;
  padding-left: 16px;
  background-color: #001529;
  color: #fff;

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
  border-right: none;
  user-select: none;
  background-color: #001529;

  .el-sub-menu :hover {
    background-color: #001529;
  }

  .el-menu-item {
    background-color: #0c2135;
    color: #b1b7be;
  }

  .el-menu-item:hover {
    color: #fff;
  }
  .el-menu-item.is-active {
    color: #fff;
    background-color: #0a60bd;
  }
}
</style>
