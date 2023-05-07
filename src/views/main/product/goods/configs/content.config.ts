const contentConfig = {
  pageName: 'goods',
  headerConfig: {
    title: '商品列表',
    btnTitle: '新建商品'
  },
  propList: [
    // 1.selection/index
    { type: 'selection', label: '选择', width: '55' },
    { type: 'index', label: '序号', width: '55' },

    //2.普通的
    { type: 'normal', label: '商品名称', prop: 'name', width: '100' },
    { type: 'normal', label: '原价格', prop: 'oldPrice', width: '70' },
    { type: 'normal', label: '新价格', prop: 'newPrice', width: '70' },
    { type: 'normal', label: '商品描述', prop: 'desc', width: '100' },
    { type: 'normal', label: '状态', prop: 'status', width: '55' },
    {
      type: 'custom',
      label: '图片',
      prop: 'imgUrl',
      width: '100',
      slotName: 'imageSlot'
    },
    { type: 'normal', label: '库存', prop: 'inventoryCount', width: '65' },
    { type: 'normal', label: '销量', prop: 'saleCount', width: '65' },
    { type: 'normal', label: '收藏', prop: 'favorCount', width: '65' },
    { type: 'normal', label: '地址', prop: 'address', width: '55' },

    //3.创建时间
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '200' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '200' },

    //4.操作
    { type: 'handler', label: '操作', width: '150' }
  ]
}

export default contentConfig
