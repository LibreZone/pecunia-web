import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'vue-nprogress'

Vue.use(NProgress)
const nprogress = new NProgress({ parent: '.nprogress-container' })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  nprogress,
  template: '<App/>',
  components: { App }
})
