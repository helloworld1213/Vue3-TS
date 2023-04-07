<template>
  <div class="panel-account">
    <el-form
      ref="accountFormRef"
      :model="accountForm"
      :rules="accountFormRules"
      label-width="60px"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ElForm, FormRules } from 'element-plus'
import useAccountLogin from '@/store/login/login'
import type { IAccount } from '@/types/login'
import { localCache } from '../../../utils/cache'

const accountLoginStore = useAccountLogin()
//获取到表单
const accountFormRef = ref<InstanceType<typeof ElForm>>()
//定义表单内容
const accountForm = reactive<IAccount>({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
//定义校验规则
const accountFormRules: FormRules = reactive({
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '以数字和字母开头,长度是6到20位',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,}/,
      message: '长度必须是6位以上',
      trigger: 'blur'
    }
  ]
})

//获取到输入的数据
function getAccountData(isRemPwd: boolean) {
  //进行验证,如果验证不通过,不能使用
  accountFormRef.value?.validate((valid) => {
    if (valid) {
      // console.log('验证通过')
      //1.获取数据
      const name = accountForm.name
      const password = accountForm.password
      //2.发送请求(数据保存在store里面)
      accountLoginStore.accountLoginActions({ name, password }).then((res) => {
        //3.判断是否需要记住密码
        if (isRemPwd) {
          localCache.setCache('name', name)
          localCache.setCache('password', password)
        } else {
          localCache.removeCache('name')
          localCache.removeCache('password')
        }
      })
    } else {
      // console.log('验证失败')
      // 验证失败信息提醒
      ElMessage.error('Oops, 请校验正确后再操作')
    }
  })
}
defineExpose({
  getAccountData
})
</script>

<style scoped lang="less"></style>
