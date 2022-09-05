import Vue from 'vue'
import Router from 'vue-router'
import routeAuth from './auth'
import routeAdmin from './admin'
import routeTeacherClassList from './teacher/home'
import routeTeacherClassRoom from './teacher/classRoom'
import routeStudentHome from './student/home'
import routeStudentClassRoom from './student/classRoom'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { ...routeAuth },
    { ...routeAdmin },
    { ...routeTeacherClassList },
    { ...routeTeacherClassRoom },
    { ...routeStudentHome },
    { ...routeStudentClassRoom },
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
