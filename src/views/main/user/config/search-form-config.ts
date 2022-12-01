import HyForm, { InputType, IFormItem } from '@/base-ui'

const formItems: Array<IFormItem> = [
  {
    type: InputType.input,
    field: 'name',
    label: '用户名',
    rules: []
  }
  , {
    type: InputType.input,
    field: 'cellphone',
    label: '手机号码',
    rules: []
  }
  , {
    type: InputType.select,
    field: 'sport',
    label: '喜欢的运动',
    rules: [],
    options: [
      {
        label: '篮球',
        value: 'basketball'
      },
      {
        label: '足球',
        value: 'football'
      }
    ]
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
