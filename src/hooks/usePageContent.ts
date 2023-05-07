import { ref } from 'vue'
import type PageContent from '@/components/page-content/Page-content.vue'

function usePageContent() {
  //1.查询操作
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  function handleQueryClick(payload: any) {
    // console.log(payload)
    pageContentRef.value?.fetchPageListData(payload)
  }
  //2.重置操作
  function handleResetClick() {
    //1.重新发送请求
    pageContentRef.value?.fetchPageListData()
  }

  return {
    pageContentRef,
    handleQueryClick,
    handleResetClick
  }
}

export default usePageContent
