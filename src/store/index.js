import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import teacherDashboard from './teacher/dashboard'
import teacherClassRoom from './teacher/calssRoom'
import teacherSubject from './teacher/subject'
import teacherMatter from './teacher/matter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    teacherDashboard,
    teacherClassRoom,
    teacherSubject,
    teacherMatter
  }
})