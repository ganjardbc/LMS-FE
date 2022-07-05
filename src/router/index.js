import Vue from 'vue'
import Router from 'vue-router'
import routeAuth from './auth'
import routeAdmin from './admin'
import routeTeacher from './teacher'
import routeStudent from './student'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { ...routeAuth },
    { ...routeAdmin },
    { ...routeTeacher },
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
