import HyForm, { InputType, IFormItem } from '@/base-ui'

const formItems: Array<IFormItem> = [
  {
    type: InputType.input,
    field: 'name',
    label: '角色名',
    rules: []
  }
  , {
    type: InputType.input,
    field: 'intro',
    label: '角色介绍',
    rules: []
  }

]

export default formItems
