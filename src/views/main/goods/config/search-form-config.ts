import HyForm, { InputType, IFormItem } from '@/base-ui'

const formItems: Array<IFormItem> = [
  {
    type: InputType.input,
    field: 'name',
    label: '商品名称',
    rules: []
  }
  , {
    type: InputType.input,
    field: 'newPrice',
    label: '当前价格',
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
