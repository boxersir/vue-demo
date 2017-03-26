import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import projpage from '@/components/projpage'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/projpage',
      name: 'projpage',
      component: projpage
    }
  ]
})
