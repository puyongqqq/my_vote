import axios from 'axios';
import router from 'vue-router';
import { Toast } from "vant";

// import qs from 'qs';

var $axios = axios.create({
    baseURL: 'http://127.0.0.1:8888/',
    eout: 6000,
    // headers: {'Authorization': localStorage.getItem('vote_token')},
});


$axios.interceptors.request.use(
    config => {
        // if (config.method !== 'get' && config.headers['Content-Type'] !== 'application/x-www-form-urlencoded') {
        //     config.data = JSON.stringify(config.data);
        // }
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        config.headers['Authorization'] = localStorage.getExpire('vote_token');
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

$axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem("vote_token");
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
                    break;
                case 403:

                    Toast.fail({
                        message: "无权访问",
                        icon: "cross",
                      });
                    break;
            }
        }
        return Promise.reject(error)   // 返回接口返回的错误信息
    }
);


export default {
    $axios
}
