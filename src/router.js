import Vue from 'Vue'
import Router from 'vue-router';

import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import VueRouter from 'vue-router';

// Vue.use(Router);

// const routes = [
//     {
//         path: '/',
//         redirect: '/',
//         component: Index,
//         meta: { requireAuth: true }
//     },
//     {
//         path: '/index',
//         redirect: '/',
//         component: Index,
//         meta: { requireAuth: true }
//     },
//     {
//         path: '/login',
//         name: 'login',
//         component: Login,
//         meta: {
//             title: '登录 | 投票系统'
//         }
//     },
//     {
//         name: 'register',
//         component: Register,
//         meta: {
//             title: '注册 | 投票系统'
//         }
//     }
// ];

// // add route path
// routes.forEach(route => {
//     route.path = route.path || '/' + (route.name || '');
// });

// const router = new Router({ routes });

// router.beforeEach((to, from, next) => {
//     const title = to.meta && to.meta.title;
//     if (title) {
//         document.title = title;
//     }
//     if (to.matched.some(res => res.meta.requireAuth)) { // 验证是否需要登陆 
//         if (sessionStorage.getItem('sid')) { // 查询本地存储信息是否已经登陆 
//             next();
//         } else {
//             next({
//                 path: '/login', // 未登录则跳转至login页面 
//                 query: { redirect: to.fullPath } // 登陆成功后回到当前页面，这里传值给login页面，to.fullPath为当前点击的页面 
//             });
//         }
//     } else {
//         next();
//     }


// });

// export {
//     router
// };

const router = new VueRouter({
    routers: [
        {
            path: '/',
            redirect: '/',
            component: Index,
            meta: { requireAuth: true }
        },
        {
            path: '/index',
            redirect: '/',
            component: Index,
            meta: { requireAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '登录 | 投票系统'
            }
        },
        {
            name: 'register',
            component: Register,
            meta: {
                title: '注册 | 投票系统'
            }
        }
    ]
})