//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)

import Index from './components/Index.vue'

import Login from './components/Login.vue'

import Register from './components/Register.vue'

//定义routes路由的集合，数组类型
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {
        path: '/index',
        component: Index,
        meta: {
            title: '首页 | 投票系统'
        }
    },
    {
        path: "/login",
        component: Login,
        meta: {
            title: '登录 | 投票系统'
        }
    },
    //可以配置重定向
    {
        path: '',
        redirect: "index"
    },
    {
        path: '/register',
        component: Register,
        meta: {
            title: '注册 | 投票系统'
        }
    }
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    //ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router