import { createApp } from 'vue'
import elementPlus from 'element-plus'
import router from './router'
import { createPinia } from 'pinia'

import globalRegister from '@/global'

import App from './App.vue'

//css
import './assets/css/index.less'
import 'element-plus/dist/index.css'

const pinia = createPinia()

const app = createApp(App)

app
.use(router)
.use(pinia)
.use(elementPlus)
.use(globalRegister)


app.mount('#app')




/*
var result = kmytRequest.get<any>('/home/multidata').then(res => {
  console.log(res.data)
})
*/
