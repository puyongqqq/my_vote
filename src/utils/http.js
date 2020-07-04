import axios from 'axios';
// import qs from 'qs';

var $axios = axios.create({
    baseURL: 'http://localhost:8066/',
    timeout: 6000,
    headers: {'Authorization': 'XMLHttpRequest'},
});

// export const $get = (url, params) => {
//     return $axios.get(url, params).then(res => {
//         if (res.status === 200 && res.data.code === 200) {
//             data = res.data
//         }
//     })
// }

export default {
    $axios
}

// class Request {
//     constructor() {
//       this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8066' : '/'; // 设置请求baseURL
//       this.timeout = 2000; // 设置请求超时时间
//     }
//     request(config){// 这里的config是请求的时候传递的参数配置对象，比如url、method、data等
//       const instance = axios.create({ // 创建axios实例
//         baseURL: this.baseURL,
//         timeout: this.timeout,
//       });
//       // 设置拦截器
//       instance.interceptors.request.use((config) => { // 请求拦截之后就是要使用这个config, config表示整个请求对象
//         config.headers.Authorization = localStorage.getItem('token'); // 将token从localStorage中取出并添加到请求头的Authorization字段上
//         return config; // 返回请求对象，继续向服务器发起请求
//       }, err => Promise.reject(err));
//       // 设置响应拦截器
//       instance.interceptors.response.use(res => res.data, err => Promise.reject(err));
     
//       return instance(config);
//     }
//   }
//   export default new Request();