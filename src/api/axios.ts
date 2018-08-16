import axios from 'axios';
import { stringify } from "querystring";
import { Promise } from "es6-promise";

axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// POST传参序列化
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 返回状态判断
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    // 丢失tokenId,跳转登录
    if (error && error.response && error.response.status === 401) {
      location.href = '/'
    }
    return Promise.reject(error)
  }
)

export function fetch(url: string, params: object) {
  return new Promise((resolve: Function, reject: Function) => {
    axios
      .post(url, params)
      .then(
        response => {
          resolve(response.data)
        },
        err => {
          reject(err)
        }
      )
      .catch(error => {
        reject(error)
      })
  })
}

export class Axios {
  // 列表
  static list(params: object) {
    return fetch('/api/list', params)
  }
}