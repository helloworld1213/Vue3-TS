<template>
  <div class="role">
    <page-search
      :search-config="searchConfig"
      @query-click="handleQueryClick"
      @reset-click="handleResetClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :content-config="contentConfig"
      @add-page-click="handleAddPageClick"
      @edit-page-click="handleEditPageClick"
    ></page-content>
    <page-modal
      :modal-config="modalConfig"
      :other-info="otherInfo"
      ref="pageModalRef"
    >
      <template #menuList>
        <el-tree
          ref="treeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleCheck"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search/Page-search.vue'
import searchConfig from '@/views/main/system/role/configs/search.config.js'
import PageContent from '@/components/page-content/Page-content.vue'
import PageModal from '@/components/page-modal/Page-modal.vue'
import modalConfig from './configs/modal.config'
import contentConfig from './configs/content.config'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import useRoleListStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'
import type { ElTree } from 'element-plus'
import { mapMenuListToIds } from '@/utils/map-menus'

//1.查询和重置操作
const { pageContentRef, handleQueryClick, handleResetClick } = usePageContent()

//2.新建page/编辑page
const { pageModalRef, handleAddPageClick, handleEditPageClick } = usePageModal(
  editCallback,
  newCallback
)

//3.拿到完整的菜单数据
const roleListStore = useRoleListStore()
const { menuList } = storeToRefs(roleListStore)

//4.选中节点
const otherInfo = ref({})
function handleCheck(data1: any, data2: any) {
  // console.log('handlecheck')
  //拿到选中的节点数据传递到page-modal里面
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  // console.log(menuListId)
  //因为添加用户需要的是menuList,所以不可以是其他命名,搞了好久这个问题
  otherInfo.value = { menuList }
  // console.log(otherInfo.value)
}
//5.编辑权限数据
const treeRef = ref<InstanceType<typeof ElTree>>()
function newCallback() {
  nextTick(() => {
    treeRef.value?.setCheckedKeys([])
  })
}
function editCallback(payload: any) {
  //1.这样,就拿到了编辑权限的数据
  // console.log('点击了编辑', payload.menuList)
  //2.将数据设置到权限树里面
  //2.要用到nextTick()
  nextTick(() => {
    //1.通过映射拿到id
    const itemId = mapMenuListToIds(payload.menuList)
    // console.log(itemId)
    treeRef.value?.setCheckedKeys(itemId)
  })
}
</script>

<style scoped lang="less"></style>
