<template>
  <div class="menu">
    <page-content
      :content-config="contentConfig"
      ref="pageContentRef"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/Page-content.vue'
import contentConfig from './configs/content.config'
import usePageContent from '@/hooks/usePageContent'

const { pageContentRef } = usePageContent()
</script>

<style scoped lang="less"></style>
