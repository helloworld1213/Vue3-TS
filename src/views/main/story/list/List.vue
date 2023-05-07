<template>
  <div class="list">
    <page-content :content-config="contentConfig"></page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/Page-content.vue'
import contentConfig from './configs/content.config'
</script>

<style scoped lang="less"></style>
