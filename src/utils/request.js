import axios from 'axios';
import { MAINHOST, ISMOCK, conmomPrams } from '@/config';
import { getToken } from '@/utils/common';
import router from '@/router';

const baseURL =
  process.env.NODE_ENV === 'production' ? MAINHOST : location.origin;
const token = getToken();

const qs = require('qs');

export const Request = {};

// 请求超时时长
const TIMEOUT = 10000;

const HttpRequest = axios.create({
  baseURL,
  timeout: TIMEOUT,
  header: {
    'user-token': token,
    ...conmomPrams
  }
});

// 请求失败
const requestFail = res => {
  let errStr = '网络繁忙！';
  // token失效重新登录
  if (res.data.code === 1000001) {
    console.error('token失效重新登录');
    return router.replace({ name: 'login' });
  }

  return {
    err: console.error({
      code: res.data.errcode || res.data.code,
      msg: res.data.errmsg || errStr
    })
  };
};
HttpRequest.interceptors.request.use(
  config => {
    // 添加全局的loading...
    return config;
  },
  error => {
    console.error(error);
  }
);
// 响应拦截
HttpRequest.interceptors.response.use(
  res => {
    const { data, status } = res;
    if (status === 200 && ISMOCK) {
      return data;
    } // 如果是mock数据，直接返回
    if (status === 200 && data && data.code === 0) {
      return data;
    } // 请求成功
    return requestFail(res); // 失败回调
  },
  error => {
    console.error(error);
  }
);

export const request = options => {
  options.headers = { 'Content-type': 'application/x-www-form-urlencoded' }; // 'multipart/form-data'

  // 显示loading图标
  if (options.loading) {
    // store.commit(types.SHOW_LOADING, true);
  }

  // 终止loading动画
  function endLoading() {
    setTimeout();
    // () => store.commit && store.commit(types.SHOW_LOADING, false),
    // 500
  }

  return axios
    .request({
      headers: options.headers,
      url: options.url,
      method: options.method,
      data: qs.stringify(options.body),
      params: options.params,
      timeout: TIMEOUT
    })
    .then(response => {
      // 请求结束
      let result = response.data;
      if (result && result.statusCode !== 200) {
        throw new Error(result.statusText);
      }
      // 列表请求，统一做兼容处理
      if (result && result.total_count === 0) {
        result.list = [];
      }
      return result.data;
    })
    .catch(e => {
      // http 错误
      endLoading();
      throw e;
    });
};
