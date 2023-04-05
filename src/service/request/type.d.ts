import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface MyInter<T> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailFn?: (err: any) => any
}
export interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyInter<T>
}
