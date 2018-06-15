import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 测试地址
axios.defaults.baseURL = myConfig.BASE_URL

// POST传参序列化
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
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
      Vue.$user.setUser(null)
      location.href = '/'
    }
    return Promise.reject(error)
  }
)

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
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

export default {
  // 列表
  list (params) {
    return fetch('/api/list', params)
  }
}
