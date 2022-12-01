import HyForm, { InputType, IFormItem } from '@/base-ui'

const formItems: Array<IFormItem> = [
  {
    type: InputType.input,
    field: 'name',
    label: '角色名称',
    rules: []
  }
  , {
    type: InputType.input,
    field: 'intro',
    label: '角色描述',
    rules: []
  }
  , {
    type: InputType.datePicker,
    field: 'createTime',
    label: '创建时间',
    rules: [],
    otherOptions: {
      startPlaceholder: 'Start date',
      endPlaceholder: 'End date',
      type: 'daterange',
      rangeSeparator: 'To'
    }

  }

]

export default formItems
