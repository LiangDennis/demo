import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import axios from 'axios'
import '../mock/mock'

import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUI);

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
