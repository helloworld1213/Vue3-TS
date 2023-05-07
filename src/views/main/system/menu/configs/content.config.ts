const contentConfig = {
  pageName: 'menu',
  headerConfig: {
    title: '菜单列表',
    btnTitle: '新建菜单'
  },
  propList: [
    //菜单这里不写type
    { label: '菜单名称', prop: 'name', width: '180px' },
    { label: '级别', prop: 'type', width: '120px' },
    { label: '菜单url', prop: 'url', width: '150px' },
    { label: '菜单icon', prop: 'icon', width: '200px' },
    { label: '排序', prop: 'sort', width: '120px' },
    { label: '权限', prop: 'permission', width: '150px' },
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '200px' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '200px' },
    { type: 'handler', label: '操作', width: '150px' }
  ],
  //自定义的菜单树
  childrenTree: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  //添加属性让pagination不存在(只有系统管理/菜单管理没有pagination)
  isShowMenuPagination: true
}

export default contentConfig
