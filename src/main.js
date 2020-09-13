import Vue from 'vue'
import App from './App.vue'
import {router} from './router';
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('../src/assets/img/card/1.jpg')
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
