import type { IModalProps } from '@/types/modal-type'

const modalConfig: IModalProps = {
  pageName: 'users',
  header: {
    newTitle: '新建用户',
    editTitle: '编辑用户'
  },
  propList: [
    {
      type: 'input',
      label: '用户名',
      prop: 'name',
      placeholder: '请输入用户名',
      initialValue: ''
    },
    {
      type: 'input',
      label: '真实姓名',
      prop: 'realname',
      placeholder: '请输入真实姓名'
    },
    {
      type: 'input',
      label: 'password',
      prop: 'password',
      placeholder: '请输入密码'
    },
    {
      type: 'input',
      label: '电话号码',
      prop: 'cellphone',
      placeholder: '请输入电话号码'
    },
    {
      type: 'select',
      label: '选择角色',
      prop: 'roleId',
      placeholder: '请选择选择角色',
      options: []
    },
    {
      type: 'select',
      label: '选择部门',
      prop: 'departmentId',
      placeholder: '请选择选择部门',
      options: []
    }
  ]
}

export default modalConfig
