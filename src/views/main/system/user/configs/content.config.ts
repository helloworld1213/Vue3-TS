const contentConfig = {
  pageName: 'users',
  headerConfig: {
    title: '用户列表',
    btnTitle: '新建用户'
  },
  propList: [
    // 1.selection/index
    { type: 'selection', label: '选择', width: '55' },
    { type: 'index', label: '序号', width: '55' },

    //2.普通的
    { type: 'normal', label: '姓名', prop: 'name', width: '100' },
    { type: 'normal', label: '真实姓名', prop: 'realname', width: '100' },
    { type: 'normal', label: '电话号码', prop: 'cellphone', width: '140' },
    { type: 'normal', label: '状态', prop: 'enable', width: '80' },

    //3.创建时间
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '200' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '200' },

    //4.操作
    { type: 'handler', label: '操作', width: '150' }
  ]
}

export default contentConfig
