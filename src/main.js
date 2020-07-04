import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import 'vant/lib/button/style'
import '@vant/touch-emulator'

Vue.config.productionTip = false

import { Form, Field , Button, Tabbar, TabbarItem, Image as VanImage, NavBar, List, Card, Dialog, Cell, CellGroup, PullRefresh, Tag, Slider, Switch, Popup } from 'vant';
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(List);
Vue.use(Card);
Vue.use(Dialog);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(PullRefresh);
Vue.use(Tag);
Vue.use(Slider);
Vue.use(Switch);
Vue.use(Popup);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

