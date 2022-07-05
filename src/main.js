// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import VCalendar from "v-calendar"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/display.css'
import "./assets/sass/app.css"
import "./assets/icons/fontawesome/css/all.min.css"

// Vue.use(VCalendar)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  render: (h) => h(App)
  // components: { App },
  // template: '<App/>'
})
