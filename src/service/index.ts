
import KmytRequest from './request'
import { BASE_URL, TIME_OUT, TOKEN } from './request/config'
import type { KmytRequestConfig } from './request/type'

import { ElLoading } from 'element-plus'


const kmytRequest = new KmytRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: KmytRequestConfig) => {
      const token = TOKEN

      if(token) {
        config.headers!.Authorization = `Bearer ${ token }`
      }

      ElLoading.service({
        lock: true,
        text: '正在请求数据',
        fullscreen: true
      })

      return config
    },

    //把res的data作为结果返回
    responseInteceptor: (res) => {

      ElLoading.service({
        fullscreen: true
      }).close()

      return res.data
    }


  }
})

export default kmytRequest
