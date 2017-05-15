import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '@/app'
import beforeEach from './beforeEach'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach(beforeEach)

export default router
