<template>
  <div class="header-drop">
    <el-dropdown>
      <div class="content">
        <el-avatar
          :size="38"
          src="https://img2.baidu.com/it/u=3583477922,4044466710&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        />
        <span>{{ loginStore.userInfo.name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="layout">
            <el-icon><CircleClose /></el-icon>
            <span>退出登录</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><InfoFilled /></el-icon>
            <span>个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Unlock /></el-icon>
            <span>修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '../../utils/cache'
import { LOGIN_TOKEN } from '../../global/constants'
import { useRouter } from 'vue-router'
import useAccountLogin from '../../store/login/login'

const router = useRouter()
function layout() {
  //1.清空token
  localCache.removeCache(LOGIN_TOKEN)
  //2.退出到login页面
  router.push('/login')
}

//2.根据登录名显示同样的名字
const loginStore = useAccountLogin()
</script>

<style scoped lang="less">
.content {
  display: flex;
  align-items: center;
  margin: 0 20px;
  .el-avatar {
    // width: 30px;
    // height: 30px;
    // border-radius: 50%;
    margin-right: 15px;
  }
}

//不在app里面渲染,而是在app外面渲染,使用global
// :deep(.el-dropdown-menu__item) {
//   padding: 6px 22px;
// }
:global(.el-dropdown-menu__item) {
  padding: 6px 22px;
}
</style>
