import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { KmytRequestInterceptors, KmytRequestConfig } from './type'

class KmytRequest {
  instance: AxiosInstance
  interceptors?: KmytRequestInterceptors
  config: KmytRequestConfig

  constructor(_config: KmytRequestConfig) {
    this.config =_config
    this.instance = axios.create(_config)
    this.interceptors = _config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInteceptor,
      this.interceptors?.responseInteceptorCatch
    )

  }

  request<T>(url: string, data: any = null): Promise<T> {
    this.config.url = url
    this.config.data = data

    return new Promise((resolve, reject) => {
      this.instance.request<any, T>(this.config).then(res => {
        resolve(res)
      }).catch(err => {
        return err
      })
    })
  }

  get<T>(url: string, data: any = null): Promise<T> {
    this.config.method = 'GET'
    this.config.data = data

    return this.request<T>(url, data)
  }

  post<T>(url: string, data: any = null): Promise<T> {
    this.config.method = 'POST'
    this.config.data = data

    return this.request<T>(url, data)
  }

  patch<T>(url: string, data: any = null): Promise<T> {
    this.config.method = 'PATCH'
    this.config.data = data

    return this.request<T>(url, data)
  }

  delete<T>(url: string, data: any = null): Promise<T> {
    this.config.method = 'DELETE'
    this.config.data = data

    return this.request<T>(url, data)
  }


}

export default KmytRequest



