<template>
  <div class="user">
    <User-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></User-search>
    <user-content
      ref="userContentRef"
      @add-user-click="handleAddUser"
      @edit-click="handleEdit"
    ></user-content>
    <user-modal ref="userModalRef"></user-modal>
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/User-search.vue'
import UserContent from './c-cpns/User-content.vue'
import UserModal from './c-cpns/User-modal.vue'
import { ref } from 'vue'

//1.拿到userContent组件,获取到它向外暴露的方法
const userContentRef = ref<InstanceType<typeof UserContent>>()
//点击获取查询结果并在userContent组件展示
function handleQueryClick(searchQueryInfo: any) {
  // console.log(searchQueryInfo)
  userContentRef.value?.fetchUserListData(searchQueryInfo)
}
//search重置操作
function handleResetClick() {
  userContentRef.value?.fetchUserListData()
}
//2.控制modal的显示与隐藏
const userModalRef = ref<InstanceType<typeof UserModal>>()
//新建用户
function handleAddUser() {
  userModalRef.value?.isDialogShow()
}
//3.编辑用户
function handleEdit(payload: any) {
  // console.log(payload)
  userModalRef.value?.isDialogShow(false, payload)
}
</script>

<style scoped lang="less"></style>
