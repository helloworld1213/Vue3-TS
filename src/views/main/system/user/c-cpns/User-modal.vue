<template>
  <div class="modal">
    <el-dialog
      v-model="userFormDialogVisible"
      :title="isNewRef ? '新建用户' : '编辑用户'"
      width="30%"
      center
    >
      <el-form :model="userForm" label-width="80px" size="large">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userForm.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="userForm.realname" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item v-if="isNewRef" label="password" prop="password">
          <el-input
            v-model="userForm.password"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item label="电话号码" prop="cellphone">
          <el-input v-model="userForm.cellphone" placeholder="请输入电话号码" />
        </el-form-item>
        <el-form-item label="选择角色" prop="roleId">
          <el-select
            v-model="userForm.roleId"
            placeholder="请选择角色"
            style="width: 100%"
          >
            <template v-for="item in roleList" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门" prop="departmentId">
          <el-select
            v-model="userForm.departmentId"
            placeholder="请选择部门"
            style="width: 100%"
          >
            <template v-for="item in departmentList" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="userFormDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addUserConfirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useRoleListStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import useUserList from '@/store/main/system/index'

//1.设置控制对话框的显示与隐藏的属性
const userFormDialogVisible = ref(false)
const userForm = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})
//通过isNewRef可以控制展示的是编辑对话框还是新建用户对话框
const isNewRef = ref(true)
const payloadId = ref()
//2.获取角色列表信息
const roleListStore = useRoleListStore()
const { roleList, departmentList } = storeToRefs(roleListStore)

//3.确认添加新用户
const userListStore = useUserList()
function addUserConfirm() {
  //1.调用action
  if (!isNewRef.value && payloadId.value) {
    userListStore.editUserAction(userForm, payloadId.value.id)
  } else {
    userListStore.addNewUserAction(userForm)
  }

  //2.关闭dialog对话框
  userFormDialogVisible.value = false
}

//向外暴露(尽可能暴露函数)
//isNew判断是否是新建用户,false则为编辑用户
function isDialogShow(isNew: boolean = true, payload?: any) {
  //1.控制对话框得到显示与隐藏
  userFormDialogVisible.value = true
  //2.遍历payload,将获取到的值赋值给userForm的每一项
  //将isNew的值赋值给isNewRef
  isNewRef.value = isNew
  // //如果是编辑用户且payload有值
  if (!isNew && payload) {
    for (const key in userForm) {
      //如果是编辑用户,则将获取到的值赋值给userForm的每一项
      userForm[key] = payload[key]
    }
    payloadId.value = payload
  } else {
    for (const key in userForm) {
      //如果是新建用户,则清空每一项
      userForm[key] = ''
    }
    payloadId.value = null
  }
}
defineExpose({
  isDialogShow
})
</script>

<style scoped lang="less"></style>
