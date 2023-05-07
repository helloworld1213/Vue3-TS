export interface IModalProps {
  pageName: string
  header: Header
  propList: PropList[]
}

export interface Header {
  newTitle: string
  editTitle: string
}

export interface PropList {
  type: string
  label?: string
  prop?: string
  placeholder?: string
  slotname?: string
  initialValue?: string
  options?: any[]
}
