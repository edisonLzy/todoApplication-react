import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class Request {
  private service: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.service = axios.create({
      timeout: 50000,
      withCredentials: true,
      ...config,
    });

    this.service.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        // 发送失败
        console.log(error, '请求失败');
        Promise.reject(error);
      }
    );

    // 响应拦截器
    this.service.interceptors.response.use(
      (response) => {
        // 响应拦截
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const res = await this.service.request(config);
    return res.data;
  };

  public get = async <T = any>(url: string, config?: AxiosRequestConfig) => {
    const res = await this.service.get<T>(url, config);
    return res.data;
  };

  public delete = async <T = any>(url: string, config?: AxiosRequestConfig) => {
    const res = await this.service.delete<T>(url, config);
    return res.data;
  };

  public options = async <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ) => {
    const res = await this.service.options<T>(url, config);
    return res.data;
  };

  public head = async <T = any>(url: string, config?: AxiosRequestConfig) => {
    const res = await this.service.head<T>(url, config);
    return res.data;
  };

  public post = async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    const res = await this.service.post<T>(url, data, config);
    return res.data;
  };

  public put = async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    const res = await this.service.put<T>(url, data, config);
    return res.data;
  };

  public patch = async <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => {
    const res = await this.service.patch<T>(url, data, config);
    return res.data;
  };
}
