const searchConfig = {
  pageName: 'category',
  searchData: [
    {
      type: 'input',
      prop: 'name',
      label: '类别名称',
      placeholder: '请输入类别名称'
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt'
    }
  ]
}

export default searchConfig
