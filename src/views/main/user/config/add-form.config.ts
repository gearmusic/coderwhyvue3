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
    field: 'realname',
    label: '全名',
    rules: []
  }
  , {
    type: InputType.input,
    field: 'password',
    label: '密码',
    hidden: true,
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
    field: 'departmentId',
    label: '部门',
    rules: [],
    options: []
  }
  , {
    type: InputType.select,
    field: 'roleId',
    label: '角色',
    rules: [],
    options: []
  }
]

export default formItems
