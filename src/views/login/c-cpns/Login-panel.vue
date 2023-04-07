<template>
  <div class="login-panel">
    <!-- 顶部标题 -->
    <h2>后台管理系统</h2>
    <!-- 中间tabs -->
    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="帐号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <panel-account ref="accountDataRef"></panel-account>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <panel-phone></panel-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部 -->
    <div class="psw">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="default" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="login-btn">
      <el-button type="primary" size="large" @click="btnClick">
        立即登录
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import panelAccount from '@/views/login/c-cpns/panel-account.vue'
import panelPhone from '@/views/login/c-cpns/panel-phone.vue'
import { localCache } from '../../../utils/cache'

const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
//监听记住密码状态的改变
watch(isRemPwd, (newVal) => {
  // console.log(newVal)
  localCache.setCache('isRemPwd', newVal)
})
const activeName = ref('account')
const accountDataRef = ref<InstanceType<typeof panelAccount>>()

function btnClick() {
  if (activeName.value === 'account') {
    // console.log('用户正在进行账号登录')
    accountDataRef.value?.getAccountData(isRemPwd.value)
  } else {
    console.log('用户正在进行手机登录')
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 330px;
  font-size: 14px;
}
h2 {
  text-align: center;
}
.psw {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
.el-button--large {
  width: 100%;
}

.label {
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  margin-left: 8px;
}
</style>
