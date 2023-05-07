<template>
  <div class="category">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></page-search>
    <page-content :content-config="contentConfig" ref="pageContentRef">
      <template #imageSlot="scope">
        <el-image
          style="width: 50px; height: 50px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/Page-search.vue'
import searchConfig from './configs/search.config'
import PageContent from '@/components/page-content/Page-content.vue'
import contentConfig from './configs/content.config'
import usePageContent from '@/hooks/usePageContent'
// import PageModal from '@/components/page-modal/Page-modal.vue'

// 查询和重置操作
const { pageContentRef, handleQueryClick, handleResetClick } = usePageContent()
</script>

<style scoped lang="less"></style>
