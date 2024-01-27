import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch: (error: AxiosError) => any;
  responseInterceptor: (response: T) => T;
  responseInterceptorCatch: (error: AxiosError) => any;
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors: RequestInterceptors<T>;
}
