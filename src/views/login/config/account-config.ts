
export const rules = {
  name: [
    {
      required: true,
      messsage: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      messsage: '密码不能为空',
      trigger: 'blur'
    }
    /*
    , {
      pattern: /^[a-z][0-9]{5,10}$/,
      messsage: '用户名必须是5-10个字母或者数字',
      trigger: 'blur'
    }
    */
  ]
}
