import type { IModalProps } from '@/types/modal-type'

const modalConfig: IModalProps = {
  pageName: 'category',
  header: {
    newTitle: '新建分类',
    editTitle: '编辑分类'
  },
  propList: [
    {
      type: 'input',
      label: '类别名称',
      prop: 'name',
      placeholder: '请输入类别名称',
      initialValue: ''
    }
  ]
}

export default modalConfig
