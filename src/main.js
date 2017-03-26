// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  data: { data: '' },
  template: '<App/>',
  components: { App },
  router
})

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
