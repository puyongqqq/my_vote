import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import 'vant/lib/button/style'
import '@vant/touch-emulator'

Vue.config.productionTip = false

import { Form, Field , Button, Toast, Tabbar, TabbarItem, Image as VanImage } from 'vant';
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(VanImage);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

