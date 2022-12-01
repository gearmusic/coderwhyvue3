import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface KmytRequestInterceptors<T = AxiosResponse> {
  //request拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig

  //request出错拦截
  requestInterceptorCatch?: (error: any) => any

  //response拦截
  responseInteceptor?: (res: T) => T

  //responset出错拦截
  responseInteceptorCatch?: (error: any) => any
}

export interface KmytRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: KmytRequestInterceptors<T>
}
