import Vue from 'vue'
import App from './App.vue'
import {router} from './router';
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('../src/assets/img/card/1.jpg')
})

import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
