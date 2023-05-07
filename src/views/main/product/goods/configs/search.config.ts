const searchConfig = {
  pageName: 'goods',
  searchData: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      label: '商品地址',
      prop: 'address',
      placeholder: '请输入商品地址'
    },
    {
      type: 'select',
      label: '状态',
      prop: 'enable',
      placeholder: '请选择状态',
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 }
      ]
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt'
    }
  ]
}

export default searchConfig
