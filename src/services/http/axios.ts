import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';
import { RequestConfig, RequestInterceptors } from './type';
class HttpRequest {
  instance: AxiosInstance;
  interceptors: RequestInterceptors;

  static cancelToken = axios.CancelToken.source();

  constructor(config: RequestConfig) {
    this.instance = axios.create(this.mergeConfig(config));
    this.interceptors = config.interceptors;

    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch,
    );

    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch,
    );
  }

  private mergeConfig(options: AxiosRequestConfig): AxiosRequestConfig {
    return merge(
      {
        timeout: 30000,
      },
      options,
    );
  }

  public async request<T>(config: AxiosRequestConfig<T>): Promise<T> {
    try {
      return await this.instance.request<any, T>(config);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public get<T = unknown>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET',
    });
  }

  public post<T = unknown>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST',
    });
  }

  public delete<T = unknown>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'DELETE',
    });
  }

  public put<T = unknown>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PUT',
    });
  }

  public patch<T = unknown>(config: AxiosRequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'PATCH',
    });
  }
}

export default HttpRequest;
