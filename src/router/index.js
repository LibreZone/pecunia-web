import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '@/app'

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
