<template>
  <div class="content">
    <div class="header">
      <h3>用户列表</h3>
      <el-button type="primary" @click="addUserClick">新建用户</el-button>
    </div>

    <el-scrollbar :native="false">
      <div class="table">
        <el-table :data="userList" border style="width: 100%">
          <el-table-column align="center" type="selection" width="55px" />
          <el-table-column
            align="center"
            type="index"
            label="序号"
            width="55px"
          />
          <el-table-column
            align="center"
            prop="name"
            label="姓名"
            width="100px"
          />
          <el-table-column
            align="center"
            prop="realname"
            label="真实姓名"
            width="100"
          />
          <el-table-column
            align="center"
            prop="cellphone"
            label="电话号码"
            width="140"
          />
          <el-table-column
            align="center"
            prop="enable"
            label="状态"
            width="80px"
          >
            <!-- 作用域插槽 -->
            <template #default="scope">
              <el-button
                :type="scope.row.enable ? 'primary' : 'danger'"
                size="small"
                plain
              >
                {{ scope.row.enable ? '启用' : '禁用' }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="createAt"
            label="创建时间"
            width="200"
          >
            <!-- 时间格式化 -->
            <template #default="scope">
              {{ formatTime(scope.row.createAt) }}
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="updateAt"
            label="更新时间"
            width="200"
          >
            <!-- 时间格式化 -->
            <template #default="scope">
              {{ formatTime(scope.row.createAt) }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" width="160px">
            <template #default="scope">
              <el-button
                size="small"
                text
                icon="Edit"
                type="primary"
                @click="editClick(scope.row)"
              >
                编辑
              </el-button>
              <el-button
                size="small"
                text
                icon="Delete"
                type="danger"
                @click="deleteClick(scope.row.id)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-scrollbar>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserList from '@/store/main/system/index'
import { storeToRefs } from 'pinia'
import { formatTime } from '@/utils/format-time'
import { ref } from 'vue'
//1.调用函数
const userListStore = useUserList()
const pageSize = ref(10)
const currentPage = ref(1)

fetchUserListData()
//2.拿到数据
//因为上面的函数是异步的,所以可能会拿不到数据,所以搞成响应式的
const { userList, userTotalCount } = storeToRefs(userListStore)

//3.pagination渲染相关

//3.2条数改变/页码改变
//重新发送网络请求
function handleSizeChange() {
  fetchUserListData()
}

//3.3页码改变
function handleCurrentChange() {
  fetchUserListData()
}

//3.4发送网络请求多次调用,所以封装一个函数
//queryInfo: 从查询组件获取到输入的查询数据,传递给父组件,并从父组件
//获取到,然后发送给content组件里面的请求数据函数,但是,不是所有的请求
//都需要携带上这个查询数据,所以默认值是{}
function fetchUserListData(searchQueryInfo: any = {}) {
  //1.首先获取数据
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const info = { size, offset }
  //1.2拼接上查询字符串
  const queryInfo = { ...info, ...searchQueryInfo }

  //2.发送请求
  // userListStore.getUserListActions(info)
  userListStore.getUserListActions(queryInfo)
}

//4.删除操作
function deleteClick(id: number) {
  userListStore.deleteUserByIdAction(id)
}
//5.新建用户
const emit = defineEmits(['addUserClick', 'editClick'])
function addUserClick() {
  emit('addUserClick')
}
//6.编辑操作
function editClick(payload: any) {
  emit('editClick', payload)
}

//将发送请求函数暴露出去
defineExpose({
  fetchUserListData
})
</script>

<style scoped lang="less">
.content {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
}

.el-table {
  margin-top: 10px;
  .el-button {
    margin-left: 0;
  }

  :deep(.el-table__cell) {
    padding: 12px 0;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
