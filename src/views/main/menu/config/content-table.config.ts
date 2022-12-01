
export default {
  title: '菜单管理',
  propList: [
    { prop: 'name', label: '菜单名', width: '200' },
    { prop: 'type', label: '类型', width: '70' },
    { prop: 'url', label: 'URL', width: '200' },
    { prop: 'icon', label: '图标', width: '200'},
    { prop: 'permission', label: '按钮权限', width: '180'},
    { prop: 'createAt', label: '创建日期', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '修改日期', minWidth: '180', slotName: 'updateAt' },
    { prop: 'handler', label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showSelection: false,
  showFooter: false,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },

}
