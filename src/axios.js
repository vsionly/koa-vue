import Axios from 'axios';
// import router from './router';

// 创建axios实例
const axios = Axios.create({
  // timeout: 30000 // 请求超时时间
})
// 添加request拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})
// 添加respone拦截器
axios.interceptors.response.use(
  response => {
    let res={};
    res.status=response.status
    res.data=response.data;
    return res;
  },
  error => {
    if(error.response && error.response.status == 404){
      // router.push({path:'/'})
    }
    return Promise.reject(error.response)
  }
)

//不要忘记export
export default axios