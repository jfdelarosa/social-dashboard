import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/reset.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import firebase from './firebase'
import VueFire from 'vuefire'
import axios from "axios"

let instance = axios.create({
  baseURL: (process.env.NODE_ENV=="development" ? "http://localhost:8888/social-api/" : "https://jf-social-api.herokuapp.com/")
})
Vue.prototype.$http = instance

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI)
Vue.use(VueFire)

library.add(fab)
locale.use(lang)

Vue.config.productionTip = false

import sidebarLayout from './layouts/Sidebar'
import simpleLayout from './layouts/Simple'

Vue.component("sidebar-layout", sidebarLayout)
Vue.component("simple-layout", simpleLayout)

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})