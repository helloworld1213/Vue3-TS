<template>
  <div class="panel-phone">
    <el-form
      ref="phoneFormRef"
      :model="phoneForm"
      :rules="phoneFormRules"
      label-width="80px"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input type="text" v-model="phoneForm.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="verify-code">
          <el-input type="password" v-model="phoneForm.code" />
          <span>
            <el-button type="primary">获取验证码</el-button>
          </span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const phoneFormRef = ref()
const phoneForm = reactive({
  phone: '',
  code: ''
})
const phoneFormRules = reactive({
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})
</script>

<style scoped lang="less">
.verify-code {
  display: flex;
}
.el-button {
  margin-left: 8px;
}
</style>
