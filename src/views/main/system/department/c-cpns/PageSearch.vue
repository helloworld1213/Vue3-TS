<template>
  <div class="page-search">
    <el-form
      ref="searchFormRef"
      :model="searchForm"
      label-width="80px"
      size="large"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="searchForm.name" placeholder="请输入用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input
              v-model="searchForm.leader"
              placeholder="请输入真实姓名"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
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

const searchForm = reactive({
  name: '',
  leader: '',
  createAt: '',
  updateAt: ''
})

const searchFormRef = ref<InstanceType<typeof ElForm>>()

//将事件发射出去,可以在父组件使用
const emit = defineEmits(['resetClick', 'queryClick'])
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
.page-search {
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
