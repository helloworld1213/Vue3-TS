const contentConfig = {
  pageName: 'department',
  headerConfig: {
    title: '部门列表',
    btnTitle: '新建部门'
  },
  propList: [
    // 1.selection/index
    { type: 'selection', label: '选择', width: '55' },
    { type: 'index', label: '序号', width: '55' },

    //2.普通的
    { type: 'normal', label: '姓名', prop: 'name', width: '100' },
    { type: 'normal', label: '部门领导', prop: 'leader', width: '100' },
    { type: 'normal', label: '上级部门', prop: 'parentId', width: '100' },

    //3.创建时间
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '200' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '200' },

    //4.操作
    { type: 'handler', label: '操作' }

    //5.自己订制
    // {
    //   type: 'custom',
    //   label: '部门领导',
    //   prop: 'leader',
    //   width: '200',
    //   slotName: 'leader'
    // },
    // {
    //   type: 'custom',
    //   label: '上级部门',
    //   prop: 'parentId',
    //   width: '200',
    //   slotName: 'parentId'
    // },
  ]
}

export default contentConfig
