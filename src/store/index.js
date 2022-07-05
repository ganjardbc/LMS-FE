import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import classRoom from './calssRoom'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    classRoom
  }
})