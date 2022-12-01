
export default {
  title: '用户管理',
  propList: [
    { prop: 'id', label: 'ID号', width: '90' },
    { prop: 'name', label: '用户名', width: '120' },
    { prop: 'realname', label: '全名', width: '120' },
    { prop: 'cellphone', label: '手机号', width: '180' },
    { prop: 'enable', label: '状态', width: '120', slotName: 'enable' },
    { prop: 'createAt', label: '创建日期', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '修改日期', minWidth: '180', slotName: 'updateAt' },
    { prop: 'handler', label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showSelection: true

}
