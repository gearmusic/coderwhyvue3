
export default {
  title: '商品管理',
  propList: [
    { prop: 'id', label: 'ID号', width: '90' },
    { prop: 'name', label: '商品名', width: '250' },
    { prop: 'imgUrl', label: '缩略图', width: '150', slotName: 'imgUrl' },
    { prop: 'newPrice', label: '价格', width: '100', slotName: 'newPrice' },
    { prop: 'saleCount', label: '售出', width: '100' },
    { prop: 'createAt', label: '创建日期', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '修改日期', minWidth: '180', slotName: 'updateAt' },
    { prop: 'handler', label: '操作', minWidth: '100', slotName: 'handler' }
  ],
  showSelection: true

}
