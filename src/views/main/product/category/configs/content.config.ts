const contentConfig = {
  pageName: 'category',
  headerConfig: {
    title: '分类列表',
    btnTitle: '新建分类'
  },
  propList: [
    { prop: 'name', label: '角色名称', minWidth: '120' },
    {
      type: 'timer',
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250'
    },
    {
      type: 'timer',
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250'
    },
    { type: 'handler', label: '操作', minWidth: '120' }
  ]
}

export default contentConfig
