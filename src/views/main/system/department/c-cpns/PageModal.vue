<template>
  <div class="modal">
    <el-dialog
      v-model="pageFormDialogVisible"
      :title="isNewRef ? '新建部门' : '编辑部门'"
      width="30%"
      center
    >
      <el-form :model="pageForm" label-width="80px" size="large">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="pageForm.name" placeholder="请输入部门名称" />
        </el-form-item>
        <el-form-item label="部门领导" prop="leader">
          <el-input v-model="pageForm.leader" placeholder="请输入部门领导" />
        </el-form-item>
        <el-form-item label="上级部门" prop="parentId">
          <el-select
            v-model="pageForm.parentId"
            placeholder="请选择上级部门"
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
          <el-button @click="pageFormDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addPageConfirm"> 确认 </el-button>
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
const pageFormDialogVisible = ref(false)
const pageForm = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})
//通过isNewRef可以控制展示的是编辑对话框还是新建用户对话框
const isNewRef = ref(true)
const payloadId = ref()
//2.获取角色列表信息
const roleListStore = useRoleListStore()
const { departmentList } = storeToRefs(roleListStore)

//3.确认添加新用户
const userListStore = useUserList()
function addPageConfirm() {
  //1.调用action
  if (!isNewRef.value && payloadId.value) {
    userListStore.editPageListAction('department', payloadId.value.id, pageForm)
  } else {
    userListStore.addPageListAction('department', pageForm)
  }

  //2.关闭dialog对话框
  pageFormDialogVisible.value = false
}

//向外暴露(尽可能暴露函数)
//isNew判断是否是新建用户,false则为编辑用户
function isDialogShow(isNew: boolean = true, payload?: any) {
  //1.控制对话框得到显示与隐藏
  pageFormDialogVisible.value = true
  //2.遍历payload,将获取到的值赋值给userForm的每一项
  //将isNew的值赋值给isNewRef
  isNewRef.value = isNew
  // //如果是编辑用户且payload有值
  if (!isNew && payload) {
    for (const key in pageForm) {
      //如果是编辑用户,则将获取到的值赋值给pageForm的每一项
      pageForm[key] = payload[key]
    }
    payloadId.value = payload
  } else {
    for (const key in pageForm) {
      //如果是新建用户,则清空每一项
      pageForm[key] = ''
    }
    payloadId.value = null
  }
}
defineExpose({
  isDialogShow
})
</script>

<style scoped lang="less"></style>
