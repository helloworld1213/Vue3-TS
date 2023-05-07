<template>
  <div class="category">
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
    <page-modal :modal-config="modalConfig" ref="pageModalRef"></page-modal>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/Page-search.vue'
import searchConfig from './configs/search.config'
import PageContent from '@/components/page-content/Page-content.vue'
import contentConfig from './configs/content.config'
import usePageContent from '@/hooks/usePageContent'
import PageModal from '@/components/page-modal/Page-modal.vue'
import modalConfig from './configs/modal.config'
import usePageModal from '../../../../hooks/usePageModal'

// 1.重置/查询操作
const { pageContentRef, handleQueryClick, handleResetClick } = usePageContent()

//2.新增/编辑操作
const { pageModalRef, handleAddPageClick, handleEditPageClick } = usePageModal()
</script>

<style scoped lang="less"></style>
