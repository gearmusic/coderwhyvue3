
export default {
  title: '角色管理',
  propList: [
    { prop: 'id', label: 'ID号', width: '90' },
    { prop: 'name', label: '角色名', width: '120' },
    { prop: 'intro', label: '角色介绍', width: '220' },
    { prop: 'createAt', label: '创建日期', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '修改日期', minWidth: '180', slotName: 'updateAt' },
    { prop: 'handler', label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showSelection: true

}
