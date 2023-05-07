const searchConfig = {
  pageName: 'department',
  searchData: [
    {
      type: 'input',
      label: '用户名',
      prop: 'name',
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '部门领导',
      prop: 'leader',
      placeholder: '请输入部门领导'
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt'
    }
  ]
}

export default searchConfig
