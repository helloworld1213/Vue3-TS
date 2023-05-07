<template>
  <div class="search" v-if="isQuery">
    <el-form
      ref="searchFormRef"
      :model="searchForm"
      label-width="80px"
      size="large"
    >
      <el-row>
        <template v-for="item in searchConfig.searchData" :key="item.prop">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="searchForm[item.prop]"
                  :placeholder="item.placeholder"
                >
                  <template v-for="option in item.options" :key="option.value">
                    <el-option
                      :label="option.label"
                      :value="option.value"
                    ></el-option>
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="btns">
      <el-button size="large" icon="Refresh" @click="resetClick"
        >重置</el-button
      >
      <el-button size="large" type="primary" icon="Search" @click="queryClick">
        查询
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import usePermissions from '../../hooks/usePermissions'

interface IProps {
  searchConfig: {
    pageName: string
    searchData: any[]
  }
}
//将事件发射出去,可以在父组件使用
const emit = defineEmits(['resetClick', 'queryClick'])

const props = defineProps<IProps>()
//0.判断是否有查询权限
const isQuery = usePermissions(`${props.searchConfig.pageName}:query`)
//如果有初始值,则将初始值发送给searchForm,即如果没有
//initialValue,则searchForm就是{name: '', leader: '', createAt: ''}
//有初始值,则是这样{name: 'aaaaaa', leader: 'bbbbbb', createAt: ''}
const initialForm: any = {}
for (const item of props.searchConfig.searchData) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const searchForm = reactive(initialForm)
//重置操作
const searchFormRef = ref<InstanceType<typeof ElForm>>()
function resetClick() {
  //重置表单
  searchFormRef.value?.resetFields()
  emit('resetClick')
}
//查询表单
function queryClick() {
  emit('queryClick', searchForm)
}
</script>

<style scoped lang="less">
.search {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}

.el-row {
  .el-col {
    padding: 0 10px;

    .el-form-item {
      padding: 10px 20px;
      margin: 0 0 22px;
    }
  }
}
.btns {
  text-align: right;
  margin-right: 60px;
}
</style>
