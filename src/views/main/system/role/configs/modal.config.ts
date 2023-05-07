import type { IModalProps } from '@/types/modal-type'

const modalConfig: IModalProps = {
  pageName: 'role',
  header: {
    newTitle: '新建角色',
    editTitle: '编辑角色'
  },
  propList: [
    {
      type: 'input',
      label: '角色名称',
      prop: 'name',
      placeholder: '请输入角色名称'
    },
    {
      type: 'input',
      label: '权限介绍',
      prop: 'intro',
      placeholder: '请输入权限介绍'
    },
    //自定义
    {
      type: 'custom',
      slotname: 'menuList'
    }
  ]
}

export default modalConfig
