const contentConfig = {
  pageName: 'list',
  headerConfig: {
    title: '故事列表',
    btnTitle: ''
  },
  propList: [
    { type: 'index', label: '序号', minWidth: '55' },
    { type: 'normal', prop: 'title', label: '故事标题', minWidth: '120' },
    { type: 'normal', prop: 'content', label: '我的故事', minWidth: '500' },
    { type: 'timer', prop: 'createAt', label: '创建时间', minWidth: '250' }
  ]
}

export default contentConfig
