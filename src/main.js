import Vue from 'vue'
import App from './App.vue'
import 'vant/lib/button/style'
import '@vant/touch-emulator'

import { Form, Field , Button, Toast, Tabbar, TabbarItem } from 'vant';

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);

// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
