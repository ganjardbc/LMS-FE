import Vue from 'vue'
import Router from 'vue-router'
import routeAuth from './auth'
import routeAdmin from './admin'
import routeClassList from './classList'
import routeClassRoom from './classRoom'
import routeStudent from './student'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { ...routeAuth },
    { ...routeAdmin },
    { ...routeClassList },
    { ...routeClassRoom },
    { ...routeStudent }
  ],
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition
      } else {
          return {x: 0, y: 0}
      }
  }
})
