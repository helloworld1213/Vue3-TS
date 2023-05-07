<template>
  <div class="modal">
    <el-dialog
      v-model="pageFormDialogVisible"
      :title="
        isNewRef ? modalConfig.header.newTitle : modalConfig.header.editTitle
      "
      width="30%"
      center
    >
      <el-form :model="pageForm" label-width="80px" size="large">
        <el-row>
          <template v-for="item in modalConfig.propList" :key="item.prop">
            <el-col>
              <el-form-item :label="item.label" :prop="item.prop">
                <template v-if="item.type === 'input'">
                  <template v-if="item.prop === 'password'">
                    <el-input
                      :disabled="!isNewRef"
                      v-model="pageForm[item.prop]"
                      :placeholder="item.placeholder"
                      :show-password="item.prop === 'password'"
                    ></el-input>
                  </template>
                  <template v-else>
                    <el-input
                      v-model="pageForm[item.prop]"
                      :placeholder="item.placeholder"
                    ></el-input>
                  </template>
                </template>
                <template v-if="item.type === 'date-picker'">
                  <el-date-picker
                    v-model="pageForm[item.prop]"
                    type="daterange"
                    range-separator="-"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                  />
                </template>
                <template v-if="item.type === 'select'">
                  <el-select
                    v-model="pageForm[item.prop]"
                    style="width: 100%"
                    :placeholder="item.placeholder"
                  >
                    <template
                      v-for="optionItem in item.options"
                      :key="optionItem.label"
                    >
                      <el-option
                        :label="optionItem.label"
                        :value="optionItem.value"
                      ></el-option>
                    </template>
                  </el-select>
                </template>
                <template v-if="item.type === 'custom'">
                  <slot :name="item.slotname"></slot>
                </template>
              </el-form-item>
            </el-col>
          </template>
        </el-row>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="pageFormDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addPageConfirm"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useRoleListStore from '@/store/main/main'
import { storeToRefs } from 'pinia'
import useUserList from '@/store/main/system/index'

interface IModalProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    propList: any[]
  }
  otherInfo?: any
}

const props = defineProps<IModalProps>()
//1.设置控制对话框的显示与隐藏的属性
const pageFormDialogVisible = ref(false)
const initialForm: any = {}
for (const item of props.modalConfig.propList) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const pageForm = reactive<any>(initialForm)

//通过isNewRef可以控制展示的是编辑对话框还是新建用户对话框
const isNewRef = ref(true)
const payloadId = ref()
//2.获取角色列表信息
// const roleListStore = useRoleListStore()
// const { departmentList } = storeToRefs(roleListStore)

//3.向外暴露(尽可能暴露函数)
//isNew判断是否是新建用户,false则为编辑用户
function isDialogShow(isNew: boolean = true, payload?: any) {
  //1.控制对话框得到显示与隐藏
  pageFormDialogVisible.value = true
  //2.遍历payload,将获取到的值赋值给userForm的每一项
  //将isNew的值赋值给isNewRef
  isNewRef.value = isNew

  // //如果是编辑用户且payload有值
  if (!isNew && payload) {
    for (const key in pageForm) {
      //如果是编辑用户,则将获取到的值赋值给pageForm的每一项
      pageForm[key] = payload[key]
    }
    payloadId.value = payload
  } else {
    for (const key in pageForm) {
      //如果是新建用户,则清空每一项
      pageForm[key] = ''
    }
    payloadId.value = null
  }
}

//4.确认添加新用户
const userListStore = useUserList()
function addPageConfirm() {
  pageFormDialogVisible.value = false

  let pageData = pageForm
  if (props.otherInfo) {
    pageData = { ...pageData, ...props.otherInfo }
  }
  // console.log(pageData)
  //1.调用action
  if (!isNewRef.value && payloadId.value) {
    userListStore.editPageListAction(
      props.modalConfig.pageName,
      payloadId.value.id,
      pageData
    )
  } else {
    userListStore.addPageListAction(props.modalConfig.pageName, pageData)
  }

  //2.关闭dialog对话框
  pageFormDialogVisible.value = false
}

defineExpose({
  isDialogShow
})
</script>

<style scoped lang="less"></style>
