import HttpRequest from './http/axios';

export const sleep = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
};

export const http = new HttpRequest({
  interceptors: {
    requestInterceptor(config) {
      return config;
    },
    requestInterceptorCatch(error) {
      console.error('requestInterceptorCatch', error);
    },
    responseInterceptor(response) {
      const { status, data } = response;
      if (status >= 200 && status < 300) {
        if (data?.failed) throw new Error('请求出错！');
        return response.data;
      }
      return response;
    },
    responseInterceptorCatch(error) {
      console.error('responseInterceptorCatch', error);
    },
  },
});
