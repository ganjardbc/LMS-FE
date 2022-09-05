import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

// teacher
import teacherDashboard from './teacher/dashboard'
import teacherClassRoom from './teacher/calssRoom'
import teacherSubject from './teacher/subject'
import teacherMatter from './teacher/matter'
import teacherStudent from './teacher/student'

// studnet
import studentDashboard from './student/dashboard'
import studentClassRoom from './student/classRoom'
import studentMatter from './student/matter'
import studentList from './student/student'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    // teacher
    teacherDashboard,
    teacherClassRoom,
    teacherSubject,
    teacherMatter,
    teacherStudent,

    // student
    studentDashboard,
    studentClassRoom,
    studentMatter,
    studentList,
  }
})