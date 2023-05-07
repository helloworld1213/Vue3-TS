<template>
  <div class="user">
    <!-- <User-search
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></User-search> -->
    <!-- <user-content
      ref="userContentRef"
      @add-user-click="handleAddUser"
      @edit-click="handleEdit"
    ></user-content> -->
    <!-- <user-modal ref="userModalRef"></user-modal> -->

    <!-- page改写 -->
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></page-search>
    <page-content
      :content-config="contentConfig"
      ref="pageContentRef"
      @add-page-click="handleAddPageClick"
      @edit-page-click="handleEditPageClick"
    ></page-content>
    <page-modal ref="pageModalRef" :modal-config="modalConfigRef"></page-modal>
  </div>
</template>

<script setup lang="ts">
// import UserSearch from './c-cpns/User-search.vue'
import PageSearch from '@/components/page-search/Page-search.vue'
// import UserContent from './c-cpns/User-content.vue'
import PageContent from '@/components/page-content/Page-content.vue'
// import UserModal from './c-cpns/User-modal.vue'
import PageModal from '@/components/page-modal/Page-modal.vue'
import { ref } from 'vue'
import searchConfig from './configs/search.config'
import contentConfig from './configs/content.config'
import modalConfig from './configs/modal.config'
import { computed } from 'vue'
import useRoleListStore from '@/store/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

//代码重构
//对modalConfig的options的处理
const modalConfigRef = computed(() => {
  const roleListStore = useRoleListStore()
  const departments = roleListStore.departmentList.map((item) => {
    return { label: item.name, value: item.id }
  })
  const rolelists = roleListStore.roleList.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.propList.forEach((item) => {
    if (item.prop === 'departmentId') {
      item.options?.push(...departments)
    } else if (item.prop === 'roleId') {
      item.options?.push(...rolelists)
    }
  })
  return modalConfig
})
//查询/重置操作
const { pageContentRef, handleQueryClick, handleResetClick } = usePageContent()
//新建page/编辑page
const { pageModalRef, handleAddPageClick, handleEditPageClick } = usePageModal()

//1.拿到userContent组件,获取到它向外暴露的方法
// const userContentRef = ref<InstanceType<typeof PageContent>>()
//点击获取查询结果并在userContent组件展示
// function handleQueryClick(searchQueryInfo: any) {
//   // console.log(searchQueryInfo)
//   userContentRef.value?.fetchPageListData(searchQueryInfo)
// }
//search重置操作
// function handleResetClick() {
//   userContentRef.value?.fetchPageListData()
// }
//2.控制modal的显示与隐藏
// const userModalRef = ref<InstanceType<typeof PageModal>>()
//新建用户
// function handleAddUser() {
//   userModalRef.value?.isDialogShow()
// }
// //3.编辑用户
// function handleEdit(payload: any) {
//   // console.log(payload)
//   userModalRef.value?.isDialogShow(false, payload)
// }
</script>

<style scoped lang="less"></style>
