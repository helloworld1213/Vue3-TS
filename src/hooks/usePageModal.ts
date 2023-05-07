import { ref } from 'vue'
import type PageModal from '@/components/page-modal/Page-modal.vue'

type callbackFnType = (data?: any) => void

function usePageModal(
  editCallback?: callbackFnType,
  newCallback?: callbackFnType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  //新建page
  function handleAddPageClick() {
    pageModalRef.value?.isDialogShow()
    if (newCallback) newCallback()
  }
  //4.编辑page
  function handleEditPageClick(payload: any) {
    // console.log({ ...payload }) //所有的编辑数据都保存在这个里面
    pageModalRef.value?.isDialogShow(false, payload)
    //这一步是判断是否有编辑回调函数,如果有,则将数据传递给编辑函数
    if (editCallback) editCallback(payload)
  }

  return {
    pageModalRef,
    handleAddPageClick,
    handleEditPageClick
  }
}

export default usePageModal
