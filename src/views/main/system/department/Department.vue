<template>
  <div class="department">
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
    >
    </page-content>
    <page-modal ref="pageModalRef" :modal-config="modalConfigRef"> </page-modal>
  </div>
</template>

<script setup lang="ts">
// import PageSearch from './c-cpns/PageSearch.vue'
import PageSearch from '@/components/page-search/Page-search.vue'
// import PageContent from './c-cpns/PageContent.vue'
import PageContent from '@/components/page-content/Page-content.vue'
// import PageModal from './c-cpns/PageModal.vue'
import PageModal from '@/components/page-modal/Page-modal.vue'
import { ref, computed } from 'vue'
import searchConfig from './configs/search.config'
import contentConfig from './configs/content.config'
import modalConfig from './configs/modal.config'
import useRoleListStore from '../../../../store/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

//对modalConfig的options的处理
const modalConfigRef = computed(() => {
  const roleListStore = useRoleListStore()
  const departments = roleListStore.departmentList.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.propList.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options?.push(...departments)
    }
  })
  return modalConfig
})

//对setup相同逻辑的抽取: hooks
// //1.查询操作
// const pageContentRef = ref<InstanceType<typeof PageContent>>()
// function handleQueryClick(payload: any) {
//   pageContentRef.value?.fetchPageListData(payload)
// }
// //2.重置操作
// function handleResetClick() {
//   //1.重新发送请求
//   pageContentRef.value?.fetchPageListData()
// }

//查询/重置操作
const { pageContentRef, handleQueryClick, handleResetClick } = usePageContent()

//3.新建page
// const pageModalRef = ref<InstanceType<typeof PageModal>>()
// function handleAddPageClick() {
//   pageModalRef.value?.isDialogShow()
// }
// //4.编辑page
// function handleEditPageClick(payload: any) {
//   pageModalRef.value?.isDialogShow(false, payload)
// }

//新建page/编辑page
const { pageModalRef, handleAddPageClick, handleEditPageClick } = usePageModal()
</script>

<style scoped lang="less"></style>
