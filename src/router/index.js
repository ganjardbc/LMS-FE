import Vue from 'vue'
import Router from 'vue-router'
import routeAuth from './auth'
import routeAdmin from './admin'
import routeTeacher from './teacher'
import routeStudent from './student'

Vue.use(Router)

export default new Router({
  routes: [
    { ...routeAuth },
    { ...routeAdmin },
    { ...routeTeacher },
    { ...routeStudent }
  ]
})
